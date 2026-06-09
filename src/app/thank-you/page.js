"use client";

import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Mail,
  Phone,
  ArrowRight,
  Home,
  Calendar,
  Clock,
  Sparkles,
  MessageCircle
} from "lucide-react";
import Link from "../components/AppLink";
import { useSearchParams } from "next/navigation";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const [pageType, setPageType] = useState("contact");
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    const type = searchParams.get("type") || "contact";
    const item = searchParams.get("item") || "";
    setPageType(type);
    setItemName(item);
  }, [searchParams]);

  const getPageSpecificContent = () => {
    switch (pageType) {
      case "job-application":
        return {
          title: "Application Received!",
          subtitle: itemName
            ? `Thank you for applying for the ${itemName} position!`
            : "Thank you for your job application!",
          nextSteps: [
            "Your application has been successfully submitted",
            "Our HR team will review your resume and qualifications",
            "Shortlisted candidates will be contacted within 3-5 business days",
            "You'll receive an email confirmation of your application shortly"
          ]
        };
      case "product":
        return {
          title: "Demo Request Received!",
          subtitle: itemName
            ? `We're excited to show you ${itemName} in action!`
            : "We're excited to demonstrate our solution!",
          nextSteps: [
            "Our product specialist will review your request",
            "You'll receive a confirmation email within 15 minutes",
            "We'll schedule a personalized demo at your convenience",
            "Get ready to see how our solution can transform your business"
          ]
        };
      case "service":
        return {
          title: "Service Inquiry Submitted!",
          subtitle: itemName
            ? `Thank you for your interest in our ${itemName} services!`
            : "Thank you for reaching out about our services!",
          nextSteps: [
            "Our service consultant will review your requirements",
            "You'll receive a confirmation email shortly",
            "We'll prepare a customized proposal for you",
            "Expect a call within 24 hours to discuss next steps"
          ]
        };
      case "partner":
        return {
          title: "Partner Inquiry Received!",
          subtitle: itemName
            ? `Thank you for your interest in the ${itemName}!`
            : "Thank you for your interest in our Partner Program!",
          nextSteps: [
            "Our partnership team will review your application",
            "You'll receive a confirmation email within 15 minutes",
            "We'll reach out to discuss your tier benefits in detail",
            "Get ready to scale your business with Isarva Infotech"
          ]
        };
      case "brochure":
        return {
          title: "Brochure Downloaded Successfully!",
          subtitle: itemName
            ? `Your ${itemName} brochure is on its way to your device!`
            : "Your product brochure is being downloaded!",
          nextSteps: [
            "Your brochure download has started automatically",
            "Please check your browser's download folder",
            "Our team will follow up shortly to answer any questions"
          ]
        };
      case "industry":
      default:
        return {
          title: "Message Received!",
          subtitle: "Thank you for contacting Isarva InfoTech!",
          nextSteps: [
            "Your message has been delivered to our team",
            "You'll receive a confirmation email shortly",
            "We typically respond within 24 hours",
            "Our team will get back to you with the information you need"
          ]
        };
    }
  };

  const content = getPageSpecificContent();

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-[#FDF8F2] font-sans text-[#1a1f24] flex items-center justify-center py-44 px-6">
      <div className="max-w-4xl w-full">

        {/* Success Icon with Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2
          }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-emerald-400 to-emerald-600 p-8 rounded-full shadow-2xl">
              <CheckCircle2 className="w-24 h-24 text-white" strokeWidth={2.5} />
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mb-12"
        >
          <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-display font-bold text-[#1a1f24] mb-6 leading-[1]">
            {content.title}
          </h1>
          <p className="text-2xl text-[#53606b] font-medium max-w-2xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl shadow-xl border border-emerald-500/10 overflow-hidden mb-8"
        >
          {/* What Happens Next */}
          <div className="p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="font-display text-[#1a1f24] capitalize">
                What Happens Next?
              </h2>
            </div>

            <div className="space-y-4">
              {content.nextSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-emerald-50/50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-[#1a1f24] font-medium leading-relaxed pt-1">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-10 border-t border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-[#1a1f24]">
                Need Immediate Assistance?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-[#53606b] font-bold capitalize tracking-wider mb-1">Email Us</div>
                  <a
                    href="mailto:marketing@isarvait.com"
                    className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
                  >
                    marketing@isarvait.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs text-[#53606b] font-bold capitalize tracking-wider mb-1">Call Us</div>
                  <a
                    href="tel:+919902863697"
                    className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
                  >
                    +91 9902863697
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 bg-[#10b981] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          {/* Conditional second button based on form type */}
          {pageType === "product" && (
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1a1f24] px-8 py-4 rounded-xl font-bold text-lg border-2 border-emerald-500/10 transition-all hover:border-emerald-500/30 hover:shadow-lg"
            >
              <span>Explore More Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}

          {pageType === "service" && (
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1a1f24] px-8 py-4 rounded-xl font-bold text-lg border-2 border-emerald-500/10 transition-all hover:border-emerald-500/30 hover:shadow-lg"
            >
              <span>Explore More Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}

          {pageType === "industry" && (
            <Link
              href="/industries"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#1a1f24] px-8 py-4 rounded-xl font-bold text-lg border-2 border-emerald-500/10 transition-all hover:border-emerald-500/30 hover:shadow-lg"
            >
              <span>Explore More Industries</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-emerald-500/10 shadow-sm">
            <Sparkles className="w-5 h-5 text-emerald-500" />
            <span className="text-[#53606b] font-medium">
              Response time: <span className="text-[#1a1f24] font-bold">Within 24 hours</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-[#FDF8F2] font-sans text-[#1a1f24] flex items-center justify-center py-44 px-6">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-600"></div>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}


