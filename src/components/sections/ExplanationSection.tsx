import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function ExplanationSection() {
  const c = landingContent.explanation;

  return (
    <Section id="explanation" className="bg-[color:var(--color-surface-2)]/60">
      <Reveal>
        <h2 className="font-serif text-4xl leading-tight text-[color:var(--color-foreground)] sm:text-5xl font-bold">
          {c.title}
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p className="mt-5 max-w-4xl text-base leading-8 text-[color:var(--color-muted)] sm:text-lg sm:leading-9">
          {c.intro}
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {c.blocks.map((b, idx) => (
          <Reveal key={b.title} delay={idx * 0.06}>
            <div className="h-full rounded-3xl bg-[color:var(--color-surface)] p-7 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-soft)]">
              <div className="font-medium text-[color:var(--color-foreground)]">
                {b.title}
              </div>
              <div className="mt-3 text-base leading-8 text-[color:var(--color-muted)]">
                {b.text}
              </div>
              {b.bullets?.length ? (
                <ul className="mt-4 space-y-2 text-base leading-8 text-[color:var(--color-muted)]">
                  {b.bullets.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-2xl bg-[color:var(--color-surface)] px-6 py-5 ring-1 ring-[color:var(--color-border)]">
          <div className="space-y-2 text-base leading-8">
            <p className="text-[color:var(--color-muted)]">{c.summaryLines[0]}</p>
            <p className="text-[color:var(--color-foreground)]">
              <strong>{c.summaryLines[1]}</strong>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
