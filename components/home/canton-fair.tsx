import { canton } from "@/content/site";

/**
 * Canton Fair feature. Deliberately different from the rest of the page: a
 * deep navy field with original SVG ribbons, an oversized headline, a pull
 * quote, and a BEFORE / DURING / AFTER phase rail. It describes ALVEX's
 * support services only. It does not imply official affiliation with the fair.
 */

const phases = [
  { word: "Before", index: "01", ...canton.before },
  { word: "During", index: "02", ...canton.during },
  { word: "After", index: "03", ...canton.after },
] as const;

function Ribbons() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 600"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
    >
      <path d="M-40 420 C 320 260, 620 560, 980 330 S 1380 120, 1500 200" stroke="#537CFF" strokeOpacity="0.28" strokeWidth="1" />
      <path d="M-40 460 C 340 300, 660 600, 1000 370 S 1400 170, 1500 240" stroke="#F7F8FA" strokeOpacity="0.12" strokeWidth="1" />
      <path d="M-40 500 C 360 350, 700 640, 1020 410 S 1420 220, 1500 280" stroke="#537CFF" strokeOpacity="0.14" strokeWidth="1" />
      <path d="M-40 540 C 380 400, 740 680, 1040 450 S 1440 270, 1500 320" stroke="#F7F8FA" strokeOpacity="0.07" strokeWidth="1" />
    </svg>
  );
}

export function CantonFair() {
  return (
    <section
      id="canton-fair"
      aria-labelledby="canton-title"
      className="relative isolate overflow-hidden bg-navy text-porcelain"
    >
      <Ribbons />
      <div className="relative mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-36 lg:px-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">05 — Events & exhibitions</p>

        <h2
          id="canton-title"
          className="mt-8 max-w-[15ch] font-display text-[clamp(44px,7.4vw,112px)] font-bold leading-[0.98] tracking-[-0.04em] text-balance"
        >
          Make every day at Canton Fair count.
        </h2>

        <p className="mt-10 font-display text-[clamp(22px,2.6vw,34px)] font-medium leading-snug tracking-[-0.015em] text-[#8FA8FF] md:ml-[12%]">
          You fly home. We keep working.
        </p>

        <figure className="mt-20 md:mt-28">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/canton-hall.jpg"
            alt="A long exhibition hall with glass ceilings and aisles lit in warm light"
            width={1264}
            height={848}
            loading="lazy"
            decoding="async"
            className="aspect-[21/9] w-full object-cover"
          />
          <figcaption className="mt-3 text-[13px] text-porcelain/50">Illustrative image. Not an ALVEX event.</figcaption>
        </figure>

        <ol className="mt-16 grid gap-px bg-white/10 md:mt-20 md:grid-cols-3">
          {phases.map((p) => (
            <li key={p.word} className="bg-navy p-7 sm:p-9 md:min-h-[320px] md:p-10">
              <p className="font-display text-[13px] font-semibold tabular-nums text-steel-light">{p.index}</p>
              <h3 className="mt-6 font-display text-[clamp(34px,3.4vw,52px)] font-bold leading-none tracking-[-0.03em]">
                {p.word}
              </h3>
              <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.16em] text-steel-light">{p.label}</p>
              <p className="mt-6 max-w-[24rem] text-[16px] leading-[1.65] text-porcelain/75">{p.text}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 max-w-[42rem] text-[14px] leading-[1.65] text-porcelain/60">
          This section describes ALVEX&apos;s support services around the Canton Fair. ALVEX is not presented as an
          official representative of the fair&apos;s organisers.
        </p>
        <a
          href="/canton-fair"
          className="mt-8 inline-flex min-h-13 items-center gap-3 border-b border-porcelain pb-1 text-[15px] font-semibold text-porcelain transition-colors hover:text-[#8FA8FF]"
        >
          Plan your Canton Fair support
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
