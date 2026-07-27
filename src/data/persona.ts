export interface MetricItem {
  label: string;
  value: string;
}

export interface SectionItem {
  title: string;
  description?: string;
  paragraphs?: string[];
  bullets?: string[];
  quotes?: string[];
  impactNote?: string;
  image?: string;
  imageCaption?: string;
  isPlaceholderImage?: boolean;
}

export interface ToolItem {
  name: string;
  category: 'Design' | 'Frontend' | 'Development';
}

export interface Project {
  id: string;
  title: string;
  category: 'AI & Healthcare' | 'SaaS & Community' | 'Consumer Apps' | 'Design Systems';
  tagline: string;
  role: string;
  roleDescription?: string;
  period: string;
  duration?: string;
  teamSize?: string;
  platform?: string;
  impactMetric: string;
  metrics: MetricItem[];
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  tools: string[];
  color: string;
  coverImage?: string;
  sections?: SectionItem[];
  highlights: string[];
}

export interface Talk {
  id: string;
  title: string;
  venue: string;
  location: string;
  date: string;
  topic: string;
  attendees?: string;
  badge?: string;
}

export interface Track {
  id: string;
  title: string;
  genre: string;
  instrument: string;
  duration: string;
  description: string;
  coverImage?: string;
  audioUrl?: string;
  spotifyUrl?: string;
}

export const PERSONA_DATA = {
  name: "Ajeet Singh",
  brand: "CreativSingh",
  role: "Product Designer & Community Builder",
  subheading: "Evolving toward Design Engineering",
  location: "Delhi, India",
  website: "https://creativsingh.com",
  oneLiner: "I design & build thoughtful digital products, build design communities, and share knowledge to help people grow.",
  brandPromise: "Designs products that balance user empathy, business goals, and technical feasibility.",
  statusText: "Available for Design Engineer & Product Designer Roles",

  aboutBio: `I'm a Product Designer based in Delhi, India, bridging the space between UX design, frontend code, and human empathy. As the organizer of the PixelPeps design community, I actively mentor designers and host workshops. Currently, I am evolving into a Design Engineer—building production-grade user interfaces with precision, clarity, and AI-assisted workflows.`,

  corePrinciples: [
    {
      title: "Clarity Over Decoration",
      description: "Stripping away visual clutter to focus on content, legibility, and effortless user navigation.",
      icon: "Sparkles"
    },
    {
      title: "Empathy & Technical Feasibility",
      description: "Designing solutions that solve real user pain points while being performant and realistic to engineer.",
      icon: "Code"
    },
    {
      title: "Business Impact Aligned",
      description: "Connecting design decisions to measurable conversion, user retention, and business growth metrics.",
      icon: "TrendingUp"
    },
    {
      title: "AI-Assisted Workflows",
      description: "Leveraging generative AI and modern automation to accelerate design iteration and code prototyping.",
      icon: "Cpu"
    },
    {
      title: "Community-First & Knowledge Sharing",
      description: "Growing together through mentorship, open meetups, and transparent learning in public.",
      icon: "Users"
    }
  ],

  projects: [
    {
      id: "genesis-ai",
      title: "Genesis AI",
      category: "AI & Healthcare",
      tagline: "Reimagining enterprise product configuration & CPQ workflows with intent-driven AI guidance.",
      role: "Sr. Product Designer",
      roleDescription: "Product discovery with CEO & stakeholders • Creating clarity out of chaos (auditing legacy flows) • Designing a scalable system across End-User & Admin panels • Facilitating cross-functional workshops • Collaborating deeply with PM & VP of Design • Establishing feasibility with dev architects • Final handoff and implementation QA.",
      period: "2024",
      duration: "9 Months",
      teamSize: "2 Designers & Engineers",
      platform: "Desktop Web Application",
      impactMetric: "Accelerated Enterprise Quote Generation",
      metrics: [
        { label: "Faster Quote Assembly", value: "4.8x" },
        { label: "Pricing Rule Errors", value: "0" },
        { label: "Intent Flow Adoption", value: "100%" },
        { label: "Onboarding Latency", value: "-60%" }
      ],
      coverImage: "/case-studies/genesis-ai-cover.png",
      summary: "Genesis AI transforms dense enterprise CPQ (Configure, Price, Quote) software by auditing legacy systems, shifting from manual parameter grids to intent-based user flows, and crafting interactive Figma prototypes.",
      problem: "Legacy enterprise CPQ systems present overwhelming configuration matrices, opaque pricing rules, and rigid item forms that slow sales teams down when assembling custom enterprise quotes.",
      solution: "Partnered with executive leadership to replace static parameter forms with 'Ask Genesis AI' conversational guidance, automated list price calculations, and real-time guidance cards.",
      keyFeatures: [
        "Ask Genesis AI conversational quote assistant",
        "Automated bandwidth & hardware pricing guidance",
        "Dynamic CPQ quote list manager (e.g. QUOTE-006989)",
        "Audit-driven UI simplification & Figma tokens"
      ],
      tools: ["Figma", "Next.js", "Tailwind CSS", "Expedite Commerce", "Framer"],
      color: "from-emerald-500/20 to-teal-500/10",
      sections: [
        {
          title: "What broke — and why we had to rethink the configurator?",
          description: "An in-depth breakdown of the friction points across UX, Business, Technical, and Experience dimensions in legacy CPQ systems.",
          paragraphs: [
            "1. User Pain Points:\n• Too many clicks to configure even simple products\n• Attributes were hidden in separate tabs, breaking user flow\n• No clear distinction between product-level and option-level changes\n• Users lost context while scrolling through long option lists\n• Frequent back-and-forth just to validate pricing or configurations\n👉 Impact: Slower workflows, frustration, and lack of confidence during sales calls.",
            "2. Business Challenges:\n• Sales teams struggled to create quotes quickly during live demos\n• Heavy dependency on designers or pre-made decks for presentations\n• Inconsistent configurations across teams led to errors\n• Increasing need for AI-assisted workflows to stay competitive\n• Product wasn’t scalable across industries (Manufacturing, SaaS, IoT, XaaS)\n👉 Impact: Lost efficiency, reduced conversion speed, and poor demo experience.",
            "3. Technical Limitations:\n• Legacy tab-based architecture restricted flow redesign\n• Rules engine processed configurations sequentially → delays in feedback\n• Backend attribute structure limited dynamic UI rendering\n• UI components weren’t built for flexible admin configurations\n• No optimized data structure to support AI-driven suggestions\n👉 Impact: Slower system response, rigid UI, and limited innovation capability.",
            "4. Experience Gaps (AI + UX Opportunity):\n• No intelligent guidance for configuration decisions\n• Users relied on manual validation instead of system assistance\n• No visibility into why conflicts occurred\n• Lack of real-time feedback while configuring\n• No assistive layer to reduce cognitive load\n👉 Opportunity: Introduce AI as a co-pilot to guide, validate, and accelerate decisions."
          ]
        },
        {
          title: "Workation Snapshot",
          description: "Deep work & problem solving in Kerala.",
          image: "/case-studies/genesis-ai-workation-placeholder.png",
          imageCaption: "A snapshot of me working on this project during a workation in Kochi, Kerala.",
          isPlaceholderImage: true
        },
        {
          title: "Kickoff with the CEO",
          description: "Our very first call was with the CEO. Not for approvals — but for alignment.",
          quotes: [
            "“Our Customer's sales cycle needs to shrink — reps should be able to configure and quote in minutes, not hours.”",
            "“Right now, we lose time because reps manually adjust configurations. I want AI to eliminate 70–80% of that effort.”",
            "“The AI should be smart enough to suggest the right bundles and warn users before they break a rule.”",
            "“I want a UI we’re proud to demo to an enterprise customer without preparation. That’s the bar.”"
          ],
          paragraphs: [
            "I approached this call like a strategist. Understanding the 'why' up front helped define the guardrails for every future decision:",
            "• Why are sales reps spending more time configuring than selling?\n• Why do we believe AI is the right accelerator for this workflow now?\n• Why do configurations vary so much between different teams or regions?\n• Why do live demos require separate decks instead of using the product directly?\n• Why do admins rely on spreadsheets or external documents to manage rules?\n• Why are conflict messages unclear or easily missed by users?\n• Why do complex products still require manual review despite having rules?\n• Why is critical information hidden below the fold in the current UI?\n• Why do customers often need follow-up clarifications during configuration calls?\n• Why is the current configurator unable to scale to new industries or pricing models?"
          ]
        },
        {
          title: "Auditing the Legacy System (Becoming a Detective 🕵️)",
          description: "So, I pulled every legacy screen into Miro — hundreds of flows. I treated this audit like forensic analysis.",
          image: "/case-studies/genesis-ai-legacy-audit.png",
          imageCaption: "A snapshot of Miro board while auditing legacy configurator designs.",
          paragraphs: [
            "Before proposing improvement, I needed to understand: What breaks? What slows users down? Where does cognitive overload occur? Which patterns contradict expectations?",
            "We invited stakeholders from sales, ops, and admin into Miro workshops. We circled:\n• Must-keep features\n• Pain points\n• Missing use-cases\n• Opportunities for AI assistance",
            "Stakeholders usually describe symptoms. My job was to uncover the root causes behind them. So I kept asking:\n• 'What’s happening here?'\n• 'What are you trying to achieve in this moment?'\n• 'What slows you down?'\nThose conversations shaped the foundation of our new system."
          ]
        },
        {
          title: "Shaping the Final Experience 👨🏻‍💻",
          description: "Using our design system, Me and my colleague built the first full iteration.",
          image: "/case-studies/genesis-ai-figma-iteration.png",
          imageCaption: "A Mockup of one of the screen from End User newly designed configurator."
        }
      ],
      highlights: [
        "Audited legacy enterprise CPQ architecture across 15+ sub-modules",
        "Created intent-driven UI patterns adopted for desktop web app",
        "Designed real-time price calculator & Ask Genesis AI assistant"
      ]
    },
    {
      id: "commudle",
      title: "Commudle",
      category: "SaaS & Community",
      tagline: "All-in-one community management and tech event hosting platform.",
      role: "UX Designer & Frontend Collaborator",
      roleDescription: "Served as UX Designer & Frontend Collaborator. Streamlined event ticketing, 1-click QR check-in flows, speaker schedule builders, and automated certificate generation engines supporting 120K+ event attendees across tech communities in India.",
      period: "2023 - 2024",
      duration: "12 Months",
      teamSize: "4 Designers & Engineers",
      platform: "Web & Mobile",
      impactMetric: "120K+ Event Attendees Supported",
      metrics: [
        { label: "Attendees Supported", value: "120K+" },
        { label: "Event Setup Time", value: "15 Min" },
        { label: "Check-in Queue Reduction", value: "60%" },
        { label: "Sub-modules Adopted UI", value: "15+" }
      ],
      coverImage: "/case-studies/commudle-cover.png",
      summary: "Streamlining event discovery, ticketing, speaker management, and attendee networking for tech communities across India.",
      problem: "Community leads relied on multiple fragmented tools for ticketing, speaker scheduling, attendance check-ins, and certificate generation.",
      solution: "Created a unified dashboard and registration flow that reduced event setup time from 3 hours to 15 minutes.",
      keyFeatures: [
        "1-click ticketing & QR check-in flow",
        "Interactive speaker agenda builder",
        "Automated certificate generation engine",
        "Community engagement leaderboard"
      ],
      tools: ["Figma", "React", "Tailwind CSS", "Framer", "Notion"],
      color: "from-blue-500/20 to-indigo-500/10",
      highlights: [
        "Redesigned event check-in experience cutting entry queues by 60%",
        "Created scalable UI components adopted across 15+ sub-modules",
        "Partnered directly with community leads from GDG & PixelPeps"
      ]
    },
    {
      id: "prana-ai",
      title: "Prana AI (StayFit AI)",
      category: "AI & Healthcare",
      tagline: "Empathetic health & wellness companion UI with predictive telemetry analytics.",
      role: "Lead Product Designer & Prototyper",
      roleDescription: "Lead Product Designer & Prototyper. Designed dark-mode native telemetry visualizers, real-time vital trend charts, and empathetic conversational AI interfaces.",
      period: "2024",
      duration: "6 Months",
      teamSize: "3 Designers & Engineers",
      platform: "Mobile & Web",
      impactMetric: "38% Increase in Daily Log Engagement",
      metrics: [
        { label: "Daily Log Engagement", value: "+38%" },
        { label: "User Interviews & Testers", value: "40+" },
        { label: "Telemetry Render Speed", value: "<50ms" },
        { label: "Clarity Satisfaction Score", value: "94%" }
      ],
      coverImage: "/case-studies/prana-ai-cover.png",
      summary: "Prana AI translates complex biometric signals and health metrics into actionable, calm visual insights for everyday users.",
      problem: "Traditional health apps overwhelm users with dense medical numbers, causing user fatigue and abandonment.",
      solution: "Designed a minimalist telemetry interface featuring dark-mode native graphics, micro-animations, and AI-driven summary cards.",
      keyFeatures: [
        "Real-time vital trends visualizer",
        "Empathetic conversational AI interface",
        "Adaptive dark/light theme for morning vs night check-ins",
        "Automated stress pattern alerts"
      ],
      tools: ["Figma", "Next.js", "Tailwind CSS", "LottieFiles", "ChatGPT API"],
      color: "from-emerald-500/20 to-teal-500/10",
      highlights: [
        "Architected complete design system tokens for telemetry charts",
        "Built interactive high-fidelity web prototype in Next.js",
        "Conducted user interviews with 40+ beta testers"
      ]
    },
    {
      id: "hunger-express",
      title: "Hunger Express",
      category: "Consumer Apps",
      tagline: "Frictionless hyper-local food delivery application UX.",
      role: "Product Designer",
      roleDescription: "Product Designer. Conducted 15 contextual inquiry sessions with local riders and users, redesigned progressive checkout drawers, and crafted 12 micro-animations for live order tracking.",
      period: "2023",
      duration: "4 Months",
      teamSize: "2 Designers",
      platform: "Mobile Web & Native",
      impactMetric: "22% Drop in Checkout Friction",
      metrics: [
        { label: "Drop in Checkout Friction", value: "-22%" },
        { label: "Rider Inquiry Sessions", value: "15" },
        { label: "Custom Micro-Animations", value: "12" },
        { label: "Re-order Flow Speed", value: "3-Tap" }
      ],
      coverImage: "/case-studies/hunger-express-cover.png",
      summary: "Reimagining hyper-local meal delivery with micro-interactions, single-tap order customization, and real-time courier tracking.",
      problem: "High checkout abandonment rate due to cluttered multi-step cart options and slow payment options.",
      solution: "Redesigned the order flow around a progressive checkout drawer, reducing total screens required to complete an order.",
      keyFeatures: [
        "Single-swipe checkout confirmation",
        "Real-time interactive live tracking map",
        "Personalized fast-reorder carousel",
        "Dietary & allergy smart filter badges"
      ],
      tools: ["Figma", "LottieFiles", "Adobe Creative Cloud", "Framer"],
      color: "from-amber-500/20 to-orange-500/10",
      highlights: [
        "Conducted 15 contextual inquiry sessions with local riders and users",
        "Designed accessible high-contrast UI for outdoor readability",
        "Created 12 custom micro-animations for order status transitions"
      ]
    },
    {
      id: "scalie",
      title: "Scalie (MVP)",
      category: "Design Systems",
      tagline: "Enterprise B2B SaaS scaling tool for design systems & dev handoffs.",
      role: "Design Engineer",
      roleDescription: "Design Engineer. Built automated design token sync pipeline translating Figma variables to type-safe Tailwind and CSS variables for cross-platform engineering teams.",
      period: "2023",
      duration: "5 Months",
      teamSize: "3 Engineers & Designers",
      platform: "Desktop & Web",
      impactMetric: "4x Faster Design Token Handoff",
      metrics: [
        { label: "Token Handoff Speed", value: "4x" },
        { label: "Sync Errors Across Teams", value: "0" },
        { label: "Product Teams Adopted", value: "8" },
        { label: "WCAG AAA Compliance", value: "100%" }
      ],
      coverImage: "/case-studies/scalie-cover.png",
      summary: "Automating the translation of Figma variables to production Tailwind and CSS variables for cross-platform engineering teams.",
      problem: "Designers and engineers spent dozens of hours manually syncing hex codes, typography scales, and spacing tokens.",
      solution: "Built a bridge application that parses Figma design files and automatically emits type-safe CSS and Tailwind theme configs.",
      keyFeatures: [
        "Automated token sync via Figma REST API",
        "Visual diff checker between design & production code",
        "WCAG 2.1 AAA color contrast checker",
        "Multi-theme dark/light code exporter"
      ],
      tools: ["Figma", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      color: "from-purple-500/20 to-pink-500/10",
      highlights: [
        "Built custom parser engine in TypeScript",
        "Reduced design token sync errors to zero",
        "Adopted by 8 cross-functional product teams"
      ]
    }
  ] as Project[],

  community: {
    name: "PixelPeps",
    role: "Founder & Community Lead",
    description: "A thriving design community focused on peer learning, design crits, workshops, and networking for designers & developers across India.",
    activities: [
      "Monthly in-person design meetups & crits",
      "Hands-on Figma & Framer workshops",
      "Career transition & portfolio reviews",
      "Guest speaker sessions & panel discussions"
    ],
    stats: [
      { label: "Community Members", value: "1,500+" },
      { label: "Meetups & Workshops", value: "25+" },
      { label: "Designers Mentored", value: "200+" }
    ]
  },

  talks: [
    {
      id: "talk-1",
      title: "Bridging the Gap: Product Design to Design Engineering",
      venue: "GDG New Delhi",
      location: "New Delhi",
      date: "2024",
      topic: "Design Systems & Code Integration",
      attendees: "250+ Attendees",
      badge: "Keynote Speaker"
    },
    {
      id: "talk-2",
      title: "Designing for AI: Empathy Meets Telemetry",
      venue: "IIIT Delhi",
      location: "New Delhi",
      date: "2024",
      topic: "AI User Experience & Ethical UX",
      attendees: "180+ Students & Designers",
      badge: "Invited Talk"
    },
    {
      id: "talk-3",
      title: "Crafting High-Performance UIs with Design Tokens",
      venue: "GDG Noida",
      location: "Noida",
      date: "2023",
      topic: "Design Tokens & Tailwind CSS",
      attendees: "300+ Engineers & Designers",
      badge: "Workshop Lead"
    },
    {
      id: "talk-4",
      title: "Design Thinking for Software Engineers",
      venue: "Jamia Hamdard",
      location: "New Delhi",
      date: "2023",
      topic: "Human-Centered Design Principles",
      attendees: "150+ Attendees",
      badge: "Guest Speaker"
    },
    {
      id: "talk-5",
      title: "Building Pixel-Perfect Products with Framer & Figma",
      venue: "AKG Institute",
      location: "Ghaziabad",
      date: "2023",
      topic: "Modern Design Workflows",
      attendees: "200+ Attendees",
      badge: "Workshop Host"
    }
  ] as Talk[],

  tools: [
    // 🎨 Design
    { name: "Figma", category: "Design" },
    { name: "Adobe Illustrator", category: "Design" },
    { name: "Adobe Photoshop", category: "Design" },
    { name: "LottieFiles", category: "Design" },

    // 💻 Frontend
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },

    // ⚙️ Development
    { name: "GitHub", category: "Development" },
    { name: "Antigravity", category: "Development" },
    { name: "Vercel", category: "Development" }
  ] as ToolItem[],

  music: {
    artistName: "Invin",
    spotifyArtistUrl: "https://open.spotify.com/artist/1qcYNoMSWiByxu5i5HNFVM",
    artistAvatar: "https://i.scdn.co/image/ab6761610000e5ebbcc755e1b8adc4348912b3e7",
    intro: "Beyond pixels and code, music is my creative sanctuary. Releasing music under the artist moniker Invin on Spotify.",
    genres: ["Indie", "Alternative", "Ambient"],
    instruments: ["Guitar", "Vocals", "Logic Pro", "Acoustic Production"],
    sampleTracks: [
      {
        id: "track-time",
        title: "TIME",
        genre: "Indie / Alternative",
        instrument: "Acoustic Guitar & Vocals",
        duration: "Single • 2025",
        description: "Official release by Invin on Spotify. Atmospheric indie single blending ambient acoustic guitar textures with spacious vocals.",
        coverImage: "https://i.scdn.co/image/ab67616d00001e0235e07c3314f099016deb7b7a",
        audioUrl: "https://p.scdn.co/mp3-preview/45c6fbddb3d496997e93e2c199b4df36dc2572a3",
        spotifyUrl: "https://open.spotify.com/track/7pS0XYWxK5JXORSK7TH6Fb"
      }
    ] as Track[]
  },

  socials: {
    email: "creativsingh@gmail.com",
    twitter: "https://x.com/creativsingh",
    linkedin: "https://linkedin.com/in/creativsingh",
    github: "https://github.com/creativsingh",
    figma: "https://figma.com/@creativsingh",
    pixelpeps: "https://pixelpeps.com",
    spotify: "https://open.spotify.com/artist/1qcYNoMSWiByxu5i5HNFVM"
  }
};
