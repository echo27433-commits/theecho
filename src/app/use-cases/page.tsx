"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCasesData } from "@/data/usecases";
import { CaseStudyButton } from "@/components/CaseStudyButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full overflow-hidden bg-background text-foreground font-sans">

        {/* --- HERO --- */}
        <section className="relative pt-[140px] pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary-red/8 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 dot-grid-light dark:dot-grid opacity-30 pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary-red/10 border border-primary-red/20 text-primary-red text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                <TrendingUp size={12} />
                Customer Success Stories
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Real Results, <span className="gradient-text-red">Real Impact</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto">
                See how leading brands across industries leverage Echo to transform customer engagement, boost loyalty, and drive measurable growth.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* --- USE CASE CARDS --- */}
        <section className="py-16 relative">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="space-y-8">
              {useCasesData.map((uc, index) => (
                <motion.div
                  key={uc.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={`/use-cases/${uc.slug}`}>
                    <div className="group relative grid grid-cols-1 items-stretch gap-0 bg-card border border-[var(--border)] rounded-[2rem] overflow-hidden hover:border-foreground/15 transition-all duration-500 cursor-pointer shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.2)] lg:grid-cols-[1fr_1.2fr]">
                      {/* Left: Image */}
                      <div className="relative h-[240px] overflow-hidden sm:h-[280px] lg:h-full lg:min-h-[280px]">
                        <div
                          className="absolute inset-0 bg-cover bg-[center_25%] transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url('${uc.heroImage}')` }}
                        />
                      </div>

                      {/* Right: Content */}
                      <div className="relative flex h-full flex-col p-6 lg:px-10 lg:py-7">
                        <div
                          className="pointer-events-none absolute inset-0 opacity-5"
                          style={{ background: `radial-gradient(circle at top left, ${uc.color}, transparent 60%)` }}
                        />

                        <div className="relative z-10 flex h-full flex-col">
                          <div className="mb-5 inline-flex w-fit rounded-xl border border-[var(--border)] bg-background px-5 py-3 dark:bg-[#12131a]">
                            <div className="flex h-9 w-[140px] items-center overflow-hidden">
                              <Image
                                src={uc.clientLogoDark}
                                alt={uc.client}
                                width={180}
                                height={56}
                                className="hidden h-[48px] w-auto max-w-none origin-left scale-[1.3] object-contain dark:block"
                              />
                              <Image
                                src={uc.clientLogo}
                                alt={uc.client}
                                width={180}
                                height={56}
                                className="h-[48px] w-auto max-w-none origin-left scale-[1.3] object-contain dark:hidden"
                              />
                            </div>
                          </div>

                          <div className="flex flex-1 flex-col justify-between gap-5">
                            <div>
                              <span
                                className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.15em]"
                                style={{ color: uc.color }}
                              >
                                {uc.industry}
                              </span>
                              <h2 className="mb-4 text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary-red md:text-3xl">
                                {uc.client}
                              </h2>

                              <div className="flex flex-wrap gap-2">
                                {uc.results.map((r, i) => (
                                  <span
                                    key={i}
                                    className="rounded-full px-3 py-1.5 text-xs font-semibold"
                                    style={{
                                      background: `${uc.color}15`,
                                      color: uc.color,
                                      border: `1px solid ${uc.color}30`,
                                    }}
                                  >
                                    {r}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="w-fit">
                              <CaseStudyButton color={uc.color} label="View Full Case Study" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
