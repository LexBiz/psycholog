import { landingContent } from "@/content/landingContent";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function AuthorsSection() {
  const c = landingContent.authors;

  return (
    <Section id="authors">
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

      {/* 3 фото: він, вона, разом (18 років у шлюбі) */}
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fffef9] to-[#f9f3ea] p-3 ring-2 ring-[color:var(--color-border)] shadow-[var(--shadow-strong)] hover:shadow-[var(--shadow-premium)] transition-all duration-500">
            <div className="aspect-[3/4] w-full rounded-2xl bg-gradient-to-br from-[#e17c3e]/10 to-[#7fa873]/10 grid place-items-center text-sm text-[color:var(--color-muted)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-foreground)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center p-4">
                <div className="text-6xl mb-3">👨‍⚕️</div>
                <div className="font-bold text-base">Богдан</div>
                <div className="text-xs mt-1">Психолог-терапевт</div>
              </div>
            </div>
            <div className="mt-3 text-center">
              <div className="text-sm font-bold text-[color:var(--color-foreground)]">Богдан [Прізвище]</div>
              <div className="text-xs text-[color:var(--color-muted)] mt-1">Гештальт-терапія</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fffef9] to-[#f9f3ea] p-3 ring-2 ring-[color:var(--color-border)] shadow-[var(--shadow-strong)] hover:shadow-[var(--shadow-premium)] transition-all duration-500">
            <div className="aspect-[3/4] w-full rounded-2xl bg-gradient-to-br from-[#7fa873]/10 to-[#e17c3e]/10 grid place-items-center text-sm text-[color:var(--color-muted)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-foreground)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center p-4">
                <div className="text-6xl mb-3">👩‍⚕️</div>
                <div className="font-bold text-base">[Ім'я дружини]</div>
                <div className="text-xs mt-1">Психолог</div>
              </div>
            </div>
            <div className="mt-3 text-center">
              <div className="text-sm font-bold text-[color:var(--color-foreground)]">[Імʼя] [Прізвище]</div>
              <div className="text-xs text-[color:var(--color-muted)] mt-1">Сімейна терапія</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#fffef9] to-[#f9f3ea] p-3 ring-2 ring-[color:var(--color-accent)]/30 shadow-[var(--shadow-strong)] hover:shadow-[var(--glow)] transition-all duration-500">
            <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-[#e17c3e] to-[#d16829] text-white text-[10px] font-bold rounded-full shadow-lg z-10">
              💑 18 років разом
            </div>
            <div className="aspect-[3/4] w-full rounded-2xl bg-gradient-to-br from-[#e17c3e]/20 to-[#7fa873]/20 grid place-items-center text-sm text-[color:var(--color-muted)] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-foreground)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 text-center p-4">
                <div className="text-6xl mb-3">👫</div>
                <div className="font-bold text-base">Разом</div>
                <div className="text-xs mt-1">Власним прикладом</div>
              </div>
            </div>
            <div className="mt-3 text-center">
              <div className="text-sm font-bold text-[color:var(--color-foreground)]">Подружжя-терапевти</div>
              <div className="text-xs text-[color:var(--color-muted)] mt-1">18+ років досвіду разом</div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-3xl bg-[color:var(--color-surface)] p-7 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-soft)]">
          <div className="text-base font-semibold text-[color:var(--color-muted)]">
            {c.jointTitle}
          </div>
          <div className="mt-5 whitespace-pre-line text-base leading-8 text-[color:var(--color-foreground)]">
            {c.jointQuoteLines.join("\n")}
          </div>
          <div className="mt-6">
            <div className="text-base font-semibold text-[color:var(--color-muted)]">
              {c.trustTitle}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.trust.map((x) => (
                <span
                  key={x}
                  className="inline-flex items-center rounded-full bg-[color:var(--color-surface-2)] px-3 py-2 text-sm leading-6 text-[color:var(--color-muted)] ring-1 ring-[color:var(--color-border)]"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}


