"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/site";
import { Logo } from "@/components/brand/logo";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Site header and mobile navigation.
 *
 * Root cause of the earlier "menu does not appear" defect: the overlay was
 * rendered inside the header. While the menu was open the header carried
 * `backdrop-filter`, which makes it the containing block for fixed descendants.
 * The overlay (`fixed inset-0 top-16`) was therefore sized to the 64px header
 * bar and collapsed to 0px height. The overlay now lives outside the header,
 * in the viewport's containing block.
 *
 * Behaviour: disclosure pattern (aria-expanded / aria-controls), Escape closes,
 * focus moves into the menu on open and returns to the toggle on close, page
 * content is made inert and scroll-locked while open, and any link closes it.
 */
export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  const reduce = useReducedMotion();

  // Header surface: transparent over the hero, solid once the page moves.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll lock, Escape, inert page content, and leave the menu on desktop widths.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const inertTargets = [document.getElementById("main"), document.getElementById("site-footer")].filter(
      (el): el is HTMLElement => el !== null,
    );
    inertTargets.forEach((el) => el.setAttribute("inert", ""));

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1280px)");
    const onDesktop = () => desktop.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      inertTargets.forEach((el) => el.removeAttribute("inert"));
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  // Focus management: into the menu on open, back to the toggle on close.
  useEffect(() => {
    if (open) {
      const first = menuRef.current?.querySelector<HTMLElement>("a");
      requestAnimationFrame(() => first?.focus({ preventScroll: true }));
    } else if (wasOpen.current) {
      toggleRef.current?.focus({ preventScroll: true });
    }
    wasOpen.current = open;
  }, [open]);

  const close = () => setOpen(false);
  const onHero = !solid && !scrolled && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-500 ease-editorial ${
          open
            ? "bg-midnight text-porcelain"
            : onHero
              ? "border-b border-transparent bg-transparent text-porcelain"
              : "border-b border-line bg-porcelain/95 text-navy backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
          <a href="/" aria-label="ALVEX, back to homepage" onClick={close} className="relative z-10">
            <Logo tone={open || onHero ? "light" : "dark"} />
          </a>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="link-indicator text-[14px] font-medium text-current">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className={`hidden min-h-11 items-center px-5 text-[14px] font-semibold transition-colors xl:inline-flex ${
                onHero ? "bg-porcelain text-navy hover:bg-white" : "bg-navy text-porcelain hover:bg-midnight"
              }`}
            >
              Start Your Project
            </a>
            <button
              ref={toggleRef}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative z-10 flex h-12 w-12 items-center justify-center xl:hidden"
            >
              <span className="relative block h-3.5 w-6" aria-hidden>
                <span
                  className={`absolute left-0 right-0 top-0 h-px bg-current transition-transform duration-500 ease-editorial ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 right-0 h-px bg-current transition-transform duration-500 ease-editorial ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Sibling of the header, so the fixed overlay is sized to the viewport. */}
      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            ref={menuRef}
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto overscroll-contain bg-midnight pt-16 text-porcelain xl:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-1 flex-col px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-6">
              <ul className="border-t border-white/12">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.08 + i * 0.035, duration: 0.45, ease }}
                    className="border-b border-white/12"
                  >
                    <a
                      href={item.href}
                      onClick={close}
                      className="flex min-h-14 items-center justify-between py-3 font-display text-[26px] font-semibold tracking-tight"
                    >
                      {item.label}
                      <span aria-hidden className="text-accent-soft">→</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="/contact"
                onClick={close}
                className="mt-8 flex min-h-14 items-center justify-center bg-porcelain text-[16px] font-semibold text-navy"
              >
                Start Your Project
              </a>
              <p className="mt-auto pt-10 text-[13px] text-steel-light">Based in China</p>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
