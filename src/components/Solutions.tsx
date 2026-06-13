"use client";

import { motion } from "framer-motion";
import { Trophy, MessageSquare, Code2, Sparkles } from "lucide-react";
import { CaseStudyButton } from "@/components/CaseStudyButton";

const solutions = [
  {
    id: "loyalty",
    title: "Loyalty",
    tagline: "Reward. Retain. Repeat.",
    description:
      "Build deep customer loyalty with personalized reward programs, engagement mechanics, and AI driven retention strategies that increase lifetime value.",
    icon: Trophy,
    color: "#f20d14",
    gradient: "from-[#f20d14]/20 to-[#FF8C7A]/5",
    features: ["Reward programs", "Automated support", "Engagement tracking"],
    href: "/product/loyalty",
  },
  {
    id: "omnichannel",
    title: "Omnichannel Messaging Suite",
    tagline: "One inbox. Every channel.",
    description:
      "Engage audiences across WhatsApp, Email, SMS, and Web with a single, unified messaging platform that eliminates silos and delays.",
    icon: MessageSquare,
    color: "#3B82F6",
    gradient: "from-[#3B82F6]/20 to-[#60A5FA]/5",
    features: ["WhatsApp & SMS", "Email automation", "Unified inbox"],
    href: "/product/omnichannel",
  },
  {
    id: "ai-platform",
    title: "AI Conversational Platform",
    tagline: "Agentic AI that understands.",
    description:
      "Deploy intelligent AI agents that resolve complex queries, deliver personalized self-service, and learn from every conversation.",
    icon: Code2,
    color: "#A855F7",
    gradient: "from-[#A855F7]/20 to-[#C084FC]/5",
    features: ["Agentic AI", "Self-service flows", "Smart routing"],
    href: "/product/ai-platform",
  },
];

export function Solutions() {
  return (
    <section id="products" className="relative py-28 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 dot-grid-light dark:dot-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-red/3 dark:bg-primary-red/5 blur-[120px] pointer-events-none rounded-full" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1280px] mx-auto px-6 relative"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-red/10 border border-primary-red/20 text-primary-red text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <Sparkles size={11} />
            Our Platform
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-4 dark:hidden">
            One Ecosystem.{" "}
            <span className="gradient-text-red">Endless Possibilities.</span>
            <span className="block text-lg font-normal text-foreground/50 mt-3 tracking-normal">
              Built for modern businesses.
            </span>
          </h2>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] leading-tight mb-4 hidden dark:block">
            One Ecosystem.{" "}
            <span className="gradient-text-aurora">Endless Possibilities.</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="flex flex-col group relative rounded-2xl p-7 bg-card dark:glass-card border border-[var(--border)] hover:border-transparent transition-all duration-500 overflow-hidden hover:-translate-y-1"
              style={{
                boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
              }}
            >
              {/* Hover gradient border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${solution.color}15, transparent 60%)`,
                  border: `1px solid ${solution.color}30`,
                }}
              />

              {/* Background gradient blob */}
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${solution.gradient} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${solution.color}15`,
                    border: `1px solid ${solution.color}30`,
                    boxShadow: `0 0 20px ${solution.color}15`,
                  }}
                >
                  <solution.icon size={22} style={{ color: solution.color }} />
                </div>
              </div>

              {/* Content */}
              <div className="relative flex flex-col flex-grow">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.12em] mb-2"
                  style={{ color: solution.color }}
                >
                  {solution.tagline}
                </p>
                <h3 className="text-xl font-bold mb-3 text-foreground">{solution.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6 flex-grow">
                  {solution.description}
                </p>

                {/* Feature chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {solution.features.map((f) => (
                    <span
                      key={f}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-foreground/5 text-foreground/60"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                <CaseStudyButton
                  color={solution.color}
                  label="Learn More"
                  href={solution.href}
                  icon={solution.icon}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
