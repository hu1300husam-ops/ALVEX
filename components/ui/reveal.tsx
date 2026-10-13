import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "p" | "li" | "span";
};

/**
 * Content wrapper. Text and media are always visible: no entrance fade is
 * applied to content, so nothing depends on scroll timing, fast scrolling,
 * reduced-motion settings or full-page capture. The `delay` prop is accepted
 * for call-site compatibility and is intentionally unused.
 */
export function Reveal({ children, className = "", as = "div" }: RevealProps) {
  const cls = className.trim() || undefined;
  if (as === "p") return <p className={cls}>{children}</p>;
  if (as === "li") return <li className={cls}>{children}</li>;
  if (as === "span") return <span className={cls}>{children}</span>;
  return <div className={cls}>{children}</div>;
}
