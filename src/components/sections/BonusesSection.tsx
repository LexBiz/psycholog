import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function BonusesSection() {
  const c = landingContent.bonuses;

  return (
    <Section id="bonuses" className="bg-[color:var(--color-surface-2)]/60">
      <Reveal>
        <h2 className="font-serif text-2xl leading-tight text-[color:var(--color-foreground)] sm:text-3xl">
          {c.title}
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.items.map((x, idx) => (
          <Reveal key={x.title} delay={idx * 0.03}>
            <div className="h-full rounded-3xl bg-[color:var(--color-surface)] p-6 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-soft)]">
              <div className="font-medium text-[color:var(--color-foreground)]">
                {x.title}
              </div>
              {x.text ? (
                <div className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  {x.text}
                </div>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-2xl bg-[color:var(--color-surface)] px-6 py-5 ring-1 ring-[color:var(--color-border)]">
          <div className="space-y-2 text-sm leading-7 text-[color:var(--color-foreground)]">
            <p>{c.summaryLines[0]}</p>
            <p>{c.summaryLines[1]}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
