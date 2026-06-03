"use client";

import { useState } from "react";

export default function TestimonialGrid({ testimonials }) {
  const [activeTestimonial, setActiveTestimonial] = useState(null);

  // Close modal when clicking outside or pressing close button
  const closeModal = () => setActiveTestimonial(null);

  return (
    <>
      <section className="py-20 px-4 md:px-8 xl:px-12 relative flex-1">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px] grid-flow-row-dense">
            {testimonials.map((t) => (
              <div
                key={t.id}
                onClick={() => {
                  if (!t.youtubeId) {
                    setActiveTestimonial(t);
                  }
                }}
                className={`group relative overflow-hidden bg-slate-200 ${t.youtubeId ? "" : "cursor-pointer"} rounded-xl ${t.colSpan} ${t.rowSpan}`}
              >
                {t.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${t.youtubeId}?rel=0`}
                    title={t.name}
                    className="w-full h-full object-cover border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                )}

                <div
                  className={`absolute inset-0 pointer-events-none bg-gradient-to-t ${t.gradientColor} via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                />

                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-0 text-white pointer-events-none">
                  <h3 className="mb-1">
                    {t.name}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-white/80 leading-snug drop-shadow-md">
                    {t.role},{" "}
                    <span className="font-semibold text-white/95">
                      {t.company}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal Popup ── */}
      {activeTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:py-12 sm:px-6 z-[9999]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row transform transition-all animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Left Image Section */}
            <div className="w-full md:w-2/5 h-64 md:h-auto shrink-0 relative">
              <img
                src={activeTestimonial.image}
                className="w-full h-full object-cover"
                alt={activeTestimonial.name}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${activeTestimonial.gradientColor} via-transparent opacity-60 pointer-events-none`}
              />
            </div>

            {/* Right Text Section */}
            <div className="flex flex-col p-8 md:p-12 w-full">
              <div className="mb-8">
                <div className="w-10 h-10 mb-4 text-emerald-500 opacity-20">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-slate-600 text-lg leading-relaxed md:text-xl relative font-medium whitespace-pre-wrap">
                  {activeTestimonial.text ||
                    "I had the pleasure of working with Isarva Infotech for the development of our website, and I cannot express enough how impressed I am with their exceptional service."}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-slate-100 shadow-sm md:hidden">
                  <img
                    src={activeTestimonial.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div>
                  <h3 className="text-slate-900">
                    {activeTestimonial.name}
                  </h3>
                  <p className="text-emerald-600 font-medium">
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
