import { building } from '$app/environment';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const securityHeaders: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  // Critical SEO + Security headers your site is missing
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'geolocation=(self), microphone=()');

  // Force Google to index immediately
  if (!event.url.pathname.startsWith('/admin')) {
    response.headers.set(
      'X-Robots-Tag',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
  }

  return response;
};

const performanceOptimization: Handle = async ({ event, resolve }) => {
  // Implement 103 Early Hints for critical resources
  if (event.url.pathname === '/') {
    event.setHeaders({
      Link: [
        '</fonts/inter-var.woff2>; rel=preload; as=font; crossorigin',
        '</css/critical.css>; rel=preload; as=style',
        '<https://cdn.jsdelivr.net/npm/@sveltejs/kit>; rel=preconnect',
      ].join(', '),
    });
  }

  return resolve(event, {
    transformPageChunk: ({ html }) => {
      // Inject critical inline CSS for instant rendering
      const criticalCSS = `
        <style id="critical-css">
          :root{--primary:#1a1a1a;--secondary:#f97316;--manzano-gold:#d4af37}
          body{margin:0;font-family:system-ui,-apple-system,sans-serif}
          .hero{min-height:100vh;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%)}
          [data-loading]{opacity:0;animation:fadeIn 0.3s forwards}
          @keyframes fadeIn{to{opacity:1}}
        </style>
      `;

      return html.replace('</head>', `${criticalCSS}</head>`);
    },
  });
};

export const handle = sequence(securityHeaders, performanceOptimization);
