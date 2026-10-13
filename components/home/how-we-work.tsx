"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { howWeWork } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

export function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 0.6", "end 0.6"] });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.getAttribute("data-index")));
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    stageRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-we-work"
      ref={sectionRef}
      aria-labelledby="how-title"
      className="border-t border-line bg-porcelain"
    >
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-5 py-24 sm:px-8 md:py-32 lg:grid-cols-12 lg:gap-x-6 lg:px-12">
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit">
          <Reveal>
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep">
              03 — How we work
            </p>
            <h2
              id="how-title"
              className="font-display text-display-m font-bold leading-[1.02] tracking-[-0.03em] text-navy"
            >
              From the first conversation to the next opportunity.
            </h2>
            <p className="mt-6 max-w-[30rem] text-[17px] leading-[1.65] text-ink">
              Six stages, scoped to the service you need. A sourcing brief may use all six; a single factory visit
              may use two.
            </p>
          </Reveal>

          {/* Stage indicator: a rail that fills with scroll and a live readout of the current stage. */}
          <div className="mt-12 hidden items-center gap-5 lg:flex" aria-hidden>
            <div className="relative h-px flex-1 bg-line">
              <motion.div
                className="absolute inset-y-0 left-0 bg-navy"
                style={{ width: reduce ? "100%" : progress }}
              />
            </div>
            <span className="text-[13px] tabular-nums text-steel-deep">
              0{active + 1} / 0{howWeWork.length}
            </span>
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {howWeWork.map((stage, i) => {
            const isActive = i === active;
            return (
              <li
                key={stage.title}
                ref={(el) => {
                  stageRefs.current[i] = el;
                }}
                data-index={i}
                className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-t border-line py-10 last:border-b sm:grid-cols-[5rem_1fr] md:py-14"
              >
                <span
                  className={`font-display text-[15px] font-semibold tabular-nums transition-colors duration-700 ${
                    isActive ? "text-navy" : "text-steel-deep"
                  }`}
                >
                  {stage.step}
                </span>
                <div>
                  <h3
                    className={`font-display text-[32px] font-semibold leading-none tracking-[-0.02em] transition-colors duration-700 sm:text-[44px] ${
                      isActive ? "text-navy" : "text-steel-deep"
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p
                    className={`mt-5 max-w-[30rem] text-[17px] leading-[1.65] transition-opacity duration-700 ${
                      isActive ? "text-ink opacity-100" : "text-steel-deep"
                    }`}
                  >
                    {stage.text}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
