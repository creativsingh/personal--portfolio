import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Projects } from "../../components/Projects";
import { ArrowLeft } from "lucide-react";
import { PERSONA_DATA } from "../../data/persona";

export const metadata: Metadata = {
  title: `Selected Work & Case Studies — ${PERSONA_DATA.name}`,
  description: "Explore selected product design engineering case studies by Ajeet Singh (CreativSingh).",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans">
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 mb-8">
          <Link
            href="/#work"
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
  );
}
