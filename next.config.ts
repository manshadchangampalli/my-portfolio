import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize production builds
  productionBrowserSourceMaps: false,

  // Enable webpack optimizations for better code splitting
  webpack: (config, { isServer }) => {
    // Optimize Three.js and related packages
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        // Split chunks for better caching and parallel loading
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            // Vendor split - separate node_modules
            default: false,
            vendors: false,

            // Three.js and 3D libraries - loaded only when needed
            three: {
              name: "three",
              test: /[\\/]node_modules[\\/](three|@react-three|@pmndrs)[\\/]/,
              priority: 40,
              reuseExistingChunk: true,
            },

            // Animation libraries (GSAP, Lenis)
            animations: {
              name: "animations",
              test: /[\\/]node_modules[\\/](gsap|lenis|maath)[\\/]/,
              priority: 35,
              reuseExistingChunk: true,
            },

            // Post-processing effects
            postprocessing: {
              name: "postprocessing",
              test: /[\\/]node_modules[\\/](postprocessing)[\\/]/,
              priority: 30,
              reuseExistingChunk: true,
            },

            // UI libraries
            ui: {
              name: "ui-libs",
              test: /[\\/]node_modules[\\/](lucide-react|clsx|tailwind-merge|react-ios-liquid-glass)[\\/]/,
              priority: 25,
              reuseExistingChunk: true,
            },

            // React and core libs - always needed
            framework: {
              name: "framework",
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 50,
              reuseExistingChunk: true,
            },

            // Common vendor code
            vendor: {
              name: "vendor",
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              minChunks: 2,
              reuseExistingChunk: true,
            },

            // Common app code
            common: {
              name: "common",
              minChunks: 2,
              priority: 5,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }

    return config;
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "@react-three/fiber", "@react-three/drei", "three"],
  },
};

export default nextConfig;
