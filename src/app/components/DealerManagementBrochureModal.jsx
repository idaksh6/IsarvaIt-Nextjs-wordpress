"use client";

import BrochureFormModal from "./BrochureFormModal";

export default function DealerManagementBrochureModal({ isOpen, onClose }) {
  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Dealer Management Brochure"
      itemName="Dealer Management Software"
      subject="Dealer Management Software Brochure Download Request"
      defaultMessage="Dealer Management Software Brochure download request"
      categoryId={32}
      brochureUrl="/products/dealer%20management%20software/Dealer-Management.pdf"
      downloadFilename="Dealer-Management-Software-Brochure.pdf"
    />
  );
}
