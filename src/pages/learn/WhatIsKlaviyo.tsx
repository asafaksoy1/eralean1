import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "What Is Klaviyo? A Guide for Ecommerce Brands";
const DESCRIPTION =
  "What Klaviyo actually does, how it differs from a generic email tool, and whether it's the right fit for your store.";
const CATEGORY = "Klaviyo";
const SLUG = "what-is-klaviyo";

export const meta = () =>
  getArticleMeta({ title: TITLE, description: DESCRIPTION, slug: SLUG });

const RELATED = [
  { slug: "how-to-setup-klaviyo", title: "How to set up Klaviyo: a step-by-step guide" },
  { slug: "klaviyo-vs-mailchimp", title: "Klaviyo vs Mailchimp: which is better for ecommerce" },
  { slug: "best-klaviyo-flows", title: "The best Klaviyo flows every store should have" },
  { slug: "shopify-email-marketing", title: "Shopify email marketing: the complete guide" },
  { slug: "welcome-email-series", title: "How to build a welcome email series that converts" },
];

const SECTIONS = [
  { id: "what-is-klaviyo", label: "What is Klaviyo, exactly?" },
  { id: "how-it-works", label: "How Klaviyo actually works" },
  { id: "why-ecommerce", label: "Why ecommerce brands use it" },
  { id: "core-features", label: "The core features that matter" },
  { id: "who-its-for", label: "Who Klaviyo is — and isn't — for" },
  { id: "pricing", label: "How Klaviyo pricing works" },
  { id: "getting-started", label: "Getting started with Klaviyo" },
  { id: "agency-vs-diy", label: "Running it yourself vs. bringing in help" },
  { id: "mistakes", label: "Common mistakes brands make" },
  { id: "faq", label: "FAQ" },
];

function TableOfContents() {
  return (
    <nav aria-label="Table of contents" className="mt-10 rounded-2xl bg-carbon p-6 md:p-8">
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-ash">
        In this guide
      </p>
      <ArticleList>
        {SECTIONS.map((section) => (
          <ArticleListItem key={section.id}>
            <a href={`#${section.id}`}>{section.label}</a>
          </ArticleListItem>
        ))}
      </ArticleList>
    </nav>
  );
}

export default function WhatIsKlaviyoPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        If you sell online, you've almost certainly heard the name. Klaviyo
        shows up in Shopify app recommendations, in agency pitch decks, and in
        the tech stack of nearly every fast-growing ecommerce brand you admire.
        But "email and SMS platform" is a thin description for what it
        actually does — and that vagueness is exactly why so many store owners
        sign up, poke around for twenty minutes, and never come back.
      </p>
      <p>
        This guide explains what Klaviyo is, how it's different from the
        email tool you might already be using, and whether it's worth the
        switch for your store. No jargon, no affiliate spin — just a clear
        look at the platform and what it's actually built to do.
      </p>

      <TableOfContents />

      <div id="what-is-klaviyo">
        <ArticleH2>What is Klaviyo, exactly?</ArticleH2>
      </div>
      <p>
        Klaviyo is a marketing platform built specifically for ecommerce. It
        sends email and SMS, but unlike a general-purpose tool like Mailchimp
        or Constant Contact, every part of it is designed around one job:
        turning store data into revenue.
      </p>
      <p>
        That distinction matters more than it sounds. A generic email
        platform knows whether someone opened a newsletter. Klaviyo knows
        whether they then bought the £85 jacket they viewed twice, abandoned
        in their cart, and clicked through from a follow-up email three days
        later. It connects directly to your store — Shopify, BigCommerce,
        WooCommerce, Magento — and pulls in orders, products, browsing
        behaviour and customer profiles in real time.
      </p>
      <p>
        In practice, that means you're not just sending emails. You're
        building automated sequences that react to what a real person did on
        your site, and you can measure exactly how much revenue each one
        produced, down to the individual flow and email.
      </p>

      <div id="how-it-works">
        <ArticleH2>How Klaviyo actually works</ArticleH2>
      </div>
      <p>
        Underneath the interface, Klaviyo is built around three things:
        profiles, events, and flows.
      </p>
      <ArticleH3>Profiles</ArticleH3>
      <p>
        Every person who lands on your site, signs up to your list, or buys
        from you gets a profile. That profile accumulates data over time —
        what they've bought, how much they've spent, what they've browsed,
        which emails they've opened, and any custom properties you choose to
        track.
      </p>
      <ArticleH3>Events</ArticleH3>
      <p>
        Events are the actions that build those profiles: "Placed Order",
        "Viewed Product", "Started Checkout", "Subscribed to List". Klaviyo
        tracks these automatically once it's connected to your store, and you
        can add custom events for anything specific to your business.
      </p>
      <ArticleH3>Flows and campaigns</ArticleH3>
      <p>
        Campaigns are one-off sends — a Black Friday email, a new collection
        announcement. Flows are automated sequences triggered by an event or
        a condition: someone abandons a cart, a new customer makes their
        first purchase, a subscriber hasn't opened anything in 90 days. Once
        a flow is built, it runs without you touching it again, reacting to
        each person's behaviour individually.
      </p>

      <div id="why-ecommerce">
        <ArticleH2>Why ecommerce brands use it</ArticleH2>
      </div>
      <p>
        For most stores, email is the highest-margin channel they have. There's
        no ad spend, no bidding war, no platform taking a cut — you're
        messaging people who already know who you are. Klaviyo is built to
        make that channel work as hard as possible, for a few specific
        reasons:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Native store integration.</strong> Product images, prices
          and stock levels sync automatically into emails — no manual
          updating when a product sells out or a price changes.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Behavioural segmentation.</strong> You can target "people
          who've bought twice but not in 60 days" or "browsed the sale
          category but didn't purchase" without writing a line of code.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Revenue attribution.</strong> Every flow and campaign shows
          exactly how much revenue it generated, so you're optimising against
          real numbers, not opens and clicks.
        </ArticleListItem>
        <ArticleListItem>
          <strong>SMS in the same platform.</strong> Email and SMS share the
          same customer data and the same flow builder, so you're not
          stitching together two disconnected tools.
        </ArticleListItem>
      </ArticleList>

      <div id="core-features">
        <ArticleH2>The core features that matter</ArticleH2>
      </div>
      <p>
        Klaviyo's feature list is long, but most of the value sits in a
        handful of areas:
      </p>
      <ArticleH3>Flows (automation)</ArticleH3>
      <p>
        Pre-built and custom automations that run on autopilot: welcome
        series, abandoned cart, browse abandonment, post-purchase, win-back.
        For most stores, flows generate a disproportionate share of total
        email revenue relative to the time spent building them.
      </p>
      <ArticleH3>Segmentation</ArticleH3>
      <p>
        Dynamic, real-time groups built from any combination of behaviour,
        purchase history and engagement. A segment updates itself as people's
        behaviour changes — no manually exporting and re-importing lists.
      </p>
      <ArticleH3>Forms and sign-up units</ArticleH3>
      <p>
        Pop-ups, embedded forms and flyouts for growing your list, with
        built-in A/B testing on copy, design and timing.
      </p>
      <ArticleH3>Reporting</ArticleH3>
      <p>
        Revenue per recipient, attributed revenue per flow, deliverability
        metrics and list growth — all in one dashboard, without needing to
        cross-reference your store's analytics separately.
      </p>

      <ArticleQuote>
        The platform itself doesn't make you money. The flows and segments
        you build inside it do.
      </ArticleQuote>

      <div id="who-its-for">
        <ArticleH2>Who Klaviyo is — and isn't — for</ArticleH2>
      </div>
      <p>
        Klaviyo is built for stores with recurring transactional data —
        ecommerce, subscription businesses, anything where "Placed Order" is
        a meaningful, repeatable event. If that's you, the behavioural data
        it captures is genuinely difficult to replicate elsewhere.
      </p>
      <p>
        It's a weaker fit for businesses without that transactional layer —
        a local service business taking enquiries through a contact form, for
        instance, gets little benefit from Klaviyo's ecommerce-specific
        features and would be better served by a simpler tool.
      </p>
      <p>
        It's also worth being honest about effort. Klaviyo rewards stores
        that actually build out flows and segments properly. Brands that
        connect it, send a generic newsletter, and leave the rest on
        autopilot tend to get underwhelming results — not because the
        platform doesn't work, but because it was never set up to work.
      </p>

      <div id="pricing">
        <ArticleH2>How Klaviyo pricing works</ArticleH2>
      </div>
      <p>
        Klaviyo charges based on the number of profiles in your account —
        broadly, contacts you're actively marketing to — rather than a flat
        monthly fee. SMS is billed separately, based on message volume.
        There's a free tier for very small lists, and cost scales up as your
        list grows.
      </p>
      <p>
        The practical implication: list hygiene matters. Suppressing
        unengaged profiles you'll never convert keeps your bill proportional
        to the audience that's actually worth marketing to, rather than
        paying to message people who haven't opened an email in two years.
      </p>

      <div id="getting-started">
        <ArticleH2>Getting started with Klaviyo</ArticleH2>
      </div>
      <p>
        The setup sequence that tends to work, in order:
      </p>
      <ArticleList>
        <ArticleListItem>Connect your store and confirm data is syncing — orders, products and customer profiles.</ArticleListItem>
        <ArticleListItem>Set up sender authentication (SPF, DKIM, DMARC) so your emails land in the inbox, not spam.</ArticleListItem>
        <ArticleListItem>Build your foundational flows first: welcome series, abandoned cart, post-purchase.</ArticleListItem>
        <ArticleListItem>Add a sign-up form to start growing your list with intent.</ArticleListItem>
        <ArticleListItem>Layer in segmentation and campaigns once the automated revenue base is in place.</ArticleListItem>
      </ArticleList>
      <p>
        We cover the full process in detail in our{" "}
        <a href="/learn/how-to-setup-klaviyo">step-by-step Klaviyo setup guide</a>.
      </p>

      <div id="agency-vs-diy">
        <ArticleH2>Running it yourself vs. bringing in help</ArticleH2>
      </div>
      <p>
        Plenty of stores run Klaviyo entirely in-house, and for a small list
        with simple needs, that's often the right call. The platform's
        interface is genuinely accessible to non-technical marketers, and
        the built-in flow templates give you a reasonable starting point
        without writing anything from scratch.
      </p>
      <p>
        Where it gets harder is maintenance. Flows need revisiting as your
        product range changes, segments drift out of date as customer
        behaviour shifts, and deliverability needs occasional attention as
        your sending volume grows. None of this is difficult individually,
        but it adds up, and it's the part that tends to get deprioritised
        when the person running Klaviyo also has five other jobs.
      </p>
      <p>
        That's usually the point at which stores either dedicate someone
        internally to own it properly, or bring in an agency or freelancer
        to manage it ongoing — not because the platform demands it, but
        because someone needs to actually keep iterating on it for the
        revenue to keep growing.
      </p>

      <div id="mistakes">
        <ArticleH2>Common mistakes brands make</ArticleH2>
      </div>
      <ArticleH3>Treating it like a newsletter tool</ArticleH3>
      <p>
        The single biggest waste of Klaviyo's potential is using it purely
        for one-off campaigns and ignoring flows. Flows run continuously and
        typically outperform campaigns on revenue per recipient by a wide
        margin, because they're triggered by genuine purchase intent.
      </p>
      <ArticleH3>Skipping authentication setup</ArticleH3>
      <p>
        Sending from an unauthenticated domain tanks deliverability fast.
        It's a ten-minute setup that gets skipped constantly, usually because
        nobody flags it during onboarding.
      </p>
      <ArticleH3>Over-segmenting too early</ArticleH3>
      <p>
        Building forty hyper-specific segments before you have the list size
        or data to support them adds complexity without adding revenue. Start
        broad, narrow down as patterns emerge.
      </p>
      <ArticleH3>Ignoring SMS compliance</ArticleH3>
      <p>
        SMS carries stricter consent requirements than email in most
        jurisdictions. Getting opt-in language wrong is a compliance risk,
        not just a deliverability one.
      </p>

      <div id="faq">
        <ArticleH2>Frequently asked questions</ArticleH2>
      </div>
      <ArticleH3>Is Klaviyo only for Shopify stores?</ArticleH3>
      <p>
        No. Klaviyo integrates with Shopify, BigCommerce, WooCommerce,
        Magento and others. Shopify's integration is the deepest and most
        commonly used, but it's not a requirement.
      </p>
      <ArticleH3>Can I migrate from Mailchimp or Klaviyo's other competitors?</ArticleH3>
      <p>
        Yes. Klaviyo has built-in migration tools for contacts, and most
        flow logic needs to be rebuilt natively rather than imported, since
        automation structures don't transfer cleanly between platforms. See
        our <a href="/learn/klaviyo-vs-mailchimp">Klaviyo vs Mailchimp comparison</a>{" "}
        for a fuller breakdown.
      </p>
      <ArticleH3>Do I need a developer to set it up?</ArticleH3>
      <p>
        Not for most stores. The standard ecommerce integrations are
        plug-and-play. Custom events or non-standard platforms occasionally
        need development work, but the core setup is designed for marketers,
        not engineers.
      </p>
      <ArticleH3>How long until I see results?</ArticleH3>
      <p>
        Flows start generating revenue almost immediately once live, since
        they're triggered by existing site traffic and purchase behaviour.
        Campaigns and list growth compound more slowly, typically over
        several months.
      </p>

      <ArticleH2>Conclusion</ArticleH2>
      <p>
        Klaviyo isn't just "email marketing software" — it's a system for
        turning your store's own data into a channel that runs largely on
        autopilot once it's built properly. The platform itself is only half
        the story; the flows, segments and sends you put inside it are what
        actually move revenue.
      </p>
      <p>
        If you're evaluating whether to switch, the question isn't whether
        Klaviyo is good — it's whether you (or whoever runs it) will put in
        the setup work to use what it's actually built for.
      </p>
    </ArticleLayout>
  );
}
