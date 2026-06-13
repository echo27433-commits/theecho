"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Layers, Bot, ArrowRight, X } from "lucide-react";

export type ProductData = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  style?: React.CSSProperties; // Only used in Hero, making optional
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
    description: "Build lasting relationships with intelligent loyalty programs. Reward customers dynamically based on behavior, purchase history, and engagement.",
    features: ["Dynamic Tiering", "Points & Rewards Engine", "Behavioral Triggers"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "/product/loyalty"
  },
  {
    id: "omnichannel",
    title: "Omnichannel Comms",
    icon: Layers,
    color: "#3B82F6",
    style: { top: "15%", right: "0%" },
    description: "Unify all your customer touchpoints into a single, seamless experience. Reach your customers wherever they are, without losing context.",
    features: ["Unified Inbox", "Cross Channel Routing", "Campaign Management"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "/product/omnichannel"
  },
  {
    id: "ai-platform",
    title: "AI Conversational Platform",
    icon: Bot,
    color: "#A855F7",
    style: { bottom: "10%", left: "25%" },
    description: "Deploy highly intelligent, agentic AI that understands context, intent, and sentiment to resolve queries instantly and proactively.",
    features: ["Agentic Resolution", "Sentiment Analysis", "Seamless Human Handoff"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop",
    link: "/product/ai-platform"
  }
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

  // Prevent background scrolling when open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);

  return (
    <ProductModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={closeModal} />
        )}
      </AnimatePresence>
    </ProductModalContext.Provider>
  );
}

/* ── Full-Screen No-Scroll Product Modal ── */
function ProductModal({ product, onClose }: { product: ProductData; onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
    >
      {/* Close Background */}
      <div className="absolute inset-0" onClick={onClose} />
      
      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl h-full max-h-[80vh] flex flex-col lg:flex-row bg-[#06070B] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] z-10"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/70 hover:text-white transition-colors z-30"
        >
          <X size={20} />
        </button>

        {/* Left Column: Text Content */}
        <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col justify-center relative overflow-y-auto custom-scrollbar">
          {/* Subtle Color Glow */}
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
            style={{ background: `radial-gradient(circle at top left, ${product.color}, transparent 60%)` }} 
          />
          
          <div className="relative z-10 max-w-xl">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
              style={{ background: `${product.color}20`, border: `1px solid ${product.color}40` }}
            >
              <product.icon size={28} style={{ color: product.color }} />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
              {product.title}
            </h2>
            
            <p className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed">
              {product.description}
            </p>

            <ul className="space-y-4 mb-10">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/90 font-medium text-base md:text-lg">
                  <div className="w-2 h-2 rounded-full shadow-lg" style={{ backgroundColor: product.color, boxShadow: `0 0 10px ${product.color}` }} />
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href={product.link}
              onClick={onClose}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all hover:scale-105"
              style={{ backgroundColor: product.color, boxShadow: `0 8px 30px ${product.color}50` }}
            >
              Visit Product <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Dashboard Image */}
        <div className="flex-1 bg-black/40 relative border-t lg:border-t-0 lg:border-l border-white/5 overflow-hidden flex items-center justify-center p-8 lg:p-16">
          <motion.img 
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-contain rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.4)] border border-white/10"
          />
        </div>

      </motion.div>
    </motion.div>
  );
}
