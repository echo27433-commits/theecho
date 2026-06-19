"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Coffee, Hotel, HeartPulse, GraduationCap, Plane, Landmark, Film } from "lucide-react";

const industries = [
  { name: "Retail", icon: ShoppingBag },
  { name: "F&B", icon: Coffee },
  { name: "Hospitality", icon: Hotel },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Edtech", icon: GraduationCap },
  { name: "Travel", icon: Plane },
  { name: "Government", icon: Landmark },
  { name: "Media", icon: Film },
];

export function Industries() {
  const sectionRef = useRef<HTMLElement>(null);
  const [marqueePaused, setMarqueePaused] = useState(true);
  const doubled = [...industries, ...industries];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setMarqueePaused(!entry.isIntersecting),
      { rootMargin: "120px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 bg-[#06070B] dark:bg-[#06070B] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1280px] mx-auto px-6 relative mb-10"
      >
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-500 mb-4">
            Across every sector
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white">
            Powering Impact Across{" "}
            <span className="gradient-text-red">Industries</span>
          </h2>
        </div>
      </motion.div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden w-full max-w-[1600px] mx-auto">
        {/* Fading Edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#06070B] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#06070B] to-transparent z-10 pointer-events-none" />
        
        <div
          className={`flex animate-marquee gap-6 shrink-0 py-4 hover:[animation-play-state:paused] ${
            marqueePaused ? "[animation-play-state:paused]" : ""
          }`}
        >
          {doubled.map((industry, index) => (
            <div 
              key={`${industry.name}-${index}`}
              className="relative group w-[200px] md:w-[260px] h-[200px] md:h-[260px] rounded-[2rem] overflow-hidden shrink-0 border border-white/5 bg-[#0a0c10] hover:bg-[#0d1017] transition-all duration-500 cursor-pointer flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.4)] md:hover:-translate-y-2"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 group-hover:text-primary-red group-hover:scale-110 group-hover:bg-primary-red/10 transition-all duration-500 mb-5 border border-white/5 shadow-inner">
                <industry.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-white/80 group-hover:text-white transition-colors duration-300">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
