"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";

const PRELOADER_KEY = "echo-preloader-seen";
const MOBILE_MEDIA_QUERY = "(max-width: 768px)";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.matchMedia(MOBILE_MEDIA_QUERY).matches) {
      setIsLoading(false);
      return;
    }

    if (sessionStorage.getItem(PRELOADER_KEY)) {
      setIsLoading(false);
      return;
    }

    const hidePreloader = () => {
      window.setTimeout(() => {
        sessionStorage.setItem(PRELOADER_KEY, "1");
        setIsLoading(false);
      }, 120);
    };

    if (document.readyState === "interactive" || document.readyState === "complete") {
      hidePreloader();
    } else {
      document.addEventListener("DOMContentLoaded", hidePreloader, { once: true });
    }

    const fallback = window.setTimeout(hidePreloader, 900);

    return () => {
      document.removeEventListener("DOMContentLoaded", hidePreloader);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    lockScroll();
    return () => unlockScroll();
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background pointer-events-auto"
      >
        <motion.div
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.85, 1, 0.85],
          }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="relative mb-6 h-20 w-20"
        >
          <Image
            src="/The_Echo_Logo_v2.png"
            alt="Loading Echo..."
            fill
            priority
            sizes="80px"
            className="object-contain"
          />
        </motion.div>

        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.12,
              }}
              className="h-2 w-2 rounded-full bg-primary-red"
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
