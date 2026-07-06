import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CALENDLY } from "../lib/constants";
import { trackLead, type Offer } from "../lib/analytics";
import { Dot } from "./brand/Dot";

type NavProps = {
  variant?: "overlay" | "solid";
  offer?: Offer;
};

const NAV_LINKS = [
  { to: "/work", label: "Work" },
  { to: "/services/website", label: "Website" },
  { to: "/services/ads", label: "Ads" },
  { to: "/services/email-marketing", label: "Email" },
  { to: "/learn", label: "Learn" },
  { to: "/about", label: "About" },
];

export function Nav({ variant = "solid", offer = "general" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isOverlay = variant === "overlay";

  useEffect(() => {
    if (!isOverlay) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOverlay]);

  // Close the mobile menu on navigation and lock body scroll while open.
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const wrapClasses = isOverlay
    ? `absolute top-0 left-0 right-0 z-30 px-6 md:px-10 py-6 transition-all duration-500 ${
        scrolled ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100"
      }`
    : "sticky top-0 z-40 px-6 md:px-10 py-5 bg-ink/85 backdrop-blur-md border-b border-white/10";

  return (
    <>
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
          <div className="flex items-center gap-5 md:gap-7">
            <div className="hidden items-center gap-7 md:flex">
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
              className="group hidden items-center gap-2 rounded-full bg-volt px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#a8e600] sm:inline-flex"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="inline-flex items-center justify-center rounded-full border border-white/15 p-2.5 text-white/70 transition-colors hover:text-white md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — full-screen overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink px-6 py-6 md:hidden">
          <div className="flex items-center justify-between">
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
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center rounded-full border border-white/15 p-2.5 text-white/70 transition-colors hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-12 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-white/10 py-5 font-display tracking-display text-2xl text-white/85 transition-colors hover:text-white"
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
            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-volt px-7 py-3.5 font-medium text-black transition-colors hover:bg-[#a8e600]"
          >
            Book a call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      )}
    </>
  );
}
