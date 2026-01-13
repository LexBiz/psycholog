import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function PainSection() {
  const c = landingContent.pain;

  return (
    <Section id="pain">
      <Reveal>
        <h2 className="font-serif text-3xl leading-tight text-[color:var(--color-foreground)] sm:text-4xl">
          {c.title}
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {c.items.map((item, idx) => (
          <Reveal key={item} delay={idx * 0.02}>
            <div className="rounded-2xl bg-[color:var(--color-surface)] px-6 py-5 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-soft)]">
              <div className="flex gap-3">
                <div className="mt-1 h-6 w-6 shrink-0 rounded-lg bg-[color:var(--color-accent-soft)] ring-1 ring-[color:var(--color-border)]" />
                <div className="text-base leading-8 text-[color:var(--color-foreground)]">
                  ☐ {item}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-2xl bg-[color:var(--color-surface-2)] px-6 py-5 ring-1 ring-[color:var(--color-border)]">
          <div className="space-y-2 text-base leading-8 text-[color:var(--color-foreground)]">
            <p>{c.summaryLines[0]}</p>
            <p>
              <strong>{c.summaryLines[1]}</strong>
            </p>
            <p className="text-[color:var(--color-muted)]">{c.summaryLines[2]}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
