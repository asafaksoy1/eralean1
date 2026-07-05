import { Link } from "react-router";
import { EMAIL } from "../lib/constants";
import { Dot } from "./brand/Dot";

const FOOTER_LINKS = [
  { label: "Website", to: "/services/website" },
  { label: "Ads", to: "/services/ads" },
  { label: "Email", to: "/services/email-marketing" },
  { label: "Work", to: "/work" },
  { label: "Learn", to: "/learn" },
];

export function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10 px-6 md:px-10 py-16">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-3">
        {/* Left — wordmark + tagline */}
        <div>
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
            Less waste. More growth.
          </p>
        </div>

        {/* Middle — service links */}
        <ul className="flex flex-col gap-3 text-sm font-light">
          {FOOTER_LINKS.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-white/55 transition-colors hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — contact */}
        <div className="flex flex-col gap-3 text-sm font-light">
          <a href={`mailto:${EMAIL}`} className="text-white/55 transition-colors hover:text-white">
            {EMAIL}
          </a>
          <span className="text-white/55">Aylesbury, UK</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl mt-12 border-t border-white/10 pt-6">
        <span className="text-xs text-white/45">© 2026 EraLean. All rights reserved.</span>
      </div>
    </footer>
  );
}
