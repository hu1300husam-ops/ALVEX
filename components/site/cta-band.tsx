import Link from "next/link";

/** Closing call to action used at the foot of inner pages. */
export function CtaBand({
  title = "Tell us what you are sourcing.",
  text = "Share the outline of your product or project. We reply with the next practical step.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-porcelain text-navy">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 border-t border-line px-5 py-20 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
        <div className="max-w-[40rem]">
          <h2 id="cta-title" className="font-display text-[clamp(32px,4.4vw,56px)] font-bold leading-[1.05] tracking-[-0.03em]">
            {title}
          </h2>
          <p className="mt-5 text-[17px] leading-[1.65] text-ink">{text}</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-13 shrink-0 items-center justify-center gap-3 bg-navy px-8 py-4 text-[15px] font-semibold text-porcelain transition-colors hover:bg-midnight"
        >
          Start Your Project <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
