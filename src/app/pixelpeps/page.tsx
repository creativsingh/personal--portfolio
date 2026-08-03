import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../../components/Navbar";
import { PixelPeps } from "../../components/PixelPeps";
import { Footer } from "../../components/Footer";
import { PERSONA_DATA } from "../../data/persona";
import { ArrowLeft } from "lucide-react";

import { StickyBackHeader } from "../../components/StickyBackHeader";

export const metadata: Metadata = {
  title: `PixelPeps Community — ${PERSONA_DATA.name}`,
  description: "A thriving design community focused on peer learning, design crits, workshops, and networking across India.",
};

export default function PixelPepsPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200 overflow-x-hidden">
      {/* Subtle Static Background Gradient & Ambient Glow */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-teal-500/[0.04] dark:from-emerald-950/30 dark:via-[#0a0a0c] dark:to-teal-950/20 pointer-events-none z-0" />
      <div className="fixed -top-32 -right-32 w-[30rem] h-[30rem] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/3 -left-32 w-[28rem] h-[28rem] bg-teal-500/5 dark:bg-teal-500/8 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed -bottom-32 right-1/4 w-[28rem] h-[28rem] bg-emerald-500/5 dark:bg-emerald-500/8 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <StickyBackHeader
          href="/#pixelpeps"
          label="Back to Home"
          title="PixelPeps Community"
        />

        <main className="flex-1 pt-28 pb-16">
          {/* Back Link on Top */}
          <div className="max-w-4xl mx-auto px-6 pt-4">
            <Link
              href="/#pixelpeps"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <PixelPeps isStandalonePage={true} />
        </main>

        <Footer />
      </div>
    </div>
  );
}
