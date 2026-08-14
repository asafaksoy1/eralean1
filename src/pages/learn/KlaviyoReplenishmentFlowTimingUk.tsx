import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How To Set Up A Klaviyo Replenishment Flow With The Right Timing (UK Guide)";
const DESCRIPTION = "Learn how UK ecommerce brands can build a Klaviyo replenishment flow, time it to your reorder cycle, and use predictive analytics to drive repeat sales.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-replenishment-flow-timing-uk";

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
  { id: "what-it-is", label: "What a replenishment flow is" },
  { id: "who-should-use-it", label: "Who should (and shouldn't) use one" },
  { id: "setup", label: "Setting it up in Klaviyo" },
  { id: "timing", label: "Getting the timing right" },
  { id: "predictive", label: "Making timing dynamic with predictive analytics" },
  { id: "smart-sending", label: "The Smart Sending pitfall" },
  { id: "subscriptions", label: "Handling subscribers" },
  { id: "creative", label: "Copy, creative and incentives" },
  { id: "conclusion", label: "Where to start" },
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

export default function KlaviyoReplenishmentFlowTimingUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        If you sell something people finish and buy again — supplements, skincare,
        coffee, pet food, cleaning refills — you already have a retention engine
        sitting idle. Most brands rely on the customer remembering to reorder, or
        on catching them in a broadcast campaign. Both leave the door open for a
        competitor or a local shop to win the repeat sale first.
      </p>
      <p>
        A replenishment flow closes that door. It reminds each customer to reorder
        shortly before they run out, at a moment tied to their actual usage cycle.
        Klaviyo names it one of the most underused automations consumable brands
        should adopt — and getting the timing right is what separates a flow that
        prints repeat revenue from one that annoys people who already bought.
      </p>

      <TableOfContents />

      <div id="what-it-is">
        <ArticleH2>What a replenishment flow is</ArticleH2>
      </div>
      <p>
        A replenishment flow (also called a repurchase flow) is an automated email
        sequence that reminds customers to reorder a consumable product before they
        run out. It's built for the razor-blade model: a product bought, used up,
        and needed again on a predictable cycle.
      </p>
      <p>
        The strategic case is pure retention. A small segment of repeat buyers
        typically generates a disproportionate share of ecommerce revenue, so
        protecting that segment matters more than almost any acquisition tactic.
        Replenishment emails keep customers on your product rather than switching to
        a rival or grabbing the nearest alternative off a shelf when they run low.
      </p>
      <ArticleQuote>
        The replenishment flow doesn't try to sell something new. It removes the
        friction from a purchase the customer already intended to make.
      </ArticleQuote>

      <div id="who-should-use-it">
        <ArticleH2>Who should (and shouldn't) use one</ArticleH2>
      </div>
      <p>
        This flow earns its place only for consumable and CPG products with a
        genuine reorder cycle. If your customers buy once, the timing logic has
        nothing to work with.
      </p>
      <ArticleH3>Good fit</ArticleH3>
      <ArticleList>
        <ArticleListItem><strong>Supplements and vitamins.</strong> Fixed daily dose, predictable run-out date.</ArticleListItem>
        <ArticleListItem><strong>Skincare.</strong> Consumed steadily, often on a 30–60 day cycle.</ArticleListItem>
        <ArticleListItem><strong>Food and drink.</strong> Coffee, tea, snacks bought on repeat.</ArticleListItem>
        <ArticleListItem><strong>Cleaning products and refills.</strong> Clear usage rhythm.</ArticleListItem>
        <ArticleListItem><strong>Pet food.</strong> One of the most reliable reorder cycles there is.</ArticleListItem>
      </ArticleList>
      <ArticleH3>Skip it</ArticleH3>
      <ArticleList>
        <ArticleListItem><strong>Fashion.</strong> No fixed consumption rate.</ArticleListItem>
        <ArticleListItem><strong>Durable home goods and electronics.</strong> Bought once, replaced years later.</ArticleListItem>
        <ArticleListItem><strong>Single hero-SKU brands.</strong> If customers buy once and rarely return, there's no cycle to nudge.</ArticleListItem>
      </ArticleList>

      <div id="setup">
        <ArticleH2>Setting it up in Klaviyo</ArticleH2>
      </div>
      <p>
        The build is straightforward, and how you start depends on your platform.
      </p>
      <ArticleH3>Using a pre-built flow</ArticleH3>
      <p>
        If you're on Shopify or BigCommerce with the integration enabled, Klaviyo
        ships a ready-made replenishment flow in the Flows Library. Under{" "}
        <strong>Browse by Goal</strong> select <strong>Encourage Repeat
        Purchases</strong>, or simply search <strong>Replenishment</strong>. This
        gives you a working structure you can then adapt.
      </p>
      <ArticleH3>Building it manually</ArticleH3>
      <p>
        For a manual build, create a metric-triggered flow using the{" "}
        <strong>Placed Order</strong> event. Two configuration steps matter more
        than any others:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Trigger filter.</strong> Limit the flow to your consumable
          products only — for example <em>Item Variant SKU contains [your
          consumable SKUs]</em> or <em>Item Categories contains [your consumable
          category]</em>. Without this, you'll nudge people who bought a one-off
          item.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Flow filter to remove repurchasers.</strong> Add a filter that
          removes anyone who has already bought the product again since entering the
          flow. Otherwise you send a "time to reorder" email to someone who reordered
          yesterday — the fastest way to look like you're not paying attention.
        </ArticleListItem>
      </ArticleList>

      <div id="timing">
        <ArticleH2>Getting the timing right</ArticleH2>
      </div>
      <p>
        Timing is the single most important variable in this flow. Land too early
        and the reminder feels pushy; too late and the customer has already
        rebought — from you or someone else.
      </p>
      <p>
        The standard best-practice example: for a supplement sold as a 30-day
        supply, send the first reminder around <strong>day 25</strong> — shortly
        before they run out. A practical cadence looks like this:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Email one — ~day 25.</strong> The core reminder, just before the product runs out.</ArticleListItem>
        <ArticleListItem><strong>Email two — 3–5 days later.</strong> A gentle follow-up if they haven't purchased.</ArticleListItem>
        <ArticleListItem><strong>Email three — ~day 35.</strong> After the projected usage period, an incentive-led email offering a discount or free shipping.</ArticleListItem>
      </ArticleList>
      <p>
        Treat those numbers as a starting point, not gospel. The correct timing
        lives in your own data. Calculate the average time between orders for your
        top five products and build the delays around those figures. A 30-day rule
        of thumb is useless if your customers actually reorder every 45.
      </p>
      <ArticleQuote>
        Generic best-practice timing gets you a working flow. Your own reorder data
        gets you a profitable one.
      </ArticleQuote>

      <div id="predictive">
        <ArticleH2>Making timing dynamic with predictive analytics</ArticleH2>
      </div>
      <p>
        A static delay treats every customer the same. Some finish a product in
        three weeks, others in six. Once you have enough history, Klaviyo's
        predictive analytics let the flow adapt to each individual's real rhythm.
      </p>
      <p>
        Klaviyo automatically builds a Customer Lifetime Value model from your data
        and retrains it at least weekly. It produces predictions including{" "}
        <strong>Expected Date of Next Order</strong> and <strong>Average Days
        Between Orders</strong>. Trigger or delay your reminder off the expected
        next-order date and the flow lands at the right moment for each customer,
        not an averaged-out compromise.
      </p>
      <ArticleH3>What you need to qualify</ArticleH3>
      <ArticleList>
        <ArticleListItem><strong>At least 500 customers</strong> who have placed an order.</ArticleListItem>
        <ArticleListItem><strong>Roughly 180 days</strong> of order history.</ArticleListItem>
        <ArticleListItem><strong>Qualifying customers with at least three purchases.</strong></ArticleListItem>
        <ArticleListItem><strong>An ecommerce integration</strong> (Shopify, BigCommerce, Magento, etc.) or Placed Order events sent via the API.</ArticleListItem>
      </ArticleList>
      <p>
        If you're pushing orders through the custom API rather than a native
        integration, the order value must pass through the <strong>$value</strong>{" "}
        field for CLV to calculate correctly. Miss that and the model has nothing to
        work with.
      </p>

      <div id="smart-sending">
        <ArticleH2>The Smart Sending pitfall</ArticleH2>
      </div>
      <p>
        This is the mistake that quietly guts replenishment flows: leaving Smart
        Sending switched on.
      </p>
      <p>
        Smart Sending suppresses messages to anyone who has received an email within
        a configured window. That's useful for campaigns, where you don't want to
        over-mail. But in a replenishment flow it means a customer who happened to be
        on a recent campaign list can <em>silently miss</em> their reorder reminder —
        the exact moment the whole flow was built to hit.
      </p>
      <p>
        Leave Smart Sending on for campaigns. Turn it off for this flow. The reminder
        needs to land at a precise point in the reorder cycle, and nothing should be
        allowed to suppress it.
      </p>

      <div id="subscriptions">
        <ArticleH2>Handling subscribers</ArticleH2>
      </div>
      <p>
        If you offer a subscription option, you don't want to nag people who are
        already getting automatic reorders. Add an early conditional split:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Active subscriber?</strong> Exit the flow. They're already covered.</ArticleListItem>
        <ArticleListItem><strong>Not a subscriber?</strong> Continue the sequence.</ArticleListItem>
      </ArticleList>
      <p>
        For non-subscribers, use at least one tail email to make the case for
        subscribing. A customer who's reordering manually every month is a
        subscription waiting to happen — and locking that in improves retention far
        beyond a single repurchase.
      </p>

      <div id="creative">
        <ArticleH2>Copy, creative and incentives</ArticleH2>
      </div>
      <p>
        Effective replenishment emails are concise, focused on the specific product,
        and on-brand. This isn't the place for a full catalogue — it's one product,
        one clear reason to act, one obvious button.
      </p>
      <ArticleH3>Subject-line angles that work</ArticleH3>
      <ArticleList>
        <ArticleListItem>"Time to stock up?"</ArticleListItem>
        <ArticleListItem>"Running low on [product name]?"</ArticleListItem>
        <ArticleListItem>"It's time to buy [product name] again"</ArticleListItem>
      </ArticleList>
      <p>
        Klaviyo points to brands like ILIA Beauty, Briogeo and Magic Spoon as
        examples of well-executed replenishment emails — clean design, single
        product focus, unambiguous call to action.
      </p>
      <ArticleH3>Protecting margin</ArticleH3>
      <p>
        Hold any discount until the final email rather than leading with it. If you
        open with money off, you train customers to wait for the discount and give
        away margin on people who would have rebought at full price anyway. The first
        two emails should convert on timing and relevance; the incentive is a
        safety net, not the headline. Then A/B test your send timing and schedules
        against your actual reorder data to keep refining.
      </p>

      <div id="conclusion">
        <ArticleH2>Where to start</ArticleH2>
      </div>
      <p>
        Pull the average time between orders for your top five products this week.
        That single figure tells you more about how to time this flow than any
        benchmark. Build the sequence around it, filter it to your consumables,
        remove anyone who's already rebought, and switch Smart Sending off. Once you
        clear the thresholds for predictive analytics, hand the timing over to
        Klaviyo's expected next-order date and let the flow adapt to each customer's
        real rhythm.
      </p>
      <p>
        The brands that win repeat purchases aren't the ones with the loudest
        campaigns. They're the ones whose reminder arrives the day before the jar
        runs empty.
      </p>
    </ArticleLayout>
  );
}
