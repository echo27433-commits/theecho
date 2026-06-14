"use client";

import { useEffect, useRef, useState } from "react";

function shouldShowCursorGlow() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (window.matchMedia("(pointer: coarse)").matches) return false;
  if (window.matchMedia("(max-width: 1023px)").matches) return false;
  return true;
}

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(shouldShowCursorGlow());
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId = 0;
    let active = true;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const animate = () => {
      if (!active) return;
      currentX = lerp(currentX, mouseX, 0.08);
      currentY = lerp(currentY, mouseY, 0.08);

      if (glowRef.current) {
        glowRef.current.style.left = `${currentX}px`;
        glowRef.current.style.top = `${currentY}px`;
      }

      rafId = requestAnimationFrame(animate);
    };

    const onVisibility = () => {
      active = document.visibilityState === "visible";
      if (active) {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    rafId = requestAnimationFrame(animate);

    return () => {
      active = false;
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(rafId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-[9998] hidden lg:block"
        style={{
          width: "500px",
          height: "500px",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at center, rgba(229,72,59,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          left: "-999px",
          top: "-999px",
        }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "rgba(229,72,59,0.8)",
          transform: "translate(-50%, -50%)",
          left: "-999px",
          top: "-999px",
          mixBlendMode: "screen",
        }}
      />
    </>
  );
};
