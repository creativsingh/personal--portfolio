"use client";

import React from "react";
import Link from "next/link";
import { PERSONA_DATA } from "../data/persona";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface PixelPepsProps {
  isStandalonePage?: boolean;
}

export function PixelPeps({ isStandalonePage = false }: PixelPepsProps) {
  return (
    <section id="pixelpeps" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
          {isStandalonePage ? "COMMUNITY LEADERSHIP" : "03 / Community Leadership"}
        </span>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
              PixelPeps Community
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                Organizer
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base max-w-xl">
              {PERSONA_DATA.community.description}
            </p>
          </div>

          <a
            href="https://www.commudle.com/communities/pixelpeps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-mono font-semibold hover:opacity-90 transition-opacity shrink-0"
          >
            pixelpeps.com <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Community Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {PERSONA_DATA.community.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80"
            >
              <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Activity Bullet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PERSONA_DATA.community.activities.map((act) => (
            <div
              key={act}
              className="flex items-center gap-3 p-3.5 rounded-lg bg-zinc-100/50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
            >
              <Sparkles className="w-4 h-4 text-pink-500 shrink-0" />
              <span>{act}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
