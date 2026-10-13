import { insightTopics } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

/**
 * Editorial index, not a blog grid. Articles are in preparation, so no
 * dates, authors or read times are shown.
 */
export function Insights() {
  const [lead, ...rest] = insightTopics;
  return (
    <section id="insights" aria-labelledby="insights-title" className="bg-navy text-porcelain">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">07 — Insights</p>
            <h2
              id="insights-title"
              className="font-display text-display-m font-bold leading-[1.02] tracking-[-0.03em]"
            >
              Better information. Better sourcing decisions.
            </h2>
            <p className="mt-6 max-w-[28rem] text-[17px] leading-[1.65] text-white/75">
              The decisions that come before an order: supplier evaluation, quality inspection, pricing terms and lead times.
            </p>
            <a
              href="#contact"
              className="link-indicator mt-8 inline-block min-h-12 py-3 text-[15px] font-semibold text-porcelain"
            >
              Ask about a topic
            </a>
          </Reveal>

          <ol className="lg:col-span-6 lg:col-start-7" aria-label="Topics">
            <Reveal as="li" className="group border-t border-white/15 pb-10 pt-2">
              <p className="text-[12px] uppercase tracking-[0.18em] text-steel-light">Topic 01</p>
              <p className="mt-4 font-display text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] transition-colors duration-500 group-hover:text-white sm:text-[48px]">
                {lead}
              </p>
            </Reveal>
            {rest.map((topic, i) => (
              <Reveal as="li" key={topic} delay={i * 0.03} className="group flex items-baseline justify-between gap-6 border-t border-white/12 py-5 last:border-b">
                <span className="flex items-baseline gap-4">
                  <span className="text-[13px] tabular-nums text-steel-light">{String(i + 2).padStart(2, "0")}</span>
                  <span className="font-display text-[20px] font-medium tracking-tight text-white/85 transition-colors duration-500 group-hover:text-white sm:text-[22px]">
                    {topic}
                  </span>
                </span>
                
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
