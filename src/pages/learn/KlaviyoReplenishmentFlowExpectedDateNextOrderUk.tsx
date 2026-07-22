import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up a Klaviyo Replenishment Flow Using Expected Date of Next Order";
const DESCRIPTION = "Build a predictive Klaviyo replenishment flow using Expected Date of Next Order to boost repeat purchases for UK ecommerce brands.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-replenishment-flow-expected-date-next-order-uk";

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
  { id: "what-it-is", label: "What a replenishment flow does" },
  { id: "edono-explained", label: "How Expected Date of Next Order works" },
  { id: "eligibility", label: "Eligibility: what unlocks predictive analytics" },
  { id: "build-the-flow", label: "Building the EDONO flow step by step" },
  { id: "the-caveat", label: "The caveat: don't run a rigid countdown" },
  { id: "product-cycles", label: "The better pattern for known product cycles" },
  { id: "no-predictive", label: "What to do before you're eligible" },
  { id: "wider-strategy", label: "Using predictive cohorts beyond the flow" },
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

export default function KlaviyoReplenishmentFlowExpectedDateNextOrderUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        If you sell a consumable — skincare, supplements, pet food, coffee, cleaning refills —
        the single biggest lever on repeat revenue is timing. Remind a customer to reorder the
        week before they run out and you win the sale. Remind them two weeks late and a competitor
        already has it. A replenishment flow automates that timing, and Klaviyo lets you power it
        with a predictive signal called Expected Date of Next Order.
      </p>
      <p>
        This guide walks through exactly how to build that flow, when EDONO is the right tool,
        and — just as importantly — when it isn't. There's a real trap here that costs brands
        unsubscribes, and we'll show you the pattern that avoids it.
      </p>

      <TableOfContents />

      <div id="what-it-is">
        <ArticleH2>What a replenishment flow does</ArticleH2>
      </div>
      <p>
        A replenishment flow is an automated email or SMS sequence that reminds a customer to
        repurchase a consumable product before they run out. It's one of the highest-return
        automations you can run, because it targets people who have already bought, already like
        the product, and simply need a nudge at the right moment.
      </p>
      <p>
        The naive version uses a fixed time delay: send a reminder 30 days after purchase and hope
        that matches how fast people use the product. That works when every customer buys on the
        same cycle. It falls apart when buying cycles vary, or when customers buy across categories
        that empty at different rates. That's the problem EDONO is designed to solve.
      </p>

      <div id="edono-explained">
        <ArticleH2>How Expected Date of Next Order works</ArticleH2>
      </div>
      <p>
        Expected Date of Next Order (EDONO) is a predictive profile property Klaviyo calculates for
        each customer. It estimates roughly when that person will place their next order. Alongside
        it, Klaviyo generates Predicted CLV — the two values Klaviyo frames as the core predictive
        signals for lifting repeat purchase rate.
      </p>
      <p>
        Because EDONO is a date field, you can use it directly as a flow trigger and fire messages a
        set number of days before the predicted purchase date. That makes it especially useful when
        products don't follow a consistent buying cycle, or when customers buy across categories with
        different replenishment timelines.
      </p>
      <p>
        Klaviyo retrains its predictive models weekly, so predictions stay current automatically as
        customers order and engage. For one-time purchasers, where individual behaviour data is thin,
        Klaviyo calculates the expected next order date using data pooled across all of your customers.
      </p>

      <div id="eligibility">
        <ArticleH2>Eligibility: what unlocks predictive analytics</ArticleH2>
      </div>
      <p>
        Predictive analytics — and therefore EDONO — only unlock once your account qualifies. This
        trips up a lot of newer UK brands, so check the thresholds before you plan a flow around them.
        All are measured against the Placed Order metric:
      </p>
      <ArticleList>
        <ArticleListItem><strong>500 customers who have placed an order.</strong> This counts actual purchasers, not total profiles in your list.</ArticleListItem>
        <ArticleListItem><strong>At least 180 days of order history.</strong> Klaviyo needs enough runway to model buying patterns.</ArticleListItem>
        <ArticleListItem><strong>At least one order in the last 30 days.</strong> The account has to be actively selling.</ArticleListItem>
        <ArticleListItem><strong>An ecommerce integration or Placed Order events via API.</strong> Shopify, BigCommerce, Magento/Adobe Commerce or WooCommerce all qualify.</ArticleListItem>
      </ArticleList>
      <p>
        Miss any one of these and the property simply won't populate. If that's you, skip to the
        section on approximating timing before you're eligible.
      </p>

      <div id="build-the-flow">
        <ArticleH2>Building the EDONO flow step by step</ArticleH2>
      </div>
      <p>
        Once your account qualifies, the build is straightforward:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Create a new flow</strong> and select a date-triggered trigger rather than a metric trigger.</ArticleListItem>
        <ArticleListItem><strong>Choose "Expected date of next order"</strong> as the date property. It appears in the date-property list for any profile that has the property populated.</ArticleListItem>
        <ArticleListItem><strong>Set the flow to fire relative to that date</strong> — for example a set number of days <em>before</em> the predicted purchase date, so the reminder and the delivery arrive in time.</ArticleListItem>
      </ArticleList>
      <p>
        The default build isn't finished there. Cadence control is what separates a flow that helps
        from one that annoys. Add filters and conditional splits:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Filter on last order placed date</strong> so you don't bombard frequent buyers who order well ahead of the predicted date.</ArticleListItem>
        <ArticleListItem><strong>Exclude customers who recently received a product-specific flow</strong>, so people aren't hit by two reorder prompts in the same window.</ArticleListItem>
      </ArticleList>

      <div id="the-caveat">
        <ArticleH2>The caveat: don't run a rigid countdown</ArticleH2>
      </div>
      <p>
        Here's the mistake to avoid. Do not build a rigid countdown to the expected date for repeat
        customers. If you do, a repeat buyer receives the identical email sequence before every single
        order — the same reminder, over and over — which is a fast route to unsubscribes.
      </p>
      <ArticleQuote>
        EDONO works best as a nurture for customers who have purchased only once — a push toward their
        second purchase, not a countdown replayed before every reorder.
      </ArticleQuote>
      <p>
        That's Klaviyo's own recommendation, and it matters for two reasons. First, one-time buyers are
        exactly the cohort where a well-timed nudge changes the outcome. Second, EDONO does not consider
        which specific product the customer last ordered — so for repeat buyers with predictable habits,
        a product-aware flow will always beat it.
      </p>

      <div id="product-cycles">
        <ArticleH2>The better pattern for known product cycles</ArticleH2>
      </div>
      <p>
        If you already know the replenishment cycle for most of your product categories, don't lean on
        EDONO for repeat customers at all. Use standard time-delay replenishment flows triggered on
        Placed Order instead — because they can be product-aware in a way EDONO cannot.
      </p>
      <p>
        The recommended pattern for brands with distinct cycles is to create multiple Placed
        Order-triggered flows, one per cycle, using trigger filters to restrict each flow to products
        that share that cycle:
      </p>
      <ArticleList>
        <ArticleListItem><strong>One flow for a 45-day cycle</strong> — fast-moving consumables.</ArticleListItem>
        <ArticleListItem><strong>One flow for a 60–90 day cycle</strong> — mid-range products.</ArticleListItem>
        <ArticleListItem><strong>One flow for a 100–120 day cycle</strong> — slower-burning items.</ArticleListItem>
      </ArticleList>
      <ArticleH3>Structuring each flow</ArticleH3>
      <p>
        A reliable structure is an initial reminder timed to the projected usage period, followed by a
        final follow-up after the projected run-out point. For a roughly 30-day product, that means an
        early reminder and then a chaser around day 35 that adds an incentive — a discount or free
        shipping — to convert the hesitant reorderer who has let it slip.
      </p>

      <div id="no-predictive">
        <ArticleH2>What to do before you're eligible</ArticleH2>
      </div>
      <p>
        If your account hasn't yet cleared the 500-purchaser, 180-day thresholds, you can still time a
        replenishment flow sensibly. You just approximate the number rather than predicting it per
        person:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Export an "all active" segment to CSV.</strong></ArticleListItem>
        <ArticleListItem><strong>Pull the "average days between orders" metric</strong> from that data.</ArticleListItem>
        <ArticleListItem><strong>Use that average to set the flow's time delay</strong> on a Placed Order trigger.</ArticleListItem>
      </ArticleList>
      <p>
        It's blunter than EDONO, but it beats guessing — and it gets a working flow live earning revenue
        while your account grows into predictive eligibility.
      </p>

      <div id="wider-strategy">
        <ArticleH2>Using predictive cohorts beyond the flow</ArticleH2>
      </div>
      <p>
        The predictive values Klaviyo generates alongside EDONO earn their keep outside the flow builder
        too. Predicted CLV cohorts feed wider strategy, and predictions are most reliable applied to
        segments rather than individuals — averaging across a cohort smooths out the probability
        estimates for planning.
      </p>
      <ArticleList>
        <ArticleListItem><strong>High-predicted-CLV customers</strong> make strong seed audiences for lookalike advertising.</ArticleListItem>
        <ArticleListItem><strong>At-risk and pre-churn cohorts</strong> suit retargeting campaigns aimed at winning them back.</ArticleListItem>
        <ArticleListItem><strong>An "expected next order within 7 days" cohort</strong> can be excluded from prospecting spend, so you don't pay to acquire someone about to buy organically.</ArticleListItem>
      </ArticleList>
      <p>
        Used well, EDONO is a precise tool for a specific job: converting one-time buyers into repeat
        customers, and sharpening how you spend on acquisition. Used carelessly — as a countdown replayed
        before every order — it churns your best customers. Match the tool to the cycle you actually
        have, and the flow pays for itself.
      </p>
    </ArticleLayout>
  );
}
