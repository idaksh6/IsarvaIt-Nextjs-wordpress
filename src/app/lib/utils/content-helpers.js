/**
 * Content Cleanup Utilities
 * Helper functions for cleaning and transforming WordPress content
 */

/**
 * Strip all HTML tags from a string
 * @param {string} html - HTML string
 * @returns {string} Plain text
 */
export function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Clean WYSIWYG content - remove wrapping <p> tags but preserve inner HTML
 * Also converts newline characters to <br> tags
 * @param {string} content - WYSIWYG content
 * @returns {string} Cleaned content
 */
export function cleanWysiwygContent(content) {
  if (!content) return '';
  
  return content
    .replace(/^<p>(.*)<\/p>$/s, '$1') // Remove wrapping <p> tags
    .replace(/\r\n/g, '<br>') // Convert Windows line breaks
    .replace(/\n/g, '<br>') // Convert Unix line breaks
    .trim();
}

/**
 * Extract plain text from WYSIWYG content
 * @param {string} content - WYSIWYG content
 * @returns {string} Plain text
 */
export function extractPlainText(content) {
  if (!content) return '';
  
  return content
    .replace(/<br\s*\/?>/gi, '\n') // Convert <br> to newlines
    .replace(/<\/p>/gi, '\n\n') // Convert closing </p> to double newlines
    .replace(/<[^>]*>/g, '') // Remove all HTML tags
    .replace(/\n{3,}/g, '\n\n') // Reduce multiple newlines to max 2
    .trim();
}

/**
 * Parse ACF link field (handles both object and string formats)
 * @param {Object|string} linkField - ACF link field
 * @returns {Object} Link object with url, title, target
 */
export function parseAcfLink(linkField) {
  const defaultLink = {
    url: '#',
    title: '',
    target: '',
  };
  
  if (!linkField) return defaultLink;
  
  // If it's already an object with url property
  if (typeof linkField === 'object' && linkField.url) {
    return {
      url: linkField.url || '#',
      title: linkField.title || '',
      target: linkField.target || '',
    };
  }
  
  // If it's a string (direct URL)
  if (typeof linkField === 'string') {
    return {
      url: linkField,
      title: '',
      target: '',
    };
  }
  
  return defaultLink;
}

/**
 * Parse ACF image field (handles URL, object, or ID formats)
 * Returns URL string or empty string
 * @param {string|number|Object} imageField - ACF image field
 * @param {Function} getMediaUrlFn - Function to fetch media URL by ID (async)
 * @returns {Promise<string>} Image URL
 */
export async function parseAcfImage(imageField, getMediaUrlFn) {
  if (!imageField) return '';
  
  // If it's already a URL string
  if (typeof imageField === 'string' && imageField.startsWith('http')) {
    return imageField;
  }
  
  // If it's an object with url property
  if (typeof imageField === 'object' && imageField.url) {
    return imageField.url;
  }
  
  // If it's an ID (number or numeric string)
  if (typeof imageField === 'number' || !isNaN(imageField)) {
    return await getMediaUrlFn(imageField);
  }
  
  return '';
}

/**
 * Truncate text to specified length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} Truncated text
 */
export function truncateText(text, length = 100, suffix = '...') {
  if (!text || text.length <= length) return text;
  return text.substring(0, length).trim() + suffix;
}

/**
 * Format WordPress date string to readable format
 * @param {string} dateString - WordPress date string
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date
 */
export function formatDate(dateString, options = {}) {
  if (!dateString) return '';
  
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', defaultOptions);
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
}

/**
 * Sanitize slug (remove special characters, convert to lowercase)
 * @param {string} text - Text to slugify
 * @returns {string} Slug
 */
export function slugify(text) {
  if (!text) return '';
  
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start
    .replace(/-+$/, ''); // Trim - from end
}

/**
 * Extract excerpt from content
 * @param {string} content - Full content (can be HTML)
 * @param {number} length - Maximum length
 * @returns {string} Excerpt
 */
export function createExcerpt(content, length = 150) {
  const plainText = extractPlainText(content);
  return truncateText(plainText, length);
}
