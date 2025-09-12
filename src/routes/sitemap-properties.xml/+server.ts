import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch: _fetch }) => {
  const DOMAIN = 'https://www.manzanohomes.com';

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
      lastModified: '2024-01-15',
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
      lastModified: '2024-01-10',
    },
    {
      id: '3675-manzano-peak',
      address: '3675 Manzano Peak Ave',
      price: 400000,
      status: 'pending',
      featured: false,
      images: [
        {
          url: '/images/properties/3675-manzano-peak-1.jpg',
          caption: 'Front view of 3675 Manzano Peak Ave',
        },
      ],
      lastModified: '2024-01-05',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sampleProperties
  .map(
    (property: any) => `
  <url>
    <loc>${DOMAIN}/property/${property.id}</loc>
    <lastmod>${property.lastModified || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${property.status === 'active' ? 'daily' : 'weekly'}</changefreq>
    <priority>${property.featured ? '0.9' : '0.7'}</priority>
    ${property.images
      ?.slice(0, 5)
      .map(
        (img: any) => `
    <image:image>
      <image:loc>${img.url.startsWith('http') ? img.url : `${DOMAIN}${img.url}`}</image:loc>
      <image:title>${property.address} - Manzano Homes</image:title>
      <image:caption>${img.caption || property.address}</image:caption>
      <image:geo_location>Las Vegas, Nevada, USA</image:geo_location>
    </image:image>`
      )
      .join('')}
  </url>`
  )
  .join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
