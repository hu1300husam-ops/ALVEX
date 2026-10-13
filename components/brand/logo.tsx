import Image from "next/image";
import { brand } from "@/content/site";

type LogoProps = {
  tone?: "dark" | "light";
  className?: string;
  /** Pixel height for the rendered logo. */
  height?: number;
};

/**
 * ALVEX logo.
 *
 * Uses the official asset once it is supplied: set `brand.logo.src` in
 * content/site.ts to the file path under /public (SVG preferred) and
 * set `brand.logo.width` / `brand.logo.height` to the artwork's intrinsic size.
 *
 * Until then it renders the company name set in the brand typeface. That is
 * not a logo design; it is a neutral text fallback and must be replaced.
 */
export function Logo({ tone = "dark", className = "", height = 22 }: LogoProps) {
  const { src, width, height: intrinsicHeight, alt } = brand.logo;
  if (src) {
    const w = Math.round((height * width) / intrinsicHeight);
    return (
      <Image
        src={src}
        alt={alt}
        width={w}
        height={height}
        priority
        className={`block h-auto ${tone === "light" ? "invert" : ""} ${className}`}
        style={{ height, width: "auto" }}
      />
    );
  }
  return (
    <span
      aria-label={alt}
      role="img"
      className={`inline-block font-display font-extrabold uppercase leading-none tracking-[0.3em] ${
        tone === "light" ? "text-porcelain" : "text-navy"
      } ${className}`}
      style={{ fontSize: Math.round(height * 0.78) }}
    >
      ALVEX
    </span>
  );
}
