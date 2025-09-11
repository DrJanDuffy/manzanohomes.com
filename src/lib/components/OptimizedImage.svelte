<script>
import { IMAGE_OPTIMIZATION, generateImageQuery } from '$lib/utils/imageUtils.js';

/**
 * @typedef {Object} OptimizedImageProps
 * @property {string} src - Image source path
 * @property {string} alt - Alt text for accessibility
 * @property {string} [type] - Image type (hero, property, thumbnail, logo)
 * @property {string} [sizes] - Custom sizes attribute
 * @property {number} [quality] - Image quality (1-100)
 * @property {string} [format] - Image format (webp,avif,jpg,png)
 * @property {number} [blur] - Blur amount for placeholder
 * @property {string} [widths] - Custom widths for srcset
 * @property {string} [className] - CSS classes
 * @property {boolean} [loading] - Loading strategy (lazy, eager)
 * @property {string} [fetchpriority] - Fetch priority (high, low, auto)
 * @property {Object} [style] - Inline styles
 */

/** @type {OptimizedImageProps} */
const {
  src: _src,
  alt,
  type = 'property',
  sizes,
  quality,
  format,
  blur,
  widths,
  className: _className = '',
  loading: _loading = 'lazy',
  fetchpriority: _fetchpriority = 'auto',
  style: _style = {},
} = $props();

// Get optimization settings based on type
const optimization = IMAGE_OPTIMIZATION[type.toUpperCase()] || IMAGE_OPTIMIZATION.PROPERTY;

// Generate query string for enhanced images
const _query = generateImageQuery({
  quality: quality || optimization.quality,
  format: format || optimization.format,
  blur,
  w: widths,
});

// Use provided sizes or default from optimization settings
const _imageSizes = sizes || optimization.sizes;

// Ensure alt text is provided for accessibility
if (!alt) {
  console.warn('OptimizedImage: alt text is required for accessibility');
}
</script>

<enhanced:img
  src="{src}{query}"
  {alt}
  {sizes}
  {className}
  {loading}
  {fetchpriority}
  {style}
  {...restProps}
/>
