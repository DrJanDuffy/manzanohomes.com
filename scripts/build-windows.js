#!/usr/bin/env node

/**
 * Windows-compatible build script that avoids symlink issues
 * This script handles the Windows-specific build problems with pnpm and Vercel adapter
 */

import { execSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import path from 'node:path';

console.log('🔧 Running Windows-compatible build...');

try {
  // Clean previous builds
  if (existsSync('.vercel')) {
    console.log('🧹 Cleaning previous Vercel build...');
    rmSync('.vercel', { recursive: true, force: true });
  }

  if (existsSync('build')) {
    console.log('🧹 Cleaning previous build...');
    rmSync('build', { recursive: true, force: true });
  }

  // Set environment variables for Windows compatibility
  process.env.NODE_ENV = 'production';
  process.env.VERCEL = 'true';

  // Use npm instead of pnpm to avoid symlink issues
  console.log('📦 Installing dependencies with npm...');
  execSync('npm install --production=false', {
    stdio: 'inherit',
    env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=4096' },
  });

  // Generate sitemap
  console.log('🗺️ Generating sitemap...');
  execSync('node scripts/generate-sitemap.cjs', { stdio: 'inherit' });

  // Build with Vite
  console.log('🏗️ Building application...');
  execSync('npx vite build', {
    stdio: 'inherit',
    env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=4096' },
  });

  console.log('✅ Windows-compatible build completed successfully!');
  console.log('🚀 Ready for Vercel deployment');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
