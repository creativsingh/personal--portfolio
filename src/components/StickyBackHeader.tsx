"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface StickyBackHeaderProps {
  href?: string;
  label?: string;
  badge?: string;
  title?: string;
}

export function StickyBackHeader({
  href = "/#work",
  label = "Back to Selected Work",
  badge,
  title,
}: StickyBackHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show sticky header when scrolling UP and past top threshold (150px)
      if (currentScrollY > 150 && currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-14.25 left-0 right-0 z-40 transition-all duration-300 transform ${
        isVisible
          ? "translate-y-0 opacity-100 shadow-xs bg-white/80 dark:bg-[#0a0a0c]/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-2.5"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-500" />
          <span>{label}</span>
        </Link>

        <div className="flex items-center gap-3 text-xs font-mono">
          {title && (
            <span className="font-bold text-zinc-900 dark:text-zinc-100 truncate max-w-45 sm:max-w-xs">
              {title}
            </span>
          )}
          {badge && (
            <span className="text-zinc-400 dark:text-zinc-500 font-normal">
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
