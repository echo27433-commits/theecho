"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";

export function CTA() {
  const { openCalendly } = useCalendly();
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* ── Light Mode CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="dark:hidden relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #FFF5F3 0%, #FFF0EE 50%, #FFF5F3 100%)",
            border: "1px solid rgba(229,72,59,0.12)",
            boxShadow: "0 24px 80px rgba(229,72,59,0.08)",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-1 bg-gradient-to-r from-transparent via-primary-red/40 to-transparent" />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-red/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-orange-200/40 rounded-full blur-2xl" />

          <div className="relative py-20 px-8 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-primary-red/10 border border-primary-red/20 text-primary-red text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Sparkles size={11} />
              Get started today
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-gray-900 mb-4 max-w-2xl leading-tight">
              Ready to transform your
              <br />
              customer experience?
            </h2>
            <p className="text-base text-gray-500 mb-8 max-w-md">
              Book a personalized demo call with our team today and see Echo in action.
            </p>
            <button
              onClick={openCalendly}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-red font-bold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] overflow-hidden"
            >
              Book a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* ── Dark Mode CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden dark:block relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0E1018 0%, #12080A 50%, #0A0E18 100%)",
            border: "1px solid rgba(229,72,59,0.15)",
          }}
        >
          {/* Animated background glow */}
          <div className="absolute inset-0">
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(229,72,59,0.5), rgba(168,85,247,0.5), transparent)",
              }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-red/10 blur-[80px] rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[200px] bg-purple-500/8 blur-[60px] rounded-full" />
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
          </div>

          <div className="relative py-20 px-8 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-primary-red/10 border border-primary-red/20 text-primary-red text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Sparkles size={11} />
              Let&apos;s build together
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] text-white mb-4 max-w-2xl leading-tight">
              Let&apos;s build better conversations
              <br />
              <span className="gradient-text-red">together</span>
            </h2>
            <p className="text-base text-white/50 mb-10 max-w-md">
              Book a personalized demo call with our team today.
            </p>
            <button
              onClick={openCalendly}
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #f20d14, #C0392B)",
                boxShadow: "0 8px 40px rgba(229,72,59,0.5)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              {/* Shine sweep */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)",
                  transform: "translateX(-100%)",
                  animation: "none",
                }}
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
