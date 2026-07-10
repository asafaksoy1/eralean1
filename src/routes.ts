import { type RouteConfig, index, route } from "@react-router/dev/routes";

// Replaces the <Routes> block from the old App.tsx. Paths are relative to
// appDirectory ("src"). The catch-all now points at a real NotFound page
// instead of silently serving HomePage at a 200 (the old soft-404 SEO bug).
export default [
  index("pages/HomePage.tsx"),
  route("services/website", "pages/WebsitePage.tsx"),
  route("services/ads", "pages/AdsPage.tsx"),
  route("services/email-marketing", "pages/EmailMarketingPage.tsx"),
  route("work", "pages/WorkPage.tsx"),
  route("about", "pages/AboutPage.tsx"),
  route("book", "pages/BookPage.tsx"),
  route("privacy", "pages/PrivacyPage.tsx"),
  route("terms", "pages/TermsPage.tsx"),
  route("lp/email", "pages/lp/EmailLp.tsx"),
  route("lp/website", "pages/lp/WebsiteLp.tsx"),
  route("learn", "pages/LearnListingPage.tsx"),
  route("learn/what-is-klaviyo", "pages/learn/WhatIsKlaviyo.tsx"),
  route("learn/welcome-email-series", "pages/learn/WelcomeEmailSeries.tsx"),
  route("learn/abandoned-cart-email", "pages/learn/AbandonedCartEmail.tsx"),
  route("learn/klaviyo-back-in-stock-flow-setup-uk", "pages/learn/KlaviyoBackInStockFlowSetupUk.tsx"),
  route("learn/klaviyo-winback-flow-timing-uk", "pages/learn/KlaviyoWinbackFlowTimingUk.tsx"),
  route("learn/klaviyo-post-purchase-flow-setup-uk", "pages/learn/KlaviyoPostPurchaseFlowSetupUk.tsx"),
  route("learn/klaviyo-sunset-flow-setup-uk", "pages/learn/KlaviyoSunsetFlowSetupUk.tsx"),
  route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;
