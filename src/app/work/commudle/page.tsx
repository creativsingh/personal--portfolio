import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PERSONA_DATA } from "../../../data/persona";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { ProjectHeaderSection } from "../../../components/ProjectHeaderSection";
import { ArrowRight, Image as ImageIcon, Sparkles, CheckCircle2 } from "lucide-react";
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

      <main className="flex-1 pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Shared Header Section */}
          <ProjectHeaderSection
            project={project}
            projectIndex={1}
            totalProjects={PERSONA_DATA.projects.length}
          />

          {/* My Role & Responsibilities */}
          <section className="space-y-6 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                01 / Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                My Role
              </h2>
            </div>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              As the sole Product Designer, I owned the experience from discovery to delivery.
            </p>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                My responsibilities included:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Product discussions with stakeholders
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  UX audits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Information Architecture
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  User Interface Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Motion Design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Illustration &amp; Iconography
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Developer collaboration
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  QA during implementation
                </li>
              </ul>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Project Goals
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                The redesign aimed to:
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  Improve homepage engagement
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  Increase visibility of communities
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  Make developer profiles more useful
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  Build trust through better storytelling
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  Standardise the visual language
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-500 font-bold">•</span>
                  Ensure every design was developer-friendly
                </li>
              </ul>
            </div>
          </section>

          {/* Hero Image Placeholder */}
          <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src="/case-studies/commudle/homepage-comparison.avif"
              alt="Existing Homepage vs Redesigned Homepage"
              fill
              className="object-cover"
            />
          </div>

          {/* Understanding the Product */}
          <section className="space-y-6 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                02 / Discovery
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Understanding the Product
              </h2>
            </div>

            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Rather than immediately opening Figma, I spent time understanding the business.
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Through multiple discussions with Commudle&apos;s CEO, we aligned on product goals, technical limitations and long-term vision.
            </p>
            <p className="text-base dark:text-zinc-300 leading-relaxed font-medium text-zinc-900">
              These conversations helped uncover what mattered most—not only for users, but for the business.
            </p>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                Key Product Insights
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  The platform needed to feel more alive.
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  Community should become the primary focus.
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  Designs should be reusable for future features.
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  Components should be easy for developers to implement.
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  Mobile experience could not become an afterthought.
                </li>
              </ul>
            </div>

            {/* Video Call Screenshot Placeholder */}
            <div>
              <Image
                src="/case-studies/commudle/videocall.avif"
                alt="Existing Homepage vs Redesigned Homepage"
                width={1600}
                height={900}

                className="object-contain"
              />
            </div>
          </section>

          {/* Auditing the Existing Experience */}
          <section className="space-y-6 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                03 / Audit
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Auditing the Existing Experience
              </h2>
            </div>

            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Before proposing solutions, I evaluated the existing experience.
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Several usability issues became immediately visible.
            </p>

            {/* Annotated Screenshot Placeholder */}
            <div>
              <Image
                src="/case-studies/commudle/annotations.avif"
                alt="Existing Homepage vs Redesigned Homepage"
                width={1600}
                height={900}

                className="w-full h-auto rounded-2xl"
              />
              <Image
                src="/case-studies/commudle/annotations2.avif"
                alt="Existing Homepage vs Redesigned Homepage"
                width={1600}
                height={900}

                className="w-full h-auto rounded-2xl"
              />
              <Image
                src="/case-studies/commudle/annotations3.avif"
                alt="Existing Homepage vs Redesigned Homepage"
                width={1600}
                height={900}

                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Existing Homepage Problems
                </h3>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Generic navigation</li>
                  <li>• Weak visual hierarchy</li>
                  <li>• No engaging hero section</li>
                  <li>• Low emphasis on communities</li>
                  <li>• Inconsistent card design</li>
                  <li>• CTA lacked prominence</li>
                  <li>• Visual language felt outdated</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                  Why this mattered
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Because users couldn&apos;t immediately understand the platform&apos;s value, many left before exploring communities or participating.
                </p>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                  The interface communicated information. <br />
                  <span className="text-pink-600 dark:text-pink-400">It didn&apos;t communicate excitement.</span>
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Success Metrics
              </h3>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                The homepage had generated approximately <strong>80–90k engagements</strong> over the previous year.
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Our objective was to significantly improve that number by making the experience more engaging and easier to explore.
              </p>
            </div>
          </section>

          {/* Designing the New Homepage */}
          <section className="space-y-6 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                04 / Execution
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Designing the New Homepage
              </h2>
            </div>

            {/* Full Hero Image Placeholder */}
            <div className="h-125 overflow-y-auto scrollbar-thin rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Image
                src="/case-studies/commudle/homepagenew.png"
                alt="Homepage"
                width={1440}
                height={5000}
                className="w-full h-auto"
              />
            </div>

            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Instead of treating the homepage as a directory of content, I redesigned it as an entry point into Commudle&apos;s developer ecosystem.
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Every section now encouraged exploration.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Design Decision 1: Creating a Hero Worth Looking At
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The previous homepage lacked a visual anchor.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Users landed on the page without immediately understanding what Commudle offered.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                I introduced an animated hero that showcased real community members, live events and platform activity within the first screen.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 font-medium">
                This helped communicate both scale and credibility in seconds.
              </p>

              {/* Hero Animation Placeholder */}
              <iframe
                className="aspect-video w-full rounded-2xl"
                src="https://www.youtube.com/embed/7vPgnFs6JYU?autoplay=1&mute=1&loop=1&playlist=7vPgnFs6JYU&controls=0&playsinline=1&rel=0"
                title="Commudle Demo"
                allow="autoplay; encrypted-media; picture-in-picture; controls=0;"

              />
            </div>
          </section>

          {/* Technical Collaboration */}
          <section className="space-y-6 border-zinc-200/80 dark:border-zinc-800/80">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Technical Collaboration
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              The animation wasn&apos;t only designed for users. It also needed to be practical for developers.
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Instead of exporting the animation as a video, I used After Effects + Bodymovin (Lottie) to generate lightweight JSON animations.
            </p>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
                This resulted in:
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                <li>• Smaller assets</li>
                <li>• Better performance</li>
                <li>• Easier implementation</li>
                <li>• Responsive scaling</li>
              </ul>
            </div>

            {/* Animation Process Placeholder */}
            <div className="p-8 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/60 border border-dashed border-zinc-300 dark:border-zinc-700 text-center space-y-2">
              <ImageIcon className="w-6 h-6 text-zinc-400 mx-auto" />
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                (Animation Process)
              </p>
            </div>
          </section>

          {/* Design Decision 2: Building Personality Through Illustration */}
          <section className="space-y-6 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Design Decision 2: Building Personality Through Illustration
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Large community platforms often feel generic.
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              To make Commudle feel more approachable, I created a collection of hand-drawn illustrations and interface doodles.
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              These subtle details reinforced the platform&apos;s friendly personality without distracting from usability.
            </p>

            {/* Doodles Placeholder */}
            <div className=" rounded-2xl border overflow-clip border-zinc-200 dark:border-zinc-800">
              <Image
                src="/case-studies/commudle/doodlepage1.png"
                alt="Homepage"
                width={1440}
                height={5000}
                className="w-full h-auto"
              />
            </div>
          </section>

          {/* Design Decision 3: Prioritising Communities */}
          <section className="space-y-6 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Design Decision 3: Prioritising Communities
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Communities are Commudle&apos;s core product.
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              The redesigned homepage places them at the centre of the experience through stronger hierarchy, improved cards and clearer CTAs.
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Users can now browse, compare and join communities much faster.
            </p>

            {/* Community Cards Placeholder */}
            <div className=" rounded-2xl border overflow-clip border-zinc-200 dark:border-zinc-800">
              <Image
                src="/case-studies/commudle/eventcard.png"
                alt="Homepage"
                width={1440}
                height={5000}
                className="w-full h-auto"
              />
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Homepage Outcome
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Within twelve months, homepage engagement increased dramatically.
              </p>
              <div className="text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400 pt-1">
                380,000+
              </div>
              <p className="text-xs font-mono text-zinc-500">
                Homepage engagements — A significant increase over the previous year&apos;s performance.
              </p>
            </div>
          </section>

          {/* About Page */}
          <section className="space-y-6 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                05 / About Page
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                About Page
              </h2>
            </div>

            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              The original About page failed to communicate what made Commudle unique.
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              It described the platform. It didn&apos;t tell its story.
            </p>

            {/* About Page Mockup Placeholder */}
            <div className=" rounded-2xl border overflow-clip border-zinc-200 dark:border-zinc-800">
              <Image
                src="/case-studies/commudle/aboutus.avif"
                alt="Homepage"
                width={1440}
                height={5000}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Design Decision
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Instead of relying on paragraphs of text, I created a visual representation of Commudle&apos;s diverse ecosystem.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The hero illustration was inspired by a world map, using photographs from real community members to demonstrate the platform&apos;s reach.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 font-medium">
                This transformed the About page into a story about people rather than software.
              </p>
            </div>

            {/* World Map Hero Placeholder */}
            <div className="">
              <Image
                src="/case-studies/commudle/worldmap.avif"
                alt="Homepage"
                width={1440}
                height={5000}
                className="w-full h-auto"
              />
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                Results
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                The redesigned About page attracted more than
              </p>
              <div className="text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400 py-1">
                5,000+
              </div>
              <p className="text-xs font-mono text-zinc-500">
                Visits within four months.
              </p>
            </div>
          </section>

          {/* User Profile */}
          <section className="space-y-6 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                06 / Networking
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                User Profile
              </h2>
            </div>

            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Developer profiles are the foundation of networking.
            </p>
            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              The previous experience lacked ways for users to showcase expertise, availability and community participation.
            </p>

            {/* Profile Mockup Placeholder */}
            <div className=" rounded-2xl border overflow-clip border-zinc-200 dark:border-zinc-800">
              <Image
                src="/case-studies/commudle/profile.avif"
                alt="Homepage"
                width={1440}
                height={5000}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Key Improvements
              </h3>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Community Badges
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Introduced achievement badges to reward participation and help members quickly establish credibility.
                </p>
                <div className=" ">
                  <Image
                    src="/case-studies/commudle/badges.avif"
                    alt="Homepage"
                    width={1440}
                    height={5000}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Freelancer Toggle
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Added a simple hiring toggle allowing users to indicate whether they were available for work or hiring. This improved discoverability between freelancers and recruiters.
                </p>
                <div className=" ">
                  <Image
                    src="/case-studies/commudle/toggle.avif"
                    alt="Homepage"
                    width={1440}
                    height={5000}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Community Activity
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Designed dedicated sections for Talks given and Events attended. This transformed profiles into professional portfolios instead of static user pages.
                </p>
                <div className=" ">
                  <Image
                    src="/case-studies/commudle/talks.avif"
                    alt="Homepage"
                    width={1440}
                    height={5000}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80">
                <div className="text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  220,000+
                </div>
                <div className="text-xs font-mono text-zinc-500 mt-1">
                  Profile page engagements
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80">
                <div className="text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  10,000+
                </div>
                <div className="text-xs font-mono text-zinc-500 mt-1">
                  Users actively using the freelancer toggle
                </div>
              </div>
            </div>
          </section>

          {/* Design Principles & What I Learned */}
          <section className="space-y-6 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block">
                07 / Principles &amp; Takeaways
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Design Principles Behind Every Decision
              </h2>
            </div>

            <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Throughout the redesign, every solution followed five principles:
            </p>

            <ol className="space-y-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-mono">
              <li>1. Community first</li>
              <li>2. Clear visual hierarchy</li>
              <li>3. Accessible interactions</li>
              <li>4. Developer-friendly implementation</li>
              <li>5. Scalable design system</li>
            </ol>

            <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-4 mt-6">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                What I Learned
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                This project reinforced that successful product design extends far beyond interface design.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The biggest improvements came from understanding business goals, collaborating closely with engineering and measuring success through real user outcomes.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                Working directly with leadership also strengthened my ability to balance user needs with technical constraints and business priorities.
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
    </div >
  );
}
