"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Gauge,
  BookOpen,
  Shield,
  FilePlus,
  Folder,
  Briefcase,
  FolderOpen,
  ListChecks,
  ClipboardCheck,
  FileText,
  History,
  Users,
  UsersRound,
  FileSignature,
  Settings,
  QrCode,
  Check,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Search,
  X,
} from "lucide-react";
import {
  POSHACT_MODULES,
  POSHACT_CATEGORIES,
  POSHACT_CATEGORY_INFO,
} from "./poshact-modules";

const ICON_MAP = {
  gauge: Gauge,
  "book-open": BookOpen,
  "user-shield": Shield,
  "file-plus": FilePlus,
  folder: Folder,
  briefcase: Briefcase,
  "folder-open": FolderOpen,
  "list-checks": ListChecks,
  "clipboard-check": ClipboardCheck,
  "file-text": FileText,
  history: History,
  users: Users,
  "users-round": UsersRound,
  "file-signature": FileSignature,
  settings: Settings,
  "qr-code": QrCode,
};

const COMPACT_MAX = 4;

function ModuleIcon({ name, className = "w-4 h-4" }) {
  const Icon = ICON_MAP[name] || Gauge;
  return <Icon className={className} />;
}

export default function PoshactModuleExplorer({ jumpModuleId }) {
  const [category, setCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [switching, setSwitching] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filtered = useMemo(() => {
    if (category === "all") return POSHACT_MODULES;
    return POSHACT_MODULES.filter((m) => m.category === category);
  }, [category]);

  const isCompact = filtered.length > 0 && filtered.length <= COMPACT_MAX;
  const active = filtered[activeIndex];

  const selectModule = useCallback(
    (index) => {
      if (index < 0 || index >= filtered.length || index === activeIndex) {
        if (index !== activeIndex) setActiveIndex(index);
        return;
      }
      setSwitching(true);
      setTimeout(() => {
        setActiveIndex(index);
        setSwitching(false);
      }, 180);
    },
    [filtered.length, activeIndex]
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [category]);

  useEffect(() => {
    if (!jumpModuleId) return;
    setCategory("all");
    const idx = POSHACT_MODULES.findIndex((m) => m.id === jumpModuleId);
    if (idx >= 0) setActiveIndex(idx);
  }, [jumpModuleId]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    document.body.classList.add("lightbox-open");
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen]);

  const catInfo = POSHACT_CATEGORY_INFO[category] || POSHACT_CATEGORY_INFO.all;

  return (
    <section
      id="modules"
      className={`py-12 lg:py-16 poshact-section-bg section-modules ${isCompact ? "is-compact" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-10">
          <p className="text-xs font-bold capitalize tracking-widest text-indigo-300 mb-3">Module Explorer</p>
          <h2 className="text-white mb-3 capitalize">Every feature, one click away</h2>
          <p className="text-indigo-100/75 text-sm sm:text-base">
            Filter by role area, pick a module, and preview the screen. Tap the screenshot to enlarge.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6 lg:mb-8">
          {POSHACT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={`cat-pill px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition ${category === cat.id ? "is-active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div id="module-compact-bar" className="mb-6">
          <div className="module-compact-panel">
            <div className="mb-3">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <p className="text-xs font-bold capitalize tracking-wider text-indigo-300">{catInfo.title}</p>
                <span className="text-xs font-semibold text-indigo-300">
                  {filtered.length} module{filtered.length !== 1 ? "s" : ""}
                </span>
              </div>
              <p className="text-sm text-indigo-100/80 leading-snug">{catInfo.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {filtered.map((mod, i) => (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => selectModule(i)}
                  className={`module-compact-chip ${i === activeIndex ? "is-active" : ""}`}
                >
                  <ModuleIcon name={mod.icon} className="w-3.5 h-3.5" />
                  <span>{mod.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div id="module-layout" className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div id="module-sidebar-col" className="lg:col-span-5 xl:col-span-4">
            <div className="rounded-2xl border module-panel p-3 sm:p-4">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-semibold capitalize tracking-wider text-indigo-200/70">Select module</span>
                <span className="text-xs text-indigo-300 font-medium">
                  {filtered.length} module{filtered.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2">
                {filtered.map((mod, i) => (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => selectModule(i)}
                    className={`module-card text-left rounded-xl border p-3 ${i === activeIndex ? "is-active" : ""}`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="mod-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                        <ModuleIcon name={mod.icon} />
                      </span>
                      <span className="min-w-0">
                        <span className="mod-name block text-xs font-semibold truncate">{mod.name}</span>
                        <span className="mod-sub block text-[10px] truncate mt-0.5">{mod.section}</span>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div id="module-stage-col" className="lg:col-span-7 xl:col-span-8">
            {active && (
              <>
                <div className="rounded-3xl border border-indigo-100/80 glass-card stage-panel overflow-hidden bg-white">
                  <div className="px-4 py-3 flex items-center gap-3 border-b border-slate-200/80 bg-gradient-to-b from-slate-50 to-slate-100">
                    <div className="flex gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-red-400/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                      <span className="w-3 h-3 rounded-full bg-indigo-400/80" />
                    </div>
                    <div className="flex-1 hidden sm:block mx-2">
                      <div className="rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-xs text-slate-500 truncate">
                        {active.url}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setLightboxOpen(true)}
                      className="text-indigo-500 hover:text-indigo-700 p-1"
                      title="Expand screenshot"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="stage-shot-wrap block w-full relative group cursor-zoom-in"
                    aria-label="Expand screenshot"
                  >
                    <img
                      src={active.image}
                      alt={`${active.name} screenshot`}
                      className={`stage-img ${switching ? "is-switching" : ""}`}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-4">
                      <span className="rounded-full bg-white/95 backdrop-blur px-4 py-2 text-xs text-slate-700 font-medium border border-slate-200 shadow-sm inline-flex items-center gap-2">
                        <Search className="w-3.5 h-3.5 text-indigo-600" />
                        Click to enlarge
                      </span>
                    </div>
                  </button>

                  <div className={`p-6 sm:p-8 border-t border-slate-100 stage-content ${switching ? "is-switching" : ""}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[10px] font-bold capitalize tracking-widest text-indigo-600">{active.section}</span>
                      <span className="text-[10px] font-semibold capitalize tracking-wider text-slate-500 px-2 py-0.5 rounded-full border border-slate-200 bg-slate-50">
                        {active.categoryLabel}
                      </span>
                    </div>
                    <h3 className="text-slate-900 mb-3">{active.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-5 text-sm sm:text-base">{active.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {active.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 gap-3">
                  <button
                    type="button"
                    onClick={() => selectModule((activeIndex - 1 + filtered.length) % filtered.length)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 sm:px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-indigo-200 hover:bg-indigo-50 transition shadow-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>
                  <span className="text-xs text-indigo-200/70 font-medium text-center">
                    {activeIndex + 1} / {filtered.length} — {active.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => selectModule((activeIndex + 1) % filtered.length)}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 sm:px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-indigo-200 hover:bg-indigo-50 transition shadow-sm"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {lightboxOpen && active && (
        <div
          className="poshact-lightbox fixed inset-0 z-[100] bg-white/85 backdrop-blur-md opacity-100 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center shadow-sm z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={active.image}
            alt={`${active.name} full screenshot`}
            className="max-w-full max-h-[90vh] w-auto h-auto rounded-xl shadow-2xl object-contain relative z-[1]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
