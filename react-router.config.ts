import type { Config } from "@react-router/dev/config";

// Step 1 foundation: static prerendering for a React Router v7 marketing site.
// ssr:false + prerender produces real static HTML per route, so Google can
// crawl it and first paint is instant. Output lands in build/client.
export default {
  appDirectory: "src",
  ssr: false,
  // The trimmed, real structure — AI / Social / Acquisition routes are gone.
  // Add new offer pages or SEO pages to this array as you build them.
  // Indexable additions/removals here must also be mirrored in
  // public/sitemap.xml (skip /lp/* — those stay noindex).
  prerender: [
    "/",
    // Matches the "*" catch-all, rendering NotFound. The build command copies
    // the output to build/client/404.html, which Vercel serves (with a real
    // 404 status) for any URL that has no prerendered page.
    "/404",
    "/services/website",
    "/services/ads",
    "/services/email-marketing",
    "/work",
    "/about",
    "/book",
    "/privacy",
    "/terms",
    "/learn",
    "/lp/email",
    "/lp/website",
    "/lp/audit",
    "/learn/what-is-klaviyo",
    "/learn/welcome-email-series",
    "/learn/abandoned-cart-email",
    "/learn/klaviyo-back-in-stock-flow-setup-uk",
    "/learn/klaviyo-winback-flow-timing-uk",
    "/learn/klaviyo-post-purchase-flow-setup-uk",
    "/learn/klaviyo-single-vs-double-opt-in-uk-gdpr",
  ],
} satisfies Config;
