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
const DESCRIPTION = "How UK ecommerce brands should choose between single and double opt-in in Klaviyo, balancing list growth, deliverability and PECR compliance.";
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
  { id: "the-decision", label: "The decision in plain terms" },
  { id: "how-it-works", label: "How each option works in Klaviyo" },
  { id: "the-trade-off", label: "The core trade-off: volume vs quality" },
  { id: "the-objection", label: "The drop-off objection, answered" },
  { id: "deliverability", label: "Why deliverability raised the stakes" },
  { id: "uk-legal", label: "The UK legal layer: PECR and consent" },
  { id: "soft-opt-in", label: "The soft opt-in exception" },
  { id: "recommendation", label: "What UK brands should actually choose" },
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
        you set up Klaviyo, and it is one of the most consequential. The choice
        shapes how fast your list grows, how clean it stays, how much you pay,
        and whether your emails reach the inbox at all. For UK brands it carries
        an extra dimension most guides skip: a legal one, governed by PECR and
        UK GDPR and enforced by the ICO.
      </p>
      <p>
        This guide sets out exactly what each option does inside Klaviyo, the
        real trade-off between the two, the evidence on subscriber drop-off, and
        the compliance rules that apply specifically to UK ecommerce. Then it
        gives you a clear recommendation you can act on.
      </p>

      <TableOfContents />

      <div id="the-decision">
        <ArticleH2>The decision in plain terms</ArticleH2>
      </div>
      <p>
        Double opt-in is a two-step process. A new subscriber signs up, then
        receives a confirmation message immediately afterwards. Only when they
        click to confirm are they added to your list and queued for a welcome
        series. If they never confirm, they never join.
      </p>
      <p>
        Single opt-in is one step. The subscriber is added the moment they sign
        up, with no confirmation required. It is faster and frictionless, which
        is precisely the source of both its appeal and its risk.
      </p>
      <p>
        Klaviyo sets double opt-in as the default and recommends it. Adoption
        across the industry is still split: Mailjet's 2025 <em>Road to the
        Inbox</em> report found roughly 40% of senders use double opt-in, about
        47.6% do not, and around 12.7% aren't sure what they use. In other
        words, this is a live debate, not a settled question.
      </p>

      <div id="how-it-works">
        <ArticleH2>How each option works in Klaviyo</ArticleH2>
      </div>
      <p>
        The setting lives at the list level. Go to <strong>Lists &amp;
        Segments</strong>, select the list, open <strong>Settings</strong>, then
        check the box for single opt-in and save. That's it — but there are two
        details that trip people up.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>The setting is per list.</strong> It applies to the specific
          list you're editing, not your whole account.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Changing the default is not retroactive.</strong> Adjusting
          the account default only affects new lists. Existing lists keep the
          setting they were created with, so you have to update them
          individually.
        </ArticleListItem>
      </ArticleList>
      <p>
        With double opt-in enabled, Klaviyo sends the confirmation email
        automatically and holds the profile out of your welcome flow until it is
        confirmed. That confirmation email is itself editable and testable, which
        matters a great deal for the drop-off problem covered below.
      </p>

      <div id="the-trade-off">
        <ArticleH2>The core trade-off: volume vs quality</ArticleH2>
      </div>
      <p>
        Everything about this decision comes down to volume versus quality.
      </p>
      <p>
        Single opt-in grows your list faster and maximises total metrics. More
        subscribers means more total clicks and, on paper, more total revenue.
        But because the subscriber never verifies their address, the front door
        is wide open. Bots, fake sign-ups, spam traps and simple typos all get
        added to the list.
      </p>
      <p>
        That creates two problems at once. Klaviyo bills on active profiles, so
        low-quality contacts inflate your cost. And those same contacts damage
        deliverability, because mailbox providers judge your sender reputation on
        how real people engage with your mail.
      </p>
      <p>
        Double opt-in produces a smaller list, but the contacts who confirm have
        shown higher intent — they took two actions rather than one. The result
        is typically better open rates, stronger click-through rates and improved
        deliverability, because the confirmation step naturally filters out bots
        and invalid addresses before they ever reach your list.
      </p>
      <ArticleQuote>
        A smaller list of people who confirmed they want to hear from you will
        almost always out-earn a bigger list padded with addresses that never
        existed.
      </ArticleQuote>

      <div id="the-objection">
        <ArticleH2>The drop-off objection, answered</ArticleH2>
      </div>
      <p>
        The standard objection to double opt-in is that it loses too many
        sign-ups at the confirmation step. That concern is real but overstated,
        and it is almost entirely fixable.
      </p>
      <p>
        The reported drop-off varies widely. Cirque du Soleil lost around 20% of
        subscribers at confirmation. But Oracle Marketing Cloud demonstrated that
        a well-optimised confirmation flow can reach a 96% confirmation rate. The
        difference is not the mechanism — it's the execution.
      </p>
      <ArticleH3>How to optimise the confirmation step</ArticleH3>
      <ArticleList>
        <ArticleListItem>
          <strong>Send it immediately.</strong> Every minute of delay costs
          confirmations. The email should arrive while the person is still on
          the page.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Make the confirm button impossible to miss.</strong> Large,
          prominent, above the fold. One clear action.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Rewrite the default subject line.</strong> The generic default
          underperforms. Make it engaging and obvious about what to do next.
        </ArticleListItem>
        <ArticleListItem>
          <strong>A/B test it.</strong> Klaviyo supports testing confirmation
          emails, so treat the subject line and button as things to improve, not
          set and forget.
        </ArticleListItem>
      </ArticleList>
      <p>
        Get these right and the "double opt-in loses too many people" argument
        largely collapses. A 96% confirmation rate on higher-intent subscribers
        beats a 100% add rate on a list stuffed with fakes.
      </p>

      <div id="deliverability">
        <ArticleH2>Why deliverability raised the stakes</ArticleH2>
      </div>
      <p>
        List quality used to be a nice-to-have. In 2025 it became a gatekeeper.
      </p>
      <p>
        Microsoft tightened its rules so that emails failing authentication
        requirements for bulk senders can now be rejected outright, rather than
        quietly filtered to spam. Rejection means the message never lands
        anywhere — not the inbox, not the junk folder. When you're sending to a
        list full of invalid addresses and spam traps, that behaviour damages
        your reputation fast and hard.
      </p>
      <p>
        This is the practical case against unmanaged single opt-in. A dirty list
        doesn't just underperform; under the current rules it can get your
        legitimate mail blocked from reaching the customers who genuinely want
        it. Double opt-in protects you here by keeping the list clean at the
        point of entry.
      </p>

      <div id="uk-legal">
        <ArticleH2>The UK legal layer: PECR and consent</ArticleH2>
      </div>
      <p>
        For UK brands, the opt-in question is not only about performance. UK
        marketing is governed by PECR (the Privacy and Electronic Communications
        Regulations), working alongside UK GDPR and the Data Protection Act 2018,
        all enforced by the ICO. Serious breaches can attract fines of up to
        £500,000.
      </p>
      <p>
        PECR Regulation 22 prohibits sending unsolicited marketing email unless
        the recipient has previously consented. And valid consent under UK GDPR
        must be freely given, specific, informed and unambiguous. In practice
        that means:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Active opt-in only.</strong> No pre-ticked boxes, no bundled
          consent, no implied agreement.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Separate consent per channel.</strong> Email consent does not
          grant SMS consent. You collect each one independently.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Auditable records.</strong> Keep time-stamped records of the
          exact consent language shown. The ICO expects these to be producible
          during an investigation.
        </ArticleListItem>
      </ArticleList>
      <p>
        Klaviyo's own GDPR guidance lists using double opt-in as a compliance
        best practice. It is worth being precise, though: double opt-in is not
        itself a strict legal requirement in the UK, unlike Germany where it is
        effectively expected. What UK law requires is valid consent and proper
        records — double opt-in is one strong way to evidence that.
      </p>
      <p>
        Helpfully, Klaviyo stores consent method, form version and timestamp
        automatically. Its GDPR-compliant sign-up forms, enabled via{" "}
        <strong>Enable Data Protection Fields</strong>, support granular,
        unchecked-by-default checkboxes for each channel — which is exactly what
        the "active opt-in, no pre-ticked boxes" rule demands.
      </p>

      <div id="soft-opt-in">
        <ArticleH2>The soft opt-in exception</ArticleH2>
      </div>
      <p>
        There is one important UK nuance that gives ecommerce brands more room to
        market to existing customers: the soft opt-in exception under PECR
        Regulation 22(3). It lets you market to existing customers without fresh
        explicit consent — but only where all four conditions are met.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Obtained during a sale.</strong> The contact details were
          collected during a sale or negotiations for a sale.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Similar products only.</strong> The marketing relates to
          similar products or services, not something unrelated.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Opt-out offered at collection.</strong> The customer was given
          a simple way to opt out at the point their details were collected.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Opt-out in every message.</strong> Every subsequent email
          includes a clear opt-out.
        </ArticleListItem>
      </ArticleList>
      <p>
        Miss any one of these and the exception no longer applies. The soft
        opt-in covers your existing customers for email; it does not stretch to
        SMS, and it does not replace the need for proper consent on general
        newsletter sign-ups from non-customers.
      </p>

      <div id="recommendation">
        <ArticleH2>What UK brands should actually choose</ArticleH2>
      </div>
      <p>
        Here is the honest recommendation, based on how much active management
        you can put behind your list.
      </p>
      <p>
        If you don't have a dedicated email manager or agency actively monitoring
        deliverability and running regular list-cleaning — a suppression and
        sunset approach every one to two months — default to double opt-in. It's
        the safer setting because it protects your list quality automatically,
        without needing anyone to watch it.
      </p>
      <p>
        If you choose single opt-in to grow faster, treat it as an active
        commitment. You must monitor deliverability closely, use exclusion
        segments to protect sender reputation, and clean unengaged contacts
        routinely. If spam or fake profiles start appearing, switch back to
        double opt-in.
      </p>
      <ArticleH3>A practical hybrid</ArticleH3>
      <p>
        You don't have to decide blind. Test single opt-in for two to four weeks,
        check whether the extra volume brings spam and fake sign-ups, and revert
        to double opt-in if it does. That gives you real data from your own list
        rather than an assumption.
      </p>
      <ArticleH3>Non-negotiables, whichever you pick</ArticleH3>
      <ArticleList>
        <ArticleListItem>
          <strong>Visible unsubscribe link.</strong> Every UK marketing email
          must carry one, clearly displayed.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Honour opt-outs promptly.</strong> The ICO applies a
          10-working-day expectation, though most brands process immediately.
          Immediate is the standard to hold yourself to.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Suppress, don't delete.</strong> Keep unsubscribed contacts on
          a suppression list rather than deleting them, so you don't accidentally
          re-add them later.
        </ArticleListItem>
      </ArticleList>
      <p>
        The volume that single opt-in adds is only worth having if it converts
        and reaches the inbox. For most UK ecommerce brands without a dedicated
        deliverability owner, double opt-in delivers a cleaner list, stronger
        engagement and a clear compliance trail — and that is a better foundation
        to grow on than a bigger number you can't trust.
      </p>
    </ArticleLayout>
  );
}
