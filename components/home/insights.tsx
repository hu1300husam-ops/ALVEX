import Link from "next/link";
import { articles } from "@/content/articles";
import { Reveal } from "@/components/ui/reveal";

export function Insights() {
  return (
    <section id="insights" aria-labelledby="insights-title" className="bg-navy text-porcelain">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-32 lg:px-12">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">07 — Insights</p>
            <h2
              id="insights-title"
              className="mt-7 font-display text-[clamp(34px,4.6vw,64px)] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
            >
              Better information. Better sourcing decisions.
            </h2>
          </div>
          <p className="max-w-[30rem] self-end text-[17px] leading-[1.65] text-porcelain/75 lg:col-span-6 lg:col-start-7">
            Practical guides to the decisions that come before an order: supplier verification, commercial terms and
            preparing for supplier meetings.
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-px bg-white/10 md:grid-cols-3">
          {articles.map((article, i) => (
            <li key={article.slug} className="flex flex-col bg-navy">
              <Link href={`/insights/${article.slug}`} className="group flex h-full flex-col">
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-midnight">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.image.src}
                    alt={article.image.alt}
                    width={1264}
                    height={848}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <p className="font-display text-[13px] font-semibold tabular-nums text-[#8FA8FF]">
                    {String(i + 1).padStart(2, "0")} · {article.readMinutes} min read
                  </p>
                  <h3 className="mt-4 font-display text-[22px] font-semibold leading-snug tracking-[-0.015em]">
                    {article.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.65] text-porcelain/70">{article.excerpt}</p>
                  <span className="mt-auto pt-8 inline-flex items-center gap-3 text-[15px] font-semibold">
                    Read the article <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
