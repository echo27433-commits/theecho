"use client";

import { motion } from "framer-motion";
import { enterpriseMission } from "@/data/enterprise-ready";

export function EnterpriseMission() {
  return (
    <section className="relative border-y border-[var(--border)] bg-card/20 py-14 md:py-20">
      <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-15 dark:dot-grid" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-red/30 to-transparent" />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14 xl:gap-20"
        >
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">
              {enterpriseMission.eyebrow}
            </p>
            <blockquote className="relative border-l-[3px] border-primary-red pl-5 sm:pl-6">
              <p className="text-xl font-bold leading-snug tracking-tight text-foreground sm:text-2xl md:text-[1.75rem] md:leading-[1.35]">
                {enterpriseMission.lead}
              </p>
            </blockquote>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/55 sm:text-base md:mt-6">
              {enterpriseMission.supporting}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {enterpriseMission.focusAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl border border-[var(--border)] bg-card p-3.5 transition-colors duration-300 hover:border-primary-red/20 hover:bg-card/90 sm:p-5"
                >
                  <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red transition-transform duration-300 group-hover:scale-105 sm:mb-3 sm:h-10 sm:w-10">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <h3 className="text-xs font-bold text-foreground sm:text-sm">{area.title}</h3>
                  <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-foreground/50 sm:line-clamp-none sm:text-xs">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
