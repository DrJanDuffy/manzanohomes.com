import { ManzanoSchemas } from '$lib/seo/schemas';
import type { RequestHandler } from './$types';

const DOMAIN = 'https://www.manzanohomes.com';
const _PAGES_PER_SITEMAP = 50000; // Google's limit

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: Array<{
    url: string;
    title?: string;
    caption?: string;
    geo_location?: string;
  }>;
}

export const GET: RequestHandler = async ({ fetch: _fetch }) => {
  try {
    const entries: SitemapEntry[] = [];

    // Static pages with priorities
    const staticPages = [
      { path: '/', priority: 1.0, changefreq: 'daily' as const },
      { path: '/homes-for-sale', priority: 0.9, changefreq: 'daily' as const },
      { path: '/neighborhood', priority: 0.8, changefreq: 'weekly' as const },
      { path: '/home-valuation', priority: 0.8, changefreq: 'weekly' as const },
      { path: '/contact', priority: 0.7, changefreq: 'monthly' as const },
      { path: '/about', priority: 0.6, changefreq: 'monthly' as const },
      { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' as const },
      { path: '/terms-of-service', priority: 0.3, changefreq: 'yearly' as const },
      { path: '/disclaimer', priority: 0.3, changefreq: 'yearly' as const },
    ];

    // Add static pages
    for (const page of staticPages) {
      entries.push({
        url: `${DOMAIN}${page.path}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: page.changefreq,
        priority: page.priority,
      });
    }

    // Fetch dynamic property listings from RealScout or database
    try {
      // For now, we'll use sample data since we don't have a real API
      const sampleProperties = [
        {
          id: '3693-manzano-peak',
          address: '3693 Manzano Peak Ave',
          price: 450000,
          status: 'active',
          featured: true,
          images: [
            {
              url: '/images/properties/3693-manzano-peak-1.jpg',
              caption: 'Front view of 3693 Manzano Peak Ave',
            },
            { url: '/images/properties/3693-manzano-peak-2.jpg', caption: 'Living room' },
            { url: '/images/properties/3693-manzano-peak-3.jpg', caption: 'Kitchen' },
          ],
          updatedAt: '2024-01-15',
        },
        {
          id: '3687-manzano-peak',
          address: '3687 Manzano Peak Ave',
          price: 425000,
          status: 'active',
          featured: false,
          images: [
            {
              url: '/images/properties/3687-manzano-peak-1.jpg',
              caption: 'Front view of 3687 Manzano Peak Ave',
            },
          ],
          updatedAt: '2024-01-10',
        },
      ];

      for (const property of sampleProperties) {
        entries.push({
          url: `${DOMAIN}/property/${property.id}`,
          lastmod: property.updatedAt || new Date().toISOString().split('T')[0],
          changefreq: property.status === 'active' ? 'daily' : 'weekly',
          priority: property.featured ? 0.9 : 0.7,
          images: property.images?.slice(0, 5).map((img: any) => ({
            url: img.url.startsWith('http') ? img.url : `${DOMAIN}${img.url}`,
            title: `${property.address} - ${img.caption || 'Property Image'}`,
            caption: img.caption,
            geo_location: 'Las Vegas, Nevada',
          })),
        });
      }
    } catch (error) {
      console.error('Error fetching properties for sitemap:', error);
    }

    // Generate XML
    const xml = generateSitemapXML(entries);

    return new Response(xml, {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);

    // Return a minimal valid sitemap on error
    const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new Response(fallbackXml, {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=300', // Shorter cache on error
      },
    });
  }
};

function generateSitemapXML(entries: SitemapEntry[]): string {
  const urlset = entries
    .map((entry) => {
      let url = `
    <url>
      <loc>${escapeXML(entry.url)}</loc>`;

      if (entry.lastmod) {
        url += `
      <lastmod>${entry.lastmod}</lastmod>`;
      }

      if (entry.changefreq) {
        url += `
      <changefreq>${entry.changefreq}</changefreq>`;
      }

      if (entry.priority !== undefined) {
        url += `
      <priority>${entry.priority}</priority>`;
      }

      if (entry.images && entry.images.length > 0) {
        for (const image of entry.images) {
          url += `
      <image:image>
        <image:loc>${escapeXML(image.url)}</image:loc>`;

          if (image.title) {
            url += `
        <image:title>${escapeXML(image.title)}</image:title>`;
          }

          if (image.caption) {
            url += `
        <image:caption>${escapeXML(image.caption)}</image:caption>`;
          }

          if (image.geo_location) {
            url += `
        <image:geo_location>${escapeXML(image.geo_location)}</image:geo_location>`;
          }

          url += `
      </image:image>`;
        }
      }

      url += `
    </url>`;

      return url;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlset}
</urlset>`;
}

function escapeXML(str: string): string {
  return str.replace(/[&<>"']/g, (match) => {
    const escapeMap: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&apos;',
    };
    return escapeMap[match];
  });
}
