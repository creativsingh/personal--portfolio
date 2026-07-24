"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONA_DATA } from "../data/persona";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Community", href: "#community" },
    { label: "Speaking", href: "#speaking" },
    { label: "Music", href: "#music" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0a0a0c]/80 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100 font-semibold tracking-tight text-base"
        >
          <span className="w-8 h-8 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-mono text-xs font-bold transition-transform group-hover:scale-105">
            CS
          </span>
          <div className="flex flex-col">
            <span className="font-sans leading-none">{PERSONA_DATA.brand}</span>
            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 font-normal leading-tight mt-0.5">
              {PERSONA_DATA.name}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action & Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>

          <a
            href={PERSONA_DATA.socials.pixelpeps}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-mono px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            PixelPeps <ArrowUpRight className="w-3 h-3 text-zinc-400" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0c] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-medium text-base text-zinc-800 dark:text-zinc-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-500">PixelPeps Community</span>
            <a
              href={PERSONA_DATA.socials.pixelpeps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono flex items-center gap-1 text-zinc-900 dark:text-zinc-100 underline"
            >
              pixelpeps.com <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
