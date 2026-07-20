import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "Klaviyo Single vs Double Opt-In: What UK Ecommerce Brands Should Use for GDPR and PECR Compliance";
const DESCRIPTION = "How UK ecommerce brands should configure Klaviyo opt-in settings to stay PECR and UK GDPR compliant while protecting deliverability.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-single-vs-double-opt-in-uk-gdpr";

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
  { id: "what-the-setting-does", label: "What opt-in actually does in Klaviyo" },
  { id: "uk-legal-framework", label: "The UK legal framework: PECR, UK GDPR, DPA 2018" },
  { id: "ico-double-opt-in", label: "What the ICO says about double opt-in" },
  { id: "soft-opt-in", label: "The soft opt-in: the exception ecommerce brands miss" },
  { id: "deliverability", label: "Deliverability and list-quality trade-offs" },
  { id: "sms", label: "SMS is a different rulebook" },
  { id: "how-to-configure", label: "How to change the setting in Klaviyo" },
  { id: "recommendation", label: "What UK ecommerce brands should actually do" },
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

export default function KlaviyoSingleVsDoubleOptInUkGdprPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Single or double opt-in is one of the first decisions a new Klaviyo user has to make, and most people
        treat it as a growth question. For UK ecommerce brands it is also a legal one. The setting you choose
        affects who lands on your list, how many active profiles Klaviyo bills you for, and whether you can prove
        valid consent if the ICO ever asks.
      </p>
      <p>
        This guide covers what the setting does inside Klaviyo, how UK law shapes the choice, and how to configure
        your account so you stay compliant without quietly wrecking your deliverability.
      </p>

      <TableOfContents />

      <div id="what-the-setting-does">
        <ArticleH2>What opt-in actually does in Klaviyo</ArticleH2>
      </div>
      <p>
        Double opt-in is a confirmation step. When someone signs up, Klaviyo sends a confirmation message
        immediately, and the subscriber is only added to the list and queued for your welcome series once they
        confirm. If they never click, they never join. Single opt-in skips this — the subscriber is added the moment
        they submit the form.
      </p>
      <p>
        The setting is controlled at the list level, not just globally. This trips people up: changing your account
        default does not retroactively update existing lists. New lists are created using whatever your account
        default is at the time, but each list carries its own opt-in process from then on. That means you can run
        different opt-in behaviour on different lists — useful when some sources are already verified and others are
        not.
      </p>

      <div id="uk-legal-framework">
        <ArticleH2>The UK legal framework: PECR, UK GDPR, DPA 2018</ArticleH2>
      </div>
      <p>
        UK businesses sending marketing email operate under three overlapping pieces of legislation: UK GDPR, the
        Privacy and Electronic Communications Regulations 2003 (PECR), and the Data Protection Act 2018. In practice,
        PECR is the day-to-day rulebook governing whether you can legally send a marketing email, while UK GDPR sets
        the standard for what valid consent actually looks like.
      </p>
      <p>
        Under PECR Regulation 22, you must not send marketing emails or texts to individual subscribers without
        specific consent, unless the soft opt-in exception applies. "Individual subscribers" is broader than most
        brands assume — it covers personal Gmail and Hotmail addresses, sole traders, and some partnerships, which
        is the overwhelming majority of a consumer ecommerce list.
      </p>
      <p>
        UK GDPR Article 4(11) defines consent as a "freely given, specific, informed and unambiguous" indication
        given by a "clear affirmative action". That definition rules out several common capture tactics:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Pre-ticked boxes.</strong> Invalid — the user has to take the affirmative action themselves.</ArticleListItem>
        <ArticleListItem><strong>Silence or inactivity.</strong> Not consent. Failing to opt out is not opting in.</ArticleListItem>
        <ArticleListItem><strong>Consent bundled into checkout T&amp;Cs.</strong> Invalid, because it is neither specific nor freely given.</ArticleListItem>
      </ArticleList>
      <ArticleQuote>
        Legitimate interests cannot be used as the lawful basis to justify sending unsolicited marketing emails to
        individuals under PECR. For B2C email, it is consent or the soft opt-in — nothing else.
      </ArticleQuote>

      <div id="ico-double-opt-in">
        <ArticleH2>What the ICO says about double opt-in</ArticleH2>
      </div>
      <p>
        The ICO does not strictly mandate double opt-in. But its April 2026 guidance describes double opt-in as
        "strong evidence of valid consent", because it reduces the risk of bot signups, typos, and malicious
        signups. For brands in regulated sectors, it has effectively become the de facto standard.
      </p>
      <p>
        The same guidance reinforces two obligations that matter regardless of which opt-in you choose. First,
        consent records must be clear, unambiguous, and retrievable. Second, the unsubscribe option must be as easy
        to use as the original opt-in. If you lean toward single opt-in, you carry the burden of proof — which means
        keeping a strong audit trail.
      </p>
      <ArticleList>
        <ArticleListItem><strong>Timestamp and method.</strong> Log every consent decision and opt-out with the date and how it happened (link click, STOP reply, form submission).</ArticleListItem>
        <ArticleListItem><strong>Campaign or source ID.</strong> Record which form or campaign captured the consent.</ArticleListItem>
        <ArticleListItem><strong>Versioned wording.</strong> Retain the exact wording shown at the point of capture, versioned so you can prove what the subscriber agreed to.</ArticleListItem>
        <ArticleListItem><strong>Opt-out evidence.</strong> Keep proof that a clear unsubscribe mechanism appeared in every message.</ArticleListItem>
      </ArticleList>

      <div id="soft-opt-in">
        <ArticleH2>The soft opt-in: the exception ecommerce brands miss</ArticleH2>
      </div>
      <p>
        PECR Regulation 22(3) is the most misunderstood provision — and the most relevant to ecommerce. It lets you
        email existing customers about similar products and services without separate consent, provided every
        condition is met.
      </p>
      <ArticleList>
        <ArticleListItem><strong>Obtained during a sale.</strong> You collected the email in the course of a sale, or negotiations for a sale. A completed checkout can qualify; a competition entry or a plain newsletter signup usually does not.</ArticleListItem>
        <ArticleListItem><strong>Your own similar products.</strong> The marketing must be for your own similar products or services — not third parties or affiliates.</ArticleListItem>
        <ArticleListItem><strong>A clear opt-out throughout.</strong> You gave a clear opportunity to opt out both when the details were first collected and in every subsequent message.</ArticleListItem>
      </ArticleList>
      <p>
        The soft opt-in cannot be used for bought-in or rented lists, scraped emails, or marketing on behalf of
        third parties. PECR sets no hard time limit, but ICO guidance suggests contacts should be "reasonably
        recent" — roughly two years is a fair benchmark for most consumer relationships.
      </p>
      <p>
        This distinction should shape how you structure your Klaviyo lists. Keep explicitly consented subscribers
        separate from existing customers being marketed under the soft opt-in. The two groups have different lawful
        bases and different evidence requirements, and blurring them makes your entire list harder to defend.
      </p>

      <div id="deliverability">
        <ArticleH2>Deliverability and list-quality trade-offs</ArticleH2>
      </div>
      <p>
        The commercial trade-off is straightforward. Single opt-in adds subscribers immediately, so the list grows
        faster — but it also lets in bots, fake emails, spam traps, and mistyped addresses. Those inflate your
        profile count, which matters because Klaviyo bills on active profiles, and they drag down deliverability.
      </p>
      <p>
        Double opt-in produces a smaller list, but because every contact took two deliberate actions, intent is
        higher. That typically shows up as better open rates, click-through rates, and inbox placement. Unconfirmed
        profiles are not billed as active contacts, so you are not paying for people who never confirmed.
      </p>
      <ArticleQuote>
        A smaller list of people who confirmed twice will almost always outperform a bigger list padded with
        typos and bots — on revenue, on deliverability, and on cost.
      </ArticleQuote>
      <p>
        A pragmatic approach is to test single opt-in for a defined window — anywhere from one week to a month
        depending on your signup volume — and revert to double opt-in if spam or fake profiles start appearing.
        Whichever setting you run, apply these guardrails:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Run a sunset flow.</strong> Use a list-cleaning or sunset flow to suppress unengaged contacts before they harm your sender reputation.</ArticleListItem>
        <ArticleListItem><strong>Use region-based forms.</strong> Show GDPR-compliant opt-in checkboxes specifically to UK and EU visitors.</ArticleListItem>
        <ArticleListItem><strong>Separate email and SMS consent.</strong> Consent must be specific to each channel — never bundle them into one tick.</ArticleListItem>
        <ArticleListItem><strong>Identify yourself and offer an easy unsubscribe.</strong> Every message needs a clear sender identity and a simple opt-out.</ArticleListItem>
      </ArticleList>

      <div id="sms">
        <ArticleH2>SMS is a different rulebook</ArticleH2>
      </div>
      <p>
        Do not carry your email decision straight across to SMS. Single opt-in is not recommended for text
        marketing. Double opt-in — or Klaviyo's Smart Opt-in, a two-step process where the visitor enters their
        phone number and then inputs a one-time code — is required by some carriers. This is particularly true for
        abandoned cart messages in the US and Canada.
      </p>
      <p>
        Because consent has to be specific to each channel under UK GDPR anyway, treat SMS as its own capture and
        its own list. A subscriber agreeing to email is not agreeing to texts, and vice versa.
      </p>

      <div id="how-to-configure">
        <ArticleH2>How to change the setting in Klaviyo</ArticleH2>
      </div>
      <p>
        The opt-in process is set per list. To switch a list to single opt-in:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Open the list.</strong> Click into the specific list you want to change.</ArticleListItem>
        <ArticleListItem><strong>Go to Settings.</strong> Open the list's Settings tab.</ArticleListItem>
        <ArticleListItem><strong>Find Opt-in Process.</strong> Locate the "Opt-in Process" section.</ArticleListItem>
        <ArticleListItem><strong>Select Single Opt-In.</strong> Choose the single opt-in option.</ArticleListItem>
        <ArticleListItem><strong>Save.</strong> Click Update List Settings to apply the change.</ArticleListItem>
      </ArticleList>
      <p>
        Remember that this only affects the list you are editing. Changing the account default does not update lists
        that already exist — you have to set each one individually. New lists inherit the account default at the
        moment they are created.
      </p>
      <p>
        One more scenario worth flagging: if a third-party signup tool such as OptinMonster, Justuno, or Privy
        already verifies subscribers or applies its own confirmation step, single opt-in in Klaviyo is often the
        sensible choice. Stacking Klaviyo's double opt-in on top of an already-verified source just adds redundant
        friction and costs you subscribers who already proved intent.
      </p>

      <div id="recommendation">
        <ArticleH2>What UK ecommerce brands should actually do</ArticleH2>
      </div>
      <p>
        For most UK ecommerce brands capturing email through their own forms, double opt-in is the safer default. It
        gives you the ICO's "strong evidence of valid consent", keeps bots and typos off your paid profile count,
        and protects deliverability by ensuring every contact wanted to be there. The smaller list is a feature, not
        a cost.
      </p>
      <p>
        Single opt-in earns its place in specific cases: when an upstream tool already verifies subscribers, or when
        you run a controlled test and monitor for spam. If you do run single opt-in, treat the audit trail as
        non-negotiable — timestamps, method, source, versioned wording, and opt-out evidence — because you are the
        one who has to prove consent later.
      </p>
      <p>
        And keep your soft opt-in customers structured separately from your consented subscribers. The two are
        governed differently, evidenced differently, and time-limited differently. Get the list architecture right
        and the compliance follows. Get it wrong and no opt-in setting will save you.
      </p>
    </ArticleLayout>
  );
}
