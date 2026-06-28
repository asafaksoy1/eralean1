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
import { pageMeta, serviceSchema, breadcrumbSchema } from "../lib/seo";

const OFFER = "website";
const TITLE = "Website Design & Build — EraLean";
const DESCRIPTION =
  "High-converting websites designed and built around bookings, not vanity metrics — fast, mobile-first, and fully managed so every visitor turns into a lead.";
const PATH = "/services/website";

export const meta = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
  ...pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
  serviceSchema({ name: "Website Design & Build", description: DESCRIPTION, path: PATH }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Website", path: PATH },
  ]),
];

// Small caps section marker — the brand dot + a label.
function Marker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
      <Dot />
      {children}
    </div>
  );
}

export default function WebsitePage() {
  return (
    <div className="bg-ink text-white">
      <Nav variant="solid" offer={OFFER} />
      <main>
        <Hero />
        <Included />
        <Pricing />
        <Process />
        <Reviews />
        <AuditForm variant="embed" offer={OFFER} />
        <ClosingCTA />
      </main>
      <Footer />
      <FloatingWhatsApp offer={OFFER} />
    </div>
  );
}

/* ── Hero (lighter than home — no zoom, FadeIn only) ──────────────────── */

function Hero() {
  const stats = [
    { value: "100+", label: "Sites delivered" },
    { value: "7d", label: "Average launch" },
    { value: "£0", label: "Setup fee" },
    { value: "99%", label: "Client satisfaction" },
  ];

  return (
    <section className="px-6 md:px-10 pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Service · Website</Marker>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h1 className="mt-7 max-w-4xl font-display tracking-display font-semibold text-white text-[12vw] leading-[0.95] sm:text-6xl md:text-[5rem]">
            Premium websites, fully managed<span className="text-volt">.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mt-7 max-w-2xl text-lg text-white/60">
            Custom-built, conversion-focused sites for UK service businesses.
            Domain, hosting, design, updates, and any custom feature you need —
            one flat monthly fee. No surprises, no contracts.
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
    { title: "Custom domain", description: "Your .co.uk or .com domain registered, configured, and managed for you." },
    { title: "Premium hosting", description: "Ultra-fast cloud hosting with 99.9% uptime — fully managed and monitored." },
    { title: "Bespoke design", description: "Custom design built around your brand. No templates. Made just for you." },
    { title: "Unlimited updates", description: "New text, images, pages, prices — just send a message and it's done fast." },
    { title: "Any custom feature", description: "Booking systems, contact forms, e-commerce, live chat — built in. No extras." },
    { title: "SSL & security", description: "HTTPS, malware protection, and regular backups so the site stays safe 24/7." },
    { title: "Mobile-first", description: "Looks and performs perfectly on every phone, tablet, and desktop." },
    { title: "Analytics & SEO", description: "Google Analytics setup and basic SEO so customers can actually find you." },
    { title: "Direct WhatsApp support", description: "Message Asaf any time — no ticket queues, no waiting around." },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>What's included</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Everything you need. Nothing you don't<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-xl text-white/55">
            One flat £99/mo management fee covers it all — domain, hosting,
            custom design, updates, and any feature your business needs.
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

/* ── Pricing ──────────────────────────────────────────────────────────── */

function Pricing() {
  const breakdown = [
    { label: "Setup / build fee", value: "Free", strike: "£500" },
    { label: "Custom domain (.co.uk / .com)", value: "Included" },
    { label: "Premium cloud hosting", value: "Included" },
    { label: "Ongoing updates & management", value: "Included" },
    { label: "Any custom feature you need", value: "Included" },
    { label: "SSL, security & backups", value: "Included" },
    { label: "Hidden fees / extra charges", value: "None. Ever." },
  ];
  const included = [
    "Custom premium design",
    "Domain + hosting + SSL",
    "Unlimited content updates",
    "Any custom feature",
    "Mobile-responsive",
    "Google Analytics + basic SEO",
    "Direct WhatsApp support",
    "Live within 7 days",
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <Marker>Pricing</Marker>
          <h2 className="mt-6 font-display tracking-display text-4xl md:text-5xl text-white">
            Simple. Transparent. All-in<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/55">
            One price. Everything included. Built for small businesses — start
            today, cancel any time.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-carbon p-9 md:p-12">
            <div className="text-xs uppercase tracking-widest text-white/45">
              Monthly management fee
            </div>
            <div className="mt-3 flex items-end gap-2">
              <span className="font-display tracking-display text-6xl md:text-7xl text-white">
                £99
              </span>
              <span className="mb-3 text-lg text-white/45">/ month</span>
            </div>
            <p className="mt-6 max-w-md text-white/55">
              All-in. Domain, hosting, custom design, unlimited updates, any
              feature you need.
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
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead(OFFER)}
              className="group mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-volt px-7 py-3.5 font-medium text-black transition-colors hover:bg-[#a8e600]"
            >
              Book your free strategy call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="mt-4 text-center text-xs uppercase tracking-widest text-white/40">
              No contract · Cancel any time · Start this week
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Process ──────────────────────────────────────────────────────────── */

function Process() {
  const steps = [
    { n: "01", t: "Get in touch", d: "Book a call or message Asaf on WhatsApp with your business details." },
    { n: "02", t: "We design", d: "A bespoke, premium design tailored to your brand — built from scratch." },
    { n: "03", t: "You approve", d: "Review the design and request any changes. Your satisfaction is guaranteed." },
    { n: "04", t: "We launch", d: "Your site goes live — domain configured, hosting active, SSL on." },
    { n: "05", t: "We manage", d: "Ongoing updates, new features, support — whenever you need us, we're here." },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>How it works</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            From zero to live in 7 days<span className="text-volt">.</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-5">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.06} className="bg-ink">
              <div className="h-full p-8">
                <div className="text-sm text-white/45">{s.n}</div>
                <h3 className="mt-6 font-display tracking-display text-lg text-white">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Reviews ──────────────────────────────────────────────────────────── */

function Reviews() {
  const t = [
    { q: "Honestly couldn't believe the quality for £99 a month. The website looks absolutely premium — several customers have commented on it. Best investment I've made for my business.", a: "Sarah K.", r: "Beauty salon owner, London" },
    { q: "Was paying £1,200 upfront to another agency and still waiting for updates weeks later. Switched to Asaf and my site was live in 5 days. The ongoing support is incredible.", a: "Mohammed R.", r: "Restaurant owner, Manchester" },
    { q: "They added a custom booking system for my gym within days of asking. Zero extra charge — exactly as promised. I've recommended Eralean to every small business owner I know.", a: "James T.", r: "Personal trainer & gym owner" },
    { q: "Finally a service that actually does what it says — domain, hosting, design, updates, all in one place. I don't have to think about my website at all.", a: "Lisa P.", r: "Freelance accountant, Birmingham" },
  ];

  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>What clients say</Marker>
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.map((x, i) => (
            <FadeIn key={x.a} delay={(i % 2) * 0.07}>
              <div className="h-full rounded-2xl border border-white/10 bg-carbon p-8">
                <p className="text-lg leading-snug text-white/85">{x.q}</p>
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
            Let's build your website<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/55">
            30-minute call. We'll map exactly what your site should do — and what
            it costs. No pitch, no pressure.
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
