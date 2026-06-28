import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Build a Welcome Email Series That Converts";
const DESCRIPTION =
  "A practical guide to structuring a welcome flow that turns new subscribers into first-time buyers — emails, timing and triggers included.";
const CATEGORY = "Flows";
const SLUG = "welcome-email-series";

export const meta = () =>
  getArticleMeta({ title: TITLE, description: DESCRIPTION, slug: SLUG });

const RELATED = [
  { slug: "abandoned-cart-email", title: "Abandoned cart emails: setup and best practices" },
  { slug: "post-purchase-email", title: "Post-purchase email flows that drive repeat sales" },
  { slug: "what-is-klaviyo", title: "What is Klaviyo and why ecommerce brands use it" },
  { slug: "email-segmentation", title: "Email segmentation strategies for ecommerce" },
  { slug: "email-subject-lines", title: "How to write email subject lines that get opened" },
];

const SECTIONS = [
  { id: "why-it-matters", label: "Why the welcome series matters" },
  { id: "anatomy", label: "Anatomy of a welcome series" },
  { id: "email-by-email", label: "Email-by-email breakdown" },
  { id: "timing", label: "Timing and triggers" },
  { id: "discounts", label: "Should you offer a discount?" },
  { id: "examples", label: "Examples of strong welcome emails" },
  { id: "measuring", label: "Measuring performance" },
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

export default function WelcomeEmailSeriesPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        A welcome series is the first thing a new subscriber experiences from
        your brand by email — and for most stores, it's also the single
        highest-converting flow they run. People who've just signed up are at
        the peak of their interest in you. A well-built welcome series meets
        that interest with the right message, at the right moment, before it
        fades.
      </p>
      <p>
        This guide walks through how to structure one properly: how many
        emails, what each one should say, when to send them, and whether a
        discount actually helps or just trains people to wait for one.
      </p>

      <TableOfContents />

      <div id="why-it-matters">
        <ArticleH2>Why the welcome series matters</ArticleH2>
      </div>
      <p>
        New subscribers convert at a higher rate than almost any other
        segment you'll ever email. They've just told you, explicitly, that
        they're interested. The welcome series is your chance to act on that
        interest while it's still warm — most of it fades within days, not
        weeks.
      </p>
      <p>
        It's also one of the few flows that runs entirely on autopilot once
        built. Set it up properly once, and every new subscriber gets the
        same well-considered introduction to your brand, indefinitely,
        without anyone having to remember to send anything.
      </p>

      <div id="anatomy">
        <ArticleH2>Anatomy of a welcome series</ArticleH2>
      </div>
      <p>
        A welcome series isn't one email — it's a short sequence, usually
        three to five emails, each with a distinct job:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Email 1 — Introduce.</strong> Confirm the sign-up, deliver
          any promised incentive, and set expectations for what they'll
          receive from you.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 2 — Build trust.</strong> Tell them who you are, why
          you exist, and what makes the product different. This is where
          brand story does real work.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 3 — Show proof.</strong> Reviews, results, or
          bestsellers — third-party validation that reduces the risk of a
          first purchase.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 4 — Remove friction.</strong> Answer the objections
          that stop people buying: shipping cost, returns policy, sizing,
          ingredients — whatever's specific to your product.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Email 5 — Create urgency.</strong> A clear, time-bound
          nudge to act, especially if there's an incentive that's about to
          expire.
        </ArticleListItem>
      </ArticleList>
      <p>
        Not every store needs all five. A simpler product with a lower price
        point might convert fine with three; a considered purchase with a
        longer decision cycle benefits from the full sequence.
      </p>

      <div id="email-by-email">
        <ArticleH2>Email-by-email breakdown</ArticleH2>
      </div>
      <ArticleH3>Email 1: the welcome</ArticleH3>
      <p>
        Keep it short. Thank them for signing up, deliver the discount code
        or incentive if you offered one, and set a clear next step — usually
        a link to your bestsellers or a flagship product. This email
        typically gets the highest open rate of the entire series, so it's
        worth keeping the design clean and the call to action obvious.
      </p>
      <ArticleH3>Email 2: your story</ArticleH3>
      <p>
        This is brand-building, not selling. Why does the company exist, what
        problem does it solve, what's the founder story if there is one worth
        telling. People buy from brands they feel some connection to, and this
        is where that connection starts.
      </p>
      <ArticleH3>Email 3: social proof</ArticleH3>
      <p>
        Pull your strongest reviews, user-generated content, or press
        mentions. If you have a standout statistic — "94% of customers
        reorder within three months" — this is where it belongs.
      </p>
      <ArticleH3>Email 4: objection handling</ArticleH3>
      <p>
        Think about the actual reasons someone hesitates before buying from a
        brand they've never bought from before. Free returns, shipping
        times, a satisfaction guarantee, ingredient transparency — address
        whichever ones are genuinely relevant to your product.
      </p>
      <ArticleH3>Email 5: the nudge</ArticleH3>
      <p>
        If there's a discount with an expiry, this is where you remind them
        it's running out. If there isn't, this email can highlight a
        bestseller or new arrival instead — the goal is simply to give
        someone who's been warming up a clear reason to act today.
      </p>

      <div id="timing">
        <ArticleH2>Timing and triggers</ArticleH2>
      </div>
      <p>
        The trigger is straightforward: someone subscribes to your list,
        usually via a pop-up, footer form, or checkout opt-in. From there,
        spacing matters more than most people assume.
      </p>
      <ArticleList>
        <ArticleListItem>Email 1: immediately on sign-up, while intent is highest.</ArticleListItem>
        <ArticleListItem>Email 2: 1–2 days later.</ArticleListItem>
        <ArticleListItem>Email 3: 2–3 days after that.</ArticleListItem>
        <ArticleListItem>Email 4: 3–4 days after that.</ArticleListItem>
        <ArticleListItem>Email 5: 4–5 days after that, or timed to a discount's expiry.</ArticleListItem>
      </ArticleList>
      <p>
        Anyone who buys partway through the series should exit it
        automatically and move into your{" "}
        <a href="/learn/post-purchase-email">post-purchase flow</a> instead —
        nothing kills trust faster than getting a "still thinking it over?"
        email after you've already bought.
      </p>

      <div id="discounts">
        <ArticleH2>Should you offer a discount?</ArticleH2>
      </div>
      <p>
        It depends on your margins and your brand position. A discount
        genuinely does lift first-purchase conversion rates for most stores —
        but it also trains your list to expect one, which can erode full-price
        sales over time and isn't free if you're running on tight margins.
      </p>
      <p>
        Alternatives worth considering: free shipping on the first order, a
        free gift with purchase, or simply a strong enough product story that
        a discount isn't needed. If you do offer one, give it a genuine
        expiry — an "indefinite" 10% code removes the urgency that makes
        discounts work in the first place.
      </p>

      <div id="examples">
        <ArticleH2>Examples of strong welcome emails</ArticleH2>
      </div>
      <p>
        A few patterns that consistently perform well across ecommerce
        brands:
      </p>
      <ArticleH3>The single hero product</ArticleH3>
      <p>
        Rather than showing your entire catalogue, the first email focuses on
        one flagship product with a clear reason it's the right starting
        point. Less choice, less decision fatigue, higher click-through.
      </p>
      <ArticleH3>The founder note</ArticleH3>
      <p>
        A short, personal message — ideally from an actual person, with a
        photo — explaining why the brand exists. This performs especially
        well for DTC brands with a genuine founder story to tell.
      </p>
      <ArticleH3>The "what to expect" email</ArticleH3>
      <p>
        Some of the strongest-performing welcome series include a short note
        early on simply explaining what subscribers will get from being on
        the list — how often you'll email, what kind of content to expect,
        and how to adjust preferences if they'd rather hear less often. It
        sounds like a small thing, but it reduces unsubscribes later by
        setting expectations honestly upfront, rather than letting people
        discover your sending frequency by surprise.
      </p>
      <ArticleQuote>
        The welcome series isn't where you sell hardest — it's where you earn
        the right to sell at all.
      </ArticleQuote>

      <div id="measuring">
        <ArticleH2>Measuring performance</ArticleH2>
      </div>
      <p>
        The headline number to watch is revenue per recipient across the
        whole series, not just open and click rates on individual emails. A
        welcome series with strong opens but weak conversion usually means
        the content is engaging but the offer or call to action isn't
        compelling enough to move someone from "interested" to "buying".
      </p>
      <p>
        Worth tracking separately: how many people convert during the series
        versus how many convert later, after it ends. Both matter, but if
        almost nobody converts during the flow itself, it's a sign the
        sequence needs a clearer, more direct path to purchase rather than
        relying entirely on brand-building.
      </p>
      <p>
        Review performance quarterly rather than weekly. Welcome series data
        takes time to accumulate meaningful sample size, especially for
        stores with lower sign-up volume, and small short-term fluctuations
        rarely reflect anything you need to act on immediately.
      </p>

      <div id="mistakes">
        <ArticleH2>Common mistakes</ArticleH2>
      </div>
      <ArticleH3>Sending one email and stopping</ArticleH3>
      <p>
        A single "welcome, here's 10% off" email leaves most of the
        conversion opportunity on the table. The brand-building and
        objection-handling emails later in the series are doing real,
        measurable work.
      </p>
      <ArticleH3>Not exiting buyers from the flow</ArticleH3>
      <p>
        If someone converts on email two, they shouldn't keep receiving
        emails three through five aimed at convincing them to buy. Set an
        exit condition based on a completed order.
      </p>
      <ArticleH3>Making every email a hard sell</ArticleH3>
      <p>
        A series that's wall-to-wall discount codes and "buy now" reads as
        desperate rather than confident. Mix in story and proof, not just
        offers.
      </p>
      <ArticleH3>Ignoring mobile rendering</ArticleH3>
      <p>
        The majority of welcome emails are opened on a phone. Test every
        email on mobile before it goes live — see our{" "}
        <a href="/learn/email-design-best-practices">email design guide</a>{" "}
        for specifics.
      </p>

      <div id="faq">
        <ArticleH2>Frequently asked questions</ArticleH2>
      </div>
      <ArticleH3>How many emails should a welcome series have?</ArticleH3>
      <p>
        Three to five is typical. Lower-priced, impulse-buy products can work
        with fewer; higher-consideration purchases benefit from the full
        sequence to build enough trust.
      </p>
      <ArticleH3>What's a good conversion rate for a welcome series?</ArticleH3>
      <p>
        It varies widely by industry and price point, but welcome flows
        consistently convert at several times the rate of standard
        campaigns, since they're reaching people at peak interest.
      </p>
      <ArticleH3>Should the welcome series run in Klaviyo specifically?</ArticleH3>
      <p>
        It can run in any platform with flow automation, but Klaviyo's
        native store integration makes it straightforward to trigger on
        sign-up and exit automatically on purchase — see{" "}
        <a href="/learn/what-is-klaviyo">what Klaviyo is</a> for more detail.
      </p>
      <ArticleH3>Do I need a discount to make it work?</ArticleH3>
      <p>
        No. A discount helps conversion for many stores, but strong
        storytelling, clear proof and good objection handling can convert
        without one — particularly for brands where discounting would
        undermine positioning.
      </p>

      <ArticleH2>Conclusion</ArticleH2>
      <p>
        A welcome series is one of the highest-leverage flows you can build,
        because it reaches people at the exact moment they're most receptive
        to hearing from you. Get the sequence, timing and tone right once,
        and it keeps converting new subscribers indefinitely without any
        ongoing effort.
      </p>
      <p>
        The brands that get the most out of it treat each email as having a
        specific job — introduce, build trust, prove it, remove friction,
        nudge — rather than sending the same generic pitch five times in a
        row.
      </p>
    </ArticleLayout>
  );
}
