import { ReactNode } from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { BOOKING_URL, WHATSAPP } from "../lib/constants";
import { trackLead, type Offer } from "../lib/analytics";

type ServiceHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  stats?: { value: string; label: string }[];
  offer?: Offer;
};

export function ServiceHero({ eyebrow, title, description, stats, offer = "general" }: ServiceHeroProps) {
  return (
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-10 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="orb orb-1" style={{ top: "-10%", left: "-15%" }} />
        <div className="orb orb-3" style={{ top: "20%", right: "5%" }} />
        <div className="absolute inset-0 grid-bg opacity-[0.03]" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="fade-up inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-emerald-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot" />
          {eyebrow}
        </div>
        <h1 className="hero-title fade-up text-white font-medium text-[12vw] md:text-[7vw] mb-8 max-w-5xl" style={{ animationDelay: "0.1s" }}>
          {title}
        </h1>
        <p className="fade-up text-base md:text-xl text-white/70 max-w-2xl leading-relaxed mb-10" style={{ animationDelay: "0.2s" }}>
          {description}
        </p>
        <div className="fade-up flex flex-col sm:flex-row gap-4 mb-16" style={{ animationDelay: "0.3s" }}>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackLead(offer)}
             className="bg-white text-black rounded-full px-7 py-4 text-base hover:bg-neutral-200 transition-colors inline-flex items-center gap-3 group">
            <Calendar className="w-5 h-5" />
            Book your free strategy call
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={() => trackLead(offer)}
             className="bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-full px-7 py-4 text-base transition-colors inline-flex items-center gap-3">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Message on WhatsApp
          </a>
        </div>
        {stats && stats.length > 0 && (
          <div className="fade-up grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden max-w-4xl" style={{ animationDelay: "0.4s" }}>
            {stats.map((s) => (
              <div key={s.label} className="bg-black p-6 md:p-8">
                <div className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-1">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
