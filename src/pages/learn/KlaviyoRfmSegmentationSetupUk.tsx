import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up RFM Segmentation in Klaviyo for UK Ecommerce Brands";
const DESCRIPTION = "A practical guide to building RFM segments in Klaviyo, defining customer groups, and triggering retention flows to lift revenue and protect margins.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-rfm-segmentation-setup-uk";

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
  { id: "what-is-rfm", label: "What RFM segmentation actually measures" },
  { id: "eligibility", label: "Eligibility: can your account run the RFM report?" },
  { id: "the-groups", label: "The RFM groups Klaviyo assigns" },
  { id: "starter-segments", label: "Five starter segments to build first" },
  { id: "build-a-segment", label: "Building an RFM segment step by step" },
  { id: "activate-flows", label: "Activating RFM in retention flows" },
  { id: "protect-margins", label: "Protecting margins: who gets a discount" },
  { id: "layering-signals", label: "Layering predictive signals and deliverability" },
  { id: "uk-consent", label: "RFM and UK consent" },
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

export default function KlaviyoRfmSegmentationSetupUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Two customers each spent £500 with your brand. One spent it in a single order two years
        ago and has not been seen since. The other spent it across twelve orders in the last six
        months. Their monetary value is identical, yet they need completely different email. Total
        spend alone cannot tell them apart. RFM segmentation can — and it is one of Klaviyo's most
        underused, highest-impact retention features.
      </p>
      <p>
        RFM scores every customer on three axes at once — Recency, Frequency and Monetary value —
        then groups them into named cohorts you can target directly. Done well, it turns generic
        sends into precision communication that lifts open rates, click rates, conversion and
        revenue per email. This guide walks through eligibility, the groups Klaviyo assigns, how to
        build the segments, and how to activate them without shredding your margins.
      </p>

      <TableOfContents />

      <div id="what-is-rfm">
        <ArticleH2>What RFM segmentation actually measures</ArticleH2>
      </div>
      <p>
        RFM stands for Recency, Frequency and Monetary. Its power is multidimensional: rather than
        ranking customers on one metric, it evaluates behaviour across three at once. Recency asks
        how long since they last ordered. Frequency asks how often they buy. Monetary asks how much
        they are worth. Klaviyo's built-in RFM Analysis report scores each input and combines them
        into a final RFM score.
      </p>
      <p>
        The built-in report uses a 1–3 scale for each dimension; many manual RFM frameworks use a
        1–5 scale for finer resolution. Either way, the principle is the same — a customer's
        position on all three axes decides which cohort they belong to, and which message they
        should receive.
      </p>
      <ArticleQuote>
        A customer who spent £500 once and vanished two years ago is fundamentally different from
        one who spent £500 across twelve purchases in the last six months. RFM captures that
        distinction; total spend cannot.
      </ArticleQuote>

      <div id="eligibility">
        <ArticleH2>Eligibility: can your account run the RFM report?</ArticleH2>
      </div>
      <p>
        The native RFM report has specific requirements. Confirm these before you plan any flows
        around it.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>A connected ecommerce integration.</strong> Shopify, BigCommerce, Magento or
          equivalent — or placed-order events sent via the Klaviyo API.
        </ArticleListItem>
        <ArticleListItem>
          <strong>At least 180 days of order history.</strong> With orders in the last 30 days, so
          the model has current data to work with.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Repeat buyers.</strong> At least some customers must have placed three or more
          orders.
        </ArticleListItem>
        <ArticleListItem>
          <strong>The right role.</strong> Only Owners, Admins, Managers and Analysts can access the
          report.
        </ArticleListItem>
      </ArticleList>
      <p>
        If you create a new custom metric, allow up to 48 hours for it to reflect in the report.
        Klaviyo's predictive properties — Predicted CLV, Churn Risk and Predicted Next Purchase Date
        — need a connected store and roughly 500+ orders to train the models, so newer stores may
        have RFM before predictions. As of 2 May 2024, Klaviyo added new RFM properties and settings,
        including three new properties for accounts using Advanced KDP.
      </p>

      <div id="the-groups">
        <ArticleH2>The RFM groups Klaviyo assigns</ArticleH2>
      </div>
      <p>
        Klaviyo groups scored customers into named cohorts. Each one describes a distinct
        relationship with your brand and therefore a distinct job for your email.
      </p>
      <ArticleList>
        <ArticleListItem><strong>Champions.</strong> Recent, frequent, high-value. Your best customers.</ArticleListItem>
        <ArticleListItem><strong>Loyal.</strong> Consistent repeat buyers worth nurturing and upselling.</ArticleListItem>
        <ArticleListItem><strong>Recent.</strong> New or recently active buyers to convert into repeat customers.</ArticleListItem>
        <ArticleListItem><strong>Needs Attention.</strong> Slipping engagement — a warning signal, not yet lost.</ArticleListItem>
        <ArticleListItem><strong>At Risk.</strong> Once valuable, now going quiet. Prime win-back targets.</ArticleListItem>
        <ArticleListItem><strong>Inactive.</strong> Long dormant. Low-cost reactivation attempts only.</ArticleListItem>
      </ArticleList>
      <p>
        The business case is stark. Agency data shows Champions — the top RFM scorers — drive
        roughly 30–40% of revenue from just 5–10% of customers. Knowing precisely who sits in that
        cohort, and treating them accordingly, is where the money is.
      </p>

      <div id="starter-segments">
        <ArticleH2>Five starter segments to build first</ArticleH2>
      </div>
      <p>
        You do not need the full report populated to start. Before layering native RFM on top, build
        five core segments. This foundation alone typically lifts email revenue 40–80% over broad
        sends.
      </p>
      <ArticleList>
        <ArticleListItem><strong>VIPs.</strong> Top 10% of customers by revenue.</ArticleListItem>
        <ArticleListItem><strong>Engaged non-buyers.</strong> Subscribers who open and click but have not purchased.</ArticleListItem>
        <ArticleListItem><strong>Recent purchasers.</strong> Ordered in the last 0–30 days.</ArticleListItem>
        <ArticleListItem><strong>At-risk.</strong> Last order 60–120 days ago.</ArticleListItem>
        <ArticleListItem><strong>Lapsed.</strong> No order in 180+ days.</ArticleListItem>
      </ArticleList>
      <p>
        If you are building RFM manually, a common set of buckets works well: recency by days since
        last order (0–30, 31–60, 61–120, 121–180, 181+); frequency by orders in the last twelve
        months (1, 2–3, 4–6, 7–10, 11+); and monetary by lifetime value tiers. These map cleanly to
        the cohorts above once you start scoring.
      </p>

      <div id="build-a-segment">
        <ArticleH2>Building an RFM segment step by step</ArticleH2>
      </div>
      <p>
        Once the report is populated, creating a segment is straightforward.
      </p>
      <ArticleList>
        <ArticleListItem>In the segment builder, find the <strong>RFM Segments</strong> card and click <strong>Create segment</strong>.</ArticleListItem>
        <ArticleListItem>Name it clearly, for example <strong>Needs Attention or At Risk</strong>.</ArticleListItem>
        <ArticleListItem>Choose the <strong>Current RFM group</strong> dimension, set the operator to <strong>Equals</strong>, and select a value such as <strong>At Risk</strong>.</ArticleListItem>
        <ArticleListItem>Add further groups with an <strong>OR</strong> connector — for instance, adding <strong>Needs Attention</strong>.</ArticleListItem>
        <ArticleListItem>Use an <strong>AND</strong> connector to narrow the audience — for example, targeting only one-time buyers now sitting in At Risk or Needs Attention.</ArticleListItem>
      </ArticleList>
      <p>
        Klaviyo also exposes <strong>Current RFM group</strong> and <strong>Previous RFM group</strong> as
        profile properties, so you can build conditional splits and dynamic content inside flows and
        email templates off the same signal.
      </p>
      <ArticleH3>Naming and validation</ArticleH3>
      <p>
        Label segments so any team member understands them at a glance — for example,{" "}
        <strong>Champions – 3+ Orders, £100+ Spend, Last 90 Days</strong>. Avoid over-filtering:
        start broader, then refine once you see the numbers. Use the <strong>Preview Segment</strong>{" "}
        button to validate the audience before you activate any flow against it.
      </p>

      <div id="activate-flows">
        <ArticleH2>Activating RFM in retention flows</ArticleH2>
      </div>
      <p>
        Segments only earn their keep when they drive flows. The highest-value trigger is an RFM{" "}
        <strong>group change</strong> — the moment a customer moves from one cohort to another.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Became Champion.</strong> Moved from any group to Champion. Send VIP perks or an
          exclusive invitation.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Became Needs Attention.</strong> Send a feedback request with the reply-to set to a
          monitored inbox, so you actually hear why they cooled off.
        </ArticleListItem>
        <ArticleListItem>
          <strong>At Risk.</strong> Trigger a win-back flow with a limited-time offer.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Champions.</strong> Route into VIP and early-access flows.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Loyal.</strong> Route into upsell flows built around what they already buy.
        </ArticleListItem>
      </ArticleList>
      <p>
        Klaviyo's Churn Risk property adds a proactive layer here. Brands that trigger win-backs off
        Churn Risk typically recover 12–18% more at-risk customers than time-based win-back triggers
        alone, because they intervene before the customer has fully drifted.
      </p>

      <div id="protect-margins">
        <ArticleH2>Protecting margins: who gets a discount</ArticleH2>
      </div>
      <p>
        The biggest mistake with RFM activation is discounting everyone. Champions and Loyal
        customers often purchase without any incentive. Handing them a coupon simply trains your best
        customers to wait for one — and erodes margin on revenue you would have earned anyway.
      </p>
      <ArticleQuote>
        Reserve or reduce incentives for Champions and Loyal customers. Use coupons to prompt actions
        instead — starting a subscription, referring a friend, or leaving a review — not to buy sales
        you already had.
      </ArticleQuote>
      <p>
        Discounts belong with the groups that need reactivating: Needs Attention, Inactive and At
        Risk. A clean way to apply this is inside a single flow with conditional content. A
        browse-abandonment message, for example, can carry no discount for Champions, Loyal and
        Recent, and an added discount for Needs Attention, Inactive and At Risk — one flow, two
        margin outcomes.
      </p>

      <div id="layering-signals">
        <ArticleH2>Layering predictive signals and deliverability</ArticleH2>
      </div>
      <p>
        RFM gets sharper when combined with predictive properties. Pairing behavioural cohorts with
        intent produces tighter, better-timed audiences — for example,{" "}
        <strong>Placed Order at least twice AND Predicted Next Purchase within 14 days</strong>, which
        catches repeat buyers at the exact point they are likely to reorder.
      </p>
      <p>
        Protect the inbox while you do it. Combine RFM targeting with Smart Sending and
        recent-engagement filters so you avoid over-mailing the same people and keep deliverability
        healthy. A high-precision segment is worthless if your sends land in spam.
      </p>

      <div id="uk-consent">
        <ArticleH2>RFM and UK consent</ArticleH2>
      </div>
      <p>
        For UK brands, every part of this operates within GDPR and UK consent requirements. RFM tells
        you who a customer is and what they need; it does not grant permission to email them. RFM
        targeting should only ever reach subscribers with lawful marketing consent.
      </p>
      <p>
        RFM is not a report you glance at once. It is a live map of how your customers move between
        cohorts — and the brands that win are the ones treating each move as a trigger. Score them,
        group them, and let the group decide the message. That is how a segment becomes revenue.
      </p>
    </ArticleLayout>
  );
}
