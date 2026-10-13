"use client";

import { useState, type FormEvent } from "react";
import { services, contact } from "@/content/site";

/**
 * Project inquiry. There is no server-side backend yet, so this form does not
 * claim to send a message. On submit it opens the visitor's email app with the
 * request filled in and addressed to ALVEX. The notice under the button says
 * this plainly. When a backend is configured, replace the handler and remove
 * the notice.
 */

const field =
  "w-full border-0 border-b border-navy/25 bg-transparent px-0 py-3 text-[16px] text-navy placeholder:text-steel focus:border-navy focus:outline-none focus:ring-0";
const label = "block text-[13px] font-semibold tracking-[0.01em] text-steel-deep";

export function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "invalid">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const get = (k: string) => String(form.get(k) ?? "").trim();
    if (!get("name") || !get("email") || !get("requirements")) {
      setStatus("invalid");
      return;
    }
    setStatus("idle");
    const body = [
      `Name: ${get("name")}`,
      `Company: ${get("company") || "-"}`,
      `Email: ${get("email")}`,
      `Country: ${get("country") || "-"}`,
      `Service: ${get("service") || "-"}`,
      `Product or sourcing category: ${get("category") || "-"}`,
      `Estimated quantity: ${get("quantity") || "-"}`,
      "",
      "Project requirements:",
      get("requirements"),
    ].join("\n");
    const subject = `Project enquiry — ${get("company") || get("name")}`;
    window.location.href = `mailto:${contact.email.label}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="inquiry-note" className="grid gap-9 sm:grid-cols-2 sm:gap-x-10">
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
          className="inline-flex min-h-13 items-center justify-center gap-3 bg-navy px-8 py-4 text-[15px] font-semibold text-porcelain transition-colors duration-300 hover:bg-navy/85 active:bg-midnight"
        >
          Prepare my enquiry
          <span aria-hidden>→</span>
        </button>
        <p id="inquiry-note" className="mt-4 max-w-[36rem] text-[14px] leading-[1.6] text-steel-deep" role="status">
          {status === "invalid"
            ? "Please add your name, email and project requirements."
            : "This opens your email app with the request addressed to ALVEX. Nothing is sent from this page."}
        </p>
      </div>
    </form>
  );
}
