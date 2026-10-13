import type { Metadata } from "next";
import Link from "next/link";
import { services, howWeWork } from "@/content/site";
import { getServiceDetail } from "@/content/service-pages";
import { PageShell } from "@/components/site/page-shell";
import { PageHero } from "@/components/site/page-hero";
import { CtaBand } from "@/components/site/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sourcing, supplier verification, negotiation, factory visits, trade show support and shipping coordination for international buyers working with China.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="The right support, at every stage."
        lead="Six services that cover the work between an idea and a delivered order. Each one is delivered by ALVEX on the ground in China, and each one is clear about what we handle and what we do not."
      />

      <section aria-label="Service list" className="bg-porcelain text-navy">
        <ol className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          {services.map((service, i) => {
            const detail = getServiceDetail(service.slug);
            const reversed = i % 2 === 1;
            return (
              <li key={service.slug} className="grid gap-10 border-t border-line py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
                <div className={`lg:col-span-6 ${reversed ? "lg:order-2 lg:col-start-7" : ""}`}>
                  <p className="font-display text-[13px] font-semibold tabular-nums text-steel-deep">
                    {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </p>
                  <h2 className="mt-5 font-display text-[clamp(30px,3.6vw,52px)] font-bold leading-[1.05] tracking-[-0.03em] text-navy">
                    {service.title}
                  </h2>
                  <p className="mt-6 max-w-[32rem] text-[18px] leading-[1.65] text-ink">{service.summary}</p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {service.scope.map((item) => (
                      <li key={item} className="border border-line px-3 py-1.5 text-[13px] text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group mt-10 inline-flex min-h-12 items-center gap-3 border-b border-navy pb-1 text-[15px] font-semibold text-navy"
                  >
                    How this service works
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
                {detail ? (
                  <figure className={`lg:col-span-5 ${reversed ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={detail.image.src}
                      alt={detail.image.alt}
                      width={1264}
                      height={848}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </figure>
                ) : null}
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="process-title" className="bg-midnight text-porcelain">
        <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-32 lg:px-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">How an engagement runs</p>
          <h2 id="process-title" className="mt-6 max-w-[20ch] font-display text-[clamp(34px,4.4vw,60px)] font-bold leading-[1.05] tracking-[-0.03em]">
            Six stages, scoped to the service you need.
          </h2>
          <ol className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {howWeWork.map((step) => (
              <li key={step.step} className="bg-midnight p-8 md:p-10">
                <p className="font-display text-[13px] font-semibold tabular-nums text-[#8FA8FF]">{step.step}</p>
                <h3 className="mt-5 font-display text-[26px] font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.65] text-porcelain/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
}
