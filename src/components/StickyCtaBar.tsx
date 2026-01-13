"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling 800px
      setVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in fade-in slide-in-from-bottom duration-700">
      <a 
        href="#pricing"
        className="group flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full text-white text-sm sm:text-base font-bold shadow-[var(--glow-gold)] hover:shadow-[var(--glow-gold)] hover:scale-105 transition-all duration-300 backdrop-blur-xl"
      >
        <span className="hidden sm:inline">🌿</span>
        <span>Повернути спокій</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </a>
    </div>
  );
}
