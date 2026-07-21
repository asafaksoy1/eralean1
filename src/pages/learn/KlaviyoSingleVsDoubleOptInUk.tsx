import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "Klaviyo Single vs Double Opt-In: What UK Ecommerce Brands Should Choose";
const DESCRIPTION = "How UK ecommerce brands should choose between Klaviyo single and double opt-in for PECR/GDPR compliance, list quality and deliverability.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-single-vs-double-opt-in-uk";

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
  { id: "what-they-mean", label: "What single and double opt-in mean in Klaviyo" },
  { id: "trade-offs", label: "The core trade-offs" },
  { id: "compliance", label: "The UK compliance context" },
  { id: "hellofresh", label: "What the HelloFresh fine actually tells you" },
  { id: "deliverability", label: "Why deliverability points the same way" },
  { id: "sms", label: "SMS is a different rule" },
  { id: "decision", label: "How to decide for your brand" },
  { id: "how-to-change", label: "How to change the setting in Klaviyo" },
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

export default function KlaviyoSingleVsDoubleOptInUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Single or double opt-in is one of the first real decisions you make when
        setting up Klaviyo, and it quietly shapes three things at once: how fast
        your list grows, how deliverable your emails stay, and how defensible your
        consent is under UK law. Klaviyo supports both at the list level, so the
        choice is yours to make — and to get wrong.
      </p>
      <p>
        This guide walks through what each setting actually does inside Klaviyo,
        the trade-offs the data supports, and the compliance backdrop UK
        ecommerce brands cannot ignore. The compliance argument and the
        deliverability argument turn out to point in the same direction, which
        makes the decision cleaner than most people expect.
      </p>

      <TableOfContents />

      <div id="what-they-mean">
        <ArticleH2>What single and double opt-in mean in Klaviyo</ArticleH2>
      </div>
      <p>
        The setting is applied per list, not per account, so different lists can
        behave differently. With <strong>double opt-in</strong>, a new subscriber
        must confirm via a confirmation message Klaviyo sends immediately after
        signup. Only subscribers who confirm are added to the list and queued for
        your welcome series. Anyone who does not confirm gets an empty profile —
        they are not added to any list and are not billed as an active contact.
      </p>
      <p>
        With <strong>single opt-in</strong>, the address joins the list straight
        away with no confirmation step. Two behaviours are worth committing to
        memory:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>List imports never trigger double opt-in.</strong> Importing a
          list adds contacts directly regardless of the opt-in setting.
        </ArticleListItem>
        <ArticleListItem>
          <strong>API-collected consent follows the list.</strong> When you
          collect consent via Klaviyo's API against a specific list, that list's
          opt-in setting determines the process used.
        </ArticleListItem>
      </ArticleList>

      <div id="trade-offs">
        <ArticleH2>The core trade-offs</ArticleH2>
      </div>
      <p>
        Single opt-in grows a list faster and gives a smoother journey. When
        someone signs up for a discount code and expects it instantly, the extra
        confirmation step adds friction — and conversions from opt-in to first
        purchase are slightly lower with double opt-in as a result.
      </p>
      <p>
        The cost of that speed is quality. Without email verification there is no
        guarantee the address is valid. Bots, fake emails, spam traps and mistyped
        addresses all get through, inflating your subscriber count. Because
        Klaviyo bills on active profiles, that inflation raises your costs while
        dragging down account performance.
      </p>
      <p>
        Double opt-in filters those contacts out automatically. Unconfirmed
        subscribers are not billed and not added to any list, so what remains is a
        smaller but more engaged base — subscribers who took two actions signal
        higher intent, which typically produces:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Better open rates.</strong> Engaged contacts open more.</ArticleListItem>
        <ArticleListItem><strong>Stronger click-through.</strong> Intent carries into the click.</ArticleListItem>
        <ArticleListItem><strong>Improved deliverability.</strong> Fewer traps and dead addresses protect your sender reputation.</ArticleListItem>
      </ArticleList>
      <p>
        The main downside of double opt-in is real: some legitimate subscribers
        never confirm because they forget, overlook the message, or don't
        recognise it. You lose people you would have kept.
      </p>

      <div id="compliance">
        <ArticleH2>The UK compliance context</ArticleH2>
      </div>
      <p>
        UK direct marketing is governed by three overlapping laws: UK GDPR, the
        Privacy and Electronic Communications Regulations 2003 (PECR), and the
        Data Protection Act 2018. Under UK GDPR, consent must be{" "}
        <strong>freely given, specific, informed and unambiguous</strong>, and
        PECR carries the same requirement. Best practice under PECR is to confirm
        subscription to any list with a double opt-in.
      </p>
      <p>
        Several consent mechanisms are not accepted by PECR or UK GDPR:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Pre-ticked boxes.</strong> Consent must be an active choice.</ArticleListItem>
        <ArticleListItem><strong>Bundled consent.</strong> Marketing consent tied to accepting terms of service is invalid.</ArticleListItem>
        <ArticleListItem><strong>Passive statements.</strong> Wording like "by providing your email address, you agree to receive our newsletter" buried in checkout does not count.</ArticleListItem>
      </ArticleList>
      <p>
        What is required instead: ask for consent for each specific purpose
        (separate fields for SMS and email), require an active step such as ticking
        an unchecked box, and keep records of when, where, how and for what someone
        gave consent. Klaviyo automatically retains consent timestamps and source
        information, but verify that it is capturing correctly rather than assuming.
      </p>
      <ArticleQuote>
        An inability to produce consent records is treated by the ICO as an
        indicator of non-compliance — the record is the defence.
      </ArticleQuote>
      <p>
        There is a <strong>soft opt-in</strong> exception under PECR: you can email
        existing customers about similar products only if the address was obtained
        during a sale or negotiations for a sale, and a clear opt-out was offered at
        collection and in every subsequent message. It does not cover bought lists
        or cold prospects. Note too that only checkout abandonment emails can
        generally be sent without marketing consent as transactional or legitimate
        interest — browse abandonment is treated as marketing and requires consent.
      </p>

      <div id="hellofresh">
        <ArticleH2>What the HelloFresh fine actually tells you</ArticleH2>
      </div>
      <p>
        In January 2024 the ICO fined HelloFresh £140,000 under PECR after it sent
        79.7 million emails using unclear consent language that bundled email
        marketing with age confirmation and failed to mention SMS consent. The
        detail that matters: <strong>the wording, not the volume, was the
        problem.</strong> A poorly worded consent line at collection scaled into a
        seven-figure compliance failure.
      </p>
      <p>
        Most ICO fines for SMEs fall between £30,000 and £200,000, and the
        regulator has stated it does not aim for maximum penalties. Prompt
        remediation and self-reporting reduce fines. Recent 2025 PECR breaches
        often involved failure to honour unsubscribes — frequently because data
        syncs overwrote suppression lists — and consent recordkeeping gaps. Clean
        consent at the point of collection is the cheapest insurance you can buy.
      </p>

      <div id="deliverability">
        <ArticleH2>Why deliverability points the same way</ArticleH2>
      </div>
      <p>
        The commercial case reinforces the legal one. Validity's 2025 Email
        Deliverability Benchmark Report identifies spam complaints as the single
        biggest factor depreciating sender reputation. Yahoo flags problems at a
        0.3% complaint rate, while best-in-class senders stay below 0.1%.
      </p>
      <p>
        Klaviyo's own thresholds:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Spam rate.</strong> Keep it under 0.05%.</ArticleListItem>
        <ArticleListItem><strong>Unsubscribe rate.</strong> Under 0.3% per campaign.</ArticleListItem>
        <ArticleListItem><strong>Bounce rate.</strong> Below 0.5% is healthy; above 2% signals list hygiene problems.</ArticleListItem>
      </ArticleList>
      <p>
        Klaviyo's deliverability score runs 0–100 across four tiers: Poor (0–49),
        Fair (50–74), Good (75–89) and Excellent (90+). As of 2024–2025, Google,
        Yahoo and Microsoft require SPF, DKIM and DMARC for bulk senders, with
        Microsoft enforcing DMARC from May 2025 and Google rejecting non-compliant
        traffic outright.
      </p>
      <p>
        In practice, most ecommerce brands run single opt-in for email to maximise
        list growth — but that only works when paired with strong list hygiene:
      </p>
      <ArticleList>
        <ArticleListItem><strong>A sunset flow.</strong> Re-engage or suppress subscribers inactive for 90–120 days.</ArticleListItem>
        <ArticleListItem><strong>Automatic hard-bounce suppression.</strong> Dead addresses should never send twice.</ArticleListItem>
        <ArticleListItem><strong>Volume control.</strong> Keep unengaged contacts under 15% of engaged sends.</ArticleListItem>
      </ArticleList>

      <div id="sms">
        <ArticleH2>SMS is a different rule</ArticleH2>
      </div>
      <p>
        Do not carry the email decision straight across to SMS. Single opt-in is
        not recommended for SMS, and double opt-in is required by some carriers.
        Inside Klaviyo, SMS keywords are set to single opt-in by default, but list
        settings can override this. Treat SMS consent as its own field, its own
        purpose, and its own confirmation step.
      </p>

      <div id="decision">
        <ArticleH2>How to decide for your brand</ArticleH2>
      </div>
      <p>
        For most established brands with clean acquisition channels, single opt-in
        for email plus disciplined list hygiene is a defensible default — provided
        your consent language holds up under PECR. It maximises growth without
        obviously compromising deliverability.
      </p>
      <p>
        Double opt-in is the stronger choice if any of the following apply:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Prior deliverability problems.</strong> You need to rebuild sender reputation on quality, not quantity.</ArticleListItem>
        <ArticleListItem><strong>A history of low-quality signups.</strong> Contests, giveaways or aggressive lead capture inflate junk.</ArticleListItem>
        <ArticleListItem><strong>Bot-heavy regions.</strong> Fake and mistyped addresses are entering at volume.</ArticleListItem>
        <ArticleListItem><strong>Third-party form tools with their own confirmation step.</strong> Adding double opt-in avoids double friction only if you consolidate on one.</ArticleListItem>
      </ArticleList>
      <p>
        The honest framing: single opt-in optimises for growth, double opt-in
        optimises for quality and defensibility. If you cannot commit to the list
        hygiene single opt-in demands, choose double.
      </p>

      <div id="how-to-change">
        <ArticleH2>How to change the setting in Klaviyo</ArticleH2>
      </div>
      <p>
        Navigate to Lists &amp; Segments, select the specific list, open Settings,
        and toggle double opt-in. Two constraints to know before you plan around
        it:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Free-plan accounts.</strong> Cannot switch from double to single opt-in.</ArticleListItem>
        <ArticleListItem><strong>Some paid accounts.</strong> May need to contact Klaviyo support to disable double opt-in the first time.</ArticleListItem>
      </ArticleList>
      <p>
        Whichever way you set it, the record decides your position — with carriers,
        with inbox providers, and with the ICO. Grow the list you can defend and
        deliver to, not the biggest number you can reach.
      </p>
    </ArticleLayout>
  );
}
