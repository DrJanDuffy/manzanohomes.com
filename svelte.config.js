import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
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
      handleMissingId: 'warn',
    },
  },
};

export default config;
