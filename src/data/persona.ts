export interface Project {
  id: string;
  title: string;
  category: 'AI & Healthcare' | 'SaaS & Community' | 'Consumer Apps' | 'Design Systems';
  tagline: string;
  role: string;
  period: string;
  impactMetric: string;
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  tools: string[];
  color: string;
  link?: string;
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
  audioPlaceholderUrl?: string;
}

export const PERSONA_DATA = {
  name: "Ajeet Singh",
  brand: "CreativSingh",
  role: "Product Designer & Community Builder",
  subheading: "Evolving toward Design Engineering",
  location: "Delhi, India",
  website: "https://creativsingh.com",
  oneLiner: "I design thoughtful digital products, build design communities, and share knowledge to help people grow.",
  brandPromise: "Designs products that balance user empathy, business goals, and technical feasibility.",
  statusText: "Available for Design Engineering & Product Strategy",
  
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
      id: "prana-ai",
      title: "Prana AI",
      category: "AI & Healthcare",
      tagline: "Empathetic health & wellness companion UI with predictive telemetry analytics.",
      role: "Lead Product Designer & Prototyper",
      period: "2024",
      impactMetric: "38% Increase in Daily Log Engagement",
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
        "Conduct user interviews with 40+ beta testers"
      ]
    },
    {
      id: "commudle",
      title: "Commudle",
      category: "SaaS & Community",
      tagline: "All-in-one community management and tech event hosting platform.",
      role: "UX Designer & Frontend Collaborator",
      period: "2023 - 2024",
      impactMetric: "120K+ Event Attendees Supported",
      summary: "Streamlined event discovery, ticketing, sponsor matching, and attendee networking for developer & design communities.",
      problem: "Community leads relied on 4 distinct tools for registration, communication, feedback, and certificate generation.",
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
        "Redesigned the event check-in experience cutting entry queues by 60%",
        "Created scalable UI components adopted across 15+ sub-modules",
        "Partnered directly with community leads from GDG & PixelPeps"
      ]
    },
    {
      id: "hunger-express",
      title: "Hunger Express",
      tagline: "Frictionless hyper-local food delivery application UX.",
      category: "Consumer Apps",
      role: "Product Designer",
      period: "2023",
      impactMetric: "22% Drop in Checkout Friction",
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
      title: "Scalie",
      tagline: "Enterprise B2B SaaS scaling tool for design systems & dev handoffs.",
      category: "Design Systems",
      role: "Design Engineer",
      period: "2023",
      impactMetric: "4x Faster Design Token Handoff",
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
    { name: "Figma", category: "Design & Prototyping", experience: "Mastery", icon: "Figma" },
    { name: "Framer", category: "Design & Prototyping", experience: "Advanced", icon: "Layout" },
    { name: "Next.js & React", category: "Frontend Engineering", experience: "Advanced", icon: "Code" },
    { name: "Tailwind CSS", category: "Frontend Engineering", experience: "Mastery", icon: "Palette" },
    { name: "TypeScript / JS", category: "Frontend Engineering", experience: "Proficient", icon: "Terminal" },
    { name: "ChatGPT & AI Tools", category: "AI Workflows", experience: "Advanced", icon: "Sparkles" },
    { name: "Notion", category: "Documentation & Systems", experience: "Mastery", icon: "FileText" },
    { name: "Adobe Creative Cloud", category: "Visual & Motion", experience: "Proficient", icon: "Image" },
    { name: "LottieFiles", category: "Micro-Animations", experience: "Proficient", icon: "Film" }
  ],

  music: {
    intro: "Beyond pixels and code, music is my creative sanctuary. As a singer, guitarist, and music producer, I explore rhythm, acoustic melodies, and sound design.",
    genres: ["Acoustic", "Indie Pop", "Lo-Fi", "Ambient"],
    instruments: ["Guitar", "Vocals", "Logic Pro", "Acoustic Production"],
    sampleTracks: [
      {
        id: "track-1",
        title: "Acoustic Reverie",
        genre: "Acoustic Fingerstyle",
        instrument: "Guitar & Ambient Pad",
        duration: "2:45",
        description: "A calm acoustic melody composed during late-night coding sessions."
      },
      {
        id: "track-2",
        title: "Delhi Dusk (Lo-Fi)",
        genre: "Chill Lo-Fi Beat",
        instrument: "Guitar / Synth Beats",
        duration: "3:12",
        description: "Mellow guitar chords over a relaxing lo-fi rhythm."
      },
      {
        id: "track-3",
        title: "Echoes in Code",
        genre: "Indie Ambient",
        instrument: "Vocals & Acoustic",
        duration: "2:50",
        description: "Vocal harmonics layered over organic acoustic guitar work."
      }
    ] as Track[]
  },

  socials: {
    email: "creativsingh@gmail.com",
    twitter: "https://x.com/creativsingh",
    linkedin: "https://linkedin.com/in/creativsingh",
    github: "https://github.com/creativsingh",
    figma: "https://figma.com/@creativsingh",
    pixelpeps: "https://pixelpeps.com"
  }
};
