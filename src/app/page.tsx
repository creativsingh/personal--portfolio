import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { PixelPeps } from "../components/PixelPeps";
import { PublicSpeaking } from "../components/PublicSpeaking";
import { ToolStack } from "../components/ToolStack";
import { MusicPlayer } from "../components/MusicPlayer";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200 overflow-x-hidden">
      {/* Subtle Static Background Gradient & Ambient Glow Inspired by ImagePlaceholder */}
      <div className="fixed inset-0 bg-linear-to-br from-emerald-500/6 via-transparent to-teal-500/4 dark:from-emerald-950/30 dark:via-[#0a0a0c] dark:to-teal-950/20 pointer-events-none z-0" />
      <div className="fixed -top-32 -right-32 w-120 h-120 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/3 -left-32 w-md h-112 bg-teal-500/5 dark:bg-teal-500/8 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed -bottom-32 right-1/4 w-md h-112 bg-emerald-500/5 dark:bg-emerald-500/8 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <ToolStack />
          <Projects />
          <PixelPeps />
          <PublicSpeaking />
          <MusicPlayer />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
