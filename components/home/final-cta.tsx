"use client";

import { useState } from "react";
import { contact } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

/**
 * Final call to action. "Start Your Project" opens an email draft, which works
 * today. The multi-step inquiry form is NOT built yet: it needs a confirmed
 * backend (endpoint, spam protection, privacy notice) before it can be enabled.
 */
export function FinalCta() {
  const [copied, setCopied] = useState(false);

  const copyWeChat = async () => {
    try {
      await navigator.clipboard.writeText(contact.wechat.label);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const mailSubject = encodeURIComponent("Project enquiry — ALVEX");
  const mailBody = encodeURIComponent(
    "Hello ALVEX team,\n\nWhat I am sourcing or the support my business needs:\n\nProduct or industry:\nDestination country:\nEstimated quantity (optional):\nCompany name (optional):\n",
  );

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-midnight text-porcelain">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel">09 — Start a conversation</p>
            <h2 id="contact-title" className="font-display text-display-l font-bold leading-[1] tracking-[-0.035em]">
              Let&rsquo;s build your next opportunity in China.
            </h2>
            <p className="mt-8 max-w-[34rem] text-[19px] leading-[1.6] text-white/80">
              Tell us what you&rsquo;re sourcing or the support your business needs.
            </p>
            <a
              href={`mailto:${contact.email.label}?subject=${mailSubject}&body=${mailBody}`}
              className="mt-10 inline-flex min-h-14 items-center gap-3 bg-porcelain px-7 py-4 text-[16px] font-semibold text-navy transition-colors hover:bg-white"
            >
              Start Your Project
              <span aria-hidden>→</span>
            </a>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:self-end" delay={0.1}>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel">Or reach us directly</p>
            <ul className="divide-y divide-white/12 border-y border-white/12 text-[16px]">
              <li>
                <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-between gap-4 py-3 transition-colors hover:text-white">
                  <span>
                    <span className="block text-[12px] uppercase tracking-[0.14em] text-steel">WhatsApp</span>
                    {contact.whatsapp.label}
                  </span>
                  <span aria-hidden>→</span>
                </a>
              </li>
              <li>
                <button type="button" onClick={copyWeChat} className="flex min-h-14 w-full items-center justify-between gap-4 py-3 text-left transition-colors hover:text-white">
                  <span>
                    <span className="block text-[12px] uppercase tracking-[0.14em] text-steel">WeChat · tap to copy ID</span>
                    {contact.wechat.label}
                  </span>
                  <span className="text-[13px] text-steel" aria-live="polite">{copied ? "Copied" : "Copy"}</span>
                </button>
              </li>
              <li>
                <a href={contact.email.href} className="flex min-h-14 items-center justify-between gap-4 py-3 transition-colors hover:text-white">
                  <span>
                    <span className="block text-[12px] uppercase tracking-[0.14em] text-steel">Email</span>
                    {contact.email.label}
                  </span>
                  <span aria-hidden>→</span>
                </a>
              </li>
              <li>
                <a href={contact.phone.href} className="flex min-h-14 items-center justify-between gap-4 py-3 transition-colors hover:text-white">
                  <span>
                    <span className="block text-[12px] uppercase tracking-[0.14em] text-steel">Phone</span>
                    {contact.phone.label}
                  </span>
                  <span aria-hidden>→</span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
