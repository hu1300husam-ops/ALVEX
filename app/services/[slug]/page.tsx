import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/content/site";
import { getServiceDetail } from "@/content/service-pages";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = getServiceDetail(slug);
  if (!service || !detail) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      <PageHero
        eyebrow={`Services · ${String(services.findIndex((s) => s.slug === slug) + 1).padStart(2, "0")}`}
        title={service.title}
        lead={service.summary}
      >
        <nav aria-label="Breadcrumb" className="mt-10 text-[13px] text-porcelain/60">
          <Link href="/services" className="link-indicator">Services</Link>
          <span aria-hidden className="mx-2">/</span>
          <span aria-current="page" className="text-porcelain/85">{service.title}</span>
        </nav>
      </PageHero>

      <section aria-labelledby="intro-title" className="bg-porcelain text-navy">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-12 lg:gap-12 lg:px-12">
          <div className="lg:col-span-5">
            <h2 id="intro-title" className="font-display text-[clamp(28px,3.2vw,44px)] font-bold leading-[1.1] tracking-[-0.025em]">
              How we run this service
            </h2>
            <p className="mt-6 text-[18px] leading-[1.7] text-ink">{detail.intro}</p>
            <figure className="mt-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={detail.image.src}
                alt={detail.image.alt}
                width={1264}
                height={848}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="mt-3 text-[13px] text-steel-deep">Illustrative image.</figcaption>
            </figure>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7">
            {detail.steps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-5 border-t border-line py-9 first:border-t-0 first:pt-0">
                <span className="font-display text-[14px] font-semibold tabular-nums text-steel-deep">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-[24px] font-semibold tracking-tight text-navy">{step.title}</h3>
                  <p className="mt-3 text-[17px] leading-[1.65] text-ink">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="receive-title" className="bg-navy text-porcelain">
        <div className="mx-auto grid max-w-[1320px] gap-14 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">What you receive</p>
            <h2 id="receive-title" className="mt-6 font-display text-[clamp(28px,3.2vw,44px)] font-bold leading-[1.1] tracking-[-0.025em]">
              Written outputs you can keep.
            </h2>
            <ul className="mt-10 divide-y divide-white/15 border-y border-white/15">
              {detail.receive.map((item) => (
                <li key={item} className="flex gap-5 py-6 text-[18px] leading-[1.6] text-porcelain/90">
                  <span aria-hidden className="mt-3 h-px w-6 shrink-0 bg-[#8FA8FF]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">Questions it answers</p>
            <ul className="mt-10 space-y-7">
              {detail.answers.map((q) => (
                <li key={q} className="border-l-2 border-[#8FA8FF] pl-6 font-display text-[22px] font-medium leading-snug tracking-[-0.01em]">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-title" className="bg-porcelain text-navy">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 lg:px-12">
          <h2 id="related-title" className="font-display text-[24px] font-semibold tracking-tight">
            Other services
          </h2>
          <ul className="mt-8 grid gap-px bg-line md:grid-cols-3">
            {related.map((s) => (
              <li key={s.slug} className="bg-porcelain">
                <Link href={`/services/${s.slug}`} className="group flex h-full flex-col p-8">
                  <p className="font-display text-[20px] font-semibold leading-snug tracking-tight">{s.title}</p>
                  <span className="mt-auto pt-8 inline-flex items-center gap-2 text-[15px] font-semibold">
                    View service <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Ready to scope this service?" text="Tell us your product, quantity and timeline. We will reply with the steps we would take." />
    </PageShell>
  );
}
