import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { learnArticles } from "../lib/learnArticles";
import { pageMeta } from "../lib/seo";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FadeIn } from "../components/motion/FadeIn";
import { Dot } from "../components/brand/Dot";

const TITLE = "Learn — Email Marketing Guides for Ecommerce";
const DESCRIPTION =
  "Everything you need to know about email marketing, Klaviyo, and growing your ecommerce store through strategic automation.";

export const meta = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
  ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/learn" }),
];

// Group articles by category
const CATEGORIES = [
  "Basics",
  "Klaviyo",
  "Shopify",
  "Flows",
  "Strategy",
  "Technical",
  "Copywriting",
  "Growth",
];

function ArticleCard({
  article,
}: {
  article: (typeof learnArticles)[number];
}) {
  return (
    <Link
      to={`/learn/${article.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-carbon p-6 md:p-8 transition-all hover:border-white/20 hover:bg-carbon/80"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
          <Dot className="w-1.5 h-1.5" />
          {article.category}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="text-base md:text-lg font-display tracking-display text-white group-hover:text-volt transition-colors">
          {article.title}
        </h3>
        <p className="mt-3 text-sm text-white/55 leading-relaxed">
          {article.description}
        </p>
      </div>
      <div className="flex items-center gap-2 text-white/45 group-hover:text-white/70 transition-colors pt-2">
        <span className="text-xs font-medium uppercase tracking-[0.1em]">Read</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}

function CategorySection({
  category,
  articles,
}: {
  category: string;
  articles: (typeof learnArticles)[number][];
}) {
  return (
    <section className="mb-20">
      <FadeIn>
        <div className="flex items-center gap-3 mb-8">
          <Dot />
          <h2 className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
            {category}
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export default function LearnListingPage() {
  return (
    <div className="bg-ink text-white">
      <Nav variant="solid" offer="general" />
      <main>
        {/* Hero */}
        <section className="px-6 md:px-10 pt-20 md:pt-28 pb-16">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <div className="flex items-center gap-2.5 rounded-full border border-white/10 bg-carbon px-3.5 py-1.5 text-[12px] text-white/60 mb-6 w-fit">
                <Dot />
                Knowledge base
              </div>
              <h1 className="font-display text-4xl md:text-5xl tracking-display font-semibold mb-6">
                Everything you need to know about email marketing
              </h1>
              <p className="text-lg text-white/55 leading-relaxed max-w-2xl">
                Guides, strategies, and tactics for building a world-class email program. From Klaviyo setup to advanced automations, we cover it all.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Articles by category */}
        <section className="px-6 md:px-10 pb-24">
          <div className="mx-auto max-w-6xl">
            {CATEGORIES.map((category) => {
              const categoryArticles = learnArticles.filter(
                (a) => a.category === category
              );
              if (categoryArticles.length === 0) return null;
              return (
                <CategorySection
                  key={category}
                  category={category}
                  articles={categoryArticles}
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
