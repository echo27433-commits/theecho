"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { BookCallButton } from "@/components/BookCallButton";
import {
  enterpriseIntro,
  enterpriseHighlights,
  enterpriseTrustPillars,
  enterpriseHeroSignals,
} from "@/data/enterprise-ready";
import {
  productContainerClass,
  productDecorBlurClass,
  productHeroSectionClass,
  productHeroSubtitleClass,
  productHeroTitleClass,
  productStatCardClass,
  productStatValueClass,
} from "@/lib/product-page";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export function EnterpriseHero({ onBookCall }: { onBookCall: () => void }) {
  return (
    <section className={productHeroSectionClass}>
      <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-25 dark:dot-grid" />
      <div
        className={`${productDecorBlurClass} top-[8%] left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-primary-red/10 blur-[160px]`}
      />
      <div
        className={`${productDecorBlurClass} bottom-0 right-0 h-[320px] w-[320px] translate-x-1/4 rounded-full bg-emerald-500/5 blur-[100px]`}
      />

      <div className={productContainerClass}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-red/25 bg-primary-red/10 px-4 py-1.5 text-xs font-semibold text-primary-red"
          >
            <Building2 size={12} />
            {enterpriseIntro.badge}
          </motion.div>

          <motion.h1 variants={fadeUp} className={productHeroTitleClass}>
            {enterpriseIntro.title}
            <br />
            <span className="gradient-text-red">{enterpriseIntro.titleAccent}</span>
          </motion.h1>

          <motion.p variants={fadeUp} className={productHeroSubtitleClass}>
            {enterpriseIntro.paragraphs[0]}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
            <BookCallButton onClick={onBookCall} size="lg" />
            <Link
              href="/use-cases"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              See customer stories <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 w-full sm:mt-14 lg:mt-16"
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {enterpriseHighlights.map((item) => (
              <div
                key={item.label}
                className={`${productStatCardClass} text-center hover:border-primary-red/25 px-3 py-4 sm:px-5 sm:py-6`}
              >
                <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary-red/8 blur-2xl opacity-60 transition-opacity group-hover:opacity-100 max-md:hidden" />
                <p className={`${productStatValueClass} text-primary-red text-xl sm:text-3xl md:text-4xl`}>
                  {item.value}
                </p>
                <p className="relative mt-1.5 text-[10px] font-medium leading-snug text-foreground/55 sm:mt-2 sm:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3 lg:mt-5 lg:grid-cols-4 lg:gap-4">
            {enterpriseTrustPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-card/90 p-3.5 transition-all duration-300 hover:border-primary-red/20 hover:bg-card sm:p-5 md:p-6"
                >
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary-red/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                  <div className="relative mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red transition-transform duration-300 group-hover:scale-105 sm:mb-4 sm:h-11 sm:w-11">
                    <Icon size={18} strokeWidth={2} className="sm:h-5 sm:w-5" />
                  </div>
                  <h3 className="relative mb-1 text-xs font-bold text-foreground sm:mb-1.5 sm:text-base">
                    {pillar.title}
                  </h3>
                  <p className="relative line-clamp-3 text-[10px] leading-relaxed text-foreground/50 sm:line-clamp-none sm:text-sm">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-3 overflow-hidden rounded-2xl border border-white/8 bg-[#06070B] sm:mt-4 sm:rounded-3xl lg:mt-5"
          >
            <div className="pointer-events-none absolute inset-0 dot-grid opacity-20" />
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-red/50 to-transparent" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-red/10 blur-[100px]" />

            <div className="relative grid grid-cols-1 divide-y divide-white/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {enterpriseHeroSignals.map((signal) => (
                <div key={signal.label} className="flex flex-col items-center px-6 py-5 text-center sm:py-8">
                  {signal.label === "Systems status" ? (
                    <div className="mb-2 flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 sm:mb-3">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                        {signal.value}
                      </span>
                    </div>
                  ) : (
                    <p
                      className={`mb-1 font-extrabold leading-tight tracking-tight text-white sm:mb-2 sm:text-3xl ${
                        signal.label === "Global regions" ? "text-lg sm:text-2xl" : "text-2xl"
                      }`}
                    >
                      {signal.value}
                    </p>
                  )}
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40 sm:text-xs sm:tracking-[0.16em]">
                    {signal.label}
                  </p>
                  {signal.label === "Systems status" && (
                    <p className="mt-2 text-sm font-medium text-white/55">
                      Enterprise infrastructure monitored 24/7
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5 rounded-2xl border border-[var(--border)] bg-card/60 px-4 py-3.5 sm:mt-4 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-2 sm:px-5 sm:py-4"
          >
            {["Encrypted in transit", "Role-based access", "Real-time monitoring", "Custom API support"].map(
              (item) => (
                <span key={item} className="inline-flex items-center gap-1.5 text-[10px] font-medium text-foreground/55 sm:gap-2 sm:text-xs">
                  <CheckCircle2 size={14} className="shrink-0 text-primary-red" />
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
