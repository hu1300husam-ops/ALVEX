import { insightTopics } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

/**
 * Insights: an editorial topic index. Articles have not been published, so
 * this section shows the subjects ALVEX covers and invites questions on them.
 * It does not show titles, dates, authors or links to articles that do not
 * exist yet.
 */
export function Insights() {
  const [lead, ...rest] = insightTopics;
  return (
    <section id="insights" aria-labelledby="insights-title" className="bg-navy text-porcelain">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-32 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">07 — Insights</p>
            <h2
              id="insights-title"
              className="mt-7 font-display text-[clamp(34px,4.6vw,64px)] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
            >
              Better information. Better sourcing decisions.
            </h2>
            <p className="mt-7 max-w-[28rem] text-[17px] leading-[1.65] text-porcelain/75">
              The decisions that come before an order: supplier evaluation, quality inspection, pricing terms and
              lead times.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 border-b border-porcelain pb-1 text-[15px] font-semibold transition-colors hover:text-[#8FA8FF]"
            >
              Ask about a topic <span aria-hidden>→</span>
            </a>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal className="border-t border-white/15 pb-10 pt-7">
              <p className="font-display text-[13px] font-semibold tabular-nums text-[#8FA8FF]">Lead topic</p>
              <p className="mt-4 font-display text-[clamp(30px,3.6vw,48px)] font-semibold leading-[1.08] tracking-[-0.025em]">
                {lead}
              </p>
            </Reveal>
            <ol className="grid gap-x-10 sm:grid-cols-2">
              {rest.map((topic, i) => (
                <Reveal as="li" key={topic} delay={i * 0.03} className="flex gap-5 border-t border-white/15 py-6">
                  <span className="font-display text-[13px] font-semibold tabular-nums text-porcelain/50">
                    {String(i + 2).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[19px] font-medium leading-snug tracking-[-0.01em]">{topic}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
