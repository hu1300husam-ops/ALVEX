import { canton } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

const stages = [
  { word: "Before", ...canton.before },
  { word: "During", ...canton.during },
  { word: "After", ...canton.after },
] as const;

export function CantonFair() {
  return (
    <section
      id="canton-fair"
      aria-labelledby="canton-title"
      className="relative overflow-hidden bg-midnight text-porcelain"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <Reveal className="max-w-[60rem]">
          <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">05 — Events & exhibitions</p>
          <h2
            id="canton-title"
            className="font-display text-display-l font-bold leading-[1] tracking-[-0.035em]"
          >
            Make every day at Canton Fair count.
          </h2>
          <p className="mt-6 font-display text-[22px] font-medium tracking-tight text-steel-light sm:text-[26px]">
            You fly home. <span className="text-porcelain">We keep working.</span>
          </p>
        </Reveal>

        {/* Three-stage narrative: one continuous rule with stages set on it, not three cards. */}
        <ol className="relative mt-20 grid grid-cols-1 gap-12 md:mt-28 md:grid-cols-3 md:gap-0">
          <span aria-hidden className="absolute left-0 right-0 top-0 hidden h-px bg-white/15 md:block" />
          {stages.map((stage, i) => (
            <Reveal
              as="li"
              key={stage.label}
              delay={i * 0.1}
              className="relative md:px-8 md:first:pl-0 md:last:pr-0"
            >
              <span aria-hidden className="absolute left-0 top-0 hidden h-[3px] w-12 -translate-y-1/2 bg-accent md:block" />
              <p className="pt-8 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">
                0{i + 1} — {stage.label}
              </p>
              <p className="mt-5 font-display text-[44px] font-semibold leading-none tracking-[-0.03em] sm:text-[56px]">
                {stage.word}
              </p>
              <p className="mt-4 text-[17px] leading-[1.65] text-white/75">{stage.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-20 flex flex-col gap-8 border-t border-white/12 pt-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[36rem] text-[14px] leading-[1.65] text-white/60">
            This section describes ALVEX's support services around the Canton Fair. ALVEX is not presented as an
            official representative of the fair's organisers.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center bg-porcelain px-6 text-[15px] font-semibold text-navy transition-colors hover:bg-white"
            >
              Plan your Canton Fair support
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
