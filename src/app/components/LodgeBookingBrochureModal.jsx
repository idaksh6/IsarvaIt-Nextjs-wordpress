"use client";

import BrochureFormModal from "./BrochureFormModal";

export default function LodgeBookingBrochureModal({ isOpen, onClose }) {
  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Lodge Booking Brochure"
      itemName="Lodge Booking Software"
      subject="Lodge Booking Software Brochure Download Request"
      defaultMessage="Lodge Booking Software Brochure download request"
      categoryId={11}
      brochureUrl="/products/loadge%20Booking/Lodge-booking-Software-v3.pdf"
      downloadFilename="Lodge-Booking-Software-Brochure.pdf"
    />
  );
}
