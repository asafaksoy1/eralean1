import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "Klaviyo Single vs Double Opt-In for UK Ecommerce Brands: PECR, Deliverability and List Growth";
const DESCRIPTION = "How UK ecommerce brands should choose between single and double opt-in in Klaviyo to balance PECR/GDPR consent, deliverability and list growth.";
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
  { id: "how-opt-in-works", label: "How opt-in works in Klaviyo" },
  { id: "the-core-trade-off", label: "The core trade-off: growth vs quality" },
  { id: "pecr-and-uk-gdpr", label: "What PECR and UK GDPR actually require" },
  { id: "soft-opt-in", label: "The soft opt-in and how it shapes your lists" },
  { id: "deliverability", label: "Deliverability and the bulk sender rules" },
  { id: "the-recommendation", label: "The recommendation for UK brands" },
  { id: "implementation", label: "Implementation checklist" },
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
        Single or double opt-in is one of the first decisions you make when you set up a Klaviyo list,
        and it quietly shapes three things at once: how fast your list grows, how clean your data stays,
        and how well you can prove consent if the ICO ever asks. Most advice online is written for US
        brands, where the legal pressure is lighter. UK ecommerce sits under PECR and UK GDPR, so the
        answer changes.
      </p>
      <p>
        This guide walks through how opt-in works in Klaviyo, the growth-versus-quality trade-off, what
        UK law actually demands, and how deliverability rules from Gmail and Yahoo tie the whole thing
        together. The goal is a decision you can defend commercially and legally.
      </p>

      <TableOfContents />

      <div id="how-opt-in-works">
        <ArticleH2>How opt-in works in Klaviyo</ArticleH2>
      </div>
      <p>
        In Klaviyo, opt-in is set at the list level and applies to both email and SMS. Double opt-in is
        a process through which a new subscriber must confirm their subscription before being added to a
        given list. Everyone who signs up receives a confirmation message immediately, and only
        subscribers who confirm are successfully added to the list and queued for your welcome series.
      </p>
      <p>
        By default, the Opt-in Process section shows options for double and single opt-in, with double
        opt-in selected. Switching to single opt-in means new subscribers are added to your list
        immediately after submitting the signup form — no confirmation step. Importantly, this change
        only affects new signups moving forward. Existing subscribers who joined through double opt-in
        remain unaffected, so you can change your approach without disrupting your current list.
      </p>
      <p>
        Two operational details catch UK brands out. First, list imports do not trigger double opt-in —
        so importing a list is never a substitute for a documented consent event. Second, for
        subscribers who opt in through an SMS keyword, the keyword's opt-in settings override the list's.
        Know where each subscriber entered before you assume how they were confirmed.
      </p>

      <div id="the-core-trade-off">
        <ArticleH2>The core trade-off: growth vs quality</ArticleH2>
      </div>
      <p>
        The decision comes down to list growth versus list quality. Single opt-in gives you faster growth
        and fewer barriers; double opt-in gives you cleaner data and higher-quality subscribers.
      </p>
      <p>
        Turning off double opt-in increases your list growth rate because more people successfully join
        without the extra confirmation step. Double opt-in introduces friction — some subscribers miss
        the confirmation email or forget to complete the process, and those are lost opportunities. On
        the growth side, single opt-in will grow your list faster, but the leads may be less qualified
        and you may pick up some bots.
      </p>
      <p>
        On the quality side, double opt-in helps you grow your list while minimising abuse and preventing
        the accumulation of invalid or mistyped emails and phone numbers. It makes most sense in specific
        cases: if your store has a history of receiving low-quality contacts, or frequently gets signups
        from regions known for bot activity, double opt-in may be the safer long-term option.
      </p>
      <ArticleQuote>
        Start with single opt-in unless you have a clear reason to avoid it, and switch to double opt-in
        when spam signups become consistent or when list quality matters more than a slightly slower
        growth rate.
      </ArticleQuote>

      <div id="pecr-and-uk-gdpr">
        <ArticleH2>What PECR and UK GDPR actually require</ArticleH2>
      </div>
      <p>
        UK email marketing is governed by PECR alongside UK GDPR, enforced by the ICO. The Information
        Commissioner's Office enforces these rules with penalties reaching £17.5 million or 4% of global
        turnover, and PECR carries its own separate fines of up to £500,000. This is not a corner to cut.
      </p>
      <p>
        The rules are specific. You must not send marketing emails or texts to individuals without
        consent; there is a limited exception for your own previous customers, often called the soft
        opt-in; and you can send marketing emails to companies. Consent has to meet a strict standard —
        PECR requires prior, freely given, specific, informed and unambiguous consent. That means active
        opt-in only. Pre-ticked boxes, bundled consent and implied agreement do not meet the standard.
        You must not use pre-ticked boxes, silence, or inactivity as evidence.
      </p>
      <p>
        Here is the point most people miss: UK law does not mandate double opt-in. It mandates valid
        consent and evidence of it. Every marketing email campaign that relies on consent must be
        traceable to a specific, documented consent event for each recipient. This is the strongest
        UK-specific argument for double opt-in — it produces a timestamped confirmation record you can
        point to.
      </p>
      <p>
        But confirmation is not the only way to evidence consent, and it is not the most important design
        decision. Your checkbox is. Any place where you have a checkbox to opt in — a checkout page, for
        example — should start unchecked, so people consciously choose to opt in. A well-designed
        unchecked box with a stored timestamp can satisfy PECR without a double opt-in step at all.
      </p>

      <div id="soft-opt-in">
        <ArticleH2>The soft opt-in and how it shapes your lists</ArticleH2>
      </div>
      <p>
        The UK's soft opt-in changes how you should structure your Klaviyo lists. Under PECR's soft
        opt-in, if someone purchased from you — or actively negotiated a purchase — you can email them
        about similar products or services without explicit consent, provided you gave a clear opt-out at
        collection and in every email.
      </p>
      <p>
        For prospects who have never purchased — newsletter signups, guide downloads, abandoned carts —
        you need explicit, affirmative consent before sending any marketing email. That distinction is
        the backbone of a compliant list strategy.
      </p>
      <ArticleH3>Segment to apply the right rule</ArticleH3>
      <p>
        If you are unsure which rules apply, segment your list. Separating individuals from corporates,
        and acquisition contacts from existing customers, lets you apply the right approach and evidence
        compliance. In practice that means:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Existing customers.</strong> Covered by soft opt-in for similar products, as long as
          every email carries a clear opt-out.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Prospects who never bought.</strong> Require explicit consent — an unchecked box, a
          form submission, or a confirmed double opt-in.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Corporate contacts.</strong> You can market to companies, but keep them separate so
          your rules stay clean.
        </ArticleListItem>
      </ArticleList>

      <div id="deliverability">
        <ArticleH2>Deliverability and the bulk sender rules</ArticleH2>
      </div>
      <p>
        Consent quality is not just a legal concern — it drives deliverability. Since the Google and
        Yahoo bulk sender rules, this matters more than ever. Gmail and Yahoo require bulk senders
        (5,000+ messages a day to their users) to authenticate with SPF and DKIM, publish a DMARC record
        at minimum p=none, include one-click unsubscribe, keep spam complaint rate below 0.3% — target
        under 0.1% — and use a From: domain that aligns with SPF or DKIM.
      </p>
      <p>
        Gmail advises keeping spam rates below 0.1%, and senders exceeding 0.3% may see sends blocked.
        The volume maths hurts smaller UK stores, because complaint rates are ratios: even a small number
        of complaints can push you over the threshold if your volume is low. A sender delivering 10,000
        emails needs only 30 spam reports to hit 0.3%.
      </p>
      <p>
        A dirtier single opt-in list can raise complaints and bounces, so if you run single opt-in, pair
        it with active hygiene. Keep a consistent list-cleaning automation running in Klaviyo to remove
        subscribers who never open your emails. That protects your sender reputation and keeps Klaviyo
        costs aligned with revenue.
      </p>
      <p>
        One requirement is already handled for you. Klaviyo implemented a list-unsubscribe header that
        satisfies the one-click unsubscribe requirement. It applies automatically to all marketing emails
        built in Klaviyo, and you do not need to configure anything.
      </p>

      <div id="the-recommendation">
        <ArticleH2>The recommendation for UK brands</ArticleH2>
      </div>
      <p>
        Default to single opt-in for speed and instant delivery of welcome incentives. Most UK stores
        running incentive-led signup forms want the discount code in the subscriber's inbox before they
        lose interest, and a confirmation step gets in the way of that.
      </p>
      <p>
        Switch to double opt-in when any of the following is true:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Signup traffic quality is poor.</strong> Bots, mistyped addresses or contacts from
          high-abuse regions are appearing consistently.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Spam complaints are climbing.</strong> If you are drifting toward the 0.1–0.3% range,
          the confirmation step filters out the least engaged signups.
        </ArticleListItem>
        <ArticleListItem>
          <strong>You want the strongest consent trail.</strong> The timestamped confirmation record is
          the cleanest evidence for ICO compliance if your consent processes are ever questioned.
        </ArticleListItem>
      </ArticleList>
      <p>
        Whichever you choose, the compliance basics never change: use unchecked consent boxes so opt-in
        is a conscious choice, keep proof of the consent event, and run a sunset or list-cleaning flow to
        protect deliverability.
      </p>

      <div id="implementation">
        <ArticleH2>Implementation checklist</ArticleH2>
      </div>
      <p>
        Set your Klaviyo list up so the commercial and legal sides both hold. In order:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Set opt-in at the list level.</strong> Start on single opt-in for your main acquisition
          list unless traffic quality already gives you a reason not to.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Design unchecked consent boxes.</strong> Every checkout and signup checkbox starts
          empty, with clear wording about what the subscriber is agreeing to.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Segment by consent basis.</strong> Separate existing customers (soft opt-in) from
          prospects (explicit consent) and individuals from corporates.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Authenticate your domain.</strong> SPF, DKIM and a DMARC record, with a From: domain
          that aligns — non-negotiable for the bulk sender rules.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Run a sunset flow.</strong> Suppress subscribers who stop opening, before they start
          reporting spam.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Monitor complaint rate.</strong> Watch the ratio, not the raw number — at low volume,
          a handful of complaints crosses the line.
        </ArticleListItem>
      </ArticleList>
      <p>
        The single-versus-double debate is really a proxy for a bigger question: can you prove consent,
        and can you keep your list clean enough to reach the inbox? Get those two right and either setting
        works. Start with single opt-in for the speed, keep your evidence and your hygiene tight, and
        move to double opt-in the moment your data or your complaint rate tells you to.
      </p>
    </ArticleLayout>
  );
}
