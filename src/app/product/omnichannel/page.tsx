"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { BookCallButton } from "@/components/BookCallButton";
import { ProductPlatformSections } from "@/components/ProductPlatformSections";
import { motion } from "framer-motion";
import { MessageSquare, Inbox, Smartphone, Globe, Layers, Route, ImageIcon } from "lucide-react";
import { useCalendly } from "@/context/CalendlyContext";

const COLOR = "#3B82F6";

const capabilities = [
  {
    icon: Layers,
    title: "Unified Inbox",
    text: "Manage WhatsApp, SMS, email, and web chat from one connected dashboard.",
  },
  {
    icon: Route,
    title: "Smart Routing",
    text: "Intelligent cross-channel routing to the right agent or bot instantly.",
  },
  {
    icon: ImageIcon,
    title: "Rich Campaigns",
    text: "Rich media campaigns optimized for mobile-first audiences across channels.",
  },
];

const features = [
  {
    title: "Unified Inbox",
    desc: "Manage WhatsApp, SMS, Email, and Web chat from a single intuitive dashboard.",
    icon: Inbox,
  },
  {
    title: "Seamless Routing",
    desc: "Automatically route inquiries to the right agent or bot without delay.",
    icon: Globe,
  },
  {
    title: "Mobile Optimized",
    desc: "Engage customers on the devices they use most with rich media support.",
    icon: Smartphone,
  },
];

export default function OmnichannelProductPage() {
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
                <MessageSquare size={14} /> Omnichannel Suite
              </div>

              <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
                One Inbox.{" "}
                <span style={{ color: COLOR }}>Every Channel.</span>
              </h1>

              <p className="mb-8 max-w-lg text-lg leading-relaxed text-foreground/60">
                Engage audiences across WhatsApp, Email, SMS, and Web with a single, unified messaging platform
                that eliminates silos and delays.
              </p>

              <div
                className="mb-8 flex items-baseline gap-3 border-l-2 pl-4"
                style={{ borderColor: COLOR }}
              >
                <span className="text-3xl font-extrabold" style={{ color: COLOR }}>
                  3X
                </span>
                <span className="text-sm text-foreground/55">Campaign response rates</span>
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
                      "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop')",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        <ProductPlatformSections
          color={COLOR}
          capabilityTitle="Every channel, one conversation"
          capabilityDesc="The Omnichannel Communication Suite centralizes all customer interactions across WhatsApp, SMS, email, and web chat into a single unified dashboard — so your team never loses context and customers never repeat themselves."
          capabilities={capabilities}
          featuresSubtitle="Unify your communication stack and never miss a customer inquiry."
          features={features}
        />

        <CTA />
      </main>
      <Footer />
    </>
  );
}
