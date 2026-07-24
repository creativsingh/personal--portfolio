"use client";

import React from "react";
import { PERSONA_DATA } from "../data/persona";
import { Sparkles, Code, TrendingUp, Cpu, Users, ArrowRight } from "lucide-react";

export function Philosophy() {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-amber-500" />,
    Code: <Code className="w-5 h-5 text-blue-500" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-500" />,
    Cpu: <Cpu className="w-5 h-5 text-purple-500" />,
    Users: <Users className="w-5 h-5 text-pink-500" />,
  };

  return (
    <section id="philosophy" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
            01 / Design Engineering Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Principles that guide my craft &amp; decisions.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl text-base">
            I believe great design is not about superficial aesthetics—it&apos;s about clarity, empathy, business alignment, and technical excellence.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PERSONA_DATA.corePrinciples.map((item, index) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  {iconMap[item.icon] || <Sparkles className="w-5 h-5" />}
                </div>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition Card: Product Designer -> Design Engineer */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-[#141419] dark:to-[#09090b] text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800/80 shadow-md relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                Future Brand Direction
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Transitioning to Design Engineering
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {PERSONA_DATA.subheading}. Moving beyond static Figma mockups into production Next.js &amp; Tailwind CSS code to ensure zero fidelity loss between design intent and user execution.
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs shrink-0">
              <span className="px-3 py-2 rounded-lg bg-white dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-300 shadow-xs">
                Figma / UX
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="px-3 py-2 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-semibold">
                Next.js / Code
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
