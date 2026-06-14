"use client";

import { Navbar } from "@/components/Navbar";
import { DeferredFooter, DeferredCTA } from "@/components/deferred";
import { BookCallButton } from "@/components/BookCallButton";
import { CaseStudyButton } from "@/components/CaseStudyButton";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";
import { productsPageData, productPageStats, productEcosystemCopy } from "@/data/products-page";
import { blogs } from "@/data/blogs";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function ProductsPage() {
  const { openCalendly } = useCalendly();

  const relatedBlogs = productsPageData
    .map((product) => {
      const blog = blogs.find((b) => b.slug === product.blogSlug);
      return blog ? { product, blog } : null;
    })
    .filter(Boolean) as { product: (typeof productsPageData)[0]; blog: (typeof blogs)[0] }[];

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col overflow-hidden bg-background font-sans text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden pb-16 pt-[140px]">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-30 dark:dot-grid" />
          <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary-red/8 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-[1280px] px-6 text-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="mx-auto max-w-4xl">
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-red/20 bg-primary-red/10 px-4 py-1.5 text-xs font-semibold text-primary-red"
              >
                <Sparkles size={12} />
                {productEcosystemCopy.badge}
              </motion.div>
              <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                {productEcosystemCopy.title}{" "}
                <span className="gradient-text-red">{productEcosystemCopy.titleAccent}</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground/60 md:text-xl">
                {productEcosystemCopy.subtitle}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
                <BookCallButton onClick={openCalendly} size="lg" />
                <Link
                  href="/use-cases"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  See customer results <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[var(--border)] py-14">
          <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-6 lg:grid-cols-4">
            {productPageStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <p className="mb-1 text-3xl font-extrabold tracking-tight text-primary-red md:text-4xl">{stat.value}</p>
                <p className="text-sm text-foreground/55">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="mx-auto max-w-[800px] px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-foreground/60 md:text-xl"
            >
              {productEcosystemCopy.mission}
            </motion.p>
          </div>
        </section>

        {/* Products — full-width sections, no cards */}
        <section className="pb-8">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-16 text-center">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">Platform Modules</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Three pillars. One connected platform.</h2>
            </div>
          </div>

          {productsPageData.map((product, index) => {
            const isReversed = index % 2 === 1;
            const Icon = product.icon;

            return (
              <motion.section
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-[var(--border)] py-20 lg:py-28"
              >
                <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
                  {/* Image column */}
                  <div className={`relative ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${product.image}')` }}
                      />
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{ background: `linear-gradient(to top, ${product.color}30, transparent 50%)` }}
                      />
                    </div>
                    <div
                      className="pointer-events-none absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-full blur-2xl lg:block"
                      style={{ background: product.color, opacity: 0.25 }}
                    />
                  </div>

                  {/* Content column */}
                  <div className={isReversed ? "lg:order-1" : "lg:order-2"}>
                    <div className="mb-6 flex items-center gap-4">
                      <span
                        className="text-5xl font-extrabold leading-none"
                        style={{ color: product.color }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-lg"
                        style={{ background: `${product.color}12` }}
                      >
                        <Icon size={20} style={{ color: product.color }} />
                      </div>
                    </div>

                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: product.color }}>
                      {product.tagline}
                    </p>
                    <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                      {product.title}
                    </h2>
                    <p className="mb-4 text-lg font-medium text-foreground/80">{product.headline}</p>
                    <p className="mb-8 max-w-lg leading-relaxed text-foreground/60">{product.longDescription}</p>

                    <div className="mb-8 flex items-baseline gap-3 border-l-2 pl-4" style={{ borderColor: product.color }}>
                      <span className="text-3xl font-extrabold" style={{ color: product.color }}>
                        {product.stat.value}
                      </span>
                      <span className="text-sm text-foreground/55">{product.stat.label}</span>
                    </div>

                    <ul className="mb-8 space-y-4">
                      {product.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3 text-sm text-foreground/75">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: product.color }} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mb-8 text-sm text-foreground/45">
                      {product.features.join(" · ")}
                    </p>

                    <CaseStudyButton
                      color={product.color}
                      label={`Explore ${product.title.split(" ")[0]}`}
                      href={product.link}
                      icon={Icon}
                    />
                  </div>
                </div>
              </motion.section>
            );
          })}
        </section>

        {/* Related insights — list layout, no cards */}
        <section className="border-t border-[var(--border)] py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="mb-12">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-red">From Echo Insights</p>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Learn more about our platform</h2>
              <p className="mt-3 max-w-xl text-foreground/55">
                Discover strategies on AI, omnichannel communication, and loyalty from the Echo blog.
              </p>
            </div>

            <div className="divide-y divide-[var(--border)]">
              {relatedBlogs.map(({ product, blog }, i) => (
                <motion.div
                  key={blog.slug}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="group flex flex-col gap-3 py-8 transition-colors sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex-1">
                      <span
                        className="mb-2 inline-block text-[10px] font-semibold uppercase tracking-wider"
                        style={{ color: product.color }}
                      >
                        {blog.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary-red md:text-xl">
                        {blog.title}
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm leading-relaxed text-foreground/55">{blog.excerpt}</p>
                    </div>
                    <span
                      className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
                      style={{ color: product.color }}
                    >
                      Read article <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 border-t border-[var(--border)] pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 transition-colors hover:text-foreground"
              >
                View all insights <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <DeferredCTA />
      </main>
      <DeferredFooter />
    </>
  );
}
