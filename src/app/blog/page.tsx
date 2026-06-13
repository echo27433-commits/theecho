"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Filter } from "lucide-react";
import { useState } from "react";
import { blogs, BlogCategory } from "@/data/blogs";

const categories = ["All", "Agentic AI", "Loyalty", "Omnichannel"];

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredBlogs = blogs.filter(blog => 
    activeCategory === "All" || blog.category === activeCategory
  );

  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  const remainingBlogs = filteredBlogs.slice(1);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full bg-[#06070B] text-foreground font-sans pt-32 pb-20">
        {/* Ambient Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-red/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
            >
              Echo <span className="gradient-text-red">Insights</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto"
            >
              Discover the latest strategies, trends, and thoughts on AI, omnichannel communication, and the future of customer engagement.
            </motion.p>
          </div>

          {/* Filter Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <div className="flex items-center gap-2 mr-4 text-foreground/50">
              <Filter size={18} />
              <span className="font-medium text-sm tracking-widest uppercase">Filter by</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary-red text-white shadow-[0_0_20px_rgba(229,72,59,0.3)]" 
                    : "bg-white/5 text-foreground/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredBlogs.length === 0 ? (
                <div className="text-center py-20 text-foreground/50 text-lg">
                  No articles found for "{activeCategory}".
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <span className="w-2 h-8 bg-primary-red rounded-full" /> Latest Articles
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map((blog, idx) => (
                      <Link href={`/blog/${blog.slug}`} key={blog.slug} className="block group">
                        <div className="h-full bg-card border border-[var(--border)] rounded-3xl overflow-hidden flex flex-col group-hover:border-primary-red/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,72,59,0.05)] hover:-translate-y-2">
                          <div className="h-56 relative overflow-hidden">
                            <div 
                              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                              style={{ backgroundImage: `url('${blog.heroImage}')` }}
                            />
                            <div className="absolute top-4 left-4">
                              <span className="px-3 py-1 bg-black/50 text-white text-[10px] font-bold uppercase tracking-wider rounded-full backdrop-blur-md border border-white/10">
                                {blog.category}
                              </span>
                            </div>
                          </div>
                          <div className="p-8 flex flex-col flex-1">
                            <div className="flex items-center gap-4 text-xs text-foreground/50 mb-4">
                              <div className="flex items-center gap-1.5"><Calendar size={14} /> {blog.date}</div>
                              <div className="flex items-center gap-1.5"><Clock size={14} /> {blog.readTime}</div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 leading-snug group-hover:text-primary-red transition-colors duration-300">
                              {blog.title}
                            </h3>
                            <p className="text-sm text-foreground/60 mb-6 line-clamp-3 flex-1">
                              {blog.excerpt}
                            </p>
                            <div className="mt-auto flex items-center gap-2 text-primary-red font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                              Read Article <ArrowRight size={16} />
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </main>
      <Footer />
    </>
  );
}
