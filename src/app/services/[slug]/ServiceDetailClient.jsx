"use client";

import { useState } from "react";
import ContactFormModal from "../../components/ContactFormModal";

export default function ServiceDetailClient({ service, servicesData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="press-illusion-btn bg-green-400 text-white font-bold px-8 py-4 text-lg items-center space-x-2 inline-flex"
      >
        <span>Request Demo</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 9"
          className="h-2 w-4"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preSelectedType="Service"
        preSelectedItem={service.title}
        allItems={servicesData}
      />
    </>
  );
}
