import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { CALENDLY, WHATSAPP } from "../lib/constants";
import { trackLead } from "../lib/analytics";
import { AuditForm } from "../components/AuditForm";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { FadeIn } from "../components/motion/FadeIn";
import { Dot } from "../components/brand/Dot";

const OFFER = "ads";

export const meta = () => [
  { title: "Google & Meta Ads Management — EraLean" },
  {
    name: "description",
    content:
      "End-to-end Google and Meta ads management — creative, copy, audiences, and daily optimisation — engineered to bring you qualified leads at a profitable cost.",
  },
];

function Marker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
      <Dot />
      {children}
    </div>
  );
}

export default function AdsPage() {
  return (
    <div className="bg-ink text-white">
      <Nav variant="solid" offer={OFFER} />
      <main>
        <Hero />
        <Included />
        <Results />
        <Pricing />
        <Reviews />
        <AuditForm variant="embed" offer={OFFER} />
        <ClosingCTA />
      </main>
      <Footer />
      <FloatingWhatsApp offer={OFFER} />
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────── */

function Hero() {
  const stats = [
    { value: "50+", label: "Campaigns managed" },
    { value: "4.09×", label: "Average ROAS" },
    { value: "4.69M+", label: "People reached" },
    { value: "£0", label: "Setup fee" },
  ];

  return (
    <section className="px-6 md:px-10 pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Service · Meta & Google Ads</Marker>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h1 className="mt-7 max-w-4xl font-display tracking-display font-semibold text-white text-[12vw] leading-[0.95] sm:text-6xl md:text-[5rem]">
            Ads that actually convert<span className="text-volt">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mt-7 max-w-2xl text-lg text-white/60">
            Facebook, Instagram, and Google ad campaigns fully managed for your
            business. Real ROAS, real reporting, no contracts. We've delivered
            4.69M+ reach and up to 6× ROAS for UK service businesses.
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={CALENDLY}
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
    { title: "Campaign strategy & setup", description: "Full campaign architecture built for your business goals — awareness, traffic, leads, or purchases." },
    { title: "Ad creative & copywriting", description: "Scroll-stopping visuals and persuasive copy written and designed for your target audience." },
    { title: "Audience targeting", description: "Laser-focused audience research — interest-based, lookalike, and custom audiences from your customers." },
    { title: "Daily optimisation", description: "Daily monitoring and weekly optimisation — scaling what works, cutting what doesn't. We chase ROAS." },
    { title: "Retargeting campaigns", description: "Bring back website visitors and past customers with retargeting that converts warm audiences." },
    { title: "Pixel & conversion setup", description: "Meta Pixel and Google tracking, conversion API setup — every sale gets attributed correctly." },
    { title: "Monthly reporting", description: "Clear monthly reports showing exactly what's been spent, what came in, and what's next." },
    { title: "Direct WhatsApp support", description: "Message Asaf any time — no ticketing systems, no waiting." },
    { title: "Both platforms", description: "Meta (Facebook + Instagram) and Google ads — wherever your customers actually are." },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>What's included</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Everything you need to run profitable ads<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-white/55">
            Full campaign setup, creative, targeting, and optimisation — all
            managed by Asaf. One simple monthly fee. No extras.
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

/* ── Real results ─────────────────────────────────────────────────────── */

function Results() {
  const cases = [
    { tag: "E-commerce sales", industry: "Fashion & apparel", spent: "£41,382", primary: "£178,756", primaryLabel: "Revenue", roas: "4.32×", reach: "1.23M" },
    { tag: "Lead generation", industry: "Real estate", spent: "£27,614", primary: "2,847", primaryLabel: "Leads", roas: "£9.70 CPL", reach: "963K" },
    { tag: "Traffic & conversions", industry: "Health & beauty", spent: "£14,893", primary: "£66,321", primaryLabel: "Revenue", roas: "4.45×", reach: "84K clicks" },
    { tag: "Retargeting", industry: "Home & furniture", spent: "£11,247", primary: "£51,384", primaryLabel: "Revenue", roas: "4.57×", reach: "6.83% conv" },
    { tag: "Brand awareness", industry: "Food & beverage", spent: "£18,539", primary: "+14,382", primaryLabel: "Followers", roas: "3.82M imp", reach: "1.14M" },
    { tag: "App installs", industry: "SaaS / tech", spent: "£12,184", primary: "3,847", primaryLabel: "Installs", roas: "£3.17 CPI", reach: "1,293 trials" },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Real results</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Real numbers. Real campaigns<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-white/55">
            A sample of Meta and Google ad campaigns Asaf has managed across
            different industries and objectives — every figure is real.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <FadeIn key={c.tag + i} delay={(i % 3) * 0.06} className="bg-ink">
              <div className="h-full p-8">
                <div className="flex items-center gap-2 text-sm text-white/45">
                  <Dot /> {c.tag}
                </div>
                <div className="mt-1 text-sm text-white/55">{c.industry}</div>
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6">
                  <Metric label="Spent" value={c.spent} />
                  <Metric label={c.primaryLabel} value={c.primary} accent />
                  <Metric label="ROAS / metric" value={c.roas} />
                  <Metric label="Reach" value={c.reach} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-white/40">{label}</div>
      <div className={`mt-1 font-display tracking-display text-xl ${accent ? "text-white" : "text-white/75"}`}>
        {value}
      </div>
    </div>
  );
}

/* ── Pricing ──────────────────────────────────────────────────────────── */

function Pricing() {
  const tiers = [
    {
      name: "Google Ads",
      tagline: "Search, Shopping & Performance Max",
      price: "£199",
      featured: false,
      features: [
        "Search + Performance Max campaigns",
        "Keyword research & targeting",
        "Ad copywriting included",
        "Conversion & call tracking setup",
        "Daily monitoring & optimisation",
        "Monthly performance report",
        "Direct WhatsApp support",
      ],
    },
    {
      name: "Both — Bundle",
      tagline: "Meta + Google, fully managed",
      price: "£299",
      strike: "£398",
      save: "Save £99 / month",
      featured: true,
      features: [
        "Everything in Google + Meta",
        "Cross-platform strategy & budget split",
        "Full-funnel retargeting across channels",
        "Unified monthly reporting dashboard",
        "Priority WhatsApp support",
        "Quarterly strategy review",
      ],
    },
    {
      name: "Meta Ads",
      tagline: "Facebook & Instagram",
      price: "£199",
      featured: false,
      features: [
        "Facebook + Instagram campaigns",
        "Ad creative & copywriting included",
        "Lookalike & custom audiences",
        "Retargeting & remarketing",
        "Meta Pixel + Conversions API setup",
        "Monthly performance report",
        "Direct WhatsApp support",
      ],
    },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Pricing</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Simple. Transparent. No fluff<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-lg text-white/55">
            Run just one platform, or take both and save £99 a month. A flat
            monthly management fee — you set your own ad budget and pay the
            platforms directly.
          </p>
        </FadeIn>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.07}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 ${
                  tier.featured ? "border-volt/40 bg-carbon" : "border-white/10 bg-carbon"
                }`}
              >
                {tier.featured && (
                  <div className="mb-5 inline-flex self-start items-center gap-1.5 rounded-full border border-volt/30 px-3 py-1 text-[10px] uppercase tracking-widest text-volt">
                    <Dot /> Best value
                  </div>
                )}

                <div className="text-xs uppercase tracking-widest text-white/45">{tier.name}</div>
                <div className="mt-1 text-sm text-white/55">{tier.tagline}</div>

                <div className="mt-6 flex items-end gap-2">
                  {tier.strike && (
                    <span className="mb-1.5 text-2xl text-white/30 line-through">{tier.strike}</span>
                  )}
                  <span className="font-display tracking-display text-5xl md:text-6xl text-white">
                    {tier.price}
                  </span>
                  <span className="mb-2 text-base text-white/45">/ mo</span>
                </div>
                <div className="mt-1 mb-6 text-xs text-white/45">
                  {tier.save ? (
                    <span className="text-volt">{tier.save}</span>
                  ) : (
                    "Management fee — you set your own budget"
                  )}
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  {tier.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackLead(OFFER)}
                  className={`group mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-medium transition-colors ${
                    tier.featured
                      ? "bg-volt text-black hover:bg-[#a8e600]"
                      : "border border-white/15 text-white hover:bg-white/5"
                  }`}
                >
                  Book a strategy call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center text-xs uppercase tracking-widest text-white/40">
            Every plan includes free setup (worth £500) · No contract · Cancel any time
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Reviews ──────────────────────────────────────────────────────────── */

function Reviews() {
  const t = [
    { q: "We were wasting money on ads for months with another agency. Asaf completely restructured our campaigns and within 3 weeks we were seeing a 5× return. Absolutely incredible.", a: "Kemal M.", r: "E-commerce store owner, Istanbul" },
    { q: "The results speak for themselves — 6× ROAS in the first month. I finally understand where every penny of my ad budget is going, and it's working harder than ever.", a: "Sarah P.", r: "Beauty brand owner, London" },
    { q: "Our cost per lead dropped from £34 to £9.70 after Asaf took over. We're now getting more qualified enquiries than we can handle. Genuinely changed our business.", a: "James H.", r: "Property developer, Birmingham" },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>What ad clients say</Marker>
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

/* ── Closing CTA ──────────────────────────────────────────────────────── */

function ClosingCTA() {
  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="max-w-3xl font-display tracking-display text-5xl md:text-6xl text-white">
            Let's turn ad spend into revenue<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/55">
            30-minute strategy call. Asaf will look at your current spend, your
            offer, and tell you straight what's possible.
          </p>
          <a
            href={CALENDLY}
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
