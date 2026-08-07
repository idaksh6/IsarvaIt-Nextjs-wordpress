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
          subtitle: "Thank You for Reaching Out! Our team will review your inquiry and will get back to you within 8 to 24 business hours.",
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
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-[#FDF8F2] font-sans text-[#1a1f24] flex items-center justify-center py-20 md:py-44 px-4 md:px-6">
      <div className="max-w-5xl w-full">

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
            <div className="relative bg-gradient-to-br from-emerald-400 to-emerald-600 p-6 md:p-8 rounded-full shadow-2xl">
              <CheckCircle2 className="w-16 h-16 md:w-24 md:h-24 text-white" strokeWidth={2.5} />
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
          <p className="text-lg md:text-2xl text-[#53606b] font-medium max-w-4xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl md:rounded-3xl shadow-xl border border-emerald-500/10 overflow-hidden mb-8"
        >
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#1a1f24]">
                Need Immediate Assistance?
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex-1 w-full md:w-auto flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-xl shadow-sm">
                <div className="p-3 bg-emerald-100 rounded-xl flex-shrink-0">
                  <Mail className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#53606b] font-bold normal-case tracking-wider mb-1">Mail ID</div>
                  <a
                    href="mailto:marketing@isarvait.com"
                    className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors text-sm sm:text-base break-all"
                  >
                    marketing@isarvait.com
                  </a>
                </div>
              </div>

              <div className="flex-1 w-full md:w-auto flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-xl shadow-sm">
                <div className="p-3 bg-emerald-100 rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#53606b] font-bold normal-case tracking-wider mb-1">Phone Number</div>
                  <a
                    href="tel:+919902863697"
                    className="text-emerald-600 font-bold hover:text-emerald-700 transition-colors text-sm sm:text-base whitespace-nowrap"
                  >
                    +91 9902863697
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href="https://wa.me/919902863697"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-4 rounded-xl shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all text-base w-full md:w-auto"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="p-6 md:p-10 border-t border-emerald-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1a1f24] capitalize">
                What Happens Next?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-[#FDF8F2] font-sans text-[#1a1f24] flex items-center justify-center py-20 md:py-44 px-4 md:px-6">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-600"></div>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}


