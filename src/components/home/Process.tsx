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

// TODO(asaf): confirm these commitments
const steps = [
  {
    name: "Book a call",
    line: "Thirty minutes, straight answers.",
    body: "We map where your customers come from today and where the pipeline leaks — and you get an honest read on whether we can help.",
  },
  {
    name: "Get the plan",
    line: "Scope, timeline, fixed quote.",
    body: "Within two business days you get a short plan: what we'd build, when it ships, and exactly what it costs. No obligation.",
  },
  {
    name: "We build and run it",
    line: "Live, operated, reported.",
    body: "The system goes live and we run it — with clear weekly reporting and no long contracts. Every agreement is 30-day rolling.",
  },
];

export function Process() {
  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>How it works</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            From first call to live system<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/55">
            Three steps, and you can walk away after any of them.
          </p>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-white/10">
          {steps.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.07} className="bg-ink">
              <div className="flex h-full flex-col p-8 md:p-9">
                <span className="text-sm text-white/45">{`0${i + 1}`}</span>
                <h3 className="mt-10 font-display tracking-display text-2xl text-white">
                  {s.name}
                </h3>
                <p className="mt-3 text-lg text-white/70">{s.line}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/50">{s.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
