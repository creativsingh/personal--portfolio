"use client";

import React from "react";
import { PERSONA_DATA } from "../data/persona";
import { MapPin, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6">

        {/* Availability Badge & Location */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {PERSONA_DATA.statusText}
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <MapPin className="w-3.5 h-3.5" />
            {PERSONA_DATA.location}
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1] mb-6">
          Designing &amp; building digital products.
        </h1>

        {/* Hero Subtitle / Editorial Bio */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed mb-8">
          Hi, I&apos;m <span className="font-semibold text-zinc-900 dark:text-zinc-100">{PERSONA_DATA.name}</span> ({PERSONA_DATA.brand}) <span className="font-mono text-sm px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium">Design Engineer</span> based in Delhi, India. I design &amp; build products that look good, work beautifully, and scale effortlessly.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <div className="border-comet-btn">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[calc(0.65rem-2px)] bg-linear-to-r from-[#89FFB4] to-[#80FFC6] text-zinc-950 font-bold text-sm hover:brightness-105 transition-all shadow-sm z-10"
            >
              View Selected Work
              <ArrowDown className="w-4 h-4 text-zinc-950" />
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition-colors"
          >
            Get In Touch
          </a>

          <a
            href="#pixelpeps"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-mono transition-colors"
          >
            PixelPeps Community &rarr;
          </a>
        </div>

        {/* Quick Highlights Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 text-left">
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">5+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Years of Experience</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">10+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Shipped Products</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">2000+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">People Mentored</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">20+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Talks &amp; Workshops Given</div>
          </div>

        </div>

      </div>
    </section>
  );
}
