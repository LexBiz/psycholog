"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
  className,
}: {
  items: { title: string; content: string }[];
  className?: string;
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;
        return (
          <div
            key={item.title}
            className="rounded-2xl bg-[color:var(--color-surface)] ring-1 ring-[color:var(--color-border)]"
          >
            <button
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-[color:var(--color-foreground)]">
                {item.title}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "select-none rounded-full px-2 py-1 text-xs ring-1 ring-[color:var(--color-border)]",
                  isOpen
                    ? "bg-[color:var(--color-accent-soft)] text-[color:var(--color-foreground)]"
                    : "bg-[color:var(--color-surface-2)] text-[color:var(--color-muted)]"
                )}
              >
                {isOpen ? "—" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows] duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="min-h-0">
                <div className="px-5 pb-5 text-sm leading-7 text-[color:var(--color-muted)] whitespace-pre-line">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
