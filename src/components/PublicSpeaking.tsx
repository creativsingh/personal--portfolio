"use client";

import React from "react";
import Link from "next/link";
import { PERSONA_DATA } from "../data/persona";
import { Calendar, ArrowRight } from "lucide-react";

interface PublicSpeakingProps {
  isSpeakingPage?: boolean;
}

export function PublicSpeaking({ isSpeakingPage = false }: PublicSpeakingProps) {
  const displayedTalks = isSpeakingPage ? PERSONA_DATA.talks : PERSONA_DATA.talks.slice(0, 4);

  return (
    <section id="speaking" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
              {isSpeakingPage ? "PUBLIC SPEAKING & WORKSHOPS" : "04 / Sharing Knowledge"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Speaking about design, AI & frontend engineering.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base max-w-xl">
              From community meetups to tech conferences, I enjoy sharing practical insights on product design, design systems, AI, and building modern digital experiences.
            </p>
          </div>

          {isSpeakingPage && (
            <span className="text-xs font-mono text-zinc-400">
              All Speaking Engagements ({PERSONA_DATA.talks.length})
            </span>
          )}
        </div>

        {/* Speaking Cards Grid */}
        <div className="grid grid-cols-1 gap-4">
          {displayedTalks.map((talk) => (
            <div
              key={talk.id}
              className="p-5 sm:p-6 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 max-w-xl">
                  <div className="flex flex-wrap items-center gap-2">
                    {talk.community && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {talk.community}
                      </span>
                    )}
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
                  {talk.eventName && (
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono">
                      Event Name: {talk.eventName}
                    </p>
                  )}
                </div>

                <div className="text-left sm:text-right shrink-0 font-mono text-xs text-zinc-500 space-y-1">
                  <div className="flex items-center sm:justify-end gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {talk.date}
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

        {/* View More Button (only shown on homepage) */}
        {!isSpeakingPage && (
          <div className="mt-8 flex justify-center">
            <Link
              href="/speaking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-700/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-all shadow-xs"
            >
              View More Speaking Sessions
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
