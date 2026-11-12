"use client";

import BrochureFormModal from "./BrochureFormModal";

// Trigger WhatsApp template via wacrm after brochure form submit
async function sendLeadToWacrm(form, options) {
  const res = await fetch(
    "https://273d-103-141-112-193.ngrok-free.app/api/leads/website",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 5adaa37f562284972e7d78ad97d24f079c02df4ecff9e5c5f12b0759f75b2162",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({
        phone: form.phone,
        name: form.name,
        email: form.email,
        company: form.company,
        comments: form.comments,
        product: options.productSlug,
        product_label: options.productLabel,
        brochure_path: options.brochurePath,
      }),
    }
  );
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "WhatsApp send failed");
  return data;
}

export default function ExpenseTrackerBrochureModal({ isOpen, onClose }) {
  const handleBeforeDownload = async (formData, brochurePath) => {
    // Non-blocking: brochure download still proceeds if wacrm fails
    try {
      await sendLeadToWacrm(
        {
          phone: formData.phone,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          comments: formData.message,
        },
        {
          productSlug: "expense_tracker",
          productLabel: "Expense Tracker",
          brochurePath,
        }
      );
    } catch (wacrmErr) {
      console.error("wacrm WhatsApp send failed:", wacrmErr);
    }
  };

  return (
    <BrochureFormModal
      isOpen={isOpen}
      onClose={onClose}
      title="Download Expense Tracker Brochure"
      itemName="Expense Tracker"
      subject="Expense Tracker Brochure Download Request"
      defaultMessage="Expense Tracker Brochure download request"
      categoryId={39}
      brochureUrl="/products/expense%20tracker/Expense-Tracker.pdf"
      downloadFilename="Expense-Tracker-Brochure.pdf"
      onBeforeDownload={handleBeforeDownload}
    />
  );
}
