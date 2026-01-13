import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "Олена К.",
    age: 32,
    text: "Курс допоміг мені вийти з депресії після розриву. Через місяць я вже відчула полегшення, а через два — повернулась до нормального життя.",
    rating: 5,
  },
  {
    name: "Андрій М.",
    age: 28,
    text: "Практичні вправи працюють! Навʼязливі думки зникли, я знову можу нормально спати та працювати. Дякую!",
    rating: 5,
  },
  {
    name: "Марія С.",
    age: 35,
    text: "Я думала, що ніколи не зможу відпустити. Але завдяки курсу я зрозуміла, що зі мною все гаразд, і знайшла сили рухатись далі.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-[color:var(--color-surface-2)]/60">
      <Reveal>
        <h2 className="text-center font-serif text-4xl leading-tight text-[color:var(--color-foreground)] sm:text-5xl font-bold">
          Історії тих, хто вже пройшов курс
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p className="mt-4 text-center max-w-3xl mx-auto text-base leading-8 text-[color:var(--color-muted)] sm:text-lg">
          Реальні відгуки людей, які повернули собі радість життя
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <Reveal key={t.name} delay={idx * 0.08}>
            <div className="h-full rounded-3xl bg-gradient-to-br from-[#fdfcfa] to-[#f5f0ea] p-7 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow-strong)] hover:shadow-[var(--shadow-premium)] transition-all duration-500">
              <div className="flex items-center gap-0.5 text-xl text-[#d97942]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              
              <p className="mt-4 text-base leading-7 text-[color:var(--color-foreground)] italic">
                "{t.text}"
              </p>
              
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#d97942] to-[#c4652f] text-white text-lg font-bold shadow-[var(--shadow)]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[color:var(--color-foreground)]">
                    {t.name}
                  </div>
                  <div className="text-xs text-[color:var(--color-muted)]">
                    {t.age} років
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <div className="mt-8 text-center rounded-2xl bg-[color:var(--color-surface)] px-6 py-5 ring-1 ring-[color:var(--color-border)] shadow-[var(--shadow)]">
          <div className="text-sm leading-7 text-[color:var(--color-muted)]">
            💙 Всі відгуки надані за згодою учасників курсу
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
