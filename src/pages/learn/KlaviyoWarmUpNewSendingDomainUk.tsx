import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Warm Up a New Klaviyo Sending Domain (UK Guide)";
const DESCRIPTION = "A step-by-step UK guide to warming a new Klaviyo domain safely, hitting Gmail and Yahoo sender rules, and keeping emails out of spam.";
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
  { id: "what-warming-is", label: "What warming actually is (and who needs it)" },
  { id: "compliance-first", label: "The 2024–2026 Gmail and Yahoo rules" },
  { id: "complaint-maths", label: "The spam complaint maths that bites at low volume" },
  { id: "domain-setup", label: "Step 1: Set up a branded domain and authenticate" },
  { id: "starter-segment", label: "Step 2: Build an engaged starter segment" },
  { id: "ramp-schedule", label: "Step 3: Ramp volume the Klaviyo way" },
  { id: "flow-activation", label: "Step 4: Stage your flow activation" },
  { id: "monitor-relax", label: "Step 5: Monitor, then relax engagement windows" },
  { id: "mistakes", label: "The mistakes that torch a new domain" },
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
        Move to a new email service provider or spin up a fresh sending domain and you
        start with zero reputation. Mailbox providers do not know you, and until they do
        they will treat a sudden burst of email with suspicion. Warming is how you
        earn their trust before you scale — and get it wrong and your carefully built
        list ends up in spam, or bounced entirely.
      </p>
      <p>
        This guide walks UK ecommerce brands through warming a new Klaviyo sending domain
        the way Klaviyo recommends, while staying inside the tougher Gmail and Yahoo
        sender rules that are now fully enforced. It is a deliberate, evidence-led
        process. Follow it and your inbox placement holds. Rush it and you pay for months.
      </p>

      <TableOfContents />

      <div id="what-warming-is">
        <ArticleH2>What warming actually is (and who needs it)</ArticleH2>
      </div>
      <p>
        Warming is the process of establishing a positive sender reputation with mailbox
        providers before you scale volume. Klaviyo puts it plainly: warming trains inbox
        providers to view you as a good sender, and it is essential any time you move to a
        new email service provider.
      </p>
      <p>
        Not every account needs to warm. The rule is about how new your infrastructure is:
      </p>
      <ArticleList>
        <ArticleListItem><strong>You must warm</strong> if you are sending from newly registered infrastructure — a new dedicated IP, or a root domain registered within the last 30 days.</ArticleListItem>
        <ArticleListItem><strong>You do not need to re-warm</strong> if you have an existing account with a 30-day send history that already warmed the same domain.</ArticleListItem>
        <ArticleListItem><strong>Warming applies to your marketing domain</strong> — the branded sending domain carrying high-volume bulk campaigns.</ArticleListItem>
      </ArticleList>
      <p>
        Transactional and service domains — order confirmations, password resets — typically
        do not require warming. They send in response to a customer action, at low volume,
        to highly engaged recipients. It is the bulk marketing sends that need the careful
        ramp.
      </p>

      <div id="compliance-first">
        <ArticleH2>The 2024–2026 Gmail and Yahoo rules</ArticleH2>
      </div>
      <p>
        A huge share of any UK ecommerce list is Gmail and Yahoo addresses, so warming now
        sits inside a stricter compliance landscape you cannot ignore. Since 1 February
        2024, Google and Yahoo require any sender dispatching more than 5,000 messages per
        day to personal Gmail or Yahoo inboxes to meet three sets of requirements.
      </p>
      <ArticleList>
        <ArticleListItem><strong>Authentication.</strong> SPF, DKIM and DMARC, with a minimum DMARC policy of p=none.</ArticleListItem>
        <ArticleListItem><strong>One-click unsubscribe.</strong> RFC 8058 support, so recipients can opt out in a single click.</ArticleListItem>
        <ArticleListItem><strong>Complaint ceiling.</strong> Keep spam complaint rates below 0.3%.</ArticleListItem>
      </ArticleList>
      <p>
        As of 2026 enforcement is fully active. Google and Microsoft now issue permanent
        550 rejections for non-compliant bulk mail. One report estimates roughly 30% of
        bulk senders are still non-compliant on at least one requirement — most commonly the
        one-click unsubscribe header. And a key trap: a Gmail bulk-sender classification
        (5,000+ per day) is permanent. It does not expire even if your volume later drops.
      </p>
      <ArticleQuote>
        Authentication is not a warming step you get to later. SPF, DKIM and DMARC must be
        in place before your very first send.
      </ArticleQuote>

      <div id="complaint-maths">
        <ArticleH2>The spam complaint maths that bites at low volume</ArticleH2>
      </div>
      <p>
        During a fragile warming period, complaint rates matter enormously — and the maths
        is unforgiving at low volume. The 0.3% figure is a hard ceiling, the point where
        enforcement begins, not a safe target. Google itself recommends staying under 0.1%
        for reliable inbox placement.
      </p>
      <p>
        The numbers are small enough to sting:
      </p>
      <ArticleList>
        <ArticleListItem>A sender delivering 10,000 emails needs only 30 spam reports to hit 0.3%.</ArticleListItem>
        <ArticleListItem>Just one complaint per 1,000 messages equals 0.1%.</ArticleListItem>
      </ArticleList>
      <p>
        Treat 0.1% as your operational target, not 0.3%. Alongside that, keep your bounce
        rate below 1% and address hard bounces immediately. Google Postmaster Tools and
        Yahoo's Complaint Feedback Loop (which requires DKIM verification) are the tools to
        monitor these rates — set them up before you begin.
      </p>

      <div id="domain-setup">
        <ArticleH2>Step 1: Set up a branded domain and authenticate</ArticleH2>
      </div>
      <p>
        Start with a branded (custom) sending domain rather than relying on Klaviyo's shared
        IPs. A dedicated branded domain gives you a reputation that is yours to build and
        protect, rather than one shared with strangers.
      </p>
      <p>
        Before the first send, configure SPF, DKIM and DMARC. This is not optional — it is
        the entry ticket to Gmail and Yahoo inboxes at scale. For the unsubscribe
        requirement, the good news is that Klaviyo handles the List-Unsubscribe header
        automatically for marketing email, so RFC 8058 one-click unsubscribe is covered as
        long as you are using Klaviyo's standard marketing templates.
      </p>
      <ArticleH3>Your pre-launch checklist</ArticleH3>
      <ArticleList>
        <ArticleListItem><strong>Branded domain.</strong> Configured in Klaviyo, not the shared sending domain.</ArticleListItem>
        <ArticleListItem><strong>SPF, DKIM, DMARC.</strong> All three published in DNS and verified, DMARC at least p=none.</ArticleListItem>
        <ArticleListItem><strong>One-click unsubscribe.</strong> Confirmed via Klaviyo's marketing email setup.</ArticleListItem>
        <ArticleListItem><strong>Monitoring.</strong> Google Postmaster Tools and Yahoo's Feedback Loop connected.</ArticleListItem>
      </ArticleList>

      <div id="starter-segment">
        <ArticleH2>Step 2: Build an engaged starter segment</ArticleH2>
      </div>
      <p>
        The core principle of warming is simple: start with your most engaged subscribers.
        Engaged people open, click and rarely complain — exactly the behaviour that tells
        mailbox providers you are a good sender.
      </p>
      <p>
        Klaviyo's standard process begins with a tight engagement window: subscribers who
        clicked in the last 30 days. If that list is small, start with roughly a third of
        the full list. As a worked example from Klaviyo's community — if you send twice a
        week during week one, cap sends at around 2,000 subscribers who have clicked in the
        last 30 days.
      </p>
      <ArticleH3>No engagement history yet?</ArticleH3>
      <p>
        Pre-launch brands with no historical engagement data use Klaviyo's "platform
        introduction" process instead. This uses segments or random sampling to open up
        volume gradually over roughly 30 days, since there is no click history to segment
        on.
      </p>

      <div id="ramp-schedule">
        <ArticleH2>Step 3: Ramp volume the Klaviyo way</ArticleH2>
      </div>
      <p>
        With your starter segment defined, increase volume gradually. Klaviyo's mechanics
        are specific and worth quoting exactly:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Never more than 2x.</strong> Do not more than double your volume from one send to the next.</ArticleListItem>
        <ArticleListItem><strong>Send 2 to 4 times per week.</strong> Gaps weaken the reputation you are building, so consistency matters.</ArticleListItem>
        <ArticleListItem><strong>Send at consistent times.</strong> ISPs reward predictability.</ArticleListItem>
      </ArticleList>
      <p>
        Third-party deliverability consultants echo the same "slow and steady" principle,
        suggesting daily volume increases of around 10–20% — but only when the previous send
        showed strong engagement and low bounce and complaint rates. That conditional matters:
        never scale off the back of a weak send. If open rates dip or complaints creep up,
        hold volume steady until they recover.
      </p>
      <ArticleQuote>
        Volume growth is earned, not scheduled. Each increase is permission granted by the
        performance of the send before it.
      </ArticleQuote>

      <div id="flow-activation">
        <ArticleH2>Step 4: Stage your flow activation</ArticleH2>
      </div>
      <p>
        Flows should be switched on in stages, not all at once. Turning on your full flow
        library on day one floods a cold domain with automated volume you have no reputation
        to support. Klaviyo's recommended sequence:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Welcome series</strong> — after about 2 weeks of sending campaigns from Klaviyo.</ArticleListItem>
        <ArticleListItem><strong>Abandoned cart</strong> — after 30 days.</ArticleListItem>
        <ArticleListItem><strong>Browse abandonment</strong> — after 30 to 60 days.</ArticleListItem>
      </ArticleList>
      <p>
        Winback, re-engagement and sunset flows are flagged as high-risk because they
        naturally see low engagement — you are by definition contacting people who have gone
        quiet. Do not turn these on until ramping and warming are fully complete. A wave of
        ignored winback emails on a young domain is exactly the signal you are trying to
        avoid sending.
      </p>

      <div id="monitor-relax">
        <ArticleH2>Step 5: Monitor, then relax engagement windows</ArticleH2>
      </div>
      <p>
        Throughout the ramp, watch two dashboards side by side: Klaviyo's trends report and
        Google Postmaster Tools. You are looking for spam-complaint and hard-bounce spikes.
        Keep complaints under 0.1% and bounces under 1%. If either climbs, pause and
        diagnose before you send again.
      </p>
      <p>
        Once you have four weeks of sending with at least 20% open rates, you can begin to
        relax your engagement criteria. Klaviyo's process moves from the 30-day click window
        out to 90 days, then continues relaxing every two weeks after that. This is how you
        widen from your engaged core to the full list without shocking your reputation — one
        controlled step at a time, each backed by the open rates that prove the previous step
        held.
      </p>

      <div id="mistakes">
        <ArticleH2>The mistakes that torch a new domain</ArticleH2>
      </div>
      <p>
        Most warming failures come from impatience, and they follow a familiar pattern. The
        two that do the most damage:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Leaking risk by jumping volume.</strong> Going from 500 to 50,000 sends overnight is the classic error. It violates the 2x rule many times over and reads as spam to any mailbox provider.</ArticleListItem>
        <ArticleListItem><strong>Turning on everything at once.</strong> Activating all flows and blasting a full cold list on day one buries strong engagement signals under a mountain of ignored email.</ArticleListItem>
      </ArticleList>
      <p>
        Warming a new Klaviyo domain is not complicated, but it is unhurried by design.
        Authenticate before you send, start with your most engaged subscribers, double
        volume at most between consistent sends, stage your flows, and watch your complaint
        and bounce rates like a hawk. Do that for four to six weeks and you build a
        reputation that carries your revenue for years. Skip it, and you spend those same
        weeks fighting your way back out of the spam folder.
      </p>
    </ArticleLayout>
  );
}
