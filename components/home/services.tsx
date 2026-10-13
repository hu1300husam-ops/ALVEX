"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { services } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

const ease = [0.16, 1, 0.3, 1] as const;

export function Services() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const current = services[active];

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative bg-navy text-porcelain"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-steel lg:col-span-3">
            02 — Services
          </p>
          <h2
            id="services-title"
            className="font-display text-display-m font-bold leading-[1.02] tracking-[-0.03em] lg:col-span-9"
          >
            The right support, at every stage.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-x-6">
          {/* Index: each item is a real button, keyboard and screen-reader friendly. */}
          <ol className="lg:col-span-6 lg:col-start-1" aria-label="Service capabilities">
            {services.map((service, i) => {
              const selected = i === active;
              return (
                <li key={service.slug} className="border-t border-white/12 last:border-b">
                  <button
                    type="button"
                    aria-pressed={selected}
                    aria-controls="service-panel"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setActive(i)}
                    className="group flex w-full min-h-16 items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="w-7 text-[13px] tabular-nums text-steel">0{i + 1}</span>
                      <span
                        className={`font-display text-[24px] font-semibold leading-tight tracking-tight transition-[color,transform] duration-700 sm:text-[34px] ${
                          selected ? "translate-x-0 text-porcelain" : "text-white/45 group-hover:text-white/80"
                        }`}
                        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                      >
                        {service.title}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className={`hidden shrink-0 text-[18px] transition-all duration-500 sm:block ${
                        selected ? "translate-x-0 text-accent opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                    >
                      →
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div
            id="service-panel"
            aria-live="polite"
            className="lg:col-span-5 lg:col-start-8 lg:sticky lg:top-32 lg:self-start"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="figure-placeholder-dark mb-8 flex aspect-[16/10] items-end border border-white/10 p-4">
                  <span className="bg-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-steel">
                    Placeholder · {current.title} photograph
                  </span>
                </div>
                <h3 className="font-display text-[28px] font-semibold leading-tight tracking-tight">{current.title}</h3>
                <p className="mt-4 text-[17px] leading-[1.65] text-white/80">{current.summary}</p>
                <ul className="mt-7 space-y-3 border-t border-white/12 pt-6 text-[15px] text-white/75">
                  {current.scope.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="link-indicator mt-9 inline-block min-h-12 py-3 text-[15px] font-semibold text-porcelain"
                >
                  Discuss {current.title.toLowerCase()} for your project
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
