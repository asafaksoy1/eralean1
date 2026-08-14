import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Build a Klaviyo Engaged Segment and Sending Strategy for UK Ecommerce";
const DESCRIPTION = "Learn how to segment your Klaviyo list by email engagement, set send cadences by tier and protect UK deliverability with a sunset flow.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-engaged-segment-sending-strategy-uk";

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
  { id: "the-costly-mistake", label: "The costly mistake: sending to everyone" },
  { id: "engaged-unengaged-split", label: "Start with an engaged/unengaged split" },
  { id: "cadence-by-tier", label: "Set send cadence by engagement tier" },
  { id: "rfm-segmentation", label: "Add an RFM layer for precision" },
  { id: "uk-thresholds", label: "Setting GBP thresholds for UK brands" },
  { id: "sunset-flow", label: "Build a sunset flow that protects deliverability" },
  { id: "look-beyond-opens", label: "Look beyond email opens" },
  { id: "benchmarks", label: "UK benchmarks and what to measure" },
  { id: "precision-over-volume", label: "Precision over volume" },
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

export default function KlaviyoEngagedSegmentSendingStrategyUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Sending every campaign to your entire Klaviyo list is one of the most common and
        costly mistakes UK ecommerce brands make. It feels productive — more sends, more
        reach, more revenue. In practice it does the opposite: it drags down your sender
        reputation, buries your emails in spam folders and quietly erodes the revenue you
        could be earning from the people who actually want to hear from you.
      </p>
      <p>
        The fix is not complicated, but it does require discipline. You segment subscribers
        by email engagement, send campaigns only to people who are paying attention, and put
        the disengaged through a structured re-engagement or suppression process. This guide
        walks through how to build those segments in Klaviyo, set cadence by tier, layer in
        RFM, and protect your deliverability with a sunset flow — all tuned for UK brands.
      </p>

      <TableOfContents />

      <div id="the-costly-mistake">
        <ArticleH2>The costly mistake: sending to everyone</ArticleH2>
      </div>
      <p>
        When you repeatedly email people who never open, inbox providers notice. If your
        overall open rate consistently dips below 20%, ISPs take note. A spam complaint rate
        above 0.1% is a major red flag. Both signals tell Gmail, Outlook and Apple that your
        mail is unwanted — and once your reputation drops, even your engaged subscribers start
        seeing you land in Promotions or spam.
      </p>
      <p>
        The goal is a happy medium. Sending too often to unengaged profiles hurts your sender
        reputation. Sending too infrequently to engaged customers leaves money on the table.
        You manage that balance through segments and sending schedules — not by blasting the
        whole list and hoping.
      </p>
      <ArticleQuote>
        A smaller, cleaner list typically drives higher revenue per campaign. The counterintuitive
        truth of email marketing is that sending to fewer people makes you more money.
      </ArticleQuote>

      <div id="engaged-unengaged-split">
        <ArticleH2>Start with an engaged/unengaged split</ArticleH2>
      </div>
      <p>
        Klaviyo's own guidance recommends breaking subscribers into 30-, 60- and 90-day
        engagement groups, matched to how often you send. The rule of thumb:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Send daily.</strong> Use a 30-day engaged window — profiles who opened or
          clicked an email in the last 30 days.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Send weekly.</strong> Extend to a 60-day window.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Send weekly or monthly.</strong> Use a 90-day window.
        </ArticleListItem>
      </ArticleList>
      <p>
        A practical starting structure for most brands is a simple engaged/unengaged split:
        one segment for subscribers who have opened or clicked in the last 90 days, and one
        for those who haven't. That single division protects deliverability and gives you a
        high-quality send list where every campaign reaches someone actively engaged.
      </p>
      <p>
        Klaviyo now lets you build these segments dynamically, so membership updates
        automatically based on real-time behaviour. There is no manual refresh — as someone
        opens or clicks, they move into the engaged segment; as they go quiet, they drop out.
      </p>

      <div id="cadence-by-tier">
        <ArticleH2>Set send cadence by engagement tier</ArticleH2>
      </div>
      <p>
        Once you have engagement tiers, match your sending frequency to each one. A workable
        framework looks like this:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Engaged in the last 60 days.</strong> Can receive around three sends per
          week. These are your most attentive people.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Engaged 90–180 days ago but not the last 90.</strong> Drop to roughly one
          send per week to avoid fatiguing a cooling audience.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Added 180+ days ago and never opened or clicked.</strong> Route into a
          sunset flow or re-engagement campaign rather than blasting them with regular
          campaigns.
        </ArticleListItem>
      </ArticleList>
      <p>
        The principle behind the framework is straightforward: reward attention with more
        contact, and back off from people who have stopped responding. Every email you send
        to a silent inbox is a small deposit into a reputation problem you will eventually
        have to pay for.
      </p>

      <div id="rfm-segmentation">
        <ArticleH2>Add an RFM layer for precision</ArticleH2>
      </div>
      <p>
        A more sophisticated layer is RFM — Recency, Frequency, Monetary — segmentation, which
        Klaviyo supports natively. RFM is usually discussed in terms of purchases, but it
        applies equally well to engagement.
      </p>
      <ArticleH3>Engagement RFM tiers</ArticleH3>
      <ArticleList>
        <ArticleListItem>
          <strong>Highly engaged.</strong> Opened 5+ of the last 10 emails. Send more.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Moderately engaged.</strong> Opened 2–4 of the last 10. Standard cadence.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Unengaged.</strong> Opened 0–1 of the last 10. Reduce frequency or move to
          winback.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Never engaged.</strong> On the list but never opened. Sunset candidates.
        </ArticleListItem>
      </ArticleList>
      <p>
        The two dimensions answer different questions. Purchase RFM tells you customer value.
        Engagement RFM tells you when to send. Used together, they let you deliver more contact
        to your best customers without wearing out your quieter ones.
      </p>

      <div id="uk-thresholds">
        <ArticleH2>Setting GBP thresholds for UK brands</ArticleH2>
      </div>
      <p>
        Use GBP thresholds and clear labels, and set them against your own average order value
        (AOV). A generic 'Champions' segment might be defined as 3+ orders, £100+ spend, in the
        last 90 days — but the right numbers depend entirely on your product and price point.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>£50-AOV fashion store.</strong> Set VIPs at 3+ purchases and £200+ lifetime
          spend.
        </ArticleListItem>
        <ArticleListItem>
          <strong>£500-AOV home goods store.</strong> Use 2+ purchases and £1,000+ lifetime
          spend.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Consumables brand with ~six-week replenishment.</strong> Treat dormancy as
          starting at around 90 days rather than 180, because the natural buying rhythm is much
          faster.
        </ArticleListItem>
      </ArticleList>
      <p>
        The mistake is copying someone else's thresholds wholesale. A £30 order is a routine
        top-up for one brand and a hero purchase for another. Calibrate to your own economics.
      </p>

      <div id="sunset-flow">
        <ArticleH2>Build a sunset flow that protects deliverability</ArticleH2>
      </div>
      <p>
        Genuinely unengaged subscribers should be given one final, deliberate chance to engage
        before you suppress them. The recommended workflow is a 2–3 email sunset flow — some
        agencies add one SMS — spaced 3–7 days apart.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Make at least one email plain-text.</strong> A single link and a personal tone
          feels like a message from a person, not a promotion, and lifts response.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Be direct in the subject line.</strong> State the value plainly rather than
          reaching for clickbait. Spam complaints from these edge-case recipients do
          disproportionate damage to your sender reputation.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Let re-engagement exclude people automatically.</strong> Anyone who opens or
          clicks during the sunset flow is removed from suppression, because they have shown
          they are still interested.
        </ArticleListItem>
      </ArticleList>
      <p>
        Klaviyo can auto-generate a 'Never Engaged' segment for you. Go to Analytics &gt;
        Deliverability &gt; Action Center to build it from the Deliverability hub, then feed it
        into your sunset flow. Clean the list every 6–12 months, and always before a major send
        like Black Friday and Cyber Monday.
      </p>

      <div id="look-beyond-opens">
        <ArticleH2>Look beyond email opens</ArticleH2>
      </div>
      <p>
        A common mistake is defining 'unengaged' purely as 'has not opened in X days'. A customer
        might ignore your marketing emails for 90 days yet still be a loyal buyer or a recent
        site browser. Suppress them on the basis of opens alone and you cut off someone who is
        actively spending money with you.
      </p>
      <p>
        Build segments that look across channels. Include site activity, viewed product and
        placed-order events alongside email opens and clicks. Someone who browsed your store last
        week is engaged, even if they never open a newsletter. This is especially important given
        that opens themselves are unreliable — which brings us to benchmarks.
      </p>

      <div id="benchmarks">
        <ArticleH2>UK benchmarks and what to measure</ArticleH2>
      </div>
      <p>
        Benchmarks help you know where you stand, but treat open rates with caution. Apple Mail
        Privacy Protection heavily inflates them by pre-loading images, so a strong open rate no
        longer proves anyone read your email.
      </p>
      <p>
        Klaviyo benchmark data puts the average ecommerce open rate around 37.9% across segments
        in 2025, with 2026 medians cited at roughly 35–42% for flows and 18–25% for campaigns.
        Because opens are unreliable, focus on the metrics that reflect real intent:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Click rate.</strong> Around 2.5–4.5% for campaigns and 5–12% for flows.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Revenue per recipient.</strong> Roughly £0.08–£0.25 depending on segment and
          flow type.
        </ArticleListItem>
      </ArticleList>
      <p>
        The broader data validates the whole strategy. Automated, triggered emails dramatically
        outperform batch campaigns — one benchmark cites 30.6% open and 7.4% CTR for automations
        versus 20.7% and 2.3% for standard campaigns. Top-10% performers roughly double the
        averages, driven overwhelmingly by better segmentation and content relevance.
      </p>
      <p>
        Notably, Europe leads global engagement, partly because GDPR-driven consent practices
        produce higher-quality, more engaged lists. That is a structural advantage for UK brands
        — one worth protecting through consent-first collection and disciplined list hygiene.
      </p>

      <div id="precision-over-volume">
        <ArticleH2>Precision over volume</ArticleH2>
      </div>
      <p>
        The through-line for 2025 and 2026 is simple: precision beats volume. Segment your list
        by engagement, send more to the people who respond and less to the people who don't, and
        put the genuinely dormant through a sunset flow before they drag your reputation down.
        Layer purchase RFM on top so your best customers get more contact, and set your GBP
        thresholds against your own AOV rather than someone else's.
      </p>
      <p>
        None of this requires more effort once the segments are dynamic — it requires the
        discipline to stop sending to everyone. The brands that win the inbox in the next two
        years will be the ones sending fewer, more relevant emails to more tightly defined
        engaged segments.
      </p>
    </ArticleLayout>
  );
}
