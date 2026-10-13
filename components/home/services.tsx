"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { services } from "@/content/site";

/**
 * Service explorer. Desktop: a large typographic list drives a contextual
 * panel (a route diagram built from that service's scope). Keyboard: Up and
 * Down move the selection, Home and End jump to the ends. Mobile: a touch
 * accordion. Nothing depends on hover. Services are capabilities, not owned
 * infrastructure, and the diagram only shows the steps ALVEX coordinates.
 */

function RouteDiagram({ scope }: { scope: string[] }) {
  const n = scope.length;
  const step = 560 / Math.max(n - 1, 1);
  return (
    <svg viewBox="0 0 640 260" className="h-auto w-full" fill="none" aria-hidden>
      <line x1="40" y1="130" x2="600" y2="130" stroke="#F7F8FA" strokeOpacity="0.18" strokeWidth="1" />
      <line
        x1="40"
        y1="130"
        x2={40 + step * (n - 1)}
        y2="130"
        stroke="#537CFF"
        strokeWidth="1.25"
        className="route-draw"
      />
      {scope.map((_, i) => {
        const x = 40 + step * i;
        return (
          <g key={i}>
            <circle cx={x} cy="130" r="6" fill={i === 0 ? "#537CFF" : "#0B1222"} stroke="#F7F8FA" strokeOpacity="0.6" />
            <text x={x} y={i % 2 === 0 ? 100 : 170} textAnchor="middle" fontSize="12" fill="#F7F8FA" fillOpacity="0.55" fontFamily="Inter, sans-serif">
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const [openMobile, setOpenMobile] = useState<number | null>(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);
  const current = services[active];

  const select = (i: number) => {
    setActive(i);
    buttons.current[i]?.focus();
  };

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = services.length - 1;
    if (e.key === "ArrowDown") select(active === last ? 0 : active + 1);
    else if (e.key === "ArrowUp") select(active === 0 ? last : active - 1);
    else if (e.key === "Home") select(0);
    else if (e.key === "End") select(last);
    else return;
    e.preventDefault();
  };

  return (
    <section id="services" aria-labelledby="services-title" className="bg-midnight text-porcelain">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light">02 — Services</p>
        <h2
          id="services-title"
          className="mt-8 max-w-[18ch] font-display text-[clamp(36px,5vw,72px)] font-bold leading-[1.02] tracking-[-0.03em] text-balance"
        >
          The right support, at every stage.
        </h2>

        {/* Desktop explorer */}
        <div className="mt-20 hidden grid-cols-12 gap-10 md:grid">
          <ol role="list" className="col-span-7 border-t border-white/15">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.slug} className="border-b border-white/15">
                  <button
                    ref={(el) => {
                      buttons.current[i] = el;
                    }}
                    type="button"
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onKeyDown={onKey}
                    aria-pressed={isActive}
                    aria-controls="service-panel"
                    tabIndex={isActive ? 0 : -1}
                    className="group flex w-full items-baseline gap-6 py-6 text-left transition-colors duration-300"
                  >
                    <span className={`font-display text-[15px] font-semibold tabular-nums transition-colors ${isActive ? "text-[#8FA8FF]" : "text-porcelain/65"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-[clamp(24px,2.6vw,40px)] font-semibold leading-[1.1] tracking-[-0.02em] transition-all duration-300 ${
                        isActive ? "translate-x-2 text-porcelain" : "text-porcelain/55 group-hover:text-porcelain/85"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div id="service-panel" aria-live="polite" className="col-span-5 flex flex-col justify-between">
            <div key={active} className="panel-in">
              <p className="font-display text-[15px] font-semibold tabular-nums text-[#8FA8FF]">
                {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-[28px] font-semibold leading-tight tracking-[-0.02em]">
                {current.title}
              </h3>
              <p className="mt-5 max-w-[30rem] text-[17px] leading-[1.65] text-porcelain/75">{current.summary}</p>
              <ul className="mt-8 grid gap-3 border-t border-white/15 pt-6 text-[15px] text-porcelain/85">
                {current.scope.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span aria-hidden className="h-px w-5 bg-[#8FA8FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div key={`diagram-${active}`} className="panel-in mt-12 border border-white/10 bg-navy/60 p-6">
              <RouteDiagram scope={current.scope} />
            </div>
          </div>
        </div>

        {/* Mobile accordion: touch-first, no hover dependency */}
        <ol role="list" className="mt-14 border-t border-white/15 md:hidden">
          {services.map((s, i) => {
            const open = openMobile === i;
            return (
              <li key={s.slug} className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() => setOpenMobile(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`service-m-${i}`}
                  className="flex min-h-14 w-full items-center gap-5 py-5 text-left"
                >
                  <span className="font-display text-[14px] font-semibold tabular-nums text-[#8FA8FF]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-[22px] font-semibold leading-snug tracking-[-0.015em]">
                    {s.title}
                  </span>
                  <span aria-hidden className={`text-[22px] leading-none text-porcelain/70 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div id={`service-m-${i}`} hidden={!open} className="pb-7 pl-[3.25rem] pr-2">
                  <p className="text-[16px] leading-[1.65] text-porcelain/75">{s.summary}</p>
                  <ul className="mt-5 grid gap-2.5 text-[15px] text-porcelain/85">
                    {s.scope.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span aria-hidden className="h-px w-4 bg-[#8FA8FF]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
