import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PERSONA_DATA } from "../../../data/persona";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import {
  ArrowLeft,
  ArrowRight,
  Target,
  Sparkles,
  User,
  Clock,
  Monitor,
  Users,
  Wrench,
  BarChart3,
  Quote,
  Camera,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PERSONA_DATA.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PERSONA_DATA.projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Case Study Not Found — CreativSingh",
    };
  }

  return {
    title: `${project.title} — Case Study by ${PERSONA_DATA.name}`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} — Case Study by ${PERSONA_DATA.name}`,
      description: project.summary,
      images: project.coverImage ? [project.coverImage] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const projectIndex = PERSONA_DATA.projects.findIndex((p) => p.id === id);
  const project = PERSONA_DATA.projects[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject =
    PERSONA_DATA.projects[(projectIndex + 1) % PERSONA_DATA.projects.length];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 space-y-12">
          
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
              Case Study {projectIndex + 1} of {PERSONA_DATA.projects.length}
            </span>
          </div>

          {/* Hero Header */}
          <header className="space-y-4 pb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700/80">
                {project.category}
              </span>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                {project.period}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </header>

          {/* Original Case Study Cover Image */}
          {project.coverImage && (
            <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-900/50 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.coverImage}
                alt={`${project.title} Case Study Visual`}
                className="w-full h-auto object-cover max-h-[520px]"
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
                  className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 leading-snug">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 01 / Executive Overview */}
          <section className="space-y-3">
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
              01 / Executive Overview
            </span>
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.summary}
            </p>
          </section>

          {/* 02 / My Role */}
          <section className="space-y-3">
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
              02 / My Role
            </span>
            <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {project.roleDescription || project.summary}
            </p>
          </section>

          {/* 03 / Case Study Deep-Dive */}
          {project.sections && project.sections.length > 0 && (
            <section className="space-y-12 pt-4">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">
                03 / Case Study Deep-Dive
              </span>

              <div className="space-y-12">
                {project.sections.map((sec) => (
                  <div key={sec.title} className="space-y-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      {sec.title}
                    </h3>

                    {sec.description && (
                      <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {sec.description}
                      </p>
                    )}

                    {/* CEO Vision Quotes */}
                    {sec.quotes && sec.quotes.length > 0 && (
                      <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                          <Quote className="w-4 h-4 text-emerald-500" />
                          CEO Vision &amp; Directive Alignment
                        </div>
                        <div className="space-y-3">
                          {sec.quotes.map((q, i) => (
                            <blockquote
                              key={i}
                              className="pl-4 border-l-2 border-emerald-500 text-sm sm:text-base italic text-zinc-700 dark:text-zinc-300"
                            >
                              {q}
                            </blockquote>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Formatted Paragraph Blocks */}
                    {sec.paragraphs && sec.paragraphs.length > 0 && (
                      <div className="space-y-6">
                        {sec.paragraphs.map((p, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-6 rounded-2xl bg-zinc-50/50 dark:bg-[#121215]/50 border border-zinc-200/60 dark:border-zinc-800/60 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line"
                          >
                            {p}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Images or Placeholder Visuals */}
                    {sec.image ? (
                      sec.isPlaceholderImage ? (
                        <div className="p-8 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col items-center justify-center text-center space-y-3">
                          <Camera className="w-8 h-8 text-zinc-400" />
                          <div className="text-sm font-mono text-zinc-600 dark:text-zinc-300 font-semibold">
                            Photo Snapshot Placeholder
                          </div>
                          {sec.imageCaption && (
                            <div className="text-xs font-mono text-zinc-400 max-w-md">
                              {sec.imageCaption}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="mt-4 rounded-xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-900/40 shadow-sm">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={sec.image}
                            alt={sec.title}
                            className="w-full h-auto object-cover max-h-[460px]"
                          />
                          {sec.imageCaption && (
                            <div className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 text-xs font-mono text-zinc-500 dark:text-zinc-400 border-t border-zinc-200/60 dark:border-zinc-800/60">
                              {sec.imageCaption}
                            </div>
                          )}
                        </div>
                      )
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next Case Study Navigation Footer */}
          <div className="pt-12 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              &larr; All Case Studies
            </Link>

            <Link
              href={`/work/${nextProject.id}`}
              className="group p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all flex items-center gap-4 text-right ml-auto"
            >
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                  Next Case Study
                </span>
                <span className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
