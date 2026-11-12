"use client";

import BrochureFormModal from "./BrochureFormModal";

export default function DMSBrochureModal({ isOpen, onClose }) {
  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download DMS Brochure"
      itemName="Document Management System"
      subject="Document Management System Brochure Download Request"
      defaultMessage="Document Management System Brochure download request"
      categoryId={13}
      brochureUrl="/products/document%20Management%20System/Document-Management-System.pdf"
      downloadFilename="Document-Management-System-Brochure.pdf"
    />
  );
}
