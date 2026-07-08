import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "Single Opt-In vs Double Opt-In in Klaviyo: A UK Ecommerce Setup Guide";
const DESCRIPTION = "How UK ecommerce brands should choose between single and double opt-in in Klaviyo to balance list growth, deliverability, and GDPR/PECR compliance.";
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
  { id: "the-decision", label: "Why the opt-in choice matters" },
  { id: "definitions", label: "What single and double opt-in actually do" },
  { id: "where-to-set-it", label: "Where to set it in Klaviyo" },
  { id: "trade-off", label: "The core trade-off: quality vs volume" },
  { id: "when-single", label: "When single opt-in is the right call" },
  { id: "when-double", label: "When double opt-in is the safer choice" },
  { id: "uk-compliance", label: "UK GDPR and PECR consent rules" },
  { id: "sms", label: "SMS: stricter rules, different defaults" },
  { id: "how-to-decide", label: "How to decide and test" },
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
        Single or double opt-in is one of the first real decisions a UK ecommerce brand
        faces when setting up Klaviyo, and it is not a cosmetic one. The choice shapes how
        fast your list grows, how well your emails land in the inbox, how much you pay
        Klaviyo each month, and whether your consent capture stands up under UK GDPR and
        PECR. Get it wrong and you either throttle growth or slowly poison your sender
        reputation.
      </p>
      <p>
        This guide sets out what each option does inside Klaviyo, the trade-offs that
        actually matter, and how UK brands should approach the decision alongside their
        legal obligations. There is no universally correct answer — but there is a correct
        way to choose.
      </p>

      <TableOfContents />

      <div id="the-decision">
        <ArticleH2>Why the opt-in choice matters</ArticleH2>
      </div>
      <p>
        The opt-in setting sits upstream of almost everything else in your email
        programme. It determines which contacts ever reach your welcome flow, which
        contacts count as billable active profiles, and — over time — how inbox providers
        judge your domain. A brand can build a beautiful welcome series and still
        underperform because the list feeding it is full of contacts who never truly
        signed up.
      </p>
      <p>
        So this is not a preference toggle. It is a decision about the kind of list you
        want to own: larger and noisier, or smaller and cleaner.
      </p>

      <div id="definitions">
        <ArticleH2>What single and double opt-in actually do</ArticleH2>
      </div>
      <p>
        The mechanics are simple, and understanding them removes most of the confusion.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Single opt-in.</strong> The subscriber submits a form and is added to
          your list immediately. They flow straight into the welcome series and receive
          any incentive — such as a discount code — right away. No confirmation step.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Double opt-in.</strong> After submitting the form, the subscriber
          receives a confirmation email (or SMS) with a link. Only after they click that
          link are they added to the list and queued for the welcome series. Contacts who
          never confirm are never added.
        </ArticleListItem>
      </ArticleList>
      <p>
        The difference is one extra action. But that single action is exactly what filters
        the list — and exactly what costs you a slice of your sign-ups.
      </p>

      <div id="where-to-set-it">
        <ArticleH2>Where to set it in Klaviyo</ArticleH2>
      </div>
      <p>
        Klaviyo sets double opt-in as the default. You control it at the list level under{" "}
        <strong>List &gt; Settings &gt; Double Opt-in</strong>, so different lists can use
        different settings if you need them to.
      </p>
      <p>A few operational details catch people out:</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Free plan limits.</strong> Accounts on Klaviyo's free plan cannot switch
          to single opt-in themselves and may need to contact Klaviyo support to disable
          it.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Imports bypass it.</strong> List imports do not trigger double opt-in —
          confirmation only applies to form sign-ups, so an imported list is never
          filtered by this setting.
        </ArticleListItem>
        <ArticleListItem>
          <strong>SMS keywords override.</strong> For SMS keywords, the keyword's own
          opt-in setting overrides the list-level setting, so check both.
        </ArticleListItem>
      </ArticleList>

      <div id="trade-off">
        <ArticleH2>The core trade-off: quality vs volume</ArticleH2>
      </div>
      <p>
        Everything comes down to quality versus volume. Double opt-in produces a smaller
        but more engaged list, because every confirmed subscriber has taken two deliberate
        actions and signalled genuine intent. That intent shows up in the metrics: higher
        open rates, stronger click-through rates, and better deliverability. It naturally
        filters out bots, spam traps, and mistyped or fake addresses.
      </p>
      <p>
        There is a direct cost benefit too. Klaviyo bills on active profiles, and
        unconfirmed contacts are not counted as active. A double opt-in list is therefore
        cheaper to hold, not just cleaner.
      </p>
      <ArticleQuote>
        Double opt-in doesn't just protect your reputation — it stops you paying to store
        contacts who never wanted to hear from you.
      </ArticleQuote>
      <p>
        The downside is real. Some legitimate subscribers never confirm — they overlook
        the email, forget, or lose it to a promotions tab. Growth is slower, and
        conversion from opt-in to first purchase can dip slightly, because a
        discount-seeking subscriber wants their coupon immediately, not after clicking a
        confirmation link.
      </p>
      <p>
        Single opt-in inverts all of this: faster growth, a smoother journey, an instant
        coupon — but a list that can quietly fill with fake, invalid, and low-quality
        addresses if you are not watching.
      </p>

      <div id="when-single">
        <ArticleH2>When single opt-in is the right call</ArticleH2>
      </div>
      <p>
        Single opt-in grows lists faster and gives new subscribers a streamlined journey:
        they go straight into the welcome flow and get their incentive immediately. Many
        agencies recommend single opt-in for brands using native Klaviyo forms —{" "}
        <em>provided</em> the brand monitors deliverability and cleans its list regularly.
      </p>
      <p>
        The risk is that invalid and low-quality emails inflate the list, raise costs, and
        damage sender reputation. Inbox providers such as Google and Yahoo track how
        recipients interact with your domain's mail — spam complaints, opens, bounces — so
        a dirty list directly harms inbox placement. If you choose single opt-in, treat
        list hygiene as non-negotiable:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Run consistent cleaning automations.</strong> Suppress unengaged
          contacts on a schedule so the list stays healthy.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Watch for suspicious spikes.</strong> Sudden bursts of sign-ups often
          signal bot activity, not virality.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Have a fallback.</strong> Switch temporarily to double opt-in if
          deliverability drops or you get a flood of fake sign-ups.
        </ArticleListItem>
      </ArticleList>

      <div id="when-double">
        <ArticleH2>When double opt-in is the safer choice</ArticleH2>
      </div>
      <p>
        Double opt-in is the safer long-term default for two profiles of brand: those with
        a history of deliverability problems, and those that regularly attract low-quality
        or bot sign-ups. If your domain reputation is already fragile, the last thing you
        want is more unverified contacts diluting your engagement signals.
      </p>
      <p>
        The confirmation step acts as a permanent filter. You accept slower growth in
        exchange for a list that inbox providers learn to trust — and a lower Klaviyo bill,
        since unconfirmed contacts never become billable profiles. For a brand rebuilding
        after deliverability trouble, that trade is almost always worth it.
      </p>

      <div id="uk-compliance">
        <ArticleH2>UK GDPR and PECR consent rules</ArticleH2>
      </div>
      <p>
        Opt-in strategy sits alongside strict compliance obligations. UK email and SMS
        marketing is governed by UK GDPR, and SMS additionally falls under the Privacy and
        Electronic Communications Regulations 2003 (PECR). Under UK GDPR, consent must be
        &quot;freely given, specific, informed, and unambiguous&quot;. PECR carries the same
        consent standard for marketing texts.
      </p>
      <p>In practice, that means:</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Use granular, separate consent.</strong> Distinct checkboxes or fields
          for email and SMS, so someone can opt into one and not the other.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Never pre-tick boxes.</strong> Consent must require a deliberate action
          from the subscriber.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Keep consent unconditional.</strong> You cannot make consent a condition
          of receiving a product or service.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Protect children.</strong> Do not accept consent from children under 16
          without parental permission.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Keep records.</strong> Store when, where, how, and for what someone
          consented.
        </ArticleListItem>
      </ArticleList>
      <p>
        Klaviyo helps here with GDPR-compliant form templates. When building a form from
        scratch, enable <strong>Data Protection Fields</strong> to include compliant
        language and checkboxes. Any selected value is stored as a{" "}
        <strong>$consent</strong> property on the profile, so you can segment on it later.
      </p>
      <ArticleQuote>
        Compliant consent capture and your opt-in setting are separate levers — you need
        both right, not one or the other.
      </ArticleQuote>

      <div id="sms">
        <ArticleH2>SMS: stricter rules, different defaults</ArticleH2>
      </div>
      <p>
        SMS carries stricter rules than email, and Klaviyo treats double opt-in as
        effectively required in many SMS cases. Single opt-in is not recommended for SMS,
        because some carriers require double opt-in, and it is required for abandoned cart
        SMS messages in the US and Canada.
      </p>
      <p>Every UK and EU SMS must:</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Identify the sender.</strong> Use a customised sender ID, or place the
          brand name at the start of the message.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Include an opt-out mechanism.</strong> An unsubscribe link or equivalent
          — configurable in Klaviyo under <strong>Settings &gt; SMS</strong> in the
          Compliance tab.
        </ArticleListItem>
      </ArticleList>
      <p>
        One quirk to plan around: Klaviyo branded sender IDs — available only in the UK and
        Australia — cannot receive inbound messages, which affects how STOP and
        unsubscribe keywords work. If STOP replies matter to your opt-out flow, factor
        this into your sender setup rather than discovering it later.
      </p>

      <div id="how-to-decide">
        <ArticleH2>How to decide and test</ArticleH2>
      </div>
      <p>
        For most UK brands, the pragmatic path is to start with double opt-in when you are
        new or when deliverability is fragile, then test single opt-in deliberately rather
        than guessing. A workable process:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Default to double opt-in.</strong> Begin here if your list is young or
          your reputation is uncertain.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Run a single opt-in test.</strong> Switch for one to four weeks,
          depending on your volume, and measure both subscriber growth and spam rates.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Read the result honestly.</strong> If volume rises with no meaningful
          spam, single opt-in likely suits you. If spam appears, revert to double opt-in.
        </ArticleListItem>
      </ArticleList>
      <p>
        Whichever you land on, the choice only works when it is paired with active list
        hygiene and correct GDPR and PECR consent capture. The opt-in toggle decides how
        contacts enter; hygiene decides whether they stay worth keeping; consent decides
        whether you were allowed to email them at all. Treat all three as one system, and
        the single-versus-double question stops being a gamble and becomes a lever you
        control.
      </p>
    </ArticleLayout>
  );
}
