/**
 * Home Page Service
 * Handles data fetching and transformation for the home page
 */

import { getFrontPage, getMediaUrl, fetchMediaById, fetchPostsByIds } from '../api/wordpress-api';
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
  
  // Find the services lists layout (try multiple possible names)
  const servicesSection = layouts.find(
    (layout) => layout.acf_fc_layout === 'services_lists' ||
                layout.acf_fc_layout === 'services_section' ||
                layout.acf_fc_layout === 'services'
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
    
    // Preserve the order from the relationship field
    for (const serviceId of serviceIds) {
      const servicePost = servicePosts.find(post => post.id === serviceId);
      if (servicePost) {
        // Fetch featured image URL if featured_media exists
        let featuredImageUrl = '';
        if (servicePost.featured_media) {
          featuredImageUrl = await getMediaUrl(servicePost.featured_media);
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
    buttonLink: buttonLink.url,
    buttonTarget: buttonLink.target,
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
  const techStackImages = [];
  if (techStackSection.tech_stack_images && Array.isArray(techStackSection.tech_stack_images)) {
    for (const imageId of techStackSection.tech_stack_images) {
      // Fetch complete image data from WordPress media endpoint
      const imageData = await fetchMediaById(imageId);
      
      if (imageData) {
        techStackImages.push({
          url: imageData.source_url,
          alt: imageData.alt_text || '',
          title: imageData.title?.rendered || ''
        });
      }
    }
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
  
  // Extract tech stack section
  const techStackData = await getTechStackSectionData(homePageData);
  if (techStackData) {
    sections.techStack = techStackData;
  }
  
  return sections;
}
