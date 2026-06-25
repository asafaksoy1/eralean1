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
  route("*", "pages/NotFound.tsx"),
] satisfies RouteConfig;
