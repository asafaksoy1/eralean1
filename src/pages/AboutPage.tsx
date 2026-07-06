import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { EMAIL, WHATSAPP, WHATSAPP_DISPLAY } from "../lib/constants";
import { trackLead } from "../lib/analytics";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { FadeIn } from "../components/motion/FadeIn";
import { Dot } from "../components/brand/Dot";
import { pageMeta, breadcrumbSchema } from "../lib/seo";

const TITLE = "About — EraLean";
const DESCRIPTION =
  "EraLean is a founder-led growth agency in Aylesbury, UK. One system — website, ads, and email — built and run by the person you actually talk to.";
const PATH = "/about";

export const meta = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
  ...pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: PATH },
  ]),
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

export default function AboutPage() {
  return (
    <div className="bg-ink text-white">
      <Nav variant="solid" offer="general" />
      <main>
        <Opening />
        <WhyLean />
        <Principles />
        <Founder />
        <ClosingCTA />
      </main>
      <Footer />
      <FloatingWhatsApp offer="general" />
    </div>
  );
}

/* ── Opening ──────────────────────────────────────────────────────────── */

function Opening() {
  return (
    <section className="px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>About</Marker>
        </FadeIn>
        <FadeIn delay={0.06}>
          <h1 className="mt-7 max-w-3xl font-display tracking-display font-semibold text-white text-5xl md:text-7xl leading-[0.95]">
            The lean growth engine<span className="text-volt">.</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-7 max-w-xl text-lg text-white/60">
            EraLean is a founder-led growth agency in Aylesbury, UK. We build
            and run one system — website, ads, and email — instead of selling
            three disconnected services. One team, one plan, one job: more
            customers.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Why lean ─────────────────────────────────────────────────────────── */

function WhyLean() {
  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Why lean</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Most agencies bill for motion<span className="text-volt">.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="mt-7 max-w-xl text-white/55">
            Meetings, decks, account managers, layers. The work gets diluted at
            every step and the invoice grows anyway. EraLean is small on
            purpose — no handoffs, no juniors learning on your budget, nobody
            between you and the work. Everything we do points at one outcome:
            customers at a cost that makes sense.
          </p>
        </FadeIn>
        <FadeIn delay={0.14}>
          <p className="mt-14 max-w-2xl font-serif italic text-3xl md:text-4xl text-white">
            Less waste. More growth.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Principles ───────────────────────────────────────────────────────── */

function Principles() {
  // TODO(asaf): confirm these commitments (weekly reporting cadence).
  const principles = [
    {
      name: "Evidence over opinion",
      body: "Decisions come from data, not taste. You see the numbers we see, reported weekly in plain English.",
    },
    {
      name: "One system, not three services",
      body: "Website, ads, and email are built to work as one engine. Fixing them in isolation is how budgets disappear.",
    },
    {
      name: "Senior work only",
      body: "The founder does the work. The person on the first call is the person building the system.",
    },
    {
      name: "Straight answers",
      body: "You're told what's working and what isn't, plainly — even when the honest answer is “don't hire us.”",
    },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Principles</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Four rules, kept<span className="text-volt">.</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-2 gap-px bg-white/10">
          {principles.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.07} className="bg-ink">
              <div className="h-full p-8 md:p-9">
                <span className="text-sm text-white/45">{`0${i + 1}`}</span>
                <h3 className="mt-8 font-display tracking-display text-2xl text-white">
                  {p.name}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Founder ──────────────────────────────────────────────────────────── */

function Founder() {
  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Who's behind it</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Asaf, founder<span className="text-volt">.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="mt-7 max-w-xl text-white/55">
            EraLean is built and run by Asaf. He takes the first call, builds
            the site, runs the ads, and writes the email — there is no team to
            be handed off to. Based in Aylesbury, working with local businesses
            and ecommerce brands across the UK.
          </p>
        </FadeIn>

        {/* TODO(asaf): confirm this commitment (reply within one business day). */}
        <FadeIn delay={0.14}>
          <div className="mt-12 max-w-md">
            <div className="flex items-center justify-between gap-4 border-t border-white/10 py-5">
              <span className="text-sm text-white/45">Email</span>
              <a
                href={`mailto:${EMAIL}`}
                onClick={() => trackLead("general")}
                className="text-white/80 transition-colors hover:text-white"
              >
                {EMAIL}
              </a>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-white/10 py-5">
              <span className="text-sm text-white/45">WhatsApp</span>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLead("general")}
                className="text-white/80 transition-colors hover:text-white"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
            <p className="border-t border-white/10 pt-5 text-sm text-white/45">
              Replies within one business day.
            </p>
          </div>
        </FadeIn>
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
            Start with a straight answer<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/55">
            A 30-minute call. We map the system for your business and tell you
            what it would take. No pitch.
          </p>
          <Link
            to="/book"
            onClick={() => trackLead("general")}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-volt px-7 py-3.5 font-medium text-black transition-colors hover:bg-[#a8e600]"
          >
            Book a call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
