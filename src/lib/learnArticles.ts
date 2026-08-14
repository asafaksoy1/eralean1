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
  {
    slug: "klaviyo-warm-up-new-sending-domain-uk",
    title: "How to Warm Up a New Klaviyo Sending Domain (UK Guide)",
    description: "A step-by-step UK guide to warming a new Klaviyo domain safely, hitting Gmail and Yahoo sender rules, and keeping emails out of spam.",
    category: "Klaviyo",
  },
  {
    slug: "klaviyo-rfm-segmentation-setup-uk",
    title: "How to Set Up RFM Segmentation in Klaviyo for UK Ecommerce Brands",
    description: "A practical guide to building RFM segments in Klaviyo, defining customer groups, and triggering retention flows to lift revenue and protect margins.",
    category: "Klaviyo",
  },
  {
    slug: "klaviyo-dmarc-branded-sending-domain-setup-uk",
    title: "How to Set Up a Branded Sending Domain and DMARC in Klaviyo (UK Guide)",
    description: "Step-by-step guide for UK ecommerce brands to configure a Klaviyo branded sending domain and DMARC to meet Gmail, Yahoo and Microsoft sender rules.",
    category: "Klaviyo",
  },
  {
    slug: "klaviyo-emails-going-to-spam-uk",
    title: "Why Your Klaviyo Emails Go to Spam and How to Fix Deliverability (UK Guide)",
    description: "A practical UK guide to fixing Klaviyo deliverability: authentication, list hygiene, sunset flows, and the benchmarks that keep emails out of spam.",
    category: "Klaviyo",
  },
  {
    slug: "klaviyo-subject-line-ab-testing-uk",
    title: "How to A/B Test Klaviyo Email Subject Lines for Higher Open Rates",
    description: "A practical guide to A/B testing subject lines in Klaviyo, with UK ecommerce benchmarks, sample sizes and step-by-step setup for campaigns and flows.",
    category: "Klaviyo",
  },
  {
    slug: "klaviyo-sunset-flow-setup-uk",
    title: "How to Set Up a Klaviyo Sunset Flow to Clean Your List and Protect Deliverability (UK Guide)",
    description: "Step-by-step guide to building a Klaviyo sunset flow that re-engages or suppresses inactive subscribers to protect UK ecommerce email deliverability.",
    category: "Klaviyo",
  },
  {
    slug: "klaviyo-engaged-segment-sending-strategy-uk",
    title: "How to Build a Klaviyo Engaged Segment and Sending Strategy for UK Ecommerce",
    description: "Learn how to segment your Klaviyo list by email engagement, set send cadences by tier and protect UK deliverability with a sunset flow.",
    category: "Klaviyo",
  },
  {
    slug: "klaviyo-predicted-clv-segmentation-uk",
    title: "How to Segment by Predicted CLV in Klaviyo (UK Guide)",
    description: "A practical UK guide to building Klaviyo predicted CLV and churn-risk segments to target high-value customers and drive repeat purchases.",
    category: "Klaviyo",
  },
  {
    slug: "klaviyo-single-vs-double-opt-in-uk",
    title: "Klaviyo Single vs Double Opt-In for UK Ecommerce Brands: PECR, Deliverability and List Growth",
    description: "How UK ecommerce brands should choose between single and double opt-in in Klaviyo to balance PECR/GDPR consent, deliverability and list growth.",
    category: "Klaviyo",
  },
  {
    slug: "klaviyo-replenishment-flow-timing-uk",
    title: "How To Set Up A Klaviyo Replenishment Flow With The Right Timing (UK Guide)",
    description: "Learn how UK ecommerce brands can build a Klaviyo replenishment flow, time it to your reorder cycle, and use predictive analytics to drive repeat sales.",
    category: "Klaviyo",
  },
];
