"use client";

import { useState } from "react";

const feelings = [
  "постійні навʼязливі думки",
  "порожнечу",
  "біль і образу",
  "втрату себе",
];

export function EmotionalScanner() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    const next = new Set(checked);
    if (next.has(idx)) {
      next.delete(idx);
    } else {
      next.add(idx);
    }
    setChecked(next);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 sm:p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-[var(--shadow-luxury)]">
      <div className="text-lg sm:text-xl font-bold text-white/90 mb-6 text-center">
        Ви зараз відчуваєте:
      </div>
      
      <div className="space-y-3">
        {feelings.map((f, idx) => (
          <button
            key={idx}
            onClick={() => toggle(idx)}
            className="group w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300"
          >
            <div className={`
              w-7 h-7 shrink-0 rounded-lg border-2 flex items-center justify-center transition-all duration-300
              ${checked.has(idx) 
                ? 'border-[#d4af37] bg-gradient-to-br from-[#d4af37] to-[#b8941f] shadow-[var(--glow-gold)]' 
                : 'border-white/30 group-hover:border-white/50'
              }
            `}>
              {checked.has(idx) && (
                <svg className="w-5 h-5 text-white animate-in zoom-in duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <div className="text-base sm:text-lg text-white/90 text-left">
              {f}
            </div>
          </button>
        ))}
      </div>
      
      {checked.size > 0 && (
        <div className="mt-6 p-5 bg-gradient-to-r from-[#e17c3e] to-[#d16829] rounded-2xl shadow-[var(--glow-orange)] animate-in fade-in slide-in-from-bottom duration-500">
          <p className="text-lg sm:text-xl font-bold text-white text-center leading-relaxed">
            Це нормальна реакція. І з цим можна працювати.
          </p>
        </div>
      )}
    </div>
  );
}
