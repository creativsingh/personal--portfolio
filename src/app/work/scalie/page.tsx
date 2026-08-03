import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PERSONA_DATA } from "../../../data/persona";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import Image from "next/image";
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
  Briefcase,
  Building,
  UserCheck,
  Compass,
  Layers,
  HelpCircle,
  Image as ImageIcon,
  Check,
  Zap,
  TrendingDown,
  Layout,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Scalie — Case Study by ${PERSONA_DATA.name}`,
  description:
    "Designing an Enterprise Resource Management Platform to Replace Spreadsheet-Driven Operations.",
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
            Visual Design Slot • Enterprise Web App
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function ScaliePage() {
  const project = PERSONA_DATA.projects[4]; // Scalie
  const nextProject = PERSONA_DATA.projects[0]; // Genesis AI (wraps around)

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Shared Header Section (Consistent across all case studies) */}
          <ProjectHeaderSection
            project={project}
            projectIndex={4}
            totalProjects={PERSONA_DATA.projects.length}
          />

          {/* Featured Core Dilemma Quote */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-indigo-500/5 to-transparent border-l-4 border-emerald-500 bg-zinc-50 dark:bg-[#121215]">
            <p className="text-base sm:text-lg italic font-medium text-emerald-950 dark:text-emerald-200">
              &ldquo;How do you transform fragmented hiring, resource allocation, and vendor management workflows into one centralized platform that serves multiple stakeholders?&rdquo;
            </p>
          </div>



          {/* 03 / The Opportunity Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                03 / Opportunity
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                The Opportunity
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Many staffing organizations still rely on fragmented tools to manage their workforce.</p>

              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase">Resource information often lives across:</div>
                <div className="flex flex-wrap gap-2.5">
                  {["Excel spreadsheets", "Email threads", "Shared folders", "Phone calls", "Individual documents"].map(
                    (item) => (
                      <span
                        key={item}
                        className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-rose-500/10 text-rose-700 dark:text-rose-300 border border-rose-500/20"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <p>This creates several operational challenges:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "Recruiters struggle to locate suitable candidates.",
                "Managers have limited visibility into available resources.",
                "Interview updates become difficult to track.",
                "Contracts are scattered across multiple systems.",
              ].map((chal, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{chal}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              <p>As teams grow, these disconnected processes become increasingly difficult to manage.</p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                The opportunity was to replace these manual workflows with a centralized platform that provides visibility, consistency, and operational efficiency.
              </p>
            </div>

            {/* EXISTING MANUAL PROCESS IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Existing Manual Process"
              caption="Current workflow illustration showing spreadsheets, emails, calls, and documents."
              aspect="wide"
            />
          </section>

          {/* 04 / The Challenge Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                04 / Interconnected System
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                The Challenge
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Designing Scalie wasn&apos;t about creating another dashboard.</p>
              <p>It was about simplifying a highly interconnected operational workflow.</p>
              <p>Every action performed by one stakeholder directly affected another.</p>
            </div>

            {/* Operational Sequence Diagram */}
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                Interconnected Workflow Progression
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left font-mono text-xs">
                {[
                  "Vendor Submits",
                  "Admin Reviews",
                  "Client Evaluates",
                  "Interviews Scheduled",
                  "Contracts Generated",
                  "Resources Allocated",
                ].map((step, idx, arr) => (
                  <React.Fragment key={step}>
                    <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-full sm:w-auto">
                      <div className="text-emerald-500 font-bold text-[10px]">0{idx + 1}</div>
                      <div className="font-bold text-zinc-900 dark:text-zinc-100 text-xs">{step}</div>
                    </div>
                    {idx < arr.length - 1 && <span className="text-zinc-400 font-bold text-sm rotate-90 sm:rotate-0">→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Each stage depends on accurate information flowing across multiple teams.</p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                The challenge was designing an experience that keeps everyone aligned while reducing unnecessary manual effort.
              </p>
            </div>
          </section>

          {/* 05 / My Role Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                05 / Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                My Role
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              As the Product Designer, I was responsible for designing the MVP experience from discovery through validation.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                My responsibilities included:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Understanding existing operational workflows",
                  "Conducting stakeholder research",
                  "Mapping information architecture",
                  "Designing user journeys",
                  "Creating wireframes and high-fidelity interfaces",
                  "Defining reusable design patterns",
                  "Testing prototypes with users",
                  "Collaborating closely with developers throughout implementation",
                ].map((resp) => (
                  <div key={resp} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {resp}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 06 / Understanding the Existing Workflow Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                06 / Workflow Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Understanding the Existing Workflow
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Before exploring interfaces, I wanted to understand how resource allocation actually worked.</p>
              <p>
                Through stakeholder discussions and workflow analysis, it became clear that most operational delays weren&apos;t caused by a lack of tools.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                They were caused by disconnected information.
              </p>
              <p>Teams constantly switched between spreadsheets, emails, and phone conversations simply to understand:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                "Which resources are available?",
                "Which vendors submitted candidates?",
                "What stage is every interview in?",
                "Which contracts are pending?",
                "Which resources are currently deployed?",
              ].map((q, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{q}</span>
                </div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              Rather than designing isolated screens, the goal became designing a connected operational system.
            </p>

            {/* CURRENT WORKFLOW DIAGRAM IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Current Workflow Diagram"
              aspect="wide"
            />
          </section>

          {/* 07 / Understanding Stakeholders Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                07 / Stakeholders
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Understanding Stakeholders
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Scalie supports three primary user groups.</p>
              <p>Although they interact with the same platform, each stakeholder has completely different priorities.</p>
            </div>

            {/* 3 Stakeholder Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-base">
                  <Briefcase className="w-5 h-5" /> Vendor
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Vendors focus on supplying qualified resources. They need visibility into:
                </p>
                <ul className="text-xs font-mono space-y-1 text-zinc-700 dark:text-zinc-300">
                  <li>• Client requirements</li>
                  <li>• Candidate submissions</li>
                  <li>• Interview status</li>
                  <li>• Contracts</li>
                  <li>• Deployment updates</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-base">
                  <Building className="w-5 h-5" /> Client
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Clients are primarily concerned with selecting suitable candidates. Their workflow revolves around:
                </p>
                <ul className="text-xs font-mono space-y-1 text-zinc-700 dark:text-zinc-300">
                  <li>• Reviewing profiles</li>
                  <li>• Tracking interviews</li>
                  <li>• Providing feedback</li>
                  <li>• Approving contracts</li>
                  <li>• Monitoring deployments</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-base">
                  <UserCheck className="w-5 h-5" /> Admin
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  The admin acts as the operational bridge between vendors and clients. Responsibilities include:
                </p>
                <ul className="text-xs font-mono space-y-1 text-zinc-700 dark:text-zinc-300">
                  <li>• Managing requirements</li>
                  <li>• Reviewing submissions</li>
                  <li>• Scheduling interviews</li>
                  <li>• Maintaining contracts</li>
                  <li>• Monitoring performance</li>
                </ul>
              </div>
            </div>

            {/* STAKEHOLDER ECOSYSTEM IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Stakeholder Ecosystem"
              caption="Diagram connecting Vendor → Admin → Client"
              aspect="wide"
            />
          </section>

          {/* 08 / Discovery & Research Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                08 / User Research
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Discovery &amp; Research
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                To understand how teams currently worked, I conducted stakeholder discussions, reviewed existing documentation, and analyzed competing enterprise resource management platforms.
              </p>
              <p>
                Rather than beginning with interface ideas, the objective was to understand how information moved throughout the organization.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                This revealed that many inefficiencies were not interaction problems but workflow problems.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Key Findings — Several patterns consistently emerged:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
                  <div className="font-bold text-base text-emerald-600 dark:text-emerald-400">
                    Information was fragmented.
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Critical resource information existed across multiple systems, making it difficult to maintain a single source of truth.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
                  <div className="font-bold text-base text-emerald-600 dark:text-emerald-400">
                    Manual coordination slowed hiring.
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Simple actions often required multiple emails or phone calls before progressing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
                  <div className="font-bold text-base text-emerald-600 dark:text-emerald-400">
                    Resource visibility was limited.
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Teams struggled to understand current availability, deployment status, and interview progress.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
                  <div className="font-bold text-base text-emerald-600 dark:text-emerald-400">
                    Repetitive administrative work reduced efficiency.
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Creating resumes, updating spreadsheets, and sharing documents consumed significant operational time.
                  </p>
                </div>
              </div>
            </div>

            {/* RESEARCH SUMMARY IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Research Summary"
              caption="Affinity map, interview notes, or insight cards."
              aspect="wide"
            />
          </section>

          {/* 09 / Design Principles Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                09 / Core Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Design Principles
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Research informed four principles that guided the product.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-bold">01 / PRINCIPLE</div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Create one source of truth
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Users should never question where the latest information exists.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-bold">02 / PRINCIPLE</div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Reduce operational overhead
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Every repetitive manual task should be simplified wherever possible.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-bold">03 / PRINCIPLE</div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Surface information progressively
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Complex enterprise workflows should feel manageable by revealing only the information users need at each stage.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-bold">04 / PRINCIPLE</div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  Support collaboration
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  The platform should make handoffs between vendors, admins, and clients seamless rather than requiring constant external communication.
                </p>
              </div>
            </div>
          </section>

          {/* 10 / Information Architecture Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                10 / Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Information Architecture
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Enterprise products succeed or fail based on structure.</p>
              <p>
                Before designing interfaces, I mapped the relationships between requirements, resources, interviews, contracts, vendors, and deployments.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                This ensured the navigation reflected how users actually think about their work instead of how data happened to be stored.
              </p>
            </div>

            {/* INFORMATION ARCHITECTURE DIAGRAM IMAGE PLACEHOLDER */}
            <Image
              src="/case-studies/scalie/image2.webp"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain rounded-2xl"
            />
            <Image
              src="/case-studies/scalie/image3.webp"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain rounded-2xl"
            />
            <Image
              src="/case-studies/scalie/image4.webp"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain rounded-2xl"
            />
          </section>

          {/* 11 / Designing the Experience Section */}
          <section className="space-y-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                11 / End-to-End Flow
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Designing the Experience
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Instead of treating every module as an independent feature, Scalie was designed as one continuous operational workflow.
            </p>

            {/* 8-Stage Experience Sequence */}
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                Continuous Operational Journey
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-mono text-xs">
                {[
                  "Requirement Created",
                  "Vendor Submission",
                  "Resume Review",
                  "Interview Scheduling",
                  "Client Approval",
                  "Contract Management",
                  "Resource Deployment",
                  "Performance Tracking",
                ].map((stage, idx) => (
                  <div key={stage} className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                    <div className="text-emerald-500 font-bold text-[10px]">0{idx + 1}</div>
                    <div className="font-bold text-zinc-900 dark:text-zinc-100">{stage}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Every screen exists to support one stage of this workflow.
            </p>

            {/* Sub-module: Vendor Experience */}
            <div className="space-y-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Vendor Experience
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The vendor portal enables staffing partners to manage candidate submissions from a single workspace.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Rather than switching between multiple spreadsheets and communication channels, vendors receive clear visibility into every stage of the hiring process.
              </p>

              {/* VENDOR DASHBOARD IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/scalie/image5.webp"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />
            </div>

            {/* Requirement Management */}
            <div className="space-y-4 pt-4">

              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Vendors can browse active client requirements, understand skill expectations, and submit suitable resources directly through the platform.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The interface prioritizes clarity by presenting only the information required to make submission decisions.
              </p>


            </div>

            {/* Resume Builder */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Resume Builder
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                One recurring pain point identified during discovery was the inconsistency of candidate resumes.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Different vendors submitted profiles in different formats, creating unnecessary work for internal teams.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-semibold">
                To address this, Scalie introduced a standardized resume builder that helps generate consistent candidate profiles before submission.
              </p>

              {/* RESUME BUILDER IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/scalie/image6.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />
              <Image
                src="/case-studies/scalie/image7.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />
            </div>
          </section>

          {/* 12 / Designing the Client Experience Section */}
          <section className="space-y-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                12 / Client Portal
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Designing the Client Experience
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Although Scalie was launched as an MVP, the client experience was carefully planned as part of the overall ecosystem.
              </p>
              <p>
                Instead of simply displaying available resources, the objective was to help clients quickly communicate hiring needs while reducing back-and-forth conversations with the internal team.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                Every interaction was designed to capture structured information that could be immediately acted upon by the operations team.
              </p>
            </div>

            {/* Submitting Resource Requirements */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Submitting Resource Requirements
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Hiring requests often arrive through emails, spreadsheets, or phone calls, making them difficult to track consistently.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                To simplify this process, Scalie introduced a structured requirement flow that guides clients through the information needed to begin sourcing candidates.
              </p>

              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase">The process collects:</div>
                <div className="flex flex-wrap gap-2">
                  {["Required technologies", "Years of experience", "Number of developers", "Company information", "Contact details"].map((c) => (
                    <span key={c} className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2">
                Breaking the workflow into smaller steps reduces cognitive load while ensuring no critical information is missed.
              </p>

              {/* CLIENT REQUIREMENT FLOW IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/scalie/image9.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />

              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-1.5">
                <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Design Decision
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Rather than presenting one long form, the workflow was divided into logical steps based on how hiring managers naturally think about recruitment. Instead of asking for every detail at once, the interface progressively captures technical requirements before moving into organizational information. This approach reduces abandonment and improves data quality.
                </p>
              </div>
            </div>

            {/* Requirement Confirmation */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Requirement Confirmation
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                After submission, clients receive a confirmation screen while the internal team begins reviewing the request.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The interface also surfaces available bench resources, helping clients understand the platform&apos;s capabilities without waiting for manual communication.
              </p>

              {/* REQUIREMENT SUBMITTED IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/scalie/image10.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />
            </div>
          </section>

          {/* 13 / Designing the Admin Experience Section */}
          <section className="space-y-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                13 / Admin Control Center
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Designing the Admin Experience
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                If vendors and clients represent the edges of the system, the Admin Panel represents its operational center.
              </p>
              <p>Almost every workflow eventually passes through the internal operations team.</p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                This meant the admin experience needed to prioritize efficiency over aesthetics.
              </p>
              <p>Rather than designing individual screens, the objective was to support the complete resource lifecycle from one centralized workspace.</p>
            </div>

            {/* ADMIN DASHBOARD IMAGE PLACEHOLDER */}
            <Image
              src="/case-studies/scalie/image11.avif"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain rounded-2xl"
            />

            {/* Operational Visibility */}
            <div className="space-y-4 pt-2">

              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The dashboard provides a high-level overview of platform activity, allowing administrators to understand operational health without navigating across multiple pages.
              </p>

              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase">Key metrics include:</div>
                <div className="flex flex-wrap gap-2">
                  {["Total Resources", "Active Contracts", "Vendors", "Clients", "Resource Quality", "Deployment Growth"].map((m) => (
                    <span key={m} className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2">
                These metrics help teams quickly identify bottlenecks and monitor platform performance.
              </p>



              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-1.5">
                <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Design Decision
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Enterprise dashboards often overwhelm users with excessive information. Instead, Scalie prioritizes only the metrics that directly influence staffing decisions. This creates a cleaner overview while keeping operational insights immediately accessible.
                </p>
              </div>
            </div>

            {/* Managing Resources */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Managing Resources
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                One of the most frequent administrative tasks involves reviewing and managing vendor-submitted resources.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Search candidates", "Filter resources", "Verify profiles", "Assign ratings", "Review resumes", "Track availability"].map((act) => (
                  <div key={act} className="p-3 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {act}
                  </div>
                ))}
              </div>

              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2">
                Instead of relying on spreadsheets, every resource is maintained within a centralized system.
              </p>

              {/* RESOURCE MANAGEMENT TABLE IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/scalie/image13.png"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />

              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-1.5">
                <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Design Decision
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Tables remain the most efficient interface for enterprise resource management because they support rapid comparison across multiple attributes. Rather than replacing tables with cards, the experience enhances them using filtering, sorting, visual status indicators, and quick actions.
                </p>
              </div>
            </div>

            {/* Contract Management */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Contract Management
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Once a candidate is selected, the workflow progresses into contract creation.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Administrators can generate contracts by combining vendor information, client information, commercial details, and legal documentation into a single workflow.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                This eliminates scattered documents and improves record consistency.
              </p>

              {/* CONTRACT CREATION IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/scalie/image14.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />

              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-1.5">
                <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Design Decision
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Supporting document uploads directly inside the workflow prevents users from switching between external storage systems during contract creation. Keeping the process within one interface reduces friction and improves traceability.
                </p>
              </div>
            </div>

            {/* Interview Scheduling */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Interview Scheduling
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Interview coordination previously required multiple conversations between clients, vendors, and administrators.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Scalie centralizes this process into a dedicated scheduling workflow.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Schedule interviews", "Update interview links", "Modify interview times", "Reschedule sessions", "Cancel interviews"].map((sAct) => (
                  <div key={sAct} className="p-3 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {sAct}
                  </div>
                ))}
              </div>

              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2">
                Any changes automatically become visible throughout the platform.
              </p>

              {/* INTERVIEW SCHEDULING IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/scalie/image15.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />

              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 space-y-1.5">
                <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Design Decision
                </div>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Instead of treating interviews as standalone events, they become connected milestones within the resource lifecycle. This allows stakeholders to understand candidate progress without manually requesting updates.
                </p>
              </div>
            </div>

            {/* Lead Management */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Lead Management
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                The Lead Management module enables administrators to review incoming client requirements while maintaining visibility into each opportunity.
              </p>

              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase">Every submission records:</div>
                <div className="flex flex-wrap gap-2">
                  {["Company", "Requirement", "Status", "Assigned team member", "Hiring needs"].map((sub) => (
                    <span key={sub} className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2">
                This improves accountability and ensures no requirement is overlooked.
              </p>

              {/* LEAD MANAGEMENT DASHBOARD IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/scalie/image16.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />
            </div>
          </section>

          {/* 14 / Designing for Enterprise Workflows Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                14 / Workflow Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Designing for Enterprise Workflows
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Unlike consumer products, enterprise platforms rarely revolve around individual screens.</p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                Their success depends on how effectively information flows between people.
              </p>
              <p>Scalie was designed around this philosophy.</p>
              <p>Every module supports a larger operational workflow:</p>
            </div>

            {/* End-to-End Workflow Grid */}
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest font-semibold">
                Complete Enterprise Lifecycle
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs text-center">
                {[
                  "Client Requirement",
                  "Admin Review",
                  "Vendor Submission",
                  "Resource Verification",
                  "Resume Generation",
                  "Interview Scheduling",
                  "Contract Creation",
                  "Resource Deployment",
                  "Analytics",
                ].map((node, idx) => (
                  <div key={node} className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="text-emerald-500 font-bold text-[10px]">0{idx + 1}</div>
                    <div className="font-bold text-zinc-900 dark:text-zinc-100">{node}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              Rather than thinking in terms of pages, the product was designed around business processes.
            </p>

            {/* END-TO-END WORKFLOW DIAGRAM IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="End-to-End Workflow Diagram"
              aspect="wide"
            />
          </section>

          {/* 15 / User Testing Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                15 / Validation
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                User Testing
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                After completing the initial MVP, prototypes were tested with vendors, clients, and internal administrators as they performed their daily tasks.
              </p>
              <p>The objective wasn&apos;t simply to identify usability issues.</p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                It was to understand how the platform integrated into existing operational workflows.
              </p>
              <p>
                Over a 30-day period, continuous discussions and usability sessions helped identify opportunities for refinement.
              </p>
            </div>

            {/* USER TESTING PHOTOS IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="User Testing Photos / Notes"
              aspect="wide"
            />

            {/* Key Improvements After Testing */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Key Improvements After Testing
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Several improvements emerged from usability testing. These included:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Additional resource filters",
                  "Better visibility into requirement history",
                  "Improved contract workflows",
                  "Resource rating system",
                  "Personal information management",
                  "PDF uploads",
                  "General usability refinements across all panels",
                ].map((imp, idx) => (
                  <div key={imp} className={`p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2 ${idx === 6 ? "sm:col-span-3" : ""}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {imp}
                  </div>
                ))}
              </div>

              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2">
                Rather than treating testing as validation, it became an opportunity to strengthen the product before implementation.
              </p>

              {/* BEFORE & AFTER IMPROVEMENTS IMAGE PLACEHOLDER */}
              <ImagePlaceholder
                title="Before & After Improvements"
                aspect="wide"
              />
            </div>
          </section>

          {/* 16 / Results Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                16 / Measurable Metrics
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Results
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Although Scalie was launched as an MVP, the platform significantly improved operational efficiency by replacing fragmented manual workflows with a centralized management system.
            </p>

            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                Outcomes
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <div className="text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                    40% Reduction
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Resource allocation time decreased by streamlining candidate discovery and operational workflows.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <div className="text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                    25% Reduction
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Administrative workload was reduced through centralized information management and workflow automation.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <div className="text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                    20% Improvement
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Data accuracy increased by maintaining a single source of truth for resource information.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <div className="text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                    30% Reduction
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Communication delays decreased by replacing fragmented conversations with shared visibility across teams.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2 sm:col-span-2 lg:col-span-1">
                  <div className="text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
                    35% Reduction
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Bench resource idle time decreased through improved allocation and tracking.
                  </p>
                </div>
              </div>
            </div>

            {/* RESULTS DASHBOARD IMAGE PLACEHOLDER */}
            <ImagePlaceholder
              title="Results Dashboard"
              aspect="wide"
            />
          </section>

          {/* 17 / Looking Back Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                17 / Lessons
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Looking Back
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Designing Scalie reinforced an important lesson about enterprise software.</p>
              <p>Enterprise products are rarely difficult because of interface complexity.</p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                They become difficult because every workflow depends on another team.
              </p>
              <p>
                A small change to one process can influence vendors, administrators, recruiters, clients, and resource managers simultaneously.
              </p>
              <p>
                This project strengthened my ability to think beyond individual screens and design systems that support real operational workflows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-950 dark:border dark:border-zinc-800 space-y-3 text-center shadow-xl">
              <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                Mindset Shift
              </p>
              <p className="text-base sm:text-lg text-zinc-400 italic">
                Rather than asking, &ldquo;How should this page look?&rdquo;
              </p>
              <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">
                I found myself asking, &ldquo;How should information move across the organization?&rdquo;
              </p>
              <p className="text-xs text-zinc-400 pt-1">
                That shift fundamentally changed the way I approach enterprise product design.
              </p>
            </div>
          </section>

          {/* 18 / Future Opportunities Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                18 / Product Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Future Opportunities
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Although the MVP successfully addressed the organization&apos;s immediate operational challenges, several opportunities remain for future iterations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
                <div className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Dedicated Client Workspace
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Providing clients with a richer self-service experience would reduce dependency on manual communication while improving transparency.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
                <div className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Intelligent Resource Matching
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Introducing AI-assisted recommendations could help administrators identify the most suitable candidates based on skills, availability, experience, and historical deployment success.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
                <div className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Workflow Automation
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Automating repetitive operational tasks would further reduce manual effort and improve organizational efficiency.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5">
                <div className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Mobile Experience
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Supporting mobile workflows would enable administrators and vendors to manage critical activities while away from their desks.
                </p>
              </div>
            </div>

          </section>

          {/* 19 / Reflection Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                19 / Retrospective
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Reflection
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Scalie wasn&apos;t just about designing dashboards.</p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                It was about designing the operational backbone of a staffing organization.
              </p>
              <p>
                Every decision—from the information architecture to the smallest interaction—was influenced by how people collaborated, shared information, and moved work forward.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-950 dark:border dark:border-zinc-800 space-y-2 shadow-xl">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                Core Reflection
              </div>
              <p className="text-lg sm:text-xl text-zinc-200">
                The most valuable lesson from this project wasn&apos;t learning how to design enterprise interfaces.
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
                It was learning how to simplify complexity without hiding it.
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Design isn&apos;t simply about making software easier to use.</p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                It&apos;s about helping organizations work better together.
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
