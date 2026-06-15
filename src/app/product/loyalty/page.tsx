"use client";

import { Navbar } from "@/components/Navbar";
import { DeferredFooter, DeferredCTA } from "@/components/deferred";
import { BookCallButton } from "@/components/BookCallButton";
import { LoyaltyIndustriesCarousel } from "@/components/LoyaltyIndustriesCarousel";
import { motion } from "framer-motion";
import { Trophy, CheckCircle2, Globe2 } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";
import {
  loyaltyHero,
  loyaltyValuePillars,
  loyaltyStats,
  loyaltyPartnerGroups,
  loyaltySolutions,
  loyaltyTechnology,
  loyaltyIndustries,
  loyaltyEcosystem,
} from "@/data/loyalty-product";

export default function LoyaltyProductPage() {
  const { openCalendly } = useCalendly();

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col overflow-hidden bg-background font-sans text-foreground">
        {/* Hero */}
        <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden pb-12 pt-[132px] lg:min-h-[90vh] lg:pb-16 lg:pt-[140px]">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-25 dark:dot-grid" />
          <div className="pointer-events-none absolute top-[10%] left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-primary-red/10 blur-[160px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[320px] w-[320px] translate-x-1/4 rounded-full bg-orange-500/5 blur-[100px]" />

          <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-red/25 bg-primary-red/10 px-4 py-1.5 text-xs font-semibold text-primary-red">
                <Trophy size={14} /> {loyaltyHero.badge}
              </div>

              <h1 className="mb-5 text-4xl font-extrabold leading-[1.06] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
                {loyaltyHero.title}
                <br />
                <span className="gradient-text-red">{loyaltyHero.titleAccent}</span>
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-foreground/60 md:text-lg lg:text-xl">
                {loyaltyHero.subtitle}
              </p>

              <div className="mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">
                {loyaltyHero.regions.map((region, i) => (
                  <span key={region} className="inline-flex items-center gap-3">
                    {i > 0 && <span className="hidden text-foreground/25 sm:inline">|</span>}
                    <span>{region}</span>
                  </span>
                ))}
              </div>

              <BookCallButton onClick={openCalendly} size="lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto mt-14 w-full lg:mt-20"
            >
              {/* Stats */}
              <div className="mb-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {loyaltyStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-card px-5 py-6 transition-colors hover:border-primary-red/25 md:px-6 md:py-7"
                  >
                    <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary-red/8 blur-2xl transition-opacity group-hover:opacity-100 opacity-60" />
                    <p className="relative text-3xl font-extrabold tracking-tight text-primary-red md:text-4xl lg:text-[2.75rem]">
                      {stat.value}
                    </p>
                    <p className="relative mt-2 text-sm font-medium leading-snug text-foreground/55">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Value pillars */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
                {loyaltyValuePillars.map((pillar, i) => (
                  <div
                    key={pillar.title}
                    className="group relative flex gap-5 overflow-hidden rounded-2xl border border-[var(--border)] bg-card/90 p-6 transition-all duration-300 hover:border-primary-red/20 hover:bg-card md:p-7"
                  >
                    <div
                      className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-primary-red transition-transform duration-300 group-hover:scale-y-100"
                      aria-hidden
                    />
                    <div className="flex shrink-0 flex-col items-center gap-3 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-red/70">
                        0{i + 1}
                      </span>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-red/15 bg-primary-red/10 text-primary-red transition-transform duration-300 group-hover:scale-105">
                        <pillar.icon size={24} />
                      </div>
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <h3 className="mb-2 text-lg font-bold leading-snug text-foreground">{pillar.title}</h3>
                      <p className="text-sm leading-relaxed text-foreground/55 md:text-[0.9375rem]">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-16 max-w-3xl text-center"
            >
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">
                Partners & customers
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Trusted by leading brands
                <br />
                <span className="gradient-text-red">across the ecosystem</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {loyaltyPartnerGroups.map((group, i) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="overflow-hidden rounded-3xl border border-[var(--border)] bg-card"
                >
                  <div className="flex items-center gap-4 border-b border-[var(--border)] bg-primary-red/[0.04] px-6 py-5 md:px-8">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white shadow-[0_4px_20px_rgba(242,13,20,0.35)]">
                      <group.icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground md:text-2xl">{group.title}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3 md:grid-cols-4 md:gap-4 md:p-7 lg:grid-cols-5">
                    {group.partners.map((partner) => {
                      const isMuted = partner.startsWith("and ");
                      return (
                        <div
                          key={partner}
                          className={`flex min-h-[4.5rem] items-center justify-center rounded-2xl border px-4 py-4 text-center transition-all duration-300 ${
                            isMuted
                              ? "border-dashed border-[var(--border)] bg-transparent text-sm italic text-foreground/40"
                              : "border-[var(--border)] bg-foreground/[0.02] text-sm font-semibold text-foreground/80 hover:border-primary-red/30 hover:bg-primary-red/[0.04] hover:text-foreground md:text-base"
                          }`}
                        >
                          {partner}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="border-t border-[var(--border)] bg-card/15 py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 max-w-3xl"
            >
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">
                360° loyalty solutions
              </p>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                For businesses of all sizes
              </h2>
              <p className="text-base leading-relaxed text-foreground/55 md:text-lg">
                Three powerful modules — Offer Connect, Game Point, and GiftOS — designed to launch fast, engage
                customers, and grow transaction volume.
              </p>
            </motion.div>

            <div className="space-y-6">
              {loyaltySolutions.map((solution, i) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="grid grid-cols-1 gap-8 rounded-3xl border border-[var(--border)] bg-card p-7 md:grid-cols-[auto_1fr] md:p-9 lg:gap-12"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                    <solution.icon size={28} />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary-red">
                      {solution.tagline}
                    </p>
                    <h3 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">{solution.title}</h3>
                    <p className="mb-6 max-w-3xl text-base leading-relaxed text-foreground/60">{solution.description}</p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {solution.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2.5 text-sm text-foreground/70">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary-red" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">Technology</p>
                <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                  {loyaltyTechnology.title}
                </h2>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-base leading-relaxed text-foreground/55 lg:text-lg"
              >
                {loyaltyTechnology.subtitle}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {loyaltyTechnology.advantages.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-[var(--border)] bg-card p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red">
                    <item.icon size={20} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/55">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="border-t border-[var(--border)] bg-card/20 py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">Industries</p>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Built for every sector that rewards loyalty
              </h2>
            </motion.div>

            <LoyaltyIndustriesCarousel industries={loyaltyIndustries} />
          </div>
        </section>

        {/* Global ecosystem */}
        <section className="border-t border-[var(--border)] py-20 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">
                  {loyaltyEcosystem.eyebrow}
                </p>
                <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  {loyaltyEcosystem.title}
                  <br />
                  <span className="gradient-text-red">{loyaltyEcosystem.titleAccent}</span>
                </h2>
                <p className="mb-8 max-w-xl text-base leading-relaxed text-foreground/55 md:text-lg">
                  {loyaltyEcosystem.subtitle}
                </p>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {loyaltyEcosystem.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-[var(--border)] bg-card px-4 py-5 md:px-5 md:py-6"
                    >
                      <p className="text-2xl font-extrabold tracking-tight text-primary-red md:text-3xl">{stat.value}</p>
                      <p className="mt-1 text-xs font-medium leading-snug text-foreground/50 md:text-sm">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-card p-7 md:p-9"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary-red/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-purple-500/8 blur-2xl" />

                <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <Globe2 size={26} />
                </div>

                <h3 className="relative mb-6 text-xl font-bold text-foreground md:text-2xl">Key highlights</h3>
                <ul className="relative space-y-4">
                  {loyaltyEcosystem.highlights.map((highlight, i) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-foreground/[0.02] px-4 py-4 md:px-5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-red/10 text-xs font-bold text-primary-red">
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
