import type { RequestHandler } from './$types';

const DOMAIN = 'https://www.manzanohomes.com';

export const GET: RequestHandler = async () => {
  // For sites with multiple sitemaps
  const sitemaps = [
    { loc: `${DOMAIN}/sitemap.xml`, lastmod: new Date().toISOString() },
    { loc: `${DOMAIN}/sitemap-properties.xml`, lastmod: new Date().toISOString() },
    { loc: `${DOMAIN}/sitemap-images.xml`, lastmod: new Date().toISOString() },
  ];
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `
  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('')}
</sitemapindex>`;
  
  return new Response(xml, {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
