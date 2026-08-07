import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Projects } from "../../components/Projects";
import { ArrowLeft } from "lucide-react";
import { PERSONA_DATA } from "../../data/persona";

import { StickyBackHeader } from "../../components/StickyBackHeader";

export const metadata: Metadata = {
  title: `Selected Work & Case Studies — ${PERSONA_DATA.name}`,
  description: "Explore selected product design engineering case studies by Ajeet Singh (CreativSingh).",
};

export default function WorkPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200 overflow-x-hidden">
      {/* Subtle Static Background Gradient & Ambient Glow */}
      <div className="fixed inset-0 bg-linear-to-br from-emerald-500/6 via-transparent to-teal-500/4 dark:from-emerald-950/30 dark:via-[#0a0a0c] dark:to-teal-950/20 pointer-events-none z-0" />
      <div className="fixed -top-32 -right-32 w-120 h-120 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/3 -left-32 w-md h-112 bg-teal-500/5 dark:bg-teal-500/8 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed -bottom-32 right-1/4 w-md h-112 bg-emerald-500/5 dark:bg-emerald-500/8 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <StickyBackHeader
          href="/#work"
          label="Back to Home"
          title="Selected Work & Case Studies"
        />

        <main className="flex-1 pt-28 pb-16">
          <div className="max-w-4xl mx-auto px-6 pt-4">
            <Link
              href="/#home"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <Projects isWorkPage={true} />
        </main>

        <Footer />
      </div>
    </div>
  );
}
