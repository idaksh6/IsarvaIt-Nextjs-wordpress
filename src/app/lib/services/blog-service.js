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
    title: 'From world-class hosting to your growth partner: Isarva is now your all-in-one platform',
    slug: 'from-world-class-hosting-provider-to-growth-partner',
    excerpt: 'Today, we\'re excited to announce that Isarva has entered a new chapter of its journey: our transformation from a hosting provider to a comprehensive growth partner for your digital success...',
    content: `
      <p>Today, we're excited to announce that Isarva has entered a new chapter of its journey: our transformation from a hosting provider to a comprehensive growth partner for your digital success.</p>
      <p>For the past 20 years, Isarva has been synonymous with world-class web hosting. Our commitment to offer high-quality services, harness innovative technologies, and provide exceptional support to our customers has earned us the trust of millions of businesses worldwide.</p>
      <p>But what is more, these same values have driven us forward to innovate and push industry boundaries. For the past few years, we have worked on several new products that empower you to overcome the ever-evolving challenges of building your online presence and keep up with the fast-paced digital world. We've naturally gone much beyond what's expected from a web hosting provider to become your business ally in the digital space.</p>
      <h2>Isarva's expanded product suite</h2>
      <p>Our outstanding hosting service remains the high-performing foundation you've come to love and trust. But you can now experience the expanded suite of Isarva products designed to help you grow and succeed online.</p>
      <p>We are introducing new tools for SEO, performance optimization, and AI-driven content management. Our goal is to provide everything a growing business needs in one single, unified interface.</p>
    `,
    date: 'March 14, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    categoryId: 1,
    categoryName: 'Product Updates',
    categorySlug: 'product-updates',
    readTime: '4 min read',
    author: { name: 'Nikolay Todorov', role: 'Isarva CEO', avatar: 'https://i.pravatar.cc/150?u=nikolay' }
  },
  {
    id: 102,
    title: 'Isarva AI Agent for WordPress: Your AI assistant for management',
    slug: 'isarva-ai-agent-for-wordpress',
    excerpt: 'Manage your WordPress sites more efficiently with our new AI-powered agent. Automate routine tasks, optimize performance, and get intelligent recommendations...',
    content: `
      <p>Artificial intelligence is no longer just a word; it's a practical tool that can significantly enhance how we manage digital assets. Today, we are proud to introduce the Isarva AI Agent for WordPress.</p>
      <p>This innovative assistant is designed to handle the heavy lifting of site management, allowing you to focus on strategy and creativity.</p>
      <ul>
        <li><strong>Automatic performance tuning:</strong> The agent monitors your site Speed and applies optimizations in real-time.</li>
        <li><strong>Security vulnerability scanning:</strong> Proactive identification of outdated plugins and suspicious activity.</li>
        <li><strong>Content optimization suggestions:</strong> Get AI-powered advice on how to improve your SEO and readability.</li>
      </ul>
      <p>Available now for all our hosting customers, the AI Agent is the first step toward a truly autonomous web management experience.</p>
    `,
    date: 'March 12, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200',
    categoryId: 7,
    categoryName: 'AI & ML',
    categorySlug: 'ai-ml',
    readTime: '6 min read',
    author: { name: 'Maria Ivanova', role: 'Product Director', avatar: 'https://i.pravatar.cc/150?u=maria' }
  },
  {
    id: 103,
    title: '150+ Sites, zero hosting chaos: The Creator Success Story',
    slug: '150-sites-zero-hosting-chaos',
    excerpt: 'Discover how one agency managed to scale their client portfolio to over 150 websites without ever worrying about infrastructure stability...',
    content: `
      <p>Scaling an agency is hard work. When you manage ten sites, things are manageable. When you hit fifty, the cracks start to show. At 150 sites, if you don't have a perfect hosting partner, you have chaos.</p>
      <blockquote>"Switching to Isarva was the single best decision for our agency's growth." - Jane Doe, Founder of CreatorConnect</blockquote>
      <p>In this case study, we dive deep into the technical challenges faced by CreatorConnect and how Isarva's multi-site management dashboard saved them hundreds of hours every month.</p>
    `,
    date: 'March 10, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200',
    categoryId: 4,
    categoryName: 'Success Stories',
    categorySlug: 'success-stories',
    readTime: '3 min read',
    author: { name: 'Alex Johnson', role: 'Community Manager', avatar: 'https://i.pravatar.cc/150?u=alex' }
  },
  {
    id: 104,
    title: 'Introducing Coderick AI: Build Apps and Websites Without Code',
    slug: 'introducing-coderick-ai',
    excerpt: 'We are launching Coderick AI, a revolutionary platform that allows anyone to build complex web applications using natural language...',
    content: `
      <p>The gap between an idea and a working application is shrinking. Today, we are proud to announce Coderick AI.</p>
      <p>Coderick AI is not just another website builder. It's a full-stack application generator that understands your requirements and builds optimized code, database schemas, and intuitive UI components automatically.</p>
      <p>Key features include:</p>
      <ul>
        <li>Natural Language Interface</li>
        <li>Automatic Database Migration</li>
        <li>One-click Deployment to Isarva Cloud</li>
      </ul>
    `,
    date: 'March 8, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1664575185263-45ad122295eb?auto=format&fit=crop&q=80&w=1200',
    categoryId: 1,
    categoryName: 'Product Updates',
    categorySlug: 'product-updates',
    readTime: '5 min read',
    author: { name: 'Sam Smith', role: 'Lead Developer', avatar: 'https://i.pravatar.cc/150?u=sam' }
  },
  {
    id: 105,
    title: 'The Future of AI in Web Development: Beyond Copilot',
    slug: 'future-of-ai-web-development',
    excerpt: 'Artificial intelligence is fundamentally changing how we build, test, and deploy software. We explore emerging trends...',
    content: '<p>AI is more than just code completion. It\'s about automated testing, predictive scaling, and personalized user experiences.</p>',
    date: 'March 5, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
    categoryId: 7,
    categoryName: 'AI & ML',
    categorySlug: 'ai-ml',
    readTime: '5 min read',
    author: { name: 'Elena Petrova', role: 'AI Researcher', avatar: 'https://i.pravatar.cc/150?u=elena' }
  },
  {
    id: 106,
    title: 'Optimizing Your Site for Core Web Vitals in 2026',
    slug: 'optimizing-core-web-vitals',
    excerpt: 'Google\'s Core Web Vitals remain the most important metrics for SEO and user experience. Here is our comprehensive guide...',
    content: '<p>Speed matters. But luxury speed matters more. We break down LCP, INP, and CLS for the modern era.</p>',
    date: 'March 1, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200',
    categoryId: 2,
    categoryName: 'Hosting Insights',
    categorySlug: 'hosting-insights',
    readTime: '4 min read',
    author: { name: 'Mark Wilson', role: 'SEO Specialist', avatar: 'https://i.pravatar.cc/150?u=mark' }
  },
  {
    id: 107,
    title: 'How to Secure Your WordPress Site Against Modern Threats',
    slug: 'secure-wordpress-modern-threats',
    excerpt: 'Security is a moving target. As hackers get smarter, so must our defenses. Learn about the latest protocols...',
    content: '<p>From MFA to zero-trust architecture, keeping your site safe is our top priority.</p>',
    date: 'February 28, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200',
    categoryId: 6,
    categoryName: 'Cybersecurity',
    categorySlug: 'cybersecurity',
    readTime: '8 min read',
    author: { name: 'Isarva Team', role: 'Security Ops', avatar: 'https://i.pravatar.cc/150?u=security' }
  },
  {
    id: 108,
    title: 'Maximizing ROI with AI-Powered Marketing Automation',
    slug: 'maximizing-roi-ai-marketing-automation',
    excerpt: 'Discover how AI is transforming the marketing landscape by automating complex workflows and providing deep predictive insights...',
    content: '<p>Marketing is no longer just about reaching people; it\'s about reaching the right people with the right message at the right time.</p>',
    date: 'February 25, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200',
    categoryId: 1,
    categoryName: 'Product Updates',
    categorySlug: 'product-updates',
    readTime: '6 min read',
    author: { name: 'Lisa Chen', role: 'Marketing Head', avatar: 'https://i.pravatar.cc/150?u=lisa' }
  },
  {
    id: 109,
    title: 'The Impact of Quantum Computing on Web Security',
    slug: 'quantum-computing-web-security',
    excerpt: 'Is your encryption safe? We look at the looming threat of quantum decryption and how to start preparing...',
    content: '<p>Post-quantum cryptography is no longer science fiction. It\'s a necessity for any modern business infrastructure.</p>',
    date: 'February 20, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    categoryId: 6,
    categoryName: 'Cybersecurity',
    categorySlug: 'cybersecurity',
    readTime: '9 min read',
    author: { name: 'Kevin Park', role: 'CTO', avatar: 'https://i.pravatar.cc/150?u=kevin' }
  },
  {
    id: 110,
    title: 'Top UX Design Trends to Watch in 2026',
    slug: 'top-ux-design-trends-2026',
    excerpt: 'From spatial interfaces to emotional design, we explore the emerging trends that are redefining user interaction...',
    content: '<p>User experience is constantly evolving. In 2026, we see a shift towards more immersive and personalized interactions.</p>',
    date: 'February 15, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200',
    categoryId: 8,
    categoryName: 'Design',
    categorySlug: 'design',
    readTime: '4 min read',
    author: { name: 'Sarah Miller', role: 'UX Lead', avatar: 'https://i.pravatar.cc/150?u=sarah' }
  },
  {
    id: 111,
    title: 'Moving Beyond REST: An Introduction to GraphQL for WordPress',
    slug: 'graphql-for-wordpress-introduction',
    excerpt: 'Fed up with over-fetching data? GraphQL offers a more efficient alternative to traditional REST APIs...',
    content: '<p>GraphQL allows clients to request exactly the data they need and nothing more. This leads to faster apps and cleaner code.</p>',
    date: 'February 10, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    categoryId: 5,
    categoryName: 'Development',
    categorySlug: 'development',
    readTime: '7 min read',
    author: { name: 'David Lee', role: 'Full Stack Dev', avatar: 'https://i.pravatar.cc/150?u=david' }
  },
  {
    id: 112,
    title: 'The Importance of Accessibility in Modern Web Applications',
    slug: 'importance-accessibility-web-apps',
    excerpt: 'Inclusive design is not just a trend; it\'s a necessity. Learn why accessibility should be at the core...',
    content: '<p>The web is for everyone. When we build with accessibility in mind, we create better experiences for all users.</p>',
    date: 'February 5, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200',
    categoryId: 3,
    categoryName: 'Community',
    categorySlug: 'community',
    readTime: '5 min read',
    author: { name: 'Julia White', role: 'Community Architect', avatar: 'https://i.pravatar.cc/150?u=julia' }
  },
  {
    id: 113,
    title: 'Building High-Performance Teams in a Distributed World',
    slug: 'high-performance-distributed-teams',
    excerpt: 'Company culture doesn\'t stop at the office door. Discover the strategies for maintaining engagement...',
    content: '<p>Remote work is here to stay. Successful companies are those that adapt their leadership and communication styles.</p>',
    date: 'February 1, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
    categoryId: 3,
    categoryName: 'Community',
    categorySlug: 'community',
    readTime: '5 min read',
    author: { name: 'Mark Wilson', role: 'HR Director', avatar: 'https://i.pravatar.cc/150?u=mark' }
  },
  {
    id: 114,
    title: 'The Journey to 100% Core Web Vital Scores',
    slug: 'journey-to-100-percent-core-web-vitals',
    excerpt: 'Perfecting your site\'s performance metrics is a marathon, not a sprint. We share technical deep-dives...',
    content: '<p>Every millisecond counts. We look at image optimization, font loading, and script execution in detail.</p>',
    date: 'January 28, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
    categoryId: 2,
    categoryName: 'Hosting Insights',
    categorySlug: 'hosting-insights',
    readTime: '8 min read',
    author: { name: 'Isarva Team', role: 'DevOps Ops', avatar: 'https://i.pravatar.cc/150?u=ops' }
  },
  {
    id: 115,
    title: 'Scaling Your Start-up: From Zero to One Million Users',
    slug: 'scaling-startup-one-million-users',
    excerpt: 'Handling rapid growth is a good problem to have, but it can be devastating if you\'re not prepared...',
    content: '<p>Architecture is the foundation of scale. If you build it right from the start, you can grow without limits.</p>',
    date: 'January 20, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200',
    categoryId: 4,
    categoryName: 'Success Stories',
    categorySlug: 'success-stories',
    readTime: '12 min read',
    author: { name: 'Elon Musk', role: 'Futurist at heart', avatar: 'https://i.pravatar.cc/150?u=elon' }
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
