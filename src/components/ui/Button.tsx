"use client";

import { cn } from "@/lib/utils";
import { trackCtaClick } from "@/lib/analytics";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

export function Button({
  as = "button",
  href,
  onClick,
  trackPlacement,
  variant = "primary",
  className,
  children,
  ariaLabel,
}: {
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  trackPlacement?: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 text-base sm:text-lg font-semibold transition-all duration-400 ease-out focus:outline-none focus:ring-4 focus:ring-[color:var(--color-accent)]/30 focus:ring-offset-2 focus:ring-offset-[color:var(--color-background)] active:scale-95";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-gradient-to-br from-[#e88a54] via-[#d97942] to-[#c4652f] text-white font-bold shadow-[var(--shadow-premium)] hover:shadow-[var(--glow-strong)] hover:scale-105 hover:-translate-y-1",
    secondary:
      "bg-[color:var(--color-surface)] text-[color:var(--color-foreground)] font-semibold ring-2 ring-[color:var(--color-border)] hover:bg-[color:var(--color-surface-2)] hover:ring-[color:var(--color-accent)]/40 hover:-translate-y-1 hover:shadow-[var(--shadow-strong)]",
    ghost:
      "text-[color:var(--color-foreground)] hover:bg-[color:var(--color-surface-2)] hover:shadow-[var(--shadow)]",
  };

  const cls = cn(base, variants[variant], className);

  if (as === "a") {
    return (
      <a
        className={cls}
        href={href}
        aria-label={ariaLabel}
        onClick={() => {
          if (trackPlacement) trackCtaClick(trackPlacement);
          onClick?.();
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={cls}
      type="button"
      onClick={() => {
        if (trackPlacement) trackCtaClick(trackPlacement);
        onClick?.();
      }}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
