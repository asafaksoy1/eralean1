import type { Config } from "@react-router/dev/config";

// Step 1 foundation: static prerendering for a React Router v7 marketing site.
// ssr:false + prerender produces real static HTML per route, so Google can
// crawl it and first paint is instant. Output lands in build/client.
export default {
  appDirectory: "src",
  ssr: false,
  // The trimmed, real structure — AI / Social / Acquisition routes are gone.
  // Add new offer pages or SEO pages to this array as you build them.
  prerender: [
    "/",
    "/services/website",
    "/services/ads",
    "/services/email-marketing",
  ],
} satisfies Config;
