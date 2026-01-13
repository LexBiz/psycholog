import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

export function FooterSection() {
  const c = landingContent.footer;

  return (
    <footer className="border-t-2 border-[color:var(--color-accent)]/20 bg-gradient-to-b from-[color:var(--color-surface-2)] to-[color:var(--color-background)]">
      <Section id="footer" className="py-12 sm:py-14">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-[color:var(--color-surface)] px-6 py-6 shadow-[var(--shadow-strong)] ring-1 ring-[color:var(--color-border)]">
          <div className="flex items-center gap-2 text-sm font-bold text-[color:var(--color-foreground)]">
            <span className="text-2xl">👥</span> 
            <div>
              <div className="text-base"><AnimatedNumber value={347} suffix="+" /></div>
              <div className="text-xs text-[color:var(--color-muted)]">задоволених клієнтів</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-[color:var(--color-foreground)]">
            <span className="text-2xl">⭐</span>
            <div>
              <div className="text-base">4.9/5</div>
              <div className="text-xs text-[color:var(--color-muted)]">рейтинг курсу</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-[color:var(--color-foreground)]">
            <span className="text-2xl">🔒</span>
            <div>
              <div className="text-base">Безпечно</div>
              <div className="text-xs text-[color:var(--color-muted)]">захищена оплата</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-bold text-[color:var(--color-foreground)]">
            <span className="text-2xl">✓</span>
            <div>
              <div className="text-base">14 днів</div>
              <div className="text-xs text-[color:var(--color-muted)]">гарантія повернення</div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal>
            <div>
              <div className="text-sm font-semibold tracking-wide text-[color:var(--color-muted)]">
                {c.contactsTitle}
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--color-foreground)]">
                {c.contacts.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div>
              <div className="text-sm font-semibold tracking-wide text-[color:var(--color-muted)]">
                {c.linksTitle}
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-[color:var(--color-foreground)]">
                {c.links.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <div className="text-sm font-semibold tracking-wide text-[color:var(--color-muted)]">
                {c.socialsTitle}
              </div>
              <div className="mt-4 text-base leading-8 text-[color:var(--color-muted)]">
                {c.socialsHint}
              </div>
              <div className="mt-6 whitespace-pre-line text-base leading-8 text-[color:var(--color-foreground)]">
                {c.closingLines.join("\n")}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 border-t border-[color:var(--color-border)] pt-6 text-sm text-[color:var(--color-muted)]">
          {c.copyright}
        </div>
      </Section>
    </footer>
  );
}
