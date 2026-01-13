"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function StickyCTA({
  primaryLabel,
  secondaryLabel,
  primaryHref = "#pricing",
  secondaryHref = "#videos",
  className,
}: {
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref?: string;
  secondaryHref?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--color-border)] bg-[color:var(--color-surface)]/80 backdrop-blur sm:hidden",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3">
        <Button
          as="a"
          href={secondaryHref}
          variant="secondary"
          className="flex-1 justify-center py-3"
          ariaLabel={secondaryLabel}
          trackPlacement="sticky_secondary"
        >
          {secondaryLabel}
        </Button>
        <Button
          as="a"
          href={primaryHref}
          className="flex-1 justify-center py-3"
          ariaLabel={primaryLabel}
          trackPlacement="sticky_primary"
        >
          {primaryLabel}
        </Button>
      </div>
    </div>
  );
}
