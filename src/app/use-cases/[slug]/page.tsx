"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ClientLogoBand } from "@/components/ClientLogoBand";
import { CaseStudyButton } from "@/components/CaseStudyButton";
import { motion, useInView } from "framer-motion";
import { useRef, type ElementType } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Filter,
  LineChart,
  Megaphone,
  Repeat,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { useCasesData, UseCaseData } from "@/data/usecases";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const chartCardClass =
  "flex h-full flex-col bg-card border border-[var(--border)] rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.2)] lg:p-7";

const FUNNEL_ICONS = [Megaphone, ClipboardList, ShoppingCart, Repeat, Target];

function ChartIcon({ icon: Icon, color }: { icon: ElementType; color: string }) {
  return (
    <div
      className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300"
      style={{
        background: `${color}15`,
        border: `1px solid ${color}30`,
        boxShadow: `0 0 20px ${color}12`,
      }}
    >
      <Icon size={20} style={{ color }} />
    </div>
  );
}

function OverviewSection({
  challenge,
  solution,
  results,
  color,
  client,
}: {
  challenge: string;
  solution: string;
  results: string[];
  color: string;
  client: string;
}) {
  const steps = [
    {
      icon: Target,
      title: "Challenge",
      description: "What needed to change",
      color: "#f20d14",
      step: "01",
    },
    {
      icon: Zap,
      title: "Solution",
      description: "How Echo helped",
      color: "#3B82F6",
      step: "02",
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "What was achieved",
      color,
      step: "03",
    },
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16"
    >
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary-red/20 bg-primary-red/10 px-3 py-1.5 text-xs font-semibold text-primary-red">
          <Sparkles size={11} />
          The Journey
        </div>
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">From challenge to measurable impact</h2>
        <p className="mt-2 max-w-2xl text-foreground/55">
          How Echo transformed engagement for {client}.
        </p>
      </div>

      {/* Progress rail */}
      <div className="mb-6 hidden items-center gap-3 lg:flex">
        {steps.map((step, i) => (
          <div key={step.title} className="flex flex-1 items-center gap-3">
            <div className="flex items-center gap-2">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: step.color }}
              >
                {step.step}
              </div>
              <span className="text-sm font-semibold text-foreground">{step.title}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--border)] to-transparent" />
            )}
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-card shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.2)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x lg:divide-[var(--border)]">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="group relative border-b border-[var(--border)] p-8 lg:border-b-0"
          >
            <div className="absolute top-0 left-0 h-1 w-full" style={{ backgroundColor: steps[0].color }} />
            <div className="mb-6 flex items-start justify-between">
              <ChartIcon icon={steps[0].icon} color={steps[0].color} />
              <span className="text-4xl font-black leading-none opacity-[0.08]" style={{ color: steps[0].color }}>
                {steps[0].step}
              </span>
            </div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: steps[0].color }}>
              {steps[0].title}
            </p>
            <p className="mb-4 text-sm font-medium text-foreground/45">{steps[0].description}</p>
            <p className="text-base leading-relaxed text-foreground/75">{challenge}</p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="group relative border-b border-[var(--border)] p-8 lg:border-b-0"
          >
            <div className="absolute top-0 left-0 h-1 w-full" style={{ backgroundColor: steps[1].color }} />
            <div className="mb-6 flex items-start justify-between">
              <ChartIcon icon={steps[1].icon} color={steps[1].color} />
              <span className="text-4xl font-black leading-none opacity-[0.08]" style={{ color: steps[1].color }}>
                {steps[1].step}
              </span>
            </div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: steps[1].color }}>
              {steps[1].title}
            </p>
            <p className="mb-4 text-sm font-medium text-foreground/45">{steps[1].description}</p>
            <p className="text-base leading-relaxed text-foreground/75">{solution}</p>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative p-8"
            style={{ background: `linear-gradient(180deg, ${color}08, transparent 55%)` }}
          >
            <div className="absolute top-0 left-0 h-1 w-full" style={{ backgroundColor: color }} />
            <div className="mb-6 flex items-start justify-between">
              <ChartIcon icon={steps[2].icon} color={color} />
              <span className="text-4xl font-black leading-none opacity-[0.08]" style={{ color }}>
                {steps[2].step}
              </span>
            </div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color }}>
              {steps[2].title}
            </p>
            <p className="mb-5 text-sm font-medium text-foreground/45">{steps[2].description}</p>
            <ul className="space-y-3">
              {results.map((r, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-background/60 px-4 py-3 dark:bg-[#12131a]/60"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color }} />
                  <span className="text-sm font-medium leading-relaxed text-foreground/80">{r}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function BarChartSection({ data, color }: { data: UseCaseData["barChart"]; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const maxVal = Math.max(data.beforeValue, data.afterValue) * 1.18;
  const barAreaHeight = 180;

  const formatVal = (v: number) => {
    const rounded = v % 1 !== 0 ? v.toFixed(1) : v.toString();
    return `${rounded}${data.unit}`;
  };

  const beforeHeight = (data.beforeValue / maxVal) * barAreaHeight;
  const afterHeight = (data.afterValue / maxVal) * barAreaHeight;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={chartCardClass}
    >
      <ChartIcon icon={BarChart3} color={color} />
      <h3 className="mb-1 text-lg font-bold leading-snug text-foreground">{data.title}</h3>
      <p className="mb-5 text-sm text-foreground/55">{data.subtitle}</p>

      {/* Summary stats */}
      <div className="mb-5 grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-[var(--border)] bg-foreground/[0.03] p-3 text-center">
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/45">Before</p>
          <p className="text-lg font-extrabold text-foreground/70">{formatVal(data.beforeValue)}</p>
        </div>
        <div
          className="rounded-lg border p-3 text-center"
          style={{ borderColor: `${color}35`, background: `${color}10` }}
        >
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/45">After</p>
          <p className="text-lg font-extrabold" style={{ color }}>
            {formatVal(data.afterValue)}
          </p>
        </div>
        <div
          className="rounded-lg border p-3 text-center"
          style={{ borderColor: `${color}35`, background: `${color}08` }}
        >
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/45">Uplift</p>
          <p className="text-lg font-extrabold" style={{ color }}>
            {data.increase}
          </p>
        </div>
      </div>

      {/* Bar comparison */}
      <div className="mt-auto rounded-xl border border-[var(--border)] bg-foreground/[0.02] p-4">
        <div className="mb-4 flex items-center justify-between gap-2 text-[11px] font-medium text-foreground/55">
          <span>Comparison</span>
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm bg-foreground/25" />
              Before
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-sm" style={{ backgroundColor: color }} />
              After
            </span>
          </span>
        </div>

        <div className="flex items-end justify-center gap-3" style={{ height: barAreaHeight + 88 }}>
          {/* Before bar */}
          <div className="flex h-full max-w-[160px] flex-1 flex-col items-center">
            <p className="mb-2 text-xl font-extrabold text-foreground/55">{formatVal(data.beforeValue)}</p>
            <div className="flex w-full flex-1 items-end">
              <div className="relative w-full overflow-hidden rounded-t-2xl bg-foreground/8" style={{ height: beforeHeight }}>
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "100%" } : { height: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="absolute bottom-0 w-full rounded-t-2xl bg-foreground/22"
                />
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="text-xs font-bold text-foreground">{data.beforeLabel}</p>
            </div>
          </div>

          {/* Center indicator */}
          <div className="flex shrink-0 flex-col items-center justify-end pb-14">
            <div
              className="mb-2 flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-extrabold text-white shadow-md"
              style={{ backgroundColor: color }}
            >
              {data.increase}
            </div>
            <ArrowRight size={18} className="text-foreground/25" />
          </div>

          {/* After bar */}
          <div className="flex h-full max-w-[160px] flex-1 flex-col items-center">
            <p className="mb-2 text-xl font-extrabold" style={{ color }}>
              {formatVal(data.afterValue)}
            </p>
            <div className="flex w-full flex-1 items-end">
              <div
                className="relative w-full overflow-hidden rounded-t-2xl"
                style={{ height: afterHeight, backgroundColor: `${color}18` }}
              >
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: "100%" } : { height: 0 }}
                  transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
                  className="absolute bottom-0 w-full rounded-t-2xl"
                  style={{ backgroundColor: color }}
                />
              </div>
            </div>
            <div className="mt-3 text-center">
              <p className="text-xs font-bold text-foreground">{data.afterLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LineChartSection({ data, color, slug }: { data: UseCaseData["lineChart"]; color: string; slug: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const gradId = `line-grad-${slug}`;

  const firstVal = data.points[0].value;
  const lastVal = data.points[data.points.length - 1].value;
  const maxVal = Math.max(...data.points.map((p) => p.value)) * 1.12;
  const minVal = 0;
  const changePct = firstVal !== 0 ? Math.round(((lastVal - firstVal) / firstVal) * 100) : 0;
  const isPositive = changePct >= 0;

  const formatDisplay = (v: number) => {
    if (data.unit === "min") return `${v} min`;
    if (data.unit === "K" || v >= 1000) {
      const k = v / 1000;
      return `${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)}K`;
    }
    return `${v.toLocaleString()}${data.unit}`;
  };

  const yTicks = [1, 0.75, 0.5, 0.25, 0].map((pct) => Math.round(minVal + (maxVal - minVal) * pct));

  const points = data.points.map((p, i) => {
    const xPct = data.points.length === 1 ? 50 : (i / (data.points.length - 1)) * 100;
    const yPct = 100 - ((p.value - minVal) / (maxVal - minVal)) * 100;
    return { xPct, yPct, ...p };
  });

  const svgPoints = points.map((p, i) => {
    const x = data.points.length === 1 ? 50 : (i / (data.points.length - 1)) * 100;
    const y = 100 - ((p.value - minVal) / (maxVal - minVal)) * 100;
    return { x, y };
  });

  const pathD = svgPoints.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaD = `${pathD} L 100 100 L 0 100 Z`;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={chartCardClass}
    >
      <ChartIcon icon={LineChart} color={color} />
      <h3 className="mb-1 text-lg font-bold leading-snug text-foreground">{data.title}</h3>
      <p className="mb-5 text-sm text-foreground/55">{data.subtitle}</p>

      {/* Summary stats */}
      <div className="mb-5 grid grid-cols-3 gap-2">
        <div
          className="rounded-lg border p-3 text-center"
          style={{ borderColor: `${color}35`, background: `${color}10` }}
        >
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/45">Peak</p>
          <p className="text-lg font-extrabold" style={{ color }}>
            {data.highlight || formatDisplay(lastVal)}
          </p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-foreground/[0.03] p-3 text-center">
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/45">Start</p>
          <p className="text-lg font-extrabold text-foreground">{formatDisplay(firstVal)}</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-foreground/[0.03] p-3 text-center">
          <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/45">Change</p>
          <p className="text-lg font-extrabold" style={{ color: isPositive ? color : "#f20d14" }}>
            {isPositive ? "+" : ""}
            {changePct}%
          </p>
        </div>
      </div>

      {/* Chart area */}
      <div className="mt-auto rounded-xl border border-[var(--border)] bg-foreground/[0.02] p-4">
        <div className="mb-3 flex items-center justify-between gap-2 text-[11px] font-medium text-foreground/55">
          <span>Over time</span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
            {data.unit === "min" ? "Response" : "Engagement"}
          </span>
        </div>

        <div className="flex gap-2">
          {/* Y-axis */}
          <div className="flex h-[180px] w-9 shrink-0 flex-col justify-between py-1 text-right text-[9px] font-medium text-foreground/40">
            {yTicks.map((tick) => (
              <span key={tick}>{formatDisplay(tick)}</span>
            ))}
          </div>

          {/* SVG + value markers */}
          <div className="relative h-[180px] min-w-0 flex-1">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="h-full w-full overflow-visible text-foreground/10"
            >
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity="0.32" />
                  <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
              </defs>

              {[0, 25, 50, 75, 100].map((pct) => (
                <line
                  key={pct}
                  x1="0"
                  y1={pct}
                  x2="100"
                  y2={pct}
                  stroke="currentColor"
                  strokeOpacity="0.14"
                  vectorEffect="non-scaling-stroke"
                  strokeWidth="1"
                />
              ))}

              <motion.path
                d={areaD}
                fill={`url(#${gradId})`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              <motion.path
                d={pathD}
                fill="none"
                stroke={color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
              />
            </svg>

            {points.map((p, i) => (
              <motion.div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${p.xPct}%`, top: `${p.yPct}%` }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                transition={{ delay: 0.5 + i * 0.12 }}
              >
                <span
                  className="absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-md px-1.5 py-0.5 text-[10px] font-bold text-white shadow-md"
                  style={{ backgroundColor: color }}
                >
                  {formatDisplay(p.value)}
                </span>
                <span
                  className="block h-3 w-3 rounded-full border-2 border-card"
                  style={{ backgroundColor: color }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* X-axis labels */}
        <div
          className="mt-4 grid gap-1 pl-9"
          style={{ gridTemplateColumns: `repeat(${data.points.length}, minmax(0, 1fr))` }}
        >
          {data.points.map((p, i) => (
            <div key={i} className="text-center">
              <p className="text-[10px] font-semibold leading-tight text-foreground/70">
                {p.label.length > 10 ? `${p.label.substring(0, 9)}…` : p.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FunnelSection({ data, color }: { data: UseCaseData["funnel"]; color: string }) {
  const steps = data.steps;
  const lastStep = steps[steps.length - 1];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={chartCardClass}
    >
      <ChartIcon icon={Filter} color={color} />
      <h3 className="mb-1 text-lg font-bold leading-snug text-foreground">{data.title}</h3>
      <p className="mb-5 text-sm text-foreground/55">{data.subtitle}</p>

      {/* Quick overview */}
      <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="rounded-lg border p-3 text-center"
            style={
              i === steps.length - 1
                ? { borderColor: `${color}35`, background: `${color}10` }
                : undefined
            }
          >
            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/45">
              Step {i + 1}
            </p>
            <p className="text-lg font-extrabold" style={{ color: i === steps.length - 1 ? color : undefined }}>
              {step.value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[var(--border)] bg-foreground/[0.02] p-4 sm:p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-medium text-foreground/55">
          <span>Journey flow</span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
            Narrows toward {lastStep.label.toLowerCase()}
          </span>
        </div>

        {/* Visual funnel bars */}
        <div className="space-y-3">
          {steps.map((step, i) => {
            const StepIcon = FUNNEL_ICONS[i % FUNNEL_ICONS.length];
            const widthPct = 100 - (i / Math.max(steps.length - 1, 1)) * 32;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
              >
                <div
                  className="flex min-h-[56px] items-center justify-between gap-3 rounded-xl px-4 py-3 sm:min-h-[60px]"
                  style={{
                    width: `100%`,
                    maxWidth: `${widthPct}%`,
                    background: `linear-gradient(90deg, ${color}${i === 0 ? "28" : i === 1 ? "22" : i === 2 ? "18" : "14"}, ${color}06)`,
                    border: `1px solid ${color}${i === 0 ? "45" : "30"}`,
                  }}
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: `${color}18`, border: `1px solid ${color}35` }}
                    >
                      <StepIcon size={17} style={{ color }} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-foreground">{step.label}</p>
                      <p className="text-[10px] text-foreground/45">Stage {i + 1}</p>
                    </div>
                  </div>
                  <p className="shrink-0 text-xl font-extrabold" style={{ color }}>
                    {step.value}
                  </p>
                </div>

                {step.rate && (
                  <div
                    className="flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 sm:w-[130px] sm:flex-col sm:items-center sm:text-center"
                    style={{ borderColor: `${color}30`, background: `${color}08` }}
                  >
                    <ArrowRight size={14} className="text-foreground/30 sm:hidden" />
                    <p className="text-sm font-extrabold" style={{ color }}>
                      {step.rate}
                    </p>
                    <p className="text-[10px] leading-tight text-foreground/45">{step.rateLabel}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Step detail cards */}
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {steps.map((step, i) => {
            const StepIcon = FUNNEL_ICONS[i % FUNNEL_ICONS.length];
            return (
              <motion.div
                key={`card-${i}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="rounded-xl border border-[var(--border)] bg-card p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ background: `${color}15`, border: `1px solid ${color}28` }}
                  >
                    <StepIcon size={15} style={{ color }} />
                  </div>
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold"
                    style={{ background: `${color}18`, color }}
                  >
                    {i + 1}
                  </span>
                </div>
                <p className="text-lg font-extrabold text-foreground">{step.value}</p>
                <p className="mt-1 text-xs font-medium text-foreground/55">{step.label}</p>
                {step.rate && (
                  <div className="mt-3 border-t border-[var(--border)] pt-3">
                    <p className="text-[10px] text-foreground/40">{step.rateLabel}</p>
                    <p className="text-sm font-bold" style={{ color }}>
                      {step.rate}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function UseCaseDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const uc = useCasesData.find((u) => u.slug === slug);

  if (!uc) {
    notFound();
  }

  const otherCases = useCasesData.filter((u) => u.slug !== slug);

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col overflow-hidden bg-background font-sans text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden pb-12 pt-[140px]">
          <div className="pointer-events-none absolute inset-0 dot-grid-light opacity-30 dark:dot-grid" />
          <div
            className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full blur-[150px]"
            style={{ backgroundColor: `${uc.color}14` }}
          />

          <div className="relative z-10 mx-auto max-w-[1280px] px-6">
            <Link
              href="/use-cases"
              className="group mb-8 inline-flex items-center gap-2 text-foreground/60 transition-colors hover:text-foreground"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to Use Cases
            </Link>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-card shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_24px_rgba(0,0,0,0.2)] lg:grid lg:grid-cols-[1.05fr_1fr]"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden sm:h-[300px] lg:h-full lg:min-h-[440px]">
                <div
                  className="absolute inset-0 bg-cover bg-[center_25%]"
                  style={{ backgroundImage: `url('${uc.heroImage}')` }}
                />
              </div>

              {/* Content */}
              <div className="relative flex flex-col justify-center p-8 lg:p-10 xl:p-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.07]"
                  style={{ background: `radial-gradient(circle at top right, ${uc.color}, transparent 65%)` }}
                />

                <motion.div variants={fadeUp} className="relative z-10">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary-red/20 bg-primary-red/10 px-3 py-1.5 text-xs font-semibold text-primary-red">
                      <Sparkles size={11} />
                      Case Study
                    </div>
                    <span
                      className="inline-flex rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em]"
                      style={{ background: `${uc.color}15`, color: uc.color, border: `1px solid ${uc.color}30` }}
                    >
                      {uc.industry}
                    </span>
                  </div>

                  {/* Logo — shown once */}
                  <div className="mb-6 inline-flex rounded-xl border border-[var(--border)] bg-background px-6 py-4 dark:bg-[#12131a]">
                    <div className="h-11 w-[180px] overflow-hidden flex items-center">
                      <Image
                        src={uc.clientLogoDark}
                        alt={uc.client}
                        width={200}
                        height={60}
                        className="hidden h-[52px] w-auto max-w-none scale-[1.35] origin-left object-contain dark:block"
                      />
                      <Image
                        src={uc.clientLogo}
                        alt={uc.client}
                        width={200}
                        height={60}
                        className="h-[52px] w-auto max-w-none scale-[1.35] origin-left object-contain dark:hidden"
                      />
                    </div>
                  </div>

                  <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                    {uc.results[0]}
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/60 lg:text-lg">
                    {uc.challenge}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {uc.results.slice(1).map((r, i) => (
                      <span
                        key={i}
                        className="rounded-full px-3 py-1.5 text-xs font-semibold"
                        style={{
                          background: `${uc.color}12`,
                          color: uc.color,
                          border: `1px solid ${uc.color}28`,
                        }}
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenge / Solution / Results */}
        <section className="relative z-10 py-12">
          <div className="mx-auto max-w-[1280px] px-6">
            <OverviewSection
              challenge={uc.challenge}
              solution={uc.solution}
              results={uc.results}
              color={uc.color}
              client={uc.client}
            />

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary-red/20 bg-primary-red/10 px-3 py-1.5 text-xs font-semibold text-primary-red">
                <Sparkles size={11} />
                Performance Metrics
              </div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Data-driven outcomes</h2>
              <p className="mt-2 text-foreground/50">
                Real results from the Echo platform implementation at {uc.client}.
              </p>
            </motion.div>

            <div className="mb-6 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-2">
              <BarChartSection data={uc.barChart} color={uc.color} />
              <LineChartSection data={uc.lineChart} color={uc.color} slug={uc.slug} />
            </div>

            <FunnelSection data={uc.funnel} color={uc.color} />
          </div>
        </section>

        {/* Other case studies */}
        <section className="border-t border-[var(--border)] py-20">
          <div className="mx-auto max-w-[1280px] px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10 text-3xl font-bold text-foreground"
            >
              More Case Studies
            </motion.h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {otherCases.map((other, i) => (
                <motion.div
                  key={other.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/use-cases/${other.slug}`}>
                    <div className="group cursor-pointer overflow-hidden rounded-2xl border border-[var(--border)] bg-card shadow-[0_2px_20px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-0.5 hover:border-foreground/15 dark:shadow-[0_2px_24px_rgba(0,0,0,0.2)]">
                      <div className="relative h-[260px] overflow-hidden sm:h-[300px]">
                        <div
                          className="absolute inset-0 bg-cover bg-[center_25%] transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url('${other.heroImage}')` }}
                        />
                      </div>
                      <ClientLogoBand
                        client={other.client}
                        clientLogo={other.clientLogo}
                        clientLogoDark={other.clientLogoDark}
                      />
                      <div className="p-6">
                        <span
                          className="mb-2 inline-block text-[11px] font-semibold uppercase tracking-[0.14em]"
                          style={{ color: other.color }}
                        >
                          {other.industry}
                        </span>
                        <h3 className="mb-5 text-xl font-bold text-foreground transition-colors group-hover:text-primary-red">
                          {other.client}
                        </h3>
                        <CaseStudyButton color={other.color} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-[var(--border)] px-6 py-20">
          <div className="mx-auto max-w-[800px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-card p-12 shadow-[0_2px_20px_rgba(0,0,0,0.04)] md:p-16 dark:shadow-[0_2px_24px_rgba(0,0,0,0.2)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-primary-red/3" />
              <div className="pointer-events-none absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary-red/8 blur-[120px]" />

              <div className="relative z-10">
                <Sparkles className="mx-auto mb-6 text-primary-red" size={32} />
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  Want results like {uc.client}?
                </h2>
                <p className="mx-auto mb-8 max-w-lg text-foreground/60">
                  Let us show you how Echo can transform your customer engagement and drive measurable growth.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-red px-8 py-4 text-lg font-bold text-white shadow-[0_4px_24px_rgba(242,13,20,0.45)] transition-transform hover:scale-105"
                >
                  Book a Demo <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
