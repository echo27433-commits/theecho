"use client";

import { Navbar } from "@/components/Navbar";
import { DeferredFooter, DeferredCTA } from "@/components/deferred";
import { BookCallButton } from "@/components/BookCallButton";
import { CaseStudyButton } from "@/components/CaseStudyButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";
import {
  aboutHero,
  aboutStats,
  aboutStory,
  aboutValues,
  aboutMilestones,
  aboutPillars,
  aboutIndustries,
  aboutApproach,
  aboutGlobal,
} from "@/data/about-page";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function About() {
  const { openCalendly } = useCalendly();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col overflow-hidden bg-background font-sans text-foreground">

        {/* Hero */}
        <section className="relative pb-16 pt-[140px] lg:pb-24">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-30 dark:dot-grid" />
          <div className="pointer-events-none absolute top-0 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary-red/8 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div
                  variants={fadeUp}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-red/20 bg-primary-red/10 px-4 py-1.5 text-xs font-semibold text-primary-red"
                >
                  <Sparkles size={12} />
                  {aboutHero.badge}
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl xl:text-[3.75rem]"
                >
                  {aboutHero.title}{" "}
                  <span className="gradient-text-red">{aboutHero.titleAccent}</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="mb-10 max-w-xl text-lg leading-relaxed text-foreground/60 md:text-xl">
                  {aboutHero.subtitle}
                </motion.p>
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

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-card p-8 shadow-[0_24px_80px_rgba(0,0,0,0.06)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-10">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary-red/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-purple-500/8 blur-2xl" />

                  <p className="relative mb-8 text-2xl font-bold leading-snug tracking-tight text-foreground md:text-3xl">
                    &ldquo;{aboutStory.quote.text}&rdquo;
                  </p>
                  <p className="relative mb-10 text-sm font-medium text-foreground/45">{aboutStory.quote.attribution}</p>

                  <div className="relative grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-8">
                    {aboutStats.slice(0, 2).map((stat) => (
                      <div key={stat.label}>
                        <p className="text-2xl font-extrabold tracking-tight text-primary-red md:text-3xl">{stat.value}</p>
                        <p className="mt-1 text-xs text-foreground/50">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[var(--border)] py-14">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-6 lg:grid-cols-4">
            {aboutStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="text-center"
              >
                <p className="mb-1 text-3xl font-extrabold tracking-tight text-primary-red md:text-4xl">{stat.value}</p>
                <p className="text-sm text-foreground/55">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">{aboutStory.eyebrow}</p>
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {aboutStory.title}
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-6"
              >
                {aboutStory.paragraphs.map((paragraph) => (
                  <motion.p key={paragraph.slice(0, 24)} variants={fadeUp} className="text-lg leading-relaxed text-foreground/60">
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-[var(--border)] bg-card/25 py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-14 text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">What we stand for</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Principles that guide every product decision</h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {aboutValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-[var(--border)] bg-card p-7 transition-colors hover:border-primary-red/20"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red">
                    <value.icon size={20} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/55">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-14">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">Our journey</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">From loyalty platform to full engagement stack</h2>
            </div>

            <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-4">
              {aboutMilestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative border-t border-[var(--border)] py-8 pr-6 md:border-t-0 md:border-l md:py-0 md:pl-8 md:first:border-l-0 md:first:pl-0"
                >
                  <p className="mb-3 text-3xl font-extrabold tracking-tight text-primary-red">{milestone.year}</p>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{milestone.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/55">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className="border-t border-[var(--border)] bg-card/20 py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-14 text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">What we build</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">One platform. Three engines for growth.</h2>
            </div>

            <div className="space-y-5">
              {aboutPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={pillar.href}
                    className="group flex flex-col gap-6 rounded-2xl border border-[var(--border)] bg-card p-7 transition-all hover:border-foreground/15 hover:-translate-y-0.5 md:flex-row md:items-center md:justify-between md:p-8"
                  >
                    <div className="flex items-start gap-5 md:items-center">
                      <span className="text-4xl font-extrabold leading-none" style={{ color: pillar.color }}>
                        {pillar.number}
                      </span>
                      <div>
                        <div className="mb-2 flex items-center gap-3">
                          <div
                            className="flex h-9 w-9 items-center justify-center rounded-lg"
                            style={{ background: `${pillar.color}15` }}
                          >
                            <pillar.icon size={18} style={{ color: pillar.color }} />
                          </div>
                          <h3 className="text-xl font-bold text-foreground md:text-2xl">{pillar.title}</h3>
                        </div>
                        <p className="max-w-2xl text-sm leading-relaxed text-foreground/55 md:text-base">{pillar.description}</p>
                      </div>
                    </div>
                    <span
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-colors"
                      style={{ color: pillar.color }}
                    >
                      Explore <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries + Global */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">Who we serve</p>
                <h2 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">Built for operators who run at scale</h2>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {aboutIndustries.map((industry) => (
                    <li
                      key={industry}
                      className="rounded-xl border border-[var(--border)] bg-card px-4 py-3.5 text-sm font-medium text-foreground/75"
                    >
                      {industry}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-gradient-to-br from-card via-card to-primary-red/[0.04] p-8 md:p-10"
              >
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary-red/8 blur-3xl" />
                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                    <aboutGlobal.icon size={22} />
                  </div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">{aboutGlobal.eyebrow}</p>
                  <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">{aboutGlobal.title}</h3>
                  <p className="mb-8 leading-relaxed text-foreground/55">{aboutGlobal.description}</p>
                  <CaseStudyButton color="#f20d14" label={aboutGlobal.ctaLabel} href={aboutGlobal.ctaHref} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-[var(--border)] bg-card/25 py-20 lg:py-28">
          <div className="mx-auto max-w-[800px] px-6">
            <div className="mb-12 text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">Common questions</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                The details, <span className="gradient-text-red">answered</span>
              </h2>
            </div>

            <div className="space-y-3">
              {aboutApproach.map((item, i) => (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="overflow-hidden rounded-2xl border border-[var(--border)] bg-card"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-foreground/[0.03]"
                  >
                    <span className="font-semibold text-foreground">{item.question}</span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                        openFaq === i ? "rotate-180 bg-primary-red text-white" : "bg-foreground/5 text-foreground/50"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <div className="border-t border-[var(--border)] px-6 pb-5 pt-4 text-sm leading-relaxed text-foreground/55">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <DeferredCTA />
      </main>
      <DeferredFooter />
    </>
  );
}
