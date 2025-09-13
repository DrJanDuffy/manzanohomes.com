/**
 * Advanced lazy loading utilities using 2025 techniques
 * Implements Intersection Observer API with fallbacks
 */

class LazyLoader {
  constructor(options = {}) {
    this.options = {
      rootMargin: '50px 0px',
      threshold: 0.1,
      enableNative: true,
      fallbackDelay: 100,
      ...options,
    };

    this.observer = null;
    this.supported = 'IntersectionObserver' in window;
    this.images = new Set();

    this.init();
  }

  init() {
    if (this.supported) {
      this.setupIntersectionObserver();
    } else {
      this.setupFallback();
    }
  }

  setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.observer.unobserve(entry.target);
        }
      });
    }, this.options);
  }

  setupFallback() {
    // Fallback for browsers without IntersectionObserver
    const loadVisibleImages = () => {
      this.images.forEach((img) => {
        if (this.isElementInViewport(img)) {
          this.loadImage(img);
          this.images.delete(img);
        }
      });
    };

    // Check on scroll and resize
    window.addEventListener('scroll', this.throttle(loadVisibleImages, 100));
    window.addEventListener('resize', this.throttle(loadVisibleImages, 100));

    // Initial check
    setTimeout(loadVisibleImages, this.options.fallbackDelay);
  }

  observe(element) {
    if (!element) return;

    if (this.supported && this.observer) {
      this.observer.observe(element);
    } else {
      this.images.add(element);
    }
  }

  unobserve(element) {
    if (!element) return;

    if (this.supported && this.observer) {
      this.observer.unobserve(element);
    } else {
      this.images.delete(element);
    }
  }

  loadImage(img) {
    const src = img.dataset.src;
    const srcset = img.dataset.srcset;
    const sizes = img.dataset.sizes;

    if (!src) return;

    // Create new image to preload
    const imageLoader = new Image();

    imageLoader.onload = () => {
      // Update the actual image
      img.src = src;
      if (srcset) img.srcset = srcset;
      if (sizes) img.sizes = sizes;

      // Add loaded class for animations
      img.classList.add('loaded');

      // Dispatch custom event
      img.dispatchEvent(
        new CustomEvent('lazyloaded', {
          detail: { src, srcset, sizes },
        })
      );
    };

    imageLoader.onerror = () => {
      img.classList.add('error');
      img.dispatchEvent(
        new CustomEvent('lazyloaderror', {
          detail: { src, srcset, sizes },
        })
      );
    };

    // Start loading
    imageLoader.src = src;
    if (srcset) imageLoader.srcset = srcset;
  }

  isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top >= -this.options.rootMargin.split(' ')[0].replace('px', '') &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight + Number.parseInt(this.options.rootMargin.split(' ')[0]) &&
      rect.right <= windowWidth
    );
  }

  throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.images.clear();
  }
}

// Global lazy loader instance
let globalLazyLoader = null;

export function initLazyLoading(options = {}) {
  if (typeof window === 'undefined') return;

  globalLazyLoader = new LazyLoader(options);
  return globalLazyLoader;
}

export function observeElement(element) {
  if (globalLazyLoader) {
    globalLazyLoader.observe(element);
  }
}

export function unobserveElement(element) {
  if (globalLazyLoader) {
    globalLazyLoader.unobserve(element);
  }
}

export function destroyLazyLoading() {
  if (globalLazyLoader) {
    globalLazyLoader.destroy();
    globalLazyLoader = null;
  }
}

// Svelte action for easy use in components
export function lazyLoad(node, options = {}) {
  const defaultOptions = {
    src: node.dataset.src,
    srcset: node.dataset.srcset,
    sizes: node.dataset.sizes,
  };

  const _finalOptions = { ...defaultOptions, ...options };

  // Set up lazy loading
  observeElement(node);

  return {
    destroy() {
      unobserveElement(node);
    },
  };
}

// Progressive enhancement for native lazy loading
export function enhanceNativeLazyLoading() {
  if (typeof window === 'undefined') return;

  // Check if native lazy loading is supported
  if ('loading' in HTMLImageElement.prototype) {
    // Add loading="lazy" to images without it
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach((img) => {
      if (!img.closest('picture')) {
        img.loading = 'lazy';
      }
    });
  } else {
    // Fallback to IntersectionObserver
    initLazyLoading();
  }
}

export default LazyLoader;
