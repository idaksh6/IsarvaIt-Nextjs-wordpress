"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

const DEFAULT_WACRM_CONFIG = {
  productSlug: "expense_tracker",
  productLabel: "Expense Tracker",
  brochurePath: "/products/expense%20tracker/Expense-Tracker.pdf",
  webhookUrl: " https://c491-103-141-112-193.ngrok-free.app/api/leads/website",
  webhookSecret: "5adaa37f562284972e7d78ad97d24f079c02df4ecff9e5c5f12b0759f75b2162",
};

async function sendLeadToWacrm(form, wacrmConfig) {
  const res = await fetch(wacrmConfig.webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${wacrmConfig.webhookSecret}`,
      "ngrok-skip-browser-warning": "true",
    },
    body: JSON.stringify({
      phone: form.phone,
      name: form.name,
      email: form.email,
      company: form.company,
      comments: form.comments,
      product: wacrmConfig.productSlug,
      product_label: wacrmConfig.productLabel,
      brochure_path: wacrmConfig.brochurePath,
    }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.error || "WhatsApp send failed");
  return data;
}

export default function ExpenseTrackerBrochureModal({
  isOpen,
  onClose,
  wacrmConfig = DEFAULT_WACRM_CONFIG,
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const categoryId = 39;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      router.prefetch("/thank-you");
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    if (!formData.company) {
      setSubmitStatus("error");
      setIsSubmitting(false);
      setErrorMessage("The company name field is required.");
      return;
    }

    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: "Expense Tracker Brochure Download Request",
        message: formData.message || "Expense Tracker Brochure download request",
        pageType: "Product",
        itemName: "Expense Tracker",
        categoryId: categoryId,
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (data.success) {
        const brochurePath = wacrmConfig.brochurePath;

        try {
          await sendLeadToWacrm(
            {
              phone: formData.phone,
              name: formData.name,
              email: formData.email,
              company: formData.company,
              comments: formData.message,
            },
            wacrmConfig
          );
        } catch (wacrmErr) {
          console.error("wacrm WhatsApp send failed:", wacrmErr);
        }

        setSubmitStatus("success");

        const link = document.createElement("a");
        link.href = brochurePath;
        link.download = "Expense-Tracker-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });

        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
          router.push(
            `/thank-you?type=brochure&item=${encodeURIComponent(submissionData.itemName)}`
          );
        }, 1500);
      } else {
        setSubmitStatus("error");
        let friendlyError = "Something went wrong. Please try again.";
        if (typeof data.error === "string") {
          try {
            if (data.error.includes("{")) {
              const jsonStr = data.error.substring(data.error.indexOf("{"));
              const errorObj = JSON.parse(jsonStr);
              if (errorObj.message) {
                friendlyError = errorObj.message;
                if (friendlyError.includes("already registered")) {
                  friendlyError =
                    "This Email or Mobile number is already registered for this request.";
                }
              } else {
                const fieldErrors = [];
                for (const key in errorObj) {
                  if (Array.isArray(errorObj[key])) {
                    fieldErrors.push(errorObj[key][0]);
                  }
                }
                if (fieldErrors.length > 0) {
                  friendlyError = fieldErrors.join(", ");
                }
              }
            } else if (
              data.error.toLowerCase().includes("mobile") ||
              data.error.toLowerCase().includes("phone")
            ) {
              friendlyError =
                data.error.toLowerCase().includes("registered") ||
                  data.error.toLowerCase().includes("taken")
                  ? "This phone number is already registered."
                  : "Please enter a valid phone number.";
            } else if (data.error.toLowerCase().includes("email")) {
              friendlyError =
                data.error.toLowerCase().includes("registered") ||
                  data.error.toLowerCase().includes("taken")
                  ? "This email address is already registered."
                  : "Please enter a valid email address.";
            } else {
              friendlyError = data.error;
            }
          } catch (err) {
            friendlyError = data.error;
          }
        }

        friendlyError = friendlyError.replace(/CRM API error \(\d+\):\s*/g, "");
        setErrorMessage(friendlyError);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl md:max-w-3xl flex flex-col overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-4 text-white flex-shrink-0 flex items-center justify-between gap-4">
          <h2 className="capitalize">Download Expense Tracker Brochure</h2>
          <button
            onClick={handleClose}
            className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
            disabled={isSubmitting}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-3 md:space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 capitalize tracking-tight">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-emerald-500 outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Full Name *"
                />
              </div>
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 capitalize tracking-tight">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-emerald-500 outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Email Address *"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 capitalize tracking-tight">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-emerald-500 outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Phone Number *"
                />
              </div>
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 capitalize tracking-tight">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-emerald-500 outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Company Name *"
                />
              </div>
            </div>

            <div>
              <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 capitalize tracking-tight">
                Comments (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-emerald-500 outline-none transition-all bg-gray-50/50 text-sm resize-none"
                placeholder="Any specific requirements?"
              ></textarea>
            </div>

            {submitStatus === "success" && (
              <p className="text-center text-xs font-bold text-emerald-600 animate-bounce">
                ✓ Success! Your brochure is downloading...
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-center text-xs font-bold text-red-500">
                ⚠ {errorMessage || "Check details"}
              </p>
            )}

            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg shadow-emerald-100 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Submitting...</span>
                ) : (
                  <>
                    <span>Download Brochure</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return typeof window !== "undefined" ? createPortal(modalContent, document.body) : null;
}


