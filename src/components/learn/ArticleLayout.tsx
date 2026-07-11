import type { ReactNode } from "react";
import { Link } from "react-router";
import type { MetaDescriptor } from "react-router";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL, EMAIL } from "../../lib/constants";
import { trackLead } from "../../lib/analytics";
import { pageMeta, breadcrumbSchema, SITE_URL } from "../../lib/seo";
import { FadeIn } from "../motion/FadeIn";
import { Dot } from "../brand/Dot";

export type RelatedArticle = {
  slug: string;
  title: string;
};

type ArticleMetaInput = {
  title: string;
  description: string;
  slug: string;
};

// Per-article <title>/description, canonical link, OG/Twitter tags, and
// Article + Breadcrumb JSON-LD. Call from a learn article page's own `meta`
// export, e.g.:
//   export const meta = () => getArticleMeta({ title, description, slug });
export function getArticleMeta({ title, description, slug }: ArticleMetaInput): MetaDescriptor[] {
  const path = `/learn/${slug}`;
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} — EraLean`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    ...pageMeta({ title: fullTitle, description, path, type: "article" }),
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: "EraLean" },
        publisher: { "@type": "Organization", name: "EraLean" },
      },
    },
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Learn", path: "/services/email-marketing" },
      { name: title, path },
    ]),
  ];
}

// H2 for article body copy — Volt dot before each, per the brand system.
export function ArticleH2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 flex items-center gap-3 font-display tracking-display text-2xl font-semibold text-white md:text-3xl">
      <Dot />
      {children}
    </h2>
  );
}

export function ArticleH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-10 font-display tracking-display text-xl font-semibold text-white">
      {children}
    </h3>
  );
}

export function ArticleList({ children }: { children: ReactNode }) {
  return <ul className="mt-6 space-y-3">{children}</ul>;
}

export function ArticleListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 font-sans font-light leading-[1.7] text-white/85">
      <Dot className="mt-2.5" />
      <span>{children}</span>
    </li>
  );
}

export function ArticleQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-8 border-l border-volt py-1 pl-6 font-serif text-xl italic text-white/90">
      {children}
    </blockquote>
  );
}

function ArticleNav() {
  return (
    <nav className="px-6 py-7 md:px-10">
      <div className="mx-auto flex max-w-[720px] items-center justify-between">
        <Link
          to="/"
          className="font-display tracking-display text-lg font-semibold text-white"
          aria-label="EraLean home"
        >
          <span className="inline-flex items-baseline">
            eralean
            <Dot className="ml-0.5 translate-y-[1px]" />
          </span>
        </Link>
        <Link
          to="/services/email-marketing"
          className="text-sm font-light text-ash transition-colors hover:text-white"
        >
          Learn
        </Link>
      </div>
    </nav>
  );
}

function CtaPanel() {
  return (
    <div className="px-6 md:px-10">
      <div className="mx-auto max-w-[720px] rounded-2xl bg-carbon p-8 md:p-10">
        <h2 className="font-display tracking-display text-2xl font-semibold text-white md:text-3xl">
          Want this done for you?
        </h2>
        <p className="mt-4 font-sans font-light leading-relaxed text-ash">
          We run Klaviyo for UK skincare & beauty brands — flows, campaigns,
          deliverability. £1,400/month, 3 spots.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead("email")}
          className="group mt-7 inline-flex items-center gap-2 rounded-full bg-volt px-7 py-3.5 font-medium text-black transition-colors hover:bg-[#a8e600]"
        >
          Book a free call
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}

function ContinueLearning({ related }: { related: RelatedArticle[] }) {
  return (
    <div className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[720px]">
        <h2 className="font-display tracking-display text-lg font-semibold text-white">
          Continue learning
        </h2>
        <ul className="mt-6 space-y-3">
          {related.map((article) => (
            <li key={article.slug} className="flex items-start gap-3">
              <Dot className="mt-2.5" />
              <Link
                to={`/learn/${article.slug}`}
                className="font-sans font-light text-white/85 transition-colors hover:text-white"
              >
                {article.title}
              </Link>
            </li>
          ))}
          <li className="flex items-start gap-3">
            <Dot className="mt-2.5" />
            <Link
              to="/services/email-marketing"
              className="font-sans font-light text-white/85 transition-colors hover:text-white"
            >
              Email Marketing Services
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ArticleFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-10">
      <div className="mx-auto max-w-[720px]">
        <span className="text-xs text-ash">© 2026 EraLean · {EMAIL}</span>
      </div>
    </footer>
  );
}

export type ArticleLayoutProps = {
  title: string;
  description: string;
  category: string;
  slug: string;
  children: ReactNode;
  related: RelatedArticle[];
};

export function ArticleLayout({
  title,
  description,
  category,
  slug,
  children,
  related,
}: ArticleLayoutProps) {
  const otherRelated = related.filter((article) => article.slug !== slug);

  return (
    <div className="bg-ink text-white">
      <ArticleNav />

      <main>
        <FadeIn>
          <header className="px-6 pb-12 pt-4 md:px-10 md:pb-16">
            <div className="mx-auto max-w-[720px]">
              <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-ash">
                <Dot />
                {category}
              </div>
              <h1 className="mt-6 font-display tracking-display text-4xl font-semibold text-white md:text-5xl">
                {title}
              </h1>
              <p className="mt-6 font-sans font-light text-lg leading-relaxed text-ash">
                {description}
              </p>
            </div>
          </header>
        </FadeIn>

        <div className="px-6 md:px-10">
          <div className="mx-auto max-w-[720px] hairline border-t" />
        </div>

        <FadeIn>
          <article className="px-6 py-12 md:px-10 md:py-16">
            <div className="mx-auto max-w-[720px] [&_p]:mt-6 [&_p]:font-sans [&_p]:font-light [&_p]:leading-[1.7] [&_p]:text-white/85 [&_a]:text-volt [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-medium [&_strong]:text-white">
              {children}
            </div>
          </article>
        </FadeIn>

        <FadeIn>
          <CtaPanel />
        </FadeIn>

        <FadeIn>
          <ContinueLearning related={otherRelated} />
        </FadeIn>
      </main>

      <ArticleFooter />
    </div>
  );
}
