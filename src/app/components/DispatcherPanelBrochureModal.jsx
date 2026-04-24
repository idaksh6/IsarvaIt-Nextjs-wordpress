"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function DispatcherPanelBrochureModal({ 
  isOpen, 
  onClose
}) {
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

  // Use category ID 40 for Dispatcher Panel
  const categoryId = 40;

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

    try {
      // Prepare data for API
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: 'Dispatcher Panel Brochure Download Request',
        message: formData.message || 'Dispatcher Panel Brochure download request',
        pageType: 'Product',
        itemName: 'Dispatcher Panel',
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
        link.href = '/products/dispatcher%20Panel/Dispatcher-Panel.pdf';
        link.download = 'Dispatcher-Panel-Brochure.pdf';
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

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus('error');
        // Parse error message for user-friendly display
        let friendlyError = 'Failed to submit form. Please try again.';
        if (typeof data.error === 'string') {
          const prefix = 'Failed to submit Dispatcher Panel  Brochure  Request: ';
          if (data.error.includes('mobile') || data.error.includes('phone')) {
            friendlyError = prefix + (data.error.includes('associated') ? 'This phone number is already registered.' : 'Please enter a valid phone number.');
          } else if (data.error.includes('email')) {
            friendlyError = prefix + ((data.error.includes('taken') || data.error.includes('associated')) ? 'This email address is already registered.' : 'Please enter a valid email address.');
          } else {
            friendlyError = prefix + data.error;
          }
        }
        setErrorMessage(friendlyError);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          disabled={isSubmitting}
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-orange-600 px-8 py-6 text-white">
          <h2 className="text-2xl font-bold">Download Dispatcher Panel Brochure</h2>
          <p className="text-red-100 mt-2">Fill in your details to get instant access</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
              placeholder="your.email@company.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
              placeholder="+91 00000 00000"
            />
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
              placeholder="Your company name"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Additional Comments
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Any specific requirements or questions?"
            ></textarea>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              <p className="font-semibold">Success! 🎉</p>
              <p className="text-sm">Your brochure is downloading now...</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              <p className="font-semibold">Error</p>
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold py-3 px-6 rounded-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Download Brochure</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );

  // Use createPortal to render modal at document.body level
  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}
