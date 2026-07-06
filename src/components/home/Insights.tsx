import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeIn } from "../motion/FadeIn";
import { Dot } from "../brand/Dot";

// Small caps section marker — the brand dot + a label. (Same idiom as HomePage.)
function Marker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
      <Dot />
      {children}
    </div>
  );
}

// Only articles with real routed pages belong here — linking unbuilt slugs
// from learnArticles.ts would 404.
const ARTICLES = [
  {
    to: "/learn/what-is-klaviyo",
    category: "Klaviyo",
    title: "What is Klaviyo and why ecommerce brands use it",
    description: "An introduction to the platform built for ecommerce.",
  },
  {
    to: "/learn/welcome-email-series",
    category: "Flows",
    title: "How to build a welcome email series that converts",
    description: "Turn new subscribers into first-time buyers.",
  },
  {
    to: "/learn/abandoned-cart-email",
    category: "Flows",
    title: "Abandoned cart emails: setup and best practices",
    description: "Recover lost sales with the right sequence.",
  },
];

export function Insights() {
  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Insights</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Learn the playbook<span className="text-volt">.</span>
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <FadeIn key={a.to} delay={i * 0.07} className="bg-ink">
              <Link
                to={a.to}
                className="group flex h-full flex-col p-8 md:p-9 transition-colors hover:bg-carbon"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
                    {a.category}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/30 transition-all group-hover:text-volt" />
                </div>
                <h3 className="mt-8 font-display tracking-display text-xl leading-snug text-white">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-white/50">
                  {a.description}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <Link
            to="/learn"
            className="group mt-8 inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            View all guides
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
