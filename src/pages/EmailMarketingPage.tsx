import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { BOOKING_URL, WHATSAPP } from "../lib/constants";
import { trackLead } from "../lib/analytics";
import { AuditForm } from "../components/AuditForm";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { FadeIn } from "../components/motion/FadeIn";
import { Dot } from "../components/brand/Dot";
import { learnArticles } from "../lib/learnArticles";
import { pageMeta, serviceSchema, breadcrumbSchema } from "../lib/seo";

// Only articles that actually have a prerendered route (see src/routes.ts) —
// learnArticles.ts lists more slugs than routes exist for; linking the rest
// would 404.
const PUBLISHED_LEARN_SLUGS = new Set([
  "what-is-klaviyo",
  "welcome-email-series",
  "abandoned-cart-email",
]);
const publishedLearnArticles = learnArticles.filter((a) =>
  PUBLISHED_LEARN_SLUGS.has(a.slug)
);

const OFFER = "email";
const TITLE = "Ecommerce Email Marketing — EraLean";
const DESCRIPTION =
  "Done-for-you ecommerce email marketing — Klaviyo flows and campaigns that turn subscribers into repeat customers and recover revenue on autopilot.";
const PATH = "/services/email-marketing";

export const meta = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
  ...pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
  serviceSchema({ name: "Ecommerce Email Marketing", description: DESCRIPTION, path: PATH }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Email Marketing", path: PATH },
  ]),
];

function Marker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
      <Dot />
      {children}
    </div>
  );
}

export default function EmailMarketingPage() {
  return (
    <div className="bg-ink text-white">
      <Nav variant="solid" offer={OFFER} />
      <main>
        <Hero />
        <Included />
        <Results />
        <BuildSystem />
        <Showcase />
        <Pricing />
        <Reviews />
        <AuditForm variant="embed" offer={OFFER} />
        <Learn />
        <ClosingCTA />
        <Disclaimer />
      </main>
      <Footer />
      <FloatingWhatsApp offer={OFFER} />
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────── */

function Hero() {
  const stats = [
    { value: "20.4%", label: "Of total revenue from email" },
    { value: "£128K", label: "Email revenue in 60 days" },
    { value: "+55%", label: "Revenue vs prev. period" },
    { value: "£0", label: "Setup fee" },
  ];

  return (
    <section className="px-6 md:px-10 pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Service · Email Marketing</Marker>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h1 className="mt-7 max-w-4xl font-display tracking-display font-semibold text-white text-[12vw] leading-[0.95] sm:text-6xl md:text-[5rem]">
            Email that actually prints money<span className="text-volt">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mt-7 max-w-2xl text-lg text-white/60">
            Already on Klaviyo or Mailchimp but it's not pulling its weight? I
            rebuild your flows, campaigns, and segmentation from scratch and run
            the whole channel for you — so email becomes your highest-ROI revenue
            source, not an afterthought.
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead(OFFER)}
              className="group inline-flex items-center gap-2 rounded-full bg-volt px-7 py-3.5 font-medium text-black transition-colors hover:bg-[#a8e600]"
            >
              Book a call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead(OFFER)}
              className="text-sm font-light text-white/60 transition-colors hover:text-white"
            >
              Message on WhatsApp
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.24}>
          <div className="mt-16 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink px-6 py-7">
                <div className="font-display tracking-display text-3xl md:text-4xl text-white">
                  {s.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-white/45">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── What's included ──────────────────────────────────────────────────── */

function Included() {
  const features = [
    { title: "Email automation flows", description: "Welcome series, abandoned cart, post-purchase, win-back, browse abandonment — every revenue-driving flow set up and optimised." },
    { title: "Weekly campaigns", description: "Planned, designed, written, and sent. New campaign every week to keep your list engaged and buying." },
    { title: "Smart segmentation", description: "Segment your list by behaviour, value, and engagement so the right message hits the right person at the right time." },
    { title: "Beautiful email design", description: "Branded email templates designed to match your business — mobile-first, click-friendly, conversion-focused." },
    { title: "List growth strategy", description: "Pop-ups, exit-intent forms, lead magnets, signup incentives — built and optimised to grow your list every month." },
    { title: "A/B testing", description: "Subject lines, send times, copy variations, CTAs — continuously tested and improved to push open and click rates higher." },
    { title: "Deliverability monitoring", description: "Domain authentication, list cleaning, sender reputation management — your emails land in inboxes, not spam." },
    { title: "Monthly reporting", description: "Clear monthly reports showing revenue from email, open rates, click rates, list growth, and what's next." },
    { title: "Direct WhatsApp support", description: "Message Asaf any time — no ticketing systems, no waiting." },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>What's included</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Everything you need to scale with email<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-white/55">
            Complete email marketing setup and management — flows, campaigns,
            segmentation, full account management. One flat fee. No extras.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={(i % 3) * 0.06} className="bg-ink">
              <div className="h-full p-8">
                <div className="flex items-center gap-2 text-sm text-white/45">
                  <Dot /> {`0${i + 1}`}
                </div>
                <h3 className="mt-6 font-display tracking-display text-xl text-white">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {f.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Results ──────────────────────────────────────────────────────────── */

function Results() {
  const metrics = [
    {
      metric: "£262K",
      label: "Lifetime revenue, one welcome flow",
      context: "Klaviyo — ecommerce brand, UK",
    },
    {
      metric: "38.7%",
      label: "Average open rate",
      context: "Welcome flow — 71,059 emails delivered",
    },
    {
      metric: "4.1%",
      label: "Click rate",
      context: "2,893 clicks — well above industry average",
    },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Results</Marker>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
          {metrics.map((m, i) => (
            <FadeIn key={m.metric} delay={(i % 3) * 0.06} className="bg-carbon">
              <div className="h-full p-8 md:p-9">
                <div className="font-display tracking-display text-volt text-5xl md:text-6xl">
                  {m.metric}
                </div>
                <div className="mt-5 font-sans font-light text-white">
                  {m.label}
                </div>
                <div className="mt-2 font-sans font-light text-sm text-[#8C8C93]">
                  {m.context}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How we build it ──────────────────────────────────────────────────── */

function BuildSystem() {
  const flows = [
    {
      title: "Welcome flow",
      eyebrow: "Day 0",
      description:
        "First impression, first purchase. Conditional split — new vs returning buyer. 3-email sequence with offer escalation.",
      stats: ["38.7% open rate", "£262K lifetime revenue"],
    },
    {
      title: "Abandoned checkout",
      eyebrow: "Day 1–3",
      description:
        "Four variants based on buyer history. First-time buyers get a discount ladder. Returning buyers get a softer nudge.",
      stats: ["30.6% open rate", "Split by purchase history"],
    },
    {
      title: "Post-purchase",
      eyebrow: "Day 7+",
      description:
        "Review request, cross-sell, loyalty sequence. Turns one-time buyers into repeat customers.",
      stats: ["Fully automated", "Compounds over time"],
    },
  ];

  return (
    <section className="border-t border-white/10 bg-carbon px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>How we build it</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            A system, not just emails<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-xl font-sans font-light text-[#8C8C93]">
            Every flow is segmented, sequenced, and built to compound.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {flows.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-white/10 bg-ink p-8">
                <div className="text-xs uppercase tracking-widest text-[#8C8C93]">
                  {f.eyebrow}
                </div>
                <h3 className="mt-3 font-display tracking-display text-xl text-white">
                  {f.title}
                </h3>
                <p className="mt-4 font-sans font-light text-sm leading-relaxed text-white/60">
                  {f.description}
                </p>
                <div className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                  {f.stats.map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2.5 text-sm text-white/75"
                    >
                      <Dot /> {s}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.1}>
          <p className="mt-10 font-sans font-light text-xs text-[#8C8C93]">
            Results shown are from live client flows. Your results will vary
            based on list size, product, and market.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Showcase ─────────────────────────────────────────────────────────── */

function Showcase() {
  const pieces = [
    { tag: "Campaign", meta: "Weekly send", body: "Segmented, on-brand campaigns with one clear CTA — designed to drive revenue without fatiguing your list." },
    { tag: "Automation flow", meta: "Abandoned cart", body: "Multi-step automations that recover lost sales and run 24/7 — built once, optimised continuously." },
    { tag: "Sign-up form", meta: "Pop-up", body: "High-converting pop-ups and exit-intent forms that grow your list with buyers, not browsers." },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>The work</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            What I build, end to end<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-white/55">
            The anatomy of a high-performing email channel — campaigns, automation
            flows, and list-growth forms. Every piece branded, mobile-first, and
            built to convert. Live examples from your own account shared on the call.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
          {pieces.map((p, i) => (
            <FadeIn key={p.tag} delay={i * 0.07} className="bg-ink">
              <div className="h-full p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-white/45">
                    <Dot /> {p.tag}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-white/35">{p.meta}</span>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-white/60">{p.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ──────────────────────────────────────────────────────────── */

function Pricing() {
  const breakdown = [
    { label: "Setup / onboarding fee", value: "Free", strike: "£500" },
    { label: "Email automation flows (5+)", value: "Included" },
    { label: "Weekly campaign sends", value: "Included" },
    { label: "List segmentation", value: "Included" },
    { label: "Email design & copywriting", value: "Included" },
    { label: "A/B testing", value: "Included" },
    { label: "Deliverability monitoring", value: "Included" },
    { label: "Monthly performance report", value: "Included" },
    { label: "Hidden fees / extra charges", value: "None. Ever." },
  ];
  const included = [
    "Klaviyo or Mailchimp",
    "All flows built from scratch",
    "4 weekly campaigns / month",
    "Smart list segmentation",
    "Branded email design",
    "A/B testing built in",
    "Monthly results report",
    "Direct WhatsApp support",
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Marker>Pricing</Marker>
          <h2 className="mt-6 font-display tracking-display text-4xl md:text-5xl text-white">
            Simple. Transparent. No fluff<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/55">
            One flat fee. We manage your entire email channel. You count the revenue.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-carbon p-9 md:p-12">
            <div className="text-xs uppercase tracking-widest text-white/45">
              Done-for-you email marketing
            </div>
            <div className="mt-3 flex items-end gap-2">
              <span className="font-display tracking-display text-6xl md:text-7xl text-white">
                £490
              </span>
              <span className="mb-3 text-lg text-white/45">/ month</span>
            </div>
            <p className="mt-6 max-w-md text-white/55">
              Full Klaviyo or Mailchimp management. Flows, campaigns, segmentation,
              design, reporting — all done.
            </p>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
              {breakdown.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/60">{row.label}</span>
                  <span className="flex items-center gap-2">
                    {row.strike && <span className="text-white/30 line-through">{row.strike}</span>}
                    <span className={row.value === "None. Ever." ? "text-volt" : "text-white"}>
                      {row.value}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {included.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-white/70">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                  {f}
                </div>
              ))}
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead(OFFER)}
              className="group mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-volt px-7 py-3.5 font-medium text-black transition-colors hover:bg-[#a8e600]"
            >
              Book your free strategy call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="mt-4 text-center text-xs uppercase tracking-widest text-white/40">
              No contract · Cancel any time · Live in 7 days
            </div>
            <div className="mt-2 text-center text-xs text-volt">
              First month not happy? Cancel and pay nothing further — no lock-in, no risk.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Reviews ──────────────────────────────────────────────────────────── */

function Reviews() {
  const t = [
    { q: "Our email list went from a dead afterthought to 30% of our monthly revenue. Asaf rebuilt every flow from scratch and the difference is night and day.", a: "Emma R.", r: "Skincare brand owner, London" },
    { q: "We finally have a proper welcome flow, abandoned cart, and weekly campaigns running. Email now does the work of an extra salesperson — without the salary.", a: "Marcus T.", r: "E-commerce founder, Manchester" },
    { q: "I was paying another agency £2k a month for email and getting nothing. Asaf charges less and we 3x'd email revenue in two months. Real, transparent, fast.", a: "Olivia W.", r: "Fashion brand owner, Bristol" },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>What email clients say</Marker>
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.map((x, i) => (
            <FadeIn key={x.a} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-white/10 bg-carbon p-8">
                <p className="leading-snug text-white/85">{x.q}</p>
                <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-6 text-sm">
                  <Dot />
                  <span className="text-white">{x.a}</span>
                  <span className="text-white/45">· {x.r}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Learn ────────────────────────────────────────────────────────────── */

function Learn() {
  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Learn</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Email marketing, explained<span className="text-volt">.</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publishedLearnArticles.map((article, i) => (
            <FadeIn key={article.slug} delay={(i % 3) * 0.06}>
              <a
                href={`/learn/${article.slug}`}
                className="group block h-full rounded-2xl border border-white/10 bg-carbon p-8 transition-colors hover:border-white/20"
              >
                <h3 className="font-display tracking-display text-lg text-white">
                  {article.title}
                </h3>
                <p className="mt-3 font-sans font-light text-sm leading-relaxed text-ash">
                  {article.description}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Closing CTA ──────────────────────────────────────────────────────── */

function ClosingCTA() {
  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="max-w-3xl font-display tracking-display text-5xl md:text-6xl text-white">
            Let's turn your list into revenue<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/55">
            30-minute strategy call. Asaf will audit your current email setup, your
            list, and tell you straight what's possible.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead(OFFER)}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-volt px-7 py-3.5 font-medium text-black transition-colors hover:bg-[#a8e600]"
          >
            Book a call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Disclaimer ───────────────────────────────────────────────────────── */

function Disclaimer() {
  return (
    <section className="border-t border-white/10 px-6 md:px-10 pb-16 pt-10">
      <div className="mx-auto max-w-3xl text-[11px] leading-relaxed text-white/30">
        <p>
          Results disclaimer: Figures shown are from real client accounts managed
          by Eralean over the stated periods. These results are not typical or
          guaranteed. Email marketing performance depends on many factors unique to
          each business — including existing list size, product, pricing, traffic,
          and market. Eralean does not promise or guarantee specific revenue, ROI,
          or financial outcomes. Your results will vary.
        </p>
      </div>
    </section>
  );
}
