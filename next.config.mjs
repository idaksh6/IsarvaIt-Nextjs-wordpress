/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compiler optimizations
  compiler: {
    // Temporarily keep console logs for debugging
    removeConsole: false, // Changed from production check to allow debugging
  },
  
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
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
      '@langchain/openai'
    ],
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
