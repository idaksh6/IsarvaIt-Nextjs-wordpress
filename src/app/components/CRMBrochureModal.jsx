"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function CRMBrochureModal({
  isOpen,
  onClose
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [categoryId, setCategoryId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch CRM Application category ID and prefetch thank you page
  useEffect(() => {
    const fetchCategoryId = async () => {
      if (!isOpen) return;

      // Prefetch thank you page for faster redirection
      router.prefetch('/thank-you');

      try {
        const response = await fetch('https://crm.isarva.in/api/product-categories/products');
        const data = await response.json();

        if (data.categories) {
          // Find CRM Application category - be more specific
          const crmCategory = data.categories.find(
            cat => cat.category_name.toLowerCase() === 'crm application' ||
              cat.category_name.toLowerCase() === 'crm' ||
              (cat.category_name.toLowerCase().includes('crm') &&
                cat.category_name.toLowerCase().includes('application'))
          );

          if (crmCategory) {
            setCategoryId(crmCategory.id);
          } else {
            // Fallback to ID 2 if not found
            setCategoryId(2);
          }
        }
      } catch (error) {
        // Fallback to ID 2 on error
        setCategoryId(2);
      }
    };

    fetchCategoryId();
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
      // Prepare data for API
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: 'CRM Brochure Download Request',
        message: formData.message || 'CRM Brochure download request',
        pageType: 'Product',
        itemName: 'CRM Application',
        categoryId: categoryId
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');

        // Trigger PDF download
        const link = document.createElement('a');
        link.href = '/products/crm/CRM-Brochure.pdf';
        link.download = 'CRM-Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });

        // Redirect to thank you page after 1.5 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
          router.push(`/thank-you?type=brochure&item=${encodeURIComponent(submissionData.itemName)}`);
        }, 1500);
      } else {
        setSubmitStatus('error');
        // Parse error message for user-friendly display
        let friendlyError = 'Something went wrong. Please try again.';
        if (typeof data.error === 'string') {
          try {
            // Check if it's the CRM error format (contains JSON inside the string)
            if (data.error.includes('{')) {
              const jsonStr = data.error.substring(data.error.indexOf('{'));
              const errorObj = JSON.parse(jsonStr);
              if (errorObj.message) {
                friendlyError = errorObj.message;
                // Clean up the specific "already registered" message
                if (friendlyError.includes("already registered")) {
                  friendlyError = "This email address or mobile number is already registered for this request. Our team will contact you shortly.";
                }
              } else {
                // Handle field-specific validation errors (e.g., {"organization_name": ["..."]})
                const fieldErrors = [];
                for (const key in errorObj) {
                  if (Array.isArray(errorObj[key])) {
                    fieldErrors.push(errorObj[key][0]);
                  }
                }
                if (fieldErrors.length > 0) {
                  friendlyError = fieldErrors.join(', ');
                }
              }
            } else if (data.error.toLowerCase().includes('mobile') || data.error.toLowerCase().includes('phone')) {
              friendlyError = (data.error.toLowerCase().includes('registered') || data.error.toLowerCase().includes('taken'))
                ? 'This phone number is already registered.'
                : 'Please enter a valid phone number.';
            } else if (data.error.toLowerCase().includes('email')) {
              friendlyError = (data.error.toLowerCase().includes('registered') || data.error.toLowerCase().includes('taken'))
                ? 'This email address is already registered.'
                : 'Please enter a valid email address.';
            } else {
              friendlyError = data.error;
            }
          } catch (e) {
            friendlyError = data.error;
          }
        }

        // Remove "CRM API error (409):" prefix if it somehow leaked through
        friendlyError = friendlyError.replace(/CRM API error \(\d+\):\s*/g, '');

        setErrorMessage(friendlyError);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An error occurred. Please check your connection and try again.');
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl md:max-w-3xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-4 text-white flex-shrink-0 flex items-center justify-between gap-4">
          <h2 className="capitalize text-xl md:text-2xl font-bold tracking-tight">Download CRM Brochure</h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-white/50 hover:text-white/90 hover:bg-white/10 transition-colors focus:outline-none"
            disabled={isSubmitting}
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-3 md:space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 capitalize tracking-tight">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-sky-500 outline-none transition-all bg-gray-50/50 text-sm text-gray-900 text-black"
                  placeholder="Full Name *"
                />
              </div>
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 capitalize tracking-tight">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-sky-500 outline-none transition-all bg-gray-50/50 text-sm text-gray-900 text-black"
                  placeholder="Email Address *"
                />
              </div>
            </div>

            {/* Row 2: Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 capitalize tracking-tight">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-sky-500 outline-none transition-all bg-gray-50/50 text-sm text-gray-900 text-black"
                  placeholder="Phone Number *"
                />
              </div>
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 capitalize tracking-tight">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-sky-500 outline-none transition-all bg-gray-50/50 text-sm text-gray-900 text-black"
                  placeholder="Company Name *"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 capitalize tracking-tight">Comments (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-sky-500 outline-none transition-all bg-gray-50/50 text-sm text-gray-900 resize-none text-black"
                placeholder="Any specific requirements?"
              ></textarea>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p className="text-center text-xs font-bold text-green-600 animate-bounce">
                ✓ Success! Your brochure is downloading...
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-xs font-bold text-red-500">
                ⚠ {errorMessage || "Check details"}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black py-3 px-6 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg shadow-sky-100 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Submitting...</span>
                ) : (
                  <>
                    <span>Download Brochure</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
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

  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
