/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'framer-motion', 
      'gsap', 
      '@gsap/react', 
      'langchain', 
      '@langchain/core', 
      '@langchain/community', 
      '@langchain/openai',
      'lucide-react',
    ],
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  async redirects() {
    return [
      {
        source: "/wordpress-maintenance",
        destination: "/service/wordpress-development",
        permanent: true,
      },
      {
        source: "/ecommerce-maintenance",
        destination: "/product/woocommerce-development",
        permanent: true,
      },
      {
        source: "/woocommerce-maintenance-services",
        destination: "/product/woocommerce-development",
        permanent: true,
      },
      {
        source: "/website-maintenance",
        destination: "/service/website-maintenance-amc",
        permanent: true,
      },
    ];
  },
  
  // Turbopack configuration at the root (Next.js 15+)
  turbopack: {
    resolveAlias: {
      '@langchain/core/documents': '@langchain/core/dist/documents/index.js',
      '@langchain/core/runnables': '@langchain/core/dist/runnables/index.js',
      '@langchain/core/prompts': '@langchain/core/dist/prompts/index.js',
      '@langchain/core/output_parsers': '@langchain/core/dist/output_parsers/index.js',
    },
  },
  
  // Transpile LangChain packages for better ESM/CJS compatibility
  transpilePackages: [
    'langchain',
    '@langchain/core',
    '@langchain/community',
    '@langchain/openai',
  ],

  // Backward compatibility for Webpack
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@langchain/core/documents': '@langchain/core/dist/documents/index.js',
      '@langchain/core/runnables': '@langchain/core/dist/runnables/index.js',
      '@langchain/core/prompts': '@langchain/core/dist/prompts/index.js',
      '@langchain/core/output_parsers': '@langchain/core/dist/output_parsers/index.js',
    };
    return config;
  },
};

export default nextConfig;
