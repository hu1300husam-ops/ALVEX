import { Reveal } from "@/components/ui/reveal";
import { Figure } from "@/components/ui/figure";

/**
 * Documentary gallery. Every frame is a labelled placeholder until
 * ALVEX-approved photography is supplied. Captions describe the subject
 * the frame is reserved for, not an event that has been documented.
 */
export function Operations() {
  return (
    <section
      id="operations"
      aria-labelledby="operations-title"
      className="border-t border-line bg-porcelain"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep lg:col-span-3">
            06 — Our operations
          </p>
          <h2
            id="operations-title"
            className="font-display text-display-m font-bold leading-[1.02] tracking-[-0.03em] text-navy lg:col-span-8"
          >
            Behind every decision, real work on the ground.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12 md:mt-20">
          <Reveal className="md:col-span-7">
            <Figure label="Supplier meeting" ratio="3 / 2" caption="Frame 01 — supplier meeting, Yiwu." />
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9 md:mt-24" delay={0.08}>
            <Figure label="Product inspection" ratio="4 / 5" caption="Frame 02 — product inspection before shipment." />
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-2" delay={0.04}>
            <Figure label="Factory visit" ratio="1 / 1" caption="Frame 03 — factory visit and production check." />
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={0.1}>
            <Figure label="Trade show floor" ratio="16 / 10" caption="Frame 04 — trade show support, meeting on the floor." />
          </Reveal>
        </div>

        <Reveal className="mt-20 grid grid-cols-1 gap-6 border-t border-line pt-10 md:grid-cols-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep md:col-span-3">
            Coming into the archive
          </p>
          <p className="max-w-[40rem] text-[17px] leading-[1.65] text-ink md:col-span-8">
            Team working days, sample and document review, and trade fair coverage. Only images approved by ALVEX,
            with usage rights confirmed, will appear here.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
