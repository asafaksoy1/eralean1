import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up a Klaviyo Post-Purchase Flow for UK Ecommerce Brands";
const DESCRIPTION = "A step-by-step guide to building a Klaviyo post-purchase flow that drives repeat orders, reviews and loyalty for UK ecommerce brands.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-post-purchase-flow-setup-uk";

export const meta = () =>
  getArticleMeta({ title: TITLE, description: DESCRIPTION, slug: SLUG });

const RELATED = [
  {
    "slug": "what-is-klaviyo",
    "title": "What Is Klaviyo? A Guide for Ecommerce Brands"
  },
  {
    "slug": "welcome-email-series",
    "title": "How to build a welcome email series that converts"
  }
];

const SECTIONS = [
  { id: "why-it-matters", label: "Why the post-purchase window is the most valuable moment" },
  { id: "structure", label: "The structure that works" },
  { id: "transactional", label: "Keep transactional emails separate" },
  { id: "setup", label: "Setting up the flow in Klaviyo" },
  { id: "personalisation", label: "Personalising with conditional splits" },
  { id: "timing", label: "Timing: the mistake almost everyone makes" },
  { id: "guardrails", label: "Guardrails for a clean build" },
  { id: "deliverability", label: "Deliverability and measurement" },
  { id: "replenishment", label: "Consumables and replenishment" },
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

export default function KlaviyoPostPurchaseFlowSetupUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        The gap between "order placed" and "order delivered" is the highest-engagement stretch
        in the entire customer journey. Your buyer has just handed over money and is now waiting,
        checking their inbox, wondering when their parcel arrives. Most brands do nothing with
        that attention beyond a stock Shopify confirmation. That is a costly habit.
      </p>
      <p>
        A well-built Klaviyo post-purchase flow turns that waiting period into repeat orders,
        reviews and loyalty sign-ups. This guide walks through the structure, the setup, the
        personalisation and — most importantly — the timing decisions that separate a flow that
        earns from one that annoys.
      </p>

      <TableOfContents />

      <div id="why-it-matters">
        <ArticleH2>Why the post-purchase window is the most valuable moment</ArticleH2>
      </div>
      <p>
        The numbers make the case on their own. Klaviyo's own research shows post-purchase
        messaging delivers a 217% higher open rate, over 500% higher click rate, and 90% higher
        revenue per recipient than the average campaign. Agencies building these flows regularly
        see open rates of 60–70% — roughly double what campaigns achieve — precisely because the
        buyer is already engaged and waiting.
      </p>
      <p>
        Automation as a whole is far more efficient than one-off sends. Flows convert at an
        average 2.11% placed-order rate versus just 0.16% for campaigns — a roughly 13x gain — and
        generate nearly 41% of total email revenue from only 5.3% of sends, with revenue per
        recipient close to 18x higher. The retention angle is just as strong: customers who
        receive post-purchase emails are around 70% more likely to buy again within six months.
      </p>
      <ArticleQuote>
        Flows generate nearly 41% of email revenue from just 5.3% of sends. The post-purchase
        window is where a large share of that value is won or lost.
      </ArticleQuote>

      <div id="structure">
        <ArticleH2>The structure that works</ArticleH2>
      </div>
      <p>
        The recommended structure across Klaviyo's documentation and specialist agencies is
        consistent: thank the customer, reinforce the brand, then set up the second purchase.
        Start with three or four emails and build from there rather than launching a
        ten-message epic on day one.
      </p>
      <ArticleList>
        <ArticleListItem><strong>Thank-you email.</strong> Sent immediately, split by first-time versus repeat buyer. This sets the tone and reinforces the brand.</ArticleListItem>
        <ArticleListItem><strong>Education email.</strong> A "how to get the most from your product" message that helps the customer succeed and reduces buyer's remorse.</ArticleListItem>
        <ArticleListItem><strong>Review request.</strong> Asked once the product has arrived and been used, not before.</ArticleListItem>
        <ArticleListItem><strong>Cross-sell or upsell.</strong> Sent once the first product has proven its value.</ArticleListItem>
      </ArticleList>
      <p>
        If you only have appetite for three, prioritise shipping information, education and the
        review request. Those carry the most weight.
      </p>

      <div id="transactional">
        <ArticleH2>Keep transactional emails separate</ArticleH2>
      </div>
      <p>
        Order confirmation and shipping confirmation belong in their own flows. Klaviyo is clear
        on this: transactional emails should always arrive promptly and contain no marketing
        content. Your post-purchase flow is a supplement to Shopify's default transactional
        emails, not a replacement for them.
      </p>
      <p>
        Mixing promotional content into a shipping confirmation risks the message being treated
        as marketing, delaying the information customers actually want. Keep the two jobs
        separate and each performs its role cleanly.
      </p>

      <div id="setup">
        <ArticleH2>Setting up the flow in Klaviyo</ArticleH2>
      </div>
      <p>
        The build itself is straightforward. Create a metric-triggered flow and choose{" "}
        <strong>Placed Order</strong> as the trigger. Add your initial thank-you message, then
        add time delays before any conditional splits or additional messages.
      </p>
      <ArticleList>
        <ArticleListItem><strong>Trigger.</strong> Select the Placed Order metric — this fires the moment a purchase is made.</ArticleListItem>
        <ArticleListItem><strong>First message.</strong> Add the thank-you email with no delay so it lands while attention is highest.</ArticleListItem>
        <ArticleListItem><strong>Delays and splits.</strong> Insert time delays and conditional logic before subsequent messages.</ArticleListItem>
      </ArticleList>
      <p>
        For product-specific education, resist the urge to build twenty separate flows or splits.
        Many practitioners use dynamic content blocks to show or hide product-specific sections
        within a single email, and link out to landing pages so the message does not get clipped
        in Gmail. It is cleaner to maintain and easier to audit.
      </p>

      <div id="personalisation">
        <ArticleH2>Personalising with conditional splits</ArticleH2>
      </div>
      <p>
        The single most useful split is a conditional check on whether someone has a previous{" "}
        <strong>Placed Order</strong> event. This lets you treat first-time and returning buyers
        differently within the same flow.
      </p>
      <ArticleList>
        <ArticleListItem><strong>First-time buyers.</strong> Encourage them to join the loyalty programme or email list, and introduce the brand properly.</ArticleListItem>
        <ArticleListItem><strong>Repeat buyers.</strong> Send a "welcome back", a loyalty status update, or a cross-sell based on what they have not yet tried.</ArticleListItem>
      </ArticleList>
      <p>
        You can go further. Split on order value to identify potential VIPs, or use a trigger
        split by specific product to send product-relevant education. Each layer of relevance
        lifts engagement — but keep the logic legible so the flow stays maintainable.
      </p>

      <div id="timing">
        <ArticleH2>Timing: the mistake almost everyone makes</ArticleH2>
      </div>
      <p>
        Timing is the most common error, and it is a serious one. The classic mistake is sending
        a "how's your product?" email before the product has arrived. Because the Placed Order
        trigger fires at purchase, any review request or how-to email timed off that trigger
        risks landing before the parcel does.
      </p>
      <p>
        The fix is to split the programme across two triggers. Fire the thank-you off{" "}
        <strong>Placed Order</strong> so it arrives immediately. Then trigger the review-request
        and cross-sell emails off the <strong>Fulfilled Order</strong> (or Fulfilled Shipment)
        metric, which fires when the order is marked fulfilled and a shipping label is produced.
      </p>
      <ArticleQuote>
        Nothing undermines a review request faster than it arriving before the parcel. Trigger
        those emails off Fulfilled Order, not Placed Order.
      </ArticleQuote>
      <p>
        From the fulfilment event, add a delay based on your actual shipping time plus a buffer —
        commonly the shipping window plus two days, or roughly three days after fulfilment to
        approximate delivery. Klaviyo's own example flow assumes nine days from order to shipment
        for one brand, which underlines the point: timing should reflect your real logistics, not
        a default.
      </p>
      <ArticleList>
        <ArticleListItem><strong>Review request.</strong> Anywhere from 4 days after fulfilment up to 7–10 days post-delivery.</ArticleListItem>
        <ArticleListItem><strong>Cross-sell or upsell.</strong> Best around 14–21 days after delivery, once the product has proven itself.</ArticleListItem>
      </ArticleList>
      <p>
        For sharper accuracy, UK brands can integrate carrier data via AfterShip to trigger a
        true "delivered" event, though this requires a custom event. Note that AfterShip excludes
        historical events older than 36–72 hours to avoid firing stale notifications.
      </p>

      <div id="guardrails">
        <ArticleH2>Guardrails for a clean build</ArticleH2>
      </div>
      <p>
        A post-purchase flow does not run in isolation. It overlaps with welcome and
        abandoned-cart flows, and buyers of multiple items can end up in the flow several times.
        A few guardrails keep the experience clean.
      </p>
      <ArticleList>
        <ArticleListItem><strong>Smart Sending.</strong> Cap how many messages a contact can receive in a set period so post-purchase, welcome and abandoned-cart flows do not stack up.</ArticleListItem>
        <ArticleListItem><strong>Flow filters.</strong> Add a "has not been in this flow for X days" condition so someone buying several items in a week does not receive multiple sequences at once.</ArticleListItem>
        <ArticleListItem><strong>Return and refund exits.</strong> Add exit or filter conditions so anyone who initiates a return or refund — via Loop or Returnly synced to Klaviyo — is removed immediately.</ArticleListItem>
      </ArticleList>
      <p>
        That last one matters more than it sounds. A "we hope you love it!" email arriving while
        someone is boxing up a return does lasting damage to trust. Build the exit before you
        launch, not after a complaint.
      </p>

      <div id="deliverability">
        <ArticleH2>Deliverability and measurement</ArticleH2>
      </div>
      <p>
        Deliverability is now non-negotiable. Since Google and Yahoo enforcement began in
        February 2024, with Microsoft's DMARC enforcement following from May 2025, SPF, DKIM and
        DMARC are mandatory for bulk senders. Non-compliant mail is set to be rejected outright
        by 2026. Get authentication in place before you scale sending.
      </p>
      <p>
        On measurement, treat open rates as directional only. Around 64% of B2C subscribers use
        an Apple Mail Privacy Protection-capable client, which inflates open figures. Judge your
        post-purchase flow on the metrics that reflect money: click rate, placed-order rate and
        revenue per recipient.
      </p>

      <div id="replenishment">
        <ArticleH2>Consumables and replenishment</ArticleH2>
      </div>
      <p>
        If you sell consumables — supplements, skincare, coffee, pet food — a dedicated
        replenishment flow is one of the highest-return additions you can make. Trigger it off
        Placed Order with a delay based on your actual repurchase timing, so the reminder lands
        just as the customer is running low.
      </p>
      <p>
        The wider point holds across every category. The post-purchase window is the most engaged
        moment your customer will give you, and the brands that plan around real delivery timing,
        respect the return process and measure on revenue rather than opens are the ones that turn
        a single order into a habit. Build the flow properly and it will earn quietly, every day,
        from the traffic you have already paid for.
      </p>
    </ArticleLayout>
  );
}
