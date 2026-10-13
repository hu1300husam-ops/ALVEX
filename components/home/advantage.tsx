import { Reveal } from "@/components/ui/reveal";

/**
 * The advantage as an operating diagram, not a comparison table:
 * your team abroad, the ALVEX team in China, and the suppliers in China,
 * with the four things that change when someone is on the ground.
 */
const nodes: { label: string; sub: string; active?: boolean }[] = [
  { label: "Your team", sub: "Abroad" },
  { label: "ALVEX team", sub: "China", active: true },
  { label: "Suppliers & factories", sub: "Across China" },
];

const points = [
  {
    kicker: "Communication",
    text: "Regular contact in Chinese and English, with the points agreed with each supplier written down.",
  },
  {
    kicker: "Verification",
    text: "Company, capacity and product checks, and factory visits where they matter, before you commit volume.",
  },
  {
    kicker: "Visibility",
    text: "Sample, production and inspection updates tied to the milestones of your order.",
  },
  {
    kicker: "Decisions",
    text: "Quotes laid side by side on price, MOQ, lead time and terms, so the decision stays yours, made on facts.",
  },
];

export function Advantage() {
  return (
    <section id="advantage" aria-labelledby="advantage-title" className="border-t border-line bg-porcelain">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep lg:col-span-3">
            01 — The ALVEX advantage
          </p>
          <h2
            id="advantage-title"
            className="font-display text-display-m font-bold leading-[1.04] tracking-[-0.03em] text-navy lg:col-span-8"
          >
            More than a connection. A team on the ground.
          </h2>
        </Reveal>

        {/* Operating diagram: horizontal on desktop, a vertical route on mobile. */}
        <Reveal className="mt-16 md:mt-24" delay={0.05}>
          <ol aria-label="How ALVEX sits between your team and suppliers" className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0">
            <span aria-hidden className="absolute bottom-6 left-[11px] top-6 w-px bg-navy/20 md:left-0 md:right-0 md:top-[11px] md:h-px md:w-auto" />
            {nodes.map((node, i) => (
              <li key={node.label} className={`relative pl-10 md:pl-0 ${i === 1 ? "md:text-center" : ""} ${i === 2 ? "md:text-right" : ""}`}>
                <span
                  aria-hidden
                  className={`absolute left-0 top-1 flex h-[23px] w-[23px] items-center justify-center rounded-full border md:static md:mb-6 md:inline-flex ${
                    node.active ? "border-accent bg-accent" : "border-navy bg-porcelain"
                  } ${i === 1 ? "md:mx-auto" : ""} ${i === 2 ? "md:ml-auto" : ""}`}
                />
                <p className="font-display text-[22px] font-semibold tracking-tight text-navy sm:text-[26px]">{node.label}</p>
                <p className="mt-1 text-[13px] uppercase tracking-[0.16em] text-steel-deep">{node.sub}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <dl className="mt-20 grid grid-cols-1 gap-x-10 gap-y-12 border-t border-navy/15 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {points.map((p, i) => (
            <Reveal key={p.kicker} delay={i * 0.06}>
              <div className="border-t-2 border-navy pt-5">
                <dt className="flex items-baseline gap-3 font-display text-[20px] font-semibold tracking-tight text-navy">
                  <span className="text-[13px] tabular-nums text-steel-deep">0{i + 1}</span>
                  {p.kicker}
                </dt>
                <dd className="mt-3 text-[16px] leading-[1.65] text-ink">{p.text}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
