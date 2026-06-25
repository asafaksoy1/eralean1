import { Link } from "react-router";
import { SERVICES, EMAIL } from "../lib/constants";
import { Dot } from "./brand/Dot";

export function Footer() {
  return (
    <footer className="bg-ink text-white/55 border-t border-white/10 px-6 md:px-10 py-16">
      <div className="mx-auto max-w-6xl">
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

        {/* Tagline — one line, ending in the Volt dot. */}
        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
          Done-for-you growth systems — website, ads, and email, built and run as
          one engine<span className="text-volt">.</span>
        </p>

        {/* Service links */}
        <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-light">
          {SERVICES.map((s) => (
            <li key={s.to}>
              <Link to={s.to} className="text-white/55 transition-colors hover:text-white">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Eralean</span>
          <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
