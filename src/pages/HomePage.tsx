import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, ChevronDown, Quote, Star, Plus } from "lucide-react";
import { CALENDLY, SERVICES } from "../lib/constants";
import { useInView } from "../lib/useInView";
import { GlobalStyles } from "../components/GlobalStyles";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { StrategyCallCTA } from "../components/StrategyCallCTA";
import { PHOTO } from "../lib/photo";

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-locked overlay nav for hero, sticky after scroll
  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: "'Readex Pro', system-ui, sans-serif" }}>
      <GlobalStyles />

      {/* Sticky nav appears after scrolling past hero */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <Nav variant="solid" />
      </div>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="absolute inset-0 grid-bg opacity-[0.04]" />
          <div className="absolute inset-0 grain" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        </div>

        {/* Overlay nav (visible until scrolled) */}
        <div className={`absolute z-30 left-0 right-0 top-0 transition-all duration-500 ${scrolled ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100"}`}>
          <Nav variant="overlay" />
        </div>

        {/* Foreground */}
        <div className="relative h-full w-full">
          <div className="absolute left-6 md:left-10 top-[14%] flex items-center gap-2 text-xs text-white/80 fade-up" style={{ animationDelay: "0.5s" }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot" />
            <span>Accepting 3 new clients this month</span>
          </div>

          <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-4 md:left-10 top-[18%] fade-up" style={{ animationDelay: "0.1s" }}>More</h1>
          <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] right-4 md:right-10 top-[37%] fade-up" style={{ animationDelay: "0.25s" }}>Customers,</h1>
          <h1 className="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw] left-[8%] md:left-[20%] top-[56%] fade-up" style={{ animationDelay: "0.4s" }}>
            <span className="serif italic font-normal">on autopilot.</span>
          </h1>

          <p className="absolute left-6 md:left-10 top-[47%] max-w-[280px] text-[15px] leading-snug text-white/90 fade-up" style={{ animationDelay: "0.55s" }}>
            Done-for-you customer acquisition systems for UK service businesses. Website, ads, AI, and follow-up — you just take the calls.
          </p>

          <div className="absolute right-6 md:right-24 top-[14%] fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-3 justify-end">
              <div className="hidden md:block h-px w-24 bg-white/40 rotate-[20deg]" />
              <span className="text-4xl md:text-5xl font-medium tracking-tight">+6</span>
            </div>
            <div className="text-xs md:text-sm text-white/70 mt-1 text-right">Years experience</div>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />

          <div className="absolute left-6 md:left-20 bottom-20 md:bottom-24 fade-up" style={{ animationDelay: "0.7s" }}>
            <div className="flex items-center gap-3">
              <span className="text-4xl md:text-5xl font-medium tracking-tight">100%</span>
              <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
            </div>
            <div className="text-xs md:text-sm text-white/70 mt-1">Done for you</div>
          </div>

          <div className="absolute right-6 md:right-20 bottom-16 md:bottom-20 fade-up" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-3 justify-end">
              <div className="hidden md:block h-px w-24 bg-white/40 rotate-[-20deg]" />
              <span className="text-4xl md:text-5xl font-medium tracking-tight">7d</span>
            </div>
            <div className="text-xs md:text-sm text-white/70 mt-1 text-right">Average launch time</div>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs">
            <span>Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </div>
      </section>

      <Intro />
      <Industries />
      <How />
      <CaseStudies />
      <About />
      <Testimonials />
      <FAQ />
      <StrategyCallCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Intro() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} className="bg-[#f5f3ee] text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-8`}>What I do</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[5vw] font-medium leading-[0.95] tracking-tight`} style={{ animationDelay: "0.1s" }}>
          You run the business.<br />
          <span className="serif italic text-neutral-500">I bring the customers.</span>
        </h2>
        <div className={`${inView ? "fade-up" : "opacity-0"} mt-12 grid md:grid-cols-4 gap-8 max-w-5xl`} style={{ animationDelay: "0.2s" }}>
          {SERVICES.map((s, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <Link key={s.to} to={s.to} className="border-t border-neutral-300 pt-6 group block">
                <div className="text-xs text-neutral-500 mb-3">{num}</div>
                <div className="text-2xl mb-2 flex items-center gap-2">
                  {s.label}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-sm text-neutral-600 leading-relaxed">{s.description}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const items = ["Clinics", "Dentists", "Beauty salons", "Gyms", "Law firms", "Accountants", "Trades", "Agencies", "Consultants", "Med spas", "Barbers", "Physiotherapists"];
  return (
    <section className="bg-[#f5f3ee] py-12 border-y border-neutral-200 overflow-hidden">
      <div className="text-center text-xs uppercase tracking-[0.2em] text-neutral-500 mb-8">Built for service businesses across the UK</div>
      <div className="relative">
        <div className="flex marquee-track w-max">
          {[...items, ...items].map((i, idx) => (
            <div key={idx} className="flex items-center gap-12 px-6 text-2xl md:text-3xl serif italic text-neutral-700 whitespace-nowrap">
              {i}
              <span className="text-neutral-400">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function How() {
  const [ref, inView] = useInView();
  const steps = [
    { n: "1", t: "Free strategy call", d: "30 minutes on Zoom. We map exactly what an acquisition system would look like for your business — what to build, what to expect, what it costs. Zero pitch." },
    { n: "2", t: "We build the system", d: "Website, ads, AI follow-up automations. Fully done-for-you in 7–14 days. You focus on running the business while we handle every technical piece." },
    { n: "3", t: "You take the calls", d: "Leads come straight to your calendar or inbox. We handle the engine, optimise monthly, and report transparently. You handle the customers." },
  ];
  return (
    <section ref={ref} id="how" className="bg-white text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-8`}>How it works</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4.5vw] font-medium leading-[0.95] tracking-tight mb-16 md:mb-20`} style={{ animationDelay: "0.1s" }}>
          Three steps to a <span className="serif italic">full calendar.</span>
        </h2>
        <div className="space-y-px bg-neutral-200">
          {steps.map((s, i) => (
            <div key={s.n} className={`${inView ? "fade-up" : "opacity-0"} bg-white grid md:grid-cols-12 gap-6 py-10 px-2`} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              <div className="md:col-span-2 text-5xl serif text-neutral-300">{s.n}</div>
              <div className="md:col-span-3 text-2xl">{s.t}</div>
              <div className="md:col-span-7 text-neutral-600 leading-relaxed text-base md:text-lg max-w-xl">{s.d}</div>
            </div>
          ))}
        </div>
        <div className={`${inView ? "fade-up" : "opacity-0"} mt-16 text-center`} style={{ animationDelay: "0.6s" }}>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-black text-white rounded-full px-8 py-4 text-base hover:bg-neutral-800 transition-colors group">
            <Calendar className="w-5 h-5" />
            Book your free strategy call
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const [ref, inView] = useInView();
  const cases = [
    { tag: "Aesthetic clinic", stat: "47", unit: "Consultations / month", copy: "Rebuilt the booking flow, restructured Meta ads, added SMS follow-up. Cost per booking dropped 70% in 60 days.", region: "London" },
    { tag: "Dental practice", stat: "+£4.2k", unit: "Monthly recurring revenue", copy: "Google ads for implants and Invisalign + new-patient landing page. 14 high-value patients in the first quarter.", region: "Manchester" },
    { tag: "Beauty salon", stat: "3.2x", unit: "Return on ad spend", copy: "Instagram-led ad funnel + automated reminder system. Fully booked 3 weeks in advance for the first time in 2 years.", region: "Birmingham" },
  ];
  return (
    <section ref={ref} id="cases" className="bg-[#0a0a0a] text-white py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-white/50 mb-8`}>Case studies</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4.5vw] font-medium leading-[0.95] tracking-tight mb-16 md:mb-20`} style={{ animationDelay: "0.1s" }}>
          Real businesses. <span className="serif italic text-white/60">Real results.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div key={c.tag} className={`${inView ? "fade-up" : "opacity-0"} bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors`} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              <div className="text-xs uppercase tracking-widest text-white/40 mb-6">{c.tag}</div>
              <div className="text-5xl md:text-6xl font-medium tracking-tight mb-1">{c.stat}</div>
              <div className="text-sm text-white/60 mb-6">{c.unit}</div>
              <div className="text-white/80 leading-relaxed text-sm mb-8">{c.copy}</div>
              <div className="text-xs text-white/40 pt-6 border-t border-white/10">{c.region}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} id="about" className="bg-[#f5f3ee] text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        <div className={`${inView ? "fade-up" : "opacity-0"} md:col-span-5`}>
          <div className="relative rounded-[32px] overflow-hidden bg-neutral-200 aspect-[5/6] shadow-2xl">
            <img src={PHOTO} alt="Asaf Aksoy" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
              <div className="text-white text-lg">Asaf Aksoy</div>
              <div className="text-white/70 text-xs">Founder, Eralean</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-6`}>About</div>
          <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[7vw] md:text-[3.5vw] font-medium leading-[1] tracking-tight mb-8`} style={{ animationDelay: "0.1s" }}>
            I'm Asaf. <span className="serif italic">I fix lead flow.</span>
          </h2>
          <div className={`${inView ? "fade-up" : "opacity-0"} space-y-5 text-neutral-700 leading-relaxed text-base md:text-lg max-w-xl`} style={{ animationDelay: "0.2s" }}>
            <p>Six years in performance marketing and ecommerce — building, scaling, and selling online. I've spent serious time inside Meta, Google, and TikTok ad platforms, both for my own brands and for clients.</p>
            <p>Now I focus on one thing: building customer acquisition systems for UK service businesses that need a steady flow of bookings without managing ads themselves.</p>
            <p>Clinics. Dentists. Salons. Trades. Consultants. Anyone with a service to sell and a calendar to fill.</p>
          </div>
          <div className={`${inView ? "fade-up" : "opacity-0"} mt-10 grid grid-cols-3 gap-6 max-w-md`} style={{ animationDelay: "0.3s" }}>
            <div>
              <div className="text-3xl font-medium tracking-tight">6+</div>
              <div className="text-xs text-neutral-500 mt-1">Years</div>
            </div>
            <div>
              <div className="text-3xl font-medium tracking-tight">UK</div>
              <div className="text-xs text-neutral-500 mt-1">Based</div>
            </div>
            <div>
              <div className="text-3xl font-medium tracking-tight">1:1</div>
              <div className="text-xs text-neutral-500 mt-1">Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [ref, inView] = useInView();
  const t = [
    { q: "We went from begging for bookings to having a waiting list. Asaf doesn't talk fluff, he ships.", a: "Sarah M.", r: "Owner, aesthetic clinic" },
    { q: "The website paid for itself in the first 10 days. Cost per lead dropped 70% within 6 weeks.", a: "Daniel R.", r: "Principal, dental practice" },
    { q: "Honest, fast, and actually understands my business. Wish I'd hired him a year ago.", a: "Priya K.", r: "Owner, salon group" },
    { q: "Set-it-and-forget-it. I barely think about marketing anymore — bookings just come in.", a: "James T.", r: "Director, gym" },
  ];
  return (
    <section ref={ref} className="bg-white text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} flex items-end justify-between flex-wrap gap-6 mb-16`}>
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
            <div key={i} className={`${inView ? "fade-up" : "opacity-0"} bg-[#f5f3ee] rounded-3xl p-8 md:p-10 relative`} style={{ animationDelay: `${0.1 + i * 0.08}s` }}>
              <Quote className="w-6 h-6 text-neutral-300 mb-6" />
              <p className="text-xl md:text-2xl leading-snug mb-8">{x.q}</p>
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

function FAQ() {
  const [ref, inView] = useInView();
  const [open, setOpen] = useState<number>(0);
  const items = [
    { q: "What kind of businesses do you work with?", a: "UK-based service businesses with a real offer and capacity to take on more customers. Clinics, dentists, salons, gyms, trades, agencies, accountants, consultants — anyone selling a service that requires a booking." },
    { q: "What's involved in the free strategy call?", a: "30 minutes on Zoom. We look at your current marketing, identify the bottleneck, and I map out exactly what I'd build for you. No pitch slides, no pressure. You walk away with a plan whether we work together or not." },
    { q: "How long until I see results?", a: "The system goes live within 7–14 days. First leads typically come in within the first week of running ads. Measurable lift in bookings within 30 days for most businesses." },
    { q: "What does it cost?", a: "Depends on scope. We discuss this on the strategy call once I understand your business and goals — I'll only suggest a package that genuinely makes sense for you." },
    { q: "Do I sign a long contract?", a: "No. Month-to-month. If I'm not delivering, you walk away. The system speaks for itself." },
    { q: "What if I already have a website or agency?", a: "Happy to audit what you have. Sometimes the answer is fixing what's broken, not rebuilding. On the call I'll tell you straight whether you actually need me or not." },
  ];
  return (
    <section ref={ref} id="faq" className="bg-[#f5f3ee] text-[#0a0a0a] py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] text-neutral-500 mb-8`}>Questions</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[7vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight mb-12 md:mb-16`} style={{ animationDelay: "0.1s" }}>
          Things people <span className="serif italic">ask.</span>
        </h2>
        <div className="space-y-2">
          {items.map((it, i) => (
            <div key={i} className={`${inView ? "fade-up" : "opacity-0"} border-b border-neutral-300`} style={{ animationDelay: `${0.15 + i * 0.05}s` }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full py-6 flex items-center justify-between gap-6 text-left">
                <span className="text-lg md:text-xl">{it.q}</span>
                <span className={`flex-shrink-0 w-10 h-10 rounded-full border border-neutral-400 flex items-center justify-center transition-all ${open === i ? "rotate-45 bg-black text-white border-black" : ""}`}>
                  <Plus className="w-4 h-4" />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${open === i ? "max-h-60 pb-6" : "max-h-0"}`}>
                <p className="text-neutral-600 leading-relaxed text-base max-w-2xl">{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
