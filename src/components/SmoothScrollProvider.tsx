"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import "lenis/dist/lenis.css";

const MOBILE_MEDIA_QUERY = "(max-width: 768px)";

function isMobileViewport() {
  return window.matchMedia(MOBILE_MEDIA_QUERY).matches;
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mobileQuery = window.matchMedia(MOBILE_MEDIA_QUERY);

    const destroyLenis = () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };

    const initLenis = () => {
      if (mobileQuery.matches) {
        destroyLenis();
        return;
      }

      if (lenisRef.current) return;

      const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.05,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        syncTouch: true,
        syncTouchLerp: 0.08,
        anchors: true,
      });

      lenisRef.current = lenis;
    };

    initLenis();
    mobileQuery.addEventListener("change", initLenis);

    return () => {
      mobileQuery.removeEventListener("change", initLenis);
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      return;
    }

    if (isMobileViewport()) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}
