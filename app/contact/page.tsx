import type { Metadata } from "next";
import { contact } from "@/content/site";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { CopyButton } from "@/components/site/copy-button";
import { InquiryForm } from "@/components/home/inquiry-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with ALVEX. Share your product, quantity and timeline, and we will reply with the next practical step.",
  alternates: { canonical: "/contact" },
};

const include = [
  "The product, and a link or photo if you have one",
  "The specification or the key requirements",
  "The target quantity and your preferred timeline",
  "The service you need: sourcing, verification, negotiation, visits or shipping",
  "Your company name and the market you sell into",
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let’s build your next opportunity in China."
        lead="Tell us what you are sourcing, or the support your business needs. We reply with the next practical step."
      />

      <section aria-labelledby="channels-title" className="bg-navy text-porcelain">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-5 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 md:pb-28">
          <div className="lg:col-span-5">
            <h2 id="channels-title" className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">
              Reach us directly
            </h2>
            <ul className="mt-10 grid gap-9">
              <li>
                <a href={contact.phone.href} className="font-display text-[22px] font-semibold tracking-[-0.01em] transition-colors hover:text-[#8FA8FF]">
                  {contact.phone.label}
                </a>
                <span className="mt-1 block text-[14px] text-porcelain/60">Phone</span>
              </li>
              <li>
                <a href={contact.email.href} className="font-display text-[22px] font-semibold tracking-[-0.01em] transition-colors hover:text-[#8FA8FF]">
                  {contact.email.label}
                </a>
                <span className="mt-1 block text-[14px] text-porcelain/60">Email</span>
              </li>
              <li>
                <CopyButton value={contact.wechat.label} label={contact.wechat.label} />
                <span className="mt-1 block text-[14px] text-porcelain/60">WeChat</span>
              </li>
              <li>
                <p className="font-display text-[22px] font-semibold tracking-[-0.01em]">{contact.social.label}</p>
                <span className="mt-1 block text-[14px] text-porcelain/60">Social</span>
              </li>
            </ul>
            <p className="mt-12 border-t border-white/15 pt-8 text-[15px] leading-[1.65] text-porcelain/70">
              Based in China. We reply in English and Chinese.
            </p>
          </div>

          <div className="bg-porcelain p-7 text-navy sm:p-10 lg:col-span-6 lg:col-start-7 lg:p-12">
            <h2 className="font-display text-[24px] font-semibold tracking-[-0.015em]">Start Your Project</h2>
            <p className="mt-3 text-[15px] text-steel-deep">Share the outline. We reply with the next practical step.</p>
            <div className="mt-10">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="include-title" className="bg-porcelain text-navy">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
          <h2 id="include-title" className="font-display text-[clamp(28px,3.2vw,44px)] font-bold leading-[1.1] tracking-[-0.025em] lg:col-span-5">
            What helps us reply quickly.
          </h2>
          <ol className="lg:col-span-6 lg:col-start-7">
            {include.map((item, i) => (
              <li key={item} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-6 first:border-t-0 first:pt-0">
                <span className="font-display text-[14px] font-semibold tabular-nums text-steel-deep">0{i + 1}</span>
                <p className="text-[17px] leading-[1.6] text-ink">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
