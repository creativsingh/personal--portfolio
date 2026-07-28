import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PERSONA_DATA } from "../../../data/persona";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { ProjectHeaderSection } from "../../../components/ProjectHeaderSection";
import { ArrowRight, Quote, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: `Genesis AI — Case Study by ${PERSONA_DATA.name}`,
  description: PERSONA_DATA.projects[0].tagline,
};

export default function GenesisAiPage() {
  const project = PERSONA_DATA.projects[0]; // Genesis AI
  const nextProject = PERSONA_DATA.projects[1]; // Commudle

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Shared Header to Key Impact Section */}
          <ProjectHeaderSection
            project={project}
            projectIndex={0}
            totalProjects={PERSONA_DATA.projects.length}
          />

          {/* 01 / Executive Overview */}
          <section className="space-y-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              01 / Executive Overview
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </section>

          {/* 02 / My Role */}
          {project.roleDescription && (
            <section className="space-y-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                02 / My Role
              </h2>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                {project.roleDescription}
              </p>
            </section>
          )}

          {/* 03 / Case Study Deep-Dive */}
          {project.sections && project.sections.length > 0 && (
            <section className="space-y-10 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                  03 / Case Study Deep-Dive
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                  Process, Discovery &amp; Execution
                </h2>
              </div>

              <div className="space-y-12">
                {project.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                        {sec.title}
                      </h3>
                      {sec.description && (
                        <p className="text-base font-medium text-zinc-700 dark:text-zinc-300">
                          {sec.description}
                        </p>
                      )}
                    </div>

                    {/* Paragraphs */}
                    {sec.paragraphs && sec.paragraphs.length > 0 && (
                      <div className="space-y-4">
                        {sec.paragraphs.map((p, pIdx) => (
                          <div
                            key={pIdx}
                            className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed whitespace-pre-line"
                          >
                            {p}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* CEO Quotes */}
                    {sec.quotes && sec.quotes.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                        {sec.quotes.map((q, qIdx) => (
                          <div
                            key={qIdx}
                            className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2 relative"
                          >
                            <Quote className="w-5 h-5 text-emerald-500/40" />
                            <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 italic leading-relaxed">
                              {q}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Images or Workation Placeholders */}
                    {sec.image && (
                      <div className="space-y-2">
                        {sec.isPlaceholderImage ? (
                          <div className="p-8 sm:p-12 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-[#121215] flex flex-col items-center justify-center text-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                              <Camera className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                              <div className="text-sm font-semibold font-mono text-zinc-800 dark:text-zinc-200">
                                Workation Photo Placeholder
                              </div>
                              <div className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md">
                                A snapshot of working on this project during a workation in Kochi, Kerala.
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-900/50 shadow-md">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={sec.image}
                              alt={sec.imageCaption || sec.title}
                              className="w-full h-auto object-cover max-h-[500px]"
                            />
                          </div>
                        )}
                        {sec.imageCaption && (
                          <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 text-center italic">
                            {sec.imageCaption}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next Case Study Footer Navigation */}
          <section className="pt-12 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <Link
              href={`/work/${nextProject.id}`}
              className="group p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all block"
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                  Next Case Study
                </span>
                <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {nextProject.title}
                </div>
                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {nextProject.category}
                </div>
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-200/60 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
