import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "Abandoned Cart Emails: Setup and Best Practices";
const DESCRIPTION =
  "How to set up an abandoned cart flow that actually recovers lost sales — timing, content and the mistakes that quietly kill conversion.";
const CATEGORY = "Flows";
const SLUG = "abandoned-cart-email";

export const meta = () =>
  getArticleMeta({ title: TITLE, description: DESCRIPTION, slug: SLUG });

// Only articles with a real prerendered route — see src/routes.ts.
const RELATED = [
  { slug: "welcome-email-series", title: "How to build a welcome email series that converts" },
  { slug: "what-is-klaviyo", title: "What is Klaviyo and why ecommerce brands use it" },
];

const SECTIONS = [
  { id: "what-is-it", label: "What is an abandoned cart email?" },
  { id: "why-carts-abandoned", label: "Why people abandon carts" },
  { id: "the-flow", label: "How to structure the flow" },
  { id: "timing", label: "Timing: when to send each email" },
  { id: "content", label: "What each email should contain" },
  { id: "discounts", label: "Discounting in cart recovery" },
  { id: "sms", label: "Adding SMS to the flow" },
  { id: "measuring", label: "Measuring whether it's working" },
  { id: "mistakes", label: "Common mistakes" },
  { id: "faq", label: "FAQ" },
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

export default function AbandonedCartEmailPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Most ecommerce stores lose the majority of their carts before
        checkout completes. That sounds alarming until you realise it's also
        an opportunity: a well-built abandoned cart flow is one of the
        highest-converting, fastest-to-implement automations in ecommerce
        email, because it targets people who got within a few clicks of
        buying and simply didn't finish.
      </p>
      <p>
        This guide covers how to set one up properly — the structure, the
        timing, what to actually say, and where discounting helps versus
        where it just erodes margin.
      </p>

      <TableOfContents />

      <div id="what-is-it">
        <ArticleH2>What is an abandoned cart email?</ArticleH2>
      </div>
      <p>
        An abandoned cart email is an automated message sent to someone who
        added a product to their cart but left the site without completing
        checkout. It's triggered by a specific event — usually "Started
        Checkout" or "Added to Cart" without a follow-up order — and reminds
        the shopper what they left behind, with a direct link back to
        finish.
      </p>
      <p>
        It's distinct from a browse abandonment email, which targets people
        who viewed products but never actually added
        anything to a cart. Cart abandonment is further down the funnel and
        typically converts at a noticeably higher rate, since intent is
        stronger.
      </p>

      <div id="why-carts-abandoned">
        <ArticleH2>Why people abandon carts</ArticleH2>
      </div>
      <p>
        Understanding the reasons matters because it shapes what your emails
        should actually say. Common causes include:
      </p>
      <ArticleList>
        <ArticleListItem>Unexpected costs at checkout — shipping fees or taxes added late.</ArticleListItem>
        <ArticleListItem>Being asked to create an account before they can pay.</ArticleListItem>
        <ArticleListItem>Comparison shopping — they added to cart to save the item, with no intent to buy immediately.</ArticleListItem>
        <ArticleListItem>A slow or confusing checkout process, especially on mobile.</ArticleListItem>
        <ArticleListItem>Simple distraction — they got interrupted and never came back.</ArticleListItem>
      </ArticleList>
      <p>
        A good recovery flow addresses several of these at once: it brings
        the shopper back, reassures them about cost and process, and gives
        them a frictionless way to finish what they started.
      </p>

      <div id="the-flow">
        <ArticleH2>How to structure the flow</ArticleH2>
      </div>
      <p>
        A typical, well-performing abandoned cart flow has two to three
        emails:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Email 1 — The reminder.</strong> Simple and direct: "you
          left something behind", with a clear image of the product and a
          one-click link back to checkout.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 2 — Reassurance and proof.</strong> Address common
          hesitations — reviews, your returns policy, delivery times — and
          reinforce why the product is worth completing the purchase for.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 3 — The final nudge.</strong> A last reminder, often
          paired with a modest incentive or a note that stock is limited, if
          genuinely true.
        </ArticleListItem>
      </ArticleList>
      <p>
        Anyone who completes their order at any point should exit the flow
        immediately and move into your post-purchase sequence instead.
      </p>

      <div id="timing">
        <ArticleH2>Timing: when to send each email</ArticleH2>
      </div>
      <p>
        Timing has a direct, measurable effect on recovery rate. A common,
        effective cadence:
      </p>
      <ArticleList>
        <ArticleListItem>Email 1: 1 hour after abandonment — while the product is still front of mind.</ArticleListItem>
        <ArticleListItem>Email 2: 24 hours after abandonment.</ArticleListItem>
        <ArticleListItem>Email 3: 48–72 hours after abandonment.</ArticleListItem>
      </ArticleList>
      <p>
        Sending the first email too quickly — within minutes — can feel
        intrusive. Waiting more than a few hours, on the other hand, means
        you're competing with a fading memory of the product and a cooling
        sense of urgency.
      </p>

      <div id="content">
        <ArticleH2>What each email should contain</ArticleH2>
      </div>
      <ArticleH3>The essentials</ArticleH3>
      <p>
        Every cart recovery email needs the same core elements: an image of
        the exact product left behind, the price, and a single, obvious
        button back to checkout — ideally pre-filled with their cart intact
        so there's zero friction to finishing.
      </p>
      <ArticleH3>Subject lines that work</ArticleH3>
      <p>
        Direct framing tends to outperform cute or vague subject lines for
        this flow — something like "you left this behind" or naming the
        product directly. People recognise the context instantly, which
        drives the open.
      </p>
      <ArticleH3>Building trust in the second email</ArticleH3>
      <p>
        If someone didn't convert off the first reminder, repeating the same
        message rarely changes the outcome. The second email should add
        something new — a review, a guarantee, an answer to a likely
        objection — rather than just resending the same reminder with louder
        urgency.
      </p>

      <ArticleQuote>
        The goal isn't to chase the sale harder. It's to remove whatever
        actually stopped it happening the first time.
      </ArticleQuote>

      <div id="discounts">
        <ArticleH2>Discounting in cart recovery</ArticleH2>
      </div>
      <p>
        A discount can lift recovery rates, but it's not always the right
        lever. If someone abandoned because of price sensitivity, a discount
        directly solves their objection. If they abandoned because of
        distraction or a slow checkout, a discount is unnecessary margin lost
        — the reminder alone would have worked.
      </p>
      <p>
        A reasonable approach: skip the discount in email one, and reserve it
        for email two or three if you choose to use one at all. That way
        you're only discounting the shoppers who genuinely needed the extra
        push, not every cart that would have converted anyway.
      </p>

      <div id="sms">
        <ArticleH2>Adding SMS to the flow</ArticleH2>
      </div>
      <p>
        For shoppers who've opted in to SMS, a short text — sent slightly
        ahead of or alongside the first email — can capture attention faster,
        since open rates for SMS are typically much higher than email. Keep
        it brief: a one-line reminder and a link is enough. Make sure
        whatever platform you're using has explicit, compliant opt-in for
        SMS before adding it to the flow.
      </p>
      <p>
        SMS works best as a complement to the email sequence rather than a
        replacement for it — not every subscriber opts in, and the two
        channels tend to reach people at slightly different moments. A
        shopper who ignores an email might still glance at a text, and vice
        versa, so running both gives the flow more total surface area
        without meaningfully increasing the effort to maintain it.
      </p>

      <div id="measuring">
        <ArticleH2>Measuring whether it's working</ArticleH2>
      </div>
      <p>
        Two numbers matter more than any others for this flow: recovery rate
        (the share of abandoned carts that go on to convert within the flow's
        window) and revenue per recipient. Open and click rates are useful
        diagnostics, but they don't tell you whether the flow is actually
        making money — a high open rate with a low recovery rate usually
        points to a problem in the offer or the checkout experience, not the
        subject line.
      </p>
      <p>
        It's worth reviewing performance email-by-email rather than at the
        flow level alone. If email one is converting well but email two and
        three are barely opened, the gap is probably in subject lines or send
        timing rather than content. If all three are opened but recovery
        stays flat, the issue is more likely friction in checkout itself —
        worth testing on a phone, end to end, every few months as your site
        changes.
      </p>
      <p>
        Most platforms, Klaviyo included, will show attributed revenue per
        flow and per individual email. Check this monthly rather than
        weekly — cart recovery data is noisy at small sample sizes, and
        over-reacting to a single bad week tends to do more harm than good.
      </p>

      <div id="mistakes">
        <ArticleH2>Common mistakes</ArticleH2>
      </div>
      <ArticleH3>Sending only one email</ArticleH3>
      <p>
        A single reminder recovers some sales, but a lot of the additional
        recovery happens in emails two and three, where objections get
        addressed rather than just repeated reminders.
      </p>
      <ArticleH3>Leading with a discount every time</ArticleH3>
      <p>
        Training shoppers to expect a code if they abandon their cart creates
        an incentive to abandon on purpose. Reserve discounting for later in
        the sequence, not the opening message.
      </p>
      <ArticleH3>Not excluding completed orders</ArticleH3>
      <p>
        If your flow isn't set up to exit someone the moment they complete
        checkout, you'll send "come back and buy this" emails to people who
        already bought — a fast way to look careless.
      </p>
      <ArticleH3>Forgetting mobile checkout friction</ArticleH3>
      <p>
        If the email links back to a checkout that's slow or clunky on
        mobile, you're recovering attention only to lose it again at the
        finish line. Fixing checkout friction is sometimes more impactful
        than the email itself.
      </p>

      <div id="faq">
        <ArticleH2>Frequently asked questions</ArticleH2>
      </div>
      <ArticleH3>How much revenue can an abandoned cart flow recover?</ArticleH3>
      <p>
        It varies by store and average order value, but for most ecommerce
        brands it's consistently one of the top three flows by revenue
        contribution, alongside the welcome series and post-purchase flow.
      </p>
      <ArticleH3>Should I use one email or a full sequence?</ArticleH3>
      <p>
        A sequence of two to three emails generally outperforms a single
        send, since later emails catch shoppers who didn't respond to the
        first reminder for a different reason.
      </p>
      <ArticleH3>Does this work the same way for browse abandonment?</ArticleH3>
      <p>
        The mechanics are similar, but intent is lower since no item was
        added to cart, so the messaging needs to work harder to re-establish
        interest.
      </p>
      <ArticleH3>What if my emails aren't landing in the inbox?</ArticleH3>
      <p>
        Recovery flows are only as good as their deliverability. If opens
        are unexpectedly low across the board, check your sender
        authentication (SPF, DKIM, DMARC) first.
      </p>

      <ArticleH2>Conclusion</ArticleH2>
      <p>
        Abandoned cart emails work because they reach people at the point of
        highest intent in the entire customer journey — someone who was
        seconds away from buying. Get the timing, content and discount
        strategy right, and this single flow can become one of the most
        reliable revenue sources in your entire email programme, running
        quietly in the background for every cart that doesn't convert the
        first time.
      </p>
    </ArticleLayout>
  );
}
