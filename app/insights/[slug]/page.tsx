import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, type ArticleBlock } from "@/content/articles";
import { Logo } from "@/components/brand/logo";
import { SiteFooter } from "@/components/home/footer";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/insights/${article.slug}`,
      images: [{ url: article.image.src, alt: article.image.alt }],
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-[18px] leading-[1.75] text-ink">{block.text}</p>;
    case "h2":
      return (
        <h2 className="mt-14 font-display text-[clamp(26px,3vw,34px)] font-semibold leading-tight tracking-[-0.02em] text-navy">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-3 pl-6 text-[18px] leading-[1.7] text-ink marker:text-steel-deep">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-3 pl-6 text-[18px] leading-[1.7] text-ink marker:text-steel-deep">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== article.slug);

  return (
    <>
      <a
        href="#article"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-3 focus:text-porcelain"
      >
        Skip to article
      </a>
      <header className="sticky top-0 z-50 border-b border-line bg-porcelain/95 text-navy backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
          <Link href="/" aria-label="ALVEX, back to homepage" className="relative z-10">
            <Logo tone="dark" />
          </Link>
          <Link href="/#insights" className="link-indicator text-[14px] font-medium">
            All insights
          </Link>
        </div>
      </header>

      <main id="article">
        <article>
          <div className="bg-navy text-porcelain">
            <div className="mx-auto max-w-[920px] px-5 pb-16 pt-16 sm:px-8 md:pt-24 lg:px-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">
                Insights · {article.readMinutes} min read
              </p>
              <h1 className="mt-6 font-display text-[clamp(36px,5.6vw,68px)] font-bold leading-[1.04] tracking-[-0.03em] text-balance">
                {article.title}
              </h1>
              <p className="mt-6 max-w-[38rem] text-[19px] leading-[1.6] text-porcelain/75">{article.excerpt}</p>
            </div>
          </div>

          <div className="mx-auto max-w-[1100px] px-5 sm:px-8 lg:px-12">
            <figure className="-mt-px">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.image.src}
                alt={article.image.alt}
                width={1264}
                height={848}
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="mt-3 text-[13px] text-steel-deep">Illustrative image.</figcaption>
            </figure>
          </div>

          <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-8 md:py-24">
            <div className="space-y-6">
              {article.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            <div className="mt-20 border-t border-line pt-10">
              <p className="font-display text-[22px] font-semibold tracking-tight text-navy">
                Planning a sourcing project in China?
              </p>
              <p className="mt-3 text-[16px] leading-[1.65] text-ink">
                Tell us what you are buying and we will reply with the next practical step.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex min-h-13 items-center gap-3 bg-navy px-7 py-4 text-[15px] font-semibold text-porcelain transition-colors hover:bg-midnight"
              >
                Start Your Project <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </article>

        <section aria-labelledby="more-insights" className="bg-porcelain pb-24">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
            <h2 id="more-insights" className="font-display text-[24px] font-semibold tracking-tight text-navy">
              More insights
            </h2>
            <ul className="mt-8 grid gap-px bg-line md:grid-cols-2">
              {others.map((a) => (
                <li key={a.slug} className="bg-porcelain">
                  <Link href={`/insights/${a.slug}`} className="group block p-7 sm:p-8">
                    <p className="font-display text-[13px] font-semibold tabular-nums text-steel-deep">
                      {a.readMinutes} min read
                    </p>
                    <p className="mt-3 font-display text-[20px] font-semibold leading-snug tracking-tight text-navy">
                      {a.title}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-navy">
                      Read <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter base="/" />
    </>
  );
}
