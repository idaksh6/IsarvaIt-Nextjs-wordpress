import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryBySlug, getAllIndustrySlugs, industriesData } from "../../lib/data/industries-data";
import IndustryDetailClient from "./IndustryDetailClient";

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({
    slug: slug,
  }));
}

// Force static rendering for all industry pages
export const dynamic = 'force-static';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industry.title} Solutions - Isarva Industries`,
    description: industry.description,
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  // Get related industries (3 random industries excluding current)
  const relatedIndustries = industriesData
    .filter(i => i.slug !== industry.slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // Function to get icon based on service title
  const getServiceIcon = (title) => {
    const titleLower = title.toLowerCase();
    
    // Banking & Financial Services
    if (titleLower.includes('digital transformation')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />;
    }
    if (titleLower.includes('legacy modernization')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />;
    }
    if (titleLower.includes('mobility')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />;
    }
    if (titleLower.includes('analytics') || titleLower.includes('business intelligence')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />;
    }
    if (titleLower.includes('website') || titleLower.includes('web')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />;
    }
    if (titleLower.includes('software development')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />;
    }
    if (titleLower.includes('investment banking')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
    }
    if (titleLower.includes('corporate banking') || titleLower.includes('retail banking')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />;
    }
    
    // Education
    if (titleLower.includes('mobile learning') || titleLower.includes('mobile')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />;
    }
    if (titleLower.includes('examination') || titleLower.includes('exam')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
    }
    if (titleLower.includes('e-learning') || titleLower.includes('online')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />;
    }
    if (titleLower.includes('virtual classroom') || titleLower.includes('remote learning')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />;
    }
    if (titleLower.includes('institute management') || titleLower.includes('management software')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />;
    }
    if (titleLower.includes('micro learning')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />;
    }
    if (titleLower.includes('game') || titleLower.includes('gaming')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
    }
    if (titleLower.includes('customized learning') || titleLower.includes('personalized')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />;
    }
    
    // Insurance
    if (titleLower.includes('underwriting')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
    }
    if (titleLower.includes('claim')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />;
    }
    if (titleLower.includes('injury')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />;
    }
    if (titleLower.includes('customer portal') || titleLower.includes('portal')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />;
    }
    if (titleLower.includes('crm')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />;
    }
    if (titleLower.includes('modernization') || titleLower.includes('system')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />;
    }
    if (titleLower.includes('automation')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />; 
    }
    
    // Healthcare
    if (titleLower.includes('clinical trial')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />;
    }
    if (titleLower.includes('digitized health') || titleLower.includes('digital health')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />;
    }
    if (titleLower.includes('precision medicine')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />;
    }
    if (titleLower.includes('supply chain')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />;
    }
    if (titleLower.includes('platform')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />;
    }
    if (titleLower.includes('cloud')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />;
    }
    if (titleLower.includes('patient care') || titleLower.includes('transform patient')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />;
    }
    
    // Manufacturing
    if (titleLower.includes('digitalization')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />;
    }
    if (titleLower.includes('cybersecurity') || titleLower.includes('security')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />;
    }
    if (titleLower.includes('production quality') || titleLower.includes('quality')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />;
    }
    if (titleLower.includes('retail')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />;
    }
    if (titleLower.includes('consumer products')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />;
    }
    if (titleLower.includes('flow-driven') || titleLower.includes('workflow')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />;
    }
    
    // Media & Entertainment
    if (titleLower.includes('accelerate') || titleLower.includes('business')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />;
    }
    if (titleLower.includes('expert team') || titleLower.includes('team')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />;
    }
    if (titleLower.includes('deliver content') || titleLower.includes('content')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />;
    }
    if (titleLower.includes('data oriented') || titleLower.includes('data')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />;
    }
    if (titleLower.includes('productivity')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />;
    }
    if (titleLower.includes('streaming') || titleLower.includes('live')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />;
    }
    if (titleLower.includes('video')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />;
    }
    
    // BPO Services
    if (titleLower.includes('inbound')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />;
    }
    if (titleLower.includes('outbound')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />;
    }
    if (titleLower.includes('cost') || titleLower.includes('efficient')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
    }
    if (titleLower.includes('core') || titleLower.includes('focus')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />;
    }
    if (titleLower.includes('growth') || titleLower.includes('strategic')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />;
    }
    if (titleLower.includes('self-sustained') || titleLower.includes('expansion')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />;
    }
    if (titleLower.includes('call center') || titleLower.includes('call')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />;
    }
    if (titleLower.includes('understanding bpo') || titleLower.includes('bpo')) {
      return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
    }
    
    // Default icon (checkmark)
    return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />;
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className={`relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-gradient-to-b ${industry.softColor}`}
      >
        {/* Background Decorations - Soft with Noise */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" style={{ transform: "translateZ(0)" }}>
          <div className="absolute inset-0 bg-mesh-green opacity-20"></div>
          <div className={`absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-to-br ${industry.color} opacity-20 blur-[100px] rounded-full`}></div>
          <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl ${industry.color} opacity-15 blur-[120px] rounded-full`}></div>
          <div className="hero-noise-overlay opacity-[0.15]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" prefetch={true} className="hover:text-emerald-600 transition-colors">
                Home
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/industries" prefetch={true} className="hover:text-emerald-600 transition-colors">
                Industries
              </Link>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-emerald-600 font-medium">{industry.title}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full  backdrop-blur-md text-black font-semibold text-sm mb-6 border border-white/60 shadow-lg`}>
                <span className="text-2xl">{industry.icon}</span>
                <span>Industry Expertise</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                {industry.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <IndustryDetailClient industry={industry} industriesData={industriesData} />
              </div>
            </div>

            <div>
              <div className="relative">
                <div className={`absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br ${industry.color} opacity-20 blur-[120px] rounded-full`}></div>
                <div className="relative rounded-3xl bg-white/90 backdrop-blur-md border border-white/60 shadow-2xl overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <img 
                      src={industry.heroImage} 
                      alt={industry.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-10`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={`py-20 lg:py-32 bg-gradient-to-b ${industry.softColor} relative overflow-hidden`}>
        <div className="absolute inset-0 hero-noise-overlay opacity-[0.08]"></div>
        <div className={`absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-to-br ${industry.color} opacity-10 blur-[100px] rounded-full`}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {industry.slug === 'banking-financial-services' 
                ? 'Explore Our BFS Services' 
                : industry.slug === 'education'
                ? 'Explore Our Education Services'
                : industry.slug === 'insurance'
                ? 'Explore Our Insurance IT Services'
                : industry.slug === 'healthcare-life-sciences'
                ? 'Explore Our Healthcare & Life Sciences Services'
                : industry.slug === 'manufacturing'
                ? 'Explore Our Manufacturing Services'
                : industry.slug === 'media-entertainment'
                ? 'Explore Our Media & Entertainment Services'
                : industry.slug === 'bpo-services-ites'
                ? 'Isarva BPO Services'
                : `Our Solutions for ${industry.title}`
              }
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {industry.slug === 'banking-financial-services' 
                ? 'Unlock the full potential of your banking and financial services operations with our expert solutions, designed to meet your unique business needs.'
                : industry.slug === 'education'
                ? 'Unlock the full potential of your educational institution with our expert solutions, designed to meet your unique needs. From custom software development to implementation and integration, we offer a full suite of solutions to ensure your institution runs smoothly and efficiently, while also enhancing the learning experience for your students.'
                : industry.slug === 'insurance'
                ? 'Streamline your insurance operations with our expert IT solutions, designed to meet the unique needs of your business. From policy administration to claims management, we offer a full suite of solutions to help you reduce costs, improve efficiency, and enhance customer satisfaction.'
                : industry.slug === 'healthcare-life-sciences'
                ? 'Unlock the full potential of your healthcare or life sciences organization with our expert IT solutions, designed to meet your unique industry needs. From custom software development to implementation and integration, we offer a full suite of solutions to ensure your organization runs smoothly, efficiently, and compliantly.'
                : industry.slug === 'manufacturing'
                ? 'Maximize your production efficiency and reduce costs with our tailored manufacturing solutions. Our expert team provides a range of services, from custom software development to implementation and integration, to help you optimize your manufacturing operations and stay ahead of the competition.'
                : industry.slug === 'media-entertainment'
                ? 'Elevate your creative workflow, streamline your operations, and deliver exceptional customer experiences with our tailored IT solutions. From content management to distribution, we offer a range of services designed to meet the unique needs of the media and entertainment industry. Our experts will work closely with you to understand your business goals and develop a customized solution that drives innovation and growth.'
                : industry.slug === 'bpo-services-ites'
                ? 'Isarva offers BPO solutions, including inbound and outbound call center services, to boost customer experience, cut costs, and support strategic business focus. We\'re expanding in Mangalore, creating new opportunities with a self-funded, innovative approach.'
                : 'Comprehensive technology solutions designed specifically for your industry'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.solutions.map((solution, index) => {
              // Handle both string and object formats
              const isObject = typeof solution === 'object';
              const title = isObject ? solution.title : solution;
              const description = isObject ? solution.description : null;
              
              return (
                <div 
                  key={index}
                  className="relative rounded-3xl p-8 bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} opacity-90 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {getServiceIcon(title)}
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-${industry.accentColor}-700 transition-colors`}>
                      {title}
                    </h3>
                    {description && (
                      <p className="text-gray-700 leading-relaxed text-[15px]">
                        { description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banking Segments Section - Only for Banking Industry */}
      {industry.bankingSegments && (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 hero-noise-overlay opacity-[0.03]"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Banking Services
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Specialized solutions for different banking segments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.bankingSegments.map((segment, index) => (
                <div 
                  key={index}
                  className="relative rounded-3xl p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative text-center md:text-left">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto md:mx-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {getServiceIcon(segment.title)}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {segment.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-[15px]">
                      {segment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white font-semibold text-sm mb-6 border-2 border-gray-200 text-gray-900 shadow-sm">
              <svg 
                className="w-4 h-4" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                style={{
                  color: industry.accentColor === 'blue' ? '#3b82f6' :
                         industry.accentColor === 'purple' ? '#a855f7' :
                         industry.accentColor === 'teal' ? '#14b8a6' :
                         industry.accentColor === 'rose' ? '#f43f5e' :
                         industry.accentColor === 'orange' ? '#f97316' :
                         industry.accentColor === 'pink' ? '#ec4899' :
                         industry.accentColor === 'emerald' ? '#10b981' : '#3b82f6'
                }}
              >
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Business Impact
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits You'll Enjoy
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Measurable value that transforms your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industry.benefits.slice(0, 4).map((benefit, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 shadow-lg mx-auto`}>
                  <span className="text-3xl font-black text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {typeof benefit === 'string' ? benefit : benefit.title}
                </h3>
                {typeof benefit === 'object' && benefit.description && (
                  <p className="text-sm text-gray-700 leading-relaxed mt-2">
                    {benefit.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 hero-noise-overlay opacity-[0.03]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Other Industries We Serve
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explore solutions for other industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedIndustries.map((relatedIndustry) => (
              <Link
                key={relatedIndustry.slug}
                href={`/industry/${relatedIndustry.slug}`}
                prefetch={true}
                className="group"
              >
                <div className="relative h-full rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${relatedIndustry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${relatedIndustry.color} opacity-90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6`}>
                      <span className="text-4xl">{relatedIndustry.icon}</span>
                    </div>

                    <h3 className={`text-2xl font-bold text-gray-900 mb-4 group-hover:text-${relatedIndustry.accentColor}-700 transition-colors`}>
                      {relatedIndustry.title}
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                      {relatedIndustry.shortDescription}
                    </p>

                    <div className={`flex items-center gap-2 text-${relatedIndustry.accentColor}-600 font-semibold group-hover:gap-3 transition-all duration-200`}>
                      <span>Explore</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/industries"
              prefetch={true}
              className={`inline-flex items-center gap-2 text-${industry.accentColor}-600 font-semibold hover:gap-3 transition-all duration-200 text-lg`}
            >
              View All Industries
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className={`py-20 lg:py-32 bg-gradient-to-br ${industry.softColor} relative overflow-hidden`}
      >
        {/* Checkered background pattern */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="checkerboard" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="20" height="20" fill="currentColor"/>
                <rect x="20" y="20" width="20" height="20" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#checkerboard)" className="text-gray-900"/>
          </svg>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.5),transparent_50%)]"></div>
          <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${industry.color} opacity-20 blur-[100px] rounded-full`}></div>
          <div className={`absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br ${industry.color} opacity-15 blur-[100px] rounded-full`}></div>
        </div>

        {/* Dotted pattern overlay */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gray-900"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white backdrop-blur-md text-gray-900 font-semibold text-sm mb-8 border-2 border-gray-200 shadow-lg">
            <span className="flex h-3 w-3 relative">
              <span 
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ 
                  backgroundColor: industry.accentColor === 'blue' ? '#3b82f6' :
                                  industry.accentColor === 'purple' ? '#a855f7' :
                                  industry.accentColor === 'teal' ? '#14b8a6' :
                                  industry.accentColor === 'rose' ? '#f43f5e' :
                                  industry.accentColor === 'orange' ? '#f97316' :
                                  industry.accentColor === 'pink' ? '#ec4899' :
                                  industry.accentColor === 'emerald' ? '#10b981' : '#10b981'
                }}
              ></span>
              <span 
                className="relative inline-flex rounded-full h-3 w-3"
                style={{ 
                  backgroundColor: industry.accentColor === 'blue' ? '#3b82f6' :
                                  industry.accentColor === 'purple' ? '#a855f7' :
                                  industry.accentColor === 'teal' ? '#14b8a6' :
                                  industry.accentColor === 'rose' ? '#f43f5e' :
                                  industry.accentColor === 'orange' ? '#f97316' :
                                  industry.accentColor === 'pink' ? '#ec4899' :
                                  industry.accentColor === 'emerald' ? '#10b981' : '#10b981'
                }}
              ></span>
            </span>
            Let's Get Started
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Ready to Transform Your {industry.title} Business?
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with our experts to unlock the full potential of your {industry.title.toLowerCase()} operations. Let's create innovative solutions together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              prefetch={true}
              className={`group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r ${industry.color} rounded-xl hover:shadow-2xl transition-all duration-300 shadow-xl transform hover:-translate-y-1 overflow-hidden`}
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started Today
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700"></div>
            </Link>
            
            <Link
              href="/industries"
              prefetch={true}
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-gray-900 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Browse All Industries
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>100+</div>
                <div className="text-gray-700 text-sm font-medium">Projects Delivered</div>
              </div>
              <div>
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>50+</div>
                <div className="text-gray-700 text-sm font-medium">Happy Clients</div>
              </div>
              <div>
                <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>24/7</div>
                <div className="text-gray-700 text-sm font-medium">Expert Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
