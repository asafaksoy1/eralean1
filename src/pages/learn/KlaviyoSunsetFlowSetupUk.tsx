import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up a Klaviyo Sunset Flow to Clean Your List and Protect Deliverability (UK Guide)";
const DESCRIPTION = "Step-by-step guide to building a Klaviyo sunset flow that re-engages or suppresses inactive subscribers to protect UK ecommerce email deliverability.";
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
  { id: "the-real-cost", label: "The real cost of a bloated list" },
  { id: "gmail-yahoo-rules", label: "Why the Gmail and Yahoo rules make this urgent" },
  { id: "define-the-segment", label: "Step 1: Define the unengaged segment" },
  { id: "build-the-flow", label: "Step 2: Build the flow in Klaviyo" },
  { id: "suppress-non-responders", label: "Step 3: Act on non-responders" },
  { id: "uk-caveats", label: "UK caveats and re-activation" },
  { id: "the-payoff", label: "The payoff" },
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
        Every email you send to someone who never opens it is quietly damaging the emails you send to the people who do. Inbox providers like Gmail and Apple decide inbox-versus-spam placement largely on engagement, and a list stuffed with subscribers who ignore you is a signal that your mail is unwanted. Left alone, that signal starts pushing even your best buyers into the spam folder.
      </p>
      <p>
        A sunset flow is how you fix this. It is an automated Klaviyo sequence that targets unengaged subscribers, gives them one last chance to re-engage, and suppresses the ones who don't. This guide walks through defining the segment, building the flow, and actioning non-responders — with the specific compliance context UK ecommerce brands now face.
      </p>

      <TableOfContents />

      <div id="what-is-a-sunset-flow">
        <ArticleH2>What a sunset flow actually does</ArticleH2>
      </div>
      <p>
        A sunset flow does two jobs at once. It attempts to re-engage subscribers who have gone quiet, and it identifies the ones who stay quiet so you can remove them from your regular sends. The goal is a lean, engaged list — because that is what protects your sender reputation.
      </p>
      <p>
        Klaviyo's own guidance is direct on this point: sending to unengaged subscribers puts sender reputation and deliverability at risk, while focusing regular sends on an engaged segment builds a strong reputation over time. Klaviyo also treats profiles with no engagement for over a year as unengaged and effectively invalid. A sunset flow is the mechanism that turns that guidance into a repeatable, automated process.
      </p>

      <div id="the-real-cost">
        <ArticleH2>The real cost of a bloated list</ArticleH2>
      </div>
      <p>
        The obvious cost of a bloated list is the monthly platform fee for contacts who never buy. That is the small cost. The real cost is paid in deliverability.
      </p>
      <ArticleQuote>
        Every send to people who ignore you drags down inbox placement for the people who do buy.
      </ArticleQuote>
      <p>
        Anti-spam agencies recalculate your sending reputation like a credit score. A high proportion of dead weight on your list tells them your mail is unwanted, and the penalty lands on your entire sending domain — not just the emails going to inactive contacts. Trim the dead weight and your open and click rates rise, your reputation recovers, and more of your mail reaches the inbox. Suppressing inactive contacts also shrinks your Klaviyo billing, because pricing scales with active profiles.
      </p>

      <div id="gmail-yahoo-rules">
        <ArticleH2>Why the Gmail and Yahoo rules make this urgent</ArticleH2>
      </div>
      <p>
        On 1 February 2024, Gmail and Yahoo introduced bulk sender requirements that changed the stakes. Any domain sending 5,000 or more messages per day to personal Gmail or Yahoo addresses is classified as a bulk sender and must meet three conditions:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Authentication.</strong> SPF, DKIM and DMARC in place, with DMARC at minimum <code>p=none</code> and aligned.</ArticleListItem>
        <ArticleListItem><strong>One-click unsubscribe.</strong> Support RFC 8058 one-click unsubscribe and honour opt-outs within two days.</ArticleListItem>
        <ArticleListItem><strong>Spam complaint rate.</strong> Keep it below 0.3%.</ArticleListItem>
      </ArticleList>
      <p>
        That complaint threshold is where a sunset flow earns its place. Google recommends staying under 0.1% and treats 0.3% not as a safe target but as the point where enforcement begins — roughly three complaints per thousand delivered messages. A sender delivering 10,000 emails needs only 30 spam reports to hit 0.3%.
      </p>
      <p>
        The rate is measured per domain, per mailbox provider. You could sit at 0.1% at Gmail and 0.8% at Yahoo simultaneously, and the Yahoo number would still trigger throttling. Monitor both through Google Postmaster Tools and Yahoo's Sender Hub.
      </p>
      <p>
        Enforcement has only tightened. Google escalated from temporary delays to permanent rejections in November 2025, and Microsoft rolled out similar rules for Outlook, Hotmail and Live.com in May 2025. The recipients most likely to ignore or report your emails are exactly the ones a sunset flow removes, which makes it a primary lever for keeping complaint rates under the ceiling.
      </p>

      <div id="define-the-segment">
        <ArticleH2>Step 1: Define the unengaged segment</ArticleH2>
      </div>
      <p>
        Defining the segment is the first and most important step. The typical definition is subscribers who have received a meaningful number of emails but had no opens or clicks — and, for ecommerce, no checkouts, product views or purchases — within a chosen window. Ninety to 180 days is common, with six months standard for regular monthly senders. Klaviyo's glossary example uses 180 days inactive with no engagement and no site or purchase activity.
      </p>
      <ArticleH3>Segment more granularly where you can</ArticleH3>
      <p>
        A blunt definition catches people it shouldn't. Split the population where it makes sense — for example, one segment for subscribers who haven't opened in six months <em>and</em> have never purchased, versus separate treatment for lapsed past customers. A lapsed customer belongs in a proper win-back flow, not a pure sunset.
      </p>
      <ArticleList>
        <ArticleListItem><strong>Add a subscription condition.</strong> Klaviyo advises including a "Person is subscribed to email marketing" condition in any segment used for email targeting, so the segment size is realistic.</ArticleListItem>
        <ArticleListItem><strong>Don't trust opens alone.</strong> Apple Mail Privacy Protection inflates open-rate data. Clicks and site or order activity are far more reliable engagement signals.</ArticleListItem>
      </ArticleList>

      <div id="build-the-flow">
        <ArticleH2>Step 2: Build the flow in Klaviyo</ArticleH2>
      </div>
      <p>
        There are two routes: fast and from scratch.
      </p>
      <ArticleH3>The fast route</ArticleH3>
      <p>
        Go to <strong>Flows &gt; Create Flow</strong>, search "sunset", and select the <strong>Sunset Unengaged Subscribers</strong> template. Set the trigger to your unengaged segment, click <strong>Create Flow</strong>, and customise the email content to match your brand.
      </p>
      <ArticleH3>The from-scratch route</ArticleH3>
      <p>
        Go to <strong>Flows &gt; Create Flow &gt; Create From Scratch</strong>, name the flow, and set the trigger to segment entry. Segment-triggered flows fire once per profile. Then add a flow filter so anyone who opens or clicks after entering the flow is automatically removed and never tagged for suppression — this is the safeguard that stops you suppressing someone who just re-engaged.
      </p>
      <ArticleH3>A sensible structure</ArticleH3>
      <p>
        One to three re-engagement emails is the standard shape:
      </p>
      <ArticleList>
        <ArticleListItem><strong>Email one.</strong> A "we miss you" message featuring best-selling products or a reminder of your unique value, with a compelling subject line.</ArticleListItem>
        <ArticleListItem><strong>Email two.</strong> A clear opt-in / opt-out choice — ask them directly whether they still want to hear from you.</ArticleListItem>
        <ArticleListItem><strong>Final email.</strong> A limited-time "come back" discount or free shipping offer, held to the last step so you don't discount people who would have re-engaged anyway.</ArticleListItem>
      </ArticleList>
      <p>
        One practical detail from the Klaviyo community: boolean profile properties can behave inconsistently. Some practitioners tag non-responders with a text property such as <code>Unengaged = yes</code>, batch these into a "Suppress Profiles" segment, and suppress them monthly. It is a more predictable pattern than relying on booleans alone.
      </p>

      <div id="suppress-non-responders">
        <ArticleH2>Step 3: Act on non-responders</ArticleH2>
      </div>
      <p>
        Anyone who completes the flow without engaging is the cohort to suppress. Suppress them — do not delete them. Suppressing preserves the record and consent history while removing them from your active sends, which protects sender reputation, raises overall open and click rates, and leads to more of your mail landing in inboxes as anti-spam agencies recalculate your reputation upward.
      </p>
      <p>
        Klaviyo can also auto-create a "Never engaged" segment from the Deliverability hub. Go to <strong>Analytics &gt; Deliverability &gt; Action Center &gt; Create a Never engaged segment</strong>. It uses criteria including "can receive email marketing" <em>and</em> "Received email is at least 5 in the last 180 days" with no engagement — a useful companion to your sunset flow for catching profiles that never got off the ground.
      </p>
      <ArticleQuote>
        Segmentation pays. Klaviyo's benchmark data shows behaviour-segmented automated flows generate around 41% of total email revenue from just 5.3% of sends, with revenue per recipient roughly 18x higher than campaigns.
      </ArticleQuote>
      <p>
        The broader evidence points the same way. eMarketer found 39% of marketers who segment see better open rates, 28% see lower unsubscribe rates, and 24% see better deliverability and higher revenue. A sunset flow is segmentation applied to your worst-performing contacts, which is where the deliverability gains are largest.
      </p>

      <div id="uk-caveats">
        <ArticleH2>UK caveats and re-activation</ArticleH2>
      </div>
      <p>
        One caveat trips up UK brands. A profile can only enter a segment-triggered flow once. That means re-subscribers who were previously suppressed will not re-enter list or segment-triggered flows such as your welcome series. If a lapsed subscriber comes back, they won't automatically receive onboarding content again.
      </p>
      <p>
        Plan a separate re-activation path for returning subscribers. Build a dedicated flow triggered by a re-subscribe event or a distinct property, so people who choose to come back get a proper welcome rather than silence. Treating re-subscribers as a first-class case rather than an afterthought keeps the returning-customer experience intact.
      </p>

      <div id="the-payoff">
        <ArticleH2>The payoff</ArticleH2>
      </div>
      <p>
        A well-maintained sunset flow does more than tidy a list. It keeps your complaint rate under the 0.3% ceiling that Gmail, Yahoo and now Microsoft enforce, it concentrates your sends on people who actually engage, and it lowers your Klaviyo bill in the process. The subscribers you suppress were never going to buy — but every email you sent them was costing you inbox placement with the ones who would.
      </p>
      <p>
        Set the segment definition to match your sending cadence, build the flow with a re-engagement filter that protects anyone who responds, and suppress the rest on a monthly schedule. Do that consistently, and your list gets smaller while your revenue does not.
      </p>
    </ArticleLayout>
  );
}
