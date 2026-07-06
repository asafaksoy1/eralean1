// TODO(asaf): have a solicitor review before relying on these
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FadeIn } from "../components/motion/FadeIn";
import { Dot } from "../components/brand/Dot";
import { EMAIL } from "../lib/constants";
import { pageMeta } from "../lib/seo";

const TITLE = "Terms of service — EraLean";
const DESCRIPTION =
  "The plain-English terms that cover your use of eralean.com — what the site is for, what's ours, and where you stand.";

export const meta = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
  ...pageMeta({ title: TITLE, description: DESCRIPTION, path: "/terms" }),
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

// One terms section — hairline-divided, smaller display heading, readable body.
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

export default function TermsPage() {
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
                Terms of service<span className="text-volt">.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/60">
                The short version: this site is here to show you what we do.
                Actual client work runs on a written proposal, not this page.
              </p>
              <p className="mt-4 text-sm text-white/45">Last updated: July 2026</p>
            </FadeIn>
          </div>
        </section>

        {/* ── Terms body ─────────────────────────────────────────────── */}
        <section className="border-t border-white/10 px-6 md:px-10 py-24 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl divide-y divide-white/10">
              <Block title="Who we are">
                <p>
                  EraLean is a growth agency based in Aylesbury, United Kingdom.
                  We build and run websites, ads, and email marketing for
                  businesses. This site — eralean.com — is where we explain
                  that. By using it, you agree to these terms.
                </p>
              </Block>

              <Block title="What this site is">
                <p>
                  The site is informational. Its content — pages, articles,
                  guides, examples — is provided as-is. We work to keep it
                  accurate and current, but we don't guarantee it's free of
                  errors or that everything on it fits your specific situation.
                  Nothing here is professional advice for your particular
                  business; that's what a conversation is for.
                </p>
              </Block>

              <Block title="Quotes and client work">
                <p>
                  These terms cover your use of the website only — they are not
                  the terms of a client engagement. Quotes and proposals are
                  made per project, in writing, and it's those documents that
                  govern any actual work we do together: scope, price,
                  timelines, and everything else. Nothing on this site is a
                  binding offer.
                </p>
              </Block>

              <Block title="Intellectual property">
                <p>
                  The content of this site — the copy, design, code, and brand —
                  belongs to EraLean. You're welcome to read it, share links to
                  it, and quote it with credit. Don't republish it wholesale or
                  pass it off as your own.
                </p>
                <p>
                  Client names, logos, and screenshots shown in our case studies
                  remain the property of their respective owners. They appear
                  here to describe work we actually did, not to imply anything
                  beyond that.
                </p>
              </Block>

              <Block title="Links to other services">
                <p>
                  The site links out to third-party services — booking a call
                  runs through Calendly, and the chat button opens WhatsApp.
                  Those services have their own terms and privacy policies,
                  which apply the moment you use them. We don't control them and
                  aren't responsible for them.
                </p>
              </Block>

              <Block title="Liability">
                <p>
                  To the extent permitted by law, we're not liable for loss or
                  damage arising from your use of this site or reliance on its
                  content. Nothing in these terms excludes or limits any
                  liability that can't be excluded under the law of England and
                  Wales — including for death or personal injury caused by
                  negligence, or for fraud.
                </p>
              </Block>

              <Block title="Governing law">
                <p>
                  These terms are governed by the law of England and Wales, and
                  any dispute about them belongs to the courts of England and
                  Wales.
                </p>
              </Block>

              <Block title="Changes and contact">
                <p>
                  If these terms change, this page changes, along with the date
                  at the top. Questions about any of it:{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-white/80 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
                  >
                    {EMAIL}
                  </a>
                  .
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
