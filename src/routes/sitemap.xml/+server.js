/**
 * Dynamic sitemap.xml endpoint for real estate website
 * Generates sitemap with all pages and property listings
 */

export async function GET() {
  const baseUrl = 'https://manzanohomes.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // Static pages
  const staticPages = [
    {
      url: '',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: currentDate,
    },
    {
      url: '/neighborhood',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate,
    },
    {
      url: '/homes-for-sale',
      changefreq: 'daily',
      priority: '0.9',
      lastmod: currentDate,
    },
    {
      url: '/home-valuation',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate,
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: currentDate,
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: '0.5',
      lastmod: currentDate,
    },
  ];

  // Sample property pages (in a real app, these would come from a database)
  const propertyPages = [
    {
      url: '/property/3693-manzano-peak-ave',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate,
    },
    {
      url: '/property/3685-manzano-peak-ave',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate,
    },
    {
      url: '/property/3679-manzano-peak-ave',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate,
    },
  ];

  // Combine all pages
  const allPages = [...staticPages, ...propertyPages];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages
  .map(
    (page) => `	<url>
		<loc>${baseUrl}${page.url}</loc>
		<lastmod>${page.lastmod}</lastmod>
		<changefreq>${page.changefreq}</changefreq>
		<priority>${page.priority}</priority>
	</url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
}
