import { Layout } from "../components/Layout";
import { ServiceHero } from "../components/ServiceHero";
import { FeatureGrid } from "../components/FeatureGrid";
import { StrategyCallCTA } from "../components/StrategyCallCTA";
import { useInView } from "../lib/useInView";
import { CALENDLY } from "../lib/constants";
import { ArrowUpRight, Calendar, Check, Quote, Sparkles, Star } from "lucide-react";

export const meta = () => [
  { title: "Google & Meta Ads Management — EraLean" },
  {
    name: "description",
    content:
      "End-to-end Google and Meta ads management — creative, copy, audiences, and daily optimisation — engineered to bring you qualified leads at a profitable cost.",
  },
];

export default function AdsPage() {
  return (
    <Layout navVariant="solid">
      <ServiceHero
        eyebrow="Service · Meta & Google Ads"
        title={
          <>
            Ads that actually<br />
            <span className="serif italic">convert.</span>
          </>
        }
        description="Facebook, Instagram, and Google ad campaigns fully managed for your business. Real ROAS, real reporting, no contracts. We've delivered 4.69M+ reach and up to 6× ROAS for UK service businesses."
        stats={[
          { value: "50+", label: "Campaigns managed" },
          { value: "4.09×", label: "Average ROAS" },
          { value: "4.69M+", label: "People reached" },
          { value: "£0", label: "Setup fee" },
        ]}
      />

      <FeatureGrid
        eyebrow="What's included"
        title={
          <>
            Everything you need to <br />
            <span className="serif italic text-neutral-500">run profitable ads.</span>
          </>
        }
        intro="Full campaign setup, creative, targeting, and optimisation — all managed by Asaf. One simple monthly fee. No extras."
        background="cream"
        features={[
          { title: "Campaign strategy & setup", description: "Full campaign architecture built for your business goals — awareness, traffic, leads, or purchases." },
          { title: "Ad creative & copywriting", description: "Scroll-stopping visuals and persuasive copy written and designed for your target audience." },
          { title: "Audience targeting", description: "Laser-focused audience research — interest-based, lookalike, and custom audiences from your customers." },
          { title: "Daily optimisation", description: "Daily monitoring and weekly optimisation — scaling what works, cutting what doesn't. We chase ROAS." },
          { title: "Retargeting campaigns", description: "Bring back website visitors and past customers with retargeting that converts warm audiences." },
          { title: "Pixel & conversion setup", description: "Meta Pixel and Google tracking, conversion API setup — every sale gets attributed correctly." },
          { title: "Monthly reporting", description: "Clear monthly reports showing exactly what's been spent, what came in, and what's next." },
          { title: "Direct WhatsApp support", description: "Message Asaf any time — no ticketing systems, no waiting." },
          { title: "Both platforms", description: "Meta (Facebook + Instagram) and Google ads — wherever your customers actually are." },
        ]}
      />

      <Results />
      <Pricing />

      <StrategyCallCTA
        eyebrow="Ready to get profitable ads"
        title={
          <>
            Let's turn ad spend <br />
            <span className="serif italic text-white/70">into revenue.</span>
          </>
        }
        sub="30-minute strategy call. Asaf will look at your current spend, your offer, and tell you straight what's possible."
        benefits={["No contracts", "Creative included", "Live in days", "Cancel anytime"]}
      />
    </Layout>
  );
}

function Results() {
  const [ref, inView] = useInView();
  const cases = [
    { tag: "E-commerce sales", industry: "Fashion & apparel", spent: "£41,382", primary: "£178,756", primaryLabel: "Revenue", roas: "4.32×", reach: "1.23M" },
    { tag: "Lead generation", industry: "Real estate", spent: "£27,614", primary: "2,847", primaryLabel: "Leads", roas: "£9.70 CPL", reach: "963K" },
    { tag: "Traffic & conversions", industry: "Health & beauty", spent: "£14,893", primary: "£66,321", primaryLabel: "Revenue", roas: "4.45×", reach: "84K clicks" },
    { tag: "Retargeting", industry: "Home & furniture", spent: "£11,247", primary: "£51,384", primaryLabel: "Revenue", roas: "4.57×", reach: "6.83% conv" },
    { tag: "Brand awareness", industry: "Food & beverage", spent: "£18,539", primary: "+14,382", primaryLabel: "Followers", roas: "3.82M imp", reach: "1.14M" },
    { tag: "App installs", industry: "SaaS / tech", spent: "£12,184", primary: "3,847", primaryLabel: "Installs", roas: "£3.17 CPI", reach: "1,293 trials" },
  ];
  return (
    <section ref={ref} className="bg-white text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6`}>Real results</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight mb-3`} style={{ animationDelay: "0.1s" }}>
          Real numbers. <span className="serif italic">Real campaigns.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-neutral-600 max-w-xl mb-14`} style={{ animationDelay: "0.15s" }}>
          A sample of Meta and Google ad campaigns Asaf has managed across different industries and objectives — every figure is real.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <div key={c.tag + i} className={`${inView ? "fade-up" : "opacity-0"} bg-[#f5f3ee] rounded-3xl p-7`} style={{ animationDelay: `${0.2 + i * 0.05}s` }}>
              <div className="flex items-center justify-between mb-5">
                <div className="text-xs uppercase tracking-widest text-neutral-500">{c.tag}</div>
                <div className="text-[10px] uppercase tracking-widest text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">Above avg</div>
              </div>
              <div className="text-sm text-neutral-600 mb-5">{c.industry}</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Spent</div>
                  <div className="text-lg font-medium">{c.spent}</div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">{c.primaryLabel}</div>
                  <div className="text-lg font-medium text-emerald-700">{c.primary}</div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">ROAS / metric</div>
                  <div className="text-lg font-medium">{c.roas}</div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Reach</div>
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
    { q: "We were wasting money on ads for months with another agency. Asaf completely restructured our campaigns and within 3 weeks we were seeing a 5× return. Absolutely incredible.", a: "Kemal M.", r: "E-commerce store owner, Istanbul" },
    { q: "The results speak for themselves — 6× ROAS in the first month. I finally understand where every penny of my ad budget is going, and it's working harder than ever.", a: "Sarah P.", r: "Beauty brand owner, London" },
    { q: "Our cost per lead dropped from £34 to £9.70 after Asaf took over. We're now getting more qualified enquiries than we can handle. Genuinely changed our business.", a: "James H.", r: "Property developer, Birmingham" },
  ];
  return (
    <div className="mt-20">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
        <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
          What ad clients <span className="serif italic">say.</span>
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

function Pricing() {
  const [ref, inView] = useInView();

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
    <section ref={ref} className="bg-[#f5f3ee] text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6 text-center`}>Pricing</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight text-center mb-3`} style={{ animationDelay: "0.1s" }}>
          Simple. Transparent. <span className="serif italic">No fluff.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-center text-neutral-600 max-w-lg mx-auto mb-14`} style={{ animationDelay: "0.15s" }}>
          Run just one platform, or take both and save £99 a month. A flat monthly management fee — you set your own ad budget and pay the platforms directly.
        </p>

        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`${inView ? "fade-up" : "opacity-0"} relative flex flex-col rounded-[28px] p-8 md:p-9 ${
                tier.featured
                  ? "bg-[#0a0a0a] text-white overflow-hidden shadow-2xl shadow-black/20"
                  : "bg-white text-[#0a0a0a] border border-black/5"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.07}s` }}
            >
              {tier.featured && <div className="absolute inset-0 grain pointer-events-none" />}
              <div className="relative flex flex-col h-full">
                {tier.featured && (
                  <div className="inline-flex self-start items-center gap-1.5 text-[10px] uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full mb-5">
                    <Sparkles className="w-3 h-3" /> Best value
                  </div>
                )}

                <div className={`text-xs uppercase tracking-widest mb-1 ${tier.featured ? "text-white/50" : "text-neutral-500"}`}>
                  {tier.name}
                </div>
                <div className={`text-sm mb-6 ${tier.featured ? "text-white/60" : "text-neutral-500"}`}>{tier.tagline}</div>

                <div className="flex items-end gap-2">
                  {tier.strike && <span className="text-2xl line-through text-white/30 mb-1.5">{tier.strike}</span>}
                  <span className="text-5xl md:text-6xl font-medium tracking-tight">{tier.price}</span>
                  <span className={`text-base mb-2 ${tier.featured ? "text-white/50" : "text-neutral-400"}`}>/ mo</span>
                </div>
                {tier.save ? (
                  <div className="text-xs text-emerald-400 mt-1 mb-6">{tier.save}</div>
                ) : (
                  <div className="text-xs text-neutral-400 mt-1 mb-6">Management fee — you set your own budget</div>
                )}

                <div className={`border-t pt-6 space-y-3 mb-8 ${tier.featured ? "border-white/10" : "border-neutral-200"}`}>
                  {tier.features.map((f) => (
                    <div key={f} className={`flex items-start gap-2.5 text-sm ${tier.featured ? "text-white/80" : "text-neutral-700"}`}>
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${tier.featured ? "text-emerald-400" : "text-emerald-600"}`} />
                      {f}
                    </div>
                  ))}
                </div>

                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto rounded-full px-6 py-4 text-base transition-colors inline-flex items-center justify-center gap-2 group w-full ${
                    tier.featured
                      ? "bg-white text-black hover:bg-neutral-200"
                      : "bg-[#0a0a0a] text-white hover:bg-neutral-800"
                  }`}
                >
                  <Calendar className="w-5 h-5" />
                  Book a strategy call
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`${inView ? "fade-up" : "opacity-0"} mt-10 text-center text-xs text-neutral-500 uppercase tracking-widest`} style={{ animationDelay: "0.5s" }}>
          Every plan includes free setup (worth £500) · No contract · Cancel any time
        </div>
      </div>
    </section>
  );
}
