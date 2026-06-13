"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export type NavHeaderLink = {
  name: string;
  href: string;
};

type CursorPosition = {
  left: number;
  width: number;
  opacity: number;
};

type NavHeaderProps = {
  links: NavHeaderLink[];
  className?: string;
};

export function NavHeader({ links, className = "" }: NavHeaderProps) {
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <ul
      className={`relative mx-auto flex w-fit rounded-full border border-foreground/[0.08] bg-foreground/[0.04] p-1 ${className}`}
      onMouseLeave={() => {
        setPosition((prev) => ({ ...prev, opacity: 0 }));
        setHoveredTab(null);
      }}
    >
      {links.map((link) => (
        <Tab
          key={link.name}
          href={link.href}
          name={link.name}
          isActive={hoveredTab === link.name}
          setPosition={setPosition}
          setHoveredTab={setHoveredTab}
        >
          {link.name}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

function Tab({
  children,
  href,
  name,
  isActive,
  setPosition,
  setHoveredTab,
}: {
  children: React.ReactNode;
  href: string;
  name: string;
  isActive: boolean;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
  setHoveredTab: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const ref = useRef<HTMLLIElement>(null);

  const linkClassName = `relative z-10 block cursor-pointer px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
    isActive ? "text-white" : "text-foreground/65 hover:text-foreground"
  }`;

  const handleMouseEnter = () => {
    if (!ref.current) return;

    const { width } = ref.current.getBoundingClientRect();
    setHoveredTab(name);
    setPosition({
      width,
      opacity: 1,
      left: ref.current.offsetLeft,
    });
  };

  return (
    <li ref={ref} onMouseEnter={handleMouseEnter} className="relative z-10 block">
      {href.startsWith("#") ? (
        <a href={href} className={linkClassName}>
          {children}
        </a>
      ) : (
        <Link href={href} className={linkClassName}>
          {children}
        </Link>
      )}
    </li>
  );
}

function Cursor({ position }: { position: CursorPosition }) {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute top-1 z-0 h-8 rounded-full bg-primary-red shadow-[0_2px_12px_rgba(242,13,20,0.45)]"
    />
  );
}
