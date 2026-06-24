import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { AuditForm } from "./AuditForm";

// localStorage/sessionStorage may be blocked in some embeds, so "seen once"
// state is kept in a first-party cookie (with an in-memory ref as a same-page
// guard). 30-day window = at most once per visitor for a month.
const COOKIE = "el_audit_seen";

function hasSeen(): boolean {
  if (typeof document === "undefined") return true;
  return document.cookie
    .split("; ")
    .some((c) => c.startsWith(`${COOKIE}=`));
}

function markSeen(): void {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 30; // 30 days
  document.cookie = `${COOKIE}=1; path=/; max-age=${maxAge}; SameSite=Lax`;
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function AuditPopup() {
  const [open, setOpen] = useState(false);
  const firedRef = useRef(false);

  // Exit-intent trigger. Desktop only (touch devices have no top-edge exit),
  // and never if the visitor has already seen it.
  useEffect(() => {
    if (hasSeen()) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    function onMouseOut(e: MouseEvent) {
      if (firedRef.current) return;
      // Cursor left through the top of the viewport.
      if (e.clientY <= 0 && !e.relatedTarget) {
        firedRef.current = true;
        markSeen();
        setOpen(true);
      }
    }

    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, []);

  // Close on Escape while open.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const animate = !prefersReducedMotion();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Free growth audit"
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      style={animate ? { animation: "el-fade 0.2s ease-out" } : undefined}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 md:p-10"
        style={animate ? { animation: "el-pop 0.25s ease-out" } : undefined}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 text-white/50 transition-colors hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        <AuditForm offer="general" variant="popup" />
      </div>
    </div>
  );
}
