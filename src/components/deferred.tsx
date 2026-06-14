"use client";

import dynamic from "next/dynamic";

export const DeferredFooter = dynamic(
  () => import("@/components/Footer").then((mod) => mod.Footer),
  { loading: () => null }
);

export const DeferredCTA = dynamic(
  () => import("@/components/CTA").then((mod) => mod.CTA),
  { loading: () => null }
);

export const DeferredFootprintGlobe = dynamic(
  () => import("@/components/FootprintGlobe").then((mod) => mod.FootprintGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="mx-auto aspect-square w-full max-w-[540px] animate-pulse rounded-full bg-foreground/5" />
    ),
  }
);

export const DeferredHero = dynamic(
  () => import("@/components/Hero").then((mod) => mod.Hero),
  {
    loading: () => (
      <section className="relative min-h-[70vh] pt-24">
        <div className="mx-auto max-w-[1280px] px-6 py-20">
          <div className="mb-8 h-8 w-48 animate-pulse rounded-full bg-foreground/10" />
          <div className="mb-4 h-16 max-w-2xl animate-pulse rounded-2xl bg-foreground/10" />
          <div className="h-24 max-w-xl animate-pulse rounded-2xl bg-foreground/5" />
        </div>
      </section>
    ),
  }
);

export const DeferredBrands = dynamic(
  () => import("@/components/Brands").then((mod) => mod.Brands),
  { loading: () => <div className="h-40 border-y border-[var(--border)]" /> }
);
