"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Cinematic full-bleed hero. The photograph is a text-free, generated
 * conceptual background of China's container-port trade environment. It
 * contains no ALVEX branding, people or facilities, and must be replaced by
 * approved photography before production (see docs/ASSETS.md).
 *
 * The copy is real HTML above the image. A dark directional gradient keeps
 * the headline readable on desktop; a bottom-weighted gradient does the same
 * on mobile.
 */

function Backdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-midnight">
      <picture>
        <source media="(min-width: 768px)" srcSet="/hero/hero-desktop.webp" type="image/webp" />
        <img
          src="/hero/hero-mobile.webp"
          alt=""
          decoding="async"
          fetchPriority="high"
          className="hero-photo absolute inset-0 h-full w-full object-cover object-[62%_50%] md:object-[center_40%]"
        />
      </picture>
      {/* Desktop: dark left side for the copy, lighter right side for the image. */}
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(11,18,34,0.94)_0%,rgba(11,18,34,0.72)_38%,rgba(11,18,34,0.18)_72%,rgba(11,18,34,0.35)_100%)] md:block" />
      {/* Mobile: darker lower half so the headline sits on solid shadow. */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,34,0.25)_0%,rgba(11,18,34,0.55)_40%,rgba(11,18,34,0.96)_100%)] md:hidden" />
      {/* Soft top shade so the navigation stays legible on bright sky. */}
      <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(11,18,34,0.55),transparent)]" />
    </div>
  );
}

function MaskLine({ children, index }: { children: string; index: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.1em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay: 0.2 + index * 0.14, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-screen min-h-[100svh] flex-col overflow-hidden text-porcelain"
    >
      <Backdrop />

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-end px-5 pb-12 pt-32 sm:px-8 md:pb-16 lg:px-12 lg:pb-20">
        <p
          className="hero-rise mb-6 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light sm:mb-8"
          style={{ ["--d" as string]: "0s" }}
        >
          <span className="h-px w-10 bg-steel-light" aria-hidden />
          China — International trade services
        </p>

        <h1
          id="hero-title"
          className="font-display text-[clamp(44px,8.2vw,124px)] font-bold leading-[0.96] tracking-[-0.035em] text-balance"
        >
          <MaskLine index={0}>Your business</MaskLine>
          <MaskLine index={1}>bridge to China.</MaskLine>
        </h1>

        <div
          className="hero-rise mt-10 grid grid-cols-1 gap-8 sm:mt-12 lg:mt-14 lg:grid-cols-12 lg:items-end"
          style={{ ["--d" as string]: "0.55s" }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:col-span-5">
            <a
              href="#services"
              className="group inline-flex min-h-13 items-center justify-center gap-3 bg-porcelain px-7 py-4 text-[15px] font-semibold text-navy transition-colors duration-300 hover:bg-white active:bg-[#e3e8f0]"
            >
              Explore Our Services
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex min-h-13 items-center justify-center border border-porcelain/40 px-7 py-4 text-[15px] font-semibold text-porcelain transition-colors duration-300 hover:border-porcelain hover:bg-porcelain/5 active:bg-porcelain/10"
            >
              Start Your Project
            </a>
          </div>
          <p className="max-w-[30rem] text-[17px] leading-[1.6] text-porcelain/85 sm:text-[18px] lg:col-span-4 lg:col-start-9">
            On-the-ground sourcing, supplier coordination and trade support for international businesses.
          </p>
        </div>
      </div>

      <a
        href="#advantage"
        aria-label="Scroll to the next section"
        className="scroll-cue absolute bottom-6 right-5 flex h-14 items-end justify-center sm:right-8 lg:bottom-10 lg:right-12"
      >
        <span className="block h-full w-px bg-porcelain/25">
          <span className="scroll-cue-line block h-1/2 w-px bg-porcelain" />
        </span>
      </a>
    </section>
  );
}
