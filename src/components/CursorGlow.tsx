"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

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
      currentX = lerp(currentX, mouseX, 0.08);
      currentY = lerp(currentY, mouseY, 0.08);

      if (glowRef.current) {
        glowRef.current.style.left = `${currentX}px`;
        glowRef.current.style.top = `${currentY}px`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Large soft glow */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-[9998] hidden lg:block"
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
      {/* Small sharp dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] hidden lg:block"
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
}
