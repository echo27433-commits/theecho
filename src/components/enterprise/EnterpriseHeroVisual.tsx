"use client";

import { motion } from "framer-motion";
import { Shield, Server, Plug, Activity, Globe, Lock } from "lucide-react";

const INTEGRATIONS = ["Salesforce", "HubSpot", "SAP", "Stripe", "Meta"];

function StatusBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-[10px]">
        <span className="font-medium text-foreground/50">{label}</span>
        <span className="font-bold" style={{ color }}>{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-foreground/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  );
}

export function EnterpriseHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
      <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-primary-red/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-8 top-1/4 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-card shadow-[0_32px_100px_rgba(0,0,0,0.12)] dark:shadow-[0_32px_100px_rgba(0,0,0,0.45)]"
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-[var(--border)] bg-foreground/[0.03] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-primary-red/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
          </div>
          <div className="mx-auto flex h-7 flex-1 max-w-[200px] items-center justify-center gap-1.5 rounded-lg bg-foreground/[0.04] px-3">
            <Lock size={10} className="text-emerald-500" />
            <span className="truncate text-[10px] text-foreground/40">echo.app / enterprise</span>
          </div>
        </div>

        <div className="relative p-5 md:p-6">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-20 dark:dot-grid" />

          <div className="relative grid grid-cols-2 gap-3">
            {/* Uptime ring */}
            <div className="col-span-1 row-span-2 flex flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-foreground/[0.02] p-4">
              <div className="relative mb-3 flex h-24 w-24 items-center justify-center">
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="6" className="text-foreground/[0.06]" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#f20d14"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="264"
                    initial={{ strokeDashoffset: 264 }}
                    animate={{ strokeDashoffset: 2.64 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </svg>
                <div className="text-center">
                  <p className="text-xl font-extrabold text-primary-red">99.9%</p>
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-foreground/40">Uptime</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">All systems operational</span>
              </div>
            </div>

            {/* Security card */}
            <div className="rounded-2xl border border-[var(--border)] bg-primary-red/[0.04] p-3.5">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-red/15 text-primary-red">
                  <Shield size={14} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/45">Security</span>
              </div>
              <StatusBar label="Access controls" value={92} color="#f20d14" />
            </div>

            {/* Regions */}
            <div className="rounded-2xl border border-[var(--border)] bg-foreground/[0.02] p-3.5">
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-500/15 text-sky-500">
                  <Globe size={14} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/45">Regions</span>
              </div>
              <div className="flex gap-1">
                {["MENA", "EU", "APAC"].map((r) => (
                  <span key={r} className="rounded-md bg-sky-500/10 px-1.5 py-0.5 text-[9px] font-bold text-sky-600 dark:text-sky-400">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Integrations strip */}
          <div className="relative mt-3 overflow-hidden rounded-2xl border border-[var(--border)] bg-foreground/[0.02] p-3.5">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Plug size={12} className="text-foreground/40" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/45">Live integrations</span>
              </div>
              <Activity size={12} className="text-emerald-500" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {INTEGRATIONS.map((name, i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.08 }}
                  className="rounded-full border border-[var(--border)] bg-card px-2 py-0.5 text-[9px] font-semibold text-foreground/60"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Audit log */}
          <div className="relative mt-3 rounded-2xl border border-[var(--border)] bg-foreground/[0.02] p-3.5">
            <div className="mb-2 flex items-center gap-2">
              <Server size={12} className="text-foreground/40" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/45">Audit trail</span>
            </div>
            <div className="space-y-1.5 font-mono text-[9px] text-foreground/40">
              <motion.p initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
                <span className="text-emerald-500">✓</span> API auth verified · 2ms ago
              </motion.p>
              <motion.p initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.95 }}>
                <span className="text-emerald-500">✓</span> Role policy updated · 14ms ago
              </motion.p>
              <motion.p initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}>
                <span className="text-emerald-500">✓</span> Campaign delivered · 28ms ago
              </motion.p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute -left-4 top-1/4 hidden rounded-2xl border border-[var(--border)] bg-card px-3 py-2 shadow-lg lg:block"
      >
        <p className="text-[10px] font-semibold text-foreground/45">Encrypted</p>
        <p className="text-sm font-bold text-foreground">AES-256</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.85, duration: 0.6 }}
        className="absolute -right-2 bottom-1/4 hidden rounded-2xl border border-primary-red/20 bg-primary-red/10 px-3 py-2 shadow-lg lg:block"
      >
        <p className="text-[10px] font-semibold text-primary-red/70">SOC ready</p>
        <p className="text-sm font-bold text-primary-red">Governance</p>
      </motion.div>
    </div>
  );
}
