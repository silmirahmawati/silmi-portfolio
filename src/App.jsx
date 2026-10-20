
import profilePhoto from "./assets/silmi.jpg";
import profileNavbar from "./assets/silmi-navbar.jpg";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Briefcase,
  Code2,
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

/* =========================================
   PROFILE
========================================= */

const profile = {
  name: "Silmi Rahmawati",

  role: "Software Quality Assurance",

  subtitle:
    "Manual Testing • UAT • Learning Test Automation",

  location: "Bandung, Indonesia",

  tagline:
    "I help build reliable software through thoughtful testing, clear documentation, and effective collaboration.",

  summary:
    "I'm a Software Quality Assurance professional with hands-on experience in web application testing, hospital information systems (SIMRS), and User Acceptance Testing (UAT). My work focuses on creating structured test scenarios and test cases, identifying defects, documenting findings, and collaborating with developers to improve software quality. With a background in web development, I understand both the technical and user-facing aspects of software. I'm currently expanding my skills in API testing, SQL, and test automation.",

  links: {
    linkedin:
      "https://www.linkedin.com/in/silmi-rahmawati-505269187/",

    github:
      "https://github.com/silmirahmawati",

    email:
      "mailto:rahmawatisilmi4@gmail.com",
  },
};

/* =========================================
   SELECTED PROJECTS
   ORIGINAL PROJECT DATA
========================================= */

const projects = [
  {
    id: "buku-tamu-frontend",
    title: "Digital Guest Book",
    year: "2022",
    tags: ["Frontend", "UI"],

    highlight:
      "Responsive guest book interface with form handling",

    desc:
      "A frontend web project for a digital guest book, focusing on responsive layout, form handling, and basic client-side validation.",

    bullets: [
      "Built responsive UI using JavaScript and HTML/CSS",
      "Implemented form input handling and validation",
      "Separated frontend logic from backend services",
    ],

    stack: ["JavaScript", "HTML", "CSS"],

    demo: "",

    repo:
      "https://github.com/silmirahmawati/buku-tamu-frontend",
  },

  {
    id: "responsive-ecommerce",
    title: "Responsive Web E-Commerce",
    year: "2023",
    tags: ["Frontend", "UI"],

    highlight:
      "Responsive e-commerce layout with product listing",

    desc:
      "A responsive e-commerce website focusing on layout, product presentation, and usability across different screen sizes.",

    bullets: [
      "Designed responsive layout for desktop and mobile",
      "Implemented product listing UI",
      "Focused on usability and clean visual structure",
    ],

    stack: ["HTML", "CSS"],

    demo: "",

    repo:
      "https://github.com/silmirahmawati/responsive-web-ecommerce",
  },

  {
    id: "book-marketplace",
    title: "Book Marketplace Website",
    year: "2023",
    tags: ["Frontend", "UI"],

    highlight:
      "Static book marketplace website with structured layout",

    desc:
      "A static book marketplace website showcasing product listing, content structure, and responsive web layout.",

    bullets: [
      "Built structured content layout for book listings",
      "Applied responsive design principles",
      "Focused on clean UI and readability",
    ],

    stack: ["HTML", "CSS"],

    demo: "",

    repo:
      "https://github.com/silmirahmawati/silmirahmawati-simii-book-store",
  },

  {
    id: "ml-portal",
    title: "Web Portal with Recommendation System",
    year: "2024",
    tags: ["ML", "NLP", "Flask"],

    highlight:
      "Personalized content delivery using ML-based recommendation",

    desc:
      "Developed a web portal integrating a machine learning recommendation system to personalize content based on user behavior and keyword associations.",

    bullets: [
      "Designed recommendation logic using Apriori & NLP",
      "Integrated ML pipeline into web portal",
      "Improved relevance through keyword-based association rules",
    ],

    stack: [
      "Python",
      "Flask",
      "NLP",
      "Apriori",
    ],

    demo: "",

    repo:
      "https://github.com/silmirahmawati/tugasAkhir-RekomendasiBerita",
  },

  {
    id: "qa-simrs",
    title: "SIMRS QA & Support Toolkit",
    year: "2025–2026",
    tags: ["QA", "UAT", "Bug Triage", "SQL"],

    highlight:
      "Reduced recurring issues with structured triage + test evidence",

    desc:
      "A lightweight toolkit and workflow for handling hospital tickets: reproducible steps, environment checks, SQL verification notes, and regression checklist per module.",

    bullets: [
      "Standardized bug report format (Steps, Actual, Expected, Impact, Evidence)",
      "Regression checklist per module (Billing, Pharmacy, Medical Record)",
      "Simple SLA + prioritization rules for faster handling",
    ],

    stack: [
      "Docs",
      "SQL",
      "Postman",
      "Excel/Sheets",
    ],

    demo: "",
    repo: "",
  },

  {
    id: "portfolio",
    title: "Advanced Portfolio Website",
    year: "2026",
    tags: ["Frontend", "UI", "Performance"],

    highlight:
      "Command palette + case study modal + project filtering",

    desc:
      "A fast portfolio template that feels like a product: keyboard navigation, clean UI, and structured case studies.",

    bullets: [
      "Cmd/Ctrl + K command palette",
      "Case study modal with highlights & stack",
      "Accessible, responsive, and optimized layout",
    ],

    stack: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],

    demo: "",

    repo:
      "https://github.com/silmirahmawati/silmi-portfolio",
  },

  {
    id: "katalon-automation",
    title: "Web Automation Testing with Katalon",
    year: "2026",
    tags: ["QA", "Automation", "UI"],

    highlight:
      "Automated critical user flows to reduce repetitive manual testing",

    desc:
      "A web automation project using Katalon Studio to automate regression scenarios on web applications, focusing on critical user flows and UI stability.",

    bullets: [
      "Created automated test cases for core user journeys",
      "Implemented reusable test objects and test suites",
      "Improved regression efficiency and reduced manual testing effort",
    ],

    stack: [
      "Katalon Studio",
      "Groovy",
      "Web UI Automation",
    ],

    demo: "",

    repo:
      "https://github.com/silmirahmawati/katalon-web-automation",
  },

  {
    id: "playwright-automation",
    title: "QA Automation with Playwright",
    year: "2026",
    tags: ["QA", "Automation", "Performance"],

    highlight:
      "End-to-end UI automation with modern testing framework",

    desc:
      "An end-to-end web automation project using Playwright, focusing on reliable UI testing, test stability, and faster feedback in QA workflows.",

    bullets: [
      "Built end-to-end UI test scenarios using Playwright",
      "Handled selectors, waits, and assertions for stable automation",
      "Integrated automation tests into structured QA workflows",
    ],

    stack: [
      "Playwright",
      "JavaScript",
      "UI Automation",
    ],

    demo: "",

    repo:
      "https://github.com/silmirahmawati/qa-automation-playwright",
  },
];

/* =========================================
   EARLY / ACADEMIC PROJECTS
   ORIGINAL DATA
========================================= */

const otherProjects = [
  {
    title: "Book Marketplace",
    tech: "PHP • Laravel",
    note:
      "CRUD, authentication, transaction flow",
  },

  {
    title: "Logic Calculator",
    tech: "JavaScript",
    note:
      "Basic logic & conditional handling",
  },

  {
    title: "Digital Guest Book",
    tech: "React",
    note:
      "Form handling & state management",
  },

  {
    title: "Company Profile – Tasty Food",
    tech: "HTML • CSS • JS",
    note:
      "Responsive UI & content layout",
  },
];

/* =========================================
   PROFESSIONAL EXPERIENCE
========================================= */

const experience = [
  {
    time: "Sep 2026 – Present",

    title: "Software Quality Assurance",

    org: "PT Suteki Karya Nusantara",

    points: [
      "Design and execute functional test scenarios and test cases for web-based applications",
      "Validate application behavior against functional requirements and Figma designs",
      "Test form validation, user workflows, and role-based access permissions",
      "Document defects, expected results, actual results, and testing evidence using ClickUp",
      "Collaborate with the development team to identify issues and verify fixes",
    ],
  },

  {
    time: "Dec 2024 – Jan 2026",

    title: "System Implementor / QA (SIMRS)",

    org: "PT Terakorp Indonesia",

    points: [
      "Performed functional and regression testing across hospital information system (SIMRS) modules",
      "Supported User Acceptance Testing (UAT) with healthcare staff and system users",
      "Investigated reported issues, reproduced defects, and documented testing results",
      "Collaborated with developers and system administrators to validate fixes and support system implementation",
    ],
  },

  {
    time: "2023",

    title: "Web Development Intern",

    org: "CyberLabs",

    points: [
      "Developed and maintained web application features",
      "Worked with Laravel-based applications and frontend interface improvements",
    ],
  },
];

/* =========================================
   CORE SKILLS
========================================= */

const skills = [
  {
    name: "Manual & Functional Testing",

    desc:
      "Creating and executing structured test scenarios and test cases for web applications, including positive and negative testing.",
  },

  {
    name: "UAT & Regression Testing",

    desc:
      "Validating application workflows, expected behavior, and existing functionality through functional testing and User Acceptance Testing.",
  },

  {
    name: "Bug Reporting & Tracking",

    desc:
      "Reproducing defects, documenting actual versus expected results, collecting evidence, and tracking reported issues.",
  },

  {
    name: "API & Database Fundamentals",

    desc:
      "Working with REST API concepts, HTTP status codes, Postman, and basic SQL queries for data verification.",
  },

  {
    name: "QA Tools & Workflow",

    desc:
      "Using ClickUp for test documentation and issue tracking, with familiarity in Jira, Git, and collaborative software development workflows.",
  },

  {
    name: "Test Automation — Learning",

    desc:
      "Developing browser automation skills through Cypress practice and continued exploration of Playwright and Katalon Studio.",
  },
];

/* =========================================
   UTILITIES
========================================= */

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const stored = localStorage.getItem(key);

      return stored !== null
        ? JSON.parse(stored)
        : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        key,
        JSON.stringify(value)
      );
    } catch {
      // Ignore storage errors
    }
  }, [key, value]);

  return [value, setValue];
}

/* =========================================
   BADGE
========================================= */

function Badge({ children }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs text-rose-700 shadow-sm dark:border-rose-900/40 dark:bg-rose-900/20 dark:text-rose-200"
    >
      {children}
    </span>
  );
}

/* =========================================
   SECTION TITLE
========================================= */

function SectionTitle({
  icon: Icon,
  title,
  subtitle,
}) {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div
        className="mt-1 rounded-2xl border border-zinc-200/60 bg-white/60 p-2 shadow-sm backdrop-blur dark:border-zinc-700/60 dark:bg-zinc-900/40"
      >
        <Icon className="h-5 w-5 text-rose-500 dark:text-rose-400" />
      </div>

      <div>
        <h2
          className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className="mt-1 text-sm text-zinc-600 dark:text-zinc-400"
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

/* =========================================
   MODAL
========================================= */

function Modal({
  open,
  onClose,
  title,
  children,
}) {
  useEffect(() => {
    if (!open) return;

    const onEsc = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener(
      "keydown",
      onEsc
    );

    return () =>
      window.removeEventListener(
        "keydown",
        onEsc
      );
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="fixed inset-x-0 top-10 z-50 mx-auto w-[min(920px,92vw)] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-950"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.98,
            }}
          >
            <div
              className="flex items-center justify-between border-b border-zinc-200/60 px-6 py-4 dark:border-zinc-800/70"
            >
              <div className="min-w-0">
                <p
                  className="text-xs font-medium tracking-wide text-rose-500"
                >
                  Case Study
                </p>

                <h3
                  className="truncate text-lg font-semibold text-zinc-900 dark:text-zinc-50"
                >
                  <span
                    className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent"
                  >
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

            <div
              className="max-h-[78vh] overflow-auto px-6 py-6"
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* =========================================
   COMMAND PALETTE
========================================= */

function CommandPalette({
  open,
  onClose,
  actions,
}) {
  const inputRef = useRef(null);

  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;

    setQuery("");

    const timeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return () => clearTimeout(timeout);
  }, [open]);

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) return actions;

    return actions.filter(
      (action) =>
        action.label
          .toLowerCase()
          .includes(search) ||
        action.hint
          ?.toLowerCase()
          .includes(search)
    );
  }, [query, actions]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Command Palette"
    >
      <div
        className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900/40"
      >
        <Search className="h-4 w-4 text-zinc-500" />

        <input
          ref={inputRef}
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          placeholder="Type a command…"
          className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-500 dark:text-zinc-50"
        />

        <Badge>Esc</Badge>
      </div>

      <div className="mt-4 space-y-2">
        {filtered.map((action) => (
          <button
            key={action.label}
            onClick={() => {
              action.onSelect?.();
              onClose?.();
            }}
            className="group flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-left shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900/40"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className="text-sm font-medium text-zinc-900 dark:text-zinc-50"
                >
                  {action.label}
                </span>

                {action.hint && (
                  <span
                    className="truncate text-xs text-zinc-500 dark:text-zinc-400"
                  >
                    {action.hint}
                  </span>
                )}
              </div>
            </div>

            <ArrowRight
              className="h-4 w-4 text-zinc-400 opacity-0 transition group-hover:opacity-100"
            />
          </button>
        ))}

        {filtered.length === 0 && (
          <p
            className="text-sm text-zinc-600 dark:text-zinc-400"
          >
            No results
          </p>
        )}
      </div>
    </Modal>
  );
}

/* =========================================
   MAIN APP
========================================= */

export default function App() {
  const [dark, setDark] = useLocalStorage(
    "darkMode",
    true
  );

  const [activeTag, setActiveTag] =
    useState("All");

  const [selected, setSelected] =
    useState(null);

  const [paletteOpen, setPaletteOpen] =
    useState(false);

  const [photoSrc, setPhotoSrc] =
    useState(null);

  /* =====================================
     THEME
  ===================================== */

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  /* =====================================
     KEYBOARD SHORTCUT
  ===================================== */

  useEffect(() => {
    const onKeyDown = (event) => {
      const isK =
        event.key?.toLowerCase() === "k";

      if (
        (event.ctrlKey || event.metaKey) &&
        isK
      ) {
        event.preventDefault();
        setPaletteOpen(true);
      }

      if (event.key === "Escape") {
        setPhotoSrc(null);
      }
    };

    window.addEventListener(
      "keydown",
      onKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        onKeyDown
      );
  }, []);

  /* =====================================
     PROJECT TAGS
  ===================================== */

  const tags = useMemo(() => {
    const all = new Set();

    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        all.add(tag);
      });
    });

    return [
      "All",
      ...Array.from(all),
    ];
  }, []);

  /* =====================================
     FILTER PROJECTS
  ===================================== */

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.tags.includes(activeTag)
    );
  }, [activeTag]);

  /* =====================================
     COMMAND ACTIONS
  ===================================== */

  const actions = useMemo(
    () => [
      {
        label: "Go to Projects",

        hint:
          "Scroll to projects section",

        onSelect: () =>
          document
            .getElementById("projects")
            ?.scrollIntoView({
              behavior: "smooth",
            }),
      },

      {
        label: "Go to Experience",

        hint:
          "Scroll to experience section",

        onSelect: () =>
          document
            .getElementById("experience")
            ?.scrollIntoView({
              behavior: "smooth",
            }),
      },

      {
        label: "Email me",

        hint:
          profile.links.email.replace(
            "mailto:",
            ""
          ),

        onSelect: () => {
          window.location.href =
            profile.links.email;
        },
      },

      {
        label: "Open LinkedIn",

        hint:
          profile.links.linkedin,

        onSelect: () =>
          window.open(
            profile.links.linkedin,
            "_blank",
            "noopener,noreferrer"
          ),
      },

      {
        label: dark
          ? "Switch to Light Mode"
          : "Switch to Dark Mode",

        hint: "Toggle theme",

        onSelect: () =>
          setDark((value) => !value),
      },
    ],
    [dark, setDark]
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-white text-zinc-900 dark:from-[#141418] dark:via-[#141418] dark:to-[#141418] dark:text-zinc-100"
    >
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        actions={actions}
      />

      {/* TOP GRADIENT */}

      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-56 bg-gradient-to-b from-zinc-200/60 to-transparent blur-2xl dark:from-rose-500/10"
      />

      {/* =====================================
          NAVIGATION
      ===================================== */}

      <header
        className="sticky top-0 z-30 border-b border-zinc-200/60 bg-zinc-50/70 backdrop-blur dark:border-rose-500/20 dark:bg-[#141418]/70"
      >
        <div
          className="mx-auto flex w-[min(1100px,92vw)] items-center justify-between py-3"
        >
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={() =>
                setPhotoSrc(profileNavbar)
              }
              className="h-10 w-10 shrink-0 overflow-hidden rounded-2xl border border-rose-400 shadow-[0_4px_16px_rgba(244,114,182,0.35)] focus:outline-none"
              aria-label="Open profile photo"
            >
              <img
                src={profileNavbar}
                alt="Silmi Rahmawati"
                className="h-full w-full scale-150 cursor-zoom-in object-cover"
                style={{
                  objectPosition:
                    "center 50%",
                }}
              />
            </button>

            <div className="min-w-0 leading-tight">
              <p
                className="text-sm font-semibold"
              >
                {profile.name}
              </p>

              <p
                className="truncate text-xs text-zinc-600 dark:text-zinc-400"
              >
                {profile.role}
              </p>
            </div>
          </div>

          <div
            className="flex items-center gap-2"
          >
            <button
              onClick={() =>
                setPaletteOpen(true)
              }
              className="hidden items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-3 py-2 text-xs text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 md:flex"
            >
              <Search className="h-4 w-4" />

              Command

              <Badge>
                Ctrl/⌘ K
              </Badge>
            </button>

            <button
              onClick={() =>
                setDark((value) => !value)
              }
              className="rounded-2xl border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {dark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <main
        className="mx-auto w-[min(1100px,92vw)] pb-20 pt-10"
      >
        <motion.section
          initial={{
            opacity: 0,
            y: 14,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="grid gap-6 md:grid-cols-[1.2fr_.8fr]"
        >
          {/* LEFT SIDE */}

          <div
            className="rounded-3xl border border-rose-200/70 bg-white/80 p-7 shadow-sm backdrop-blur dark:border-rose-500/20 dark:bg-[#1c1c21]/80"
          >
            <div
              className="flex flex-wrap items-center gap-2"
            >
              <Badge>
                <MapPin
                  className="mr-1 h-3.5 w-3.5"
                />

                {profile.location}
              </Badge>

              <Badge>
                Software Quality Assurance
              </Badge>

              <Badge>
                Exploring Automation
              </Badge>
            </div>

            <h1
              className="mt-4 text-3xl font-medium tracking-tight md:text-4xl"
            >
              I help build{" "}
              <span
                className="font-semibold text-rose-500"
              >
                reliable software
              </span>{" "}
              through thoughtful testing,
              clear documentation, and
              effective collaboration.
            </h1>

            <div className="mt-4">
              <p
                className="text-sm font-semibold text-rose-600 dark:text-rose-400"
              >
                {profile.role}
              </p>

              <p
                className="mt-1 text-xs text-zinc-500 dark:text-zinc-400"
              >
                {profile.subtitle}
              </p>
            </div>

            <p
              className="mt-4 max-w-2xl text-sm leading-7 text-zinc-700 dark:text-zinc-300"
            >
              {profile.summary}
            </p>

            {/* FOCUS CARDS */}

            <div
              className="mt-5 grid gap-3 sm:grid-cols-3"
            >
              {[
                {
                  key: "Focus",
                  value:
                    "Software Quality & Functional Testing",
                },

                {
                  key: "Strength",
                  value:
                    "Test Design & Defect Analysis",
                },

                {
                  key: "Growth",
                  value:
                    "API, SQL & Test Automation",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/20"
                >
                  <p
                    className="text-xs text-zinc-500 dark:text-zinc-400"
                  >
                    {item.key}
                  </p>

                  <p
                    className="mt-2 text-sm font-semibold"
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CONTACT STATEMENT */}

            <section className="mt-6">
              <div
                className="rounded-3xl border border-rose-200/60 bg-gradient-to-br from-rose-50 to-white px-8 py-16 shadow-sm dark:border-rose-500/20 dark:from-[#1c1c21] dark:to-[#141418]"
              >
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text pb-4 text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-tight text-transparent"
                >
                  Let's build something
                  <br />
                  reliable together
                </motion.h2>

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="mt-4 h-1 w-32 origin-left rounded-full bg-gradient-to-r from-rose-500 to-pink-400"
                />

                <p
                  className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300"
                >
                  I'm interested in
                  opportunities to contribute
                  to software quality through{" "}
                  <span
                    className="font-semibold text-zinc-900 dark:text-zinc-50"
                  >
                    structured testing,
                    clear documentation,
                    and collaboration
                  </span>{" "}
                  with product and engineering
                  teams.
                </p>

                <div
                  className="mt-6 flex flex-wrap items-center gap-2"
                >
                  <a
                    href={profile.links.email}
                    className="inline-flex items-center gap-2 rounded-2xl bg-rose-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-rose-700"
                  >
                    <Mail className="h-4 w-4" />

                    Contact

                    <ArrowRight
                      className="h-4 w-4"
                    />
                  </a>

                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100"
                  >
                    <Linkedin className="h-4 w-4" />

                    LinkedIn
                  </a>

                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100"
                  >
                    <Github className="h-4 w-4" />

                    GitHub
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* =====================================
              RIGHT SIDE PROFILE & SKILLS
          ===================================== */}

          <div
            className="rounded-3xl border border-rose-200/70 bg-rose-50/60 p-7 shadow-sm backdrop-blur dark:border-rose-500/20 dark:bg-[#1c1c21]/70"
          >
            {/* PROFILE PHOTO */}

            <div
              className="mb-6 flex items-center gap-4"
            >
              <button
                onClick={() =>
                  setPhotoSrc(profilePhoto)
                }
                className="h-24 w-24 shrink-0 overflow-hidden rounded-3xl border-2 border-rose-300 shadow-[0_10px_35px_rgba(244,114,182,0.35)] focus:outline-none"
                aria-label="Open profile photo"
              >
                <img
                  src={profilePhoto}
                  alt="Silmi Rahmawati"
                  className="h-full w-full cursor-zoom-in object-cover"
                  style={{
                    objectPosition:
                      "center 75%",
                  }}
                />
              </button>

              <div className="min-w-0">
                <p
                  className="text-sm font-semibold text-zinc-900 dark:text-zinc-50"
                >
                  {profile.name}
                </p>

                <p
                  className="mt-1 text-xs text-rose-600 dark:text-rose-400"
                >
                  {profile.role}
                </p>

                <p
                  className="mt-1 text-xs text-zinc-500"
                >
                  Learning Test Automation
                </p>
              </div>
            </div>

            <SectionTitle
              icon={CheckCircle2}
              title="Core Skills"
              subtitle="Practical QA skills and continuous learning"
            />

            <div className="space-y-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/20"
                >
                  <p
                    className="text-sm font-semibold text-zinc-900 dark:text-zinc-50"
                  >
                    {skill.name}
                  </p>

                  <p
                    className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
                  >
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* =====================================
            SELECTED PROJECTS
            ORIGINAL SECTION
        ===================================== */}

        <section
          id="projects"
          className="mt-12 scroll-mt-24"
        >
          <SectionTitle
            icon={Briefcase}
            title="Selected Projects"
            subtitle="Filter by tag, open case studies, and explore highlights"
          />

          {/* FILTER BUTTONS */}

          <div
            className="mb-4 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() =>
                  setActiveTag(tag)
                }
                aria-pressed={
                  activeTag === tag
                }
                className={cx(
                  "rounded-2xl border px-3 py-1.5 text-xs shadow-sm transition",

                  activeTag === tag
                    ? "border-rose-500 bg-rose-500 text-white shadow-sm"
                    : "border-rose-200 bg-white text-zinc-700 hover:bg-rose-50 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200 dark:hover:bg-zinc-900/60"
                )}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* PROJECT CARDS */}

          <div
            className="grid gap-4 md:grid-cols-2"
          >
            {filteredProjects.map(
              (project) => (
                <motion.button
                  key={project.id}
                  onClick={() =>
                    setSelected(project)
                  }
                  whileHover={{
                    y: -2,
                  }}
                  className="group rounded-3xl border border-rose-200/60 bg-rose-50/60 p-6 text-left shadow-sm backdrop-blur transition hover:bg-rose-50 dark:border-rose-500/20 dark:bg-[#1c1c21]/80 dark:hover:bg-[#26262c]"
                >
                  <div
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <p
                        className="text-xs text-zinc-500 dark:text-zinc-400"
                      >
                        {project.year}
                      </p>

                      <h3
                        className="mt-1 text-lg font-semibold text-zinc-900 transition group-hover:text-rose-600 group-hover:drop-shadow-sm dark:text-zinc-50"
                      >
                        {project.title}
                      </h3>
                    </div>

                    <ArrowRight
                      className="mt-1 h-5 w-5 shrink-0 text-zinc-400 opacity-0 transition group-hover:opacity-100"
                    />
                  </div>

                  <p
                    className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    {project.highlight}
                  </p>

                  <div
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {project.tags.map(
                      (tag) => (
                        <Badge key={tag}>
                          {tag}
                        </Badge>
                      )
                    )}
                  </div>
                </motion.button>
              )
            )}
          </div>
        </section>

        {/* =====================================
            EARLY / ACADEMIC PROJECTS
            ORIGINAL SECTION
        ===================================== */}

        <section className="mt-14">
          <SectionTitle
            icon={Code2}
            title="Early / Academic Projects"
            subtitle="Foundational projects that shaped my technical skills"
          />

          <div
            className="rounded-3xl border border-rose-200/60 bg-rose-50/50 p-6 shadow-sm backdrop-blur dark:border-rose-900/40 dark:bg-zinc-900/30"
          >
            <ul className="space-y-4">
              {otherProjects.map(
                (project) => (
                  <li
                    key={project.title}
                    className="flex flex-col gap-1 rounded-2xl border border-rose-200 bg-white/70 px-4 py-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <div
                      className="flex flex-wrap items-center justify-between gap-2"
                    >
                      <p
                        className="text-sm font-semibold text-zinc-900 dark:text-zinc-50"
                      >
                        {project.title}
                      </p>

                      <span
                        className="text-xs font-medium text-rose-500"
                      >
                        {project.tech}
                      </span>
                    </div>

                    <p
                      className="text-xs text-zinc-600 dark:text-zinc-400"
                    >
                      {project.note}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        </section>

        {/* =====================================
            EXPERIENCE
            SUTEKI / TERAKORP / CYBERLABS
        ===================================== */}

        <section
          id="experience"
          className="mt-12 scroll-mt-24"
        >
          <SectionTitle
            icon={Briefcase}
            title="Experience"
            subtitle="Professional experience in software quality assurance, system implementation, and web development"
          />

          <div
            className="rounded-3xl border border-rose-200/60 bg-rose-50/60 p-6 shadow-sm backdrop-blur dark:border-rose-500/20 dark:bg-[#1c1c21]/70"
          >
            <div className="space-y-8">
              {experience.map(
                (item, index) => (
                  <div
                    key={`${item.org}-${index}`}
                    className="relative pl-6"
                  >
                    {/* TIMELINE LINE */}

                    <div
                      className="absolute left-0 top-1 h-full w-px bg-rose-200 dark:bg-zinc-700/60"
                    />

                    {/* TIMELINE DOT */}

                    <div
                      className="absolute left-[-5px] top-1 h-3 w-3 rounded-full bg-rose-400 shadow-sm"
                    />

                    {/* DATE */}

                    <p
                      className="text-xs text-zinc-500 dark:text-zinc-400"
                    >
                      {item.time}
                    </p>

                    {/* JOB TITLE */}

                    <p
                      className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50"
                    >
                      {item.title}
                    </p>

                    {/* COMPANY */}

                    <p
                      className="text-sm text-rose-600 dark:text-rose-400"
                    >
                      {item.org}
                    </p>

                    {/* EXPERIENCE DETAILS */}

                    <ul
                      className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      {item.points.map(
                        (point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex gap-2"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400"
                            />

                            <span>
                              {point}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================
            FOOTER
        ===================================== */}

        <footer
          className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-zinc-200/60 py-8 text-xs text-zinc-500 dark:border-zinc-800/70 dark:text-zinc-400 md:flex-row"
        >
          <p>
            © {new Date().getFullYear()}{" "}
            {profile.name}.
          </p>

          <div
            className="flex items-center gap-3"
          >
            <button
              onClick={() =>
                setPaletteOpen(true)
              }
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

      {/* =====================================
          PROJECT CASE STUDY MODAL
          ORIGINAL PROJECT DETAILS
      ===================================== */}

      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title || ""}
      >
        {selected && (
          <div className="space-y-6">
            {/* TAGS */}

            <div
              className="flex flex-wrap gap-2"
            >
              <Badge>
                {selected.year}
              </Badge>

              {selected.tags.map(
                (tag) => (
                  <Badge key={tag}>
                    {tag}
                  </Badge>
                )
              )}
            </div>

            {/* SUMMARY */}

            <div
              className="rounded-3xl border border-rose-200 bg-rose-50/60 p-5 dark:border-rose-900/40 dark:bg-rose-900/10"
            >
              <p
                className="text-sm font-semibold text-zinc-900 dark:text-zinc-50"
              >
                Summary
              </p>

              <p
                className="mt-2 text-sm text-zinc-700 dark:text-zinc-300"
              >
                {selected.desc}
              </p>
            </div>

            <div
              className="grid gap-4 md:grid-cols-2"
            >
              {/* WHAT I DID */}

              <div
                className="rounded-3xl border border-rose-200 bg-white p-5 shadow-sm dark:border-rose-900/40 dark:bg-zinc-950"
              >
                <p
                  className="text-sm font-semibold"
                >
                  What I did
                </p>

                <ul
                  className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  {selected.bullets.map(
                    (bullet, index) => (
                      <li
                        key={index}
                        className="flex gap-2"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-rose-400"
                        />

                        <span>
                          {bullet}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* STACK */}

              <div
                className="rounded-3xl border border-rose-200 bg-white p-5 shadow-sm dark:border-rose-900/40 dark:bg-zinc-950"
              >
                <p
                  className="text-sm font-semibold"
                >
                  Stack
                </p>

                <div
                  className="mt-3 flex flex-wrap gap-2"
                >
                  {selected.stack.map(
                    (technology) => (
                      <Badge
                        key={technology}
                      >
                        {technology}
                      </Badge>
                    )
                  )}
                </div>

                {/* PROJECT LINKS */}

                <div
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {selected.demo && (
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-400 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90"
                    >
                      <ExternalLink
                        className="h-4 w-4"
                      />

                      Live Demo
                    </a>
                  )}

                  {selected.repo && (
                    <a
                      href={selected.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-100"
                    >
                      <Github
                        className="h-4 w-4"
                      />

                      Repository
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* =====================================
          PROFILE PHOTO MODAL
      ===================================== */}

      <AnimatePresence>
        {photoSrc && (
          <>
            {/* OVERLAY */}

            <motion.div
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setPhotoSrc(null)
              }
            />

            {/* PHOTO PREVIEW */}

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Profile photo preview"
              className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-6"
              initial={{
                scale: 0.95,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
              }}
            >
              <img
                src={photoSrc}
                alt="Silmi Rahmawati profile"
                className="max-h-[90vh] max-w-[90vw] rounded-3xl object-contain shadow-2xl"
              />

              <button
                onClick={() =>
                  setPhotoSrc(null)
                }
                className="pointer-events-auto absolute right-6 top-6 rounded-full bg-black/60 p-2 text-white"
                aria-label="Close photo preview"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
