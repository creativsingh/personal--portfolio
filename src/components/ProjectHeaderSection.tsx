"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Project, HeroSlide } from "../data/persona";
import {
  ArrowLeft,
  User,
  Clock,
  Monitor,
  Users,
  Wrench,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
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
  // Construct slides list: use heroSlides if available, otherwise fallback to coverImage or single default slide
  const slides: HeroSlide[] =
    project.heroSlides && project.heroSlides.length > 0
      ? project.heroSlides
      : project.coverImage
        ? [
          {
            url: project.coverImage,
            title: `${project.title} Primary Overview`,
            caption: project.tagline,
          },
        ]
        : [
          {
            title: `${project.title} Product Architecture`,
            caption: project.tagline,
          },
        ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-moving slideshow (advances every 3.5 seconds, pauses when hovered)
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentIndex];

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

      {/* Auto-Moving Hero Carousel — Dots Floating Directly On The Image */}
      <div
        className="relative group rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-950 shadow-lg"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slide Media Display Container */}
        <div className="relative w-full flex items-center justify-center min-h-[300px] sm:min-h-[520px]">
          {activeSlide.url ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src={activeSlide.url}
              alt={activeSlide.title}
              className="w-full h-auto object-cover max-h-[520px] transition-all duration-500"
            />
          ) : (
            <div className="w-full min-h-[320px] sm:min-h-[400px] border border-dashed border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 via-zinc-900/60 to-zinc-950 p-8 flex flex-col items-center justify-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-zinc-100">
                {activeSlide.title}
              </h3>
              {activeSlide.caption && (
                <p className="text-xs sm:text-sm text-zinc-400 italic max-w-md">
                  {activeSlide.caption}
                </p>
              )}
            </div>
          )}

          {/* Floating Back & Forward Navigation Buttons */}
          {slides.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                aria-label="Previous Slide"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-950/70 hover:bg-emerald-600 border border-zinc-700/60 hover:border-emerald-500 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-md cursor-pointer opacity-80 group-hover:opacity-100 z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Slide"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-950/70 hover:bg-emerald-600 border border-zinc-700/60 hover:border-emerald-500 text-white flex items-center justify-center backdrop-blur-md transition-all shadow-md cursor-pointer opacity-80 group-hover:opacity-100 z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Floating Carousel Points (Overlay Directly On Image) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-zinc-950/70 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 shadow-lg z-10">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${idx === currentIndex
                      ? "w-6 bg-emerald-400"
                      : "w-2 bg-zinc-400/60 hover:bg-white"
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

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
            The Challenge &amp; Friction
          </div>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-3">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm font-mono">
            The Product Solution
          </div>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </section>
    </div>
  );
}
