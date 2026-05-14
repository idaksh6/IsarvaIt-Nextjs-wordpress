"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ContactForm({ pageType = "Contact Page", itemName = "" }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Prefetch thank you page for faster redirection
  useEffect(() => {
    router.prefetch('/thank-you');
  }, [router]);

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
        ...formData,
        pageType,
        itemName
      };

      console.log('Submitting form data:', submissionData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        // Determine page type for thank you page
        let type = 'contact';
        if (pageType.toLowerCase().includes('product')) {
          type = 'product';
        } else if (pageType.toLowerCase().includes('service')) {
          type = 'service';
        } else if (pageType.toLowerCase().includes('industry')) {
          type = 'industry';
        }

        // Redirect to thank you page with context
        const queryParams = new URLSearchParams({
          type: type,
          ...(itemName && { item: itemName })
        });

        // Send custom event to GTM for 100% accurate success tracking
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'enquiry_success'
          });
        }

        router.push(`/thank-you?${queryParams.toString()}`);
      } else {
        console.error('Form submission failed:', data);
        setSubmitStatus("error");

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
        setTimeout(() => {
          setSubmitStatus(null);
          setErrorMessage("");
        }, 7000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="main-enquiry-submit" className="space-y-6" aria-label="Contact form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Full name"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Email address"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            aria-label="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            aria-required="true"
            aria-label="Organization name"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
            placeholder="Your Company"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          aria-required="true"
          aria-label="Subject"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
          placeholder="How can we help you?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          aria-required="true"
          aria-label="Message"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none resize-none text-gray-900"
          placeholder="Tell us more about your project..."
        />
      </div>

      {submitStatus === "success" && (
        <div className="rounded-xl bg-emerald-50 border-2 border-emerald-200 p-4" role="alert" aria-live="polite">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-emerald-900">Message sent successfully!</p>
              <p className="text-sm text-emerald-700">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-xl bg-red-50 border-2 border-red-200 p-4" role="alert" aria-live="assertive">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-red-900">Failed to send message</p>
              <p className="text-sm text-red-700">{errorMessage || "Please try again or contact us directly."}</p>
            </div>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        aria-label={isSubmitting ? "Sending message" : "Send message"}
        className="press-illusion-btn-orange bg-orange-500 text-white md:mx-0 mx-auto font-bold px-8 w-fit py-4 text-lg items-center space-x-2 flex disabled:opacity-50 disabled:cursor-not-allowed  justify-center"
      >
        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        {!isSubmitting && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 9"
            className="h-2 w-4"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </button>
    </form>
  );
}
