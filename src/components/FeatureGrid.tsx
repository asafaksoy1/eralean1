import { Check } from "lucide-react";
import { useInView } from "../lib/useInView";

type Feature = {
  title: string;
  description: string;
};

type FeatureGridProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  features: Feature[];
  background?: "cream" | "white" | "dark";
};

export function FeatureGrid({ eyebrow, title, intro, features, background = "cream" }: FeatureGridProps) {
  const [ref, inView] = useInView();
  const bg =
    background === "cream"
      ? "bg-[#f5f3ee] text-[#0a0a0a]"
      : background === "white"
      ? "bg-white text-[#0a0a0a]"
      : "bg-[#0a0a0a] text-white";
  const borderTone = background === "dark" ? "border-white/10" : "border-neutral-300";
  const subTone = background === "dark" ? "text-white/60" : "text-neutral-600";
  const labelTone = background === "dark" ? "text-white/50" : "text-neutral-500";

  return (
    <section ref={ref} className={`${bg} py-24 md:py-32 px-6 md:px-10`}>
      <div className="max-w-6xl mx-auto">
        <div className={`${inView ? "fade-up" : "opacity-0"} text-xs uppercase tracking-[0.2em] ${labelTone} mb-6`}>{eyebrow}</div>
        <h2 className={`${inView ? "fade-up" : "opacity-0"} text-[8vw] md:text-[4vw] font-medium leading-[0.95] tracking-tight max-w-3xl`} style={{ animationDelay: "0.1s" }}>
          {title}
        </h2>
        {intro && (
          <p className={`${inView ? "fade-up" : "opacity-0"} mt-6 text-base md:text-lg ${subTone} max-w-2xl leading-relaxed`} style={{ animationDelay: "0.15s" }}>
            {intro}
          </p>
        )}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200/40">
          {features.map((f, i) => (
            <div key={f.title} className={`${inView ? "fade-up" : "opacity-0"} ${background === "dark" ? "bg-[#0a0a0a]" : "bg-white"} p-8 border ${borderTone}`} style={{ animationDelay: `${0.2 + i * 0.05}s` }}>
              <div className={`w-10 h-10 rounded-full ${background === "dark" ? "bg-white/10 text-emerald-400" : "bg-black/5 text-black"} flex items-center justify-center mb-5`}>
                <Check className="w-4 h-4" />
              </div>
              <div className="text-lg font-medium mb-2">{f.title}</div>
              <div className={`text-sm leading-relaxed ${subTone}`}>{f.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
