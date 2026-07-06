import { Plus } from "lucide-react";
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

// Answers stay qualitative on price and timelines — no invented numbers, no
// invented guarantees. The same array feeds the FAQPage JSON-LD below.
const FAQS = [
  {
    q: "What does it cost?",
    a: "Websites are fixed-price projects — one quote agreed before any work starts. Ads and email run as monthly retainers, separate from your ad spend. The exact number depends on scope, so you get a precise quote after the call — and it doesn't move afterwards.",
  },
  {
    q: "How long until we're live?",
    a: "Websites typically launch in weeks, not months — the exact timeline depends on scope and how quickly content comes together, and we agree it before starting. Ads and email begin producing data within the first few weeks; reading that data and improving on it is the ongoing work.",
  },
  // TODO(asaf): confirm these commitments (30-day rolling, no long contracts) before deploying.
  {
    q: "Am I locked into a contract?",
    a: "No. Retainers run on a 30-day rolling basis — no long contracts. If the work isn't paying for itself, you can walk. Website builds are one-off projects with a fixed quote.",
  },
  {
    q: "Who actually does the work?",
    a: "The founder. No account managers, no juniors, no outsourcing. The person you speak to on the call is the person who builds your site and runs your campaigns.",
  },
  {
    q: "We already have a website — do we have to rebuild?",
    a: "No. If what you have is solid, we work with it. We only recommend a rebuild when the current site is genuinely costing you leads — and we'll show you why before you commit to anything.",
  },
  {
    q: "What happens on the 30-minute call?",
    a: "We map how customers currently find and reach you, identify the biggest leak in that funnel, and tell you straight what we'd fix first — even if the honest answer is that you don't need us yet.",
  },
  {
    q: "Which businesses do you work with?",
    a: "UK local and service businesses — clinics, trades, salons, firms — and ecommerce brands. Websites and ads for both; email marketing for ecommerce only.",
  },
];

// FAQPage structured data, built from the same array the accordion renders.
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQ() {
  return (
    <section id="faq" className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Questions</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Before you book<span className="text-volt">.</span>
          </h2>
        </FadeIn>

        {/* Native <details>/<summary> — works pre-hydration on the prerendered page. */}
        <div className="mt-14 max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((f, i) => (
            <FadeIn key={f.q} delay={i * 0.04}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-normal text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-white/40 transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-2xl pb-7 leading-relaxed text-white/55">{f.a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
