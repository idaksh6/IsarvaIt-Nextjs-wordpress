"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import WhatsAppWidget from "./WhatsAppWidget";

// Lazy load chatbot components - they're heavy and not needed immediately
const Chatbot = dynamic(() => import("./Chatbot/Chatbot"), {
  ssr: false,
  loading: () => null,
});

const IsarvaAIChatbot = dynamic(() => import("./IsarvaAIChatbot"), {
  ssr: false,
  loading: () => null,
});

export default function ClientProviders() {
  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey || typeof window === "undefined") return;

    const originalFetch = window.fetch;

    // Helper to get token
    const getRecaptchaToken = (action = "submit") => {
      return new Promise((resolve) => {
        if (!window.grecaptcha) {
          resolve(null);
          return;
        }
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(siteKey, { action })
            .then((token) => resolve(token))
            .catch((err) => {
              console.error("reCAPTCHA execution error:", err);
              resolve(null);
            });
        });
      });
    };

    window.fetch = async function (url, options) {
      const urlStr = typeof url === "string" ? url : (url instanceof URL ? url.toString() : "");
      
      if (urlStr.includes("/api/contact") || urlStr.includes("/api/job-application")) {
        try {
          const token = await getRecaptchaToken();
          if (token && options) {
            if (options.body) {
              if (options.body instanceof FormData) {
                options.body.set("recaptchaToken", token);
              } else if (typeof options.body === "string") {
                try {
                  const bodyObj = JSON.parse(options.body);
                  bodyObj.recaptchaToken = token;
                  options.body = JSON.stringify(bodyObj);
                } catch (e) {
                  // Not JSON
                }
              }
            } else {
              options.body = JSON.stringify({ recaptchaToken: token });
              options.headers = {
                ...options.headers,
                "Content-Type": "application/json",
              };
            }
          }
        } catch (e) {
          console.error("Error setting recaptcha token in fetch:", e);
        }
      }
      return originalFetch.apply(this, arguments);
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  return (
    <>
      {/* <Chatbot /> */}
      {/* <IsarvaAIChatbot /> */}
      <WhatsAppWidget />
    </>
  );
}
