"use client";

import { Navbar } from "@/components/Navbar";
import { DeferredFooter, DeferredCTA } from "@/components/deferred";
import { BookCallButton } from "@/components/BookCallButton";
import { motion } from "framer-motion";
import { Bot, CheckCircle2, Bell, XCircle, ArrowRight, MessageSquare, Sparkles, Unplug, Link2 } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";
import {
  AI_PLATFORM_COLOR,
  aiPlatformHero,
  aiPlatformStats,
  agenticAI,
  onePlatform,
  aiPlatformCapabilities,
  aiPlatformBenefits,
  aiPlatformIndustries,
  aiPlatformImpact,
  aiPlatformClosing,
} from "@/data/ai-platform-product";

export default function AIPlatformProductPage() {
  const { openCalendly } = useCalendly();

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col overflow-hidden bg-background font-sans text-foreground">
        {/* Hero */}
        <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden pb-12 pt-[132px] lg:min-h-[90vh] lg:pb-16 lg:pt-[140px]">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-25 dark:dot-grid" />
          <div
            className="pointer-events-none absolute top-[10%] left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-[160px]"
            style={{ background: `${AI_PLATFORM_COLOR}14` }}
          />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] translate-x-1/4 rounded-full bg-violet-500/5 blur-[100px]" />

          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold"
                  style={{
                    borderColor: `${AI_PLATFORM_COLOR}30`,
                    background: `${AI_PLATFORM_COLOR}10`,
                    color: AI_PLATFORM_COLOR,
                  }}
                >
                  <Bot size={14} /> {aiPlatformHero.badge}
                </div>

                <h1 className="mb-5 text-4xl font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                  {aiPlatformHero.title}
                  <br />
                  <span className="gradient-text-purple">{aiPlatformHero.titleAccent}</span>
                </h1>

                <p className="mb-8 max-w-xl text-base leading-relaxed text-foreground/60 md:text-lg">
                  {aiPlatformHero.subtitle}
                </p>

                <div className="mb-10 flex flex-wrap gap-2">
                  {aiPlatformHero.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--border)] bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <BookCallButton onClick={openCalendly} size="lg" variant="purple" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div
                  className="pointer-events-none absolute -inset-4 rounded-[28px] opacity-50 blur-2xl"
                  style={{ background: `radial-gradient(ellipse at 50% 60%, ${AI_PLATFORM_COLOR}30, transparent 70%)` }}
                />
                <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-card shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
                  <div className="flex items-center gap-2 border-b border-[var(--border)] bg-foreground/[0.03] px-4 py-3">
                    <div className="flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                      <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                    </div>
                    <div className="mx-auto flex h-7 max-w-[220px] flex-1 items-center justify-center rounded-lg bg-foreground/[0.04] px-3">
                      <span className="truncate text-[11px] text-foreground/35">echo.app / ai-platform</span>
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] bg-foreground/[0.02]">
                    <img
                      src="/ai-converation.png"
                      alt="Echo AI Conversational Platform"
                      className="h-full w-full object-cover object-top"
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
                      style={{ background: `linear-gradient(to top, ${AI_PLATFORM_COLOR}18, transparent)` }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-20 lg:grid-cols-4"
            >
              {aiPlatformStats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-card px-5 py-6 transition-colors hover:border-[#A855F740] md:px-6 md:py-7"
                >
                  <div
                    className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full blur-2xl opacity-60 transition-opacity group-hover:opacity-100"
                    style={{ background: `${AI_PLATFORM_COLOR}14` }}
                  />
                  <p
                    className="relative text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]"
                    style={{ color: AI_PLATFORM_COLOR }}
                  >
                    {stat.value}
                  </p>
                  <p className="relative mt-2 text-sm font-medium leading-snug text-foreground/55">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Agentic AI comparison */}
        <section className="relative overflow-hidden border-t border-[var(--border)] py-20 lg:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${AI_PLATFORM_COLOR}10, transparent)`,
            }}
          />

          <div className="relative mx-auto max-w-[1280px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-14 max-w-3xl text-center"
            >
              <p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: AI_PLATFORM_COLOR }}
              >
                {agenticAI.eyebrow}
              </p>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {agenticAI.title}
              </h2>
              <p className="text-base leading-relaxed text-foreground/55 md:text-lg">{agenticAI.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-[var(--border)] bg-card shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.35fr]">
                {/* Traditional */}
                <div className="relative border-b border-[var(--border)] bg-foreground/[0.02] p-7 md:p-9 lg:border-b-0 lg:border-r">
                  <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_12px,rgba(255,255,255,0.015)_12px,rgba(255,255,255,0.015)_24px)]" />

                  <div className="relative">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground/35">
                        <MessageSquare size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/35">Before</p>
                        <h3 className="text-lg font-bold text-foreground/60 md:text-xl">{agenticAI.traditional.title}</h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {agenticAI.traditional.items.map((item, i) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 rounded-xl border border-foreground/[0.06] bg-background/40 px-3.5 py-3"
                        >
                          <XCircle size={14} className="mt-0.5 shrink-0 text-foreground/20" />
                          <span className="text-xs leading-snug text-foreground/45 md:text-sm">{item}</span>
                          <span className="ml-auto text-[10px] font-bold text-foreground/20">{String(i + 1).padStart(2, "0")}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Transform connector */}
                <div className="relative flex items-center justify-center border-b border-[var(--border)] bg-foreground/[0.03] px-6 py-5 lg:border-b-0 lg:flex-col lg:px-5 lg:py-0">
                  <div className="hidden h-full w-px bg-[var(--border)] lg:block" />
                  <div
                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-card shadow-[0_0_32px_rgba(168,85,247,0.25)] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                    style={{ color: AI_PLATFORM_COLOR }}
                  >
                    <ArrowRight size={20} className="lg:rotate-0 rotate-90" />
                  </div>
                  <p
                    className="ml-3 text-xs font-bold uppercase tracking-[0.18em] lg:ml-0 lg:mt-14 lg:[writing-mode:vertical-rl]"
                    style={{ color: `${AI_PLATFORM_COLOR}99` }}
                  >
                    Evolution
                  </p>
                </div>

                {/* Agentic AI */}
                <div className="relative p-7 md:p-9">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                    style={{ background: `${AI_PLATFORM_COLOR}18` }}
                  />

                  <div className="relative mb-8 flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-[0_4px_20px_rgba(168,85,247,0.4)]"
                      style={{ backgroundColor: AI_PLATFORM_COLOR }}
                    >
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <p
                        className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color: AI_PLATFORM_COLOR }}
                      >
                        After
                      </p>
                      <h3 className="text-lg font-bold text-foreground md:text-xl">{agenticAI.agentic.title}</h3>
                    </div>
                  </div>

                  <div className="relative space-y-0">
                    {agenticAI.agentic.items.map((item, i) => (
                      <div key={item.label} className="relative flex gap-4 pb-6 last:pb-0">
                        {i < agenticAI.agentic.items.length - 1 && (
                          <div
                            className="absolute left-[19px] top-10 h-[calc(100%-12px)] w-px"
                            style={{
                              background: `linear-gradient(to bottom, ${AI_PLATFORM_COLOR}60, ${AI_PLATFORM_COLOR}15)`,
                            }}
                          />
                        )}

                        <div className="relative flex shrink-0 flex-col items-center">
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-card shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                            style={{ borderColor: `${AI_PLATFORM_COLOR}50`, color: AI_PLATFORM_COLOR }}
                          >
                            <item.icon size={16} />
                          </div>
                        </div>

                        <div className="min-w-0 flex-1 pt-1.5">
                          <div className="flex items-start justify-between gap-3">
                            <p className="text-sm font-semibold leading-snug text-foreground md:text-base">{item.label}</p>
                            <span
                              className="shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em]"
                              style={{ background: `${AI_PLATFORM_COLOR}14`, color: AI_PLATFORM_COLOR }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* One platform */}
        <section className="border-t border-[var(--border)] bg-card/15 py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: AI_PLATFORM_COLOR }}
                >
                  {onePlatform.eyebrow}
                </p>
                <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {onePlatform.title}
                </h2>
                <p className="text-base leading-relaxed text-foreground/55 md:text-lg">{onePlatform.description}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {onePlatform.platformFeatures.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-card px-3 py-1.5 text-xs font-semibold text-foreground/65"
                    >
                      <CheckCircle2 size={12} style={{ color: AI_PLATFORM_COLOR }} />
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="rounded-3xl border border-[var(--border)] bg-card p-6 md:p-8"
              >
                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/45">
                  The modern customer journey
                </p>
                <ul className="space-y-3">
                  {onePlatform.journeySteps.map((step, i) => (
                    <li
                      key={step.label}
                      className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-foreground/[0.02] px-4 py-4"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                        style={{ backgroundColor: AI_PLATFORM_COLOR }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <step.icon size={18} className="shrink-0 text-foreground/40" />
                      <span className="text-sm leading-relaxed text-foreground/75 md:text-base">{step.label}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key capabilities */}
        <section className="relative overflow-hidden border-t border-[var(--border)] py-20 lg:py-28">
          <div
            className="pointer-events-none absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full blur-[120px]"
            style={{ background: `${AI_PLATFORM_COLOR}08` }}
          />

          <div className="relative mx-auto max-w-[1280px] px-6">
            <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: AI_PLATFORM_COLOR }}
                >
                  Key capabilities
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                  AI that resolves, not just replies
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-base leading-relaxed text-foreground/55 lg:text-lg"
              >
                Automate support, qualify leads, route conversations, and deliver personalized self service from one
                intelligent platform.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-5">
              {aiPlatformCapabilities.map((capability, i) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-card transition-all duration-300 hover:border-[#A855F740]"
                >
                  <div className="relative flex flex-1 flex-col p-6 md:p-7">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                        style={{ background: `${AI_PLATFORM_COLOR}14`, color: AI_PLATFORM_COLOR }}
                      >
                        <capability.icon size={22} />
                      </div>
                      <span
                        className="text-[11px] font-bold uppercase tracking-[0.2em]"
                        style={{ color: `${AI_PLATFORM_COLOR}70` }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg font-bold text-foreground md:text-xl">{capability.title}</h3>
                    <p className="mb-6 text-sm leading-relaxed text-foreground/55 md:text-[0.9375rem]">
                      {capability.description}
                    </p>

                    {capability.highlightStyle === "pill" ? (
                      <div className="mt-auto flex flex-wrap gap-2">
                        {capability.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="rounded-full border border-[var(--border)] bg-foreground/[0.03] px-3 py-1.5 text-xs font-semibold text-foreground/70 transition-colors group-hover:border-[#A855F730] group-hover:bg-[#A855F708]"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <ul className="mt-auto space-y-2">
                        {capability.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-2 text-sm text-foreground/65">
                            <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: AI_PLATFORM_COLOR }} />
                            <span className="leading-snug">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div
                    className="h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: `linear-gradient(90deg, ${AI_PLATFORM_COLOR}, transparent)` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative overflow-hidden border-t border-[var(--border)] bg-card/15 py-20 lg:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${AI_PLATFORM_COLOR}10, transparent)`,
            }}
          />

          <div className="relative mx-auto max-w-[1280px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-14 max-w-3xl text-center"
            >
              <p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: AI_PLATFORM_COLOR }}
              >
                {aiPlatformBenefits.eyebrow}
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {aiPlatformBenefits.title}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-[var(--border)] bg-card shadow-[0_24px_80px_rgba(0,0,0,0.12)]"
            >
              {/* Before — pain points strip */}
              <div className="relative border-b border-[var(--border)] bg-foreground/[0.02] px-6 py-7 md:px-9 md:py-8">
                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_14px,rgba(255,255,255,0.012)_14px,rgba(255,255,255,0.012)_28px)]" />

                <div className="relative mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground/35">
                    <Unplug size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/35">Before</p>
                    <h3 className="text-base font-bold text-foreground/65 md:text-lg">
                      {aiPlatformBenefits.fragmented.title}
                    </h3>
                  </div>
                </div>

                <div className="relative flex flex-wrap gap-2">
                  {aiPlatformBenefits.fragmented.items.map((item, idx) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-foreground/[0.08] bg-background/60 px-3.5 py-2 text-xs font-medium text-foreground/45 md:text-sm"
                    >
                      <XCircle size={12} className="shrink-0 text-foreground/25" />
                      <span>{item}</span>
                      <span className="text-[10px] font-bold text-foreground/20">{String(idx + 1).padStart(2, "0")}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Transform divider */}
              <div
                className="relative flex items-center justify-center gap-3 border-b border-[var(--border)] px-6 py-4"
                style={{
                  background: `linear-gradient(90deg, transparent, ${AI_PLATFORM_COLOR}10, transparent)`,
                }}
              >
                <span className="rounded-full border border-[var(--border)] bg-card px-3 py-1 text-xs font-semibold text-foreground/45">
                  Fragmented
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="h-px w-8 bg-foreground/15 md:w-12" />
                  <ArrowRight size={16} style={{ color: AI_PLATFORM_COLOR }} />
                  <span className="h-px w-8 bg-foreground/15 md:w-12" />
                </div>
                <span
                  className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: AI_PLATFORM_COLOR }}
                >
                  Unified
                </span>
              </div>

              {/* After — benefits bento */}
              <div className="relative p-6 md:p-9">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl"
                  style={{ background: `${AI_PLATFORM_COLOR}12` }}
                />

                <div className="relative mb-8 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-[0_4px_20px_rgba(168,85,247,0.35)]"
                    style={{ backgroundColor: AI_PLATFORM_COLOR }}
                  >
                    <Link2 size={18} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                      style={{ color: AI_PLATFORM_COLOR }}
                    >
                      After
                    </p>
                    <h3 className="text-base font-bold text-foreground md:text-lg">
                      {aiPlatformBenefits.unified.title}
                    </h3>
                  </div>
                </div>

                <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
                  {aiPlatformBenefits.unified.items.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.07 }}
                      className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-foreground/[0.02] p-5 transition-all duration-300 hover:border-[#A855F740] hover:bg-[#A855F706] ${
                        idx < 3 ? "lg:col-span-2" : "lg:col-span-3"
                      }`}
                    >
                      <div
                        className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: `${AI_PLATFORM_COLOR}20` }}
                      />

                      <div className="relative flex items-start gap-4">
                        <div className="flex shrink-0 flex-col items-center gap-2">
                          <span
                            className="text-[10px] font-bold uppercase tracking-[0.16em]"
                            style={{ color: `${AI_PLATFORM_COLOR}80` }}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <div
                            className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                            style={{ background: `${AI_PLATFORM_COLOR}14`, color: AI_PLATFORM_COLOR }}
                          >
                            <item.icon size={20} />
                          </div>
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <h4 className="mb-1.5 text-base font-bold leading-snug text-foreground">{item.title}</h4>
                          <p className="text-sm leading-relaxed text-foreground/55">{item.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section className="border-t border-[var(--border)] py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-14 max-w-2xl text-center"
            >
              <p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: AI_PLATFORM_COLOR }}
              >
                Industries
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Built for organizations that manage conversations at scale
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {aiPlatformIndustries.map((industry, i) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl border border-[var(--border)] bg-card p-6 transition-colors hover:border-[#A855F740] md:p-7"
                >
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ background: `${AI_PLATFORM_COLOR}12`, color: AI_PLATFORM_COLOR }}
                  >
                    <industry.icon size={22} />
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-foreground">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-2 text-sm text-foreground/60">
                        <Bell size={13} className="mt-1 shrink-0 text-foreground/30" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Business impact */}
        <section className="border-t border-[var(--border)] bg-card/15 py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: AI_PLATFORM_COLOR }}
                >
                  {aiPlatformImpact.eyebrow}
                </p>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {aiPlatformImpact.title}
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-foreground/55 md:text-lg">
                  {aiPlatformImpact.subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-2 gap-3 sm:gap-4"
              >
                {aiPlatformImpact.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--border)] bg-card px-4 py-5 md:px-5 md:py-6"
                  >
                    <p
                      className="text-2xl font-extrabold tracking-tight md:text-3xl"
                      style={{ color: AI_PLATFORM_COLOR }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium leading-snug text-foreground/50 md:text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-[var(--border)] py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: AI_PLATFORM_COLOR }}
                >
                  {aiPlatformClosing.eyebrow}
                </p>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {aiPlatformClosing.title}
                  <br />
                  <span className="gradient-text-purple">{aiPlatformClosing.titleAccent}</span>
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-foreground/55 md:text-lg">
                  {aiPlatformClosing.subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-card p-7 md:p-9"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl"
                  style={{ background: `${AI_PLATFORM_COLOR}14` }}
                />

                <h3 className="relative mb-6 text-xl font-bold text-foreground md:text-2xl">Why Echo</h3>
                <ul className="relative space-y-4">
                  {aiPlatformClosing.highlights.map((highlight, i) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-foreground/[0.02] px-4 py-4 md:px-5"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                        style={{ background: `${AI_PLATFORM_COLOR}12`, color: AI_PLATFORM_COLOR }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="pt-1 text-sm leading-relaxed text-foreground/70 md:text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
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
