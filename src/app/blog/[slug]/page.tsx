"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import ReactMarkdown from "react-markdown";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full bg-[#06070B] text-foreground font-sans" ref={containerRef}>
        
        {/* --- 1. HERO SECTION (Parallax) --- */}
        <section className="relative min-h-[70vh] flex items-end pb-20 pt-40 overflow-hidden">
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 z-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${blog.heroImage}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06070B] via-[#06070B]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#06070B]/60 to-transparent" />
          </motion.div>
          
          <div className="max-w-[900px] mx-auto px-6 w-full relative z-10">
            <Link href="/blog" className="inline-flex items-center gap-2 text-foreground/60 hover:text-white transition-colors mb-10 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
            </Link>
            
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-primary-red/20 border border-primary-red/30 text-primary-red text-xs font-bold uppercase tracking-wider rounded-full">
                  {blog.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1] text-white">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/50 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2"><User size={16} /> Echo Team</div>
                <div className="flex items-center gap-2"><Calendar size={16} /> {blog.date}</div>
                <div className="flex items-center gap-2"><Clock size={16} /> {blog.readTime}</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- 2. ARTICLE CONTENT --- */}
        <section className="py-20 relative z-10 bg-[#06070B]">
          <div className="max-w-[800px] mx-auto px-6 w-full">
            <motion.article 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }}
              className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-a:text-primary-red prose-strong:text-white prose-li:text-foreground/80"
            >
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </motion.article>
            
            {/* Share / Footer Section */}
            <motion.div 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-red/20 flex items-center justify-center text-primary-red font-bold text-xl">
                  E
                </div>
                <div>
                  <p className="font-bold text-white">Echo Team</p>
                  <p className="text-sm text-foreground/50">Exploring the future of AI and engagement.</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors font-medium text-sm border border-white/10 hover:border-white/20">
                <Share2 size={16} /> Share Article
              </button>
            </motion.div>
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
