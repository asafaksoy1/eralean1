import type { ReactNode } from "react";
import { useNavigate } from "react-router";
import { trackLead } from "../lib/analytics";
import { AuditForm } from "../components/AuditForm";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { FadeIn } from "../components/motion/FadeIn";
import { Dot } from "../components/brand/Dot";

export const meta = () => [
  { title: "Our Work — EraLean" },
  {
    name: "description",
    content: "Custom websites and digital systems built by EraLean.",
  },
];

type Project = {
  slug: string;
  client: string;
  url: string;
  img: string;
  line: string;
  features: string[];
};

const PROJECTS: Project[] = [
  {
    slug: "metro-gold-buyers",
    client: "Metro Gold Buyers",
    url: "metrogoldbuyers.co.uk",
    img: "/work/metro-gold.jpg",
    line: "Live gold trading platform — real-time spot API, price calculator, PIN-protected admin panel",
    features: [
      "Real-time spot price API integration",
      "Instant gold price calculator",
      "PIN-protected admin panel",
      "Live trading dashboard",
    ],
  },
  {
    slug: "regent-estates-global",
    client: "Regent Estates Global",
    url: "regentestatesglobal.com",
    img: "/work/regent-estates.jpg",
    line: "Bilingual property portal (EN/TR) — custom CMS, drag-and-drop listings, image management",
    features: [
      "Bilingual experience (EN / TR)",
      "Custom content management system",
      "Drag-and-drop property listings",
      "Image management and galleries",
    ],
  },
  {
    slug: "abov-interiors",
    client: "ABOV Interiors",
    url: "abov-tvow.vercel.app",
    img: "/work/abov-interiors.jpg",
    line: "Premium renovation brand — custom admin panel, project portfolio, enquiry system",
    features: [
      "Custom admin panel",
      "Project portfolio showcase",
      "Enquiry capture system",
      "Premium brand presentation",
    ],
  },
  {
    slug: "bedable",
    client: "Bedable",
    url: "bedable.com",
    img: "/work/bedable.jpg",
    line: "Shopify ecommerce — premium bedding brand, full store build, email marketing",
    features: [
      "Full Shopify store build",
      "Premium bedding brand design",
      "Conversion-focused product pages",
      "Lifecycle email marketing",
    ],
  },
];

// Small caps section marker — the brand dot + a label.
function Marker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
      <Dot />
      {children}
    </div>
  );
}

export default function WorkPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-ink text-white">
      <Nav variant="solid" offer="general" />
      <main>
        <section className="px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl">
            <FadeIn>
              <Marker>Our work</Marker>
              <h1 className="mt-7 max-w-3xl font-display tracking-display font-semibold text-white text-[12vw] leading-[0.95] sm:text-6xl md:text-7xl">
                Custom websites and systems<span className="text-volt">.</span>
              </h1>
              <p className="mt-7 max-w-md text-lg text-white/60">
                Real builds for real businesses — platforms, portals, and
                stores designed to do a job, not just look the part.
              </p>
            </FadeIn>

            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {PROJECTS.map((p, i) => (
                <FadeIn key={p.slug} delay={(i % 2) * 0.08}>
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-carbon p-8 md:p-10">
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 bg-ink">
                      <img
                        src={p.img}
                        alt={p.client}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    <h2 className="mt-8 font-display tracking-display text-3xl md:text-4xl text-white">
                      {p.client}
                    </h2>
                    <div className="mt-2 text-sm text-ash">{p.url}</div>
                    <p className="mt-5 font-sans font-light leading-relaxed text-white/70">
                      {p.line}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                          <Dot className="mt-1.5" />
                          <span className="font-light">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => {
                        trackLead("website");
                        navigate("/#audit");
                      }}
                      className="mt-9 inline-flex w-fit items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-volt hover:text-ink"
                    >
                      Build something like this →
                    </button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <div id="audit" />
        <AuditForm variant="embed" offer="website" />
      </main>
      <Footer />
      <FloatingWhatsApp offer="general" />
    </div>
  );
}
