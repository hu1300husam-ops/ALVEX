"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { services, contact } from "@/content/site";

/**
 * Project inquiry. Submits to /api/inquiry, which validates the input,
 * applies spam checks and delivers to alvextrade1@gmail.com once the mail
 * provider is configured. Every outcome is shown explicitly. The success
 * message appears only when the server confirms delivery.
 */

type Status =
  | { kind: "idle" }
  | { kind: "invalid"; message: string }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "not_configured" }
  | { kind: "error"; message: string };

const field =
  "w-full border-0 border-b border-navy/25 bg-transparent px-0 py-3 text-[16px] text-navy placeholder:text-steel focus:border-navy focus:outline-none focus:ring-0";
const label = "block text-[13px] font-semibold tracking-[0.01em] text-steel-deep";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const startedAt = useRef<number>(0);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = Object.fromEntries(
      ["name", "email", "company", "country", "service", "category", "quantity", "requirements", "website"].map((k) => [
        k,
        String(form.get(k) ?? ""),
      ]),
    );
    payload.startedAt = startedAt.current;

    if (!String(payload.name).trim() || !String(payload.email).trim() || String(payload.requirements).trim().length < 10) {
      setStatus({ kind: "invalid", message: "Please add your name, a valid email and a short description of the project." });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; code?: string; error?: string };
      if (res.ok && data.ok) {
        setStatus({ kind: "sent" });
        e.currentTarget.reset();
        startedAt.current = Date.now();
        return;
      }
      if (data.code === "not_configured") {
        setStatus({ kind: "not_configured" });
        return;
      }
      setStatus({ kind: "error", message: data.error ?? "We could not send your enquiry. Please try again." });
    } catch {
      setStatus({ kind: "error", message: "The connection failed. Please try again, or email us directly." });
    }
  };

  const busy = status.kind === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-9 sm:grid-cols-2 sm:gap-x-10">
      {/* Honeypot: hidden from people and assistive technology. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="service" className={label}>Service</label>
        <select id="service" name="service" defaultValue="" className={`${field} appearance-none`}>
          <option value="" disabled>Choose a service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="category" className={label}>Product or sourcing category</label>
        <input id="category" name="category" type="text" placeholder="e.g. housewares" className={field} />
      </div>

      <div>
        <label htmlFor="quantity" className={label}>Estimated quantity (optional)</label>
        <input id="quantity" name="quantity" type="text" className={field} />
      </div>

      <div>
        <label htmlFor="name" className={label}>Your name</label>
        <input id="name" name="name" type="text" autoComplete="name" required className={field} />
      </div>

      <div>
        <label htmlFor="company" className={label}>Company (optional)</label>
        <input id="company" name="company" type="text" autoComplete="organization" className={field} />
      </div>

      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required className={field} />
      </div>

      <div>
        <label htmlFor="country" className={label}>Country</label>
        <input id="country" name="country" type="text" autoComplete="country-name" className={field} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="requirements" className={label}>Project requirements</label>
        <textarea
          id="requirements"
          name="requirements"
          rows={5}
          required
          placeholder="What you are sourcing, the specification, the timing and anything you need from us."
          className={`${field} resize-y`}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={busy}
          aria-busy={busy}
          className="inline-flex min-h-13 items-center justify-center gap-3 bg-navy px-8 py-4 text-[15px] font-semibold text-porcelain transition-colors duration-300 hover:bg-navy/85 active:bg-midnight disabled:cursor-wait disabled:opacity-70"
        >
          {busy ? "Sending…" : "Send enquiry"}
          {!busy && <span aria-hidden>→</span>}
        </button>

        <div role="status" aria-live="polite" className="mt-5 max-w-[38rem] text-[15px] leading-[1.6]">
          {status.kind === "idle" && (
            <p className="text-steel-deep">We reply by email, usually within one working day.</p>
          )}
          {status.kind === "invalid" && <p className="text-[#8a1f1f]">{status.message}</p>}
          {status.kind === "sending" && <p className="text-steel-deep">Sending your enquiry…</p>}
          {status.kind === "sent" && (
            <p className="text-navy">
              <strong className="font-semibold">Thank you.</strong> Your enquiry has been sent to ALVEX. We reply by
              email.
            </p>
          )}
          {status.kind === "not_configured" && (
            <p className="text-[#8a1f1f]">
              Online submission is not active yet. Please email{" "}
              <a className="underline" href={contact.email.href}>{contact.email.label}</a> directly.
            </p>
          )}
          {status.kind === "error" && <p className="text-[#8a1f1f]">{status.message}</p>}
        </div>
      </div>
    </form>
  );
}
