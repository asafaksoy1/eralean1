// TODO(asaf): have a solicitor review before relying on these
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FadeIn } from "../components/motion/FadeIn";
import { Dot } from "../components/brand/Dot";
import { EMAIL } from "../lib/constants";
import { pageMeta } from "../lib/seo";

const TITLE = "Privacy policy — EraLean";
const DESCRIPTION =
  "How EraLean collects, uses, and protects your data — what we track, who we share it with, and the rights you have under UK GDPR.";

export const meta = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
  ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/privacy" }),
];

// Small caps section marker — the brand dot + a label.
function Marker({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
      <Dot />
      {children}
    </div>
  );
}

// One policy section — hairline-divided, smaller display heading, readable body.
function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <FadeIn>
      <div className="py-10 first:pt-0 last:pb-0">
        <h2 className="font-display tracking-display text-xl md:text-2xl text-white">
          {title}
        </h2>
        <div className="mt-5 space-y-4 text-white/60 leading-relaxed">
          {children}
        </div>
      </div>
    </FadeIn>
  );
}

// Dot-bulleted list item — the brand atom as list marker.
function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <Dot className="mt-2" />
      <span>{children}</span>
    </li>
  );
}

function EmailLink() {
  return (
    <a
      href={`mailto:${EMAIL}`}
      className="text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
    >
      {EMAIL}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <div className="bg-ink text-white">
      <Nav variant="solid" offer="general" />
      <main>
        {/* ── Header ─────────────────────────────────────────────────── */}
        <section className="px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20">
          <div className="mx-auto max-w-6xl">
            <FadeIn>
              <Marker>Legal</Marker>
              <h1 className="mt-6 font-display tracking-display font-semibold text-5xl md:text-6xl text-white">
                Privacy policy<span className="text-volt">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/60">
                What we collect, why, who else touches it, and how to make us
                stop. Written to be read, not skimmed past.
              </p>
              <p className="mt-4 text-sm text-white/45">Last updated: July 2026</p>
            </FadeIn>
          </div>
        </section>

        {/* ── Policy body ────────────────────────────────────────────── */}
        <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl divide-y divide-white/10">
              <Block title="Who we are">
                <p>
                  EraLean is a growth agency based in Aylesbury, United Kingdom.
                  For the purposes of UK data protection law, EraLean is the
                  controller of the personal data described on this page — the
                  one responsible for looking after it.
                </p>
                <p>
                  Anything privacy-related, email <EmailLink />. You'll get a
                  reply from a person, not a form letter.
                </p>
              </Block>

              <Block title="What we collect">
                <p>We only collect what you give us or what the site needs to work:</p>
                <ul className="space-y-3">
                  <Item>
                    <strong className="font-medium text-white/80">
                      Enquiry and audit-form data.
                    </strong>{" "}
                    When you request a free audit or get in touch — by form,
                    email, or WhatsApp — we receive what you share: your email
                    address, your website address if you give it, your name and
                    contact details, and whatever you tell us about your
                    business. The audit form itself asks only for your email and
                    (optionally) your website, plus a note of which service you
                    were looking at.
                  </Item>
                  <Item>
                    <strong className="font-medium text-white/80">
                      Booking data.
                    </strong>{" "}
                    Calls are booked through Calendly, which collects your name,
                    email, and the time you pick, and passes those to us so the
                    call can happen.
                  </Item>
                  <Item>
                    <strong className="font-medium text-white/80">
                      Usage analytics.
                    </strong>{" "}
                    Only if you accept cookies (next section): which pages get
                    visited, roughly where visitors come from, and whether ads
                    we run led to an enquiry.
                  </Item>
                  <Item>
                    <strong className="font-medium text-white/80">
                      Performance data.
                    </strong>{" "}
                    Our host, Vercel, measures how fast pages load. This is
                    cookieless and doesn't identify you.
                  </Item>
                </ul>
                <p>We don't sell personal data. Ever.</p>
              </Block>

              <Block title="Cookies and analytics">
                <p>
                  On your first visit, a banner asks whether we can use
                  measurement cookies. Nothing loads until you answer. If you
                  press <em>Accept</em>, three tools start running: Google
                  Analytics (how the site is used), Google Ads conversion
                  tracking, and the Meta Pixel (whether our ads on those
                  platforms actually work). If you press <em>Decline</em>, none
                  of them load — and the site works exactly the same.
                </p>
                <p>The site sets two small cookies of its own, neither used for tracking:</p>
                <ul className="space-y-3">
                  <Item>
                    <code className="rounded bg-carbon px-1.5 py-0.5 text-sm text-white/70">
                      el_consent
                    </code>{" "}
                    — remembers your accept/decline choice for 180 days, so the
                    banner doesn't nag you on every visit.
                  </Item>
                  <Item>
                    <code className="rounded bg-carbon px-1.5 py-0.5 text-sm text-white/70">
                      el_audit_seen
                    </code>{" "}
                    — remembers that you've already seen the audit pop-up, so it
                    doesn't reappear for 30 days.
                  </Item>
                </ul>
                <p>
                  To withdraw consent, clear this site's cookies in your browser
                  settings. The banner will reappear on your next visit and you
                  can decline — the measurement tools won't load again.
                </p>
              </Block>

              <Block title="Who else handles your data">
                <p>
                  We use a small number of well-known services to run the site
                  and respond to you. Each processes data under its own privacy
                  policy:
                </p>
                <ul className="space-y-3">
                  <Item>
                    <strong className="font-medium text-white/80">Google</strong>{" "}
                    — Google Analytics and Google Ads measurement, only after
                    you accept cookies. The site's fonts are also served from
                    Google Fonts, so your browser requests font files from
                    Google's servers when a page loads.
                  </Item>
                  <Item>
                    <strong className="font-medium text-white/80">Meta</strong>{" "}
                    — the Meta Pixel for ad measurement, only after you accept
                    cookies. If you choose to message us on WhatsApp (a Meta
                    service), that conversation is covered by WhatsApp's own
                    terms and privacy policy.
                  </Item>
                  <Item>
                    <strong className="font-medium text-white/80">Calendly</strong>{" "}
                    — handles call bookings and the details you enter to book.
                  </Item>
                  <Item>
                    <strong className="font-medium text-white/80">MailerLite</strong>{" "}
                    — stores audit-form submissions (your email and website
                    address) and sends the audit and any follow-up emails. Every
                    email includes an unsubscribe link that works.
                  </Item>
                  <Item>
                    <strong className="font-medium text-white/80">Vercel</strong>{" "}
                    — hosts the site and provides the cookieless page-speed
                    measurement mentioned above.
                  </Item>
                </ul>
              </Block>

              <Block title="Why we're allowed to use it">
                <p>UK GDPR requires a lawful basis for each use. Ours are:</p>
                <ul className="space-y-3">
                  <Item>
                    <strong className="font-medium text-white/80">Consent</strong>{" "}
                    — for the measurement cookies (Google Analytics, Google Ads,
                    Meta Pixel) and for marketing emails. You can withdraw
                    either at any time: clear the site's cookies, or hit
                    unsubscribe.
                  </Item>
                  <Item>
                    <strong className="font-medium text-white/80">
                      Legitimate interest and steps toward a contract
                    </strong>{" "}
                    — for replying when you enquire, preparing the audit or
                    proposal you asked for, and keeping the site secure and
                    working.
                  </Item>
                </ul>
              </Block>

              <Block title="How long we keep it">
                {/* TODO(asaf): confirm these retention periods before deploying */}
                <p>
                  Only as long as it's useful to you or us — in plain terms:
                </p>
                <ul className="space-y-3">
                  <Item>
                    Enquiry and audit data: while we're talking, and for a
                    reasonable period afterwards so we have context if you come
                    back. If nothing comes of it, it gets deleted.
                  </Item>
                  <Item>
                    Email list: until you unsubscribe or ask us to remove you —
                    then you're removed.
                  </Item>
                  <Item>
                    The consent cookie expires after 180 days, at which point
                    the banner asks you again.
                  </Item>
                  <Item>
                    Client records connected to paid work: as long as UK tax and
                    accounting rules require.
                  </Item>
                </ul>
              </Block>

              <Block title="Your rights">
                <p>Under UK GDPR you can ask us, at any time, to:</p>
                <ul className="space-y-3">
                  <Item>show you the personal data we hold about you (access);</Item>
                  <Item>correct anything that's wrong (rectification);</Item>
                  <Item>delete it (erasure);</Item>
                  <Item>limit what we do with it (restriction);</Item>
                  <Item>stop using it for a particular purpose (objection);</Item>
                  <Item>hand it over in a portable format (portability);</Item>
                  <Item>withdraw any consent you've given — without affecting what happened before.</Item>
                </ul>
                <p>
                  Email <EmailLink /> and we'll respond within a month. If
                  you're not happy with how we handle it, you can complain to
                  the UK's Information Commissioner's Office at{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
                  >
                    ico.org.uk
                  </a>
                  .
                </p>
              </Block>

              <Block title="Changes to this policy">
                <p>
                  If our practices change, this page changes with them, along
                  with the date at the top. Significant changes get flagged more
                  visibly than a quiet edit. This version is effective from July
                  2026.
                </p>
              </Block>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
