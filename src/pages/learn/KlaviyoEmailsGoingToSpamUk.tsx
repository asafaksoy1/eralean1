import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "Why Your Klaviyo Emails Go to Spam and How to Fix Deliverability (UK Guide)";
const DESCRIPTION = "A practical UK guide to fixing Klaviyo deliverability: authentication, list hygiene, sunset flows, and the benchmarks that keep emails out of spam.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-emails-going-to-spam-uk";

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
  { id: "invisible-problem", label: "The invisible problem behind poor results" },
  { id: "engagement-inbox", label: "Why engagement is the key to the inbox" },
  { id: "authentication", label: "Authentication is now mandatory" },
  { id: "benchmarks", label: "The UK benchmarks that matter" },
  { id: "list-hygiene", label: "List hygiene: the recurring fix" },
  { id: "sunset-flows", label: "Sunset flows and engagement tiers" },
  { id: "recovery", label: "Repairing a damaged reputation" },
  { id: "warming-cadence", label: "Warming and cadence for new senders" },
  { id: "bottom-line", label: "The bottom line" },
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

export default function KlaviyoEmailsGoingToSpamUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Your Klaviyo dashboard shows a healthy open rate, your creative is sharp, and
        yet sales from email feel soft. The likely culprit is deliverability — the one
        metric that sits underneath every other number and stays invisible until it
        turns catastrophic. If 15% of your emails land in spam or the Promotions tab,
        your real performance is 15% lower than the dashboard suggests. A brand with 85%
        inbox placement and great creative will always lose to one with 98% placement
        and merely decent creative.
      </p>
      <p>
        This guide sets out why Klaviyo emails end up in spam and exactly how UK
        ecommerce brands fix it — from authentication rules that became mandatory in 2024
        and 2025, to list hygiene, sunset flows, and Klaviyo's structured recovery path.
      </p>

      <TableOfContents />

      <div id="invisible-problem">
        <ArticleH2>The invisible problem behind poor results</ArticleH2>
      </div>
      <p>
        Deliverability is the foundation that all other email performance sits on. Open
        rates, click rates and revenue are all downstream of one question: did the email
        actually reach the inbox? Platform dashboards rarely surface this, because they
        report on emails that were <em>accepted</em> by the receiving server — not on
        whether those emails landed in the primary inbox, the Promotions tab, or the spam
        folder.
      </p>
      <p>
        That gap is where brands quietly lose money. The fix is not more clever subject
        lines. It is understanding how inbox providers decide who they trust, and then
        systematically removing the reasons they might not trust you.
      </p>

      <div id="engagement-inbox">
        <ArticleH2>Why engagement is the key to the inbox</ArticleH2>
      </div>
      <p>
        Klaviyo frames sender reputation as trustworthiness that inbox providers assess
        using multiple weighted factors. Of those factors, recipient engagement carries
        the strongest weight. When subscribers open, click and reply, providers read that
        as a signal your mail is wanted. When they ignore or delete it, the signal runs
        the other way.
      </p>
      <ArticleQuote>
        Engagement is the key to the inbox. Providers watch what your recipients do — and
        act on it.
      </ArticleQuote>
      <p>
        This is why the single most important first step for most accounts is suppressing
        profiles that have never engaged. Every send to a dead contact drags your
        engagement signals down and tells providers your list is stale. Klaviyo makes this
        straightforward with a <strong>Never Engaged</strong> segment inside the
        Deliverability Hub. Suppress those profiles and your remaining sends look far more
        wanted — which is exactly what raises placement.
      </p>

      <div id="authentication">
        <ArticleH2>Authentication is now mandatory, not optional</ArticleH2>
      </div>
      <p>
        Authentication used to be a best-practice nicety. It is now a hard requirement.
        Google and Yahoo began enforcing bulk-sender requirements — SPF, DKIM and DMARC —
        in February 2024. Microsoft followed with DMARC enforcement from May 2025. As of
        2026, non-compliant bulk email can be rejected outright rather than merely sent to
        spam.
      </p>
      <p>Klaviyo's core fixes are direct:</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Stop using @gmail.com or @yahoo addresses in your "from" field.</strong>{" "}
          Switch to a domain you own. Free consumer addresses fail modern authentication
          checks and mark you as a bulk sender who does not control their own domain.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Set up a branded (dedicated) sending domain.</strong> This lets you build
          reputation on your own domain rather than shared Klaviyo domains, and it unlocks
          DMARC. It is a requirement for bulk senders emailing Gmail and Yahoo recipients.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Align your click-tracking domain with your sending domain.</strong> Using
          the same root domain across both makes your sends look more trustworthy to inbox
          providers.
        </ArticleListItem>
      </ArticleList>
      <p>
        None of this is cosmetic. Without a branded sending domain and correct
        authentication, you are increasingly likely to have mail bounced at the door — not
        filtered, rejected.
      </p>

      <div id="benchmarks">
        <ArticleH2>The UK benchmarks that matter</ArticleH2>
      </div>
      <p>
        You cannot fix what you do not measure against. Klaviyo's UK 2026 benchmarks, drawn
        from over 183,000 brands, put the average email campaign open rate across all
        industries at 31%, with the top 10% hitting 45.1%. Average automated flow click rate
        is 5.58%, with the top 10% at 10.48%.
      </p>
      <p>
        Flows consistently outperform campaigns because they trigger at the right moment with
        relevant content. Independent analyses of Klaviyo data report flows averaging roughly
        42%+ open rates versus 31% for campaigns, 5.58% click versus 1.69%, and a 2.11%
        placed-order rate versus 0.16%.
      </p>
      <ArticleH3>Deliverability health targets</ArticleH3>
      <p>These are the numbers to hold your account to:</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Delivered rate 98%+</strong> and inbox placement of 95%+.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Bounce rate below 2%</strong> — best-in-class flows sit under 0.35%. Above
          5% is a red flag to ISPs; above 10% and they start blocking you.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Spam complaint rate below 0.1%.</strong> Google's damage threshold is often
          cited around 0.08%, so keep well clear.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Unsubscribe rate below roughly 0.3% per send.</strong>
        </ArticleListItem>
      </ArticleList>
      <ArticleQuote>
        An unsubscribe is infinitely better than a spam complaint. One quietly trims your
        list; the other poisons your reputation.
      </ArticleQuote>

      <div id="list-hygiene">
        <ArticleH2>List hygiene: the recurring fix</ArticleH2>
      </div>
      <p>
        At least 25% of an email database decays every year — people change jobs, abandon
        addresses, and lose interest. Ongoing cleaning is therefore not a one-off project but
        a routine. A smaller, healthier list will outperform a bloated one every time.
      </p>
      <p>Practical steps:</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Enable automatic hard-bounce suppression.</strong> Klaviyo also
          auto-suppresses profiles after 7 consecutive soft bounces.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Segment by engagement tiers.</strong> Send to 30/60/90/120-day engagement
          windows rather than blasting the full list on every campaign.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Give new subscribers a grace period.</strong> Around six months before you
          judge them on engagement, so you do not suppress genuine prospects too early.
        </ArticleListItem>
      </ArticleList>
      <p>
        How often you clean depends on volume. High-volume senders pushing 100,000+ emails a
        month should clean monthly. Smaller senders can clean quarterly and stay healthy.
      </p>

      <div id="sunset-flows">
        <ArticleH2>Sunset flows and engagement tiers</ArticleH2>
      </div>
      <p>
        A sunset flow is your automated exit ramp for subscribers who have gone quiet. Target
        people who have not engaged in 90–120 days with a short re-engagement sequence. Those
        who click or open are folded back into your active segments; those who do not are
        suppressed cleanly, before they become the dead weight that drags placement down.
      </p>
      <p>
        Pair this with engagement-tier sending as your default operating model. Instead of
        emailing everyone with everything, you send more to your most engaged tiers and less —
        or nothing — to those drifting towards inactivity. This keeps your aggregate
        engagement signals strong, which is precisely what providers reward with inbox
        placement.
      </p>

      <div id="recovery">
        <ArticleH2>Repairing a damaged reputation</ArticleH2>
      </div>
      <p>
        If placement has already collapsed, Klaviyo provides a structured recovery path. To
        strengthen your standing with a specific inbox provider, remove low-performing domains
        from your regular sends for the next 3–5 campaigns and send separately only to
        recently engaged profiles on that domain.
      </p>
      <p>During repair, tighten everything:</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Set winback, re-engagement and sunset flows to draft.</strong> These
          typically see lower engagement, which works against you mid-repair.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Pause any third-party marketing.</strong> Keep your sends to owned, engaged
          audiences only.
        </ArticleListItem>
      </ArticleList>
      <p>
        For qualifying accounts, Klaviyo's <strong>Reputation Repair AI</strong> can
        automatically exclude unengaged profiles. Prerequisites include a deliverability score
        below 50, at least 5,000 active profiles, at least 100 clicks or opens in the last 30
        days, and a campaign of 1,000+ recipients in the last 30 days. The process sends in
        phases — 30, 60, 90 and 120-day engaged windows — expanding as your score improves,
        and aims to finish at a deliverability score of 75 or above.
      </p>

      <div id="warming-cadence">
        <ArticleH2>Warming and cadence for new senders</ArticleH2>
      </div>
      <p>
        New senders and newly registered domains — anything within 30 days — must warm the
        sending infrastructure over the first 2–4 weeks. You start with small volumes to your
        most engaged contacts and scale up gradually, so providers see a consistent, wanted
        pattern rather than a sudden blast from an unknown domain. Klaviyo offers guided
        warming for eligible accounts.
      </p>
      <p>Once established, let engagement dictate cadence rather than a fixed schedule:</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Daily</strong> can suit your highly engaged customers.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Roughly 3x a week</strong> for those who have not engaged in 30 days.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Once a week</strong> for those inactive for 90 days.
        </ArticleListItem>
      </ArticleList>
      <p>
        Matching frequency to interest keeps your best relationships warm without burning out
        the contacts on the edge of unsubscribing.
      </p>

      <div id="bottom-line">
        <ArticleH2>The bottom line</ArticleH2>
      </div>
      <p>
        Deliverability is not a technical afterthought — it is the ceiling on everything else
        your email programme can achieve. Authenticate properly, because the rules are now
        enforced and non-compliant mail gets rejected. Suppress the profiles that never
        engage, clean your list on a schedule, and run sunset flows so decay never
        accumulates. Measure against real targets: 98%+ delivered, under 0.1% complaints,
        95%+ placement.
      </p>
      <p>
        Do that consistently and you stop guessing why sales are soft. A smaller, engaged,
        well-authenticated list will out-earn a bloated one every single send — and the brand
        that reaches the inbox is the brand that gets paid.
      </p>
    </ArticleLayout>
  );
}
