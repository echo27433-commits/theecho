"use client";

import Image from "next/image";
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
    width: 310,
    height: 72,
    sizes: "(max-width: 768px) 220px, 310px",
    logoClass: "w-[220px] md:w-[280px] lg:w-[310px] h-auto scale-[1.2] origin-center",
  },
  { name: "BenQ", logo: "/benq_logo.png", logoDark: "/benq_logo_dark.png" },
  { name: "Grand", logo: "/grand_logo.png", logoDark: "/grand_logo_dark.png" },
  { name: "Kenz", logo: "/kenz_logo.png", logoDark: "/kenz_logo_dark.png" },
];

const defaultLogoWidth = 140;
const defaultLogoHeight = 84;
const defaultLogoClass = "h-14 md:h-16 lg:h-[84px] w-auto";

const doubled = [...brands, ...brands];

function BrandLogo({
  brand,
  variant,
}: {
  brand: (typeof brands)[number];
  variant: "light" | "dark";
}) {
  const src = variant === "light" ? brand.logo : brand.logoDark;
  const width = "width" in brand ? brand.width : defaultLogoWidth;
  const height = "height" in brand ? brand.height : defaultLogoHeight;
  const sizes = "sizes" in brand ? brand.sizes : "84px";
  const logoClass = "logoClass" in brand ? brand.logoClass : defaultLogoClass;

  return (
    <Image
      src={src}
      alt={`${brand.name} logo`}
      width={width}
      height={height}
      sizes={sizes}
      quality={65}
      className={`${logoClass} object-contain ${variant === "light" ? "dark:hidden" : "hidden dark:block"}`}
    />
  );
}

export function Brands() {
  const ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const marqueeInView = useInView(sectionRef, { margin: "120px 0px" });

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden border-y border-[var(--border)]">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center text-[11px] text-foreground/40 font-semibold mb-12 uppercase tracking-[0.22em]"
      >
        Trusted by forward thinking organizations
      </motion.p>

      <div className="flex overflow-hidden py-2">
        <div
          className={`flex animate-marquee items-center gap-0 shrink-0 ${
            marqueeInView ? "" : "[animation-play-state:paused]"
          }`}
        >
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 group cursor-default select-none sm:px-6"
            >
              <div className="flex items-center justify-center overflow-visible transition-all duration-300 opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0">
                <BrandLogo brand={brand} variant="light" />
                <BrandLogo brand={brand} variant="dark" />
              </div>
              <div className="mx-2 h-8 w-px bg-[var(--border)] opacity-60 sm:mx-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
