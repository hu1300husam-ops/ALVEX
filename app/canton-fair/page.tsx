import type { Metadata } from "next";
import { canton } from "@/content/site";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Canton Fair support",
  description:
    "Before, during and after the Canton Fair: supplier research, interpretation, meeting support, verification and follow-up. ALVEX is not an official representative of the fair.",
  alternates: { canonical: "/canton-fair" },
};

const phases = [
  { word: "Before", index: "01", ...canton.before },
  { word: "During", index: "02", ...canton.during },
  { word: "After", index: "03", ...canton.after },
];

const checklist = [
  "Confirm your product list, specification and target quantities before you travel.",
  "Shortlist exhibitors by product category, and note the booths you want to visit.",
  "Plan a meeting schedule with time between appointments for walking the hall.",
  "Prepare samples, a price range and the terms you cannot accept.",
  "Book interpretation for the days you need it, and confirm the meeting places.",
  "Agree who owns each follow-up action after the fair, with a date for each.",
];

const questions = [
  {
    q: "Are you an official representative of the Canton Fair?",
    a: "No. ALVEX provides support services around the fair. We are not an official representative of, or affiliated with, the fair's organisers.",
  },
  {
    q: "Does your support end when the fair closes?",
    a: "No. Verification, factory visits, samples and quality checks usually follow the fair, and that is where many sourcing decisions are made.",
  },
  {
    q: "Can you support visitors who are new to China?",
    a: "Yes. We explain how a supplier meeting typically runs, help you prepare questions, and keep written notes of what was agreed.",
  },
];

export default function CantonFairPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Events & exhibitions"
        title="Make every day at Canton Fair count."
        lead="You fly home. We keep working. Support before, during and after the fair, so your time on the floor turns into sourcing decisions."
        image={{
          src: "/images/canton-hall.jpg",
          alt: "A long exhibition hall with glass ceilings and aisles lit in warm light",
        }}
      />

      <section aria-label="Phases" className="bg-navy text-porcelain">
        <ol className="mx-auto grid max-w-[1320px] gap-px bg-white/10 px-0 md:grid-cols-3">
          {phases.map((p) => (
            <li key={p.word} className="bg-navy p-8 sm:p-10 md:min-h-[360px]">
              <p className="font-display text-[13px] font-semibold tabular-nums text-steel-light">{p.index}</p>
              <h2 className="mt-6 font-display text-[clamp(36px,3.6vw,54px)] font-bold leading-none tracking-[-0.03em]">
                {p.word}
              </h2>
              <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.16em] text-steel-light">{p.label}</p>
              <p className="mt-6 text-[17px] leading-[1.65] text-porcelain/80">{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="checklist-title" className="bg-porcelain text-navy">
        <div className="mx-auto grid max-w-[1320px] gap-16 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-12 lg:gap-12 lg:px-12">
          <div className="lg:col-span-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep">Visitor checklist</p>
            <h2 id="checklist-title" className="mt-6 font-display text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.06] tracking-[-0.03em]">
              Six things to settle before you arrive.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-ink">
              A prepared visit gets more done in fewer days. Use this list whether you visit with us or on your own.
            </p>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {checklist.map((item, i) => (
              <li key={item} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-7 first:border-t-0 first:pt-0">
                <span className="font-display text-[14px] font-semibold tabular-nums text-steel-deep">0{i + 1}</span>
                <p className="text-[18px] leading-[1.6] text-ink">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="bg-midnight text-porcelain">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-28 lg:px-12">
          <h2 id="faq-title" className="font-display text-[clamp(30px,3.8vw,50px)] font-bold leading-[1.06] tracking-[-0.03em]">
            Questions visitors ask.
          </h2>
          <dl className="mt-14 grid gap-px bg-white/10 md:grid-cols-3">
            {questions.map((item) => (
              <div key={item.q} className="bg-midnight p-8 md:p-10">
                <dt className="font-display text-[22px] font-semibold leading-snug tracking-tight">{item.q}</dt>
                <dd className="mt-5 text-[16px] leading-[1.65] text-porcelain/75">{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-12 max-w-[44rem] text-[14px] leading-[1.65] text-porcelain/60">
            This page describes ALVEX&apos;s support services around the Canton Fair. ALVEX is not presented as an official
            representative of the fair&apos;s organisers.
          </p>
        </div>
      </section>

      <CtaBand title="Plan your Canton Fair support." text="Tell us the dates you plan to attend and the products you are sourcing." />
    </PageShell>
  );
}
