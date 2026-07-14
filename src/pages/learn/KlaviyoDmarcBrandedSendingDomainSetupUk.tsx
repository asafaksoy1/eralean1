import {
  ArticleH2,
  ArticleH3,
  ArticleList,
  ArticleListItem,
  ArticleLayout,
  ArticleQuote,
  getArticleMeta,
} from "../../components/learn/ArticleLayout";

const TITLE = "How to Set Up a Branded Sending Domain and DMARC in Klaviyo (UK Guide)";
const DESCRIPTION = "Step-by-step guide for UK ecommerce brands to configure a Klaviyo branded sending domain and DMARC to meet Gmail, Yahoo and Microsoft sender rules.";
const CATEGORY = "Klaviyo";
const SLUG = "klaviyo-dmarc-branded-sending-domain-setup-uk";

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
  { id: "why-this-matters", label: "Why authentication is now mandatory" },
  { id: "are-you-a-bulk-sender", label: "Are you a bulk sender?" },
  { id: "three-requirements", label: "The three core requirements" },
  { id: "branded-domain-setup", label: "Setting up a branded sending domain" },
  { id: "dmarc-rollout", label: "The phased DMARC rollout" },
  { id: "warming", label: "Warming your sending infrastructure" },
  { id: "benchmarks", label: "Benchmarks to monitor" },
  { id: "verification", label: "Verifying and staying consistent" },
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

export default function KlaviyoDmarcBrandedSendingDomainSetupUkPage() {
  return (
    <ArticleLayout
      title={TITLE}
      description={DESCRIPTION}
      category={CATEGORY}
      slug={SLUG}
      related={RELATED}
    >
      <p>
        Email authentication has moved from a best-practice tick-box to a hard requirement. If your
        brand sends via Klaviyo and your DKIM, DMARC and domain alignment are not in order, your
        emails do not reach the inbox — they bounce or land in spam. That is not a projection; it is
        the current standard enforced by Gmail, Yahoo, and now Microsoft.
      </p>
      <p>
        This guide walks UK ecommerce brands through configuring a branded sending domain and a DMARC
        policy inside Klaviyo, the correct order of operations, and the mistakes that silently drop
        legitimate mail. Follow it in sequence and you will own your sending reputation rather than
        renting it.
      </p>

      <TableOfContents />

      <div id="why-this-matters">
        <ArticleH2>Why authentication is now mandatory</ArticleH2>
      </div>
      <p>
        In February 2024, Gmail and Yahoo introduced mandatory sender requirements for bulk senders
        in a joint initiative nicknamed &lsquo;Yahoogle&rsquo;. It required senders to implement DKIM,
        DMARC, and domain alignment. Microsoft (Outlook) then joined the movement, with an
        enforcement date of 5 May 2025 — unauthenticated mail is now bounced with a clear error
        message. Collectively the standard is sometimes referred to as &lsquo;MAGY&rsquo;: Microsoft,
        Apple, Google, Yahoo.
      </p>
      <p>
        The practical bottom line is stark. Without proper authentication, your emails do not reach
        the inbox. This is no longer a deliverability optimisation exercise — it is the price of entry
        for sending marketing and transactional email at any meaningful volume.
      </p>
      <ArticleQuote>
        Without proper authentication, emails do not reach the inbox — bounced or filtered before a
        customer ever sees them.
      </ArticleQuote>

      <div id="are-you-a-bulk-sender">
        <ArticleH2>Are you a bulk sender?</ArticleH2>
      </div>
      <p>
        Google defines a &lsquo;bulk sender&rsquo; as anyone sending 5,000 or more emails to Google
        accounts per day. Crucially, all traffic counts toward that threshold — including
        transactional emails and personal accounts ending in @gmail.com and @googlemail.com. It is
        easier to cross the line than most brands assume, especially when order confirmations and
        shipping updates are added to campaigns and flows.
      </p>
      <p>
        Inside Klaviyo, the in-app compliance checklist appears for accounts with more than 5,000
        profiles — an arbitrary estimate Klaviyo uses to flag likely bulk senders. Even if you sit
        below the threshold today, compliance is strongly advised: it protects deliverability and lets
        your brand own its sending reputation rather than sharing one.
      </p>

      <div id="three-requirements">
        <ArticleH2>The three core requirements</ArticleH2>
      </div>
      <p>A bulk sender must satisfy three core requirements.</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Set up a branded sending domain.</strong> You can no longer rely on Klaviyo&rsquo;s
          shared domain. A dedicated domain also removes the &lsquo;via klaviyomail.com&rsquo;
          disclaimer beside your sender address.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Align your From: domain.</strong> The domain in your friendly &lsquo;From:&rsquo;
          address must align with the root domain of your branded sending domain — essential to pass
          DMARC alignment. If example.com is your root domain, your branded sending domain would be
          something like send.example.com.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Make unsubscribing easier.</strong> Marketing emails must include a one-click
          unsubscribe method. Klaviyo automatically adds a one-click (list-unsubscribe) header to
          every marketing email, so this needs no configuration — though you should still keep a clear
          unsubscribe link in the footer.
        </ArticleListItem>
      </ArticleList>
      <p>
        A fourth requirement applies to everyone: keep spam complaints low. Gmail advises staying
        under 0.1%, and exceeding a 0.3% spam complaint rate may result in blocked sends. Monitor this
        via Google Postmaster Tools or Klaviyo&rsquo;s deliverability hub.
      </p>

      <div id="branded-domain-setup">
        <ArticleH2>Setting up a branded sending domain</ArticleH2>
      </div>
      <p>
        SPF and DKIM are handled automatically when you connect a branded sending domain in Klaviyo.
        The necessary DKIM record is added through the CNAME or NS records applied during setup — you
        do not add SPF or DKIM manually. This is the part brands most often overcomplicate.
      </p>
      <p>
        Setup happens under <strong>Account &gt; Settings &gt; Domains and Hosting</strong>. Klaviyo
        offers two paths.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Connect with Entri.</strong> Klaviyo detects your DNS provider and publishes the
          records automatically on your behalf. This is the fastest route for most brands.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Manual setup.</strong> Klaviyo generates the DNS records for you to add at your DNS
          provider — for example GoDaddy or Cloudflare. Choose this if Entri cannot detect your
          provider or your IT team manages DNS directly.
        </ArticleListItem>
      </ArticleList>
      <ArticleH3>Use a dedicated subdomain</ArticleH3>
      <p>
        Send from a dedicated subdomain such as email.brand.com or send.brand.com. This keeps your
        email reputation separate from your main website&rsquo;s domain, so the setup does not affect
        website performance. Klaviyo can also generate a compliant DMARC record for you via an
        &lsquo;Add DMARC record&rsquo; toggle during setup — but DMARC itself is not managed inside
        Klaviyo.
      </p>

      <div id="dmarc-rollout">
        <ArticleH2>The phased DMARC rollout</ArticleH2>
      </div>
      <p>
        DMARC is a TXT record published at _dmarc.yourbrand.com in your DNS. Klaviyo recommends
        working with your IT team or a dedicated DMARC service provider, because rushing this step is
        the fastest way to silently drop legitimate transactional mail. The rollout should be phased.
      </p>
      <ArticleList>
        <ArticleListItem>
          <strong>Start with p=none for at least four weeks.</strong> Klaviyo&rsquo;s global email
          deliverability manager describes p=none as a strong first step — it monitors authentication
          without affecting deliverability, letting you analyse every mail stream using your domain
          before enforcing.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Include an rua tag.</strong> Point it at a dedicated inbox to collect DMARC reports.
          Gmail and Yahoo do not yet require the rua tag, but setting it up future-proofs your policy.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Tighten to p=quarantine.</strong> Once authentication pass rates are consistently
          95% or higher, roll from 10% to 25% to 100%.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Move to p=reject.</strong> Reach full enforcement over roughly 8&ndash;12 weeks of
          monitoring.
        </ArticleListItem>
      </ArticleList>
      <p>
        Two costly mistakes recur. The first is jumping straight to p=reject without monitoring, which
        silently drops legitimate transactional mail. The second is setting up reporting but never
        reading the reports — the rua data only protects you if someone acts on it.
      </p>
      <ArticleQuote>
        Jumping straight to p=reject without monitoring is the fastest way to silently drop legitimate
        transactional mail.
      </ArticleQuote>

      <div id="warming">
        <ArticleH2>Warming your sending infrastructure</ArticleH2>
      </div>
      <p>
        Once a branded sending domain is enabled, gently warm your sending infrastructure over the
        next two to four weeks — especially for newly registered domains (registered within the last
        30 days). Warming means starting with a low volume and emailing your most engaged contacts
        first, those who recently opened or clicked. Every positive engagement during warming benefits
        your sender reputation.
      </p>
      <p>
        Klaviyo offers a guided warming feature to structure this ramp-up. Accounts with more than
        5,000 profiles should set up a branded sending domain with DMARC to avoid performance
        disruptions from Gmail and Yahoo&rsquo;s requirements.
      </p>
      <ArticleH3>Reputation repair for struggling accounts</ArticleH3>
      <p>
        For accounts already in trouble, Klaviyo offers a reputation repair AI that automatically
        excludes unengaged profiles. Qualifying criteria include a deliverability score below 50, at
        least 5,000 active profiles, and engagement data of at least 100 clicks or opens in the last
        30 days.
      </p>

      <div id="benchmarks">
        <ArticleH2>Benchmarks to monitor</ArticleH2>
      </div>
      <p>Watch these numbers during setup and permanently afterwards.</p>
      <ArticleList>
        <ArticleListItem>
          <strong>Bounce rate below 1%.</strong> Address hard bounces immediately — they signal a low
          list quality to inbox providers.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Spam complaint rate below 0.1%.</strong> Stay well under the 0.3% blocking
          threshold. Google Postmaster Tools and Klaviyo&rsquo;s deliverability hub both surface this.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Strong open and click rates.</strong> Engagement is a direct positive signal to
          ISPs and reinforces the reputation you built during warming.
        </ArticleListItem>
      </ArticleList>

      <div id="verification">
        <ArticleH2>Verifying and staying consistent</ArticleH2>
      </div>
      <p>Verify your setup three ways before you scale sending volume.</p>
      <ArticleList>
        <ArticleListItem>
          <strong>In Klaviyo.</strong> Domains and Hosting should show SPF and DKIM authenticated.
        </ArticleListItem>
        <ArticleListItem>
          <strong>Via an external checker.</strong> Tools such as EasyDMARC or MXToolbox will report a
          status of Warning or Valid — both are compliant.
        </ArticleListItem>
        <ArticleListItem>
          <strong>By sending a test campaign.</strong> Send to Gmail, Yahoo and Outlook, then inspect
          the email headers to confirm SPF, DKIM and DMARC are all passing.
        </ArticleListItem>
      </ArticleList>
      <p>
        After authenticating, stay consistent. Avoid sending from personal @gmail.com addresses or
        switching between multiple domains, as this confuses inbox providers and undermines the
        reputation you are building. A single dedicated subenvelope, used consistently, is worth more
        than clever tactics.
      </p>
      <p>
        For UK brands looking to go further, Apple Mail&rsquo;s BIMI brand-logo display in the inbox
        requires DMARC enforcement plus a Verified Mark Certificate (VMC). Once you reach enforcement,
        that logo becomes a meaningful differentiator on mobile — the visual reward for getting the
        foundations right, in the right order, first.
      </p>
    </ArticleLayout>
  );
}
