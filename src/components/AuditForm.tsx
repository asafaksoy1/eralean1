import { useState, type FormEvent } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { trackLead, type Offer } from "../lib/analytics";

type Variant = "embed" | "popup";

type AuditFormProps = {
  // Where the form lives — the lead is tagged with this on success.
  offer: Offer;
  variant: Variant;
  // Optional hook so a host (e.g. the popup) can react to a successful submit.
  onSuccess?: () => void;
  // When true, require a monthly-revenue band so paid-ad leads are qualified
  // at capture (see api/subscribe.ts → lead_quality). Off by default so the
  // sitewide popup/embed stay low-friction; the paid-ad LP turns it on.
  showQualifier?: boolean;
  // Copy overrides — let a host page (e.g. the paid-ad LP) tailor the wording
  // without adding a whole new variant. Fall back to the variant defaults.
  eyebrow?: string;
  heading?: string;
  subtext?: string;
  button?: string;
  // embed only: render just the card contents, no wrapping <section>, so the
  // form can sit inside a host layout (e.g. a hero's right column).
  bare?: boolean;
};

// Monthly store-revenue bands. Values are stable slugs sent to the API and
// stored on the MailerLite subscriber; labels are what the visitor sees.
// api/subscribe.ts derives lead_quality (ideal/mid/low) from the slug so the
// audit concierge + booked calls prioritise brands that can afford £1,400/mo.
const REVENUE_OPTIONS = [
  { value: "", label: "Your monthly store revenue…" },
  { value: "under-10k", label: "Under £10k / month" },
  { value: "10k-50k", label: "£10k – £50k / month" },
  { value: "50k-200k", label: "£50k – £200k / month" },
  { value: "200k-plus", label: "£200k+ / month" },
];

const COPY: Record<
  Variant,
  { eyebrow?: string; heading: string; subtext: string; button: string }
> = {
  embed: {
    heading: "Free growth audit",
    subtext:
      "Tell us where to look — site, ads, or email. We'll send back the three highest-leverage fixes, specific to your business.",
    button: "Send my audit",
  },
  popup: {
    eyebrow: "BEFORE YOU GO",
    heading: "See what's leaking your growth.",
    subtext:
      "Get a free, no-fluff audit of your website, ads, or email — three things we'd fix first, sent to your inbox. No pitch.",
    button: "Get my free audit",
  },
};

const SUCCESS_MESSAGE =
  "Got it. I'll send your three fixes to your inbox within one business day.";

// Basic format check — server re-validates before hitting MailerLite.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";

export function AuditForm({
  offer,
  variant,
  onSuccess,
  showQualifier,
  eyebrow,
  heading: headingText,
  subtext,
  button,
  bare,
}: AuditFormProps) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [revenue, setRevenue] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const base = COPY[variant];
  const copy = {
    eyebrow: eyebrow ?? base.eyebrow,
    heading: headingText ?? base.heading,
    subtext: subtext ?? base.subtext,
    button: button ?? base.button,
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    if (showQualifier && !revenue) {
      setStatus("error");
      setError("Please pick your monthly revenue so we can tailor the audit.");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          website: website.trim() || undefined,
          revenue: revenue || undefined,
          offer,
        }),
      });

      if (!res.ok) {
        let message = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          if (data && typeof data.error === "string") message = data.error;
        } catch {
          /* non-JSON error body — keep the default message */
        }
        throw new Error(message);
      }

      // Only count the lead once MailerLite actually accepted it.
      trackLead(offer);
      setStatus("success");
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  const heading = (
    <>
      {copy.eyebrow && (
        <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-volt mb-4">
          {copy.eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
        {copy.heading}
      </h2>
      <p className="mt-4 text-white/60 leading-relaxed max-w-md">{copy.subtext}</p>
    </>
  );

  const inner =
    status === "success" ? (
      <div>
        {heading}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-volt/30 bg-volt/10 p-5">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volt text-black">
            <Check className="h-4 w-4" strokeWidth={3} />
          </span>
          <p className="text-white/90 leading-relaxed">{SUCCESS_MESSAGE}</p>
        </div>
      </div>
    ) : (
      <div>
        {heading}
        <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-3">
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@business.com"
            aria-label="Email address"
            aria-invalid={status === "error" ? true : undefined}
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder-white/40 outline-none transition-colors focus:border-volt"
          />
          <input
            type="url"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder={showQualifier ? "yourwebsite.com" : "yourwebsite.com (optional)"}
            aria-label={showQualifier ? "Website URL" : "Website URL (optional)"}
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-white placeholder-white/40 outline-none transition-colors focus:border-volt"
          />
          {showQualifier && (
            <div className="relative">
              <select
                name="revenue"
                required
                value={revenue}
                onChange={(e) => setRevenue(e.target.value)}
                aria-label="Monthly store revenue"
                aria-invalid={status === "error" && !revenue ? true : undefined}
                className={`w-full appearance-none rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 pr-11 outline-none transition-colors focus:border-volt ${
                  revenue ? "text-white" : "text-white/40"
                }`}
              >
                {REVENUE_OPTIONS.map((o) => (
                  <option
                    key={o.value}
                    value={o.value}
                    disabled={o.value === ""}
                    hidden={o.value === ""}
                    className="bg-ink text-white"
                  >
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            </div>
          )}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-volt px-6 py-3.5 font-medium text-black transition-all hover:bg-[#a8e600] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : copy.button}
            {status !== "submitting" && (
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </button>
          {status === "error" && (
            <p role="alert" className="text-sm text-red-400">
              {error}
            </p>
          )}
          <p className="text-xs text-white/35">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    );

  // Popup renders bare content — AuditPopup supplies the modal chrome.
  if (variant === "popup") return inner;

  // Bare embed — just the card, for a host layout (e.g. a hero column).
  if (bare) {
    return (
      <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 md:p-10">
        {inner}
      </div>
    );
  }

  // Embed renders its own on-brand section so a page can drop it in directly.
  return (
    <section className="bg-black px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 md:p-12">
        {inner}
      </div>
    </section>
  );
}
