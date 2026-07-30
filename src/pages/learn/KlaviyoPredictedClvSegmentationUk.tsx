import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Segment by Predicted CLV in Klaviyo (UK Guide)";
const DESCRIPTION = "A practical UK guide to building Klaviyo predicted CLV and churn-risk segments to target high-value customers and drive repeat purchases.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-predicted-clv-segmentation-uk";

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
  { id: "what-predicted-clv-is", label: "What predicted CLV actually is" },
  { id: "eligibility", label: "The data thresholds you must clear first" },
  { id: "where-to-find-it", label: "Where the predictive data lives" },
  { id: "high-low-segments", label: "Building high and low CLV segments" },
  { id: "churn-risk", label: "Churn risk: the companion metric" },
  { id: "combining-metrics", label: "Combining metrics for sleeping VIPs" },
  { id: "plugging-into-flows", label: "Plugging predictions into flows" },
  { id: "beyond-email", label: "Beyond email: paid acquisition" },
  { id: "why-2026", label: "Why this matters in 2026" },
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

export default function KlaviyoPredictedClvSegmentationUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Most UK stores treat every customer the same: the same discount, the same
        cadence, the same offers. That was survivable when acquisition was cheap.
        It isn't any more. Klaviyo's predictive analytics gives you a way out — it
        reads your existing order and engagement data and tells you which customers
        are worth spending on, which are about to lapse, and roughly when each one
        will buy again.
      </p>
      <p>
        This guide walks through how to build predicted Customer Lifetime Value
        (CLV) and churn-risk segments, message them differently, and wire them into
        automated flows so the returns compound. No new tooling required — if your
        store already sends through Klaviyo, the data is either there or a few
        thresholds away.
      </p>

      <TableOfContents />

      <div id="what-predicted-clv-is">
        <ArticleH2>What predicted CLV actually is</ArticleH2>
      </div>
      <p>
        Klaviyo splits lifetime value into two figures. Historic CLV is the total a
        customer has actually spent to date — a backward-looking fact. Predicted CLV
        uses AI to estimate how much a customer will spend, and how many purchases
        they'll make, over the next 365 days. It's the forward-looking number, and
        it's the one that matters for segmentation.
      </p>
      <p>
        The prediction is built from three inputs: purchase frequency, average order
        value and the time between orders. The underlying models retrain weekly, so
        forecasts update automatically as new purchases and interactions arrive —
        there's no manual tuning to do. Every standard predictive insight uses that
        365-day window; brands on Klaviyo Marketing Analytics can shorten or lengthen
        the CLV calculation window to suit their buying cycle.
      </p>
      <ArticleQuote>
        Historic CLV tells you what a customer was worth. Predicted CLV tells you
        what they'll be worth — and that's what you budget against.
      </ArticleQuote>

      <div id="eligibility">
        <ArticleH2>The data thresholds you must clear first</ArticleH2>
      </div>
      <p>
        Predictive fields don't appear on demand. Klaviyo needs enough history to
        model behaviour reliably, and it enforces three conditions — all of which
        must be met before the fields show up:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>At least 500 customers who have placed an order.</strong> This
          counts real purchasers, not active profiles. A big newsletter list won't
          get you there on its own.
        </ArticleListItem>
        <ArticleListItem>
          <strong>At least 180 days of order history</strong>, with orders in the
          last 30 days. The store needs to be trading, not dormant.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Some customers with 3 or more orders.</strong> Without repeat
          buyers, the model has nothing to learn frequency from.
        </ArticleListItem>
      </ArticleList>
      <p>
        For newer or lower-volume UK brands, this is the honest catch: you simply
        won't see predictions until you cross these thresholds. If you're close,
        focus on turning first-time buyers into second-time buyers — that both
        unlocks the data and improves the accuracy of the forecasts once they arrive.
      </p>

      <div id="where-to-find-it">
        <ArticleH2>Where the predictive data lives</ArticleH2>
      </div>
      <p>
        Once your store qualifies, the data sits on each customer profile under
        Profiles → Metrics &amp; Insights. Klaviyo visualises Historic CLV as a blue
        bar and Predicted CLV as a green bar, sat alongside a handful of related
        metrics:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Average order value.</strong> The typical spend per order for that
          customer.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Average time between orders.</strong> Your natural replenishment
          window, per person.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Expected date of next order.</strong> The single most useful field
          for timing winbacks and replenishment.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Churn-risk score.</strong> The probability that the customer won't
          buy again — more on this below.
        </ArticleListItem>
      </ArticleList>
      <p>
        You read these on individual profiles, but you act on them at scale by
        building segments that filter on the predictive fields.
      </p>

      <div id="high-low-segments">
        <ArticleH2>Building high and low CLV segments</ArticleH2>
      </div>
      <p>
        The core play is simple: split your customers by predicted spend and message
        the extremes differently. A common approach is a high-CLV segment of the top
        ~20% of predicted spenders and a low-CLV segment of the bottom ~20%.
      </p>

      <ArticleH3>High predicted-CLV customers</ArticleH3>
      <p>
        These are the people who justify your best offers. Push them higher-value
        products, new arrivals, VIP and loyalty invitations, and review requests.
        The Willow Tree Boutique, for example, targeted customers with a predicted
        CLV over £400 (or an AOV over £120) with campaigns highlighting their
        pricier apparel — putting premium product in front of the people most likely
        to buy it, rather than blanket-discounting to everyone.
      </p>

      <ArticleH3>Low predicted-CLV customers</ArticleH3>
      <p>
        Lower-CLV customers respond better to tried-and-true best sellers and the
        occasional sale item — not your premium range. A well-worn tactic from
        Klaviyo's own help docs is to build a segment of customers predicted to
        spend no more than a small threshold and hit them with a discount-led
        winback.
      </p>
      <p>
        Critically, layer engagement conditions into that segment to protect
        deliverability — for example, <em>is in the main newsletter list</em> AND{" "}
        <em>has opened an email in the last 90 days</em>. Sending discounts to
        low-value, disengaged addresses is how you damage your sender reputation.
        Only send to people still paying attention.
      </p>

      <div id="churn-risk">
        <ArticleH2>Churn risk: the companion metric</ArticleH2>
      </div>
      <p>
        Churn Risk Prediction is the probability that a customer will not purchase
        again, expressed between 0 and 1. A score of 0.45 means a 45% churn risk;
        0.9 means a 90% chance they won't buy again. Klaviyo commonly buckets it as:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Low</strong> — under roughly 33% probability of not purchasing.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Medium</strong> — 33% to 66%.
        </ArticleListItem>
        <ArticleListItem>
          <strong>High</strong> — over roughly 66%.
        </ArticleListItem>
      </ArticleList>
      <p>
        Churn risk falls when a customer places an order and rises the longer they
        stay inactive. One caveat worth flagging: Klaviyo itself notes churn risk can
        misfire for stores with few repeat buyers, because first-time purchasers
        often score as high-churn immediately after buying. If that describes your
        store, lean on Expected Date of Next Order as a more reliable trigger for
        winback timing.
      </p>

      <div id="combining-metrics">
        <ArticleH2>Combining metrics for sleeping VIPs</ArticleH2>
      </div>
      <p>
        The most valuable segments combine metrics rather than relying on one. The
        standout combination is <strong>high predicted CLV plus high churn risk</strong>:
        valuable customers on the verge of lapsing. Call them at-risk champions or
        sleeping VIPs — either way, they're the group that justifies premium
        retention effort.
      </p>
      <p>
        Because they're worth far more than the average lapsing customer, you can
        afford to spend on keeping them:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Early access</strong> to new ranges before the general list.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Exclusive discounts</strong> reserved for top spenders, not blanket
          sale codes.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Personal outreach</strong> — a genuine message from a founder or
          account manager, especially for higher-ticket brands.
        </ArticleListItem>
      </ArticleList>
      <ArticleQuote>
        A blanket 10% off is wasted on a champion and unnecessary for a bargain
        hunter. The point of combining metrics is to spend where it changes the
        outcome.
      </ArticleQuote>

      <div id="plugging-into-flows">
        <ArticleH2>Plugging predictions into flows</ArticleH2>
      </div>
      <p>
        Segments alone are useful. Segments wired into automated flows are where the
        compounding returns sit. Klaviyo's own data shows automated flows generate
        far more revenue per recipient than one-off campaigns — commonly cited as
        roughly 30x. Three flows do most of the heavy lifting:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Predictive replenishment.</strong> Triggered by Expected Date of
          Next Order, so the reminder lands when the customer is actually running low
          — not on a fixed time delay that ignores individual buying cycles.
        </ArticleListItem>
        <ArticleListItem>
          <strong>VIP upsell.</strong> Aimed at high predicted-CLV customers, pushing
          premium product, new arrivals and loyalty perks.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Predictive winback.</strong> Aimed at high churn-risk customers,
          with the sleeping-VIP subset getting the premium offer and the low-value
          subset getting a lighter, engagement-gated discount.
        </ArticleListItem>
      </ArticleList>
      <p>
        For UK Shopify, BigCommerce, Magento and WooCommerce stores, this predictive
        data syncs automatically once the integration is connected. That makes it a
        low-effort, high-leverage upgrade over the static time-delay flows most
        brands still run.
      </p>

      <div id="beyond-email">
        <ArticleH2>Beyond email: paid acquisition</ArticleH2>
      </div>
      <p>
        Predictive fields aren't locked inside Klaviyo. You can export them via CSV
        or API and push them to Facebook and Google as the source for lookalike or
        similar audiences. Feeding your platform your highest predicted-CLV customers
        — rather than all buyers indiscriminately — tells the algorithm to find more
        people like your best ones, which sharpens paid targeting and lifts acquisition
        efficiency. Retention data, in other words, makes your acquisition spend work
        harder too.
      </p>

      <div id="why-2026">
        <ArticleH2>Why this matters in 2026</ArticleH2>
      </div>
      <p>
        The economics have shifted. Rising Meta and Google ad costs mean brands can no
        longer afford to treat every customer the same, and retention has become the
        cheaper lever. McKinsey data indicates companies that excel at personalisation
        generate around 40% more revenue from those activities than their peers — and
        predictive segmentation is personalisation with a clear payback attached.
      </p>
      <p>
        The work isn't complicated. Clear the data thresholds, build a top-20% and
        bottom-20% CLV segment, layer in churn risk to find your sleeping VIPs, and
        wire the whole thing into replenishment, upsell and winback flows. The models
        retrain weekly on their own, so once it's set up it keeps improving without
        you touching it. The brands pulling ahead aren't spending more — they're
        spending it on the right customers.
      </p>
    </ArticleLayout>
  );
}
