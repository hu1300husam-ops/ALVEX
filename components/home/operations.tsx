import { Reveal } from "@/components/ui/reveal";
import { Plate } from "@/components/brand/plate";

/**
 * Operations as a working ledger: what the team does on the ground, and what
 * the client receives. Written as operating practice, not as proof of events.
 * Photography of real ALVEX work will be added once it is approved.
 */
const ledger = [
  {
    activity: "Supplier meetings",
    what: "Meetings held with suppliers on your brief, with the outcomes recorded in writing for you.",
  },
  {
    activity: "Product inspections",
    what: "Checks of goods against your specification, before they leave the factory.",
  },
  {
    activity: "Factory visits",
    what: "On-site review of production capacity, process and working conditions.",
  },
  {
    activity: "Trade fair coverage",
    what: "Preparation, meeting support and follow-up around exhibitions, including the Canton Fair.",
  },
];

export function Operations() {
  return (
    <section id="operations" aria-labelledby="operations-title" className="bg-porcelain">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep">06 — Our operations</p>
            <h2
              id="operations-title"
              className="font-display text-display-m font-bold leading-[1.04] tracking-[-0.03em] text-navy"
            >
              Behind every decision, real work on the ground.
            </h2>
            <Plate ratio="4 / 3" tone="navy" className="mt-12 hidden lg:block">
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <p className="font-display text-[44px] font-semibold leading-[1.02] tracking-[-0.03em]">
                  Meetings. Inspections. Factory visits.
                </p>
              </div>
            </Plate>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="border-t-2 border-navy">
              {ledger.map((row, i) => (
                <Reveal as="li" key={row.activity} delay={i * 0.05} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-line py-9 md:grid-cols-[3.5rem_1fr_1.4fr] md:gap-x-8">
                  <span className="pt-1.5 text-[13px] tabular-nums text-steel-deep">0{i + 1}</span>
                  <p className="font-display text-[24px] font-semibold leading-tight tracking-tight text-navy md:text-[26px]">
                    {row.activity}
                  </p>
                  <p className="col-start-2 mt-3 text-[16px] leading-[1.65] text-ink md:col-start-auto md:mt-1">{row.what}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
