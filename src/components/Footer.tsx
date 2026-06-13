"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useProductModal } from "@/context/ProductModalContext";

const footerLinks = {
  Products: ["Loyalty", "Omnichannel Messaging", "AI Conversational Platform"],
  Company: ["About Us", "Blog", "Careers", "Contact Us"],
  Resources: ["Documentation", "Blog", "Help Center"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

const socials = [
  {
    name: "LinkedIn",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
];

export function Footer() {
  const { openModal } = useProductModal();

  return (
    <footer className="relative bg-[#06070B] text-white overflow-hidden">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Ambient lighting */}
      <div className="absolute top-0 left-1/4 w-64 h-48 bg-primary-red/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-32 bg-purple-500/5 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-10 mb-14">
          {/* Brand column */}
          <div>
            <div className="relative mb-5 group">
              <Image
                src="/The_Echo_Logo_v2.png"
                alt="ECHO Logo"
                width={180}
                height={66}
                unoptimized={true}
                className="group-hover:scale-105 transition-transform duration-300 object-contain rounded-lg"
              />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-[220px]">
              AI powered engagement and loyalty platform for modern businesses.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  whileHover={{ y: -2, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-primary-red/10 hover:border-primary-red/20 transition-colors duration-200"
                  aria-label={s.name}
                >
                  {s.svg}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links], colIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: colIdx * 0.08 }}
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500 mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => {
                  const isProduct = category === "Products";
                  const productId = link === "Loyalty" ? "loyalty" : link === "Omnichannel Messaging" ? "omnichannel" : "ai-platform";

                  if (isProduct) {
                    return (
                      <li key={link}>
                        <button
                          onClick={() => openModal(productId)}
                          className="text-sm text-gray-500 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block text-left"
                        >
                          {link}
                        </button>
                      </li>
                    );
                  }

                  return (
                    <li key={link}>
                      <Link
                        href={link === "Contact Us" ? "/contact" : link === "About Us" ? "/about" : link === "Blog" ? "/blog" : "#"}
                        className="text-sm text-gray-500 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © 2024 The Echo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
