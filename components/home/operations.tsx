import { Reveal } from "@/components/ui/reveal";

/**
 * Operations: what ALVEX does on the ground, described as recorded activity.
 * No photographs of ALVEX work are shown, because none have been approved.
 * The media frame is a neutral field that authentic operational photography
 * can replace without changing the layout (see docs/ASSETS.md).
 */

const activities = [
  {
    title: "Supplier meetings",
    text: "Meetings held with suppliers on your brief, with the outcomes recorded in writing for you.",
  },
  {
    title: "Product inspections",
    text: "Checks of goods against your specification, before they leave the factory.",
  },
  {
    title: "Factory visits",
    text: "On-site review of production capacity, process and working conditions.",
  },
  {
    title: "Trade fair coverage",
    text: "Preparation, meeting support and follow-up around exhibitions, including the Canton Fair.",
  },
];

function MediaFrame() {
  return (
    <div aria-hidden className="relative aspect-[4/3] w-full overflow-hidden bg-navy">
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="300" stroke="#F7F8FA" strokeOpacity="0.06" />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="#F7F8FA" strokeOpacity="0.06" />
        ))}
        <path d="M40 240 L140 170 L220 200 L330 110" stroke="#537CFF" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx="40" cy="240" r="5" fill="#8FA8FF" />
        <circle cx="330" cy="110" r="5" fill="#8FA8FF" />
      </svg>
    </div>
  );
}

export function Operations() {
  return (
    <section id="operations" aria-labelledby="operations-title" className="bg-porcelain text-navy">
      <div className="mx-auto max-w-[1320px] px-5 py-20 sm:px-8 md:py-32 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep">06 — Our operations</p>
            <h2
              id="operations-title"
              className="mt-7 font-display text-[clamp(34px,4.6vw,64px)] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
            >
              Behind every decision, real work on the ground.
            </h2>
            <p className="mt-7 font-display text-[20px] font-medium leading-snug text-steel-deep">
              Meetings. Inspections. Factory visits.
            </p>
            <div className="mt-12 hidden lg:block">
              <MediaFrame />
            </div>
          </Reveal>

          <ol className="lg:col-span-6 lg:col-start-7">
            {activities.map((a, i) => (
              <Reveal
                as="li"
                key={a.title}
                delay={i * 0.04}
                className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-t border-navy/15 py-8 last:border-b md:grid-cols-[3.5rem_1fr] md:gap-x-8 md:py-10"
              >
                <span className="font-display text-[14px] font-semibold tabular-nums text-steel-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[24px] font-semibold leading-tight tracking-[-0.02em] sm:text-[28px]">{a.title}</h3>
                  <p className="mt-3 max-w-[30rem] text-[16px] leading-[1.65] text-steel-deep">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <div className="lg:hidden">
            <MediaFrame />
          </div>
        </div>
      </div>
    </section>
  );
}
