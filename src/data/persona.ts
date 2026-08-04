export interface MetricItem {
  label: string;
  value: string;
}

export interface SectionItem {
  title: string;
  description?: string;
  paragraphs?: string[];
  quotes?: string[];
  image?: string;
  imageCaption?: string;
  isPlaceholderImage?: boolean;
}

export interface ToolItem {
  name: string;
  category: 'Design' | 'Frontend' | 'Development';
}

export interface HeroSlide {
  title: string;
  caption?: string;
  url?: string;
  videoUrl?: string;
  type?: "image" | "video";
  aspect?: "hero" | "wide" | "standard";
}

export interface HeroVideo {
  url: string;
  title?: string;
  caption?: string;
  poster?: string;
}

export interface Project {
  id: string;
  hidden?: boolean;
  title: string;
  category: string;
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
  tools: string[];
  coverImage?: string;
  heroSlides?: HeroSlide[];
  heroVideo?: HeroVideo | string;
  heroMediaType?: "carousel" | "video";
  sections?: SectionItem[];
}

export interface Talk {
  id: string;
  title: string;
  eventName?: string;
  venue: string;
  community?: string;
  date: string;
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
  role: "Product Designer & Design Engineer",
  subheading: "Evolving toward Design Engineering",
  location: "Delhi, India",
  website: "https://creativsingh.com",
  oneLiner: "I design & build thoughtful digital products, build design communities, and share knowledge to help people grow.",
  statusText: "Available for Design Engineer & Product Designer Roles",

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
      hidden: true,
      title: "Genesis AI",
      category: "AI & Ecommerce",
      tagline: "Platform designed to help sales and operations teams efficiently create, manage, and present product configurations for enterprise clients.",
      role: "Sr. Product Designer & Frontend Collaborator",
      roleDescription: "Product discovery with CEO & stakeholders • Creating clarity out of chaos (auditing legacy flows) • Designing a scalable system across End-User & Admin panels • Facilitating cross-functional workshops • Collaborating deeply with PM & VP of Design • Establishing feasibility with dev architects • Final handoff and implementation QA.",
      period: "2024",
      duration: "9 Months",
      teamSize: "2 Designers",
      platform: "Desktop",
      impactMetric: "Reduced Config time 45 mins to 20 mins",
      metrics: [
        { label: "Faster Quote Assembly", value: "4.8x" },
        { label: "Pricing Rule Errors", value: "0" },
        { label: "Intent Flow Adoption", value: "100%" },
        { label: "Onboarding Latency", value: "-60%" }
      ],
      coverImage: "/case-studies/genesis-ai-cover.png",
      heroMediaType: "carousel",
      heroVideo: {
        url: "https://www.youtube.com/embed/7vPgnFs6JYU?autoplay=1&mute=1&loop=1&playlist=7vPgnFs6JYU&controls=0&playsinline=1&rel=0",
        title: "Genesis AI Configurator Walkthrough",
        caption: "Interactive demonstration of AI intent flows and enterprise rule configurators."
      },
      heroSlides: [
        {
          url: "/case-studies/genesis-ai-cover.png",
          title: "Enterprise AI Configurator Workspace",
          caption: "Transforming dense enterprise CPQ tools into an intuitive, AI-assisted rule engine."
        },
        {
          url: "/case-studies/genesis-ai-legacy-audit.png",
          title: "Legacy System Forensic Miro Audit",
          caption: "Mapping hundreds of legacy parameter flows into Miro with sales, ops, and admin teams."
        },
        {
          url: "/case-studies/genesis-ai-figma-iteration.png",
          title: "Figma Component & Screen Architecture",
          caption: "High-fidelity end-user configurator screens built with type-safe design tokens."
        }
      ],
      summary: "Genesis AI transforms dense enterprise CPQ (Configure, Price, Quote) software by auditing legacy systems, shifting from manual parameter grids to intent-based user flows, and crafting interactive Figma prototypes.",
      problem: "The legacy CPQ was outdated, slow, and not aligned with the industry shift toward AI-assisted configuration. Users struggled with hidden complexity, disconnected admin logic, and workflows that demanded far more effort than necessary.",
      solution: "I redesigned the whole system by reimagining the system from the ground up — auditing every legacy flow, co-creating with stakeholders, and designing a modern, AI-assisted experience that balances automation with human control.",
      tools: ["Figma", "Miro", "Figma Make", "Salesforce"],
    },
    {
      id: "commudle",
      title: "Commudle",
      category: "Event Hosting",
      tagline: "All-in-one community management and tech event hosting platform.",
      role: "UX Designer & Frontend Collaborator",
      roleDescription: "Served as UX Designer & Frontend Collaborator. Streamlined event ticketing, 1-click QR check-in flows, speaker schedule builders, and automated certificate generation engines supporting 120K+ event attendees across tech communities in India.",
      period: "2023 - 2024",
      duration: "6 Months",
      teamSize: "Individual Contributor",
      platform: "Web & Mobile",
      impactMetric: "380,000+ Homepage Engagements",
      metrics: [
        { label: "Homepage Engagements", value: "380K+" },
        { label: "Profile Engagements", value: "220K+" },
        { label: "Active Freelancer Toggle Users", value: "10K+" },
        { label: "About Page Visits", value: "5K+" }
      ],
      coverImage: "/case-studies/commudle/hero1.avif",
      heroMediaType: "Slides",
      heroVideo: {
        url: "https://www.youtube.com/embed/7vPgnFs6JYU?autoplay=1&mute=1&loop=1&playlist=7vPgnFs6JYU&controls=0&playsinline=1&rel=0",
        title: "Commudle Hero Animation Demo",
        caption: "Animated Lottie hero showcase highlighting live events and active developer community interaction."
      },
      heroSlides: [
        {
          url: "/case-studies/commudle/commudle cover01.png",
          title: "Community-First Hero Showcase",
          caption: "Animated Lottie hero highlighting live events and 120K+ active community members."
        },

        {
          url: "/case-studies/commudle/commudle cover03.png",
          title: "Interactive World Map Storytelling",
          caption: "Connecting community photos into a human-centric story map."
        },
        {
          url: "/case-studies/commudle/commudle cover04.png",
          title: "Modular Event & Community Cards",
          caption: "Reusable card components designed for fast developer handoff."
        }
      ],
      summary: "As the sole Product Designer, I owned the experience from discovery to delivery. Redesigned Commudle's homepage, About page, and developer user profiles to drive community engagement and build trust.",
      problem: "Because users couldn't immediately understand the platform's value, many left before exploring communities or participating. The interface communicated information, but it didn't communicate excitement.",
      solution: "Redesigned Commudle into an entry point for the developer ecosystem with an animated Lottie hero, hand-drawn illustrations, community-first hierarchy, world map story cards, and interactive developer profile badges.",
      tools: ["Figma", "Lottiefiles", "After Effects", "Notion"]
    },
    {
      id: "prana-ai",
      title: "Prana AI",
      category: "AI & Healthcare",
      tagline: "Designing an AI-powered wellness platform that transforms complex health data into personalized actions.",
      role: "Lead Product Designer",
      roleDescription: "As the sole Product Designer, I owned the complete product experience—from early discovery workshops and research through UX strategy, UI design, interactive prototyping, and developer handoff.",
      period: "2024",
      duration: "12 Months",
      teamSize: "1 Designer · 3 Devs · Founder",
      platform: "iOS & Android",
      impactMetric: "5k+ downloads on Playstore",
      metrics: [
        { label: "Downloads on Playstore", value: "5k+" },
        { label: "Beta User Motivation", value: "92%" },
        { label: "Production Screens", value: "100+" },
        { label: "Conversion Rate", value: "10%" }
      ],
      coverImage: "/case-studies/Prana AI/prana cover01.avif",
      heroSlides: [
        {
          url: "/case-studies/Prana AI/prana cover01.avif",
          title: "Mobile App Ecosystem — Facial Scan & Health Score",
          caption: "Transforming complex telemetry data into single-action daily wellness guidance."
        },
        {
          url: "/case-studies/Prana AI/prana cover02.avif",
          title: "AI Health Plan & Daily Action Engine",
          caption: "Personalized daily action cards based on biometric trends and AI analysis."
        },

      ],
      summary: "Prana AI is an AI-powered wellness platform that combines facial health scanning, personalized wellness scoring, AI-generated health plans, expert consultations, and habit tracking into one cohesive experience.",
      problem: "Most wellness applications collect enormous amounts of information (heart rate, sleep, nutrition, exercise, stress, blood pressure) but leave users asking 'What should I actually do next?'",
      solution: "Designed an end-to-end mobile experience that transforms raw health information into clear, personalized guidance with facial scanning, AI wellness scoring, and 2-step expert consultations.",
      tools: ["Figma", "Adobe Illustrator"],

    },
    {
      id: "hunger-express",
      title: "Hunger Express",
      category: "Food Delivery",
      tagline: "Designing a Multi-Sided Food Delivery Ecosystem for the Nigerian Market",
      role: "UX Designer",
      roleDescription: "As the sole UX Designer, I owned the product experience across Customer, Delivery Partner, and Vendor mobile applications within a 3-month timeline.",
      period: "2024",
      duration: "3 Months",
      teamSize: "1 Designer",
      platform: "Mobile (Customer, Delivery Partner & Vendor)",
      impactMetric: "3 Apps Designed in 3 Months",
      metrics: [
        { label: "Interconnected Apps", value: "3 Apps" },
        { label: "Design Timeline", value: "3 Months" },
        { label: "Target Market", value: "Nigeria" },
        { label: "Streamlined Checkout", value: "1 Screen" }
      ],
      coverImage: "/case-studies/hunger-express-cover.png",
      heroMediaType: "video",
      heroVideo: {
        url: "https://youtu.be/_DstHo6abeI",


      },
      heroSlides: [
        {
          url: "/case-studies/hunger-express-cover.png",
          title: "Multi-Sided Ecosystem — Customer, Rider & Vendor",
          caption: "Three interconnected mobile apps designed for the Nigerian food delivery market."
        },
        {
          title: "Single-Screen Streamlined Checkout Flow",
          caption: "Minimizing cart abandonment by consolidating payment, delivery method, and address selection."
        },
        {
          title: "Live Order Status & Stage Tracking",
          caption: "Building user trust post-payment through real-time courier and kitchen updates."
        }
      ],
      summary: "Hunger Express is a food delivery platform built for the Nigerian market that connects customers, restaurant owners, and delivery partners within a single ecosystem.",
      problem: "Designing a multi-sided food delivery ecosystem (Customer, Rider, Vendor) under a tight 3-month timeline while adapting familiar global interaction patterns for the Nigerian market.",
      solution: "Designed three interconnected applications with a single-screen checkout, progressive order tracking, rider speed clarity, and vendor operational efficiency.",
      tools: ["Figma"],

    },
    {
      id: "scalie",
      title: "Scalie",
      category: "HR Tech & Enterprise",
      tagline: "Designing an Enterprise Resource Management Platform to Replace Spreadsheet-Driven Operations",
      role: "Lead Product Designer",
      roleDescription: "As the Lead Product Designer, I owned the MVP experience from product discovery, stakeholder research, and information architecture through UI design, interactive prototyping, usability testing, and developer handoff.",
      period: "2023",
      duration: "6 Months",
      teamSize: "PM, Developers, Stakeholders, 1 Designer",
      platform: "Responsive Web Application",
      impactMetric: "40% Cut in Allocation Time",
      metrics: [
        { label: "Resource Allocation Time", value: "-40%" },
        { label: "Administrative Workload", value: "-25%" },
        { label: "Data Accuracy", value: "+20%" },
        { label: "Communication Delays", value: "-30%" }
      ],
      coverImage: "/case-studies/scalie-cover.png",
      heroMediaType: "slides",
      heroSlides: [
        {
          url: "/case-studies/scalie/cover1.webp",
          title: "Enterprise Resource Management Workspace",
          caption: "Centralizing bench resource tracking, vendor submissions, and client requirements into one workspace."
        },
        {
          url: "/case-studies/scalie/cover2.avif",
          title: "Enterprise Resource Management Workspace",
          caption: "Centralizing bench resource tracking, vendor submissions, and client requirements into one workspace."
        }


      ],
      summary: "Scalie centralizes fragmented hiring, bench resource allocation, vendor submissions, interview scheduling, and contract management into one enterprise operational workspace.",
      problem: "Staffing organizations rely on fragmented Excel spreadsheets, email threads, and phone calls, leaving recruiters struggling to find candidates and managers lacking visibility into available resources.",
      solution: "Designed a centralized enterprise resource management platform linking Vendors, Admins, and Clients with automated resume building, single-screen requirement submission, and contract management.",
      tools: ["Figma", "Adobe Illustrator"],
      sections: [
        {
          title: "Automating Design Token Handoffs 🎨 ⚡ 💻",
          description: "Bridging the gap between Figma variables and production Tailwind CSS configs.",
          paragraphs: [
            "1. The Sync Pain Point:\n• Teams lost hours manually copying color hexes, shadow tokens, and spacing variables across repositories.\n• Drift between design and production caused unexpected UI bugs.",
            "2. The TypeScript Pipeline Solution:\n• Built a REST API bridge that pulls Figma token updates and compiles type-safe Tailwind themes automatically.\n• Adopted across 8 engineering teams with zero token sync errors."
          ]
        }
      ]
    }
  ] as Project[],

  community: {
    name: "PixelPeps",
    role: "Founder & Community Lead",
    description: "A thriving design community focused on peer learning, design crits, workshops, and networking for designers & developers across India.",
    activities: [
      "Networking Meetups",
      "Expert Talks",
      "Collaboration Events",
      "Hands-on Workshops",
    ],
    stats: [
      { label: "Community Members", value: "8000+" },
      { label: "Meetups & Workshops", value: "10+" },
      { label: "Designers Mentored", value: "200+" }
    ]
  },

  talks: [
    {
      id: "talk-1",
      title: "Battle of Design: Users vs Stakeholders",
      eventName: "Devfest New Delhi 2025",
      venue: "Welcom hotel, Delhi",
      community: "GDG New Delhi",
      date: "2025",
      attendees: "200+ Attendees",
      badge: "Speaker"
    },
    {
      id: "talk-2",
      title: "Less wires, More Logic",
      eventName: "Design Fusion",
      venue: "Jamia Humdard, Delhi",
      community: "GDG New Delhi",
      date: "2025",
      attendees: "150+ Attendees",
      badge: "Speaker"
    },
    {
      id: "talk-3",
      title: "Advanced Prototyping in Figma",
      eventName: "Design Fusion 2k25",
      venue: "GNIOT, Greater Noida",
      community: "CodewithTechno x GDG GNIOT",
      date: "2025",
      attendees: "250+ Attendees",
      badge: "Speaker"
    },
    {
      id: "talk-4",
      title: "AI as your design assistant",
      eventName: "GDG New Delhi Devfest 2024",
      venue: "Vivanta by Taj, Delhi",
      community: "GDG New Delhi",
      date: "2024",
      attendees: "500+ Attendees",
      badge: "Speaker"
    },
    {
      id: "talk-5",
      title: "What we are doing at Pixelpeps",
      eventName: "Design Samwaad 2.0",
      venue: "IIIT, Delhi",
      community: "GDG Noida x PixelPeps",
      date: "2024",
      attendees: "100+ Attendees",
      badge: "Event Host"
    },
    {
      id: "talk-6",
      title: "From Zero to UX Hero",
      eventName: "Pixelpeps Online Event",
      venue: "Google Meet",
      community: "PixelPeps",
      date: "2024",
      attendees: "50+ Attendees",
      badge: "Event Host"
    },
    {
      id: "talk-7",
      title: "Into the World of Freelance Designing",
      eventName: "Pixelpeps Online Event",
      venue: "Google Meet",
      community: "PixelPeps",
      date: "2024",
      attendees: "50+ Attendees",
      badge: "Event Host"
    },
    {
      id: "talk-8",
      title: "Get ready for your first job as a UX Designer",
      eventName: "Delhi wala Wow",
      venue: "IIIT, Delhi",
      community: "WOW Delhi NCR",
      date: "2024",
      attendees: "250+ Attendees",
      badge: "Speaker"
    },
    {
      id: "talk-9",
      title: "Pixelpeps Community Announcement",
      eventName: "Impact the Future",
      venue: "Google, Gurugram",
      community: "Lottiefiles",
      date: "2024",
      attendees: "250+ Attendees",
      badge: "Guest"
    },
    {
      id: "talk-10",
      title: "Optimize usability by minimizing design deficiencies",
      eventName: "SyncDesign",
      venue: "Microsoft, Noida",
      community: "Lottiefiles",
      date: "2024",
      attendees: "250+ Attendees",
      badge: "Speaker"
    },
    {
      id: "talk-11",
      title: "Beyond the Pixels: UI vs UX",
      eventName: "Digital Fusion",
      venue: "Thoughtworks, Gurugram",
      community: "GDG New Delhi",
      date: "2024",
      attendees: "180+ Attendees",
      badge: "Speaker"
    },
    {
      id: "talk-12",
      title: "Open Discussion on Design",
      eventName: "GDG Noida Devfest 2023",
      venue: "Holiday Inn, Noida",
      community: "GDG Noida",
      date: "2023",
      attendees: "300+ Attendees",
      badge: "Speaker"
    },
    {
      id: "talk-13",
      title: "Power of UX design in creating impactful user experiences",
      eventName: "Week of Learning",
      venue: "AKG Engineering College, Ghaziabad",
      community: "GDG AKGEC",
      date: "2023",
      attendees: "100+ Attendees",
      badge: "Speaker"
    },
    {
      id: "talk-14",
      title: "Optimize Usability by minimizing design deficiencies",
      eventName: "GDG NewDelhi Devfest 2022",
      venue: "Radisson Blu Plaza, Delhi",
      community: "GDG New Delhi",
      date: "2023",
      attendees: "200+ Attendees",
      badge: "Speaker"
    },
    {
      id: "talk-15",
      title: "Designing better User Experiences",
      eventName: "Cloud Study Jam 1.0",
      venue: "Jamia Hamdard University, Delhi",
      community: "GDG New Delhi",
      date: "2023",
      attendees: "150+ Attendees",
      badge: "Speaker"
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
    dribbble: "https://dribbble.com/creativsingh",
    figma: "https://figma.com/@creativsingh",
    medium: "https://medium.com/@creativsingh",
    commudle: "https://commudle.com/users/creativsingh",
    pixelpeps: "https://pixelpeps.com",
    spotify: "https://open.spotify.com/artist/1qcYNoMSWiByxu5i5HNFVM"
  }
};
