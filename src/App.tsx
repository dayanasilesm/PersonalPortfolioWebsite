import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight,
  Mail,
  ExternalLink,
  Briefcase,
  GraduationCap,
  ShieldCheck,
  Download,
} from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import myPhoto from "./assets/images/my-photo.jpg";

const ROSE = "#C4768A";
const BLUSH = "#E0A0B2";
const CREAM = "#be6f84ff";
const PLUM = "#7A3D52";

type Filter = "All" | "Angular" | "React" | "UI/UX Design";

interface SkillCategory {
  n: string;
  title: string;
  items: string[];
}

interface ProjectItem {
  id: number;
  cat: string;
  year: string;
  metric: string;
  title: string;
  desc: string;
  tags: string[];
}

interface TimelineItem {
  period: string;
  type: "work" | "edu";
  current: boolean;
  role: string;
  company: string;
  desc: string;
}

const NAV = ["Projects", "Experience", "Skills", "Design System", "Contact"];

const SKILLS: SkillCategory[] = [
  {
    n: "01",
    title: "Frontend Architecture",
    items: [
      "Angular v20",
      "React 19",
      "TypeScript",
      "RxJS",
      "NgRx",
      "Signals API",
      "Micro-frontends",
    ],
  },
  {
    n: "02",
    title: "UI/UX & Design Systems",
    items: [
      "Figma",
      "High-Fidelity Proto",
      "Tailwind CSS",
      "SCSS / BEM",
      "WCAG Accessibility",
      "Design Tokens",
    ],
  },
  {
    n: "03",
    title: "Testing & CI/CD",
    items: [
      "Jest",
      "Testing Library",
      "Docker",
      "Jenkins",
      "GitHub Actions",
      "E2E Testing",
    ],
  },
  {
    n: "04",
    title: "AI Tools & Engineering",
    items: [
      "Claude Code",
      "AI-Driven Workflows",
      "Prompt Engineering",
      "LLM Integration",
    ],
  },
];

const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    cat: "Angular",
    year: "2024",
    metric: "+20% Perf",
    title: "Zack Report Generator",
    desc: "Enterprise report platform integrated with Microsoft Teams. Rebuilt with Angular v20 Standalone, Signals, and deferred loading — delivering a 20% performance boost.",
    tags: ["Angular v20", "Signals", "Standalone", "MS Teams", "TypeScript"],
  },
  {
    id: 2,
    cat: "Angular",
    year: "2023",
    metric: "5 Teams",
    title: "Vipre Antivirus & Design System",
    desc: "Architected a micro-frontend ecosystem for Vipre. Built a full UI component library with KQL parser, NgRx, and SCSS BEM architecture shared across 5 product teams.",
    tags: [
      "Micro-frontends",
      "NgRx",
      "SCSS BEM",
      "KQL Parser",
      "Component Lib",
    ],
  },
  {
    id: 3,
    cat: "Angular",
    year: "2022",
    metric: "Offline-first",
    title: "Traveler PWA",
    desc: "Offline-first progressive web app for travel planning with Leaflet.js maps, IndexedDB caching, and service workers. Works in low-connectivity environments.",
    tags: ["Angular", "PWA", "Leaflet.js", "IndexedDB", "Service Workers"],
  },
];

const TIMELINE: TimelineItem[] = [
  {
    period: "2023 — Present",
    type: "work",
    current: true,
    role: "Technical Lead & Frontend Engineer",
    company: "Jalasoft",
    desc: "Leading a team of 6 engineers, architecting Angular v20 micro-frontend solutions, establishing code standards, and driving adoption of Signals across the org.",
  },
  {
    period: "2024 — 2025",
    type: "edu",
    current: false,
    role: "M.Sc. in AI Software Product Development",
    company: "University of the West of England",
    desc: "Masters degree focused on AI-driven product development, ML integration in web applications, and modern software engineering practices.",
  },
  {
    period: "2021 — 2023",
    type: "work",
    current: false,
    role: "Senior Frontend Developer",
    company: "Jalasoft",
    desc: "Developed enterprise Angular apps for international clients, built the Vipre Design System, introduced NgRx for scalable state management.",
  },
  {
    period: "2022",
    type: "edu",
    current: false,
    role: "Google UX Design Certificate",
    company: "Google / Coursera",
    desc: "Professional UX certification covering user research, wireframing, prototyping, and usability testing.",
  },
  {
    period: "2019 — 2021",
    type: "work",
    current: false,
    role: "Frontend Developer",
    company: "Jalasoft",
    desc: "Built responsive Angular apps and contributed to the migration from AngularJS to modern Angular.",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  });
}

function goto(id: string) {
  const el = document.getElementById(id.toLowerCase().replace(/ /g, "-"));
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 58;
  window.scrollTo({ top, behavior: "smooth" });
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

function H2({
  children,
  light,
}: {
  children: React.ReactNode;
  light: boolean;
}) {
  return (
    <h2
      className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 ${light ? "text-[#1A0F14]" : "text-[#F2EBED]"}`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {children}
    </h2>
  );
}

function Sub({
  children,
  light,
}: {
  children: React.ReactNode;
  light: boolean;
}) {
  return (
    <p
      className={`max-w-2xl text-[15px] leading-relaxed ${light ? "text-[#6B505A]" : "text-[#9A8088]"}`}
    >
      {children}
    </p>
  );
}

function t1(light: boolean) {
  return light ? "text-[#1A0F14]" : "text-[#F2EBED]";
}

function t2(light: boolean) {
  return light ? "text-[#6B505A]" : "text-[#9A8088]";
}

function Navbar({ light, onToggle }: { light: boolean; onToggle: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bg = scrolled
    ? light
      ? "bg-[#FBF6F8]/92 border-b border-black/[0.06] shadow-sm"
      : "bg-[#100B0E]/92 border-b border-[rgba(196,118,138,0.10)]"
    : "bg-transparent";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-all duration-300 ${bg}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[58px] flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-bold text-sm tracking-tight hover:opacity-70 transition-opacity ${t1(light)}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="g-text text-base font-extrabold">DS</span>
          <span className={`ml-2 ${t2(light)} hidden sm:inline font-normal`}>
            · Dayana Siles
          </span>
        </button>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => goto(item)}
              className={`px-4 py-2 rounded-md text-[13px] font-medium transition-colors duration-150 ${t2(light)} hover:${t1(light)}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className={`w-8 h-8 rounded-md flex items-center justify-center transition-all ${
              light
                ? "bg-black/[0.05] hover:bg-black/[0.09] text-[#6B505A]"
                : "bg-white/[0.05] hover:bg-white/[0.09] text-[#9A8088]"
            }`}
          >
            {light ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            className="btn btn-primary hidden sm:inline-flex"
            style={{ padding: "8px 16px" }}
          >
            <Download size={14} />
            Download CV
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            className={`md:hidden w-8 h-8 rounded-md flex items-center justify-center ${t2(light)} ${
              light ? "bg-black/[0.05]" : "bg-white/[0.05]"
            }`}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className={`md:hidden border-t px-6 py-4 flex flex-col gap-1 ${
            light
              ? "bg-[#FBF6F8] border-black/[0.06]"
              : "bg-[#100B0E] border-[rgba(196,118,138,0.10)]"
          }`}
        >
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => {
                goto(item);
                setOpen(false);
              }}
              className={`text-left px-3 py-2.5 rounded-md text-[13px] font-medium ${t2(light)}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero({ light }: { light: boolean }) {
  const pills = [
    "+6 Yrs Exp",
    "Angular v20 & React",
    "Design Systems",
    "M.Sc. AI Product Dev",
  ];
  const pillCls = light
    ? "bg-black/[0.04] border border-black/[0.08] text-[#4A3040]"
    : "bg-[rgba(196,118,138,0.06)] border border-[rgba(196,118,138,0.16)] text-[#9A8088]";

  return (
    <section className="relative min-h-screen flex items-center pt-16 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[110px]"
          style={{
            background: "radial-gradient(circle, #C4768A, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[90px]"
          style={{
            background: "radial-gradient(circle, #7A3D52, transparent 65%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, ${light ? "#1A0F14" : "#F2EBED"} 1px, transparent 1px)`,
            backgroundSize: "34px 34px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex flex-col items-center gap-4 au shrink-0">
            <div
              className="photo-frame w-[220px] h-[270px] sm:w-[250px] sm:h-[310px] flex flex-col items-center justify-center gap-3"
              style={{ background: light ? "#F0E8EC" : "#150E11" }}
            >
              <img
                src={myPhoto}
                alt="Dayana Siles"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex gap-2">
              {[
                { label: "LinkedIn", Icon: FaLinkedinIn },
                { label: "GitHub", Icon: FaGithub },
                { label: "Figma", Icon: SiFigma },
              ].map(({ label, Icon }) => (
                <button
                  key={label}
                  title={label}
                  className="btn btn-outline flex items-center gap-1.5"
                  style={{ padding: "6px 12px", fontSize: "11px" }}
                >
                  <Icon size={13} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-[11px] font-medium mb-7 au"
              style={{
                borderColor: "rgba(196,118,138,0.25)",
                background: "rgba(196,118,138,0.06)",
                color: BLUSH,
                fontFamily: "var(--font-mono)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: ROSE }}
              />
              Available · Remote / Full-time
            </div>

            <h1
              className={`text-[clamp(3rem,8vw,5.5rem)] font-extrabold tracking-tight leading-[1.03] mb-4 au-1 ${t1(light)}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dayana
              <br />
              <span className="g-text">Siles</span>
            </h1>

            <p
              className={`text-[17px] font-semibold mb-4 au-1 ${t2(light)}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              Senior Frontend & UI Engineer · Angular & React Specialist
            </p>

            <p
              className={`max-w-[500px] mx-auto lg:mx-0 text-[15px] leading-relaxed mb-7 au-2 ${t2(light)}`}
            >
              6+ years building enterprise web applications, architecting design
              systems, and bridging the gap between{" "}
              <span style={{ color: BLUSH }} className="font-medium">
                Software Engineering
              </span>{" "}
              and{" "}
              <span style={{ color: CREAM }} className="font-medium">
                UI/UX Design
              </span>
              .
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 au-2">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className={`px-3 py-1 rounded-md text-[12px] font-medium ${pillCls}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 au-3">
              <button
                className="btn btn-primary"
                onClick={() => goto("Projects")}
              >
                View Projects
                <ArrowRight size={14} />
              </button>
              <button className="btn btn-ghost" onClick={() => goto("Contact")}>
                <Mail size={14} />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <span
          className="text-[9px] tracking-[0.22em] uppercase"
          style={{ color: ROSE, fontFamily: "var(--font-mono)" }}
        >
          scroll
        </span>
        <div
          className="w-px h-6"
          style={{
            background: `linear-gradient(to bottom, ${ROSE}, transparent)`,
          }}
        />
      </div>
    </section>
  );
}

function Skills({ light }: { light: boolean }) {
  return (
    <section id="skills" className="py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <Label>Technical Skills</Label>
          <H2 light={light}>What I Build With</H2>
          <Sub light={light}>
            A decade of frontend craft distilled into the tools and practices
            that shape my work.
          </Sub>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.n}
              className={`card p-6 cursor-default scroll-reveal-scale delay-${index + 1}`}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  style={{
                    color: ROSE,
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    fontWeight: 700,
                  }}
                >
                  {skill.n}
                </span>
                <div
                  className="w-6 h-px"
                  style={{
                    background: `linear-gradient(90deg, ${ROSE}60, transparent)`,
                  }}
                />
              </div>
              <h3
                className={`font-bold text-[14px] mb-4 ${t1(light)}`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skill.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ light }: { light: boolean }) {
  const [filter] = useState<Filter>("All");
  const list =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);
  const divider = light
    ? "border-black/[0.06]"
    : "border-[rgba(196,118,138,0.10)]";

  return (
    <section id="projects" className="py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <Label>Featured Projects</Label>
          <H2 light={light}>Case Studies</H2>
          <Sub light={light}>
            Enterprise applications, design systems, and user-centric
            experiences built at scale.
          </Sub>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {list.map((project, index) => (
            <div
              key={project.id}
              className={`card flex flex-col overflow-hidden scroll-reveal delay-${index + 1}`}
            >
              <div
                className="h-[2px]"
                style={{
                  background: `linear-gradient(90deg, ${ROSE}, transparent)`,
                }}
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[11px]"
                    style={{ color: PLUM, fontFamily: "var(--font-mono)" }}
                  >
                    {project.year}
                  </span>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-sm"
                    style={{
                      background: "rgba(196,118,138,0.08)",
                      border: "1px solid rgba(196,118,138,0.18)",
                      color: BLUSH,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {project.metric}
                  </span>
                </div>
                <h3
                  className={`font-bold text-[15px] mb-3 ${t1(light)}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-[13px] leading-relaxed flex-1 mb-5 ${t2(light)}`}
                >
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className={`flex items-center gap-4 pt-4 border-t ${divider}`}
                >
                  <button
                    className="btn btn-outline"
                    style={{ padding: "5px 12px", fontSize: "11px" }}
                  >
                    Case Study
                  </button>
                  <button
                    className={`text-[11px] font-medium ${t2(light)} hover:text-[${BLUSH}] transition-colors`}
                  >
                    Live Demo ↗
                  </button>
                  <button
                    className={`text-[11px] font-medium ${t2(light)} hover:text-[${BLUSH}] transition-colors`}
                  >
                    GitHub ↗
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignSystem({ light }: { light: boolean }) {
  const steps = [
    {
      n: "01",
      label: "Discovery & Research",
      sub: "User interviews, competitive analysis, heuristic evaluation",
    },
    {
      n: "02",
      label: "Information Architecture",
      sub: "User flows, sitemaps, card sorting sessions",
    },
    {
      n: "03",
      label: "Lo-Fi Wireframing",
      sub: "Rapid sketches, low-fidelity Figma wireframes",
    },
    {
      n: "04",
      label: "High-Fidelity Prototype",
      sub: "Pixel-perfect Figma prototypes with component library",
    },
    {
      n: "05",
      label: "Accessibility Audit",
      sub: "WCAG AA compliance, contrast ratios, screen readers",
    },
    {
      n: "06",
      label: "Dev Handoff",
      sub: "Design tokens, Storybook docs, engineering collaboration",
    },
  ];

  const tokens = [
    { label: "Dusty Rose", hex: "#C4768A", token: "--rose" },
    { label: "Blush", hex: "#E0A0B2", token: "--blush" },
    { label: "Cream", hex: "#be6f84ff", token: "--cream" },
    { label: "Plum", hex: "#7A3D52", token: "--plum" },
    { label: "Surface", hex: "#1A1117", token: "--card" },
    { label: "Border", hex: "#2A1820", token: "--border" },
  ];

  const monoLbl = `text-[10px] font-semibold uppercase tracking-widest ${t2(light)} mb-5 block`;

  return (
    <section id="design-system" className="py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <Label>UI/UX Process & Design System</Label>
          <H2 light={light}>From Figma to Production</H2>
          <Sub light={light}>
            Systematic component architecture and rigorous accessibility
            standards bridging design and engineering.
          </Sub>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-12 mb-6">
          <div className="card p-8 scroll-reveal-left">
            <span
              className={monoLbl}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              UX Process
            </span>
            <div className="space-y-5">
              {steps.map(({ n, label, sub }) => (
                <div key={n} className="flex gap-4">
                  <span
                    className="text-[11px] font-bold w-6 shrink-0 mt-0.5"
                    style={{ color: ROSE, fontFamily: "var(--font-mono)" }}
                  >
                    {n}
                  </span>
                  <div>
                    <p className={`text-[13px] font-semibold ${t1(light)}`}>
                      {label}
                    </p>
                    <p
                      className={`text-[12px] leading-relaxed mt-0.5 ${t2(light)}`}
                    >
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 scroll-reveal-right">
            <div className="card p-6">
              <span
                className={monoLbl}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Design Tokens
              </span>
              <div className="space-y-2.5">
                {tokens.map((tk) => (
                  <div key={tk.label} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-md shrink-0"
                      style={{
                        background: tk.hex,
                        border: "1px solid rgba(196,118,138,0.15)",
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className={`text-[12px] font-medium ${t1(light)}`}>
                        {tk.label}
                      </p>
                      <p
                        className="text-[10px] truncate"
                        style={{ color: BLUSH, fontFamily: "var(--font-mono)" }}
                      >
                        {tk.token}
                      </p>
                    </div>
                    <span
                      className="text-[10px] shrink-0"
                      style={{ color: PLUM, fontFamily: "var(--font-mono)" }}
                    >
                      {tk.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 flex-1">
              {[
                { label: "Accessibility", sub: "WCAG AA/AAA" },
                { label: "Design Tokens", sub: "Figma Variables" },
                { label: "Prototyping", sub: "Hi-Fi in Figma" },
                { label: "System Thinking", sub: "Component APIs" },
              ].map(({ label, sub }) => (
                <div key={label} className="card p-4">
                  <div className="w-4 h-px mb-3" style={{ background: ROSE }} />
                  <p
                    className={`text-[13px] font-semibold ${t1(light)}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {label}
                  </p>
                  <p className={`text-[11px] mt-0.5 ${t2(light)}`}>{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card p-8 scroll-reveal">
          <div className="flex items-center justify-between mb-6">
            <span
              className={monoLbl}
              style={{ fontFamily: "var(--font-mono)", marginBottom: 0 }}
            >
              Component Library
            </span>
            <span
              className="text-[11px] px-3 py-1 rounded-md"
              style={{
                background: "rgba(196,118,138,0.07)",
                border: "1px solid rgba(196,118,138,0.18)",
                color: ROSE,
                fontFamily: "var(--font-mono)",
              }}
            >
              Angular · React · Storybook
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button className="btn btn-primary" style={{ padding: "9px 18px" }}>
              Primary
            </button>
            <button className="btn btn-outline" style={{ padding: "9px 18px" }}>
              Outline
            </button>
            <button className="btn btn-ghost" style={{ padding: "9px 18px" }}>
              Ghost
            </button>
            <span
              className="text-[11px] font-semibold px-2.5 py-1.5 rounded-sm"
              style={{
                background: "rgba(196,118,138,0.08)",
                border: "1px solid rgba(196,118,138,0.18)",
                color: BLUSH,
                fontFamily: "var(--font-mono)",
              }}
            >
              Success
            </span>
            <span
              className="text-[11px] font-semibold px-2.5 py-1.5 rounded-sm"
              style={{
                background: "rgba(245,208,218,0.08)",
                border: "1px solid rgba(245,208,218,0.18)",
                color: CREAM,
                fontFamily: "var(--font-mono)",
              }}
            >
              Warning
            </span>
            <input
              type="text"
              placeholder="Search…"
              className={`px-4 py-2 rounded-md text-[13px] border outline-none transition-all ${
                light
                  ? "bg-black/[0.03] border-black/[0.1] text-[#1A0F14] placeholder-[#9A8088]"
                  : "bg-white/[0.03] border-[rgba(196,118,138,0.14)] text-[#F2EBED] placeholder-[#4A3040]"
              } focus:border-[#C4768A]/50 focus:ring-2 focus:ring-[#C4768A]/10`}
            />
            <div className="flex items-center gap-2">
              <div
                className="w-10 h-[22px] rounded-sm flex items-center px-0.5 cursor-pointer"
                style={{
                  background: `linear-gradient(90deg, ${ROSE}, ${BLUSH})`,
                }}
              >
                <div className="w-[18px] h-[18px] rounded-sm bg-white ml-auto shadow-sm" />
              </div>
              <span className={`text-[12px] ${t2(light)}`}>Active</span>
            </div>
          </div>

          <div
            className="flex items-start gap-2.5 p-4 rounded-md"
            style={{
              background: "rgba(196,118,138,0.05)",
              border: "1px solid rgba(196,118,138,0.14)",
            }}
          >
            <ShieldCheck size={18} className="shrink-0 mt-0.5" style={{ color: ROSE }} />
            <p className="text-[12px] leading-relaxed" style={{ color: BLUSH }}>
              <strong>WCAG AA Compliant</strong> — All components maintain 4.5:1
              contrast ratio for normal text. Focus states use visible ring
              indicators. Interactive elements meet 44×44px minimum touch
              targets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience({ light }: { light: boolean }) {
  return (
    <section id="experience" className="py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <Label>Experience & Education</Label>
          <H2 light={light}>The Journey</H2>
          <Sub light={light}>
            From junior engineer to technical lead — a career defined by
            continuous learning.
          </Sub>
        </div>

        <div className="relative max-w-3xl mx-auto mt-12">
          <div
            className="absolute left-[13px] top-8 bottom-4 w-px"
            style={{
              background: `linear-gradient(to bottom, ${ROSE}50, ${ROSE}10, transparent)`,
            }}
          />

          <div className="space-y-4">
            {TIMELINE.map((item, index) => (
              <div
                key={index}
                className={`flex gap-6 group scroll-reveal delay-${Math.min(index + 1, 6)}`}
              >
                <div className="shrink-0 flex flex-col items-center pt-[14px]">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{
                      background: item.type === "work" ? "rgba(196,118,138,0.12)" : "rgba(122,61,82,0.2)",
                      border: `1px solid ${item.type === "work" ? ROSE : PLUM}`,
                      color: item.type === "work" ? ROSE : BLUSH,
                      boxShadow: item.current ? `0 0 12px ${ROSE}50` : "none",
                    }}
                  >
                    {item.type === "work" ? <Briefcase size={13} /> : <GraduationCap size={13} />}
                  </div>
                </div>

                <div
                  className="flex-1 card p-5"
                  style={
                    item.current
                      ? { borderColor: "rgba(196,118,138,0.28)" }
                      : {}
                  }
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3
                        className={`font-bold text-[14px] ${t1(light)}`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.role}
                      </h3>
                      <p
                        className="text-[13px] font-semibold mt-0.5"
                        style={{ color: BLUSH }}
                      >
                        {item.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {item.current && (
                        <span
                          className="text-[10px] font-bold px-2 py-0.5 rounded-sm"
                          style={{
                            background: "rgba(196,118,138,0.10)",
                            border: "1px solid rgba(196,118,138,0.22)",
                            color: ROSE,
                            fontFamily: "var(--font-mono)",
                          }}
                        >
                          Now
                        </span>
                      )}
                      <span
                        className="text-[11px]"
                        style={{ color: PLUM, fontFamily: "var(--font-mono)" }}
                      >
                        {item.period}
                      </span>
                    </div>
                  </div>
                  <p className={`text-[13px] leading-relaxed ${t2(light)}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ light }: { light: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const inputCls = `w-full px-4 py-2.5 rounded-md text-[13px] border outline-none transition-all duration-150
    focus:ring-2 focus:ring-[#C4768A]/15 focus:border-[#C4768A]/50 ${
      light
        ? "bg-black/[0.03] border-black/[0.09] text-[#1A0F14] placeholder-[#9A8088]"
        : "bg-white/[0.03] border-[rgba(196,118,138,0.12)] text-[#F2EBED] placeholder-[#4A3040]"
    }`;

  return (
    <section id="contact" className="py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <Label>Get In Touch</Label>
          <H2 light={light}>Let's Build Something</H2>
          <Sub light={light}>
            Open to senior frontend roles, design system projects, and
            consulting. Based in Cochabamba, Bolivia — remote or full-time.
          </Sub>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          <div className="card p-7 scroll-reveal delay-1">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-14 gap-4 text-center">
                <div
                  className="w-12 h-12 rounded-md flex items-center justify-center text-lg font-bold"
                  style={{
                    background: "rgba(196,118,138,0.10)",
                    border: "1px solid rgba(196,118,138,0.22)",
                    color: ROSE,
                  }}
                >
                  ✓
                </div>
                <h3
                  className={`text-xl font-bold ${t1(light)}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message sent!
                </h3>
                <p className={`text-[13px] ${t2(light)}`}>
                  I'll get back to you within 24 hours.
                </p>
                <button
                  className="btn btn-ghost"
                  onClick={() => setSent(false)}
                  style={{ padding: "6px 14px", fontSize: "12px" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                {[
                  {
                    label: "Name",
                    type: "text",
                    val: name,
                    set: setName,
                    ph: "Your full name",
                  },
                  {
                    label: "Email",
                    type: "email",
                    val: email,
                    set: setEmail,
                    ph: "you@company.com",
                  },
                ].map(({ label, type, val, set, ph }) => (
                  <div key={label}>
                    <label
                      className={`block text-[10px] font-semibold mb-1.5 uppercase tracking-widest ${t2(light)}`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {label}
                    </label>
                    <input
                      value={val}
                      onChange={(e) => set(e.target.value)}
                      required
                      type={type}
                      placeholder={ph}
                      className={inputCls}
                    />
                  </div>
                ))}
                <div>
                  <label
                    className={`block text-[10px] font-semibold mb-1.5 uppercase tracking-widest ${t2(light)}`}
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity…"
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  style={{ padding: "11px 22px" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-4 scroll-reveal delay-2">
            <div className="card p-6">
              <span
                className={`text-[10px] font-semibold uppercase tracking-widest block mb-5 ${t2(light)}`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Direct Contact
              </span>
              <div className="space-y-4">
                {[
                  {
                    label: "Email",
                    value: "dayana.siles@email.com",
                    sub: "Preferred method",
                  },
                  {
                    label: "Location",
                    value: "Cochabamba, Bolivia",
                    sub: "Remote / Full-time available",
                  },
                  {
                    label: "Response time",
                    value: "< 24 hours",
                    sub: "Typical reply time",
                  },
                ].map(({ label, value, sub }) => (
                  <div
                    key={label}
                    className={`pb-4 border-b last:border-0 last:pb-0 ${light ? "border-black/[0.06]" : "border-[rgba(196,118,138,0.08)]"}`}
                  >
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-widest mb-1 ${t2(light)}`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {label}
                    </p>
                    <p className={`text-[14px] font-semibold ${t1(light)}`}>
                      {value}
                    </p>
                    <p className={`text-[11px] ${t2(light)} opacity-70`}>
                      {sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <span
                className={`text-[10px] font-semibold uppercase tracking-widest block mb-4 ${t2(light)}`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Online
              </span>
              <div className="space-y-2">
                {[
                  { label: "LinkedIn", handle: "/in/dayana-siles", Icon: FaLinkedinIn },
                  { label: "GitHub", handle: "github.com/dayanasiles", Icon: FaGithub },
                  { label: "Figma Community", handle: "@dayana.siles", Icon: SiFigma },
                ].map(({ label, handle, Icon }) => (
                  <button
                    key={label}
                    className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all duration-150 ${
                      light
                        ? "border-black/[0.06] hover:border-[rgba(196,118,138,0.3)]"
                        : "border-[rgba(196,118,138,0.10)] hover:border-[rgba(196,118,138,0.25)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(196,118,138,0.08)",
                          border: "1px solid rgba(196,118,138,0.16)",
                          color: ROSE,
                        }}
                      >
                        <Icon size={14} />
                      </div>
                      <div>
                        <p className={`text-[13px] font-semibold ${t1(light)}`}>
                          {label}
                        </p>
                        <p className={`text-[11px] ${t2(light)}`}>{handle}</p>
                      </div>
                    </div>
                    <ExternalLink size={13} style={{ color: ROSE }} />
                  </button>
                ))}
              </div>
            </div>

            <div
              className="rounded-md p-5"
              style={{
                background: "rgba(196,118,138,0.05)",
                border: "1px solid rgba(196,118,138,0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: ROSE }}
                />
                <span
                  className="text-[13px] font-semibold"
                  style={{ color: BLUSH }}
                >
                  Currently Available
                </span>
              </div>
              <p className={`text-[12px] leading-relaxed ${t2(light)}`}>
                Open to senior frontend roles, design system consulting, and
                long-term remote engagements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ light }: { light: boolean }) {
  const border = light
    ? "border-black/[0.07]"
    : "border-[rgba(196,118,138,0.08)]";
  return (
    <footer className={`py-8 px-6 border-t ${border}`}>
      <div
        className={`max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] ${t2(light)}`}
      >
        <p>
          © 2026 Dayana Siles · Senior Frontend & UI Engineer · Cochabamba,
          Bolivia
        </p>
        <p style={{ fontFamily: "var(--font-mono)" }}>
          <span style={{ color: ROSE }}>Angular</span>
          {" · "}
          <span style={{ color: BLUSH }}>React</span>
          {" · "}
          <span style={{ color: CREAM }}>Figma</span>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", light);
    document.body.style.background = light ? "#FBF6F8" : "#100B0E";
    document.body.style.color = light ? "#1A0F14" : "#F2EBED";
  }, [light]);

  useScrollReveal();

  return (
    <div className={light ? "light" : ""}>
      <Navbar light={light} onToggle={() => setLight((prev) => !prev)} />
      <Hero light={light} />
      <Projects light={light} />
      <Experience light={light} />
      <Skills light={light} />
      <DesignSystem light={light} />
      <Contact light={light} />
      <Footer light={light} />
    </div>
  );
}
