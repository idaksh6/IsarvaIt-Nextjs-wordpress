/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'gsap', '@gsap/react'],
  },
};

export default nextConfig;
