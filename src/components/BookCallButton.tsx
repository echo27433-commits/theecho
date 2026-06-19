"use client";

import { Calendar, ArrowRight } from "lucide-react";

const sizes = {
  default: {
    button: "pl-4 pr-1.5 py-1.5 text-sm gap-2.5",
    icon: "h-4 w-4",
    arrowWrap: "h-8 w-8",
  },
  lg: {
    button: "pl-6 pr-2 py-3 text-base gap-3",
    icon: "h-5 w-5",
    arrowWrap: "h-10 w-10",
  },
} as const;

const variants = {
  red: "bg-primary-red shadow-[0_4px_24px_rgba(242,13,20,0.45)] hover:shadow-[0_6px_32px_rgba(242,13,20,0.6)]",
  blue: "bg-[#3B82F6] shadow-[0_4px_24px_rgba(59,130,246,0.45)] hover:shadow-[0_6px_32px_rgba(59,130,246,0.6)]",
  purple: "bg-[#A855F7] shadow-[0_4px_24px_rgba(168,85,247,0.45)] hover:shadow-[0_6px_32px_rgba(168,85,247,0.6)]",
} as const;

export function BookCallButton({
  onClick,
  className = "",
  size = "default",
  variant = "red",
}: {
  onClick: () => void;
  className?: string;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
}) {
  const s = sizes[size];

  return (
    <button
      onClick={onClick}
      className={`group relative inline-flex w-fit shrink-0 cursor-pointer items-center rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 btn-shine overflow-hidden ${variants[variant]} ${s.button} ${className}`}
    >
      <Calendar className={`${s.icon} shrink-0 opacity-90`} />
      <span>Book a Call</span>
      <span
        className={`flex items-center justify-center rounded-full bg-white/20 transition-all duration-300 group-hover:bg-white/30 group-hover:translate-x-0.5 ${s.arrowWrap}`}
      >
        <ArrowRight className={s.icon} />
      </span>
    </button>
  );
}
