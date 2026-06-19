"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

function isLinkActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavHeader({ links, className = "" }: NavHeaderProps) {
  const pathname = usePathname();
  const tabRefs = useRef<Map<string, HTMLLIElement>>(new Map());
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    if (hoveredTab) return;

    const activeLink = links.find((link) => isLinkActive(pathname, link.href));
    if (!activeLink) {
      setPosition((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const el = tabRefs.current.get(activeLink.name);
    if (!el) return;

    setPosition({
      width: el.getBoundingClientRect().width,
      opacity: 1,
      left: el.offsetLeft,
    });
  }, [pathname, hoveredTab, links]);

  return (
    <ul
      className={`relative mx-auto flex w-fit rounded-full border border-foreground/[0.08] bg-foreground/[0.04] p-1 ${className}`}
      onMouseLeave={() => {
        setHoveredTab(null);
      }}
    >
      {links.map((link) => (
        <Tab
          key={link.name}
          href={link.href}
          name={link.name}
          isHovered={hoveredTab === link.name}
          isCurrentPage={isLinkActive(pathname, link.href)}
          isNavIdle={hoveredTab === null}
          setPosition={setPosition}
          setHoveredTab={setHoveredTab}
          tabRef={(el) => {
            if (el) tabRefs.current.set(link.name, el);
            else tabRefs.current.delete(link.name);
          }}
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
  isHovered,
  isCurrentPage,
  isNavIdle,
  setPosition,
  setHoveredTab,
  tabRef,
}: {
  children: React.ReactNode;
  href: string;
  name: string;
  isHovered: boolean;
  isCurrentPage: boolean;
  isNavIdle: boolean;
  setPosition: React.Dispatch<React.SetStateAction<CursorPosition>>;
  setHoveredTab: React.Dispatch<React.SetStateAction<string | null>>;
  tabRef: (el: HTMLLIElement | null) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);

  const pillOnTab = isHovered || (isCurrentPage && isNavIdle);
  const linkClassName = `relative z-10 block cursor-pointer px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
    pillOnTab
      ? "text-white"
      : isCurrentPage
        ? "text-primary-red font-semibold"
        : "text-foreground/65 hover:text-foreground"
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
    <li
      ref={(el) => {
        ref.current = el;
        tabRef(el);
      }}
      onMouseEnter={handleMouseEnter}
      className="relative z-10 block"
    >
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
