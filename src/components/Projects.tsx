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

  const categories = ["All", "AI & Healthcare", "SaaS & Community", "Consumer Apps", "Design Systems"];

  const filteredProjects = selectedCategory === "All"
    ? PERSONA_DATA.projects
    : PERSONA_DATA.projects.filter(p => p.category === selectedCategory);

  const displayedProjects = isWorkPage ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="work" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
              {isWorkPage ? "Selected Case Studies" : "02 / Selected Case Studies"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {isWorkPage ? "All Projects & Case Studies" : "Shipped work & product design engineering."}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base max-w-xl">
              Each project reflects user empathy, business goals, and production-ready frontend thinking.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#89FFB4] to-[#80FFC6] text-zinc-950 font-bold shadow-xs"
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
              className="block group p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                <div className="space-y-3 max-w-2xl">
                  {/* Category & Period */}
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                      {project.period}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-emerald-500" />
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-1 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Impact Metric & Tools */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {project.impactMetric}
                    </span>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Read Case Study Link */}
                <div className="shrink-0 self-start md:self-center">
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200 group-hover:underline">
                    Read Case Study &rarr;
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* View More Button (Secondary styling, only shown on homepage) */}
        {!isWorkPage && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all shadow-xs"
            >
              View More Projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
