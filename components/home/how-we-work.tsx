import { howWeWork } from "@/content/site";

/**
 * Process: six connected stages on one continuous spine. Each node sits on the
 * spine and each stage is a full row, so the sequence reads top to bottom on
 * every screen width. The first and last nodes are emphasised to show the
 * start and the handover.
 */
export function HowWeWork() {
  return (
    <section id="how-we-work" aria-labelledby="how-title" className="bg-porcelain text-navy">
      <div className="mx-auto grid max-w-[1320px] gap-16 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="lg:col-span-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep">03 — How we work</p>
          <h2
            id="how-title"
            className="mt-8 font-display text-[clamp(36px,4.6vw,64px)] font-bold leading-[1.04] tracking-[-0.03em] text-balance"
          >
            From the first conversation to the next opportunity.
          </h2>
          <p className="mt-8 max-w-[24rem] text-[17px] leading-[1.65] text-steel-deep">
            Six stages, scoped to the service you need. A sourcing brief may use all six; a single factory visit may
            use two.
          </p>
        </div>

        <ol className="relative lg:col-span-7 lg:col-start-6">
          {/* The spine: one continuous line that every stage hangs from. */}
          <span aria-hidden className="absolute bottom-6 left-[15px] top-6 w-px bg-navy/20 md:left-[19px]" />
          {howWeWork.map((stage, i) => {
            const first = i === 0;
            const last = i === howWeWork.length - 1;
            return (
              <li key={stage.step} className="relative grid grid-cols-[32px_1fr] gap-6 pb-14 last:pb-0 md:grid-cols-[40px_1fr] md:gap-10">
                <span
                  aria-hidden
                  className={`relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border md:h-10 md:w-10 ${
                    first || last ? "border-steel-deep bg-navy" : "border-navy/35 bg-porcelain"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${first || last ? "bg-[#8FA8FF]" : "bg-navy/50"}`} />
                </span>
                <div>
                  <p className="font-display text-[13px] font-semibold tabular-nums text-steel-deep">{stage.step}</p>
                  <h3 className="mt-2 font-display text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-[34px]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 max-w-[32rem] text-[16px] leading-[1.65] text-steel-deep">{stage.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
