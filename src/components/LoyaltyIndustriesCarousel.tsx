"use client";

import type { ElementType } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

type Industry = {
  name: string;
  icon: ElementType;
};

function IndustryCard({ industry, compact = false }: { industry: Industry; compact?: boolean }) {
  return (
    <div
      className={`group flex shrink-0 flex-col items-center rounded-3xl border border-[var(--border)] bg-card text-center transition-all duration-300 hover:border-primary-red/25 hover:bg-primary-red/[0.03] ${
        compact
          ? "w-full px-4 py-6"
          : "w-[200px] px-5 py-8 sm:w-[220px] sm:px-6 sm:py-10 md:w-[260px]"
      }`}
    >
      <div
        className={`mb-4 flex items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:scale-105 group-hover:bg-primary-red group-hover:text-white sm:mb-6 ${
          compact ? "h-12 w-12" : "h-14 w-14 sm:h-16 sm:w-16"
        }`}
      >
        <industry.icon size={compact ? 22 : 28} strokeWidth={1.75} />
      </div>
      <h3 className={`font-bold text-foreground ${compact ? "text-sm" : "text-base sm:text-lg"}`}>{industry.name}</h3>
    </div>
  );
}

export function LoyaltyIndustriesCarousel({ industries }: { industries: Industry[] }) {
  const isMobile = useIsMobile();
  const doubled = [...industries, ...industries];

  if (isMobile) {
    return (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {industries.map((industry) => (
          <IndustryCard key={industry.name} industry={industry} compact />
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent md:w-28" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent md:w-28" />

      <div className="flex w-max animate-marquee gap-4 py-2 hover:[animation-play-state:paused] md:gap-5">
        {doubled.map((industry, index) => (
          <IndustryCard key={`${industry.name}-${index}`} industry={industry} />
        ))}
      </div>
    </div>
  );
}
