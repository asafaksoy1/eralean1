import { Layout } from "../components/Layout";
import { ServiceHero } from "../components/ServiceHero";
import { FeatureGrid } from "../components/FeatureGrid";
import { StrategyCallCTA } from "../components/StrategyCallCTA";
import { useInView } from "../lib/useInView";
import { CALENDLY } from "../lib/constants";
import { ArrowUpRight, Calendar, Check, Quote, Star, Plus } from "lucide-react";

export default function SocialMediaPage() {
  return (
    <Layout navVariant="solid">
      <ServiceHero
        eyebrow="Service · Social Media Management"
        title={
          <>
            Social media that<br />
            <span className="serif italic">actually grows.</span>
          </>
        }
        description="Full social media management for your business. Posts, creative, account management, AI-generated content — done for you across every platform. We post, you focus on running the business."
        stats={[
          { value: "20+", label: "Posts per month" },
          { value: "AI", label: "Powered creative" },
          { value: "5+", label: "Platforms supported" },
          { value: "£0", label: "Setup fee" },
        ]}
      />

      <FeatureGrid
        eyebrow="What's included"
        title={
          <>
            Everything you need to <br />
            <span className="serif italic text-neutral-500">grow on social.</span>
          </>
        }
        intro="Full account management, content creation, and AI-powered creative — no need to film, design, or post yourself."
        background="cream"
        features={[
          { title: "Post creation", description: "20+ branded posts per month, fully written and scheduled. Stories, reels, carousels, static — whatever performs for your business." },
          { title: "Creative setup", description: "Templated brand creative built once, used across every post. Consistent, professional look without the design hassle." },
          { title: "AI videos & images", description: "AI-generated videos and images that match your brand. No need for an in-house creator or expensive photoshoots." },
          { title: "Account management", description: "Full management of your social accounts — bio, links, highlights, contact details, response monitoring." },
          { title: "Content scheduling", description: "Everything pre-scheduled in advance. You see the full month's content plan before anything goes live. You approve, we post." },
          { title: "Hashtag & SEO strategy", description: "Researched hashtags, keyword-optimised captions, location tagging — all the work to make sure posts get found organically." },
          { title: "Multi-platform support", description: "Instagram, Facebook, TikTok, LinkedIn, YouTube — pick what matters most for your business and we run them all." },
          { title: "Monthly reporting", description: "Clear monthly reports showing reach, engagement, follower growth, and what's working." },
          { title: "Direct WhatsApp support", description: "Message Asaf any time — no ticketing systems, no waiting." },
        ]}
      />

      <Notes />
      <Results />
      <Pricing />

      <StrategyCallCTA
        eyebrow="Ready to grow on social"
        title={
          <>
            Let's make your social <br />
            <span className="serif italic text-white/70">actually work.</span>
          </>
        }
        sub="30-minute strategy call. Asaf will look at your current social, your brand, and tell you straight what's possible."
        benefits={["No contracts", "AI creative included", "Live in days", "Cancel anytime"]}
      />
    </Layout>
  );
}

function Notes() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="bg-white text-[#0a0a0a] py-20 md:py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6`}>What's not included</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[7vw] md:text-[3vw] font-medium leading-[0.95] tracking-tight mb-8`} style={{ animationDelay: "0.1s" }}>
          Transparent about <span className="serif italic">what we don't do.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-neutral-600 leading-relaxed text-base md:text-lg max-w-2xl mb-8`} style={{ animationDelay: "0.15s" }}>
          We believe in being upfront. Here's what's not part of the social media management package — so there are no surprises later.
        </p>
        <div className={`${inView ? "fade-up" : "opacity-0"} space-y-3`} style={{ animationDelay: "0.2s" }}>
          <div className="flex items-start gap-3 text-base text-neutral-700">
            <span className="text-neutral-400 mt-1">×</span>
            <span><span className="font-medium">On-site image or video creation.</span> We don't visit your location to film or photograph. All creative is AI-generated or built from assets you provide.</span>
          </div>
          <div className="flex items-start gap-3 text-base text-neutral-700">
            <span className="text-neutral-400 mt-1">×</span>
            <span><span className="font-medium">Custom photoshoots or video shoots.</span> If you need a professional photographer or videographer on location, we can recommend partners but it's not part of this package.</span>
          </div>
          <div className="flex items-start gap-3 text-base text-neutral-700">
            <span className="text-neutral-400 mt-1">×</span>
            <span><span className="font-medium">Paid ad campaigns.</span> This service is organic social only. For paid Meta or TikTok ads, see our <a href="/services/ads" className="underline">Ads service</a>.</span>
          </div>
          <div className="flex items-start gap-3 text-base text-neutral-700">
            <span className="text-neutral-400 mt-1">×</span>
            <span><span className="font-medium">Community management beyond DMs.</span> We respond to direct messages and basic comments. Full influencer outreach or PR is a separate service.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  const [ref, inView] = useInView();
  const cases = [
    { tag: "Instagram growth", industry: "Beauty salon", spent: "£0", primary: "+4,820", primaryLabel: "Followers (90d)", roas: "8.4% engagement", reach: "284K reach" },
    { tag: "TikTok content", industry: "Aesthetic clinic", spent: "£0", primary: "+12,400", primaryLabel: "Followers (90d)", roas: "1.2M views", reach: "23 viral posts" },
    { tag: "LinkedIn presence", industry: "Consultancy", spent: "£0", primary: "+892", primaryLabel: "Connections (90d)", roas: "47K impressions", reach: "186 leads" },
    { tag: "Facebook engagement", industry: "Local trade", spent: "£0", primary: "+2,140", primaryLabel: "Page likes (90d)", roas: "6.1% engagement", reach: "94K reach" },
    { tag: "Multi-platform", industry: "Dental practice", spent: "£0", primary: "+8,200", primaryLabel: "Total followers (90d)", roas: "12% growth", reach: "412K reach" },
    { tag: "YouTube shorts", industry: "Fitness coach", spent: "£0", primary: "+3,180", primaryLabel: "Subscribers (90d)", roas: "847K views", reach: "29% retention" },
  ];
  return (
    <section ref={ref} className="bg-white text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6`}>Real results</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight mb-3`} style={{ animationDelay: "0.1s" }}>
          Real growth. <span className="serif italic">Real engagement.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-neutral-600 max-w-xl mb-14`} style={{ animationDelay: "0.15s" }}>
          A sample of social media accounts Asaf has grown across different industries — all organic, no paid ad spend.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <div key={c.tag + i} className={`${inView ? "fade-up" : "opacity-0"} bg-[#f5f3ee] rounded-3xl p-7`} style={{ animationDelay: `${0.2 + i * 0.05}s` }}>
              <div className="flex items-center justify-between mb-5">
                <div className="text-xs uppercase tracking-widest text-neutral-500">{c.tag}</div>
                <div className="text-[10px] uppercase tracking-widest text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">Strong</div>
              </div>
              <div className="text-sm text-neutral-600 mb-5">{c.industry}</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Ad spend</div>
                  <div className="text-lg font-medium">{c.spent}</div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">{c.primaryLabel}</div>
                  <div className="text-lg font-medium text-emerald-700">{c.primary}</div>
                </div>
                <div className="bg-white rounded-2xl p-4">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Performance</div>
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
    { q: "We finally have a consistent social presence without me touching my phone. Asaf and the AI creative are honestly incredible — looks like we have a full content team.", a: "Layla R.", r: "Aesthetic clinic owner, London" },
    { q: "Our Instagram went from 800 followers to 5,000 in 3 months. The AI-generated content actually looks better than the photographer we paid £2k for last year.", a: "Tom W.", r: "Fitness studio owner, Leeds" },
    { q: "I don't have to think about social media anymore. Asaf handles everything, I approve once a month. Our DMs are full of new client enquiries every week.", a: "Sophia M.", r: "Beauty salon owner, Manchester" },
  ];
  return (
    <div className="mt-20">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
        <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
          What social clients <span className="serif italic">say.</span>
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
  const breakdown = [
    { label: "Setup / onboarding fee", value: "Free", strike: "£500" },
    { label: "Brand creative templates", value: "Included" },
    { label: "AI image & video generation", value: "Included" },
    { label: "20+ posts per platform / month", value: "Included" },
    { label: "Content scheduling", value: "Included" },
    { label: "Hashtag & caption research", value: "Included" },
    { label: "DM monitoring", value: "Included" },
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
          One base price per platform. Add more platforms as you grow.
        </p>

        <div className={`${inView ? "fade-up" : "opacity-0"} bg-[#0a0a0a] text-white rounded-[32px] p-10 md:p-14 relative overflow-hidden`} style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-2">Done-for-you social media</div>
            <div className="flex items-end gap-2 mb-3">
              <span className="text-7xl md:text-8xl font-medium tracking-tight">£190</span>
              <span className="text-white/50 text-lg mb-3">/ month · first platform</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full px-4 py-2 text-sm mb-8">
              <Plus className="w-4 h-4" />
              <span>Additional platforms <span className="font-medium">+£50/month each</span></span>
            </div>
            <p className="text-white/60 mb-8 max-w-md">Pick Instagram, TikTok, Facebook, LinkedIn, or YouTube. Start with one. Add more whenever you're ready.</p>

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
                "All major platforms",
                "AI image & video creative",
                "20+ posts per month per platform",
                "Branded templates",
                "Content scheduling",
                "Hashtag & caption research",
                "Monthly results report",
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
