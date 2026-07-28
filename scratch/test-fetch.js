const WORDPRESS_BLOG_API_URL = 'https://blog.isarvait.com';

async function testFetch() {
  const url = `${WORDPRESS_BLOG_API_URL}/wp-json/wp/v2/posts?per_page=4`;
  console.log('Fetching:', url);
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout
    
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    console.log('Status:', response.status);
    console.log('OK:', response.ok);
    if (response.ok) {
      const data = await response.json();
      console.log('Successfully fetched posts:', data.length);
      console.log('Post titles:', data.map(p => p.title?.rendered));
    } else {
      console.log('Error content:', await response.text());
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

testFetch();
