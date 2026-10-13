"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navigation } from "@/content/site";
import { Logo } from "@/components/brand/logo";

const ease = [0.16, 1, 0.3, 1] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        scrolled || open ? "bg-porcelain/92 backdrop-blur-md border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
        <a href="#top" aria-label="ALVEX home" onClick={close} className="relative z-10">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="link-indicator text-[14px] font-medium text-navy"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden min-h-11 items-center bg-navy px-5 text-[14px] font-semibold text-porcelain transition-colors hover:bg-midnight xl:inline-flex"
          >
            Start Your Project
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-12 w-12 items-center justify-center text-navy xl:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3.5 w-6" aria-hidden>
              <span
                className={`absolute left-0 right-0 top-0 h-px bg-current transition-transform duration-500 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              />
              <span
                className={`absolute bottom-0 left-0 right-0 h-px bg-current transition-transform duration-500 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease }}
            className="fixed inset-0 top-16 flex flex-col bg-porcelain xl:hidden"
          >
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 pb-10 pt-6">
              <ul className="divide-y divide-line border-y border-line">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.1 + i * 0.04, duration: 0.5, ease }}
                  >
                    <a
                      href={item.href}
                      onClick={close}
                      className="flex min-h-14 items-center justify-between py-3 font-display text-[26px] font-semibold tracking-tight text-navy"
                    >
                      {item.label}
                      <span aria-hidden className="text-steel-deep">→</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={close}
                className="mt-8 flex min-h-14 items-center justify-center bg-navy text-[16px] font-semibold text-porcelain"
              >
                Start Your Project
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
