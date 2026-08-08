"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";
import {
  dasFeatures,
  applications,
  testRigModels,
  environmentModels,
  solarModel,
  boilerModel,
  KNOW_MORE_URL,
} from "./data-acquisition-system-data";
import "../data-logger-iiot-4-0-1/rdl-product.css";

export default function DataAcquisitionSystemClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successRedirectUrl, setSuccessRedirectUrl] = useState(null);

  const CRM_PRODUCT_ITEM = "DAS with Display";

  const openDemoModal = () => {
    setSuccessRedirectUrl(null);
    setIsModalOpen(true);
  };

  const openKnowMoreModal = () => {
    setSuccessRedirectUrl(KNOW_MORE_URL);
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
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-[#F8FAFC] via-[#EFF6FF]/60 to-white border-b border-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-center">
            <div className="text-center lg:text-left min-w-0 flex flex-col items-center lg:items-start h-full">
              <div className="relative inline-flex max-w-full items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-5 sm:mb-8 self-center lg:self-start">
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="text-blue-700 font-black text-[10px] sm:text-xs capitalize tracking-[0.16em] sm:tracking-[0.2em] leading-tight">
                  DATA ACQUISITION SYSTEM WITH DISPLAY
                </span>
              </div>

              <h1 className="mb-4 sm:mb-6 break-words text-center lg:text-left">
                <span className="block text-gray-900 font-bold">
                  All-in-One Real-Time Monitoring
                </span>
                <span className="block mt-1 text-[clamp(1.5rem,6vw,3.5rem)] text-blue-600 font-bold leading-tight">
                  DAS with Display
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                The Data Acquisition System (DAS) with Display is an all-in-one solution designed to collect, monitor, and visualize real-time data from multiple sensors and field devices. With an integrated display and industrial-grade design, it delivers instant insights on-site while seamlessly connecting to automation and IoT platforms.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start items-center sm:items-center mb-8 w-full sm:w-auto">
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

              <div className="pt-4 border-t border-slate-200/60 w-full flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
                <p className="text-xs font-black tracking-[0.2em] text-blue-600 uppercase">
                  Partnership with
                </p>
                <div className="inline-flex items-center justify-center gap-4">
                  <div className="relative h-10 w-[140px] shrink-0">
                    <Image
                      src="/isarva New Logo.png"
                      alt="Isarva Infotech"
                      fill
                      sizes="140px"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <span className="h-8 w-px bg-slate-300 shrink-0" aria-hidden="true" />
                  <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden">
                    <Image
                      src="/products/rdl-product/rdl-logo.png"
                      alt="RDL Technologies"
                      fill
                      sizes="40px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full min-w-0 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xl p-4 sm:p-6">
                <img
                  src="/products/rdl-product/das-web-banner.jpg"
                  alt="Data Acquisition System with Display Banner"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-xl mx-auto"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DAS - Features */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
            <h6 className="text-blue-600 mb-3 font-bold uppercase tracking-wider text-xs">Capabilities</h6>
            <h2 className="mb-3 sm:mb-4 capitalize font-bold text-3xl sm:text-4xl text-slate-900">
              DAS — <span className="text-blue-600">Features</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Industrial-grade 32" to 85" SAMSUNG Display, 64-channel configurable logging, built-in Windows 11 Industrial PC, and Modbus/RS485 networking.
            </p>
          </div>

          {/* Top Feature Showcase Banner */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-slate-50 p-3 border border-slate-100">
                  <img
                    src="/products/rdl-product/das-display-pic2.jpg"
                    alt="DAS Display System Features"
                    width={600}
                    height={300}
                    className="w-full h-auto object-contain rounded-lg mx-auto"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs mb-3">
                  Integrated On-Site Visualization
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  Industrial Grade PC with SAMSUNG Display
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium leading-relaxed mb-4">
                  All-in-one Data Acquisition System featuring an integrated 2.2GHz processor, 4GB RAM, 120GB SSD with Windows 11 OEM, supporting up to 8 customizable dashboard screens and automated video instructions.
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">64 Channels</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">32" - 85" Display</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">Modbus RTU / TCP</span>
                  <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">SSL & AES-256</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Grid of Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {dasFeatures.map((feat, idx) => (
              <div
                key={feat.title}
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col items-center text-center sm:items-start sm:text-left justify-between hover:border-blue-300 transition-colors shadow-sm"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 text-blue-600 font-black text-xs mb-4 border border-blue-100">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-slate-900">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAS - Applications */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
            <h6 className="text-orange-600 mb-3 font-bold uppercase tracking-wider text-xs">Deployments</h6>
            <h2 className="mb-3 sm:mb-4 capitalize font-bold text-3xl sm:text-4xl text-slate-900">
              DAS — <span className="text-orange-600">Applications</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Real-time monitoring across process plants, environmental setups, solar grids, and boiler water systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <img
                  src="/products/rdl-product/das-boiler-water.jpg"
                  alt="DAS Boiler & Water Monitoring Display"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-xl mx-auto"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {applications.map((app, idx) => (
                <div
                  key={app}
                  className="flex items-center sm:items-start justify-center sm:justify-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-center sm:text-left hover:border-orange-200 transition-colors"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 text-xs font-black">
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
        </div>
      </section>

      {/* Internal Architecture Diagram */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h6 className="text-blue-600 mb-3 font-bold uppercase tracking-wider text-xs">System Architecture</h6>
            <h2 className="mb-3 sm:mb-4 capitalize font-bold text-3xl sm:text-4xl text-slate-900">
              Internal Architecture <span className="text-blue-600">Diagram</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
              Complete hardware architecture showing field sensor interface, isolated I/O matrix, display driver, and cloud API connectivity.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-md">
            <img
              src="/products/rdl-product/das-architecture.jpg"
              alt="DAS Internal Architecture Diagram"
              width={1240}
              height={700}
              className="w-full h-auto object-contain rounded-xl mx-auto"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Order Tables & Application Models */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
            <h6 className="text-orange-600 mb-3 font-bold uppercase tracking-wider text-xs">Model Specifications</h6>
            <h2 className="mb-3 sm:mb-4 capitalize font-bold text-3xl sm:text-4xl text-slate-900">
              Application Specific <span className="text-orange-600">Order Tables</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Tailored hardware configurations and specification matrices for industrial test rigs, environmental monitoring, solar farms, and boiler systems.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {/* 1. Test Rig Application */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-black uppercase text-blue-600 tracking-wider">Application 01</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">Models: RDL926A – RDL926F</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Test Rig Application</h3>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <span className="px-3 py-1 bg-white rounded-lg border border-slate-200">Display: Yes</span>
                  <span className="px-3 py-1 bg-white rounded-lg border border-slate-200">Edge Gateway LTE/4G/5G/Wi-Fi: Yes</span>
                  <span className="px-3 py-1 bg-white rounded-lg border border-slate-200">Inbuilt 80GB SSD: Yes</span>
                </div>
              </div>

              {/* Tight Fit Diagram Container */}
              <div className="w-full mb-8 flex justify-center">
                <div className="inline-block bg-white rounded-xl border border-slate-200 p-2 sm:p-3 shadow-sm max-w-full">
                  <img
                    src="/products/rdl-product/das-test-rig.png"
                    alt="Test Rig Application Architecture Diagram"
                    width={1000}
                    height={500}
                    className="w-full max-w-4xl h-auto object-contain rounded-lg"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Order Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <thead className="bg-blue-600 text-white font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="p-3.5 sm:p-4">Model</th>
                      <th className="p-3.5 sm:p-4">Analog Input</th>
                      <th className="p-3.5 sm:p-4">Digital Input</th>
                      <th className="p-3.5 sm:p-4">Relay Output</th>
                      <th className="p-3.5 sm:p-4">PT100 Temp Input</th>
                      <th className="p-3.5 sm:p-4">K/J Temp Input</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {testRigModels.map((row) => (
                      <tr key={row.model} className="hover:bg-blue-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-blue-700">{row.model}</td>
                        <td className="p-3.5 sm:p-4">{row.analog}</td>
                        <td className="p-3.5 sm:p-4">{row.digital}</td>
                        <td className="p-3.5 sm:p-4">{row.relay}</td>
                        <td className="p-3.5 sm:p-4">{row.pt100}</td>
                        <td className="p-3.5 sm:p-4">{row.kjTemp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2. Environment Monitoring Application */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-black uppercase text-orange-600 tracking-wider">Application 02</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold text-xs">Models: RDL926G – RDL926H</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Environment Monitoring Application</h3>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                  <span className="px-3 py-1 bg-white rounded-lg border border-slate-200">Analog Input: 24X</span>
                  <span className="px-3 py-1 bg-white rounded-lg border border-slate-200">Digital Input: 8X</span>
                  <span className="px-3 py-1 bg-white rounded-lg border border-slate-200">Relay: 4X</span>
                  <span className="px-3 py-1 bg-white rounded-lg border border-slate-200">80GB SSD: Included</span>
                </div>
              </div>

              {/* Tight Fit Diagram Container */}
              <div className="w-full mb-8 flex justify-center">
                <div className="inline-block bg-white rounded-xl border border-slate-200 p-2 sm:p-3 shadow-sm max-w-full">
                  <img
                    src="/products/rdl-product/das-air-monitor.png"
                    alt="Environment Monitoring Application Architecture Diagram"
                    width={1000}
                    height={500}
                    className="w-full max-w-4xl h-auto object-contain rounded-lg"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Order Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm text-gray-700 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                  <thead className="bg-orange-600 text-white font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="p-3.5 sm:p-4 min-w-[120px]">Model</th>
                      <th className="p-3.5 sm:p-4">Environmental Parameters (Temp, Humidity, PM2.5, PM10, Pressure, CO2)</th>
                      <th className="p-3.5 sm:p-4">Industrial Gas Sensors (CO, SO2, NO2, H2S, O3, NH3, Cl2)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {environmentModels.map((row) => (
                      <tr key={row.model} className="hover:bg-orange-50/50 transition-colors">
                        <td className="p-3.5 sm:p-4 font-bold text-orange-700">{row.model}</td>
                        <td className="p-3.5 sm:p-4">{row.basicSet}</td>
                        <td className="p-3.5 sm:p-4">{row.gasSet}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Solar & 4. Boiler Applications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Solar */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-black uppercase text-amber-600 tracking-wider">Application 03</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">Model: {solarModel.model}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Solar Panel Monitoring</h3>
                    </div>
                  </div>

                  {/* Tight Fit Diagram Container */}
                  <div className="w-full mb-6 flex justify-center">
                    <div className="inline-block bg-white rounded-xl border border-slate-200 p-2 sm:p-3 shadow-sm max-w-full">
                      <img
                        src="/products/rdl-product/das-solar-monitor.png"
                        alt="Solar Panel Monitoring Architecture Diagram"
                        width={800}
                        height={450}
                        className="w-full h-auto max-h-[350px] object-contain rounded-lg"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
                    <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-3">System Features & Sensors</h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                      {solarModel.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-bold">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Boiler */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-200/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-black uppercase text-red-600 tracking-wider">Application 04</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 font-bold text-xs">Model: {boilerModel.model}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Boiler & Furnace Monitoring</h3>
                    </div>
                  </div>

                  {/* Tight Fit Diagram Container */}
                  <div className="w-full mb-6 flex justify-center">
                    <div className="inline-block bg-white rounded-xl border border-slate-200 p-2 sm:p-3 shadow-sm max-w-full">
                      <img
                        src="/products/rdl-product/das-boiler-furnace.png"
                        alt="Boiler & Furnace Monitoring Architecture Diagram"
                        width={800}
                        height={450}
                        className="w-full h-auto max-h-[350px] object-contain rounded-lg"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>

                  <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5">
                    <h4 className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-3">System Features & Sensors</h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                      {boilerModel.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700 text-xs font-bold">✓</span>
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
              onClick={openKnowMoreModal}
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-3.5 sm:py-4 px-8 sm:px-10 rounded-lg transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base cursor-pointer text-center"
            >
              Know More
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
      />
    </div>
  );
}
