"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";
import {
  heroContent,
  systemArchitecture,
  benefitsData,
  zigZagFeatures,
  sensorVariants,
  orderInfo,
  sensorOrderTable,
  sensorOrderTableFooterNote,
  applications,
} from "./vibration-product-data";
import "./vibration-product.css";

function VariantCard({ variant, onKnowMore }) {
  const [expanded, setExpanded] = useState(false);
  const specs = expanded
    ? [...variant.preview, ...variant.full]
    : variant.preview;

  return (
    <div className="flex flex-col bg-white rounded-2xl sm:rounded-[2rem] border border-slate-200 h-full min-w-0 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative h-44 sm:h-52 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-4 sm:p-6 rdl-feature-media">
        <img
          src={variant.image}
          alt={variant.title}
          width={320}
          height={200}
          className="max-h-full max-w-full w-auto object-contain"
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-8 min-w-0">
        <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-slate-900">{variant.title}</h3>
        <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 flex-1">
          {specs.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-[13px] sm:text-sm text-gray-600 font-medium leading-snug break-words"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="text-sm font-bold text-blue-600 hover:text-blue-700 py-1 cursor-pointer"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
          <button
            type="button"
            onClick={() => onKnowMore?.(variant)}
            className="text-sm font-bold text-gray-700 hover:text-orange-600 py-1 cursor-pointer"
          >
            Know More →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VibrationProductClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successRedirectUrl, setSuccessRedirectUrl] = useState(null);

  const PRODUCT_NAME = "Vibration Sensor";

  const openDemoModal = () => {
    setSuccessRedirectUrl(null);
    setIsModalOpen(true);
  };

  const openKnowMoreModal = () => {
    setSuccessRedirectUrl(null);
    setIsModalOpen(true);
  };

  const openLinkedModal = (redirectUrl = null) => {
    setSuccessRedirectUrl(redirectUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessRedirectUrl(null);
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="text-center lg:text-left min-w-0 flex flex-col h-full lg:col-span-6">
              <div className="relative inline-flex max-w-full items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-5 sm:mb-8 self-center lg:self-start">
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="text-blue-700 font-black text-[10px] sm:text-xs capitalize tracking-[0.16em] sm:tracking-[0.2em] leading-tight">
                  {heroContent.badge}
                </span>
              </div>

              <h1 className="mb-4 sm:mb-6 break-words">
                <span className="block text-gray-900">
                  {heroContent.headline1}
                </span>
                <span className="block mt-1 text-[clamp(1.35rem,6vw,3.5rem)] text-blue-600 font-bold leading-tight">
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

            <div className="relative w-full min-w-0 flex flex-col justify-center h-full lg:col-span-6">
              <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-2 sm:p-6 shadow-md flex items-center justify-center">
                <img
                  src={heroContent.image}
                  alt="Industrial Vibration & Temperature Sensor Probe Unit"
                  className="w-full h-[200px] sm:h-auto object-contain max-h-[200px] sm:max-h-[360px] lg:max-h-[400px] mx-auto rounded-xl"
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
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZIG-ZAG FEATURES SECTION ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 block">
              Core Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Key Features & Technological <span className="text-blue-600">Advantages</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
            {zigZagFeatures.map((item, idx) => (
              <div
                key={item.title}
                className={`flex flex-col ${
                  item.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-5 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-[2rem] bg-white border border-slate-200 shadow-sm min-w-0`}
              >
                <div className="lg:w-1/2 w-full min-w-0">
                  <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 p-3 sm:p-4 flex items-center justify-center overflow-hidden rdl-feature-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full w-auto h-auto object-contain mx-auto rounded-xl"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 w-full text-center lg:text-left min-w-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 font-black text-base sm:text-lg mb-4 sm:mb-6 border border-blue-100">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEM ARCHITECTURE ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 block">
              Predictive Maintenance Topology
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Vibration Sensor Architecture & Predictive Maintenance Topology
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
              {systemArchitecture.subtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-8 shadow-sm max-w-5xl mx-auto overflow-hidden">
            <img
              src={systemArchitecture.image}
              alt="Vibration Sensor Architecture Diagram"
              className="w-full h-auto object-contain max-h-[550px] mx-auto rounded-xl"
              loading="lazy"
            />
            <p className="mt-6 text-center text-xs sm:text-sm text-slate-500 font-medium max-w-3xl mx-auto">
              {systemArchitecture.description}
            </p>
          </div>
        </div>
      </section>

      {/* ── BENEFITS SECTION ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 block">
                Key Value
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6">
                Operational Benefits
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-6 font-medium">
                {benefitsData.description}
              </p>

              <ul className="space-y-3">
                {benefitsData.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base font-semibold">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 p-4 sm:p-6 shadow-sm">
                <img
                  src={benefitsData.image}
                  alt="Industrial Vibration & Temperature Diagnostics"
                  className="w-full h-auto object-contain max-h-[420px] mx-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SENSOR HARDWARE VARIANTS ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 block">
              Sensor Range
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Vibration & Temperature Sensor Models
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sensorVariants.map((variant) => (
              <VariantCard
                key={variant.title}
                variant={variant}
                onKnowMore={openKnowMoreModal}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ORDER INFORMATION & DATASHEET TABLE ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 block">
              Ordering & Custom Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
              Order Information & Specification Comparison
            </h2>
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
              OEM, white-label, and custom sensor development tailored to your machine mounting and G-range needs.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {orderInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden p-6 flex flex-col shadow-sm"
              >
                <div className="h-40 bg-slate-50 rounded-xl mb-4 overflow-hidden flex items-center justify-center p-3">
                  <img
                    src={info.image}
                    alt={info.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>

          {/* DATASHEET ORDER TABLE */}
          <div className="bg-white rounded-2xl border-2 border-slate-300 overflow-hidden shadow-md max-w-6xl mx-auto">
            {/* Header Title Bar */}
            <div className="bg-[#1D5288] py-4 px-6 text-center">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-widest uppercase">
                ORDER TABLE
              </h3>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rdl-h-scroll">
              <table className="w-full text-center text-xs sm:text-sm border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-200 text-slate-800 font-bold border-b border-slate-300">
                    <th className="p-3 border-r border-slate-300">Model Part #</th>
                    <th className="p-3 border-r border-slate-300">Acceleration Range</th>
                    <th className="p-3 border-r border-slate-300">Sensor Type</th>
                    <th className="p-3 border-r border-slate-300">Supported Interface / Protocol</th>
                    <th className="p-3 border-r border-slate-300">Temperature Measurement</th>
                    <th className="p-3 border-r border-slate-300">Enclosure Rating</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300 text-slate-700 font-medium">
                  {sensorOrderTable.map((row) => (
                    <tr key={row.model} className="hover:bg-blue-50/60 transition-colors">
                      <td className="p-3 font-mono font-bold text-blue-600 border-r border-slate-300">{row.model}</td>
                      <td className="p-3 border-r border-slate-300 font-semibold">{row.range}</td>
                      <td className="p-3 border-r border-slate-300">{row.type}</td>
                      <td className="p-3 border-r border-slate-300 font-medium text-slate-900">{row.interface}</td>
                      <td className="p-3 border-r border-slate-300">{row.temperature}</td>
                      <td className="p-3 border-r border-slate-300">{row.protection}</td>
                      <td className="p-3">
                        <button
                          type="button"
                          onClick={openDemoModal}
                          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs transition-colors cursor-pointer whitespace-nowrap shadow-sm"
                        >
                          Inquire Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Note */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-left">
              <p className="text-xs sm:text-sm font-semibold text-slate-600 italic">
                {sensorOrderTableFooterNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAKE IN INDIA & WE SHIP WORLDWIDE BANNER ── */}
      <section className="py-6 sm:py-8 lg:py-10 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <img
            src="/products/rdl-product/make-in-india.jpg"
            alt="Make in India — We Ship Worldwide — Shipping Partners & Payment Methods"
            width={1240}
            height={700}
            className="w-full h-auto object-contain block mx-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* ── WHERE IT FITS / USE CASES ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase mb-2 block">
              WHERE IT FITS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Deploy across motors, pumps, gearboxes, and heavy machinery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {applications.map((app, idx) => (
              <div
                key={app}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm sm:text-base font-bold shadow-xs hover:border-blue-300 transition-colors"
              >
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-blue-600 font-extrabold text-xs sm:text-sm flex items-center justify-center border border-blue-100 shrink-0">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <span className="leading-snug">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="py-12 lg:py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="mb-4 sm:mb-6 text-white font-extrabold text-2xl sm:text-3xl lg:text-4xl">
            Ready to Enable Predictive Condition Monitoring?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-blue-100 font-medium leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            Continuously track vibration telemetry and eliminate unexpected equipment breakdown.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={openDemoModal}
              className="press-illusion-btn-orange text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base inline-flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
            >
              Contact Sales
            </button>
            <button
              type="button"
              onClick={() =>
                openLinkedModal("https://rdltech.in/become-a-member")
              }
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3.5 sm:py-4 px-8 sm:px-10 rounded-lg transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base cursor-pointer"
            >
              Become a Dealer
            </button>
          </div>
        </div>
      </section>

      {/* ── CONTACT MODAL WITH ALWAYS VIBRATION SENSOR PRE-SELECTION ── */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={closeModal}
        preSelectedType="Product"
        preSelectedItem={PRODUCT_NAME}
        successRedirectUrl={successRedirectUrl}
      />
    </div>
  );
}
