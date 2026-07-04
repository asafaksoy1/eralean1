import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up a Klaviyo Winback Flow: Timing, Discounts and Benchmarks for UK Ecommerce";
const DESCRIPTION = "Learn how to build a data-driven Klaviyo winback flow to re-engage lapsed customers, with timing rules, discount escalation and 2026 benchmarks.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-winback-flow-timing-uk";

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
  { id: "why-winback-matters", label: "Why a winback flow is worth building" },
  { id: "timing-decision", label: "The timing decision that makes or breaks it" },
  { id: "find-your-baseline", label: "Finding your own repurchase baseline" },
  { id: "back-populate", label: "Back-populating existing lapsed customers" },
  { id: "structure", label: "Structuring the sequence and discounts" },
  { id: "benchmarks", label: "Benchmarks: what good actually looks like" },
  { id: "lifecycle", label: "Where winback sits in the lifecycle" },
  { id: "build-order", label: "Build order and testing" },
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

export default function KlaviyoWinbackFlowTimingUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        A winback flow re-engages customers who have lapsed beyond your normal repurchase
        cycle. It is one of the few automations you build once, then leave running for
        years — quietly recovering revenue from people who already trust your brand. Klaviyo
        frames it as an essential part of lifecycle marketing, and the maths behind it is
        blunt: on average it costs five times more to acquire a new customer than to retain
        an existing one and prompt a repeat order.
      </p>
      <p>
        For most D2C brands, 20 to 30 percent of the customer base is dormant at any given
        moment. Reactivating even 10 percent of those people is frequently worth more than
        acquiring the same number of new ones. This guide covers the decisions that actually
        matter — timing above all — and shows you how to build a flow that pays for itself
        on a near-zero running cost.
      </p>

      <TableOfContents />

      <div id="why-winback-matters">
        <ArticleH2>Why a winback flow is worth building</ArticleH2>
      </div>
      <p>
        Be honest about what a winback flow is and isn't. Klaviyo's own 2026 flow data shows
        winback has the lowest yield per recipient in the entire flow stack. That sounds like
        a reason to skip it — but it's the opposite. The value doesn't come from headline
        engagement rates. It comes from applying a near-zero running cost to a very large
        audience, over and over, without any further effort once the flow is live.
      </p>
      <p>
        A brand with 10,000 lapsed customers running a 2 percent conversion at a £75 average
        order value recovers around £15,000 — from a flow built once and left running. The
        customers who convert already trust you, so their order values tend to hold up rather
        than collapse into low-value, first-time discount behaviour.
      </p>
      <ArticleQuote>
        Winback earns its place not through engagement rates but through leverage: a tiny
        conversion percentage applied to a very large dormant audience, at almost no ongoing
        cost.
      </ArticleQuote>

      <div id="timing-decision">
        <ArticleH2>The timing decision that makes or breaks it</ArticleH2>
      </div>
      <p>
        Timing is the single most important decision in the whole flow. Klaviyo recommends
        setting the initial delay slightly longer than your average buying cycle, and only
        targeting people who have not engaged for longer than that cycle. Practitioners refine
        this to roughly 1.5x to 3x the expected repurchase interval, rather than defaulting to
        an arbitrary 90 days.
      </p>
      <p>
        The right window depends entirely on your category. Concrete examples make the point:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Supplements (30-day supply).</strong> A customer who hasn't repurchased
          after 90 days has missed three cycles and is dormant.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Fashion (seasonal buying).</strong> Around 180 days is a sensible threshold,
          reflecting less predictable, season-led purchasing.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Home goods (long replacement cycles).</strong> Roughly 12 months, since
          replacement intervals stretch far longer.
        </ArticleListItem>
      </ArticleList>
      <p>
        A 90-day default dropped onto a home-goods brand will fire at people mid-cycle who were
        always going to come back — annoying them and wasting the discount. Fire too late and
        you've lost them to a competitor. Match the threshold to your data, not to a template.
      </p>

      <div id="find-your-baseline">
        <ArticleH2>Finding your own repurchase baseline</ArticleH2>
      </div>
      <p>
        You don't have to guess. Klaviyo gives you two reliable routes to your true buying
        cycle.
      </p>
      <ArticleH3>The manual export method</ArticleH3>
      <p>
        Create a segment of everyone who has placed at least two orders over all time. Export
        that segment to CSV and average the <em>Average Time Between Orders</em> column. That
        figure is your baseline repurchase interval — multiply it by 1.5x to 3x to set your
        winback threshold.
      </p>
      <ArticleH3>The predictive analytics method</ArticleH3>
      <p>
        If your account qualifies, Klaviyo's predictive analytics offers an{" "}
        <em>Expected Date of Next Order</em> property. This lets you target people who have
        already passed their predicted next order date, which is more precise than a fixed
        window applied across the whole list.
      </p>

      <div id="back-populate">
        <ArticleH2>Back-populating existing lapsed customers</ArticleH2>
      </div>
      <p>
        A common trap catches almost everyone: a live flow only captures new entrants from the
        moment it goes live. All your existing lapsed customers — the entire reason you built
        the flow — sit outside it and never receive a single email.
      </p>
      <p>
        There are two ways to fix this:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Add past profiles.</strong> Use Klaviyo's <em>Add past profiles</em> option
          to back-populate the existing customers who already fall outside your window.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Parallel segment-triggered flow.</strong> Build a segment-triggered flow with
          backdating to catch everyone who's already dormant, running alongside the standard
          metric-triggered version.
        </ArticleListItem>
      </ArticleList>
      <p>
        Skip this step and your winback flow will trickle in a handful of new lapsers a week
        while ignoring the thousands already sitting dormant in your database.
      </p>

      <div id="structure">
        <ArticleH2>Structuring the sequence and discounts</ArticleH2>
      </div>
      <p>
        Klaviyo advises keeping winback to around three emails per recipient — three to five at
        most. Fewer, more targeted emails protect deliverability with an audience that is, by
        definition, already disengaged. A widely-used escalating sequence looks like this:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Email 1 — at the threshold.</strong> A soft, no-discount "we've missed you /
          here's what's new" message that simply reopens the relationship.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 2 — around 7 days later.</strong> A light, personalised offer such as
          10% off, framed as "because you've shopped with us before".
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 3 — around 14 days later.</strong> A stronger incentive such as 20% off
          or a free gift, with a genuine 72-hour urgency deadline.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 4 (optional) — around 21 days later.</strong> A final "stay or leave"
          email offering a lower-commitment option — for example quarterly sends instead of a
          full unsubscribe.
        </ArticleListItem>
      </ArticleList>
      <p>
        Never extend a fake deadline. If your 72-hour countdown quietly resets, customers learn
        the urgency is theatre and your credibility erodes across every future send.
      </p>
      <p>
        On discounts, Klaviyo's guidance is that they aren't necessary for every flow — but if
        a customer hasn't engaged in three to six months, it will likely take a discount to
        bring them back. Personalising with the customer's name and their previously-purchased
        products meaningfully improves relevance, so use both wherever you can.
      </p>
      <ArticleQuote>
        Escalate the incentive, not the frequency. Three well-targeted emails protect
        deliverability far better than five that batter an already disengaged audience.
      </ArticleQuote>

      <div id="benchmarks">
        <ArticleH2>Benchmarks: what good actually looks like</ArticleH2>
      </div>
      <p>
        Judge a winback flow on revenue per recipient and orders recovered — never on open
        rate. Winback open rates run low by design, because you're emailing people who've
        deliberately gone quiet.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Open rate.</strong> One UK agency's client data shows 12–22%; other sources
          cite averages around 29%. Either way it sits below the 30–45% you'd expect from
          engaged subscribers.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Click rate.</strong> Roughly 1.5–3.5%, with some sources around 4%.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Reactivation.</strong> A completed purchase from the full sequence typically
          lands at 5–12% of dormant customers — and even 2–3% is genuinely meaningful.
        </ArticleListItem>
      </ArticleList>
      <p>
        Return to the maths. On 10,000 lapsed customers, a 2 percent conversion at a £75 AOV is
        around £15,000 in recovered revenue. Because returning buyers already trust the brand,
        their order values tend to be solid rather than the low-value behaviour you see from
        first-time, discount-driven acquisition. Low open rates aren't a failure here — they're
        the expected cost of accessing a large, high-trust audience cheaply.
      </p>

      <div id="lifecycle">
        <ArticleH2>Where winback sits in the lifecycle</ArticleH2>
      </div>
      <p>
        A winback flow should never operate in isolation. It works best downstream of a{" "}
        <strong>replenishment flow</strong>, which keeps customers in the regular purchase loop
        before they ever lapse, and upstream of a <strong>sunset flow</strong>, which cleans out
        the truly dead contacts.
      </p>
      <p>
        Subscribers who don't engage with the winback sequence should be suppressed. Continuing
        to email chronically unengaged contacts damages your sender reputation and depresses
        deliverability across your entire list. This matters more than ever: since 2025 Klaviyo
        bills on all active profiles in your database, not just contacts you email. A bloated,
        unengaged list is now a recurring cost with negative return.
      </p>
      <ArticleQuote>
        The same aggressive sunsetting that protects your deliverability also lowers your
        Klaviyo bill. Cleaning your list is no longer just hygiene — it's a line item.
      </ArticleQuote>
      <p>
        To avoid overlap, exclude customers already being handled by cross-sell, replenishment
        or abandoned-cart flows. A customer shouldn't receive a "we've missed you" email while
        another automation is already actively engaging them.
      </p>

      <div id="build-order">
        <ArticleH2>Build order and testing</ArticleH2>
      </div>
      <p>
        Winback is a month-two build. Agencies generally recommend layering winback and sunset
        only after the welcome series and abandoned-checkout flow are live — the latter two can
        alone drive 40–60% of total flow revenue, so they earn priority. Build the compounding,
        high-yield automations first, then add winback to sweep up the dormant tail.
      </p>
      <p>
        Once it's running, test it properly. Use Klaviyo's 50/50 time-delay split to A/B test
        timing, and isolate one variable at a time — change the initial delay or the discount,
        not both at once, or you'll never know which move drove the result.
      </p>
      <p>
        Get the timing right for your category, back-populate the customers already sitting
        dormant, escalate the incentive across three tight emails, and suppress everyone who
        ignores the lot. Do that, and you've built a quiet, self-funding revenue stream out of
        the customers most brands write off entirely.
      </p>
    </ArticleLayout>
  );
}
