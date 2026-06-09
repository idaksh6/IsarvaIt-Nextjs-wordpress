/**
 * WordPress REST API Core Layer
 * Generic API functions for fetching data from WordPress
 */

// Remove trailing slash if present to avoid double slashes
const cleanUrl = (url) => url.endsWith('/') ? url.slice(0, -1) : url;
const WORDPRESS_API_URL = cleanUrl(process.env.NEXT_PUBLIC_WORDPRESS_URL || 'http://reactwordpress.local');
const WORDPRESS_BLOG_API_URL = cleanUrl(process.env.NEXT_PUBLIC_WORDPRESS_BLOG_URL || 'https://blog.isarvait.com');

// Check if WordPress is available
// Simply verify that a URL has been configured via the environment variable
const isWordPressAvailable = () => {
  return !!process.env.NEXT_PUBLIC_WORDPRESS_URL;
};
/**
 * Test WordPress API connectivity
 */
export async function testWordPressConnection() {
  if (!isWordPressAvailable()) {
    return { success: false, error: 'WordPress URL not configured' };
  }

  try {
    const response = await fetch(`${WORDPRESS_API_URL}/wp-json/wp/v2/`, {
      method: 'HEAD',
      cache: 'no-store'
    });

    if (response.status === 401) {
      return { 
        success: false, 
        error: 'WordPress REST API is restricted. Please enable public API access in WordPress settings.' 
      };
    }

    if (!response.ok) {
      return { 
        success: false, 
        error: `WordPress API returned ${response.status}: ${response.statusText}` 
      };
    }

    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      error: `Cannot reach WordPress API: ${error.message}` 
    };
  }
}
/**
 * Fetch WordPress page by slug
 * @param {string} slug - Page slug
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Object|null>} Page data
 */
export async function fetchPageBySlug(slug, options = {}) {
  // Return null if WordPress is not configured
  if (!isWordPressAvailable()) {
    return null;
  }

  try {
    const { revalidate = 60, fields = 'id,title,content,acf' } = options;
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/pages?slug=${slug}&_fields=${fields}`,
      {
        next: { revalidate },
      }
    );

    if (response.status === 401) {
      return null;
    }

    if (!response.ok) {
      return null;
    }

    const pages = await response.json();
    return pages.length > 0 ? pages[0] : null;
  } catch (error) {
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
    return null;
  }

  try {
    const { revalidate = 60, fields = 'id,title,content,acf' } = options;
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/pages/${id}?_fields=${fields}`,
      {
        next: { revalidate },
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
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
      }
    );

    if (response.status === 401) {
      return [];
    }

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
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
      }
    );
    
    if (!response.ok) {
      return null;
    }
    
    return await response.json();
  } catch (error) {
    return null;
  }
}

/**
 * Fetch multiple media items by their IDs in a single request
 * @param {Array<number>} mediaIds - Array of media IDs
 * @param {Object} options - Additional options
 * @returns {Promise<Array>} Array of media objects
 */
export async function fetchMediaByIds(mediaIds, options = {}) {
  if (!isWordPressAvailable() || !mediaIds || !mediaIds.length) {
    return [];
  }

  try {
    const { revalidate = 3600, fields = 'id,source_url,title,alt_text' } = options;
    const idsParam = mediaIds.join(',');
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/media?include=${idsParam}&per_page=100&_fields=${fields}`,
      {
        next: { revalidate },
      }
    );

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    return [];
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
  try {
    const {
      perPage = 10,
      orderby = 'date',
      order = 'desc',
      categories = '',
      revalidate = 60,
      embed = false,
      fields = 'id,title,slug,excerpt,date,featured_media',
    } = options;
    
    const categoryQuery = categories ? `&categories=${categories}` : '';
    const embedQuery = embed ? '&_embed=1' : '';
    
    // WordPress REST API requires _links in _fields to successfully embed resources
    let fieldsParam = fields;
    if (embed && fields && !fields.includes('_links')) {
      fieldsParam = `${fields},_links`;
    }
    const fieldsQuery = fieldsParam ? `&_fields=${fieldsParam}` : '';
    
    const response = await fetch(
      `${WORDPRESS_BLOG_API_URL}/wp-json/wp/v2/posts?per_page=${perPage}&orderby=${orderby}&order=${order}${categoryQuery}${fieldsQuery}${embedQuery}`,
      {
        next: { revalidate },
      }
    );

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
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
      }
    );

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    return [];
  }
}

/**
 * Get front page data
 * Automatically finds the WordPress front page
 * @returns {Promise<Object|null>} Front page data
 */
export async function getFrontPage() {
  if (!isWordPressAvailable()) {
    return null;
  }

  // Optimized: Try fetching by slug 'home' directly
  // Removed redundant connection test for faster initial load
  let page = await fetchPageBySlug('home');
  
  if (page) {
    return page;
  }
  
  // Fallback: get the first page by ID
  const pages = await fetchPages({ perPage: 1, orderby: 'id', order: 'asc' });
  return pages.length > 0 ? pages[0] : null;
}

/**
 * Fetch posts by IDs
 * @param {Array<number>} postIds - Array of post IDs
 * @param {string} postType - Post type (default: 'posts')
 * @param {Object} options - Additional options
 * @returns {Promise<Array>} Array of posts
 */
export async function fetchPostsByIds(postIds, postType = 'posts', options = {}) {
  if (!isWordPressAvailable() || !postIds || !postIds.length) {
    return [];
  }

  try {
    const { revalidate = 60, fields = 'id,title,content,acf' } = options;
    const idsParam = postIds.join(',');
    
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/${postType}?include=${idsParam}&_fields=${fields}`,
      {
        next: { revalidate },
      }
    );

    if (!response.ok) {
      return [];
    }

    return await response.json();
  } catch (error) {
    return [];
  }
}
