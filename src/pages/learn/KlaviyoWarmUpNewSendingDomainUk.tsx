import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Warm Up a New Sending Domain in Klaviyo (UK Guide)";
const DESCRIPTION = "Step-by-step guide to warming a new Klaviyo sending domain: engaged segments, volume ramp, open-rate targets and the flows to switch on last.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-warm-up-new-sending-domain-uk";

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
  { id: "what-warming-is", label: "What warming actually is" },
  { id: "do-you-need-to", label: "Do you even need to warm?" },
  { id: "engaged-segments", label: "Build the engaged-segment ladder" },
  { id: "volume-cadence", label: "Volume, cadence and the first campaign" },
  { id: "open-rate-gates", label: "The open-rate gates that govern every step" },
  { id: "flows", label: "Which flows to switch on, and when" },
  { id: "tools", label: "Tools to keep early sends small and engaged" },
  { id: "after-warming", label: "After warming: don't let it lapse" },
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

export default function KlaviyoWarmUpNewSendingDomainUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Move to a new email service provider or a fresh sending domain, and inbox
        providers like Gmail and Outlook treat you as a stranger. They have no
        reputation on file, so they hold back trust until you earn it. Warming is how
        you earn it: a controlled ramp that proves you send wanted mail to people who
        engage, before you ever touch your full list.
      </p>
      <p>
        Get it wrong and your early campaigns land in spam, dragging your reputation
        down at the exact moment you're trying to build it. This guide walks through
        the whole process the way Klaviyo recommends it — segments, volume, cadence,
        open-rate targets and the flows you switch on last — so a UK ecommerce brand
        can warm a new domain without torching deliverability.
      </p>

      <TableOfContents />

      <div id="what-warming-is">
        <ArticleH2>What warming actually is</ArticleH2>
      </div>
      <p>
        Warming a sending domain is the process of gradually building sender
        reputation so mailbox providers learn to trust you. You start small with your
        most engaged contacts, prove people open and click, and expand from there.
        Klaviyo confirms warming is essential any time you move to a new email service
        provider — the receiving side has no history to judge you on, so you supply
        that history one careful send at a time.
      </p>
      <p>
        Warming applies specifically to new or "cold" infrastructure: a domain
        registered within the last 30 days or never used to send email, or an IP
        address that's been unused for 30 or more days. If that describes your setup,
        you ramp. Reputation isn't instant either — a mailbox provider can take up to
        around 30 days to form a first decision about you, and performance can
        fluctuate for up to 120 days while that reputation validates. Patience is part
        of the method.
      </p>

      <div id="do-you-need-to">
        <ArticleH2>Do you even need to warm?</ArticleH2>
      </div>
      <p>
        Not every migration requires a re-warm, and it's worth checking before you
        slow yourself down unnecessarily. An existing Klaviyo account with at least a
        30-day sending history that moves to a branded sending domain does{" "}
        <strong>not</strong> need to re-warm — provided the root domain has been
        registered for 30 or more days and has already been used to send email. The
        reputation you've built carries over.
      </p>
      <p>
        That said, if you have more than 5,000 profiles, Klaviyo recommends setting up
        a branded sending domain with DMARC regardless, to avoid disruption from
        Gmail and Yahoo's sender requirements. When you publish your DNS records, give
        them time: propagation can take up to 48 hours. Don't send the moment you hit
        save.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Warm if:</strong> your domain is under 30 days old, has never sent
          email, or your IP has been dormant for 30+ days.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Skip re-warming if:</strong> you have 30+ days of Klaviyo sending
          history and are simply switching to a branded domain on an established root
          domain.
        </ArticleListItem>
      </ArticleList>

      <div id="engaged-segments">
        <ArticleH2>Build the engaged-segment ladder</ArticleH2>
      </div>
      <p>
        The core mechanic of warming is the engaged-segment ladder. You create
        segments based on engagement over 30, 60, 90, 120 and 180 days, then send
        progressively — starting with the tightest 30-day segment and widening only as
        performance allows. The tightest segment is your most reliable audience, and
        reliable opens are exactly what you need to signal trust early.
      </p>
      <p>
        A 30-day engaged segment is typically defined as anyone who opened{" "}
        <strong>or</strong> clicked in the last 30 days, plus anyone who subscribed in
        the last 15 days. Sending to inactive subscribers early is the classic
        mistake: mailbox providers read poor engagement as a spam signal and route you
        there.
      </p>
      <ArticleH3>Migrating from another platform</ArticleH3>
      <p>
        If you're coming from another ESP, import your historic open and click data so
        you can build these segments accurately. Where reliable engagement data isn't
        available — Klaviyo calls this the "platform introduction" process — use
        behavioural proxies instead: recent purchasers, high-intent browsers and
        checkout abandoners. These are people demonstrably interested in your brand,
        which is the next best signal to genuine engagement history.
      </p>

      <div id="volume-cadence">
        <ArticleH2>Volume, cadence and the first campaign</ArticleH2>
      </div>
      <p>
        Klaviyo Academy sets clear rules for how fast you can move. Start at roughly
        2,000–5,000 profiles, or about a third of a smaller list. From one send to the
        next, never increase volume by more than 2x. And send 2–4 times per week —
        gaps weaken the reputation you're actively building, so consistency matters as
        much as the numbers.
      </p>
      <p>
        For your very first campaign, stay under 10,000 recipients. That recommended
        cap then grows dynamically as you keep sending, and Klaviyo will actively warn
        you if a campaign audience exceeds the recommended count during warming.
        Treat that warning as a hard stop, not a suggestion.
      </p>
      <ArticleQuote>
        Never more than double your volume between sends, send 2–4 times a week, and
        keep your first campaign under 10,000 recipients. The reputation is built by
        rhythm, not by scale.
      </ArticleQuote>

      <div id="open-rate-gates">
        <ArticleH2>The open-rate gates that govern every step</ArticleH2>
      </div>
      <p>
        Volume increases are earned, not scheduled. Open rate gates every step up, and
        you only widen your segment once the previous send has performed.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>First send:</strong> aim for above 30% open rate — achievable by
          targeting recent clickers and 15-day subscribers.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Weeks 1–2:</strong> focus on the 30-day engaged segment. Hold open
          rates above 20%.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Weeks 3–4:</strong> if you're still above 20%, relax to the 60-day
          segment.
        </ArticleListItem>
        <ArticleListItem>
          <strong>After four weeks of 20%+:</strong> move to 90 days, then continue in
          two-week increments out to 120 and 180 days.
        </ArticleListItem>
      </ArticleList>
      <p>
        Klaviyo Academy applies a slightly stricter benchmark for stepping up: only
        move to the next volume tier once the previous send achieved an open rate
        above 25–30%, a bounce rate below 0.5%, and near-zero spam complaints. It also
        advises not expanding beyond 90-day engaged contacts in the first month unless
        your metrics are consistently strong.
      </p>
      <p>
        If open rates dip below 20%, pause the ramp and return to the previous,
        tighter segment. Don't push through a bad signal. A widely cited community
        benchmark is that warming takes about 30 days of successful sending while
        keeping bounce rate below 1%, unsubscribe rate below 0.3%, and spam complaint
        rate below 0.01%. Hold those thresholds and you're on track.
      </p>

      <div id="flows">
        <ArticleH2>Which flows to switch on, and when</ArticleH2>
      </div>
      <p>
        Flows need the same discipline as campaigns, sequenced by how engaged their
        audience tends to be. High-engagement, action-triggered flows are safe early
        because they respond to a subscriber's own action — someone who just signed up
        wants your welcome email, so it opens well and reinforces reputation.
      </p>
      <p>
        The dangerous ones are winback, re-engagement and sunset flows. Klaviyo
        explicitly flags these as high-risk during warming because they target
        low-engagement contacts by design. Leave them off until ramping and warming
        are fully complete.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Welcome series.</strong> Switch on about 2 weeks after starting
          Klaviyo campaigns — high engagement, triggered by the subscriber's own
          action.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Abandoned cart.</strong> Enable around 30 days in.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Browse abandonment.</strong> Enable around 30–60 days in.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Winback, re-engagement, sunset.</strong> Keep off until warming is
          fully complete.
        </ArticleListItem>
      </ArticleList>

      <div id="tools">
        <ArticleH2>Tools to keep early sends small and engaged</ArticleH2>
      </div>
      <p>
        Klaviyo gives you a few practical levers to keep early sends tight and
        controlled while you ramp.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Smart Send Time.</strong> Spreads a send across 24 hours, which
          softens volume spikes — though it requires a minimum of 12,000 subscribers,
          so it's not available for the very earliest sends.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Batch sending.</strong> Breaks a larger audience into smaller,
          staggered groups so you never hit inboxes with one big burst.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Random sampling.</strong> Lets you send to a slice of a segment. One
          caveat: samples default to lists, so convert them to segments — that way
          unsubscribes route back to your master list rather than going astray.
        </ArticleListItem>
      </ArticleList>

      <div id="after-warming">
        <ArticleH2>After warming: don't let it lapse</ArticleH2>
      </div>
      <p>
        Warming isn't a one-off task you complete and forget. Reputation is
        maintained by consistent sending. If you stop sending campaigns entirely after
        warming, you'll need to re-warm the domain from scratch — the trust you built
        decays when the signal goes quiet.
      </p>
      <p>
        That's why a steady day-to-day cadence matters long after the ramp is
        finished. The thirty days of careful sending, the segment ladder, the
        open-rate gates — all of it exists to earn a reputation you then have to keep
        alive. Warm the domain properly, hold the rhythm, and the inbox stays open to
        you.
      </p>
    </ArticleLayout>
  );
}
