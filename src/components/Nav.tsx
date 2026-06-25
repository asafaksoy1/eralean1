import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { CALENDLY } from "../lib/constants";
import { trackLead, type Offer } from "../lib/analytics";
import { Dot } from "./brand/Dot";

type NavProps = {
  variant?: "overlay" | "solid";
  offer?: Offer;
};

const NAV_LINKS = [
  { to: "/services/website", label: "Website" },
  { to: "/services/ads", label: "Ads" },
  { to: "/services/email-marketing", label: "Email" },
];

export function Nav({ variant = "solid", offer = "general" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const isOverlay = variant === "overlay";

  useEffect(() => {
    if (!isOverlay) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOverlay]);

  const wrapClasses = isOverlay
    ? `absolute top-0 left-0 right-0 z-30 px-6 md:px-10 py-6 transition-all duration-500 ${
        scrolled ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100"
      }`
    : "sticky top-0 z-40 px-6 md:px-10 py-5 bg-ink/85 backdrop-blur-md border-b border-white/10";

  return (
    <nav className={wrapClasses}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        {/* Wordmark */}
        <Link
          to="/"
          className="font-display tracking-display text-lg font-semibold text-white"
          aria-label="EraLean home"
        >
          <span className="inline-flex items-baseline">
            eralean
            <Dot className="ml-0.5 translate-y-[1px]" />
          </span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-7">
          <div className="hidden items-center gap-7 sm:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-light text-white/60 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLead(offer)}
            className="group inline-flex items-center gap-2 rounded-full bg-volt px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#a8e600]"
          >
            Book a call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
