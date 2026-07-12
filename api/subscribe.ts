// Vercel serverless function — keeps the MailerLite secret server-side.
// The browser posts { email, website?, offer } here; the token never ships
// to the client.
//
// Required env vars (set in Vercel → Project → Settings → Environment
// Variables; never commit them):
//   MAILERLITE_API_TOKEN  — API token (MailerLite → Integrations → API)
//   MAILERLITE_GROUP_ID   — numeric group id new audit leads are added to
//
// This file lives outside src/, so it is not part of the Vite client build or
// `tsc` (tsconfig include = ["src"]). Vercel compiles it on deploy.

type Req = { method?: string; body?: unknown };
type Res = {
  status: (code: number) => Res;
  json: (body: unknown) => void;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAILERLITE_ENDPOINT = "https://connect.mailerlite.com/api/subscribers";

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const token = process.env.MAILERLITE_API_TOKEN;
  // Fallback to the 'Eralean' group so audit leads are never captured
  // groupless (and thus unfindable by the fulfilment routine) if the env var
  // is unset in Vercel. An explicit env var still wins.
  const groupId = process.env.MAILERLITE_GROUP_ID || "189195315233949270";
  if (!token) {
    // Misconfiguration, not the visitor's fault — don't leak which var.
    return res
      .status(500)
      .json({ error: "Subscriber service is not configured yet." });
  }

  const body =
    typeof req.body === "string" ? safeParse(req.body) : (req.body ?? {});
  const data = (body ?? {}) as Record<string, unknown>;
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const website = typeof data.website === "string" ? data.website.trim() : "";
  const offer = typeof data.offer === "string" ? data.offer : "general";
  const revenue = typeof data.revenue === "string" ? data.revenue.trim() : "";

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }

  // Full payload includes custom fields. If the account doesn't have those
  // fields, MailerLite returns 422 — we retry with email+group only so the
  // lead is still captured rather than dropped.
  const fields: Record<string, string> = { source_offer: offer };
  if (website) fields.website = website;
  // Paid-ad LP sends a monthly-revenue band. Store it and derive a coarse
  // lead_quality so the audit concierge + booked calls prioritise brands that
  // can actually afford £1,400/mo (an 'ideal' brand is ~£600k+/yr, where a
  // 20% email lift dwarfs the fee; 'low' brands are captured but deprioritised).
  if (revenue) {
    fields.revenue_band = revenue;
    fields.lead_quality = leadQuality(revenue);
  }

  const fullPayload: Record<string, unknown> = { email, fields };
  if (groupId) fullPayload.groups = [groupId];

  try {
    let r = await postSubscriber(token, fullPayload);

    if (r.status === 422) {
      const minimal: Record<string, unknown> = { email };
      if (groupId) minimal.groups = [groupId];
      r = await postSubscriber(token, minimal);
    }

    if (!r.ok) {
      return res
        .status(502)
        .json({ error: "Could not subscribe right now. Please try again." });
    }

    // Fire an internal ping so Asaf can follow up fast. The lead is already
    // saved above, so a webhook hiccup must never fail the request — swallow
    // any error and still return 200.
    await notifyNewLead({ email, website, revenue, offer }).catch(() => {});

    return res.status(200).json({ ok: true });
  } catch {
    return res
      .status(502)
      .json({ error: "Could not reach the subscriber service." });
  }
}

// Map a monthly-revenue band slug (from AuditForm's REVENUE_OPTIONS) to a
// coarse quality tier. Kept in sync with the form's option values.
function leadQuality(revenue: string): string {
  switch (revenue) {
    case "200k-plus":
    case "50k-200k":
      return "ideal";
    case "10k-50k":
      return "mid";
    case "under-10k":
      return "low";
    default:
      return "unknown";
  }
}

// Human-readable revenue band for the internal notification.
function revenueLabel(revenue: string): string {
  switch (revenue) {
    case "under-10k":
      return "Under £10k/mo";
    case "10k-50k":
      return "£10k–£50k/mo";
    case "50k-200k":
      return "£50k–£200k/mo";
    case "200k-plus":
      return "£200k+/mo";
    default:
      return "not given";
  }
}

// Post a new-lead notice to a Slack/Discord incoming webhook so Asaf can follow
// up within minutes. Sends both `text` (Slack) and `content` (Discord) so one
// URL works for either. No-ops when LEAD_NOTIFY_WEBHOOK_URL is unset, so the
// code is inert until the webhook is configured in Vercel. 3s timeout so a slow
// webhook never holds the serverless function open.
async function notifyNewLead(lead: {
  email: string;
  website: string;
  revenue: string;
  offer: string;
}): Promise<void> {
  const url = process.env.LEAD_NOTIFY_WEBHOOK_URL;
  if (!url) return;

  const quality = (lead.revenue ? leadQuality(lead.revenue) : "unknown").toUpperCase();
  const text = [
    "🔔 New EraLean audit lead",
    `Quality: ${quality}`,
    `Revenue: ${revenueLabel(lead.revenue)}`,
    `Store: ${lead.website || "not given"}`,
    `Email: ${lead.email}`,
    `Offer: ${lead.offer}`,
  ].join("\n");

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 3000);
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, content: text }),
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timer);
  }
}

function postSubscriber(token: string, payload: Record<string, unknown>) {
  return fetch(MAILERLITE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });
}

function safeParse(s: string): unknown {
  try {
    return JSON.parse(s);
  } catch {
    return {};
  }
}
