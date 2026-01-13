import { cn } from "@/lib/utils";
import { Container } from "./Container";
import type { ReactNode } from "react";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        // More “air” between blocks (Sonet): ~80px mobile, ~128px desktop
        "py-20 sm:py-32 scroll-mt-24",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
