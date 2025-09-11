import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { visualizer } from 'rollup-plugin-visualizer';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    enhancedImages(), // must come before the SvelteKit plugin
    sveltekit(),
    // Bundle analyzer - only in analyze mode
    process.env.NODE_ENV === 'analyze' &&
      visualizer({
        filename: 'dist/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  define: {
    'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID),
  },
  build: {
    // Enable source maps for better debugging
    sourcemap: true,
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ['svelte'],
          // Real estate specific libraries
          realestate: ['geolib', 'date-fns', 'sharp'],
        },
      },
    },
  },
};

export default config;
