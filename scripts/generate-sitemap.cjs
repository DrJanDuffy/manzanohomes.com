#!/usr/bin/env node

/**
 * Build-time sitemap generation script
 * Generates static sitemap for fallback and validation
 */

const { createWriteStream } = require('node:fs');
const { resolve } = require('node:path');

async function generateStaticSitemap() {
  console.log('🗺️  Generating static sitemap...');

  const DOMAIN = 'https://www.manzanohomes.com';

  // Static URLs with SEO priorities
  const staticUrls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/homes-for-sale', changefreq: 'daily', priority: 0.9 },
    { url: '/neighborhood', changefreq: 'weekly', priority: 0.8 },
    { url: '/home-valuation', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/about', changefreq: 'monthly', priority: 0.6 },
    { url: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
    { url: '/terms-of-service', changefreq: 'yearly', priority: 0.3 },
    { url: '/disclaimer', changefreq: 'yearly', priority: 0.3 },
  ];

  // Generate XML
  const urlset = staticUrls
    .map(
      (url) => `
  <url>
    <loc>${DOMAIN}${url.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urlset}
</urlset>`;

  // Write to static directory
  const writeStream = createWriteStream(resolve('static/sitemap-static.xml'));
  writeStream.write(xml);
  writeStream.end();

  console.log('✅ Static sitemap generated successfully');
  console.log(`   - ${staticUrls.length} URLs included`);
  console.log('   - Saved to: static/sitemap-static.xml');
}

// Run if called directly
if (require.main === module) {
  generateStaticSitemap().catch(console.error);
}

module.exports = { generateStaticSitemap };
