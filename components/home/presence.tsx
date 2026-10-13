import { Reveal } from "@/components/ui/reveal";

/**
 * China presence: a dark section built around a capability diagram rather
 * than a photograph. The hub is ALVEX's coordination work; the nodes are the
 * categories of work ALVEX supports across China. The diagram carries no
 * geography, facility or ownership claims.
 */

const points = [
  {
    title: "Product and supplier knowledge",
    text: "Knowing where each product category is made across China, and which suppliers are active in it, so the search starts in the right place.",
  },
  {
    title: "On-site commercial support",
    text: "Meetings, factory visits and inspections carried out by our team in China, alongside remote communication.",
  },
  {
    title: "Language and negotiation",
    text: "Communication in Chinese and English, with commercial terms recorded in writing for both sides.",
  },
];

const nodes = [
  { label: "Product categories", x: 120, y: 110 },
  { label: "Supplier sourcing", x: 330, y: 70 },
  { label: "Manufacturing", x: 470, y: 190 },
  { label: "Quality inspection", x: 380, y: 340 },
  { label: "Commercial negotiation", x: 150, y: 350 },
  { label: "Trade exhibitions", x: 60, y: 220 },
];

function Network() {
  const hub = { x: 265, y: 215 };
  return (
    <svg
      viewBox="0 0 540 440"
      className="h-auto w-full"
      fill="none"
      role="img"
      aria-label="Diagram: ALVEX coordination connects product categories, supplier sourcing, manufacturing, quality inspection, commercial negotiation and trade exhibitions across China."
    >
      {nodes.map((n) => (
        <line key={`l-${n.label}`} x1={hub.x} y1={hub.y} x2={n.x} y2={n.y} stroke="#F7F8FA" strokeOpacity="0.22" strokeWidth="1" />
      ))}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return (
          <line
            key={`r-${n.label}`}
            x1={n.x}
            y1={n.y}
            x2={next.x}
            y2={next.y}
            stroke="#537CFF"
            strokeOpacity="0.45"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
        );
      })}
      <circle cx={hub.x} cy={hub.y} r="58" stroke="#537CFF" strokeOpacity="0.5" strokeWidth="1" />
      <circle cx={hub.x} cy={hub.y} r="40" fill="#0B1222" stroke="#F7F8FA" strokeOpacity="0.35" strokeWidth="1" />
      <text x={hub.x} y={hub.y - 2} textAnchor="middle" fontSize="15" fontWeight="600" fill="#F7F8FA" fontFamily="Manrope, sans-serif">
        ALVEX
      </text>
      <text x={hub.x} y={hub.y + 16} textAnchor="middle" fontSize="11" fill="#F7F8FA" fillOpacity="0.6" fontFamily="Inter, sans-serif">
        coordination
      </text>
      {nodes.map((n) => (
        <g key={`n-${n.label}`}>
          <circle cx={n.x} cy={n.y} r="6" fill="#8FA8FF" />
          <text
            x={n.x}
            y={n.y - 16}
            textAnchor="middle"
            fontSize="13"
            fill="#F7F8FA"
            fillOpacity="0.9"
            fontFamily="Inter, sans-serif"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Presence() {
  return (
    <section id="presence" aria-labelledby="presence-title" className="bg-midnight text-porcelain">
      <div className="mx-auto grid max-w-[1320px] gap-14 px-5 py-20 sm:px-8 md:py-32 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">04 — Our presence in China</p>
            <h2
              id="presence-title"
              className="mt-7 font-display text-[clamp(34px,4.6vw,64px)] font-bold leading-[1.05] tracking-[-0.03em] text-balance"
            >
              On the ground in China. Connected to your business.
            </h2>
            <p className="mt-7 max-w-[30rem] text-[17px] leading-[1.65] text-porcelain/75">
              Sourcing, supplier verification and trade support across China, coordinated in Chinese and English.
            </p>
          </Reveal>

          <ol className="mt-12 grid gap-8 md:mt-14">
            {points.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.05} className="grid grid-cols-[40px_1fr] gap-5 border-t border-white/15 pt-6">
                <span className="font-display text-[14px] font-semibold tabular-nums text-[#8FA8FF]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[20px] font-semibold leading-snug tracking-[-0.015em] sm:text-[22px]">{p.title}</h3>
                  <p className="mt-2.5 max-w-[28rem] text-[16px] leading-[1.65] text-porcelain/70">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="flex items-center rounded-none border border-white/10 bg-navy/50 p-5 sm:p-8 lg:col-span-6">
          <div className="w-full">
            <Network />
          </div>
        </div>
      </div>
    </section>
  );
}
