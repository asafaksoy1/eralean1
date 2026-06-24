import { Layout } from "../components/Layout";
import { ServiceHero } from "../components/ServiceHero";
import { FeatureGrid } from "../components/FeatureGrid";
import { StrategyCallCTA } from "../components/StrategyCallCTA";
import { useInView } from "../lib/useInView";
import { CALENDLY } from "../lib/constants";
import { trackLead } from "../lib/analytics";
import { ArrowUpRight, Calendar, Check, Quote, Star } from "lucide-react";

export const meta = () => [
  { title: "Ecommerce Email Marketing — EraLean" },
  {
    name: "description",
    content:
      "Done-for-you ecommerce email marketing — Klaviyo flows and campaigns that turn subscribers into repeat customers and recover revenue on autopilot.",
  },
];

export default function EmailMarketingPage() {
  return (
    <Layout navVariant="solid" offer="email">
      <ServiceHero
        offer="email"
        eyebrow="Service · Email Marketing"
        title={
          <>
            Email that actually<br />
            <span className="serif italic">prints money.</span>
          </>
        }
        description="Already on Klaviyo or Mailchimp but it's not pulling its weight? I rebuild your flows, campaigns, and segmentation from scratch and run the whole channel for you — so email becomes your highest-ROI revenue source, not an afterthought."
        stats={[
          { value: "20.4%", label: "Of total revenue from email" },
          { value: "£128K", label: "Email revenue in 60 days" },
          { value: "+55%", label: "Revenue vs prev. period" },
          { value: "£0", label: "Setup fee" },
        ]}
      />

      <FeatureGrid
        eyebrow="What's included"
        title={
          <>
            Everything you need to <br />
            <span className="serif italic text-neutral-500">scale with email.</span>
          </>
        }
        intro="Complete email marketing setup and management — flows, campaigns, segmentation, full account management. One flat fee. No extras."
        background="cream"
        features={[
          { title: "Email automation flows", description: "Welcome series, abandoned cart, post-purchase, win-back, browse abandonment — every revenue-driving flow set up and optimised." },
          { title: "Weekly campaigns", description: "Planned, designed, written, and sent. New campaign every week to keep your list engaged and buying." },
          { title: "Smart segmentation", description: "Segment your list by behaviour, value, and engagement so the right message hits the right person at the right time." },
          { title: "Beautiful email design", description: "Branded email templates designed to match your business — mobile-first, click-friendly, conversion-focused." },
          { title: "List growth strategy", description: "Pop-ups, exit-intent forms, lead magnets, signup incentives — built and optimised to grow your list every month." },
          { title: "A/B testing", description: "Subject lines, send times, copy variations, CTAs — continuously tested and improved to push open and click rates higher." },
          { title: "Deliverability monitoring", description: "Domain authentication, list cleaning, sender reputation management — your emails land in inboxes, not spam." },
          { title: "Monthly reporting", description: "Clear monthly reports showing revenue from email, open rates, click rates, list growth, and what's next." },
          { title: "Direct WhatsApp support", description: "Message Asaf any time — no ticketing systems, no waiting." },
        ]}
      />

      <Results />
      <Showcase />
      <Pricing />

      <StrategyCallCTA
        eyebrow="Ready to make email your top channel"
        title={
          <>
            Let's turn your list <br />
            <span className="serif italic text-white/70">into revenue.</span>
          </>
        }
        sub="30-minute strategy call. Asaf will audit your current email setup, your list, and tell you straight what's possible."
        benefits={["No contracts", "All flows included", "Live in days", "Cancel anytime"]}
        offer="email"
      />

      <section className="bg-[#0a0a0a] text-white/30 px-6 md:px-10 pb-12">
        <div className="max-w-3xl mx-auto text-[11px] leading-relaxed">
          <p>
            Results disclaimer: Figures shown are from real client accounts managed by Eralean over the stated periods. These results are not typical or guaranteed. Email marketing performance depends on many factors unique to each business — including existing list size, product, pricing, traffic, and market. Eralean does not promise or guarantee specific revenue, ROI, or financial outcomes. Your results will vary.
          </p>
        </div>
      </section>
    </Layout>
  );
}

function Results() {
  const [ref, inView] = useInView();
  const cases = [
    { tag: "Welcome flow", industry: "Added to list", spent: "23,039", primary: "£50,733", primaryLabel: "Revenue", roas: "£2.20", reach: "+23%" },
    { tag: "Abandoned checkout", industry: "Checkout started", spent: "3,445", primary: "£17,434", primaryLabel: "Revenue", roas: "£5.06", reach: "+48%" },
    { tag: "Abandoned cart", industry: "Added to cart", spent: "2,758", primary: "£14,697", primaryLabel: "Revenue", roas: "£5.33", reach: "+23%" },
    { tag: "Browse abandonment", industry: "Viewed product", spent: "18,097", primary: "£11,336", primaryLabel: "Revenue", roas: "£0.63", reach: "Live" },
    { tag: "Collection flow", industry: "Viewed collection", spent: "3,360", primary: "£3,170", primaryLabel: "Revenue", roas: "£0.94", reach: "+117%" },
    { tag: "All flows combined", industry: "Nov–Dec 2025", spent: "—", primary: "£97,372", primaryLabel: "Flow revenue", roas: "75.5%", reach: "of email" },
  ];
  return (
    <section ref={ref} className="bg-white text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6`}>Real results · live account</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight mb-3`} style={{ animationDelay: "0.1s" }}>
          £128,979 from email. <span className="serif italic">In 60 days.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-neutral-600 max-w-xl mb-14`} style={{ animationDelay: "0.15s" }}>
          A real Klaviyo account managed by Asaf, Nov–Dec 2025: 20.4% of total revenue driven by email, with flows alone bringing in £97,372. Most stores think email is "handled" — then discover their flows were half-built and leaking revenue. Every flow below was rebuilt and optimised from scratch. Real screenshots shared on your call.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <div key={c.tag + i} className={`${inView ? "fade-up" : "opacity-0"} bg-[#f5f3ee] rounded-3xl p-7`} style={{ animationDelay: `${0.2 + i * 0.05}s` }}>
              <div className="flex items-center justify-between mb-5">
                <div className="text-xs uppercase tracking-widest text-neutral-500">{c.tag}</div>
                <div className="text-[10px] uppercase tracking-widest text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">Top tier</div>
              </div>
              <div className="text-sm text-neutral-600 mb-5">{c.industry}</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Deliveries</div>
                  <div className="text-lg font-medium">{c.spent}</div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">{c.primaryLabel}</div>
                  <div className="text-lg font-medium text-emerald-700">{c.primary}</div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Per recipient</div>
                  <div className="text-lg font-medium">{c.roas}</div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Change</div>
                  <div className="text-lg font-medium">{c.reach}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Reviews />
      </div>
    </section>
  );
}

function Reviews() {
  const t = [
    { q: "Our email list went from a dead afterthought to 30% of our monthly revenue. Asaf rebuilt every flow from scratch and the difference is night and day.", a: "Emma R.", r: "Skincare brand owner, London" },
    { q: "We finally have a proper welcome flow, abandoned cart, and weekly campaigns running. Email now does the work of an extra salesperson — without the salary.", a: "Marcus T.", r: "E-commerce founder, Manchester" },
    { q: "I was paying another agency £2k a month for email and getting nothing. Asaf charges less and we 3x'd email revenue in two months. Real, transparent, fast.", a: "Olivia W.", r: "Fashion brand owner, Bristol" },
  ];
  return (
    <div className="mt-20">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
        <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
          What email clients <span className="serif italic">say.</span>
        </h3>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-black text-black" />)}
          <span className="text-sm text-neutral-600 ml-2">5.0 average</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {t.map((x, i) => (
          <div key={i} className="bg-[#f5f3ee] rounded-3xl p-7">
            <Quote className="w-5 h-5 text-neutral-300 mb-4" />
            <p className="text-base leading-snug mb-6">{x.q}</p>
            <div className="flex items-center gap-3 pt-5 border-t border-neutral-200">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-500 flex items-center justify-center text-white text-xs">
                {x.a.charAt(0)}
              </div>
              <div>
                <div className="text-sm">{x.a}</div>
                <div className="text-xs text-neutral-500">{x.r}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Showcase() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="bg-[#0a0a0a] text-white py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-white/40 mb-6`}>The work</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight mb-3`} style={{ animationDelay: "0.1s" }}>
          What I build, <span className="serif italic text-white/70">end to end.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-white/50 max-w-xl mb-16`} style={{ animationDelay: "0.15s" }}>
          The anatomy of a high-performing email channel — campaigns, automation flows, and list-growth forms. Every piece designed branded, mobile-first, and built to convert. Live examples from your own account shared on the call.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* CAMPAIGN MOCKUP */}
          <div className={`${inView ? "fade-up" : "opacity-0"} bg-white/[0.03] border border-white/10 rounded-3xl p-6`} style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs uppercase tracking-widest text-emerald-400">Campaign</span>
              <span className="text-[10px] text-white/30">Weekly send</span>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-9 bg-[#0a0a0a] flex items-center justify-center">
                <div className="text-white text-[10px] tracking-[0.3em] uppercase">Your Brand</div>
              </div>
              <div className="h-28 bg-gradient-to-br from-[#e9e2d6] to-[#d8cdb8] flex items-center justify-center">
                <div className="text-[#0a0a0a]/40 text-[10px] uppercase tracking-widest">Hero image</div>
              </div>
              <div className="p-4 space-y-2">
                <div className="h-3 w-3/4 bg-[#0a0a0a] rounded-full" />
                <div className="h-2 w-full bg-neutral-200 rounded-full" />
                <div className="h-2 w-5/6 bg-neutral-200 rounded-full" />
                <div className="mt-3 h-7 w-28 bg-emerald-600 rounded-full flex items-center justify-center">
                  <div className="text-white text-[9px] uppercase tracking-widest">Shop now</div>
                </div>
              </div>
            </div>
            <p className="text-xs text-white/40 mt-5 leading-relaxed">Segmented, on-brand campaigns with one clear CTA — designed to drive revenue without fatiguing your list.</p>
          </div>

          {/* FLOW MOCKUP */}
          <div className={`${inView ? "fade-up" : "opacity-0"} bg-white/[0.03] border border-white/10 rounded-3xl p-6`} style={{ animationDelay: "0.28s" }}>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs uppercase tracking-widest text-emerald-400">Automation flow</span>
              <span className="text-[10px] text-white/30">Abandoned cart</span>
            </div>
            <div className="space-y-3">
              {[
                { t: "Trigger", d: "Cart abandoned", c: "bg-amber-500/20 border-amber-500/40 text-amber-300" },
                { t: "Wait 1 hour", d: "Then send Email 1", c: "bg-white/5 border-white/15 text-white/50" },
                { t: "Email 1", d: "Reminder + product", c: "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" },
                { t: "Wait 24 hours", d: "If no purchase", c: "bg-white/5 border-white/15 text-white/50" },
                { t: "Email 2", d: "10% off nudge", c: "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" },
              ].map((s, i) => (
                <div key={i}>
                  <div className={`border rounded-xl px-4 py-3 ${s.c}`}>
                    <div className="text-[11px] font-medium uppercase tracking-wide">{s.t}</div>
                    <div className="text-[10px] opacity-70">{s.d}</div>
                  </div>
                  {i < 4 && <div className="w-px h-3 bg-white/15 mx-auto" />}
                </div>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-5 leading-relaxed">Multi-step automations that recover lost sales and run 24/7 — built once, optimised continuously.</p>
          </div>

          {/* SIGN-UP FORM MOCKUP */}
          <div className={`${inView ? "fade-up" : "opacity-0"} bg-white/[0.03] border border-white/10 rounded-3xl p-6`} style={{ animationDelay: "0.36s" }}>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs uppercase tracking-widest text-emerald-400">Sign-up form</span>
              <span className="text-[10px] text-white/30">Pop-up</span>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-2xl">
              <div className="text-center space-y-3">
                <div className="text-[#0a0a0a] text-lg font-medium leading-tight">Get 10% off<br />your first order</div>
                <div className="h-2 w-4/5 bg-neutral-200 rounded-full mx-auto" />
                <div className="border border-neutral-300 rounded-lg h-8 flex items-center px-3">
                  <span className="text-neutral-400 text-[10px]">you@email.com</span>
                </div>
                <div className="h-9 bg-[#0a0a0a] rounded-lg flex items-center justify-center">
                  <span className="text-white text-[10px] uppercase tracking-widest">Unlock 10% off</span>
                </div>
                <div className="text-neutral-400 text-[8px]">No thanks, I'll pay full price</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-white/5 rounded-lg py-2 text-center">
                <div className="text-emerald-400 text-sm font-medium">+8%</div>
                <div className="text-white/30 text-[8px] uppercase">Opt-in</div>
              </div>
              <div className="bg-white/5 rounded-lg py-2 text-center">
                <div className="text-emerald-400 text-sm font-medium">2-step</div>
                <div className="text-white/30 text-[8px] uppercase">Flow</div>
              </div>
              <div className="bg-white/5 rounded-lg py-2 text-center">
                <div className="text-emerald-400 text-sm font-medium">Exit</div>
                <div className="text-white/30 text-[8px] uppercase">Intent</div>
              </div>
            </div>
            <p className="text-xs text-white/40 mt-5 leading-relaxed">High-converting pop-ups and exit-intent forms that grow your list with buyers, not browsers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [ref, inView] = useInView();
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
  return (
    <section ref={ref} className="bg-[#f5f3ee] text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6 text-center`}>Pricing</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight text-center mb-3`} style={{ animationDelay: "0.1s" }}>
          Simple. Transparent. <span className="serif italic">No fluff.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-center text-neutral-600 max-w-md mx-auto mb-14`} style={{ animationDelay: "0.15s" }}>
          One flat fee. We manage your entire email channel. You count the revenue.
        </p>

        <div className={`${inView ? "fade-up" : "opacity-0"} bg-[#0a0a0a] text-white rounded-[32px] p-10 md:p-14 relative overflow-hidden`} style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-2">Done-for-you email marketing</div>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-7xl md:text-8xl font-medium tracking-tight">£490</span>
              <span className="text-white/50 text-lg mb-3">/ month</span>
            </div>
            <p className="text-white/60 mb-8 max-w-md">Full Klaviyo or Mailchimp management. Flows, campaigns, segmentation, design, reporting — all done.</p>

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
                "Klaviyo or Mailchimp",
                "All flows built from scratch",
                "4 weekly campaigns / month",
                "Smart list segmentation",
                "Branded email design",
                "A/B testing built in",
                "Monthly results report",
                "Direct WhatsApp support",
              ].map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-white/80">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" onClick={() => trackLead("email")}
               className="bg-white text-black rounded-full px-6 py-4 text-base hover:bg-neutral-200 transition-colors inline-flex items-center gap-3 group w-full justify-center">
              <Calendar className="w-5 h-5" />
              Book your free strategy call
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </a>
            <div className="mt-4 text-center text-xs text-white/40 uppercase tracking-widest">No contract · Cancel any time · Live in 7 days</div>
            <div className="mt-2 text-center text-xs text-emerald-400/80">First month not happy? Cancel and pay nothing further — no lock-in, no risk.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
