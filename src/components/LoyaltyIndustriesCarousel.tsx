"use client";

import type { ElementType } from "react";

type Industry = {
  name: string;
  icon: ElementType;
};

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="group flex w-[220px] shrink-0 flex-col items-center rounded-3xl border border-[var(--border)] bg-card px-6 py-10 text-center transition-all duration-300 hover:border-primary-red/25 hover:bg-primary-red/[0.03] sm:w-[240px] md:w-[260px]">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:scale-105 group-hover:bg-primary-red group-hover:text-white">
        <industry.icon size={28} strokeWidth={1.75} />
      </div>
      <h3 className="text-lg font-bold text-foreground">{industry.name}</h3>
    </div>
  );
}

export function LoyaltyIndustriesCarousel({ industries }: { industries: Industry[] }) {
  const doubled = [...industries, ...industries];

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
