"use client";

import { useState } from "react";
import { contact } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { InquiryForm } from "@/components/home/inquiry-form";

/**
 * Conversion finale. The inquiry form sits on a light panel for contrast. The
 * WhatsApp channel is not listed because it has not been confirmed. Phone,
 * email and WeChat are the verified channels.
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

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-midnight text-porcelain">
      <div className="mx-auto grid max-w-[1320px] gap-16 px-5 py-20 sm:px-8 md:py-32 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <Reveal className="lg:col-span-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">09 — Start a conversation</p>
          <h2
            id="contact-title"
            className="mt-7 font-display text-[clamp(38px,5.4vw,80px)] font-bold leading-[1.02] tracking-[-0.035em] text-balance"
          >
            Let’s build your next opportunity in China.
          </h2>
          <p className="mt-7 max-w-[26rem] text-[17px] leading-[1.65] text-porcelain/75">
            Tell us what you’re sourcing or the support your business needs.
          </p>

          <div className="mt-14 border-t border-white/15 pt-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">Or reach us directly</p>
            <ul className="mt-6 grid gap-5 text-[17px]">
              <li>
                <a href={contact.phone.href} className="font-display text-[22px] font-semibold tracking-[-0.01em] hover:text-[#8FA8FF]">
                  {contact.phone.label}
                </a>
                <span className="block text-[14px] text-porcelain/60">Phone</span>
              </li>
              <li>
                <a href={contact.email.href} className="font-display text-[22px] font-semibold tracking-[-0.01em] hover:text-[#8FA8FF]">
                  {contact.email.label}
                </a>
                <span className="block text-[14px] text-porcelain/60">Email</span>
              </li>
              <li>
                <button type="button" onClick={copyWeChat} className="text-left font-display text-[22px] font-semibold tracking-[-0.01em] hover:text-[#8FA8FF]">
                  {contact.wechat.label}
                </button>
                <span className="block text-[14px] text-porcelain/60" role="status">
                  {copied ? "WeChat ID copied" : "WeChat · tap to copy"}
                </span>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="bg-porcelain p-7 text-navy sm:p-10 lg:col-span-6 lg:col-start-7 lg:p-12">
          <h3 className="font-display text-[24px] font-semibold tracking-[-0.015em]">Start Your Project</h3>
          <p className="mt-3 text-[15px] text-steel-deep">Share the outline. We reply with the next practical step.</p>
          <div className="mt-10">
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
