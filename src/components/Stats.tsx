"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 35,
    suffix: "%+",
    label: "Increase in Customer Retention",
    description: "AI powered loyalty and personalized engagement journeys",
  },
  {
    value: 70,
    suffix: "%+",
    label: "Customer Queries Automated",
    description: "Resolved through intelligent self service and AI workflows",
  },
  {
    value: 55,
    suffix: "%+",
    label: "Reduction in Support Costs",
    description: "Operational savings through AI routing and automation",
  },
  {
    value: 3,
    suffix: "X",
    label: "Higher Campaign Response Rates",
    description: "Across omnichannel customer engagement campaigns",
  },
];

function CountUp({ target, suffix, duration = 2000, inView }: { target: number; suffix: string; duration?: number; inView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [inView, target, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#06070B] text-white py-14 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-red/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary-red/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        className="max-w-[1280px] mx-auto px-6 relative" 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Section label */}
        <p className="text-center text-xs text-gray-500 font-semibold uppercase tracking-[0.22em] mb-14">
          Real Results. Real Impact.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center px-6 py-8 group relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div
                className="text-5xl md:text-6xl font-black tracking-[-0.04em] mb-2 tabular-nums"
                style={{
                  background: "linear-gradient(135deg, #f20d14 0%, #FF8C7A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px rgba(229,72,59,0.4))",
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>

              <div className="text-sm font-semibold text-white mb-2 leading-tight max-w-[160px] mx-auto">
                {stat.label}
              </div>
              <div className="text-xs text-gray-600 leading-relaxed max-w-[160px] mx-auto">
                {stat.description}
              </div>

              <div className="mx-auto w-8 h-0.5 bg-gradient-to-r from-transparent via-primary-red/40 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
