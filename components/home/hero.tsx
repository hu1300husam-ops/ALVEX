"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Figure } from "@/components/ui/figure";

const ease = [0.16, 1, 0.3, 1] as const;

const lines = ["China is full of opportunities.", "We help you navigate them."];

function MaskLine({ text, index }: { text: string; index: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay: 0.15 + index * 0.14, ease }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease },
        };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-x-8 px-5 pb-16 pt-28 sm:px-8 md:pb-20 md:pt-32 lg:grid-cols-12 lg:gap-x-6 lg:px-12 lg:pb-24 lg:pt-36"
    >
      <p
        className="col-span-full mb-8 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep lg:mb-10"
        {...fade(0)}
      >
        <span className="h-px w-10 bg-navy" aria-hidden />
        Yiwu, China · Sourcing & trade support
      </p>

      <h1
        id="hero-title"
        className="col-span-full font-display text-display-xl font-bold leading-[0.95] tracking-[-0.035em] text-navy lg:col-span-8 lg:pr-4"
      >
        {lines.map((line, i) => (
          <MaskLine key={line} text={line} index={i} />
        ))}
      </h1>

      <div className="col-span-full mt-10 lg:col-span-5 lg:col-start-1 lg:mt-14 lg:max-w-[34rem]">
        <motion.p className="text-[18px] leading-[1.65] text-ink sm:text-[19px]" {...fade(0.5)}>
          From sourcing and supplier verification to commercial coordination and trade support, ALVEX helps
          international businesses operate with greater confidence in China.
        </motion.p>
        <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" {...fade(0.65)}>
          <Button href="#contact">Start Your Project</Button>
          <a
            href="#services"
            className="link-indicator min-h-12 py-3 text-[15px] font-semibold text-navy sm:px-2"
          >
            Explore Our Services
          </a>
        </motion.div>
      </div>

      <motion.div
        className="col-span-full mt-14 lg:col-span-4 lg:col-start-9 lg:row-start-2 lg:mt-0 lg:self-end"
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease }}
      >
        <Figure
          label="Cinematic commercial activity in Yiwu"
          ratio="4 / 5"
          caption="Approved ALVEX photography or footage will replace this frame."
        />
      </motion.div>
    </section>
  );
}
