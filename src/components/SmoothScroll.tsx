import { useEffect, useState, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";

// Lenis smooth scroll, gentle lerp. Mount-gated so it NEVER runs during the
// (Node) prerender — the first client render also skips it, matching the static
// HTML exactly (no hydration mismatch). Disabled entirely under reduced-motion.
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || reduceMotion) return <>{children}</>;

  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}
