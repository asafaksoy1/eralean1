import { ArrowRight, ChevronDown } from "lucide-react";
import { trackLead } from "../../lib/analytics";
import { FadeIn } from "../../components/motion/FadeIn";
import { ScaleOnScroll } from "../../components/motion/ScaleOnScroll";
import { Dot } from "../../components/brand/Dot";

const BOOKING_LINK = "https://calendar.app.google/2mmmEqFVPaLvZ6dy7";
const OFFER = "website";

export const meta = () => [
  { title: "Custom Website for Your Business — £0 Setup, £99/month — EraLean" },
  {
    name: "description",
    content:
      "We design, build, host and manage your entire website. No upfront cost — just £99/month, everything included. Cancel anytime.",
  },
  { name: "robots", content: "noindex, nofollow" },
];

function onCtaClick() {
  trackLead(OFFER);
}

/* ── Header ───────────────────────────────────────────────────────────── */

function Header() {
  return (
    <header className="px-6 py-8 text-center">
      <span className="font-display tracking-display text-base font-semibold text-white">
        eralean<span className="text-volt">.</span>
      </span>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="px-6 pt-2 pb-16 md:px-10 md:pt-4 md:pb-24">
      <div className="mx-auto w-full max-w-3xl text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
            <Dot />
            Custom websites · UK small business
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h1 className="mt-7 font-display tracking-display text-[clamp(2.8rem,6vw,5rem)] font-semibold leading-[0.98] text-white">
            A custom website for your business. £0 to start.
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mx-auto mt-7 max-w-[52ch] font-sans font-light text-white/55">
            We design, build, host and manage your entire website. No upfront
            cost, no big invoice — just £99/month, everything included.
            Cancel anytime.
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-9 flex flex-col items-center">
            <a
              href={BOOKING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCtaClick}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-volt px-8 py-4 font-display tracking-display text-base font-semibold text-ink transition-colors hover:bg-[#a8e600] sm:w-auto"
            >
              Book a free call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <p className="mt-4 text-sm text-white/45">
              Setup normally £500 — free for a limited time. No contract.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Price-anchor band ────────────────────────────────────────────────── */

function PriceAnchor() {
  return (
    <section className="border-t hairline bg-carbon px-6 py-20 md:px-10 md:py-28">
      <FadeIn>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center sm:flex-row sm:justify-center sm:gap-16">
          <div>
            <p className="text-sm text-ash line-through">£500</p>
            <div className="mt-1 flex items-baseline justify-center gap-2">
              <span className="font-display tracking-display text-[clamp(3rem,7vw,5rem)] font-semibold text-volt">
                £0
              </span>
              <span className="font-sans font-light text-white">setup</span>
            </div>
          </div>
          <div>
            <div className="mt-1 flex items-baseline justify-center gap-2">
              <span className="font-display tracking-display text-[clamp(3rem,7vw,5rem)] font-semibold text-volt">
                £99
              </span>
              <span className="font-sans font-light text-white">/month</span>
            </div>
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.06}>
        <p className="mx-auto mt-8 max-w-md text-center text-sm text-ash">
          Everything included. No hidden fees. Cancel anytime.
        </p>
      </FadeIn>
    </section>
  );
}

/* ── What's included ──────────────────────────────────────────────────── */

function WhatsIncluded() {
  const items = [
    "Custom-designed website (not a template)",
    "Domain setup & management",
    "Hosting included",
    "Unlimited content updates",
    "SEO setup",
    "Mobile-optimised build",
    "Speed & security handled",
    "Ongoing changes whenever you need",
  ];

  return (
    <section className="border-t hairline bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
            <Dot />
            What's included for £99/month
          </div>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h2 className="mt-5 font-display tracking-display text-3xl text-white md:text-4xl">
            Everything. Genuinely everything<span className="text-volt">.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.12}>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm font-light text-white/70"
              >
                <Dot className="mt-1.5" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Why £99/month ────────────────────────────────────────────────────── */

function WhySubscription() {
  const points = [
    {
      title: "No upfront wall",
      body: "Most agencies charge £1,500–£3,000 before you see anything. We charge nothing to start.",
    },
    {
      title: "We handle everything",
      body: "You run your business. We run your website — design, updates, hosting, SEO, all of it.",
    },
    {
      title: "Cancel anytime",
      body: "No long contract. If it's not working for you, you're free to leave.",
    },
  ];

  return (
    <section className="border-t hairline bg-carbon px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
            <Dot />
            Why £99/month instead of £3,000 upfront
          </div>
        </FadeIn>

        <div className="mt-12 space-y-10">
          {points.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.07}>
              <div className="flex items-start gap-4">
                <Dot className="mt-2.5" />
                <div>
                  <h3 className="font-display tracking-display text-xl text-white md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-sans font-light leading-relaxed text-ash">
                    {p.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Real businesses we build for ────────────────────────────────────── */

function Projects() {
  const projects = [
    {
      name: "CallFix Electrical",
      line: "Lead-generating site for an electrical services business",
      items: ["Custom build", "Google-ready", "Generating leads at £13.32 each"],
      img: null,
    },
    {
      name: "Regent Estates Global",
      line: "Bilingual property portal",
      items: ["Custom CMS", "EN/TR", "Drag-and-drop listings"],
      img: "/work/regent-estates.jpg",
    },
    {
      name: "ABOV Interiors",
      line: "Premium renovation brand",
      items: ["Custom admin panel", "Portfolio gallery", "Lead capture"],
      img: "/work/abov-interiors.jpg",
    },
  ];

  return (
    <section className="border-t hairline bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
            <Dot />
            Proof
          </div>
          <h2 className="mt-5 font-display tracking-display text-3xl text-white md:text-4xl">
            Real businesses we build for<span className="text-volt">.</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.07}>
              <div className="h-full overflow-hidden rounded-2xl border border-slate bg-carbon">
                <ScaleOnScroll className="aspect-[16/10] w-full overflow-hidden border-b border-slate bg-ink">
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full rounded-lg object-cover"
                    />
                  ) : (
                    <div
                      className="h-full w-full rounded-lg"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  )}
                </ScaleOnScroll>
                <div className="p-8">
                  <h3 className="font-display tracking-display text-xl text-white">
                    {p.name}
                  </h3>
                  <p className="mt-3 font-sans font-light text-white/70">
                    {p.line}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-slate pt-6">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <Dot className="mt-1.5" />
                        <span className="font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ──────────────────────────────────────────────────────────────── */

function Faq() {
  const faqs = [
    {
      q: "Is it really free to start?",
      a: "Yes. No setup fee, no upfront cost. You only pay £99/month once your site is live. Setup is normally £500 — it's free for a limited time.",
    },
    {
      q: "What does £99/month include?",
      a: "Everything — the build, hosting, domain management, updates, SEO setup, and any changes you need. No hidden charges.",
    },
    {
      q: "Is there a contract?",
      a: "No long contract. It's month-to-month and you can cancel anytime. We host and manage the site, so if you leave, we take it down — no strings.",
    },
    {
      q: "How long until my site is live?",
      a: "Most sites go live within 2 weeks of our call, depending on content and complexity.",
    },
    {
      q: "What if I already have a website?",
      a: "We'll rebuild or improve it. The £99/month covers a fresh custom build either way.",
    },
  ];

  return (
    <section className="border-t hairline bg-ink px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
            <Dot />
            FAQ
          </div>
          <h2 className="mt-5 font-display tracking-display text-3xl text-white md:text-4xl">
            Questions<span className="text-volt">.</span>
          </h2>
        </FadeIn>

        <div className="mt-10 divide-y divide-slate border-t border-slate">
          {faqs.map((f, i) => (
            <FadeIn key={f.q} delay={(i % 5) * 0.05}>
              <details className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span className="font-display tracking-display text-lg text-white">
                    {f.q}
                  </span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-white/45 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 max-w-[60ch] font-sans font-light leading-relaxed text-ash">
                  {f.a}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ────────────────────────────────────────────────────────── */

function FinalCta() {
  return (
    <section className="bg-volt px-6 py-24 text-center md:px-10 md:py-32">
      <FadeIn>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display tracking-display text-3xl font-semibold text-ink md:text-4xl">
            £0 to start. £99/month. Everything handled.
          </h2>
          <p className="mx-auto mt-5 max-w-md font-sans font-light text-ink/60">
            Book a free 15-minute call and we'll show you exactly what your
            site could look like.
          </p>
          <a
            href={BOOKING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onCtaClick}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-display tracking-display text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Book your free call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="mt-5 text-sm text-ink/60">
            No upfront cost. No contract. Cancel anytime.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────────────────── */

function MinimalFooter() {
  return (
    <footer className="bg-ink px-6 py-10 text-center">
      <p className="text-xs text-ash">© 2026 EraLean · asaf@eralean.com</p>
    </footer>
  );
}

export default function WebsiteLp() {
  return (
    <div className="bg-ink text-white">
      <Header />
      <main>
        <Hero />
        <PriceAnchor />
        <WhatsIncluded />
        <WhySubscription />
        <Projects />
        <Faq />
        <FinalCta />
      </main>
      <MinimalFooter />
    </div>
  );
}
