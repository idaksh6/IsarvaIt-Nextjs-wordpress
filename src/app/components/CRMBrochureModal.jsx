"use client";

import { useState, useEffect } from "react";
import BrochureFormModal from "./BrochureFormModal";

export default function CRMBrochureModal({ isOpen, onClose }) {
  const [categoryId, setCategoryId] = useState(null);

  useEffect(() => {
    const fetchCategoryId = async () => {
      if (!isOpen) return;

      try {
        const response = await fetch(
          "https://crm.isarva.in/api/product-categories/products"
        );
        const data = await response.json();

        if (data.categories) {
          const crmCategory = data.categories.find(
            (cat) =>
              cat.category_name.toLowerCase() === "crm application" ||
              cat.category_name.toLowerCase() === "crm" ||
              (cat.category_name.toLowerCase().includes("crm") &&
                cat.category_name.toLowerCase().includes("application"))
          );
          setCategoryId(crmCategory ? crmCategory.id : 2);
        }
      } catch {
        setCategoryId(2);
      }
    };

    fetchCategoryId();
  }, [isOpen]);

  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download CRM Brochure"
      itemName="CRM Application"
      subject="CRM Brochure Download Request"
      defaultMessage="CRM Brochure download request"
      categoryId={categoryId}
      brochureUrl="/products/crm/CRM-Brochure.pdf"
      downloadFilename="CRM-Brochure.pdf"
    />
  );
}
