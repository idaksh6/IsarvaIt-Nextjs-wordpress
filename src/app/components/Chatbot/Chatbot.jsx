"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Sparkles,
  RefreshCw,
  ArrowDown,
} from "lucide-react";
import { FormattedMessage } from "./FormattedMessage";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: Date.now(),
      role: "assistant",
      content:
        "Hi there! I'm your Isarva AI assistant. I can help you with questions about our web design services, pricing, or past projects. What's on your mind?",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  // Load conversation from localStorage on mount
  useEffect(() => {
    const storedConversationId = localStorage.getItem('chatbot_conversation_id');
    const storedMessages = localStorage.getItem('chatbot_messages');
    
    if (storedConversationId && storedMessages) {
      setConversationId(storedConversationId);
      try {
        setMessages(JSON.parse(storedMessages));
      } catch (e) {
        console.error('Failed to parse stored messages');
      }
    } else {
      // Generate new conversation ID
      const newConversationId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setConversationId(newConversationId);
      localStorage.setItem('chatbot_conversation_id', newConversationId);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatbot_messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Save conversation to Supabase when messages change
  useEffect(() => {
    const saveConversation = async () => {
      if (conversationId && messages.length > 1) {
        try {
          // Temporarily disabled to debug - conversation saving not critical for chat functionality
          // await fetch('/api/save-conversation', {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify({
          //     conversationId,
          //     messages,
          //     timestamp: new Date().toISOString(),
          //   }),
          // });
        } catch (error) {
          console.error('Failed to save conversation:', error);
        }
      }
    };
    
    const timeoutId = setTimeout(saveConversation, 1000);
    return () => clearTimeout(timeoutId);
  }, [messages, conversationId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle scroll to detect if user is at bottom
  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!isNearBottom);
    }
  };

  // Auto-scroll to bottom when chatbot opens or messages change
  useEffect(() => {
    if (isOpen && !isMinimized) {
      // Delay to ensure DOM is ready
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [messages, isOpen, isMinimized]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: input,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = input;
    setInput("");
    setIsLoading(true);

    // Add placeholder message for streaming
    const assistantMessageId = Date.now() + 1;
    setMessages((prev) => [
      ...prev,
      {
        id: assistantMessageId,
        role: "assistant",
        content: "",
        isTyping: true,
        timestamp: new Date().toISOString(),
      },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput, history: messages }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = "";
      let buffer = "";
      let isCached = false;
      let similarityScore = null;

      console.log('🔷 FRONTEND: Starting to read stream...');

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log('🔷 FRONTEND: Stream done');
          break;
        }

        const chunk = decoder.decode(value);
        console.log('🔷 FRONTEND: Received chunk:', chunk.substring(0, 100));
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            console.log('🔷 FRONTEND: Data line:', data.substring(0, 50));
            if (data === "[DONE]") {
              console.log('🔷 FRONTEND: Received [DONE]');
              break;
            }

            try {
              const parsed = JSON.parse(data);
              console.log('🔷 FRONTEND: Parsed:', parsed);
              
              // Check for metadata about cache
              if (parsed.metadata) {
                isCached = parsed.metadata.cached;
                similarityScore = parsed.metadata.similarity;
                const isQuickResponse = parsed.metadata.quick;
                
                if (isCached) {
                  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                  if (isQuickResponse) {
                    console.log('⚡ FRONTEND: Quick Response (Local JSON)');
                    console.log('🎯 Pattern-matched greeting/FAQ');
                    console.log('💰 Cost: $0.00 (no API calls - instant)');
                  } else {
                    console.log('🚀 FRONTEND: Response from DATABASE CACHE');
                    console.log('⚡ Instant response - No OpenAI API call made');
                    console.log('📊 Similarity Score:', (similarityScore * 100).toFixed(2) + '%');
                    console.log('💰 Cost: $0.00 (cached)');
                  }
                  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                } else {
                  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                  console.log('🤖 FRONTEND: Response from OPENAI');
                  console.log('💰 Using OpenAI credits');
                  console.log('⏱️ Generating fresh response...');
                  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                }
              }
              
              if (parsed.content) {
                buffer += parsed.content;
                
                // Instant display - no delay
                while (buffer.length > 0) {
                  const char = buffer[0];
                  buffer = buffer.slice(1);
                  accumulatedContent += char;
                  
                  setMessages((prev) =>
                    prev.map((msg) =>
                      msg.id === assistantMessageId
                        ? { ...msg, content: accumulatedContent, isTyping: true, cached: isCached }
                        : msg
                    )
                  );
                }
              }
              if (parsed.error) {
                throw new Error(parsed.error);
              }
            } catch (parseError) {
              // Ignore JSON parse errors for incomplete chunks
            }
          }
        }
      }
      
      // Mark as done typing
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, isTyping: false, cached: isCached }
            : msg
        )
      );
    } catch (error) {
      console.error("Chat error:", error);
      
      const errorMessage = error.message?.includes("Failed to fetch response")
        ? "I'm having a connection issue. Please make sure the server is running and try again."
        : error.message || "I'm having a brief connection issue. Could you please try again in a moment?";
      
      // Replace the placeholder message with error
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMessageId
            ? { ...msg, content: errorMessage, isTyping: false }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    const newConversationId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setConversationId(newConversationId);
    localStorage.setItem('chatbot_conversation_id', newConversationId);
    
    const newMessages = [
      {
        id: Date.now(),
        role: "assistant",
        content: "Chat cleared! How can I help you fresh?",
        timestamp: new Date().toISOString(),
      },
    ];
    setMessages(newMessages);
    localStorage.setItem('chatbot_messages', JSON.stringify(newMessages));
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-outfit antialiased">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="chat-window"
            initial={{
              opacity: 0,
              height: "80px",
              width: "400px",
              y: 40,
              overflow: "hidden",
            }}
            animate={{
              opacity: 1,
              height: isMinimized ? "72px" : "620px",
              width: "400px",
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: "80px",
              width: "400px",
              y: 40,
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 400,
              opacity: { duration: 0.2 },
            }}
            className="bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-emerald-600/10 via-emerald-500/5 to-transparent border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-emerald-500/20 overflow-hidden">
                    <img
                      src="/Favicon.png"
                      alt="Isarva AI"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      style={{ display: "none" }}
                      className="w-full h-full flex items-center justify-center bg-emerald-500"
                    >
                      <Bot size={22} className="text-white" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-white tracking-tight flex items-center gap-1.5">
                    Isarva AI{" "}
                    <Sparkles size={12} className="text-emerald-400" />
                  </h3>
                  <p className="text-[11px] text-emerald-500/80 font-medium uppercase tracking-wider">
                    Always Online
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  title="Clear Chat"
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white"
                >
                  <RefreshCw size={16} />
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white"
                >
                  {isMinimized ? (
                    <Maximize2 size={16} />
                  ) : (
                    <Minimize2 size={16} />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div 
                  ref={messagesContainerRef}
                  onScroll={handleScroll}
                  className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-hide bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.03),transparent)] relative"
                >
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} items-end gap-2`}
                    >
                      {msg.role === "assistant" && (
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-1">
                          <Bot size={12} className="text-emerald-500" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] p-3.5 px-4 text-[14px] leading-relaxed relative ${
                          msg.role === "user"
                            ? "bg-emerald-600 text-white rounded-2xl rounded-tr-none shadow-md shadow-emerald-900/10 font-medium"
                            : "bg-white/5 text-white/90 border border-white/10 rounded-2xl rounded-tl-none"
                        }`}
                      >
                        {msg.role === "assistant" ? (
                          msg.content ? (
                            <FormattedMessage content={msg.content} />
                          ) : msg.isTyping ? (
                            <div className="flex gap-1.5">
                              <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-bounce"></span>
                              <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                              <span className="w-1.5 h-1.5 bg-emerald-500/50 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                            </div>
                          ) : null
                        ) : (
                          msg.content
                        )}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                  
                  {/* Scroll to bottom button */}
                  {showScrollButton && (
                    <button
                      onClick={scrollToBottom}
                      className="fixed bottom-32 right-8 w-10 h-10 bg-emerald-500 hover:bg-emerald-400 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-all hover:scale-110 z-10"
                      title="Scroll to bottom"
                    >
                      <ArrowDown size={18} className="text-white" />
                    </button>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white/[0.02] border-t border-white/10">
                  <form onSubmit={handleSubmit} className="relative group">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type your message..."
                      className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3.5 pl-4 pr-14 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all shadow-inner"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
                    >
                      {isLoading ? (
                        <Loader2
                          size={18}
                          className="text-white animate-spin"
                        />
                      ) : (
                        <Send size={18} className="text-white" />
                      )}
                    </button>
                  </form>
                  <p className="text-[10px] text-center text-white/20 mt-3 font-medium tracking-wide">
                    Powered by Isarva Intelligence
                  </p>
                </div>
              </>
            )}
          </motion.div>
        ) : (
          <motion.button
            key="chat-button"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-3 bg-gradient-to-br from-emerald-500 to-emerald-700 pl-4 pr-6 py-3 rounded-2xl shadow-[0_10px_30px_rgba(16,185,129,0.3)] text-white transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10 w-11 h-11 rounded-xl  bg-white flex items-center justify-center overflow-hidden shadow-inner">
              <img
                src="/Favicon.png"
                alt="AI Avatar"
                className="w-full h-full object-contain brightness-110 p-1"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                style={{ display: "none" }}
                className="w-full h-full flex items-center justify-center bg-emerald-500"
              >
                <Sparkles size={24} className="text-white" />
              </div>
            </div>
            <div className="relative z-10 text-left">
              <p className="text-sm font-bold leading-none tracking-tight">
                Chat with Isarva AI
              </p>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
