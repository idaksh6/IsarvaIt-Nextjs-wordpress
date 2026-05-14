"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Upload, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function CareerApplicationForm({ jobTitle, jobSlug }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [resume, setResume] = useState(null);
  const [resumeFileName, setResumeFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Prefetch thank you page for faster redirection
  useEffect(() => {
    router.prefetch('/thank-you');
  }, [router]);

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
      submitData.append('jobTitle', jobTitle);
      submitData.append('jobSlug', jobSlug);
      submitData.append('pageUrl', window.location.href); // Current page URL
      
      if (resume) {
        submitData.append('resume', resume);
      }

      console.log('Submitting job application...');

      const response = await fetch('/api/job-application', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        // Redirect immediately to thank you page with job context
        const queryParams = new URLSearchParams({
          type: 'job-application',
          item: jobTitle
        });
        
        // Don't set isSubmitting to false - we're redirecting away
        router.push(`/thank-you?${queryParams.toString()}`);
      } else {
        console.error('Application submission failed:', data);
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
      console.error('Application submission error:', error);
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 7000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
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
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email Field */}
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
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
          placeholder="email@example.com"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 outline-none text-gray-900"
          placeholder="+91 98765 43210"
        />
      </div>

      {/* Resume Upload */}
      <div>
        <label htmlFor="resume" className="block text-sm font-semibold text-gray-900 mb-2">
          Attach Resume (PDF or Word, Max 5MB)
        </label>
        <div className="relative">
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
            className="hidden"
          />
          <label
            htmlFor="resume"
            className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-gray-300 hover:border-emerald-500 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 bg-gray-50 hover:bg-emerald-50"
          >
            <Upload className="w-5 h-5 text-gray-600" />
            <span className="text-gray-700 font-medium">
              {resumeFileName || "Click to upload your resume"}
            </span>
          </label>
        </div>
        {resumeFileName && (
          <p className="mt-2 text-sm text-emerald-600 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            {resumeFileName}
          </p>
        )}
      </div>

      {/* Error Message */}
      {submitStatus === "error" && errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 text-sm font-medium">{errorMessage}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="press-illusion-btn-orange bg-orange-500 text-white w-full text-center jus font-bold px-6 py-2 text-base items-center space-x-2 justify-center flex"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit Application</span>
          </>
        )}
      </button>

      <p className="text-center text-sm text-gray-600 mt-4">
        By applying, you agree to our terms and privacy policy
      </p>
    </form>
  );
}
