"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Bot, Zap, ArrowRight } from "lucide-react";

import { useProductModal, productsData } from "@/context/ProductModalContext";
import { useCalendly } from "@/context/CalendlyContext";
import { BookCallButton } from "@/components/BookCallButton";



function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* ── Pointing hand SVG ── */
function PointingHandIcon({ color }: { color: string }) {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: `drop-shadow(0 4px 14px ${hexToRgba(color, 0.5)})` }}
      aria-hidden
    >
      <path
        d="M18 30V18c0-2.2 1.8-4 4-4s4 1.8 4 4v8h2v-6c0-2.2 1.8-4 4-4s4 1.8 4 4v6h2v-4c0-2.2 1.8-4 4-4s4 1.8 4 4v14c0 .6-.1 1.2-.4 1.7l-6 12c-.8 1.6-2.4 2.6-4.2 2.6H22c-3.3 0-6-2.7-6-6V36c0-2.2 1.8-4 4-4s4 1.8 4 4v-2z"
        fill={color}
        stroke="white"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SHORT_HINTS: Record<string, string> = {
  loyalty: "For loyalty & rewards",
  omnichannel: "For WhatsApp messages",
  "ai-platform": "For AI conversations",
};

const MOBILE_HINTS: Record<string, string> = {
  loyalty: "Loyalty & rewards",
  omnichannel: "WhatsApp messages",
  "ai-platform": "AI conversations",
};

type HandPlacement = "left" | "right";

/* ── Animated hand cursor with Click label ── */
function HandCursor({
  x,
  y,
  color,
  hint,
  placement,
}: {
  x: number;
  y: number;
  color: string;
  hint: string;
  placement: HandPlacement;
}) {
  const flip = placement === "left";

  return (
    <motion.div
      className={`pointer-events-none absolute z-50 flex max-w-[calc(100%-8px)] items-start gap-1.5 ${flip ? "flex-row-reverse" : ""}`}
      animate={{ left: x, top: y }}
      transition={{ type: "spring", stiffness: 60, damping: 22 }}
    >
      <motion.div
        key={color}
        initial={{ opacity: 0.6 }}
        animate={{ y: [0, 10, 0], scale: [1, 0.9, 1], opacity: 1 }}
        transition={{
          opacity: { duration: 0.4 },
          y: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
        }}
        className={flip ? "rotate-[25deg]" : "-rotate-[25deg]"}
      >
        <PointingHandIcon color={color} />
      </motion.div>
      <div className={`mt-1 flex min-w-0 flex-col gap-1 ${flip ? "items-end" : "items-start"}`}>
        <motion.span
          key={`click-${color}`}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.05, 1] }}
          transition={{
            opacity: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
          style={{
            backgroundColor: color,
            boxShadow: `0 4px 16px ${hexToRgba(color, 0.5)}`,
          }}
        >
          Click
        </motion.span>
        <motion.div
          key={`hint-${color}-${hint}`}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-[110px] rounded-2xl px-2.5 py-1.5 text-[10px] leading-snug font-medium text-foreground/85 md:max-w-[130px] ${flip ? "rounded-tr-sm" : "rounded-tl-sm"}`}
          style={{
            backgroundColor: hexToRgba(color, 0.14),
            border: `1px solid ${hexToRgba(color, 0.28)}`,
          }}
        >
          {hint}
        </motion.div>
      </div>
    </motion.div>
  );
}

const MOBILE_LABELS: Record<string, string> = {
  loyalty: "Loyalty",
  omnichannel: "Omnichannel",
  "ai-platform": "AI Platform",
};

/* ── Floating channel node ── */
function ChannelNode({
  id,
  icon: Icon,
  label,
  color,
  style,
  delay = 0,
  isHighlighted = false,
  nodeRef,
  onClick,
}: {
  id: string;
  icon: React.ElementType;
  label: string;
  color: string;
  style: React.CSSProperties;
  delay?: number;
  isHighlighted?: boolean;
  nodeRef?: (el: HTMLDivElement | null) => void;
  onClick?: () => void;
}) {
  const mobileLabel = MOBILE_LABELS[id] ?? label;

  return (
    <div
      ref={nodeRef}
      className={`hero-orb-node hero-orb-node--${id} absolute z-30 max-w-[46%] md:max-w-none`}
      style={style}
    >
      <motion.button
        onClick={onClick}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: isHighlighted ? [1, 1.05, 1] : 1,
          boxShadow: isHighlighted
            ? [
                `0 4px 24px ${hexToRgba(color, 0.45)}`,
                `0 6px 36px ${hexToRgba(color, 0.7)}`,
                `0 4px 24px ${hexToRgba(color, 0.45)}`,
              ]
            : `0 4px 24px ${hexToRgba(color, 0.45)}`,
        }}
        transition={{
          opacity: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 1.6, repeat: isHighlighted ? Infinity : 0, ease: "easeInOut" },
          boxShadow: { duration: 1.6, repeat: isHighlighted ? Infinity : 0, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="group relative inline-flex w-fit max-w-full cursor-pointer items-center gap-1.5 overflow-hidden rounded-full py-1.5 pl-2.5 pr-1 text-[11px] font-semibold text-white btn-shine md:gap-2.5 md:py-2 md:pl-4 md:pr-1.5 md:text-sm"
        style={{ backgroundColor: color }}
      >
        <Icon className="h-3.5 w-3.5 shrink-0 opacity-90 md:h-4 md:w-4" />
        <span className="whitespace-nowrap md:hidden">{mobileLabel}</span>
        <span className="hidden whitespace-nowrap md:inline">{label}</span>
        <span className="ml-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:bg-white/30 md:ml-auto md:h-8 md:w-8">
          <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
        </span>
      </motion.button>
    </div>
  );
}

/* ── Animated connecting SVG lines ── */
function OrbitalLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 500 500"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="line-red" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f20d14" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f20d14" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line-purple" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line-blue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Lines from center to the 3 new nodes */}
      {[
        { d: "M 250 250 L 50 120", grad: "line-red" },      // Loyalty (Left Top)
        { d: "M 250 250 L 450 120", grad: "line-blue" },     // Omnichannel (Right Top)
        { d: "M 250 250 L 200 400", grad: "line-purple" },   // AI Platform (Bottom Left)
      ].map(({ d, grad }, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={`url(#${grad})`}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </svg>
  );
}



/* ── Dark mode: Glowing AI Orb ── */
function DarkOrb({ onSelectProduct }: { onSelectProduct: (productId: string) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [handPos, setHandPos] = useState({ x: 0, y: 0 });
  const [handPlacement, setHandPlacement] = useState<HandPlacement>("right");
  const [handHint, setHandHint] = useState("");
  const [handReady, setHandReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  const updateHandPosition = (index: number) => {
    const node = nodeRefs.current[index];
    const container = containerRef.current;
    const product = productsData[index];
    if (!node || !container || !product) return;

    const nodeRect = node.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const isMobile = window.innerWidth < 768;
    const containerWidth = containerRect.width;
    const handOffset = isMobile ? 92 : 118;

    const nodeCenterX = nodeRect.left + nodeRect.width / 2 - containerRect.left;
    const placeLeft =
      product.id === "omnichannel" || (isMobile && nodeCenterX > containerWidth * 0.52);

    let x: number;
    let placement: HandPlacement = "right";

    if (placeLeft) {
      placement = "left";
      x = nodeRect.left - containerRect.left - handOffset;
      x = Math.max(4, x);
    } else {
      x = nodeRect.right - containerRect.left - 4;
      x = Math.min(x, containerWidth - (isMobile ? 88 : 128));
    }

    let y = nodeRect.top - containerRect.top + nodeRect.height / 2 - 16;
    y = Math.max(4, Math.min(y, containerRect.height - 72));

    setHandPos({ x, y });
    setHandPlacement(placement);
    setHandHint(isMobile ? MOBILE_HINTS[product.id] : SHORT_HINTS[product.id]);
    setHandReady(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const update = () => updateHandPosition(activeIndex);
    update();
    const raf = requestAnimationFrame(update);
    const delayed = setTimeout(update, 1200);
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(delayed);
      window.removeEventListener("resize", update);
    };
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[580px] px-2 max-md:max-w-[340px] max-md:overflow-hidden md:overflow-visible md:px-8"
    >
      <div className="relative mx-auto aspect-square w-full max-w-[500px]">
        {/* Background ambient glow */}
        <div className="absolute inset-0 rounded-full bg-primary-red/5 blur-3xl animate-pulse" />

        {/* Outer orbital ring */}
        <div className="absolute inset-4 rounded-full border border-dashed border-foreground/10 animate-[spin_24s_linear_infinite]" />

        {/* Middle ring */}
        <div
          className="absolute inset-[60px] rounded-full border border-primary-red/10 animate-[spin_16s_linear_infinite_reverse]"
          style={{ borderStyle: "dotted" }}
        />

        {/* Inner ring with glow */}
        <div className="absolute inset-[100px] rounded-full border border-primary-red/20 animate-[spin_10s_linear_infinite]" />

        {/* Connection lines SVG */}
        <OrbitalLines />

        {/* Center hub */}
        <motion.div
          animate={{
            opacity: [1, 0.85, 1],
            boxShadow: [
              "0 0 40px rgba(242,13,20,0.3)",
              "0 0 70px rgba(242,13,20,0.55)",
              "0 0 40px rgba(242,13,20,0.3)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 z-10 flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary-red/30"
          style={{
            background: "radial-gradient(circle, rgba(229,72,59,0.15) 0%, transparent 70%)",
          }}
        >
          <div
            className="flex h-[62px] w-[62px] items-center justify-center rounded-full"
            style={{
              background: "linear-gradient(135deg, #f20d14, #C0392B)",
              boxShadow: "0 0 30px rgba(229,72,59,0.5)",
            }}
          >
            <Bot className="text-white" size={28} />
          </div>
          <span className="absolute inset-0 rounded-full border border-primary-red/40 animate-[pulse-ring_2s_ease-out_infinite]" />
        </motion.div>
      </div>

      {/* Animated hand cursor */}
      {handReady && (
        <HandCursor
          x={handPos.x}
          y={handPos.y}
          color={productsData[activeIndex].color}
          hint={handHint}
          placement={handPlacement}
        />
      )}

      {/* Channel nodes / Product Widgets */}
      {productsData.map((prod, i) => (
        <ChannelNode
          key={prod.id}
          id={prod.id}
          icon={prod.icon}
          label={prod.title}
          color={prod.color}
          style={prod.style || {}}
          delay={1 + i * 0.2}
          isHighlighted={activeIndex === i}
          nodeRef={(el) => {
            nodeRefs.current[i] = el;
          }}
          onClick={() => onSelectProduct(prod.id)}
        />
      ))}
    </div>
  );
}



/* ── Hero Section ── */
export function Hero() {
  const [mounted, setMounted] = useState(false);
  const { openModal } = useProductModal();
  const { openCalendly } = useCalendly();

  useEffect(() => setMounted(true), []);

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* ── Layered backgrounds ── */}
        {/* Animated gradient blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-primary-red/8 dark:bg-primary-red/12 blur-[140px] animate-blob pointer-events-none -z-10" />
        <div
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] pointer-events-none -z-10"
          style={{ animation: "blob-move 14s ease-in-out infinite 2s" }}
        />
        <div
          className="absolute top-[30%] left-[30%] w-[400px] h-[400px] rounded-full bg-blue-500/3 dark:bg-blue-500/5 blur-[100px] pointer-events-none -z-10"
          style={{ animation: "blob-move 18s ease-in-out infinite 4s" }}
        />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid-light dark:dot-grid opacity-100 dark:opacity-100 pointer-events-none -z-10" />

        {/* Radial spotlight from top */}
        <div className="absolute top-0 left-0 right-0 h-[600px] radial-spotlight pointer-events-none -z-10" />

        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay -z-10" />

        {/* ── Content Grid ── */}
        <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center py-20">

          {/* LEFT: Text Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="flex items-center gap-1.5 bg-primary-red/10 border border-primary-red/20 text-primary-red text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                <Zap size={11} className="fill-current" />
                AI Powered Enterprise Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6"
            >
              <span className="text-foreground whitespace-nowrap">The AI Engine for</span>
              <br />
              <span className="gradient-text-red inline-block">Conversations,</span>{" "}
              <span className="text-foreground inline-block">Loyalty & Growth</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-foreground/60 mb-10 max-w-[440px] leading-relaxed"
            >
              Echo is an AI powered platform that helps businesses engage, automate, and grow across every channel with intelligence that deepens with every interaction.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start gap-4 sm:flex-row"
            >
              <BookCallButton onClick={openCalendly} size="lg" />
            </motion.div>
          </div>

          {/* RIGHT: Visual */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center overflow-visible"
            >
              <div className="flex w-full items-center justify-center">
                <DarkOrb onSelectProduct={openModal} />
              </div>
            </motion.div>
          )}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/20 to-transparent" />
        </motion.div>
      </section>
    </>
  );
}
