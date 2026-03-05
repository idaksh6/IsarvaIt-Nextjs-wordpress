/**
 * WordPress REST API Core Layer
 * Generic API functions for fetching data from WordPress
 */

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'http://reactwordpress.local';

// Check if WordPress is available
// Simply verify that a URL has been configured via the environment variable
const isWordPressAvailable = () => {
  return !!process.env.NEXT_PUBLIC_WORDPRESS_URL;
};

/**
 * Fetch WordPress page by slug
 * @param {string} slug - Page slug
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Object|null>} Page data
 */
export async function fetchPageBySlug(slug, options = {}) {
  // Return null if WordPress is not configured
  if (!isWordPressAvailable()) {
    console.warn('WordPress is not configured. Using fallback data.');
    return null;
  }

  try {
    const { revalidate = 60, fields = 'id,title,content,acf' } = options;
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/pages?slug=${slug}&_fields=${fields}`,
      {
        next: { revalidate },
        cache: 'no-store', // Don't cache failed requests
      }
    );

    if (!response.ok) {
      console.warn(`Failed to fetch page "${slug}": ${response.statusText}`);
      return null;
    }

    const pages = await response.json();
    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
    console.warn(`WordPress API unavailable for slug "${slug}". Using fallback data.`);
    return null;
  }
}

/**
 * Fetch WordPress page by ID
 * @param {number} id - Page ID
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Object|null>} Page data
 */
export async function fetchPageById(id, options = {}) {
  // Return null if WordPress is not configured
  if (!isWordPressAvailable()) {
    console.warn('WordPress is not configured. Using fallback data.');
    return null;
  }

  try {
    const { revalidate = 60, fields = 'id,title,content,acf' } = options;
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/pages/${id}?_fields=${fields}`,
      {
        next: { revalidate },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      console.warn(`Failed to fetch page with ID ${id}: ${response.statusText}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.warn(`WordPress API unavailable for page ID ${id}. Using fallback data.`);
    return null;
  }
}

/**
 * Fetch all pages with optional filters
 * @param {Object} options - Query options
 * @returns {Promise<Array>} Array of pages
 */
export async function fetchPages(options = {}) {
  if (!isWordPressAvailable()) {
    console.warn('WordPress is not configured. Using fallback data.');
    return [];
  }

  try {
    const {
      perPage = 10,
      orderby = 'date',
      order = 'desc',
      revalidate = 60,
      fields = 'id,title,slug,excerpt',
    } = options;
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/pages?per_page=${perPage}&orderby=${orderby}&order=${order}&_fields=${fields}`,
      {
        next: { revalidate },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      console.warn(`Failed to fetch pages: ${response.statusText}`);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.warn('WordPress API unavailable. Using fallback data.');
    return [];
  }
}

/**
 * Fetch media/attachment by ID
 * @param {number} mediaId - Media ID
 * @param {Object} options - Additional options
 * @returns {Promise<Object|null>} Media data
 */
export async function fetchMediaById(mediaId, options = {}) {
  if (!isWordPressAvailable()) {
    return null;
  }

  try {
    const { revalidate = 3600 } = options;
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/media/${mediaId}?_fields=id,source_url,title,alt_text,media_details`,
      {
        next: { revalidate },
        cache: 'no-store',
      }
    );
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    console.warn(`WordPress API unavailable for media ID ${mediaId}.`);
    return null;
  }
}

/**
 * Get media URL by ID
 * @param {number} mediaId - Media ID
 * @returns {Promise<string>} Media source URL
 */
export async function getMediaUrl(mediaId) {
  const media = await fetchMediaById(mediaId);
  return media?.source_url || '';
}

/**
 * Fetch posts with optional filters
 * @param {Object} options - Query options
 * @returns {Promise<Array>} Array of posts
 */
export async function fetchPosts(options = {}) {
  if (!isWordPressAvailable()) {
    console.warn('WordPress is not configured. Using fallback data.');
    return [];
  }

  try {
    const {
      perPage = 10,
      orderby = 'date',
      order = 'desc',
      categories = '',
      revalidate = 60,
      fields = 'id,title,slug,excerpt,date,featured_media',
    } = options;
    
    const categoryQuery = categories ? `&categories=${categories}` : '';
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?per_page=${perPage}&orderby=${orderby}&order=${order}${categoryQuery}&_fields=${fields}`,
      {
        next: { revalidate },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      console.warn(`Failed to fetch posts: ${response.statusText}`);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.warn('WordPress API unavailable. Using fallback data.');
    return [];
  }
}

/**
 * Fetch custom post type
 * @param {string} postType - Custom post type slug
 * @param {Object} options - Query options
 * @returns {Promise<Array>} Array of posts
 */
export async function fetchCustomPostType(postType, options = {}) {
  if (!isWordPressAvailable()) {
    console.warn('WordPress is not configured. Using fallback data.');
    return [];
  }

  try {
    const {
      perPage = 10,
      orderby = 'date',
      order = 'desc',
      revalidate = 60,
      fields = 'id,title,slug,acf',
    } = options;
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/${postType}?per_page=${perPage}&orderby=${orderby}&order=${order}&_fields=${fields}`,
      {
        next: { revalidate },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      console.warn(`Failed to fetch ${postType}: ${response.statusText}`);
      return [];
    }

    return await response.json();
  } catch (error) {
    console.warn(`WordPress API unavailable for ${postType}. Using fallback data.`);
    return [];
  }
}

/**
 * Get front page data
 * Automatically finds the WordPress front page
 * @returns {Promise<Object|null>} Front page data
 */
export async function getFrontPage() {
  // Try fetching by slug 'home' first (most common)
  let page = await fetchPageBySlug('home');
  
  if (page) {
    return page;
  }
  
  // Fallback: get the first page by ID
  const pages = await fetchPages({ perPage: 1, orderby: 'id', order: 'asc' });
  return pages.length > 0 ? pages[0] : null;
}
