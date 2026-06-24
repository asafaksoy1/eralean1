// Google Ads conversion label — fill this in from the Google Ads UI.
// It's the part after the slash in the conversion's "send to" value:
//   AW-18269973238/<CONVERSION_LABEL>
export const CONVERSION_LABEL = "REPLACE_WITH_GOOGLE_ADS_CONVERSION_LABEL";

const GOOGLE_ADS_ID = "AW-18269973238";

export type Offer = "website" | "ads" | "email" | "general";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Fire a lead conversion across GA4, Google Ads, and Meta. Each call is
// individually guarded: if its global isn't on the page (e.g. dev, ad-blocker,
// or scripts not yet loaded) it silently no-ops. Safe to call during SSR — on
// the server `window` is undefined, so all three resolve to undefined.
export function trackLead(offer: Offer): void {
  const gtag = typeof window !== "undefined" ? window.gtag : undefined;
  const fbq = typeof window !== "undefined" ? window.fbq : undefined;

  // GA4
  gtag?.("event", "generate_lead", { offer });
  // Google Ads conversion
  gtag?.("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
    offer,
  });
  // Meta Pixel
  fbq?.("track", "Lead", { content_name: offer });
}
