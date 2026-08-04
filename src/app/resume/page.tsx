"use client";

import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { StickyBackHeader } from "../../components/StickyBackHeader";
import { PERSONA_DATA } from "../../data/persona";
import {
  Download,
  ExternalLink,
  Copy,
  Check,
  FileText,
  Sparkles,
} from "lucide-react";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);
  const resumePdfPath = "/resume/Ajeet_Singh_Product_Designer_Resume.pdf";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/resume`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200 overflow-x-hidden">
      {/* Background Ambient Gradient & Dot Grid */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-teal-500/[0.04] dark:from-emerald-950/30 dark:via-[#0a0a0c] dark:to-teal-950/20 pointer-events-none z-0" />


      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <StickyBackHeader />

        <main className="flex-1 pt-28 pb-20 max-w-4xl mx-auto px-6 w-full space-y-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <FileText className="w-3.5 h-3.5" />
                RESUME • PDF DOCUMENT
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                {PERSONA_DATA.name} — Resume
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base font-sans">
                {PERSONA_DATA.role}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="border-comet-btn">
                <a
                  href={resumePdfPath}
                  download="Ajeet_Singh_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[calc(0.65rem-2px)] bg-linear-to-r from-[#89FFB4] to-[#80FFC6] text-zinc-950 font-bold text-xs font-mono hover:brightness-105 transition-all shadow-sm z-10"
                >
                  <Download className="w-4 h-4 text-zinc-950" />
                  Download PDF
                </a>
              </div>

              <a
                href={resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:border-emerald-500/50 transition-all text-xs font-mono font-semibold"
              >
                <ExternalLink className="w-4 h-4 text-emerald-500" />
                Open PDF
              </a>

              <button
                onClick={handleCopyLink}
                className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 transition-all cursor-pointer text-xs font-mono"
                title="Copy Resume Link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Clean Full-Width PDF Document Preview */}
          <div className="relative w-full rounded-2xl bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl overflow-hidden min-h-[480px] flex flex-col">
            <iframe
              src={`${resumePdfPath}#toolbar=0&navpanes=0`}
              title="Ajeet Singh Resume PDF"
              className="w-full flex-1 min-h-[480px] border-0"
            />

            {/* Simple Footer Link */}
            <div className="p-4 bg-zinc-950 border-t border-zinc-800 text-center text-xs font-mono text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>Having trouble viewing the PDF preview directly in browser?</span>
              <a
                href={resumePdfPath}
                download="Ajeet_Singh_Resume.pdf"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:underline font-bold"
              >
                <Download className="w-3.5 h-3.5" />
                Download PDF Resume File directly
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
