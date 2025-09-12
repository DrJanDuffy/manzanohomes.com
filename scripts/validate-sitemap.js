#!/usr/bin/env node

/**
 * Sitemap validation script
 * Validates sitemap XML structure and content
 */

import { SitemapMonitor } from '../src/lib/seo/sitemap-monitor.js';

const DOMAIN = 'https://www.manzanohomes.com';
const sitemaps = [
  `${DOMAIN}/sitemap.xml`,
  `${DOMAIN}/sitemap-properties.xml`,
  `${DOMAIN}/sitemap-index.xml`
];

async function validateAllSitemaps() {
  console.log('🔍 Validating sitemaps...\n');
  
  const monitor = new SitemapMonitor();
  let allValid = true;
  
  for (const sitemapUrl of sitemaps) {
    console.log(`📋 Validating: ${sitemapUrl}`);
    
    const report = await monitor.generateSitemapReport(sitemapUrl);
    
    if (report.isValid) {
      console.log(`✅ Valid - ${report.urlCount} URLs`);
      if (report.lastModified) {
        console.log(`   Last modified: ${report.lastModified}`);
      }
    } else {
      console.log(`❌ Invalid`);
      report.errors.forEach(error => {
        console.log(`   - ${error}`);
      });
      allValid = false;
    }
    
    console.log('');
  }
  
  if (allValid) {
    console.log('🎉 All sitemaps are valid!');
  } else {
    console.log('⚠️  Some sitemaps have issues that need to be fixed.');
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  validateAllSitemaps().catch(console.error);
}

export { validateAllSitemaps };
