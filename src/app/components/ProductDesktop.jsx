"use client";

import Link from "next/link";
import { useState, useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Add global styles for hiding scrollbars
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
        .modal-slide-up {
            animation: slideUp 0.3s ease-out;
        }
    `;
  document.head.appendChild(style);
}

// ── Product Data ──────────────────────────────────────────────────────────────
const products = [
  {
    id: 2,
    name: "HRMS Software",
    slug: "hrms-software",
    category: "HR & Workforce",
    short:
      "Automates HR tasks, boosts productivity, and empowers employees to self-manage their information.",
    gradient: "#667eea",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Support Application",
    slug: "support-application",
    category: "Customer Support",
    short:
      "Complete customer support and ticketing system for managing inquiries, issues, and support requests efficiently.",
    gradient: "#a18cd1",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=800&auto=format&fit=crop",
    badge: "New",
  },
  {
    id: 7,
    name: "CRM Application",
    slug: "crm-application",
    category: "Sales & Marketing",
    short:
      "Powerful CRM solution for managing leads, contacts, sales pipeline, and customer interactions seamlessly.",
    gradient: "#4facfe",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    badge: "Popular",
  },
  {
    id: 4,
    name: "Petro Care",
    slug: "petro-care",
    category: "Industry Specific",
    short:
      "Designed for Petrol Bunk Agencies to manage daily sales activities and accounting operations smoothly.",
    gradient: "#f6d365",
    image:
      "https://images.unsplash.com/photo-1613521140785-e85e427f8002?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "WooCommerce Development",
    slug: "woocommerce-development",
    category: "E-Commerce & Retail",
    short:
      "Sell online effortlessly — cloud-powered store management, delivery tracking, and a robust admin panel.",
    gradient: "#a18cd1",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    badge: "High ROI",
  },
  {
    id: 6,
    name: "Bill Soft — Multi Branch",
    slug: "retail-billing-multi-branch",
    category: "E-Commerce & Retail",
    short:
      "Streamlines billing and inventory for multi-branch, multi-warehouse businesses. Android & iOS app coming soon.",
    gradient: "#43e97b",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Document Management System",
    slug: "document-management-system",
    category: "Operations",
    short:
      "Tailored to your business needs — no expensive setup required. Centralise, organise, and retrieve documents instantly.",
    gradient: "#4facfe",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Lodge Booking Software",
    slug: "lodge-booking-software",
    category: "Hospitality",
    short:
      "Cloud-based hotel management with next-gen capabilities — simplifies reservations and improves operating efficiency.",
    gradient: "#fcb69f",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 13,
    name: "Mobile Service Center",
    slug: "mobile-service-center",
    category: "Industry Specific",
    short:
      "Designed for mobile repair agencies to manage customer job sheets, repairs, and service workflows easily.",
    gradient: "#a1c4fd",
    image:
      "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 15,
    name: "Marine Service Software",
    slug: "marine-service-software",
    category: "Industry Specific",
    short:
      "Manages marine client services, generates 40+ reports, and supports seamless multi-location operations.",
    gradient: "#302b63",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 17,
    name: "Dispatcher Panel",
    slug: "dispatcher-panel",
    category: "Fleet & Logistics",
    short:
      "Streamlines manual handling and tracking of florist product orders for fast, efficient delivery management.",
    gradient: "#ee9ca7",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 19,
    name: "Dealer Management",
    slug: "dealer-management-software",
    category: "Operations",
    short:
      "Streamlines dealer onboarding, management, and distribution of articles — with secure access and smart communication.",
    gradient: "#0f3460",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 20,
    name: "Expense Tracker",
    slug: "expense-tracker",
    category: "Operations",
    short:
      "Simplifies expense management with Google login, role-based access, dynamic configuration, and detailed reporting.",
    gradient: "#11998e",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
  },
];

const categories = [
  "All",
  "HR & Workforce",
  "E-Commerce & Retail",
  "Operations",
  "Industry Specific",
  "Hospitality",
];

function ProductDesktop() {
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const mobileTabsRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollTimeoutRef = useRef(null);
  const [visibleItemsCount, setVisibleItemsCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const mobileListRef = useRef(null);

  // GSAP animations for header
  useGSAP(
    () => {
      gsap.from(".ow-header > *", {
        scrollTrigger: { trigger: ".ow-header", start: "top 85%" },
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: sectionRef },
  );

  // Check scroll position to show/hide scroll indicators
  const checkScrollPosition = () => {
    if (mobileTabsRef.current) {
      const container = mobileTabsRef.current;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth,
      );
    }
  };

  // Setup scroll event listener with cleanup
  useEffect(() => {
    const container = mobileTabsRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener("scroll", checkScrollPosition);

      // Add touch event listeners for mobile
      container.addEventListener("touchstart", checkScrollPosition);
      container.addEventListener("touchend", checkScrollPosition);

      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        container.removeEventListener("touchstart", checkScrollPosition);
        container.removeEventListener("touchend", checkScrollPosition);
      };
    }

    // Cleanup scroll timeout on unmount
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [categories]);

  // Professional auto-scroll logic like premium mobile apps (Zomato style)
  const handleCategorySelect = (category, categoryIndex) => {
    setSelectedCategory(category);

    // Add haptic feedback for mobile (if available)
    if (navigator.vibrate) {
      navigator.vibrate(10); // Subtle haptic feedback
    }

    // Professional auto-scroll for mobile tabs
    if (mobileTabsRef.current) {
      // Clear any pending scroll timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Small delay to ensure state update, then scroll
      scrollTimeoutRef.current = setTimeout(() => {
        const container = mobileTabsRef.current;
        const buttons = container.querySelectorAll("button");
        const selectedButton = buttons[categoryIndex];

        if (selectedButton) {
          const containerRect = container.getBoundingClientRect();
          const buttonRect = selectedButton.getBoundingClientRect();
          const containerScrollLeft = container.scrollLeft;
          const containerWidth = container.clientWidth;

          // Calculate button position relative to container
          const buttonLeft =
            buttonRect.left - containerRect.left + containerScrollLeft;
          const buttonRight = buttonLeft + buttonRect.width;
          const buttonCenter = buttonLeft + buttonRect.width / 2;
          const containerCenter = containerScrollLeft + containerWidth / 2;

          // Professional scroll logic with multiple scenarios
          const edgePadding = 80; // Increased padding for better UX
          let targetScrollLeft = containerScrollLeft;
          let shouldScroll = false;

          // Scenario 1: Button is too close to the right edge - bring to center-right
          if (
            buttonRight >
            containerScrollLeft + containerWidth - edgePadding
          ) {
            targetScrollLeft = buttonLeft - containerWidth * 0.3; // 30% from left
            shouldScroll = true;
          }
          // Scenario 2: Button is too close to the left edge - bring to center-left
          else if (buttonLeft < containerScrollLeft + edgePadding) {
            targetScrollLeft = buttonLeft - containerWidth * 0.2; // 20% from left
            shouldScroll = true;
          }
          // Scenario 3: Clicking near the end - auto-reveal more categories
          else if (
            categoryIndex >= categories.length - 3 &&
            categoryIndex < categories.length - 1
          ) {
            const remainingCategories = categories.length - categoryIndex - 1;
            const scrollMultiplier = remainingCategories === 1 ? 0.5 : 0.3;
            targetScrollLeft =
              containerScrollLeft + containerWidth * scrollMultiplier;
            shouldScroll = true;
          }
          // Scenario 4: Far from center - center the selected category
          else if (
            Math.abs(buttonCenter - containerCenter) >
            containerWidth * 0.25
          ) {
            targetScrollLeft = buttonCenter - containerWidth / 2;
            shouldScroll = true;
          }

          // Ensure scroll doesn't go beyond bounds
          const maxScrollLeft = container.scrollWidth - containerWidth;
          targetScrollLeft = Math.max(
            0,
            Math.min(targetScrollLeft, maxScrollLeft),
          );

          // Only scroll if there's a meaningful difference and should scroll
          if (
            shouldScroll &&
            Math.abs(targetScrollLeft - containerScrollLeft) > 15
          ) {
            container.scrollTo({
              left: targetScrollLeft,
              behavior: "smooth",
            });

            // Update scroll indicators after scroll completes
            setTimeout(checkScrollPosition, 600);
          }
        }
      }, 10);
    }
  };

  // Filter products based on category and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.short.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Mobile lazy loading - show only visible items
  const visibleProducts = filteredProducts.slice(0, visibleItemsCount);
  const hasMoreItems = filteredProducts.length > visibleItemsCount;

  // Load more items when scrolling near bottom
  const handleMobileScroll = (e) => {
    const container = e.target;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;

    // Load more when 80% scrolled
    if (
      scrollTop + clientHeight >= scrollHeight * 0.8 &&
      hasMoreItems &&
      !isLoadingMore
    ) {
      setIsLoadingMore(true);

      // Simulate loading delay (you can remove this for real app)
      setTimeout(() => {
        setVisibleItemsCount((prev) =>
          Math.min(prev + 6, filteredProducts.length),
        );
        setIsLoadingMore(false);
      }, 500);
    }
  };

  // Reset visible count when category or search changes
  useEffect(() => {
    setVisibleItemsCount(6);
  }, [selectedCategory, searchTerm]);

  // Breadcrumb component
  const Breadcrumbs = () => (
    <nav className="mb-4 text-sm">
      <ol className="flex items-center space-x-2">
        <li>
          <button
            onClick={() => handleCategorySelect("All", 0)}
            className="text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="View all products"
          >
            All Products
          </button>
        </li>
        {selectedCategory !== "All" && (
          <>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 font-medium">{selectedCategory}</li>
          </>
        )}
      </ol>
    </nav>
  );

  return (
    <section
      ref={sectionRef}
      className="relative lg:py-16 py-10 overflow-hidden"
      style={{ backgroundColor: "#fcfdfd" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
                `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(102,126,234,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(118,75,162,0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="ow-header text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              style={{
                display: "block",
                height: 1,
                width: 32,
                background: "linear-gradient(90deg, transparent, #6366f1)",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: "#3b8d4d",
                textTransform: "uppercase",
              }}
            >
              Our Products
            </span>
            <span
              style={{
                display: "block",
                height: 1,
                width: 32,
                background: "linear-gradient(90deg, #6366f1, transparent)",
              }}
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a0d14] mb-4 tracking-tight">
            Software Built for{" "}
            <span className="text-[#2bc735]">Every Industry</span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            18 battle-tested products helping businesses across industries run
            smarter, faster, and leaner.
          </p>
        </div>

        <div className="">
          {/* Desktop Design - Show above 968px (xl breakpoint) */}
          <div className="hidden xl:block">
            {/* Desktop Computer Frame */}
            <div className="relative">
              {/* Monitor Stand Base */}
              <div className="flex justify-center mb-4">
                <div className="relative w-full">
                  {/* Monitor Frame */}
                  <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6 rounded-t-2xl border-4 border-slate-700 shadow-2xl">
                    {/* Monitor Screen */}
                    <div className="bg-white rounded-xl overflow-hidden w-full max-w-[1200px] h-[500px] xl:h-[700px] border-2 border-slate-600 relative">
                      {/* Chrome-style Header */}
                      <div className="bg-white border-b border-gray-200">
                        {/* Tab Bar */}
                        <div className="bg-gray-100 px-2 pt-2 flex items-end gap-1">
                          <div className="bg-white rounded-t-lg px-4 py-2 flex items-center gap-3 min-w-[200px] border-t border-l border-r border-gray-200">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l2 7-2 7H5l2-7-2-7h14z" />
                            </svg>
                            <span className="text-sm text-gray-900 font-medium truncate">Isarva Products</span>
                            <button className="ml-auto p-1 hover:bg-gray-100 rounded" aria-label="Close tab">
                              <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                          <button className="p-2 hover:bg-gray-200 rounded-t-lg" aria-label="Add new tab">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                        </div>

                        {/* Address Bar */}
                        <div className="px-3 py-2 flex items-center justify-between gap-2">
                          {/* Navigation Buttons */}
                          <div className="flex items-center gap-1">
                            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Navigate back">
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                              </svg>
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Navigate forward">
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Refresh page">
                              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            </button>
                          </div>

                          {/* Search/Address Bar - Centered */}
                          <div className="flex-1 flex justify-center mx-4">
                            <div className="relative flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 hover:border-gray-400 focus-within:border-blue-500 focus-within:shadow-md transition-all w-full max-w-2xl">
                              <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                              <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                              />
                              <button className="p-1 hover:bg-gray-100 rounded" aria-label="Bookmark this page">
                                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                              </button>
                            </div>
                          </div>

                          {/* Right Side Icons */}
                          <div className="flex items-center gap-1">
                            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="User account">
                              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </button>
                            <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="More options">
                              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Content Area */}
                      <div className="flex h-[calc(100%-6.5rem)]">
                        {/* Sidebar - Categories */}
                        <div className="w-64 xl:w-80 bg-gray-50 border-r border-gray-200 p-4 xl:p-6">
                          <h3 className="text-gray-900 font-semibold text-lg mb-6 flex items-center gap-2">
                            <svg
                              className="w-5 h-5 text-blue-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11H5m14-7l2 7-2 7H5l2-7-2-7h14z"
                              />
                            </svg>
                            Categories
                          </h3>

                          <div className="space-y-2">
                            {categories.map((category) => {
                              const count =
                                category === "All"
                                  ? products.length
                                  : products.filter(
                                    (p) => p.category === category,
                                  ).length;

                              return (
                                <button
                                  key={category}
                                  onClick={() => setSelectedCategory(category)}
                                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${selectedCategory === category
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                                    }`}
                                >
                                  <span className="font-medium">
                                    {category}
                                  </span>
                                  <span
                                    className={`text-xs px-2 py-1 rounded-full ${selectedCategory === category
                                      ? "bg-blue-500 text-white"
                                      : "bg-gray-200 text-gray-700 group-hover:bg-gray-300"
                                      }`}
                                  >
                                    {count}
                                  </span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Search Results Info */}
                          {searchTerm && (
                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                              <p className="text-gray-700 text-sm">
                                Found {filteredProducts.length} result
                                {filteredProducts.length !== 1
                                  ? "s"
                                  : ""} for{" "}
                                <span className="text-blue-400 font-medium">
                                  "{searchTerm}"
                                </span>
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 overflow-auto p-4 xl:p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-4">
                            {filteredProducts.map((product) => (
                              <ProductDesktopCard
                                key={product.id}
                                product={product}
                              />
                            ))}
                          </div>

                          {filteredProducts.length === 0 && (
                            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                              <svg
                                className="w-16 h-16 text-gray-400 mb-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              <h3 className="text-gray-600 text-xl font-semibold mb-2">
                                No products found
                              </h3>
                              <p className="text-gray-500">
                                Try adjusting your search or selecting a
                                different category
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Monitor Stand */}
                  <div className="flex justify-center">
                    <div className="w-32 h-8 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-lg"></div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-48 h-3 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Design - Show below 968px (below xl breakpoint) */}
          <div className="xl:hidden">
            {/* Mobile Header with Search */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50 rounded-t-2xl border-b border-gray-100 sticky top-0 z-20">
              <div className="flex items-center justify-between p-4">
                {/* Logo & Title */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-gray-900 font-bold text-lg leading-5">
                      Products
                    </h2>
                    <p className="text-gray-500 text-xs">
                      Explore our solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Search Bar */}
              <div className="px-4 pb-4">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Breadcrumbs */}
            <div className="bg-gray-50 px-4 py-3 border-b">
              <Breadcrumbs />
            </div>

            {/* Tab-like Categories with Professional Auto-Scroll */}
            <div className="bg-white border-b sticky top-0 z-10">
              <div
                ref={mobileTabsRef}
                className="flex overflow-x-auto scrollbar-hide px-4 py-3 gap-3"
                style={{
                  scrollSnapType: "x mandatory",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {categories.map((category, index) => {
                  const count =
                    category === "All"
                      ? products.length
                      : products.filter((p) => p.category === category).length;

                  return (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category, index)}
                      className={`flex-shrink-0 flex items-center px-5 py-3 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap transform ${selectedCategory === category
                        ? "bg-blue-600 text-white shadow-lg scale-105 ring-2 ring-blue-200"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-150 active:bg-gray-200 hover:scale-102 active:scale-95"
                        }`}
                      style={{
                        scrollSnapAlign: "center",
                      }}
                    >
                      <span className="mr-2 font-semibold">{category}</span>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-bold ${selectedCategory === category
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-600"
                          }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search Results Info for Mobile */}
            {searchTerm && (
              <div className="bg-blue-50 px-4 py-3 border-b border-blue-100">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <p className="text-blue-800 text-sm font-medium">
                    {filteredProducts.length} result
                    {filteredProducts.length !== 1 ? "s" : ""} for "{searchTerm}
                    "
                  </p>
                </div>
              </div>
            )}

            {/* Mobile Product List with Lazy Loading */}
            <div
              ref={mobileListRef}
              className="bg-white rounded-b-2xl min-h-[400px] overflow-hidden max-h-[70vh] overflow-y-auto scrollbar-hide"
              onScroll={handleMobileScroll}
            >
              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center px-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-gray-600 text-lg font-semibold mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Try adjusting your search or selecting a different category
                  </p>
                </div>
              ) : (
                <>
                  {/* Product Items */}
                  <div className="">
                    {visibleProducts.map((product, index) => (
                      <MobileProductCard
                        key={product.id}
                        product={product}
                        isLast={
                          index === visibleProducts.length - 1 && !hasMoreItems
                        }
                      />
                    ))}
                  </div>

                  {/* Loading More Indicator */}
                  {isLoadingMore && (
                    <div className="flex items-center justify-center py-6 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent"></div>
                        <span className="text-gray-600 text-sm font-medium">
                          Loading more products...
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Load More Button (alternative to infinite scroll) */}
                  {hasMoreItems && !isLoadingMore && (
                    <div className="p-4 border-t border-gray-100">
                      <button
                        onClick={() => {
                          setIsLoadingMore(true);
                          setTimeout(() => {
                            setVisibleItemsCount((prev) =>
                              Math.min(prev + 6, filteredProducts.length),
                            );
                            setIsLoadingMore(false);
                          }, 300);
                        }}
                        className="w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 text-gray-700 font-medium rounded-xl transition-all duration-200 border border-gray-200 flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                        Load More ({filteredProducts.length - visibleItemsCount}{" "}
                        remaining)
                      </button>
                    </div>
                  )}

                  {/* End Indicator */}
                  {!hasMoreItems && filteredProducts.length > 6 && (
                    <div className="flex items-center justify-center py-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-500">
                        <div className="h-px w-8 bg-gray-300"></div>
                        <span className="text-sm font-medium">
                          All {filteredProducts.length} products loaded
                        </span>
                        <div className="h-px w-8 bg-gray-300"></div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Product Card for Desktop View
const ProductDesktopCard = ({ product }) => {
  const isHighlighted = !!product.badge;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="product-click-trigger group relative bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-400 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 block"
      data-product-name={product.name}
    >
      {/* Product Image */}
      <div className="relative h-32 mb-3 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover opacity-80"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {isHighlighted && (
            <span className="text-[8px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-yellow-500 text-black">
              {product.badge}
            </span>
          )}
          <span className="text-[8px] font-medium uppercase tracking-wide px-2 py-1 rounded bg-blue-600 text-white">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-gray-900 font-semibold text-sm mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
          {product.short}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
    </Link>
  );
};

// Product Detail Modal
const ProductDetailModal = ({ product, onClose }) => {
  return (
    <div className="absolute inset-4 bg-white/95 backdrop-blur-sm rounded-xl border border-gray-300 p-6 overflow-auto z-10 shadow-2xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-gray-900 text-2xl font-bold mb-2">{product.name}</h2>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-900 transition-colors"
        >
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
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div>
          <p className="text-gray-700 mb-6 leading-relaxed">{product.short}</p>

          <div className="flex gap-4">
            <Link
              href={`/products/${product.slug}`}
              className="press-illusion-btn bg-green-400 text-white w-fit  font-bold px-6 py-2 text-sm  items-center space-x-2  md:flex"
            >
              <span>Get Pricing & Demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 9"
                className="h-2 w-4"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile Product Card Component
const MobileProductCard = ({ product, isLast }) => {
  const isHighlighted = !!product.badge;

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`product-click-trigger p-4 active:bg-gray-50 transition-colors block ${!isLast ? "border-b border-gray-100" : ""
        }`}
      data-product-name={product.name}
    >
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />

          {/* Badge */}
          {isHighlighted && (
            <div className="absolute -top-1 -right-1 lg:block hidden">
              <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-yellow-400 text-black shadow-sm">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-1">
            <h3 className="font-semibold text-gray-900 text-base line-clamp-1 pr-2">
              {product.name}
            </h3>
            <svg
              className="w-5 h-5 text-gray-300 flex-shrink-0 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <div className="inline-flex items-center px-2 py-1 rounded-full bg-blue-50 mb-2">
            <span className="text-xs text-blue-700 font-medium">
              {product.category}
            </span>
          </div>

          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {product.short}
          </p>
        </div>
      </div>
    </Link>
  );
};

// Mobile Product Detail Modal
const MobileProductModal = ({ product, onClose }) => {
  return (
    <>
      {/* Backdrop */}

      {/* Modal */}
      <div className="fixed inset-x-0 bottom-0 z-50 flex items-end">
        <div className="bg-white w-full max-h-[90vh] rounded-t-3xl overflow-hidden shadow-2xl modal-slide-up border-t-4 border-blue-500">
          {/* Handle Bar */}
          <div className="flex justify-center pt-4 pb-2">
            <div
              className="w-12 h-1.5 bg-gray-300 rounded-full"
              onClick={onClose}
            ></div>
          </div>

          {/* Modal Header */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h2 className="font-bold text-xl text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2 flex-wrap">
                  {product.badge && (
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-yellow-400 text-black">
                      {product.badge}
                    </span>
                  )}
                  <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-blue-600 text-white">
                    {product.category}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-3 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 active:scale-95 flex-shrink-0"
              >
                <svg
                  className="w-5 h-5"
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
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="px-6 py-4 overflow-y-auto max-h-[calc(90vh-160px)] scrollbar-hide">
            {/* Product Image */}
            <div className="relative h-56 mb-6 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Product Description */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                About this product
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-gray-700 leading-relaxed text-base">
                  {product.short}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 py-4 border-t border-gray-100">
              <Link
                href={`/products/${product.slug}`}
                className="press-illusion-btn bg-green-400 text-black w-fit  font-bold px-6 py-2 text-sm mx-auto  items-center space-x-2  inline-flex"
              >
                <span>Get Pricing & Demo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 9"
                  className="h-2 w-4"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// ── Single Product Card from OurWorkSection ───────────────────────────────────────────────────────
function ProductCard({ product }) {
  const isHighlighted = !!product.badge;

  return (
    <div className="group relative rounded-2xl overflow-hidden flex flex-col bg-white border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      {/* Real Image Header */}
      <div className="relative h-52 overflow-hidden bg-gray-100 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover opacity-90"
        />

        {/* Subtle gradient overlay to make image blend into white card */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent opacity-100" />

        {/* Category pill on image */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {isHighlighted && (
            <span
              className="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm"
              style={{
                background: "linear-gradient(135deg, #111, #333)",
                color: "white",
              }}
            >
              <svg
                className="w-3 h-3 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              {product.badge}
            </span>
          )}
          <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/90 text-gray-800 backdrop-blur-md border border-gray-200/50">
            {product.category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 relative z-10 -mt-2">
        <h3 className="text-gray-900 font-bold text-lg mb-2.5 leading-snug">
          {product.name}
        </h3>
        <p className="text-gray-500 text-[13px] leading-relaxed flex-1 font-medium">
          {product.short}
        </p>

        {/* Bottom Action Row (Purchase Focused) */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
          <Link
            href={`/products/${product.slug}`}
            className="product-click-trigger btn-primary px-4 py-2 text-sm inline-flex items-center space-x-1"
            data-product-name={product.name}
          >
            <span>Get Pricing & Demo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 9"
              className="h-1.5 w-3"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(ProductDesktop);
