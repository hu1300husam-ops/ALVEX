"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Cinematic hero. The canvas is a full-bleed composition of the brand's own
 * grid and one route: Yiwu to your market. It contains no photographs, because
 * no approved ALVEX imagery or licensed photography is available yet. It does
 * not imply any facility, employee or operation.
 *
 * Desktop and mobile use separate geometry, so the route stays in view in both
 * crops. The route draws once on load; reduced-motion users see it static.
 */

function Canvas() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden bg-midnight">
      {/* Desktop route */}
      <svg
        className="absolute inset-0 hidden h-full w-full md:block"
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="#F7F8FA" strokeOpacity="0.06" strokeWidth="1">
          {Array.from({ length: 17 }, (_, i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="1000" />
          ))}
          {Array.from({ length: 11 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="1600" y2={i * 100} />
          ))}
        </g>
        <path
          className="bridge-arc"
          d="M 1480 860 C 1400 560, 1420 300, 1560 150"
          stroke="#F7F8FA"
          strokeOpacity="0.9"
          strokeWidth="1.25"
          pathLength={1}
        />
        <path
          d="M 1480 860 C 1380 600, 1440 330, 1560 150"
          stroke="#537CFF"
          strokeWidth="1"
          strokeDasharray="2 7"
          strokeOpacity="0.9"
        />
        <circle cx="1480" cy="860" r="22" stroke="#537CFF" strokeOpacity="0.45" strokeWidth="1" />
        <circle cx="1480" cy="860" r="6" fill="#537CFF" />
        <circle cx="1560" cy="150" r="4.5" fill="#F7F8FA" />
      </svg>

      {/* Mobile route: the same idea, cropped for a portrait screen */}
      <svg
        className="absolute inset-0 h-full w-full md:hidden"
        viewBox="0 0 400 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g stroke="#F7F8FA" strokeOpacity="0.06" strokeWidth="1">
          {Array.from({ length: 5 }, (_, i) => (
            <line key={`mv${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`mh${i}`} x1="0" y1={i * 100} x2="400" y2={i * 100} />
          ))}
        </g>
        <path
          className="bridge-arc"
          d="M 330 250 C 300 160, 170 130, 92 100"
          stroke="#F7F8FA"
          strokeOpacity="0.9"
          strokeWidth="1.25"
          pathLength={1}
        />
        <path d="M 330 250 C 290 170, 180 140, 92 100" stroke="#537CFF" strokeWidth="1" strokeDasharray="2 6" strokeOpacity="0.9" />
        <circle cx="330" cy="250" r="18" stroke="#537CFF" strokeOpacity="0.45" strokeWidth="1" />
        <circle cx="330" cy="250" r="5" fill="#537CFF" />
        <circle cx="92" cy="100" r="4" fill="#F7F8FA" />
      </svg>

      {/* Directional overlay: keeps the copy side dark for contrast. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,25,45,0.96)_0%,rgba(16,25,45,0.78)_42%,rgba(16,25,45,0.30)_100%)] md:bg-[linear-gradient(180deg,rgba(16,25,45,0.35)_0%,rgba(16,25,45,0.55)_45%,rgba(16,25,45,0.97)_100%)]" />
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
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease },
        };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-screen min-h-[100svh] flex-col overflow-hidden text-porcelain"
    >
      <Canvas />

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-end px-5 pb-12 pt-32 sm:px-8 md:pb-16 lg:px-12 lg:pb-20">
        <motion.p
          className="mb-6 flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-light sm:mb-8"
          {...fade(0)}
        >
          <span className="h-px w-10 bg-steel-light" aria-hidden />
          Yiwu, China — International trade services
        </motion.p>

        <h1
          id="hero-title"
          className="font-display text-display-xl font-bold uppercase leading-[0.92] tracking-[-0.035em] text-balance"
        >
          <MaskLine index={0}>Your business</MaskLine>
          <MaskLine index={1}>Bridge to China.</MaskLine>
        </h1>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 lg:mt-14 lg:grid-cols-12 lg:items-end"
          {...fade(0.55)}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:col-span-5">
            <a
              href="#services"
              className="group inline-flex min-h-13 items-center justify-center gap-3 bg-porcelain px-7 py-4 text-[15px] font-semibold text-navy transition-colors duration-300 hover:bg-white active:bg-steel-light"
            >
              Explore Our Services
              <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-13 items-center justify-center border border-porcelain/40 px-7 py-4 text-[15px] font-semibold text-porcelain transition-colors duration-300 hover:border-porcelain hover:bg-porcelain/5 active:bg-porcelain/10"
            >
              Start Your Project
            </a>
          </div>
          <p className="max-w-[30rem] text-[17px] leading-[1.6] text-porcelain/85 sm:text-[18px] lg:col-span-4 lg:col-start-9">
            On-the-ground sourcing, supplier coordination and trade support for international businesses.
          </p>
        </motion.div>
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
