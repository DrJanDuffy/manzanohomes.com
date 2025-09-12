#!/usr/bin/env node

/**
 * Sitemap submission script
 * Submits sitemaps to search engines
 */

import { SitemapMonitor } from '../src/lib/seo/sitemap-monitor.ts';

const DOMAIN = 'https://www.manzanohomes.com';
const sitemapUrl = `${DOMAIN}/sitemap.xml`;

async function submitSitemap() {
  console.log('📤 Submitting sitemap to search engines...\n');

  const monitor = new SitemapMonitor();

  // Validate sitemap first
  console.log('🔍 Validating sitemap...');
  const isValid = await monitor.validateSitemap(sitemapUrl);

  if (!isValid) {
    console.log('❌ Sitemap validation failed. Please fix issues before submitting.');
    process.exit(1);
  }

  console.log('✅ Sitemap is valid\n');

  // Submit to Google
  console.log('📤 Submitting to Google...');
  await monitor.pingGoogle(sitemapUrl);

  // Submit to Bing
  console.log('📤 Submitting to Bing...');
  await monitor.pingBing(sitemapUrl);

  // Submit to Search Console (placeholder)
  console.log('📤 Submitting to Google Search Console...');
  await monitor.submitToSearchConsole(sitemapUrl);

  console.log('\n🎉 Sitemap submission completed!');
  console.log('\n📋 Next steps:');
  console.log('1. Check Google Search Console for indexing status');
  console.log('2. Monitor crawl stats in Search Console');
  console.log('3. Set up automated sitemap monitoring');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  submitSitemap().catch(console.error);
}

export { submitSitemap };
