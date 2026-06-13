"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const footprintCountries = [
  { name: "United Arab Emirates", short: "UAE", code: "AE", label: "Headquarters" },
  { name: "Saudi Arabia", short: "Saudi Arabia", code: "SA" },
  { name: "Bahrain", short: "Bahrain", code: "BH" },
  { name: "Qatar", short: "Qatar", code: "QA" },
  { name: "India", short: "India", code: "IN" },
];

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
        <section className="relative min-h-screen flex items-center pt-[100px] pb-24 overflow-hidden">
          {/* Animated background from Hero */}
          <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-primary-red/8 dark:bg-primary-red/12 blur-[140px] animate-blob pointer-events-none -z-10" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] pointer-events-none -z-10" style={{ animation: "blob-move 14s ease-in-out infinite 2s" }} />
          <div className="absolute inset-0 dot-grid-light dark:dot-grid opacity-100 dark:opacity-100 pointer-events-none -z-10" />
          <div className="absolute top-0 left-0 right-0 h-[600px] radial-spotlight pointer-events-none -z-10" />
          <div className="absolute inset-0 noise-overlay -z-10" />

          <div className="max-w-[1280px] mx-auto px-6 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Text + Info */}
              <div className="flex flex-col gap-10">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] mb-6">
                    Get in <span className="gradient-text-red">Touch</span>
                  </h1>
                  <p className="text-lg text-foreground/60 max-w-xl">
                    We're here to help. Reach out to us for any inquiries, partnerships, or support.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Office spans 2 columns */}
                  <div className="bg-card border border-[var(--border)] rounded-2xl p-6 relative group overflow-hidden sm:col-span-2">
                    <div className="absolute inset-0 bg-primary-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-10 h-10 rounded-xl bg-primary-red/10 text-primary-red flex items-center justify-center mb-4">
                      <MapPin size={20} />
                    </div>
                    <h3 className="text-lg font-bold mb-1">Office</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Unicorn Worldwide Marketing Services FZ LLC<br />
                      Ontario Tower, C1801, Business Bay, Dubai, UAE
                    </p>
                  </div>

                  {/* Email */}
                  <div className="bg-card border border-[var(--border)] rounded-2xl p-6 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-primary-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-10 h-10 rounded-xl bg-primary-red/10 text-primary-red flex items-center justify-center mb-4">
                      <Mail size={20} />
                    </div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <a href="mailto:hello@theecho.global" className="text-foreground/70 text-sm hover:text-primary-red transition-colors block">
                      hello@theecho.global
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="bg-card border border-[var(--border)] rounded-2xl p-6 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-primary-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-10 h-10 rounded-xl bg-primary-red/10 text-primary-red flex items-center justify-center mb-4">
                      <Phone size={20} />
                    </div>
                    <h3 className="text-lg font-bold mb-1">Phone & WhatsApp</h3>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+971585686912" className="text-foreground/70 text-sm hover:text-primary-red transition-colors block">
                        +97158 5686912
                      </a>
                      <a href="https://wa.me/971585686912" target="_blank" rel="noopener noreferrer" className="text-foreground/70 text-sm hover:text-green-500 transition-colors block">
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="bg-card border border-[var(--border)] rounded-2xl p-6 relative group overflow-hidden sm:col-span-2">
                    <div className="absolute inset-0 bg-primary-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-10 h-10 rounded-xl bg-primary-red/10 text-primary-red flex items-center justify-center mb-4">
                      <LinkedinIcon size={20} />
                    </div>
                    <h3 className="text-lg font-bold mb-1">Social</h3>
                    <a href="https://www.linkedin.com/company/echoproduct/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-foreground/70 text-sm hover:text-primary-red transition-colors block">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Form + Map */}
              <div className="flex flex-col gap-6">
                
                {/* Contact Form */}
                <div className="bg-card border border-[var(--border)] rounded-3xl p-8 relative overflow-hidden shadow-2xl">
                  {/* Subtle glow behind form */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary-red/5 rounded-full blur-[60px] pointer-events-none" />
                  
                  <h3 className="text-2xl font-bold mb-6 relative z-10">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-foreground/80" htmlFor="name">Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="John Doe" 
                          className="px-4 py-3 rounded-xl bg-background border border-[var(--border)] focus:border-primary-red/50 focus:ring-2 focus:ring-primary-red/20 outline-none transition-all text-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-medium text-foreground/80" htmlFor="email">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="john@example.com" 
                          className="px-4 py-3 rounded-xl bg-background border border-[var(--border)] focus:border-primary-red/50 focus:ring-2 focus:ring-primary-red/20 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-foreground/80" htmlFor="subject">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        placeholder="How can we help?" 
                        className="px-4 py-3 rounded-xl bg-background border border-[var(--border)] focus:border-primary-red/50 focus:ring-2 focus:ring-primary-red/20 outline-none transition-all text-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-sm font-medium text-foreground/80" htmlFor="message">Message</label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Tell us about your project..." 
                        className="px-4 py-3 rounded-xl bg-background border border-[var(--border)] focus:border-primary-red/50 focus:ring-2 focus:ring-primary-red/20 outline-none transition-all text-sm resize-none"
                      ></textarea>
                    </div>
                    
                    {status === "success" && (
                      <p className="text-sm text-green-500 font-medium">Message sent successfully!</p>
                    )}
                    {status === "error" && (
                      <p className="text-sm text-red-500 font-medium">Failed to send message. Please try again later.</p>
                    )}

                    <button 
                      type="submit" 
                      disabled={loading}
                      className="mt-2 w-full py-4 rounded-xl bg-primary-red text-white font-semibold shadow-[0_4px_24px_rgba(229,72,59,0.4)] hover:shadow-[0_4px_32px_rgba(229,72,59,0.6)] btn-shine overflow-hidden transition-all duration-300 hover:-translate-y-0.5 flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>

                {/* Google Map */}
                <div className="bg-card border border-[var(--border)] rounded-3xl p-2 relative overflow-hidden h-[250px] shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.742491176461!2d55.26359561500916!3d25.183141183902347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682d334e2c0b%3A0xc665dc60252b485!2sOntario%20Tower%20-%20Business%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1718134300000!5m2!1sen!2sus"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, borderRadius: '1.25rem' }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ontario Tower, Business Bay, Dubai"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Our Footprint */}
        <section className="relative overflow-hidden border-t border-[var(--border)] py-20 lg:py-28">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-40 dark:dot-grid" />
          <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[500px] -translate-y-1/2 rounded-full bg-primary-red/6 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-[1280px] px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Left — intro */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-red/20 bg-primary-red/10 px-4 py-1.5 text-xs font-semibold text-primary-red">
                  <Globe size={14} />
                  Global Presence
                </div>
                <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                  Our <span className="gradient-text-red">Footprint</span>
                </h2>
                <p className="max-w-lg text-base leading-relaxed text-foreground/60 md:text-lg">
                  Echo supports businesses across key markets in the Middle East and India — delivering
                  localized engagement at enterprise scale.
                </p>

                <div className="mt-10 flex items-baseline gap-3 border-l-2 border-primary-red pl-4">
                  <span className="text-4xl font-extrabold tracking-tight text-primary-red md:text-5xl">5</span>
                  <span className="text-sm leading-snug text-foreground/55 md:text-base">
                    Active markets across<br className="hidden sm:block" /> GCC & South Asia
                  </span>
                </div>
              </motion.div>

              {/* Right — country list */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-transparent via-primary-red/30 to-transparent sm:block" />

                <ul className="divide-y divide-[var(--border)]">
                  {footprintCountries.map((country, i) => (
                    <motion.li
                      key={country.code}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="group flex items-center gap-4 py-5 first:pt-0 last:pb-0 md:gap-5 md:py-6"
                    >
                      <span className="hidden w-6 shrink-0 text-center text-xs font-semibold text-foreground/25 sm:block">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-background text-[11px] font-bold tracking-wider text-primary-red transition-colors group-hover:border-primary-red/30 group-hover:bg-primary-red/5 md:h-12 md:w-12 md:text-xs">
                        {country.code}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-bold text-foreground md:text-lg">{country.short}</h3>
                          {country.label && (
                            <span className="rounded-full bg-primary-red/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-red">
                              {country.label}
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-sm text-foreground/45">{country.name}</p>
                      </div>

                      <MapPin
                        size={18}
                        className="shrink-0 text-foreground/20 transition-colors group-hover:text-primary-red"
                      />
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Mobile-friendly country strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-2 border-t border-[var(--border)] pt-10 lg:hidden"
            >
              {footprintCountries.map((country) => (
                <span
                  key={`pill-${country.code}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-card px-4 py-2 text-sm font-medium text-foreground/70"
                >
                  <span className="text-[10px] font-bold text-primary-red">{country.code}</span>
                  {country.short}
                </span>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
