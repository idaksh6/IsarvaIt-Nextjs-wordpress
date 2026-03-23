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
      url: `https://www.google.com/search?udm=50&q=Summarize this article: ${encodeURIComponent(postTitle)}`, 
      iconPath: "/gemini.svg",
      color: "hover:bg-[#4285f4]/10"
    },
    { 
      name: "Perplexity", 
      url: `https://www.perplexity.ai/search?q=Summarize this article: ${postTitle}`, 
      iconPath: "/perplexity.svg",
      color: "hover:bg-[#20b2aa]/10"
    }
  ];

  return (
    <div className="flex flex-col gap-4 py-6 border-b border-gray-100 mb-10 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <span className="text-sm md:text-[15px] text-gray-400 font-medium">
          Summarize this article with:
        </span>
        <div className="flex items-center gap-3 flex-wrap">
          {platforms.map((platform) => (
            <a 
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`Summarize with ${platform.name}`}
              className={`p-2.5 rounded-xl transition-all duration-300 transform hover:scale-110 ${platform.color} bg-white shadow-sm border border-gray-100`}
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

      <div className="text-sm md:text-[15px] text-gray-400 font-medium flex items-center gap-2">
        <span>{date}</span>
        <span className="text-gray-200">•</span>
        <span>{readTime}</span>
      </div>
    </div>
  );
};

export default AISummary;
