export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/report/'],
    },
    sitemap: 'https://www.isarvait.com/sitemap.xml',
  };
}
