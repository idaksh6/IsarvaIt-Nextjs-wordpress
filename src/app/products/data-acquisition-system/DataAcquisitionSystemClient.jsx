"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";
import {
  heroContent,
  zigZagFeatures,
  applications,
  testRigModels,
  environmentModels,
  solarModel,
  boilerModel,
  KNOW_MORE_URL,
} from "./data-acquisition-system-data";
import "./data-acquisition-system.css";

export default function DataAcquisitionSystemClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successRedirectUrl, setSuccessRedirectUrl] = useState(null);
  const [successDownloadUrl, setSuccessDownloadUrl] = useState(null);

  const CRM_PRODUCT_ITEM = "Data Acquisition System";

  const openDemoModal = () => {
    setSuccessRedirectUrl(null);
    setSuccessDownloadUrl(null);
    setIsModalOpen(true);
  };

  const openKnowMoreModal = () => {
    setSuccessDownloadUrl(null);
    setSuccessRedirectUrl(KNOW_MORE_URL);
    setIsModalOpen(true);
  };

  const openLinkedModal = (redirectUrl) => {
    setSuccessDownloadUrl(null);
    setSuccessRedirectUrl(redirectUrl);
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
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-10 sm:pb-12 lg:pb-16 bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF]/60 to-white border-b border-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 lg:items-stretch">
            <div className="text-center lg:text-left min-w-0 flex flex-col h-full">
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

              <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto lg:mx-0">
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
                <button
                  type="button"
                  onClick={openKnowMoreModal}
                  className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 sm:px-8 py-3.5 sm:py-3 text-sm sm:text-base rounded-xl border border-slate-200 cursor-pointer text-center w-full sm:w-auto"
                >
                  Know More →
                </button>
              </div>
            </div>

            <div className="relative w-full min-w-0 flex flex-col h-full">
              <div className="relative w-full h-auto sm:flex-1 overflow-hidden rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center min-h-[240px] sm:min-h-[340px]">
                <img
                  src="/products/rdl-product/DAS with Display.png"
                  alt="Data Acquisition System with Display"
                  className="w-full h-full object-cover"
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

      {/* Key Capabilities */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
            <h6 className="text-blue-600 mb-3">Key Capabilities</h6>
            <h2 className="mb-3 sm:mb-4 capitalize">
              Engineered for <span className="text-blue-600">Excellence</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Industrial-grade 32" to 85" SAMSUNG Display, 64-channel configurable logging, built-in Windows 11 Industrial PC, and Modbus/RS485 networking.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
            {zigZagFeatures.map((feature, idx) => (
              <div
                key={feature.title}
                className={`flex flex-col ${
                  feature.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-5 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-[2rem] bg-white border border-slate-200 min-w-0`}
              >
                <div className="lg:w-1/2 w-full min-w-0">
                  <div className="rdl-feature-media relative w-full rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 p-2 sm:p-3 lg:p-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                      loading={idx < 3 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={idx === 0 ? "high" : "auto"}
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 w-full text-center lg:text-left min-w-0">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 text-blue-600 font-black text-base sm:text-lg mb-4 sm:mb-6 border border-blue-100">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Applications */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="mb-3 sm:mb-4 capitalize leading-[1.25] text-3xl sm:text-4xl font-extrabold text-slate-900">
              Applications
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Real-time monitoring across process plants, environmental setups, solar grids, and boiler water systems.
            </p>
          </div>

          {/* Full-width visual banner */}
          <div className="rdl-apps-visual mb-8 sm:mb-10 overflow-hidden rounded-2xl sm:rounded-[1.75rem] border border-slate-200 leading-[0]">
            <img
              src="/products/rdl-product/das-boiler-water.jpg"
              alt="DAS Boiler & Water Monitoring Display"
              width={1400}
              height={545}
              className="block w-full h-auto"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Application cards sub-header */}
          <div className="mb-5 sm:mb-6 text-center">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.18em] text-blue-600 uppercase">
              WHERE IT FITS
            </p>
            <p className="mt-1 text-sm sm:text-base font-semibold text-gray-800">
              Deploy across industrial plants, utility, and SCADA environments
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {applications.map((app, idx) => (
              <div
                key={app}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 hover:border-blue-200 transition-colors"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 text-xs font-black">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 pt-1">
                  <p className="text-sm sm:text-[15px] font-semibold text-gray-800 leading-snug">
                    {app}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="pt-12 pb-8 sm:py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
            <h6 className="text-blue-600 mb-3">Architecture</h6>
            <h2 className="mb-3 sm:mb-4 capitalize leading-[1.25]">
              Internal Architecture Diagram
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Complete hardware architecture showing field sensor interface, isolated I/O matrix, display driver, and cloud API connectivity.
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-[2rem] border border-slate-200 overflow-hidden">
            <div className="rdl-feature-media bg-slate-50 p-3 sm:p-5 lg:p-6">
              <img
                src="/products/rdl-product/das-architecture.jpg"
                alt="DAS Internal Architecture Diagram"
                width={1400}
                height={900}
                className="w-full h-auto object-contain rounded-lg sm:rounded-xl"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Order Tables & Application Models */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            <h6 className="text-blue-600 mb-3">Specification Tables</h6>
            <h2 className="mb-3 sm:mb-4 capitalize leading-[1.25]">
              Application Specific Order Models
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Tailored hardware configurations and specification matrices for industrial test rigs, environmental monitoring, solar farms, and boiler systems.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-12">
            {/* 1. Test Rig & 2. Environment Monitoring Applications (Side by Side) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* 1. Test Rig Application */}
              <div className="bg-slate-50 rounded-2xl sm:rounded-[2rem] border border-slate-200 p-6 sm:p-8 flex flex-col shadow-sm h-full">
                <div className="flex flex-col gap-2.5 mb-4 pb-3 border-b border-slate-200/80">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-black uppercase text-blue-600 tracking-wider">Application 01</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">Models: RDL926A – RDL926F</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">Test Rig Application</h3>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-slate-700 pt-0.5">
                    <span className="px-2.5 py-0.5 bg-white rounded-lg border border-slate-200">Display: Yes</span>
                    <span className="px-2.5 py-0.5 bg-white rounded-lg border border-slate-200">Edge Gateway: LTE/4G/5G/Wi-Fi</span>
                    <span className="px-2.5 py-0.5 bg-white rounded-lg border border-slate-200">80GB SSD: Yes</span>
                  </div>
                </div>

                {/* Image (Top, Edge-to-Edge) */}
                <div className="w-full mb-5 relative h-48 sm:h-56 overflow-hidden rounded-xl border border-slate-200 leading-[0]">
                  <img
                    src="/products/rdl-product/das-test-rig.png"
                    alt="Test Rig Application Architecture Diagram"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Specification Table (Below Image) */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs text-gray-700">
                    <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="p-2.5 sm:p-3">Model</th>
                        <th className="p-2.5 sm:p-3">Analog</th>
                        <th className="p-2.5 sm:p-3">Digital</th>
                        <th className="p-2.5 sm:p-3">Relay</th>
                        <th className="p-2.5 sm:p-3">PT100</th>
                        <th className="p-2.5 sm:p-3">K/J Temp</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {testRigModels.map((row) => (
                        <tr key={row.model} className="hover:bg-blue-50/50 transition-colors">
                          <td className="p-2.5 sm:p-3 font-bold text-blue-700">{row.model}</td>
                          <td className="p-2.5 sm:p-3">{row.analog}</td>
                          <td className="p-2.5 sm:p-3">{row.digital}</td>
                          <td className="p-2.5 sm:p-3">{row.relay}</td>
                          <td className="p-2.5 sm:p-3">{row.pt100}</td>
                          <td className="p-2.5 sm:p-3">{row.kjTemp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2. Environment Monitoring Application */}
              <div className="bg-slate-50 rounded-2xl sm:rounded-[2rem] border border-slate-200 p-6 sm:p-8 flex flex-col shadow-sm h-full">
                <div className="flex flex-col gap-2.5 mb-4 pb-3 border-b border-slate-200/80">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-black uppercase text-blue-600 tracking-wider">Application 02</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">Models: RDL926G – RDL926H</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">Environment Monitoring Application</h3>
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-slate-700 pt-0.5">
                    <span className="px-2.5 py-0.5 bg-white rounded-lg border border-slate-200">Analog: 24X</span>
                    <span className="px-2.5 py-0.5 bg-white rounded-lg border border-slate-200">Digital: 8X</span>
                    <span className="px-2.5 py-0.5 bg-white rounded-lg border border-slate-200">Relay: 4X</span>
                    <span className="px-2.5 py-0.5 bg-white rounded-lg border border-slate-200">80GB SSD: Included</span>
                  </div>
                </div>

                {/* Image (Top, Edge-to-Edge) */}
                <div className="w-full mb-5 relative h-48 sm:h-56 overflow-hidden rounded-xl border border-slate-200 leading-[0]">
                  <img
                    src="/products/rdl-product/das-air-monitor.png"
                    alt="Environment Monitoring Application Architecture Diagram"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Specification Table (Below Image) */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left text-xs text-gray-700">
                    <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider text-[10px]">
                      <tr>
                        <th className="p-2.5 sm:p-3 min-w-[90px]">Model</th>
                        <th className="p-2.5 sm:p-3">Environmental Parameters</th>
                        <th className="p-2.5 sm:p-3">Industrial Gas Sensors</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-medium">
                      {environmentModels.map((row) => (
                        <tr key={row.model} className="hover:bg-blue-50/50 transition-colors">
                          <td className="p-2.5 sm:p-3 font-bold text-blue-700">{row.model}</td>
                          <td className="p-2.5 sm:p-3">{row.basicSet}</td>
                          <td className="p-2.5 sm:p-3">{row.gasSet}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 3. Solar & 4. Boiler Applications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Solar */}
              <div className="bg-slate-50 rounded-2xl sm:rounded-[2rem] border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-black uppercase text-blue-600 tracking-wider">Application 03</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">Model: {solarModel.model}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Solar Panel Monitoring</h3>
                    </div>
                  </div>

                  <div className="w-full mb-6 relative h-48 sm:h-56 overflow-hidden rounded-xl border border-slate-200 leading-[0]">
                    <img
                      src="/products/rdl-product/das-solar-monitor.png"
                      alt="Solar Panel Monitoring Architecture Diagram"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
                    <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-3">System Features & Sensors</h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                      {solarModel.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-bold">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Boiler */}
              <div className="bg-slate-50 rounded-2xl sm:rounded-[2rem] border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-black uppercase text-blue-600 tracking-wider">Application 04</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">Model: {boilerModel.model}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Boiler & Furnace Monitoring</h3>
                    </div>
                  </div>

                  <div className="w-full mb-6 relative h-48 sm:h-56 overflow-hidden rounded-xl border border-slate-200 leading-[0]">
                    <img
                      src="/products/rdl-product/das-boiler-furnace.png"
                      alt="Boiler & Furnace Monitoring Architecture Diagram"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
                    <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-3">System Features & Sensors</h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                      {boilerModel.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-bold">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm text-blue-900 font-semibold mb-4 leading-relaxed">
              <strong className="text-blue-700">NOTE:</strong> This product is available with customization options based on your application requirements. Pricing may vary depending on configuration. Please contact us to discuss your needs and receive a customized quotation.
            </p>
            <div className="flex justify-center text-center w-full">
              <button
                type="button"
                onClick={openKnowMoreModal}
                className="press-illusion-btn-orange text-white font-bold px-8 py-3.5 text-sm sm:text-base inline-flex cursor-pointer gap-2 items-center justify-center w-full sm:w-auto"
              >
                <span>Know More Specifications</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4" aria-hidden="true">
                  <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>



      {/* We Ship Worldwide */}
      <section className="py-4 sm:py-6 lg:py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <img
            src="/products/cloud-plc/make-in-india.jpg"
            alt="We Ship Worldwide — shipping partners and payment methods"
            width={1240}
            height={700}
            className="w-full h-auto object-contain block"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="mb-4 sm:mb-6 text-white capitalize font-bold text-3xl sm:text-4xl">
            Ready to digitize your process parameters?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-blue-100 font-medium leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            Collect, monitor, and visualize real-time data from field sensors with our high-precision Data Acquisition System with Display.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4">
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
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3.5 sm:py-4 px-8 sm:px-10 rounded-lg transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base cursor-pointer text-center"
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
