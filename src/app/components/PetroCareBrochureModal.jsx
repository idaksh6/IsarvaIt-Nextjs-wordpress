"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function PetroCareBrochureModal({ 
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Use category ID 30 for Petro Care
  const categoryId = 30;

  // Prevent body scroll and prefetch thank you page when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      router.prefetch('/thank-you');
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, router]);

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
        subject: 'Petro Care Brochure Download Request',
        message: formData.message || 'Petro Care Brochure download request',
        pageType: 'Product',
        itemName: 'Petro Care',
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
        link.href = '/products/petro%20care/petro-care.pdf';
        link.download = 'Petro-Care-Brochure.pdf';
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
                  friendlyError = "This Email or Mobile number is already registered for this request.";
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
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-4 text-white flex-shrink-0 flex items-center justify-between gap-4">
          <h2 className="text-xl text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Download Petro Care Brochure</h2>
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

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-3 md:space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-amber-500 outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Full Name *"
                />
              </div>
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-amber-500 outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Email Address *"
                />
              </div>
            </div>

            {/* Row 2: Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-amber-500 outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Phone Number *"
                />
              </div>
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Company Name *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-amber-500 outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Company Name *"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Comments (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-amber-500 outline-none transition-all bg-gray-50/50 text-sm resize-none"
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
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-black py-3 px-6 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-100 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

  // Use createPortal to render modal at document.body level
  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
