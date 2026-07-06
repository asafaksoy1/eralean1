import { Link } from "react-router";
import { EMAIL, WHATSAPP, WHATSAPP_DISPLAY } from "../lib/constants";
import { Dot } from "./brand/Dot";

type FooterLink = { label: string; to: string };

const SERVICES: FooterLink[] = [
  { label: "Website", to: "/services/website" },
  { label: "Ads", to: "/services/ads" },
  { label: "Email Marketing", to: "/services/email-marketing" },
];

const EXPLORE: FooterLink[] = [
  { label: "Work", to: "/work" },
  { label: "Learn", to: "/learn" },
  { label: "About", to: "/about" },
  { label: "Book a call", to: "/book" },
];

const LEGAL: FooterLink[] = [
  { label: "Privacy policy", to: "/privacy" },
  { label: "Terms of use", to: "/terms" },
];

function Column({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/40">
        {title}
      </h3>
      <ul className="mt-5 flex flex-col gap-3 text-sm font-light">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-white/55 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 px-6 md:px-10 py-16 md:py-20">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-12">
        {/* Brand + contact */}
        <div className="md:col-span-5">
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
          <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-white/55">
            Less waste. More growth. Done-for-you growth systems — website,
            ads, and email — built and run as one engine.
          </p>
          <div className="mt-8 flex flex-col gap-3 text-sm font-light">
            <a href={`mailto:${EMAIL}`} className="text-white/55 transition-colors hover:text-white">
              {EMAIL}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/55 transition-colors hover:text-white"
            >
              {WHATSAPP_DISPLAY}
            </a>
            <span className="text-white/55">Aylesbury, UK</span>
          </div>
        </div>

        {/* Link columns */}
        <div className="md:col-span-7 grid grid-cols-2 gap-10 sm:grid-cols-3">
          <Column title="Services" links={SERVICES} />
          <Column title="Explore" links={EXPLORE} />
          <Column title="Legal" links={LEGAL} />
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs text-white/45">© 2026 EraLean. All rights reserved.</span>
        <div className="flex items-center gap-5 text-xs">
          {LEGAL.map((l) => (
            <Link key={l.to} to={l.to} className="text-white/45 transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
