/**
 * Home Page Service
 * Handles data fetching and transformation for the home page
 */

import { getFrontPage, getMediaUrl } from '../api/wordpress-api';
import { cleanWysiwygContent, parseAcfLink, parseAcfImage } from '../utils/content-helpers';

/**
 * Fetch and transform home page data
 * @returns {Promise<Object|null>} Transformed home page data
 */
export async function getHomePageData() {
  const pageData = await getFrontPage();
  
  if (!pageData) {
    return null;
  }
  
  return {
    id: pageData.id,
    title: pageData.title?.rendered || '',
    content: pageData.content?.rendered || '',
    acf: pageData.acf || {},
  };
}

/**
 * Extract Hero Section data from home page ACF fields
 * @param {Object} homePageData - Home page data with ACF fields
 * @returns {Promise<Object|null>} Hero section data
 */
export async function getHeroSectionData(homePageData) {
  if (!homePageData?.acf?.home_page_layout) {
    return null;
  }
  
  const layouts = homePageData.acf.home_page_layout;
  
  // Find the hero section layout
  const heroSection = layouts.find(
    (layout) => layout.acf_fc_layout === 'hero_section'
  );
  
  if (!heroSection) {
    return null;
  }
  
  // Parse button link (handles object or string)
  const buttonLink = parseAcfLink(heroSection.button_link);
  
  // Parse background image (handles URL, object, or ID)
  const backgroundImage = await parseAcfImage(
    heroSection.background_image,
    getMediaUrl
  );
  
  return {
    stripTag: heroSection.hero_heading_strip_tag || '',
    heading: cleanWysiwygContent(heroSection.hero_heading),
    description: cleanWysiwygContent(heroSection.hero_description),
    backgroundImage,
    hasButton: heroSection.have_button || false,
    buttonText: heroSection.button_text || 'Get Started',
    buttonLink: buttonLink.url,
    buttonTarget: buttonLink.target,
  };
}

/**
 * Extract Services Section data from home page ACF fields
 * @param {Object} homePageData - Home page data with ACF fields
 * @returns {Promise<Object|null>} Services section data
 */
export async function getServicesSectionData(homePageData) {
  if (!homePageData?.acf?.home_page_layout) {
    return null;
  }
  
  const layouts = homePageData.acf.home_page_layout;
  
  // Find the services section layout
  const servicesSection = layouts.find(
    (layout) => layout.acf_fc_layout === 'services_section'
  );
  
  if (!servicesSection) {
    return null;
  }
  
  // Process services items
  const services = [];
  if (servicesSection.services && Array.isArray(servicesSection.services)) {
    for (const service of servicesSection.services) {
      const icon = await parseAcfImage(service.icon, getMediaUrl);
      
      // Parse features if it's a string (comma-separated) or array
      let features = [];
      if (service.features) {
        if (typeof service.features === 'string') {
          features = service.features.split(',').map(f => f.trim());
        } else if (Array.isArray(service.features)) {
          features = service.features;
        }
      }
      
      services.push({
        id: service.id || services.length + 1,
        icon: service.icon_emoji || icon || '🔧',
        title: service.title || '',
        description: cleanWysiwygContent(service.description),
        features,
      });
    }
  }
  
  return {
    heading: cleanWysiwygContent(servicesSection.heading) || 'Our Services',
    subheading: cleanWysiwygContent(servicesSection.subheading) || 'Comprehensive Digital Solutions',
    services,
  };
}

/**
 * Get all home page sections data
 * Extracts all flexible content sections from home page
 * @param {Object} homePageData - Home page data with ACF fields
 * @returns {Promise<Object>} All sections data
 */
export async function getAllHomePageSections(homePageData) {
  if (!homePageData?.acf?.home_page_layout) {
    return {};
  }
  
  const sections = {};
  
  // Extract hero section
  const heroData = await getHeroSectionData(homePageData);
  if (heroData) {
    sections.hero = heroData;
  }
  
  // Extract services section
  const servicesData = await getServicesSectionData(homePageData);
  if (servicesData) {
    sections.services = servicesData;
  }
  
  return sections;
}
