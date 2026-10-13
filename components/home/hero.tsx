"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BridgePlate } from "@/components/brand/plate";

const ease = [0.16, 1, 0.3, 1] as const;

const lines = ["China is full of opportunities.", "We help you navigate them."];

function MaskLine({ text, index }: { text: string; index: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.08em]">
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
      className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-x-8 px-5 pb-20 pt-28 sm:px-8 md:pb-24 md:pt-32 lg:grid-cols-12 lg:gap-x-6 lg:px-12 lg:pb-28 lg:pt-36"
    >
      <motion.p
        className="col-span-full mb-8 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep lg:mb-12"
        {...fade(0)}
      >
        <span className="h-px w-10 bg-navy" aria-hidden />
        Yiwu, China · Sourcing and trade support
      </motion.p>

      <h1
        id="hero-title"
        className="col-span-full font-display text-display-xl font-bold leading-[0.98] tracking-[-0.04em] text-navy lg:col-span-7 lg:pr-6"
      >
        {lines.map((line, i) => (
          <MaskLine key={line} text={line} index={i} />
        ))}
      </h1>

      <motion.div
        className="col-span-full mt-12 lg:col-span-7 lg:mt-16 lg:max-w-[36rem]"
        {...fade(0.5)}
      >
        <p className="text-[18px] leading-[1.65] text-ink sm:text-[19px]">
          From sourcing and supplier verification to commercial coordination and trade support, ALVEX helps
          international businesses operate with greater confidence in China.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="#contact">Start Your Project</Button>
          <a href="#services" className="link-indicator min-h-12 py-3 text-[15px] font-semibold text-navy sm:px-2">
            Explore Our Services
          </a>
        </div>
      </motion.div>

      <motion.div
        className="col-span-full mt-16 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-2 lg:mt-0 lg:self-end"
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease }}
      >
        <BridgePlate className="w-full" />
        <p className="mt-4 max-w-[22rem] text-[13px] leading-snug text-steel-deep">
          ALVEX is based in Yiwu, Zhejiang, China.
        </p>
      </motion.div>
    </section>
  );
}
