"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // We add a small delay after the window load event to ensure all
    // React hydration and heavy framer-motion calculations are finished
    // before we reveal the site. This completely hides the "stuck" feeling.
    const hidePreloader = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 600); // 600ms grace period for smooth hydration
    };

    if (document.readyState === "complete") {
      hidePreloader();
    } else {
      window.addEventListener("load", hidePreloader);
      return () => window.removeEventListener("load", hidePreloader);
    }
  }, []);

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#06070B] pointer-events-auto"
        >
          {/* Logo Animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1], 
              opacity: [0.8, 1, 0.8],
              filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-32 h-32 mb-8"
          >
            <Image
              src="/The_Echo_Logo_v2.png"
              alt="Loading Echo..."
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>
          
          {/* Loading Indicator Dots */}
          <div className="flex items-center gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: ["0%", "-50%", "0%"],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
                className="w-2.5 h-2.5 rounded-full bg-primary-red"
                style={{
                  boxShadow: "0 0 10px rgba(242, 13, 20, 0.5)",
                }}
              />
            ))}
          </div>
          
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-6 text-sm font-medium tracking-widest uppercase text-foreground/50"
          >
            Initializing...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
