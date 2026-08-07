export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/report/', '/thank-you'],
    },
    sitemap: 'https://www.isarvait.com/sitemap.xml',
  };
}
