"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PERSONA_DATA } from "../data/persona";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ProjectsProps {
  isWorkPage?: boolean;
}

export function Projects({ isWorkPage = false }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Dynamically derive unique categories from persona.ts
  const categories = ["All", ...Array.from(new Set(PERSONA_DATA.projects.map((p) => p.category)))];

  const filteredProjects = selectedCategory === "All"
    ? PERSONA_DATA.projects
    : PERSONA_DATA.projects.filter(p => p.category === selectedCategory);

  const displayedProjects = isWorkPage ? filteredProjects : filteredProjects.slice(0, 2);

  return (
    <section id="work" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
              {isWorkPage ? "SELECTED WORK" : "02 / SELECTED WORK"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Products I&apos;ve designed &amp; built.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base max-w-xl">
              From AI platforms to SaaS products, each project balances user needs, business outcomes, and production-ready execution.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex justify-end flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${selectedCategory === cat
                  ? "bg-linear-to-r from-[#89FFB4] to-[#80FFC6] text-zinc-950 font-bold shadow-xs"
                  : "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200/60 dark:border-zinc-800/60"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards List */}
        <div className="space-y-6">
          {displayedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="block p-6 sm:p-8 rounded-2xl bg-zinc-50/50 dark:bg-[#121215]/50 backdrop-blur-xs border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                      {project.duration}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Hover indicator next to case study name */}
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0">
                      Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {project.impactMetric}
                  </span>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mb-6 max-w-2xl leading-relaxed">
                {project.tagline}
              </p>

              {/* Tools & Role footer pill line */}
              <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400 dark:text-zinc-500">Role:</span>
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium">{project.role}</span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-zinc-200/50 dark:bg-zinc-800/50 text-[11px] text-zinc-600 dark:text-zinc-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button (Secondary styling, only shown on homepage) */}
        {!isWorkPage && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all shadow-xs"
            >
              View All Case Studies
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
