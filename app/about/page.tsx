import type { Metadata } from "next";
import { brand } from "@/content/site";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "ALVEX is a business services company supporting international buyers with sourcing, verification and trade support in China.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Written, not remembered",
    text: "Quotes, terms, sample decisions and inspection results are recorded so every party works from the same facts.",
  },
  {
    title: "Verified before committed",
    text: "We check the supplier, their capacity and the product before money or volume moves.",
  },
  {
    title: "Clear about scope",
    text: "We say what we handle, what a partner handles, and what remains your decision.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About ALVEX"
        title="A business services company working between two markets."
        lead={brand.description}
        image={{
          src: "/images/about-office.jpg",
          alt: "A bright, calm office interior with a long table and tall glass windows",
        }}
      />

      <section aria-labelledby="principles-title" className="bg-porcelain text-navy">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-12 lg:gap-12 lg:px-12">
          <div className="lg:col-span-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep">How we work</p>
            <h2 id="principles-title" className="mt-6 font-display text-[clamp(30px,3.8vw,52px)] font-bold leading-[1.06] tracking-[-0.03em]">
              We work as an extension of your team.
            </h2>
            <p className="mt-6 text-[18px] leading-[1.7] text-ink">
              We are not a replacement for your own judgement. We bring local access, language and records, so the
              decisions you make are based on facts you can check.
            </p>
          </div>
          <ol className="divide-y divide-line border-y border-line lg:col-span-6 lg:col-start-7">
            {principles.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[3rem_1fr] gap-4 py-9">
                <span className="font-display text-[14px] font-semibold tabular-nums text-steel-deep">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-[24px] font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-[17px] leading-[1.65] text-ink">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="scope-title" className="bg-navy text-porcelain">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <h2 id="scope-title" className="max-w-[22ch] font-display text-[clamp(30px,3.8vw,52px)] font-bold leading-[1.06] tracking-[-0.03em]">
            What we do, and what we do not do.
          </h2>
          <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2">
            <div className="bg-navy p-8 md:p-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">We do</p>
              <ul className="mt-8 space-y-5 text-[18px] leading-[1.6] text-porcelain/90">
                <li>Research and shortlist suppliers against your specification</li>
                <li>Communicate with suppliers in Chinese, and keep you informed in English</li>
                <li>Check company records, capacity and product samples</li>
                <li>Visit factories and inspect goods when the order justifies it</li>
                <li>Coordinate negotiation, samples, production follow-up and documents</li>
              </ul>
            </div>
            <div className="bg-navy p-8 md:p-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">We do not</p>
              <ul className="mt-8 space-y-5 text-[18px] leading-[1.6] text-porcelain/90">
                <li>Own warehouses, fleets or factories</li>
                <li>Make your purchasing decisions for you</li>
                <li>Represent the Canton Fair or any other event organiser</li>
                <li>Publish client names, results or testimonials without written approval</li>
                <li>Provide legal, customs or tax advice in place of a qualified professional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="where-title" className="bg-porcelain text-navy">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-12">
          <h2 id="where-title" className="font-display text-[clamp(28px,3.2vw,44px)] font-bold leading-[1.1] tracking-[-0.025em] lg:col-span-5">
            Based in China. Working in English.
          </h2>
          <p className="text-[18px] leading-[1.7] text-ink lg:col-span-6 lg:col-start-7">
            Our team works in Chinese and English, so your supplier conversations are handled in the language each
            side expects. We are based in China, and we work with buyers in the markets they serve.
          </p>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
