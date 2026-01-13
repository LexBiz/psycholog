"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = +targetDate - +new Date();
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

export function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#d97942] to-[#c4652f] px-3 py-2 shadow-[var(--glow)] min-w-[60px]">
        <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-[10px] sm:text-xs text-white/80 uppercase font-semibold">
          днів
        </div>
      </div>
      <div className="text-2xl text-[color:var(--color-accent)] font-bold">:</div>
      <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#d97942] to-[#c4652f] px-3 py-2 shadow-[var(--glow)] min-w-[60px]">
        <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-[10px] sm:text-xs text-white/80 uppercase font-semibold">
          годин
        </div>
      </div>
      <div className="text-2xl text-[color:var(--color-accent)] font-bold">:</div>
      <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#d97942] to-[#c4652f] px-3 py-2 shadow-[var(--glow)] min-w-[60px]">
        <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-[10px] sm:text-xs text-white/80 uppercase font-semibold">
          хвилин
        </div>
      </div>
      <div className="text-2xl text-[color:var(--color-accent)] font-bold">:</div>
      <div className="flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#d97942] to-[#c4652f] px-3 py-2 shadow-[var(--glow)] min-w-[60px] animate-pulse">
        <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-[10px] sm:text-xs text-white/80 uppercase font-semibold">
          секунд
        </div>
      </div>
    </div>
  );
}
