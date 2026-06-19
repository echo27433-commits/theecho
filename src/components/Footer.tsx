"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

import { ECHO_LOGO } from "@/lib/assets";

const productLinks = [
  { label: "Loyalty", href: "/product/loyalty" },
  { label: "AI Conversational Platform", href: "/product/ai-platform" },
  { label: "Omnichannel Messaging Suite", href: "/product/omnichannel" },
];

const footerLinks = {
  Company: ["About Us", "Home", "Product", "Use Cases", "Blog", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

const companyHrefByLabel: Record<string, string> = {
  "About Us": "/about",
  Home: "/",
  Product: "/product",
  "Use Cases": "/use-cases",
  Blog: "/blog",
  Contact: "/contact",
  "Privacy Policy": "/privacy-policy",
  "Terms of Service": "/terms-of-service",
};

const LINKEDIN_URL = "https://www.linkedin.com/company/echoproduct/?viewAsMember=true";

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Footer() {
  return (
    <footer className="relative bg-[#06070B] text-white overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Ambient lighting */}
      <div className="absolute top-0 left-1/4 w-64 h-48 bg-primary-red/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-32 bg-purple-500/5 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-14">
          {/* Brand column */}
          <div>
            <div className="relative mb-5 group">
              <Image
                src={ECHO_LOGO}
                alt="ECHO Logo"
                width={180}
                height={66}
                sizes="180px"
                className="group-hover:scale-105 transition-transform duration-300 object-contain rounded-lg"
              />
            </div>
            <p className="text-sm text-white leading-relaxed mb-6 max-w-[220px]">
              AI powered engagement and loyalty platform for modern businesses.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.04] text-white transition-colors duration-200 hover:border-primary-red/20 hover:bg-primary-red/10 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </motion.a>
            </div>
          </div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white mb-5">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product.href}>
                  <Link
                    href={product.href}
                    className="text-sm text-white hover:text-white/80 transition-colors duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], colIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (colIdx + 1) * 0.08 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href={companyHrefByLabel[link] ?? "#"}
                      className="text-sm text-white hover:text-white/80 transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Attribution */}
        <p className="mb-8 text-center text-xs italic text-white">
          Echo is developed by{" "}
          <a
            href="https://theunicorn.global/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold not-italic text-white underline underline-offset-2 transition-colors hover:text-white/80"
          >
            Unicorn
          </a>{" "}
          to power the future of customer engagement
        </p>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white">
            © 2026 The Echo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-white hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-white hover:text-white/80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
