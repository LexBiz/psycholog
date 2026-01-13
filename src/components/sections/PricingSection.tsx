import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WayForPayButton } from "@/components/payments/WayForPayButton";
import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import { Countdown } from "@/components/ui/Countdown";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

export function PricingSection() {
  const c = landingContent.pricing;

  return (
    <Section id="pricing" className="bg-[color:var(--color-surface-2)]/60">
      <div className="text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e88a54] to-[#d97942] text-white text-sm font-bold rounded-full shadow-[var(--shadow-premium)] mb-4">
            🔥 ОБМЕЖЕНА ПРОПОЗИЦІЯ
          </div>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-4xl leading-tight text-[color:var(--color-foreground)] sm:text-5xl font-bold">
            {c.title}
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.06}>
        <div className="mt-5 space-y-2 text-base leading-8 text-[color:var(--color-muted)] sm:text-lg sm:leading-9">
          {c.introLines.map((x) => (
            <p key={x}>{x}</p>
          ))}
          <p className="pt-2">{c.intro2}</p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-[#fdfcfa] via-[#f9f6f2] to-[#f5f0ea] p-8 ring-2 ring-[color:var(--color-accent)]/30 shadow-[var(--shadow-strong)] hover:shadow-[var(--shadow-premium)] transition-all duration-500">
            <div className="absolute -top-3 left-6 px-4 py-1.5 bg-gradient-to-r from-[#6b9b5f] to-[#5a8a4e] text-white text-xs font-bold rounded-full shadow-lg">
              ⭐ НАЙПОПУЛЯРНІШЕ
            </div>
            <div className="text-base font-bold tracking-wide text-[color:var(--color-foreground)] uppercase">
              {c.onePackTitle}
            </div>
            <ul className="mt-5 space-y-2 text-base leading-8 text-[color:var(--color-muted)]">
              {c.onePackItems.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            {/* Urgency: Limited spots */}
            <div className="mt-7 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#dc2626] to-[#b91c1c] px-5 py-3 shadow-[var(--shadow-premium)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                <span className="text-xl">🔥</span>
              </div>
              <div className="flex-1 text-white">
                <div className="text-xs font-semibold uppercase tracking-wide">Увага!</div>
                <div className="text-sm font-bold">
                  Залишилось тільки <AnimatedNumber value={12} /> місць за цією ціною
                </div>
              </div>
            </div>

            {/* Price block with countdown */}
            <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#fdfcfa] to-[#f5f0ea] px-6 py-6 ring-2 ring-[color:var(--color-accent)]/40 shadow-[var(--shadow-strong)]">
              <div className="text-sm font-bold text-[color:var(--color-muted)] uppercase tracking-wide text-center">
                Знижка діє ще:
              </div>
              <div className="mt-4">
                <Countdown targetDate={new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)} />
              </div>
              
              <div className="mt-6 text-center">
                <div className="text-base font-semibold text-[color:var(--color-muted)] line-through">
                  Звичайна ціна: 4 999 грн
                </div>
                <div className="mt-2 text-5xl font-black text-[color:var(--color-accent)]">
                  2 999 грн
                </div>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#6b9b5f] px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                  💰 Ви економите 2 000 грн (40%)
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WayForPayButton label={c.ctaPrimary} />
              <Button
                as="a"
                href="#videos"
                variant="secondary"
                ariaLabel={c.ctaSecondary}
                trackPlacement="pricing_secondary"
                className="px-7 py-4 text-base sm:text-lg"
              >
                {c.ctaSecondary}
              </Button>
            </div>

            <div className="mt-7 space-y-2 text-base leading-8 text-[color:var(--color-muted)]">
              <div className="font-semibold text-[color:var(--color-foreground)]">
                {c.guaranteeTitle}
              </div>
              <div>{c.guaranteeText}</div>
              <div className="font-semibold text-[color:var(--color-foreground)]">
                {c.safePayTitle}
              </div>
              <div>{c.safePayText}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div
            id="lead"
            className="rounded-3xl bg-[color:var(--color-surface)] p-7 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-soft)]"
          >
            <div className="font-serif text-xl text-[color:var(--color-foreground)]">
              Отримати перший крок до полегшення
            </div>
            <div className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
              {landingContent.hero.subtitle}
            </div>
            <div className="mt-6">
              <LeadForm submitLabel={landingContent.hero.ctaPrimary} />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
