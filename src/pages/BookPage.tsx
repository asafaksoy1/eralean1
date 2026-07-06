import type { ReactNode } from "react";
import { BOOKING_EMBED, WHATSAPP, WHATSAPP_DISPLAY, EMAIL } from "../lib/constants";
import { trackLead } from "../lib/analytics";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { FadeIn } from "../components/motion/FadeIn";
import { Dot } from "../components/brand/Dot";
import { pageMeta, breadcrumbSchema } from "../lib/seo";

const TITLE = "Book a call — EraLean";
const DESCRIPTION =
  "Book a free 30-minute strategy call. We map where your customers come from, find the biggest leak in your funnel, and tell you straight what it would take to fix it.";
const PATH = "/book";

export const meta = () => [
  { title: TITLE },
  { name: "description", content: DESCRIPTION },
  ...pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Book a call", path: PATH },
  ]),
];

function Marker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
      <Dot />
      {children}
    </div>
  );
}

// No FloatingWhatsApp here — this page IS the conversion point, and the
// scheduler should hold full attention. WhatsApp/email live inline instead.
// Unlike the old Calendly embed, Google's appointment embed emits no
// booking-completed postMessage, so there is no scheduled-event conversion
// signal to listen for here — bookings are tracked in Google Calendar itself.
export default function BookPage() {
  return (
    <div className="bg-ink text-white">
      <Nav variant="solid" offer="general" />
      <main>
        <BookSection />
      </main>
      <Footer />
    </div>
  );
}

/* ── Booking ──────────────────────────────────────────────────────────── */

const ON_THE_CALL = [
  "We map where your customers come from today.",
  "We find the biggest leak in your funnel.",
  "You get an honest recommendation and what it would cost — even if the answer is not us.",
];

function BookSection() {
  return (
    <section className="px-6 md:px-10 pt-20 md:pt-28 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10">
          {/* Left — what the call is, and how else to reach us */}
          <div className="lg:col-span-5">
            <FadeIn>
              <Marker>Free strategy call</Marker>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h1 className="mt-7 font-display tracking-display font-semibold text-white text-5xl md:text-6xl">
                Book your call<span className="text-volt">.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="mt-6 max-w-md text-lg text-white/60">
                30 minutes. Straight answers. No pitch, no obligation.
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="mt-12">
                <div className="text-sm text-white/45">On the call</div>
                <ul className="mt-5 space-y-4">
                  {ON_THE_CALL.map((item) => (
                    <li key={item} className="flex items-start gap-3.5">
                      <Dot className="mt-[7px]" />
                      <span className="max-w-sm text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-12 border-t border-white/10 pt-8">
                <div className="text-sm text-white/45">
                  Prefer to talk another way?
                </div>
                <div className="mt-4 flex flex-col gap-3 text-sm font-light">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackLead("general")}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    WhatsApp — {WHATSAPP_DISPLAY}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — the scheduler */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-carbon overflow-hidden">
                <iframe
                  src={BOOKING_EMBED}
                  title="Book a call with EraLean"
                  className="h-[700px] w-full bg-white"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Quiet reassurance strip */}
        {/* TODO(asaf): confirm these commitments */}
        <FadeIn>
          <div className="mt-16 border-t border-white/10 pt-6">
            <p className="text-sm font-light text-white/45">
              Founder-led · Reply within one business day · No long contracts —
              30-day rolling
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
