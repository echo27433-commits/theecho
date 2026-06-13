"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { CaseStudyButton } from "@/components/CaseStudyButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, ChevronDown, MessageSquare, Bot, Heart, Database, Sparkles } from "lucide-react";
import { useProductModal } from "@/context/ProductModalContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop",
    alt: "Team collaborating on customer engagement strategy",
    offset: "translate-y-0",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    alt: "Professionals working together in a modern office",
    offset: "md:translate-y-8",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop",
    alt: "Business team reviewing analytics dashboard",
    offset: "md:-translate-y-6",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop",
    alt: "Customer success meeting in progress",
    offset: "translate-y-0",
  },
];

const faqs = [
  {
    question: "How does the AI conversational platform integrate?",
    answer: "Our AI platform integrates seamlessly with your existing CRM and communication channels like WhatsApp, SMS, and web chat via robust APIs, requiring minimal setup time."
  },
  {
    question: "Can I manage all my channels from one dashboard?",
    answer: "Yes, the Omnichannel Communication Suite centralizes all your customer interactions across various channels into a single, unified dashboard for your team."
  },
  {
    question: "How does the Loyalty Platform improve retention?",
    answer: "It uses predictive analytics to trigger personalized rewards and engagement campaigns at the exact moment a customer is most likely to churn or make a repeat purchase."
  },
  {
    question: "Is Echo suitable for enterprise-scale operations?",
    answer: "Absolutely. Echo is built on a highly scalable, secure infrastructure trusted by major brands in retail, hospitality, and government sectors."
  }
];



export default function About() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const { openModal } = useProductModal();

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full overflow-hidden bg-background text-foreground font-sans">
        
        {/* Hero */}
        <section className="relative pb-20 pt-[140px] lg:pb-24">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-30 dark:dot-grid" />
          <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary-red/10 blur-[150px]" />

          <div className="relative z-10 mx-auto max-w-[1280px] px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="mx-auto mb-16 max-w-4xl text-center md:mb-20"
            >
              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-red/20 bg-primary-red/10 px-4 py-1.5 text-xs font-semibold text-primary-red"
              >
                <Sparkles size={12} />
                About Echo
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl"
              >
                AI Powered Customer Engagement For{" "}
                <span className="gradient-text-red">Modern Businesses</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-foreground/60 md:text-xl"
              >
                Echo combines intelligent automation, omnichannel communication, and conversational AI into one unified platform designed to improve customer experience at scale.
              </motion.p>
              <motion.div variants={fadeUp} className="flex justify-center">
                <CaseStudyButton
                  color="#f20d14"
                  label="Get Started Today"
                  href="/contact"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-end justify-center gap-4 md:gap-5 lg:flex-nowrap lg:gap-6"
            >
              {heroImages.map((image, i) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.08, duration: 0.6 }}
                  className={`group relative aspect-[4/5] w-[42%] shrink-0 overflow-visible sm:w-[170px] md:w-[190px] lg:w-[220px] ${image.offset}`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-card shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-transform duration-500 group-hover:-translate-y-1 dark:shadow-[0_8px_30px_rgba(0,0,0,0.22)]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>


        {/* --- 3. MISSION SECTION (Side-by-side) --- */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.div variants={fadeUp} className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                  <Database size={24} />
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Intelligent Customer Engagement Built for Growth
                </motion.h2>
                <motion.p variants={fadeUp} className="text-foreground/60 text-lg mb-8 leading-relaxed">
                  Echo enables organizations to create seamless customer journeys through automation, personalization, and real time communication. Turn every customer interaction into long term value.
                </motion.p>
                <motion.ul variants={staggerContainer} className="space-y-4">
                  {[
                    "Increase customer retention",
                    "Improve engagement effortlessly",
                    "Scale communication workflows"
                  ].map((point, i) => (
                    <motion.li key={i} variants={fadeUp} className="flex items-center gap-3 bg-card border border-[var(--border)] p-4 rounded-xl">
                      <div className="text-green-400"><CheckCircle2 size={20} /></div>
                      <span className="font-semibold">{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="rounded-[40px] overflow-hidden border border-[var(--border)] h-[600px]">
                  <div className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop')" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06070B] via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 4. BENTO BOX SECTION (Core Products) --- */}
        <section className="py-24 bg-card/20 border-t border-[var(--border)]">
          <div className="max-w-[1280px] mx-auto px-6 text-center mb-16">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-primary-red font-semibold uppercase tracking-widest text-sm mb-4">Core Ecosystem</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
              Echo Is More Than A Tool; It's Your Partner In Growth
            </motion.h2>
          </div>

          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column Images */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-[300px] rounded-3xl overflow-hidden border border-[var(--border)] relative group">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop')" }} />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="h-[400px] rounded-3xl overflow-hidden border border-[var(--border)] relative group">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800&auto=format&fit=crop')" }} />
              </motion.div>
            </div>

            {/* Right Column Bento Cards */}
            <div className="flex flex-col gap-6">
              {[
                { id: "loyalty", title: "Loyalty Platform", icon: Heart, color: "text-red-400", bg: "bg-red-400/10", desc: "Build lasting relationships with intelligent reward systems and personalized retention strategies designed for your audience." },
                { id: "omnichannel", title: "Omnichannel Communication", icon: MessageSquare, color: "text-blue-400", bg: "bg-blue-400/10", desc: "Connect seamlessly across WhatsApp, SMS, Email, and social platforms from one unified, highly-efficient hub." },
                { id: "ai-platform", title: "AI Conversational Platform", icon: Bot, color: "text-purple-400", bg: "bg-purple-400/10", desc: "Automate support and sales with context-aware AI that understands, interacts, and converts customers 24/7." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.1 }} 
                  onClick={() => openModal(item.id)}
                  className="flex-1 bg-card/60 border border-[var(--border)] rounded-3xl p-8 hover:border-primary-red/30 transition-colors flex flex-col justify-center cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* --- 6. FAQ SECTION --- */}
        <section className="py-24 bg-card/30 border-t border-[var(--border)]">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="text-center mb-16">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-5xl font-bold mb-4">
                Have Any <span className="gradient-text-red">Questions?</span>
              </motion.h2>
              <p className="text-foreground/60">Find answers to common questions about our platform.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border border-[var(--border)] rounded-2xl bg-card overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-bold text-lg">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-primary-red text-white rotate-180' : 'bg-white/5 text-foreground/60'}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-foreground/60 leading-relaxed border-t border-[var(--border)] pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
