export type LearnArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
};

// Only articles with a real page in src/pages/learn/ belong here — every
// entry renders as a linked card on /learn, so a slug without a page is a
// dead link. The daily SEO pipeline (scripts/daily-seo.js) appends new
// entries automatically when it publishes an article.
export const learnArticles: LearnArticle[] = [
  {
    slug: "what-is-klaviyo",
    title: "What is Klaviyo and why ecommerce brands use it",
    description: "An introduction to the platform built for ecommerce.",
    category: "Klaviyo",
  },
  {
    slug: "welcome-email-series",
    title: "How to build a welcome email series that converts",
    description: "Turn new subscribers into first-time buyers.",
    category: "Flows",
  },
  {
    slug: "abandoned-cart-email",
    title: "Abandoned cart emails: setup and best practices",
    description: "Recover lost sales with the right sequence.",
    category: "Flows",
  },
  {
    slug: "klaviyo-back-in-stock-flow-setup-uk",
    title: "How to set up a Klaviyo back-in-stock flow for UK brands",
    description:
      "A step-by-step build with UK benchmarks, SMS setup, and PECR/GDPR compliance tips.",
    category: "Klaviyo",
  },
  {
    slug: "klaviyo-winback-flow-timing-uk",
    title: "Klaviyo winback flows: timing, discounts and benchmarks",
    description:
      "Re-engage lapsed customers with timing rules, discount escalation and UK benchmarks.",
    category: "Klaviyo",
  },
  {
    slug: "klaviyo-post-purchase-flow-setup-uk",
    title: "How to Set Up a Klaviyo Post-Purchase Flow for UK Ecommerce Brands",
    description: "A step-by-step guide to building a Klaviyo post-purchase flow that drives repeat orders, reviews and loyalty for UK ecommerce brands.",
    category: "Klaviyo",
  },
];
