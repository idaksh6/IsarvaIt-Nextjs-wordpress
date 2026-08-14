"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";
import {
  heroContent,
  zigZagFeatures,
  applications,
  KNOW_MORE_URL,
} from "./das-datalogger-data";
import "./das-datalogger.css";

export default function DasDataloggerClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successRedirectUrl, setSuccessRedirectUrl] = useState(null);
  const [successDownloadUrl, setSuccessDownloadUrl] = useState(null);

  const CRM_PRODUCT_ITEM = "DAS Datalogger";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-start">
            {/* Left Column: Badge, Title, Description, Button */}
            <div className="text-center lg:text-left min-w-0 flex flex-col justify-center">
              <div className="relative inline-flex max-w-full items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-5 sm:mb-8 self-center lg:self-start">
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span className="text-blue-700 font-black text-[10px] sm:text-xs capitalize tracking-[0.16em] sm:tracking-[0.2em] leading-tight">
                  {heroContent.badge}
                </span>
              </div>

              <h1 className="mb-4 sm:mb-6 break-words">
                <span className="block text-gray-900 font-bold text-[clamp(1.75rem,5vw,3.25rem)] leading-tight">
                  {heroContent.headline1}
                </span>
                <span className="block mt-1 text-[clamp(1.75rem,5vw,3.25rem)] text-blue-600 font-bold leading-tight">
                  {heroContent.headline2}
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-gray-500 font-medium leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
                {heroContent.description}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center">
                <button
                  type="button"
                  onClick={openDemoModal}
                  className="press-illusion-btn-orange text-white w-full sm:w-fit justify-center font-bold px-7 sm:px-9 py-3.5 sm:py-4 text-sm sm:text-base flex cursor-pointer gap-2 items-center"
                >
                  <span>Request a Demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4" aria-hidden="true">
                    <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Image Card + Partnership Bar Below Image */}
            <div className="relative w-full min-w-0 flex flex-col items-center lg:items-center">
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2.25rem] bg-white border border-slate-200/90 shadow-sm p-6 sm:p-8 flex items-center justify-center min-h-[280px] sm:min-h-[340px]">
                <img
                  src="/products/rdl-product/logger-das.jpg"
                  alt="DAS Datalogger Device"
                  className="w-full h-auto max-h-[260px] sm:max-h-[300px] object-contain rounded-2xl"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="w-full flex flex-col items-center gap-2 mt-6 sm:mt-8">
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
                      src="/products/cloud-plc/rdl-logo.png"
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
              Comprehensive Data Acquisition System Data Logger features designed for multi-channel sensor logging and industrial monitoring.
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
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
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
              Real-time monitoring across industrial plants, environmental setups, utilities, and smart grids.
            </p>
          </div>

          {/* Visual banner with constrained height */}
          <div className="rdl-apps-visual mb-8 sm:mb-10 overflow-hidden rounded-2xl sm:rounded-[1.75rem] border border-slate-200 bg-white p-3 sm:p-4 flex items-center justify-center">
            <img
              src="/products/rdl-product/das-applications-diagram.jpg"
              alt="DAS Datalogger Applications Diagram"
              width={1400}
              height={545}
              className="w-full max-w-4xl h-auto max-h-[240px] sm:max-h-[300px] object-contain rounded-xl"
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

          <div className="mt-8 flex justify-center text-center w-full">
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
