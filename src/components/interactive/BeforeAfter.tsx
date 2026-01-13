"use client";

import { useState } from "react";

const before = [
  "хаос",
  "біль",
  "навʼязливі думки",
  "немає сил",
  "самотність",
];

const after = [
  "стабільність",
  "ясність",
  "опора на себе",
  "енергія повертається",
  "впевненість",
];

export function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("before");

  return (
    <div className="max-w-3xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab("before")}
          className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
            activeTab === "before"
              ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-2xl scale-105"
              : "bg-white/10 text-white/60 hover:bg-white/20"
          }`}
        >
          😔 Зараз
        </button>
        <button
          onClick={() => setActiveTab("after")}
          className={`flex-1 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
            activeTab === "after"
              ? "bg-gradient-to-r from-[#6b9b5f] to-[#5a8a4e] text-white shadow-2xl scale-105"
              : "bg-white/10 text-white/60 hover:bg-white/20"
          }`}
        >
          ✨ Через 30 днів
        </button>
      </div>
      
      {/* Content */}
      <div className="relative min-h-[300px]">
        {activeTab === "before" && (
          <div className="animate-in fade-in slide-in-from-left duration-500">
            <div className="p-8 bg-gradient-to-br from-red-900/20 to-red-800/10 backdrop-blur-sm rounded-3xl border-2 border-red-500/30 shadow-2xl">
              <div className="text-2xl font-black text-white mb-6">
                Ваш стан зараз:
              </div>
              <ul className="space-y-4">
                {before.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-white/90">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === "after" && (
          <div className="animate-in fade-in slide-in-from-right duration-500">
            <div className="p-8 bg-gradient-to-br from-[#6b9b5f]/20 to-[#5a8a4e]/10 backdrop-blur-sm rounded-3xl border-2 border-[#6b9b5f]/50 shadow-2xl">
              <div className="text-2xl font-black text-white mb-6">
                Після проходження курсу:
              </div>
              <ul className="space-y-4">
                {after.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-white/90">
                    <span className="text-2xl">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
