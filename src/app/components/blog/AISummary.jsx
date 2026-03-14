"use client";

import React from 'react';

const AISummary = ({ postTitle, date, readTime }) => {
  const platforms = [
    { 
      name: "ChatGPT", 
      url: `https://chatgpt.com/?q=Summarize this article: ${postTitle}`, 
      iconPath: "/chatgpt.svg",
      color: "hover:bg-[#10a37f]/10"
    },
    { 
      name: "Claude", 
      url: `https://claude.ai/new?q=Summarize this article: ${postTitle}`, 
      iconPath: "/cloude.svg",
      color: "hover:bg-[#d97757]/10"
    },
    { 
      name: "Gemini", 
      url: `https://gemini.google.com/app?q=Summarize this article: ${postTitle}`, 
      iconPath: "/gemini.svg",
      color: "hover:bg-[#4285f4]/10"
    },
    { 
      name: "Grok", 
      url: `https://x.com/i/grok?text=Summarize this article: ${postTitle}`, 
      iconPath: "/grok.svg",
      color: "hover:bg-black/10"
    },
    { 
      name: "Perplexity", 
      url: `https://www.perplexity.ai/search?q=Summarize this article: ${postTitle}`, 
      iconPath: "/perplexity.svg",
      color: "hover:bg-[#20b2aa]/10"
    }
  ];

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-100 mb-10 w-full group/summary">
      <div className="flex items-center gap-4">
        <span className="text-[15px] text-gray-400 font-medium whitespace-nowrap">
          Summarize this article with:
        </span>
        <div className="flex items-center gap-4">
          {platforms.map((platform) => (
            <a 
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Summarize with ${platform.name}`}
              className={`p-2 rounded-xl transition-all duration-300 transform hover:scale-125 ${platform.color}`}
            >
              <img 
                src={platform.iconPath} 
                alt={platform.name} 
                className="w-6 h-6 object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="text-[15px] text-gray-400 font-medium hidden md:flex items-center whitespace-nowrap">
        <span>{date}</span>
        <span className="mx-3 text-gray-200">|</span>
        <span>{readTime}</span>
      </div>
    </div>
  );
};

export default AISummary;
