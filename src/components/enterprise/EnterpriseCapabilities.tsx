"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { enterpriseCapabilities } from "@/data/enterprise-ready";

export function EnterpriseCapabilities() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">
            Enterprise Capabilities
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Security, scale, and reliability{" "}
            <span className="gradient-text-red">built in</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {enterpriseCapabilities.map((capability, i) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-card p-6 md:p-7"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red">
                <capability.icon size={20} />
              </div>

              <h3 className="mb-2 text-lg font-bold text-foreground">{capability.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-foreground/55">{capability.description}</p>

              <ul className="mb-5 flex-1 space-y-2">
                {capability.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/70">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary-red/80" />
                    {feature}
                  </li>
                ))}
              </ul>

              <p className="border-t border-[var(--border)] pt-4 text-xs leading-relaxed text-foreground/45">
                <span className="font-semibold text-primary-red">Why it matters — </span>
                {capability.whyItMatters}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
