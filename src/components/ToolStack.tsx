"use client";

import React from "react";
import { PERSONA_DATA } from "../data/persona";
import { Wrench, CheckCircle, Terminal, Layers, Palette, Cpu, Sparkles } from "lucide-react";

export function ToolStack() {
  return (
    <section className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
            05 / Technical Stack &amp; Tools
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Tools &amp; workflows for design engineering.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base max-w-xl">
            A curated stack combining high-fidelity UI design, production frontend code, and AI-assisted speed.
          </p>
        </div>

        {/* Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PERSONA_DATA.tools.map((tool) => (
            <div
              key={tool.name}
              className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-0.5">
                <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                  {tool.name}
                </div>
                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {tool.category}
                </div>
              </div>

              <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {tool.experience}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
