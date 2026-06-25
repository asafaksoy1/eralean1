import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { CALENDLY } from "../lib/constants";
import { trackLead } from "../lib/analytics";
import { AuditForm } from "../components/AuditForm";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { FadeIn } from "../components/motion/FadeIn";
import { ScaleOnScroll } from "../components/motion/ScaleOnScroll";
import { Dot } from "../components/brand/Dot";

export const meta = () => [
  { title: "EraLean — Growth systems for modern brands" },
  {
    name: "description",
    content:
      "EraLean builds and runs done-for-you growth systems — website, ads, and email marketing — so modern brands win more customers while you focus on the business.",
  },
];

// Small caps section marker — the brand dot + a label.
function Marker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
      <Dot />
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-ink text-white">
      <Nav variant="solid" offer="general" />
      <main>
        <Hero />
        <AudienceSplit />
        <Offers />
        <Proof />
        <AuditForm variant="embed" offer="general" />
        <ClosingCTA />
      </main>
      <Footer />
      <FloatingWhatsApp offer="general" />
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────── */

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  const panel = (
    <div className="rounded-2xl border border-white/10 bg-carbon p-6 md:p-8">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white/50">eralean<span className="text-volt">.</span></span>
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/45">
          <Dot pulse /> Live
        </span>
      </div>
      <div className="mt-8 space-y-5">
        {[
          { k: "Website", v: "Converting" },
          { k: "Ads", v: "Profitable" },
          { k: "Email", v: "Compounding" },
        ].map((row) => (
          <div key={row.k} className="flex items-center justify-between border-t border-white/10 pt-5">
            <span className="text-white/55">{row.k}</span>
            <span className="font-display tracking-display text-white">{row.v}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (reduceMotion) return panel;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="will-change-transform"
    >
      {panel}
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        <div className="lg:col-span-7">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-carbon px-3.5 py-1.5 text-[12px] text-white/60">
              <Dot pulse /> Now accepting new clients
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h1 className="mt-7 font-display tracking-display font-semibold text-white text-[14vw] leading-[0.92] sm:text-7xl md:text-[5.5rem] lg:text-[6rem]">
              More customers,
              <br />
              less guesswork<span className="text-volt">.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-7 max-w-md text-lg text-white/60">
              Done-for-you growth systems — website, ads, and email — built and
              run as one engine, so you focus on the business while the pipeline
              fills.
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLead("general")}
                className="group inline-flex items-center gap-2 rounded-full bg-volt px-7 py-3.5 font-medium text-black transition-colors hover:bg-[#a8e600]"
              >
                Book a call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#offers" className="text-sm text-white/60 transition-colors hover:text-white">
                See what we do
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

/* ── Audience split ───────────────────────────────────────────────────── */

function AudienceSplit() {
  const audiences = [
    {
      tag: "Local business",
      line: "Booked calendars from local demand.",
      body: "Clinics, trades, salons, gyms, firms — a system that turns local searches and ad clicks into appointments on your calendar.",
    },
    {
      tag: "Ecommerce",
      line: "Acquisition and retention that scales.",
      body: "DTC and online brands — profitable paid acquisition paired with lifecycle email that compounds revenue from the customers you already have.",
    },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Who it's for</Marker>
        </FadeIn>
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-white/10">
          {audiences.map((a, i) => (
            <FadeIn key={a.tag} delay={i * 0.08} className="bg-ink">
              <div className="h-full px-0 md:px-10 md:py-4">
                <div className="text-sm text-white/45">{a.tag}</div>
                <h3 className="mt-4 font-display tracking-display text-3xl md:text-4xl text-white">
                  {a.line}
                </h3>
                <p className="mt-5 max-w-md text-white/55">{a.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Offers ───────────────────────────────────────────────────────────── */

function Offers() {
  const offers = [
    {
      to: "/services/website",
      name: "Website",
      line: "Built to convert, not to win awards.",
      body: "Fast, mobile-first sites engineered around one job: turning visitors into booked leads.",
    },
    {
      to: "/services/ads",
      name: "Ads",
      line: "Meta and Google, fully managed.",
      body: "Creative, copy, audiences, and daily optimisation — spend that returns qualified leads, transparently reported.",
    },
    {
      to: "/services/email-marketing",
      name: "Email",
      line: "The channel that pays you back.",
      body: "Lifecycle flows and campaigns that recover revenue and turn one-time buyers into repeat customers.",
    },
  ];

  return (
    <section id="offers" className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>What we do</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Three parts of one system<span className="text-volt">.</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-white/10">
          {offers.map((o, i) => (
            <FadeIn key={o.name} delay={i * 0.07} className="bg-ink">
              <Link
                to={o.to}
                className="group flex h-full flex-col p-8 md:p-9 transition-colors hover:bg-carbon"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/45">{`0${i + 1}`}</span>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:text-volt" />
                </div>
                <h3 className="mt-10 font-display tracking-display text-2xl text-white">
                  {o.name}
                </h3>
                <p className="mt-3 text-lg text-white/70">{o.line}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{o.body}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Proof (placeholder metric slots) ─────────────────────────────────── */

function Proof() {
  const cases = [
    { tag: "Aesthetic clinic", metric: "—", label: "Increase in booked consultations" },
    { tag: "Ecommerce brand", metric: "—", label: "Return on ad spend" },
    { tag: "Professional services", metric: "—", label: "Cost per qualified lead" },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Proof</Marker>
          <p className="mt-6 max-w-xl text-white/50">
            Live client results are landing here next — real metrics, named
            engagements. These slots are placeholders.
          </p>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <FadeIn key={c.tag} delay={i * 0.07}>
              <ScaleOnScroll>
                <div className="h-full rounded-2xl border border-white/10 bg-carbon p-8">
                  <div className="flex items-center gap-2 text-sm text-white/45">
                    <Dot /> {c.tag}
                  </div>
                  <div className="mt-10 font-display tracking-display text-6xl text-white/25">
                    {c.metric}
                  </div>
                  <div className="mt-4 text-sm text-white/50">{c.label}</div>
                </div>
              </ScaleOnScroll>
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
            Ready when you are<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/55">
            A 30-minute call. We map the system for your business and tell you
            straight what it would take. No pitch.
          </p>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead("general")}
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
