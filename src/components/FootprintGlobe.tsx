"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useTheme } from "next-themes";
import { BRAND_RED, footprintCountries, globeArcs, globeMarkers } from "@/data/footprint";

const INITIAL_PHI = 3.43;
const INITIAL_THETA = 0.34;

type AnchorLabelStyle = React.CSSProperties & {
  positionAnchor?: string;
};

type DragState = {
  x: number;
  y: number;
  phi: number;
  theta: number;
};

function getGlobeColors(isDark: boolean) {
  return {
    dark: isDark ? 1 : 0,
    baseColor: (isDark ? [0.12, 0.12, 0.15] : [0.98, 0.98, 0.99]) as [number, number, number],
    glowColor: (isDark ? [0.35, 0.04, 0.06] : [0.95, 0.88, 0.88]) as [number, number, number],
    mapBrightness: isDark ? 6 : 8,
  };
}

export function FootprintGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const phiRef = useRef(INITIAL_PHI);
  const thetaRef = useRef(INITIAL_THETA);
  const widthRef = useRef(0);
  const dragRef = useRef<DragState | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let frameId = 0;
    let globe: ReturnType<typeof createGlobe> | null = null;
    let isActive = true;

    const getSize = () => Math.max(container.offsetWidth, 280);
    const getDpr = () => Math.min(1.5, window.devicePixelRatio || 1);

    const buildGlobe = (size: number) => {
      widthRef.current = size;
      const colors = getGlobeColors(isDark);
      const dpr = getDpr();

      if (globe) {
        globe.destroy();
      }

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: size * dpr,
        height: size * dpr,
        phi: phiRef.current,
        theta: thetaRef.current,
        diffuse: 1.25,
        mapSamples: 10000,
        mapBaseBrightness: isDark ? 0.02 : 0.05,
        ...colors,
        markerColor: BRAND_RED,
        markers: globeMarkers,
        arcs: globeArcs,
        arcColor: BRAND_RED,
        arcWidth: 0,
        arcHeight: 0.18,
        markerElevation: 0.14,
        scale: 1.08,
        opacity: 1,
      });
    };

    buildGlobe(getSize());

    const animate = () => {
      if (isActive) {
        globe?.update({ phi: phiRef.current, theta: thetaRef.current });
      }
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isActive = entry.isIntersecting;
      },
      { threshold: 0.08 }
    );
    visibilityObserver.observe(container);

    const onVisibilityChange = () => {
      isActive = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const onPointerDown = (e: PointerEvent) => {
      dragRef.current = {
        x: e.clientX,
        y: e.clientY,
        phi: phiRef.current,
        theta: thetaRef.current,
      };
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragRef.current) return;
      const { x, y, phi, theta } = dragRef.current;
      phiRef.current = phi + (e.clientX - x) / 200;
      thetaRef.current = Math.max(-0.45, Math.min(0.45, theta + (e.clientY - y) / 400));
    };

    const endDrag = (e: PointerEvent) => {
      if (!dragRef.current) return;
      dragRef.current = null;
      canvas.releasePointerCapture(e.pointerId);
      canvas.style.cursor = "grab";
    };

    const onPointerUp = (e: PointerEvent) => endDrag(e);
    const onPointerCancel = (e: PointerEvent) => endDrag(e);

    canvas.style.cursor = "grab";
    canvas.style.touchAction = "none";
    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerCancel);

    const observer = new ResizeObserver(() => {
      const size = getSize();
      const dpr = getDpr();
      if (size !== widthRef.current) {
        globe?.update({ width: size * dpr, height: size * dpr });
        widthRef.current = size;
      }
    });
    observer.observe(container);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      visibilityObserver.disconnect();
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerCancel);
      globe?.destroy();
      observer.disconnect();
    };
  }, [mounted, isDark]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[540px]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-full bg-primary-red/8 blur-[80px]" />
      <canvas
        ref={canvasRef}
        className="relative z-10 h-full w-full cursor-grab [contain:layout_paint_size] active:cursor-grabbing"
      />

      {mounted &&
        footprintCountries.map((country) => (
          <div
            key={country.id}
            className={`cobe-marker-label cobe-marker-label--${country.id} ${country.label ? "cobe-marker-label--hq" : ""}`}
            style={
              {
                positionAnchor: `--cobe-${country.id}`,
                opacity: `var(--cobe-visible-${country.id}, 0)`,
              } as AnchorLabelStyle
            }
          >
            {country.globeLabel}
            {country.label && <span className="cobe-marker-label__badge">HQ</span>}
          </div>
        ))}
    </div>
  );
}
