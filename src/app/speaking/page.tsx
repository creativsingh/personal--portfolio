import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { PublicSpeaking } from "../../components/PublicSpeaking";
import { Footer } from "../../components/Footer";
import { PERSONA_DATA } from "../../data/persona";
import { ArrowLeft } from "lucide-react";

import { StickyBackHeader } from "../../components/StickyBackHeader";

export const metadata: Metadata = {
  title: `Public Speaking & Workshops — ${PERSONA_DATA.name}`,
  description: "Explore all keynote talks, workshops, and community engagements by Ajeet Singh.",
};

export default function SpeakingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200">
      <Navbar />

      <StickyBackHeader
        href="/#speaking"
        label="Back to Home"
        title="Public Speaking & Workshops"
      />

      <main className="flex-1 pt-28 pb-16">
        {/* Back Link on Top */}
        <div className="max-w-4xl mx-auto px-6 pt-4">
          <Link
            href="/#speaking"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <PublicSpeaking isSpeakingPage={true} />
      </main>

      <Footer />
    </div>
  );
}
