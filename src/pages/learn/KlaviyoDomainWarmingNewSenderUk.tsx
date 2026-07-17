import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Warm Your Klaviyo Sending Domain as a New Sender (UK Guide)";
const DESCRIPTION = "A step-by-step UK guide to warming your Klaviyo sending domain, hitting the right engagement segments and protecting your sender reputation.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-domain-warming-new-sender-uk";

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
  { id: "why-warming-matters", label: "Why warming matters for new senders" },
  { id: "warming-vs-ramping", label: "Warming vs ramping: what actually needs it" },
  { id: "infrastructure-first", label: "Set up your infrastructure first" },
  { id: "segment-by-engagement", label: "Segment your list by engagement" },
  { id: "guided-warming", label: "Klaviyo's guided warming explained" },
  { id: "metrics-to-monitor", label: "The metrics that decide your fate" },
  { id: "protecting-flows", label: "Protecting your flows during warming" },
  { id: "repair", label: "If your reputation is already damaged" },
  { id: "the-payoff", label: "The payoff for getting this right" },
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

export default function KlaviyoDomainWarmingNewSenderUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Inbox providers judge new senders harshly before they have a track record. Send too much,
        too fast, from a domain with no history, and Gmail and Yahoo will treat you as a suspect —
        routing your emails to spam, throttling your volume, or blocking sends outright. For a UK
        ecommerce brand moving to Klaviyo, that first fortnight of sending can define your
        deliverability for months.
      </p>
      <p>
        Domain warming is how you avoid that. It is the deliberate process of building an initial
        sender reputation by starting with your most engaged customers and increasing volume
        gradually. This guide walks through the practical steps — infrastructure, segmentation,
        guided warming and the metrics that decide whether your emails land — so your move to
        Klaviyo starts on the right side of the algorithms.
      </p>

      <TableOfContents />

      <div id="why-warming-matters">
        <ArticleH2>Why warming matters for new senders</ArticleH2>
      </div>
      <p>
        Klaviyo defines a "cold" domain as one registered within the last 30 days, or one that has
        never been used to send email. Any brand new domain's initial sends can dramatically
        affect its reputation — good or bad — because inbox providers have nothing else to go on.
        They watch how recipients react: do they open, click, delete unread, or mark as spam?
        Those early signals compound.
      </p>
      <p>
        Warming works by concentrating your first sends on the people most likely to react well.
        High engagement from a small, motivated audience tells Gmail and Yahoo that your mail is
        wanted. Only once that reputation is established do you widen the net. Send to a cold,
        unfiltered list from day one and a single low-performing message can drag your placement
        down before you have any credit in the bank.
      </p>
      <ArticleQuote>
        The only way to earn better inbox placement is low spam rates, low unsubscribe rates, and
        open rates consistently above 33%. Warming is how you engineer those numbers from the
        start.
      </ArticleQuote>

      <div id="warming-vs-ramping">
        <ArticleH2>Warming vs ramping: what actually needs it</ArticleH2>
      </div>
      <p>
        Klaviyo draws a useful distinction between two things that often get conflated:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Warming.</strong> Establishing reputation on new infrastructure — a new domain or
          IP that has no sending history at all.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Ramping.</strong> Starting with smaller volumes and gradually increasing them
          over time, regardless of whether the infrastructure is new.
        </ArticleListItem>
      </ArticleList>
      <p>
        Not every domain needs warming. Marketing branded sending domains — the ones carrying
        high-volume bulk campaigns — do. Transactional or service domains used purely for order
        confirmations and password resets typically do not, because that mail is expected,
        triggered by the recipient, and sent in low steady volumes.
      </p>
      <p>
        There is one important exemption. If you are an existing customer moving to a branded
        sending domain, you do not need to warm again — provided the domain has been registered for
        at least 30 days and has already been used to send email. Warming is for cold
        infrastructure, not for every change you make.
      </p>

      <div id="infrastructure-first">
        <ArticleH2>Set up your infrastructure first</ArticleH2>
      </div>
      <p>
        Warming begins after your infrastructure is in place — not before. Klaviyo advises every
        customer to set up a branded (dedicated) sending domain, and specifically recommends that
        accounts with more than 5,000 profiles configure one with DMARC to avoid disruption from
        Gmail and Yahoo's sender requirements.
      </p>
      <p>
        A branded sending domain enables DKIM and SPF authentication and lets you build reputation
        on your own domain rather than a shared Klaviyo one. Two configuration details matter here:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Align your click-tracking domain.</strong> Point your dedicated click-tracking
          domain at the same root domain as your sending domain. Aligned links make your sends look
          more trustworthy to inbox providers.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Choose the right IP model.</strong> Most small UK businesses will be on shared
          IPs, which is usually sufficient. Dedicated IPs give full control over reputation and
          volume, but they are for higher-volume senders — and they demand consistent volume to
          stay warm.
        </ArticleListItem>
      </ArticleList>
      <p>
        A step Klaviyo's own docs underplay: verify any imported list before it enters your account.
        Running addresses through a verification service catches invalid mailboxes and spam traps
        before they cause bounces — a strong preventative measure that protects the reputation you
        are about to build. New domains registered within the last 30 days should be warmed in the
        first 2 to 4 weeks after the sending domain is applied.
      </p>

      <div id="segment-by-engagement">
        <ArticleH2>Segment your list by engagement</ArticleH2>
      </div>
      <p>
        The mechanics of warming come down to segmentation by engagement recency, then expanding
        outward in stages. Klaviyo recommends building segments based on engagement over 30, 60, 90,
        120 and 180 days, and progressively widening from the most engaged to the least.
      </p>
      <ArticleH3>Your very first send</ArticleH3>
      <p>
        For the first send, aim for an open rate above 30%. In practice that means restricting the
        send to people who clicked in the last 30 days, or subscribed within the last 15 days. This
        is the smallest, most reliable audience you have — the one most likely to produce the strong
        early signals inbox providers reward.
      </p>
      <p>
        If that 30-day engaged segment is very large, use Smart Send Time to divide the send
        automatically across a 24-hour window rather than firing everything at once. Smoothing the
        volume this way looks more natural to receiving servers.
      </p>
      <ArticleH3>Expanding outward</ArticleH3>
      <p>
        From there, widen the window one stage at a time — 60 days, then 90, then 120, then 180 —
        watching your metrics between each step. Sending to highly engaged segments over time
        prevents any single low-performing message from damaging overall deliverability, because
        the bulk of your volume keeps producing the engagement your reputation depends on.
      </p>

      <div id="guided-warming">
        <ArticleH2>Klaviyo's guided warming explained</ArticleH2>
      </div>
      <p>
        Klaviyo offers "guided warming" to accounts that meet the prerequisites, and it optimises
        your audience automatically. You qualify if you are a new customer with engagement data
        (opens, clicks) or a Klaviyo-built integration that syncs open and click events, or if your
        domain was registered within the last 30 days.
      </p>
      <p>
        When guided warming is active, several things happen:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Stage-specific guidance.</strong> A banner appears in the campaign editor with
          best practices tailored to your current warming stage.
        </ArticleListItem>
        <ArticleListItem>
          <strong>A smart audience.</strong> Klaviyo maintains an automatically-updated audience of
          unengaged subscribers and excludes them from your sends if it decides they would harm
          deliverability.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Progress tracking.</strong> Warming progress shows as a percentage based on your
          audience definition and the number of campaigns you have sent to audiences over 1,000
          profiles.
        </ArticleListItem>
      </ArticleList>
      <p>
        One warning that catches brands out: if you qualify for guided warming but do not send an
        email within 45 days, the notifications are dismissed and guided warming cannot be
        re-enabled. If you have decided to move to Klaviyo, commit to sending inside that window —
        you do not get the tool back.
      </p>

      <div id="metrics-to-monitor">
        <ArticleH2>The metrics that decide your fate</ArticleH2>
      </div>
      <p>
        Klaviyo condenses your health into a 0–100 deliverability score, calculated from open rate,
        click rate, bounce rate, unsubscribe rate and spam complaint rate. It updates daily and
        requires at least 1,000 emails sent in the last 30 days to calculate. The tiers are Poor
        (0–49), Fair (50–74), Good (75–89) and Excellent (90–100).
      </p>
      <p>
        Aim to keep these thresholds throughout warming and beyond:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Bounce rate below 1%.</strong> Hard bounces under 0.5%. Klaviyo automatically
          suppresses hard bounces and suppresses profiles after 7 consecutive soft bounces within
          two years.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Unsubscribe rate under 0.3% per campaign.</strong> A spike here is an early
          warning that you have expanded your audience too fast.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Spam complaint rate under 0.1%.</strong> Gmail advises staying under 0.1%, and
          exceeding 0.3% may result in blocked sends.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Unengaged volume under roughly 15% of engaged sends.</strong> Keep the ratio
          weighted heavily towards people who actually open.
        </ArticleListItem>
      </ArticleList>
      <p>
        One blind spot to close: Gmail does not report spam complaints back to email service
        providers. Since a large share of most UK lists sits on Gmail, connect Google Postmaster
        Tools to monitor your Gmail complaint rate directly. Without it, you are flying blind on the
        very metric most likely to get you blocked.
      </p>

      <div id="protecting-flows">
        <ArticleH2>Protecting your flows during warming</ArticleH2>
      </div>
      <p>
        Automated flows can quietly undermine warming because some of them target exactly the wrong
        people. Winback, re-engagement and sunset flows are aimed at subscribers who have gone
        cold — the audience that produces the lowest engagement and the highest complaint risk.
        During warming or repair, set these flows to draft mode.
      </p>
      <p>
        Watch your welcome flow too. If the discount email in your welcome series starts landing in
        spam, pause it until reputation recovers rather than letting it keep training the algorithm
        against you. The principle is simple: while warming, every send should be working to prove
        your mail is wanted, not testing whether cold contacts will bite.
      </p>
      <ArticleQuote>
        A single flow sending to disengaged contacts can undo a fortnight of careful warming. Draft
        the risky ones first, then bring them back once your score is stable.
      </ArticleQuote>

      <div id="repair">
        <ArticleH2>If your reputation is already damaged</ArticleH2>
      </div>
      <p>
        Warming is prevention. If you have already damaged your reputation — perhaps by importing a
        stale list and blasting it — Klaviyo has a reputation repair AI. It is available to accounts
        with a deliverability score below 50, at least 5,000 active profiles, and 100 or more clicks
        or opens in the last 30 days.
      </p>
      <p>
        The repair tool works much like guided warming in reverse. It automatically excludes
        unengaged profiles, then expands sending in phases as your score recovers:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Phase 1.</strong> Sends only to profiles engaged or subscribed in the last 30
          days.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Later phases.</strong> Expands to 60, 90 and 120 days as the deliverability score
          improves.
        </ArticleListItem>
      </ArticleList>
      <p>
        It is the same underlying logic as warming: concentrate on the engaged, prove the mail is
        wanted, then widen. The difference is that repair digs you out of a hole you could have
        avoided by warming properly in the first place.
      </p>

      <div id="the-payoff">
        <ArticleH2>The payoff for getting this right</ArticleH2>
      </div>
      <p>
        Domain warming feels slow when you are eager to launch, but the maths favours patience. A
        reputation built on strong early engagement means your campaigns land in the inbox, your
        flows convert, and the revenue Klaviyo is known for actually materialises. Skip it, and you
        spend months fighting spam folders and repair phases to recover ground you never needed to
        lose.
      </p>
      <p>
        The playbook is fixed: set up a branded sending domain with authentication, verify your
        list, start with the 30-day engaged segment above a 30% open rate, expand outward stage by
        stage, draft your risky flows, and watch your deliverability score and Gmail complaint rate
        daily. Do that, and your first month on Klaviyo builds a reputation that pays you back for
        years — which is the entire point of moving in the first place.
      </p>
    </ArticleLayout>
  );
}
