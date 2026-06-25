import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type ScaleOnScrollProps = {
  children: ReactNode;
  className?: string;
  // Peak scale as the element passes through the viewport. Keep it subtle —
  // a few percent. Settles back toward 1 at the centre.
  amount?: number;
};

// Subtle scroll-linked scale for section visuals: scales a few percent while
// entering/leaving view, easing to ~1 at centre. Transform only (GPU). No-ops
// under reduced-motion. SSR-safe: useScroll returns 0 progress during prerender
// so the static markup renders at the resting scale.
export function ScaleOnScroll({
  children,
  className,
  amount = 0.04,
}: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1 + amount, 1, 1 + amount]
  );

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}
