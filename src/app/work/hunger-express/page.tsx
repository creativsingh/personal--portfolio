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
  ShoppingBag,
  Store,
  Navigation,
  Compass,
  Layers,
  HelpCircle,
  Image as ImageIcon,
  Check,
  Zap,
  Play,
  RotateCcw,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Hunger Express — Case Study by ${PERSONA_DATA.name}`,
  description:
    "Designing a Multi-Sided Food Delivery Ecosystem for the Nigerian Market.",
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
            Visual Design Slot • Mobile UI Mockup
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function HungerExpressPage() {
  const currentIndex = PERSONA_DATA.projects.findIndex((p) => p.id === "hunger-express");
  const project = PERSONA_DATA.projects[currentIndex !== -1 ? currentIndex : 3] || PERSONA_DATA.projects[0];
  const nextProject = PERSONA_DATA.projects[(currentIndex + 1) % PERSONA_DATA.projects.length] || PERSONA_DATA.projects[0];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0c] text-zinc-900 dark:text-zinc-100 font-sans">
      <Navbar />

      <main className="flex-1 pt-28 sm:pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6 space-y-16">

          {/* Shared Header Section (Consistent across all case studies) */}
          <ProjectHeaderSection
            project={project}
            projectIndex={3}
            totalProjects={PERSONA_DATA.projects.length}
          />

          {/* Featured Core Dilemma Quote */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-amber-500/5 to-transparent border-l-4 border-emerald-500 bg-zinc-50 dark:bg-[#121215]">
            <p className="text-base sm:text-lg italic font-medium text-emerald-950 dark:text-emerald-200">
              &ldquo;How do you design a food delivery experience that feels familiar enough for users to trust immediately, while adapting it to a completely different market and supporting three different user groups?&rdquo;
            </p>
          </div>

          {/* 01 / Executive Overview */}
          <section className="space-y-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                01 / Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Project Overview
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Hunger Express is a food delivery platform built for the Nigerian market that connects customers, restaurant owners, and delivery partners within a single ecosystem.
              </p>
              <p>
                Unlike traditional portfolio projects that focus on a single application, this project required designing three interconnected products:
              </p>
            </div>

            {/* 3 Interconnected Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <ShoppingBag className="w-5 h-5 text-emerald-500" />
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Customer App
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Frictionless restaurant discovery, food customization, single-screen checkout, and order tracking.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <Navigation className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Delivery Partner App
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Speed, clarity, large touch targets, single-active delivery focus, and availability controls on the road.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <Store className="w-5 h-5 text-orange-500" />
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Vendor App
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Operational efficiency, instant incoming order alerts, preparation status, and dispatch controls.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              <p>
                Each product served different goals while sharing the same operational workflow—from discovering restaurants and placing orders to food preparation, delivery, and order completion.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                The objective wasn&apos;t simply to create beautiful interfaces. It was to build a scalable ordering experience that felt intuitive for every participant in the delivery ecosystem.
              </p>
            </div>

            {/* HERO IMAGE PLACEHOLDER */}
            <Image
              src="/case-studies/hungerexpress/cover2.avif"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain rounded-2xl"
            />
          </section>



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
              <p>
                Nigeria&apos;s food delivery market continues to grow, but users have already become familiar with global experiences like Uber Eats.
              </p>
              <p>
                Rather than reinventing an already successful interaction model, the opportunity was to build upon proven usability patterns while adapting them for the client&apos;s business requirements and local audience.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                This approach reduced unnecessary learning for users while allowing development to move quickly.
              </p>
            </div>
          </section>

          {/* 04 / The Challenge Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                04 / Constraints
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                The Challenge
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              This project came with two major constraints.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-base">
                  <Clock className="w-5 h-5" /> Tight Timeline
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  The complete ecosystem had to be designed within three months, leaving little room for lengthy discovery or multiple design explorations.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-base">
                  <Users className="w-5 h-5" /> Multi-Sided Product
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Instead of designing one application, every design decision had to work across three different user groups.
                </p>
              </div>
            </div>

            {/* 3 User Group Requirements */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-medium">
                User Group Needs:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="text-xs font-mono text-emerald-500 font-bold mb-1">01 / CUSTOMERS</div>
                  <div className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                    Needed a frictionless ordering experience.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="text-xs font-mono text-amber-500 font-bold mb-1">02 / DELIVERY PARTNERS</div>
                  <div className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                    Needed clarity and speed while on the road.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="text-xs font-mono text-orange-500 font-bold mb-1">03 / VENDORS</div>
                  <div className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                    Needed efficient order management.
                  </div>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              Although each product served different users, they all depended on the same ordering lifecycle.
            </p>
          </section>

          {/* 05 / My Approach Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                05 / Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                My Approach
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Given the project&apos;s timeline and clearly defined business direction, I adopted an execution-focused design process.
              </p>
              <p>
                Instead of spending weeks creating low-fidelity wireframes, I moved directly into high-fidelity exploration using established interaction patterns.
              </p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                This wasn&apos;t about skipping UX. It was about investing time where it created the greatest value.
              </p>
              <p>
                Since food delivery is already a mature product category, many usability problems have already been solved by leading platforms.
              </p>
              <p>
                Rather than redesigning familiar behaviors, I focused on adapting those proven patterns to meet the client&apos;s requirements while maintaining speed, consistency, and usability.
              </p>
            </div>

            {/* CURRENT CUSTOMER APP MOCKUP IMAGE PLACEHOLDER */}
            <Image
              src="/case-studies/hungerexpress/image1.avif"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain"
            />
          </section>

          {/* 06 / Learning Before Designing Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                06 / Benchmarking
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Learning Before Designing
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Before opening Figma, I spent time studying successful food delivery products—particularly Uber Eats.
              </p>
              <p>
                The objective wasn&apos;t to replicate screens. It was to understand why certain interaction patterns have become industry standards.
              </p>
              <p>
                Instead of copying interfaces, I analyzed the principles behind them.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                For example:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "How navigation reduces cognitive load.",
                  "Why restaurant discovery feels effortless.",
                  "How checkout minimizes unnecessary decisions.",
                  "How order tracking builds trust after payment.",
                  "Why recommendations become more relevant over time.",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              These observations provided a strong foundation for designing Hunger Express while leaving room for product-specific customization.
            </p>

            {/* UBER EATS COMPARISON IMAGE PLACEHOLDER */}
            <Image
              src="/case-studies/hungerexpress/image2.avif"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain rounded-2xl"
            />
            <Image
              src="/case-studies/hungerexpress/image3.avif"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain rounded-2xl"
            />

          </section>

          {/* 07 / Key Design Principles Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                07 / Principles
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Key Design Principles
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              The competitive analysis helped define several principles that guided the product.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-bold">01 / PRINCIPLE</div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  Familiar interactions reduce learning.
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Users shouldn&apos;t need to relearn how food delivery works. Every tap should move users closer to placing an order.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-bold">02 / PRINCIPLE</div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  Reducing unnecessary decisions increases completion.
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Information should appear progressively. Instead of overwhelming users with choices, content should unfold naturally.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <div className="text-xs font-mono text-emerald-500 font-bold">03 / PRINCIPLE</div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  Speed matters more than decoration.
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Food ordering is goal-oriented. Every interaction should support quick decision making.
                </p>
              </div>
            </div>
          </section>

          {/* 08 / Customer Experience Section */}
          <section className="space-y-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                08 / App 01 — Customer
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Customer Experience
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>The customer application became the foundation of the ecosystem.</p>
              <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                Its primary objective was simple: Help users discover food, customize their order, complete payment, and confidently track delivery.
              </p>
              <p>Every screen was designed around reducing friction.</p>
            </div>

            {/* Customer Flow 1: Discovering Restaurants */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Discovering Restaurants
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Restaurant discovery is the first decision users make. Rather than exposing every restaurant equally, the interface prioritizes categories, personalized recommendations, and visual content.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Large imagery helps users make quicker decisions while category filters reduce browsing effort.
              </p>

              {/* RESTAURANT DISCOVERY IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/hungerexpress/image4.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />
              <Image
                src="/case-studies/hungerexpress/image6.avif"
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
                  Food decisions are highly visual. Increasing the prominence of food photography allows users to evaluate options faster than relying on text descriptions alone. Categories also reduce the effort required to browse large restaurant collections.
                </p>
              </div>
            </div>

            {/* Customer Flow 2: Product Details */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Product Details
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Ordering food involves several decisions. Instead of navigating users through multiple pages, product customization happens within a single focused experience.
              </p>

              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-500 uppercase">Users can immediately understand:</div>
                <div className="flex flex-wrap gap-2">
                  {["Product imagery", "Price", "Variations", "Popular options", "Additional selections"].map((opt) => (
                    <span key={opt} className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                      {opt}
                    </span>
                  ))}
                </div>
              </div>

              {/* PRODUCT DETAIL IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/hungerexpress/image8.avif"
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
                  Popular options were surfaced directly within the customization flow to reduce decision fatigue. Rather than asking users to compare every variation equally, recommended choices help accelerate checkout.
                </p>
              </div>
            </div>

            {/* Customer Flow 3: Streamlining Checkout */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Streamlining Checkout
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Checkout is often where users abandon purchases. The experience was intentionally simplified by keeping every important action within one screen.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {["Review items", "Update quantities", "Change addresses", "Choose delivery or pickup", "Complete payment"].map((act) => (
                  <div key={act} className="p-3 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {act}
                  </div>
                ))}
              </div>

              {/* CHECKOUT FLOW IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/hungerexpress/image5.avif"
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
                  The primary action remains visually dominant throughout the experience, ensuring users always know the next step. Supporting actions remain accessible without competing for attention.
                </p>
              </div>
            </div>

            {/* Customer Flow 4: Order Tracking */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Building Confidence After Payment
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Ordering doesn&apos;t end after payment. In many cases, anxiety actually increases once money has been spent.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                To address this, the order tracking experience communicates progress through clearly defined stages.
              </p>

              {/* Stage Progress Diagram */}
              <div className="flex flex-wrap items-center gap-2 p-4 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 font-mono text-xs text-zinc-700 dark:text-zinc-300">
                {["Order received", "Preparing", "Rider collecting", "Rider en route", "Delivered"].map((stage, idx, arr) => (
                  <React.Fragment key={stage}>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{stage}</span>
                    {idx < arr.length - 1 && <span className="text-zinc-400">→</span>}
                  </React.Fragment>
                ))}
              </div>

              {/* ORDER TRACKING FLOW IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/hungerexpress/image9.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />
            </div>

            {/* Customer Flow 5: Designing Edge Cases */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Designing Edge Cases
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Real-world delivery doesn&apos;t always go as planned. Instead of designing only successful journeys, the experience also supports delivery failures.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Users receive clear updates explaining what happened while providing obvious next steps. This prevents uncertainty during unexpected situations.
              </p>

              {/* DELIVERY FAILURE IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/hungerexpress/image10.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />
            </div>

            {/* Customer Flow 6: Delivery & Pickup */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Delivery &amp; Pickup
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Not every customer wants delivery. Switching between delivery and pickup was designed as a lightweight interaction that preserves the user&apos;s browsing context.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                This allows users to change fulfilment methods without restarting their journey.
              </p>

              {/* DELIVERY / PICKUP TOGGLE IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/hungerexpress/image11.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />
              <Image
                src="/case-studies/hungerexpress/image12.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />
            </div>

            {/* Customer Flow 7: Order History */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Order History
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Past orders become valuable references. Rather than displaying identical cards, order status is communicated using clear visual indicators that make scanning easier.
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Whether an order is preparing, completed, cancelled, or failed, users can understand its current state immediately.
              </p>

              {/* ORDER STATUS LIBRARY IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/hungerexpress/image13.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />

            </div>
          </section>

          {/* 09 / Delivery Partner Experience Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                09 / App 02 — Delivery Partner
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Delivery Partner Experience
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                The delivery partner application focused on helping riders complete deliveries with minimal distraction.
              </p>
              <p>
                Unlike customers, riders interact with the product while moving. Every screen therefore prioritizes speed, clarity, and large touch targets.
              </p>
            </div>

            {/* DELIVERY PARTNER HERO IMAGE PLACEHOLDER */}
            <Image
              src="/case-studies/hungerexpress/image15.avif"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain rounded-2xl"
            />

            {/* Rider Core Goals */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">
                Core Goals — The rider application enables delivery partners to:
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Receive incoming jobs",
                  "Accept or reject deliveries",
                  "View pickup information",
                  "Navigate efficiently",
                  "Complete deliveries",
                  "Manage availability",
                ].map((goal) => (
                  <div key={goal} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    {goal}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 space-y-1.5 mt-4">
              <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                Design Decision
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Only one delivery remains active at a time. Reducing simultaneous tasks helps riders focus on completing deliveries safely rather than managing multiple competing requests.
              </p>
            </div>

            {/* DELIVERY ACCEPTANCE FLOW IMAGE PLACEHOLDER */}
            <Image
              src="/case-studies/hungerexpress/image16.avif"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain rounded-2xl"
            />

            {/* Availability Controls */}
            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                Availability Controls
              </h3>
              <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Drivers should always control when they receive work. The online/offline status allows partners to manage availability while preventing unwanted interruptions.
              </p>

              {/* ONLINE / OFFLINE STATES IMAGE PLACEHOLDER */}
              <Image
                src="/case-studies/hungerexpress/image17.avif"
                alt="Hero mockup showing Home Dashboard + Wellness Score"

                width={1600}
                height={900}

                className="object-contain rounded-2xl"
              />
            </div>
          </section>

          {/* 10 / Vendor Experience Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                10 / App 03 — Vendor
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Vendor Experience
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Restaurant owners require a very different workflow.</p>
              <p>Instead of browsing content, their primary objective is operational efficiency.</p>
              <p>The interface therefore prioritizes incoming orders and preparation status above everything else.</p>
            </div>

            {/* VENDOR APP HERO IMAGE PLACEHOLDER */}
            <Image
              src="/case-studies/hungerexpress/image18.avif"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain rounded-2xl"
            />

            {/* Vendor Core Goals */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-orange-600 dark:text-orange-400 font-semibold uppercase tracking-wider">
                Core Goals — Restaurant owners can:
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Accept new orders",
                  "Begin preparation",
                  "Manage incoming requests",
                  "Switch between delivery and pickup",
                  "Track preparation progress",
                ].map((vGoal) => (
                  <div key={vGoal} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                    <Store className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                    {vGoal}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-orange-500/5 border border-orange-500/10 space-y-1.5 mt-4">
              <div className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                Design Decision
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Incoming orders receive maximum visual priority. Time-sensitive actions remain immediately accessible, allowing restaurants to respond quickly during busy hours.
              </p>
            </div>

            {/* VENDOR ORDER FLOW IMAGE PLACEHOLDER */}
            <Image
              src="/case-studies/hungerexpress/image19.png"
              alt="Hero mockup showing Home Dashboard + Wellness Score"

              width={1600}
              height={900}

              className="object-contain rounded-2xl"
            />
          </section>

          {/* 11 / Iteration Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                11 / Refinement
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Iteration
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>Although the project timeline was short, every review improved the product.</p>
              <p>Throughout development, designs evolved based on stakeholder feedback and implementation discussions.</p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-mono text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                Several refinements included:
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Improving homepage hierarchy",
                  "Simplifying navigation",
                  "Refining order tracking",
                  "Adding additional edge cases",
                  "Improving interaction clarity",
                ].map((ref) => (
                  <div key={ref} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-mono text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                    <RotateCcw className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    {ref}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl pt-2">
              Rather than treating the first design as final, continuous iteration helped improve usability without extending project timelines.
            </p>


          </section>

          {/* 12 / Key Takeaways Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                12 / Insights
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Key Takeaways
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              This project reinforced several important lessons.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  UX under tight deadlines
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Working within tight deadlines doesn&apos;t eliminate UX thinking. Instead, it changes where design effort should be invested. Leveraging familiar interaction patterns accelerated decision-making while allowing more time to refine details that directly affected usability.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#121215] border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Interconnected Ecosystems
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Designing three interconnected applications highlighted the importance of thinking beyond individual screens. Every interaction influences another user somewhere else in the ecosystem.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-950 dark:border dark:border-zinc-800 space-y-3 text-center shadow-xl">
              <p className="text-sm font-mono text-emerald-400 uppercase tracking-widest font-bold">
                The Ecosystem Lifecycle
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-base sm:text-lg font-bold">
                <span className="text-zinc-200">The customer places an order.</span>
                <span className="text-emerald-400 font-mono">→</span>
                <span className="text-zinc-200">The restaurant prepares it.</span>
                <span className="text-emerald-400 font-mono">→</span>
                <span className="text-zinc-200">The rider delivers it.</span>
              </div>
              <p className="text-xs text-zinc-400 italic font-sans pt-1">
                A successful experience depends on all three products working together.
              </p>
            </div>
          </section>

          {/* 13 / Reflection Section */}
          <section className="space-y-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block font-semibold">
                13 / Retrospective
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Reflection
              </h2>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              Hunger Express taught me that good product design isn&apos;t always about creating entirely new interaction patterns.
            </p>

            <div className="p-6 rounded-2xl bg-zinc-900 text-white dark:bg-zinc-950 dark:border dark:border-zinc-800 space-y-2 shadow-xl">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                Key Lesson
              </div>
              <p className="text-xl sm:text-2xl font-bold text-zinc-100 leading-snug">
                Sometimes the best design decision is recognizing when users already understand an experience and building upon that familiarity.
              </p>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
              <p>
                Rather than reinventing food delivery, I focused on reducing friction, improving clarity, and designing a system that supports every participant in the ordering journey.
              </p>
              <p>
                Looking back, I&apos;d further strengthen the product by validating assumptions through usability testing, analyzing behavioral metrics after launch, and exploring personalization opportunities for restaurant discovery.
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
