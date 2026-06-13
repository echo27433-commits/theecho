"use client";

import Link from "next/link";
import type { ElementType } from "react";
import { ArrowRight, FileText } from "lucide-react";

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const pillClasses =
  "group/btn relative inline-flex w-fit shrink-0 self-start items-center rounded-full font-semibold text-white btn-shine overflow-hidden pl-4 pr-1.5 py-1.5 text-sm gap-2.5 transition-all duration-300 hover:-translate-y-0.5 [box-shadow:0_4px_24px_var(--btn-glow)] hover:[box-shadow:0_6px_32px_var(--btn-glow-hover)]";

export function CaseStudyButton({
  color,
  label = "View Case Study",
  href,
  icon: Icon = FileText,
  className = "",
}: {
  color: string;
  label?: string;
  href?: string;
  icon?: ElementType;
  className?: string;
}) {
  const style = {
    backgroundColor: color,
    ["--btn-glow" as string]: hexToRgba(color, 0.45),
    ["--btn-glow-hover" as string]: hexToRgba(color, 0.6),
  };

  const content = (
    <>
      <Icon className="h-4 w-4 shrink-0 opacity-90" />
      <span>{label}</span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover/btn:bg-white/30 group-hover/btn:translate-x-0.5">
        <ArrowRight className="h-4 w-4" />
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${pillClasses} ${className}`} style={style}>
        {content}
      </Link>
    );
  }

  return (
    <span className={`${pillClasses} ${className}`} style={style}>
      {content}
    </span>
  );
}
