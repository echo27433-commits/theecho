"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Plug, RefreshCw } from "lucide-react";
import { enterpriseIntegrations, integrationLogos } from "@/data/enterprise-ready";

const capabilityIcons = [Plug, Code2, RefreshCw];

export function EnterpriseIntegrations() {
  return (
    <section className="relative overflow-hidden border-y border-[var(--border)] bg-card/15 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-20 dark:dot-grid" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-primary-red/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-20">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">
              {enterpriseIntegrations.eyebrow}
            </p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              {enterpriseIntegrations.title}
            </h2>
            <p className="mb-5 text-base font-medium text-foreground/70 md:text-lg">
              {enterpriseIntegrations.subtitle}
            </p>
            <p className="mb-10 max-w-xl text-sm leading-relaxed text-foreground/55 md:text-base">
              {enterpriseIntegrations.description}
            </p>

            <div className="mb-10 flex items-start gap-5 rounded-2xl border border-[var(--border)] bg-card p-6">
              <p className="shrink-0 text-5xl font-extrabold leading-none tracking-tight text-primary-red md:text-6xl">
                3X
              </p>
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/40">
                  Why it matters
                </p>
                <p className="text-sm leading-relaxed text-foreground/60 md:text-base">
                  {enterpriseIntegrations.whyItMatters}
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {enterpriseIntegrations.highlights.map((item, i) => {
                const Icon = capabilityIcons[i] ?? Plug;
                return (
                  <li key={item.label} className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-red/10 text-primary-red">
                      <Icon size={15} strokeWidth={2} />
                    </span>
                    {item.label}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Unified logo canvas */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[680px] lg:max-w-none"
          >
            <div className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-primary-red/10 blur-3xl" />

            <div className="relative mb-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start lg:mb-5">
              {enterpriseIntegrations.stackCategories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-primary-red/40 bg-primary-red px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:px-4 sm:text-[11px]"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-card shadow-[0_32px_100px_rgba(0,0,0,0.08)] dark:shadow-[0_32px_100px_rgba(0,0,0,0.35)]">
              <div className="relative p-1">
                <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-15 dark:dot-grid" />

                <div className="relative grid grid-cols-2 divide-x divide-y divide-[var(--border)] sm:grid-cols-4">
                  {integrationLogos.map((item, i) => (
                    <motion.div
                      key={item.logo}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.12 + i * 0.04, duration: 0.5 }}
                      className="group flex min-h-[140px] items-center justify-center px-4 py-8 transition-colors duration-300 hover:bg-primary-red/[0.03] sm:min-h-[180px] sm:px-5 sm:py-10 lg:min-h-[200px]"
                    >
                      <Image
                        src={item.logo}
                        alt=""
                        aria-hidden
                        width={160}
                        height={128}
                        sizes="(max-width: 640px) 80px, 128px"
                        className="h-20 w-auto max-w-full scale-110 object-contain opacity-45 transition-opacity duration-300 group-hover:opacity-90 dark:hidden sm:h-24 sm:scale-125 lg:h-28 xl:h-32"
                      />
                      <Image
                        src={item.logoDark}
                        alt=""
                        aria-hidden
                        width={160}
                        height={128}
                        sizes="(max-width: 640px) 80px, 128px"
                        className="hidden h-20 w-auto max-w-full scale-110 object-contain opacity-45 transition-opacity duration-300 group-hover:opacity-90 dark:block sm:h-24 sm:scale-125 lg:h-28 xl:h-32"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
