import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Brand plate: the visual system's stand-in for photography until approved
 * ALVEX imagery exists. It is a designed composition built from the brand's
 * own grid, coordinates and rules. It never depicts a place, a person or an
 * operation, so it cannot be mistaken for evidence.
 *
 * When approved photography is supplied, pass `src` and `alt` and the plate
 * renders an optimised image in the same frame.
 */

type PlateProps = {
  ratio?: string;
  tone?: "navy" | "midnight" | "porcelain";
  className?: string;
  src?: string;
  alt?: string;
  children?: ReactNode;
  /** Decorative grid density. */
  grid?: "fine" | "none";
};

const tones = {
  navy: "bg-navy text-porcelain",
  midnight: "bg-midnight text-porcelain",
  porcelain: "bg-porcelain text-navy",
};

export function Plate({ ratio = "4 / 5", tone = "navy", className = "", src, alt, children, grid = "fine" }: PlateProps) {
  if (src && alt) {
    return (
      <div className={`relative w-full max-w-full overflow-hidden ${className}`} style={{ aspectRatio: ratio }}>
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
        {children}
      </div>
    );
  }
  return (
    <div
      aria-hidden={children ? undefined : true}
      className={`relative w-full max-w-full overflow-hidden ${tones[tone]} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {grid === "fine" ? (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "calc(100% / 6) calc(100% / 6)",
          }}
        />
      ) : null}
      {children}
    </div>
  );
}

/**
 * Yiwu coordinates: the one place-based fact on the page, set as a
 * typographic detail rather than a picture.
 */
export function Coordinates({ className = "" }: { className?: string }) {
  return (
    <p className={`font-display text-[11px] font-semibold uppercase tracking-[0.22em] tabular-nums ${className}`}>
      29.3° N &nbsp;·&nbsp; 120.1° E
    </p>
  );
}

/**
 * The bridge: Yiwu to the buyer's market, as a single hairline arc.
 * Used as the homepage hero composition. The arc draws on load, and only
 * when motion is allowed (see globals.css).
 */
export function BridgePlate({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="Diagram: an arc connects Yiwu, China with the market of an international buyer."
      className={`relative w-full max-w-full overflow-hidden bg-navy text-porcelain ${className}`}
      style={{ aspectRatio: "4 / 5" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F7F8FA 1px, transparent 1px), linear-gradient(to bottom, #F7F8FA 1px, transparent 1px)",
          backgroundSize: "20% 16.66%",
        }}
      />
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" fill="none" aria-hidden>
        <path
          className="bridge-arc"
          d="M 92 372 C 150 150, 250 150, 312 128"
          stroke="#F7F8FA"
          strokeWidth="1"
          pathLength={1}
        />
        <path
          d="M 92 372 C 150 150, 250 150, 312 128"
          stroke="#537CFF"
          strokeWidth="1"
          strokeDasharray="2 6"
          opacity="0.9"
        />
        <circle cx="92" cy="372" r="6" fill="#537CFF" />
        <circle cx="92" cy="372" r="16" stroke="#537CFF" strokeWidth="1" opacity="0.5" />
        <circle cx="312" cy="128" r="4" fill="#F7F8FA" />
      </svg>
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
        <div>
          <p className="font-display text-[15px] font-semibold tracking-tight">Yiwu, China</p>
          <Coordinates className="mt-1 text-steel-light" />
        </div>
      </div>
      <p className="absolute right-[12%] font-display text-[15px] font-semibold tracking-tight" style={{ top: "calc(25.6% - 2.6rem)" }}>
        Your market
      </p>
    </div>
  );
}
