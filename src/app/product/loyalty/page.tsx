"use client";

import { Navbar } from "@/components/Navbar";
import { DeferredFooter, DeferredCTA } from "@/components/deferred";
import { BookCallButton } from "@/components/BookCallButton";
import { ProductPlatformSections } from "@/components/ProductPlatformSections";
import { motion } from "framer-motion";
import { Trophy, Gift, Target, BarChart, Sparkles, Users, LineChart } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";

const COLOR = "#f20d14";

const capabilities = [
  {
    icon: Sparkles,
    title: "Smart Rewards",
    text: "AI-driven point allocation based on customer behavior and lifetime value.",
  },
  {
    icon: Users,
    title: "Retention Campaigns",
    text: "Targeted engagement campaigns for at-risk segments before they churn.",
  },
  {
    icon: LineChart,
    title: "Live Analytics",
    text: "Real-time loyalty metrics and program ROI dashboards at a glance.",
  },
];

const features = [
  {
    title: "Smart Rewards",
    desc: "AI-driven point allocation based on customer behavior and lifetime value.",
    icon: Gift,
  },
  {
    title: "Targeted Campaigns",
    desc: "Automate retention workflows specifically for segments likely to churn.",
    icon: Target,
  },
  {
    title: "Engagement Analytics",
    desc: "Real-time dashboard tracking loyalty metrics and program ROI.",
    icon: BarChart,
  },
];

export default function LoyaltyProductPage() {
  const { openCalendly } = useCalendly();

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col overflow-hidden bg-background font-sans text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden pb-20 pt-[140px] lg:pb-28">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-30 dark:dot-grid" />
          <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary-red/8 blur-[150px]" />

          <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-red/20 bg-primary-red/10 px-4 py-1.5 text-xs font-semibold text-primary-red">
                <Trophy size={14} /> Loyalty Management
              </div>

              <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
                Reward. Retain.{" "}
                <span className="gradient-text-red">Repeat.</span>
              </h1>

              <p className="mb-8 max-w-lg text-lg leading-relaxed text-foreground/60">
                Build deep customer loyalty with personalized reward programs, engagement mechanics, and AI-driven
                retention strategies that increase lifetime value.
              </p>

              <div
                className="mb-8 flex items-baseline gap-3 border-l-2 pl-4"
                style={{ borderColor: COLOR }}
              >
                <span className="text-3xl font-extrabold text-primary-red">35%+</span>
                <span className="text-sm text-foreground/55">Customer retention uplift</span>
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
                      "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <ProductPlatformSections
          color={COLOR}
          capabilityTitle="Build loyalty that lasts"
          capabilityDesc="Echo's Loyalty Platform uses predictive analytics to trigger personalized rewards and engagement campaigns at the exact moment a customer is most likely to churn or make a repeat purchase."
          capabilities={capabilities}
          featuresSubtitle="Everything you need to turn casual shoppers into brand advocates."
          features={features}
        />

        <DeferredCTA />
      </main>
      <DeferredFooter />
    </>
  );
}
