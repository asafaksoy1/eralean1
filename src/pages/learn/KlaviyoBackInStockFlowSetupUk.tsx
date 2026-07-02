import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up a Klaviyo Back-in-Stock Flow for UK Ecommerce Brands";
const DESCRIPTION = "A step-by-step guide to building a high-converting Klaviyo back-in-stock flow, with UK benchmarks, SMS setup, and PECR/GDPR compliance tips.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-back-in-stock-flow-setup-uk";

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
  { id: "what-it-is", label: "What a back-in-stock flow actually does" },
  { id: "why-it-converts", label: "Why it converts so well" },
  { id: "prerequisites", label: "Prerequisites and platform support" },
  { id: "build-the-flow", label: "Building the flow, step by step" },
  { id: "account-settings", label: "The two account-level settings that matter" },
  { id: "add-sms", label: "Adding SMS for a head start" },
  { id: "compliance", label: "PECR and UK GDPR compliance" },
  { id: "design-and-copy", label: "Email design and copy that works" },
  { id: "testing", label: "Testing and common pitfalls" },
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

export default function KlaviyoBackInStockFlowSetupUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        A shopper lands on a product page, wants to buy, and finds the item sold
        out. That's a lost sale — unless you capture the intent. A Klaviyo
        back-in-stock flow does exactly that: it lets shoppers ask to be alerted
        when a product returns, then emails or texts them automatically the
        moment it does. It captures validated demand from people who already
        tried to buy but couldn't, which makes it one of the highest-intent
        automations you can run.
      </p>
      <p>
        The setup is technically straightforward — most brands can build it in
        under an hour. This guide walks through the full build for UK ecommerce
        brands, including SMS, the account settings that quietly control
        performance, and the PECR and UK GDPR rules you need to respect.
      </p>

      <TableOfContents />

      <div id="what-it-is">
        <ArticleH2>What a back-in-stock flow actually does</ArticleH2>
      </div>
      <p>
        A back-in-stock flow is an automated Klaviyo workflow triggered when a
        shopper subscribes to a restock alert on a sold-out product page. When
        someone clicks the "Notify me when available" button, Klaviyo logs a{" "}
        <strong>Subscribed to Back in Stock</strong> event on their profile.
        That event is the metric used to trigger the flow.
      </p>
      <p>
        From there, the subscriber waits at a unique{" "}
        <strong>Back in Stock Delay</strong> component. Unlike a standard time
        delay, this component holds each person until the specific item they
        wanted is restocked in your inventory. When stock returns, the message
        fires automatically — no manual sending, no batch scheduling.
      </p>

      <div id="why-it-converts">
        <ArticleH2>Why it converts so well</ArticleH2>
      </div>
      <p>
        The performance comes down to intent. Everyone in the flow has already
        demonstrated they want the product — they got as far as the sold-out
        page and asked to be told when it came back. UK agency Pea Soup Digital
        reports these flows typically convert at 10–15%, putting them among the
        highest-performing automations in any ecommerce email programme.
      </p>
      <p>
        Open rates back this up. Multiple agencies note back-in-stock alerts
        rank among the highest open rates they track — often above 55% when the
        message is sent within roughly two hours of a restock. The combination
        of proven demand and immediate relevance is hard to beat.
      </p>
      <ArticleQuote>
        Back-in-stock is the closest thing email has to selling to a customer
        who already had their card out.
      </ArticleQuote>

      <div id="prerequisites">
        <ArticleH2>Prerequisites and platform support</ArticleH2>
      </div>
      <p>
        Before you build the flow, Klaviyo needs to be integrated with your
        store so it can read inventory. Back-in-stock is supported natively for
        Shopify, BigCommerce, Magento 2, PrestaShop, SFCC and Shopware, plus
        inventory-aware catalogues synced via a custom feed or API.
      </p>
      <p>
        You also need the "Notify me" button and signup form live on your
        sold-out product pages. Klaviyo's native form builder is available for
        Shopify and BigCommerce, and the button appears and disappears
        automatically based on inventory — so it only shows when an item is out
        of stock. Enable it, customise it to match your brand, and publish.
      </p>

      <div id="build-the-flow">
        <ArticleH2>Building the flow, step by step</ArticleH2>
      </div>
      <p>
        Once the integration and button are in place, the build itself is quick.
        Create a flow from scratch or from Klaviyo's pre-built library, then work
        through these steps.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Set the trigger.</strong> Choose the{" "}
          <strong>Subscribed to Back in Stock</strong> metric as the flow
          trigger. Add no trigger filters and no flow filters at this stage.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Add the Back in Stock Delay.</strong> Drag the Back in Stock
          Delay component in directly after the trigger. This is what holds each
          subscriber until their item is restocked.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Add the notification email.</strong> Place the notification
          message after the delay. For most brands a single email is enough,
          though Klaviyo recommends keeping the flow to 1–3 messages and some
          agencies extend to a short sequence over a 3–7 day window.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Turn Smart Sending OFF.</strong> This is critical. Smart
          Sending suppresses recipients who received a recent message — leave it
          on and some waiting subscribers won't get their alert. Turn it off so
          every subscriber is notified.
        </ArticleListItem>
      </ArticleList>
      <p>
        If you extend to more than one message, keep the cadence tight. The
        value of this flow is speed, so a second email a day or two later is
        about the limit before urgency fades.
      </p>

      <div id="account-settings">
        <ArticleH2>The two account-level settings that matter</ArticleH2>
      </div>
      <p>
        Two settings control how the flow behaves, and they live outside the
        flow builder under <strong>Settings &gt; Other &gt; Back in stock
        settings</strong>. This tab only appears after at least one Subscribed
        to Back in Stock event has been recorded, so if you can't see it, trigger
        a test subscription first.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Minimum inventory rules.</strong> Set a threshold so
          subscribers are only notified once a meaningful quantity is back — for
          example, 10 or more units. Without this, two units returning can
          trigger alerts to dozens of people who then find it sold out again.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Notification strategy / customer notification rules.</strong>{" "}
          Control how many customers are notified and how frequently. This is
          useful when you restock in small batches and want to avoid over-sending
          against limited stock.
        </ArticleListItem>
      </ArticleList>
      <p>
        One limitation to plan around: after the initial message sends, Klaviyo
        cannot re-check inventory before a second message. It can't verify
        whether the item has sold out again. That's another reason a single,
        well-timed email often outperforms a longer sequence.
      </p>

      <div id="add-sms">
        <ArticleH2>Adding SMS for a head start</ArticleH2>
      </div>
      <p>
        SMS is a natural fit for this flow because everything hinges on timing.
        Text messages are typically read within about three minutes — far faster
        than email — which gives SMS subscribers a genuine head start on limited
        stock.
      </p>
      <p>
        Klaviyo's recommended omnichannel approach adds a conditional split after
        the Back in Stock Delay: SMS-consented subscribers are routed to a text
        message, while everyone else receives the email. One Klaviyo case study
        showed the email version converting at 7.9% while the SMS version
        converted at 8.5% on the same restock moment — additional revenue
        captured through a stronger channel.
      </p>
      <p>
        SMS back-in-stock is available for Shopify, BigCommerce, PrestaShop and
        Magento 2, and recipients must be current SMS subscribers. You can't text
        someone who only opted in to email.
      </p>

      <div id="compliance">
        <ArticleH2>PECR and UK GDPR compliance</ArticleH2>
      </div>
      <p>
        For UK brands, SMS marketing sits under the Privacy and Electronic
        Communications Regulations (PECR) alongside UK GDPR. That means the rules
        are non-negotiable, whatever the channel's performance.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Explicit opt-in.</strong> Subscribers must actively consent to
          SMS marketing — subscribing to a restock alert by email is not consent
          to text them.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Clear opt-out.</strong> Include unambiguous opt-out language
          such as "Reply STOP to unsubscribe" in your messages.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Respect quiet hours.</strong> Avoid sending during
          unreasonable hours. A restock alert firing at 3am does more harm than
          good, and quiet-hours handling keeps you on the right side of best
          practice.
        </ArticleListItem>
      </ArticleList>

      <div id="design-and-copy">
        <ArticleH2>Email design and copy that works</ArticleH2>
      </div>
      <p>
        Keep the notification short, personal and urgent. Focus on a single
        product with one clear call to action. Adding cross-sells or full site
        navigation dilutes urgency and reduces conversion — the subscriber wants
        one thing, so give them a direct path to it.
      </p>
      <p>
        Use dynamic event and product variables to pull in the correct product
        image, name and buy link automatically. This is what makes the message
        feel personal at scale, and it's essential for a variant-specific flow
        where the wrong image would undermine trust immediately.
      </p>
      <ArticleH3>Use honest scarcity</ArticleH3>
      <p>
        If only a few units are left, say so — genuine scarcity is a powerful
        nudge for an audience that already wants the product. Don't exaggerate.
        Fabricated urgency erodes trust with exactly the high-value customers
        this flow is built to serve.
      </p>

      <div id="testing">
        <ArticleH2>Testing and common pitfalls</ArticleH2>
      </div>
      <p>
        Always test the full flow end-to-end before going live. Sign up on a
        sold-out product, restock it in your platform, and confirm the
        notification arrives with the correct product data. Check the profile
        event timeline to verify the event fired against the right variant.
      </p>
      <p>
        The most common technical pitfall is hardcoding the variant ID in a
        custom form. Do this and customers can be notified about the wrong
        variant — the right product in the wrong size or colour. Build the flow
        to be variant-specific and confirm it via the event timeline before
        launch.
      </p>
      <p>
        One more timing consideration: if you add a flow filter to exclude
        recent purchasers, allow enough time for order confirmations to sync
        before the email sends. Fire too fast and you may still alert someone who
        just bought the item elsewhere in your funnel.
      </p>
      <p>
        Done properly, this flow does more than recover lost sales. It grows your
        email and SMS lists with proven high-intent subscribers, and it hands you
        clean demand data — which products and variants customers are willing to
        wait for. That's a direct signal for your reorder decisions, and it's the
        kind of insight most brands never think to capture.
      </p>
    </ArticleLayout>
  );
}
