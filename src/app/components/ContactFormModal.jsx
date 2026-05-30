"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function ContactFormModal({
  isOpen,
  onClose,
  preSelectedType,
  preSelectedItem,
  allItems = []
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
    const fetchCategories = async () => {
      if (!isOpen) return;

      setIsLoadingCategories(true);
      try {
        // Determine API endpoint based on page type
        let endpoint = 'general';
        const pageTypeLower = (preSelectedType || '').toLowerCase();

        if (pageTypeLower.includes('product')) {
          endpoint = 'products';
        } else if (pageTypeLower.includes('service')) {
          endpoint = 'services';
        } else if (pageTypeLower.includes('industry')) {
          endpoint = 'industries';
        }

        const response = await fetch(`https://crm.isarva.in/api/product-categories/${endpoint}`);
        const data = await response.json();

        if (data.categories) {
          setCategories(data.categories);

          // Log for debugging
          console.log('Fetched categories:', data.categories);
          console.log('PreSelectedItem:', preSelectedItem);
          console.log('PreSelectedType:', preSelectedType);
          console.log('Category names from API:', data.categories.map(c => c.category_name));

          // Pre-select item if it matches
          if (preSelectedItem) {
            // Normalize strings for better matching
            const normalizeStr = (str) => {
              return str
                .toLowerCase()
                .trim()
                .replace(/–/g, ' ')    // EN DASH to space
                .replace(/—/g, ' ')    // EM DASH to space
                .replace(/-/g, ' ')    // Regular hyphen to space
                .replace(/\s+/g, ' ')  // Multiple spaces to single space
                .replace(/&/g, 'and')  // & to "and"
                .replace(/\band\b/g, '&');  // "and" back to &, then both become same
            };

            // Extract key words (remove common filler words)
            const extractKeyWords = (str) => {
              const commonWords = ['and', '&', 'the', 'a', 'an', 'software', 'application', 'system'];
              return normalizeStr(str)
                .split(' ')
                .filter(word => !commonWords.includes(word) && word.length > 0)
                .join(' ');
            };

            const normalizedPreSelected = normalizeStr(preSelectedItem);
            const keyWordsPreSelected = extractKeyWords(preSelectedItem);

            console.log('Normalized preSelected:', normalizedPreSelected);
            console.log('Key words preSelected:', keyWordsPreSelected);

            const matchedCategory = data.categories.find(cat => {
              const normalizedCatName = normalizeStr(cat.category_name);
              const keyWordsCatName = extractKeyWords(cat.category_name);

              console.log(`Testing "${cat.category_name}": normalized="${normalizedCatName}", keywords="${keyWordsCatName}"`);

              // Check multiple matching strategies in order of specificity
              const isMatch = (
                // 1. Exact match (normalized) - highest priority
                normalizedCatName === normalizedPreSelected ||

                // 2. Exact keyword match (all words match)
                keyWordsCatName === keyWordsPreSelected ||

                // 3. Category name exactly contains preselected (full phrase match)
                normalizedCatName === normalizedPreSelected ||

                // 4. Preselected contains category (must be exact substring with word boundaries)
                (normalizedPreSelected.includes(normalizedCatName) &&
                  normalizedCatName.split(' ').length > 1) ||

                // 5. Category contains preselected (must be exact substring with word boundaries)
                (normalizedCatName.includes(normalizedPreSelected) &&
                  normalizedPreSelected.split(' ').length > 1) ||

                // 6. First significant words match (at least 2 words)
                (keyWordsCatName.split(' ').length >= 2 &&
                  keyWordsPreSelected.split(' ').length >= 2 &&
                  keyWordsCatName.split(' ').slice(0, 2).join(' ') ===
                  keyWordsPreSelected.split(' ').slice(0, 2).join(' '))
              );

              if (isMatch) {
                console.log(`✓ MATCHED: "${cat.category_name}"`);
              }

              return isMatch;
            });

            console.log('Matched category:', matchedCategory);

            if (matchedCategory) {
              setFormData(prev => ({
                ...prev,
                selectedItem: matchedCategory.category_name,
                selectedCategoryId: matchedCategory.id
              }));
              console.log('Auto-selected:', matchedCategory.category_name);
            } else {
              console.warn(`No matching category found for "${preSelectedItem}"`);
              console.log('Available categories:', data.categories.map(c => c.category_name));
            }
          }
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]);
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

      if (data.success) {
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

        // Redirect to thank you page with context
        const queryParams = new URLSearchParams({
          type: type,
          ...(formData.selectedItem && { item: formData.selectedItem }),
          ...(!formData.selectedItem && preSelectedItem && { item: preSelectedItem })
        });

        // Send custom event to GTM for 100% accurate success tracking
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'enquiry_success'
          });
        }

        router.push(`/thank-you?${queryParams.toString()}`);
      } else {
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
      console.error('Form submission error:', error);
      setSubmitStatus("error");
      setIsSubmitting(false);
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (!isOpen) return null;

  // Use portal to render modal outside the DOM hierarchy
  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-xl md:max-w-3xl w-full flex flex-col overflow-hidden">
        {/* Compact Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex-shrink-0 flex items-center justify-between">
          <h2 className="text-xl text-white text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">Request a Demo</h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Ultra-Compact Form Body */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} id="main-enquiry-submit" className="p-4 md:p-6 space-y-3 md:space-y-4">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 rounded-xl border-2 border-gray-100 text-gray-900 focus:border-orange-400 focus:outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Full Name *"
                />
              </div>
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 rounded-xl border-2 border-gray-100 text-gray-900 focus:border-orange-400 focus:outline-none transition-all bg-gray-50/50 text-sm"
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 rounded-xl border-2 border-gray-100 text-gray-900 focus:border-orange-400 focus:outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Phone Number *"
                />
              </div>
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 rounded-xl border-2 border-gray-100 text-gray-900 focus:border-orange-400 focus:outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Company Name *"
                />
              </div>
            </div>

            {/* Row 3: Dropdown */}
            <div>
              <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">
                Interested In {preSelectedType ? `(${preSelectedType})` : ""} *
              </label>
              <div className="relative group">
                <select
                  name="selectedItem"
                  value={formData.selectedItem}
                  onChange={handleChange}
                  required
                  disabled={isLoadingCategories}
                  className="w-full px-3 md:px-4 py-2.5 rounded-xl border-2 border-gray-100 text-gray-900 focus:border-orange-400 focus:outline-none transition-all bg-gray-50/50 text-sm disabled:cursor-not-allowed appearance-none pr-10"
                >
                  <option value="">
                    {isLoadingCategories ? "Loading..." : `Select ${preSelectedType || "Product"}`}
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
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 group-focus-within:text-orange-500 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 4: Message */}
            <div>
              <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 md:px-4 py-2 rounded-xl border-2 border-gray-100 text-gray-900 focus:border-orange-400 focus:outline-none transition-all bg-gray-50/50 text-sm resize-none"
                placeholder="Message (Optional)..."
              ></textarea>
            </div>

            {/* Compact Submit */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-3 px-6 rounded-xl transition-all shadow-lg shadow-orange-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Submitting...</span>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Status Messages - Inline */}
            {submitStatus === "success" && (
              <p className="text-center text-xs font-bold text-green-600 animate-bounce">
                ✓ Success! We'll contact you soon.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-center text-xs font-bold text-red-500">
                ⚠ {errorMessage || "Check details"}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );

  // Render modal using portal to body element
  return typeof window !== 'undefined'
    ? createPortal(modalContent, document.body)
    : null;
}
