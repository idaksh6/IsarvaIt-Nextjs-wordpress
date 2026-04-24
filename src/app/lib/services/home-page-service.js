/**
 * Home Page Service
 * Handles data fetching and transformation for the home page
 */

import { getFrontPage, getMediaUrl, fetchMediaById, fetchMediaByIds, fetchPostsByIds } from '../api/wordpress-api';
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
  
  // Process floating cards from repeater field
  const floatingCards = [];
  if (heroSection.cards_section && Array.isArray(heroSection.cards_section)) {
    for (const card of heroSection.cards_section) {
      floatingCards.push({
        heading: card.card_heading || '',
        description: cleanWysiwygContent(card.card_description) || '',
      });
    }
  }
  
  return {
    stripTag: heroSection.hero_heading_strip_tag || '',
    heading: cleanWysiwygContent(heroSection.hero_heading),
    description: cleanWysiwygContent(heroSection.hero_description),
    backgroundImage,
    hasButton: heroSection.have_button || false,
    buttonText: heroSection.button_text || 'Get Started',
    buttonLink: buttonLink.url,
    buttonTarget: buttonLink.target,
    floatingCards,
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
  
  // Find the services layout (more flexible search to avoid missing it)
  const servicesSection = layouts.find(
    (layout) => 
      layout.acf_fc_layout === 'services_lists' ||
      layout.acf_fc_layout === 'services_section' ||
      layout.acf_fc_layout === 'services' ||
      layout.acf_fc_layout === 'our_services' ||
      layout.acf_fc_layout === 'service_section' ||
      layout.acf_fc_layout.toLowerCase().includes('service')
  );
  
  if (!servicesSection) {
    console.warn('Services layout not found. Available layouts:', layouts.map(l => l.acf_fc_layout));
    return null;
  }

  console.log('Found services layout:', servicesSection.acf_fc_layout);
  
  // Parse button link
  const buttonLink = parseAcfLink(servicesSection.button_link);
  
  // Fetch services posts from relationship field
  const services = [];
  if (servicesSection.choose_services_to_display_on_page && Array.isArray(servicesSection.choose_services_to_display_on_page)) {
    const serviceIds = servicesSection.choose_services_to_display_on_page;
    const servicePosts = await fetchPostsByIds(serviceIds, 'services', {
      fields: 'id,title,content,acf,featured_media'
    });
    
    // Batch fetch all featured media for all services at once to save time
    const mediaIds = servicePosts
      .map(post => post.featured_media)
      .filter(id => id && typeof id === 'number');
    
    const allMedia = mediaIds.length > 0 
      ? await fetchMediaByIds(mediaIds) 
      : [];

    // Preserve the order from the relationship field
    for (const serviceId of serviceIds) {
      const servicePost = servicePosts.find(post => post.id === serviceId);
      if (servicePost) {
        // Find the media URL from the batches
        let featuredImageUrl = '';
        if (servicePost.featured_media) {
          const mediaItem = allMedia.find(m => m.id === servicePost.featured_media);
          featuredImageUrl = mediaItem?.source_url || '';
        }

        services.push({
          id: servicePost.id,
          title: servicePost.title?.rendered || '',
          description: cleanWysiwygContent(servicePost.content?.rendered) || '',
          technology_used: servicePost.acf?.technology_used || [],
          featuredImage: featuredImageUrl,
        });
      }
    }
  }
  
  return {
    stripData: servicesSection.section_strip_data || '',
    heading: cleanWysiwygContent(servicesSection.services_section_heading) || 'Our Services',
    description: cleanWysiwygContent(servicesSection.services_section_description) || '',
    buttonText: servicesSection.button_text || 'View All Services',
    buttonLink: buttonLink.url || '',
    buttonTarget: buttonLink.target || '',
    services,
  };
}

/**
 * Extract Tech Stack Section data from home page ACF fields
 * @param {Object} homePageData - Home page data with ACF fields
 * @returns {Promise<Object|null>} Tech stack section data
 */
export async function getTechStackSectionData(homePageData) {
  if (!homePageData?.acf?.home_page_layout) {
    return null;
  }
  
  const layouts = homePageData.acf.home_page_layout;
  
  // Find the tech stack section layout
  const techStackSection = layouts.find(
    (layout) => layout.acf_fc_layout === 'our_tech_stack'
  );
  
  if (!techStackSection) {
    return null;
  }
  
  // Process tech stack images from gallery field
  let techStackImages = [];
  if (techStackSection.tech_stack_images && Array.isArray(techStackSection.tech_stack_images)) {
    const imageIds = techStackSection.tech_stack_images;
    
    // Fetch ALL media items in a single request instead of a loop
    const mediaItems = await fetchMediaByIds(imageIds);
    
    // Map them back to the expected format
    techStackImages = mediaItems.map(imageData => ({
      url: imageData.source_url,
      alt: imageData.alt_text || '',
      title: imageData.title?.rendered || ''
    }));
  }
  
  return {
    images: techStackImages,
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
  
  // Parallel fetch all sections for maximum performance
  const [heroData, servicesData, techStackData] = await Promise.all([
    getHeroSectionData(homePageData),
    getServicesSectionData(homePageData),
    getTechStackSectionData(homePageData)
  ]);

  const sections = {};
  if (heroData) sections.hero = heroData;
  if (servicesData) sections.services = servicesData;
  if (techStackData) sections.techStack = techStackData;
  
  return sections;
}
