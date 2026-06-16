"use client";

import { Navbar } from "@/components/Navbar";
import { DeferredFooter, DeferredCTA } from "@/components/deferred";
import { BookCallButton } from "@/components/BookCallButton";
import { motion } from "framer-motion";
import { MessageSquare, CheckCircle2, ArrowDown, Layers, Bell } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";
import {
  OMNICHANNEL_COLOR,
  omnichannelHero,
  omnichannelStats,
  omnichannelProblem,
  omnichannelCapabilities,
  omnichannelBenefits,
  omnichannelIndustries,
  omnichannelImpact,
  omnichannelClosing,
} from "@/data/omnichannel-product";

export default function OmnichannelProductPage() {
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
            style={{ background: `${OMNICHANNEL_COLOR}14` }}
          />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] translate-x-1/4 rounded-full bg-sky-400/5 blur-[100px]" />

          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-4xl text-center"
            >
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold"
                style={{
                  borderColor: `${OMNICHANNEL_COLOR}30`,
                  background: `${OMNICHANNEL_COLOR}10`,
                  color: OMNICHANNEL_COLOR,
                }}
              >
                <MessageSquare size={14} /> {omnichannelHero.badge}
              </div>

              <h1 className="mb-5 text-4xl font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                {omnichannelHero.title}
                <br />
                <span className="gradient-text-blue">{omnichannelHero.titleAccent}</span>
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg lg:text-xl">
                {omnichannelHero.subtitle}
              </p>

              <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
                {omnichannelHero.channels.map((channel) => (
                  <span
                    key={channel}
                    className="rounded-full border border-[var(--border)] bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground/65"
                  >
                    {channel}
                  </span>
                ))}
              </div>

              <BookCallButton onClick={openCalendly} size="lg" variant="blue" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-14 w-full lg:mt-20"
            >
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {omnichannelStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-card px-5 py-6 transition-colors hover:border-[#3B82F640] md:px-6 md:py-7"
                  >
                    <div
                      className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full blur-2xl opacity-60 transition-opacity group-hover:opacity-100"
                      style={{ background: `${OMNICHANNEL_COLOR}14` }}
                    />
                    <p
                      className="relative text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem]"
                      style={{ color: OMNICHANNEL_COLOR }}
                    >
                      {stat.value}
                    </p>
                    <p className="relative mt-2 text-sm font-medium leading-snug text-foreground/55">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why omnichannel */}
        <section className="border-t border-[var(--border)] py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: OMNICHANNEL_COLOR }}
                >
                  {omnichannelProblem.eyebrow}
                </p>
                <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {omnichannelProblem.title}
                </h2>
                <p className="text-base leading-relaxed text-foreground/55 md:text-lg">{omnichannelProblem.description}</p>
                <p className="mt-6 text-base leading-relaxed text-foreground/55 md:text-lg">{omnichannelProblem.solution}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="rounded-3xl border border-[var(--border)] bg-card p-6 md:p-8"
              >
                <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-foreground/45">
                  {omnichannelProblem.journeyTitle}
                </p>
                <ul className="space-y-3">
                  {omnichannelProblem.journeySteps.map((step, i) => (
                    <li
                      key={step.label}
                      className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-foreground/[0.02] px-4 py-4"
                    >
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                        style={{ backgroundColor: OMNICHANNEL_COLOR }}
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
        <section className="relative overflow-hidden border-t border-[var(--border)] bg-card/15 py-20 lg:py-28">
          <div
            className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full blur-[120px]"
            style={{ background: `${OMNICHANNEL_COLOR}08` }}
          />

          <div className="relative mx-auto max-w-[1280px] px-6">
            <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: OMNICHANNEL_COLOR }}
                >
                  Key capabilities
                </p>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                  Every channel, one intelligent platform
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-base leading-relaxed text-foreground/55 lg:text-lg"
              >
                Whether communicating through SMS, Email, WhatsApp, RCS, Web Chat, or future digital channels, Echo
                provides a unified communication layer that eliminates silos.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {omnichannelCapabilities.map((capability, i) => {
                const isLast = i === omnichannelCapabilities.length - 1;

                return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-card transition-all duration-300 hover:border-[#3B82F640] ${
                    isLast ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <div className="relative flex flex-1 flex-col p-6 md:p-7">
                    <div>
                      <div className="mb-5 flex items-start justify-between gap-4">
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                          style={{ background: `${OMNICHANNEL_COLOR}14`, color: OMNICHANNEL_COLOR }}
                        >
                          <capability.icon size={22} />
                        </div>
                        <span
                          className="text-[11px] font-bold uppercase tracking-[0.2em]"
                          style={{ color: `${OMNICHANNEL_COLOR}70` }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="mb-2 text-lg font-bold text-foreground md:text-xl">{capability.title}</h3>
                      <p className="mb-6 text-sm leading-relaxed text-foreground/55 md:text-[0.9375rem]">
                        {capability.description}
                      </p>
                    </div>

                    {capability.highlights.length > 0 && (
                      <div className={isLast ? "mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2" : "mt-auto"}>
                        {capability.highlightStyle === "pill" ? (
                          <div className="flex flex-wrap gap-2">
                            {capability.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="rounded-full border border-[var(--border)] bg-foreground/[0.03] px-3 py-1.5 text-xs font-semibold text-foreground/70 transition-colors group-hover:border-[#3B82F630] group-hover:bg-[#3B82F608]"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        ) : isLast ? (
                          <>
                            {capability.highlights.map((highlight, idx) => (
                              <div
                                key={highlight}
                                className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-foreground/[0.02] px-4 py-4"
                              >
                                <span
                                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold"
                                  style={{ background: `${OMNICHANNEL_COLOR}12`, color: OMNICHANNEL_COLOR }}
                                >
                                  {String(idx + 1).padStart(2, "0")}
                                </span>
                                <span className="text-sm leading-snug text-foreground/65">{highlight}</span>
                              </div>
                            ))}
                          </>
                        ) : (
                          <ul className="space-y-2">
                            {capability.highlights.map((highlight) => (
                              <li key={highlight} className="flex items-start gap-2 text-sm text-foreground/65">
                                <CheckCircle2
                                  size={14}
                                  className="mt-0.5 shrink-0"
                                  style={{ color: OMNICHANNEL_COLOR }}
                                />
                                <span className="leading-snug">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>

                  <div
                    className="h-1 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: `linear-gradient(90deg, ${OMNICHANNEL_COLOR}, transparent)` }}
                  />
                </motion.div>
              );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative overflow-hidden border-t border-[var(--border)] py-20 lg:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              background: `radial-gradient(ellipse 80% 50% at 50% 100%, ${OMNICHANNEL_COLOR}10, transparent)`,
            }}
          />

          <div className="relative mx-auto max-w-[1280px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-16 max-w-3xl text-center"
            >
              <p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: OMNICHANNEL_COLOR }}
              >
                {omnichannelBenefits.eyebrow}
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {omnichannelBenefits.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Fragmented — problem panel */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl border border-dashed border-foreground/15 bg-foreground/[0.02] p-7 lg:col-span-4 lg:p-8"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-foreground/[0.04] blur-2xl" />

                <div className="relative mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.06] text-foreground/40">
                    <Layers size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground/35">Before</p>
                    <h3 className="text-lg font-bold text-foreground/70 md:text-xl">
                      {omnichannelBenefits.fragmented.title}
                    </h3>
                  </div>
                </div>

                <ul className="relative space-y-3">
                  {omnichannelBenefits.fragmented.items.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-foreground/[0.06] bg-background/50 px-4 py-3.5"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-foreground/[0.06] text-[11px] font-bold text-foreground/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-snug text-foreground/50 md:text-[0.9375rem]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Unified — benefits panel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-card p-7 lg:col-span-8 lg:p-8"
              >
                <div
                  className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full blur-3xl"
                  style={{ background: `${OMNICHANNEL_COLOR}12` }}
                />
                <div
                  className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full blur-2xl"
                  style={{ background: `${OMNICHANNEL_COLOR}08` }}
                />

                <div className="relative mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-[0_4px_20px_rgba(59,130,246,0.35)]"
                      style={{ backgroundColor: OMNICHANNEL_COLOR }}
                    >
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <p
                        className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                        style={{ color: OMNICHANNEL_COLOR }}
                      >
                        After
                      </p>
                      <h3 className="text-lg font-bold text-foreground md:text-xl">
                        {omnichannelBenefits.unified.title}
                      </h3>
                    </div>
                  </div>

                  <div className="hidden items-center gap-2 text-xs font-medium text-foreground/40 sm:flex">
                    <span className="rounded-full border border-[var(--border)] px-3 py-1">Fragmented</span>
                    <ArrowDown size={14} className="rotate-[-90deg]" style={{ color: OMNICHANNEL_COLOR }} />
                    <span
                      className="rounded-full px-3 py-1 text-white"
                      style={{ backgroundColor: OMNICHANNEL_COLOR }}
                    >
                      Unified
                    </span>
                  </div>
                </div>

                <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {omnichannelBenefits.unified.items.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                      className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-foreground/[0.02] p-5 transition-all duration-300 hover:border-[#3B82F640] hover:bg-[#3B82F606] ${
                        i === omnichannelBenefits.unified.items.length - 1 ? "sm:col-span-2 sm:max-w-md sm:justify-self-center" : ""
                      }`}
                    >
                      <div
                        className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: `${OMNICHANNEL_COLOR}18` }}
                      />

                      <div className="relative flex gap-4">
                        <div className="flex shrink-0 flex-col items-center gap-2">
                          <span
                            className="text-[10px] font-bold uppercase tracking-[0.18em]"
                            style={{ color: `${OMNICHANNEL_COLOR}99` }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div
                            className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                            style={{ background: `${OMNICHANNEL_COLOR}14`, color: OMNICHANNEL_COLOR }}
                          >
                            <item.icon size={20} />
                          </div>
                        </div>
                        <div className="min-w-0 pt-0.5">
                          <h4 className="mb-1.5 text-base font-bold text-foreground">{item.title}</h4>
                          <p className="text-sm leading-relaxed text-foreground/55">{item.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="border-t border-[var(--border)] bg-card/20 py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-14 max-w-2xl text-center"
            >
              <p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: OMNICHANNEL_COLOR }}
              >
                Industries
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Built for organizations that communicate at scale
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {omnichannelIndustries.map((industry, i) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl border border-[var(--border)] bg-card p-6 transition-colors hover:border-[#3B82F640] md:p-7"
                >
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ background: `${OMNICHANNEL_COLOR}12`, color: OMNICHANNEL_COLOR }}
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
        <section className="border-t border-[var(--border)] py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: OMNICHANNEL_COLOR }}
                >
                  {omnichannelImpact.eyebrow}
                </p>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {omnichannelImpact.title}
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-foreground/55 md:text-lg">
                  {omnichannelImpact.subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-2 gap-3 sm:gap-4"
              >
                {omnichannelImpact.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--border)] bg-card px-4 py-5 md:px-5 md:py-6"
                  >
                    <p
                      className="text-2xl font-extrabold tracking-tight md:text-3xl"
                      style={{ color: OMNICHANNEL_COLOR }}
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
        <section className="border-t border-[var(--border)] bg-card/15 py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: OMNICHANNEL_COLOR }}
                >
                  {omnichannelClosing.eyebrow}
                </p>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {omnichannelClosing.title}
                  <br />
                  <span className="gradient-text-blue">{omnichannelClosing.titleAccent}</span>
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-foreground/55 md:text-lg">
                  {omnichannelClosing.subtitle}
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
                  style={{ background: `${OMNICHANNEL_COLOR}14` }}
                />

                <h3 className="relative mb-6 text-xl font-bold text-foreground md:text-2xl">What you gain with Echo</h3>
                <ul className="relative space-y-4">
                  {omnichannelClosing.highlights.map((highlight, i) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-foreground/[0.02] px-4 py-4 md:px-5"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                        style={{ background: `${OMNICHANNEL_COLOR}12`, color: OMNICHANNEL_COLOR }}
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
