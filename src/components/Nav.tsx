import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { CALENDLY, SERVICES } from "../lib/constants";

type NavProps = {
  variant?: "overlay" | "solid";
};

export function Nav({ variant = "solid" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const openServices = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setServicesOpen(false), 140);
  };

  const isOverlay = variant === "overlay";
  const wrapClasses = isOverlay
    ? `absolute z-30 px-6 md:px-10 pt-6 top-0 left-0 right-0 transition-all duration-500 ${scrolled ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100"}`
    : "sticky top-0 z-40 px-6 md:px-10 py-4 bg-black/80 backdrop-blur-md border-b border-white/5";

  const isHowActive = location.hash === "#how";

  const navLinks = [
    { href: "/#how", label: "How it works" },
    { href: "/#cases", label: "Case studies" },
    { href: "/#about", label: "About" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <nav className={wrapClasses}>
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 bg-neutral-900/85 backdrop-blur-md rounded-full pl-4 pr-6 py-3 border border-white/5 shrink-0">
          <svg viewBox="0 0 256 256" className="h-5 w-5">
            <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" fill="#ffffff" />
          </svg>
          <span className="text-white text-sm tracking-tight">Eralean</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-900/85 backdrop-blur-md rounded-full px-3 py-2 border border-white/5">
          {/* Services dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={openServices}
            onMouseLeave={scheduleClose}
          >
            <button
              onClick={() => setServicesOpen((s) => !s)}
              className={`text-sm px-5 py-2 rounded-full inline-flex items-center gap-1 transition-colors ${
                location.pathname.startsWith("/services") ? "text-white bg-white/10" : "text-neutral-300 hover:text-white"
              }`}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div
                role="menu"
                className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] w-[320px] bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl"
                onMouseEnter={openServices}
                onMouseLeave={scheduleClose}
              >
                {SERVICES.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    role="menuitem"
                    className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="text-white text-sm flex items-center justify-between">
                      <span>{s.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-neutral-400 text-xs mt-0.5">{s.description}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm px-5 py-2 rounded-full transition-colors ${isHowActive && l.href === "/#how" ? "text-white" : "text-neutral-300 hover:text-white"}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((s) => !s)}
          className="md:hidden bg-neutral-900/85 backdrop-blur-md rounded-full p-3 border border-white/5"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>

        {/* CTA */}
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex bg-white text-black text-sm rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors items-center gap-2 shrink-0"
        >
          Book free call <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden mt-4 bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3">
          <div className="text-xs uppercase tracking-widest text-white/40 px-3 pt-2 pb-1">Services</div>
          {SERVICES.map((s) => (
            <Link key={s.to} to={s.to} className="block px-3 py-3 rounded-xl hover:bg-white/5">
              <div className="text-white text-sm">{s.label}</div>
              <div className="text-neutral-400 text-xs mt-0.5">{s.description}</div>
            </Link>
          ))}
          <div className="border-t border-white/10 my-2" />
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="block px-3 py-2 text-sm text-neutral-300 hover:text-white">
              {l.label}
            </a>
          ))}
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-white text-black text-sm rounded-full px-5 py-3 inline-flex items-center gap-2"
          >
            Book free call <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </nav>
  );
}
