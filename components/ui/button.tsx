import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "inverse";
  className?: string;
  external?: boolean;
};

const variants = {
  primary: "bg-navy text-porcelain hover:bg-midnight",
  ghost: "border border-navy/25 text-navy hover:border-navy",
  inverse: "bg-porcelain text-navy hover:bg-white",
};

/** Accessible link-styled button. Minimum 48px touch target. */
export function Button({ href, children, variant = "primary", className = "", external }: ButtonProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex min-h-12 items-center gap-3 px-6 py-3.5 text-[15px] font-semibold tracking-tight transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-500 group-hover:translate-x-1"
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        →
      </span>
    </a>
  );
}
