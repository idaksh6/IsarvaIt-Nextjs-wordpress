"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";
import {
  dasFeatures,
  applications,
  KNOW_MORE_URL,
} from "./das-datalogger-data";
import "../data-logger-iiot-4-0-1/rdl-product.css";

export default function DasDataloggerClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successRedirectUrl, setSuccessRedirectUrl] = useState(null);

  const CRM_PRODUCT_ITEM = "DAS Datalogger";

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
                  DAS DATALOGGER — DATA ACQUISITION SYSTEM
                </span>
              </div>

              <h1 className="mb-4 sm:mb-6 break-words text-center lg:text-left">
                <span className="block text-gray-900 font-bold">
                  Real-Time Multi-Sensor Data Logging
                </span>
                <span className="block mt-1 text-[clamp(1.5rem,6vw,3.5rem)] text-blue-600 font-bold leading-tight">
                  DAS Datalogger
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                The Data Acquisition System Data Logger is an all-in-one solution designed to collect, monitor, and visualize real-time data from multiple sensors and field devices. It delivers instant insights on-site while seamlessly connecting to automation and IoT platforms.
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
                  src="/products/rdl-product/logger-das.jpg"
                  alt="DAS Datalogger Device"
                  width={600}
                  height={450}
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
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
            <h6 className="text-blue-600 mb-3 font-bold uppercase tracking-wider text-xs">Capabilities</h6>
            <h2 className="mb-3 sm:mb-4 capitalize font-bold text-3xl sm:text-4xl text-slate-900">
              DAS — <span className="text-blue-600">Features</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Comprehensive Data Acquisition System Data Logger features designed for multi-channel sensor logging and industrial monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {dasFeatures.map((feat, idx) => (
              <div
                key={feat.title}
                className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 flex flex-col items-center text-center sm:items-start sm:text-left justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-50 text-blue-600 font-black text-xs mb-4 border border-blue-100">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2 text-base sm:text-lg font-bold text-slate-900">{feat.title}</h3>
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
              Real-time monitoring across industrial plants, environmental setups, utilities, and smart grids.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            {/* DAS Applications Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <img
                  src="/products/rdl-product/das-applications-diagram.jpg"
                  alt="DAS Datalogger Applications Diagram"
                  width={532}
                  height={441}
                  className="w-full h-auto object-contain rounded-xl mx-auto"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>

            {/* Application Pills */}
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
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="mb-4 sm:mb-6 text-white capitalize font-bold text-3xl sm:text-4xl">
            Ready to digitize your process parameters?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-blue-100 font-medium leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            Collect, monitor, and visualize real-time data from field sensors with our high-precision Data Acquisition System Datalogger.
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
