import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const sitemapUrl = 'https://www.manzanohomes.com/sitemap.xml';

  try {
    // Ping Google Search Console
    const googlePing = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    );

    // Ping Bing Webmaster Tools
    const bingPing = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    );

    // Ping Yandex
    const yandexPing = await fetch(
      `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    );

    const results = {
      timestamp: new Date().toISOString(),
      sitemap: sitemapUrl,
      pings: {
        google: {
          status: googlePing.status,
          success: googlePing.ok,
        },
        bing: {
          status: bingPing.status,
          success: bingPing.ok,
        },
        yandex: {
          status: yandexPing.status,
          success: yandexPing.ok,
        },
      },
    };

    return new Response(JSON.stringify(results, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: 'Failed to ping search engines',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
