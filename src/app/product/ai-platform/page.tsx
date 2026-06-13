"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { BookCallButton } from "@/components/BookCallButton";
import { ProductPlatformSections } from "@/components/ProductPlatformSections";
import { motion } from "framer-motion";
import { Bot, Zap, Brain, Shield, MessageCircle, Workflow, Lock } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";

const COLOR = "#A855F7";

const capabilities = [
  {
    icon: MessageCircle,
    title: "Intent Understanding",
    text: "Context-aware AI with sentiment and intent understanding built in.",
  },
  {
    icon: Workflow,
    title: "Auto-Resolution",
    text: "Automated workflows that resolve repetitive tickets instantly.",
  },
  {
    icon: Lock,
    title: "Secure Handoff",
    text: "Enterprise-grade security with seamless human escalation when needed.",
  },
];

const features = [
  {
    title: "Context-Aware AI",
    desc: "Agentic AI that understands customer intent and history to provide accurate answers.",
    icon: Brain,
  },
  {
    title: "Automated Workflows",
    desc: "Resolve repetitive support tickets instantly, freeing up human agents for complex issues.",
    icon: Zap,
  },
  {
    title: "Enterprise Grade",
    desc: "Secure, compliant, and highly scalable AI architecture built for modern businesses.",
    icon: Shield,
  },
];

export default function AIPlatformProductPage() {
  const { openCalendly } = useCalendly();

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col overflow-hidden bg-background font-sans text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-[140px] lg:pb-28">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-30 dark:dot-grid" />
          <div
            className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[150px]"
            style={{ background: `${COLOR}14` }}
          />

          <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold"
                style={{ borderColor: `${COLOR}30`, background: `${COLOR}10`, color: COLOR }}
              >
                <Bot size={14} /> AI Platform
              </div>

              <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
                Agentic AI{" "}
                <span style={{ color: COLOR }}>That Understands.</span>
              </h1>

              <p className="mb-8 max-w-lg text-lg leading-relaxed text-foreground/60">
                Deploy intelligent AI agents that resolve complex queries, deliver personalized self-service,
                and learn from every conversation securely.
              </p>

              <div
                className="mb-8 flex items-baseline gap-3 border-l-2 pl-4"
                style={{ borderColor: COLOR }}
              >
                <span className="text-3xl font-extrabold" style={{ color: COLOR }}>
                  70%+
                </span>
                <span className="text-sm text-foreground/55">Queries automated</span>
              </div>

              <BookCallButton onClick={openCalendly} size="lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop')",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <ProductPlatformSections
          color={COLOR}
          capabilityTitle="AI that resolves, not just replies"
          capabilityDesc="Go beyond rule-based chatbots. Echo's Agentic AI understands context, intent, and sentiment to resolve queries instantly, escalate seamlessly to humans, and continuously improve from every interaction."
          capabilities={capabilities}
          featuresSubtitle="Future-proof your customer experience with cutting-edge conversational AI."
          features={features}
        />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
