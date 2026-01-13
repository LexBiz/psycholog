"use client";

import Image from "next/image";
import { useState } from "react";

export function AuthorHeroSection({ 
  name, 
  role, 
  imagePath,
  side = "left" 
}: { 
  name: string; 
  role: string; 
  imagePath: string;
  side?: "left" | "right";
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] overflow-hidden bg-gradient-to-br from-[#f8f6f2] to-white">
      <div className="absolute inset-0">
        <div className={`absolute inset-y-0 ${side === "left" ? "left-0" : "right-0"} w-full sm:w-3/5 lg:w-1/2`}>
          {!imageError ? (
            <div className="relative h-full">
              {/* Фото автора - ОГРОМНОЕ, ЧЕТКО ВИДНО */}
              <Image 
                src={imagePath}
                alt={name}
                fill
                className="object-cover object-top"
                onError={() => setImageError(true)}
                priority
              />
              {/* Легкий градиент только по краю для плавного перехода */}
              <div className={`absolute inset-0 bg-gradient-to-${side === "left" ? "r" : "l"} from-transparent ${side === "left" ? "via-transparent to-[#f8f6f2]" : "via-transparent to-[#f8f6f2]"}`}></div>
            </div>
          ) : (
            // Fallback если фото нет
            <div className="h-full flex items-end justify-center pb-10 opacity-20">
              <div className="text-[200px] sm:text-[300px]">
                {role.includes("Богдан") ? "👨‍⚕️" : "👩‍⚕️"}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-32">
        <div className={`max-w-xl ${side === "right" ? "ml-auto" : ""}`}>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-full text-white text-sm font-bold shadow-[var(--shadow-gold)] mb-6">
            💼 Практикуючий психолог
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1a1614] leading-tight mb-6">
            {name}
          </h2>
          
          <p className="text-xl sm:text-2xl text-[#6b5f56] font-semibold mb-8">
            {role}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-5 bg-[#1a1614] backdrop-blur-sm rounded-2xl shadow-[var(--shadow-luxury)]">
              <span className="text-2xl text-[#d4af37]">✓</span>
              <div className="text-base text-white">
                <strong>15+ років</strong> у приватній практиці
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-[#1a1614] backdrop-blur-sm rounded-2xl shadow-[var(--shadow-luxury)]">
              <span className="text-2xl text-[#d4af37]">✓</span>
              <div className="text-base text-white">
                Понад <strong>1000+ консультацій</strong>
              </div>
            </div>
            <div className="flex items-start gap-3 p-5 bg-[#1a1614] backdrop-blur-sm rounded-2xl shadow-[var(--shadow-luxury)]">
              <span className="text-2xl text-[#d4af37]">✓</span>
              <div className="text-base text-white">
                Спеціалізація: <strong>стосунки, травми, кризи</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
