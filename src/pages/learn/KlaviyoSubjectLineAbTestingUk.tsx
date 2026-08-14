import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to A/B Test Klaviyo Email Subject Lines for Higher Open Rates";
const DESCRIPTION = "A practical guide to A/B testing subject lines in Klaviyo, with UK ecommerce benchmarks, sample sizes and step-by-step setup for campaigns and flows.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-subject-line-ab-testing-uk";

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
  { id: "why-subject-lines", label: "Why the subject line is the highest-leverage test" },
  { id: "benchmarks", label: "The 2026 UK benchmarks you're testing against" },
  { id: "setup-campaigns", label: "Setting up a campaign A/B test in Klaviyo" },
  { id: "setup-flows", label: "Testing subject lines inside flows" },
  { id: "one-variable", label: "The rules: one variable, two variations, enough time" },
  { id: "what-to-test", label: "What to actually test" },
  { id: "mpp-caveat", label: "The Apple MPP problem with open rate" },
  { id: "deliverability", label: "Deliverability: the test nobody sees" },
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

export default function KlaviyoSubjectLineAbTestingUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        The subject line is the single gatekeeper to everything that happens next. No open means no
        click, no click means no order — which makes subject-line A/B testing one of the highest-leverage,
        lowest-effort optimisations a UK ecommerce brand can run in Klaviyo. You're not rebuilding a flow
        or redesigning a template. You're changing a line of text and letting your subscribers vote.
      </p>
      <p>
        Around 35% of email marketers admit they don't test their strategy at all. That's the edge on
        offer here: disciplined testing against a relevant category baseline, set up correctly, read
        patiently. This guide covers the benchmarks worth beating, the exact setup for campaigns and
        flows, what to test, and the two things that will quietly break your results if you ignore them.
      </p>

      <TableOfContents />

      <div id="why-subject-lines">
        <ArticleH2>Why the subject line is the highest-leverage test</ArticleH2>
      </div>
      <p>
        Every downstream metric depends on the open. A brilliant email with a weak subject line never
        gets read; an average email with a strong subject line at least earns a look. Because the subject
        line sits at the top of the funnel, a small lift in open rate compounds through clicks and orders
        without you touching the creative underneath.
      </p>
      <p>
        It's also cheap to run. Klaviyo has native A/B testing built in for both campaigns and flows, so
        you're not stitching together spreadsheets or exporting data. You change one line, split your
        audience, and Klaviyo does the maths. The barrier to entry is effort and discipline, not budget.
      </p>

      <div id="benchmarks">
        <ArticleH2>The 2026 UK benchmarks you're testing against</ArticleH2>
      </div>
      <p>
        Testing against a generic average is a mistake. Klaviyo's 2026 benchmarks, drawn from over 183,000
        brands, give category-specific targets so you can judge whether your testing is actually moving the
        needle. Average campaign open rates by industry:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Clothing &amp; Accessories.</strong> 33.1% open rate, 1.83% click rate.</ArticleListItem>
        <ArticleListItem><strong>Health &amp; Beauty.</strong> 30.5% open rate, 1.24% click rate.</ArticleListItem>
        <ArticleListItem><strong>Home &amp; Garden.</strong> 32.5% open rate.</ArticleListItem>
        <ArticleListItem><strong>Jewellery.</strong> 32.5% open rate.</ArticleListItem>
        <ArticleListItem><strong>Sporting Goods.</strong> 31.9% open rate.</ArticleListItem>
        <ArticleListItem><strong>Toys &amp; Hobbies.</strong> 31.7% open rate, 2.03% click rate.</ArticleListItem>
      </ArticleList>
      <p>
        Campaign click rates are far lower than opens, which is exactly why automated flows earn their
        keep. Flows average a 5.58% click rate — the top 10% reach 10.48% — and a 2.11% placed-order rate,
        with the top 10% at 4.3%. If your subject-line tests are lifting open rate a couple of points above
        your category baseline, you're on the right track. If you're stuck well below it, the test is
        telling you something.
      </p>
      <ArticleQuote>
        A win isn't beating a generic average. It's beating the baseline for your category.
      </ArticleQuote>

      <div id="setup-campaigns">
        <ArticleH2>Setting up a campaign A/B test in Klaviyo</ArticleH2>
      </div>
      <p>
        The setup is short. In Klaviyo:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Create the campaign.</strong> Go to Campaigns &gt; Create campaign, choose Email, then select your list or segment.</ArticleListItem>
        <ArticleListItem><strong>Build the first version.</strong> Enter a subject line and build the email as normal.</ArticleListItem>
        <ArticleListItem><strong>Clone it.</strong> Click 'Create A/B test' above the subject line field. This clones an identical second variation.</ArticleListItem>
        <ArticleListItem><strong>Name your variations.</strong> Give each a descriptive name referencing what you're testing — for example "First name" versus "No personalisation" — so the report reads clearly later.</ArticleListItem>
        <ArticleListItem><strong>Pick the winning metric.</strong> For subject line, preview text or sender name tests, choose Open Rate. For content, layout or CTA tests, choose Click Rate. Placed Order Rate is available if your account has a Placed Order metric.</ArticleListItem>
      </ArticleList>
      <p>
        Klaviyo can also generate subject-line variations for you with AI, producing a second version from
        prompts like personalisation versus no personalisation, short versus long, or emoji versus no emoji.
        Useful as a starting point — but the hypothesis should still be yours.
      </p>

      <div id="setup-flows">
        <ArticleH2>Testing subject lines inside flows</ArticleH2>
      </div>
      <p>
        Flows are where the real revenue lives, and they're where subject-line tests compound over time
        because every new subscriber runs through them. Tests are configured inside the flow builder with
        at least two variations. Weights default to equal, and you can let Klaviyo choose a winner
        automatically once it reaches statistical significance, or select manually on the highest open or
        click rate.
      </p>
      <p>
        The payoff is concrete. Modern workwear brand Cargo Crew ran three to four A/B tests on their
        post-purchase flow, covering subject lines and send times, and grew revenue per recipient 3.5x since
        launch. That's not a one-off winning campaign — it's a permanent lift baked into an automation that
        keeps working.
      </p>

      <div id="one-variable">
        <ArticleH2>The rules: one variable, two variations, enough time</ArticleH2>
      </div>
      <p>
        The cardinal rule across every Klaviyo help doc and agency guide is to test only one variable at a
        time. Change both the subject line and the email design, and you can't attribute any lift to either.
        You'll have a winner and no idea why — which means you can't repeat it.
      </p>
      <ArticleH3>Keep it to two variations</ArticleH3>
      <p>
        Two variations give cleaner, faster reads than three or four. More variations split your audience
        thinner and slow the time to significance.
      </p>
      <ArticleH3>Use a large enough test pool</ArticleH3>
      <p>
        Statistical significance needs volume. A reliable default from deliverability guidance is a 40% test
        size — 20% to each variation — with the winner going to the remaining 60%. Klaviyo tracks
        significance in real time, can auto-select a winner, and can automatically shift more recipients
        toward the stronger variation while the test runs.
      </p>
      <ArticleH3>Give it time</ArticleH3>
      <p>
        Don't react to the first day's data. Early opens skew toward your most engaged subscribers and can
        point to a false winner. Let the test gather enough responses before you declare anything.
      </p>
      <ArticleQuote>
        One variable, two variations, enough time. Break any one of those and the result is noise.
      </ArticleQuote>

      <div id="what-to-test">
        <ArticleH2>What to actually test</ArticleH2>
      </div>
      <p>
        Klaviyo's own research points to a concrete length benchmark: subject lines around seven words long
        can achieve open rates of nearly 30%. That's a clean first hypothesis — test your usual length
        against a tighter seven-word version. From there, strong hypotheses include:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Degree of personalisation.</strong> Insert the recipient's first name or reference a browsed product, versus a generic line.</ArticleListItem>
        <ArticleListItem><strong>Level of urgency.</strong> "Last chance" or "final call" versus a relaxed, low-pressure tone.</ArticleListItem>
        <ArticleListItem><strong>Emoji versus no emoji.</strong> A single, relevant emoji against plain text.</ArticleListItem>
      </ArticleList>
      <p>
        Run these one at a time, log the winner, and let each test inform the next. Over a few months you
        build a picture of what your specific audience responds to — which is worth far more than any
        generic best-practice list.
      </p>

      <div id="mpp-caveat">
        <ArticleH2>The Apple MPP problem with open rate</ArticleH2>
      </div>
      <p>
        There's a catch that every UK brand needs to understand in 2025–2026. Apple Mail Privacy Protection
        (MPP) auto-loads email images, which registers an "open" whether or not the subscriber actually
        looked. Testing data suggests roughly 64% of B2C subscribers now use an MPP-capable version of Apple
        Mail — so a large share of your opens are false.
      </p>
      <p>
        This has two consequences. First, don't trigger flows off opens alone; Klaviyo recommends building
        custom reports with an MPP property to review affected opens. Second, treat open rate as directional
        guidance for A/B testing rather than a standalone KPI. It still tells you which subject line drew more
        attention across the whole list, but it's an inflated, noisy signal.
      </p>
      <p>
        Where the goal is genuine engagement or revenue, test on click rate or placed-order rate instead —
        both are far harder to fake and reflect what actually happened after the open. Use open rate to shape
        subject-line hypotheses; use click and order rate to confirm they earned real business.
      </p>

      <div id="deliverability">
        <ArticleH2>Deliverability: the test nobody sees</ArticleH2>
      </div>
      <p>
        A winning subject line is worthless if the email never reaches the inbox. Pair every subject-line
        test with basic list and sender hygiene, or you're optimising a message that gets filtered out.
      </p>
      <ArticleList>
        <ArticleListItem><strong>List hygiene.</strong> Suppress hard bounces immediately and keep your bounce rate under 2%.</ArticleListItem>
        <ArticleListItem><strong>Authentication.</strong> SPF, DKIM and DMARC are now mandatory for bulk senders to Gmail, Yahoo and Microsoft. Non-compliant mail can be rejected outright.</ArticleListItem>
      </ArticleList>
      <p>
        Get those right and your test measures what it's supposed to: the strength of the subject line, not
        the failures of your infrastructure. Then keep testing — one variable, two variations, patient reads,
        judged against your category benchmark and confirmed on clicks. The brands still not testing at all
        are handing you the advantage. Take it.
      </p>
    </ArticleLayout>
  );
}
