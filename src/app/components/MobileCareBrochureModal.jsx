"use client";

import BrochureFormModal from "./BrochureFormModal";

export default function MobileCareBrochureModal({ isOpen, onClose }) {
  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Mobile Care Brochure"
      itemName="Mobile Care Software"
      subject="Mobile Care Software Brochure Download Request"
      defaultMessage="Mobile Care Software Brochure download request"
      categoryId={42}
      brochureUrl="/products/mobile%20care/isarva-mobile-care-version-3.pdf"
      downloadFilename="Mobile-Care-Brochure.pdf"
    />
  );
}
