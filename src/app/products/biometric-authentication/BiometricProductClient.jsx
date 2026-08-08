"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ContactFormModal from "../../components/ContactFormModal";
import {
  heroContent,
  specifications,
  benefits,
  applications,
  downloads,
  sdks,
  YOUTUBE_TUTORIALS,
} from "./biometric-product-data";
import "./biometric-product.css";

export default function BiometricProductClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successRedirectUrl, setSuccessRedirectUrl] = useState(null);
  const [successDownloadUrl, setSuccessDownloadUrl] = useState(null);

  const CRM_PRODUCT_ITEM = "Biometric Authentication";

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-16 lg:items-stretch">

            <div className="text-center lg:text-left min-w-0 flex flex-col h-full">
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
              <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-900 border border-slate-200">
                <img
                  src="//img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/Biometric_1A.jpg"
                  alt="Biometric Authentication System Unit"
                  className="w-full h-auto object-contain"
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

      {/* ── ABOUT & FEATURES SECTIONS FROM SCRAPED CONTENT ── */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">

            {/* Block 1: Intro */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2 w-full">
                <div className="rdl-feature-media relative w-full rounded-2xl bg-slate-50 border border-slate-100 p-4">
                  <img
                    src="//img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/Biometric_1A.jpg"
                    alt="PLC and SCADA Biometric authentication"
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full text-center lg:text-left">
                <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold text-slate-900">PLC and SCADA</h2>
                <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                  {heroContent.description}
                </p>
                <p className="mt-4 text-orange-600 font-bold text-sm sm:text-base">
                  {heroContent.testedNote}
                </p>
              </div>
            </div>

            {/* Block 2: Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Features */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-4 text-slate-800">Features</h3>
                <ul className="space-y-2 text-sm text-gray-500 font-medium">
                  {specifications.map((spec) => (
                    <li key={spec} className="flex gap-2">
                      <span className="text-blue-500 font-black">•</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: Benefits */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-4 text-slate-800">Benefits</h3>
                <ul className="space-y-2 text-sm text-gray-500 font-medium">
                  {benefits.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-green-600 font-black">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 3: Applications */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold mb-4 text-slate-800">Applications</h3>
                <p className="text-xs text-slate-400 mb-3">Suitable for industries relying on PLC & HMI:</p>
                <ul className="space-y-2 text-sm text-gray-500 font-medium">
                  {applications.map((app) => (
                    <li key={app} className="flex gap-2">
                      <span className="text-orange-500 font-black">•</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Block 3: Full Width Infographics */}
            <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="//img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/Biometric_4A.jpg"
                alt="Biometric enrollment parameters and connection maps"
                className="w-full h-auto object-contain block"
              />
            </div>

            <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="//img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/Biometric_5A.jpg"
                alt="Fingerprint access terminal overview"
                className="w-full h-auto object-contain block"
              />
            </div>

            <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="//img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/RDL810_FB_4.jpg"
                alt="Biometric device security specifications"
                className="w-full h-auto object-contain block"
              />
            </div>

            <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="//img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/RDL810_FB_5.jpg"
                alt="Access log monitoring setups"
                className="w-full h-auto object-contain block"
              />
            </div>

            <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="//img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/RDL810_FB_6.jpg"
                alt="Biometric integration layout options"
                className="w-full h-auto object-contain block"
              />
            </div>

            <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="//img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/11.jpg"
                alt="PLC access terminal system layout"
                className="w-full h-auto object-contain block"
              />
            </div>

            <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="//img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/AA.jpg"
                alt="RDL810 interface specs chart"
                className="w-full h-auto object-contain block"
              />
            </div>

            <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
              <img
                src="//img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/13%20-%20Copy.jpg"
                alt="Biometric connection layout guide"
                className="w-full h-auto object-contain block"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP PROGRAM ── */}
      <section className="py-12 lg:py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-black text-gray-900">
            Partnership Program
          </h2>
          <button
            type="button"
            onClick={() => openLinkedModal("https://rdltech.in/become-a-member")}
            className="inline-flex items-center justify-center border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition-colors duration-200 font-semibold px-10 py-3 rounded-full text-sm mb-10"
          >
            Become a Dealer
          </button>

          {/* We Ship Worldwide map */}
          <div className="w-full overflow-hidden rounded-2xl border border-slate-200">
            <img
              src="//img1.wsimg.com/isteam/ip/12461e14-346a-4dab-a0dd-f3b770f6c7ad/MAKE_IN_INDIA.jpg"
              alt="We Ship Worldwide — shipping partners and payment methods"
              width={1240}
              height={700}
              className="w-full h-auto object-contain block"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ── DOWNLOADS & SDKS (Same Layout as Data Logger page) ── */}
      <section className="pt-8 pb-12 sm:py-12 lg:pt-10 lg:pb-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
            <h6 className="text-orange-600 mb-3">Resources</h6>
            <h2 className="mb-3 sm:mb-4 capitalize">Downloads & SDKs</h2>
            <p className="text-sm sm:text-base lg:text-xl text-gray-500 font-medium leading-relaxed">
              Datasheets, manuals, pinmaps, and developer SDKs to get your biometric authentication integration live faster.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            <div className="rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-slate-50 p-4 sm:p-6 lg:p-8 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-5 sm:mb-6">
                <h3 className="text-lg sm:text-xl">Downloads</h3>
                <a
                  href={YOUTUBE_TUTORIALS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-blue-600 hover:text-blue-700"
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
                      className="w-full text-left flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 hover:border-blue-200 transition-colors min-w-0 cursor-pointer"
                    >
                      <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-orange-50 text-orange-600 text-[10px] sm:text-xs font-black shrink-0">
                        {file.type}
                      </span>
                      <span className="text-[13px] sm:text-sm font-semibold text-gray-800 flex-1 leading-snug break-words min-w-0">
                        {file.title}
                      </span>
                      <span className="text-xs font-bold text-blue-600 shrink-0 hidden sm:inline">
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

            <div className="rounded-2xl sm:rounded-[2rem] border border-slate-200 bg-slate-50 p-4 sm:p-6 lg:p-8 min-w-0">
              <h3 className="mb-5 sm:mb-6 text-lg sm:text-xl">SDK and APIs</h3>
              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                {sdks.map((file) => (
                  <li key={file.title}>
                    <button
                      type="button"
                      onClick={() => openDownloadModal(file)}
                      className="w-full text-left flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200 hover:border-blue-200 transition-colors min-w-0 cursor-pointer"
                    >
                      <span className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-blue-50 text-blue-600 text-[10px] sm:text-xs font-black shrink-0">
                        {file.type}
                      </span>
                      <span className="text-[13px] sm:text-sm font-semibold text-gray-800 flex-1 leading-snug break-words min-w-0">
                        {file.title}
                      </span>
                      <span className="text-xs font-bold text-blue-600 shrink-0 hidden sm:inline">
                        Download
                      </span>
                      <span className="sm:hidden text-blue-600 shrink-0 text-lg leading-none" aria-hidden="true">
                        ↓
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl sm:rounded-2xl bg-white border border-slate-200 p-5 sm:p-6">
                <h4 className="mb-2">Shop Biometric Controllers</h4>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-4">
                  Browse and purchase Biometric Authentication hardware directly from Research Design Lab.
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
      <section className="py-12 lg:py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h6 className="text-blue-300 mb-3 text-xs font-bold tracking-[0.18em] uppercase">Contact us</h6>
          <h2 className="mb-4 sm:mb-6 text-white text-2xl sm:text-3xl font-black">
            We ship worldwide; contact us for your shipping needs
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-blue-100 font-medium leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto">
            Integrate the Biometric Authentication System with your PLC, HMI, and SCADA setups for secure authorized hardware access.
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
