import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PERSONA_DATA } from "../../../data/persona";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { ProjectHeaderSection } from "../../../components/ProjectHeaderSection";
import { ArrowRight, Image as ImageIcon, Sparkles, CheckCircle2, Target, TrendingUp, Compass, Heart, Users } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Commudle — Case Study by ${PERSONA_DATA.name}`,
  description: "All-in-one community management and tech event hosting platform case study.",
};

export default function CommudlePage() {
  const project = PERSONA_DATA.projects[1]; // Commudle
  const nextProject = PERSONA_DATA.projects[2]; // Prana AI

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Shared Header Section */}
          <ProjectHeaderSection
            project={project}
            projectIndex={1}
            totalProjects={PERSONA_DATA.projects.length}
          />

          {/* Featured Core Dilemma Quote */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent border-l-4 border-emerald-500 bg-zinc-50 dark:bg-[#121215]">
            <p className="text-base sm:text-lg italic font-medium text-emerald-950 dark:text-emerald-200">
              &ldquo;Because users couldn&apos;t immediately understand the platform&apos;s value, many left before exploring communities or participating. The interface communicated information—it didn&apos;t communicate excitement.&rdquo;
            </p>
          </div>

          {/* 01 / Overview Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                01 / Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                My Role
              </h2>
            </div>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              As the sole Product Designer, I owned the experience from discovery to delivery.
            </p>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                My responsibilities included:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-zinc-700 dark:text-zinc-300 font-mono">
                {[
                  "Product discussions with stakeholders",
                  "UX audits",
                  "Information Architecture",
                  "User Interface Design",
                  "Motion Design",
                  "Illustration & Iconography",
                  "Developer collaboration",
                  "QA during implementation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Project Goals
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                The redesign aimed to:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                {[
                  "Improve homepage engagement",
                  "Increase visibility of communities",
                  "Make developer profiles more useful",
                  "Build trust through better storytelling",
                  "Standardise the visual language",
                  "Ensure every design was developer-friendly",
                ].map((goal) => (
                  <div key={goal} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-center gap-2.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span className="text-sm text-zinc-800 dark:text-zinc-200 font-medium">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image Showcase */}
            <figure className="space-y-2 pt-2">
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
                <Image
                  src="/case-studies/commudle/homepage-comparison.avif"
                  alt="Existing Homepage vs Redesigned Homepage"
                  fill
                  className="object-cover"
                />
              </div>
              <figcaption className="text-xs font-mono text-center text-zinc-500 dark:text-zinc-400 italic">
                Side-by-side comparison: Legacy Homepage vs. Redesigned Community-First Experience
              </figcaption>
            </figure>
          </section>

          {/* 02 / Discovery Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                02 / Discovery
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Understanding the Product
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Rather than immediately opening Figma, I spent time understanding the business.
              </p>
              <p>
                Through multiple discussions with Commudle&apos;s CEO, we aligned on product goals, technical limitations and long-term vision.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                These conversations helped uncover what mattered most—not only for users, but for the business.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Key Product Insights
              </h3>
              <ul className="space-y-2.5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                {[
                  "The platform needed to feel more alive.",
                  "Community should become the primary focus.",
                  "Designs should be reusable for future features.",
                  "Components should be easy for developers to implement.",
                  "Mobile experience could not become an afterthought.",
                ].map((insight) => (
                  <li key={insight} className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Call Screenshot */}
            <figure className="space-y-2 pt-2">
              <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
                <Image
                  src="/case-studies/commudle/videocall.avif"
                  alt="Stakeholder Discovery Call with CEO"
                  width={1600}
                  height={900}
                  className="w-full h-auto object-contain"
                />
              </div>
              <figcaption className="text-xs font-mono text-center text-zinc-500 dark:text-zinc-400 italic">
                Product discovery sessions with leadership aligning business requirements &amp; developer feasibility.
              </figcaption>
            </figure>
          </section>

          {/* 03 / Audit Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                03 / Usability Audit
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Auditing the Existing Experience
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Before proposing solutions, I evaluated the existing experience. Several usability issues became immediately visible.
            </p>

            {/* Annotated Screenshots */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
                <Image
                  src="/case-studies/commudle/annotations.avif"
                  alt="Audit Annotations 1"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
                <Image
                  src="/case-studies/commudle/annotations2.avif"
                  alt="Audit Annotations 2"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
                <Image
                  src="/case-studies/commudle/annotations3.avif"
                  alt="Audit Annotations 3"
                  width={1600}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/10 space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  Existing Homepage Problems
                </h3>
                <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                  <li>• Generic navigation</li>
                  <li>• Weak visual hierarchy</li>
                  <li>• No engaging hero section</li>
                  <li>• Low emphasis on communities</li>
                  <li>• Inconsistent card design</li>
                  <li>• CTA lacked prominence</li>
                  <li>• Visual language felt outdated</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Why this mattered
                </h3>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Because users couldn&apos;t immediately understand the platform&apos;s value, many left before exploring communities or participating.
                </p>
                <p className="text-sm text-zinc-900 dark:text-zinc-100 font-semibold pt-1">
                  The interface communicated information. <br />
                  <span className="text-emerald-600 dark:text-emerald-400">It didn&apos;t communicate excitement.</span>
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Baseline Performance
              </h3>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                The homepage had generated approximately <strong>80–90k engagements</strong> over the previous year.
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                Our objective was to significantly improve that number by making the experience more engaging and easier to explore.
              </p>
            </div>
          </section>

          {/* 04 / Execution Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                04 / Execution
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Designing the New Homepage
              </h2>
            </div>

            {/* Scrollable Full Homepage Showcase */}
            <figure className="space-y-2">
              <div className="h-125 overflow-y-auto scrollbar-thin rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
                <Image
                  src="/case-studies/commudle/homepagenew.png"
                  alt="Redesigned Full Homepage"
                  width={1440}
                  height={5000}
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-xs font-mono text-center text-zinc-500 dark:text-zinc-400 italic">
                Scrollable view of the redesigned Commudle Homepage
              </figcaption>
            </figure>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Instead of treating the homepage as a directory of content, I redesigned it as an entry point into Commudle&apos;s developer ecosystem.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                Every section now encouraged exploration.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Design Decision 1: Creating a Hero Worth Looking At
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The previous homepage lacked a visual anchor. Users landed on the page without immediately understanding what Commudle offered.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                I introduced an animated hero that showcased real community members, live events and platform activity within the first screen.
              </p>
              <p className="text-base text-zinc-800 dark:text-zinc-200 font-semibold">
                This helped communicate both scale and credibility in seconds.
              </p>

              {/* Hero Video Embed */}
              <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
                <iframe
                  className="aspect-video w-full"
                  src="https://www.youtube.com/embed/7vPgnFs6JYU?autoplay=1&mute=1&loop=1&playlist=7vPgnFs6JYU&controls=0&playsinline=1&rel=0"
                  title="Commudle Hero Animation Demo"
                  allow="autoplay; encrypted-media; picture-in-picture; controls=0;"
                />
              </div>
            </div>
          </section>

          {/* 05 / Technical Collaboration Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                05 / Motion Engineering
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Technical Collaboration
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                The animation wasn&apos;t only designed for users. It also needed to be practical for developers.
              </p>
              <p>
                Instead of exporting the animation as a video, I used After Effects + Bodymovin (Lottie) to generate lightweight JSON animations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                This resulted in:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-zinc-800 dark:text-zinc-200">
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  • Smaller assets
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  • Better performance
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  • Easy implementation
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  • Responsive scaling
                </div>
              </div>
            </div>

            {/* Motion Process Card */}
            <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-dashed border-zinc-300 dark:border-zinc-700 text-center space-y-2">
              <ImageIcon className="w-6 h-6 text-emerald-500 mx-auto" />
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                After Effects Lottie Animation Pipeline &amp; JSON Optimization
              </p>
            </div>
          </section>

          {/* 06 / Brand Personality Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                06 / Visual Identity
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Design Decision 2: Building Personality Through Illustration
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Large community platforms often feel generic.</p>
              <p>
                To make Commudle feel more approachable, I created a collection of hand-drawn illustrations and interface doodles.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                These subtle details reinforced the platform&apos;s friendly personality without distracting from usability.
              </p>
            </div>

            {/* Doodles Showcase */}
            <figure className="space-y-2">
              <div className="rounded-2xl border overflow-hidden border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
                <Image
                  src="/case-studies/commudle/doodlepage1.png"
                  alt="Hand-drawn Doodles & System Illustrations"
                  width={1440}
                  height={5000}
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-xs font-mono text-center text-zinc-500 dark:text-zinc-400 italic">
                Custom hand-drawn UI doodles and brand illustrations
              </figcaption>
            </figure>
          </section>

          {/* 07 / Core Feature: Prioritising Communities Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                07 / Core Focus
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Design Decision 3: Prioritising Communities
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Communities are Commudle&apos;s core product.</p>
              <p>
                The redesigned homepage places them at the centre of the experience through stronger hierarchy, improved cards and clearer CTAs.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                Users can now browse, compare and join communities much faster.
              </p>
            </div>

            {/* Community Cards Showcase */}
            <figure className="space-y-2">
              <div className="rounded-2xl border overflow-hidden border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
                <Image
                  src="/case-studies/commudle/eventcard.png"
                  alt="Redesigned Community & Event Cards"
                  width={1440}
                  height={5000}
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="text-xs font-mono text-center text-zinc-500 dark:text-zinc-400 italic">
                Modular event and community card design system
              </figcaption>
            </figure>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Homepage Outcome
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Within twelve months, homepage engagement increased dramatically:
              </p>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-emerald-600 dark:text-emerald-400 pt-1">
                380,000+
              </div>
              <p className="text-xs font-mono text-zinc-500">
                Homepage engagements — A significant increase over the previous year&apos;s performance.
              </p>
            </div>
          </section>

          {/* 08 / About Page Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                08 / Storytelling
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                About Page
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>The original About page failed to communicate what made Commudle unique.</p>
              <p>It described the platform. It didn&apos;t tell its story.</p>
            </div>

            {/* About Us Mockup */}
            <div className="rounded-2xl border overflow-hidden border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
              <Image
                src="/case-studies/commudle/aboutus.avif"
                alt="About Page Overview"
                width={1440}
                height={5000}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Design Decision
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Instead of relying on paragraphs of text, I created a visual representation of Commudle&apos;s diverse ecosystem.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The hero illustration was inspired by a world map, using photographs from real community members to demonstrate the platform&apos;s reach.
              </p>
              <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                This transformed the About page into a story about people rather than software.
              </p>
            </div>

            {/* World Map Hero */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
              <Image
                src="/case-studies/commudle/worldmap.avif"
                alt="World Map Community Storytelling"
                width={1440}
                height={5000}
                className="w-full h-auto"
              />
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                About Page Results
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                The redesigned About page attracted more than:
              </p>
              <div className="text-3xl sm:text-4xl font-bold font-mono text-emerald-600 dark:text-emerald-400 py-1">
                5,000+ Visits
              </div>
              <p className="text-xs font-mono text-zinc-500">
                Within four months of launch.
              </p>
            </div>
          </section>

          {/* 09 / User Profile Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                09 / Networking
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                User Profile
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Developer profiles are the foundation of networking.</p>
              <p>The previous experience lacked ways for users to showcase expertise, availability and community participation.</p>
            </div>

            {/* Profile Mockup */}
            <div className="rounded-2xl border overflow-hidden border-zinc-200/80 dark:border-zinc-800/80 shadow-lg">
              <Image
                src="/case-studies/commudle/profile.avif"
                alt="Developer User Profile"
                width={1440}
                height={5000}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-8 pt-4">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Key Improvements
              </h3>

              {/* Badges */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Community Badges
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Introduced achievement badges to reward participation and help members quickly establish credibility.
                </p>
                <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80">
                  <Image
                    src="/case-studies/commudle/badges.avif"
                    alt="Community Achievement Badges"
                    width={1440}
                    height={5000}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Freelancer Toggle */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Freelancer Toggle
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Added a simple hiring toggle allowing users to indicate whether they were available for work or hiring. This improved discoverability between freelancers and recruiters.
                </p>
                <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80">
                  <Image
                    src="/case-studies/commudle/toggle.avif"
                    alt="Freelancer Availability Toggle"
                    width={1440}
                    height={5000}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Talks */}
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Community Activity
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Designed dedicated sections for Talks given and Events attended. This transformed profiles into professional portfolios instead of static user pages.
                </p>
                <div className="rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80">
                  <Image
                    src="/case-studies/commudle/talks.avif"
                    alt="Community Activity &amp; Talks"
                    width={1440}
                    height={5000}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80">
                <div className="text-3xl sm:text-4xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  220,000+
                </div>
                <div className="text-xs font-mono text-zinc-500 mt-1">
                  Profile page engagements
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80">
                <div className="text-3xl sm:text-4xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  10,000+
                </div>
                <div className="text-xs font-mono text-zinc-500 mt-1">
                  Users actively using the freelancer toggle
                </div>
              </div>
            </div>
          </section>

          {/* 10 / Design Principles Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                10 / Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Design Principles Behind Every Decision
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Throughout the redesign, every solution followed five principles:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "1. Community first",
                "2. Clear visual hierarchy",
                "3. Accessible interactions",
                "4. Developer-friendly implementation",
                "5. Scalable design system",
              ].map((p, idx) => (
                <div key={p} className={`p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-sm font-mono font-semibold text-zinc-800 dark:text-zinc-200 ${idx === 4 ? "sm:col-span-2" : ""}`}>
                  {p}
                </div>
              ))}
            </div>
          </section>

          {/* 11 / Retrospective Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-semibold">
                11 / Retrospective
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                What I Learned
              </h2>
            </div>

            <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                This project reinforced that successful product design extends far beyond interface design.
              </p>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The biggest improvements came from understanding business goals, collaborating closely with engineering and measuring success through real user outcomes.
              </p>
              <p className="text-base sm:text-lg text-zinc-900 dark:text-zinc-100 leading-relaxed font-semibold">
                Working directly with leadership also strengthened my ability to balance user needs with technical constraints and business priorities.
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
