#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const routesDir = 'src/routes';

// Files that have duplicate RealScout script loading
const filesToFix = [
  '3693-manzano-peak-ave/+page.svelte',
  'manzano-specialist/+layout.svelte',
  '89178-real-estate/+page.svelte',
  'manzano-peak-neighborhood/+page.svelte',
  'homes-near-[school]/+page.svelte',
  '89138-real-estate/+page.svelte',
  '89121-real-estate/+page.svelte',
  '89179-real-estate/+page.svelte',
  'about/+page.svelte',
  'contact/+page.svelte',
  'neighborhood/+page.svelte',
  'market-reports/+page.svelte',
  'buying-guide/+page.svelte',
];

// Pattern to match and remove
const scriptLoadingPattern =
  /\/\/ RealScout Widget Script Loading\s*onMount\(\(\) => \{\s*\/\/ Load RealScout Web Components\s*const script = document\.createElement\('script'\);\s*script\.src = 'https:\/\/em\.realscout\.com\/widgets\/realscout-web-components\.umd\.js';\s*script\.type = 'module';\s*document\.head\.appendChild\(script\);\s*\}\);/g;

const onMountImportPattern = /import \{ onMount \} from 'svelte';\s*\n/g;

console.log('Fixing duplicate RealScout script loading...');

filesToFix.forEach((filePath) => {
  const fullPath = path.join(routesDir, filePath);

  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Remove the script loading pattern
    if (scriptLoadingPattern.test(content)) {
      content = content.replace(scriptLoadingPattern, '');
      modified = true;
    }

    // Remove onMount import if it's no longer needed
    if (onMountImportPattern.test(content)) {
      // Check if onMount is still used elsewhere in the file
      const onMountUsage = content.match(/onMount/g);
      if (!onMountUsage || onMountUsage.length <= 1) {
        content = content.replace(onMountImportPattern, '');
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`✅ Fixed: ${filePath}`);
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
    }
  } else {
    console.log(`❌ File not found: ${filePath}`);
  }
});

console.log('✅ RealScout script loading fix complete!');
