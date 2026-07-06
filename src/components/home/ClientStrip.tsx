import { FadeIn } from "../motion/FadeIn";

// Client wordmarks — text-based until real logo files exist.
// TODO(asaf): swap for SVG/PNG logos in /public/clients when supplied.
const CLIENTS = [
  "Metro Gold Buyers",
  "Regent Estates Global",
  "ABOV Interiors",
  "Bedable",
  "CallFix",
];

export function ClientStrip() {
  return (
    <section
      aria-label="Clients"
      className="border-t border-white/10 px-6 md:px-10 py-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-10">
            <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.24em] text-white/35">
              Brands we've built for
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:justify-end">
              {CLIENTS.map((c) => (
                <span
                  key={c}
                  className="whitespace-nowrap font-display tracking-display text-base md:text-lg text-white/40 transition-colors hover:text-white/75"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
