import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PERSONA_DATA } from "../../../data/persona";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { ProjectHeaderSection } from "../../../components/ProjectHeaderSection";
import { ArrowRight, HeartPulse, Moon, Sparkles, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: `Prana AI — Case Study by ${PERSONA_DATA.name}`,
  description: PERSONA_DATA.projects[2].tagline,
};

export default function PranaAiPage() {
  const project = PERSONA_DATA.projects[2]; // Prana AI
  const nextProject = PERSONA_DATA.projects[3]; // Hunger Express

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Shared Header to Key Impact Section */}
          <ProjectHeaderSection
            project={project}
            projectIndex={2}
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
          <section className="space-y-10 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-2">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                03 / Case Study Deep-Dive
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Biometric Telemetry &amp; Calm Healthcare UX
              </h2>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <HeartPulse className="w-5 h-5 text-emerald-500" />
                  <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                    Real-Time Vital Trends
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Designed high-frame-rate trend graphics translating raw HRV, SPO2, and sleeping telemetry into calm visual cards.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <Sparkles className="w-5 h-5 text-teal-500" />
                  <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                    Empathetic AI Guidance
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Integrated OpenAI language layer to summarize health trends into warm, actionable daily advice.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <Moon className="w-5 h-5 text-indigo-500" />
                  <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                    Adaptive Dark Mode UI
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Crafted low-luminescence night themes that adjust contrast dynamically during early morning and late evening check-ins.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <Activity className="w-5 h-5 text-pink-500" />
                  <div className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                    Validated Beta Testing
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Conducted testing with 40+ active users resulting in a 94% clarity satisfaction score and 38% higher daily log retention.
                  </p>
                </div>
              </div>
            </div>
          </section>

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
