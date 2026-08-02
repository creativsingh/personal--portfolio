# CreativSingh — Case Study Detail Page Design System & Principles

This document establishes the official **Design Principles, UX Guidelines, and Architectural Standards** for all project detail / case study pages (`src/app/work/[id]/page.tsx`) in CreativSingh's personal portfolio.

---

## 🎯 Core Objectives

1. **Brand Consistency**: Maintain a recognizable, high-end, dark-mode native visual language across all case studies.
2. **Cognitive Clarity**: Structure complex UX research, system metrics, and product workflows into scannable, bite-sized sections.
3. **Empirical Proof**: Every case study must emphasize measurable business impact, user retention numbers, or engineering performance gains.
4. **Developer-Minded Design**: Bridge product strategy, UX research, and frontend execution.

---

## 🏛️ 7 Core Design Principles for Detail Pages

### 1. Consistent Navigation & Header Architecture
Every detail page MUST render the shared `<ProjectHeaderSection />` component at the very top of `<article className="max-w-4xl mx-auto px-6 space-y-16">`.

- **Breadcrumb Navigation**: `<ArrowLeft /> Back to Selected Work` link back to `/#work`.
- **Progress Counter**: `Case Study X of Y` dynamically calculated using `PERSONA_DATA.projects.length`.
- **Interactive Hero Showcase (Carousel & Video)**: Replaces static single images with a multi-slide image carousel or video demonstration. Includes a media mode switcher (`[ 🖼️ Carousel ]` / `[ 🎥 Video Demo ]`) when both are available, auto-play slideshow (3.5s interval, pause-on-hover), previous/next arrow buttons, dot pagination, and support for embedded (YouTube, Vimeo, Loom) or direct MP4/WebM videos.
- **Project Meta Bar**: Grid displaying `Role`, `Duration`, `Platform`, `Team Size`, and a horizontal pill list for `Tool Stack & Technologies`.
- **Challenge vs. Solution Cards**: Dual side-by-side callout cards (`The Challenge & Friction` in rose accent, `The Product Solution` in emerald accent).
- **Impact Metrics Grid**: 4-column numeric stats cards (`Daily Log Engagement`, `Motivation Retention`, `Render Speed`, etc.).

---

### 2. Standardized 7-Stage Narrative Structure
Every case study detail page should follow this structured narrative flow:

| Stage | Section Name | Content Focus |
| :--- | :--- | :--- |
| **01** | `Executive Overview` | Pitch, tagline, high-level summary, and core project vision. |
| **02** | `The Opportunity & Friction` | Current state pain points, user frustration quote callout, baseline metrics. |
| **03** | `UX Discovery & Research` | Methodology, persona mapping, research questions, and 4 key insight cards. |
| **04** | `Core Features & Decisions` | Deep-dive into Features 1–N with explicit **Problem** vs **Design Decision** splits. |
| **05** | `Designing for Trust & Failure` | Edge cases, privacy disclosures, error states, and fail-safe recovery journeys. |
| **06** | `Quantifiable Outcomes` | Beta testing results, conversion metrics, retention percentages, or efficiency gains. |
| **07** | `Reflection & Key Lessons` | Strategic takeaways on clarity, design engineering trade-offs, and product learnings. |

---

### 3. Visual System & Aesthetic Tokens

- **Theme Palette**:
  - Dark Mode: `bg-[#0a0a0c]` background, `bg-[#121215]` surface cards, `border-zinc-800/80` borders, `text-[#fafafa]` titles.
  - Light Mode: `bg-white` background, `bg-zinc-50` surface cards, `border-zinc-200/80` borders, `text-zinc-900` titles.
  - Emerald Accent: Primary accent for stats, badges, and success highlights (`emerald-500` / `emerald-400`).
- **Typography Standards**:
  - Page Title: `text-3xl sm:text-5xl font-extrabold tracking-tight`
  - Section Headings: `text-2xl sm:text-3xl font-bold tracking-tight`
  - Monospace Section Labels: `text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 block font-semibold` (Muted Grey Color for numbered headings like `02 / Discovery`)
  - Subtitle Quotes: Left border 4px (`border-l-4 border-emerald-500`), ambient background gradient, italic font.

---

### 4. Standardized Image Placeholder System
When production screenshots or Figma mockups are represented as placeholders, use the standardized `<ImagePlaceholder />` component:

```tsx
<ImagePlaceholder
  title="Hero mockup showing Home Dashboard + Wellness Score"
  caption="Caption describing the visual design decision or user flow context."
  aspect="hero" // Options: "hero" | "wide" | "standard" | "tall"
/>
```

- **Visual Cues**: Radial ambient glow background, dashed emerald border (`border-dashed border-emerald-500/30`), `[IMAGE PLACEHOLDER]` pill tag, and visual wireframe slot indicators.
- **Caption Requirement**: Every mockup must include a descriptive italic caption explaining *why* the visual matters to the user experience.

---

### 5. Content Integrity & Zero Truncation Rule
- **No Lost Copy**: Preserve all user research questions, persona quotes, edge cases, or test outcomes.
- **Micro-Interactions & Step Flows**: Represent multi-step flows (e.g. *Discover → Understand → Receive Insights → Take Action → Track Progress*) using visual step badges and font-mono step indicators (`01`, `02`, `03`).

---

### 6. Next Case Study Footer Navigation
Every detail page MUST conclude with the standard Next Case Study link card pointing to `PERSONA_DATA.projects[(index + 1) % total]`:

- Displays `Next Case Study` uppercase tracking label.
- Project Title & Category.
- Circular arrow button with hover effect (`group-hover:bg-emerald-500 group-hover:text-white`).

---

### 7. Performance, SEO & Accessibility Standards
- **Page Metadata**:
  ```tsx
  export const metadata: Metadata = {
    title: `${project.title} — Case Study by ${PERSONA_DATA.name}`,
    description: project.tagline,
  };
  ```
- **Semantic Tags**: Clean HTML structure (`<main>`, `<article>`, `<section>`, `<figure>`, `<h1>`-`<h3>`).
- **Responsive Layout**: Mobile-first responsive grids (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).

---

## 📋 Detail Page Checklist for New Projects

- [ ] Import and place `<ProjectHeaderSection />` at top of `<article>`.
- [ ] Add Subtitle Quote Card highlighting the core user dilemma / tagline.
- [ ] Document 4 Key Research Insights in 2x2 grid cards.
- [ ] Define Feature sections with explicit **Problem** vs **Design Decision** splits.
- [ ] Include Edge Cases & Error State recovery flows.
- [ ] Implement standardized `<ImagePlaceholder />` components for all visual slots.
- [ ] Conclude with Reflection quote & Next Case Study footer banner.
- [ ] Run `npm run build` to verify 0 TypeScript or rendering errors.
