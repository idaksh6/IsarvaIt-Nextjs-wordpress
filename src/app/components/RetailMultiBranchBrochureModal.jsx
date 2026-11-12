"use client";

import BrochureFormModal from "./BrochureFormModal";

export default function RetailMultiBranchBrochureModal({ isOpen, onClose }) {
  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Retail Multi Branch Brochure"
      itemName="Retail Billing Multi Branch"
      subject="Retail Multi Branch Billing Brochure Download Request"
      defaultMessage="Retail Multi Branch Billing Brochure download request"
      categoryId={12}
      brochureUrl="/products/retail%20billing%20multi%20branch/Retail-Billing-Software-ver1.pdf"
      downloadFilename="Retail-Billing-Multi-Branch-Brochure.pdf"
    />
  );
}
