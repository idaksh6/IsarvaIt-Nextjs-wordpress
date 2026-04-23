"use client";

import React from "react";
import HeroSection from "../components/partners/HeroSection";
import WhyPartner from "../components/partners/WhyPartner";
import TierCards from "../components/partners/TierCards";
import PartnershipModels from "../components/partners/PartnershipModels";
import PartnerCommitments from "../components/partners/PartnerCommitments";
import IdealPartners from "../components/partners/IdealPartners";
import PartnerOnboarding from "../components/partners/PartnerOnboarding";
import PartnersFAQ from "../components/partners/PartnersFAQ";
import PartnerCTA from "../components/partners/PartnerCTA";
import PartnerFormSection from "../components/partners/PartnerFormSection";

export default function PartnersPage() {
  const scrollToForm = () => {
    const formElement = document.getElementById("partner-inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#FDF8F2] overflow-x-hidden relative">
      <HeroSection onApply={scrollToForm} />
      <WhyPartner />
      <TierCards onApply={scrollToForm} />
      <PartnershipModels onApply={scrollToForm} />
      <PartnerOnboarding />
      <PartnerCommitments />
      <IdealPartners />
      <PartnersFAQ />
      <PartnerCTA onApply={scrollToForm} />
      
      {/* Permanent Form at bottom */}
      <PartnerFormSection id="partner-inquiry-form" />
    </div>
  );
}
