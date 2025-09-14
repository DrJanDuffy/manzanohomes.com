import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // Use Node.js runtime for better compatibility
      runtime: 'nodejs20.x',
      // Fix Windows symlink issues
      split: false,
      // Use edge runtime for better performance
      regions: ['iad1'],
    }),
    // Enable service worker for PWA features
    serviceWorker: {
      register: false,
    },
    // Configure paths
    paths: {
      base: '',
      assets: '',
    },
    // Enable prerendering for better SEO and performance
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn',
      // Prerender these routes for better performance
      entries: [
        '*',
        '/',
        '/about',
        '/contact',
        '/disclaimer',
        '/privacy-policy',
        '/terms-of-service',
      ],
    },
    // Optimize build output
    outDir: 'build',
  },
};

export default config;
