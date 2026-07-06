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

// TODO(asaf): PLACEHOLDER QUOTES — replace with real client quotes (with written permission) before deploying. Publishing invented reviews is illegal in the UK (DMCC Act 2024).
const QUOTES = [
  {
    quote:
      "The phone actually rings now. Before, the website just sat there. Now it's the first thing new customers mention when they call us.",
    attribution: "Director, London property firm",
  },
  {
    quote:
      "Every report is in plain English — what was spent, what came back, what changes next week. I always know exactly where we stand.",
    attribution: "Owner, DTC bedding brand",
  },
  {
    quote:
      "The easiest project we've run. One person, one plan, no hand-offs. We said what we needed on the first call and that's exactly what got built.",
    attribution: "Practice manager, private clinic",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>What clients say</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            In their own words<span className="text-volt">.</span>
          </h2>
        </FadeIn>

        <div className="mt-8 divide-y divide-white/10">
          {QUOTES.map((q, i) => (
            <FadeIn key={q.attribution} delay={i * 0.06} className="py-12 md:py-14">
              <figure>
                <blockquote className="max-w-3xl font-serif italic text-2xl md:text-3xl leading-snug text-white/90">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-white/45">
                  {q.attribution}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
