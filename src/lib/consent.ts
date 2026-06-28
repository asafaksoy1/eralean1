// Cookie consent for analytics/ads scripts (GA4, Google Ads, Meta Pixel) —
// required under UK GDPR/PECR since this is a UK business and those are
// non-essential tracking cookies. Strictly-necessary cookies (e.g. the audit
// popup's "seen once" cookie) are not gated by this.
export type ConsentStatus = "granted" | "denied";

const COOKIE = "el_consent";

export function getConsent(): ConsentStatus | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE}=`));
  const value = match?.split("=")[1];
  return value === "granted" || value === "denied" ? value : null;
}

export function setConsent(status: ConsentStatus): void {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 180; // 180 days
  document.cookie = `${COOKIE}=${status}; path=/; max-age=${maxAge}; SameSite=Lax`;
}
