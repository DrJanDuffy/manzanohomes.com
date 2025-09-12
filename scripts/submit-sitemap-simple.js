#!/usr/bin/env node

/**
 * Simple sitemap submission script
 * Submits sitemaps to search engines without TypeScript dependencies
 */

const DOMAIN = 'https://www.manzanohomes.com';
const sitemapUrl = `${DOMAIN}/sitemap.xml`;

async function pingGoogle(sitemapUrl) {
  const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

  try {
    const response = await fetch(googlePingUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SitemapSubmitter/1.0)',
      },
    });

    if (response.ok) {
      console.log('✅ Successfully pinged Google');
    } else {
      console.log(`⚠️  Google ping returned status: ${response.status}`);
    }
  } catch (error) {
    console.log(`❌ Error pinging Google: ${error.message}`);
  }
}

async function pingBing(sitemapUrl) {
  const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;

  try {
    const response = await fetch(bingPingUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SitemapSubmitter/1.0)',
      },
    });

    if (response.ok) {
      console.log('✅ Successfully pinged Bing');
    } else {
      console.log(`⚠️  Bing ping returned status: ${response.status}`);
    }
  } catch (error) {
    console.log(`❌ Error pinging Bing: ${error.message}`);
  }
}

async function validateSitemap(sitemapUrl) {
  try {
    const response = await fetch(sitemapUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SitemapValidator/1.0)',
      },
    });

    if (!response.ok) {
      console.log(`❌ Sitemap not accessible: ${response.status}`);
      return false;
    }

    const content = await response.text();

    // Basic validation
    if (!content.includes('<?xml')) {
      console.log('❌ Missing XML declaration');
      return false;
    }

    if (!content.includes('<urlset')) {
      console.log('❌ Missing urlset element');
      return false;
    }

    console.log('✅ Sitemap is valid');
    return true;
  } catch (error) {
    console.log(`❌ Error validating sitemap: ${error.message}`);
    return false;
  }
}

async function submitSitemap() {
  console.log('📤 Submitting sitemap to search engines...\n');
  console.log(`📍 Sitemap URL: ${sitemapUrl}\n`);

  // Validate sitemap first
  console.log('🔍 Validating sitemap...');
  const isValid = await validateSitemap(sitemapUrl);

  if (!isValid) {
    console.log('❌ Sitemap validation failed. Please fix issues before submitting.');
    process.exit(1);
  }

  console.log('');

  // Submit to Google
  console.log('📤 Submitting to Google...');
  await pingGoogle(sitemapUrl);

  // Submit to Bing
  console.log('📤 Submitting to Bing...');
  await pingBing(sitemapUrl);

  console.log('\n🎉 Sitemap submission completed!');
  console.log('\n📋 Next steps:');
  console.log('1. Check Google Search Console for indexing status');
  console.log('2. Monitor crawl stats in Search Console');
  console.log('3. Set up automated sitemap monitoring');
  console.log('\n💡 Note: Search engines may take time to process the sitemap');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  submitSitemap().catch(console.error);
}

export { submitSitemap };
