import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      // Optimize for Vercel Edge Runtime
      runtime: 'nodejs20.x',
      // Enable ISR (Incremental Static Regeneration) for dynamic content
      isr: {
        // Enable ISR for API routes that don't need real-time updates
        enable: true,
        // Cache duration for ISR pages (in seconds)
        expiration: 3600, // 1 hour
      },
      // Optimize function configuration
      functions: {
        // API routes configuration
        'src/routes/api/**': {
          maxDuration: 30,
          memory: 1024,
        },
      },
      // Enable edge functions for better performance
      edge: false, // Set to true for edge runtime if needed
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
    // Enable source maps for debugging in production
    sourcemap: true,
  },
};

export default config;
