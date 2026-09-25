import { useEffect, useState, type ReactNode } from "react";
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
import { portfolioContent, type ProjectCategory } from "./data/content";
import { personalProfile } from "./data/profile";
import { resumeContent } from "./data/resume";

const ROSE = "#C4768A";
const BLUSH = "#E0A0B2";
const CREAM = "#be6f84ff";
const PLUM = "#7A3D52";
const DISABLED_SECTIONS = new Set(["experience", "design-system"]);

type Filter = "All" | ProjectCategory;

const NAV = [
  { label: portfolioContent.navigation.projects, id: "projects" },
  { label: "Education", id: "education" },
  { label: portfolioContent.navigation.skills, id: "skills" },
  { label: portfolioContent.navigation.contact, id: "contact" },
] as const;

const SKILLS = resumeContent.skills;

const PROJECTS = resumeContent.projects;

const TIMELINE = resumeContent.timeline;

function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

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
  }, []);
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 58;
  window.scrollTo({ top, behavior: "smooth" });
}

function Label({ children }: { children: ReactNode }) {
  return <span className="section-label">{children}</span>;
}

function H2({
  children,
  light,
}: {
  children: ReactNode;
  light: boolean;
}) {
  return (
    <h2
      className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 ${light ? "text-[#1A0F14]" : "text-[#F2EBED]"}`}
    >
      {children}
    </h2>
  );
}

function Sub({
  children,
  light,
}: {
  children: ReactNode;
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
    handleScroll();
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
          className={`font-display font-bold text-sm tracking-tight hover:opacity-70 transition-opacity ${t1(light)}`}
        >
          <span className="g-text text-base font-extrabold">{portfolioContent.brand.initials}</span>
          <span className={`ml-2 ${t2(light)} hidden sm:inline font-normal`}>
            · {portfolioContent.brand.name}
          </span>
        </button>

        <div className="hidden md:flex items-center gap-0.5">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`font-display px-4 py-2 rounded-md text-[13px] font-medium transition-colors duration-150 ${t2(light)} hover:opacity-70`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggle}
            aria-label="Toggle theme"
            aria-pressed={light}
            className={`w-8 h-8 rounded-md flex items-center justify-center transition-all ${
              light
                ? "bg-black/[0.05] hover:bg-black/[0.09] text-[#6B505A]"
                : "bg-white/[0.05] hover:bg-white/[0.09] text-[#9A8088]"
            }`}
          >
            {light ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          {personalProfile.cvUrl ? (
            <a
              href={personalProfile.cvUrl}
              download
              className="btn btn-primary hidden sm:inline-flex"
            >
              <Download size={14} />
              Download CV
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="CV not available yet"
              className="btn btn-primary hidden sm:inline-flex opacity-50 cursor-not-allowed"
            >
              <Download size={14} />
              Download CV
            </button>
          )}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
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
          id="mobile-navigation"
          className={`md:hidden border-t px-6 py-4 flex flex-col gap-1 ${
            light
              ? "bg-[#FBF6F8] border-black/[0.06]"
              : "bg-[#100B0E] border-[rgba(196,118,138,0.10)]"
          }`}
        >
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                scrollToSection(item.id);
                setOpen(false);
              }}
              className={`font-display text-left px-3 py-2.5 rounded-md text-[13px] font-medium ${t2(light)}`}
            >
                {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero({ light }: { light: boolean }) {
  const { pills } = portfolioContent.hero;
  const pillCls = light
    ? "bg-black/[0.04] border border-black/[0.08] text-[#4A3040]"
    : "bg-[rgba(196,118,138,0.06)] border border-[rgba(196,118,138,0.16)] text-[#9A8088]";

  return (
    <section className="relative min-h-screen flex items-center pt-16 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="hero-orb-primary absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[110px]"
        />
        <div
          className="hero-orb-secondary absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-[90px]"
        />
        <div
          className={`absolute inset-0 opacity-[0.015] ${light ? "hero-grid-light" : "hero-grid-dark"}`}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex flex-col items-center gap-4 au shrink-0">
            <div
              className="photo-frame photo-surface w-[220px] h-[270px] sm:w-[250px] sm:h-[310px] flex flex-col items-center justify-center gap-3"
            >
              <img
                src={personalProfile.photo}
                alt={personalProfile.photoAlt}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="flex gap-2">
              {[
                { ...personalProfile.links.linkedin, Icon: FaLinkedinIn },
                { ...personalProfile.links.github, Icon: FaGithub },
                { ...personalProfile.links.figma, Icon: SiFigma },
              ].map(({ label, url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className="btn btn-outline flex items-center gap-1.5"
                  style={{ padding: "6px 12px", fontSize: "11px" }}
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div
              className="hero-status inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-[11px] font-medium mb-7 au font-mono"
            >
              <span
                className="hero-status-dot w-1.5 h-1.5 rounded-full animate-pulse"
              />
              {portfolioContent.hero.availability}
            </div>

            <h1
              className={`font-display text-[clamp(3rem,8vw,5.5rem)] font-extrabold tracking-tight leading-[1.03] mb-4 au-1 ${t1(light)}`}
            >
              {portfolioContent.hero.firstName}
              <br />
              <span className="g-text">{portfolioContent.hero.lastName}</span>
            </h1>

            <p
              className={`font-display text-[17px] font-semibold mb-4 au-1 ${t2(light)}`}
            >
              {portfolioContent.hero.role}
            </p>

            <p
              className={`max-w-[650px] mx-auto lg:mx-0 text-[15px] leading-relaxed mb-7 au-2 ${t2(light)}`}
            >
              {portfolioContent.hero.summary}
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
                onClick={() => scrollToSection("projects")}
              >
                {portfolioContent.hero.viewProjects}
                <ArrowRight size={14} />
              </button>
              <button className="btn btn-ghost" onClick={() => scrollToSection("contact")}>
                <Mail size={14} />
                {portfolioContent.hero.contactMe}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills({ light }: { light: boolean }) {
  return (
    <section id="skills" className="py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <Label>{portfolioContent.sections.skills.label}</Label>
          <H2 light={light}>{portfolioContent.sections.skills.title}</H2>
          <Sub light={light}>{portfolioContent.sections.skills.description}</Sub>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.id}
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
                  {skill.displayNumber}
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
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const list =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const selectedProject = PROJECTS.find((project) => project.id === selectedProjectId);
  const divider = light
    ? "border-black/[0.06]"
    : "border-[rgba(196,118,138,0.10)]";

  return (
    <section id="projects" className="py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <Label>{portfolioContent.sections.projects.label}</Label>
          <H2 light={light}>{portfolioContent.sections.projects.title}</H2>
          <Sub light={light}>{portfolioContent.sections.projects.description}</Sub>
        </div>
{/*}
        <div className="flex flex-wrap gap-2 mt-8" role="group" aria-label={portfolioContent.sections.projects.filterLabel}>
          {portfolioContent.sections.projects.filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={filter === option}
              onClick={() => {
                setFilter(option);
                setSelectedProjectId(null);
              }}
              className={`btn ${filter === option ? "btn-primary" : "btn-outline"}`}
              style={{ padding: "6px 12px", fontSize: "11px" }}
            >
              {option}
            </button>
          ))}
        </div>
*/}
        <div className={`mt-12 ${selectedProject ? "lg:flex lg:items-start gap-6" : ""}`}>
          <div className={`grid sm:grid-cols-2 gap-4 ${selectedProject ? "lg:flex-1" : "lg:grid-cols-3"}`} aria-live="polite">
          {list.length === 0 ? (
            <p className={`sm:col-span-2 lg:col-span-3 ${t2(light)}`}>
              {portfolioContent.sections.projects.emptyResults}
            </p>
          ) : (
            list.map((project, index) => (
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
                  {project.description}
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
                    type="button"
                    onClick={() => setSelectedProjectId(project.id)}
                    aria-pressed={selectedProjectId === project.id}
                    className="btn btn-primary"
                  >
                    {portfolioContent.sections.projects.viewDetails}
                  </button>
                </div>
              </div>
            </div>
            ))
          )}
          </div>

          {selectedProject && (
            <aside
              className="card self-start w-fit max-w-full lg:max-w-[36%] p-6 h-fit shrink-0 border-[rgba(196,118,138,0.28)]"
              aria-live="polite"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="section-label mb-0">
                  {portfolioContent.sections.projects.detailsTitle}
                </span>
                <button
                  type="button"
                  className="btn btn-ghost p-2"
                  onClick={() => setSelectedProjectId(null)}
                  aria-label="Close project details"
                >
                  <X size={14} />
                </button>
              </div>
              <div>
                  <h3 className={`font-display text-xl font-bold mb-2 ${t1(light)}`}>
                    {selectedProject.title}
                </h3>
                <p className={`text-[12px] leading-relaxed mb-5 ${t2(light)}`}>
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className={`space-y-3 text-[12px] leading-relaxed ${t2(light)}`}>
                  {selectedProject.details?.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="text-rose shrink-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}

function DesignSystem({ light }: { light: boolean }) {
  const { processSteps: steps, tokens, capabilityCards } = portfolioContent.designSystem;

  const monoLbl = `text-[10px] font-semibold uppercase tracking-widest ${t2(light)} mb-5 block`;

  return (
    <section id="design-system" className="py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <Label>{portfolioContent.sections.designSystem.label}</Label>
          <H2 light={light}>{portfolioContent.sections.designSystem.title}</H2>
          <Sub light={light}>{portfolioContent.sections.designSystem.description}</Sub>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-12 mb-6">
          <div className="card p-8 scroll-reveal-left">
            <span
              className={monoLbl}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {portfolioContent.sections.designSystem.uxProcess}
            </span>
            <div className="space-y-5">
              {steps.map(({ number, title, description }) => (
                <div key={number} className="flex gap-4">
                  <span
                    className="text-[11px] font-bold w-6 shrink-0 mt-0.5"
                    style={{ color: ROSE, fontFamily: "var(--font-mono)" }}
                  >
                    {number}
                  </span>
                  <div>
                    <p className={`text-[13px] font-semibold ${t1(light)}`}>
                      {title}
                    </p>
                    <p
                      className={`text-[12px] leading-relaxed mt-0.5 ${t2(light)}`}
                    >
                      {description}
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
                {portfolioContent.sections.designSystem.designTokens}
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
              {capabilityCards.map(({ title, description }) => (
                <div key={title} className="card p-4">
                  <div className="w-4 h-px mb-3" style={{ background: ROSE }} />
                  <p
                    className={`text-[13px] font-semibold ${t1(light)}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {title}
                  </p>
                  <p className={`text-[11px] mt-0.5 ${t2(light)}`}>{description}</p>
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
              {portfolioContent.sections.designSystem.componentLibrary}
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
              {portfolioContent.sections.designSystem.componentLibraryStack}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button className="btn btn-primary" style={{ padding: "9px 18px" }}>
              {portfolioContent.sections.designSystem.sampleButtons[0]}
            </button>
            <button className="btn btn-outline" style={{ padding: "9px 18px" }}>
              {portfolioContent.sections.designSystem.sampleButtons[1]}
            </button>
            <button className="btn btn-ghost" style={{ padding: "9px 18px" }}>
              {portfolioContent.sections.designSystem.sampleButtons[2]}
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
              {portfolioContent.sections.designSystem.sampleStatuses[0]}
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
              {portfolioContent.sections.designSystem.sampleStatuses[1]}
            </span>
            <input
              type="text"
              placeholder={portfolioContent.sections.designSystem.searchPlaceholder}
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
              <span className={`text-[12px] ${t2(light)}`}>{portfolioContent.sections.designSystem.activeStatus}</span>
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
              <strong>WCAG AA Compliant</strong> - All components maintain 4.5:1
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
          <Label>{portfolioContent.sections.experience.label}</Label>
          <H2 light={light}>{portfolioContent.sections.experience.title}</H2>
          <Sub light={light}>{portfolioContent.sections.experience.description}</Sub>
        </div>

        <div className="relative max-w-3xl mx-auto mt-12">
          <div
            className="absolute left-[13px] top-8 bottom-4 w-px"
            style={{
              background: `linear-gradient(to bottom, ${ROSE}50, ${ROSE}10, transparent)`,
            }}
          />

          <div className="space-y-4">
            {TIMELINE.filter((item) => item.type === "work").map((item, index) => (
              <div
                key={`${item.period}-${item.role}`}
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
                          {portfolioContent.sections.experience.currentLabel}
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
                    {item.description}
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

function Education({ light }: { light: boolean }) {
  const educationItems = TIMELINE.filter((item) => item.type === "education");

  return (
    <section id="education" className="py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <Label>{portfolioContent.sections.education.label}</Label>
          <H2 light={light}>{portfolioContent.sections.education.title}</H2>
          <Sub light={light}>{portfolioContent.sections.education.description}</Sub>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto mt-12">
          {educationItems.map((item, index) => (
            <article
              key={item.id}
              className={`card p-5 scroll-reveal delay-${Math.min(index + 1, 6)}`}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(122,61,82,0.2)",
                    border: `1px solid ${PLUM}`,
                    color: BLUSH,
                  }}
                >
                  <GraduationCap size={14} />
                </div>
                <div className="min-w-0">
                  <h3 className={`font-bold text-[14px] ${t1(light)}`}>
                    {item.role}
                  </h3>
                  <p className="text-[13px] font-semibold mt-0.5" style={{ color: BLUSH }}>
                    {item.company}
                  </p>
                  <p className="text-[11px] mt-1" style={{ color: PLUM, fontFamily: "var(--font-mono)" }}>
                    {item.period}
                  </p>
                  <p className={`text-[13px] leading-relaxed mt-3 ${t2(light)}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
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
          <Label>{portfolioContent.sections.contact.label}</Label>
          <H2 light={light}>{portfolioContent.sections.contact.title}</H2>
          <Sub light={light}>{portfolioContent.sections.contact.description}</Sub>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          <div className="card p-7 scroll-reveal delay-1">
            {sent ? (
              <div
                className="flex flex-col items-center justify-center py-14 gap-4 text-center"
                role="status"
                aria-live="polite"
              >
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
                  {portfolioContent.sections.contact.messageSent}
                </h3>
                <p className={`text-[13px] ${t2(light)}`}>
                  {portfolioContent.sections.contact.responsePromise}
                </p>
                <button
                  className="btn btn-ghost"
                  onClick={() => setSent(false)}
                  style={{ padding: "6px 14px", fontSize: "12px" }}
                >
                  {portfolioContent.sections.contact.sendAnother}
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                aria-label={portfolioContent.sections.contact.formLabel}
                className="space-y-4"
              >
                {[
                  {
                    label: portfolioContent.sections.contact.nameLabel,
                    type: "text",
                    val: name,
                    set: setName,
                    ph: portfolioContent.sections.contact.namePlaceholder,
                  },
                  {
                    label: portfolioContent.sections.contact.emailLabel,
                    type: "email",
                    val: email,
                    set: setEmail,
                    ph: portfolioContent.sections.contact.emailPlaceholder,
                  },
                ].map(({ label, type, val, set, ph }) => (
                  <div key={label}>
                    <label
                      htmlFor={label.toLowerCase()}
                      className={`block text-[10px] font-semibold mb-1.5 uppercase tracking-widest ${t2(light)}`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {label}
                    </label>
                    <input
                      id={label.toLowerCase()}
                      value={val}
                      onChange={(e) => set(e.target.value)}
                      required
                      type={type}
                      autoComplete={type === "email" ? "email" : "name"}
                      placeholder={ph}
                      className={inputCls}
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-[10px] font-semibold mb-1.5 uppercase tracking-widest ${t2(light)}`}
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {portfolioContent.sections.contact.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    placeholder={portfolioContent.sections.contact.messagePlaceholder}
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  style={{ padding: "11px 22px" }}
                >
                  {portfolioContent.sections.contact.sendMessage}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-4 lg:contents">
            <div className="card p-6">
              <span
                className={`text-[10px] font-semibold uppercase tracking-widest block mb-5 ${t2(light)}`}
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {portfolioContent.sections.contact.directContact}
              </span>
              <div className="space-y-4">
                {[
                  {
                    label: portfolioContent.contactDetails[0].label,
                    value: portfolioContent.contactDetails[0].value,
                    sub: portfolioContent.contactDetails[0].description,
                  },
                  {
                    label: portfolioContent.contactDetails[1].label,
                    value: portfolioContent.contactDetails[1].value,
                    sub: portfolioContent.contactDetails[1].description,
                  },
                  {
                    label: portfolioContent.contactDetails[2].label,
                    value: portfolioContent.contactDetails[2].value,
                    sub: portfolioContent.contactDetails[2].description,
                  },
                  {
                    label: portfolioContent.contactDetails[3].label,
                    value: portfolioContent.contactDetails[3].value,
                    sub: portfolioContent.contactDetails[3].description,
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
                {portfolioContent.sections.contact.online}
              </span>
              <div className="space-y-2">
                {[
                  { ...portfolioContent.socialLinks[0], Icon: FaLinkedinIn },
                  { ...portfolioContent.socialLinks[1], Icon: FaGithub },
                  { ...portfolioContent.socialLinks[2], Icon: SiFigma },
                ].map(({ label, handle, url, Icon }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
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
                  </a>
                ))}
              </div>
            </div>

            <div
              className="rounded-md p-5"
              style={{
                background: "rgba(196,118,138,0.05)",
                border: "1px solid rgba(196,118,138,0.15)",
                height: "fit-content",
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
                  {portfolioContent.sections.contact.currentlyAvailable}
                </span>
              </div>
              <p className={`text-[12px] leading-relaxed ${t2(light)}`}>
                {portfolioContent.sections.contact.availabilityDescription}
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
        <p>{portfolioContent.footer.copyright}</p>
        <p style={{ fontFamily: "var(--font-mono)" }}>
          <span style={{ color: ROSE }}>{portfolioContent.footer.technologies[0]}</span>
          {" · "}
          <span style={{ color: BLUSH }}>{portfolioContent.footer.technologies[1]}</span>
          {" · "}
          <span style={{ color: CREAM }}>{portfolioContent.footer.technologies[2]}</span>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [light, setLight] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") === "light";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const previousBackground = document.body.style.background;
    const previousColor = document.body.style.color;
    document.body.classList.toggle("light", light);
    document.body.style.background = light ? "#FBF6F8" : "#100B0E";
    document.body.style.color = light ? "#1A0F14" : "#F2EBED";
    try {
      localStorage.setItem("portfolio-theme", light ? "light" : "dark");
    } catch {
      // Storage may be unavailable in privacy-restricted environments.
    }

    return () => {
      document.body.classList.remove("light");
      document.body.style.background = previousBackground;
      document.body.style.color = previousColor;
    };
  }, [light]);

  useScrollReveal();

  return (
    <div className={light ? "light" : ""}>
      <Navbar light={light} onToggle={() => setLight((prev) => !prev)} />
      <Hero light={light} />
      <Projects light={light} />
      {!DISABLED_SECTIONS.has("experience") && <Experience light={light} />}
      <Education light={light} />
      <Skills light={light} />
      {!DISABLED_SECTIONS.has("design-system") && <DesignSystem light={light} />}
      <Contact light={light} />
      <Footer light={light} />
    </div>
  );
}
