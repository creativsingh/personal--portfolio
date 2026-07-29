"use client";

import React from "react";
import Link from "next/link";
import { Project } from "../data/persona";
import {
  ArrowLeft,
  User,
  Clock,
  Monitor,
  Users,
  Wrench,
  Target,
  Sparkles,
  BarChart3,
} from "lucide-react";

interface ProjectHeaderSectionProps {
  project: Project;
  projectIndex: number;
  totalProjects: number;
}

export function ProjectHeaderSection({
  project,
  projectIndex,
  totalProjects,
}: ProjectHeaderSectionProps) {
  return (
    <div className="space-y-12">
      {/* Back Link & Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Selected Work
        </Link>

        <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
          Case Study {projectIndex + 1} of {totalProjects}
        </span>
      </div>

      {/* Hero Header */}
      <header className="space-y-4 pb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80">
            {project.category}
          </span>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
            {project.duration}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
          {project.tagline}
        </p>
      </header>

      {/* Case Study Cover Image */}
      {project.coverImage && (
        <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-900/50 shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.coverImage}
            alt={`${project.title} Case Study Visual`}
            className="w-full h-auto object-cover max-h-130"
          />
        </div>
      )}

      {/* Project Meta Bar (Role, Duration, Platform, Team Size, Tool Stack) */}
      <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <User className="w-3.5 h-3.5 text-zinc-400" />
              Role
            </div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {project.role}
            </div>
          </div>

          {project.duration && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-zinc-400" />
                Duration
              </div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {project.duration}
              </div>
            </div>
          )}

          {project.platform && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <Monitor className="w-3.5 h-3.5 text-zinc-400" />
                Platform
              </div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {project.platform}
              </div>
            </div>
          )}

          {project.teamSize && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <Users className="w-3.5 h-3.5 text-zinc-400" />
                Team Size
              </div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                {project.teamSize}
              </div>
            </div>
          )}
        </div>

        {/* Tool Stack Inside Meta Bar */}
        <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
            <Wrench className="w-3.5 h-3.5 text-zinc-400" />
            Tool Stack &amp; Technologies
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Problem & Solution Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-3">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold text-sm font-mono">
            <Target className="w-4 h-4" /> The Challenge &amp; Friction
          </div>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-3">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm font-mono">
            <Sparkles className="w-4 h-4" /> The Product Solution
          </div>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>

      {/* Key Impact & 4 Metrics Grid Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-semibold">
          <BarChart3 className="w-4 h-4 text-emerald-500" />
          Key Impact &amp; Measurable Metrics
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                {m.value}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
