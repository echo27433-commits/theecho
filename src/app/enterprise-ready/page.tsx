"use client";

import { Navbar } from "@/components/Navbar";
import { DeferredFooter, DeferredCTA } from "@/components/deferred";
import { BookCallButton } from "@/components/BookCallButton";
import { EnterpriseHeroVisual } from "@/components/enterprise/EnterpriseHeroVisual";
import { EnterpriseCapabilities } from "@/components/enterprise/EnterpriseCapabilities";
import { EnterpriseIntegrations } from "@/components/enterprise/EnterpriseIntegrations";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";
import {
  enterpriseIntro,
  enterpriseHighlights,
  enterpriseAvailability,
  enterpriseCompliance,
} from "@/data/enterprise-ready";

const ENTERPRISE_COLOR = "#f20d14";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function EnterpriseReadyPage() {
  const { openCalendly } = useCalendly();

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col overflow-hidden bg-background font-sans text-foreground">
        {/* Hero */}
        <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden pb-12 pt-[132px] lg:min-h-[92vh] lg:pb-16 lg:pt-[140px]">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-25 dark:dot-grid" />
          <div
            className="pointer-events-none absolute top-[8%] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-[180px]"
            style={{ background: `${ENTERPRISE_COLOR}12` }}
          />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] translate-x-1/4 rounded-full bg-emerald-500/5 blur-[120px]" />

          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div
                  variants={fadeUp}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold"
                  style={{
                    borderColor: `${ENTERPRISE_COLOR}30`,
                    background: `${ENTERPRISE_COLOR}10`,
                    color: ENTERPRISE_COLOR,
                  }}
                >
                  <Building2 size={12} />
                  {enterpriseIntro.badge}
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mb-5 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem]"
                >
                  {enterpriseIntro.title}
                  <br />
                  <span className="gradient-text-red">{enterpriseIntro.titleAccent}</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="mb-6 max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg">
                  {enterpriseIntro.paragraphs[0]}
                </motion.p>

                <motion.div variants={fadeUp} className="mb-8 flex flex-wrap gap-2">
                  {["Secure by design", "Multi-region", "Audit ready", "API-first"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/65"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
                  <BookCallButton onClick={openCalendly} size="lg" />
                  <Link
                    href="/use-cases"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
                  >
                    See customer stories <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>

              <EnterpriseHeroVisual />
            </div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-20"
            >
              {enterpriseHighlights.map((item) => (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-card px-5 py-6 transition-colors hover:border-primary-red/30 md:px-6 md:py-7"
                >
                  <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary-red/10 blur-2xl opacity-60 transition-opacity group-hover:opacity-100" />
                  <p className="relative text-3xl font-extrabold tracking-tight text-primary-red md:text-4xl">{item.value}</p>
                  <p className="relative mt-2 text-sm font-medium leading-snug text-foreground/55">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission statement */}
        <section className="border-y border-[var(--border)] bg-card/20 py-16 lg:py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-card p-8 md:p-12"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary-red/8 blur-3xl" />
              <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <Sparkles size={28} />
                </div>
                <p className="text-lg leading-relaxed text-foreground/65 md:text-xl md:leading-relaxed">
                  {enterpriseIntro.paragraphs[1]}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <EnterpriseCapabilities />

        {/* Availability — dark dramatic */}
        <section className="relative overflow-hidden bg-[#06070B] py-20 text-white lg:py-28">
          <div className="pointer-events-none absolute inset-0 dot-grid opacity-25" />
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-red/40 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-red/8 blur-[140px]" />

          <div className="relative mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="pointer-events-none absolute inset-0 rounded-full bg-primary-red/20 blur-3xl" />
                  <div className="relative flex h-56 w-56 items-center justify-center md:h-64 md:w-64">
                    <svg className="absolute inset-0 -rotate-90" viewBox="0 0 200 200">
                      <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
                      <motion.circle
                        cx="100"
                        cy="100"
                        r="88"
                        fill="none"
                        stroke="#f20d14"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray="553"
                        initial={{ strokeDashoffset: 553 }}
                        whileInView={{ strokeDashoffset: 5.53 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </svg>
                    <div className="text-center">
                      <p className="text-5xl font-extrabold tracking-tight text-primary-red md:text-6xl">
                        {enterpriseAvailability.value}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white/50">{enterpriseAvailability.label}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">
                  {enterpriseAvailability.eyebrow}
                </p>
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                  Always on.{" "}
                  <span className="gradient-text-red">Always reliable.</span>
                </h2>
                <p className="mb-8 max-w-lg text-base leading-relaxed text-white/55 md:text-lg">
                  {enterpriseAvailability.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Failover ready", "Real-time monitoring", "Delivery tracking", "Health dashboards"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3"
                    >
                      <CheckCircle2 size={16} className="shrink-0 text-primary-red" />
                      <span className="text-sm font-medium text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <EnterpriseIntegrations />

        {/* Compliance */}
        <section className="border-t border-[var(--border)] bg-card/25 py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-card p-8 md:p-10"
              >
                <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary-red/10 blur-3xl" />
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <enterpriseCompliance.icon size={26} />
                </div>
                <h2 className="relative mb-3 text-2xl font-extrabold text-foreground md:text-3xl">
                  {enterpriseCompliance.title}
                </h2>
                <p className="relative mb-6 text-base leading-relaxed text-foreground/55">
                  {enterpriseCompliance.description}
                </p>
                <p className="relative text-sm leading-relaxed text-foreground/50">{enterpriseCompliance.closingNote}</p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {enterpriseCompliance.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-primary-red/25 bg-primary-red/10 px-4 py-1.5 text-xs font-semibold text-primary-red"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                {enterpriseCompliance.features.map((feature, i) => (
                  <div
                    key={feature}
                    className="group flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-card p-5 transition-all duration-300 hover:border-primary-red/20 hover:bg-primary-red/[0.02]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red transition-transform group-hover:scale-110">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{feature}</p>
                      <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/35">
                        Governance · {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <DeferredCTA />
      </main>
      <DeferredFooter />
    </>
  );
}
