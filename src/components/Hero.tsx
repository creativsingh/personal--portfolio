"use client";

import React from "react";
import { PERSONA_DATA } from "../data/persona";
import { MapPin, ArrowDown, Sparkles, Code, Users, Terminal } from "lucide-react";

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
          Designing thoughtful digital products &amp; building communities.
        </h1>

        {/* Hero Subtitle / Editorial Bio */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed mb-8">
          Hi, I&apos;m <span className="font-semibold text-zinc-900 dark:text-zinc-100">{PERSONA_DATA.name}</span> ({PERSONA_DATA.brand}). I&apos;m a <span className="underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700">Product Designer</span> and community organizer based in Delhi, evolving toward <span className="font-mono text-sm px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">Design Engineering</span>.
        </p>

        {/* Brand One-liner quote card */}
        <div className="p-4 sm:p-5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800/80 mb-10">
          <p className="text-sm sm:text-base font-mono text-zinc-700 dark:text-zinc-300 italic">
            &ldquo;{PERSONA_DATA.oneLiner}&rdquo;
          </p>
        </div>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Selected Work
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 font-medium text-sm transition-colors"
          >
            Get In Touch
          </a>

          <a
            href="#community"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 text-sm font-mono transition-colors"
          >
            PixelPeps Community &rarr;
          </a>
        </div>

        {/* Quick Highlights Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 text-left">
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">4+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Shipped Case Studies</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">1,500+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">PixelPeps Members</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">5+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Talks &amp; Workshops</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">Design+Code</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">AI-Assisted Workflow</div>
          </div>
        </div>

      </div>
    </section>
  );
}
