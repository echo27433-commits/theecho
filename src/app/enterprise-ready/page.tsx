"use client";

import { Navbar } from "@/components/Navbar";
import { DeferredFooter, DeferredCTA } from "@/components/deferred";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { EnterpriseMission } from "@/components/enterprise/EnterpriseMission";
import { EnterpriseCapabilities } from "@/components/enterprise/EnterpriseCapabilities";
import { EnterpriseIntegrations } from "@/components/enterprise/EnterpriseIntegrations";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";
import {
  enterpriseAvailability,
  enterpriseCompliance,
} from "@/data/enterprise-ready";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function EnterpriseReadyPage() {
  const { openCalendly } = useCalendly();

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col overflow-hidden bg-background font-sans text-foreground">
        <EnterpriseHero onBookCall={openCalendly} />

        <EnterpriseMission />

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
