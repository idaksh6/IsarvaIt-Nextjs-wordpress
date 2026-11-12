"use client";

import BrochureFormModal from "./BrochureFormModal";

export default function MarineServicesBrochureModal({ isOpen, onClose }) {
  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Marine Services Brochure"
      itemName="Marine Services Software"
      subject="Marine Services Software Brochure Download Request"
      defaultMessage="Marine Services Software Brochure download request"
      categoryId={41}
      brochureUrl="/products/marnine%20service%20center/Marine-Services.pdf"
      downloadFilename="Marine-Services-Brochure.pdf"
    />
  );
}
