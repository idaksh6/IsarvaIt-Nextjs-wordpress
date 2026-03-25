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
        
        const response = await fetch(`https://crm-demo.isarva.in/api/product-categories/${endpoint}`);
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
              const commonWords = ['and', '&', 'the', 'a', 'an', 'software', 'application', 'system', 'service', 'solution', 'services'];
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
              
              // Check multiple matching strategies
              const isMatch = (
                // 1. Exact match (normalized)
                normalizedCatName === normalizedPreSelected ||
                
                // 2. Category contains preselected
                normalizedCatName.includes(normalizedPreSelected) ||
                
                // 3. Preselected contains category
                normalizedPreSelected.includes(normalizedCatName) ||
                
                // 4. Key words match (ignoring filler words)
                keyWordsCatName === keyWordsPreSelected ||
                keyWordsCatName.includes(keyWordsPreSelected) ||
                keyWordsPreSelected.includes(keyWordsCatName) ||
                
                // 5. First 2-3 significant words match
                (keyWordsCatName.split(' ').slice(0, 2).join(' ') === 
                 keyWordsPreSelected.split(' ').slice(0, 2).join(' ') &&
                 keyWordsCatName.split(' ').length >= 2)
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
        
        if (pageTypeLower.includes('product')) {
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
        
        router.push(`/thank-you?${queryParams.toString()}`);
      } else {
        setSubmitStatus("error");
        setIsSubmitting(false);
        
        // Display the error message from API
        setErrorMessage(data.error || "Something went wrong. Please try again.");
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
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 px-8 py-6 rounded-t-3xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-1">Request a Demo</h2>
              <p className="text-green-50">Let's discuss how we can help your business</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Form Container */}
        <div className="overflow-y-auto flex-1 scrollbar-thin">
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 focus:border-green-400 focus:outline-none transition-colors duration-200"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 focus:border-green-400 focus:outline-none transition-colors duration-200"
                placeholder="john@company.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 focus:border-green-400 focus:outline-none transition-colors duration-200"
                placeholder="+1 (555) 000-0000"
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
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 focus:border-green-400 focus:outline-none transition-colors duration-200"
                placeholder="Your Company"
              />
            </div>

            {/* Selected Item Dropdown */}
            <div>
              <label htmlFor="selectedItem" className="block text-sm font-semibold text-gray-700 mb-2">
                Interested In {preSelectedType ? `(${preSelectedType})` : ""} *
              </label>
              <select
                id="selectedItem"
                name="selectedItem"
                value={formData.selectedItem}
                onChange={handleChange}
                required
                disabled={isLoadingCategories}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-black focus:border-green-400 focus:outline-none transition-colors duration-200 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
              >
                <option value="">
                  {isLoadingCategories ? "Loading..." : `Select ${preSelectedType || "an option"}`}
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.category_name}>
                    {category.category_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-900 focus:border-green-400 focus:outline-none transition-colors duration-200 resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>
          </div>

          {/* Submit Status */}
          {submitStatus === "success" && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-center gap-2 text-green-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Thank you! We'll contact you soon.</span>
              </div>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-center gap-2 text-red-700">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <span className="font-semibold block">Failed to submit</span>
                  <span className="text-sm">{errorMessage || "Something went wrong. Please try again."}</span>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-8 flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 press-illusion-btn bg-green-400 text-white font-bold px-8 py-4 text-lg items-center justify-center space-x-2 inline-flex disabled:opacity-50 disabled:cursor-not-allowed"
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
                  <span>Submit Request</span>
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
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-4 text-lg font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
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
