#!/usr/bin/env node

/**
 * Simple structured data testing script
 * Validates that our schema generation works correctly
 */

import { ManzanoSchemas } from '../src/lib/seo/schemas.js';

const schemas = new ManzanoSchemas();

console.log('🧪 Testing Manzano SEO Schemas...\n');

// Test organization schema
try {
  const orgSchema = schemas.organization();
  console.log('✅ Organization schema generated successfully');
  console.log(`   - Name: ${orgSchema.name}`);
  console.log(`   - Type: ${orgSchema['@type']}`);
  console.log(`   - ID: ${orgSchema['@id']}\n`);
} catch (error) {
  console.error('❌ Organization schema failed:', error.message);
}

// Test property schema
try {
  const propertySchema = schemas.property({
    id: 'test-123',
    mlsNumber: 'MLS123456',
    price: 450000,
    address: {
      street: '3693 Manzano Peak Ave',
      city: 'Las Vegas',
      state: 'NV',
      zip: '89121',
      lat: 36.0839,
      lng: -115.0891,
    },
    details: {
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 2500,
      yearBuilt: 2020,
    },
    images: [{ url: 'https://example.com/image1.jpg', caption: 'Front view' }],
    description: 'Beautiful home in Manzano',
  });
  console.log('✅ Property schema generated successfully');
  console.log(`   - Name: ${propertySchema.name}`);
  console.log(`   - Type: ${propertySchema['@type']}`);
  console.log(`   - Price: $${propertySchema.offers.price}\n`);
} catch (error) {
  console.error('❌ Property schema failed:', error.message);
}

// Test breadcrumb schema
try {
  const breadcrumbSchema = schemas.breadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Homes for Sale', url: '/homes-for-sale' },
  ]);
  console.log('✅ Breadcrumb schema generated successfully');
  console.log(`   - Type: ${breadcrumbSchema['@type']}`);
  console.log(`   - Items: ${breadcrumbSchema.itemListElement.length}\n`);
} catch (error) {
  console.error('❌ Breadcrumb schema failed:', error.message);
}

// Test website schema
try {
  const websiteSchema = schemas.website();
  console.log('✅ Website schema generated successfully');
  console.log(`   - Name: ${websiteSchema.name}`);
  console.log(`   - Type: ${websiteSchema['@type']}`);
  console.log(`   - URL: ${websiteSchema.url}\n`);
} catch (error) {
  console.error('❌ Website schema failed:', error.message);
}

console.log('🎉 Schema testing completed!');
console.log('\n📋 Next steps:');
console.log("1. Test your schemas with Google's Rich Results Test:");
console.log('   https://search.google.com/test/rich-results');
console.log('2. Validate JSON-LD with:');
console.log('   https://validator.schema.org/');
console.log('3. Check for errors with: pnpm validate:schemas');
