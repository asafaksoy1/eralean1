// Google Calendar appointment schedule — the single booking system sitewide.
export const BOOKING_URL = "https://calendar.app.google/2mmmEqFVPaLvZ6dy7";
// The same schedule in Google's official iframe-embed form (used on /book).
export const BOOKING_EMBED =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2eWz9I0rPhgGyo-vCbAwVpmcvgtdMLBwiWPP2XsB8BbSb8tuvgzq3txbabaZ-ZApOgCNVDFX3V?gv=true";
export const WHATSAPP = "https://wa.me/447716500131";
export const WHATSAPP_DISPLAY = "+44 7716 500 131";
export const EMAIL = "asaf@eralean.com";

export type ServiceLink = {
  label: string;
  description: string;
  to: string;
};

export const SERVICES: ServiceLink[] = [
  { label: "Website", description: "High-converting site, fully managed.", to: "/services/website" },
  { label: "Ads", description: "Meta + Google ads, end-to-end.", to: "/services/ads" },
  { label: "Email Marketing", description: "Klaviyo flows + campaigns, done for you.", to: "/services/email-marketing" },
];