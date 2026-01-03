import profilePhoto from "./assets/silmi.jpg";
import profileNavbar from "./assets/silmi-navbar.jpg";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Search,
  Sun,
  X,
  CheckCircle2,
} from "lucide-react";


const profile = {
  name: "Silmi Rahmawati",
  role: "QA Engineer • System Implementor",
  location: "Bandung, Indonesia",
  tagline:
    "I build reliable products through sharp testing, clear documentation, and pragmatic automation",
  summary:
    "I’m a QA-minded engineer with experience in web apps and hospital information systems (SIMRS). I enjoy turning messy issues into structured test scenarios, reproducible bug reports, and measurable improvements.",
  links: {
    linkedin: "https://www.linkedin.com/in/silmi-rahmawati-505269187/",
    github: "https://github.com/silmirahmawati",
    email: "mailto:rahmawatisilmi4@gmail.com",
    cv: "/CV-Silmi-Rahmawati.pdf", // taruh file CV di folder /public kalau pakai Vite -> taruh di /public
  },
};

const projects = [
  {
    id: "qa-simrs",
    title: "SIMRS QA & Support Toolkit",
    year: "2025–2026",
    tags: ["QA", "UAT", "Bug Triage", "SQL"],
    highlight: "Reduced recurring issues with structured triage + test evidence",
    desc:
      "A lightweight toolkit and workflow for handling hospital tickets: reproducible steps, environment checks, SQL verification notes, and regression checklist per module.",
    bullets: [
      "Standardized bug report format (Steps, Actual, Expected, Impact, Evidence)",
      "Regression checklist per module (Billing, Pharmacy, Medical Record)",
      "Simple SLA + prioritization rules for faster handling",
    ],
    stack: ["Docs", "SQL", "Postman", "Excel/Sheets"],
    demo: "",
    repo: "",
  },
  {
  id: "ml-portal",
  title: "Web Portal with Recommendation System",
  year: "2024",
  tags: ["ML", "NLP", "Flask"],
  highlight: "Personalized content delivery using ML-based recommendation",
  desc:
    "Developed a web portal integrating a machine learning recommendation system to personalize content based on user behavior and keyword associations.",
  bullets: [
    "Designed recommendation logic using Apriori & NLP",
    "Integrated ML pipeline into web portal",
    "Improved relevance through keyword-based association rules",
  ],
  stack: ["Python", "Flask", "NLP", "Apriori"],
  demo: "",
  repo: "",
  },
  {
    id: "portfolio",
    title: "Advanced Portfolio Website",
    year: "2026",
    tags: ["Frontend", "UI", "Performance"],
    highlight: "Command palette + case study modal + project filtering",
    desc:
      "A fast portfolio template that feels like a product: keyboard navigation, clean UI, and structured case studies.",
    bullets: [
      "Cmd/Ctrl + K command palette",
      "Case study modal with highlights & stack",
      "Accessible, responsive, and optimized layout",
    ],
    stack: ["React", "Tailwind", "Framer Motion"],
    demo: "",
    repo: "",
  },
];

const experience = [
  {
    time: "2025–Now",
    title: "IT Help Desk / System Implementor (SIMRS)",
    org: "PT Terakorp Indonesia",
    points: [
      "Handled tickets & UAT for multiple hospital modules",
      "Created structured documentation for issues and fixes",
      "Collaborated with sysadmin/dev for troubleshooting and deployment checks",
    ],
  },
  {
    time: "2023",
    title: "Web Dev Intern",
    org: "CyberLabs",
    points: [
      "Built and maintained web features",
      "Worked with Laravel-based apps and UI improvements",
    ],
  },
];

const skills = [
  { name: "Manual Testing (UAT/Regression)", level: 90 },
  { name: "Bug Reporting & Triage", level: 88 },
  { name: "API Testing (Postman)", level: 75 },
  { name: "SQL Verification", level: 72 },
  { name: "Programming for QA (Basics)", level: 55 },
];


function cx(...c) {
  return c.filter(Boolean).join(" ");
}

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : initial;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs text-rose-700 shadow-sm dark:border-rose-900/40 dark:bg-rose-900/20 dark:text-rose-200">
      {children}
    </span>
  );
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="mt-1 rounded-2xl border border-zinc-200/60 bg-white/60 p-2 shadow-sm backdrop-blur dark:border-zinc-700/60 dark:bg-zinc-900/40">
        <Icon className="h-5 w-5 text-rose-500 border-rose-200 dark:text-rose-400" />
      </div>
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-0 top-10 z-50 mx-auto w-[min(920px,92vw)] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
          >
            <div className="flex items-center justify-between border-b border-zinc-200/60 px-6 py-4 dark:border-zinc-800/70">
              <div className="min-w-0">
                <p className="text-xs font-medium tracking-wide text-rose-500">
                  Case Study
                </p>
                <h3 className="truncate text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-2xl border border-zinc-200/60 bg-white/70 p-2 text-zinc-700 shadow-sm hover:bg-white dark:border-zinc-800/60 dark:bg-zinc-900/50 dark:text-zinc-200"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[78vh] overflow-auto px-6 py-6">
              {children}
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

function CommandPalette({ open, onClose, actions }) {
  const inputRef = useRef(null);
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!open) return;
    setQ("");
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return actions;
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(s) ||
        a.hint?.toLowerCase().includes(s)
    );
  }, [q, actions]);

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  return (
    <Modal open={open} onClose={onClose} title="Command Palette">
      <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/40">
        <Search className="h-4 w-4 text-zinc-500" />
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Type a command… (e.g. Projects, Email, LinkedIn)"
          className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-500 dark:text-zinc-50"
        />
        <Badge>Esc</Badge>
      </div>

      <div className="mt-4 space-y-2">
        {filtered.map((a) => (
          <button
            key={a.label}
            onClick={() => {
              a.onSelect?.();
              onClose?.();
            }}
            className="group flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-left shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900/40"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                  {a.label}
                </span>
                {a.hint ? (
                  <span className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                    {a.hint}
                  </span>
                ) : null}
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-zinc-400 opacity-0 transition group-hover:opacity-100" />
          </button>
        ))}
        {filtered.length === 0 ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            No results
          </p>
        ) : null}
      </div>
    </Modal>
  );
}
const otherProjects = [
  {
    title: "Book Marketplace",
    tech: "PHP • Laravel",
    note: "CRUD, authentication, transaction flow",
  },
  {
    title: "Logic Calculator",
    tech: "JavaScript",
    note: "Basic logic & conditional handling",
  },
  {
    title: "Digital Guest Book",
    tech: "React",
    note: "Form handling & state management",
  },
  {
    title: "Company Profile – Tasty Food",
    tech: "HTML • CSS • JS",
    note: "Responsive UI & content layout",
  },
];
export default function App() {
  const [dark, setDark] = useLocalStorage("darkMode", true);
  const [activeTag, setActiveTag] = useState("All");
  const [selected, setSelected] = useState(null);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  useEffect(() => {
    const onKeyDown = (e) => {
      const isK = e.key?.toLowerCase() === "k";
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const tags = useMemo(() => {
    const all = new Set();
    projects.forEach((p) => p.tags.forEach((t) => all.add(t)));
    return ["All", ...Array.from(all)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const actions = useMemo(
    () => [
      {
        label: "Go to Projects",
        hint: "Scroll to projects section",
        onSelect: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        label: "Go to Experience",
        hint: "Scroll to experience section",
        onSelect: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        label: "Email me",
        hint: profile.links.email.replace("mailto:", ""),
        onSelect: () => window.location.href = profile.links.email,
      },
      {
        label: "Open LinkedIn",
        hint: profile.links.linkedin,
        onSelect: () => window.open(profile.links.linkedin, "_blank", "noopener,noreferrer"),
      },
      {
        label: dark ? "Switch to Light Mode" : "Switch to Dark Mode",
        hint: "Toggle theme",
        onSelect: () => setDark((v) => !v),
      },
    ],
    [dark, setDark]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-white text-zinc-900 dark:from-[#141418] dark:via-[#141418] dark:to-[#141418] dark:text-zinc-100">
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} actions={actions} />

      {/* Top gradient */}
      <div className="pointer-events-none fixed inset-x-0 top-0 h-56 bg-gradient-to-b from-zinc-200/60 to-transparent blur-2xl dark:from-rose-500/10" />

      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-zinc-200/60 bg-zinc-50/70 backdrop-blur dark:border-rose-500/20 dark:bg-[#141418]/70">
        <div className="mx-auto flex w-[min(1100px,92vw)] items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-2xl border border-rose-400 shadow-[0_4px_16px_rgba(244,114,182,0.35)]">
              <img
                src={profileNavbar}
                alt="Silmi Rahmawati"
                className="
                  h-full w-full
                  object-cover
                  scale-150
                "
                style={{ objectPosition: "center 50%" }}
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">{profile.name}</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                {profile.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPaletteOpen(true)}
              className="hidden items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 md:flex"
            >
              <Search className="h-4 w-4" />
              Command
              <Badge>Ctrl/⌘ K</Badge>
            </button>

            <button
              onClick={() => setDark((v) => !v)}
              className="rounded-2xl border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <a
              href={profile.links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100"
            >
              <Download className="h-4 w-4" />
              CV
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto w-[min(1100px,92vw)] pb-20 pt-10">
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid gap-6 md:grid-cols-[1.2fr_.8fr]"
        >
          <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-7 shadow-sm backdrop-blur dark:border-rose-500/20 dark:bg-[#1c1c21]/80">
            <div className="flex flex-wrap items-center gap-2">
              <Badge>
                <MapPin className="mr-1 h-3.5 w-3.5" />
                {profile.location}
              </Badge>
              <Badge>Open to QA roles</Badge>
              <Badge>Ctrl/⌘ K</Badge>
            </div>

            <h1 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              I build{" "}
              <span className="text-rose-500 font-semibold">
                reliable products
              </span>{" "}
              through sharp testing, clear documentation, and pragmatic automation
            </h1>


            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {profile.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <a
                href={profile.links.email}
                className="inline-flex items-center gap-2 rounded-2xl bg-rose-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-rose-700"
              >
                <Mail className="h-4 w-4" />
                Contact
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { k: "Focus", v: "QA • UAT • Docs" },
                { k: "Strength", v: "Clarity + Structure" },
                { k: "Style", v: "Calm, fast, reliable" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/20"
                >
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{x.k}</p>
                  <p className="mt-1 text-sm font-semibold">{x.v}</p>
                </div>
              ))}
            </div>
          </div>

         <div className="rounded-3xl border border-rose-200/70 bg-rose-50/60 p-7 shadow-sm backdrop-blur dark:border-rose-500/20 dark:bg-[#1c1c21]/70">
          {/* FOTO */}
          <div className="mb-6 flex items-center gap-4">
            <div className="h-24 w-24 overflow-hidden rounded-3xl border-2 border-rose-300 shadow-[0_10px_35px_rgba(244,114,182,0.35)]">
              <img
                src={profilePhoto}
                alt="Silmi Rahmawati"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 75%" }}
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {profile.name}
              </p>
              <p className="text-xs text-rose-600">
                QA Engineer • System Implementor
              </p>
            </div>
          </div>


          <SectionTitle
            icon={CheckCircle2}
            title="Core Skills"
            subtitle="Practical skills I use to ship stable releases"
          />

            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-zinc-800 dark:text-zinc-200">{s.name}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{s.level}%</p>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-zinc-200 dark:bg-[#2a2a30]">
                    <div
                      className="h-2 rounded-full bg-rose-400 dark:bg-gradient-to-r dark:from-rose-400 dark:to-pink-400 transition-all duration-700"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-200 bg-white/70 p-4 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/20 dark:text-zinc-300">
              <p className="font-medium text-zinc-900 dark:text-zinc-50">
                Pro tip
              </p>
              <p className="mt-1">
                Press <span className="font-semibold">Ctrl/⌘ K</span> to open command palette like modern apps
              </p>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <SectionTitle
            icon={Briefcase}
            title="Selected Projects"
            subtitle="Filter by tag, open case studies, and explore highlights"
          />

          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={cx(
                  "rounded-2xl border px-3 py-1.5 text-xs shadow-sm transition",
                  activeTag === t
                  ? "border-rose-500 bg-rose-500 text-white shadow-sm"
                  : "border-rose-200 bg-white text-zinc-700 hover:bg-rose-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:bg-zinc-900/60"

                )}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {filteredProjects.map((p) => (
              <motion.button
                key={p.id}
                onClick={() => setSelected(p)}
                whileHover={{ y: -2 }}
                className="group rounded-3xl border border-rose-200/60 bg-rose-50/60 p-6 text-left shadow-sm backdrop-blur transition hover:bg-rose-50 dark:border-rose-500/20 dark:bg-[#1c1c21]/80 dark:hover:bg-[#26262c]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{p.year}</p>
                    <h3 className="mt-1 text-lg font-semibold text-zinc-900 transition group-hover:text-rose-600 group-hover:drop-shadow-sm dark:text-zinc-50">

                      {p.title}
                    </h3>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 text-zinc-400 opacity-0 transition group-hover:opacity-100" />
                </div>

                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {p.highlight}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </section>
          {/* Early / Academic Projects */}
          <section className="mt-14">
            <SectionTitle
              icon={Code2}
              title="Early / Academic Projects"
              subtitle="Foundational projects that shaped my technical skills"
            />

            <div className="rounded-3xl border border-rose-200/60 bg-rose-50/50 p-6 shadow-sm backdrop-blur dark:border-rose-900/40 dark:bg-zinc-900/30">
              <ul className="space-y-4">
                {otherProjects.map((p) => (
                  <li
                    key={p.title}
                    className="flex flex-col gap-1 rounded-2xl border border-rose-200 bg-white/70 px-4 py-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        {p.title}
                      </p>
                      <span className="text-xs text-rose-500 font-medium">
                        {p.tech}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400">
                      {p.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        {/* Experience */}
        <section id="experience" className="mt-12">
          <SectionTitle
            icon={Briefcase}
            title="Experience"
            subtitle="Timeline styled like a product changelog"
          />

          <div className="rounded-3xl border border-rose-200/60 bg-rose-50/60 p-6 shadow-sm backdrop-blur dark:border-rose-500/20 dark:bg-[#1c1c21]/70">
            <div className="space-y-8">
              {experience.map((e) => (
                <div key={e.title} className="relative pl-6">
                  <div className="absolute left-0 top-1 h-full w-px bg-rose-200 dark:bg-zinc-700/60" />
                  <div className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-rose-400 shadow-sm" />
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{e.time}</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {e.title}
                  </p>
                  <p className="text-sm text-rose-600 dark:text-rose-400">
                    {e.org}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-zinc-200/60 py-8 text-xs text-zinc-500 dark:border-zinc-800/70 dark:text-zinc-400 md:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. Built with React + Tailwind.</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPaletteOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200"
            >
              <Search className="h-4 w-4" />
              Command
            </button>
            <a
              href={profile.links.email}
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </footer>
      </main>

      {/* Project Case Study Modal */}
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title || ""}
      >
        {selected ? (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge>{selected.year}</Badge>
              {selected.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <div className="rounded-3xl border border-rose-200 bg-rose-50/60 p-5 dark:border-rose-900/40 dark:bg-rose-900/10">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Summary
              </p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                {selected.desc}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-rose-200 bg-white p-5 shadow-sm dark:border-rose-900/40 dark:bg-zinc-950">
                <p className="text-sm font-semibold">What I did</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {selected.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-rose-200 bg-white p-5 shadow-sm dark:border-rose-900/40 dark:bg-zinc-950">
                <p className="text-sm font-semibold">Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selected.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.demo ? (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-400 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  ) : null}

                  {selected.repo ? (
                    <a
                      href={selected.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100"
                    >
                      <Github className="h-4 w-4" />
                      Repository
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </div>
  );
}
