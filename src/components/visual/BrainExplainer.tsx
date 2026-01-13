export function BrainExplainer() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="p-8 sm:p-10 bg-gradient-to-br from-white to-[#f8f6f2] rounded-3xl shadow-[var(--shadow-luxury)] border-2 border-[#d4af37]/20">
        <h3 className="text-2xl sm:text-3xl font-black text-[#1a1614] mb-8 text-center">
          Як працює мозок після розриву
        </h3>
        
        {/* Flow diagram */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex-1 p-5 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl text-center border-2 border-red-300 shadow-lg">
            <div className="text-4xl mb-2">💔</div>
            <div className="font-bold text-base text-red-900">Розрив</div>
          </div>
          
          <div className="text-3xl text-[#e17c3e] font-black hidden sm:block">→</div>
          <div className="text-3xl text-[#e17c3e] font-black sm:hidden rotate-90">↓</div>
          
          <div className="flex-1 p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl text-center border-2 border-orange-300 shadow-lg">
            <div className="text-4xl mb-2">⚡</div>
            <div className="font-bold text-base text-orange-900">Стрес</div>
          </div>
          
          <div className="text-3xl text-[#e17c3e] font-black hidden sm:block">→</div>
          <div className="text-3xl text-[#e17c3e] font-black sm:hidden rotate-90">↓</div>
          
          <div className="flex-1 p-5 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl text-center border-2 border-yellow-300 shadow-lg">
            <div className="text-4xl mb-2">🧠</div>
            <div className="font-bold text-base text-yellow-900">Кортизол ↑</div>
          </div>
          
          <div className="text-3xl text-[#e17c3e] font-black hidden sm:block">→</div>
          <div className="text-3xl text-[#e17c3e] font-black sm:hidden rotate-90">↓</div>
          
          <div className="flex-1 p-5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl text-center border-2 border-purple-300 shadow-lg">
            <div className="text-4xl mb-2">💭</div>
            <div className="font-bold text-base text-purple-900">Навʼязливі думки</div>
          </div>
        </div>
        
        {/* Explanation */}
        <div className="text-center p-6 bg-gradient-to-r from-[#e17c3e] to-[#d16829] rounded-2xl shadow-[var(--glow-orange)]">
          <p className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            З цим ми і працюємо в курсі. Це не слабкість — це біохімія.
          </p>
        </div>
      </div>
    </div>
  );
}
