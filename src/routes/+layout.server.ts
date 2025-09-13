import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url, setHeaders }) => {
  // Aggressive caching for static assets (only set if not already set)
  if (!url.pathname.startsWith('/api')) {
    setHeaders({
      'cache-control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800',
    });
  }

  // Preload critical data
  return {
    seoData: {
      currentUrl: url.href,
      timestamp: Date.now(),
      isIndexable: !url.pathname.includes('admin'),
      competitorData: {
        kbHomeVales: { startPrice: 326990, waitTime: '6-12 months' },
        kbHomeGlades: { startPrice: 406990, waitTime: '6-12 months' },
      },
    },
  };
};
