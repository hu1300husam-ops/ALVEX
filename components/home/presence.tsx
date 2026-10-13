import { Reveal } from "@/components/ui/reveal";

/**
 * China presence: a dark editorial section. The photograph is a text-free,
 * generated conceptual image of China's container-port trade environment. It
 * shows no ALVEX facilities, staff or branding. Copy describes service
 * coverage across China and does not name a city.
 */

const points = [
  {
    title: "Product and supplier knowledge",
    text: "Knowing where each product category is made across China, and which suppliers are active in it, so the search starts in the right place.",
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
    <section id="presence" aria-labelledby="presence-title" className="relative overflow-hidden bg-midnight text-porcelain">
      <div className="mx-auto grid max-w-[1320px] lg:grid-cols-12">
        <div className="px-5 pb-6 pt-24 sm:px-8 md:pt-32 lg:col-span-6 lg:px-12 lg:pb-32">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">04 — Our presence in China</p>
            <h2
              id="presence-title"
              className="mt-8 font-display text-[clamp(36px,4.8vw,68px)] font-bold leading-[1.04] tracking-[-0.03em] text-balance"
            >
              On the ground in China. Connected to your business.
            </h2>
            <p className="mt-8 max-w-[30rem] text-[17px] leading-[1.65] text-porcelain/75">
              Sourcing, supplier verification and trade support across China, coordinated in Chinese and English.
              ALVEX coordinates these services; it does not own factories or warehouses.
            </p>
          </Reveal>

          <ol className="mt-16 grid gap-10">
            {points.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[40px_1fr] gap-5 border-t border-white/15 pt-7">
                <span className="font-display text-[14px] font-semibold tabular-nums text-[#8FA8FF]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[22px] font-semibold leading-snug tracking-[-0.015em]">{p.title}</h3>
                  <p className="mt-3 max-w-[28rem] text-[16px] leading-[1.65] text-porcelain/70">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative min-h-[420px] lg:col-span-6 lg:min-h-full">
          <picture className="absolute inset-0 block h-full w-full">
            <img
              src="/presence/china-port-crop.webp"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </picture>
          <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/30 to-transparent lg:from-midnight lg:via-midnight/10" />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight to-transparent lg:hidden" />
        </div>
      </div>
    </section>
  );
}
