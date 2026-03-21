"use client";

import { useState } from "react";

export default function IsarvaAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 left-6 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Open Isarva AI Chat"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6"
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
        ) : (
          <svg
            className="w-6 h-6 group-hover:animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        )}
        
        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
            AI
          </span>
        )}
      </button>

      {/* Chat Iframe */}
      {isOpen && (
        <div className="fixed bottom-[7.5rem] left-3 sm:left-6 z-50">
          <iframe 
            src="https://chat.isarva.in?companyId=company_a" 
            className="w-[95vw] sm:w-[400px] h-[550px] sm:h-[600px] max-w-[400px]"
            style={{
              borderRadius: '12px',
              border: '1px solid #30363d',
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
            }}
            title="Isarva AI Chat"
          />
        </div>
      )}
    </>
  );
}
