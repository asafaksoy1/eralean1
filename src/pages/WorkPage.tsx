import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { X } from "lucide-react";
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
    line: "London's gold trading platform",
    features: [
      "Live spot-linked gold & silver prices updated every minute",
      "Interactive price calculator all purities 9K–24K",
      "PIN-protected admin panel for rate management",
      "Dual buy/sell enquiry system",
      "Real-time XAU/GBP market chart",
      "Inventory management with stock display",
    ],
  },
  {
    slug: "regent-estates-global",
    client: "Regent Estates Global",
    url: "regentestatesglobal.com",
    img: "/work/regent-estates.jpg",
    line: "Bilingual UK–Turkey property portal",
    features: [
      "Full EN/TR bilingual interface",
      "Custom CMS drag-and-drop listing management",
      "Image upload and gallery management",
      "Property search and filter system",
      "Admin panel with data tracking",
      "Hash-based routing for SPA performance",
    ],
  },
  {
    slug: "abov-interiors",
    client: "ABOV Interiors",
    url: "abov-tvow.vercel.app",
    img: "/work/abov-interiors.jpg",
    line: "Premium renovation & interiors brand",
    features: [
      "Custom admin panel for project management",
      "Portfolio gallery with image upload",
      "Service area pages for local SEO",
      "Lead capture and enquiry system",
      "Mobile-first responsive design",
      "Supabase backend",
    ],
  },
  {
    slug: "bedable",
    client: "Bedable",
    url: "bedable.com",
    img: "/work/bedable.jpg",
    line: "Premium 100% natural cotton bedding brand",
    features: [
      "Full Shopify store build",
      "Premium product pages with compare-at pricing",
      "Collection pages optimised for conversion",
      "Email marketing integration",
      "Mobile-optimised checkout flow",
      "Brand-consistent design system",
    ],
  },
];

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const animate = !prefersReducedMotion();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.client}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
      style={animate ? { animation: "el-fade 0.2s ease-out" } : undefined}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-carbon p-8 md:p-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-white/50 transition-colors hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <img
          src={project.img}
          alt={project.client}
          className="w-full max-h-72 rounded-lg object-cover"
        />

        <h2 className="mt-8 font-display tracking-display text-[2rem] font-semibold text-white">
          {project.client}
        </h2>
        <p className="mt-2 font-sans font-light text-white/55">{project.line}</p>

        <div className="mt-7 hairline" />

        <div className="mt-7 flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
          <Dot />
          The build
        </div>

        <ul className="mt-5 space-y-3">
          {project.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-white/70">
              <Dot className="mt-1.5" />
              <span className="font-light">{f}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => {
            trackLead("website");
            onClose();
            navigate("/#audit");
          }}
          className="mt-9 w-full rounded-full bg-volt px-6 py-4 font-display tracking-display text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Build something like this →
        </button>
      </div>
    </div>
  );
}

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
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
                    <div className="mt-2 text-sm text-white/45">{p.url}</div>
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
                      onClick={() => setActiveProject(p)}
                      className="mt-9 inline-flex w-fit items-center gap-2 rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-volt hover:text-ink"
                    >
                      View project →
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

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
