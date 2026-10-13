import { Reveal } from "@/components/ui/reveal";
import { Coordinates, Plate } from "@/components/brand/plate";

const points = [
  {
    title: "Local market knowledge",
    text: "Knowing which product categories are concentrated in Yiwu and which suppliers are active there, so the search starts in the right place.",
  },
  {
    title: "On-site commercial support",
    text: "Meetings, factory visits and inspections carried out by our team in China, alongside remote communication.",
  },
  {
    title: "Language and negotiation",
    text: "Communication in Chinese and English, with commercial terms recorded in writing for both sides.",
  },
];

export function Presence() {
  return (
    <section id="presence" aria-labelledby="presence-title" className="bg-porcelain">
      <div className="mx-auto max-w-[1320px] px-5 pb-24 sm:px-8 md:pb-32 lg:px-12">
        <Reveal className="grid grid-cols-1 gap-6 pt-20 md:pt-28 lg:grid-cols-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep lg:col-span-3">
            04 — Our presence in China
          </p>
          <h2
            id="presence-title"
            className="font-display text-display-m font-bold leading-[1.04] tracking-[-0.03em] text-navy lg:col-span-8"
          >
            On the ground in China. Connected to your business.
          </h2>
        </Reveal>

        {/* Place band: the company's one location, set as a full-width typographic plate. */}
        <Reveal className="mt-16 md:mt-20">
          <Plate ratio="21 / 9" tone="navy" className="min-h-[320px]" grid="fine">
            <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 lg:p-14">
              <Coordinates className="text-steel-light" />
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <p className="font-display text-[clamp(48px,8vw,128px)] font-bold leading-[0.9] tracking-[-0.045em]">
                  Yiwu
                </p>
                <p className="max-w-[24rem] text-[15px] leading-[1.6] text-white/80">
                  Zhejiang Province, China. Our base for sourcing, supplier communication and on-site commercial
                  support.
                </p>
              </div>
            </div>
          </Plate>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-3 md:gap-0">
          {points.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 0.06}
              className="border-t border-navy/15 py-8 md:px-8 md:first:pl-0 md:last:pr-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-navy/15"
            >
              <p className="flex items-baseline gap-3 font-display text-[20px] font-semibold tracking-tight text-navy">
                <span className="text-[13px] tabular-nums text-steel-deep">0{i + 1}</span>
                {p.title}
              </p>
              <p className="mt-3 text-[16px] leading-[1.65] text-ink">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
