import type { ReactNode } from "react";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/footer";

/**
 * Shared frame for inner pages: skip link, the solid site header, the main
 * landmark, and the footer. Inner pages use the same navigation as the
 * homepage, so the site reads as one product.
 */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-3 focus:text-porcelain"
      >
        Skip to content
      </a>
      <SiteHeader solid />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
