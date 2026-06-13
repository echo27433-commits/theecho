"use client";

import { createContext, useContext, useCallback, ReactNode } from "react";
import Script from "next/script";
import { useTheme } from "next-themes";

const CALENDLY_BASE = "https://calendly.com/hetjani818";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

function getCalendlyUrl(isDark: boolean) {
  const params = new URLSearchParams({
    primary_color: "f20d14",
    hide_gdpr_banner: "1",
  });

  if (isDark) {
    params.set("background_color", "0e1018");
    params.set("text_color", "f4f4f5");
  } else {
    params.set("background_color", "ffffff");
    params.set("text_color", "0f0f10");
  }

  return `${CALENDLY_BASE}?${params.toString()}`;
}

type CalendlyContextType = {
  openCalendly: () => void;
};

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();

  const openCalendly = useCallback(() => {
    const isDark =
      resolvedTheme === "dark" || document.documentElement.classList.contains("dark");
    const url = getCalendlyUrl(isDark);

    const open = () => window.Calendly?.initPopupWidget({ url });

    if (window.Calendly) {
      open();
      return;
    }

    const interval = window.setInterval(() => {
      if (window.Calendly) {
        window.clearInterval(interval);
        open();
      }
    }, 100);

    window.setTimeout(() => window.clearInterval(interval), 10000);
  }, [resolvedTheme]);

  return (
    <CalendlyContext.Provider value={{ openCalendly }}>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      {children}
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (!context) throw new Error("useCalendly must be used within a CalendlyProvider");
  return context;
}
