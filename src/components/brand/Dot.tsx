// The brand atom: the full-stop "dot" from "eralean." — the ONLY Volt element.
// Reused as a section marker, list bullet, and a "now running" status pulse.
// (For a headline's ending period, just write a Volt-coloured "." in the text.)
type DotProps = {
  className?: string;
  // Adds the status pulse (auto-disabled under prefers-reduced-motion via CSS).
  pulse?: boolean;
};

export function Dot({ className = "", pulse = false }: DotProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2 w-2 shrink-0 rounded-full bg-volt ${
        pulse ? "el-dot-pulse" : ""
      } ${className}`}
    />
  );
}
