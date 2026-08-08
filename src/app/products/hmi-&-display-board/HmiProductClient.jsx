"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";
import {
  heroContent,
  hmiProductsList,
  digitalLogBook,
  scadaSupport,
  qualityChecklist,
  middleAdImage,
  displayBoards,
  downloads,
  sdks,
  YOUTUBE_TUTORIALS,
  partnershipImage,
} from "./hmi-product-data";
import "./hmi-product.css";

export default function HmiProductClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successRedirectUrl, setSuccessRedirectUrl] = useState(null);
  const [successDownloadUrl, setSuccessDownloadUrl] = useState(null);

  const CRM_PRODUCT_ITEM = "HMI & Display Board";

  const openDemoModal = () => {
    setSuccessRedirectUrl(null);
    setSuccessDownloadUrl(null);
    setIsModalOpen(true);
  };

  const openLinkedModal = (redirectUrl) => {
    setSuccessDownloadUrl(null);
    setSuccessRedirectUrl(redirectUrl);
    setIsModalOpen(true);
  };

  const openDownloadModal = (file) => {
    setSuccessRedirectUrl(null);
    setSuccessDownloadUrl(file.href);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessRedirectUrl(null);
    setSuccessDownloadUrl(null);
  };

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    root.classList.add("rdl-scroll-stable");
    root.style.scrollBehavior = "auto";
    root.style.overflowAnchor = "none";
    body.style.overflowX = "clip";

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    return () => {
      root.classList.remove("rdl-scroll-stable");
      root.style.scrollBehavior = "";
      root.style.overflowAnchor = "";
      body.style.overflowX = "";
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "auto";
      }
    };
  }, []);

  return (
    <div className="rdl-product-page min-h-screen bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-10 sm:pb-12 lg:pb-16 bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF]/60 to-white border-b border-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">

            <div className="text-center lg:text-left min-w-0 flex flex-col h-full lg:col-span-6">
              <div className="relative inline-flex max-w-full items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-5 sm:mb-8 self-center lg:self-start">
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="text-blue-700 font-black text-[10px] sm:text-xs capitalize tracking-[0.16em] sm:tracking-[0.2em] leading-tight">
                  {heroContent.badge}
                </span>
              </div>

              <h1 className="mb-4 sm:mb-6 break-words">
                <span className="block text-gray-900 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                  {heroContent.headline1}
                </span>
                <span className="block mt-1 text-[clamp(1.35rem,6vw,3.5rem)] text-blue-650 font-bold leading-tight">
                  {heroContent.headline2}
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto lg:mx-0">
                {heroContent.description}
              </p>

              <div className="mt-auto flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center">
                <button
                  type="button"
                  onClick={openDemoModal}
                  className="press-illusion-btn-orange text-white w-full sm:w-fit justify-center font-bold px-6 sm:px-8 py-3.5 sm:py-3 text-sm sm:text-base flex cursor-pointer gap-2 items-center"
                >
                  <span>Request a Demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4" aria-hidden="true">
                    <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative w-full min-w-0 flex flex-col h-full lg:col-span-6">
              <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 p-2">
                <img
                  src={heroContent.image}
                  alt="HMI & Display Board System Unit"
                  className="w-full h-auto object-contain rounded-lg"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="mt-auto pt-5 sm:pt-6 w-full flex flex-col items-center gap-3">
                <p className="text-xs sm:text-sm font-black tracking-[0.2em] text-blue-600 uppercase">
                  Partnership with
                </p>
                <div className="inline-flex items-center gap-4 sm:gap-5">
                  <div className="relative h-12 sm:h-14 w-[150px] sm:w-[190px] shrink-0">
                    <Image
                      src="/isarva New Logo.png"
                      alt="Isarva Infotech"
                      fill
                      sizes="190px"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="h-9 sm:h-10 w-px bg-slate-300 shrink-0" aria-hidden="true" />
                  <div className="relative h-12 w-12 sm:h-16 sm:w-16 shrink-0 rounded-full overflow-hidden">
                    <Image
                      src="/products/cloud-plc/rdl-logo.png"
                      alt="RDL Technologies"
                      fill
                      sizes="64px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HMI PRODUCTS SECTION ── */}
      <section className="py-12 lg:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">HMI Products</h2>
            <p className="mt-4 text-slate-500 text-sm sm:text-base lg:text-lg font-medium">
              Explore our primary Human Machine Interface industrial hardware configurations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {hmiProductsList.map((product) => (
              <div key={product.title} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-black text-slate-900 mb-6 text-center md:text-left">{product.title}</h3>
                
                <div className="relative w-full aspect-[4/3] bg-slate-50 rounded-2xl overflow-hidden mb-8 border border-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                  />
                </div>

                <ul className="space-y-3 text-sm sm:text-base text-gray-600 font-medium flex-1">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex gap-3">
                      <span className="text-blue-500 font-black shrink-0">•</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={openDemoModal}
                  className="press-illusion-btn-orange text-white w-full justify-center font-bold px-6 py-3.5 mt-8 text-sm sm:text-base flex cursor-pointer"
                >
                  Request Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZIG-ZAG FEATURE DETAILS ── */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32">

            {/* Row 1: Digital Log Book */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="lg:w-1/2 w-full">
                <div className="relative w-full rounded-3xl bg-slate-50 border border-slate-200 p-4 shadow-sm">
                  <img
                    src={digitalLogBook.image}
                    alt="Digital Log Book features map"
                    className="w-full h-auto object-contain rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">{digitalLogBook.title}</h2>
                <ul className="space-y-3.5 text-sm sm:text-base text-slate-600 font-medium">
                  {digitalLogBook.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-orange-500 font-black shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Row 2: Software & SCADA Support */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="lg:w-1/2 w-full">
                <div className="relative w-full rounded-3xl bg-slate-50 border border-slate-200 p-4 shadow-sm">
                  <img
                    src={scadaSupport.image}
                    alt="Wincc RT and EXOR JMobile SCADA integration mapping"
                    className="w-full h-auto object-contain rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 leading-snug">
                  {scadaSupport.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                  {scadaSupport.description}
                </p>
              </div>
            </div>

            {/* Row 3: Quality Inspection Checklist */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="lg:w-1/2 w-full">
                <div className="relative w-full rounded-3xl bg-slate-50 border border-slate-200 p-4 shadow-sm">
                  <img
                    src={qualityChecklist.image}
                    alt="Quality control parameters chart"
                    className="w-full h-auto object-contain rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">{qualityChecklist.title}</h2>
                <ul className="space-y-3.5 text-sm sm:text-base text-slate-600 font-medium">
                  {qualityChecklist.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-green-600 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Middle Ad Image banner */}
            <div className="w-full overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <img
                src={middleAdImage}
                alt="Product technical connection overview diagram"
                className="w-full h-auto object-contain block"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── INDUSTRY GRADE DISPLAY BOARDS ── */}
      <section className="py-12 lg:py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{displayBoards.title}</h2>
            <p className="mt-4 text-slate-500 text-sm sm:text-base lg:text-lg font-medium">
              High-durability displays for real-time tracking, Andon systems, and process parameters monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayBoards.items.map((board) => (
              <div key={board.title} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-slate-800 mb-4">{board.title}</h3>
                <div className="relative w-full aspect-[4/3] bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                  <img
                    src={board.image}
                    alt={board.title}
                    className="w-full h-full object-contain p-2"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP PROGRAM ── */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="mb-6 sm:mb-8 text-3xl font-extrabold text-gray-900">
            Partnership Program
          </h2>
          <button
            type="button"
            onClick={() => openLinkedModal("https://rdltech.in/become-a-member")}
            className="inline-flex items-center justify-center border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition-colors duration-200 font-semibold px-10 py-3.5 rounded-full text-sm sm:text-base mb-10"
          >
            Become a Dealer
          </button>

          <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
            <img
              src={partnershipImage}
              alt="We Ship Worldwide — shipping partners and payment methods"
              className="w-full h-auto object-contain block"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ── DOWNLOADS & SDKS ── */}
      <section className="pt-8 pb-12 sm:py-16 lg:pt-12 lg:pb-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
            <h6 className="text-orange-600 mb-3 font-bold tracking-wider uppercase text-sm">Resources</h6>
            <h2 className="mb-3 sm:mb-4 capitalize">Downloads & SDKs</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium leading-relaxed">
              Datasheets, manuals, pinmaps, and developer SDKs to get your HMI integration live faster.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <div className="rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 min-w-0 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-5 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">Downloads</h3>
                <a
                  href={YOUTUBE_TUTORIALS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-blue-650 hover:text-blue-700"
                >
                  Tutorials on YouTube →
                </a>
              </div>
              <ul className="space-y-2.5 sm:space-y-3">
                {downloads.map((file) => (
                  <li key={file.title}>
                    <button
                      type="button"
                      onClick={() => openDownloadModal(file)}
                      className="w-full text-left flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 transition-all min-w-0 cursor-pointer hover:shadow-sm"
                    >
                      <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-orange-50 text-orange-600 text-[10px] sm:text-xs font-black shrink-0">
                        {file.type}
                      </span>
                      <span className="text-[13px] sm:text-sm font-semibold text-gray-800 flex-1 leading-snug break-words min-w-0">
                        {file.title}
                      </span>
                      <span className="text-xs font-bold text-blue-650 shrink-0 hidden sm:inline">
                        Download
                      </span>
                      <span className="sm:hidden text-blue-600 shrink-0 text-lg leading-none" aria-hidden="true">
                        ↓
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-white p-4 sm:p-6 lg:p-8 min-w-0 shadow-sm">
              <h3 className="mb-5 sm:mb-6 text-lg sm:text-xl font-bold text-slate-800">SDK and APIs</h3>
              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {sdks.map((file) => (
                  <li key={file.title}>
                    <button
                      type="button"
                      onClick={() => openDownloadModal(file)}
                      className="w-full text-left flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 transition-all min-w-0 cursor-pointer hover:shadow-sm"
                    >
                      <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-blue-50 text-blue-600 text-[10px] sm:text-xs font-black shrink-0">
                        {file.type}
                      </span>
                      <span className="text-[13px] sm:text-sm font-semibold text-gray-800 flex-1 leading-snug break-words min-w-0">
                        {file.title}
                      </span>
                      <span className="text-xs font-bold text-blue-650 shrink-0 hidden sm:inline">
                        Download
                      </span>
                      <span className="sm:hidden text-blue-600 shrink-0 text-lg leading-none" aria-hidden="true">
                        ↓
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6">
                <h4 className="mb-2 font-bold text-slate-800">Shop HMI Controllers</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-4">
                  Browse and purchase HMI and Display board hardware directly from Research Design Lab.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    openLinkedModal(
                      "https://researchdesignlab.com"
                    )
                  }
                  className="press-illusion-btn-orange text-white w-full sm:w-fit justify-center font-bold px-6 py-3 text-sm inline-flex cursor-pointer gap-2 items-center"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT US CTA ── */}
      <section className="py-12 lg:py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h6 className="text-blue-305 mb-3 text-xs font-bold tracking-[0.18em] uppercase">Contact us</h6>
          <h2 className="mb-4 sm:mb-6 text-white text-3xl font-black">
            Drop us a line!
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 font-medium leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            Integrate the HMI and Display Board Controllers with your PLC, HMI, and SCADA setups for secure authorized hardware access. We love our customers, so feel free to visit during normal business hours.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={openDemoModal}
              className="press-illusion-btn-orange text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Contact Sales
            </button>
            <button
              type="button"
              onClick={() => openLinkedModal("https://rdltech.in/become-a-member")}
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3.5 sm:py-4 px-8 sm:px-10 rounded-lg transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base"
            >
              Become a Dealer
            </button>
          </div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={closeModal}
        preSelectedType="Product"
        preSelectedItem={CRM_PRODUCT_ITEM}
        successRedirectUrl={successRedirectUrl}
        successDownloadUrl={successDownloadUrl}
      />
    </div>
  );
}
