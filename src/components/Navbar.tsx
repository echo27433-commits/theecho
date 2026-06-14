"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { useCalendly } from "@/context/CalendlyContext";
import { Menu, X, ArrowRight } from "lucide-react";
import { NavHeader } from "@/components/ui/nav-header";
import { BookCallButton } from "@/components/BookCallButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Product", href: "/product" },
  { name: "Use Cases", href: "/use-cases" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group flex min-w-0 items-center py-0.5 pl-0 pr-1 md:px-2.5 md:py-1 ${className}`}
    >
      <div className="relative flex h-[68px] max-w-[320px] items-center overflow-hidden sm:h-[76px] sm:max-w-[340px] md:h-[68px] md:max-w-none">
        <Image
          src="/The_Echo_Logo_v2.png"
          alt="ECHO Logo"
          width={440}
          height={160}
          unoptimized={true}
          className="h-[68px] w-full max-w-[320px] object-contain object-left transition-transform duration-300 group-hover:scale-105 sm:h-[76px] sm:max-w-[340px] md:h-[158px] md:max-w-none md:w-auto"
        />
      </div>
    </Link>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCalendly } = useCalendly();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleBookCall = () => {
    setMobileMenuOpen(false);
    openCalendly();
  };

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-6"
      >
        <div
          className={`mx-auto max-w-[1280px] rounded-2xl border transition-all duration-500 ${
            isScrolled
              ? "bg-background/85 backdrop-blur-xl border-[var(--border)] shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
              : "bg-background/50 backdrop-blur-md border-white/10 dark:border-white/5"
          }`}
        >
          <div className="flex h-[76px] min-w-0 items-center justify-between gap-2 overflow-hidden px-3 sm:gap-4 sm:px-5 md:h-[72px]">
            <Logo className="flex-1 md:flex-none" />

            {/* Desktop Nav */}
            <NavHeader links={navLinks} className="hidden md:flex" />

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <BookCallButton onClick={openCalendly} />
            </div>

            {/* Mobile Actions */}
            <div className="relative z-10 ml-auto flex shrink-0 items-center gap-1 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/20 bg-foreground/[0.06] text-foreground shadow-sm transition-colors hover:bg-foreground/[0.1]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 32 }}
              className="fixed top-[5.75rem] left-4 right-4 z-50 rounded-2xl border border-[var(--border)] bg-background/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-5 md:hidden"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/[0.05] transition-all"
                  >
                    {link.name}
                    <ArrowRight className="h-4 w-4 text-foreground/30" />
                  </motion.a>
                ))}
              </nav>
              <div className="mt-5 pt-5 border-t border-[var(--border)] flex justify-center">
                <BookCallButton onClick={handleBookCall} className="w-full justify-center py-2.5" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
