"use client";

import { useState, useEffect, useRef } from "react";
import Link from "../AppLink";
import ContactFormModal from "../ContactFormModal";

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const SS = "/products/lms-software/";

const LMS_CATS = [
  { id: "all", label: "All" },
  { id: "teach", label: "Teaching" },
  { id: "submit", label: "Submissions" },
  { id: "admin", label: "Admin" },
  { id: "platform", label: "Website" },
];

const LMS_MODULES = [
  { id: "dashboard", icon: "📊", cat: "platform", title: "Home screens", screenshot: "Dashboard.png", desc: "Students see due work and grades. Teachers see work waiting to be graded. Admins see how the site is doing.", bullets: ["Student: due work & grades", "Teacher: work to grade", "Admin: user & course counts"], color: "blue" },
  { id: "courses", icon: "📚", cat: "teach", title: "Courses", screenshot: "Courses.png", desc: "Create courses with names and descriptions. Add students and assign teachers to each course.", bullets: ["Create & edit courses", "Add students per course", "Assign teachers"], color: "emerald" },
  { id: "assignments", icon: "📝", cat: "teach", title: "Assignments", screenshot: "Assignments.png", desc: "Post instructions, due dates, and up to five attached files. Save as draft or publish right away.", bullets: ["Up to 5 attached files", "Due dates", "Draft or publish"], color: "violet" },
  { id: "file-submit", icon: "📤", cat: "submit", title: "File uploads", screenshot: "Submissions.png", desc: "Students upload PDFs, notebooks, zip files, and Word documents. Preview files in the browser.", bullets: ["PDF & image preview", "Zip, notebook, Office files", "Safe file storage"], color: "amber" },
  { id: "cloud-submit", icon: "☁️", cat: "submit", title: "Google Drive links", screenshot: "Submissions.png", desc: "Teachers share a folder link. Students upload there and paste the file link — no server size limits.", bullets: ["Drive, Dropbox, OneDrive", "One folder per assignment", "Upload file or paste link"], color: "cyan" },
  { id: "grading", icon: "✅", cat: "submit", title: "Grading", screenshot: "Submissions.png", desc: "Give scores out of 100, letter grades, written feedback, and ask students to resubmit if needed.", bullets: ["Number & letter grades", "Ask for resubmission", "Track resubmissions"], color: "green" },
  { id: "gradebook", icon: "📋", cat: "submit", title: "Gradebook", screenshot: "Gradebook.png", desc: "See all student scores across courses in one spreadsheet-style view.", bullets: ["All students in one view", "Filter by course", "Quick progress check"], color: "indigo" },
  { id: "reports", icon: "📈", cat: "admin", title: "Download reports", screenshot: "Reports.png", desc: "Download grades and course data as a CSV file for college records and offline use.", bullets: ["CSV grade download", "Ready for records", "Open in Excel"], color: "pink" },
  { id: "announcements", icon: "📢", cat: "teach", title: "Announcements", screenshot: "Announcements.png", desc: "Post news for one course or the whole college. Pin important posts. Send email alerts too.", bullets: ["Pin important posts", "One course or whole site", "Email alerts"], color: "orange" },
  { id: "qa", icon: "💬", cat: "teach", title: "Q&A board", screenshot: "Q&A.png", desc: "Students ask questions. Teachers, classmates, and admins can reply. Mark the best answer.", bullets: ["Question & answer threads", "Mark best answer", "Per course"], color: "teal" },
  { id: "calendar", icon: "📅", cat: "teach", title: "Calendar", screenshot: "Calendar.png", desc: "See all assignment due dates on one calendar for students and staff.", bullets: ["All due dates in one view", "For students & teachers", "Never miss a deadline"], color: "blue" },
  { id: "users", icon: "👥", cat: "admin", title: "User management", screenshot: "Users.png", desc: "Admins add students and teachers, set their role, and turn accounts on or off.", bullets: ["Add users by hand", "Set student or teacher role", "Turn accounts on/off"], color: "purple" },
  { id: "themes", icon: "🎨", cat: "platform", title: "8 color themes", screenshot: "Settings.png", desc: "Each user picks their own color theme — blue, green, amber, and five more.", bullets: ["8 color options", "Each user chooses their own", "Changes sidebar instantly"], color: "rose" },
  { id: "guide", icon: "📖", cat: "platform", title: "Built-in help guide", screenshot: "UserGuide.png", desc: "Help pages for students, teachers, and admins — opens in a new tab.", bullets: ["3 guides by user type", "Opens in new tab", "Ready on day one"], color: "#0ea5e9" },
  { id: "notifications", icon: "🔔", cat: "platform", title: "Notifications", screenshot: "Profile.png", desc: "Bell icon for alerts inside the site. Optional email for assignments, grades, and reminders.", bullets: ["Bell alerts in the site", "Email alerts optional", "Assignment & grade alerts"], color: "yellow" },
  { id: "security", icon: "🛡️", cat: "admin", title: "Access control", screenshot: "Users.png", desc: "Students only see their own courses. Teachers only see their classes. Files are kept secure.", bullets: ["Role-based access", "Students see own courses only", "Secure file access"], color: "slate" },
];

const LMS_CLOUD_STEPS = [
  { num: "01", title: "Teacher creates assignment", desc: "Sets a due date and shares a Google Drive folder link." },
  { num: "02", title: "Student uploads to Drive", desc: "Large zip files, notebooks, datasets — no size limit on the LMS." },
  { num: "03", title: "Student pastes the link", desc: "The website checks the link and saves the submission." },
  { num: "04", title: "Teacher grades the work", desc: "Give a score, write feedback, or ask the student to resubmit." },
];

const LMS_ROLES = [
  { id: "student", title: "Student view", screenshot: "Dashboard.png", summary: "Log in → open a course → submit work → check your grade.", steps: ["See your courses and due dates", "Upload a file or paste a Drive link", "Track status on home screen & calendar", "Read feedback and resubmit if asked", "Ask questions on the Q&A board"] },
  { id: "lecturer", title: "Teacher view", screenshot: "Gradebook.png", summary: "Create courses → add students → post assignments → grade work.", steps: ["Create courses and add students", "Post assignments with files or Drive links", "Attach instructions and set due dates", "Review uploads or open Drive links", "Post grades, news, and answer questions"] },
  { id: "admin", title: "Admin view", screenshot: "Users.png", summary: "Manage users, watch over courses, download reports.", steps: ["Create and manage user accounts", "Assign teachers to courses", "Monitor the site from admin home screen", "Download grade CSV files", "Turn off accounts without losing data"] },
];

const LMS_GALLERY = [
  { file: "Dashboard.png", label: "Dashboard" },
  { file: "Courses.png", label: "Courses" },
  { file: "Assignments.png", label: "Assignments" },
  { file: "Submissions.png", label: "Submissions" },
  { file: "Gradebook.png", label: "Gradebook" },
  { file: "Reports.png", label: "Reports" },
  { file: "Announcements.png", label: "Announcements" },
  { file: "Q&A.png", label: "Q&A Board" },
  { file: "Calendar.png", label: "Calendar" },
  { file: "Users.png", label: "User Admin" },
  { file: "Settings.png", label: "Settings & Themes" },
  { file: "UserGuide.png", label: "User Guide" },
  { file: "Profile.png", label: "Profile" },
];

const THEME_CHIPS = [
  { id: "classic", label: "Original ISARVA", gradient: "from-blue-500 to-blue-700" },
  { id: "amber",   label: "Executive Amber", gradient: "from-amber-400 to-amber-600" },
  { id: "ocean",   label: "Ocean Teal",       gradient: "from-teal-400 to-teal-600" },
  { id: "forest",  label: "Forest Green",     gradient: "from-green-400 to-green-600" },
  { id: "violet",  label: "Royal Violet",     gradient: "from-purple-400 to-purple-600" },
  { id: "indigo",  label: "Deep Indigo",      gradient: "from-indigo-400 to-indigo-600" },
  { id: "rose",    label: "Executive Rose",   gradient: "from-pink-400 to-pink-600" },
  { id: "cyan",    label: "Sky Cyan",         gradient: "from-cyan-400 to-cyan-600" },
];

/* ─────────────────────────────────────────────────────────────
   STAT COUNTER
───────────────────────────────────────────────────────────── */
function useCounter(target, started) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    const dur = 1400;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target]);
  return val;
}

/* ─────────────────────────────────────────────────────────────
   MODULE EXPLORER
───────────────────────────────────────────────────────────── */
function ModuleExplorer({ onDemo }) {
  const [activeCat, setActiveCat] = useState("all");
  const [activeIdx, setActiveIdx] = useState(0);
  const [tourPaused, setTourPaused] = useState(false);
  const timerRef = useRef(null);
  const shellRef = useRef(null);

  const filtered = activeCat === "all" ? LMS_MODULES : LMS_MODULES.filter(m => m.cat === activeCat);
  const activeModule = LMS_MODULES[activeIdx] || LMS_MODULES[0];

  const resetTimer = () => {
    clearInterval(timerRef.current);
    if (!tourPaused) {
      timerRef.current = setInterval(() => {
        setActiveIdx(prev => (prev + 1) % LMS_MODULES.length);
        setActiveCat("all");
      }, 5500);
    }
  };

  const handleTabClick = (idx, e) => {
    setActiveIdx(idx);
    setActiveCat("all");
    resetTimer();
    if (e && e.currentTarget) {
      e.currentTarget.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  useEffect(() => { resetTimer(); return () => clearInterval(timerRef.current); }, [tourPaused]);

  // Localized horizontal scroll sync for mobile viewports
  useEffect(() => {
    const scroller = document.querySelector("#lms-tabs-scroller");
    if (!scroller) return;
    const activeTab = scroller.querySelector('[data-active="true"]');
    if (activeTab) {
      const containerRect = scroller.getBoundingClientRect();
      const activeRect = activeTab.getBoundingClientRect();
      const targetScrollLeft = scroller.scrollLeft + (activeRect.left - containerRect.left) - (containerRect.width / 2) + (activeRect.width / 2);
      scroller.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth"
      });
    }
  }, [activeIdx]);

  // Color mapping to hex values with opacity for background glow
  const colorMap = {
    blue: "#2563eb",
    emerald: "#10b981",
    violet: "#8b5cf6",
    amber: "#f59e0b",
    cyan: "#06b6d4",
    green: "#22c55e",
    indigo: "#6366f1",
    pink: "#ec4899",
    orange: "#f97316",
    teal: "#14b8a6",
    purple: "#a855f7",
    rose: "#e11d48",
    slate: "#64748b",
    yellow: "#eab308"
  };

  const activeColorHex = colorMap[activeModule.color] || "#2563eb";

  return (
    <section id="features" className="py-12 lg:py-16 overflow-hidden relative" style={{ background: "linear-gradient(180deg, #d4f4dd 0%, #e8faf0 40%, #f4fff8 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-[#0a0a0a] mb-3 capitalize">
            All features in <span className="text-emerald-500">one place</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base font-medium">16 built-in tools — auto-plays or tap any feature to explore.</p>
        </div>

        {/* ── MOBILE LAYOUT (< lg) ────────────────────────────────── */}
        <div className="lg:hidden">

          {/* Horizontal scrolling feature chips — top navigation */}
          <div id="lms-tabs-scroller" className="flex gap-2 overflow-x-auto pb-3 no-scrollbar mb-4">
            {LMS_MODULES.map((m, i) => (
              <button
                key={m.id}
                onClick={(e) => handleTabClick(i, e)}
                data-active={i === activeIdx}
                className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl text-[12px] font-semibold transition-all duration-200 cursor-pointer border whitespace-nowrap ${
                  i === activeIdx ? "bg-blue-600 text-white border-blue-600 shadow" : "bg-white text-slate-600 border-slate-200"
                }`}
              >
                <span>{m.icon}</span>
                <span>{m.title}</span>
              </button>
            ))}
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {LMS_MODULES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIdx(i); setActiveCat("all"); resetTimer(); }}
                className={`rounded-full transition-all duration-300 cursor-pointer border-none ${i === activeIdx ? "w-5 h-2 bg-emerald-500" : "w-2 h-2 bg-slate-300"}`}
              />
            ))}
          </div>

          {/* Screenshot + details card */}
          <div className="relative rounded-[18px] overflow-hidden bg-white border border-slate-200 shadow-lg mb-4">
            <div className="relative bg-slate-50">
              <img
                key={activeModule.id}
                src={`${SS}${activeModule.screenshot}`}
                alt={activeModule.title}
                className="w-full h-auto block animate-[fadeIn_0.5s_ease-out]"
                style={{ maxHeight: 220, objectFit: "cover", objectPosition: "top left" }}
                loading="lazy"
              />
              {/* Prev / Next arrows */}
              <button
                onClick={() => { setActiveIdx(p => (p === 0 ? LMS_MODULES.length - 1 : p - 1)); resetTimer(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 shadow text-slate-700 text-sm font-bold cursor-pointer border-none backdrop-blur-sm"
              >‹</button>
              <button
                onClick={() => { setActiveIdx(p => (p + 1) % LMS_MODULES.length); resetTimer(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 shadow text-slate-700 text-sm font-bold cursor-pointer border-none backdrop-blur-sm"
              >›</button>
            </div>

            {/* Feature info */}
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{activeModule.icon}</span>
                <h3 className="font-display text-base font-bold text-slate-900">{activeModule.title}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-medium mb-3">{activeModule.desc}</p>
              <ul className="flex flex-col gap-2">
                {activeModule.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-[12px] text-slate-700 px-3 py-2 rounded-lg bg-slate-50 border border-slate-100">
                    <svg className="flex-shrink-0" width="14" height="14" fill="none" viewBox="0 0 20 20">
                      <path fill="#10b981" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Play/pause row */}
          <div className="flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-emerald-700">
              <span className={`w-1.5 h-1.5 rounded-full ${tourPaused ? "bg-slate-400" : "bg-emerald-500 animate-ping"}`} />
              {tourPaused ? "Paused" : "Auto tour"}
            </span>
            <button
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-white text-xs text-slate-500 cursor-pointer"
              onClick={() => setTourPaused(p => !p)}
            >{tourPaused ? "▶" : "⏸"}</button>
            <span className="text-[11px] text-slate-400">{activeIdx + 1} / {LMS_MODULES.length}</span>
          </div>
        </div>


        {/* ── DESKTOP LAYOUT (lg+) ────────────────────────────────── */}
        <div
          className="hidden lg:grid lg:grid-cols-[300px_1fr] gap-8 items-start"
          ref={shellRef}
        >
          {/* LEFT NAV */}
          <div className="rounded-[22px] p-5 flex flex-col bg-white border border-slate-200 shadow-md">
            {/* Category pills */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {LMS_CATS.map(cat => (
                <button
                  key={cat.id}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors duration-250 cursor-pointer border-none ${
                    activeCat === cat.id ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                  onClick={() => { setActiveCat(cat.id); resetTimer(); }}>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Module list */}
            <div className="flex flex-col gap-1 overflow-y-auto overflow-x-hidden max-h-[400px] pr-1.5 scrollbar-thin">
              {filtered.map(m => {
                const idx = LMS_MODULES.indexOf(m);
                const isActive = idx === activeIdx;
                return (
                  <button
                    key={m.id}
                    className={`flex items-center gap-3 w-full px-4 py-3 text-left rounded-xl transition-all duration-200 cursor-pointer ${
                      isActive ? "bg-blue-600 text-white shadow-md translate-x-1" : "bg-transparent text-slate-600 hover:bg-slate-50"
                    }`}
                    onClick={() => { setActiveIdx(idx); setActiveCat("all"); resetTimer(); }}>
                    <span className="text-lg">{m.icon}</span>
                    <span className="text-[13px] font-semibold leading-tight">{m.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Tour footer */}
            <div className="mt-5 pt-5 border-t border-slate-200">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest uppercase text-emerald-700">
                  <span className={`w-1.5 h-1.5 rounded-full ${tourPaused ? "bg-slate-400" : "bg-emerald-500 animate-ping"}`} />
                  Auto tour
                </span>
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-500 hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer"
                  onClick={() => setTourPaused(p => !p)}>
                  {tourPaused ? "▶" : "⏸"}
                </button>
              </div>
              <p className="font-display text-sm font-bold text-slate-900 mb-0.5">{activeModule.title}</p>
              <p className="text-[11px] font-semibold text-slate-500 mb-1">Feature {activeIdx + 1} of {LMS_MODULES.length}</p>
            </div>
          </div>

          {/* STAGE */}
          <div className="relative rounded-[22px] overflow-hidden bg-white border border-slate-200 shadow-lg">
            {/* Glow */}
            <div className="absolute inset-0 pointer-events-none transition-all duration-500"
              style={{ background: `radial-gradient(circle at 20% 0%, ${activeColorHex}12, transparent 65%)` }} />

            {/* Screenshot */}
            <div className="relative border-b border-slate-200 bg-slate-50">
              <img
                key={activeModule.id}
                src={`${SS}${activeModule.screenshot}`}
                alt={activeModule.title}
                className="w-full h-auto block animate-[fadeIn_0.5s_ease-out]"
                style={{ maxHeight: 380, objectFit: "cover", objectPosition: "top left" }}
                loading="lazy"
              />
            </div>

            {/* Meta */}
            <div className="p-6 md:p-8 grid gap-6 md:grid-cols-2 lg:gap-10 items-start">
              <div className="flex gap-5 items-start">
                <span className="text-3xl leading-none animate-[bounce_3.5s_ease-in-out_infinite]">{activeModule.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{activeModule.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{activeModule.desc}</p>
                </div>
              </div>
              <ul className="flex flex-col gap-2.5">
                {activeModule.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[13px] text-slate-700 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-100 animate-[slideIn_0.4s_ease-out_forwards]"
                    style={{ animationDelay: `${i * 0.07}s` }}>
                    <svg className="flex-shrink-0" width="16" height="16" fill="none" viewBox="0 0 20 20">
                      <path fill="#10b981" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CLOUD STEPS
───────────────────────────────────────────────────────────── */
function CloudSection() {
  const [activeStep, setActiveStep] = useState(0);
  const colRef = useRef(null);

  useEffect(() => {
    const col = colRef.current;
    if (!col) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let n = 0;
      const iv = setInterval(() => { setActiveStep(n); n++; if (n >= LMS_CLOUD_STEPS.length) clearInterval(iv); }, 900);
      obs.disconnect();
    }, { threshold: 0.35 });
    obs.observe(col);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="cloud" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-indigo-200" />
            <span className="text-[10px] font-black tracking-widest uppercase text-emerald-700">Large files</span>
            <span className="h-[1px] w-6 bg-indigo-200" />
          </div>
          <h2 className="mb-4 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Upload big files <span className="text-emerald-500">without filling your server</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base font-medium">Students upload to Google Drive and paste the link. Teachers open and review in one click.</p>
        </div>

        <div className="grid gap-8 items-center lg:grid-cols-[1fr_1.45fr] lg:gap-12">
          <div className="flex flex-col gap-3.5" ref={colRef}>
            {LMS_CLOUD_STEPS.map((s, i) => (
              <div
                key={i}
                className={`flex gap-5 p-5 rounded-[18px] border transition-all duration-300 cursor-pointer ${
                  i === activeStep
                    ? "border-emerald-200 bg-gradient-to-br from-white to-emerald-50/50 shadow-md translate-x-1.5"
                    : "border-slate-200 bg-white"
                }`}
                onMouseEnter={() => setActiveStep(i)}>
                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl text-white font-bold text-sm bg-gradient-to-br from-blue-600 to-blue-700 shadow-sm">
                  {s.num}
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="rounded-[22px] overflow-hidden bg-white border border-slate-200 shadow-lg transition-transform duration-500 perspective-1000 -rotate-y-2 hover:rotate-y-0">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="flex-1 ml-2 px-3 py-1 bg-white border border-slate-200 rounded-md text-[10px] text-slate-400 font-semibold tracking-tight truncate">
                  lms.isarvait.com — Submissions
                </span>
              </div>
              <img src={`${SS}Submissions.png`} alt="Cloud and file submissions" className="w-full h-auto block" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ROLES SECTION
───────────────────────────────────────────────────────────── */
function RolesSection() {
  const [activeRole, setActiveRole] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setActiveRole(r => (r + 1) % LMS_ROLES.length), 6500);
    return () => clearInterval(iv);
  }, []);

  const role = LMS_ROLES[activeRole];

  return (
    <section id="roles" className="py-12 lg:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-indigo-200" />
            <span className="text-[10px] font-black tracking-widest uppercase text-emerald-700">3 user types</span>
            <span className="h-[1px] w-6 bg-indigo-200" />
          </div>
          <h2 className="mb-4 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            A home screen for <span className="text-emerald-500">everyone</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base font-medium">Students, teachers, and admins each see only what they need.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {LMS_ROLES.map((r, i) => (
            <button
              key={r.id}
              className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-[13px] font-semibold transition-all duration-300 cursor-pointer border border-slate-200 shadow-sm ${
                i === activeRole
                  ? "bg-emerald-50 border-emerald-300 text-emerald-700 -translate-y-0.5"
                  : "bg-white text-slate-500 hover:bg-slate-50"
              }`}
              onClick={() => setActiveRole(i)}>
              <span className="font-display text-[10px] font-black text-blue-600">0{i + 1}</span>
              <span>{r.title.replace(" view", "")}</span>
            </button>
          ))}
        </div>

        {/* Stage */}
        <div className="rounded-[22px] overflow-hidden bg-white border border-slate-200 shadow-lg">
          <div key={role.id} className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] items-center animate-[slideIn_0.5s_ease-out_forwards]">
            <div className="p-8 md:p-10 flex flex-col justify-center text-center lg:text-left">
              <h3 className="font-display text-2xl font-black text-slate-900 mb-3">{role.title}</h3>
              <p className="text-slate-500 mb-8 text-[15px] font-medium leading-relaxed">{role.summary}</p>
              <ol className="flex flex-col gap-2 text-left">
                {role.steps.map((step, i) => (
                  <li key={i} className="flex gap-4 items-start text-sm text-slate-700 py-3 border-b border-slate-100">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-lg text-xs font-bold text-blue-600 bg-blue-50">
                      {i + 1}
                    </span>
                    <span className="font-semibold leading-normal">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-6">
              <img src={`${SS}${role.screenshot}`} alt={role.title} className="w-full h-auto rounded-2xl block shadow-md"
                style={{ maxHeight: 400, objectFit: "cover", objectPosition: "top left" }} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   GALLERY FILMSTRIP
───────────────────────────────────────────────────────────── */
function GallerySection({ activeModalIdx, setActiveModalIdx }) {
  const doubled = [...LMS_GALLERY, ...LMS_GALLERY];

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveModalIdx((prev) => (prev === 0 ? LMS_GALLERY.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveModalIdx((prev) => (prev === LMS_GALLERY.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="relative overflow-hidden bg-gradient-to-br from-sky-900 via-teal-900 to-indigo-950 py-12 lg:py-16">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_15%_20%,rgba(43,199,53,0.12),transparent)] md:bg-[radial-gradient(ellipse_60%_50%_at_15%_20%,rgba(43,199,53,0.12),transparent),radial-gradient(ellipse_50%_40%_at_85%_75%,rgba(37,99,235,0.14),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-emerald-400" />
            <span className="text-[10px] font-black tracking-widest uppercase text-emerald-400">Screenshots</span>
            <span className="h-[1px] w-6 bg-emerald-400" />
          </div>
          <h2 className="text-white mb-6 capitalize">
            See the website <span className="text-green-400">in action</span>
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base font-medium">Real screenshots from the live ISARVA LMS — every page your team will use.</p>
        </div>
      </div>
      <div className="relative z-10 overflow-hidden mt-4" style={{ maskImage: "linear-gradient(90deg, transparent, #000 4%, #000 96%, transparent)" }}>
        <div className="flex w-max animate-[scroll_100s_linear_infinite] hover:[animation-play-state:paused] py-8">
          {doubled.map((g, i) => {
            const originalIdx = i % LMS_GALLERY.length;
            return (
              <figure 
                key={i} 
                onClick={() => setActiveModalIdx(originalIdx)}
                className="flex-shrink-0 w-[280px] mr-5 rounded-[18px] overflow-hidden bg-white border border-white/10 shadow-xl transition-all duration-350 hover:scale-[1.04] hover:-translate-y-1.5 hover:border-green-400/50 hover:shadow-green-500/10 cursor-pointer"
              >
                <img src={`${SS}${g.file}`} alt={g.label} loading="lazy"
                  className="w-full aspect-video object-cover object-top border-b border-slate-100" />
                <figcaption className="px-3.5 py-3 text-[13px] font-semibold bg-white text-slate-800 flex items-center justify-between">
                  <span>{g.label}</span>
                  <span className="text-[10px] text-slate-400 font-bold">🔍 Zoom</span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal Slider */}
      {activeModalIdx !== null && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-4 animate-[fadeIn_0.25s_ease-out]"
          onClick={() => setActiveModalIdx(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setActiveModalIdx(null)} 
            className="absolute top-4 right-4 text-white hover:text-green-400 text-3xl font-light p-2 transition-colors cursor-pointer z-50"
            aria-label="Close modal"
          >
            &times;
          </button>

          {/* Slider Frame */}
          <div 
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="w-full flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-bold text-slate-500">ISARVA LMS &middot; {LMS_GALLERY[activeModalIdx].label}</span>
              </div>
              <span className="text-xs font-bold text-slate-400">
                {activeModalIdx + 1} / {LMS_GALLERY.length}
              </span>
            </div>

            {/* Image Slider Wrapper */}
            <div className="relative w-full flex items-center justify-center p-2 bg-slate-950/5">
              {/* Prev Button */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white text-2xl transition-all hover:scale-105 cursor-pointer z-30 shadow-lg"
              >
                &#10094;
              </button>

              {/* Slider image */}
              <div className="w-full flex justify-center py-4 px-2">
                <img 
                  src={`${SS}${LMS_GALLERY[activeModalIdx].file}`} 
                  alt={LMS_GALLERY[activeModalIdx].label}
                  className="max-h-[60vh] md:max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-md"
                />
              </div>

              {/* Next Button */}
              <button 
                onClick={handleNext}
                className="absolute right-4 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white text-2xl transition-all hover:scale-105 cursor-pointer z-30 shadow-lg"
              >
                &#10095;
              </button>
            </div>

            {/* Footer indicators */}
            <div className="w-full bg-slate-50 px-6 py-4 flex flex-col items-center gap-3">
              <p className="text-[13px] font-bold text-slate-800">{LMS_GALLERY[activeModalIdx].label}</p>
              <div className="flex gap-2 max-w-full overflow-x-auto py-1 scrollbar-none">
                {LMS_GALLERY.map((g, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveModalIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                      idx === activeModalIdx ? "bg-green-500 w-5" : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   THEMES SECTION
───────────────────────────────────────────────────────────── */
function ThemesSection() {
  const [selected, setSelected] = useState("classic");
  return (
    <section id="themes" className="py-12 lg:py-16 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[#0a0a0a] mb-6 capitalize">
            Pick your own <span className="text-emerald-500">colors</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base font-medium">8 color themes — each user can choose their favorite in Settings.</p>
        </div>
        <div className="grid gap-10 items-center lg:grid-cols-[1fr_1.45fr] lg:gap-16">
          <div className="grid grid-cols-2 gap-3.5">
            {THEME_CHIPS.map(t => (
              <button
                key={t.id}
                onClick={() => setSelected(t.id)}
                className={`aspect-[2.2] rounded-xl p-4 flex items-end border cursor-pointer transition-transform duration-250 hover:scale-[1.03] bg-gradient-to-br ${t.gradient} ${
                  selected === t.id ? "border-blue-600 shadow-md ring-2 ring-blue-600/30" : "border-slate-200 shadow-sm"
                }`}>
                <span className="text-[11px] font-semibold text-white tracking-wide" style={{ textShadow: "0 1px 3px rgba(0,0,0,.35)" }}>{t.label}</span>
              </button>
            ))}
          </div>
          <div className="rounded-[22px] overflow-hidden bg-white border border-slate-200 shadow-lg">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="flex-1 ml-2 px-3 py-1 bg-white border border-slate-200 rounded-md text-[10px] text-slate-400 font-semibold tracking-tight truncate">
                lms.isarvait.com/settings
              </span>
            </div>
            <img src={`${SS}Settings.png`} alt="Theme settings" className="w-full h-auto block" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   GO LIVE SECTION
───────────────────────────────────────────────────────────── */
const GOLIVE_STEPS = [
  { num: "01", title: "Add students", desc: "Admin creates accounts and puts students into courses." },
  { num: "02", title: "Add courses", desc: "Teachers add assignments, files, and due dates." },
  { num: "03", title: "Students submit", desc: "Students upload files or paste a Google Drive link. Q&A for questions." },
  { num: "04", title: "Teachers grade", desc: "Teachers give scores, comments, and ask for resubmission if needed." },
  { num: "05", title: "Download reports", desc: "Export grades as a CSV file for college records.", highlight: true },
];

function GoLiveSection() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.classList.add("visible"); } }, { threshold: 0.15 });
    cardRefs.current.forEach(c => c && obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="golive" className="py-12 lg:py-16 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-indigo-200" />
            <span className="text-[10px] font-black tracking-widest uppercase text-emerald-700">Getting started</span>
            <span className="h-[1px] w-6 bg-indigo-200" />
          </div>
          <h2 className="text-[#0a0a0a] mb-6 capitalize">
            Up and running in <span className="text-emerald-500">5 simple steps</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base font-medium">From first login to running assignments — a clear path for your college.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {GOLIVE_STEPS.map((s, i) => (
            <div key={i} ref={el => cardRefs.current[i] = el}
              className={`lms-reveal p-7 rounded-[22px] border shadow-sm transition-all duration-500 opacity-0 translate-y-5 hover:-translate-y-1 hover:shadow-md text-center flex flex-col items-center justify-center ${
                s.highlight
                  ? "bg-gradient-to-br from-emerald-50 to-blue-50/30 border-emerald-200"
                  : "bg-white border-slate-200"
              }`}
              style={{
                transitionDelay: `${i * 0.09}s`,
              }}>
              <div className="font-display text-4xl font-black leading-none mb-3.5 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent mx-auto">
                {s.num}
              </div>
              <h3 className="font-display text-sm font-bold text-slate-900 mb-1">{s.title}</h3>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   INTEGRATIONS
───────────────────────────────────────────────────────────── */
const INTEGRATIONS = [
  { icon: "📁", title: "Google Drive", desc: "Students submit large files via shared folders and links." },
  { icon: "☁️", title: "Dropbox / OneDrive", desc: "Also works with Dropbox and OneDrive for file links." },
  { icon: "✉️", title: "Email alerts", desc: "Sends emails for new assignments, grades, and reminders." },
  { icon: "🖥️", title: "Your own server", desc: "Runs on a Linux server — you control hosting and data." },
];
const TECH_PILLS = ["Laravel 13", "PHP 8.3+", "MySQL", "Tailwind CSS", "Alpine.js", "Vite"];

function IntegrationsSection() {
  const doubled = [...TECH_PILLS, ...TECH_PILLS, ...TECH_PILLS, ...TECH_PILLS, ...TECH_PILLS, ...TECH_PILLS, ...TECH_PILLS, ...TECH_PILLS];
  return (
    <section id="integrations" className="py-12 lg:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-[1px] w-6 bg-indigo-200" />
            <span className="text-[10px] font-black tracking-widest uppercase text-emerald-700">Technology</span>
            <span className="h-[1px] w-6 bg-indigo-200" />
          </div>
          <h2 className="text-[#0a0a0a] mb-6 capitalize">
            Works with your <span className="text-emerald-500">existing tools</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {INTEGRATIONS.map((c, i) => (
            <div key={i} className="p-6 rounded-xl bg-white border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md shadow-sm text-center flex flex-col items-center">
              <span className="block text-2xl mb-3 mx-auto">{c.icon}</span>
              <h4 className="font-display font-bold text-sm text-slate-900 mb-1">{c.title}</h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="overflow-hidden" style={{ maskImage: "linear-gradient(90deg,transparent,#000 4%,#000 96%,transparent)" }}>
          <div className="flex w-max animate-[marquee_100s_linear_infinite]">
            {doubled.map((t, i) => (
              <span key={i} className="flex-shrink-0 mr-2.5 px-4 py-2 rounded-full text-xs font-bold bg-blue-50 border border-blue-200 text-blue-700">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
export default function ProductDetailPremiumLMS({ product, relatedProducts, allProducts }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const [activeModalIdx, setActiveModalIdx] = useState(null);

  const c3 = useCounter(3, statsStarted);
  const c8 = useCounter(8, statsStarted);
  const c16 = useCounter(16, statsStarted);

  // Hero entrance
  useEffect(() => {
    const t1 = setTimeout(() => setHeroVisible(true), 200);
    const t2 = setTimeout(() => setStatsStarted(true), 1300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Reveal observer for all elements with .lms-reveal class
  useEffect(() => {
    const els = document.querySelectorAll(".lms-reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="bg-white overflow-x-hidden font-sans text-slate-700 leading-relaxed">
      {/* Dynamic Keyframes injected locally */}
      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(0,0) scale(1); }
          50%       { transform: translate(20px,-15px) scale(1.03); }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-12px) rotate(-1deg); }
        }
        @keyframes float-mockup {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-10px) rotate(0.3deg); }
        }
        @keyframes ring-hue {
          0%   { filter: hue-rotate(0deg); opacity: 0.7; }
          50%  { opacity: 1; }
          100% { filter: hue-rotate(360deg); opacity: 0.7; }
        }
        @keyframes pan {
          0%   { background-position: 0 0; }
          100% { background-position: 48px 48px; }
        }
        @keyframes shimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes border-shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        .animate-drift { animation: drift 20s ease-in-out infinite; }
        .animate-float-y { animation: float-y 3.5s ease-in-out infinite; }
        .animate-float-mockup { animation: float-mockup 4.5s ease-in-out infinite; }
        .animate-ring-hue { animation: ring-hue 8s linear infinite; }
        .animate-pan { animation: pan 24s linear infinite; }
        .animate-shimmer { animation: shimmer 4s linear infinite; }
        .animate-scroll { animation: scroll 100s linear infinite; }
        .animate-marquee { animation: marquee 100s linear infinite; }
        .animate-border-shimmer { animation: border-shimmer 5s linear infinite; }
        .visible { opacity: 1 !important; transform: translateY(0) !important; }

        /* Custom Scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 5px;
          height: 0px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 99px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent;
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="top" className="relative overflow-hidden pt-[116px] pb-12 lg:pb-16 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white border-b border-slate-100">
        {/* Grid BG */}
        <div className="absolute inset-0 pointer-events-none opacity-25 animate-pan"
          style={{ backgroundImage: "linear-gradient(rgba(37,99,235,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(37,99,235,.04) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

        {/* Floating blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[420px] h-[420px] bg-emerald-500/10 -top-[8%] -right-[4%] rounded-full filter blur-[90px] opacity-60 animate-drift" />
          <div className="absolute w-[360px] h-[360px] bg-blue-500/10 bottom-[25%] -left-[6%] rounded-full filter blur-[90px] opacity-60 animate-drift" style={{ animationDelay: "-7s" }} />
          <div className="absolute w-[280px] h-[280px] bg-orange-500/10 top-[45%] left-[45%] rounded-full filter blur-[90px] opacity-50 animate-drift" style={{ animationDelay: "-14s" }} />
        </div>

        {/* Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <span className="absolute w-3 h-3 bg-emerald-400 top-[18%] left-[8%] rounded-full filter blur-[1px] opacity-60 animate-float-y" />
          <span className="absolute w-2 h-2 bg-orange-400 top-[62%] left-[42%] rounded-full filter blur-[1px] opacity-60 animate-float-y" style={{ animationDelay: "-1.5s" }} />
          <span className="absolute w-2.5 h-2.5 bg-blue-500 top-[30%] right-[12%] rounded-full filter blur-[1px] opacity-60 animate-float-y" style={{ animationDelay: "-0.8s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm text-slate-500 mb-10">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/products" className="hover:text-emerald-600 transition-colors">Products</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-slate-700 font-medium">LMS Software</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
            {/* LEFT COPY */}
            <div className="text-center lg:text-left">
              <span
                className="inline-block px-4 py-2 rounded-full text-xs font-bold text-white mb-6 bg-gradient-to-r from-orange-500 to-amber-500 shadow-md transition-all duration-[750ms]"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(32px)",
                  boxShadow: "0 4px 14px rgba(255,76,0,.28)",
                }}>
                For schools &amp; colleges
              </span>

              <h1
                className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold text-[#000000] leading-[1] mb-6 transition-all duration-[750ms]"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(32px)",
                  transitionDelay: "90ms",
                }}>
                One place to run your{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                  entire college online
                </span>
              </h1>

              <p
                className="text-slate-500 text-base lg:text-lg font-medium leading-relaxed max-w-xl mb-8 transition-all duration-[750ms] mx-auto lg:mx-0"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(32px)",
                  transitionDelay: "180ms",
                }}>
                Courses, assignments, file uploads, grades, announcements, and student questions — all in one easy-to-use website.
              </p>

              <div
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 transition-all duration-[750ms]"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(32px)",
                  transitionDelay: "270ms",
                }}>
                <button onClick={() => setIsModalOpen(true)} className="press-illusion-btn-orange text-white w-fit font-bold px-8 py-3 text-base items-center space-x-2 flex transition-all duration-300">
                  <span>Contact ISARVA</span>
                  <svg width="14" height="7" viewBox="0 0 17 9" fill="currentColor"><path fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd" /></svg>
                </button>
                <a href="https://lms.isarvait.com" className="press-illusion-btn-green text-white w-fit font-bold px-8 py-3 text-base items-center space-x-2 flex transition-all duration-300" target="_blank" rel="noopener noreferrer">See live portal</a>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 transition-all duration-[750ms]"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transitionDelay: "360ms",
                }}>
                {[
                  { val: c3, label: "User roles" },
                  { val: c8, label: "Color themes" },
                  { val: c16, label: "Features", suffix: "+" },
                  { val: "∞", label: "Google Drive", pulse: true },
                ].map((s, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:-translate-y-1 transition-all duration-300">
                    <div
                      className={`font-display text-2xl font-black text-blue-600 leading-none ${
                        s.pulse ? "text-emerald-500 animate-[pulse_2.5s_ease-in-out_infinite]" : ""
                      }`}>
                      {s.val}{s.suffix || ""}
                    </div>
                    <div className="mt-1 text-[10px] font-bold text-slate-500 tracking-wide uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className={`relative hidden lg:block transition-all duration-[1100ms] ease-out ${
              heroVisible ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-[0.94]"
            }`}>
              {/* Floating tags */}
              <span className="absolute z-30 px-4 py-2 rounded-xl text-[11px] font-bold bg-white border border-emerald-200 shadow-md text-emerald-700 top-[-0.75rem] right-[2rem] animate-float-y">
                Google Drive ready
              </span>
              <span className="absolute z-30 px-4 py-2 rounded-xl text-[11px] font-bold bg-white border border-blue-200 shadow-md text-blue-600 bottom-[1.25rem] left-[-0.75rem] animate-float-y" style={{ animationDelay: "-1.8s" }}>
                Gradebook &amp; CSV
              </span>

              {/* Mock frame */}
              <div className="relative animate-float-mockup">
                {/* Ring */}
                <div className="absolute -inset-3 rounded-[32px] border-2 border-transparent bg-gradient-to-br from-blue-500/25 via-emerald-500/25 to-orange-500/20 bg-origin-border animate-ring-hue pointer-events-none z-0"
                  style={{ WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />

                <div className="relative z-10 rounded-[22px] overflow-hidden bg-white border border-slate-200 shadow-xl animate-[pulse_5s_ease-in-out_infinite]">
                  <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="flex-1 ml-2 px-3 py-1 bg-white border border-slate-200 rounded-md text-[10px] text-slate-400 font-semibold tracking-tight truncate">
                      lms.isarvait.com/dashboard
                    </span>
                  </div>
                  <img
                    src={`${SS}Dashboard.png`}
                    alt="ISARVA LMS Dashboard"
                    className="w-full h-auto block cursor-zoom-in"
                    loading="eager"
                    onClick={() => setActiveModalIdx(0)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAIN POINTS ───────────────────────────────────────── */}
      <section id="problems" className="py-12 lg:py-16 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-indigo-250" />
              <span className="text-[10px] font-black tracking-widest uppercase text-emerald-700">The problem</span>
              <span className="h-[1px] w-6 bg-indigo-250" />
            </div>
            <h2 className="mb-4 text-slate-900 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Email and WhatsApp can't run a <span className="text-emerald-500">college course</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base font-medium">Colleges outgrow shared folders and chat groups. ISARVA LMS puts everything in one organised website.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "📧", bg: "bg-red-50", title: "Lost in email", desc: "Assignments get buried in inboxes with no clear record of who submitted what." },
              { icon: "💾", bg: "bg-amber-50", title: "File size limits", desc: "Big project files are too large for the server — students need Google Drive instead." },
              { icon: "📊", bg: "bg-blue-50", title: "No shared grades", desc: "Teachers keep marks in separate spreadsheets with no shared gradebook." },
              { icon: "📢", bg: "bg-emerald-50", title: "Missed updates", desc: "Important news on WhatsApp gets lost — students never see it." },
            ].map((p, i) => (
              <article
                key={i}
                className="lms-reveal p-7 rounded-[22px] bg-white border border-slate-200 shadow-sm opacity-0 translate-y-6 transition-all duration-[650ms] hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-md text-center flex flex-col items-center"
                style={{ transitionDelay: `${i * 0.09}s` }}>
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-2xl mb-5 mx-auto ${p.bg}`}>{p.icon}</div>
                <h3 className="font-display text-[15px] font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULE EXPLORER ───────────────────────────────────── */}
      <ModuleExplorer onDemo={() => setIsModalOpen(true)} />

      {/* ── CLOUD / DRIVE ────────────────────────────────────── */}
      <CloudSection />

      {/* ── ROLES ────────────────────────────────────────────── */}
      <RolesSection />

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <GallerySection activeModalIdx={activeModalIdx} setActiveModalIdx={setActiveModalIdx} />

      {/* ── THEMES ───────────────────────────────────────────── */}
      <ThemesSection />

      {/* ── GO LIVE ──────────────────────────────────────────── */}
      <GoLiveSection />

      {/* ── INTEGRATIONS ─────────────────────────────────────── */}
      <IntegrationsSection />

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section id="cta" className="py-12 lg:py-16 bg-gradient-to-b from-emerald-50 to-emerald-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center p-8 sm:p-12 rounded-[28px] bg-white border border-emerald-100 shadow-xl relative overflow-hidden">
            {/* Shimmer Border */}
            <div className="absolute -inset-0.5 rounded-[29px] bg-gradient-to-r from-emerald-500 via-blue-600 to-orange-500 bg-[length:300%_100%] animate-border-shimmer opacity-45 -z-1" />
            <div className="absolute inset-0 bg-white rounded-[28px] -z-1" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-[1px] w-6 bg-indigo-200" />
                <span className="text-[10px] font-black tracking-widest uppercase text-emerald-700">Get in touch</span>
                <span className="h-[1px] w-6 bg-indigo-250" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                Ready to move your college online?
              </h2>
              <p className="max-w-md mx-auto mb-8 text-slate-500 text-[15px] font-medium leading-relaxed">
                ISARVA LMS is live and ready to use. Talk to our team about setup, colors, and hosting.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button onClick={() => setIsModalOpen(true)} className="press-illusion-btn-orange text-white w-fit font-bold px-8 py-3 text-base items-center space-x-2 flex transition-all duration-300">Contact ISARVA</button>
                <Link href="/products" className="press-illusion-btn-green text-white w-fit font-bold px-8 py-3 text-base items-center space-x-2 flex transition-all duration-300">More products</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Product"
        preSelectedItem="LMS Software"
      />
    </div>
  );
}
