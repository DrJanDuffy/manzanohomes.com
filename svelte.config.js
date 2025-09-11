import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x',
      regions: ['iad1'], // Washington DC region
      maxDuration: 10,
      // Enable edge functions for better performance
      edge: false,
      // Configure build output
      build: {
        minify: true,
        sourcemap: false,
      },
      // Environment variables
      env: {
        dir: './',
      },
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
    // Enable prerendering for better SEO
    prerender: {
      handleHttpError: 'warn',
    },
  },
};

export default config;
