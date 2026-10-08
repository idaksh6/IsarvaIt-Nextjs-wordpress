"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ContactFormModal({
  isOpen,
  onClose,
  preSelectedType,
  preSelectedItem,
  allItems = [],
  successRedirectUrl = null,
  successDownloadUrl = null,
  onSubmitSuccess = null,
  treatDuplicateAsSuccess = false,
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    selectedItem: "",
    selectedCategoryId: "",
    message: ""
  });
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      // Reset form data when modal closes
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        selectedItem: "",
        selectedCategoryId: "",
        message: ""
      });
      setSubmitStatus(null);
      setErrorMessage("");
    }
  }, [isOpen]);

  // Fetch categories from API based on page type
  useEffect(() => {
    const normalizeStr = (str) =>
      str
        .toLowerCase()
        .trim()
        .replace(/–/g, " ")
        .replace(/—/g, " ")
        .replace(/-/g, " ")
        .replace(/\s+/g, " ")
        .replace(/&/g, "and")
        .replace(/\band\b/g, "&");

    const extractKeyWords = (str) => {
      const commonWords = ["and", "&", "the", "a", "an", "software", "application", "system"];
      return normalizeStr(str)
        .split(" ")
        .filter((word) => !commonWords.includes(word) && word.length > 0)
        .join(" ");
    };

    const findMatchedCategory = (categories, item) => {
      const normalizedPreSelected = normalizeStr(item);
      const keyWordsPreSelected = extractKeyWords(item);
      const compactPreSelected = normalizedPreSelected.replace(/\s/g, "");

      // 1. Try exact match first
      const exactMatch = categories.find(
        (cat) => normalizeStr(cat.category_name) === normalizedPreSelected
      );
      if (exactMatch) return exactMatch;

      // 2. Try billsoft match
      if (compactPreSelected.includes("billsoft")) {
        const billSoftMatch = categories.find((cat) => {
          const compactCat = normalizeStr(cat.category_name).replace(/\s/g, "");
          return compactCat.includes("billsoft");
        });
        if (billSoftMatch) return billSoftMatch;
      }

      // 3. Fallback to substring / fuzzy match
      return categories.find((cat) => {
        const normalizedCatName = normalizeStr(cat.category_name);
        const keyWordsCatName = extractKeyWords(cat.category_name);

        return (
          normalizedCatName === normalizedPreSelected ||
          keyWordsCatName === keyWordsPreSelected ||
          (normalizedPreSelected.includes(normalizedCatName) &&
            normalizedCatName.split(" ").length > 1) ||
          (normalizedCatName.includes(normalizedPreSelected) &&
            normalizedPreSelected.split(" ").length > 1) ||
          (keyWordsCatName.split(" ").length >= 2 &&
            keyWordsPreSelected.split(" ").length >= 2 &&
            keyWordsCatName.split(" ").slice(0, 2).join(" ") ===
              keyWordsPreSelected.split(" ").slice(0, 2).join(" "))
        );
      });
    };

    const applyPreselection = (categories, item) => {
      let categoryList = [...categories];
      let matchedCategory = findMatchedCategory(categoryList, item);

      if (matchedCategory) {
        setCategories(categoryList);
        setFormData((prev) => ({
          ...prev,
          selectedItem: matchedCategory.category_name,
          selectedCategoryId: matchedCategory.id,
        }));
      } else if (item) {
        // Automatically add the pre-selected item to the categories dropdown list and select it
        const customCategory = {
          id: `custom_${item.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
          category_name: item,
        };
        const updatedList = [customCategory, ...categoryList];
        setCategories(updatedList);
        setFormData((prev) => ({
          ...prev,
          selectedItem: item,
          selectedCategoryId: customCategory.id,
        }));
      } else {
        setCategories(categoryList);
        setFormData((prev) => ({
          ...prev,
          selectedItem: "",
          selectedCategoryId: "",
        }));
      }
    };

    const fetchCategories = async () => {
      if (!isOpen) return;

      setIsLoadingCategories(true);
      try {
        let endpoint = "general";
        const pageTypeLower = (preSelectedType || "").toLowerCase();

        if (pageTypeLower.includes("product")) {
          endpoint = "products";
        } else if (pageTypeLower.includes("service")) {
          endpoint = "services";
        } else if (pageTypeLower.includes("industry")) {
          endpoint = "industries";
        }

        const response = await fetch(`https://crm.isarva.in/api/product-categories/${endpoint}`);
        const data = await response.json();

        if (data.categories) {
          if (preSelectedItem) {
            applyPreselection(data.categories, preSelectedItem);
          } else {
            setCategories(data.categories);
          }
        } else if (preSelectedItem) {
          applyPreselection([], preSelectedItem);
        }
      } catch (error) {
        if (preSelectedItem) {
          applyPreselection([], preSelectedItem);
        } else {
          setCategories([]);
        }
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, [isOpen, preSelectedType, preSelectedItem]);

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

    // If selecting a category, also capture its ID
    if (name === 'selectedItem') {
      const selectedCategory = categories.find(cat => cat.category_name === value);
      setFormData({
        ...formData,
        selectedItem: value,
        selectedCategoryId: selectedCategory ? selectedCategory.id : ""
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
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
        subject: `Demo Request: ${formData.selectedItem || preSelectedType || 'General Inquiry'}`,
        message: formData.message,
        pageType: preSelectedType || 'General',
        itemName: formData.selectedItem || preSelectedItem || '',
        categoryId: formData.selectedCategoryId || null
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      // Shared "success" side effects — also reused when the CRM reports the
      // lead is already registered (duplicate) and the caller opted into
      // treating that as success (e.g. gated PDF/ZIP downloads).
      const proceedAsSuccess = () => {
        // Determine page type for thank you page
        let type = 'contact';
        const pageTypeLower = (preSelectedType || '').toLowerCase();

        if (pageTypeLower.includes('brochure')) {
          type = 'brochure';
        } else if (pageTypeLower.includes('product')) {
          type = 'product';
        } else if (pageTypeLower.includes('service')) {
          type = 'service';
        } else if (pageTypeLower.includes('industry')) {
          type = 'industry';
        }

        // Close modal first
        onClose();

        // Send custom event to GTM for 100% accurate success tracking
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'enquiry_success'
          });
        }

        // Send Lead event to Meta Pixel (for HRMS)
        const isHrms =
          (formData.selectedItem && formData.selectedItem.toLowerCase().includes("hrms")) ||
          (preSelectedItem && preSelectedItem.toLowerCase().includes("hrms"));

        if (isHrms && typeof window !== "undefined" && typeof window.fbq === "function") {
          window.fbq("track", "Lead", {
            content_name: formData.selectedItem || preSelectedItem || "HRMS Software",
            content_category: preSelectedType || "Product",
          });
        }

        // Let the caller persist state (e.g. remember registration for this session)
        if (typeof onSubmitSuccess === 'function') {
          onSubmitSuccess();
        }

        // Optional gated file download (PDF/ZIP) then thank-you
        if (successDownloadUrl) {
          const link = document.createElement("a");
          link.href = successDownloadUrl;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.download = "";
          document.body.appendChild(link);
          link.click();
          link.remove();

          const queryParams = new URLSearchParams({
            type: "brochure",
            ...(formData.selectedItem && { item: formData.selectedItem }),
            ...(!formData.selectedItem && preSelectedItem && { item: preSelectedItem }),
          });
          router.push(`/thank-you?${queryParams.toString()}`);
          return;
        }

        // Optional post-submit redirect (e.g. product detail URL after Know More)
        if (successRedirectUrl) {
          window.location.href = successRedirectUrl;
          return;
        }

        // Redirect to thank you page with context
        const queryParams = new URLSearchParams({
          type: type,
          ...(formData.selectedItem && { item: formData.selectedItem }),
          ...(!formData.selectedItem && preSelectedItem && { item: preSelectedItem })
        });

        router.push(`/thank-you?${queryParams.toString()}`);
      };

      if (data.success) {
        proceedAsSuccess();
      } else {
        // If the lead is already registered, optionally treat as success so
        // gated downloads still work for returning visitors on this page.
        if (treatDuplicateAsSuccess) {
          const rawError = typeof data.error === 'string' ? data.error.toLowerCase() : '';
          const isDuplicate =
            rawError.includes('already registered') ||
            rawError.includes('already been taken') ||
            rawError.includes('has already been') ||
            rawError.includes('duplicate');
          if (isDuplicate) {
            proceedAsSuccess();
            return;
          }
        }

        setSubmitStatus("error");
        setIsSubmitting(false);

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
      setSubmitStatus("error");
      setIsSubmitting(false);
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (!isOpen) return null;

  // Use portal to render modal outside the DOM hierarchy
  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-xl md:rounded-2xl shadow-2xl max-w-lg md:max-w-4xl lg:max-w-5xl w-full overflow-hidden flex flex-col md:flex-row border border-slate-100 my-auto z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 md:top-4 md:right-4 z-30 w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100/90 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          aria-label="Close modal"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT COLUMN: Brand, Benefits & Trust (Desktop/Tablet Only) */}
        <div className="hidden md:flex md:w-[41%] lg:w-[37%] xl:w-[36%] flex-col justify-between p-5 md:p-6 lg:p-8 xl:p-9 relative overflow-hidden bg-[#eaf8f1] border-b md:border-b-0 md:border-r border-emerald-100/60">
          
          {/* Exact Background Graphic from Image */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            <Image
              src="/images/modal-left-bg.png"
              alt=""
              fill
              className="object-cover object-left-top"
              priority
              quality={95}
            />
          </div>

          <div className="relative z-10">
            {/* Eyebrow */}
            <span className="text-[#009b55] text-xs sm:text-[13px] font-black tracking-wider uppercase block mb-1.5">
              GET STARTED TODAY
            </span>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] xl:text-[42px] font-black text-slate-900 leading-[1.08] mb-3 tracking-tight">
              Request<br />
              <span className="text-[#009b55]">a Demo</span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-700 text-xs sm:text-sm lg:text-[14.5px] leading-relaxed mb-5 lg:mb-7 font-medium">
              Discover how our solutions can help you streamline operations and grow your business.
            </p>

            {/* 3 Value Proposition Items */}
            <div className="space-y-3.5 sm:space-y-4 lg:space-y-5">
              {/* Item 1: Personalized Demo */}
              <div className="flex items-start gap-3 sm:gap-3.5 lg:gap-4">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm border border-emerald-200/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm lg:text-[16px] font-extrabold text-slate-900 leading-tight">Personalized Demo</h4>
                  <p className="text-xs lg:text-[13px] text-slate-600 mt-0.5 leading-snug font-medium">Get a demo tailored to your business needs.</p>
                </div>
              </div>

              {/* Item 2: Expert Consultation */}
              <div className="flex items-start gap-3 sm:gap-3.5 lg:gap-4">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm border border-blue-200/60">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm lg:text-[16px] font-extrabold text-slate-900 leading-tight">Expert Consultation</h4>
                  <p className="text-xs lg:text-[13px] text-slate-600 mt-0.5 leading-snug font-medium">Talk to our product experts and get the right solution.</p>
                </div>
              </div>

              {/* Item 3: No Obligation */}
              <div className="flex items-start gap-3 sm:gap-3.5 lg:gap-4">
                <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-sm border border-purple-200/60">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="4" y="10" width="3.5" height="10" rx="1"></rect>
                    <rect x="10.25" y="4" width="3.5" height="16" rx="1"></rect>
                    <rect x="16.5" y="13" width="3.5" height="7" rx="1"></rect>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm lg:text-[16px] font-extrabold text-slate-900 leading-tight">No Obligation</h4>
                  <p className="text-xs lg:text-[13px] text-slate-600 mt-0.5 leading-snug font-medium">Free demo with no commitment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Badge in Left Column */}
          <div className="relative z-10 mt-5 pt-1">
            <div className="p-2 sm:p-2.5 lg:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200/70 shadow-sm flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 lg:w-4.5 lg:h-4.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-[11.5px] lg:text-[13px] font-extrabold text-slate-900 leading-tight">Your information is safe with us.</p>
                <p className="text-[10px] sm:text-[10.5px] lg:text-[11.5px] text-slate-600 leading-tight mt-0.5 font-medium">We never share your details with third parties.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Form & Trust Footer */}
        <div className="w-full md:w-[59%] lg:w-[63%] xl:w-[64%] p-5 sm:p-6 lg:p-8 xl:p-9 flex flex-col justify-between bg-[#eaf8f1] md:bg-white relative overflow-hidden">
          
          {/* Mobile-Only Background Graphic */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 md:hidden opacity-95">
            <Image
              src="/images/modal-left-bg.png"
              alt=""
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="relative z-10">
            {/* Header Title & Subtitle */}
            <div className="mb-5 pr-8">
              <h3 className="text-2xl sm:text-[28px] font-black text-slate-900 tracking-tight leading-tight">
                Request a Demo
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                Fill in your details and our team will get in touch with you shortly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} id="main-enquiry-submit" className="space-y-3.5 sm:space-y-4">
              
              {/* Row 1: Full Name & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name *"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address *"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Phone Number & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone Number *"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Company Name *"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Interested In (Product) Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Interested In ({preSelectedType || "Product"}) <span className="text-red-500">*</span>
                </label>
                <div className="relative flex items-center group">
                  <span className="absolute left-3.5 text-slate-400 pointer-events-none group-focus-within:text-[#009b55] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <rect x="3" y="3" width="7" height="7" rx="1.5" />
                      <rect x="14" y="3" width="7" height="7" rx="1.5" />
                      <rect x="3" y="14" width="7" height="7" rx="1.5" />
                      <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    </svg>
                  </span>
                  <select
                    name="selectedItem"
                    value={formData.selectedItem}
                    onChange={handleChange}
                    required
                    disabled={isLoadingCategories}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all disabled:cursor-not-allowed appearance-none cursor-pointer"
                  >
                    <option value="">
                      {isLoadingCategories ? "Loading..." : `Select a ${preSelectedType || "Product"}`}
                    </option>
                    {categories.map((category) => {
                      const displayName = category.category_name.replace(/\bcrm\b/gi, 'CRM');
                      return (
                        <option key={category.id} value={category.category_name}>
                          {displayName}
                        </option>
                      );
                    })}
                  </select>
                  <span className="absolute right-3.5 text-slate-400 pointer-events-none group-focus-within:text-[#009b55] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Row 4: Message (Optional) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  Message (Optional)
                </label>
                <div className="relative flex">
                  <span className="absolute left-3.5 top-3 text-slate-400 pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    placeholder="Message (Optional)..."
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm placeholder:text-slate-400 focus:bg-white focus:border-[#009b55] focus:ring-2 focus:ring-[#009b55]/15 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit CTA Button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00b05b] via-[#009b55] to-[#008048] hover:from-[#009e51] hover:to-[#00703e] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-700/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                      <span>Submitting...</span>
                    </span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {/* Status Message */}
              {submitStatus === "error" && (
                <p className="text-center text-xs font-bold text-red-500 pt-1">
                  ⚠ {errorMessage || "Please check your details and try again."}
                </p>
              )}
            </form>
          </div>

          {/* Bottom 3 Trust Badges */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-4 pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-200/60 md:border-slate-100 bg-white/70 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-xl p-2 sm:p-3 md:p-0 border md:border-0 border-white/80 shadow-xs md:shadow-none">
            {/* 100% Secure */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/60 shadow-xs">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-black text-slate-900 leading-tight">100% Secure</p>
                <p className="text-[9px] sm:text-[11px] text-slate-600 leading-tight mt-0.5 hidden xs:block sm:block">Your data is protected</p>
              </div>
            </div>

            {/* Privacy Assured */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-100/90 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200/60 shadow-xs">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-black text-slate-900 leading-tight">Privacy Assured</p>
                <p className="text-[9px] sm:text-[11px] text-slate-600 leading-tight mt-0.5 hidden xs:block sm:block">We never share details</p>
              </div>
            </div>

            {/* Quick Response */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-1 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-100/90 text-orange-700 flex items-center justify-center shrink-0 border border-orange-200/60 shadow-xs">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-black text-slate-900 leading-tight">Quick Response</p>
                <p className="text-[9px] sm:text-[11px] text-slate-600 leading-tight mt-0.5 hidden xs:block sm:block">Our team contacts soon</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  // Render modal using portal to body element
  return typeof window !== 'undefined'
    ? createPortal(modalContent, document.body)
    : null;
}
