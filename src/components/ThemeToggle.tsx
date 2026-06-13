"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        aria-hidden
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg p-2"
      />
    );
  }

  return (
    <AnimatedThemeToggler
      variant="swipe"
      duration={1000}
      theme={theme === "dark" ? "dark" : "light"}
      onThemeChange={setTheme}
      className="inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-black/5 dark:hover:bg-white/10 [&_svg]:h-[1.2rem] [&_svg]:w-[1.2rem] [&_svg]:text-foreground"
    />
  );
}
