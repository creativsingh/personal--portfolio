"use client";

import React from "react";
import { PERSONA_DATA } from "../data/persona";

function getToolLogo(name: string) {
  switch (name) {
    case "HTML5":
      return (
        <svg className="w-4 h-4 text-orange-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24 2.41 21.563zm17.027 5.09H5.56l.322 3.62h10.995l-.442 4.97-4.464 1.205-4.464-1.205-.286-3.21H3.048l.558 6.262 8.363 2.316 8.363-2.316z" />
        </svg>
      );
    case "CSS3":
      return (
        <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 0h21l-1.91 21.563L11.97 24 2.41 21.563zm17.027 5.09H5.56l.322 3.62h10.995l-.442 4.97-4.464 1.205-4.464-1.205-.286-3.21H3.048l.558 6.262 8.363 2.316 8.363-2.316z" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="#F7DF1E" />
          <path d="M6.4 19.4c.5.8 1.4 1.4 2.6 1.4 1.2 0 1.9-.6 1.9-1.5 0-1-.8-1.4-2.2-2l-.7-.3c-2.2-1-3.3-2.1-3.3-4.4 0-2.3 1.8-4.1 4.5-4.1 2 0 3.3.7 4.1 2.2l-2.4 1.5c-.4-.8-1-1.2-1.8-1.2-.8 0-1.4.5-1.4 1.2 0 .8.6 1.2 1.9 1.7l.7.3c2.5 1.1 3.7 2.2 3.7 4.6 0 2.7-2.1 4.3-5.2 4.3-2.6 0-4.2-1.1-5-2.7l2.6-1.5zm11.7.3c.7.4 1.5.7 2.3.7.8 0 1.2-.3 1.2-.8 0-.6-.4-.9-1.4-1.3l-.7-.3c-2-.8-3.1-1.9-3.1-3.9 0-2.2 1.7-3.8 4.2-3.8 1.8 0 2.9.6 3.7 1.8l-2.2 1.4c-.4-.6-.9-.9-1.5-.9-.6 0-1 .3-1 .7 0 .5.3.8 1.2 1.1l.7.3c2.3.9 3.3 2 3.3 4.1 0 2.5-1.9 4-4.8 4-2.3 0-3.7-.8-4.5-2.2l2.6-1.6z" fill="#000" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M13.72 17.15c.42.27.94.45 1.5.45.83 0 1.28-.38 1.28-.96 0-.64-.52-.92-1.42-1.28l-.48-.19c-1.38-.54-2.24-1.27-2.24-2.69 0-1.74 1.4-2.8 3.51-2.8 1.15 0 2.05.31 2.69.75l-.75 1.34c-.47-.32-1.12-.55-1.89-.55-.83 0-1.28.36-1.28.87 0 .58.45.83 1.32 1.18l.48.19c1.55.62 2.38 1.35 2.38 2.82 0 1.85-1.45 2.92-3.7 2.92-1.32 0-2.38-.38-3.05-.87l.85-1.18zM9.54 11.23h-2.32v7.77h-1.8v-7.77h-2.32v-1.47h6.44v1.47z" fill="#FFF" />
        </svg>
      );
    case "React":
      return (
        <svg className="w-4 h-4 text-cyan-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2.5" />
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case "Next.js":
      return (
        <svg className="w-4 h-4 text-zinc-900 dark:text-zinc-100 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.83 17.65L10.3 7.82h-1.8v8.36h1.55v-6.3l6.08 7.77c-.43.27-.88.5-1.3.66zM15.45 7.82h1.55v6.08l-1.55-1.98V7.82z" />
        </svg>
      );
    case "Tailwind CSS":
      return (
        <svg className="w-4 h-4 text-sky-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg className="w-4 h-4 text-zinc-900 dark:text-zinc-100 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "Vercel":
      return (
        <svg className="w-4 h-4 text-zinc-900 dark:text-zinc-100 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1L24 22H0L12 1Z" />
        </svg>
      );
    case "Antigravity":
      return (
        <svg className="w-4 h-4 text-emerald-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      );
    case "Figma":
      return (
        <svg className="w-4 h-4" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z" fill="#FF7262" />
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#1ABCFE" />
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
        </svg>
      );
    case "Adobe Illustrator":
      return (
        <svg className="w-4 h-4 text-amber-600 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#330000" />
          <path d="M7.8 17.5h-1.6l2.9-8.4h1.7l2.9 8.4h-1.6l-.7-2.1H8.5l-.7 2.1zm1.2-3.4h2l-1-3.1-1 3.1zM17.1 17.5h-1.5V11h1.5v6.5zm-.8-7.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FF9A00" />
        </svg>
      );
    case "Adobe Photoshop":
      return (
        <svg className="w-4 h-4 text-blue-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="4" fill="#001E36" />
          <path d="M6.3 17.5V9.1h3.3c1.7 0 2.8.9 2.8 2.3 0 1.5-1.1 2.3-2.8 2.3H8v3.8H6.3zm1.7-5.3h1.4c.8 0 1.4-.4 1.4-1 0-.7-.6-1-1.4-1H8v2zm7.4 5.5c-1.3 0-2.2-.6-2.5-1.5l1.3-.6c.2.5.7.8 1.3.8.6 0 1-.3 1-.7 0-.5-.4-.7-1.3-1l-.5-.2c-1.2-.4-1.9-1.1-1.9-2.2 0-1.4 1.1-2.2 2.6-2.2 1.1 0 2 .5 2.4 1.3l-1.2.6c-.2-.4-.6-.6-1.1-.6-.6 0-.9.3-.9.7 0 .4.3.6 1.1.9l.5.2c1.4.5 2.1 1.2 2.1 2.3 0 1.5-1.2 2.2-2.8 2.2z" fill="#31A8FF" />
        </svg>
      );
    case "LottieFiles":
      return (
        <svg className="w-4 h-4 text-teal-400 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      );
    default:
      return null;
  }
}

export function ToolStack() {
  const categories: Array<'Design' | 'Frontend' | 'Development'> = [
    "Design",
    "Frontend",
    "Development",
  ];

  return (
    <section className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* Section Header */}
        <div>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
            05 / Technical Stack &amp; Tools
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            The tools behind every interface I build.
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base max-w-xl">
            From design systems to production-ready code, this is the toolkit I use to craft, build, and ship digital experiences.
          </p>
        </div>

        {/* Grouped Stack Grid */}
        <div className="space-y-10">
          {categories.map((catKey) => {
            const groupTools = PERSONA_DATA.tools.filter((t) => t.category === catKey);
            if (groupTools.length === 0) return null;

            return (
              <div key={catKey} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-widest">
                    {catKey}
                  </h3>
                  <div className="h-px flex-1 bg-zinc-200/60 dark:bg-zinc-800/60" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {groupTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-center gap-3 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100/80 dark:hover:bg-zinc-900/60 transition-all group"
                    >
                      {/* Icon Container matching Philosophy & Community icon styling */}
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shrink-0 group-hover:scale-105 transition-transform">
                        {getToolLogo(tool.name)}
                      </div>

                      <div className="font-semibold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 truncate">
                        {tool.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
