import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function StepsSection() {
  const c = landingContent.steps;

  return (
    <Section id="steps" className="bg-[color:var(--color-surface-2)]/60">
      <Reveal>
        <h2 className="font-serif text-3xl leading-tight text-[color:var(--color-foreground)] sm:text-4xl">
          {c.title}
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p className="mt-5 max-w-4xl text-base leading-8 text-[color:var(--color-muted)] sm:text-lg sm:leading-9">
          {c.intro}
        </p>
      </Reveal>

      <div className="mt-8 space-y-4">
        {c.stages.map((s, idx) => (
          <Reveal key={s.stage} delay={idx * 0.05}>
            <div className="rounded-3xl bg-[color:var(--color-surface)] p-7 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition duration-300 ease-out">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center rounded-full bg-[color:var(--color-accent-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[color:var(--color-foreground)] ring-1 ring-[color:var(--color-border)]">
                  {s.stage}
                </div>
              </div>
              <div className="mt-3 text-lg font-semibold text-[color:var(--color-foreground)] sm:text-xl">
                {s.title}
              </div>
              <div className="mt-4">
                <div className="text-base font-semibold text-[color:var(--color-muted)]">
                  Що всередині:
                </div>
                <ul className="mt-3 space-y-2 text-base leading-8 text-[color:var(--color-muted)]">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[color:var(--color-accent-2)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 rounded-2xl bg-[color:var(--color-accent-soft)] px-6 py-5 ring-1 ring-[color:var(--color-border)]">
                <div className="text-base font-semibold text-[color:var(--color-foreground)]">
                  Результат етапу:
                </div>
                <div className="mt-2 text-base leading-8 text-[color:var(--color-foreground)]">
                  {s.result}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-2xl bg-[color:var(--color-surface)] px-6 py-5 ring-1 ring-[color:var(--color-border)]">
          <div className="space-y-2 text-base leading-8 text-[color:var(--color-foreground)]">
            <p>{c.summaryLines[0]}</p>
            <p>{c.summaryLines[1]}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
