"use client";

import { motion } from "framer-motion";
import { Sparkles, FileText } from "lucide-react";
import Link from "next/link";
import { useCasesData } from "@/data/usecases";
import { CaseStudyButton } from "@/components/CaseStudyButton";
import { ClientLogoBand } from "@/components/ClientLogoBand";

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-16 bg-background overflow-hidden">
      <div className="absolute inset-0 dot-grid-light dark:dot-grid opacity-50 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1280px] mx-auto px-6 relative"
      >
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary-red/10 border border-primary-red/20 text-primary-red text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <Sparkles size={11} />
            Customer Success
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] leading-tight mb-4">
            Proven Results with{" "}
            <span className="gradient-text-red">Real Clients</span>
          </h2>
          <p className="text-foreground/50 max-w-xl mx-auto">
            See how leading enterprises use Echo to drive measurable outcomes across engagement, loyalty, and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {useCasesData.map((uc, index) => (
            <div
              key={uc.slug}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-[var(--border)] hover:border-foreground/15 transition-all duration-500 bg-card hover:-translate-y-1 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.25)]"
            >
              <Link href={`/use-cases/${uc.slug}`} className="block">
                <div className="relative h-[220px] md:h-[240px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-[center_25%] group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${uc.heroImage}')` }}
                  />
                </div>

                <ClientLogoBand
                  client={uc.client}
                  clientLogo={uc.clientLogo}
                  clientLogoDark={uc.clientLogoDark}
                />

                {/* Content */}
                <div className="p-6 relative">
                  {/* Hover gradient */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, ${uc.color}08, transparent 60%)` }}
                  />

                  <div className="relative z-10">
                    <span className="sr-only">{uc.client}</span>
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.14em] mb-5 inline-block opacity-80"
                      style={{ color: uc.color }}
                    >
                      {uc.industry}
                    </span>

                    <div className="flex flex-col gap-2 mb-6">
                      {uc.results.slice(0, 2).map((r, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2"
                        >
                          <span 
                            className="w-1.5 h-1.5 rounded-full" 
                            style={{ backgroundColor: uc.color, boxShadow: `0 0 8px ${uc.color}` }} 
                          />
                          <span className="text-sm font-medium text-foreground/90">
                            {r}
                          </span>
                        </div>
                      ))}
                    </div>

                    <CaseStudyButton color={uc.color} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 flex justify-center">
          <CaseStudyButton
            color="#f20d14"
            label="View All Case Studies"
            href="/use-cases"
            icon={FileText}
          />
        </div>
      </motion.div>
    </section>
  );
}
