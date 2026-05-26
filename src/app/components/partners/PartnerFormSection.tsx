"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { Send, User, Mail, Phone, Building2, ChevronRight, ChevronDown, Sparkles } from "lucide-react";

interface PartnerFormSectionProps {
  id?: string;
  preSelectedType?: string;
  preSelectedItem?: string;
}

export default function PartnerFormSection({
  id = "partner-inquiry-form",
  preSelectedType = "General",
  preSelectedItem = "General Partner Inquiry"
}: PartnerFormSectionProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    selectedItem: preSelectedItem,
    selectedCategoryId: "",
    message: "",
    otherBusinessType: "",
    tier: preSelectedItem || "General Partner Inquiry"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (preSelectedItem) {
      setFormData(prev => ({ ...prev, tier: preSelectedItem }));
    }
    // Prefetch thank you page for faster redirection
    router.prefetch('/thank-you');
  }, [preSelectedItem, router]);

  const businessTypes = [
    "Digital Marketing",
    "IT Services",
    "Independent Consultant",
    "Software Development",
    "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        subject: `Partner Inquiry: ${formData.tier}`,
        message: `[Selected Tier: ${formData.tier}]\n\n${formData.message}`,
        pageType: "Partner",
        itemName: formData.tier,
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
          router.push(`/thank-you?type=partner&item=${encodeURIComponent(formData.tier)}`);
        }, 1500);
      } else {
        setErrorMessage("");

        let friendlyError = "Something went wrong. Please try again.";
        if (typeof data.error === "string") {
          try {
            if (data.error.includes('{')) {
              const jsonStr = data.error.substring(data.error.indexOf('{'));
              const errorObj = JSON.parse(jsonStr);
              if (errorObj.message) {
                friendlyError = errorObj.message;
                if (friendlyError.includes("already registered")) {
                  friendlyError = "This Email or Mobile number is already registered for this request.";
                }
              }
            } else if (data.error.toLowerCase().includes("mobile") || data.error.toLowerCase().includes("phone")) {
              friendlyError = (data.error.toLowerCase().includes("registered") || data.error.toLowerCase().includes("taken")) ? "This phone number is already registered." : "Please enter a valid phone number.";
            } else if (data.error.toLowerCase().includes("email")) {
              friendlyError = (data.error.toLowerCase().includes("registered") || data.error.toLowerCase().includes("taken")) ? "This email address is already registered." : "Please enter a valid email address.";
            } else {
              friendlyError = data.error;
            }
          } catch (e) {
            friendlyError = data.error;
          }
        }

        // Remove "CRM API error" prefix
        friendlyError = friendlyError.replace(/CRM API error \(\d+\):\s*/g, '');

        setErrorMessage(friendlyError);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const viewportConfig = { once: true };

  const contentVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const formVariants: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const messageVariants: Variants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: "auto", transition: { duration: 0.3 } }
  };

  return (
    <section id={id} className="py-10 lg:py-16 relative overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">

            {/* Content Side */}
            <div className="lg:w-1/3">
              <motion.div
                variants={contentVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={viewportConfig}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">

                  Connect with us
                </div>
                <h2 className="text-gray-900 mb-6 text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter uppercase">
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
                variants={formVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={viewportConfig}
                className="bg-white rounded-[24px] md:rounded-[32px] p-5 sm:p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-body">
                        <User className="w-4 h-4 text-emerald-500" /> Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full h-14 px-4 md:px-5 truncate rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-body">
                        <Mail className="w-4 h-4 text-emerald-500" /> Professional Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                        className="w-full h-14 px-4 md:px-5 truncate rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-body">
                        <Phone className="w-4 h-4 text-emerald-500" /> Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98XXX XXXXX"
                        className="w-full h-14 px-4 md:px-5 truncate rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-body">
                        <Building2 className="w-4 h-4 text-emerald-500" /> Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your Company Hub"
                        className="w-full h-14 px-4 md:px-5 truncate rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium"
                      />
                    </div>
                  </div>

                  {/* Partnership Tier Selection */}
                  <div className="space-y-2 relative">
                    <label className="text-sm font-bold text-gray-700 flex items-center gap-2 font-body">
                      <Sparkles className="w-4 h-4 text-emerald-500" /> Interested Partnership Tier*
                    </label>
                    <div className="relative">
                      <select
                        name="tier"
                        value={formData.tier}
                        onChange={handleChange}
                        required
                        className="w-full h-14 pl-4 md:pl-5 pr-10 md:pr-12 truncate rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium bg-white appearance-none cursor-pointer"
                      >
                        <option value="General Partner Inquiry">General Partner Inquiry</option>
                        <option value="Gold Tier Inquiry">Gold Tier Inquiry</option>
                        <option value="Silver Tier Inquiry">Silver Tier Inquiry</option>
                        <option value="Bronze Tier Inquiry">Bronze Tier Inquiry</option>
                        <option value="Partnership Model Inquiry">Partnership Model Inquiry</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 w-5 h-5" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Type of Business*</label>
                    <div className="relative">
                      <select
                        name="selectedItem"
                        value={formData.selectedItem}
                        onChange={handleChange}
                        required
                        className="w-full h-14 pl-4 md:pl-5 pr-10 md:pr-12 truncate rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 w-5 h-5" />
                    </div>
                  </div>

                  {formData.selectedItem === "Other" && (
                    <motion.div
                      variants={messageVariants}
                      initial="initial"
                      animate="animate"
                      className="space-y-2"
                    >
                      <label className="text-sm font-bold text-emerald-600">Please specify your business type*</label>
                      <input
                        type="text"
                        name="otherBusinessType"
                        value={formData.otherBusinessType}
                        onChange={handleChange}
                        required
                        placeholder="Type your business category"
                        className="w-full h-14 px-4 md:px-5 truncate rounded-2xl border-2 border-emerald-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium"
                      />
                    </motion.div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Any specific questions?</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us a bit about your current reach or client base..."
                      className="w-full p-4 md:p-5 rounded-2xl border-2 border-gray-100 focus:border-emerald-500 focus:bg-white outline-none transition-all text-gray-900 font-medium resize-none"
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === "error" && (
                    <motion.div
                      variants={messageVariants}
                      initial="initial"
                      animate="animate"
                      className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-bold"
                    >
                      {errorMessage}
                    </motion.div>
                  )}

                  {submitStatus === "success" && (
                    <motion.div
                      variants={messageVariants}
                      initial="initial"
                      animate="animate"
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
