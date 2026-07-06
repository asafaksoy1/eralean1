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

// Platforms and tools the systems are built and run on. Names only — no
// partner-status claims unless a real partnership exists.
const TOOLS = [
  { name: "Shopify", role: "Ecommerce store builds" },
  { name: "Klaviyo", role: "Email flows & campaigns" },
  { name: "Meta Ads", role: "Paid social acquisition" },
  { name: "Google Ads", role: "Paid search & shopping" },
  { name: "Google Analytics 4", role: "Tracking & measurement" },
  { name: "Custom builds", role: "React sites & admin panels" },
];

export function ToolsStrip() {
  return (
    <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <Marker>Platforms</Marker>
          <h2 className="mt-6 max-w-2xl font-display tracking-display text-4xl md:text-5xl text-white">
            Built on the tools that matter<span className="text-volt">.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/55">
            No exotic stack, no lock-in — the same proven platforms the best
            brands run on, set up properly and run daily.
          </p>
        </FadeIn>

        <div className="mt-14 grid grid-cols-2 gap-px bg-white/10 md:grid-cols-3">
          {TOOLS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.05} className="bg-ink">
              <div className="flex h-full flex-col p-6 md:p-8">
                <h3 className="font-display tracking-display text-xl text-white">
                  {t.name}
                </h3>
                <p className="mt-2 text-sm font-light text-white/50">{t.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
