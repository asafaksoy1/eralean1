import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up a Klaviyo Sunset Flow to Clean Your List and Protect Deliverability";
const DESCRIPTION = "A step-by-step UK guide to building a Klaviyo sunset flow to re-engage or suppress inactive subscribers, protect sender reputation and cut billing.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-sunset-flow-setup-uk";

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
  { id: "what-is-a-sunset-flow", label: "What a sunset flow actually does" },
  { id: "why-it-matters", label: "Why it matters for deliverability and billing" },
  { id: "defining-inactive", label: "Defining 'inactive' for your cadence" },
  { id: "two-groups", label: "The two groups that need different treatment" },
  { id: "build-prebuilt", label: "Building from Klaviyo's pre-built template" },
  { id: "build-scratch", label: "Building a sunset flow from scratch" },
  { id: "suppression", label: "Suppression: the deliberate final step" },
  { id: "content", label: "Content and subject lines that work" },
  { id: "when-not-to", label: "When not to run a sunset flow" },
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

export default function KlaviyoSunsetFlowSetupUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        A list full of people who never open your emails is not a bigger audience — it is
        a slower one. Every send to a non-opener tells Gmail and Outlook that your messages
        are worth ignoring, and over time that signal pushes even your engaged subscribers
        into the junk folder. A sunset flow is how you stop paying to email people who have
        stopped listening, before they drag down everyone else.
      </p>
      <p>
        This guide covers how to define disengagement for your sending cadence, how to build
        the flow using Klaviyo's pre-built template or from scratch, and how to suppress
        genuinely inactive contacts in a way that protects your sender reputation, trims your
        billing plan and respects the consent your subscribers gave you.
      </p>

      <TableOfContents />

      <div id="what-is-a-sunset-flow">
        <ArticleH2>What a sunset flow actually does</ArticleH2>
      </div>
      <p>
        A sunset flow is an automated Klaviyo sequence designed to phase out subscribers who
        are no longer engaging with your emails. Klaviyo describes it as a marketing automation
        that sends a series of messages to unengaged subscribers, and at the end of the flow you
        reduce or suppress sending to anyone who still hasn't engaged.
      </p>
      <p>
        The mechanics are simple: a subscriber who has gone quiet enters the flow, receives one
        or more re-engagement emails, and is given a clear chance to opt back in. If they open or
        click, they drop out of the flow and stay on your list. If they do nothing, they are
        tagged for suppression and stop receiving your marketing. It is list hygiene automated
        end to end.
      </p>

      <div id="why-it-matters">
        <ArticleH2>Why it matters for deliverability and billing</ArticleH2>
      </div>
      <p>
        The commercial case is deliverability. If a list is full of people who barely open or
        click, your emails gradually get routed to junk folders, meaning you pay to send messages
        subscribers never see. Continuing to email non-openers signals to inbox providers like
        Gmail and Outlook that you are an unreliable sender, which is exactly why regular list
        cleaning is essential rather than optional.
      </p>
      <p>
        For UK brands there is an added dimension. Suppressing genuinely disengaged contacts also
        reduces the contact count on your Klaviyo billing plan, so you stop paying for people who
        will never buy. It also respects the fact that subscribers originally gave consent — and
        not emailing people who no longer want contact aligns cleanly with GDPR and PECR
        expectations.
      </p>
      <ArticleQuote>
        Even a subscriber who buys regularly from your website isn't helping your sender reputation
        if they never open a single email.
      </ArticleQuote>

      <div id="defining-inactive">
        <ArticleH2>Defining 'inactive' for your cadence</ArticleH2>
      </div>
      <p>
        Defining inactivity is the critical first step, and it depends entirely on how often you
        send. Klaviyo's guidance and multiple agencies converge on the same rule of thumb:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Daily senders.</strong> Roughly three months of non-engagement is a reasonable
          disengagement signal.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Monthly senders.</strong> Six months — around six unopened emails — is more
          appropriate.
        </ArticleListItem>
        <ArticleListItem>
          <strong>A common baseline.</strong> Klaviyo's glossary uses 180 days of inactivity as a
          worked example: subscribers who haven't opened emails, made a purchase, or had checkout,
          product view or website activity in that window.
        </ArticleListItem>
      </ArticleList>
      <p>
        One nuance matters more than any threshold: for sunset purposes, measure engagement on
        email opens and clicks specifically, not on-site activity or recent purchases. A regular
        website buyer who never opens an email is still damaging your sender reputation.
      </p>
      <ArticleH3>Protect your seasonal buyers</ArticleH3>
      <p>
        A single 'last purchase six months ago' condition is not enough on its own. Add further
        checks so you don't alienate customers who only buy at certain times of year — think of a
        gifting or festive-only shopper who is entirely happy to hear from you again in November.
        Layering conditions protects revenue you'd otherwise cut.
      </p>

      <div id="two-groups">
        <ArticleH2>The two groups that need different treatment</ArticleH2>
      </div>
      <p>
        Klaviyo recommends splitting unengaged subscribers into two groups, because they warrant
        very different effort.
      </p>
      <ArticleH3>Signed up but never truly engaged</ArticleH3>
      <p>
        These are people who often signed up for a welcome discount but have never opened a single
        marketing email in the last 30–45 days. A short approach works here: a single campaign or
        email encouraging them to stay, then suppress or remove them if they don't respond. Many of
        these may not even be human — bots can sign up using real addresses and generate spam
        complaints that damage your performance.
      </p>
      <ArticleH3>Genuinely engaged, then went quiet</ArticleH3>
      <p>
        Subscribers who genuinely engaged after signing up but have since gone silent deserve more.
        A more traditional sunset series of 2–4 emails is appropriate. Klaviyo's own guidance draws
        the line clearly: 'unengaged, never purchased' contacts can receive a re-permission email
        and be removed if they don't respond, while 'unengaged but previously purchased' contacts
        are worth more effort — give them a win-back campaign first, then a goodbye email.
      </p>

      <div id="build-prebuilt">
        <ArticleH2>Building from Klaviyo's pre-built template</ArticleH2>
      </div>
      <p>
        The fastest route is Klaviyo's ready-made template. The steps are:
      </p>
      <ArticleList>
        <ArticleListItem>In the Flows tab, click <strong>Create Flow</strong>.</ArticleListItem>
        <ArticleListItem>Search <strong>'sunset'</strong> and select the pre-built 'Sunset Unengaged Subscribers' flow.</ArticleListItem>
        <ArticleListItem>Set the trigger to your sunset segment.</ArticleListItem>
        <ArticleListItem>Click <strong>Create Flow</strong>, then customise the content to match your brand.</ArticleListItem>
        <ArticleListItem>Back-populate past profiles if the flow is for an existing list, so people already inactive are pulled in.</ArticleListItem>
      </ArticleList>
      <p>
        This gives you a working structure in minutes. The work that remains is defining the segment
        properly and getting the content and safeguards right.
      </p>

      <div id="build-scratch">
        <ArticleH2>Building a sunset flow from scratch</ArticleH2>
      </div>
      <p>
        Building manually gives you full control. Create a segment-triggered flow and select your
        sunset segment as the trigger. Then add the pieces that make it safe and useful:
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Flow filters.</strong> Exclude anyone who opens or clicks an email since starting the
          flow. This is the crucial safeguard — anyone who engages with a sunset email, or any email
          received while in the flow, is automatically removed and will not be tagged for suppression.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Re-engagement emails.</strong> Add 1–3 (or 2–4 for previously engaged contacts)
          messages asking people to stay.
        </ArticleListItem>
        <ArticleListItem>
          <strong>A time delay.</strong> Around 3–7 days after the final email, to give real people
          time to react.
        </ArticleListItem>
        <ArticleListItem>
          <strong>An Update Profile Property step.</strong> Tag non-engagers as 'Unengaged = True'.
          Some practitioners use a text value like 'yes' rather than a boolean, citing reliability
          issues with the boolean type.
        </ArticleListItem>
      </ArticleList>
      <ArticleQuote>
        The flow filter is what stops you suppressing someone who re-engaged. Without it, you risk
        cutting off people who did exactly what you asked.
      </ArticleQuote>

      <div id="suppression">
        <ArticleH2>Suppression: the deliberate final step</ArticleH2>
      </div>
      <p>
        Suppression is separate from the flow, and deliberately so. Once subscribers reach the end
        without engaging and carry the 'Unengaged' tag, you act on them manually:
      </p>
      <ArticleList>
        <ArticleListItem>Create a segment based on <strong>Properties about someone &gt; Unengaged is true</strong>.</ArticleListItem>
        <ArticleListItem>Use the segment's action button to <strong>Suppress current members</strong>.</ArticleListItem>
      </ArticleList>
      <p>
        This applies only to profiles in the segment at that moment — it does not affect profiles
        who join later. That is why you must repeat the suppression before each campaign send to keep
        phasing inactive profiles out. Suppressed profiles can no longer receive marketing emails,
        which is the point. Aim to clean your list at least two to three times a year.
      </p>

      <div id="content">
        <ArticleH2>Content and subject lines that work</ArticleH2>
      </div>
      <p>
        The goal of a sunset email is a single action: an open or a click. Keep the content
        stripped back and human.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Keep it plain-text and personal.</strong> Use a first-name tag and a real-person
          'from' name that still clearly identifies the brand.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Show what's new.</strong> Feature products released since the subscriber lapsed.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Consider a discount.</strong> An optional offer can be enough to prompt a purchase.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Make preferences and unsubscribe prominent.</strong> Let people dial back rather
          than leave entirely.
        </ArticleListItem>
      </ArticleList>
      <p>
        Subject lines should prompt an open, not push a product. Real examples that work include
        'Is it time to say goodbye?', 'We miss you already' and 'Goodbyes are hard...'. The honesty
        does the heavy lifting.
      </p>

      <div id="when-not-to">
        <ArticleH2>When not to run a sunset flow</ArticleH2>
      </div>
      <p>
        There is one important caution from Klaviyo's own deliverability guidance. Winback,
        re-engagement and sunset flows can be risky if you are actively repairing a damaged sender
        reputation, because they naturally see lower engagement. In that scenario, set them to draft
        mode until your reputation recovers — sending low-engagement emails while you're already
        struggling only deepens the hole.
      </p>
      <p>
        Once your reputation is healthy, a sunset flow becomes one of the most quietly profitable
        automations you can run. It costs almost nothing, protects the inbox placement of every
        email you send afterwards, and lowers your Klaviyo bill by removing people who were never
        going to buy. Cleaning your list is not losing subscribers — it is keeping the ones who
        matter within reach.
      </p>
    </ArticleLayout>
  );
}
