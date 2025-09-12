import { sveltekit } from '@sveltejs/kit/vite';
import { visualizer } from 'rollup-plugin-visualizer';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
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
    'import.meta.env.VERCEL': JSON.stringify(process.env.VERCEL || 'false'),
  },
  build: {
    // Enable source maps for better debugging in production
    sourcemap: process.env.NODE_ENV === 'production' ? 'hidden' : true,
    // Optimize build performance
    target: 'es2022',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: process.env.NODE_ENV === 'production',
      },
    },
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('svelte')) {
              return 'svelte';
            }
            if (id.includes('@sveltejs')) {
              return 'sveltekit';
            }
            if (id.includes('tailwindcss') || id.includes('autoprefixer')) {
              return 'css-utils';
            }
            return 'vendor';
          }
        },
        // Optimize asset naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const _ext = info[info.length - 1];
          if (/\.(css)$/.test(assetInfo.name)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    // Optimize CSS
    cssCodeSplit: true,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  // Optimize development server
  server: {
    fs: {
      allow: ['..'],
    },
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['svelte', '@sveltejs/kit'],
    exclude: ['@sveltejs/adapter-vercel'],
  },
  // Performance optimizations
  esbuild: {
    target: 'es2022',
  },
};

export default config;
