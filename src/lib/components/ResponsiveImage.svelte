<script>
import { onMount } from 'svelte';

// Props with modern 2025 defaults
export let src = '';
export let alt = '';
export let width = 800;
export let height = 600;
export let sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
export let loading = 'lazy';
export let fetchpriority = 'auto';
export let className = '';
export let style = '';
export let quality = 85;
export let formats = ['avif', 'webp', 'jpeg']; // Modern format priority
export let breakpoints = {
  mobile: 480,
  tablet: 768,
  desktop: 1200,
  retina: 2400,
};
export let placeholder = 'blur';
export let blurDataURL = '';

// State
let isLoaded = false;
let isInView = false;
let currentFormat = 'jpeg';
let error = false;

// Generate optimized image URLs
function generateImageUrls() {
  const baseName = src.replace(/\.[^/.]+$/, '');
  const urls = {};

  formats.forEach((format) => {
    urls[format] = {};
    Object.entries(breakpoints).forEach(([size, width]) => {
      urls[format][size] = `/optimized/${baseName}-${size}.${format}`;
    });
  });

  return urls;
}

// Check if browser supports modern formats
function checkFormatSupport() {
  if (typeof window === 'undefined') return 'jpeg';

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Check AVIF support
  if (formats.includes('avif')) {
    canvas.toBlob(() => {}, 'image/avif');
    if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
      return 'avif';
    }
  }

  // Check WebP support
  if (formats.includes('webp')) {
    canvas.toBlob(() => {}, 'image/webp');
    if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
      return 'webp';
    }
  }

  return 'jpeg';
}

// Intersection Observer for lazy loading
function setupIntersectionObserver() {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isInView = true;
          observer.disconnect();
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.1,
    }
  );

  return observer;
}

// Generate srcset for responsive images
function generateSrcSet(format) {
  const imageUrls = generateImageUrls();
  const srcset = [];

  Object.entries(breakpoints).forEach(([size, width]) => {
    if (imageUrls[format] && imageUrls[format][size]) {
      srcset.push(`${imageUrls[format][size]} ${width}w`);
    }
  });

  return srcset.join(', ');
}

// Generate sizes attribute
function generateSizes() {
  return sizes;
}

// Handle image load
function handleLoad() {
  isLoaded = true;
  error = false;
}

// Handle image error
function handleError() {
  error = true;
  console.warn(`Failed to load image: ${src}`);
}

// Get the best format for current browser
$: currentFormat = checkFormatSupport();
$: imageUrls = generateImageUrls();
$: srcSet = generateSrcSet(currentFormat);
$: sizesAttr = generateSizes();

onMount(() => {
  if (loading === 'lazy') {
    const observer = setupIntersectionObserver();
    if (observer) {
      const imgElement = document.querySelector(`[data-src="${src}"]`);
      if (imgElement) {
        observer.observe(imgElement);
      }
    }
  } else {
    isInView = true;
  }
});
</script>

<!-- Modern responsive image with 2025 techniques -->
<picture 
  class="responsive-image {className}"
  style={style}
  data-src={src}
>
  <!-- AVIF format (best compression) -->
  {#if formats.includes('avif') && currentFormat === 'avif'}
    <source 
      type="image/avif" 
      srcset={generateSrcSet('avif')}
      sizes={sizesAttr}
    />
  {/if}
  
  <!-- WebP format (good compression, wide support) -->
  {#if formats.includes('webp') && (currentFormat === 'webp' || currentFormat === 'avif')}
    <source 
      type="image/webp" 
      srcset={generateSrcSet('webp')}
      sizes={sizesAttr}
    />
  {/if}
  
  <!-- Fallback image -->
  <img
    {src}
    {alt}
    {width}
    {height}
    srcset={srcSet}
    sizes={sizesAttr}
    loading={loading}
    fetchpriority={fetchpriority}
    class="w-full h-auto object-cover {isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300"
    style="aspect-ratio: {width}/{height};"
    on:load={handleLoad}
    on:error={handleError}
    decoding="async"
    role="img"
    aria-label={alt}
  />
  
  <!-- Loading placeholder -->
  {#if !isLoaded && !error && placeholder === 'blur'}
    <div 
      class="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
      style="aspect-ratio: {width}/{height};"
    >
      <svg class="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
      </svg>
    </div>
  {/if}
  
  <!-- Error state -->
  {#if error}
    <div 
      class="absolute inset-0 bg-gray-100 flex items-center justify-center"
      style="aspect-ratio: {width}/{height};"
    >
      <div class="text-center text-gray-500">
        <svg class="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
        <p class="text-sm">Image unavailable</p>
      </div>
    </div>
  {/if}
</picture>

<style>
  .responsive-image {
    position: relative;
    display: block;
    overflow: hidden;
  }
  
  .responsive-image img {
    transition: opacity 0.3s ease-in-out;
  }
  
  /* Ensure proper aspect ratio */
  .responsive-image::before {
    content: '';
    display: block;
    padding-top: calc(100% * var(--aspect-ratio, 0.75));
  }
  
  .responsive-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
