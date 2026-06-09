"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "../components/AppLink";
import { useSearchParams } from "next/navigation";

// Import data sources
import { productsData as products } from "../lib/data/products-data";
import { servicesData as services } from "../lib/data/services-data";
import { industriesData as industries } from "../lib/data/industries-data";
import { jobsData as jobs } from "../lib/data/jobsData";
import { getBlogPosts } from "../lib/services/blog-service";

// Static Pages Data
const staticPages = [
  {
    name: "Home",
    slug: "/",
    description: "Welcome to Isarva Infotech - Your trusted partner for innovative software solutions, web development, and digital transformation services.",
    keywords: ["home", "homepage", "isarva", "main page", "landing"]
  },
  {
    name: "About Us",
    slug: "/about",
    description: "Learn about Isarva Infotech, our mission, vision, team, and 20+ years of experience in delivering world-class software solutions.",
    keywords: ["about", "company", "team", "mission", "vision", "who we are", "our story", "experience"]
  },
  {
    name: "Contact Us",
    slug: "/contact",
    description: "Get in touch with Isarva Infotech. Contact our team for inquiries, support, or to discuss your next project.",
    keywords: ["contact", "get in touch", "reach us", "support", "help", "email", "phone", "address", "location", "talk to us"]
  },
  {
    name: "Careers",
    slug: "/careers",
    description: "Join our team at Isarva Infotech. Explore exciting career opportunities and internships in software development.",
    keywords: ["careers", "jobs", "employment", "work with us", "job openings", "vacancies", "hiring", "opportunities"]
  },
  {
    name: "Internships",
    slug: "/internships",
    description: "Apply for internships at Isarva Infotech and kickstart your career in software development and technology.",
    keywords: ["internship", "intern", "training", "student", "fresher", "learning", "internship program"]
  },
  {
    name: "Blog",
    slug: "/blog",
    description: "Read our latest articles, insights, and updates on technology, software development, AI, cybersecurity, and industry trends.",
    keywords: ["blog", "articles", "news", "updates", "insights", "read", "publications"]
  },
  {
    name: "Analytics Report",
    slug: "/report",
    description: "View detailed analytics and reports on our platform performance, user engagement, and system metrics.",
    keywords: ["analytics", "report", "statistics", "metrics", "data", "insights", "performance"]
  },
  {
    name: "Testimonials",
    slug: "/testimonial",
    description: "Read what our clients say about working with Isarva Infotech. Customer reviews and success stories.",
    keywords: ["testimonials", "reviews", "feedback", "client reviews", "customer stories", "success stories", "what clients say"]
  }
];

// Loading fallback component
function SearchLoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-44">
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-600 border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
}

// Main search component that uses useSearchParams
function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const [results, setResults] = useState({
    pages: [],
    products: [],
    services: [],
    industries: [],
    careers: [],
    blogs: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    performSearch(query);
  }, [query]);

  const performSearch = async (searchTerm) => {
    if (!searchTerm || searchTerm.trim() === "") {
      setResults({ pages: [], products: [], services: [], industries: [], blogs: [] });
      setTotalResults(0);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const term = searchTerm.toLowerCase().trim();

    // Search Static Pages
    const pageResults = staticPages.filter((page) => {
      return (
        page.name?.toLowerCase().includes(term) ||
        page.description?.toLowerCase().includes(term) ||
        page.keywords?.some((keyword) => keyword.toLowerCase().includes(term))
      );
    });

    // Search Products
    const productResults = products.filter((item) => {
      return (
        item.name?.toLowerCase().includes(term) ||
        item.description?.toLowerCase().includes(term) ||
        item.tagline?.toLowerCase().includes(term) ||
        item.features?.some((f) => f?.toLowerCase().includes(term))
      );
    });

    // Search Services
    const serviceResults = services.filter((item) => {
      return (
        item.name?.toLowerCase().includes(term) ||
        item.description?.toLowerCase().includes(term) ||
        item.shortDescription?.toLowerCase().includes(term)
      );
    });

    // Search Industries
    const industryResults = industries.filter((item) => {
      return (
        item.name?.toLowerCase().includes(term) ||
        item.description?.toLowerCase().includes(term) ||
        item.content?.toLowerCase().includes(term)
      );
    });

    // Search Careers
    const careerResults = jobs.filter((item) => {
      return (
        item.title?.toLowerCase().includes(term) ||
        item.description?.toLowerCase().includes(term) ||
        item.category?.toLowerCase().includes(term) ||
        item.location?.toLowerCase().includes(term) ||
        item.requiredSkills?.some(skill => skill.toLowerCase().includes(term))
      );
    });

    // Search Blog Posts
    const blogPosts = await getBlogPosts({ perPage: 100 });
    const blogResults = blogPosts.filter((item) => {
      return (
        item.title?.toLowerCase().includes(term) ||
        item.excerpt?.toLowerCase().includes(term) ||
        item.categoryName?.toLowerCase().includes(term) ||
        item.content?.toLowerCase().includes(term)
      );
    });

    setResults({
      pages: pageResults,
      products: productResults,
      services: serviceResults,
      industries: industryResults,
      careers: careerResults,
      blogs: blogResults,
    });

    setTotalResults(
      pageResults.length +
      productResults.length +
        serviceResults.length +
        industryResults.length +
        careerResults.length +
        blogResults.length
    );
    setIsLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-white">

      <div className="max-w-7xl mx-auto px-6 py-44">
        {/* Search Header */}
        <div className="mb-12">
          <h1 className="mb-6">
            Search Results
          </h1>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-3xl">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, services, articles..."
                className="w-full px-6 py-4 pr-12 rounded-full border-2 border-gray-200 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100 transition-all text-gray-900 placeholder-gray-400"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Results Count */}
          {query && !isLoading && (
            <p className="mt-6 text-lg text-gray-600">
              Found{" "}
              <span className="font-bold text-emerald-600">
                {totalResults}
              </span>{" "}
              result{totalResults !== 1 ? "s" : ""} for "
              <span className="font-semibold text-gray-900">{query}</span>"
            </p>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-emerald-600 border-t-transparent"></div>
          </div>
        )}

        {/* No Query */}
        {!query && !isLoading && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="mb-2 capitalize">
              Start Your Search
            </h2>
            <p className="text-gray-600">
              Enter a keyword to search across our entire website
            </p>
          </div>
        )}

        {/* No Results */}
        {query && !isLoading && totalResults === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">😔</div>
            <h2 className="mb-2 capitalize">
              No Results Found
            </h2>
            <p className="text-gray-600 mb-8">
              We couldn't find anything matching "{query}". Try different
              keywords.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-colors"
            >
              Back to Home
            </Link>
          </div>
        )}

        {/* Results Sections */}
        {!isLoading && totalResults > 0 && (
          <div className="space-y-12">
            {/* Pages */}
            {results.pages.length > 0 && (
              <section>
                <h2 className="mb-6 flex items-center gap-3 capitalize">
                  <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  Pages ({results.pages.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.pages.map((page) => (
                    <Link
                      key={`page-${page.slug}`}
                      href={page.slug}
                      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-300"
                    >
                      <h3 className="mb-2 group-hover:text-teal-600 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {page.description}
                      </p>
                      <span className="inline-flex items-center text-teal-600 font-semibold text-sm">
                        Visit Page
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Products */}
            {results.products.length > 0 && (
              <section>
                <h2 className="mb-6 flex items-center gap-3 capitalize">
                  <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-emerald-600"
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
                  </span>
                  Products ({results.products.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.products.map((product) => (
                    <Link
                      key={`product-${product.slug}`}
                      href={`/product/${product.slug}`}
                      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-300"
                    >
                      <h3 className="mb-2 group-hover:text-emerald-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {product.description || product.tagline}
                      </p>
                      <span className="inline-flex items-center text-emerald-600 font-semibold text-sm">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Services */}
            {results.services.length > 0 && (
              <section>
                <h2 className="mb-6 flex items-center gap-3 capitalize">
                  <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
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
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  Services ({results.services.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.services.map((service) => (
                    <Link
                      key={`service-${service.slug}`}
                      href={`/service/${service.slug}`}
                      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-300"
                    >
                      <h3 className="mb-2 group-hover:text-blue-600 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {service.description || service.shortDescription}
                      </p>
                      <span className="inline-flex items-center text-blue-600 font-semibold text-sm">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Industries */}
            {results.industries.length > 0 && (
              <section>
                <h2 className="mb-6 flex items-center gap-3 capitalize">
                  <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </span>
                  Industries ({results.industries.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.industries.map((industry) => (
                    <Link
                      key={`industry-${industry.slug}`}
                      href={`/industry/${industry.slug}`}
                      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-300"
                    >
                      <h3 className="mb-2 group-hover:text-purple-600 transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {industry.description}
                      </p>
                      <span className="inline-flex items-center text-purple-600 font-semibold text-sm">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Careers */}
            {results.careers.length > 0 && (
              <section>
                <h2 className="mb-6 flex items-center gap-3 capitalize">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  Careers ({results.careers.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.careers.map((job) => (
                    <Link
                      key={`career-${job.slug}`}
                      href={`/career/${job.slug}`}
                      className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-300"
                    >
                      <h3 className="mb-2 group-hover:text-orange-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full capitalize">
                          {job.location}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-orange-50 text-orange-600 rounded-full capitalize">
                          {job.jobType}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {job.description}
                      </p>
                      <span className="inline-flex items-center text-orange-600 font-semibold text-sm">
                        View Job Details
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
            {results.blogs.length > 0 && (
              <section>
                <h2 className="mb-6 flex items-center gap-3 capitalize">
                  <span className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </span>
                  Blog Articles ({results.blogs.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.blogs.map((blog) => (
                    <Link
                      key={`blog-${blog.slug}`}
                      href={`/blog/${blog.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-300"
                    >
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <img
                          src={blog.featuredImage}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold capitalize rounded-full">
                            {blog.categoryName}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{blog.date}</span>
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoadingFallback />}>
      <SearchResults />
    </Suspense>
  );
}


