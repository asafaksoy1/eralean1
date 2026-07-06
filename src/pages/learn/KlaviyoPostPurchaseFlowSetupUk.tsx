import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up a Klaviyo Post-Purchase Flow That Drives Repeat Sales (UK Guide)";
const DESCRIPTION = "A step-by-step UK guide to building a Klaviyo post-purchase flow: trigger choice, timing, first-time vs repeat splits, and cross-sell tactics that boost retention.";
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
  { id: "why-it-matters", label: "Why the post-purchase window is your best opportunity" },
  { id: "choosing-trigger", label: "Choosing the right trigger" },
  { id: "timing", label: "Getting the timing right" },
  { id: "transactional-split", label: "Keep transactional and marketing emails separate" },
  { id: "sequence", label: "The core sequence structure" },
  { id: "first-vs-repeat", label: "Split first-time and repeat buyers" },
  { id: "safeguards", label: "Implementation safeguards" },
  { id: "dynamic-sms", label: "Dynamic content, discounts and SMS" },
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
        Most UK ecommerce brands treat the moment after checkout as an ending. The
        Shopify order confirmation fires, and then nothing happens until the next
        sales campaign lands weeks later — by which point the customer has forgotten
        why they bought in the first place. That silence is expensive. The window
        between "order placed" and "order delivered" is the single highest-engagement
        period in the entire customer lifecycle, and it is sitting unused.
      </p>
      <p>
        This guide walks through building a Klaviyo post-purchase flow that does the
        real work: reinforcing the buying decision, getting the product used, earning
        reviews, and turning a one-time buyer into a repeat customer. The numbers make
        the case on their own.
      </p>

      <TableOfContents />

      <div id="why-it-matters">
        <ArticleH2>Why the post-purchase window is your best opportunity</ArticleH2>
      </div>
      <p>
        A customer who has just paid you is paying attention like at no other point in
        their journey. Klaviyo's own research shows post-purchase messaging delivers a
        217% higher open rate, over 500% higher click rate, and 90% higher revenue per
        recipient than the average email campaign. Agency benchmarks back this up:
        open rates on post-purchase emails routinely land between 60% and 70% — roughly
        double what a standard campaign achieves.
      </p>
      <ArticleQuote>
        The gap between "order placed" and "order delivered" is the highest-engagement
        period in the customer lifecycle, and most brands waste it on transactional
        noise.
      </ArticleQuote>
      <p>
        The strategic point is not "send more emails." It is that this attention is
        already yours — you just have to use it for relationship building instead of
        letting it evaporate into a single default confirmation.
      </p>

      <div id="choosing-trigger">
        <ArticleH2>Choosing the right trigger</ArticleH2>
      </div>
      <p>
        Every Klaviyo flow begins with a trigger. For post-purchase, you have three
        main options, each firing at a different moment in the order lifecycle:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Placed Order.</strong> Fires the instant checkout completes. Good for
          an immediate thank-you.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Fulfilled Order.</strong> Fires when the order is packed and
          dispatched. The best trigger for anything tied to the product arriving.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Delivered Order.</strong> Fires when delivery tracking confirms
          receipt — only available if you have delivery tracking integrated.
        </ArticleListItem>
      </ArticleList>
      <p>
        The recurring best-practice recommendation is to trigger review-request and
        "how did we do" style emails off <strong>Fulfilled Order</strong> rather than
        Placed Order. This queues the email to dispatch when the order is actually
        fulfilled, so it never relies on the internal timing of the flow guessing when
        the parcel left the building.
      </p>

      <div id="timing">
        <ArticleH2>Getting the timing right</ArticleH2>
      </div>
      <p>
        The biggest timing mistake in post-purchase is sending a "how's your product?"
        message before the product has arrived. Nothing undermines a sequence faster
        than asking for a review of something still in transit.
      </p>
      <p>
        Integrating Shopify's fulfilment events lets you trigger based on "order
        fulfilled" instead of "order placed", which naturally accounts for shipping
        time. If you don't have fulfilment triggers wired up, the fallback is to add a
        delay covering your average shipping window — practitioners commonly use the
        standard shipping timeframe <strong>plus two days</strong>.
      </p>
      <p>
        This matters more for UK brands than most guides acknowledge. Delivery windows
        vary widely — next-day, 2–3 day, and 3–5 day standard options can all sit
        inside the same store. If you offer next-day dispatch, a two-day delay is
        broadly safe; if your standard service is 3–5 working days, build the delay
        around that so your "enjoying your order?" email lands after the parcel, not
        before it.
      </p>

      <div id="transactional-split">
        <ArticleH2>Keep transactional and marketing emails separate</ArticleH2>
      </div>
      <p>
        Klaviyo is clear on this: purely transactional emails — order confirmation and
        shipping confirmation — must stay in separate flows from your marketing-driven
        post-purchase sequence. Transactional emails cannot contain marketing content
        and must go to every purchaser, whether or not they've consented to marketing.
      </p>
      <p>
        Your post-purchase flow is a <strong>supplement</strong> to Shopify's default
        order, shipping and delivery confirmations — not a replacement. The platform
        emails handle logistics; the flow handles the relationship. Don't try to fold
        tracking numbers and marketing cross-sells into the same message. Let each do
        its job.
      </p>

      <div id="sequence">
        <ArticleH2>The core sequence structure</ArticleH2>
      </div>
      <p>
        Start with three to four emails and build from there. A typical structure that
        works for most UK ecommerce brands:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Email 1 — immediate thank-you.</strong> Sent on Placed Order.
          Acknowledge the purchase, reinforce the decision, set expectations.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 2 — usage on delivery day.</strong> Product how-to or
          get-started content, timed to arrive around delivery so it lands when the
          customer has the product in hand.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 3 — review request at 3–7 days post-delivery.</strong> Ask for
          a review once they've had time to use the product.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 4 — cross-sell or loyalty at 14–30 days.</strong> Suggest a
          complementary product, or point to your loyalty or referral programme.
        </ArticleListItem>
      </ArticleList>
      <p>
        If you can only build three, prioritise shipping/education, the usage email, and
        the review request — these carry the most weight. One point on the review
        email: under UK law you cannot incentivise a customer for a positive review.
        You can and should still request one; you simply can't make the reward
        conditional on the sentiment.
      </p>

      <div id="first-vs-repeat">
        <ArticleH2>Split first-time and repeat buyers</ArticleH2>
      </div>
      <p>
        This is the single most impactful optimisation in the entire flow. A Klaviyo
        audit of nearly 100 B2C brands found the most common fix was that brands were
        sending the same welcome and post-purchase experience to everyone — including
        people who had already bought — which meant they were discounting customers who
        didn't need a discount to buy again.
      </p>
      <ArticleH3>How to split the flow</ArticleH3>
      <p>
        You have two clean ways to separate the paths:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Conditional split.</strong> Add a split based on a previous "Placed
          Order" event inside a single flow.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Two separate flows.</strong> Use a profile filter — "Placed Order
          equals 1 over all time" for new buyers, "greater than 1" for returning
          buyers.
        </ArticleListItem>
      </ArticleList>
      <p>
        Treat the two audiences differently. First-time buyers can be nudged to join
        your email list or loyalty programme and reassured about the brand. The
        returning-customer path should be <strong>shorter and more focused</strong>:
        open with "welcome back" rather than "thank you for your order", and reinforce
        their loyalty points or VIP status instead of re-explaining who you are.
      </p>
      <p>
        You can go further and add a trigger split on order value, giving high-value
        orders a distinct, more considered experience.
      </p>

      <div id="safeguards">
        <ArticleH2>Implementation safeguards</ArticleH2>
      </div>
      <p>
        A post-purchase flow that isn't fenced properly will damage trust. Two
        safeguards are non-negotiable.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Stop repeat cycling.</strong> Set a flow filter such as "Has not been
          in this flow" on the trigger block. Customers run through multiple flows at
          once, and without this a repeat purchaser will receive the same welcome
          emails over and over.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Exit on returns and refunds.</strong> Anyone who initiates a return
          or refund should leave the flow immediately. Nothing erodes trust faster than
          a "we hope you love your purchase!" email landing while someone is boxing up a
          return. If you use tools like Loop or Returnly, sync those events to Klaviyo
          and use them as flow filters.
        </ArticleListItem>
      </ArticleList>
      <ArticleQuote>
        The biggest drop-off in ecommerce is from first to second purchase — often
        because brands push email frequency too hard and cause churn before value is
        conveyed.
      </ArticleQuote>
      <p>
        Keep the focus on optimising the customer experience, not aggressively driving
        the next sale. The second purchase follows a good first experience; it rarely
        follows a bombardment.
      </p>

      <div id="dynamic-sms">
        <ArticleH2>Dynamic content, discounts and SMS</ArticleH2>
      </div>
      <p>
        Different customers buy different products, so your usage and cross-sell emails
        need to adapt. Use dynamic content blocks to show or hide sections based on what
        was purchased — a customer who bought three products sees all three relevant
        sections in one email. You can also branch on "Ordered Product" with trigger
        splits, but dynamic blocks that link out to a landing page keep emails short,
        avoid Gmail clipping, and spare you a messy multi-branch flow.
      </p>
      <ArticleH3>Handle discounts carefully</ArticleH3>
      <p>
        Reserve discounts for the upsell or loyalty email late in the flow rather than
        offering them upfront. Leading with a discount trains customers to expect one
        and erodes margin on people who would have bought again anyway.
      </p>
      <ArticleH3>Layer SMS sparingly</ArticleH3>
      <p>
        SMS can be added via a conditional split for consented subscribers. Best
        practice is to use <strong>one SMS only</strong> in the flow, deployed
        strategically — to thank the customer, or to point them to a review or loyalty
        programme. More than that and you're back to frequency-driven churn.
      </p>

      <div id="conclusion">
        <ArticleH2>Where to start</ArticleH2>
      </div>
      <p>
        Don't try to build the perfect ten-email flow on day one. Start with three
        emails triggered off Fulfilled Order — an immediate thank-you, a usage email
        timed to delivery, and a review request a few days after. Fence it with the
        "has not been in this flow" filter and a return-based exit. Then, once it's
        live, add the split between first-time and repeat buyers, because that one
        change protects your margin and respects your best customers more than any
        clever copy ever will.
      </p>
      <p>
        The customers are already paying attention. The only question is whether you
        show up while they are — or wait until they've forgotten you.
      </p>
    </ArticleLayout>
  );
}
