import type { ReactNode } from "react";

type FigureProps = {
  /** Describes what the approved photo will show. Rendered as an accessible label. */
  label: string;
  caption?: ReactNode;
  ratio?: string;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Honest image slot. Until approved ALVEX photography is supplied, the frame
 * is labelled as a placeholder rather than showing stock imagery.
 */
export function Figure({ label, caption, ratio = "4 / 5", tone = "light", className = "" }: FigureProps) {
  const dark = tone === "dark";
  return (
    <figure className={`m-0 ${className}`}>
      <div
        role="img"
        aria-label={`Image placeholder: ${label}`}
        style={{ aspectRatio: ratio }}
        className={`relative flex w-full items-end overflow-hidden border p-4 ${
          dark ? "figure-placeholder-dark border-white/10" : "figure-placeholder border-line"
        }`}
      >
        <span
          className={`rounded-sm px-2 py-1 text-[11px] font-medium uppercase tracking-[0.14em] ${
            dark ? "bg-white/10 text-steel" : "bg-porcelain/90 text-steel-deep"
          }`}
        >
          Placeholder · {label}
        </span>
      </div>
      {caption ? (
        <figcaption className={`mt-3 text-[13px] leading-snug ${dark ? "text-steel" : "text-steel-deep"}`}>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
