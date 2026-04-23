"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Building2, ChevronRight, Sparkles } from "lucide-react";

interface PartnerFormSectionProps {
  id?: string;
  preSelectedType?: string;
  preSelectedItem?: string;
}

export default function PartnerFormSection({ 
  id = "partner-inquiry-form",
  preSelectedType = "General",
  preSelectedItem = "Channel Partner Inquiry"
}: PartnerFormSectionProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    selectedItem: preSelectedItem,
    selectedCategoryId: "",
    message: ""
  });
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoadingCategories(true);
      try {
        const response = await fetch(`https://crm.isarva.in/api/product-categories/general`);
        const data = await response.json();

        if (data.categories) {
          setCategories(data.categories);
          
          // Try to find matching category for ID
          const matched = data.categories.find((cat: any) => 
            cat.category_name.toLowerCase().includes(preSelectedItem.toLowerCase())
          );
          if (matched) {
            setFormData(prev => ({
              ...prev,
              selectedItem: matched.category_name,
              selectedCategoryId: matched.id
            }));
          }
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    fetchCategories();
  }, [preSelectedItem]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'selectedItem') {
      const selectedCategory = categories.find(cat => cat.category_name === value);
      setFormData(prev => ({
        ...prev,
        selectedItem: value,
        selectedCategoryId: selectedCategory ? selectedCategory.id : ""
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: `Partner Inquiry: ${formData.selectedItem}`,
        message: formData.message,
        pageType: "Partner",
        itemName: formData.selectedItem,
        categoryId: formData.selectedCategoryId || null
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        // Send GTM event
        if ((window as any).dataLayer) {
          (window as any).dataLayer.push({ event: 'enquiry_success' });
        }
        
        // Brief delay before redirecting to show success state
        setTimeout(() => {
          router.push(`/thank-you?type=contact&item=${encodeURIComponent(formData.selectedItem)}`);
        }, 1500);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-24 relative overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Content Side */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3 h-3" />
                  Connect with us
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Ready to Start Your <span className="text-emerald-600">Journey?</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Fill out the form to become an authorized Isarva partner. Our team will review your application and get in touch within 24 hours.
                </p>
                
                <div className="space-y-6">
                  {[
                    "Priority Backend Support",
                    "Lucrative Commission Structure",
                    "Silver & Gold Tier Benefits",
                    "Expert Training & Resources"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                        <ChevronRight className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-semibold text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Form Side */}
            <div className="lg:w-2/3 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <User className="w-4 h-4 text-emerald-500" /> Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full h-14 px-5 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-emerald-500" /> Professional Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                        className="w-full h-14 px-5 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-emerald-500" /> Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98XXX XXXXX"
                        className="w-full h-14 px-5 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-emerald-500" /> Organization Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your Company Hub"
                        className="w-full h-14 px-5 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium"
                      />
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Inquiry Type</label>
                    <select
                      name="selectedItem"
                      value={formData.selectedItem}
                      onChange={handleChange}
                      required
                      className="w-full h-14 px-5 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select an inquiry type</option>
                      {categories.map((cat: any) => (
                        <option key={cat.id} value={cat.category_name}>
                          {cat.category_name}
                        </option>
                      ))}
                      {!categories.some(c => c.category_name === preSelectedItem) && (
                        <option value={preSelectedItem}>{preSelectedItem}</option>
                      )}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Any specific questions?</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us a bit about your current reach or client base..."
                      className="w-full p-5 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium resize-none"
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === "error" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-bold"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {submitStatus === "success" && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-2xl text-sm font-bold"
                    >
                      Application submitted! Redirecting to thank you page...
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`press-illusion-btn-orange w-full h-16 text-lg flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
