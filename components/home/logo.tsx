/**
 * PLACEHOLDER WORDMARK.
 * The official ALVEX logo file was not present in the workspace. Replace this
 * component with the supplied logo asset (SVG preferred) and keep the same
 * accessible label. Do not redraw the logo.
 */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span
      className={`inline-flex items-baseline gap-2 font-display text-[17px] font-extrabold uppercase tracking-[0.28em] ${
        tone === "light" ? "text-porcelain" : "text-navy"
      }`}
    >
      ALVEX
      <span className="sr-only">(logo placeholder)</span>
    </span>
  );
}
