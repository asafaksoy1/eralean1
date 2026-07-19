import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up a Klaviyo Replenishment Flow With Predictive Timing (UK Guide)";
const DESCRIPTION = "Set up a data-driven Klaviyo replenishment flow using average days between orders and Expected Date of Next Order to win back consumable-product buyers.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-replenishment-flow-predictive-timing-uk";

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
  { id: "what-it-is", label: "What a replenishment flow actually is" },
  { id: "find-your-cycle", label: "Find your repurchase cycle in 30 minutes" },
  { id: "timing-and-discounts", label: "The two levers: timing and discounts" },
  { id: "multiple-flows", label: "Building multiple flows for distinct cycles" },
  { id: "predictive-timing", label: "Predictive timing with Expected Date of Next Order" },
  { id: "edno-requirements", label: "Do you qualify for EDNO?" },
  { id: "build-details", label: "Build details and common mistakes" },
  { id: "extras", label: "SMS, non-discount incentives and personalisation limits" },
  { id: "results", label: "What good looks like" },
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

export default function KlaviyoReplenishmentFlowPredictiveTimingUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        If you sell anything a customer uses up — skincare, supplements, pet food, coffee,
        household essentials — then the moment they run out is the moment you either win a
        repeat order or lose it to a competitor. A replenishment flow is the automation that
        makes sure you win it. Done well, it lifts repeat purchase rates and extends customer
        lifetime value without you touching a thing.
      </p>
      <p>
        The trap most brands fall into is choosing the reminder delay from a feeling. Thirty
        days sounds reasonable, so they pick thirty days. That guess is the single most common
        reason these flows underperform. Your data already knows the right number, and you can
        pull it in under half an hour. This guide shows you how — and where Klaviyo's predictive
        timing genuinely helps versus where it quietly costs you subscribers.
      </p>

      <TableOfContents />

      <div id="what-it-is">
        <ArticleH2>What a replenishment flow actually is</ArticleH2>
      </div>
      <p>
        A Klaviyo replenishment flow is an automated email or SMS sequence that reminds a
        customer to repurchase before they run out. It's triggered by a past purchase and timed
        to land just ahead of the point at which the product would typically be finished. The
        whole job is to catch the customer at the exact moment of intent — when they're thinking
        about reordering but haven't yet.
      </p>
      <p>
        It's essential for consumables and largely pointless for one-off durable goods. If your
        catalogue is built around products people buy again and again, this is one of the highest-
        return flows you can build.
      </p>

      <div id="find-your-cycle">
        <ArticleH2>Find your repurchase cycle in 30 minutes</ArticleH2>
      </div>
      <p>
        Every practitioner agrees on one principle: don't pick a delay from a feeling. Choosing a
        static number off the top of your head means you've already lost, because the right delay
        is brand- and product-specific. The good news is that it's sitting in your Klaviyo and
        Shopify data right now.
      </p>
      <p>
        The simplest metric to find is <strong>average days between orders</strong> for customers
        who've placed two or more purchases. There are three ways to get it:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Klaviyo customer analytics.</strong> Klaviyo surfaces average days between
          orders at account level in its built-in analytics — the fastest starting point.
        </ArticleListItem>
        <ArticleListItem>
          <strong>A 2+ order segment.</strong> Build a segment of profiles with two or more
          orders and examine the "Time Between Orders" property to see the distribution.
        </ArticleListItem>
        <ArticleListItem>
          <strong>A Shopify export.</strong> Export your orders and calculate the average gap
          between order 1 and order 2 for each customer.
        </ArticleListItem>
      </ArticleList>
      <p>
        Whichever method you use, review both the average <em>and</em> the median. A subscription
        programme can pull the median down sharply, so relying on the average alone can mask what
        your typical non-subscriber actually does. The two numbers together tell you where to set
        your delay.
      </p>
      <ArticleQuote>
        Choosing a static number from a feeling means you've already lost. The right delay is
        product-specific and lives in your own data.
      </ArticleQuote>

      <div id="timing-and-discounts">
        <ArticleH2>The two levers: timing and discounts</ArticleH2>
      </div>
      <p>
        Once you know your cycle, two decisions do most of the work: when you fire, and whether
        you discount.
      </p>
      <ArticleH3>Fire before the average, not on it</ArticleH3>
      <p>
        Send the first reminder a few days <strong>before</strong> the average repurchase date.
        You want to arrive while the product is running low, not after it's gone and the customer
        has already bought a replacement elsewhere.
      </p>
      <ArticleH3>Don't pay people who'd have bought anyway</ArticleH3>
      <p>
        Keep the first one or two emails discount-free. Many customers will reorder on the reminder
        alone, and there's no reason to hand them margin you didn't need to spend. Then open an
        offer on email 3 with a clearly defined close on email 4.
      </p>
      <p>
        The closing deadline matters more than the offer itself. Opening a discount with no expiry
        trains your audience to wait for a permanent price cut — you teach them that patience is
        rewarded, which erodes full-price sales over time.
      </p>

      <div id="multiple-flows">
        <ArticleH2>Building multiple flows for distinct cycles</ArticleH2>
      </div>
      <p>
        Real buying cycles vary widely by category. Skincare might repurchase every 45 days while
        protein powder reorders every 30. A single flow with one delay can't serve both without
        arriving too early for one product and too late for another.
      </p>
      <p>
        The fix is to build multiple Placed Order-triggered flows, each with:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>A trigger filter</strong> restricting the flow to products that share the same
          cycle.
        </ArticleListItem>
        <ArticleListItem>
          <strong>A time delay</strong> that reflects that specific cycle — 30 days for the
          protein, 45 for the moisturiser.
        </ArticleListItem>
      </ArticleList>
      <p>
        Group your catalogue into a handful of cycle bands and build a flow per band. It's more
        setup, but it's the difference between a reminder that lands at the right moment and one
        that's ignored.
      </p>

      <div id="predictive-timing">
        <ArticleH2>Predictive timing with Expected Date of Next Order</ArticleH2>
      </div>
      <p>
        Klaviyo's predictive analytics offer a more dynamic alternative to fixed delays: the
        <strong> Expected Date of Next Order</strong> (EDNO) metric. Klaviyo's machine-learning
        models estimate when each customer is likely to buy again, and you can use that date as a
        flow trigger.
      </p>
      <p>
        As confirmed in a March 2026 Klaviyo Community thread, the build is straightforward: create
        a new flow, select a date trigger, and choose the "Expected date of next order" date
        property. You can also combine it with a specific product purchased to keep the messaging
        relevant.
      </p>
      <p>
        There's an important caveat, though. Both Klaviyo and specialist agencies warn against
        "counting down" to EDNO for repeat buyers, because a repeat buyer will receive the same
        sequence before every single order. That repetition drives unsubscribes fast.
      </p>
      <p>
        The recommended split is clear:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Use EDNO for one-time purchasers</strong> to nurture them toward a second order,
          and for products with irregular replenishment cycles where a fixed delay can't apply.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Use standard fixed-delay flows</strong> everywhere the cycle is known and stable.
        </ArticleListItem>
      </ArticleList>
      <p>
        And test your timing rather than assuming it. A 50/50 split at 30 versus 40 days will tell
        you which delay actually converts for your audience.
      </p>

      <div id="edno-requirements">
        <ArticleH2>Do you qualify for EDNO?</ArticleH2>
      </div>
      <p>
        Predictive metrics like EDNO and predicted CLV aren't available to every account. Klaviyo
        needs enough signal to model behaviour. To qualify, your account must meet these baselines:
      </p>
      <ArticleList>
        <ArticleListItem>
          At least 500 customers who've placed a non-cancelled, non-refunded, non-zero-value order.
        </ArticleListItem>
        <ArticleListItem>
          An ecommerce integration (Shopify, BigCommerce, Magento, WooCommerce) or Placed Order
          events sent via API.
        </ArticleListItem>
        <ArticleListItem>
          At least 180 days of order history, with orders in the last 30 days.
        </ArticleListItem>
        <ArticleListItem>
          Some customers with three or more orders.
        </ArticleListItem>
      </ArticleList>
      <p>
        Klaviyo retrains its models at least weekly, so predictions stay current as behaviour
        shifts. For one-time purchasers, EDNO is calculated from data across all your customers
        rather than that individual's history, which makes it less precise for that group — worth
        remembering when you set expectations. The default prediction window is 365 days, but you
        can shorten it for seasonal windows or lengthen it for longer buying cycles.
      </p>

      <div id="build-details">
        <ArticleH2>Build details and common mistakes</ArticleH2>
      </div>
      <p>
        The concept is simple. The execution is where flows quietly fail. Get these details right.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Turn Smart Sending OFF.</strong> With it on, customers who received another email
          recently will silently miss their reminder — and you won't know it happened.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Add an exit filter.</strong> Set a flow filter of "has placed 0 orders since
          starting this flow" so customers exit the moment they reorder. Without it, you keep
          messaging people who've already bought.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Split first-time from repeat buyers.</strong> Use conditional splits so first-time
          buyers get reassurance and education, while repeat buyers get "stock up & save" offers
          that match their intent.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Handle subscriptions deliberately.</strong> For subscription-focused brands, route
          one-time buyers into a first-purchase bounce-back flow and reserve replenishment for 2x+
          buyers. Present subscribe-and-save as a secondary CTA alongside one-time reorder.
        </ArticleListItem>
      </ArticleList>

      <div id="extras">
        <ArticleH2>SMS, non-discount incentives and personalisation limits</ArticleH2>
      </div>
      <p>
        A few additions meaningfully improve results. Adding an SMS follow-up 24–48 hours after an
        unopened reminder email can lift conversions by reaching customers on a channel they check
        more often.
      </p>
      <p>
        You also don't have to lead with money off. Non-discount incentives like free shipping,
        loyalty rewards or early access often perform as well as direct discounts — and protect your
        margin while doing it.
      </p>
      <p>
        One limitation to plan around: Klaviyo's dynamic product feeds surface "related" or "you may
        like" products for cross-sell rather than the exact item previously purchased. That makes an
        EDNO-triggered flow harder to personalise tightly around the specific replenishment product,
        so lean on the trigger's product filter and hard-coded blocks where the precise item matters.
      </p>

      <div id="results">
        <ArticleH2>What good looks like</ArticleH2>
      </div>
      <p>
        Well-executed replenishment flows do three things: they increase repeat purchase rates,
        extend customer lifetime value and boost retention. The numbers back it up — Klaviyo cites
        Garrett Popcorn, whose predicted-next-order-date segment generates four times higher revenue
        per recipient than its campaigns overall.
      </p>
      <p>
        None of that comes from a clever subject line. It comes from timing pulled out of your own
        data, discounts held back until they're needed, and a build that stops messaging people the
        moment they buy. Start with your average and median days between orders, set your delay a few
        days ahead of it, and reserve predictive timing for the one-time buyers and irregular products
        it actually suits. Pick the delay from the data, not from a feeling.
      </p>
    </ArticleLayout>
  );
}
