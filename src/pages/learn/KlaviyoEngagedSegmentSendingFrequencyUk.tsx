import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Segment Klaviyo by Engagement and Set Sending Frequency Tiers (UK Guide)";
const DESCRIPTION = "Learn how to build Klaviyo engagement segments and match sending frequency to subscriber activity to protect UK deliverability and revenue.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-engaged-segment-sending-frequency-uk";

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
  { id: "why-engagement-matters", label: "Why engagement segmentation matters" },
  { id: "building-the-segment", label: "Building your engaged segment" },
  { id: "engagement-tracks", label: "Engagement tracks: matching cadence to recency" },
  { id: "the-payoff", label: "The revenue payoff" },
  { id: "sunset-flow", label: "The sunset flow" },
  { id: "true-unengagement", label: "Defining true unengagement" },
  { id: "suppression", label: "Suppression and automation details" },
  { id: "measuring", label: "Measuring results in a post-MPP world" },
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

export default function KlaviyoEngagedSegmentSendingFrequencyUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Sending to unengaged subscribers is one of the fastest ways UK ecommerce brands damage
        deliverability. Klaviyo's own guidance is blunt: emailing people who never open puts your
        sender reputation at risk, and building an engaged segment is the foundation of a healthy
        email programme. Every open and click is a positive signal to inbox providers; every
        ignored send counts against you until, eventually, every provider stops letting your emails
        into the primary inbox.
      </p>
      <p>
        This guide walks through how to build engagement segments in Klaviyo, how to match sending
        frequency to how recently someone engaged, and how to phase out the people who've genuinely
        gone quiet — all without accidentally suppressing loyal buyers. Get this right and it's
        usually the single biggest lever on an underperforming account.
      </p>

      <TableOfContents />

      <div id="why-engagement-matters">
        <ArticleH2>Why engagement segmentation matters</ArticleH2>
      </div>
      <p>
        Inbox providers watch how recipients treat your mail. When subscribers open and click, that
        tells Gmail, Outlook and Apple Mail your messages are wanted, and they stay in the primary
        inbox. When large numbers of people ignore you, the opposite happens — and it happens
        quietly. Your reputation degrades before your reports flag anything obvious, and by the time
        you notice, you're already fighting to get back into the inbox.
      </p>
      <p>
        The fix is straightforward in principle: stop sending everything to everyone, and start
        sending based on how recently each person actually engaged. That's engagement segmentation.
      </p>

      <div id="building-the-segment">
        <ArticleH2>Building your engaged segment</ArticleH2>
      </div>
      <p>
        New Klaviyo accounts automatically ship with 30-, 60- and 90-day engaged segments. These
        stay empty until your first send, so don't panic when they look bare on day one. The window
        you lean on depends on how often you send.
      </p>
      <p>
        For infrequent senders, Klaviyo recommends a longer time window — 60 days rather than 30 —
        because a shorter window unfairly excludes people who simply haven't had a chance to hear
        from you yet. You can also add an optional <strong>recently subscribed</strong> OR condition
        so brand-new signups aren't wrongly filtered out before they've received their first
        campaign.
      </p>

      <ArticleQuote>
        Only add the 'recently subscribed' condition once you've been collecting subscribers in
        Klaviyo for 15+ days — otherwise migrated contacts from platforms like Mailchimp get swept
        in regardless of their real age.
      </ArticleQuote>

      <p>
        This nuance trips up brands mid-migration. If you've just moved from another platform, wait
        out that 15-day window before relying on 'recently subscribed', or you'll reintroduce the
        very stale contacts you're trying to filter.
      </p>

      <div id="engagement-tracks">
        <ArticleH2>Engagement tracks: matching cadence to recency</ArticleH2>
      </div>
      <p>
        The practical framework is what Klaviyo's documentation calls engagement tracks — a tiered
        model where sending frequency drops as engagement recency drops. The idea is simple: the
        more recently someone engaged, the more often you can safely email them.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Engaged within ~90 days.</strong> Around two campaigns per week is safe, with
          slightly more content packed into each email as cadence eases off.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Engaged within ~180 days.</strong> Less frequent, more information-dense sends —
          a longer monthly digest of new products, deals and promotions rather than frequent
          standalone campaigns.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Most engaged buyers.</strong> Some agencies push 3–5 emails per week to recent
          purchasers with product recommendations, and it works — provided those people are
          genuinely opening and buying.
        </ArticleListItem>
      </ArticleList>
      <p>
        Crucially, the system is dynamic. If a profile re-engages at any point, they jump back into
        the more-engaged segment and the frequency stages start over. Nobody is trapped in a low
        tier permanently — engagement earns cadence back automatically.
      </p>
      <p>
        The guiding principle underneath all of this: oversending to people who aren't opening does
        more harm than good, and it degrades your sender reputation before you even notice.
      </p>

      <div id="the-payoff">
        <ArticleH2>The revenue payoff</ArticleH2>
      </div>
      <p>
        This isn't hygiene for its own sake — the commercial case is strong. Per Klaviyo's 2025
        benchmark data, automated flows (which are inherently behaviour-segmented) generate around
        41% of total email revenue from just 5.3% of sends, with revenue per recipient nearly 18x
        higher than campaigns.
      </p>
      <p>
        Agency analysis points the same way: moving from batch-and-blast to behaviour-based
        segments typically lifts email revenue 40–80% without growing the list at all. A healthy
        Klaviyo account should be driving at least 30% of total revenue from email.
      </p>

      <ArticleQuote>
        For underperforming accounts, segmentation — not copy or design — is often the biggest lever
        available.
      </ArticleQuote>

      <div id="sunset-flow">
        <ArticleH2>The sunset flow</ArticleH2>
      </div>
      <p>
        The natural companion to engagement segmentation is the sunset flow: a final win-back
        attempt for subscribers who've stopped engaging, before you suppress them. Klaviyo strongly
        recommends limiting a sunset flow to no more than three emails, because repeatedly
        contacting unengaged people is exactly what damages deliverability. The flow ties into
        Klaviyo's prebuilt Sunset (Email) segment in the Segment Library.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Offer a genuine incentive.</strong> A 20–30% discount is far more enticing than a
          token 10% — you're asking a fading subscriber to change their behaviour, so make it worth
          it.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Use honest subject lines.</strong> 'Goodbye' style subject lines that acknowledge
          the situation tend to outperform another generic promo header.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Keep it to three emails.</strong> If they haven't come back after three genuine
          attempts, more sends only cost you reputation.
        </ArticleListItem>
      </ArticleList>

      <div id="true-unengagement">
        <ArticleH2>Defining true unengagement</ArticleH2>
      </div>
      <p>
        Here's where many brands go wrong. Defining 'unengaged' purely as 'hasn't opened in 60 days'
        is dangerous, because a customer might ignore your marketing emails and still be a loyal
        buyer. They may have purchased last month or browsed your site yesterday.
      </p>
      <p>
        True unengagement should look across channels — factoring in purchases and site activity,
        not just email opens. Before someone enters a sunset track, check they haven't:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Purchased recently.</strong> A buyer who never opens marketing is still a customer.</ArticleListItem>
        <ArticleListItem><strong>Browsed your site.</strong> Active site behaviour is a strong signal of intent.</ArticleListItem>
        <ArticleListItem><strong>Clicked, even if opens are unreliable.</strong> Clicks are a far better engagement signal than opens.</ArticleListItem>
      </ArticleList>
      <p>
        Suppress on opens alone and you'll quietly cut off some of your most valuable customers —
        the exact opposite of the goal.
      </p>

      <div id="suppression">
        <ArticleH2>Suppression and automation details</ArticleH2>
      </div>
      <p>
        A detail that catches out plenty of brands: contacts who reach the end of a sunset flow are
        <em> not</em> automatically suppressed unless you configure it. Many accounts still rely on
        manual periodic list cleaning. To automate removal, add a webhook at the end of the flow
        using a private API key with write access to Profiles and Subscriptions.
      </p>
      <p>
        Klaviyo's guidance on timing is clear. Once someone hasn't engaged in 12–18 months they
        should be suppressed — even from big campaigns like Black Friday. You can still occasionally
        reach out to previously-engaged people, roughly every six months, for major promotional
        moments, but permanent inclusion of long-dead contacts is a liability.
      </p>
      <ArticleQuote>
        Suppress rather than delete: it keeps the profile for your records while stopping sends, and
        it reduces your Klaviyo bill because pricing scales with active profile count.
      </ArticleQuote>

      <div id="measuring">
        <ArticleH2>Measuring results in a post-MPP world</ArticleH2>
      </div>
      <p>
        UK brands measuring engagement need to be careful about which metric they trust. Apple's
        Mail Privacy Protection (MPP) has significantly inflated open rates since late 2021 — one
        study of over 80,000 accounts found open rates rose roughly 18 points, to over 40%, six
        months after MPP launched. With Apple Mail accounting for around 46% of email clients, raw
        open rate is now an unreliable engagement signal.
      </p>
      <p>
        That's why marketers increasingly prioritise click-through rate, click-to-open rate and
        conversion over opens. The gap between targeted and broadcast mail is stark: one benchmark
        reports automation and transactional emails averaging around 7.39% CTR versus roughly 2.27%
        for standard marketing sends, with highly segmented, behaviour-triggered emails
        outperforming broadcast campaigns by 2–3x.
      </p>
      <p>
        The practical implication for everything above is direct. Build your engagement segments on
        clicks and multi-channel behaviour rather than MPP-inflated opens, and use CTOR and
        conversion to judge whether your frequency tiers are actually working. When you segment on
        real engagement and match cadence to it, deliverability and revenue move in the same
        direction — and that's the whole point of doing this properly.
      </p>
    </ArticleLayout>
  );
}
