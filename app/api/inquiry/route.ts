import { NextResponse } from "next/server";

/**
 * Project inquiry endpoint.
 *
 * Delivery uses the Resend HTTP API when RESEND_API_KEY and INQUIRY_FROM are
 * set in the server environment. Without them the endpoint returns 503 and
 * does NOT claim that anything was sent. Nothing here is sent until the
 * provider is configured and a test message has been delivered.
 *
 * Spam prevention: a hidden honeypot field, a minimum time-to-submit check,
 * a request-size limit and a per-IP rate limit (in-memory; per instance).
 */

export const runtime = "nodejs";

const RECIPIENT = "alvextrade1@gmail.com";
const MAX_BODY_BYTES = 12_000;
const MIN_FILL_MS = 2_500;
const WINDOW_MS = 10 * 60_000;
const MAX_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

type Fields = {
  name: string;
  email: string;
  company: string;
  country: string;
  service: string;
  category: string;
  quantity: string;
  requirements: string;
};

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max) : "";

function validate(raw: Record<string, unknown>): { ok: true; fields: Fields } | { ok: false; error: string } {
  const fields: Fields = {
    name: clean(raw.name, 120),
    email: clean(raw.email, 200),
    company: clean(raw.company, 160),
    country: clean(raw.country, 80),
    service: clean(raw.service, 120),
    category: clean(raw.category, 160),
    quantity: clean(raw.quantity, 80),
    requirements: clean(raw.requirements, 4000),
  };
  if (fields.name.length < 2) return { ok: false, error: "Please enter your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email)) return { ok: false, error: "Please enter a valid email address." };
  if (fields.requirements.length < 10) return { ok: false, error: "Please describe your project requirements (at least 10 characters)." };
  return { ok: true, fields };
}

function ipOf(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "unknown").trim();
}

export async function POST(req: Request) {
  const declared = Number(req.headers.get("content-length") ?? "0");
  if (declared > MAX_BODY_BYTES) return NextResponse.json({ ok: false, error: "Request too large." }, { status: 413 });

  let raw: Record<string, unknown>;
  try {
    const text = await req.text();
    if (text.length > MAX_BODY_BYTES) return NextResponse.json({ ok: false, error: "Request too large." }, { status: 413 });
    raw = JSON.parse(text);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this field. Respond as if successful.
  if (typeof raw.website === "string" && raw.website.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const startedAt = Number(raw.startedAt ?? 0);
  if (!startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return NextResponse.json({ ok: false, error: "Please take a moment to check your details, then send again." }, { status: 400 });
  }

  if (rateLimited(ipOf(req))) {
    return NextResponse.json({ ok: false, error: "Too many attempts. Please try again later or email us directly." }, { status: 429 });
  }

  const v = validate(raw);
  if (!v.ok) return NextResponse.json({ ok: false, error: v.error }, { status: 400 });
  const f = v.fields;

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_FROM;
  if (!apiKey || !from) {
    return NextResponse.json(
      {
        ok: false,
        code: "not_configured",
        error: "Online submission is not active yet. Please email alvextrade1@gmail.com directly.",
      },
      { status: 503 },
    );
  }

  const lines = [
    `Name: ${f.name}`,
    `Company: ${f.company || "-"}`,
    `Email: ${f.email}`,
    `Country: ${f.country || "-"}`,
    `Service: ${f.service || "-"}`,
    `Product or sourcing category: ${f.category || "-"}`,
    `Estimated quantity: ${f.quantity || "-"}`,
    "",
    "Project requirements:",
    f.requirements,
  ];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: f.email,
        subject: `Project enquiry — ${f.company || f.name}`,
        text: lines.join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, code: "provider_error", error: "We could not send your enquiry. Please email alvextrade1@gmail.com directly." },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, code: "provider_error", error: "We could not send your enquiry. Please email alvextrade1@gmail.com directly." },
      { status: 502 },
    );
  }
}
