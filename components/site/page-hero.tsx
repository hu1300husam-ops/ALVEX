import type { ReactNode } from "react";

/**
 * Hero band for inner pages. Dark navy, with an optional photograph held at
 * low opacity under a navy gradient, so the text always has a solid field.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: { src: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-hidden bg-navy text-porcelain">
      {image ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt=""
            aria-hidden
            width={1264}
            height={848}
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,25,45,0.98)_0%,rgba(16,25,45,0.82)_55%,rgba(16,25,45,0.55)_100%)]" />
        </>
      ) : null}
      <div className="mx-auto max-w-[1320px] px-5 pb-20 pt-36 sm:px-8 md:pb-28 md:pt-48 lg:px-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">{eyebrow}</p>
        <h1
          id="page-title"
          className="mt-7 max-w-[18ch] font-display text-[clamp(44px,7vw,108px)] font-bold leading-[0.98] tracking-[-0.035em] text-balance"
        >
          {title}
        </h1>
        {lead ? (
          <p className="mt-8 max-w-[38rem] text-[18px] leading-[1.65] text-porcelain/80 md:text-[20px]">{lead}</p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
