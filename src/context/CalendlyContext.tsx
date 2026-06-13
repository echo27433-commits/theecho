"use client";
import { createContext, useContext, useCallback, ReactNode } from "react";
import Script from "next/script";

const CALENDLY_URL = "https://calendly.com/hetjani818";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type CalendlyContextType = {
  openCalendly: () => void;
};

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const openCalendly = useCallback(() => {
    const open = () => window.Calendly?.initPopupWidget({ url: CALENDLY_URL });

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
  }, []);

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
