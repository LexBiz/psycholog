import { landingContent } from "@/content/landingContent";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  const c = landingContent.hero;

  return (
    <Section id="hero" className="pt-10 sm:pt-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fdfcfa] via-[#f9f6f2] to-[#f5f0ea] ring-2 ring-[color:var(--color-border)] shadow-[var(--shadow-strong)]">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-accent-soft)] via-transparent to-[color:rgba(107,155,95,0.12)]" />
        <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-[#e88a54] to-[#d97942] text-white text-xs font-bold rounded-full shadow-[var(--shadow-premium)]">
          ⚡ ЕКСКЛЮЗИВНА ПРОПОЗИЦІЯ
        </div>
        <div className="relative px-6 py-12 sm:px-12 sm:py-16">
          <Reveal>
            <h1 className="font-serif text-5xl leading-[1.1] tracking-tight text-[color:var(--color-foreground)] sm:text-7xl font-bold">
              {c.title}
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[color:var(--color-muted)] sm:text-2xl sm:leading-10 font-medium">
              {c.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                as="a"
                href="#videos"
                ariaLabel={c.ctaPrimary}
                trackPlacement="hero_primary"
                className="px-7 py-4 text-base sm:text-lg"
              >
                {c.ctaPrimary}
              </Button>
              <Button
                as="a"
                href="#lead"
                variant="secondary"
                ariaLabel="Отримати перший крок до полегшення"
                trackPlacement="hero_secondary"
                className="px-7 py-4 text-base sm:text-lg"
              >
                Отримати перший крок до полегшення
              </Button>
            </div>
            <div className="mt-4 text-sm text-[color:var(--color-muted)]">
              {c.ctaHint}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
