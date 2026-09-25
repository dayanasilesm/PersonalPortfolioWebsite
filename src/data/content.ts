export type ProjectCategory = "Angular" | "React" | "UI/UX Design";

export interface SkillCategory {
  id: string;
  displayNumber: string;
  title: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  year: string;
  metric: string;
  title: string;
  description: string;
  tags: string[];
}

export interface TimelineItem {
  id: string;
  period: string;
  type: "work" | "education";
  current: boolean;
  role: string;
  company: string;
  description: string;
}

/**
 * Centralized copy for the portfolio.
 * Add new skills, projects, or timeline entries to their corresponding arrays.
 */
export const portfolioContent = {
  navigation: {
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    designSystem: "Design System",
    contact: "Contact",
  },
  brand: {
    initials: "DS",
    name: "Dayana Siles",
  },
  hero: {
    firstName: "Dayana",
    lastName: "Siles",
    availability: "Available · Remote / Full-time",
    role: "Senior Frontend & UI Engineer · Angular & React Specialist",
    introduction: "6+ years building enterprise web applications, architecting design systems, and bridging the gap between",
    softwareEngineering: "Software Engineering",
    and: "and",
    userExperienceDesign: "UI/UX Design",
    pills: ["+6 Yrs Exp", "Angular v20 & React", "Design Systems", "M.Sc. AI Product Dev"],
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    scroll: "scroll",
  },
  sections: {
    skills: {
      label: "Technical Skills",
      title: "What I Build With",
      description: "A decade of frontend craft distilled into the tools and practices that shape my work.",
    },
    projects: {
      label: "Featured Projects",
      title: "Case Studies",
      description: "Enterprise applications, design systems, and user-centric experiences built at scale.",
      filterLabel: "Filter projects",
      filterOptions: ["All", "Angular", "React", "UI/UX Design"] as const,
      emptyResults: "No projects found for this filter.",
      caseStudy: "Case Study",
      liveDemo: "Live Demo ↗",
      github: "GitHub ↗",
    },
    experience: {
      label: "Experience & Education",
      title: "The Journey",
      description: "From junior engineer to technical lead — a career defined by continuous learning.",
      currentLabel: "Now",
    },
    designSystem: {
      label: "UI/UX Process & Design System",
      title: "From Figma to Production",
      description: "Systematic component architecture and rigorous accessibility standards bridging design and engineering.",
      uxProcess: "UX Process",
      designTokens: "Design Tokens",
      componentLibrary: "Component Library",
      componentLibraryStack: "Angular · React · Storybook",
      accessibilityNotice: "WCAG AA Compliant",
      accessibilityDescription: "All components maintain 4.5:1 contrast ratio for normal text. Focus states use visible ring indicators. Interactive elements meet 44×44px minimum touch targets.",
      searchPlaceholder: "Search…",
      activeStatus: "Active",
      sampleButtons: ["Primary", "Outline", "Ghost"],
      sampleStatuses: ["Success", "Warning"],
    },
    contact: {
      label: "Get In Touch",
      title: "Let's Build Something",
      description: "Open to senior frontend roles, design system projects, and consulting. Based in Cochabamba, Bolivia — remote or full-time.",
      formLabel: "Contact form",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project or opportunity…",
      sendMessage: "Send Message",
      messageSent: "Message sent!",
      responsePromise: "I'll get back to you within 24 hours.",
      sendAnother: "Send another",
      directContact: "Direct Contact",
      preferredMethod: "Preferred method",
      location: "Location",
      locationValue: "Cochabamba, Bolivia",
      remoteAvailability: "Remote / Full-time available",
      responseTime: "Response time",
      typicalReplyTime: "Typical reply time",
      responseTimeValue: "< 24 hours",
      online: "Online",
      currentlyAvailable: "Currently Available",
      availabilityDescription: "Open to senior frontend roles, design system consulting, and long-term remote engagements.",
    },
  },
  skills: [
    {
      id: "frontend-architecture",
      displayNumber: "01",
      title: "Frontend Architecture",
      items: ["Angular v20", "React 19", "TypeScript", "RxJS", "NgRx", "Signals API", "Micro-frontends"],
    },
    {
      id: "ui-ux-design-systems",
      displayNumber: "02",
      title: "UI/UX & Design Systems",
      items: ["Figma", "High-Fidelity Proto", "Tailwind CSS", "SCSS / BEM", "WCAG Accessibility", "Design Tokens"],
    },
    {
      id: "testing-ci-cd",
      displayNumber: "03",
      title: "Testing & CI/CD",
      items: ["Jest", "Testing Library", "Docker", "Jenkins", "GitHub Actions", "E2E Testing"],
    },
    {
      id: "ai-engineering",
      displayNumber: "04",
      title: "AI Tools & Engineering",
      items: ["Claude Code", "AI-Driven Workflows", "Prompt Engineering", "LLM Integration"],
    },
  ] satisfies SkillCategory[],
  projects: [
    {
      id: "zack-report-generator",
      category: "Angular",
      year: "2024",
      metric: "+20% Perf",
      title: "Zack Report Generator",
      description: "Enterprise report platform integrated with Microsoft Teams. Rebuilt with Angular v20 Standalone, Signals, and deferred loading — delivering a 20% performance boost.",
      tags: ["Angular v20", "Signals", "Standalone", "MS Teams", "TypeScript"],
    },
    {
      id: "vipre-design-system",
      category: "Angular",
      year: "2023",
      metric: "5 Teams",
      title: "Vipre Antivirus & Design System",
      description: "Architected a micro-frontend ecosystem for Vipre. Built a full UI component library with KQL parser, NgRx, and SCSS BEM architecture shared across 5 product teams.",
      tags: ["Micro-frontends", "NgRx", "SCSS BEM", "KQL Parser", "Component Lib"],
    },
    {
      id: "traveler-pwa",
      category: "Angular",
      year: "2022",
      metric: "Offline-first",
      title: "Traveler PWA",
      description: "Offline-first progressive web app for travel planning with Leaflet.js maps, IndexedDB caching, and service workers. Works in low-connectivity environments.",
      tags: ["Angular", "PWA", "Leaflet.js", "IndexedDB", "Service Workers"],
    },
  ] satisfies ProjectItem[],
  timeline: [
    {
      id: "jalasoft-technical-lead",
      period: "2023 — Present",
      type: "work",
      current: true,
      role: "Technical Lead & Frontend Engineer",
      company: "Jalasoft",
      description: "Leading a team of 6 engineers, architecting Angular v20 micro-frontend solutions, establishing code standards, and driving adoption of Signals across the org.",
    },
    {
      id: "uwe-masters-ai",
      period: "2024 — 2025",
      type: "education",
      current: false,
      role: "M.Sc. in AI Software Product Development",
      company: "University of the West of England",
      description: "Masters degree focused on AI-driven product development, ML integration in web applications, and modern software engineering practices.",
    },
    {
      id: "jalasoft-senior-developer",
      period: "2021 — 2023",
      type: "work",
      current: false,
      role: "Senior Frontend Developer",
      company: "Jalasoft",
      description: "Developed enterprise Angular apps for international clients, built the Vipre Design System, introduced NgRx for scalable state management.",
    },
    {
      id: "google-ux-certificate",
      period: "2022",
      type: "education",
      current: false,
      role: "Google UX Design Certificate",
      company: "Google / Coursera",
      description: "Professional UX certification covering user research, wireframing, prototyping, and usability testing.",
    },
    {
      id: "jalasoft-frontend-developer",
      period: "2019 — 2021",
      type: "work",
      current: false,
      role: "Frontend Developer",
      company: "Jalasoft",
      description: "Built responsive Angular apps and contributed to the migration from AngularJS to modern Angular.",
    },
  ] satisfies TimelineItem[],
  designSystem: {
    processSteps: [
      { number: "01", title: "Discovery & Research", description: "User interviews, competitive analysis, heuristic evaluation" },
      { number: "02", title: "Information Architecture", description: "User flows, sitemaps, card sorting sessions" },
      { number: "03", title: "Lo-Fi Wireframing", description: "Rapid sketches, low-fidelity Figma wireframes" },
      { number: "04", title: "High-Fidelity Prototype", description: "Pixel-perfect Figma prototypes with component library" },
      { number: "05", title: "Accessibility Audit", description: "WCAG AA compliance, contrast ratios, screen readers" },
      { number: "06", title: "Dev Handoff", description: "Design tokens, Storybook docs, engineering collaboration" },
    ],
    tokens: [
      { label: "Dusty Rose", hex: "#C4768A", token: "--rose" },
      { label: "Blush", hex: "#E0A0B2", token: "--blush" },
      { label: "Cream", hex: "#be6f84ff", token: "--cream" },
      { label: "Plum", hex: "#7A3D52", token: "--plum" },
      { label: "Surface", hex: "#1A1117", token: "--card" },
      { label: "Border", hex: "#2A1820", token: "--border" },
    ],
    capabilityCards: [
      { title: "Accessibility", description: "WCAG AA/AAA" },
      { title: "Design Tokens", description: "Figma Variables" },
      { title: "Prototyping", description: "Hi-Fi in Figma" },
      { title: "System Thinking", description: "Component APIs" },
    ],
  },
  contactDetails: [
    { label: "Email", value: "dayana.siles@email.com", description: "Preferred method" },
    { label: "Location", value: "Cochabamba, Bolivia", description: "Remote / Full-time available" },
    { label: "Response time", value: "< 24 hours", description: "Typical reply time" },
  ],
  socialLinks: [
    { label: "LinkedIn", handle: "/in/dayana-siles" },
    { label: "GitHub", handle: "github.com/dayanasiles" },
    { label: "Figma Community", handle: "@dayana.siles" },
  ],
  footer: {
    copyright: "© 2026 Dayana Siles · Senior Frontend & UI Engineer · Cochabamba, Bolivia",
    technologies: ["Angular", "React", "Figma"],
  },
} as const;
