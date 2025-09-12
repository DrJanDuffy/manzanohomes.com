/**
 * Image utility functions for real estate website
 * Provides optimized image handling for property photos and other assets
 */

/**
 * Generate optimized image sizes for different breakpoints
 * @param {number} baseWidth - Base width of the image
 * @returns {string} Sizes attribute for responsive images
 */
export function generateImageSizes(baseWidth = 1280) {
  return `(min-width: 1920px) ${baseWidth}px, (min-width: 1080px) ${Math.floor(baseWidth * 0.75)}px, (min-width: 768px) ${Math.floor(baseWidth * 0.5)}px, 100vw`;
}

/**
 * Generate srcset widths for property images
 * @param {number} maxWidth - Maximum width of the image
 * @returns {string} Comma-separated widths for srcset
 */
export function generatePropertyImageWidths(maxWidth = 1200) {
  const widths = [400, 600, 800, maxWidth];
  return widths.join(';');
}

/**
 * Generate sizes attribute for property images
 * @returns {string} Sizes attribute optimized for property listings
 */
export function getPropertyImageSizes() {
  return '(min-width: 1200px) 400px, (min-width: 768px) 300px, 100vw';
}

/**
 * Generate sizes attribute for hero images
 * @returns {string} Sizes attribute optimized for hero sections
 */
export function getHeroImageSizes() {
  return 'min(1280px, 100vw)';
}

/**
 * Generate sizes attribute for thumbnail images
 * @returns {string} Sizes attribute optimized for thumbnails
 */
export function getThumbnailImageSizes() {
  return '(min-width: 768px) 200px, 150px';
}

/**
 * Image optimization settings for different use cases
 */
export const IMAGE_OPTIMIZATION = {
  HERO: {
    quality: 85,
    format: 'webp,avif',
    sizes: getHeroImageSizes(),
  },
  PROPERTY: {
    quality: 80,
    format: 'webp,avif',
    sizes: getPropertyImageSizes(),
  },
  THUMBNAIL: {
    quality: 75,
    format: 'webp,avif',
    sizes: getThumbnailImageSizes(),
  },
  LOGO: {
    quality: 90,
    format: 'webp,avif',
    sizes: '200px',
  },
};

/**
 * Generate query string for enhanced image optimization
 * @param {{quality?: number, format?: string, blur?: number, w?: number}} options - Optimization options
 * @returns {string} Query string for enhanced images
 */
export function generateImageQuery(options = {}) {
  const { quality = 80, format = 'webp,avif', blur, w } = options;
  const params = [];

  if (quality) params.push(`quality=${quality}`);
  if (format) params.push(`format=${format}`);
  if (blur) params.push(`blur=${blur}`);
  if (w) params.push(`w=${w}`);

  return params.length > 0 ? `?${params.join('&')}` : '';
}
