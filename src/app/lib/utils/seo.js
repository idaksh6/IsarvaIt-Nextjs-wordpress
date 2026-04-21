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
  image = `${SITE_URL}/isarva New Logo.png`,
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
  return generateMetadata({
    title: product.title,
    description: product.shortDescription || product.description,
    keywords: [
      product.title,
      product.category,
      ...product.features?.slice(0, 5) || [],
      "software solution",
      "business software",
    ],
    url: `/product/${product.slug}`,
    type: "website",
  });
}

export function generateServiceMetadata(service) {
  return generateMetadata({
    title: service.title,
    description: service.shortDescription || service.description,
    keywords: [
      service.title,
      ...service.features?.map(f => f.title).slice(0, 5) || [],
      "professional services",
      "IT services",
    ],
    url: `/service/${service.slug}`,
  });
}

export function generateIndustryMetadata(industry) {
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
    url: `/careers/${job.slug}`,
  });
}

// JSON-LD Schema generators for rich snippets
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/isarva New Logo.png`,
    description: DEFAULT_DESCRIPTION,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9880606087",
      contactType: "Customer Service",
    },
    sameAs: [
      // Add social media URLs here
    ],
  };
}

export function generateProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.title,
    description: product.shortDescription,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "0",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
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
        url: `${SITE_URL}/isarva New Logo.png`,
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
