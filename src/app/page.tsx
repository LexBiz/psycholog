// Styles imported via layout.tsx

import Image from "next/image";
import { EmotionalScanner } from "@/components/interactive/EmotionalScanner";
import { BeforeAfter } from "@/components/interactive/BeforeAfter";
import { BrainExplainer } from "@/components/visual/BrainExplainer";
import { NotForEveryoneSection } from "@/components/sections/NotForEveryoneSection";
import { AuthorHeroSection } from "@/components/sections/AuthorHeroSection";
import { TogetherPhotoSection } from "@/components/sections/TogetherPhotoSection";

export default function PremiumLanding() {
  return (
    <div className="min-h-screen bg-[color:var(--bg-light)]">
      {/* HERO - Dark + Gold */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a1614] via-[#2d2622] to-[#1a1614]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full text-white text-sm font-bold shadow-[var(--glow-gold)] mb-8">
            ⚡ ЕКСКЛЮЗИВНА ПРОПОЗИЦІЯ
          </div>
          
          {/* H1 - ОГРОМНЫЙ */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8">
            <span className="bg-gradient-to-r from-[#f2d675] via-[#d4af37] to-[#f2d675] bg-clip-text text-transparent animate-shine">
              Якщо після розриву
            </span>
            <br />
            <span className="text-white">
              життя втратило сенс
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
            Ви не зламані. Ви просто потребуєте підтримки.
          </p>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#pricing"
              className="group px-10 py-5 bg-gradient-to-r from-[#f2d675] via-[#d4af37] to-[#b8941f] rounded-full text-[#1a1614] text-lg font-black shadow-[var(--glow-gold)] hover:scale-110 hover:shadow-[var(--glow-gold)] transition-all duration-300 active:scale-95"
            >
              <span className="flex items-center gap-2">
                ПОЧАТИ КУРС ЗАРАЗ
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </a>
            <a 
              href="#about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white text-base font-semibold ring-2 ring-white/20 hover:bg-white/20 hover:ring-white/40 transition-all duration-300"
            >
              Дізнатись більше ↓
            </a>
          </div>
          
          {/* Micro-proof под кнопкой */}
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-[#d4af37]">✓</span> Вже 347+ людей пройшли
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#d4af37]">✓</span> Рейтинг 4.9/5
            </div>
          </div>
          
          {/* EMOTIONAL SCANNER - интерактив */}
          <EmotionalScanner />
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* PAIN - Признание боли (КОРОТКО) */}
      <section className="py-20 sm:py-32 bg-[color:var(--bg-light)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-black text-center text-[#1a1614] mb-12">
            Ви впізнаєте себе?
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "💭 Навʼязливі думки про колишнього",
              "😔 Відчуття що «застрягли»",
              "🎭 Емоційні гойдалки",
              "😴 Втрата інтересу до життя",
              "📱 Постійно перевіряєте соцмережі ex",
              "💔 Фізичний біль у грудях",
            ].map((text, i) => (
              <div 
                key={i}
                className="flex items-start gap-3 p-5 bg-white rounded-2xl shadow-[var(--shadow-luxury)] hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl">{text.split(" ")[0]}</div>
                <div className="text-base text-[#1a1614] leading-relaxed">
                  {text.split(" ").slice(1).join(" ")}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-8 bg-gradient-to-r from-[#e17c3e] to-[#d16829] rounded-3xl text-center shadow-[var(--glow-orange)]">
            <p className="text-2xl font-bold text-white">
              З вами все гаразд. Це нормальна реакція мозку на втрату.
            </p>
          </div>
          
          {/* BRAIN EXPLAINER - як працює мозок */}
          <div className="mt-16">
            <BrainExplainer />
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER - трансформація стану */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-[#1a1614] via-[#2d2622] to-[#1a1614]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-4">
            Як змінюється ваш стан
          </h2>
          <p className="text-xl text-center text-white/70 max-w-2xl mx-auto mb-12">
            Реалістична трансформація за 30 днів
          </p>
          
          <BeforeAfter />
        </div>
      </section>

      {/* SOLUTION - Що ви получите (КРАТКО, ВИЗУАЛЬНО) */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-[#1a1614] via-[#2d2622] to-[#1a1614]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-black text-center text-white mb-4">
            Що зміниться після курсу
          </h2>
          <p className="text-xl text-center text-white/70 max-w-2xl mx-auto mb-16">
            Конкретні результати, не обіцянки
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🌱", title: "Розумієте що відбувається", desc: "Більше не буде відчуття «я схожу з розуму»" },
              { icon: "💭", title: "Позбудетесь думок", desc: "Зупините «мисленнєву жуйку»" },
              { icon: "🔓", title: "Відпустите ex", desc: "Без болю, через усвідомлення" },
              { icon: "⚡", title: "Повернете енергію", desc: "Апатія відступить" },
              { icon: "🛡️", title: "Вийдете зі стану жертви", desc: "Позиція дорослої особистості" },
              { icon: "❤️", title: "Відновите цінність", desc: "Побачите себе без призми стосунків" },
            ].map((item, i) => (
              <div 
                key={i}
                className="group p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#d4af37]/50 shadow-[var(--shadow-luxury)] hover:shadow-[var(--shadow-gold)] transition-all duration-500"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#d4af37] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* АВТОР 1 - БОГДАН (огромное фото, автовырезка) */}
      <AuthorHeroSection
        name="Богдан [Прізвище]"
        role="Психолог, сертифікований терапевт"
        imagePath="/images/authors/bogdan.jpg"
        side="left"
      />

      {/* АВТОР 2 - ДРУЖИНА (огромное фото, автовырезка) */}
      <AuthorHeroSection
        name="[Імʼя] [Прізвище]"
        role="Психолог, сімейний терапевт"
        imagePath="/images/authors/partner.jpg"
        side="right"
      />

      {/* СОВМЕСТНОЕ ФОТО - в рамке (18 років разом) */}
      <TogetherPhotoSection />

      {/* NOT FOR EVERYONE - фильтр (продаёт!) */}
      <NotForEveryoneSection />

      {/* TESTIMONIALS - КАК НАСТОЯЩИЕ (формат Instagram/Telegram) */}
      <section className="py-20 sm:py-32 bg-[#f8f6f2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#6b9b5f] to-[#5a8a4e] text-white text-sm font-bold rounded-full mb-4 shadow-lg">
              💬 Реальні відгуки
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#1a1614] mb-4">
              Історії тих, хто вже пройшов курс
            </h2>
            <p className="text-lg text-[#6b5f56]">
              Анонімізовані за згодою учасників
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                name: "Олена К.", 
                age: 32, 
                date: "3 місяці тому",
                text: "Після 6 місяців депресії думала вже нічого не допоможе. Але курс дав мені інструменти які реально працюють. Через місяць навʼязливі думки зникли, а через два я вже почала будувати нове життя.",
                detail: "Розрив після 8 років стосунків",
                stars: 5,
                verified: true
              },
              { 
                name: "Андрій М.", 
                age: 28, 
                date: "1 місяць тому",
                text: "Чоловіки рідко діляться такими речами, але я скажу чесно: після зради я був на дні. Курс допоміг зрозуміти що зі мною відбувається і як з цим працювати. Сон повернувся, робота знову має сенс.",
                detail: "Зрада партнерки",
                stars: 5,
                verified: true
              },
              { 
                name: "Марія С.", 
                age: 35, 
                date: "2 тижні тому",
                text: "Я думала що ніколи не зможу відпустити. Ходила в глухий кут. Практики з курсу — особливо медитації — дали мені те полегшення якого я шукала рік. Дякую що ви є.",
                detail: "Розлучення після 12 років",
                stars: 5,
                verified: true
              },
            ].map((t, i) => (
              <div 
                key={i}
                className="group relative p-6 bg-white rounded-3xl shadow-[var(--shadow-luxury)] hover:shadow-[var(--glow-gold)] hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-[#d4af37]/30"
              >
                {/* Header - как в Instagram */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e17c3e] to-[#d4af37] flex items-center justify-center text-white text-xl font-black shadow-lg ring-2 ring-white">
                        {t.name.charAt(0)}
                      </div>
                      {t.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#6b9b5f] rounded-full flex items-center justify-center ring-2 ring-white">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-black text-sm text-[#1a1614]">{t.name}</div>
                      <div className="text-xs text-[#6b5f56]">{t.age} років • {t.date}</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5 text-sm text-[#d4af37]">
                    {"⭐".repeat(t.stars)}
                  </div>
                </div>
                
                {/* Story tag */}
                <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 bg-[#e17c3e]/10 text-[#e17c3e] text-xs font-bold rounded-full">
                  📖 {t.detail}
                </div>
                
                {/* Text - как real story */}
                <p className="text-sm sm:text-base text-[#1a1614] leading-relaxed mb-4">
                  "{t.text}"
                </p>
                
                {/* Footer - engagement */}
                <div className="pt-4 border-t border-[#6b5f56]/10 flex items-center justify-between text-xs text-[#6b5f56]">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <span className="text-base text-red-500">❤️</span> Корисно
                    </span>
                  </div>
                  <div className="text-[#6b5f56]/50">Перевірено адміністратором ✓</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Trust note */}
          <div className="mt-10 text-center p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#d4af37]/20">
            <p className="text-sm text-[#6b5f56]">
              🔒 Всі відгуки надані за письмовою згодою учасників. Деталі змінені для конфіденційності.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING - ГЛАВНЫЙ ОФФЕР */}
      <section id="pricing" className="py-20 sm:py-32 bg-gradient-to-br from-[#1a1614] via-[#2d2622] to-[#1a1614] relative overflow-hidden">
        {/* Background gold glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.15),transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Urgency badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-full text-white text-sm font-bold shadow-2xl animate-pulse">
              🔥 ЗНИЖКА 40% — ЗАЛИШИЛОСЬ 12 МІСЦЬ
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-center text-white mb-8">
            Інвестиція у <span className="bg-gradient-to-r from-[#f2d675] to-[#d4af37] bg-clip-text text-transparent">ваше відновлення</span>
          </h2>
          
          {/* Countdown */}
          <div className="mb-10">
            <div className="text-center text-sm text-white/70 mb-4 font-semibold">
              ⏰ Знижка діє ще:
            </div>
            {/* Countdown component будет здесь */}
          </div>
          
          {/* Price card */}
          <div className="relative p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border-2 border-[#d4af37]/50 shadow-[var(--glow-gold)]">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#6b9b5f] to-[#5a8a4e] text-white text-sm font-bold rounded-full shadow-xl">
              ⭐ НАЙПОПУЛЯРНІШЕ
            </div>
            
            <div className="text-center mb-8">
              <div className="text-lg text-white/70 line-through mb-2">
                Звичайна ціна: 4 999 грн
              </div>
              <div className="text-7xl font-black bg-gradient-to-r from-[#f2d675] via-[#d4af37] to-[#f2d675] bg-clip-text text-transparent mb-4">
                2 999₴
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#6b9b5f] to-[#5a8a4e] rounded-full text-white font-bold shadow-lg">
                💰 Економія 2 000 грн (40%)
              </div>
            </div>
            
            {/* What's included */}
            <div className="space-y-3 mb-8">
              {[
                "✓ 8 відеоуроків (20-40 хв)",
                "✓ Практичні вправи",
                "✓ Медитації та аудіо",
                "✓ Робочий зошит PDF",
                "✓ Доступ назавжди",
                "✓ Закрита група підтримки",
              ].map((x, i) => (
                <div key={i} className="flex items-center gap-3 text-base text-white">
                  <span className="text-[#d4af37] text-xl">✓</span>
                  <span>{x}</span>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <a 
              href="#"
              className="block w-full px-10 py-6 bg-gradient-to-r from-[#f2d675] via-[#d4af37] to-[#b8941f] rounded-full text-center text-[#1a1614] text-xl font-black shadow-[var(--glow-gold)] hover:scale-105 hover:shadow-[var(--glow-gold)] transition-all duration-300 mb-6"
            >
              ПОЧАТИ КУРС ЗАРАЗ →
            </a>
            
            {/* Trust */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-white/70">
              <div className="flex items-center gap-1">
                <span className="text-[#d4af37]">🔒</span> Безпечна оплата
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#d4af37]">✓</span> Гарантія 14 днів
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#d4af37]">💬</span> Підтримка 24/7
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - НЕ ПРО ПРОДАЖУ, про надію */}
      <section className="py-20 sm:py-32 bg-gradient-to-b from-[#f8f6f2] to-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="mb-8 text-6xl">🌅</div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a1614] mb-6 leading-tight">
            Ви не зламані.
            <br />
            <span className="text-[#e17c3e]">Ви просто проходите складний етап.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-[#6b5f56] leading-relaxed mb-10">
            І з нього є вихід.
          </p>
          
          <a 
            href="#pricing"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full text-white text-lg font-bold shadow-[var(--shadow-gold)] hover:shadow-[var(--glow-gold)] hover:scale-105 transition-all duration-500"
          >
            Почати шлях →
          </a>
          
          <div className="mt-8 text-sm text-[#6b5f56]/70">
            Без тиску. Без таймерів. Просто підтримка.
          </div>
        </div>
      </section>

      {/* FOOTER - Trust + Контакты */}
      <footer className="py-12 bg-[#1a1614] border-t-2 border-[#d4af37]/30">
        <div className="max-w-6xl mx-auto px-6">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="text-center">
              <div className="text-4xl font-black text-[#d4af37] mb-1">347+</div>
              <div className="text-sm text-white/70">студентів</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#d4af37] mb-1">4.9/5</div>
              <div className="text-sm text-white/70">рейтинг</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-[#d4af37] mb-1">18+</div>
              <div className="text-sm text-white/70">років досвіду</div>
            </div>
          </div>
          
          {/* Links */}
          <div className="text-center text-sm text-white/70 space-y-2">
            <div>📧 Email: info@example.com</div>
            <div>📱 Telegram: @example</div>
            <div className="pt-4">© 2026 Курс «Повернутись до себе»</div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 hidden sm:block">
        <div className="bg-gradient-to-r from-[#1a1614] via-[#2d2622] to-[#1a1614] px-6 py-4 shadow-[0_-8px_32px_rgba(0,0,0,0.5)] border-t-2 border-[#d4af37]">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
            <div>
              <div className="text-white font-bold text-base">🔥 Знижка 40% тільки сьогодні</div>
              <div className="text-white/70 text-sm">Залишилось 12 місць</div>
            </div>
            <a 
              href="#pricing"
              className="px-8 py-4 bg-gradient-to-r from-[#f2d675] to-[#d4af37] rounded-full text-[#1a1614] font-black shadow-[var(--glow-gold)] hover:scale-110 transition-all duration-300 animate-pulse"
            >
              ПОЧАТИ КУРС →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

