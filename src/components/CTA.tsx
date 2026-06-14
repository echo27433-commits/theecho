"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";
import { BookCallButton } from "@/components/BookCallButton";

export function CTA() {
  const { openCalendly } = useCalendly();

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary-red/15 bg-gradient-to-br from-[#FFF5F3] via-[#FFF0EE] to-[#FFF5F3] shadow-[0_24px_80px_rgba(229,72,59,0.08)] dark:from-[#0E1018] dark:via-[#12080A] dark:to-[#0A0E18] dark:shadow-none"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-red/40 to-transparent dark:via-primary-red/50" />
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary-red/8 blur-3xl dark:bg-primary-red/10" />
            <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-orange-200/40 blur-2xl dark:bg-purple-500/8" />
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-0 dark:opacity-20" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary-red/10 blur-[80px] dark:block" />
          </div>

          <div className="relative flex flex-col items-center px-8 py-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-red/20 bg-primary-red/10 px-3 py-1.5 text-xs font-semibold text-primary-red">
              <Sparkles size={11} />
              Let&apos;s build together
            </div>
            <h2 className="mb-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.03em] text-gray-900 dark:text-white md:text-5xl">
              Let&apos;s build better conversations
              <br />
              <span className="gradient-text-red">together</span>
            </h2>
            <p className="mb-10 max-w-md text-base text-gray-500 dark:text-white/50">
              Book a personalized call with our team today.
            </p>
            <BookCallButton onClick={openCalendly} size="lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
