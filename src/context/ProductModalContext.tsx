"use client";

import Image from "next/image";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Layers, Bot, ArrowRight, X, Check } from "lucide-react";

export type ProductData = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  style?: React.CSSProperties;
  eyebrow: string;
  description: string;
  features: string[];
  image: string;
  link: string;
};

export const productsData: ProductData[] = [
  {
    id: "loyalty",
    title: "Loyalty Management",
    icon: Heart,
    color: "#f20d14",
    style: { top: "15%", left: "0%" },
    eyebrow: "Loyalty Platform",
    description:
      "Build lasting relationships with intelligent loyalty programs. Reward customers dynamically based on behavior, purchase history, and engagement.",
    features: ["Dynamic Tiering", "Points & Rewards Engine", "Behavioral Triggers"],
    image: "/loyal.webp",
    link: "/product/loyalty",
  },
  {
    id: "omnichannel",
    title: "Omnichannel Comms",
    icon: Layers,
    color: "#3B82F6",
    style: { top: "15%", right: "0%" },
    eyebrow: "Messaging Suite",
    description:
      "Unify all your customer touchpoints into a single, seamless experience. Reach your customers wherever they are, without losing context.",
    features: ["Unified Inbox", "Cross Channel Routing", "Campaign Management"],
    image: "/omnichnnel.webp",
    link: "/product/omnichannel",
  },
  {
    id: "ai-platform",
    title: "AI Conversational Platform",
    icon: Bot,
    color: "#A855F7",
    style: { bottom: "10%", left: "25%" },
    eyebrow: "Agentic AI",
    description:
      "Deploy highly intelligent, agentic AI that understands context, intent, and sentiment to resolve queries instantly and proactively.",
    features: ["Agentic Resolution", "Sentiment Analysis", "Seamless Human Handoff"],
    image: "/ai-converation.webp",
    link: "/product/ai-platform",
  },
];

interface ProductModalContextProps {
  openModal: (productId: string) => void;
  closeModal: () => void;
}

const ProductModalContext = createContext<ProductModalContextProps | undefined>(undefined);

export function useProductModal() {
  const context = useContext(ProductModalContext);
  if (!context) {
    throw new Error("useProductModal must be used within a ProductModalProvider");
  }
  return context;
}

export function ProductModalProvider({ children }: { children: React.ReactNode }) {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const openModal = (productId: string) => setSelectedProductId(productId);
  const closeModal = () => setSelectedProductId(null);

  const selectedProduct = productsData.find((p) => p.id === selectedProductId);

  useEffect(() => {
    if (selectedProduct) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => unlockScroll();
  }, [selectedProduct]);

  return (
    <ProductModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={closeModal}
            onSelect={(id) => setSelectedProductId(id)}
          />
        )}
      </AnimatePresence>
    </ProductModalContext.Provider>
  );
}

function BrowserFrame({ image, title, accent }: { image: string; title: string; accent: string }) {
  return (
    <div className="relative w-full">
      <div
        className="pointer-events-none absolute -inset-4 hidden rounded-[28px] opacity-40 blur-2xl sm:block"
        style={{ background: `radial-gradient(ellipse at 50% 60%, ${accent}55, transparent 70%)` }}
      />
      <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-card shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:rounded-2xl">
        <div className="hidden items-center gap-2 border-b border-[var(--border)] bg-foreground/[0.03] px-4 py-3 sm:flex">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          </div>
          <div className="mx-auto flex h-7 max-w-[220px] flex-1 items-center justify-center rounded-lg bg-foreground/[0.04] px-3">
            <span className="truncate text-[11px] text-foreground/35">
              echo.app / {title.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </div>
          <div className="w-[52px]" />
        </div>
        <div className="relative aspect-[16/9] max-h-[168px] bg-foreground/[0.02] sm:aspect-[16/10] sm:max-h-none">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, 480px"
            className="object-cover object-top"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-10 sm:h-16"
            style={{ background: `linear-gradient(to top, ${accent}12, transparent)` }}
          />
        </div>
      </div>
    </div>
  );
}

function ProductModal({
  product,
  onClose,
  onSelect,
}: {
  product: ProductData;
  onClose: () => void;
  onSelect: (id: string) => void;
}) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-0 backdrop-blur-md sm:items-center sm:p-4 md:p-6"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden />

      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="relative z-10 flex h-[100dvh] w-full max-w-6xl flex-col overflow-hidden rounded-none border border-[var(--border)] bg-background shadow-[0_32px_120px_rgba(0,0,0,0.35)] sm:h-auto sm:max-h-[88vh] sm:rounded-3xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        {/* Mobile drag handle */}
        <div className="flex shrink-0 justify-center pt-2 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-foreground/15" />
        </div>

        <div
          className="h-1 w-full shrink-0 sm:block"
          style={{ background: `linear-gradient(90deg, ${product.color}, ${product.color}66, transparent)` }}
        />

        {/* Header */}
        <div className="relative shrink-0 border-b border-[var(--border)] px-4 py-3 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-4 md:px-7">
          <div className="grid grid-cols-3 gap-2 pr-12 sm:flex sm:flex-wrap sm:items-center sm:pr-0">
            {productsData.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelect(p.id)}
                className={`inline-flex items-center justify-center gap-2 rounded-xl border px-2 py-2.5 text-xs font-semibold transition-all duration-200 sm:justify-start sm:px-3 sm:text-sm ${
                  p.id === product.id
                    ? "border-transparent text-white shadow-sm"
                    : "border-[var(--border)] bg-card text-foreground/55 hover:border-foreground/15 hover:text-foreground"
                }`}
                style={
                  p.id === product.id
                    ? { backgroundColor: p.color, boxShadow: `0 4px 20px ${p.color}40` }
                    : undefined
                }
              >
                <p.icon size={16} className="shrink-0" />
                <span className="hidden truncate sm:inline">{p.title}</span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-4 rounded-xl border border-[var(--border)] bg-card p-2 text-foreground/50 transition-colors hover:border-foreground/15 hover:text-foreground sm:static sm:shrink-0"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body — image first on mobile */}
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto lg:flex-row" data-lenis-prevent>
          {/* Screenshot */}
          <div className="order-1 shrink-0 bg-foreground/[0.02] px-4 py-4 sm:px-5 sm:py-6 md:px-8 md:py-8 lg:order-2 lg:flex lg:min-h-0 lg:flex-1 lg:items-center lg:px-10 lg:py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <BrowserFrame image={product.image} title={product.title} accent={product.color} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Content */}
          <div className="relative order-2 flex shrink-0 flex-col justify-center px-4 py-5 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:order-1 lg:w-[42%] lg:border-r lg:border-[var(--border)] lg:py-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{ background: `radial-gradient(circle at 0% 0%, ${product.color}, transparent 55%)` }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div
                  className="mb-3 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] sm:mb-5 sm:px-3 sm:py-1.5 sm:text-[11px] sm:tracking-[0.18em]"
                  style={{
                    color: product.color,
                    borderColor: `${product.color}35`,
                    backgroundColor: `${product.color}10`,
                  }}
                >
                  <product.icon size={12} className="sm:hidden" />
                  <product.icon size={13} className="hidden sm:block" />
                  {product.eyebrow}
                </div>

                <h2
                  id="product-modal-title"
                  className="mb-2.5 text-2xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:mb-4 sm:text-3xl md:text-4xl"
                >
                  {product.title}
                </h2>

                <p className="mb-5 text-sm leading-relaxed text-foreground/55 sm:mb-7 sm:text-base md:text-[17px]">
                  {product.description}
                </p>

                {/* Mobile: compact list */}
                <ul className="mb-2 space-y-2.5 sm:hidden">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground/75">
                      <Check size={14} className="shrink-0" style={{ color: product.color }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Desktop: pills */}
                <div className="mb-8 hidden flex-wrap gap-2 sm:flex">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border)] bg-card px-3 py-2 text-sm text-foreground/75"
                    >
                      <Check size={14} style={{ color: product.color }} />
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href={product.link}
                  onClick={onClose}
                  className="hidden w-full items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] sm:inline-flex md:text-base"
                  style={{
                    backgroundColor: product.color,
                    boxShadow: `0 8px 28px ${product.color}45`,
                  }}
                >
                  Explore product
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile sticky CTA */}
        <div className="shrink-0 border-t border-[var(--border)] bg-background/95 px-4 py-3 backdrop-blur-sm sm:hidden">
          <a
            href={product.link}
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white active:scale-[0.98]"
            style={{
              backgroundColor: product.color,
              boxShadow: `0 6px 24px ${product.color}40`,
            }}
          >
            Explore product
            <ArrowRight size={17} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
