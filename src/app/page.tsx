import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Philosophy } from "../components/Philosophy";
import { Projects } from "../components/Projects";
import { CommunitySpeaking } from "../components/CommunitySpeaking";
import { ToolStack } from "../components/ToolStack";
import { MusicPlayer } from "../components/MusicPlayer";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#071b0d] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Philosophy />
        <Projects />
        <CommunitySpeaking />
        <ToolStack />
        <MusicPlayer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
