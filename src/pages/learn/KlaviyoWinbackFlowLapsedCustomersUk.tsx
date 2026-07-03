import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up a Klaviyo Winback Flow to Re-Engage Lapsed Customers";
const DESCRIPTION = "A practical guide to building a Klaviyo winback flow: timing triggers to your repurchase cycle, structuring emails, benchmarks and when to suppress.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-winback-flow-lapsed-customers-uk";

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
  { id: "what-is-a-winback-flow", label: "What a winback flow actually is" },
  { id: "trigger-timing", label: "Trigger timing: the decision most brands get wrong" },
  { id: "structure", label: "Structuring the sequence" },
  { id: "discounts", label: "Discounts, offers and the margin trap" },
  { id: "segmentation", label: "Segmentation and SMS layering" },
  { id: "benchmarks", label: "Benchmarks and the metrics that matter" },
  { id: "sunset-suppression", label: "Pairing winback with sunset and suppression" },
  { id: "uk-deliverability", label: "UK deliverability foundations" },
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

export default function KlaviyoWinbackFlowLapsedCustomersUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        A winback flow is the automated sequence that reaches out to customers
        who bought from you once, then went quiet. It sits at the retention end
        of the customer lifecycle, and it exists because acquiring a new customer
        costs roughly five times more than retaining one you already have.
        Klaviyo treats it as an essential retention play for a reason: even when a
        lapsed customer doesn&apos;t convert, research it cites shows 45% of
        subscribers who receive a winback email go on to open future emails from
        the brand. The flow re-warms people you&apos;ve already paid to acquire.
      </p>
      <p>
        The problem is that most brands build a winback flow badly — usually by
        accepting Klaviyo&apos;s default settings and leading with a discount.
        This guide walks through the setup decisions that actually move revenue:
        timing the trigger to your real repurchase cycle, structuring the emails,
        setting honest benchmarks, and knowing when to stop emailing and suppress.
      </p>

      <TableOfContents />

      <div id="what-is-a-winback-flow">
        <ArticleH2>What a winback flow actually is</ArticleH2>
      </div>
      <p>
        A winback flow targets customers who have previously purchased but have
        gone dormant — no purchases, no product views, no add-to-carts within a
        defined window. That window is commonly framed as three to six months,
        but the correct threshold is entirely brand-dependent, and treating the
        default figure as gospel is where the trouble starts.
      </p>
      <p>
        It belongs alongside the sunset flow at the far end of the lifecycle.
        Winback tries to save the dormant; sunset cleans out the truly dead. Get
        the pairing right and you recover meaningful revenue from a segment you
        already own while protecting the deliverability of your entire list.
      </p>

      <div id="trigger-timing">
        <ArticleH2>Trigger timing: the decision most brands get wrong</ArticleH2>
      </div>
      <p>
        The single most important setup decision is when the flow fires — and
        this is precisely where brands go wrong. Klaviyo suggests a default of
        180 days. That is a generic guess, not a number derived from your data.
        If your customers naturally repurchase every 30 days, waiting 180 days
        means reaching out roughly six purchase cycles too late. By then those
        customers are effectively gone.
      </p>
      <p>
        The stronger method is to calculate your actual average gap between
        purchases and build the trigger from that.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Export your orders.</strong> Pull orders from Shopify and
          sequence them by customer.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Find the average gap.</strong> Calculate the average number of
          days between a customer&apos;s first and second purchase.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Multiply by 1.5.</strong> Set the winback trigger at roughly
          1.5x that average. This catches people right as they&apos;ve clearly
          lapsed but before they&apos;ve forgotten you.
        </ArticleListItem>
      </ArticleList>
      <p>
        Watch out for medians dragged down by subscription buyers. One audited
        food-subscription brand had a 28-day median but a 53-day average. The
        average better reflected the one-time buyers who actually needed
        winning back — the median was distorted by predictable subscription
        reorders that never lapse in the first place.
      </p>
      <ArticleQuote>
        A 180-day default is a guess. Your repurchase gap multiplied by 1.5 is an
        answer.
      </ArticleQuote>
      <p>
        To test timing empirically rather than argue about it, use Klaviyo&apos;s
        50/50 time-delay split. Send half the branch at one delay and half at
        another, then compare revenue per recipient between branches over a few
        months. Let the data settle the question.
      </p>

      <div id="structure">
        <ArticleH2>Structuring the sequence</ArticleH2>
      </div>
      <p>
        Klaviyo recommends keeping the flow to around three emails per recipient,
        with the first email as a light, short touchpoint. A common effective
        pattern looks like this:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Email 1 — re-establish relevance.</strong> A short, low-pressure
          &quot;we miss you&quot; or &quot;here&apos;s what&apos;s new&quot;
          curiosity opener. No offer. The job is simply to remind people the brand
          exists.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 2 — lead with outcomes and proof.</strong> Sent around
          five days later, this email leads with results and social proof, such
          as recent reviews pulled dynamically from Okendo, Yotpo, Junip or
          Stamped.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 3 — a clear decision point.</strong> A time-sensitive
          offer with genuine urgency, a clear call to action, and an easy opt-out.
        </ArticleListItem>
      </ArticleList>
      <p>
        Some brands extend this to a four- or six-step sequence, which can work
        well for higher-value products with longer consideration cycles. But
        length should earn its place — three well-built emails beat six thin ones.
      </p>

      <div id="discounts">
        <ArticleH2>Discounts, offers and the margin trap</ArticleH2>
      </div>
      <p>
        The most widely-cited winback mistake is leading with a discount in Email
        1 — the classic &quot;We miss you, here&apos;s 20% off&quot;. It feels
        generous. It is actually corrosive. It trains customers to wait for
        discounts, erodes your margin, and does nothing to address why they
        lapsed in the first place.
      </p>
      <p>
        When you do reach for an offer, keep it measured.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>10–15% is usually enough.</strong> It nudges without gutting
          your margin.
        </ArticleListItem>
        <ArticleListItem>
          <strong>20%+ signals a problem.</strong> A large discount tells
          customers your normal price is overvalued.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Non-price incentives re-engage without the clearance feel.</strong>{" "}
          Free shipping or a product add-on often works as well as a percentage
          off, without the discount association.
        </ArticleListItem>
      </ArticleList>

      <div id="segmentation">
        <ArticleH2>Segmentation and SMS layering</ArticleH2>
      </div>
      <p>
        A single generic winback flow leaves money on the table. Segmenting the
        entry — and tailoring the message — meaningfully improves results.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>By lapse reason.</strong> Someone who churned after one bad
          experience needs a different message from someone who simply forgot.
        </ArticleListItem>
        <ArticleListItem>
          <strong>By value and LTV.</strong> High-value customers justify a more
          generous, more personal approach than one-time low spenders.
        </ArticleListItem>
        <ArticleListItem>
          <strong>By loyalty status.</strong> Loyalty members can be re-engaged
          with points balances and status reminders rather than blanket discounts.
        </ArticleListItem>
      </ArticleList>
      <p>
        Layering in SMS alongside email lifts recovery further. A well-timed text
        at the decision point catches people email misses, and it costs little to
        add to a flow you&apos;ve already built.
      </p>

      <div id="benchmarks">
        <ArticleH2>Benchmarks and the metrics that matter</ArticleH2>
      </div>
      <p>
        Set expectations before you launch, because winback intentionally has the
        lowest metrics of any flow. You are emailing people who haven&apos;t
        engaged in months. Judged by open rate, it will always look weak.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Open rates.</strong> Reported agency client data puts winback
          open rates around 12–22%, with entry-email open rates nearer 40% by
          independent measurement.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Click rates.</strong> Around 1.5–3.5%.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Entry conversion.</strong> Independent measurement puts the
          entry-email conversion rate near 0.09% — the lowest of any flow.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Revenue per recipient.</strong> Klaviyo benchmark data cited
          across sources puts winback revenue per recipient at roughly £0.84 for
          brands with a £100–200 AOV. Modest per email, meaningful across a large
          lapsed segment.
        </ArticleListItem>
      </ArticleList>
      <p>
        The metrics that actually matter are revenue per recipient and orders
        recovered — not open rate. Even a 2% conversion on a lapsed base is
        significant. On a brand with 10,000 lapsed customers, 2% is 200 recovered
        orders. At a £75 AOV, that is around £15,000 from a flow you build once.
      </p>
      <ArticleQuote>
        Recovered orders carry solid AOV — these are returning customers who
        already trust you, not first-time discount hunters.
      </ArticleQuote>

      <div id="sunset-suppression">
        <ArticleH2>Pairing winback with sunset and suppression</ArticleH2>
      </div>
      <p>
        Winback should never run alone. It works in tandem with a sunset flow:
        winback tries to save the dormant, sunset cleans out the truly dead.
        Contacts who complete the entire winback sequence with zero opens, clicks
        or purchases should be moved into a sunset flow and then suppressed.
      </p>
      <p>
        This isn&apos;t housekeeping — it&apos;s financially urgent. Continuing to
        email chronically unengaged contacts damages your sender reputation and
        depresses deliverability across your whole list. And since Klaviyo&apos;s
        2025 billing change, you are charged for every active profile in the
        database, not only the contacts you email. A bloated, unengaged list now
        taxes both your deliverability and your invoice.
      </p>
      <p>
        Where you already run earlier-lifecycle flows — replenishment,
        cross-sell, bounce-back — fewer customers ever reach winback at all. In
        those cases, push the winback delay out further to avoid overlap and
        double-messaging.
      </p>

      <div id="uk-deliverability">
        <ArticleH2>UK deliverability foundations</ArticleH2>
      </div>
      <p>
        For UK brands, deliverability foundations are now mandatory, not optional.
        Since 2024–2025, Google, Yahoo and Microsoft require SPF, DKIM and DMARC
        for bulk senders. Non-compliant bulk email can be rejected outright — a
        winback flow that never reaches the inbox recovers nothing. Confirm all
        three are configured before you turn the flow on.
      </p>
      <p>
        Then judge the flow honestly. Apple Mail Privacy Protection inflates open
        rates, and a majority of B2C subscribers use MPP-capable mail, so opens
        are close to meaningless as a signal. Benchmark winback on click rate,
        placed-order rate and revenue per recipient — measured against your own
        store, not against vendor averages.
      </p>
      <p>
        Build the timing from your real repurchase data, resist the reflex to
        discount on the first touch, and suppress the customers who never come
        back. Do those three things and a winback flow stops being a box you
        ticked and starts being one of the highest-return automations you own.
      </p>
    </ArticleLayout>
  );
}
