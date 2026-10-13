import { SiteHeader } from "@/components/home/site-header";
import { Hero } from "@/components/home/hero";
import { Advantage } from "@/components/home/advantage";
import { Services } from "@/components/home/services";
import { HowWeWork } from "@/components/home/how-we-work";
import { Presence } from "@/components/home/presence";
import { CantonFair } from "@/components/home/canton-fair";
import { Operations } from "@/components/home/operations";
import { Insights } from "@/components/home/insights";
import { About } from "@/components/home/about";
import { FinalCta } from "@/components/home/final-cta";
import { SiteFooter } from "@/components/home/footer";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-3 focus:text-porcelain"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Advantage />
        <Services />
        <HowWeWork />
        <Presence />
        <CantonFair />
        <Operations />
        <Insights />
        <About />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
