"use client";

import BrochureFormModal from "./BrochureFormModal";

export default function PetroCareBrochureModal({ isOpen, onClose }) {
  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Petro Care Brochure"
      itemName="Petro Care"
      subject="Petro Care Brochure Download Request"
      defaultMessage="Petro Care Brochure download request"
      categoryId={30}
      brochureUrl="/products/petro%20care/petro-care.pdf"
      downloadFilename="Petro-Care-Brochure.pdf"
    />
  );
}
