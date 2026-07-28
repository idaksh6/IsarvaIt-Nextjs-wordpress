/**
 * Blog Service (Static)
 * Handles static blog data and mock functionality
 */

const categories = [
  { id: 'all', name: 'All Articles', slug: 'all' },
  { id: 1, name: 'Product Updates', slug: 'product-updates' },
  { id: 2, name: 'Hosting Insights', slug: 'hosting-insights' },
  { id: 3, name: 'Community', slug: 'community' },
  { id: 4, name: 'Success Stories', slug: 'success-stories' },
  { id: 5, name: 'Development', slug: 'development' },
  { id: 6, name: 'Cybersecurity', slug: 'cybersecurity' },
  { id: 7, name: 'AI & ML', slug: 'ai-ml' },
  { id: 8, name: 'Design', slug: 'design' },
];

const posts = [
  {
    id: 101,
    title: 'The Bento Grid Trend: Why the World\'s Top Brands are Using It',
    slug: 'the-bento-grid-trend-why-the-worlds-top-brands-are',
    link: 'https://blog.isarvait.com/the-bento-grid-trend-why-the-worlds-top-brands-are/',
    excerpt: 'Discover the modular design layout inspired by the Japanese bento box. Learn why top brands like Apple, Google, and Notion utilize it to present complex information elegantly.',
    content: '<p>Discover the modular design layout inspired by the Japanese bento box. Learn why top brands like Apple, Google, and Notion utilize it to present complex information elegantly.</p>',
    date: 'July 28, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200',
    categoryId: 2,
    categoryName: 'Hosting Insights',
    categorySlug: 'hosting-insights',
    readTime: '2 min read',
    author: { name: 'Isarva Team', role: 'Editorial', avatar: 'https://i.pravatar.cc/150?u=isarva' }
  },
  {
    id: 102,
    title: 'Cloud Computing: Benefits and Best Practices',
    slug: 'cloud-computing-benefits-and-best-practices',
    link: 'https://blog.isarvait.com/cloud-computing-benefits-and-best-practices/',
    excerpt: 'Explore the key advantages of transitioning to cloud infrastructure, including scalability and cost-efficiency, and discover the industry best practices for a smooth migration.',
    content: '<p>Explore the key advantages of transitioning to cloud infrastructure, including scalability and cost-efficiency, and discover the industry best practices for a smooth migration.</p>',
    date: 'August 30, 2024',
    featuredImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    categoryId: 2,
    categoryName: 'Hosting Insights',
    categorySlug: 'hosting-insights',
    readTime: '2 min read',
    author: { name: 'Isarva Team', role: 'Cloud Ops', avatar: 'https://i.pravatar.cc/150?u=cloud' }
  },
  {
    id: 103,
    title: 'How Blockchain is Revolutionizing Finance',
    slug: 'how-blockchain-is-revolutionizing-finance',
    link: 'https://blog.isarvait.com/how-blockchain-is-revolutionizing-finance/',
    excerpt: 'Learn how decentralized, immutable ledgers are transforming traditional financial services by lowering transaction costs and improving auditability.',
    content: '<p>Learn how decentralized, immutable ledgers are transforming traditional financial services by lowering transaction costs and improving auditability.</p>',
    date: 'August 30, 2024',
    featuredImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200',
    categoryId: 5,
    categoryName: 'Development',
    categorySlug: 'development',
    readTime: '2 min read',
    author: { name: 'Isarva Team', role: 'Security Engineer', avatar: 'https://i.pravatar.cc/150?u=blockchain' }
  }
];

export async function getBlogPosts(options = {}) {
  let filteredPosts = [...posts];
  
  if (options.categoryId && options.categoryId !== 'all') {
    filteredPosts = filteredPosts.filter(p => p.categoryId === parseInt(options.categoryId));
  }
  
  if (options.slug) {
    filteredPosts = filteredPosts.filter(p => p.slug === options.slug);
  }

  // Sorting by date (simplistic implementation)
  const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (options.perPage) {
    return sortedPosts.slice(0, options.perPage);
  }
  
  return sortedPosts;
}

export async function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug) || null;
}

export async function getBlogCategories() {
  return categories.filter(c => c.id !== 'all');
}

export async function getRelatedPosts(categoryId, excludeId, limit = 3) {
  return posts
    .filter(p => p.categoryId === categoryId && p.id !== excludeId)
    .slice(0, limit);
}
