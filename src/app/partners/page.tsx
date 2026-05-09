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
  const [selectedTier, setSelectedTier] = React.useState("Channel Partner Inquiry");

  React.useEffect(() => {
    // Immediate scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    
    // Delayed scroll as a fallback for slower rendering/hydration
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 10);

    return () => clearTimeout(timeoutId);
  }, []);

  const scrollToForm = (tier?: string) => {
    if (tier) {
      setSelectedTier(tier);
    }
    const formElement = document.getElementById("partner-inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#FDF8F2] overflow-x-hidden relative">
      <HeroSection onApply={() => scrollToForm("General Partner Inquiry")} />
      <WhyPartner />
      <TierCards onApply={(tier) => scrollToForm(tier)} />
      <PartnershipModels onApply={() => scrollToForm("Partnership Model Inquiry")} />
      <PartnerOnboarding />
      <PartnerCommitments />
      <IdealPartners />
      <PartnersFAQ />
      <PartnerCTA onApply={() => scrollToForm("General Partner Inquiry")} />

      {/* Permanent Form at bottom */}
      <PartnerFormSection
        id="partner-inquiry-form"
        preSelectedItem={selectedTier}
      />
    </div>
  );
}
