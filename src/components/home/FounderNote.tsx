import { EMAIL } from "../../lib/constants";
import { FadeIn } from "../motion/FadeIn";
import { Dot } from "../brand/Dot";

// Small caps section marker — the brand dot + a label.
function Marker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
      <Dot />
      {children}
    </div>
  );
}

// Small carbon card — no founder photo exists, so the brand mark carries the
// visual instead. Facts only: founder-led, based in Aylesbury, works UK-wide.
function FounderCard() {
  const rows = [
    { k: "Founder-led", v: "Every project" },
    { k: "Based in", v: "Aylesbury, UK" },
    { k: "Working with", v: "UK & beyond" },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-carbon p-6 md:p-8">
      <span className="font-display tracking-display text-lg font-semibold text-white">
        <span className="inline-flex items-baseline">
          eralean
          <Dot className="ml-0.5 translate-y-[1px]" />
        </span>
      </span>
      <div className="mt-8 space-y-5">
        {rows.map((row) => (
          <div
            key={row.k}
            className="flex items-center justify-between border-t border-white/10 pt-5"
          >
            <span className="text-white/55">{row.k}</span>
            <span className="font-display tracking-display text-white">{row.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FounderNote() {
  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-12 gap-14 lg:gap-10">
        <div className="lg:col-span-7">
          <FadeIn>
            <Marker>Who you work with</Marker>
            <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
              You work directly with the founder<span className="text-volt">.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.08}>
            <p className="mt-7 max-w-lg text-lg text-white/60">
              When you work with EraLean, you work with me — the person who
              actually builds and runs your system. No account managers, no
              handoffs, no juniors learning on your budget.
            </p>
            <p className="mt-5 max-w-lg text-white/55">
              I'm based in Aylesbury, UK, working with businesses across the UK
              and beyond. When something needs changing, you message the person
              who can change it.
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="mt-10 max-w-lg font-serif italic text-2xl md:text-3xl leading-snug text-white/90">
              Lean doesn't mean small. It means nothing wasted — not your
              budget, not your time.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10">
              <p className="font-display tracking-display text-white">
                Asaf <span className="font-sans font-light text-white/45">— Founder, EraLean</span>
              </p>
              <a
                href={`mailto:${EMAIL}`}
                className="mt-2 inline-block text-sm font-light text-white/55 transition-colors hover:text-white"
              >
                {EMAIL}
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-5 lg:self-center">
          <FadeIn delay={0.1}>
            <FounderCard />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
