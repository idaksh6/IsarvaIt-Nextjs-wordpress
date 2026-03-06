'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Add global styles for hiding scrollbars
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
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

const ProductDesktop = ({ onClose, products, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const mobileTabsRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const scrollTimeoutRef = useRef(null);

    console.log('ProductDesktop rendered with:', { products: products?.length, categories: categories?.length });

    // Check scroll position to show/hide scroll indicators
    const checkScrollPosition = () => {
        if (mobileTabsRef.current) {
            const container = mobileTabsRef.current;
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
        }
    };

    // Setup scroll event listener with cleanup
    useEffect(() => {
        const container = mobileTabsRef.current;
        if (container) {
            checkScrollPosition();
            container.addEventListener('scroll', checkScrollPosition);
            
            // Add touch event listeners for mobile
            container.addEventListener('touchstart', checkScrollPosition);
            container.addEventListener('touchend', checkScrollPosition);
            
            return () => {
                container.removeEventListener('scroll', checkScrollPosition);
                container.removeEventListener('touchstart', checkScrollPosition);
                container.removeEventListener('touchend', checkScrollPosition);
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
                const buttons = container.querySelectorAll('button');
                const selectedButton = buttons[categoryIndex];
                
                if (selectedButton) {
                    const containerRect = container.getBoundingClientRect();
                    const buttonRect = selectedButton.getBoundingClientRect();
                    const containerScrollLeft = container.scrollLeft;
                    const containerWidth = container.clientWidth;
                    
                    // Calculate button position relative to container
                    const buttonLeft = buttonRect.left - containerRect.left + containerScrollLeft;
                    const buttonRight = buttonLeft + buttonRect.width;
                    const buttonCenter = buttonLeft + (buttonRect.width / 2);
                    const containerCenter = containerScrollLeft + (containerWidth / 2);
                    
                    // Professional scroll logic with multiple scenarios
                    const edgePadding = 80; // Increased padding for better UX
                    let targetScrollLeft = containerScrollLeft;
                    let shouldScroll = false;
                    
                    // Scenario 1: Button is too close to the right edge - bring to center-right
                    if (buttonRight > containerScrollLeft + containerWidth - edgePadding) {
                        targetScrollLeft = buttonLeft - (containerWidth * 0.3); // 30% from left
                        shouldScroll = true;
                    }
                    // Scenario 2: Button is too close to the left edge - bring to center-left  
                    else if (buttonLeft < containerScrollLeft + edgePadding) {
                        targetScrollLeft = buttonLeft - (containerWidth * 0.2); // 20% from left
                        shouldScroll = true;
                    }
                    // Scenario 3: Clicking near the end - auto-reveal more categories
                    else if (categoryIndex >= categories.length - 3 && categoryIndex < categories.length - 1) {
                        const remainingCategories = categories.length - categoryIndex - 1;
                        const scrollMultiplier = remainingCategories === 1 ? 0.5 : 0.3;
                        targetScrollLeft = containerScrollLeft + (containerWidth * scrollMultiplier);
                        shouldScroll = true;
                    }
                    // Scenario 4: Far from center - center the selected category
                    else if (Math.abs(buttonCenter - containerCenter) > containerWidth * 0.25) {
                        targetScrollLeft = buttonCenter - (containerWidth / 2);
                        shouldScroll = true;
                    }
                    
                    // Ensure scroll doesn't go beyond bounds
                    const maxScrollLeft = container.scrollWidth - containerWidth;
                    targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScrollLeft));
                    
                    // Only scroll if there's a meaningful difference and should scroll
                    if (shouldScroll && Math.abs(targetScrollLeft - containerScrollLeft) > 15) {
                        container.scrollTo({
                            left: targetScrollLeft,
                            behavior: 'smooth'
                        });
                        
                        // Update scroll indicators after scroll completes
                        setTimeout(checkScrollPosition, 600);
                    }
                }
            }, 10);
        }
    };

    // Filter products based on category and search
    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.short.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Breadcrumb component
    const Breadcrumbs = () => (
        <nav className="mb-4 text-sm">
            <ol className="flex items-center space-x-2">
                <li>
                    <button 
                        onClick={() => handleCategorySelect('All', 0)}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        All Products
                    </button>
                </li>
                {selectedCategory !== 'All' && (
                    <>
                        <li className="text-gray-400">/</li>
                        <li className="text-gray-600 font-medium">{selectedCategory}</li>
                    </>
                )}
            </ol>
        </nav>
    );

    return (
        <div className="max-w-7xl mx-auto mt-16 mb-20 px-6">
            {/* Desktop Design - Show above 968px (xl breakpoint) */}
            <div className="hidden xl:block">
                {/* Desktop Computer Frame */}
                <div className="relative">
                    {/* Monitor Stand Base */}
                    <div className="flex justify-center mb-4">
                        <div className="relative">
                            {/* Monitor Frame */}
                            <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6 rounded-t-2xl border-4 border-slate-700 shadow-2xl">
                                {/* Monitor Screen */}
                                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl overflow-hidden w-full max-w-[1200px] h-[500px] xl:h-[700px] border-2 border-slate-600 relative">

                                    {/* Desktop Header/Taskbar */}
                                    <div className="h-14 bg-gradient-to-r from-slate-700 to-slate-600 border-b border-slate-500/50 flex items-center justify-between px-6">
                                        <div className="flex items-center gap-4">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer" onClick={onClose}></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer"></div>
                                            </div>
                                            <h2 className="text-white font-semibold text-sm">Isarva Products Explorer</h2>
                                        </div>

                                        {/* Search Bar in Header */}
                                        <div className="flex-1 max-w-md mx-8">
                                            <div className="relative">
                                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                                <input
                                                    type="text"
                                                    placeholder="Search products..."
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    className="w-full pl-10 pr-4 py-2 bg-slate-600/50 border border-slate-500/50 rounded-lg text-white placeholder-slate-400 text-sm focus:outline-none focus:border-blue-400 focus:bg-slate-600/70 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            onClick={onClose}
                                            className="text-slate-400 hover:text-white transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Desktop Content Area */}
                                    <div className="flex h-[calc(100%-3.5rem)]">

                                        {/* Sidebar - Categories */}
                                        <div className="w-64 xl:w-80 bg-slate-800/50 border-r border-slate-600/50 p-4 xl:p-6">
                                            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l2 7-2 7H5l2-7-2-7h14z" />
                                                </svg>
                                                Categories
                                            </h3>

                                            <div className="space-y-2">
                                                {categories.map((category) => {
                                                    const count = category === 'All'
                                                        ? products.length
                                                        : products.filter(p => p.category === category).length;

                                                    return (
                                                        <button
                                                            key={category}
                                                            onClick={() => setSelectedCategory(category)}
                                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${selectedCategory === category
                                                                    ? 'bg-blue-600 text-white shadow-lg'
                                                                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                                                }`}
                                                        >
                                                            <span className="font-medium">{category}</span>
                                                            <span className={`text-xs px-2 py-1 rounded-full ${selectedCategory === category
                                                                    ? 'bg-blue-500 text-white'
                                                                    : 'bg-slate-600 text-slate-300 group-hover:bg-slate-600'
                                                                }`}>
                                                                {count}
                                                            </span>
                                                        </button>
                                                    );
                                                })}
                                            </div>

                                            {/* Search Results Info */}
                                            {searchTerm && (
                                                <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                                                    <p className="text-slate-300 text-sm">
                                                        Found {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for <span className="text-blue-400 font-medium">"{searchTerm}"</span>
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
                                                        onClick={() => setSelectedProduct(product)}
                                                    />
                                                ))}
                                            </div>

                                            {filteredProducts.length === 0 && (
                                                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                                                    <svg className="w-16 h-16 text-slate-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                    <h3 className="text-slate-400 text-xl font-semibold mb-2">No products found</h3>
                                                    <p className="text-slate-500">Try adjusting your search or selecting a different category</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Product Detail Modal */}
                                    {selectedProduct && (
                                        <ProductDetailModal
                                            product={selectedProduct}
                                            onClose={() => setSelectedProduct(null)}
                                        />
                                    )}
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
                <div className="bg-gradient-to-br from-slate-50 via-white to-gray-50 rounded-t-2xl p-4 mb-1 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-gray-900 font-bold text-lg">Our Products</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100 active:scale-95"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    {/* Mobile Search Bar */}
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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

                {/* Breadcrumbs */}
                <div className="bg-gray-50 px-4 py-3 border-b">
                    <Breadcrumbs />
                </div>

                {/* Tab-like Categories with Professional Auto-Scroll */}
                <div className="bg-white border-b sticky top-0 z-10 relative">
                    {/* Left scroll indicator with tap hint */}
                    {canScrollLeft && (
                        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none flex items-center justify-start pl-1">
                            <div className="w-1 h-6 bg-blue-400 rounded-full opacity-60"></div>
                        </div>
                    )}
                    
                    {/* Right scroll indicator with tap hint */}
                    {canScrollRight && (
                        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none flex items-center justify-end pr-1">
                            <div className="w-1 h-6 bg-blue-400 rounded-full opacity-60"></div>
                        </div>
                    )}
                    
                    <div 
                        ref={mobileTabsRef} 
                        className="flex overflow-x-auto scrollbar-hide px-4 py-3 gap-3"
                        style={{
                            scrollSnapType: 'x mandatory',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {categories.map((category, index) => {
                            const count = category === 'All' 
                                ? products.length 
                                : products.filter(p => p.category === category).length;
                            
                            return (
                                <button
                                    key={category}
                                    onClick={() => handleCategorySelect(category, index)}
                                    className={`flex-shrink-0 flex items-center px-5 py-3 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap transform ${
                                        selectedCategory === category
                                            ? 'bg-blue-600 text-white shadow-lg scale-105 ring-2 ring-blue-200'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-150 active:bg-gray-200 hover:scale-102 active:scale-95'
                                    }`}
                                    style={{
                                        scrollSnapAlign: 'center'
                                    }}
                                >
                                    <span className="mr-2 font-semibold">{category}</span>
                                    <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                                        selectedCategory === category
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-600'
                                    }`}>
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
                            <svg className="w-4 h-4 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <p className="text-blue-800 text-sm font-medium">
                                {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for "{searchTerm}"
                            </p>
                        </div>
                    </div>
                )}

                {/* Mobile Product List */}
                <div className="bg-white rounded-b-2xl min-h-[400px] overflow-hidden">
                    {filteredProducts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center px-4">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-gray-600 text-lg font-semibold mb-2">No products found</h3>
                            <p className="text-gray-500 text-sm">Try adjusting your search or selecting a different category</p>
                        </div>
                    ) : (
                        <div className="">
                            {filteredProducts.map((product, index) => (
                                <MobileProductCard
                                    key={product.id}
                                    product={product}
                                    onClick={() => setSelectedProduct(product)}
                                    isLast={index === filteredProducts.length - 1}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Mobile Product Detail Modal */}
                {selectedProduct && (
                    <MobileProductModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </div>
        </div>
    );
};

// Product Card for Desktop View
const ProductDesktopCard = ({ product, onClick }) => {
    const isHighlighted = !!product.badge;

    return (
        <div
            className="group relative bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/50 hover:border-slate-500 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
            onClick={onClick}
        >
            {/* Product Image */}
            <div className="relative h-32 mb-3 rounded-lg overflow-hidden bg-slate-600/30">
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
                    <span className="text-[8px] font-medium uppercase tracking-wide px-2 py-1 rounded bg-slate-600/80 text-slate-200">
                        {product.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div>
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                    {product.name}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {product.short}
                </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none"></div>
        </div>
    );
};

// Product Detail Modal
const ProductDetailModal = ({ product, onClose }) => {
    return (
        <div className="absolute inset-4 bg-slate-800/95 backdrop-blur-sm rounded-xl border border-slate-600/50 p-6 overflow-auto z-10">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-white text-2xl font-bold mb-2">{product.name}</h2>
                    <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium">
                        {product.category}
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className="text-slate-400 hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                    <p className="text-slate-300 mb-6 leading-relaxed">{product.short}</p>

                    <div className="flex gap-4">

                        <Link
                            href="#contact"
                            className="press-illusion-btn bg-green-400 text-black w-fit  font-bold px-6 py-2 text-sm  items-center space-x-2  md:flex"
                        >
                            <span>Get Pricing & Demo</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 9" className="h-2 w-4">
                                <path fill="currentColor" fillRule="evenodd" d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Mobile Product Card Component
const MobileProductCard = ({ product, onClick, isLast }) => {
    const isHighlighted = !!product.badge;

    return (
        <div 
            className={`p-4 active:bg-gray-50 transition-colors ${
                !isLast ? 'border-b border-gray-100' : ''
            }`}
            onClick={onClick}
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
                        <div className="absolute -top-1 -right-1">
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
                        <svg className="w-5 h-5 text-gray-300 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
        </div>
    );
};

// Mobile Product Detail Modal
const MobileProductModal = ({ product, onClose }) => {
    return (
        <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            
            {/* Modal */}
            <div className="fixed inset-x-0 bottom-0 z-50 flex items-end">
                <div 
                    className="bg-white w-full max-h-[90vh] rounded-t-3xl overflow-hidden shadow-2xl modal-slide-up border-t-4 border-blue-500"
                >
                    {/* Handle Bar */}
                    <div className="flex justify-center pt-4 pb-2">
                        <div className="w-12 h-1.5 bg-gray-300 rounded-full" onClick={onClose}></div>
                    </div>
                    
                    {/* Modal Header */}
                    <div className="px-6 py-4 border-b border-gray-100">
                        <div className="flex items-start justify-between">
                            <div className="flex-1 pr-4">
                                <h2 className="font-bold text-xl text-gray-900 mb-2 line-clamp-2">
                                    {product.name}
                                </h2>
                                <div className="flex items-center gap-2">
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
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                        <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                            <Link
                                href="/contact"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Get Pricing & Demo
                            </Link>
                            <button 
                                onClick={onClose}
                                className="w-full border-2 border-gray-200 text-gray-700 text-center py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-[0.98]"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDesktop; 