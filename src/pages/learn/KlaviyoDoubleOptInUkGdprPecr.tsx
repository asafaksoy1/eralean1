import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "Klaviyo Single vs Double Opt-In: What UK Ecommerce Brands Should Use for GDPR and PECR";
const DESCRIPTION = "How to choose and configure Klaviyo opt-in settings for UK GDPR and PECR compliance, list quality, and deliverability without killing signups.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-double-opt-in-uk-gdpr-pecr";

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
  { id: "what-the-setting-does", label: "What the opt-in setting actually does in Klaviyo" },
  { id: "performance-case", label: "The performance case for double opt-in" },
  { id: "friction-trade-off", label: "The friction trade-off and a middle path" },
  { id: "uk-legal-layer", label: "The UK legal layer: PECR and UK GDPR" },
  { id: "soft-opt-in", label: "The soft opt-in advantage" },
  { id: "segment-by-consent", label: "Segment your lists by consent basis" },
  { id: "consent-metadata", label: "Capture consent metadata and honour opt-outs" },
  { id: "sms-in-klaviyo", label: "SMS opt-in rules in Klaviyo" },
  { id: "sensible-default", label: "A sensible default for UK stores" },
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

export default function KlaviyoDoubleOptInUkGdprPecrPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        The single-versus-double opt-in decision is one of the most consequential setup choices a UK
        ecommerce brand makes in Klaviyo. It sits at the intersection of two things that rarely get
        discussed together: how your list actually performs, and whether you are on the right side of
        UK law. Most Klaviyo tutorials are written for a US audience and get the legal half wrong for
        Britain.
      </p>
      <p>
        This guide covers both. We will walk through what the setting does, the real performance
        numbers, the friction you pay for cleaner data, and the PECR and UK GDPR rules that change the
        answer for a British store. By the end you will know exactly how to configure your lists.
      </p>

      <TableOfContents />

      <div id="what-the-setting-does">
        <ArticleH2>What the opt-in setting actually does in Klaviyo</ArticleH2>
      </div>
      <p>
        Double opt-in is enabled by default in Klaviyo, and it is set at the list level. That means you
        can require confirmation on some lists and skip it on others — a detail that becomes important
        once you start segmenting by consent basis.
      </p>
      <p>
        When double opt-in is on, Klaviyo sends a confirmation email immediately after signup. The
        subscriber must click the confirmation link — which expires after 72 hours — before they are
        added to the list. If they never confirm, Klaviyo creates an empty profile but the contact is
        never added. To change the setting, open the specific List, click Settings, then Double Opt-In.
      </p>
      <p>Two behaviours catch people out:</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Segments have no opt-in setting.</strong> Opt-in only happens at the list-subscription
          stage. Segments are dynamic groupings, not a consent event.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Imports bypass double opt-in entirely.</strong> API list imports and bulk imports do
          not trigger the confirmation email — contacts are added directly regardless of the setting. If
          you import a list, the responsibility for its consent quality is yours alone.
        </ArticleListItem>
      </ArticleList>

      <div id="performance-case">
        <ArticleH2>The performance case for double opt-in</ArticleH2>
      </div>
      <p>
        The performance argument for double opt-in is real and measurable. Research cited by
        implementers shows double opt-in lists produce roughly 72.2% higher unique opens and 114% better
        click rates than single opt-in lists. The mechanism is simple: a subscriber who takes two
        deliberate actions is signalling far higher intent than one who dropped an address into a box.
      </p>
      <p>
        Confirmation also filters out bots, mistyped addresses, and spam traps. That gives you a cleaner
        list, fewer bounces, and a stronger sender reputation — the compounding asset that decides
        whether your emails land in the inbox or the spam folder.
      </p>
      <ArticleQuote>
        Klaviyo bills on active profiles. A bloated single-opt-in list of low-quality or fake emails
        inflates your spend while dragging down every engagement metric you are judged on.
      </ArticleQuote>
      <p>
        So double opt-in improves deliverability, protects reputation, and controls cost. That is a
        strong case — but it is not the whole picture.
      </p>

      <div id="friction-trade-off">
        <ArticleH2>The friction trade-off and a middle path</ArticleH2>
      </div>
      <p>
        Every confirmation step loses a percentage of genuine subscribers who simply never click the
        link. Signup-to-first-purchase conversion is also slightly lower, because a discount-seeker has
        to wait for confirmation instead of dropping straight into your welcome flow with their code.
      </p>
      <p>
        That is a real cost, especially for brands whose acquisition depends on a first-order incentive.
        Many agencies recommend a pragmatic middle path rather than treating this as binary:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Run single opt-in with discipline.</strong> Pair it with ongoing list cleaning —
          remove unengaged contacts weekly or monthly rather than letting dead weight accumulate.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Monitor deliverability closely.</strong> Watch bounce rates, spam complaints, and open
          rates as leading indicators.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Switch to double opt-in if deliverability slides.</strong> Treat it as a lever you can
          pull, not a permanent state.
        </ArticleListItem>
      </ArticleList>
      <p>
        That framing works well for performance. But in the UK, the decision is not only about
        performance — it is also about consent, and that changes the calculus.
      </p>

      <div id="uk-legal-layer">
        <ArticleH2>The UK legal layer: PECR and UK GDPR</ArticleH2>
      </div>
      <p>
        UK email and SMS marketing is governed by the Privacy and Electronic Communications Regulations
        2003 (PECR), which sits on top of UK GDPR and the Data Protection Act 2018. This is the part
        generic tutorials miss.
      </p>
      <p>
        The key rule is PECR regulation 22: you must not send marketing emails or texts to individual
        subscribers without their specific prior consent — unless the narrow soft opt-in exception
        applies. SMS counts as electronic mail under regulation 22, so the same tests apply to text
        campaigns.
      </p>
      <p>Consent under UK GDPR has to clear a specific bar. It must be:</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Freely given, specific, informed and unambiguous.</strong> Captured via a clear,
          unticked opt-in checkbox with concise wording.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Not bundled.</strong> It must not be tied to your terms or made a condition of
          purchase.
        </ArticleListItem>
      </ArticleList>
      <p>
        PECR carries its own fines of up to £500,000, separate from UK GDPR penalties, and the ICO
        enforces both. This is not a theoretical risk — continuing to email people who never consented,
        or who opted out, is one of the most common triggers for ICO complaints.
      </p>

      <div id="soft-opt-in">
        <ArticleH2>The soft opt-in advantage</ArticleH2>
      </div>
      <p>
        The soft opt-in is a UK-specific mechanism that shapes how you should structure your Klaviyo
        lists. It lets you email your own existing customers about similar products or services without
        fresh consent — but only if all three conditions are met:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Obtained in a sale.</strong> You got the details in the course of a sale or the
          negotiation of a sale.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Similar products only.</strong> The marketing is for similar products or services to
          what they bought or discussed.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Opt-out offered every time.</strong> You gave a clear chance to opt out both at the
          point of collection and in every subsequent message.
        </ArticleListItem>
      </ArticleList>
      <p>
        Two clarifications matter. The soft opt-in is a PECR mechanism, not a UK GDPR lawful basis, and
        it is not the same as legitimate interests. And it has hard limits:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Not for bought-in or rented lists.</strong> It only covers people you sold to
          directly.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Not for non-purchasers.</strong> Newsletter signups, guide downloads, and
          abandoned-cart-only contacts have never bought, so they need explicit affirmative consent.
        </ArticleListItem>
      </ArticleList>
      <p>
        Note who counts as an individual. Sole traders and non-LLP partnerships are individual
        subscribers, so the full consent rules apply. Companies, LLPs and Scottish partnerships are
        corporate subscribers, where the rules are lighter — though you still owe an opt-out, and UK GDPR
        still applies to any named individual.
      </p>

      <div id="segment-by-consent">
        <ArticleH2>Segment your lists by consent basis</ArticleH2>
      </div>
      <p>
        The practical takeaway from all of this: structure your Klaviyo lists around consent, not just
        around funnel stage. The ICO expects consent records to be clear, unambiguous and retrievable,
        and the cleanest way to evidence that is to keep the two populations apart.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Customers.</strong> People who have purchased and may qualify for the soft opt-in.
          Keep them on their own list.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Prospects and newsletter signups.</strong> People who have never bought. These need
          explicit consent, so keep them separate and treat them accordingly.
        </ArticleListItem>
      </ArticleList>
      <p>
        Segmenting this way is not bureaucracy for its own sake — it is what lets you prove compliance
        quickly if a complaint or audit ever lands.
      </p>

      <div id="consent-metadata">
        <ArticleH2>Capture consent metadata and honour opt-outs</ArticleH2>
      </div>
      <p>
        Whether you run single or double opt-in, record the details of the consent itself: who consented,
        when, how, and what they were told at the time. Custom profile properties or source fields in
        Klaviyo are ideal for storing this. If you cannot retrieve a clear consent record, you cannot
        defend it.
      </p>
      <p>
        Make unsubscribing as easy as opting in. Every marketing email needs a functional, visible
        unsubscribe link, and you must stop emailing the moment someone opts out. April 2026 ICO guidance
        reinforced exactly these two themes: consent records must be retrievable, and unsubscribing must
        be as easy as the original opt-in.
      </p>
      <ArticleQuote>
        Continuing to email after an opt-out is one of the most common causes of ICO complaints. The fix
        costs nothing — respect the unsubscribe instantly and completely.
      </ArticleQuote>

      <div id="sms-in-klaviyo">
        <ArticleH2>SMS opt-in rules in Klaviyo</ArticleH2>
      </div>
      <p>
        SMS falls under the same PECR regulation 22 test as email, so consent rules are just as strict.
        For SMS in Klaviyo, double opt-in is strongly advised, and Klaviyo gives you the tools to meet
        the requirement cleanly.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Use double opt-in features.</strong> Smart Opt-in and tap-to-text both satisfy
          double opt-in requirements.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Use the Klaviyo link shortener.</strong> Third-party shorteners break tracking and can
          trigger carrier filtering.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Include the STOP reminder.</strong> Put the opt-out reminder in the first message and
          in every fifth message after that.
        </ArticleListItem>
      </ArticleList>

      <div id="sensible-default">
        <ArticleH2>A sensible default for UK stores</ArticleH2>
      </div>
      <p>
        Pulling the performance and legal threads together gives most UK ecommerce brands a clear default
        configuration:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Double opt-in on for cold lists.</strong> Newsletter and prospect lists need explicit
          consent anyway, and confirmation protects your deliverability while proving consent quality.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Soft opt-in for existing customers.</strong> Rely on the documented soft opt-in for
          people who have actually purchased — always with an opt-out offered at checkout and in every
          send.
        </ArticleListItem>
      </ArticleList>
      <p>
        This is not a compromise between compliance and growth. It aligns them: your highest-intent
        audience flows in with the least friction, your cold list stays clean and defensible, and your
        consent records hold up under ICO scrutiny. Set it up this way once, keep the two populations
        apart, and you never have to choose between a healthy list and a lawful one.
      </p>
    </ArticleLayout>
  );
}
