import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function ForWhomSection() {
  const c = landingContent.forWhom;

  return (
    <Section id="for-whom" className="bg-[color:var(--color-surface-2)]/60">
      <Reveal>
        <h2 className="font-serif text-2xl leading-tight text-[color:var(--color-foreground)] sm:text-3xl">
          {c.title}
        </h2>
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-soft)]">
            <ul className="space-y-3 text-sm leading-7 text-[color:var(--color-foreground)]">
              {c.yes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-soft)]">
            <div className="font-medium text-[color:var(--color-foreground)]">
              {c.noTitle}
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--color-muted)]">
              {c.no.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 rounded-2xl bg-[color:var(--color-accent-soft)] px-6 py-5 ring-1 ring-[color:var(--color-border)]">
          <p className="text-sm leading-7 text-[color:var(--color-foreground)]">
            {c.summary}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
