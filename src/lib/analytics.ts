// Google Ads conversion label — fill this in from the Google Ads UI.
// It's the part after the slash in the conversion's "send to" value:
//   AW-18269973238/<CONVERSION_LABEL>
// Left empty for now; while empty, the Google Ads conversion event is skipped.
export const CONVERSION_LABEL = "lO91CLbpj8ccEPbV5odE";

const GOOGLE_ADS_ID = "AW-18269973238";

export type Offer = "website" | "ads" | "email" | "general";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Fire a lead conversion across GA4, Google Ads, and Meta. Each call no-ops via
// optional chaining if its global isn't on the page (dev, ad-blocker, or
// scripts not yet loaded). Only invoked from browser click/submit handlers, so
// `window` is always defined when this runs.
export function trackLead(offer: Offer): void {
  // GA4
  window.gtag?.("event", "generate_lead", { offer });

  // Google Ads conversion — only once a real conversion label is set.
  if (CONVERSION_LABEL) {
    window.gtag?.("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABEL}`,
      offer,
    });
  }

  // Meta Pixel
  window.fbq?.("track", "Lead", { content_name: offer });
}

export function trackEmailLeadFormSubmit() {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-18269973238/lO91CLbpj8ccEPbV5odE',
      value: 1400,
      currency: 'GBP',
    });
  }
}
