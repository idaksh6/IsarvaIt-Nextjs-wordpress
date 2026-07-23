/**
 * SEO Metadata Utilities
 * Centralized functions for generating consistent SEO metadata across the site
 */

const SITE_NAME = "Isarva Infotech";
const SITE_URL = "https://www.isarvait.com";
const DEFAULT_DESCRIPTION = "Premium web design, development, and software solutions. Specializing in Next.js, React, WordPress, ERP, CRM, HRMS, and custom software development.";

export function generateMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = [],
  image = `${SITE_URL}/isarva-og.png`,
  url = SITE_URL,
  type = "website",
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`;

  const defaultKeywords = [
    "web design",
    "web development",
    "software development",
    "Next.js",
    "React",
    "WordPress",
    "ERP",
    "CRM",
    "HRMS",
    "custom software",
    "digital transformation",
  ];

  const allKeywords = [...new Set([...keywords, ...defaultKeywords])].join(", ");

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: "/Favicon.png",
      shortcut: "/Favicon.png",
      apple: "/Favicon.png",
    },
  };
}

export function generateProductMetadata(product) {
  const isNoIndex = product.slug?.includes("-staging") || product.slug?.includes("-old");
  const prefix = product.slug?.includes("-staging") ? "[STAGING] " : product.slug?.includes("-old") ? "[OLD] " : "";
  const seoTitle = product.seoTitle || product.title;
  const seoDescription =
    product.metaDescription || product.shortDescription || product.description;
  const ogImage = product.ogImage
    ? product.ogImage.startsWith("http")
      ? product.ogImage
      : `${SITE_URL}${product.ogImage}`
    : `${SITE_URL}/isarva-og.png`;

  return generateMetadata({
    title: `${prefix}${seoTitle}`,
    description: seoDescription,
    keywords: [
      product.title,
      product.tagline,
      product.category,
      ...(product.keywords || []),
      ...(product.features?.slice(0, 6) || []),
      "software solution",
      "business software",
      "Isarva Infotech",
    ],
    image: ogImage,
    url: `/product/${product.slug}`,
    type: "website",
    noIndex: isNoIndex,
  });
}

export function generateServiceMetadata(service) {
  const isStaging = service.slug?.includes("-staging");
  const isNoIndex = isStaging || !!service.noIndex || service.slug === "news-and-magazine-portal";
  const seoTitle = service.seoTitle || service.title;
  const seoDescription = service.metaDescription || service.shortDescription || service.description;
  const ogImage = service.ogImage
    ? service.ogImage.startsWith("http")
      ? service.ogImage
      : `${SITE_URL}${service.ogImage}`
    : service.heroImage
      ? service.heroImage.startsWith("http")
        ? service.heroImage
        : `${SITE_URL}${service.heroImage}`
      : `${SITE_URL}/isarva-og.png`;

  return generateMetadata({
    title: isStaging ? `[STAGING] ${seoTitle}` : seoTitle,
    description: seoDescription,
    keywords: [
      service.title,
      ...(service.keywords || []),
      ...(service.technologies || []),
      ...service.features?.map(f => (typeof f === "string" ? f : f.title || "")).slice(0, 6) || [],
      "professional services",
      "IT services",
      "Isarva Infotech",
    ],
    image: ogImage,
    url: `/service/${service.slug}`,
    noIndex: isNoIndex,
  });
}

export function generateIndustryMetadata(industry) {
  const ogImage = industry.ogImage
    ? industry.ogImage.startsWith("http")
      ? industry.ogImage
      : `${SITE_URL}${industry.ogImage}`
    : industry.heroImage
      ? industry.heroImage.startsWith("http")
        ? industry.heroImage
        : `${SITE_URL}${industry.heroImage}`
      : `${SITE_URL}/isarva-og.png`;

  return generateMetadata({
    title: industry.title,
    description: industry.shortDescription || industry.description,
    keywords: [
      industry.title,
      "industry solutions",
      "vertical software",
      "business transformation",
    ],
    url: `/industry/${industry.slug}`,
    image: ogImage,
  });
}

export function generateBlogMetadata(post) {
  const tags = Array.isArray(post.tags) ? post.tags : [];
  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: [...tags, "blog", "insights", "tech articles"],
    url: `/blog/${post.slug}`,
    type: "article",
  });
}

export function generateJobMetadata(job) {
  return generateMetadata({
    title: `${job.title} - Careers`,
    description: `Join our team as ${job.title}. ${job.description?.substring(0, 150)}`,
    keywords: [job.title, job.category, "careers", "job opening", "hiring"],
    url: `/career/${job.slug}`,
    image: "https://www.isarvait.com/Services/Training/training_mentors_team_indian.png",
  });
}

// JSON-LD Schema generators for rich snippets
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/isarva-og.png`,
    description: DEFAULT_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919902863697",
      contactType: "Customer Service",
    },
    sameAs: [
      // Add social media URLs here
    ],
  };
}

export function generateBreadcrumbSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${SITE_URL}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: `${SITE_URL}/product/${product.slug}`,
      },
    ],
  };
}

export function generateServiceBreadcrumbSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${SITE_URL}/service/${service.slug}`,
      },
    ],
  };
}

export function generateServiceSchema(service) {
  const serviceUrl = `${SITE_URL}/service/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.seoTitle || service.title,
    alternateName: service.title,
    description: service.metaDescription || service.shortDescription || service.description,
    url: serviceUrl,
    serviceType: service.title,
    keywords: (service.keywords || []).join(", "),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/contact`,
    },
  };
}

export function generateProductSchema(product) {
  const productUrl = `${SITE_URL}/product/${product.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.seoTitle || product.title,
    alternateName: product.title,
    description: product.metaDescription || product.shortDescription || product.description,
    url: productUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    featureList: product.features,
    keywords: (product.keywords || []).join(", "),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/contact`,
    },
  };
}

export function generateArticleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/isarva-og.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
  };
}

export function generateJobPostingSchema(job) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.postedDate || new Date().toISOString(),
    hiringOrganization: {
      "@type": "Organization",
      name: SITE_NAME,
      sameAs: SITE_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location || "Bangalore",
        addressCountry: "IN",
      },
    },
    employmentType: job.type || "FULL_TIME",
  };
}
