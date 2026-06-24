import { Layout } from "../components/Layout";
import { ServiceHero } from "../components/ServiceHero";
import { FeatureGrid } from "../components/FeatureGrid";
import { StrategyCallCTA } from "../components/StrategyCallCTA";
import { useInView } from "../lib/useInView";
import { CALENDLY } from "../lib/constants";
import { ArrowUpRight, Calendar, Check, Quote, Star } from "lucide-react";

export const meta = () => [
  { title: "Website Design & Build — EraLean" },
  {
    name: "description",
    content:
      "High-converting websites designed and built around bookings, not vanity metrics — fast, mobile-first, and fully managed so every visitor turns into a lead.",
  },
];

export default function WebsitePage() {
  return (
    <Layout navVariant="solid">
      <ServiceHero
        eyebrow="Service · Website"
        title={
          <>
            Premium websites,<br />
            <span className="serif italic">fully managed.</span>
          </>
        }
        description="Custom-built, conversion-focused sites for UK service businesses. Domain, hosting, design, updates, and any custom feature you need — one flat monthly fee. No surprises, no contracts."
        stats={[
          { value: "100+", label: "Sites delivered" },
          { value: "7d", label: "Average launch" },
          { value: "£0", label: "Setup fee" },
          { value: "99%", label: "Client satisfaction" },
        ]}
      />

      <FeatureGrid
        eyebrow="What's included"
        title={
          <>
            Everything you need.<br />
            <span className="serif italic text-neutral-500">Nothing you don't.</span>
          </>
        }
        intro="One flat £99/mo management fee covers it all — domain, hosting, custom design, updates, and any feature your business needs. No extra costs."
        background="cream"
        features={[
          { title: "Custom domain", description: "Your .co.uk or .com domain registered, configured, and managed for you." },
          { title: "Premium hosting", description: "Ultra-fast cloud hosting with 99.9% uptime — fully managed and monitored." },
          { title: "Bespoke design", description: "Custom design built around your brand. No templates. Made just for you." },
          { title: "Unlimited updates", description: "New text, images, pages, prices — just send a message and it's done fast." },
          { title: "Any custom feature", description: "Booking systems, contact forms, e-commerce, live chat — built in. No extras." },
          { title: "SSL & security", description: "HTTPS, malware protection, and regular backups so the site stays safe 24/7." },
          { title: "Mobile-first", description: "Looks and performs perfectly on every phone, tablet, and desktop." },
          { title: "Analytics & SEO", description: "Google Analytics setup and basic SEO so customers can actually find you." },
          { title: "Direct WhatsApp support", description: "Message Asaf any time — no ticket queues, no waiting around." },
        ]}
      />

      <Pricing />
      <Process />
      <Reviews />

      <StrategyCallCTA
        eyebrow="Ready to launch your site"
        title={
          <>
            Let's build your <br />
            <span className="serif italic text-white/70">website.</span>
          </>
        }
        sub="30-minute call. We'll map exactly what your site should do — and what it costs. No pitch, no pressure."
        benefits={["£0 setup", "£99/mo all-in", "Live in 7 days", "Cancel anytime"]}
      />
    </Layout>
  );
}

function Pricing() {
  const [ref, inView] = useInView();
  const breakdown = [
    { label: "Setup / build fee", value: "Free", strike: "£500" },
    { label: "Custom domain (.co.uk / .com)", value: "Included" },
    { label: "Premium cloud hosting", value: "Included" },
    { label: "Ongoing updates & management", value: "Included" },
    { label: "Any custom feature you need", value: "Included" },
    { label: "SSL, security & backups", value: "Included" },
    { label: "Hidden fees / extra charges", value: "None. Ever." },
  ];
  return (
    <section ref={ref} className="bg-white text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6 text-center`}>Pricing</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight text-center mb-3`} style={{ animationDelay: "0.1s" }}>
          Simple. Transparent. <span className="serif italic">All-in.</span>
        </h2>
        <p className={`${inView ? "fade-up" : "opacity-0"} text-center text-neutral-600 max-w-md mx-auto mb-14`} style={{ animationDelay: "0.15s" }}>
          One price. Everything included. Built for small businesses — start today, cancel any time.
        </p>

        <div className={`${inView ? "fade-up" : "opacity-0"} bg-[#0a0a0a] text-white rounded-[32px] p-10 md:p-14 relative overflow-hidden`} style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-2">Monthly management fee</div>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-7xl md:text-8xl font-medium tracking-tight">£99</span>
              <span className="text-white/50 text-lg mb-3">/ month</span>
            </div>
            <p className="text-white/60 mb-8 max-w-md">All-in. Domain, hosting, custom design, unlimited updates, any feature you need.</p>

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
                "Custom premium design",
                "Domain + hosting + SSL",
                "Unlimited content updates",
                "Any custom feature",
                "Mobile-responsive",
                "Google Analytics + basic SEO",
                "Direct WhatsApp support",
                "Live within 7 days",
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

function Process() {
  const [ref, inView] = useInView();
  const steps = [
    { n: "01", t: "Get in touch", d: "Book a call or message Asaf on WhatsApp with your business details." },
    { n: "02", t: "We design", d: "A bespoke, premium design tailored to your brand — built from scratch." },
    { n: "03", t: "You approve", d: "Review the design and request any changes. Your satisfaction is guaranteed." },
    { n: "04", t: "We launch", d: "Your site goes live — domain configured, hosting active, SSL on." },
    { n: "05", t: "We manage", d: "Ongoing updates, new features, support — whenever you need us, we're here." },
  ];
  return (
    <section ref={ref} className="bg-[#f5f3ee] text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6`}>How it works</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight mb-14`} style={{ animationDelay: "0.1s" }}>
          From zero to live <span className="serif italic">in 7 days.</span>
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className={`${inView ? "fade-up" : "opacity-0"}`} style={{ animationDelay: `${0.15 + i * 0.06}s` }}>
              <div className="text-xs serif italic text-neutral-400 mb-3">{s.n}</div>
              <div className="text-lg font-medium mb-2">{s.t}</div>
              <div className="text-sm text-neutral-600 leading-relaxed">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [ref, inView] = useInView();
  const t = [
    { q: "Honestly couldn't believe the quality for £99 a month. The website looks absolutely premium — several customers have commented on it. Best investment I've made for my business.", a: "Sarah K.", r: "Beauty salon owner, London" },
    { q: "Was paying £1,200 upfront to another agency and still waiting for updates weeks later. Switched to Asaf and my site was live in 5 days. The ongoing support is incredible.", a: "Mohammed R.", r: "Restaurant owner, Manchester" },
    { q: "They added a custom booking system for my gym within days of asking. Zero extra charge — exactly as promised. I've recommended Eralean to every small business owner I know.", a: "James T.", r: "Personal trainer & gym owner" },
    { q: "Finally a service that actually does what it says — domain, hosting, design, updates, all in one place. I don't have to think about my website at all.", a: "Lisa P.", r: "Freelance accountant, Birmingham" },
  ];
  return (
    <section ref={ref} className="bg-white text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} flex items-end justify-between flex-wrap gap-6 mb-14`}>
          <h2 className="text-[7vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight">
            What clients <span className="serif italic">say.</span>
          </h2>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-black text-black" />)}
            <span className="text-sm text-neutral-600 ml-2">5.0 average</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {t.map((x, i) => (
            <div key={i} className={`${inView ? "fade-up" : "opacity-0"} bg-[#f5f3ee] rounded-3xl p-8 md:p-10 relative`} style={{ animationDelay: `${0.1 + i * 0.06}s` }}>
              <Quote className="w-6 h-6 text-neutral-300 mb-6" />
              <p className="text-lg md:text-xl leading-snug mb-8">{x.q}</p>
              <div className="flex items-center gap-3 pt-6 border-t border-neutral-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-500 flex items-center justify-center text-white text-sm">
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
    </section>
  );
}
