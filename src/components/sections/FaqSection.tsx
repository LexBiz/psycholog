import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";

export function FaqSection() {
  const c = landingContent.faq;

  return (
    <Section id="faq">
      <Reveal>
        <h2 className="font-serif text-2xl leading-tight text-[color:var(--color-foreground)] sm:text-3xl">
          {c.title}
        </h2>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-8">
          <Accordion
            items={c.items.map((x) => ({ title: x.q, content: x.a }))}
          />
        </div>
      </Reveal>
    </Section>
  );
}
