import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  // Rise distance on enter (px). Transform/opacity only — GPU-friendly.
  y?: number;
};

// Fade + gentle rise as the element scrolls into view. IntersectionObserver-
// based (lazy below the fold), runs once. Under reduced-motion it renders a
// plain, fully-visible element. During prerender the text is in the HTML; the
// entrance just plays on the client after hydration.
export function FadeIn({ children, className, delay = 0, y = 20 }: FadeInProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
