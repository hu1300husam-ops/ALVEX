import { brand } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";

const principles = [
  {
    title: "Written, not remembered",
    text: "Quotes, terms, sample decisions and inspection results are recorded so every party works from the same facts.",
  },
  {
    title: "Verified before committed",
    text: "We check the supplier, their capacity and the product before money or volume moves.",
  },
  {
    title: "Clear about scope",
    text: "We say what we handle and what we do not.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-porcelain">
      <div className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.2em] text-steel-deep">08 — About ALVEX</p>
            <h2 id="about-title" className="font-display text-display-m font-bold leading-[1.02] tracking-[-0.03em] text-navy">
              A business services company working between two markets.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-ink">
              {brand.description} We work as an extension of your team, not a replacement for your own judgement.
            </p>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="divide-y divide-line border-y border-line">
              {principles.map((p, i) => (
                <Reveal as="li" key={p.title} delay={i * 0.06} className="grid grid-cols-[2.5rem_1fr] gap-4 py-8">
                  <span className="text-[13px] tabular-nums text-steel-deep">0{i + 1}</span>
                  <div>
                    <p className="font-display text-[22px] font-semibold tracking-tight text-navy">{p.title}</p>
                    <p className="mt-2 text-[16px] leading-[1.65] text-ink">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal className="lg:col-span-5 lg:col-start-1">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about-office.jpg"
                alt="A bright, calm office interior with a long table and tall glass windows"
                width={1264}
                height={848}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="mt-3 text-[13px] text-steel-deep">Illustrative image.</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
