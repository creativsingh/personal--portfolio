"use client";

import React from "react";
import { PERSONA_DATA } from "../data/persona";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-white dark:bg-[#0a0a0c] text-zinc-600 dark:text-zinc-400 font-sans">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-zinc-900 dark:text-zinc-100">
            <span>{PERSONA_DATA.brand}</span>
            <span className="text-xs font-mono text-zinc-400 font-normal">({PERSONA_DATA.name})</span>
          </div>
          <p className="text-xs font-mono text-zinc-500">
            Product Designer &amp; Design Engineer
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-500 text-center space-y-1">
          <div>
            Built with Next.js, Tailwind CSS &amp; TypeScript.
          </div>
          <div className="text-[11px] text-zinc-400">
            © {new Date().getFullYear()} {PERSONA_DATA.name}
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
