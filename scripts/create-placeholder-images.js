#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create placeholder images for development
async function createPlaceholderImages() {
  const staticDir = join(__dirname, '../static');

  console.log('🎨 Creating placeholder images...');

  // Hero image - Manzano Peak neighborhood
  await createHeroImage(staticDir);

  // Property placeholder
  await createPropertyPlaceholder(staticDir);

  // Logo placeholder
  await createLogoPlaceholder(staticDir);

  console.log('✅ Placeholder images created successfully!');
}

async function createHeroImage(outputDir) {
  const svg = `
    <svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#87CEEB;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#E0F6FF;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="grass" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#90EE90;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Sky background -->
      <rect width="1920" height="600" fill="url(#sky)"/>
      
      <!-- Grass foreground -->
      <rect y="600" width="1920" height="480" fill="url(#grass)"/>
      
      <!-- Mountains -->
      <polygon points="0,400 400,200 800,350 1200,180 1600,250 1920,300 1920,600 0,600" fill="#8B7355"/>
      
      <!-- Houses -->
      <rect x="200" y="450" width="120" height="80" fill="#8B4513"/>
      <polygon points="200,450 260,400 320,450" fill="#DC143C"/>
      <rect x="220" y="470" width="20" height="40" fill="#654321"/>
      <rect x="240" y="470" width="20" height="40" fill="#654321"/>
      
      <rect x="400" y="420" width="140" height="100" fill="#8B4513"/>
      <polygon points="400,420 470,370 540,420" fill="#DC143C"/>
      <rect x="420" y="440" width="25" height="50" fill="#654321"/>
      <rect x="450" y="440" width="25" height="50" fill="#654321"/>
      
      <rect x="600" y="460" width="130" height="90" fill="#8B4513"/>
      <polygon points="600,460 665,410 730,460" fill="#DC143C"/>
      <rect x="620" y="480" width="22" height="45" fill="#654321"/>
      <rect x="650" y="480" width="22" height="45" fill="#654321"/>
      
      <!-- Trees -->
      <ellipse cx="150" cy="380" rx="30" ry="50" fill="#228B22"/>
      <rect x="145" y="380" width="10" height="40" fill="#8B4513"/>
      
      <ellipse cx="800" cy="350" rx="35" ry="60" fill="#228B22"/>
      <rect x="793" y="350" width="14" height="50" fill="#8B4513"/>
      
      <!-- Sun -->
      <circle cx="1600" cy="150" r="80" fill="#FFD700"/>
      
      <!-- Text overlay area -->
      <rect x="0" y="0" width="1920" height="1080" fill="rgba(0,0,0,0.2)"/>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90, progressive: true })
    .toFile(join(outputDir, 'hero-manzano.jpg'));

  console.log('✅ Created hero-manzano.jpg');
}

async function createPropertyPlaceholder(outputDir) {
  const svg = `
    <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="houseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#F5F5DC;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#DEB887;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#DC143C;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#8B0000;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="800" height="600" fill="#87CEEB"/>
      
      <!-- Ground -->
      <rect y="400" width="800" height="200" fill="#90EE90"/>
      
      <!-- House -->
      <rect x="250" y="300" width="300" height="200" fill="url(#houseGrad)" stroke="#8B4513" stroke-width="2"/>
      
      <!-- Roof -->
      <polygon points="250,300 400,200 550,300" fill="url(#roofGrad)" stroke="#8B0000" stroke-width="2"/>
      
      <!-- Door -->
      <rect x="370" y="420" width="60" height="80" fill="#654321"/>
      <circle cx="410" cy="460" r="3" fill="#FFD700"/>
      
      <!-- Windows -->
      <rect x="290" y="330" width="50" height="50" fill="#87CEEB" stroke="#8B4513" stroke-width="2"/>
      <line x1="315" y1="330" x2="315" y2="380" stroke="#8B4513" stroke-width="1"/>
      <line x1="290" y1="355" x2="340" y2="355" stroke="#8B4513" stroke-width="1"/>
      
      <rect x="460" y="330" width="50" height="50" fill="#87CEEB" stroke="#8B4513" stroke-width="2"/>
      <line x1="485" y1="330" x2="485" y2="380" stroke="#8B4513" stroke-width="1"/>
      <line x1="460" y1="355" x2="510" y2="355" stroke="#8B4513" stroke-width="1"/>
      
      <!-- Garage -->
      <rect x="150" y="350" width="80" height="100" fill="#C0C0C0" stroke="#696969" stroke-width="2"/>
      <rect x="570" y="350" width="80" height="100" fill="#C0C0C0" stroke="#696969" stroke-width="2"/>
      
      <!-- Trees -->
      <ellipse cx="100" cy="350" rx="25" ry="40" fill="#228B22"/>
      <rect x="95" y="350" width="10" height="30" fill="#8B4513"/>
      
      <ellipse cx="700" cy="350" rx="25" ry="40" fill="#228B22"/>
      <rect x="695" y="350" width="10" height="30" fill="#8B4513"/>
      
      <!-- Driveway -->
      <rect x="200" y="450" width="400" height="50" fill="#696969"/>
      
      <!-- Text -->
      <text x="400" y="550" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" fill="#333">
        3693 Manzano Peak Ave
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90, progressive: true })
    .toFile(join(outputDir, 'property-placeholder.jpg'));

  console.log('✅ Created property-placeholder.jpg');
}

async function createLogoPlaceholder(outputDir) {
  const svg = `
    <svg width="200" height="80" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#3A8DDE;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0A2540;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="200" height="80" fill="url(#logoGrad)" rx="10"/>
      
      <!-- House icon -->
      <rect x="20" y="35" width="30" height="25" fill="white" rx="2"/>
      <polygon points="20,35 35,20 50,35" fill="white"/>
      <rect x="30" y="45" width="10" height="15" fill="#3A8DDE"/>
      
      <!-- Text -->
      <text x="70" y="35" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white">
        Manzano
      </text>
      <text x="70" y="55" font-family="Arial, sans-serif" font-size="12" fill="white">
        Homes
      </text>
    </svg>
  `;

  await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile(join(outputDir, 'logo-manzano.png'));

  console.log('✅ Created logo-manzano.png');
}

createPlaceholderImages().catch(console.error);
