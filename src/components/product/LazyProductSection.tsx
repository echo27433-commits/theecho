"use client";

import { LazyMount } from "@/components/LazyMount";
import type { ReactNode } from "react";

type LazyProductSectionProps = {
  children: ReactNode;
  className?: string;
  minHeight?: string;
};

export function LazyProductSection({
  children,
  className = "",
  minHeight = "320px",
}: LazyProductSectionProps) {
  return (
    <LazyMount minHeight={minHeight} rootMargin="200px 0px">
      <section className={className}>{children}</section>
    </LazyMount>
  );
}
