"use client";

import Image from "next/image";
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
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

const PRODUCT_IMAGES = productsData.map((p) => p.image);

const overlayTransition = { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const };
const panelTransition = { duration: 0.28, ease: [0.16, 1, 0.3, 1] as const };
const contentTransition = { duration: 0.18, ease: [0.16, 1, 0.3, 1] as const };

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

function preloadProductImages() {
  if (typeof window === "undefined") return;
  for (const src of PRODUCT_IMAGES) {
    const img = new window.Image();
    img.decoding = "async";
    img.src = src;
  }
}

export function ProductModalProvider({ children }: { children: React.ReactNode }) {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const openModal = useCallback((productId: string) => setSelectedProductId(productId), []);
  const closeModal = useCallback(() => setSelectedProductId(null), []);

  const selectedProduct = useMemo(
    () => productsData.find((p) => p.id === selectedProductId) ?? null,
    [selectedProductId],
  );

  useEffect(() => {
    preloadProductImages();
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => unlockScroll();
  }, [selectedProduct]);

  const contextValue = useMemo(() => ({ openModal, closeModal }), [openModal, closeModal]);

  return (
    <ProductModalContext.Provider value={contextValue}>
      {children}

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            key="product-modal"
            product={selectedProduct}
            onClose={closeModal}
            onSelect={setSelectedProductId}
          />
        )}
      </AnimatePresence>
    </ProductModalContext.Provider>
  );
}

function ModalProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative isolate w-full">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[75%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-red/12 blur-[48px] sm:bg-primary-red/15 sm:blur-[64px]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto aspect-[4/3] w-full min-h-[200px] sm:min-h-[260px] lg:min-h-[300px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 640px) 92vw, 520px"
          className="object-contain object-center drop-shadow-[0_16px_48px_rgba(242,13,20,0.12)]"
        />
      </div>
    </div>
  );
}

function ProductModalContent({ product, onClose }: { product: ProductData; onClose: () => void }) {
  return (
    <motion.div
      key={product.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={contentTransition}
      className="flex min-h-0 flex-1 flex-col lg:flex-row"
    >
      <div className="order-1 shrink-0 px-4 py-4 sm:px-5 sm:py-5 md:px-8 lg:order-2 lg:flex lg:min-h-0 lg:flex-1 lg:items-center lg:px-8 lg:py-8">
        <ModalProductImage src={product.image} alt={product.title} />
      </div>

      <div className="relative order-2 flex shrink-0 flex-col justify-center px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:order-1 lg:w-[42%] lg:border-r lg:border-[var(--border)] lg:py-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ background: `radial-gradient(circle at 0% 0%, ${product.color}, transparent 55%)` }}
        />

        <div className="relative">
          <div
            className="mb-3 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] sm:mb-4 sm:px-3 sm:py-1.5 sm:text-[11px]"
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
            className="mb-2.5 text-2xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:mb-3 sm:text-3xl md:text-4xl"
          >
            {product.title}
          </h2>

          <p className="mb-5 text-sm leading-relaxed text-foreground/55 sm:mb-6 sm:text-base">
            {product.description}
          </p>

          <ul className="mb-2 space-y-2.5 sm:hidden">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground/75">
                <Check size={14} className="shrink-0" style={{ color: product.color }} />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mb-6 hidden flex-wrap gap-2 sm:flex">
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
            className="hidden w-full items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] sm:inline-flex"
            style={{
              backgroundColor: product.color,
              boxShadow: `0 8px 28px ${product.color}45`,
            }}
          >
            Explore product
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </motion.div>
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={overlayTransition}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/65 p-0 sm:items-center sm:bg-black/55 sm:p-4 md:p-6"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={panelTransition}
        className="relative z-10 flex max-h-[92dvh] w-full max-w-6xl flex-col overflow-hidden rounded-t-3xl border border-[var(--border)] bg-background shadow-[0_24px_80px_rgba(0,0,0,0.4)] sm:max-h-[88vh] sm:rounded-3xl [transform:translateZ(0)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 justify-center pt-2 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-foreground/15" />
        </div>

        <div
          className="h-1 w-full shrink-0"
          style={{ background: `linear-gradient(90deg, ${product.color}, ${product.color}66, transparent)` }}
        />

        <div className="relative shrink-0 border-b border-[var(--border)] px-4 py-3 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-3.5">
          <div className="grid grid-cols-3 gap-2 pr-12 sm:flex sm:flex-wrap sm:items-center sm:pr-0">
            {productsData.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onSelect(p.id)}
                className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border px-2 py-2.5 text-xs font-semibold transition-colors duration-150 sm:justify-start sm:px-3 sm:text-sm ${
                  p.id === product.id
                    ? "border-transparent text-white"
                    : "border-[var(--border)] bg-card text-foreground/55 hover:border-foreground/15 hover:text-foreground"
                }`}
                style={
                  p.id === product.id
                    ? { backgroundColor: p.color, boxShadow: `0 4px 16px ${p.color}35` }
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
            className="absolute top-3 right-4 cursor-pointer rounded-xl border border-[var(--border)] bg-card p-2 text-foreground/50 transition-colors hover:border-foreground/15 hover:text-foreground sm:static sm:shrink-0"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain" data-lenis-prevent>
          <ProductModalContent product={product} onClose={onClose} />
        </div>

        <div className="shrink-0 border-t border-[var(--border)] bg-background px-4 py-3 sm:hidden">
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
