import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up a Klaviyo Sunset Flow to Clean Your List and Protect Deliverability";
const DESCRIPTION = "Step-by-step UK guide to building a Klaviyo sunset flow that re-engages inactive subscribers, cuts spam complaints, and lowers your Klaviyo bill.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-sunset-flow-setup-uk";

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
  { id: "what-is-a-sunset-flow", label: "What a sunset flow actually does" },
  { id: "deliverability-stakes", label: "Why the stakes are higher in 2025" },
  { id: "define-the-segment", label: "Step 1: Define your sunset segment" },
  { id: "build-the-flow", label: "Step 2: Build the flow" },
  { id: "content-and-subject-lines", label: "Step 3: Write emails that earn opens" },
  { id: "suppress-the-cold", label: "Step 4: Suppress the truly cold contacts" },
  { id: "push-harder", label: "Optional: SMS, retargeting and CLV scoring" },
  { id: "getting-it-right", label: "Getting it right" },
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

export default function KlaviyoSunsetFlowSetupUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        If your list is full of people who never open, never click, and never buy, you
        are not just wasting money — you are damaging every campaign you send to the
        people who do care. Mailbox providers watch how recipients treat your mail, and
        a list weighed down by dead weight drags your sender reputation towards the junk
        folder. A sunset flow is the tool that fixes this: an automated Klaviyo sequence
        that gives disengaged subscribers one final chance to re-engage before you
        suppress or remove them.
      </p>
      <p>
        This guide walks UK ecommerce brands through building one properly — defining the
        segment, structuring the flow, writing emails that earn opens, and the manual
        suppression step Klaviyo does <em>not</em> do for you. Done right, it improves
        inbox placement, cuts spam complaints, and can lower your Klaviyo bill in the
        same move.
      </p>

      <TableOfContents />

      <div id="what-is-a-sunset-flow">
        <ArticleH2>What a sunset flow actually does</ArticleH2>
      </div>
      <p>
        A sunset flow targets subscribers who have stopped engaging and asks them,
        directly, whether they still want to hear from you. As Klaviyo explains, if you
        keep a list full of people barely opening and clicking, your emails gradually get
        filtered to the junk folder — which means you are paying to send messages
        subscribers never see.
      </p>
      <p>
        The core benefit is list hygiene. Continually emailing unengaged contacts tanks
        your open rates, and open rates are one of the signals mailbox providers use to
        judge sender reputation. Pruning back to only active subscribers improves inbox
        placement and lifts the performance of every future send. There is a direct cost
        angle too: because Klaviyo bills on active profiles, removing tens of thousands
        of inactive emails can meaningfully reduce your monthly bill.
      </p>
      <ArticleQuote>
        A sunset flow is one of the few marketing tools where losing subscribers is the
        point — and where every unsubscribe protects the value of the list you keep.
      </ArticleQuote>

      <div id="deliverability-stakes">
        <ArticleH2>Why the stakes are higher in 2025</ArticleH2>
      </div>
      <p>
        The Gmail and Yahoo bulk sender rules that took effect in February 2024 changed
        the maths. Both providers now require senders of 5,000+ daily emails to
        authenticate with SPF, DKIM and DMARC, to offer one-click unsubscribe, and to
        keep spam complaint rates below 0.3% — roughly three complaints per 1,000
        delivered messages. Google recommends staying below 0.1% and never reaching
        0.3%, because crossing that line makes a domain ineligible for mitigation.
      </p>
      <p>
        Enforcement has only tightened. Google escalated in November 2025 from temporary
        delays to permanent rejections, and Microsoft added similar rules for Outlook
        addresses in May 2025. Klaviyo itself flags anything over 0.01% as a "high"
        complaint rate — ten times stricter than Gmail's recommended maximum.
      </p>
      <p>
        The unengaged, complaint-prone contacts sitting on your list are exactly the
        people most likely to hit "report spam" rather than unsubscribe. Keeping them is
        actively risky, and a sunset flow is one of the most direct tools for staying
        below these thresholds.
      </p>

      <div id="define-the-segment">
        <ArticleH2>Step 1: Define your sunset segment</ArticleH2>
      </div>
      <p>
        This is the critical step, and the one most brands get wrong. Klaviyo's guidance
        and experienced practitioners agree: do not rely on time-based inactivity alone.
      </p>
      <p>
        A common baseline treats contacts who haven't engaged in the past 60 days as
        unengaged, and those inactive for 120 days as highly unengaged. Many agencies use
        windows of 90–120 days with no opens, clicks, or purchases. Avoid overly long
        windows — waiting 365 days before sunsetting can make recipients suspicious,
        because they have genuinely forgotten the brand.
      </p>
      <ArticleH3>Layer in behaviour, not just time</ArticleH3>
      <p>
        Time alone will catch people you want to keep. Layer in behavioural criteria and
        purchase history so you don't mistakenly sunset:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Seasonal buyers.</strong> Someone who purchases every 90 days but rarely opens newsletters is a customer, not dead weight.</ArticleListItem>
        <ArticleListItem><strong>High-value customers.</strong> Profiles worth keeping in re-engagement longer, even if their open behaviour looks thin.</ArticleListItem>
        <ArticleListItem><strong>Recent joiners.</strong> Add a "subscribed X days ago" condition (e.g. 90 days) so new profiles aren't sunset before they've had a chance.</ArticleListItem>
      </ArticleList>
      <p>
        A useful refinement is combining "has received X emails over all time" with
        "subscribed X days ago" — this ensures every profile in your segment has had a
        genuine opportunity to engage before you write them off.
      </p>

      <div id="build-the-flow">
        <ArticleH2>Step 2: Build the flow</ArticleH2>
      </div>
      <p>
        You have two routes. The fastest is Klaviyo's pre-built template: go to Flows,
        click Create Flow, search "sunset", select "Sunset Unengaged Subscribers", set
        the trigger to your sunset segment, and customise the emails to your brand. For
        full control, build from scratch as a segment-triggered flow.
      </p>
      <ArticleH3>Add the filter that protects engaged subscribers</ArticleH3>
      <p>
        Klaviyo strongly advises adding flow filters that exclude anyone who opens or
        clicks any email since starting the flow. This means engaged subscribers
        automatically exit the sequence and are never tagged for suppression — a
        non-negotiable safety net.
      </p>
      <ArticleH3>The recommended structure</ArticleH3>
      <p>Keep it short and purposeful:</p>
      <ArticleList>
        <ArticleListItem><strong>2–3 emails</strong> spaced with delays between them.</ArticleListItem>
        <ArticleListItem><strong>A grace-period delay</strong> after the final email (e.g. 3 days) to catch late engagers.</ArticleListItem>
        <ArticleListItem><strong>An Update Profile Property step</strong> tagging non-responders as <code>Unengaged = True</code>.</ArticleListItem>
      </ArticleList>
      <p>
        For truly cold subscribers — no opens in 30–45 days — Klaviyo notes a single
        re-permission campaign can be enough. A more traditional flow for
        previously-engaged contacts should contain 2–4 emails.
      </p>

      <div id="content-and-subject-lines">
        <ArticleH2>Step 3: Write emails that earn opens</ArticleH2>
      </div>
      <p>
        The primary goal here is opens and clicks, not sales. Your subject lines should
        lean into curiosity and finality rather than products. Klaviyo cites examples
        like "Is it time to say goodbye?" and "We miss you already", and plain-text
        "we're going to remove you" emails can be especially attention-grabbing precisely
        because they don't look like marketing.
      </p>
      <p>Inside the emails, best practice is to:</p>
      <ArticleList>
        <ArticleListItem><strong>Make opting out easy.</strong> Include prominent unsubscribe and manage-preference links.</ArticleListItem>
        <ArticleListItem><strong>Offer a clear way to stay.</strong> A single, obvious "keep me subscribed" action.</ArticleListItem>
        <ArticleListItem><strong>Give them a reason.</strong> Consider a comeback discount or a highlight of new products.</ArticleListItem>
      </ArticleList>
      <ArticleQuote>
        The sunset flow is the one place where an unsubscribe is genuinely positive — a
        robust preference centre and easy opt-out actively protect your sender
        reputation.
      </ArticleQuote>

      <div id="suppress-the-cold">
        <ArticleH2>Step 4: Suppress the truly cold contacts</ArticleH2>
      </div>
      <p>
        Here is the operational caveat that trips up most brands: profiles tagged
        <code> Unengaged = True</code> at the end of the flow are <strong>not</strong>{" "}
        suppressed automatically. The tag does nothing on its own. You have to act on it.
      </p>
      <p>To suppress them:</p>
      <ArticleList>
        <ArticleListItem>Create a segment for "Unengaged is true".</ArticleListItem>
        <ArticleListItem>Go to Lists &amp; Segments, then use Action &gt; Suppress current members.</ArticleListItem>
      </ArticleList>
      <p>
        This action only applies to profiles in the segment at the time of suppression —
        it does not affect anyone who joins the segment later. That means you need to
        repeat it periodically, at least two to three times a year, ideally before major
        sends. Skip this and the whole exercise achieves nothing: you tag contacts as
        dead weight and keep emailing them anyway.
      </p>

      <div id="push-harder">
        <ArticleH2>Optional: SMS, retargeting and CLV scoring</ArticleH2>
      </div>
      <p>
        For an extra push before suppressing, pairing email with SMS can lift results —
        Klaviyo case studies referenced by agencies cite 30–50% higher conversions with
        email plus SMS versus email alone. You can also sync unengaged segments to
        Facebook Custom Audiences or Google Ads for a final retargeting attempt across
        channels the subscriber might actually be paying attention to.
      </p>
      <p>
        Advanced brands can go further and use Klaviyo's Predicted Customer Lifetime
        Value and Churn Risk scores to avoid blanket suppression. Rather than treating
        every unengaged profile the same, keep high-value profiles in re-engagement
        longer while prioritising low-conversion-likelihood contacts for removal. The
        goal is never to shrink the list for its own sake — it is to keep the profiles
        worth paying for and let the rest go.
      </p>

      <div id="getting-it-right">
        <ArticleH2>Getting it right</ArticleH2>
      </div>
      <p>
        A sunset flow is not a one-off task, and it is not a set-and-forget automation.
        The segment definition decides who gets caught, the flow filters protect the
        people you want to keep, the emails earn the last engagement signals, and the
        manual suppression step actually cleans the list. Miss any one of those and you
        either lose customers you should have kept or keep contacts that quietly wreck
        your deliverability.
      </p>
      <p>
        With Google now issuing permanent rejections and Klaviyo flagging complaint rates
        an order of magnitude stricter than Gmail's own limit, the cost of an unclean
        list is no longer theoretical. Build the flow, define the segment with care, and
        run the suppression on a schedule. Your inbox placement, your open rates, and
        your Klaviyo bill will all move in the right direction.
      </p>
    </ArticleLayout>
  );
}
