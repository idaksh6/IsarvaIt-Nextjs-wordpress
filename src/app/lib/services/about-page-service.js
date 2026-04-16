/**
 * About Page Service (Example for future pages)
 * Handles data fetching and transformation for the about page
 */

import { fetchPageBySlug, getMediaUrl } from '../api/wordpress-api';
import { cleanWysiwygContent, parseAcfImage } from '../utils/content-helpers';

/**
 * Fetch and transform about page data
 * @returns {Promise<Object|null>} Transformed about page data
 */
export async function getAboutPageData() {
  const pageData = await fetchPageBySlug('about');
  
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
 * Example: Extract Team Section from About page ACF
 * @param {Object} aboutPageData - About page data with ACF fields
 * @returns {Promise<Object|null>} Team section data
 */
export async function getTeamSectionData(aboutPageData) {
  if (!aboutPageData?.acf?.about_page_layout) {
    return null;
  }
  
  const layouts = aboutPageData.acf.about_page_layout;
  
  // Find the team section layout
  const teamSection = layouts.find(
    (layout) => layout.acf_fc_layout === 'team_section'
  );
  
  if (!teamSection) {
    return null;
  }
  
  // Process team members (example)
  const teamMembers = [];
  
  if (teamSection.team_members && Array.isArray(teamSection.team_members)) {
    for (const member of teamSection.team_members) {
      const photo = await parseAcfImage(member.photo, getMediaUrl);
      
      teamMembers.push({
        name: member.name || '',
        position: member.position || '',
        bio: cleanWysiwygContent(member.bio),
        photo,
        socialLinks: member.social_links || [],
      });
    }
  }
  
  return {
    heading: cleanWysiwygContent(teamSection.section_heading),
    description: cleanWysiwygContent(teamSection.section_description),
    teamMembers,
  };
}

/**
 * Get all about page sections
 * @param {Object} aboutPageData - About page data
 * @returns {Promise<Object>} All sections data
 */
export async function getAllAboutPageSections(aboutPageData) {
  if (!aboutPageData?.acf) {
    return {};
  }
  
  const sections = {};
  
  // Extract team section
  const teamData = await getTeamSectionData(aboutPageData);
  if (teamData) {
    sections.team = teamData;
  }
  
  // Add more sections as needed
  
  return sections;
}
