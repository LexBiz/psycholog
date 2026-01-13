"use client";

import Image from "next/image";
import { useState } from "react";

export function TogetherPhotoSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-[#1a1614] to-[#2d2622]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white text-base font-black rounded-full mb-6 shadow-2xl animate-bounce">
            ❤️‍🔥 18 РОКІВ РАЗОМ
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Не просто теорія — <span className="text-[#d4af37]">власний досвід</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Ми знаємо, як зберігати стосунки 18+ років. І як допомагати іншим відновлюватись.
          </p>
        </div>
        
        {/* Совместное фото в ПРЕМИУМ-РАМКЕ - ЛИЦА ВИДНО */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#d4af37] via-[#e8b84d] to-[#b8941f] p-3 ring-4 ring-[#d4af37] shadow-[var(--glow-gold)] hover:scale-105 hover:shadow-[var(--glow-gold)] hover:ring-[#f2d675] transition-all duration-500">
            <div className="bg-gradient-to-br from-[#e17c3e]/20 to-[#d4af37]/20 aspect-[16/10] sm:aspect-[16/9] rounded-2xl relative overflow-hidden">
              
              {!imageError ? (
                <Image 
                  src="/images/authors/together.jpg" 
                  alt="Разом 18 років" 
                  fill 
                  className="object-cover object-center"
                  onError={() => setImageError(true)}
                />
              ) : (
                // Fallback если фото нет
                <div className="absolute inset-0 flex items-center justify-center text-9xl drop-shadow-2xl animate-float">👫</div>
              )}
            </div>
          </div>
          
          {/* ТЕКСТ ПОД ФОТО (не перекрывает лица) */}
          <div className="mt-6 p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border-2 border-[#d4af37]/30 shadow-[var(--shadow-luxury)]">
            <div className="text-center">
              <div className="text-white font-black text-2xl sm:text-3xl mb-2">
                Подружжя-Терапевти
              </div>
              <div className="text-white/80 text-base sm:text-lg font-semibold">
                Богдан та [Імʼя] — 18+ років разом
              </div>
            </div>
          </div>
        </div>
        
        {/* Quote */}
        <div className="p-8 sm:p-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-[var(--shadow-luxury)] border-l-4 border-[#d4af37]">
          <p className="text-xl sm:text-2xl text-white leading-relaxed italic mb-6">
            «За роки практики ми бачили сотні людей, які проходили через біль розриву. 
            Ми створили цей курс, щоб ви не залишались наодинці зі своїм болем.»
          </p>
          <div className="text-base font-bold text-[#d4af37]">
            — Богдан та [Імʼя], практикуючі психологи
          </div>
        </div>
      </div>
    </section>
  );
}
