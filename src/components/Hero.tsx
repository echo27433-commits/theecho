"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Bot, Zap, ArrowRight, MessageSquare } from "lucide-react";

import { useProductModal, productsData } from "@/context/ProductModalContext";
import { useCalendly } from "@/context/CalendlyContext";
import { BookCallButton } from "@/components/BookCallButton";
import { BOT_IMAGE } from "@/lib/assets";
import { useIsMobile } from "@/hooks/use-mobile";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const HERO_CARD_COPY: Record<string, string> = {
  loyalty: "Build stronger relationships with data-driven loyalty programs.",
  omnichannel: "Deliver seamless conversations across every channel.",
  "ai-platform": "Automate interactions with context-aware AI conversations.",
};

const HERO_GUIDE_PROMPTS: Record<string, string> = {
  loyalty: "Tap the button to explore Loyalty Management →",
  omnichannel: "Tap the button to see Omnichannel in action →",
  "ai-platform": "Tap the button to discover our AI Platform →",
};

const HERO_ICONS: Record<string, React.ElementType> = {
  loyalty: productsData[0].icon,
  omnichannel: MessageSquare,
  "ai-platform": Bot,
};

type ConnectorLine = { d: string; color: string; startX: number; startY: number; endX: number; endY: number };

function HubConnectorLines({ lines, activeIndex }: { lines: ConnectorLine[]; activeIndex: number }) {
  if (lines.length === 0) return null;

  return (
    <svg className="pointer-events-none absolute inset-0 z-[11] h-full w-full overflow-visible">
      <defs>
        <filter id="hero-line-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {lines.map((line, i) => {
        const isActive = i === activeIndex;

        return (
          <g key={`${line.color}-${i}`}>
            <motion.path
              d={line.d}
              stroke={line.color}
              strokeWidth={isActive ? 3.5 : 2.5}
              strokeOpacity={isActive ? 1 : 0.35}
              fill="none"
              strokeLinecap="round"
              filter={isActive ? "url(#hero-line-glow)" : undefined}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                strokeDasharray: isActive ? "6 10" : "none",
                strokeDashoffset: isActive ? [0, -32] : 0,
              }}
              transition={{
                opacity: { duration: 0.35, delay: i * 0.05 },
                strokeDashoffset: isActive
                  ? { duration: 1.8, repeat: Infinity, ease: "linear" }
                  : { duration: 0.3 },
              }}
            />
            <circle cx={line.startX} cy={line.startY} r={isActive ? 5 : 3.5} fill={line.color} opacity={isActive ? 1 : 0.5} />
            <circle cx={line.endX} cy={line.endY} r={isActive ? 6 : 4} fill={line.color} opacity={isActive ? 1 : 0.55} />
          </g>
        );
      })}
    </svg>
  );
}

const BUBBLE_HEAD_TOP_RATIO = 0.13;
const BUBBLE_GAP_PX = 18;
// Visible bot silhouette inside PNG — tight fit so lines attach to the mascot, not empty padding
const BOT_BOUNDS = { left: 0.2, top: 0.12, right: 0.56, bottom: 0.88 };
const LINE_ORIGIN_INSET = 0.94;

function BotGuideBubble({ activeProduct }: { activeProduct: (typeof productsData)[0] }) {
  const [phase, setPhase] = useState<"typing" | "message">("typing");
  const prompt = HERO_GUIDE_PROMPTS[activeProduct.id] ?? `Explore ${activeProduct.title}`;

  useEffect(() => {
    setPhase("typing");
    const timer = setTimeout(() => setPhase("message"), 1100);
    return () => clearTimeout(timer);
  }, [activeProduct.id]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeProduct.id}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "bottom center" }}
      >
        <div className="rounded-2xl border border-foreground/8 bg-background/90 px-3.5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-md max-sm:px-3 max-sm:py-2.5 dark:border-white/10 dark:bg-background/85 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="mb-2 flex items-center gap-2">
              <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full">
                <Image src={BOT_IMAGE} alt="" width={24} height={24} className="h-full w-full scale-125 object-contain" />
              </div>
              <span className="text-[10px] font-semibold tracking-[0.12em] text-foreground/45 uppercase">Echo Assistant</span>
            </div>

            <AnimatePresence mode="wait">
              {phase === "typing" ? (
                <motion.div
                  key="typing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-5 items-center gap-1 px-0.5"
                >
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      className="h-1.5 w-1.5 rounded-full bg-foreground/30"
                      animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.15, ease: "easeInOut" }}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.p
                  key="message"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs leading-relaxed text-foreground/75 sm:text-[13px]"
                >
                  {prompt}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        <div className="relative mx-auto mb-1 h-0 w-0 border-x-[8px] border-t-[8px] border-x-transparent border-t-background/90 dark:border-t-background/85" />
      </motion.div>
    </AnimatePresence>
  );
}

function ProductHubCard({
  product,
  onClick,
  isActive,
  delay,
  reducedMotion,
}: {
  product: (typeof productsData)[0];
  onClick: () => void;
  isActive: boolean;
  delay: number;
  reducedMotion?: boolean;
}) {
  const Icon = HERO_ICONS[product.id] ?? product.icon;
  const copy = HERO_CARD_COPY[product.id] ?? product.description;

  const activeButtonStyle = {
    backgroundColor: product.color,
    ["--btn-glow" as string]: hexToRgba(product.color, 0.45),
    ["--btn-glow-hover" as string]: hexToRgba(product.color, 0.6),
  } as React.CSSProperties;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: Math.min(delay, 0.35), ease: [0.16, 1, 0.3, 1] }}
      className={`group relative z-10 flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 max-sm:gap-2 max-sm:rounded-xl max-sm:p-2.5 sm:gap-5 sm:rounded-3xl sm:p-5 md:p-6 ${
        isActive
          ? "overflow-hidden font-semibold text-white btn-shine hover:-translate-y-0.5 [box-shadow:0_4px_24px_var(--btn-glow)] hover:[box-shadow:0_6px_32px_var(--btn-glow-hover)]"
          : "opacity-70 backdrop-blur-sm hover:opacity-90"
      }`}
      style={
        isActive
          ? { ...activeButtonStyle, borderColor: "transparent" }
          : {
              borderColor: hexToRgba(product.color, 0.15),
              background: `linear-gradient(135deg, ${hexToRgba(product.color, 0.05)} 0%, rgba(255,255,255,0.02) 100%)`,
            }
      }
    >
      <div
        data-hub-icon
        className={`relative z-[15] flex h-12 w-12 shrink-0 items-center justify-center rounded-full max-sm:h-9 max-sm:w-9 sm:h-14 sm:w-14 ${
          isActive ? "bg-white/20" : ""
        }`}
        style={
          isActive
            ? undefined
            : {
                background: `linear-gradient(135deg, ${product.color}, ${hexToRgba(product.color, 0.75)})`,
                boxShadow: `0 4px 20px ${hexToRgba(product.color, 0.35)}`,
              }
        }
      >
        <Icon className="h-[22px] w-[22px] text-white max-sm:h-[18px] max-sm:w-[18px]" />
      </div>

      <div className="min-w-0 flex-1 text-left">
        <p className={`text-base leading-snug max-sm:text-xs sm:text-lg ${isActive ? "font-semibold text-white" : "font-bold text-foreground"}`}>
          {product.title}
        </p>
        <p
          className={`mt-1 line-clamp-2 text-xs leading-relaxed max-sm:mt-0.5 max-sm:text-[10px] sm:text-sm ${
            isActive ? "text-white/75" : "text-foreground/50"
          }`}
        >
          {copy}
        </p>
      </div>

      <motion.span
        animate={!reducedMotion && isActive ? { x: [0, 3, 0] } : { x: 0 }}
        transition={!reducedMotion && isActive ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
        className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 max-sm:h-8 max-sm:w-8 sm:h-11 sm:w-11 ${
          isActive ? "bg-white/20 group-hover:bg-white/30" : "border"
        }`}
        style={
          isActive
            ? undefined
            : {
                borderColor: hexToRgba(product.color, 0.25),
                background: hexToRgba(product.color, 0.08),
                color: product.color,
              }
        }
      >
        {isActive && !reducedMotion && (
          <motion.span
            className="absolute inset-0 rounded-full border border-white/40"
            animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <ArrowRight size={16} className={`max-sm:h-3.5 max-sm:w-3.5 ${isActive ? "text-white" : ""}`} style={isActive ? undefined : { color: product.color }} />
      </motion.span>
    </motion.button>
  );
}

function HeroProductHub({ onSelectProduct }: { onSelectProduct: (productId: string) => void }) {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [connectorLines, setConnectorLines] = useState<ConnectorLine[]>([]);
  const [bubbleAnchorY, setBubbleAnchorY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const connectorRafRef = useRef<number | null>(null);

  const updateBubbleAnchor = useCallback(() => {
    const hub = hubRef.current;
    if (!hub) return;

    const img = hub.querySelector("img");
    if (!img) return;

    const hubRect = hub.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();
    const headTopRatio = BUBBLE_HEAD_TOP_RATIO;

    setBubbleAnchorY(
      imgRect.top - hubRect.top + imgRect.height * headTopRatio - BUBBLE_GAP_PX,
    );
  }, []);

  const updateConnectorLines = useCallback(() => {
    const container = containerRef.current;
    const hub = hubRef.current;
    if (!container || !hub) return;

    const containerRect = container.getBoundingClientRect();
    const hubRect = hub.getBoundingClientRect();
    const img = hub.querySelector("img");
    const anchorRect = img?.getBoundingClientRect() ?? hubRect;
    const imgLeft = anchorRect.left - containerRect.left;
    const imgTop = anchorRect.top - containerRect.top;
    const botCenterX = imgLeft + anchorRect.width * ((BOT_BOUNDS.left + BOT_BOUNDS.right) / 2);
    const botCenterY = imgTop + anchorRect.height * ((BOT_BOUNDS.top + BOT_BOUNDS.bottom) / 2);
    const botRadiusX = anchorRect.width * ((BOT_BOUNDS.right - BOT_BOUNDS.left) / 2);
    const botRadiusY = anchorRect.height * ((BOT_BOUNDS.bottom - BOT_BOUNDS.top) / 2);

    const nextLines = productsData
      .map((product, i) => {
        const card = cardRefs.current[i];
        if (!card) return null;

        const icon = card.querySelector<HTMLElement>("[data-hub-icon]");
        const targetRect = icon?.getBoundingClientRect() ?? card.getBoundingClientRect();
        const endX = targetRect.left - containerRect.left;
        const endY = targetRect.top + targetRect.height / 2 - containerRect.top;

        const angle = Math.atan2(endY - botCenterY, endX - botCenterX);
        const startX = botCenterX + botRadiusX * Math.cos(angle) * LINE_ORIGIN_INSET;
        const startY = botCenterY + botRadiusY * Math.sin(angle) * LINE_ORIGIN_INSET;

        const dx = endX - startX;
        const bend = Math.max(24, Math.abs(dx) * 0.35);

        return {
          d: `M ${startX} ${startY} C ${startX + bend} ${startY}, ${endX - bend} ${endY}, ${endX} ${endY}`,
          color: product.color,
          startX,
          startY,
          endX,
          endY,
        };
      })
      .filter((line): line is ConnectorLine => line !== null);

    setConnectorLines(nextLines);
    updateBubbleAnchor();
  }, [updateBubbleAnchor]);

  const scheduleConnectorUpdate = useCallback(() => {
    if (connectorRafRef.current !== null) {
      cancelAnimationFrame(connectorRafRef.current);
    }
    connectorRafRef.current = requestAnimationFrame(() => {
      connectorRafRef.current = null;
      updateConnectorLines();
    });
  }, [updateConnectorLines]);

  useEffect(() => {
    if (isMobile) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % productsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isMobile]);

  useEffect(() => {
    scheduleConnectorUpdate();

    window.addEventListener("resize", scheduleConnectorUpdate, { passive: true });

    const observer = new ResizeObserver(scheduleConnectorUpdate);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (connectorRafRef.current !== null) cancelAnimationFrame(connectorRafRef.current);
      window.removeEventListener("resize", scheduleConnectorUpdate);
      observer.disconnect();
    };
  }, [scheduleConnectorUpdate, activeIndex]);

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-[800px] max-sm:min-w-0 lg:max-w-[900px]">
      <HubConnectorLines lines={connectorLines} activeIndex={activeIndex} />

      <div className="relative flex items-center max-sm:min-w-0">
        {/* Central hub — bot mascot */}
        <div className="relative z-40 flex shrink-0 flex-col items-center overflow-visible max-sm:w-[150px] sm:w-[330px] lg:w-[380px]">
          <div
            ref={hubRef}
            className="relative isolate flex h-[330px] w-[330px] items-center justify-center overflow-visible max-sm:h-[150px] max-sm:w-[150px] sm:h-[330px] sm:w-[330px] lg:h-[380px] lg:w-[380px]"
          >
            <div
              className="pointer-events-none absolute bottom-[14%] left-1/2 z-0 h-[42%] w-[82%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(242,13,20,0.28)_0%,rgba(242,13,20,0.1)_42%,transparent_72%)] max-sm:bottom-[18%] max-sm:h-[38%] max-sm:w-[88%]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-[11%] left-1/2 z-0 h-2 w-[48%] -translate-x-1/2 rounded-[100%] bg-foreground/10 blur-md max-sm:bottom-[14%] max-sm:h-1.5 max-sm:w-[52%] dark:bg-black/45"
              aria-hidden
            />

            <Image
              src={BOT_IMAGE}
              alt="Echo AI Assistant"
              width={480}
              height={480}
              sizes="(max-width: 640px) 150px, (max-width: 1024px) 330px, 380px"
              quality={70}
              className="relative z-[1] h-full w-full object-contain drop-shadow-[0_16px_48px_rgba(242,13,20,0.25)]"
              priority
              fetchPriority="high"
              onLoad={scheduleConnectorUpdate}
            />

            <div
              className="pointer-events-none absolute left-1/2 z-[100] w-[min(240px,calc(100vw-3rem))] max-sm:w-[min(168px,calc(100vw-2rem))]"
              style={{ top: bubbleAnchorY, transform: "translate(-50%, -100%)" }}
            >
              <BotGuideBubble activeProduct={productsData[activeIndex]} />
            </div>
          </div>

          <div className="pointer-events-none mt-2 flex flex-col items-center gap-0.5 max-sm:mt-1.5 sm:mt-3">
            <span className="text-xs font-bold tracking-[0.06em] text-foreground/90 sm:text-sm">Echo</span>
            <span className="text-[9px] font-semibold tracking-[0.16em] text-foreground/40 uppercase sm:text-[10px]">
              AI Assistant
            </span>
          </div>
        </div>

        {/* Space between hub and cards */}
        <div className="w-16 shrink-0 max-sm:w-2 sm:w-16 md:w-20 lg:w-24" aria-hidden />

        {/* Product cards */}
        <div className="relative z-10 flex flex-1 flex-col gap-5 max-sm:min-w-0 max-sm:gap-2.5 sm:gap-6 md:gap-7">
          {productsData.map((product, i) => (
            <div
              key={product.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
            >
              <ProductHubCard
                product={product}
                isActive={activeIndex === i}
                delay={0.4 + i * 0.12}
                reducedMotion={isMobile}
                onClick={() => {
                  setActiveIndex(i);
                  onSelectProduct(product.id);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { openModal } = useProductModal();
  const { openCalendly } = useCalendly();

  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-x-hidden pt-24 max-sm:min-h-0 max-sm:pb-8 lg:overflow-hidden">
        <div className="pointer-events-none absolute top-[-20%] right-[-10%] -z-10 h-[700px] w-[700px] rounded-full bg-primary-red/8 blur-[140px] max-sm:h-[420px] max-sm:w-[420px] max-sm:blur-[80px] max-sm:animate-none dark:bg-primary-red/12 animate-blob" />
        <div
          className="pointer-events-none absolute bottom-[-10%] left-[-10%] -z-10 hidden h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[120px] sm:block dark:bg-purple-500/10"
          style={{ animation: "blob-move 14s ease-in-out infinite 2s" }}
        />
        <div
          className="pointer-events-none absolute top-[30%] left-[30%] -z-10 hidden h-[400px] w-[400px] rounded-full bg-blue-500/3 blur-[100px] sm:block dark:bg-blue-500/5"
          style={{ animation: "blob-move 18s ease-in-out infinite 4s" }}
        />

        <div className="pointer-events-none absolute inset-0 -z-10 dot-grid-light opacity-100 dark:dot-grid dark:opacity-100" />
        <div className="radial-spotlight pointer-events-none absolute top-0 right-0 left-0 -z-10 h-[600px]" />
        <div className="noise-overlay pointer-events-none absolute inset-0 -z-10 max-sm:hidden" />

        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="order-1 max-w-xl lg:order-none">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-2"
            >
              <span className="flex items-center gap-1.5 rounded-full border border-primary-red/20 bg-primary-red/10 px-3 py-1.5 text-xs font-semibold text-primary-red backdrop-blur-sm">
                <Zap size={11} className="fill-current" />
                AI Powered Enterprise Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em]"
            >
              <span className="whitespace-nowrap text-foreground">The AI Engine for</span>
              <br />
              <span className="gradient-text-red inline-block">Conversations,</span>{" "}
              <span className="inline-block text-foreground">Loyalty & Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 max-w-[440px] text-base leading-relaxed text-foreground/60 md:text-lg"
            >
              Echo is an AI powered platform that helps businesses engage, automate, and grow across every channel with
              intelligence that deepens with every interaction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="hidden flex-col items-start gap-4 lg:flex"
            >
              <BookCallButton onClick={openCalendly} size="lg" />
            </motion.div>
          </div>

          <div className="relative order-2 flex w-full items-center justify-center overflow-visible max-sm:min-w-0 lg:order-none">
            <HeroProductHub onSelectProduct={openModal} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="order-3 flex w-full max-w-xl flex-col items-start gap-4 lg:hidden"
          >
            <BookCallButton onClick={openCalendly} size="lg" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
