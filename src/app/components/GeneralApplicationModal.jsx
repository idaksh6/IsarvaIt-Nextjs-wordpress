"use client";

import { useState, useEffect } from "react";
import { X, Upload, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function GeneralApplicationModal({ isOpen, onClose }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [resume, setResume] = useState(null);
  const [resumeFileName, setResumeFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Prefetch thank you page for faster redirection
  useEffect(() => {
    if (isOpen) {
      router.prefetch('/thank-you');
    }
  }, [isOpen, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("Resume file size should be less than 5MB");
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus(null);
          setErrorMessage("");
        }, 5000);
        return;
      }

      // Check file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        setErrorMessage("Please upload a PDF or Word document");
        setSubmitStatus("error");
        setTimeout(() => {
          setSubmitStatus(null);
          setErrorMessage("");
        }, 5000);
        return;
      }

      setResume(file);
      setResumeFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('jobTitle', 'General Application');
      submitData.append('jobSlug', 'general');
      submitData.append('pageUrl', '/careers');
      
      if (resume) {
        submitData.append('resume', resume);
      }

      const response = await fetch('/api/job-application', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to thank you page
        const queryParams = new URLSearchParams({
          type: 'job-application',
          item: 'General Application'
        });
        
        router.push(`/thank-you?${queryParams.toString()}`);
      } else {
        setSubmitStatus("error");
        
                // Parse error message for user-friendly display
        let friendlyError = 'Something went wrong. Please try again.';
        if (typeof data.error === 'string') {
          const prefix = data.error.includes('Partner') ? 'Failed to submit Partner Inquiry: ' : 
                        data.error.includes('Contact') ? 'Failed to submit Contact Form: ' : 
                        data.error.includes('Career') ? 'Failed to submit Career Application: ' : 
                        data.error.includes('General') ? 'Failed to submit General Application: ' : 'Failed to submit: ';
          
          try {
            // Check if it's the CRM error format (contains JSON inside the string)
            if (data.error.includes('{')) {
              const jsonStr = data.error.substring(data.error.indexOf('{'));
              const errorObj = JSON.parse(jsonStr);
              if (errorObj.message) {
                friendlyError = prefix + errorObj.message;
              }
            } else if (data.error.includes('mobile') || data.error.includes('phone')) {
              friendlyError = prefix + (data.error.includes('associated') || data.error.includes('taken') || data.error.includes('registered') ? 'This phone number is already registered.' : 'Please enter a valid phone number.');
            } else if (data.error.includes('email')) {
              friendlyError = prefix + (data.error.includes('taken') || data.error.includes('associated') || data.error.includes('registered') ? 'This email address is already registered.' : 'Please enter a valid email address.');
            } else {
              friendlyError = prefix + data.error;
            }
          } catch (e) {
            friendlyError = prefix + data.error;
          }
        }
        setErrorMessage(friendlyError);
        setIsSubmitting(false);
        
        setTimeout(() => {
          setSubmitStatus(null);
          setErrorMessage("");
        }, 7000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 7000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl md:max-w-3xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-4 text-white flex-shrink-0 flex items-center justify-between gap-4">
          <h2 className="text-xl text-3xl lg:text-5xl font-black leading-[1.25] lg:leading-[1.25] tracking-tighter capitalize">General Application</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
            disabled={isSubmitting}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-3 md:space-y-4">
            <p className="text-sm text-gray-600 hidden md:block">
              Don't see your perfect role? Send us your profile and let's see where you fit in!
            </p>

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
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-emerald-500 outline-none transition-all bg-gray-50/50 text-sm"
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
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-emerald-500 outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Email Address *"
                />
              </div>
            </div>

            {/* Row 2: Phone & Resume */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-100 rounded-xl focus:border-emerald-500 outline-none transition-all bg-gray-50/50 text-sm"
                  placeholder="Phone Number *"
                />
              </div>
              <div>
                <label className="hidden md:block text-[12px] font-bold text-gray-700 mb-1 uppercase tracking-tight">Resume (PDF/Word) *</label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="w-full px-4 py-2.5 border-2 border-dashed border-gray-200 rounded-xl hover:border-emerald-500 transition-all cursor-pointer flex items-center gap-2 bg-gray-50/50 text-sm"
                  >
                    <Upload className="w-4 h-4 text-gray-500" />
                    <span className="truncate text-gray-600">
                      {resumeFileName || "Upload Resume *"}
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Status Messages */}
            {submitStatus === "error" && errorMessage && (
              <div className="p-2.5 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                <p className="text-red-800 text-[11px] font-bold leading-tight">{errorMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black py-3 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg shadow-emerald-100 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Application</span>
                )}
              </button>
            </div>

            <p className="text-center text-[10px] text-gray-500">
              By applying, you agree to our terms and privacy policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
