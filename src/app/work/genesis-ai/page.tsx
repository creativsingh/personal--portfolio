import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PERSONA_DATA } from "../../../data/persona";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { ProjectHeaderSection } from "../../../components/ProjectHeaderSection";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Image as ImageIcon,
  Video,
  Play,
  User,
  Clock,
  Monitor,
  Users,
  Wrench,
  HelpCircle,
  TrendingUp,
  Target,
  ShieldCheck,
  Building,
  Heart,
  Cpu,
  Brain,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Genesis AI CPQ — Case Study by ${PERSONA_DATA.name}`,
  description: "Reimagining Enterprise Product Configuration with AI case study.",
};

interface ImagePlaceholderProps {
  title: string;
  caption?: string;
  aspect?: "hero" | "wide" | "standard" | "tall";
}

function ImagePlaceholder({ title, caption, aspect = "standard" }: ImagePlaceholderProps) {
  const aspectStyles = {
    hero: "min-h-[340px] sm:min-h-[440px]",
    wide: "min-h-[260px] sm:min-h-[340px]",
    standard: "min-h-[220px] sm:min-h-[280px]",
    tall: "min-h-[300px] sm:min-h-[380px]",
  };

  return (
    <figure className="my-8 space-y-3">
      <div
        className={`relative w-full rounded-2xl border border-dashed border-emerald-500/30 dark:border-emerald-500/25 bg-gradient-to-b from-emerald-950/10 via-zinc-900/60 to-zinc-950/80 p-6 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden group shadow-lg ${aspectStyles[aspect]}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/20 transition-all duration-500" />

        <div className="relative z-10 space-y-3 max-w-lg mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 shadow-sm">
            <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
            [IMAGE PLACEHOLDER]
          </div>

          <h4 className="text-base sm:text-lg font-semibold text-zinc-100 tracking-tight">
            {title}
          </h4>

          {caption && (
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans max-w-md italic">
              {caption}
            </p>
          )}

          <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-emerald-500/70" />
            Visual Design Slot • UI Mockup
          </div>
        </div>
      </div>
    </figure>
  );
}

function VideoPlaceholder({ title, caption }: { title: string; caption?: string }) {
  return (
    <figure className="my-8 space-y-3">
      <div className="relative w-full min-h-[300px] sm:min-h-[400px] rounded-2xl border border-dashed border-emerald-500/40 dark:border-emerald-500/30 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black p-6 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden group shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

        <div className="relative z-10 space-y-4 max-w-lg mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-emerald-400 bg-emerald-950/90 border border-emerald-500/40 shadow-sm">
            <Video className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            [VIDEO PLACEHOLDER]
          </div>

          <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-inner group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 fill-emerald-400 translate-x-0.5" />
          </div>

          <h4 className="text-base sm:text-lg font-semibold text-zinc-100 tracking-tight">
            {title}
          </h4>

          {caption && (
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans max-w-md italic">
              {caption}
            </p>
          )}

          <div className="pt-1 flex items-center gap-2 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
            <span>MP4 / WebM / Embed Interaction Demo</span>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function GenesisAiPage() {
  const currentIndex = PERSONA_DATA.projects.findIndex((p) => p.id === "genesis-ai");
  const project = PERSONA_DATA.projects[currentIndex !== -1 ? currentIndex : 0] || PERSONA_DATA.projects[0];
  const nextProject = PERSONA_DATA.projects[(currentIndex + 1) % PERSONA_DATA.projects.length] || PERSONA_DATA.projects[0];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Shared Header Section */}
          <ProjectHeaderSection
            project={project}
            projectIndex={0}
            totalProjects={PERSONA_DATA.projects.length}
          />

          {/* Core Dilemma Quote */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border-l-4 border-emerald-500 bg-zinc-50 dark:bg-[#121215] shadow-sm">
            <p className="text-lg sm:text-xl italic font-medium text-emerald-950 dark:text-emerald-200 leading-relaxed">
              &ldquo;How do you redesign a legacy enterprise configurator used by sales teams every day—without disrupting years of learned behavior, while introducing AI as the primary way of configuring complex products?&rdquo;
            </p>
          </div>

          {/* 01 / Project Snapshot & Responsibilities */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                01 / Project Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Project Snapshot &amp; Responsibilities
              </h2>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80">
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400 block uppercase">Role</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Senior Product Designer</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400 block uppercase">Duration</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">8 Months</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400 block uppercase">Platform</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Enterprise SaaS (Web)</span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-zinc-400 block uppercase">Team</span>
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">CEO, VP Design, PM, Devs</span>
              </div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                My responsibilities extended far beyond designing interfaces. I worked across the complete product lifecycle—from understanding business strategy and legacy workflows to collaborating with engineering on implementation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                My responsibilities included:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-700 dark:text-zinc-300 font-mono">
                {[
                  "Product discovery alongside CEO & leadership",
                  "Auditing the legacy configurator",
                  "Mapping End User & Admin user journeys",
                  "Facilitating stakeholder workshops",
                  "Collaborating with PMs & VP of Design",
                  "Aligning solutions with dev feasibility",
                  "Designing scalable interaction patterns",
                  "Supporting implementation through design QA",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dual Panel Architecture Spotlight */}
            <div className="space-y-4 pt-2">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/40">
                  <Building className="w-3.5 h-3.5" />
                  Dual Panel System Architecture
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 pt-1">
                  Designing Two Interconnected Panels: Admin Side &amp; User Side
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                  A critical aspect of this project was designing two distinct yet synchronized panels that work in unison across the enterprise CPQ ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Admin Panel Card */}
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      01 / Admin Side Panel
                    </span>
                    <Wrench className="w-4 h-4 text-emerald-500" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    System Setup, Catalog &amp; Rule Engine
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Designed for system administrators to define the foundation of the product configurator:
                  </p>
                  <ul className="space-y-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-center gap-2">• Creating &amp; structuring product catalogs (eCatalog)</li>
                    <li className="flex items-center gap-2">• Defining Categories, Item Types &amp; Options</li>
                    <li className="flex items-center gap-2">• Setting pricing formulas, discounts &amp; dependencies</li>
                    <li className="flex items-center gap-2">• Configuring rule logic (inclusion/exclusion rules)</li>
                    <li className="flex items-center gap-2">• Managing cross-sell &amp; recommendation rules</li>
                  </ul>
                </div>

                {/* User Panel Card */}
                <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                      02 / End-User Side Panel
                    </span>
                    <Users className="w-4 h-4 text-teal-500" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    Sales Representative Configurator
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Designed for sales teams to build customer quotes efficiently:
                  </p>
                  <ul className="space-y-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-center gap-2">• Conversational AI intent-driven configuration</li>
                    <li className="flex items-center gap-2">• Dynamic option comparison &amp; selection cards</li>
                    <li className="flex items-center gap-2">• Real-time rule validation &amp; conflict warnings</li>
                    <li className="flex items-center gap-2">• Fast 1-click quote assembly &amp; export</li>
                    <li className="flex items-center gap-2">• Polished interface ready for live client demos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block">
                Core Ownership
              </span>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                More importantly, I became responsible for something less visible: creating clarity inside a highly complex enterprise product while ensuring every design decision balanced user needs, technical constraints, and business objectives across both Admin and End-User panels.
              </p>
            </div>

            <ImagePlaceholder
              title="Working on Genesis AI"
              caption="Current photograph from Kochi workation while architecting Genesis AI."
              aspect="wide"
            />
          </section>

          {/* 02 / Impact & Project Highlights */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                02 / Impact &amp; Highlights
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Transforming Enterprise CPQ Workflows
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Genesis AI wasn&apos;t simply a redesign project. It represented a shift in how enterprise sales teams interact with CPQ (Configure, Price, Quote) systems. Instead of navigating deeply nested configuration screens, sales representatives could describe customer requirements conversationally while AI generated product configurations in real time. The redesign focused on reducing complexity without reducing flexibility.
            </p>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Project Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                {[
                  "Redesigned the complete End User configurator experience",
                  "Introduced AI-assisted product configuration",
                  "Simplified complex enterprise workflows",
                  "Created scalable option card architecture",
                  "Balanced modern AI interactions with legacy business logic",
                  "Collaborated directly with executive leadership and engineering",
                ].map((highlight) => (
                  <div key={highlight} className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <ImagePlaceholder
              title="Hero Mockup"
              caption="Large full-width configurator interface showcasing the AI assistant and intent workspace."
              aspect="hero"
            />
          </section>

          {/* 03 / The Opportunity & Challenge */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                03 / Strategic Context
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                The Opportunity &amp; The Challenge
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-500" />
                  The Opportunity
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Traditional CPQ systems are incredibly powerful—and notoriously difficult to use. Sales reps spend more time configuring products than selling. As product complexity grows, so does the number of rules, dependencies, and validations.
                </p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  The opportunity was to fundamentally rethink how enterprise users interact with complex configuration systems by exploring AI as the primary interface while preserving precision.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-rose-500" />
                  The Challenge
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Enterprise configuration isn&apos;t like designing a simple form. Every product contains hundreds of combinations, dependencies, and business rules before a quote can be generated.
                </p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  We needed to balance two conflicting goals: introduce a completely new AI-assisted workflow without disrupting existing user expectations and learned habits.
                </p>
              </div>
            </div>

            <ImagePlaceholder
              title="Before & After"
              caption="Side-by-side comparison: Legacy Configurator beside redesigned AI-assisted configurator."
              aspect="wide"
            />
          </section>

          {/* 04 / Aligning on the Vision */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                04 / Leadership Alignment
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Aligning on the Vision
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Every successful product begins with alignment. Our journey started with a discussion with the CEO—not to review designs, but to establish a shared understanding of what success should look like. Rather than discussing colors, layouts, or components, the conversation focused entirely on business outcomes.
            </p>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                The Vision Was Clear:
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>Sales reps should spend less time configuring and more time building relationships.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>AI should reduce manual effort instead of adding another layer of complexity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  <span>The product itself should become the live demo presentation.</span>
                </li>
              </ul>
            </div>

            <ImagePlaceholder
              title="CEO Workshop"
              caption="Mapping key strategic outcomes and business vision with leadership."
              aspect="wide"
            />

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Key Themes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-700 dark:text-zinc-300 font-mono">
                {[
                  "Reduce time required to configure complex products",
                  "Eliminate repetitive manual adjustments through AI",
                  "Surface configuration conflicts before they become problems",
                  "Improve confidence during enterprise sales demos",
                  "Create a scalable platform for future industries & pricing models",
                ].map((theme) => (
                  <div key={theme} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{theme}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                My Design Mindset
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Rather than jumping directly into interface ideas, I wanted to understand the reasons behind every business objective. Throughout the project I continuously asked questions like:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono text-zinc-800 dark:text-zinc-200">
                {[
                  "Why are reps spending more time configuring than selling?",
                  "Why do users still depend on spreadsheets despite having CPQ?",
                  "Why are conflicts discovered so late?",
                  "Why do configuration mistakes require manual review?",
                  "Why do demos depend on decks rather than the product?",
                  "Why is critical information frequently overlooked?",
                ].map((q) => (
                  <div key={q} className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 italic">
                    &ldquo;{q}&rdquo;
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 05 / Understanding the Legacy Product */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                05 / Usability Audit
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Understanding the Legacy Product
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Before proposing solutions, I needed to understand how the existing configurator actually worked. Rather than reviewing a handful of screens, I imported hundreds of legacy flows into Miro and treated the process like a forensic investigation. The objective wasn&apos;t to identify visual inconsistencies—it was to uncover structural problems that stakeholders had gradually become accustomed to over years of usage.
            </p>

            <ImagePlaceholder
              title="Legacy Configurator Audit"
              caption="Large Miro board mapping hundreds of legacy flows, parameter grids, and friction points."
              aspect="hero"
            />

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                The Audit Focused On:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 font-mono">
                {[
                  "Where users hesitated",
                  "Where cognitive overload occurred",
                  "Which workflows repeatedly caused confusion",
                  "Which interaction patterns broke expectations",
                  "Where information hierarchy broke down",
                  "Which workflows created unnecessary manual effort",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-emerald-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 06 / Stakeholder Workshops & Key Insights */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                06 / Discovery Workshops
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Stakeholder Workshops &amp; Key Insights
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              The configurator supported multiple business teams. To ensure the redesign reflected real operational needs, we conducted collaborative workshops with stakeholders across Sales, Operations, Product, and Administration. Using the Miro audit as a shared workspace, we collectively reviewed workflows and highlighted critical features, usability issues, and opportunities for AI assistance.
            </p>

            <ImagePlaceholder
              title="Stakeholder Workshop"
              caption="Cross-functional alignment sessions in Miro with Sales, Ops, and Admin leadership."
              aspect="wide"
            />

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Listening Beyond Requests
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Stakeholders naturally described symptoms such as <em>&ldquo;The configurator feels slow&rdquo;</em> or <em>&ldquo;Users keep making mistakes.&rdquo;</em> Instead of accepting statements at face value, I asked: <em>&ldquo;What are users trying to achieve at this point?&rdquo;</em> and <em>&ldquo;What forces users to stop and think?&rdquo;</em> to uncover root workflow problems.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                4 Core Discovery Insights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "1. Configuration was overwhelming",
                    desc: "Users weren't struggling because products were inherently complicated—they struggled because the interface exposed too much information simultaneously.",
                  },
                  {
                    title: "2. AI should simplify—not replace—decisions",
                    desc: "Enterprise users still wanted visibility and control. AI needed to become a collaborative assistant rather than an autonomous decision maker.",
                  },
                  {
                    title: "3. Context frequently disappeared",
                    desc: "As users navigated deeper into configuration, they lost awareness of where they were and what product they were currently modifying.",
                  },
                  {
                    title: "4. Flexibility introduced inconsistency",
                    desc: "Administrator-controlled layouts created dozens of unpredictable interface combinations, making the product difficult to scale.",
                  },
                ].map((insight) => (
                  <div key={insight.title} className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                    <h4 className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                      {insight.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {insight.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 07 / Design Principles */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                07 / Design System Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                5 Guiding Design Principles
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "1. Make AI feel like a teammate", desc: "AI should reduce effort while preserving transparency and user confidence." },
                { title: "2. Preserve familiar mental models", desc: "Innovation shouldn't require users to relearn years of product knowledge." },
                { title: "3. Reveal complexity progressively", desc: "Users should encounter information only when it becomes relevant." },
                { title: "4. Design for variability", desc: "Interfaces should remain stable regardless of admin configs or product complexity." },
                { title: "5. Prioritize scalability", desc: "Every component should support future products, industries, and models without redesign." },
              ].map((p, idx) => (
                <div key={p.title} className={`p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5 ${idx === 4 ? "sm:col-span-2" : ""}`}>
                  <h4 className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">{p.title}</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
                </div>
              ))}
            </div>

            <ImagePlaceholder
              title="Design Principles Illustration"
              caption="Visual architectural principles mapping progressive disclosure and AI teammate dynamics."
              aspect="wide"
            />
          </section>

          {/* 08 / First Explorations */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                08 / Execution
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                From Discovery to Initial Iterations
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Only after understanding the business vision, auditing the legacy system, and aligning with stakeholders did we begin exploring interface directions. Our first iterations explored how AI, navigation, hierarchy, and component architecture could work together as one cohesive experience.
            </p>

            <ImagePlaceholder
              title="First Figma Exploration"
              caption="Early high-fidelity layout iteration mapping AI panel side-by-side with parameter grids."
              aspect="hero"
            />
          </section>

          {/* PART 2 */}

          {/* 09 / Designing the Solution & AI Panel */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                09 / Core Experience
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Designing the Solution &amp; The AI Panel
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Discovery gave us a clear understanding of the problems. The next step was designing a configuration experience that reduced decision-making without reducing flexibility.
            </p>

            <ImagePlaceholder
              title="Final Configurator Overview"
              caption="Full-screen mockup displaying the AI left panel, collapsing header, sticky category headers, and responsive option cards."
              aspect="hero"
            />

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                The AI Panel: Primary Gateway to Configuration
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The AI panel became the centerpiece of the redesign because it reversed the traditional workflow: instead of asking users to configure products manually step-by-step, they describe needs conversationally while AI generates the initial configuration. Manual interaction became a refinement step.
              </p>

              <VideoPlaceholder
                title="AI Panel Interaction"
                caption="Animation showing AI expanding into the workspace, evaluating parameters, and generating a validated configuration."
              />
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
              <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Why the AI Lives on the Left Side
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Users already associate the left side of the screen with navigation, conversation, and workflow guidance (ChatGPT, GitHub Copilot). Placing AI on the left reduced the learning curve and communicated its primary role.
              </p>

              {/* Workflow Flow Diagram */}
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
                <span className="text-xs font-mono font-semibold uppercase text-emerald-500 block">
                  Intelligent Intent Flow Architecture:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200">
                  <span className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800">Describe Requirements</span>
                  <span className="text-emerald-500">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">AI Builds Config</span>
                  <span className="text-emerald-500">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800">User Reviews</span>
                  <span className="text-emerald-500">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800">User Refines</span>
                  <span className="text-emerald-500">→</span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500 text-zinc-950 font-bold">Generate Quote</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                What the AI Panel Enables:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-mono">
                {[
                  "Describe requirements conversationally",
                  "Generate product configs automatically",
                  "Resolve conflicts through contextual prompts",
                  "Understand underlying configuration logic",
                  "Spend more time talking with customers",
                  "Eliminate repetitive manual parameter entry",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 10 / Persistent Context */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                10 / UX Micro-Interactions
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Designing Persistent Context &amp; Navigation
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Enterprise configurations often contain hundreds of options. As users progressed through the workflow, important context gradually disappeared. Several key interaction decisions focused on preserving orientation.
            </p>

            {/* Collapsing Header */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Header Redesign: Collapsing Header
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                As users scroll deeper, the hero header smoothly transitions into a compact sticky bar preserving product image, name, primary actions, and key identifiers—maintaining orientation while maximizing workspace.
              </p>
              <VideoPlaceholder
                title="Collapsing Header"
                caption="Micro-interaction video showing header compressing into compact persistent navigation bar."
              />
            </div>

            {/* Sticky Item Type Headers */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Sticky Item Type Headers
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Each Item Type header remains docked to the top while its associated options are in view, providing a persistent visual anchor for section context during long configuration sessions.
              </p>
              <VideoPlaceholder
                title="Sticky Category Prototype"
                caption="Prototype showing section headers pinning dynamically as the workspace scrolls."
              />
            </div>
          </section>

          {/* 11 / Hierarchy & Option Cards */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                11 / Component Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Information Hierarchy &amp; Option Card Architecture
              </h2>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                3-Level Hierarchy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1">
                  <div className="text-emerald-500 font-bold">1. Item Category</div>
                  <div className="text-zinc-500">Highest level product grouping (persistent tabs).</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1">
                  <div className="text-emerald-500 font-bold">2. Item Type</div>
                  <div className="text-zinc-500">Groups related options (sticky section headers).</div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1">
                  <div className="text-emerald-500 font-bold">3. Configuration Options</div>
                  <div className="text-zinc-500">Flexible card components for comparison &amp; selection.</div>
                </div>
              </div>
            </div>

            <ImagePlaceholder
              title="Hierarchy Diagram"
              caption="Visual diagram mapping Item Category → Item Type → Configuration Options structure."
              aspect="wide"
            />

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Rethinking the Option Card System
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The option card was the most technically demanding component. It needed to adapt gracefully to administrator settings (enabling/disabling images, pricing, quantity controls, or badges) without layout breakdown.
              </p>

              <ImagePlaceholder
                title="Legacy Card vs Redesigned Card"
                caption="Side-by-side comparison of cluttered legacy option cards vs streamlined modular card architecture."
                aspect="wide"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ImagePlaceholder
                  title="Card Variant Matrix"
                  caption="Exhaustive design token matrix mapping all administrator-enabled layout states."
                  aspect="standard"
                />
                <ImagePlaceholder
                  title="1-Up • 2-Up • 3-Up Card Variants"
                  caption="Responsive grid layouts adapting across Full Width (1-Up), Two Column (2-Up), and Three Column (3-Up)."
                  aspect="standard"
                />
              </div>
            </div>
          </section>

          {/* 12 / Business Priorities & Constraints */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                12 / Feasibility &amp; Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Business Alignment &amp; Technical Constraints
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-mono uppercase tracking-wider text-emerald-500">
                  Business Priorities
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                  <li>• <strong>Sales Teams:</strong> Faster configuration across industries.</li>
                  <li>• <strong>Administrators:</strong> Fewer errors &amp; clearer validation rules.</li>
                  <li>• <strong>Product Management:</strong> AI-first market readiness.</li>
                  <li>• <strong>Leadership:</strong> Modern enterprise CPQ demo platform.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 font-mono uppercase tracking-wider text-emerald-500">
                  Technical Realities
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                  <li>• <strong>Legacy Data Structure:</strong> Backend nested attribute limits.</li>
                  <li>• <strong>Rules Engine:</strong> Sequential validation processing constraints.</li>
                  <li>• <strong>Navigation Arch:</strong> Preserving core structural frameworks.</li>
                  <li>• <strong>AI Engine Sync:</strong> Real-time conversational sync with CPQ logic.</li>
                </ul>
              </div>
            </div>

            <ImagePlaceholder
              title="Technical Constraints & System Architecture"
              caption="System architectural blueprint aligning design tokens with backend rules engine constraints."
              aspect="wide"
            />

            <ImagePlaceholder
              title="Design Review Process"
              caption="Continuous cross-functional review cycles between Leadership, PM, Engineering, and Design."
              aspect="wide"
            />
          </section>

          {/* 13 / Outcomes, Pride & Reflection */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                13 / Retrospective
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Outcomes &amp; Reflection
              </h2>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Outcomes
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The redesign established a stronger foundation for the next generation of the Genesis configurator. By combining AI-assisted workflows with clearer information hierarchy and scalable interaction patterns, the experience became significantly easier to navigate while remaining compatible with existing enterprise workflows.
              </p>
            </div>

            <ImagePlaceholder
              title="Final Product Showcase"
              caption="Complete Genesis AI Configurator design showcase across End User and Admin panels."
              aspect="hero"
            />

            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-zinc-900/40 to-zinc-950 border border-emerald-500/20 space-y-4">
              <h3 className="text-xl font-bold text-zinc-100">
                What I&apos;m Most Proud Of
              </h3>
              <p className="text-base text-zinc-300 leading-relaxed">
                Looking back, the achievement I&apos;m most proud of isn&apos;t a single interface or interaction—it&apos;s the process. Despite product complexity and delivery pace, collaboration remained consistent across leadership, product management, design, and engineering. The result wasn&apos;t simply a redesigned configurator—it was a shared understanding of what the future of enterprise configuration could look like.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Reflection
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Working on Genesis AI fundamentally changed how I think about enterprise software. At the beginning of the project, I viewed configurators primarily as interfaces for selecting options. Over time, I realized the real challenge wasn&apos;t configuration itself—it was helping users make confident decisions inside an environment filled with complexity.
              </p>
              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                Rather than asking &ldquo;How can we redesign this screen?&rdquo;, I began asking &ldquo;How can we reduce the cognitive effort required to reach the right decision?&rdquo; That question continues to shape how I approach enterprise product design today.
              </p>
            </div>

            <ImagePlaceholder
              title="Team Photo / Closing Hero"
              caption="Closing project celebration & team snapshot."
              aspect="wide"
            />

            {/* Thank You Card */}
            <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-center space-y-3">
              <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 flex items-center justify-center gap-2">
                Thank You <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              </div>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you for taking the time to explore this case study. If you&apos;d like to discuss enterprise UX, AI-assisted workflows, design systems, or product strategy, I&apos;d love to connect.
              </p>
            </div>
          </section>

          {/* Next Case Study Footer Navigation */}
          <section className="pt-12 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <Link
              href={`/work/${nextProject.id}`}
              className="group p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
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
