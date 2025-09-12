#!/usr/bin/env node

/**
 * XML Sitemap validation script
 * Validates sitemap XML structure and content
 */

const https = require('https');
const http = require('http');

function validateSitemap(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const validation = {
          url,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          isValid: true,
          errors: [],
          warnings: [],
          urlCount: 0
        };
        
        // Check status code
        if (res.statusCode !== 200) {
          validation.isValid = false;
          validation.errors.push(`HTTP ${res.statusCode} status code`);
        }
        
        // Check content type
        if (!res.headers['content-type']?.includes('xml')) {
          validation.warnings.push(`Unexpected content type: ${res.headers['content-type']}`);
        }
        
        // Check XML structure
        if (!data.includes('<?xml')) {
          validation.isValid = false;
          validation.errors.push('Missing XML declaration');
        }
        
        if (!data.includes('<urlset')) {
          validation.isValid = false;
          validation.errors.push('Missing urlset element');
        }
        
        if (!data.includes('</urlset>')) {
          validation.isValid = false;
          validation.errors.push('Unclosed urlset element');
        }
        
        // Count URLs
        const urlMatches = data.match(/<url>/g);
        validation.urlCount = urlMatches ? urlMatches.length : 0;
        
        if (validation.urlCount === 0) {
          validation.warnings.push('No URLs found in sitemap');
        }
        
        // Check for common issues
        if (data.includes('&') && !data.includes('&amp;')) {
          validation.warnings.push('Unescaped ampersands found');
        }
        
        if (validation.urlCount > 50000) {
          validation.errors.push('Sitemap exceeds Google\'s 50,000 URL limit');
        }
        
        resolve(validation);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function validateAllSitemaps() {
  console.log('🔍 Validating sitemaps...\n');
  
  const sitemaps = [
    { url: 'http://localhost:5173/sitemap.xml', type: 'sitemap' },
    { url: 'http://localhost:5173/sitemap-properties.xml', type: 'sitemap' },
    { url: 'http://localhost:5173/sitemap-index.xml', type: 'sitemap-index' },
    { url: 'http://localhost:5173/robots.txt', type: 'robots' }
  ];
  
  for (const sitemap of sitemaps) {
    try {
      console.log(`📋 Validating: ${sitemap.url} (${sitemap.type})`);
      
      const validation = await validateSitemap(sitemap.url);
      
      // Adjust validation based on type
      if (sitemap.type === 'robots') {
        if (validation.statusCode === 200 && validation.contentType?.includes('text/plain')) {
          console.log(`✅ Valid robots.txt`);
          console.log(`   Content-Type: ${validation.contentType}`);
        } else {
          console.log(`❌ Invalid robots.txt`);
          validation.errors.forEach(error => {
            console.log(`   - ${error}`);
          });
        }
      } else if (sitemap.type === 'sitemap-index') {
        if (validation.statusCode === 200 && validation.contentType?.includes('xml')) {
          console.log(`✅ Valid sitemap index`);
          console.log(`   Content-Type: ${validation.contentType}`);
        } else {
          console.log(`❌ Invalid sitemap index`);
          validation.errors.forEach(error => {
            console.log(`   - ${error}`);
          });
        }
      } else {
        if (validation.isValid) {
          console.log(`✅ Valid - ${validation.urlCount} URLs`);
          console.log(`   Content-Type: ${validation.contentType}`);
        } else {
          console.log(`❌ Invalid`);
          validation.errors.forEach(error => {
            console.log(`   - ${error}`);
          });
        }
      }
      
      if (validation.warnings.length > 0) {
        validation.warnings.forEach(warning => {
          console.log(`   ⚠️  ${warning}`);
        });
      }
      
      console.log('');
    } catch (error) {
      console.log(`❌ Error: ${error.message}\n`);
    }
  }
}

// Run if called directly
if (require.main === module) {
  validateAllSitemaps().catch(console.error);
}

module.exports = { validateSitemap };
