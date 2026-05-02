export const CALENDLY = "https://calendly.com/asaf-eralean/30min";
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
  { label: "AI", description: "Automations and AI agents for ops.", to: "/services/ai" },
  { label: "Acquisition Systems", description: "The full bundle — site, ads, AI, follow-up.", to: "/services/acquisition-systems" },
];
