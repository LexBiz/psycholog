export function NotForEveryoneSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1a1614] via-[#2d2622] to-[#1a1614]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-full mb-4 shadow-2xl">
            ⚠️ УВАГА
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Цей курс <span className="text-red-500">НЕ</span> для вас, якщо:
          </h2>
        </div>
        
        <div className="space-y-4 mb-10">
          {[
            "ви хочете магічне рішення за 1 день",
            "не готові працювати з собою",
            "шукаєте винних, а не вихід",
            "хочете «швидких порад» без глибини",
          ].map((item, i) => (
            <div 
              key={i}
              className="flex items-start gap-4 p-5 bg-red-900/20 border-l-4 border-red-500 rounded-r-2xl backdrop-blur-sm"
            >
              <span className="text-2xl shrink-0">❌</span>
              <div className="text-base sm:text-lg text-white/90 leading-relaxed">
                {item}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-8 bg-gradient-to-br from-[#6b9b5f] to-[#5a8a4e] rounded-3xl shadow-[var(--glow-gold)] text-center">
          <p className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-2">
            Курс для тих, хто готовий <span className="underline decoration-wavy decoration-[#d4af37]">справді змінюватись</span>
          </p>
          <p className="text-base text-white/80">
            Не шукати винних, а шукати вихід. Не жаліти себе, а відновлюватись.
          </p>
        </div>
      </div>
    </section>
  );
}
