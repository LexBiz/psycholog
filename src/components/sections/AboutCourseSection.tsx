import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function AboutCourseSection() {
  const c = landingContent.aboutCourse;

  return (
    <Section id="about">
      <Reveal>
        <h2 className="font-serif text-2xl leading-tight text-[color:var(--color-foreground)] sm:text-3xl">
          {c.title}
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-[color:var(--color-muted)] sm:text-base sm:leading-8">
          {c.text}
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-soft)]">
            <div className="text-sm font-semibold tracking-wide text-[color:var(--color-muted)]">
              {c.insideTitle}
            </div>
            <div className="mt-4 space-y-4">
              {c.inside.map((x) => (
                <div key={x.lead} className="text-sm leading-7">
                  <div className="font-medium text-[color:var(--color-foreground)]">
                    {x.lead}
                  </div>
                  <div className="text-[color:var(--color-muted)]">{x.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-3xl bg-[color:var(--color-surface-2)] p-6 ring-1 ring-[color:var(--color-border)]">
            <div className="text-sm font-semibold tracking-wide text-[color:var(--color-muted)]">
              {c.formatTitle}
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--color-muted)]">
              {c.format.map((x) => (
                <li key={x} className="flex gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

