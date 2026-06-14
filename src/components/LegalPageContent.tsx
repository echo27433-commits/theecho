"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { DeferredFooter } from "@/components/deferred";
import type { LegalDocument } from "@/data/legal";

type LegalPageContentProps = {
  document: LegalDocument;
  alternateHref: string;
  alternateLabel: string;
};

export function LegalPageContent({ document, alternateHref, alternateLabel }: LegalPageContentProps) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-20 font-sans text-foreground">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-primary-red/[0.04] to-transparent" />

        <article className="relative z-10 mx-auto w-full max-w-[820px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">Legal</p>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {document.title} <span className="gradient-text-red">{document.titleAccent}</span>
            </h1>
            <p className="mb-3 text-sm text-foreground/45">Last updated: {document.lastUpdated}</p>
            <p className="mb-10 text-lg leading-relaxed text-foreground/60">{document.intro}</p>
          </motion.div>

          <div className="mb-12 rounded-2xl border border-[var(--border)] bg-card/60 px-5 py-4">
            <p className="text-sm text-foreground/55">
              Also see our{" "}
              <Link href={alternateHref} className="font-semibold text-primary-red transition-colors hover:text-primary-red/80">
                {alternateLabel}
              </Link>
              .
            </p>
          </div>

          <div className="space-y-10">
            {document.sections.map((section, i) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
                className="rounded-3xl border border-[var(--border)] bg-card px-6 py-8 md:px-8 md:py-9"
              >
                <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl">{section.title}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)} className="text-[1.0625rem] leading-[1.85] text-foreground/70">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-4 ml-5 list-disc space-y-2 text-foreground/70 marker:text-primary-red">
                    {section.list.map((item) => (
                      <li key={item.slice(0, 32)} className="pl-1 text-[1.0625rem] leading-[1.8]">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.section>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14 rounded-2xl border border-[var(--border)] bg-card/60 px-6 py-5 text-center"
          >
            <p className="text-sm text-foreground/55">
              Questions?{" "}
              <Link href="/contact" className="font-semibold text-primary-red transition-colors hover:text-primary-red/80">
                Contact our team
              </Link>
            </p>
          </motion.div>
        </article>
      </main>
      <DeferredFooter />
    </>
  );
}
