"use client";

import React from "react";
import Link from "next/link";
import { PERSONA_DATA } from "../data/persona";
import { MapPin, ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

interface CommunitySpeakingProps {
  isSpeakingPage?: boolean;
}

export function CommunitySpeaking({ isSpeakingPage = false }: CommunitySpeakingProps) {
  const displayedTalks = isSpeakingPage ? PERSONA_DATA.talks : PERSONA_DATA.talks.slice(0, 3);

  return (
    <section id="community" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80 overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6 space-y-16">
        
        {/* PixelPeps Community Section (Only shown on homepage, hidden on full /speaking page) */}
        {!isSpeakingPage && (
          <div>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
              03 / Community Leadership
            </span>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
                  PixelPeps Community
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                    Organizer
                  </span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base max-w-xl">
                  {PERSONA_DATA.community.description}
                </p>
              </div>

              <a
                href={PERSONA_DATA.socials.pixelpeps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-mono font-semibold hover:opacity-90 transition-opacity shrink-0"
              >
                pixelpeps.com <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Community Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {PERSONA_DATA.community.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80"
                >
                  <div className="text-2xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Activity Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PERSONA_DATA.community.activities.map((act) => (
                <div
                  key={act}
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-zinc-100/50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <Sparkles className="w-4 h-4 text-pink-500 shrink-0" />
                  <span>{act}</span>
                </div>
              ))}
            </div>

            {/* True Edge-to-Edge Viewport Full Width Horizontal Line */}
            <div className="w-screen relative left-1/2 -translate-x-1/2 border-b border-zinc-200/80 dark:border-zinc-800/80 mt-16" />
          </div>
        )}

        {/* Public Speaking & Workshops Section */}
        <div id="speaking">
          <div className="mb-8">
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
              {isSpeakingPage ? "Keynotes & Workshops" : "04 / Keynotes & Workshops"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {isSpeakingPage ? "All Public Speaking & Workshops" : "Public Speaking & Knowledge Sharing"}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base max-w-xl">
              Delivered talks and interactive sessions at top tech communities &amp; academic institutes.
            </p>
          </div>

          {/* Talks Table / List */}
          <div className="space-y-4">
            {displayedTalks.map((talk) => (
              <div
                key={talk.id}
                className="p-5 sm:p-6 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                        {talk.venue}
                      </span>
                      {talk.badge && (
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          {talk.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {talk.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono">
                      Topic: {talk.topic}
                    </p>
                  </div>

                  <div className="text-left sm:text-right shrink-0 font-mono text-xs text-zinc-500 space-y-1">
                    <div className="flex items-center sm:justify-end gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {talk.location} ({talk.date})
                    </div>
                    {talk.attendees && (
                      <div className="text-emerald-600 dark:text-emerald-400 font-medium">
                        {talk.attendees}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button (Secondary styling, only shown on homepage) */}
          {!isSpeakingPage && (
            <div className="mt-10 flex justify-center">
              <Link
                href="/speaking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all shadow-xs"
              >
                View All Talks &amp; Workshops
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
