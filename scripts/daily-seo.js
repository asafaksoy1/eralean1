#!/usr/bin/env node
/**
 * Daily SEO article pipeline for eralean.com
 *
 * Step A — research: one Claude call with web search enabled. Finds a current,
 *   specific, long-tail topic a UK ecommerce brand owner would search for,
 *   relevant to Klaviyo / email marketing. Excludes already-published topics.
 *
 * Step B — write: a second Claude call that receives the actual research
 *   findings from Step A and outputs a complete, valid .tsx React component
 *   matching the existing ArticleLayout structure exactly.
 *
 * Then:
 *   - Writes the component to src/pages/learn/
 *   - Registers the route in src/routes.ts
 *   - Adds the path to react-router.config.ts prerender array
 *   - Adds the URL to public/sitemap.xml
 *   - Runs `npm run typecheck` — aborts (no PR) if it fails
 *   - Records the topic in scripts/published-topics.json
 *   - Writes article_slug / article_title to $GITHUB_OUTPUT for the workflow
 *
 * Models (read from https://docs.anthropic.com/en/docs/about-claude/models/overview):
 *   claude-opus-4-8  — latest production model as of 2026-07
 *
 * Web search tool (read from https://docs.anthropic.com/en/docs/build-with-claude/tool-use/web-search-tool):
 *   web_search_20250305 — basic web search, works with direct callers, no extra
 *   code-execution plumbing required.
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync, existsSync, appendFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ── Constants ────────────────────────────────────────────────────────────────

const MODEL = "claude-opus-4-8";
const WEB_SEARCH_TOOL = "web_search_20250305";

const TOPICS_FILE = join(__dirname, "published-topics.json");
const ROUTES_FILE = join(ROOT, "src", "routes.ts");
const CONFIG_FILE = join(ROOT, "react-router.config.ts");
const SITEMAP_FILE = join(ROOT, "public", "sitemap.xml");
const LEARN_FILE = join(ROOT, "src", "lib", "learnArticles.ts");
const ARTICLES_DIR = join(ROOT, "src", "pages", "learn");

// Categories the /learn listing page renders (its CATEGORIES array). An entry
// with any other category would be silently filtered off the page.
const LEARN_CATEGORIES = [
  "Basics",
  "Klaviyo",
  "Shopify",
  "Flows",
  "Strategy",
  "Technical",
  "Copywriting",
  "Growth",
];

// Hardcoded titles for the three articles that existed before this pipeline.
// Used to populate the RELATED array in generated articles.
const SEED_ARTICLES = [
  { slug: "what-is-klaviyo", title: "What Is Klaviyo? A Guide for Ecommerce Brands" },
  { slug: "welcome-email-series", title: "How to build a welcome email series that converts" },
  { slug: "abandoned-cart-email", title: "Abandoned cart emails: setup and best practices" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function loadPublishedTopics() {
  if (!existsSync(TOPICS_FILE)) return { published: [] };
  return JSON.parse(readFileSync(TOPICS_FILE, "utf8"));
}

function savePublishedTopics(data) {
  writeFileSync(TOPICS_FILE, JSON.stringify(data, null, 2) + "\n");
}

/** Extract all text blocks from a Claude content array and concatenate them. */
function extractText(content) {
  return content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n")
    .trim();
}

/** "some-slug-here" → "SomeSlugHere" */
function toPascalCase(slug) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");
}

// ── Step A: research ─────────────────────────────────────────────────────────

async function stepA(client, publishedSlugs) {
  console.log("▶ Step A — researching topic with web search…");

  const exclude =
    publishedSlugs.length > 0
      ? publishedSlugs.join(", ")
      : "(none yet — all topics are available)";

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 4096,
    tools: [{ type: WEB_SEARCH_TOOL, name: "web_search", max_uses: 5 }],
    messages: [
      {
        role: "user",
        content: `You are an SEO researcher for EraLean, a UK digital agency that manages Klaviyo email marketing for ecommerce brands.

Search the web to find one current, specific, long-tail topic that a UK ecommerce brand owner would search for. The topic must be:
- About Klaviyo or ecommerce email marketing practice
- Practical and actionable (e.g. "how to set up Klaviyo browse abandonment flow", "Klaviyo open rate benchmarks UK 2024", "how to segment Klaviyo list by purchase frequency")
- A real long-tail search query with genuine intent
- NOT already covered by these slugs: ${exclude}

Research the topic on the web. Find specific statistics, best-practice details, any recent updates, and practical implementation advice.

Return ONLY a JSON object — no markdown, no preamble, no explanation — using this exact schema:

{
  "slug": "url-slug-no-trailing-slash",
  "title": "Article Title in Title Case",
  "description": "One sentence meta description, under 155 characters.",
  "category": "Klaviyo",
  "research_summary": "Four to six paragraphs of research findings. Include specific numbers, percentages, benchmark data, and practical steps found during your search. This text is the factual foundation for the article — be specific, not vague."
}`,
      },
    ],
  });

  const raw = extractText(response.content);

  // Extract the JSON object (greedy match from first { to last })
  const match = raw.match(/\{[\s\S]*\}/);
  if (!match) {
    throw new Error(
      `Step A: could not extract JSON from Claude response.\n\nFull response:\n${raw}`
    );
  }

  const data = JSON.parse(match[0]);

  for (const field of ["slug", "title", "description", "category", "research_summary"]) {
    if (!data[field]) throw new Error(`Step A: missing field "${field}" in response JSON.`);
  }

  if (publishedSlugs.includes(data.slug)) {
    throw new Error(
      `Step A: Claude chose slug "${data.slug}" which is already published. Re-run the workflow.`
    );
  }

  console.log(`  Topic  : ${data.title}`);
  console.log(`  Slug   : /learn/${data.slug}`);
  return data;
}

// ── Step B: write ─────────────────────────────────────────────────────────────

async function stepB(client, topic, allArticles) {
  console.log("▶ Step B — writing article…");

  const componentName = toPascalCase(topic.slug) + "Page";

  // Pick up to 2 related articles (never self)
  const related = allArticles.filter((a) => a.slug !== topic.slug).slice(0, 2);

  const prompt = `You are writing a long-form SEO article for EraLean (eralean.com), a UK digital agency specialising in Klaviyo email marketing for ecommerce brands.

RESEARCH FINDINGS — base the article on this, not on training data:
${topic.research_summary}

BRIEF:
  Title       : ${topic.title}
  Slug        : ${topic.slug}
  Description : ${topic.description}
  Category    : ${topic.category}
  Audience    : UK ecommerce brand owners
  Length      : 1,500–2,500 words of body copy across 7–10 sections
  Tone        : Direct. Evidence-led. No filler. Confident, never hyped. End on a point.
  Spelling    : UK throughout (optimise, colour, centre, realise, serialise…)
  Currency    : £ only, never $

OUTPUT REQUIREMENTS:
- Output the raw .tsx file and NOTHING else — no markdown code fences, no explanation before or after.
- The file must start with the import statement and end with the closing brace of the default export.
- It must be syntactically valid TypeScript/React — the CI will run "npm run typecheck" and reject malformed output.

TEMPLATE — follow this structure exactly (imports, constant names, prop names, component helpers):

import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "${topic.title}";
const DESCRIPTION = "${topic.description}";
const CATEGORY = "${topic.category}";
const SLUG = "${topic.slug}";

export const meta = () =>
  getArticleMeta({ title: TITLE, description: DESCRIPTION, slug: SLUG });

const RELATED = ${JSON.stringify(related, null, 2)};

const SECTIONS = [
  // ONE entry per major section: { id: "kebab-case-id", label: "Human label" }
  // The TableOfContents below maps over this — fill it in to match your sections.
];

function TableOfContents() {
  return (
    <nav aria-label="Table of contents" className="mt-10 rounded-2xl bg-carbon p-6 md:p-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-ash">
        In this guide
      </p>
      <ArticleList>
        {SECTIONS.map((section) => (
          <ArticleListItem key={section.id}>
            <a href={\`#\${section.id}\`}>{section.label}</a>
          </ArticleListItem>
        ))}
      </ArticleList>
    </nav>
  );
}

export default function ${componentName}() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      {/* 1–2 intro paragraphs with no heading. Hook the reader, state the problem. */}

      <TableOfContents />

      {/*
        For each section:

          <div id="section-id">
            <ArticleH2>Section heading</ArticleH2>
          </div>
          <p>Body copy…</p>
          <ArticleH3>Sub-heading if needed</ArticleH3>
          <p>More copy…</p>
          <ArticleList>
            <ArticleListItem><strong>Term.</strong> Explanation.</ArticleListItem>
          </ArticleList>
          <ArticleQuote>A stand-out insight as a pull-quote.</ArticleQuote>

        Never use raw <h2>, <h3>, <ul>, <li>, or <blockquote>.
        Never use "utilise" — write "use".
        No filler openers: "In today's landscape", "It's important to note", etc.
        End the final section with a confident conclusion — no "In conclusion:" label.
      */}
    </ArticleLayout>
  );
}

Fill in the SECTIONS array, TableOfContents, and the full article body. Replace all placeholder comments with real content. Do NOT output the template comments in the final file.`;

  const response = await client.messages.create({
    model: MODEL,
    max_tokens: 8192,
    messages: [{ role: "user", content: prompt }],
  });

  let tsx = extractText(response.content);

  // Strip any accidental markdown fences Claude might have added
  tsx = tsx.replace(/^```(?:tsx?|jsx?)?\n?/im, "").replace(/\n?```\s*$/im, "").trim();

  if (!tsx.startsWith("import")) {
    throw new Error(
      `Step B: output does not look like a .tsx file.\n\nFirst 300 characters:\n${tsx.slice(0, 300)}`
    );
  }

  // Basic sanity: ensure the component is present
  if (!tsx.includes(`export default function ${componentName}`)) {
    throw new Error(
      `Step B: expected "export default function ${componentName}" in output but did not find it.`
    );
  }

  console.log(`  Component: ${componentName}`);
  return tsx;
}

// ── File mutations ────────────────────────────────────────────────────────────

function writeArticle(slug, tsx) {
  const filename = toPascalCase(slug) + ".tsx";
  const filepath = join(ARTICLES_DIR, filename);
  writeFileSync(filepath, tsx + "\n");
  console.log(`  Written  : src/pages/learn/${filename}`);
  return filename;
}

function updateRoutes(slug, filename) {
  let content = readFileSync(ROUTES_FILE, "utf8");

  if (content.includes(`"learn/${slug}"`)) {
    console.log("  routes.ts: already contains this route — skipping.");
    return;
  }

  const newLine = `  route("learn/${slug}", "pages/learn/${filename}"),`;

  // Insert before the catch-all route("*", "pages/NotFound.tsx") which is always last.
  // The catch-all takes two args, so match "route(\"*\"," not "route(\"*\")"
  content = content.replace(/^(\s*route\("\*",)/m, `${newLine}\n$1`);

  writeFileSync(ROUTES_FILE, content);
  console.log("  Updated  : src/routes.ts");
}

function updateConfig(slug) {
  let content = readFileSync(CONFIG_FILE, "utf8");

  const newPath = `"/learn/${slug}"`;

  if (content.includes(newPath)) {
    console.log("  react-router.config.ts: already contains this path — skipping.");
    return;
  }

  // Insert just before the closing `  ],` of the prerender array.
  // That `  ],` is unique in this file (only the prerender array is a list).
  content = content.replace(/^(  \],)$/m, `    ${newPath},\n$1`);

  writeFileSync(CONFIG_FILE, content);
  console.log("  Updated  : react-router.config.ts");
}

function updateSitemap(slug) {
  let content = readFileSync(SITEMAP_FILE, "utf8");

  const url = `https://www.eralean.com/learn/${slug}`;

  if (content.includes(url)) {
    console.log("  sitemap.xml: already contains this URL — skipping.");
    return;
  }

  content = content.replace(
    "</urlset>",
    `  <url>\n    <loc>${url}</loc>\n  </url>\n</urlset>`
  );

  writeFileSync(SITEMAP_FILE, content);
  console.log("  Updated  : public/sitemap.xml");
}

function updateLearnArticles(topic) {
  let content = readFileSync(LEARN_FILE, "utf8");

  if (content.includes(`"${topic.slug}"`)) {
    console.log("  learnArticles.ts: already contains this slug — skipping.");
    return;
  }

  const category = LEARN_CATEGORIES.includes(topic.category)
    ? topic.category
    : "Klaviyo";

  const entry =
    `  {\n` +
    `    slug: ${JSON.stringify(topic.slug)},\n` +
    `    title: ${JSON.stringify(topic.title)},\n` +
    `    description: ${JSON.stringify(topic.description)},\n` +
    `    category: ${JSON.stringify(category)},\n` +
    `  },\n`;

  // Insert before the closing `];` of the learnArticles array.
  content = content.replace(/^\];$/m, `${entry}];`);

  writeFileSync(LEARN_FILE, content);
  console.log("  Updated  : src/lib/learnArticles.ts");
}

// ── Typecheck ─────────────────────────────────────────────────────────────────

function runTypecheck() {
  console.log("▶ Running typecheck…");
  try {
    execSync("npm run typecheck", { cwd: ROOT, stdio: "inherit" });
    console.log("  Typecheck passed.");
  } catch {
    throw new Error(
      "Typecheck failed — the generated TSX has type errors. " +
        "No PR will be opened. Check the logs above for details."
    );
  }
}

// ── GitHub Actions output ─────────────────────────────────────────────────────

function writeGithubOutput(slug, title) {
  const outputFile = process.env.GITHUB_OUTPUT;
  if (!outputFile) return;
  // Multiline-safe: use a heredoc-style delimiter for the title
  appendFileSync(outputFile, `article_slug=${slug}\n`);
  // Titles may contain quotes/special chars — sanitise for a single-line value
  const safeTitle = title.replace(/["\n\r]/g, " ").trim();
  appendFileSync(outputFile, `article_title=${safeTitle}\n`);
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY is not set.");
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const topicsData = loadPublishedTopics();
  const publishedSlugs = topicsData.published.map((t) => t.slug);

  // Build the full article list for RELATED links: seeds + any already published
  // by this pipeline (dedup by slug)
  const slugsSeen = new Set();
  const allArticles = [];
  for (const a of [...SEED_ARTICLES, ...topicsData.published]) {
    if (!slugsSeen.has(a.slug)) {
      slugsSeen.add(a.slug);
      allArticles.push({ slug: a.slug, title: a.title });
    }
  }

  // ── Step A ────────────────────────────────────────────────────────────────
  const topic = await stepA(client, publishedSlugs);

  // ── Step B ────────────────────────────────────────────────────────────────
  const tsx = await stepB(client, topic, allArticles);

  // ── Write files ───────────────────────────────────────────────────────────
  const filename = writeArticle(topic.slug, tsx);
  updateRoutes(topic.slug, filename);
  updateConfig(topic.slug);
  updateSitemap(topic.slug);
  updateLearnArticles(topic);

  // ── Validate ──────────────────────────────────────────────────────────────
  runTypecheck();

  // ── Record ────────────────────────────────────────────────────────────────
  topicsData.published.push({
    slug: topic.slug,
    title: topic.title,
    date: new Date().toISOString().slice(0, 10),
  });
  savePublishedTopics(topicsData);

  // ── Output for GitHub Actions ─────────────────────────────────────────────
  writeGithubOutput(topic.slug, topic.title);

  console.log(`\n✓ Done — /learn/${topic.slug}\n  "${topic.title}"`);
}

main().catch((err) => {
  console.error("\n✗ Pipeline failed:", err.message || err);
  process.exit(1);
});
