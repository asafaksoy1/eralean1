import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { ServiceHero } from "../components/ServiceHero";
import { StrategyCallCTA } from "../components/StrategyCallCTA";
import { useInView } from "../lib/useInView";
import { ArrowUpRight, Calendar, Check } from "lucide-react";
import { CALENDLY, SERVICES } from "../lib/constants";

export default function AcquisitionSystemsPage() {
  return (
    <Layout navVariant="solid">
      <ServiceHero
        eyebrow="Core offer · Acquisition Systems"
        title={
          <>
            The complete<br />
            <span className="serif italic">acquisition system.</span>
          </>
        }
        description="Website + ads + AI + complete follow-up funnel — built and run for you. One team, one bill, one accountable person. You take the calls, we run the engine."
        stats={[
          { value: "1", label: "Bundled offer" },
          { value: "7-14d", label: "Live in" },
          { value: "100%", label: "Done for you" },
          { value: "1:1", label: "With Asaf" },
        ]}
      />

      <Bundle />
      <How />
      <Pricing />

      <StrategyCallCTA
        eyebrow="Accepting 3 new clients this month"
        title={
          <>
            Let's build your <br />
            <span className="serif italic text-white/70">acquisition system.</span>
          </>
        }
        sub="30-minute call. We'll map every piece of the system and what it would deliver for your business — no pitch."
        benefits={["No contracts", "Month-to-month", "UK-based", "1:1 with Asaf"]}
      />
    </Layout>
  );
}

function Bundle() {
  const [ref, inView] = useInView();
  const pieces = [
    {
      title: "Website",
      d: "A high-converting site engineered around bookings, not vanity metrics. Custom design, mobile-first, fast.",
      to: "/services/website",
    },
    {
      title: "Ads",
      d: "Meta and Google ads, fully managed. Creative, copy, audiences, daily optimisation, transparent reporting.",
      to: "/services/ads",
    },
    {
      title: "AI",
      d: "AI agents that reply to leads in under 60 seconds, qualify them, book calls, and follow up automatically.",
      to: "/services/ai",
    },
    {
      title: "Follow-up funnel",
      d: "Automated SMS, email, and WhatsApp sequences for warm leads, no-shows, and past customers — nothing slips.",
      to: "/services/acquisition-systems",
    },
  ];
  return (
    <section ref={ref} className="bg-[#f5f3ee] text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6`}>What's in the bundle</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight max-w-3xl mb-3`} style={{ animationDelay: "0.1s" }}>
          One system. <span className="serif italic">Four moving parts.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-neutral-600 max-w-xl mb-14`} style={{ animationDelay: "0.15s" }}>
          Each piece works on its own. Together they compound — every lead that comes in is captured, qualified, booked, and reminded. Nothing falls through the cracks.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {pieces.map((p, i) => (
            <Link key={p.title} to={p.to} className={`${inView ? "fade-up" : "opacity-0"} bg-white rounded-3xl p-8 md:p-10 group hover:bg-neutral-50 transition-colors block`} style={{ animationDelay: `${0.2 + i * 0.05}s` }}>
              <div className="flex items-center justify-between mb-5">
                <div className="text-xs uppercase tracking-widest text-emerald-700">{`0${i + 1}`}</div>
                <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-emerald-600 transition-all" />
              </div>
              <div className="text-3xl font-medium tracking-tight mb-3">{p.title}</div>
              <p className="text-neutral-600 leading-relaxed">{p.d}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-500">
            <span>Want one piece on its own?</span>
            {SERVICES.slice(0, 3).map((s) => (
              <Link key={s.to} to={s.to} className="underline underline-offset-4 hover:text-emerald-700">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function How() {
  const [ref, inView] = useInView();
  const steps = [
    { n: "01", t: "Free strategy call", d: "30 minutes on Zoom. We map the full system for your business — what to build, what to expect, what it costs. Zero pitch." },
    { n: "02", t: "We build", d: "Site, ads, AI agents, follow-up automations. Fully done-for-you in 7–14 days." },
    { n: "03", t: "We launch", d: "Ads go live, AI responders go online, the funnel starts compounding. First leads typically arrive within the first week." },
    { n: "04", t: "We optimise", d: "Daily monitoring, weekly tweaks, monthly reports. We chase every extra booking." },
    { n: "05", t: "You take the calls", d: "Leads land in your calendar pre-qualified. You close. We keep the engine running." },
  ];
  return (
    <section ref={ref} className="bg-white text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6`}>How it works</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight mb-14`} style={{ animationDelay: "0.1s" }}>
          From zero to a <span className="serif italic">full calendar.</span>
        </h2>
        <div className="space-y-px bg-neutral-200">
          {steps.map((s, i) => (
            <div key={s.n} className={`${inView ? "fade-up" : "opacity-0"} bg-white grid md:grid-cols-12 gap-6 py-10 px-2`} style={{ animationDelay: `${0.2 + i * 0.08}s` }}>
              <div className="md:col-span-2 text-5xl serif text-neutral-300">{s.n}</div>
              <div className="md:col-span-3 text-2xl">{s.t}</div>
              <div className="md:col-span-7 text-neutral-600 leading-relaxed text-base md:text-lg max-w-xl">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="bg-[#f5f3ee] text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6 text-center`}>Pricing</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight text-center mb-3`} style={{ animationDelay: "0.1s" }}>
          Bundled. <span className="serif italic">Cheaper together.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-center text-neutral-600 max-w-md mx-auto mb-14`} style={{ animationDelay: "0.15s" }}>
          The exact bundle and price depend on your business — but it always costs less than buying each piece on its own.
        </p>

        <div className={`${inView ? "fade-up" : "opacity-0"} bg-[#0a0a0a] text-white rounded-[32px] p-10 md:p-14 relative overflow-hidden`} style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-2">Acquisition Systems · custom</div>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-6xl md:text-7xl font-medium tracking-tight">From £499</span>
              <span className="text-white/50 text-lg mb-3">/ month</span>
            </div>
            <p className="text-white/60 mb-8 max-w-md">Bundled price is always lower than buying website, ads, and AI separately. We'll quote the exact number on the strategy call.</p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Custom website included",
                "Meta + Google ads managed",
                "AI lead-reply agent",
                "Voice AI (optional)",
                "Follow-up funnel & automations",
                "Pixel & conversion tracking",
                "Monthly performance report",
                "Direct WhatsApp support with Asaf",
              ].map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
               className="bg-white text-black rounded-full px-6 py-4 text-base hover:bg-neutral-200 transition-colors inline-flex items-center gap-3 group w-full justify-center">
              <Calendar className="w-5 h-5" />
              Book your free strategy call
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
            <div className="mt-4 text-center text-xs text-white/40 uppercase tracking-widest">No contract · Month-to-month · UK-based</div>
          </div>
        </div>
      </div>
    </section>
  );
}
