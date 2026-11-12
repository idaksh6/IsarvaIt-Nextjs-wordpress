"use client";

import BrochureFormModal from "./BrochureFormModal";

export default function DispatcherPanelBrochureModal({ isOpen, onClose }) {
  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Dispatcher Panel Brochure"
      itemName="Dispatcher Panel"
      subject="Dispatcher Panel Brochure Download Request"
      defaultMessage="Dispatcher Panel Brochure download request"
      categoryId={40}
      brochureUrl="/products/dispatcher%20Panel/Dispatcher-Panel.pdf"
      downloadFilename="Dispatcher-Panel-Brochure.pdf"
    />
  );
}
