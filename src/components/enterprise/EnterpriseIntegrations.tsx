"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plug } from "lucide-react";
import { enterpriseBrandLogos, enterpriseIntegrations } from "@/data/enterprise-ready";

export function EnterpriseIntegrations() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">
              {enterpriseIntegrations.eyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {enterpriseIntegrations.title}
            </h2>
            <p className="mb-4 text-base font-medium text-foreground/70">{enterpriseIntegrations.subtitle}</p>
            <p className="mb-8 max-w-lg text-sm leading-relaxed text-foreground/55 md:text-base">
              {enterpriseIntegrations.description}
            </p>

            <div className="rounded-2xl border border-primary-red/15 bg-primary-red/[0.04] px-6 py-5">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-red">Why it matters</p>
              <p className="text-sm leading-relaxed text-foreground/60">{enterpriseIntegrations.whyItMatters}</p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground/45">
              <Plug size={16} className="text-primary-red" />
              <span>Plug-and-play connectors</span>
              <ArrowRight size={14} className="text-primary-red/60" />
              <span className="text-foreground/60">Custom API support</span>
            </div>
          </motion.div>

          {/* Category grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {enterpriseIntegrations.categories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]"
              >
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-1 rounded-l-2xl transition-all duration-300 group-hover:w-1.5"
                  style={{ background: category.color }}
                />
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `${category.color}20` }}
                />

                <div className="relative mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: `${category.color}14`, color: category.color }}
                  >
                    <category.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/40">{category.name}</p>
                    <p className="text-sm font-bold text-foreground">{category.partners.length} integrations</p>
                  </div>
                </div>

                <ul className="relative space-y-2">
                  {category.partners.map((partner) => (
                    <li
                      key={partner}
                      className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-foreground/[0.02] px-3 py-2 text-sm font-medium text-foreground/75 transition-colors group-hover:border-foreground/10"
                    >
                      {partner}
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-foreground/30">Sync</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Brand logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-[var(--border)] pt-14"
        >
          <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/40">
            Trusted by enterprise brands
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {enterpriseBrandLogos.map((brand) => (
              <div
                key={brand.name}
                className="group flex h-28 items-center justify-center rounded-2xl border border-[var(--border)] bg-card px-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-red/20 hover:shadow-[0_12px_40px_rgba(242,13,20,0.08)] sm:h-32"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  className="max-h-14 w-auto max-w-[140px] object-contain opacity-60 transition-all duration-300 group-hover:opacity-100 dark:hidden sm:max-h-16 sm:max-w-[160px]"
                />
                <img
                  src={brand.logoDark}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  className="hidden max-h-14 w-auto max-w-[140px] object-contain opacity-60 transition-all duration-300 group-hover:opacity-100 dark:block sm:max-h-16 sm:max-w-[160px]"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
