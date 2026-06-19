"use client";

import { createContext, useContext, useCallback, ReactNode } from "react";

const CALENDLY_BASE = "https://calendly.com/karankrunch210/30min";
const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

function getCalendlyUrl() {
  const params = new URLSearchParams({
    primary_color: "f20d14",
    hide_gdpr_banner: "1",
    background_color: "ffffff",
    text_color: "0f0f10",
    embed_type: "PopupWidget",
  });

  return `${CALENDLY_BASE}?${params.toString()}`;
}

type CalendlyContextType = {
  openCalendly: () => void;
};

let calendlyScriptPromise: Promise<void> | null = null;

function ensureCalendlyCss() {
  if (typeof document === "undefined") return;
  if (document.querySelector('link[data-calendly-css]')) return;

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CALENDLY_CSS;
  link.setAttribute("data-calendly-css", "true");
  document.head.appendChild(link);
}

function loadCalendlyScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();

  if (calendlyScriptPromise) return calendlyScriptPromise;

  calendlyScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-calendly-script]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Calendly script failed")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.setAttribute("data-calendly-script", "true");
    script.onload = () => resolve();
    script.onerror = () => {
      calendlyScriptPromise = null;
      reject(new Error("Calendly script failed"));
    };
    document.body.appendChild(script);
  });

  return calendlyScriptPromise;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const openCalendly = useCallback(() => {
    ensureCalendlyCss();

    const url = getCalendlyUrl();

    void loadCalendlyScript()
      .then(() => window.Calendly?.initPopupWidget({ url }))
      .catch(() => {
        window.open(url, "_blank", "noopener,noreferrer");
      });
  }, []);

  return <CalendlyContext.Provider value={{ openCalendly }}>{children}</CalendlyContext.Provider>;
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (!context) throw new Error("useCalendly must be used within a CalendlyProvider");
  return context;
}
