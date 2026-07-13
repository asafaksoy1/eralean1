import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "Klaviyo Single vs Double Opt-In: What UK Ecommerce Brands Should Choose Under GDPR and PECR";
const DESCRIPTION = "How UK ecommerce brands should choose between single and double opt-in in Klaviyo, with PECR, soft opt-in and deliverability guidance.";
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
  { id: "what-the-setting-does", label: "What the opt-in setting actually does" },
  { id: "the-trade-off", label: "The practical trade-off" },
  { id: "which-to-choose", label: "Which one should you choose?" },
  { id: "how-to-change-it", label: "How to change the setting in Klaviyo" },
  { id: "legal-layer", label: "The legal layer: PECR and UK GDPR" },
  { id: "soft-opt-in", label: "The UK soft opt-in advantage" },
  { id: "enforcement", label: "What the ICO is enforcing" },
  { id: "implementation", label: "Implementing it properly in Klaviyo" },
  { id: "sms", label: "SMS is a separate case" },
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
        Single versus double opt-in looks like a simple toggle inside Klaviyo. It is
        not. The choice shapes how fast your list grows, how clean it stays, how well
        your emails land in the inbox, and — for UK brands specifically — it sits
        alongside a set of legal obligations that carry fines of up to £17.5 million.
        Get the mechanics right and the law wrong, and a bigger list becomes a bigger
        liability.
      </p>
      <p>
        This guide covers both halves: how the Klaviyo setting behaves, which option
        fits your brand, and how PECR, UK GDPR and the soft opt-in exception decide
        what you are actually allowed to send.
      </p>

      <TableOfContents />

      <div id="what-the-setting-does">
        <ArticleH2>What the opt-in setting actually does</ArticleH2>
      </div>
      <p>
        Klaviyo sets opt-in behaviour at the list level, and by default it uses double
        opt-in. With double opt-in, anyone who subscribes receives a confirmation
        message immediately after signing up. Only those who click to confirm are added
        to the list and queued for a welcome series. Everyone else is held as an
        unconfirmed, empty profile — and crucially, those profiles are not billed as
        active contacts.
      </p>
      <p>
        A few behaviours are worth knowing before you change anything:
      </p>
      <ArticleList>
        <ArticleListItem><strong>List imports skip confirmation.</strong> Uploading a list does not trigger double opt-in, so imported contacts are added directly.</ArticleListItem>
        <ArticleListItem><strong>The setting is per list, not global.</strong> Many brands run double opt-in on a main newsletter and single opt-in on time-sensitive promotions or event registrations.</ArticleListItem>
        <ArticleListItem><strong>It is reversible.</strong> You can switch back and forth, though free-plan accounts cannot move from double to single, and some paid accounts need to contact Klaviyo support.</ArticleListItem>
      </ArticleList>

      <div id="the-trade-off">
        <ArticleH2>The practical trade-off</ArticleH2>
      </div>
      <p>
        Single opt-in grows the list faster and gives a smoother journey. Nobody has to
        find and click a confirmation email, which matters when someone signs up for a
        coupon and expects it immediately — you can push them straight into the welcome
        flow. The cost is quality. Anyone can enter any address, so bots, fake emails,
        spam traps and mistyped addresses all land on your list. That inflates your
        subscriber count, raises your bill (Klaviyo charges on active profiles), and
        drags down deliverability.
      </p>
      <p>
        Double opt-in produces a smaller but more engaged list. Because each subscriber
        took two actions, they signal higher intent, which typically lifts open rates,
        click-through rates and deliverability. The filter removes fake and low-intent
        sign-ups before they ever cost you. The drawback is real: some genuine
        subscribers never confirm — they miss the email, forget, or don't recognise it —
        so you lose contacts you actually wanted.
      </p>
      <ArticleQuote>
        Single opt-in optimises for growth and speed. Double opt-in optimises for list
        quality and deliverability. Neither is "correct" — the right answer depends on
        how healthy your sending reputation already is.
      </ArticleQuote>

      <div id="which-to-choose">
        <ArticleH2>Which one should you choose?</ArticleH2>
      </div>
      <p>
        Industry consensus is that most brands can safely use single opt-in — provided
        they actively monitor deliverability and run consistent list-cleaning and sunset
        automations. The single-opt-in growth advantage is worth having when your sender
        reputation is solid and your list hygiene is disciplined.
      </p>
      <p>
        Switch to double opt-in when the signals turn against you:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Deliverability declines.</strong> Falling inbox placement or rising bounces means low-quality addresses are entering the list.</ArticleListItem>
        <ArticleListItem><strong>A suspicious sign-up spike appears.</strong> Sudden volume is a classic sign of bot activity, and double opt-in filters it out.</ArticleListItem>
        <ArticleListItem><strong>You have a history of deliverability problems.</strong> If your reputation is already fragile, protect it with the stricter setting.</ArticleListItem>
      </ArticleList>
      <p>
        There is one common exception. If a third-party form or popup tool already
        includes its own confirmation step, use single opt-in in Klaviyo — otherwise
        subscribers receive two confirmation messages and drop off in frustration.
      </p>

      <div id="how-to-change-it">
        <ArticleH2>How to change the setting in Klaviyo</ArticleH2>
      </div>
      <p>
        The path is short. Go to <strong>Lists &amp; Segments</strong>, select the
        specific list, open <strong>Settings</strong>, and toggle Double Opt-in on or
        off. Remember the account-level constraints: free-plan accounts cannot switch
        from double to single opt-in, and some paid accounts will need to contact
        Klaviyo support to unlock the change. Because the setting is per list, you can
        make different choices for your newsletter and your promotional lists without
        affecting each other.
      </p>

      <div id="legal-layer">
        <ArticleH2>The legal layer: PECR and UK GDPR</ArticleH2>
      </div>
      <p>
        Here is the point most guides miss. Opt-in mechanics are a deliverability
        decision. Lawful basis is a legal decision. They are separate, and picking
        single or double opt-in in Klaviyo does not, on its own, make your marketing
        legal.
      </p>
      <p>
        Two frameworks apply. The Privacy and Electronic Communications Regulations 2003
        (PECR), specifically Regulation 22, determines <em>when</em> consent is required
        for electronic mail marketing — which explicitly includes both email and SMS. UK
        GDPR, sitting with the Data Protection Act 2018, defines the <em>quality</em> of
        that consent.
      </p>
      <p>
        Under UK GDPR, consent must be freely given, specific, informed and unambiguous,
        given by a clear affirmative action. That rules out several things brands still
        do:
      </p>
      <ArticleList>
        <ArticleListItem><strong>No pre-ticked boxes.</strong> Silence, inactivity and default opt-ins do not count as consent.</ArticleListItem>
        <ArticleListItem><strong>No bundled consent.</strong> You cannot fold marketing consent into checkout terms and conditions.</ArticleListItem>
        <ArticleListItem><strong>Consent is channel-specific.</strong> If you want to send both email and SMS, you must ask for each separately.</ArticleListItem>
      </ArticleList>
      <p>
        For anyone who has never purchased — newsletter sign-ups, guide downloads, cart
        abandoners who never bought — you need explicit affirmative consent before
        sending any marketing email.
      </p>

      <div id="soft-opt-in">
        <ArticleH2>The UK soft opt-in advantage</ArticleH2>
      </div>
      <p>
        The UK's distinctive advantage is the soft opt-in — a PECR exception that lets
        you email or text your own existing customers about similar products or services
        without collecting fresh consent. It only applies when all of these conditions
        are met:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Details obtained in a sale.</strong> You collected the contact details during a sale, or the negotiation of a sale.</ArticleListItem>
        <ArticleListItem><strong>Similar products only.</strong> You are marketing your own similar products or services — not unrelated lines.</ArticleListItem>
        <ArticleListItem><strong>Opt-out offered every time.</strong> You gave a clear chance to opt out when you first collected the details, and in every message since.</ArticleListItem>
      </ArticleList>
      <p>
        The limits matter as much as the permission. The soft opt-in does not apply to
        prospects, bought-in or rented third-party lists, or publicly available
        addresses. And it is a PECR mechanism, not a UK GDPR lawful basis — legitimate
        interests cannot replace consent for unsolicited B2C marketing email.
      </p>
      <ArticleQuote>
        The soft opt-in covers your existing customers and your similar products. Step
        outside either boundary and you are back to needing explicit consent.
      </ArticleQuote>

      <div id="enforcement">
        <ArticleH2>What the ICO is enforcing</ArticleH2>
      </div>
      <p>
        This is not theoretical. ICO enforcement across 2024–2026 has repeatedly
        targeted the same failures: soft opt-in misuse (retailers emailing customers
        about unrelated products), the use of purchased lists, and failure to honour
        unsubscribes — often caused by data syncs quietly overwriting suppression lists.
      </p>
      <p>
        The penalties are serious enough to demand attention. PECR fines are capped at
        £500,000, while UK GDPR fines can reach £17.5 million or 4% of global annual
        turnover. A single incident can trigger both regimes at once. Treating consent
        records as an afterthought is a genuine financial risk, not a compliance nicety.
      </p>

      <div id="implementation">
        <ArticleH2>Implementing it properly in Klaviyo</ArticleH2>
      </div>
      <p>
        Whichever opt-in setting you choose, the compliance work sits on top of it.
        These are the practical steps for a UK ecommerce brand:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Separate mechanics from lawful basis.</strong> Single or double opt-in does not satisfy PECR — you still need valid consent or a valid soft opt-in either way.</ArticleListItem>
        <ArticleListItem><strong>Keep clean, retrievable consent records.</strong> Capture timestamp, IP address, form source and the exact consent wording. The April 2026 ICO guidance stresses that records must be clear, unambiguous and retrievable — and that unsubscribing must be as easy as opting in.</ArticleListItem>
        <ArticleListItem><strong>Start every opt-in box unchecked.</strong> Consent has to be a conscious affirmative action on checkout and signup forms.</ArticleListItem>
        <ArticleListItem><strong>Honour opt-outs promptly.</strong> Include a clear unsubscribe in every message. Klaviyo processes suppressions in real time — protect that by making sure no data sync overwrites it.</ArticleListItem>
        <ArticleListItem><strong>Run a regular sunset flow.</strong> A consistent list-cleaning automation protects deliverability, and it is essential if you use single opt-in.</ArticleListItem>
      </ArticleList>

      <div id="sms">
        <ArticleH2>SMS is a separate case</ArticleH2>
      </div>
      <p>
        For SMS, single opt-in is not on the table. Klaviyo requires SMS subscribers to
        complete double opt-in by confirming with a reply such as "YES" — a requirement
        of some carriers. Under UK PECR, SMS is treated as electronic mail, so the same
        consent and soft opt-in rules apply, including a simple STOP opt-out in every
        message.
      </p>
      <p>
        One UK-specific quirk: Klaviyo's SMS branded sender IDs, available in the UK and
        Australia, cannot receive replies, so the STOP keyword mechanism works
        differently than it does in the US. Build your SMS opt-out flow around that
        constraint rather than assuming the American setup carries over.
      </p>
      <p>
        Choose single opt-in when you are confident in your list hygiene and want the
        growth; choose double opt-in when deliverability or bot activity tells you the
        list needs protecting. But treat the Klaviyo toggle as the easy part. The
        decision that carries the real consequences is whether every address on your
        list has a lawful basis behind it — because that is the one the ICO will ask you
        to prove.
      </p>
    </ArticleLayout>
  );
}
