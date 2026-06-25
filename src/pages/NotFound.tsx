import { Link } from "react-router";

export const meta = () => [
  { title: "Page not found — EraLean" },
  { name: "description", content: "The page you're after doesn't exist or has moved." },
];

// Minimal on-brand 404. Replaces the old "* -> HomePage" catch-all.
export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center gap-5 bg-ink px-8 text-center text-white">
      <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">Error 404</p>
      <h1 className="font-display tracking-display text-5xl font-semibold leading-[0.95] sm:text-6xl md:text-7xl">
        Page not found
        <span className="text-volt">.</span>
      </h1>
      <p className="max-w-[40ch] text-white/55">
        The page you're after doesn't exist or has moved.
      </p>
      <Link
        to="/"
        className="rounded-lg bg-volt px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-[#a8e600]"
      >
        Back to home
      </Link>
    </main>
  );
}
