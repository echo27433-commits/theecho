"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type LazyMountProps = {
  children: ReactNode;
  rootMargin?: string;
  minHeight?: string;
  className?: string;
};

export function LazyMount({
  children,
  rootMargin = "280px 0px",
  minHeight,
  className,
}: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div ref={ref} className={className} style={minHeight ? { minHeight } : undefined}>
      {visible ? children : null}
    </div>
  );
}
