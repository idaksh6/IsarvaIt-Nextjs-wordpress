"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";
import {
  heroContent,
  zigZagFeatures,
  specifications,
  applications,
  applicationDiagrams,
  oemSectionTitle,
  orderInfo,
  orderTableRows,
  biometricVariants,
} from "./biometric-product-data";
import "./biometric-product.css";

const CHECK = () => (
  <span className="text-green-600 font-black text-lg leading-none" aria-label="Available">✓</span>
);
const CROSS = () => (
  <span className="text-red-500 font-black text-lg leading-none" aria-label="Not Available">✗</span>
);

function VariantCard({ variant, onKnowMore }) {
  const [expanded, setExpanded] = useState(false);
  const specs = expanded
    ? [...variant.preview, ...variant.full]
    : variant.preview;

  return (
    <div className="flex flex-col bg-white rounded-2xl sm:rounded-[2rem] border border-slate-200 h-full min-w-0 overflow-hidden">
      <div className="relative h-40 sm:h-48 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-4 sm:p-6 rdl-feature-media">
        <img
          src={variant.image}
          alt={variant.title}
          width={320}
          height={200}
          className="max-h-full max-w-full w-auto object-contain"
          loading="eager"
          decoding="async"
          fetchPriority="low"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6 lg:p-8 min-w-0">
        <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-gray-900">{variant.title}</h3>
        <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 flex-1">
          {specs.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-[13px] sm:text-sm text-gray-500 font-medium leading-snug break-words"
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
            className="text-sm font-bold text-blue-600 hover:text-blue-700 py-1"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
          <button
            type="button"
            onClick={() => onKnowMore?.(variant)}
            className="text-sm font-bold text-gray-700 hover:text-orange-600 py-1"
          >
            Know More →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BiometricProductClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successRedirectUrl, setSuccessRedirectUrl] = useState(null);
  const [successDownloadUrl, setSuccessDownloadUrl] = useState(null);

  const CRM_PRODUCT_ITEM = "Biometric Authentication";
  const DOWNLOAD_REGISTERED_KEY = "biometric_download_registered";

  const triggerDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const isDownloadRegistered = () => {
    if (typeof window === "undefined") return false;
    try {
      return window.sessionStorage.getItem(DOWNLOAD_REGISTERED_KEY) === "true";
    } catch {
      return false;
    }
  };

  const markDownloadRegistered = () => {
    try {
      window.sessionStorage.setItem(DOWNLOAD_REGISTERED_KEY, "true");
    } catch {
      /* sessionStorage unavailable */
    }
  };

  const openDemoModal = () => {
    setSuccessRedirectUrl(null);
    setSuccessDownloadUrl(null);
    setIsModalOpen(true);
  };

  const openKnowMoreModal = (variant) => {
    setSuccessDownloadUrl(null);
    setSuccessRedirectUrl(variant.link);
    setIsModalOpen(true);
  };

  const openLinkedModal = (redirectUrl) => {
    setSuccessDownloadUrl(null);
    setSuccessRedirectUrl(redirectUrl);
    setIsModalOpen(true);
  };

  const openDownloadModal = (file) => {
    if (isDownloadRegistered()) {
      triggerDownload(file.href);
      return;
    }
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
              </div>
            </div>

            <div className="relative w-full min-w-0 flex flex-col h-full">
              <div className="relative w-full h-auto sm:flex-1 overflow-hidden rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center min-h-[240px] sm:min-h-[340px]">
                <img
                  src="/products/biometric-authentication/ITS.BIO.330013950_1743481765626.webp"
                  alt="Biometric Authentication System Unit"
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

      {/* Zig-Zag Features */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
            <h6 className="text-blue-600 mb-3">Key Capabilities</h6>
            <h2 className="mb-3 sm:mb-4 capitalize">
              Engineered for <span className="text-blue-600">Excellence</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Discover the intelligent security features that make our Biometric Authentication System the most reliable choice for industrial PLC and HMI protection.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12">
            {zigZagFeatures.map((feature, idx) => (
              <div
                key={feature.title}
                className={`flex flex-col ${feature.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
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
              Built for industrial environments — from automated manufacturing lines to water treatment and energy facilities.
            </p>
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

      {/* Application Diagrams */}
      <section className="pt-12 pb-8 sm:py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
            <h6 className="text-blue-600 mb-3">Architecture</h6>
            <h2 className="mb-3 sm:mb-4 capitalize leading-[1.25]">
              Application Diagrams
            </h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Real-world deployment architectures — from enrollment workflows to hardware communication schemes.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {applicationDiagrams.map((diagram, idx) => (
              <article
                key={diagram.title}
                className="bg-white rounded-2xl sm:rounded-[2rem] border border-slate-200 overflow-hidden"
              >
                <div className="p-5 sm:p-6 lg:p-8 border-b border-slate-100 text-center sm:text-left">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 font-black text-sm mb-3 border border-blue-100">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{diagram.title}</h3>
                  <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed max-w-3xl">
                    {diagram.description}
                  </p>
                </div>
                <div className="rdl-feature-media bg-slate-50 p-3 sm:p-5 lg:p-6">
                  <img
                    src={diagram.image}
                    alt={diagram.title}
                    width={1400}
                    height={900}
                    className="w-full h-auto object-contain rounded-lg sm:rounded-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Order Information Table */}
      <section className="pt-0 pb-6 sm:pt-12 lg:pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white max-w-3xl mx-auto p-2 sm:p-4">
            <img
              src="/products/biometric-authentication/biometric-table.webp"
              alt="Biometric Model Comparison Order Information Table"
              width={1200}
              height={600}
              className="w-full h-auto object-contain rounded-xl block mx-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Biometric Variants */}
      <section className="pt-6 pb-8 sm:py-12 lg:pt-16 lg:pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
            <h6 className="text-blue-600 mb-3">Product Range</h6>
            <h2 className="mb-3 sm:mb-4 capitalize">Biometric Models</h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Choose the right biometric authentication controller variant for your environment — RS485 Modbus RTU or Modbus TCP network architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {biometricVariants.map((variant) => (
              <VariantCard
                key={variant.id}
                variant={variant}
                onKnowMore={openKnowMoreModal}
              />
            ))}
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
          <h2 className="mb-4 sm:mb-6 text-white capitalize">
            Ready to secure your industrial PLC & HMI systems?
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-blue-100 font-medium leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            Integrate fingerprint authentication seamlessly with your machinery and SCADA setups for secure authorized access.
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
              onClick={() =>
                openLinkedModal("https://rdltech.in/become-a-member")
              }
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
        treatDuplicateAsSuccess={!!successDownloadUrl}
        onSubmitSuccess={successDownloadUrl ? markDownloadRegistered : undefined}
      />
    </div>
  );
}
