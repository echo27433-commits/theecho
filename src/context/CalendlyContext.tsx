"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { PopupModal } from "react-calendly";

type CalendlyContextType = {
  openCalendly: () => void;
};

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  return (
    <CalendlyContext.Provider value={{ openCalendly: () => setIsOpen(true) }}>
      {children}
      {isOpen && rootElement && (
        <PopupModal
          url="https://calendly.com/echo-demo"
          pageSettings={{
            backgroundColor: '06070B',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: 'f20d14',
            textColor: 'ffffff'
          }}
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (!context) throw new Error("useCalendly must be used within a CalendlyProvider");
  return context;
}
