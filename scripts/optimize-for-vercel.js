#!/usr/bin/env node

/**
 * Vercel Optimization Script
 * Optimizes the build for Vercel deployment
 */

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🚀 Optimizing for Vercel deployment...');

// 1. Generate sitemap
console.log('📄 Generating sitemap...');
try {
  execSync('node scripts/generate-sitemap.cjs', { cwd: rootDir, stdio: 'inherit' });
  console.log('✅ Sitemap generated successfully');
} catch (error) {
  console.error('❌ Failed to generate sitemap:', error.message);
  process.exit(1);
}

// 2. Validate build configuration
console.log('🔍 Validating build configuration...');
const packageJson = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf8'));
const vercelJson = JSON.parse(readFileSync(join(rootDir, 'vercel.json'), 'utf8'));

// Check if required dependencies are present
const requiredDeps = ['@sveltejs/adapter-vercel', 'sharp'];
const missingDeps = requiredDeps.filter(
  (dep) => !packageJson.dependencies[dep] && !packageJson.devDependencies[dep]
);

if (missingDeps.length > 0) {
  console.warn('⚠️  Missing recommended dependencies:', missingDeps.join(', '));
}

// 3. Optimize package.json for production
console.log('📦 Optimizing package.json...');
const optimizedPackageJson = {
  ...packageJson,
  scripts: {
    ...packageJson.scripts,
    'build:vercel': 'npm run sitemap:generate && vite build --mode production',
    postinstall: 'npm run sitemap:generate',
  },
};

writeFileSync(join(rootDir, 'package.json'), JSON.stringify(optimizedPackageJson, null, 2));

// 4. Create Vercel environment file
console.log('🌍 Creating Vercel environment configuration...');
const vercelEnv = `# Vercel Environment Variables
NODE_ENV=production
VERCEL=1
NEXT_TELEMETRY_DISABLED=1

# Build optimizations
NPM_CONFIG_PREFER_OFFLINE=true
NPM_CONFIG_AUDIT=false
NPM_CONFIG_FUND=false

# Performance optimizations
NODE_OPTIONS=--max-old-space-size=4096
`;

writeFileSync(join(rootDir, '.env.vercel'), vercelEnv);

// 5. Validate Vercel configuration
console.log('⚙️  Validating Vercel configuration...');
const requiredVercelFields = ['version', 'framework', 'buildCommand', 'outputDirectory'];
const missingVercelFields = requiredVercelFields.filter((field) => !vercelJson[field]);

if (missingVercelFields.length > 0) {
  console.error('❌ Missing required Vercel configuration fields:', missingVercelFields.join(', '));
  process.exit(1);
}

console.log('✅ Vercel configuration validated');

// 6. Performance recommendations
console.log('\n🎯 Performance Recommendations:');
console.log('• Enable Vercel Analytics for performance monitoring');
console.log('• Configure Edge Functions for API routes if needed');
console.log('• Use Vercel Image Optimization for better image performance');
console.log('• Enable Vercel Speed Insights for Core Web Vitals tracking');
console.log('• Consider using Vercel KV for caching if needed');

// 7. Build size analysis
console.log('\n📊 Build Analysis:');
try {
  execSync('npm run build:vercel', { cwd: rootDir, stdio: 'pipe' });
  console.log('✅ Build completed successfully');

  // Check build output size
  const _buildDir = join(rootDir, 'build');
  const { execSync: exec } = await import('node:child_process');
  try {
    const sizeOutput = exec('du -sh build', { cwd: rootDir, encoding: 'utf8' });
    console.log(`📦 Build size: ${sizeOutput.trim().split('\t')[0]}`);
  } catch (_error) {
    console.log('📦 Build completed (size analysis skipped)');
  }
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

console.log('\n🎉 Vercel optimization complete!');
console.log('Ready for deployment to Vercel.');
