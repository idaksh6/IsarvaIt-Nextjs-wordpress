"use client";

import React from "react";
import WhiteLabelHero from "../components/white-label/WhiteLabelHero";
import WhiteLabelAbout from "../components/white-label/WhiteLabelAbout";
import WhiteLabelStats from "../components/white-label/WhiteLabelStats";
import WhiteLabelServices from "../components/white-label/WhiteLabelServices";
import WhiteLabelBenefits from "../components/white-label/WhiteLabelBenefits";
import WhiteLabelHowItWorks from "../components/white-label/WhiteLabelHowItWorks";
import WhiteLabelWhoWeWorkWith from "../components/white-label/WhiteLabelWhoWeWorkWith";
import WhiteLabelTechStack from "../components/white-label/WhiteLabelTechStack";
import WhiteLabelFAQ from "../components/white-label/WhiteLabelFAQ";
import WhiteLabelCTA from "../components/white-label/WhiteLabelCTA";
import PartnerFormSection from "../components/partners/PartnerFormSection";

export default function WhiteLabelPartnershipPage() {
  const scrollToForm = () => {
    const formElement = document.getElementById("white-label-inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white overflow-x-hidden">
      <WhiteLabelHero onContact={scrollToForm} />
      <WhiteLabelAbout />
      <WhiteLabelStats />
      <WhiteLabelServices />
      <WhiteLabelBenefits />
      <WhiteLabelHowItWorks />
      <WhiteLabelWhoWeWorkWith />
      <WhiteLabelTechStack />
      <WhiteLabelCTA onContact={scrollToForm} />
      <WhiteLabelFAQ />
      
      {/* Inquiry Form Section */}
      <PartnerFormSection id="white-label-inquiry-form" />
    </div>
  );
}
