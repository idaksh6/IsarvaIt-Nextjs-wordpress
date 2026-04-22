"use client";

import React, { useState } from "react";
import HeroSection from "../components/partners/HeroSection";
import WhyPartner from "../components/partners/WhyPartner";
import TierCards from "../components/partners/TierCards";
import PartnershipModels from "../components/partners/PartnershipModels";
import PartnerCommitments from "../components/partners/PartnerCommitments";
import IdealPartners from "../components/partners/IdealPartners";
import PartnerCTA from "../components/partners/PartnerCTA";
import ContactFormModal from "../components/ContactFormModal";

export default function PartnersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <div className="bg-[#FDF8F2] overflow-x-hidden relative">
      <HeroSection onApply={openModal} />
      <WhyPartner />
      <TierCards onApply={openModal} />
      <PartnershipModels onApply={openModal} />
      <PartnerCommitments />
      <IdealPartners />
      <PartnerCTA onApply={openModal} />

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="General"
        preSelectedItem="Channel Partner Inquiry"
      />
    </div>
  );
}
