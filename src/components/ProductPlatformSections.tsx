"use client";

import { motion } from "framer-motion";
import type { ElementType } from "react";

export type PlatformCapability = {
  icon: ElementType;
  title: string;
  text: string;
};

export type PlatformFeature = {
  icon: ElementType;
  title: string;
  desc: string;
};

function PlatformIcon({
  icon: Icon,
  color,
  large = false,
}: {
  icon: ElementType;
  color: string;
  large?: boolean;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-xl border border-[var(--border)] ${
        large ? "h-14 w-14" : "h-11 w-11"
      }`}
      style={{ color, background: `${color}0c` }}
    >
      <Icon size={large ? 24 : 20} strokeWidth={1.75} />
    </div>
  );
}

export function ProductPlatformSections({
  color,
  capabilityTitle,
  capabilityDesc,
  capabilities,
  featuresSubtitle,
  features,
}: {
  color: string;
  capabilityTitle: string;
  capabilityDesc: string;
  capabilities: PlatformCapability[];
  featuresSubtitle: string;
  features: PlatformFeature[];
}) {
  return (
    <>
      {/* Capabilities — split layout, full width */}
      <section className="border-t border-[var(--border)] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <p
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
                style={{ color }}
              >
                Platform Capabilities
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                {capabilityTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground/60 md:text-lg">
                {capabilityDesc}
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-1">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-foreground/[0.02] p-5 md:p-6"
                >
                  <PlatformIcon icon={cap.icon} color={color} />
                  <div className="min-w-0 pt-0.5">
                    <h3 className="mb-1.5 text-base font-semibold text-foreground">{cap.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground/60">{cap.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features — 3-column full width */}
      <section className="border-t border-[var(--border)] bg-foreground/[0.015] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Platform features
              </h2>
            </div>
            <p className="max-w-md text-base text-foreground/55 md:text-right">{featuresSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col rounded-2xl border border-[var(--border)] bg-background p-6 lg:p-8"
              >
                <PlatformIcon icon={feature.icon} color={color} large />
                <h3 className="mb-3 mt-6 text-lg font-bold text-foreground">{feature.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-foreground/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
