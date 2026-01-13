import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function BenefitsSection() {
  const c = landingContent.benefits;

  return (
    <Section id="benefits">
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

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.items.map((x, idx) => (
          <Reveal key={x.title} delay={idx * 0.03}>
            <div className="h-full rounded-3xl bg-[color:var(--color-surface)] p-7 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)] transition duration-300 ease-out">
              <div className="font-medium text-[color:var(--color-foreground)]">
                {x.title}
              </div>
              <div className="mt-3 text-base leading-8 text-[color:var(--color-muted)]">
                {x.text}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-2xl bg-[color:var(--color-surface-2)] px-6 py-5 ring-1 ring-[color:var(--color-border)]">
          <div className="space-y-2 text-base leading-8 text-[color:var(--color-foreground)]">
            <p>{c.summaryLines[0]}</p>
            <p>{c.summaryLines[1]}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
