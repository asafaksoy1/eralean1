import type { MetaDescriptor } from "react-router";

export const SITE_URL = "https://www.eralean.com";
export const SITE_NAME = "EraLean";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

type PageMetaInput = {
  title: string;
  description: string;
  path: string; // e.g. "/services/website" — "/" for home
  type?: "website" | "article";
};

// Canonical link + Open Graph + Twitter Card tags shared by every indexable
// route. Pass the result alongside (or merged into) a page's own title/
// description meta entries.
export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: PageMetaInput): MetaDescriptor[] {
  const url = `${SITE_URL}${path}`;

  return [
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: type },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: DEFAULT_OG_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: DEFAULT_OG_IMAGE },
  ];
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    },
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
};

export function serviceSchema({ name, description, path }: ServiceSchemaInput) {
  return {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      description,
      url: `${SITE_URL}${path}`,
      provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      areaServed: "GB",
    },
  };
}
