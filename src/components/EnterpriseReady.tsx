"use client";

import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";
import {
  enterpriseIntro,
  enterpriseHighlights,
  enterpriseCapabilities,
  enterpriseBrandLogos,
  enterpriseIntegrations,
  enterpriseCompliance,
} from "@/data/enterprise-ready";

export function EnterpriseReady() {
  return (
    <section className="relative overflow-hidden bg-[#06070B] py-24 text-white lg:py-28">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-25" />
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-red/40 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-red/6 blur-[140px]" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        {/* Header + stats */}
        <div className="mb-16 grid grid-cols-1 items-end gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-red/30 bg-primary-red/10 px-4 py-1.5 text-xs font-semibold text-primary-red">
              <Building2 size={12} />
              {enterpriseIntro.badge}
            </div>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              {enterpriseIntro.title}{" "}
              <span className="gradient-text-red">{enterpriseIntro.titleAccent}</span>
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/55 md:text-lg">{enterpriseIntro.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="grid grid-cols-3 gap-3"
          >
            {enterpriseHighlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-5 text-center backdrop-blur-sm"
              >
                <p className="text-2xl font-extrabold tracking-tight text-primary-red md:text-3xl">{item.value}</p>
                <p className="mt-1.5 text-[10px] font-medium leading-snug text-white/45 md:text-xs">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Capabilities strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {enterpriseCapabilities.map((item, i) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-300 hover:border-primary-red/30 hover:bg-white/[0.05]"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary-red/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="relative mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-red/20 bg-primary-red/10 text-primary-red">
                  <item.icon size={18} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative mb-1.5 text-sm font-bold text-white md:text-base">{item.title}</h3>
              <p className="relative text-xs leading-relaxed text-white/45 md:text-sm">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Integrations + brand logos */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
            {/* Left — integrations copy */}
            <div className="border-b border-white/8 p-7 md:p-9 lg:border-b-0 lg:border-r">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">
                Integrations ecosystem
              </p>
              <h3 className="mb-3 text-xl font-bold text-white md:text-2xl">Works with your stack</h3>
              <p className="mb-6 max-w-md text-sm leading-relaxed text-white/50">
                Sync customer data, engagement history, and conversational intelligence across CRM, commerce, and
                analytics platforms.
              </p>

              <div className="flex flex-wrap gap-2">
                {enterpriseIntegrations.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/65"
                  >
                    {name}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs font-medium text-white/35">
                <span>+ Custom APIs</span>
                <ArrowRight size={12} className="text-primary-red/70" />
                <span>Full stack connectivity</span>
              </div>
            </div>

            {/* Right — 6 brand logos */}
            <div className="p-7 md:p-9">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                Trusted by enterprise brands
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {enterpriseBrandLogos.map((brand) => (
                  <div
                    key={brand.name}
                    className="group flex h-[88px] items-center justify-center rounded-2xl border border-white/8 bg-white/[0.02] px-4 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]"
                  >
                    <img
                      src={brand.logoDark}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                      className="max-h-10 w-auto max-w-[100px] object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.06 }}
          className="mt-5 flex flex-col items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60">
              <enterpriseCompliance.icon size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white md:text-base">{enterpriseCompliance.title}</h3>
              <p className="mt-0.5 text-xs text-white/45 md:text-sm">{enterpriseCompliance.description}</p>
            </div>
          </div>
          <span className="rounded-full border border-primary-red/25 bg-primary-red/10 px-4 py-1.5 text-xs font-semibold text-primary-red">
            Audit ready · Permission based · Regional flexibility
          </span>
        </motion.div>
      </div>
    </section>
  );
}
