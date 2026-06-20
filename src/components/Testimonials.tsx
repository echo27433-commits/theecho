"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    quote:
      "Echo transformed how we connect with our community. Using WhatsApp campaigns and automated engagement journeys, we increased customer response rates by 42% and significantly improved event participation across our sustainability initiatives.",
    company: "Masdar",
    color: "#f20d14",
    logo: "/masdar_logo.png",
    logoDark: "/masdar_logo_dark.png",
  },
  {
    quote:
      "With Echo’s WhatsApp marketing and customer engagement tools, we saw a 28% increase in repeat shoppers within just three months. Campaign execution became faster, smarter, and far more personalized.",
    company: "Nesto Hypermarket",
    color: "#3B82F6",
    logo: "/nesto_logo.png",
    logoDark: "/nesto_logo_dark.png",
  },
  {
    quote:
      "Echo helped us turn WhatsApp into a high performing customer channel. From promotions to automated responses, we boosted campaign conversions by 35% while reducing customer response time by over 60%.",
    company: "Mark & Save",
    color: "#F5B800",
    logo: "/mark_save_logo.png",
    logoDark: "/mark_save_logo_dark.png",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout>(null);
  const hasSlid = useRef(false);
  const isMobile = useIsMobile();

  const go = (dir: 1 | -1) => {
    hasSlid.current = true;
    setDirection(dir);
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => go(1), 5000);
    return () => clearInterval(intervalRef.current!);
  }, []);

  const slideOffset = isMobile ? 24 : 48;

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? slideOffset : -slideOffset,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -slideOffset : slideOffset,
    }),
  };

  return (
    <section className="relative py-10 sm:py-16 bg-background overflow-hidden border-t border-[var(--border)]">
      <div className="absolute inset-0 dot-grid-light dark:dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary-red/3 dark:bg-primary-red/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 sm:mb-10"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red mb-3 sm:mb-4">
            Social Proof
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-[-0.03em]">
            What Our Clients <span className="gradient-text-red">Say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden min-h-0 flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial={hasSlid.current ? "enter" : false}
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="relative rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 bg-card border border-[var(--border)] text-center overflow-hidden">
                  {/* Background accent */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-1 rounded-b-full opacity-60"
                    style={{ background: testimonials[active].color }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl opacity-[0.03]"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${testimonials[active].color} 0%, transparent 60%)`,
                    }}
                  />

                  {/* Quote mark */}
                  <div
                    className="text-4xl sm:text-6xl font-serif leading-none mb-2 sm:mb-6 relative"
                    style={{ color: testimonials[active].color }}
                  >
                    &ldquo;
                  </div>

                  <p className="relative mb-4 sm:mb-8 text-sm sm:text-lg font-medium leading-relaxed text-foreground/80 md:text-xl">
                    {testimonials[active].quote}
                  </p>

                  <div className="relative flex flex-col items-center gap-2 sm:gap-3">
                    <div className="inline-flex rounded-lg sm:rounded-xl border border-[var(--border)] bg-background px-4 py-2.5 sm:px-6 sm:py-4 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:bg-[#12131a] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                      <div className="relative flex h-9 w-[160px] sm:h-12 sm:w-[200px] items-center justify-center overflow-hidden">
                        <Image
                          src={testimonials[active].logo}
                          alt={`${testimonials[active].company} logo`}
                          width={200}
                          height={48}
                          sizes="(max-width: 640px) 160px, 200px"
                          className="h-9 sm:h-[48px] w-auto max-w-none origin-center scale-[1.2] sm:scale-[1.35] object-contain dark:hidden"
                        />
                        <Image
                          src={testimonials[active].logoDark}
                          alt={`${testimonials[active].company} logo`}
                          width={200}
                          height={48}
                          sizes="(max-width: 640px) 160px, 200px"
                          className="hidden h-9 sm:h-[48px] w-auto max-w-none origin-center scale-[1.2] sm:scale-[1.35] object-contain dark:block"
                        />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-foreground/55">{testimonials[active].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-5 sm:mt-8">
            <button
              onClick={() => go(-1)}
              className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-foreground/5 hover:border-foreground/20 transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    hasSlid.current = true;
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? "24px" : "6px",
                    height: "6px",
                    background: i === active ? "#f20d14" : "rgba(161,161,170,0.4)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-foreground/5 hover:border-foreground/20 transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
