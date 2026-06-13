"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import ReactMarkdown from "react-markdown";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Navbar />
      <main
        className="flex min-h-screen w-full flex-col overflow-hidden bg-background font-sans text-foreground"
        ref={containerRef}
      >
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-end overflow-hidden pb-20 pt-40">
          <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${blog.heroImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-transparent" />
          </motion.div>

          <div className="relative z-10 mx-auto w-full max-w-[900px] px-6">
            <Link
              href="/blog"
              className="group mb-10 inline-flex items-center gap-2 text-foreground/60 transition-colors hover:text-foreground"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Blog
            </Link>

            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="mb-6 flex items-center gap-4">
                <span className="rounded-full border border-primary-red/30 bg-primary-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-red">
                  {blog.category}
                </span>
              </div>

              <h1 className="mb-8 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 border-t border-[var(--border)] pt-6 text-sm text-foreground/50">
                <div className="flex items-center gap-2">
                  <User size={16} /> Echo Team
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> {blog.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} /> {blog.readTime}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article */}
        <section className="relative z-10 bg-background py-20">
          <div className="mx-auto w-full max-w-[800px] px-6">
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="prose prose-neutral prose-lg max-w-none md:prose-xl dark:prose-invert prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary-red prose-strong:text-foreground prose-li:text-foreground/80"
            >
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </motion.article>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-[var(--border)] pt-10 md:flex-row"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-red/10 text-xl font-bold text-primary-red">
                  E
                </div>
                <div>
                  <p className="font-bold text-foreground">Echo Team</p>
                  <p className="text-sm text-foreground/50">Exploring the future of AI and engagement.</p>
                </div>
              </div>
              <button className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-foreground/5 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/20 hover:bg-foreground/10">
                <Share2 size={16} /> Share Article
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
