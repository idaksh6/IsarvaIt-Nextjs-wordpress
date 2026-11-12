"use client";

import BrochureFormModal from "./BrochureFormModal";

export default function FleetManagementBrochureModal({ isOpen, onClose }) {
  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Fleet Management Brochure"
      itemName="Fleet Management Software"
      subject="Fleet Management Software Brochure Download Request"
      defaultMessage="Fleet Management Software Brochure download request"
      categoryId={31}
      brochureUrl="/products/fleet%20management%20software/Fleet-Management-Software.pdf"
      downloadFilename="Fleet-Management-Software-Brochure.pdf"
    />
  );
}
