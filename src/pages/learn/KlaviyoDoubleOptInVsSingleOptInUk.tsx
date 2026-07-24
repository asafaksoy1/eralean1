import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "Klaviyo Double Opt-In vs Single Opt-In: What UK Ecommerce Brands Should Choose";
const DESCRIPTION = "A UK-focused guide to choosing between Klaviyo double and single opt-in, covering PECR consent rules, deliverability trade-offs and setup steps.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-double-opt-in-vs-single-opt-in-uk";

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
  { id: "how-opt-in-works", label: "How opt-in works in Klaviyo" },
  { id: "single-opt-in", label: "The case for single opt-in" },
  { id: "double-opt-in", label: "The case for double opt-in" },
  { id: "conversion-friction", label: "The conversion trade-off" },
  { id: "uk-legal-framework", label: "The UK legal framework: PECR and UK GDPR" },
  { id: "soft-opt-in", label: "The soft opt-in advantage" },
  { id: "deliverability", label: "Deliverability in 2025-2026" },
  { id: "how-to-choose", label: "How to choose and set it up" },
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

export default function KlaviyoDoubleOptInVsSingleOptInUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Every ecommerce brand running Klaviyo has to make one early decision that quietly shapes
        list quality, deliverability and cost for years: single or double opt-in. Choose wrong and
        you either bleed sign-ups at the point of intent, or accumulate fake addresses that drag
        your sender reputation down and inflate your bill.
      </p>
      <p>
        This guide breaks down both options through a UK lens — where PECR and UK GDPR set a
        stricter bar than the US playbook most Klaviyo advice is written for. We cover the
        engagement data, the legal reality, the deliverability maths for 2025-2026, and exactly how
        to set each route up.
      </p>

      <TableOfContents />

      <div id="how-opt-in-works">
        <ArticleH2>How opt-in works in Klaviyo</ArticleH2>
      </div>
      <p>
        Klaviyo sets the opt-in method at the list level, and double opt-in is the platform default.
        With double opt-in, a new subscriber must confirm before they are added to a list: a
        confirmation message goes out immediately after they sign up, and they only join once they
        click through. This works identically for email and SMS.
      </p>
      <p>
        Single opt-in adds subscribers instantly. No confirmation click, no waiting — the contact is
        on the list the moment they submit the form. Klaviyo positions double opt-in as the way to
        grow a list while minimising abuse and stopping invalid or mistyped addresses from
        accumulating.
      </p>
      <p>
        You change the setting under <strong>Lists &amp; Segments</strong>, by selecting the specific
        list and adjusting its opt-in settings. One caveat worth knowing upfront: disabling double
        opt-in requires a paid Klaviyo account. It cannot be turned off on free plans.
      </p>

      <div id="single-opt-in">
        <ArticleH2>The case for single opt-in</ArticleH2>
      </div>
      <p>
        Single opt-in grows lists faster because there is no confirmation step to lose people at. For
        brands running well-built native Klaviyo forms, that speed is real and useful — the
        subscriber flows straight into your welcome series and gets their discount code without delay.
      </p>
      <p>
        The downside is address validity. With no confirmation click, bots, fake emails, spam traps
        and mistyped addresses can all enter the list. That inflates your subscriber count with
        contacts who will never open anything, and because Klaviyo bills on active profiles, a high
        volume of low-quality contacts raises your costs while contributing nothing.
      </p>
      <ArticleQuote>
        Single opt-in is faster, but every fake or mistyped address you collect is a contact you pay
        for and a small dent in your sender reputation.
      </ArticleQuote>

      <div id="double-opt-in">
        <ArticleH2>The case for double opt-in</ArticleH2>
      </div>
      <p>
        The engagement case for double opt-in is strong, and it is not marketing puff — it is a
        function of intent. A subscriber who confirms has taken two deliberate actions, which filters
        out the passive and the accidental.
      </p>
      <p>
        Industry research cited by Klaviyo partners shows double opt-in lists produce roughly
        <strong> 72.2% higher unique opens</strong> and <strong>114% better click rates</strong> than
        single opt-in lists. That intent typically translates into better open rates, stronger
        click-through and improved deliverability across the board.
      </p>
      <ArticleList>
        <ArticleListItem><strong>Cleaner list.</strong> Invalid and mistyped addresses are filtered out at the confirmation step.</ArticleListItem>
        <ArticleListItem><strong>Higher engagement.</strong> Confirmed subscribers open and click more, lifting your overall metrics.</ArticleListItem>
        <ArticleListItem><strong>Lower cost.</strong> Fewer dead profiles means you are not paying for contacts who never engage.</ArticleListItem>
        <ArticleListItem><strong>Better reputation.</strong> Fewer bounces and spam traps protect your sender standing.</ArticleListItem>
      </ArticleList>

      <div id="conversion-friction">
        <ArticleH2>The conversion trade-off</ArticleH2>
      </div>
      <p>
        The main cost of double opt-in is friction at the exact moment intent is highest. If someone
        signs up for a discount code, they expect it immediately. Requiring a confirmation click
        before the welcome email and coupon arrive can slightly reduce opt-in-to-first-purchase
        conversion.
      </p>
      <p>
        The practical question to weigh is whether new subscribers should flow straight into the
        welcome series with the coupon delivered instantly, or whether a confirmation step is worth
        the small conversion cost in exchange for a cleaner list. For a discount-led acquisition
        strategy, that first-purchase window matters — which is why the answer is rarely a blanket
        rule and more often a decision made per list and per campaign.
      </p>

      <div id="uk-legal-framework">
        <ArticleH2>The UK legal framework: PECR and UK GDPR</ArticleH2>
      </div>
      <p>
        For UK brands, opt-in sits inside a stricter legal framework than the one US-centric advice
        assumes. Direct marketing by email and SMS is governed by the Privacy and Electronic
        Communications Regulations 2003 (PECR), which sit alongside UK GDPR and the Data Protection
        Act 2018.
      </p>
      <p>
        Under PECR regulation 22, you must not send marketing emails or texts to individual
        subscribers without specific consent — typically a clear, un-pre-ticked opt-in box — unless
        the narrow soft opt-in exception applies. UK GDPR then defines the quality of consent PECR
        requires: it must be freely given, specific, informed and unambiguous. You must keep records
        of who consented, when, how and what they were told, and withdrawal must be as easy as giving
        consent — a one-click unsubscribe.
      </p>
      <p>
        The stakes are real. PECR carries its own fines of up to <strong>£500,000</strong>, separate
        from UK GDPR penalties, and the ICO enforces both. April 2026 ICO guidance reinforces two
        themes: consent records must be clear, unambiguous and retrievable, and the unsubscribe option
        must be as easy to use as the original opt-in.
      </p>
      <ArticleQuote>
        Double opt-in is a deliverability and list-quality tool, not a PECR consent mechanism. A
        confirmation click helps prove and clean consent, but the underlying lawful basis must still
        be sound.
      </ArticleQuote>

      <div id="soft-opt-in">
        <ArticleH2>The soft opt-in advantage</ArticleH2>
      </div>
      <p>
        The soft opt-in is a genuine UK-specific advantage worth understanding. It lets a business
        email its own existing customers about similar products or services without fresh consent —
        provided the details were obtained during a sale or negotiation of a sale, and the customer
        was given a clear opportunity to opt out both at collection and in every subsequent message.
      </p>
      <p>
        The limits are precise, and this is where brands trip up. Soft opt-in does not cover:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Newsletter sign-ups.</strong> Someone who joined your list without buying needs explicit affirmative consent.</ArticleListItem>
        <ArticleListItem><strong>Lead magnet downloads.</strong> Grabbing a guide is not a sale or negotiation of one.</ArticleListItem>
        <ArticleListItem><strong>Abandoned carts.</strong> No completed purchase means no soft opt-in basis.</ArticleListItem>
        <ArticleListItem><strong>Bought or rented lists.</strong> These can never rely on soft opt-in, full stop.</ArticleListItem>
      </ArticleList>
      <p>
        This distinction should shape your Klaviyo list architecture. Separating purchasers from
        non-purchasing subscribers, and segmenting individuals from corporate contacts, lets you apply
        the correct lawful basis to each group and evidence compliance if the ICO ever asks.
      </p>

      <div id="deliverability">
        <ArticleH2>Deliverability in 2025-2026</ArticleH2>
      </div>
      <p>
        The deliverability landscape makes tighter opt-in practices more valuable than ever. Global
        inbox placement now sits in a tight band of roughly 83-85%, with retail and ecommerce around
        85-88% — pulled down by heavy promotional language and high image-to-text ratios.
      </p>
      <p>
        Gmail and Yahoo now enforce a spam complaint rate ceiling of <strong>0.3%</strong>; exceed it
        and deliverability collapses. Best-practice thresholds are tighter still:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Hard bounce rate.</strong> Keep it under 2%.</ArticleListItem>
        <ArticleListItem><strong>Complaint rate.</strong> Ideally near 0.03-0.1%.</ArticleListItem>
      </ArticleList>
      <p>
        Open rate has become a weak signal because Apple's Mail Privacy Protection generates machine
        opens on roughly 40% of emails. Inbox placement and revenue per email are now the more
        reliable measures of health.
      </p>
      <p>
        Single opt-in lists are more prone to spam traps, bots and hard bounces — a leading cause of
        sudden delivery-rate drops. So the practical guidance is nuanced rather than dogmatic: brands
        running native Klaviyo forms with good list hygiene can often use single opt-in for maximum
        sign-ups, but should switch to double opt-in — or run it selectively — if deliverability,
        bounce rates or fake-signup volumes deteriorate. And if you use a third-party form tool that
        already confirms subscribers, single opt-in in Klaviyo avoids a redundant double confirmation
        and unnecessary friction.
      </p>

      <div id="how-to-choose">
        <ArticleH2>How to choose and set it up</ArticleH2>
      </div>
      <p>
        There is no universal winner. The right choice depends on your acquisition channels, your
        list hygiene discipline and how your deliverability is trending right now.
      </p>
      <ArticleH3>Lean single opt-in if</ArticleH3>
      <ArticleList>
        <ArticleListItem>You run native Klaviyo forms with strong hygiene and clean data.</ArticleListItem>
        <ArticleListItem>A third-party tool already confirms subscribers before they reach Klaviyo.</ArticleListItem>
        <ArticleListItem>Your bounce and complaint rates sit comfortably inside the thresholds above.</ArticleListItem>
      </ArticleList>
      <ArticleH3>Lean double opt-in if</ArticleH3>
      <ArticleList>
        <ArticleListItem>You are seeing fake sign-ups, rising bounces or complaint spikes.</ArticleListItem>
        <ArticleListItem>Engagement quality matters more to you than raw sign-up volume.</ArticleListItem>
        <ArticleListItem>You want the cleanest possible evidence trail alongside your consent records.</ArticleListItem>
      </ArticleList>
      <ArticleH3>Implementation steps for either route</ArticleH3>
      <ArticleList>
        <ArticleListItem><strong>Set opt-in at the list level.</strong> Do it in Lists &amp; Segments on the specific list.</ArticleListItem>
        <ArticleListItem><strong>Use a clear consent statement.</strong> Signup forms must carry a non-pre-ticked consent box.</ArticleListItem>
        <ArticleListItem><strong>Keep timestamped consent records.</strong> Log who consented, when, how and what they were told.</ArticleListItem>
        <ArticleListItem><strong>Include one-click unsubscribe.</strong> Make it functional in every single send.</ArticleListItem>
        <ArticleListItem><strong>Clean unengaged contacts.</strong> Run this weekly or monthly to protect sender reputation.</ArticleListItem>
      </ArticleList>
      <p>
        Treat opt-in method as a lever you can adjust, not a decision you make once and forget. Single
        opt-in wins you volume when your list is clean and your channels are trusted; double opt-in is
        the correction you reach for the moment quality slips. What never changes is the foundation
        beneath it — a sound lawful basis under PECR, retrievable consent records, and hygiene tight
        enough to keep you inside Gmail and Yahoo's limits. Get that right, and the opt-in question
        becomes a matter of tuning rather than risk.
      </p>
    </ArticleLayout>
  );
}
