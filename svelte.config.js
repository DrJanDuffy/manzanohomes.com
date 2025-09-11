import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x',
      regions: ['iad1'],
      maxDuration: 10,
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
