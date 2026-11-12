"use client";

import BrochureFormModal from "./BrochureFormModal";

export default function HRMSBrochureModal({ isOpen, onClose }) {
  const handleMetaPixelLead = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: "HRMS Software Brochure",
        content_category: "Brochure Download",
      });
    }
  };

  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download HRMS Brochure"
      itemName="HRMS Software"
      subject="HRMS Brochure Download Request"
      defaultMessage="HRMS Brochure download request"
      categoryId={1}
      brochureUrl="/products/hrms/HRMS-construction ver2.pdf"
      downloadFilename="HRMS-construction-ver2.pdf"
      onBeforeDownload={handleMetaPixelLead}
    />
  );
}
