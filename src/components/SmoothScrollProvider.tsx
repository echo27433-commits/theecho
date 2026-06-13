"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any = null;
    let rafId: number;

    const init = async () => {
      const { default: Lenis } = await import("lenis");
      lenis = new Lenis({
        duration: 1.4,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) as any,
        orientation: "vertical" as const,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    };

    init();

    return () => {
      cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}
