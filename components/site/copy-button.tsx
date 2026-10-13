"use client";

import { useState } from "react";

/** Copies a text value (for example a WeChat ID) and confirms in a live region. */
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left font-display text-[22px] font-semibold tracking-[-0.01em] transition-colors hover:text-[#8FA8FF]"
    >
      {label}
      <span className="mt-1 block text-[14px] font-normal text-porcelain/60" role="status">
        {copied ? "Copied" : "Tap to copy"}
      </span>
    </button>
  );
}
