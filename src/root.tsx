import type { ReactNode } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "react-router";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.css";

// In framework mode the app's HTML document lives here, not in index.html.
// <Meta /> + <Links /> render per-route <title>/description. This root `meta`
// is the site-wide default/fallback — any page route that exports its own
// `meta` (HomePage, WebsitePage, AdsPage, EmailMarketingPage) overrides it;
// routes without one (e.g. NotFound) fall back to this.
export const meta = () => [
  { title: "EraLean — Growth systems for modern brands" },
  {
    name: "description",
    content:
      "EraLean builds and runs done-for-you growth systems — website, ads, and email marketing — for modern brands.",
  },
];

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <SpeedInsights />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

// Rendered inside <Layout> whenever a route throws (including the 404 path).
export function ErrorBoundary() {
  const error = useRouteError();
  const title = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "Something went wrong";
  const message = isRouteErrorResponse(error)
    ? error.data || "The page you're after doesn't exist or has moved."
    : "An unexpected error occurred. Please try again.";

  return (
    <main
      style={{
        minHeight: "100svh",
        background: "#0B0B0C",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontFamily: "Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 600, margin: 0 }}>
        {title}
      </h1>
      <p style={{ color: "#8C8C93", maxWidth: "40ch", lineHeight: 1.6 }}>{message}</p>
    </main>
  );
}
