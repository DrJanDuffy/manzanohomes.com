import { sequence } from '@sveltejs/kit/hooks';

/** @type {import('@sveltejs/kit').Handle} */
async function fontPreloading({ event, resolve }) {
  const response = await resolve(event, {
    preload: ({ type, path }) => {
      // Preload critical fonts
      if (type === 'font') {
        // Only preload Inter font weights that are actually used
        const criticalFonts = [
          '/node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2',
          '/node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2',
          '/node_modules/@fontsource/inter/files/inter-latin-700-normal.woff2',
        ];

        return criticalFonts.some((font) => path?.includes(font));
      }

      // Preload other critical resources
      return type === 'js' || type === 'css';
    },
  });

  return response;
}

/** @type {import('@sveltejs/kit').Handle} */
async function performanceHeaders({ event, resolve }) {
  const response = await resolve(event);

  // Add performance-related headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Cache static assets
  if (event.url.pathname.startsWith('/_app/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Cache images
  if (event.url.pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  return response;
}

export const handle = sequence(fontPreloading, performanceHeaders);
