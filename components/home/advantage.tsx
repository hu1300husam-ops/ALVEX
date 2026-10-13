/**
 * Advantage: an editorial composition, not a feature grid. A large statement
 * sits beside a three-node diagram (your team, ALVEX in China, suppliers in
 * China). The four points are set as staggered rows along the diagram's route.
 */

const points = [
  {
    title: "Communication",
    text: "Regular contact in Chinese and English, with the points agreed with each supplier written down.",
  },
  {
    title: "Verification",
    text: "Company, capacity and product checks, and factory visits where they matter, before you commit volume.",
  },
  {
    title: "Visibility",
    text: "Sample, production and inspection updates tied to the milestones of your order.",
  },
  {
    title: "Decisions",
    text: "Quotes laid side by side on price, MOQ, lead time and terms, so the decision stays yours, made on facts.",
  },
];

function Diagram() {
  return (
    <svg
      viewBox="0 0 520 420"
      className="h-auto w-full"
      fill="none"
      role="img"
      aria-label="Diagram: your team abroad connects to the ALVEX team in China, which connects to suppliers across China."
    >
      <line x1="60" y1="210" x2="260" y2="210" stroke="#26304A" strokeOpacity="0.35" strokeWidth="1.25" />
      <line x1="260" y1="210" x2="460" y2="210" stroke="#26304A" strokeOpacity="0.35" strokeWidth="1.25" />
      <line x1="260" y1="210" x2="260" y2="60" stroke="#537CFF" strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="60" cy="210" r="7" fill="#26304A" />
      <circle cx="260" cy="210" r="34" fill="#26304A" />
      <circle cx="260" cy="210" r="48" stroke="#537CFF" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx="460" cy="210" r="7" fill="#26304A" />
      <circle cx="260" cy="60" r="7" fill="#537CFF" />
      <text x="60" y="250" textAnchor="middle" fontSize="13" fill="#26304A" fontFamily="Inter, sans-serif">Your team</text>
      <text x="60" y="270" textAnchor="middle" fontSize="12" fill="#5A6478" fontFamily="Inter, sans-serif">abroad</text>
      <text x="260" y="216" textAnchor="middle" fontSize="13" fontWeight="600" fill="#F7F8FA" fontFamily="Manrope, sans-serif">ALVEX</text>
      <text x="260" y="300" textAnchor="middle" fontSize="12" fill="#5A6478" fontFamily="Inter, sans-serif">team in China</text>
      <text x="460" y="250" textAnchor="middle" fontSize="13" fill="#26304A" fontFamily="Inter, sans-serif">Suppliers</text>
      <text x="460" y="270" textAnchor="middle" fontSize="12" fill="#5A6478" fontFamily="Inter, sans-serif">across China</text>
      <text x="284" y="62" fontSize="12" fill="#537CFF" fontFamily="Inter, sans-serif">Written, not remembered</text>
    </svg>
  );
}

export function Advantage() {
  return (
    <section id="advantage" aria-labelledby="advantage-title" className="bg-porcelain text-navy">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep">01 — The ALVEX advantage</p>

        <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <h2
              id="advantage-title"
              className="font-display text-[clamp(36px,5.2vw,76px)] font-bold leading-[1.02] tracking-[-0.03em] text-balance"
            >
              More than a connection. A team on the ground.
            </h2>
            <p className="mt-8 max-w-[34rem] text-[17px] leading-[1.65] text-steel-deep">
              Most international buyers reach suppliers in China through email and video calls. ALVEX adds a
              team that is present in China, speaks with suppliers in Chinese, and records what was agreed.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <Diagram />
          </div>
        </div>

        <ol className="mt-20 grid grid-cols-1 gap-y-12 md:mt-28 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
          {points.map((p, i) => (
            <li
              key={p.title}
              className={`border-t border-navy/15 pt-7 ${i % 2 === 1 ? "md:translate-y-16" : ""}`}
            >
              <p className="font-display text-[15px] font-semibold text-steel-deep">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-[28px] font-bold leading-tight tracking-[-0.02em] sm:text-[34px]">
                {p.title}
              </h3>
              <p className="mt-4 max-w-[26rem] text-[16px] leading-[1.65] text-steel-deep">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
