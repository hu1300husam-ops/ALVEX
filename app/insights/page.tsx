import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/articles";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guides on supplier verification, Incoterms and preparing for supplier meetings in China.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Insights"
        title="Better information. Better sourcing decisions."
        lead="A small set of complete guides to the decisions that come before an order. We publish a guide when it is complete, not before."
      />

      <section aria-label="Articles" className="bg-porcelain text-navy">
        <ol className="mx-auto grid max-w-[1320px] gap-px bg-line px-0 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <li key={a.slug} className="flex flex-col bg-porcelain">
              <Link href={`/insights/${a.slug}`} className="group flex h-full flex-col">
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-midnight">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={a.image.src}
                    alt={a.image.alt}
                    width={1264}
                    height={848}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="font-display text-[13px] font-semibold tabular-nums text-steel-deep">
                    {String(i + 1).padStart(2, "0")} · {a.readMinutes} min read
                  </p>
                  <h2 className="mt-4 font-display text-[22px] font-semibold leading-snug tracking-[-0.015em]">{a.title}</h2>
                  <p className="mt-4 text-[15px] leading-[1.65] text-ink">{a.excerpt}</p>
                  <span className="mt-auto pt-8 inline-flex items-center gap-2 text-[15px] font-semibold">
                    Read the article <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand title="Have a question about a topic?" text="Tell us what you are working on, and we will tell you whether one of our guides covers it." />
    </PageShell>
  );
}
