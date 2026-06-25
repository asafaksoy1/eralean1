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
import { AuditPopup } from "./components/AuditPopup";
import { SmoothScroll } from "./components/SmoothScroll";
import "lenis/dist/lenis.css";
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

// GA4 + Google Ads (shared gtag.js loader) and Meta Pixel base tags. Rendered
// only in production builds (see the import.meta.env.PROD guard in <head>), so
// dev never pollutes analytics. The inline scripts define window.gtag /
// window.fbq, which src/lib/analytics.ts then calls from CTA handlers.
function TrackingScripts() {
  return (
    <>
      {/* GA4 + Google Ads — single gtag.js loader, two configs */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-VM6DQTS5DG"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VM6DQTS5DG');
            gtag('config', 'AW-18269973238');
          `,
        }}
      />
      {/* Meta Pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '4391212171163117');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=4391212171163117&ev=PageView&noscript=1" alt="" />`,
        }}
      />
    </>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        {/* Brand type: Inter Tight (display), Inter (body), Newsreader (italic pull-quotes). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700&family=Inter:wght@300;400;500&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,500&display=swap"
        />
        <Meta />
        <Links />
        {import.meta.env.PROD && <TrackingScripts />}
      </head>
      <body>
        <SmoothScroll>
          {children}
          <AuditPopup />
        </SmoothScroll>
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
