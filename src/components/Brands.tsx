"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const brands = [
  { name: "MASDAR", logo: "/masdar_logo.png", logoDark: "/masdar_logo_dark.png" },
  { name: "mark & save", logo: "/mark_save_logo.png", logoDark: "/mark_save_logo_dark.png" },
  { name: "Nesto", logo: "/nesto_logo.png", logoDark: "/nesto_logo_dark.png" },
  { name: "Europcar", logo: "/europcar_logo.png", logoDark: "/europcar_logo_dark.png" },
  {
    name: "Dubai Trade",
    logo: "/dubai_trade_logo.png",
    logoDark: "/dubai_trade_logo_dark.png",
    logoClass: "w-[220px] md:w-[280px] lg:w-[310px] h-auto scale-[1.2] origin-center",
  },
  { name: "BenQ", logo: "/benq_logo.png", logoDark: "/benq_logo_dark.png" },
];

const defaultLogoClass = "h-14 md:h-16 lg:h-[84px] w-auto";

// Double the array for seamless infinite marquee
const doubled = [...brands, ...brands, ...brands];

export function Brands() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative py-16 overflow-hidden border-y border-[var(--border)]">
      {/* Subtle gradient edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center text-[11px] text-foreground/40 font-semibold mb-12 uppercase tracking-[0.22em]"
      >
        Trusted by forward-thinking organizations
      </motion.p>

      {/* Marquee strip */}
      <div className="flex overflow-hidden py-2">
        <div className="flex animate-marquee items-center gap-0 shrink-0">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-6 px-10 group cursor-default select-none"
            >
              <div className="flex items-center justify-center overflow-visible transition-all duration-300 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className={`${"logoClass" in brand ? brand.logoClass : defaultLogoClass} object-contain dark:hidden`}
                />
                <img
                  src={brand.logoDark}
                  alt={`${brand.name} logo`}
                  className={`${"logoClass" in brand ? brand.logoClass : defaultLogoClass} object-contain hidden dark:block`}
                />
              </div>
              <div className="w-px h-8 bg-[var(--border)] mx-6 opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
