import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PERSONA_DATA } from "../../../data/persona";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { ProjectHeaderSection } from "../../../components/ProjectHeaderSection";
import {
  ArrowLeft,
  ArrowRight,
  User,
  Clock,
  Monitor,
  Users,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Target,
  FileText,
  Activity,
  HeartPulse,
  Brain,
  Compass,
  Calendar,
  Layers,
  HelpCircle,
  Image as ImageIcon,
  Check,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Prana AI — Case Study by ${PERSONA_DATA.name}`,
  description:
    "Designing an AI-powered wellness platform that transforms complex health data into personalized actions.",
};

interface ImagePlaceholderProps {
  title: string;
  caption?: string;
  aspect?: "hero" | "wide" | "standard" | "tall";
}

function ImagePlaceholder({ title, caption, aspect = "standard" }: ImagePlaceholderProps) {
  const aspectStyles = {
    hero: "min-h-[320px] sm:min-h-[420px]",
    wide: "min-h-[260px] sm:min-h-[340px]",
    standard: "min-h-[220px] sm:min-h-[280px]",
    tall: "min-h-[300px] sm:min-h-[380px]",
  };

  return (
    <figure className="my-8 space-y-3">
      <div
        className={`relative w-full rounded-2xl border border-dashed border-emerald-500/30 dark:border-emerald-500/25 bg-gradient-to-b from-emerald-950/10 via-zinc-900/60 to-zinc-950/80 p-6 sm:p-8 flex flex-col items-center justify-center text-center overflow-hidden group shadow-lg ${aspectStyles[aspect]}`}
      >
        {/* Subtle Decorative Grid Pattern & Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/20 transition-all duration-500" />

        {/* Content Container */}
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

          {/* Wireframe Mockup Visual Accents */}
          <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-emerald-500/70" />
            Visual Design Slot • Mobile UI Mockup
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function PranaAiPage() {
  const project = PERSONA_DATA.projects[2]; // Prana AI
  const nextProject = PERSONA_DATA.projects[3]; // Hunger Express

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 space-y-16">
          
          {/* Shared Header Section (Consistent across all case studies) */}
          <ProjectHeaderSection
            project={project}
            projectIndex={2}
            totalProjects={PERSONA_DATA.projects.length}
          />

          {/* Featured Subtitle Quote */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border-l-4 border-emerald-500 bg-zinc-50 dark:bg-[#121215]">
            <p className="text-base sm:text-lg italic font-medium text-emerald-950 dark:text-emerald-200">
              &ldquo;People don&apos;t need more health data—they need confidence in what to do next.&rdquo;
            </p>
          </div>

          {/* 01 / Executive Overview */}
          <section className="space-y-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                01 / Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Executive Overview
              </h2>
            </div>
            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Prana AI is an AI-powered wellness platform that combines facial health scanning, personalized wellness scoring, AI-generated health plans, expert consultations, and habit tracking into one cohesive experience.
              </p>
              <p>
                Over twelve months, I designed the complete mobile experience—from product discovery and research to interaction design, visual design, and developer handoff.
              </p>
            </div>
          </section>

          {/* 02 / Project Snapshot Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                02 / Snapshot
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Project Snapshot
              </h2>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <User className="w-3.5 h-3.5 text-emerald-500" />
                    Role
                  </div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Lead Product Designer
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    Duration
                  </div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    12 Months
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <Monitor className="w-3.5 h-3.5 text-emerald-500" />
                    Platform
                  </div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    iOS &amp; Android
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <Users className="w-3.5 h-3.5 text-emerald-500" />
                    Team
                  </div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    1 Designer · 3 Developers · Product Founder
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium">
                  Responsibilities
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Product Discovery",
                    "User Research",
                    "UX Strategy",
                    "User Flows",
                    "Wireframing",
                    "UI Design",
                    "Prototyping",
                    "Design QA",
                    "Brand Identity",
                  ].map((resp) => (
                    <span
                      key={resp}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 shadow-2xs"
                    >
                      {resp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 03 / Impact Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                03 / Impact
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Impact
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Rather than simply creating another fitness application, the objective was to build a platform capable of translating complex health information into meaningful, personalized actions.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                During beta testing:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Designed 100+ production-ready mobile screens",
                  "Built the complete end-to-end wellness journey",
                  "Introduced AI-powered wellness scoring",
                  "Reduced consultation booking to a two-step experience",
                  "92% of beta users reported increased motivation to maintain healthier routines",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3 ${
                      idx === 4 ? "sm:col-span-2 border-emerald-500/30 bg-emerald-500/5" : ""
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* HERO IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Hero mockup showing Home Dashboard + Wellness Score"
              aspect="hero"
            />
          </section>

          {/* 04 / The Opportunity Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                04 / Opportunity
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                The Opportunity
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Most wellness applications collect enormous amounts of information.</p>

              {/* Data Metrics Pills */}
              <div className="flex flex-wrap gap-2.5 py-2">
                {["Heart rate.", "Sleep.", "Nutrition.", "Exercise.", "Stress.", "Blood pressure."].map(
                  (metric) => (
                    <span
                      key={metric}
                      className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/70"
                    >
                      {metric}
                    </span>
                  )
                )}
              </div>

              <p>Yet they often leave users asking one simple question:</p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-950 dark:border dark:border-zinc-800 text-center shadow-xl">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-400 font-mono">
                &ldquo;What should I actually do next?&rdquo;
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Instead of empowering users, many health apps overwhelm them with disconnected graphs and statistics.
              </p>
              <p>
                Our opportunity was to design an experience that transforms health information into clear, personalized guidance.
              </p>
            </div>
          </section>

          {/* 05 / The Challenge Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                05 / Challenge
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                The Challenge
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Designing an AI-powered health product introduced challenges beyond traditional fitness applications.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                The experience needed to:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Build trust around AI-generated recommendations.",
                  "Reduce friction during lengthy health assessments.",
                  "Simplify complex medical information.",
                  "Encourage long-term behavioral change.",
                  "Make health coaching approachable.",
                  "Balance automation with user control.",
                ].map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3"
                  >
                    <Target className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                      {challenge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200 pt-2">
              Rather than designing individual screens, the challenge was designing an entire wellness journey.
            </p>
          </section>

          {/* 06 / My Role Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                06 / Responsibilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                My Role
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>As the sole Product Designer, I owned the complete product experience.</p>
              <p>
                From the earliest discovery workshops through launch preparation, I collaborated closely with the founders and engineers to shape both the product strategy and the user experience.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                My responsibilities included:
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Discovery",
                  "User Research",
                  "Information Architecture",
                  "Experience Strategy",
                  "Wireframes",
                  "High Fidelity UI",
                  "Interactive Prototypes",
                  "Design Documentation",
                  "Developer Handoff",
                  "Design QA",
                  "Brand Exploration",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* TIMELINE IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Timeline showing Discovery → Research → UX → UI → Testing → Launch"
              aspect="wide"
            />
          </section>

          {/* 07 / Defining Success Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                07 / Success Criteria
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Defining Success
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Before exploring interfaces, we aligned on what success should look like.
            </p>

            <div className="space-y-3">
              <h3 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                A successful experience would allow users to:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Understand their health within minutes.",
                  "Feel confident using AI recommendations.",
                  "Complete onboarding without frustration.",
                  "Build healthier routines.",
                  "Access experts effortlessly.",
                  "Stay engaged over time.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3"
                  >
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              These principles became the foundation for every design decision that followed.
            </p>
          </section>

          {/* 08 / Understanding the Product Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                08 / Product Documentation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Understanding the Product
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              The client provided an extensive collection of documentation covering:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                "User journeys",
                "Business requirements",
                "Wellness scoring logic",
                "User personas",
                "Feature specifications",
                "Brand direction",
                "Consultation workflows",
              ].map((doc) => (
                <div
                  key={doc}
                  className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  {doc}
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Rather than treating these as implementation documents, I used them to understand how business goals, AI capabilities, and user expectations intersected.
            </p>

            {/* DOCUMENTATION FOLDER IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Screenshot of project documentation folder"
              caption="The client shared an extensive library of research, scoring logic, business requirements, and user journey documentation that informed early product decisions."
              aspect="wide"
            />
          </section>

          {/* 09 / Understanding Users Section */}
          <section className="space-y-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                09 / User Research
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Understanding Users
              </h2>
            </div>

            <div className="space-y-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Before designing solutions, I wanted to understand where existing wellness products failed.
              </p>
              <p>
                Research focused less on identifying desired features and more on uncovering behavioral patterns.
              </p>
              <p>
                We interviewed potential users with different health goals, activity levels, and lifestyles.
              </p>
            </div>

            {/* Key Insights */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Brain className="w-5 h-5 text-emerald-500" />
                Key Insights
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <div className="font-bold text-base text-zinc-900 dark:text-zinc-100 text-emerald-600 dark:text-emerald-400">
                    Users wanted clarity—not more information.
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    People felt overwhelmed by dashboards full of numbers but struggled to understand which metrics actually mattered.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <div className="font-bold text-base text-zinc-900 dark:text-zinc-100 text-emerald-600 dark:text-emerald-400">
                    Personalization drives motivation.
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Generic recommendations quickly lost value. People expected advice tailored to their own health history, lifestyle, and goals.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <div className="font-bold text-base text-zinc-900 dark:text-zinc-100 text-emerald-600 dark:text-emerald-400">
                    Trust must be earned.
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Because recommendations were AI-generated, transparency became just as important as accuracy.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <div className="font-bold text-base text-zinc-900 dark:text-zinc-100 text-emerald-600 dark:text-emerald-400">
                    Progress is emotional.
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Users remained engaged when they could clearly see small improvements over time.
                  </p>
                </div>
              </div>
            </div>

            {/* PERSONAS IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Personas + Affinity Mapping + User Categories"
              aspect="wide"
            />
          </section>

          {/* 10 / Research Questions Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                10 / Key Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Research Questions
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              To better understand user expectations, interviews explored topics including:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "How do people currently interpret health data?",
                "What makes wellness apps feel overwhelming?",
                "What creates trust in AI-generated recommendations?",
                "What motivates users to stay consistent?",
                "How often would users consult health experts?",
                "Which routines are hardest to maintain?",
              ].map((question, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3"
                >
                  <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                    {question}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Rather than validating assumptions, these conversations helped shape the product strategy.
            </p>
          </section>

          {/* 11 / Design Principles Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                11 / Core Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Design Principles
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Research eventually crystallized into four principles that guided every major design decision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-semibold">
                  01 / PRINCIPLE
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Reduce Cognitive Load
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Present only what users need at the current moment.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-semibold">
                  02 / PRINCIPLE
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Build Trust Before Asking for Commitment
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Explain why information is collected before requesting sensitive data.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-semibold">
                  03 / PRINCIPLE
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Personalize Every Interaction
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Recommendations should adapt to each user&apos;s unique health profile.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-semibold">
                  04 / PRINCIPLE
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Reward Consistency
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Long-term habits matter more than perfect daily performance.
                </p>
              </div>
            </div>

            {/* DESIGN PRINCIPLES IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Illustration of Design Principles"
              aspect="wide"
            />
          </section>

          {/* 12 / Experience Overview Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                12 / Journey Map
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Experience Overview
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Instead of treating features independently, the product was designed as one continuous journey.
            </p>

            {/* User Journey Step Diagram */}
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold">
                End-to-End User Journey
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                {[
                  "Discover",
                  "Understand",
                  "Receive Insights",
                  "Take Action",
                  "Track Progress",
                  "Improve Habits",
                ].map((step, idx, arr) => (
                  <React.Fragment key={step}>
                    <div className="flex-1 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xs w-full sm:w-auto">
                      <div className="text-[10px] font-mono text-emerald-500 font-bold mb-0.5">
                        0{idx + 1}
                      </div>
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        {step}
                      </div>
                    </div>
                    {idx < arr.length - 1 && (
                      <span className="text-zinc-400 dark:text-zinc-600 font-mono text-sm rotate-90 sm:rotate-0">
                        ↓
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Every feature supports one stage of this journey.
            </p>
          </section>

          {/* 13 / Feature 1 Section */}
          <section className="space-y-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                13 / Feature 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                AI Wellness Assessment
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-2">
                <div className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                  Problem
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Traditional health assessments feel lengthy and intimidating, leading many users to abandon onboarding before receiving value.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-2">
                <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Design Decision
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Rather than presenting one long questionnaire, I divided the assessment into four progressive milestones.
                </p>
              </div>
            </div>

            {/* 4 Milestones */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                Four Progressive Milestones:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Facial Scan", "Health Assessment", "Lifestyle", "Medical Reports"].map(
                  (m, idx) => (
                    <div
                      key={m}
                      className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1"
                    >
                      <div className="text-xs font-mono text-emerald-500 font-bold">
                        0{idx + 1}
                      </div>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {m}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Each completed step increases the user&apos;s investment while reducing perceived effort.
            </p>

            {/* ASSESSMENT JOURNEY IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Assessment Journey (4-Step Flow)"
              aspect="wide"
            />

            {/* Designing Trust */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                Designing Trust
              </h3>

              <div className="space-y-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                <p>Facial scanning introduces privacy concerns.</p>
                <p>Instead of immediately requesting camera access, the experience first explains:</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Why scanning is needed",
                  "How it works",
                  "Privacy guarantees",
                  "User control",
                  "Environmental guidance",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
                <p>The objective wasn&apos;t simply to request permission.</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                  It was to build confidence.
                </p>
              </div>

              {/* FACE SCAN ONBOARDING IMAGE PLACEHOLDER */}
              <ImagePlaceholder
                title="Face Scan onboarding screens"
                aspect="wide"
              />
            </div>

            {/* Designing for Failure */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Zap className="w-5 h-5 text-emerald-500" />
                Designing for Failure
              </h3>

              <div className="space-y-3 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
                <p>Real users don&apos;t follow ideal journeys.</p>
                <p>I intentionally designed recovery experiences for situations such as:</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Face not detected",
                  "Poor lighting",
                  "Interrupted scan",
                  "User cancellation",
                  "Scan failure",
                ].map((edge) => (
                  <div
                    key={edge}
                    className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    {edge}
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
                Designing these edge cases reduced frustration and prevented dead ends.
              </p>

              {/* ERROR STATES IMAGE PLACEHOLDER */}
              <ImagePlaceholder
                title="Error states & Edge Cases"
                aspect="wide"
              />
            </div>
          </section>

          {/* 14 / Feature 2 Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                14 / Feature 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                AI Wellness Score
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Rather than presenting raw medical information, the system summarizes multiple health dimensions into one understandable wellness score.
              </p>
              <p>
                The score becomes the user&apos;s mental model for understanding their overall health.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                Each result explains:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Current health status",
                  "Contributing factors",
                  "Areas requiring improvement",
                  "Recommended next steps",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-center gap-3"
                  >
                    <Activity className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              Instead of diagnosing users, the interface encourages healthier decisions.
            </p>

            {/* WELLNESS SCORE SCREENS IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Wellness Score Screens"
              aspect="wide"
            />
          </section>

          {/* 15 / Feature 3 Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                15 / Feature 03
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Expert Consultations
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Recommendations are valuable only if users can easily act upon them.</p>
              <p>The consultation experience focused on minimizing friction.</p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                Improvements included:
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Smart coach filtering",
                  "Transparent pricing",
                  "Rich coach profiles",
                  "Two-step booking",
                  "Calendar integration",
                ].map((imp) => (
                  <div
                    key={imp}
                    className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {imp}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              The booking experience requires only two meaningful decisions.
            </p>

            {/* CONSULTATION DISCOVERY + BOOKING FLOW IMAGE PLACEHOLDERS */}
            <ImagePlaceholder
              title="Consultation Discovery + Coach Profile"
              aspect="wide"
            />

            <ImagePlaceholder
              title="Booking Flow"
              aspect="wide"
            />
          </section>

          {/* 16 / Feature 4 Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                16 / Feature 04
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                AI Generated Health Plans
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Using the wellness assessment, AI recommends personalized routines tailored to individual goals.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                Users can:
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  "Select priorities",
                  "Add secondary goals",
                  "Customize routines",
                  "Track consistency",
                ].map((action) => (
                  <div
                    key={action}
                    className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
                  >
                    <Compass className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {action}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              Recommendations become actionable daily habits instead of static suggestions.
            </p>

            {/* ROUTINE RECOMMENDATION IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Routine Recommendation"
              aspect="wide"
            />
          </section>

          {/* 17 / Feature 5 Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                17 / Feature 05
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Routine Tracking
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Long-term wellness depends on consistency.</p>
              <p>The routine tracker was designed to reinforce positive behavior through:</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                "Daily tracking",
                "Weekly summaries",
                "Monthly reports",
                "Mood logging",
                "Progress visualization",
                "Goal completion",
              ].map((feat) => (
                <div
                  key={feat}
                  className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2"
                >
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  {feat}
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              Rather than rewarding perfection, the experience celebrates sustained progress.
            </p>

            {/* ROUTINE TRACKER & REPORTS IMAGE PLACEHOLDERS */}
            <ImagePlaceholder
              title="Routine Tracker"
              aspect="wide"
            />

            <ImagePlaceholder
              title="Reports (Daily / Weekly / Monthly)"
              aspect="wide"
            />
          </section>

          {/* 18 / Brand Identity Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                18 / Visual Identity
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Brand Identity
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Alongside the product experience, I explored the visual identity of Prana AI.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                The branding focused on three attributes:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "Calm", desc: "Soothing colors and generous whitespace that reduce health anxiety." },
                  { title: "Trustworthy", desc: "Clear typography and transparent data presentation." },
                  { title: "Human", desc: "Empathetic language and approachable visual elements." },
                ].map((attr) => (
                  <div
                    key={attr.title}
                    className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5"
                  >
                    <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                      {attr.title}
                    </div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {attr.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              These qualities influenced the logo, typography, iconography, and color palette, creating a consistent visual language across the product.
            </p>

            {/* BRANDING IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Logo Iterations + Branding Exploration"
              aspect="wide"
            />
          </section>

          {/* 19 / Results Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                19 / Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Results
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>After twelve months of collaboration, the MVP entered beta testing.</p>
              <p>Early feedback validated many of our design decisions.</p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                Outcomes
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "92% of testers reported increased motivation to maintain healthier routines.",
                  "Users appreciated the simplicity of personalized recommendations.",
                  "Coaches praised the streamlined consultation workflow.",
                  "The platform established a strong foundation for future public release.",
                ].map((outcome, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3.5"
                  >
                    <div className="w-7 h-7 rounded-full bg-emerald-500/10 text-emerald-500 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </div>
                    <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 20 / Reflection Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                20 / Retrospective
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Reflection
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Designing Prana AI fundamentally changed how I think about health technology.
            </p>

            <div className="p-6 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-950 dark:border dark:border-zinc-800 space-y-2 shadow-xl">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                Key Takeaway
              </div>
              <p className="text-xl sm:text-2xl font-bold text-zinc-100">
                The biggest lesson wasn&apos;t about AI.
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                It was about clarity.
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>People rarely struggle because they lack information.</p>
              <p>They struggle because they don&apos;t know what to do with it.</p>
              <p>
                By simplifying complexity, building trust before automation, and designing around long-term behavior instead of isolated interactions, we created a product that helps users make better decisions—not just collect more data.
              </p>
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
