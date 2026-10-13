import { Reveal } from "@/components/ui/reveal";
import { Figure } from "@/components/ui/figure";

const points = [
  {
    title: "Local market knowledge",
    text: "Knowing which product categories are concentrated in Yiwu and which suppliers are active there, so the search starts in the right place.",
  },
  {
    title: "On-site commercial support",
    text: "Meetings, factory visits and inspections carried out in person by our team, not handled remotely by message alone.",
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
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 border-t border-line pt-20 lg:grid-cols-12 md:pt-28">
          <Reveal className="lg:col-span-7">
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep">
              04 — Our presence in China
            </p>
            <h2
              id="presence-title"
              className="font-display text-display-m font-bold leading-[1.02] tracking-[-0.03em] text-navy"
            >
              On the ground in China. Connected to your business.
            </h2>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <dl className="space-y-6 border-l-2 border-accent pl-6">
              <div>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-steel-deep">Base</dt>
                <dd className="mt-1 font-display text-[22px] font-semibold text-navy">Yiwu, Zhejiang, China</dd>
              </div>
              <div>
                <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-steel-deep">Working in</dt>
                <dd className="mt-1 text-[16px] leading-[1.6] text-ink">
                  Chinese and English, with international buyers across sourcing, negotiation and trade support.
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-1">
            <Figure
              label="Yiwu market or team on location"
              ratio="5 / 4"
              caption="Authentic Yiwu imagery to be supplied by ALVEX. Stock photography is not used to represent the company."
            />
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-10">
            <ol className="divide-y divide-line border-y border-line">
              {points.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 0.06} className="py-7">
                  <p className="font-display text-[20px] font-semibold tracking-tight text-navy">
                    <span className="mr-3 text-[13px] tabular-nums text-steel">0{i + 1}</span>
                    {p.title}
                  </p>
                  <p className="mt-3 text-[16px] leading-[1.65] text-ink">{p.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
