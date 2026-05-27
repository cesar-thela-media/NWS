import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  name:     string;
  email:    string;
  phone?:   string;
  service?: string;
  message?: string;
}

function validate(body: ContactBody): Record<string, string> | null {
  const errors: Record<string, string> = {};
  if (!body.name?.trim())  errors.name  = "Full name is required.";
  if (!body.email?.trim()) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim()))
    errors.email = "Please enter a valid email address.";
  return Object.keys(errors).length ? errors : null;
}

function buildEmailHtml(body: ContactBody): string {
  return `
    <h2 style="font-family:sans-serif;color:#0c0f14">New Consultation Request — NWS Website</h2>
    <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
      <tr><td style="padding:6px 16px 6px 0;color:#666;white-space:nowrap"><strong>Name</strong></td>
          <td style="padding:6px 0">${body.name}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666"><strong>Email</strong></td>
          <td><a href="mailto:${body.email}">${body.email}</a></td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666"><strong>Phone</strong></td>
          <td>${body.phone || "—"}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666"><strong>Service</strong></td>
          <td>${body.service || "—"}</td></tr>
    </table>
    <h3 style="font-family:sans-serif;color:#0c0f14;margin-top:24px">Message</h3>
    <p style="font-family:sans-serif;white-space:pre-wrap">${body.message || "—"}</p>
  `;
}

export async function POST(req: NextRequest) {
  /* ── Parse ─────────────────────────────────────────────── */
  let body: ContactBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  /* ── Validate ──────────────────────────────────────────── */
  const fieldErrors = validate(body);
  if (fieldErrors) {
    return NextResponse.json({ fieldErrors }, { status: 422 });
  }

  /* ── Deliver ───────────────────────────────────────────────────────────────
   *
   * Pick ONE delivery method and uncomment it. Add the env var(s) to
   * .env.local (dev) and your hosting provider's env config (prod).
   *
   * ── Option A: Resend ──────────────────────────────────────────────────────
   * npm install resend
   * Env: RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL
   *
   *   import { Resend } from "resend";
   *   const resend = new Resend(process.env.RESEND_API_KEY);
   *   const { error } = await resend.emails.send({
   *     from: process.env.CONTACT_FROM_EMAIL ?? "website@nws-homes.com",
   *     to:   process.env.CONTACT_TO_EMAIL   ?? "info@nws-homes.com",
   *     replyTo: body.email,
   *     subject: `New Consultation Request — ${body.service ?? "General"}`,
   *     html: buildEmailHtml(body),
   *   });
   *   if (error) throw new Error(error.message);
   *
   * ── Option B: Webhook (Zapier / Make.com / n8n) ───────────────────────────
   * Env: CONTACT_WEBHOOK_URL
   *
   *   const res = await fetch(process.env.CONTACT_WEBHOOK_URL!, {
   *     method: "POST",
   *     headers: { "Content-Type": "application/json" },
   *     body: JSON.stringify(body),
   *   });
   *   if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
   *
   * ── Option C: Nodemailer / SMTP ───────────────────────────────────────────
   * npm install nodemailer @types/nodemailer
   * Env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL
   *
   *   import nodemailer from "nodemailer";
   *   const transport = nodemailer.createTransport({
   *     host: process.env.SMTP_HOST,
   *     port: Number(process.env.SMTP_PORT ?? 587),
   *     auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
   *   });
   *   await transport.sendMail({
   *     from: `"NWS Website" <${process.env.SMTP_USER}>`,
   *     to: process.env.CONTACT_TO_EMAIL ?? "info@nws-homes.com",
   *     replyTo: body.email,
   *     subject: `New Consultation Request — ${body.service ?? "General"}`,
   *     html: buildEmailHtml(body),
   *   });
   *
   * ─────────────────────────────────────────────────────────────────────── */

  const hasDelivery =
    !!process.env.RESEND_API_KEY ||
    !!process.env.CONTACT_WEBHOOK_URL ||
    !!process.env.SMTP_HOST;

  if (!hasDelivery) {
    /* Development fallback — logs to console, still returns success so the
       form flow can be tested end-to-end without real credentials. */
    console.log(
      "\n[contact form — no delivery configured]\n",
      JSON.stringify(body, null, 2),
    );
    return NextResponse.json({ ok: true });
  }

  try {
    /* Real delivery goes here once you uncomment an option above */
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact form] delivery error:", err);
    return NextResponse.json(
      { error: "We couldn’t send your message. Please call us at (281) 299-2309." },
      { status: 500 },
    );
  }
}

// Expose for tests / health checks
export { buildEmailHtml };
