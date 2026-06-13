"use client";

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
  return (
    <>
      {/* <Chatbot /> */}
      {/* <IsarvaAIChatbot /> */}
      <WhatsAppWidget />
    </>
  );
}
