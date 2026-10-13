import { Reveal } from "@/components/ui/reveal";

const rows = [
  {
    kicker: "Supplier communication",
    without: "Messages sent across time zones, answers that arrive days later, and terms that change in translation.",
    with: "Daily contact in Chinese and English, with written summaries of what each supplier actually agreed.",
  },
  {
    kicker: "Verification",
    without: "Trust based on a catalogue, a website and a sales representative's account.",
    with: "Company checks, capacity questions and factory visits before a deposit is paid.",
  },
  {
    kicker: "Visibility",
    without: "Production status known only when the supplier chooses to report it.",
    with: "Sample, production and inspection updates tied to your order milestones.",
  },
  {
    kicker: "Decisions",
    without: "Choosing between quotes that are not comparable.",
    with: "Quotes laid side by side on price, MOQ, lead time and terms, so the decision is yours to make on facts.",
  },
];

export function Advantage() {
  return (
    <section
      id="advantage"
      aria-labelledby="advantage-title"
      className="border-t border-line bg-porcelain"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep">
              01 — The ALVEX advantage
            </p>
            <h2
              id="advantage-title"
              className="font-display text-display-m font-bold leading-[1.02] tracking-[-0.03em] text-navy"
            >
              More than a connection. A team on the ground.
            </h2>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid grid-cols-2 gap-x-6 border-b border-navy pb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-steel-deep">
              <span>Working remotely</span>
              <span className="text-navy">With ALVEX in Yiwu</span>
            </div>
            <ul>
              {rows.map((row, i) => (
                <Reveal as="li" key={row.kicker} delay={i * 0.05} className="border-b border-line py-8 md:py-10">
                  <p className="mb-4 font-display text-[22px] font-semibold tracking-tight text-navy sm:text-[26px]">
                    <span className="mr-3 align-middle text-[13px] tabular-nums text-steel">0{i + 1}</span>
                    {row.kicker}
                  </p>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                    <p className="text-[16px] leading-[1.65] text-steel-deep">{row.without}</p>
                    <p className="text-[16px] leading-[1.65] text-ink">{row.with}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
