"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { resetScrollLock } from "@/lib/scroll-lock";

const MOBILE_MEDIA_QUERY = "(max-width: 768px)";

function clearLenisClasses() {
  document.documentElement.classList.remove("lenis", "lenis-smooth", "lenis-stopped", "lenis-scrolling");
  document.body.classList.remove("lenis", "lenis-smooth", "lenis-stopped", "lenis-scrolling");
}

type LenisInstance = {
  destroy: () => void;
  scrollTo: (target: number, options?: { immediate?: boolean }) => void;
};

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisInstance | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      clearLenisClasses();
      resetScrollLock();
      return;
    }

    const mobileQuery = window.matchMedia(MOBILE_MEDIA_QUERY);
    let cancelled = false;

    const destroyLenis = () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      clearLenisClasses();
      resetScrollLock();
    };

    const initLenis = async () => {
      if (mobileQuery.matches) {
        destroyLenis();
        return;
      }

      if (lenisRef.current || cancelled) return;

      const { default: Lenis } = await import("lenis");
      await import("lenis/dist/lenis.css");

      if (cancelled || mobileQuery.matches || lenisRef.current) return;

      const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.05,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        syncTouch: false,
        anchors: true,
      });

      lenisRef.current = lenis;
    };

    const onViewportChange = () => {
      void initLenis();
    };

    void initLenis();
    mobileQuery.addEventListener("change", onViewportChange);

    return () => {
      cancelled = true;
      mobileQuery.removeEventListener("change", onViewportChange);
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
