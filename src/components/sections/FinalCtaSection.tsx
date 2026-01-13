import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FinalCtaSection() {
  const c = landingContent.finalCta;

  return (
    <Section id="final-cta">
      <div className="rounded-3xl bg-gradient-to-br from-[#fdfcfa] via-[#f9f6f2] to-[#f5f0ea] ring-2 ring-[color:var(--color-accent)]/30 shadow-[var(--shadow-strong)] overflow-hidden">
        <div className="bg-gradient-to-br from-[color:var(--color-accent-soft)] via-transparent to-[color:rgba(107,155,95,0.12)] px-8 py-12 sm:px-12 sm:py-16">
          <Reveal>
            <h2 className="font-serif text-4xl leading-tight text-[color:var(--color-foreground)] sm:text-6xl font-bold">
              {c.title}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="mt-6 whitespace-pre-line text-base leading-8 text-[color:var(--color-muted)] sm:text-lg sm:leading-9">
              {c.lines.join("\n")}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                as="a"
                href="#pricing"
                ariaLabel={c.ctaPrimary}
                trackPlacement="final_primary"
                className="px-7 py-4 text-base sm:text-lg"
              >
                {c.ctaPrimary}
              </Button>
              <Button
                as="a"
                href="#videos"
                variant="secondary"
                ariaLabel={c.ctaSecondary}
                trackPlacement="final_secondary"
                className="px-7 py-4 text-base sm:text-lg"
              >
                {c.ctaSecondary}
              </Button>
            </div>
            <div className="mt-5 text-base text-[color:var(--color-muted)]">
              {c.trustLine}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
