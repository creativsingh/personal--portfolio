"use client";

import React, { useEffect } from "react";
import { Project } from "../data/persona";
import { X, CheckCircle2, ArrowUpRight, Code, Wrench, BarChart3, Target, Sparkles } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/60 backdrop-blur-xs">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-zinc-200 dark:border-zinc-800 flex items-start justify-between gap-4 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {project.category}
              </span>
              <span className="text-xs font-mono text-zinc-500">{project.period}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-1 font-medium">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans">
          
          {/* Key Metric & Role Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800">
            <div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block mb-1">Role</span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{project.role}</span>
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 block mb-1">Key Impact</span>
              <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4" />
                {project.impactMetric}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Overview
            </h3>
            <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-rose-500/5 border border-rose-500/10 space-y-2">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-medium text-sm font-mono">
                <Target className="w-4 h-4" /> The Problem
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-sm font-mono">
                <Sparkles className="w-4 h-4" /> The Solution
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Core UX &amp; Engineering Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables & Highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Design &amp; Engineering Execution
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Tech Stack */}
          <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Technologies &amp; Tools Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between">
          <span className="text-xs font-mono text-zinc-500">
            Case Study — {project.title}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-xs hover:opacity-90 transition-opacity"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
