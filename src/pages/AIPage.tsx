import { Layout } from "../components/Layout";
import { ServiceHero } from "../components/ServiceHero";
import { FeatureGrid } from "../components/FeatureGrid";
import { StrategyCallCTA } from "../components/StrategyCallCTA";
import { useInView } from "../lib/useInView";
import { CALENDLY } from "../lib/constants";
import { ArrowUpRight, Calendar, Check } from "lucide-react";

export default function AIPage() {
  return (
    <Layout navVariant="solid">
      <ServiceHero
        eyebrow="Service · AI & Automations"
        title={
          <>
            AI agents that do<br />
            <span className="serif italic">the boring work.</span>
          </>
        }
        description="Custom AI agents and workflow automations that reply to enquiries, qualify leads, book calls, and follow up — 24/7, in your tone of voice. Less admin, more bookings."
        stats={[
          { value: "24/7", label: "Always on" },
          { value: "<60s", label: "Lead reply time" },
          { value: "5-10h", label: "Saved per week" },
          { value: "£0", label: "Setup fee" },
        ]}
      />

      <FeatureGrid
        eyebrow="What we build"
        title={
          <>
            Practical AI for<br />
            <span className="serif italic text-neutral-500">service businesses.</span>
          </>
        }
        intro="No buzzwords. Asaf builds the AI agents and automations that actually move the needle — answering leads instantly, booking calls, and freeing up your time."
        background="cream"
        features={[
          { title: "AI lead reply agent", description: "Replies to website, Instagram, and WhatsApp enquiries within 60 seconds, in your tone of voice." },
          { title: "Booking automation", description: "Qualifies leads, sends them straight to your calendar, and sends reminders so they actually show up." },
          { title: "Voice AI receptionist", description: "Answers missed calls 24/7, captures details, books appointments, and notifies you instantly." },
          { title: "Follow-up sequences", description: "Automated SMS and email sequences for cold leads, no-shows, and past customers — winning back revenue." },
          { title: "AI content engine", description: "Generates ad copy, social posts, and landing-page variants from your brand voice — ready for review." },
          { title: "Review collection", description: "Auto-asks happy customers for Google reviews at the right moment and routes complaints privately." },
          { title: "CRM & pipeline sync", description: "Pulls leads from every channel into one CRM, scored and tagged. No more lost enquiries." },
          { title: "Reporting dashboard", description: "One simple dashboard showing leads in, calls booked, customers won, and where they came from." },
          { title: "Custom workflows", description: "Got a repetitive task in your business? We'll automate it. If a human is doing it twice, AI can do it." },
        ]}
      />

      <UseCases />
      <Pricing />

      <StrategyCallCTA
        eyebrow="Ready to automate the busywork"
        title={
          <>
            Let AI run the<br />
            <span className="serif italic text-white/70">admin.</span>
          </>
        }
        sub="30-minute strategy call. We'll find one or two automations that would save you the most hours — and ship them fast."
        benefits={["Custom-built", "No code required", "Lives in your stack", "Cancel anytime"]}
      />
    </Layout>
  );
}

function UseCases() {
  const [ref, inView] = useInView();
  const cases = [
    {
      tag: "Aesthetic clinic",
      title: "Instant Instagram DM responder",
      copy: "AI agent answers DMs in under 60 seconds, qualifies the enquiry, books the consultation, and sends the deposit link.",
      stat: "62%",
      statLabel: "more booked consults",
    },
    {
      tag: "Dental practice",
      title: "Voice AI for missed calls",
      copy: "Voice AI picks up every missed call out-of-hours, books appointments, and texts the receptionist with the booking.",
      stat: "+£3.1k",
      statLabel: "recovered monthly",
    },
    {
      tag: "Beauty salon",
      title: "Win-back sequence",
      copy: "AI identifies clients who haven't booked in 60+ days, sends a personalised offer, and rebooks them automatically.",
      stat: "23%",
      statLabel: "of dormant clients reactivated",
    },
    {
      tag: "Trades business",
      title: "Quote-request triage",
      copy: "AI triages incoming quote requests by job type, urgency, and value, and routes hot ones straight to WhatsApp.",
      stat: "5h",
      statLabel: "saved per week",
    },
  ];
  return (
    <section ref={ref} className="bg-white text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6`}>Use cases</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight mb-3`} style={{ animationDelay: "0.1s" }}>
          AI that actually <span className="serif italic">earns its keep.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-neutral-600 max-w-xl mb-14`} style={{ animationDelay: "0.15s" }}>
          A few examples of AI agents and automations Asaf has shipped for UK service businesses.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <div key={c.title} className={`${inView ? "fade-up" : "opacity-0"} bg-[#f5f3ee] rounded-3xl p-8`} style={{ animationDelay: `${0.2 + i * 0.05}s` }}>
              <div className="text-xs uppercase tracking-widest text-neutral-500 mb-4">{c.tag}</div>
              <div className="flex items-end justify-between gap-6 mb-4">
                <div className="text-2xl font-medium tracking-tight max-w-xs">{c.title}</div>
                <div className="text-right shrink-0">
                  <div className="text-3xl font-medium text-emerald-700 tracking-tight">{c.stat}</div>
                  <div className="text-xs text-neutral-500">{c.statLabel}</div>
                </div>
              </div>
              <p className="text-neutral-600 text-sm leading-relaxed">{c.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [ref, inView] = useInView();
  const breakdown = [
    { label: "Discovery & build fee", value: "Free", strike: "£750" },
    { label: "Custom AI agent build", value: "Included" },
    { label: "Workflow automations", value: "Included" },
    { label: "Integration with your tools", value: "Included" },
    { label: "Prompt tuning to your brand", value: "Included" },
    { label: "Ongoing improvements", value: "Included" },
    { label: "Hidden fees / extra charges", value: "None. Ever." },
  ];
  return (
    <section ref={ref} className="bg-[#f5f3ee] text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6 text-center`}>Pricing</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight text-center mb-3`} style={{ animationDelay: "0.1s" }}>
          One flat fee. <span className="serif italic">Built around you.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-center text-neutral-600 max-w-md mx-auto mb-14`} style={{ animationDelay: "0.15s" }}>
          A simple monthly fee covers the build, the integration, and ongoing improvements.
        </p>

        <div className={`${inView ? "fade-up" : "opacity-0"} bg-[#0a0a0a] text-white rounded-[32px] p-10 md:p-14 relative overflow-hidden`} style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-2">AI & automations · monthly</div>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-7xl md:text-8xl font-medium tracking-tight">£249</span>
              <span className="text-white/50 text-lg mb-3">/ month</span>
            </div>
            <p className="text-white/60 mb-8 max-w-md">Per agent or workflow. We scope the exact build on the strategy call so you only pay for what you actually need.</p>

            <div className="border-t border-white/10 pt-6 space-y-3 mb-8">
              {breakdown.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/70">{row.label}</span>
                  <span className="flex items-center gap-2">
                    {row.strike && <span className="line-through text-white/30">{row.strike}</span>}
                    <span className={row.value === "None. Ever." ? "text-emerald-400" : "text-white"}>{row.value}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                "Custom AI agents",
                "Workflow automations",
                "CRM & calendar sync",
                "Voice AI receptionist (optional)",
                "WhatsApp / Instagram replies",
                "Follow-up sequences",
                "Ongoing tuning & improvements",
                "Direct WhatsApp support",
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
            <div className="mt-4 text-center text-xs text-white/40 uppercase tracking-widest">No contract · Cancel any time · Start this week</div>
          </div>
        </div>
      </div>
    </section>
  );
}
