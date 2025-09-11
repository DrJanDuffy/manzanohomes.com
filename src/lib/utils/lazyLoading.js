/**
 * Lazy loading utilities for real estate website
 * Implements selective loading for non-essential components
 */

/**
 * Lazy load a component with loading state
 * @param {Function} importFn - Function that returns a dynamic import
 * @param {Object} options - Loading options
 * @returns {Object} Component with loading state
 */
export function lazyLoad(importFn, options = {}) {
  const { errorFallback = null, timeout = 10000 } = options;

  return {
    component: null,
    loading: true,
    error: null,

    async load() {
      try {
        const startTime = performance.now();

        // Set timeout for loading
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Loading timeout')), timeout);
        });

        // Load component
        const module = await Promise.race([importFn(), timeoutPromise]);
        const endTime = performance.now();

        // Record loading performance
        if (typeof window !== 'undefined' && window.performanceMonitor) {
          window.performanceMonitor.recordMetric('component_load', {
            value: endTime - startTime,
            name: 'component_load_time',
          });
        }

        this.component = module.default;
        this.loading = false;

        return this.component;
      } catch (error) {
        console.error('Failed to load component:', error);
        this.error = error;
        this.loading = false;

        if (errorFallback) {
          this.component = errorFallback;
        }

        throw error;
      }
    },

    get fallback() {
      return fallback;
    },

    get errorFallback() {
      return errorFallback;
    },
  };
}

/**
 * Intersection Observer for lazy loading
 */
class LazyLoader {
  constructor(options = {}) {
    this.options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
      ...options,
    };

    this.observer = null;
    this.elements = new Map();

    this.init();
  }

  init() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.options);
  }

  handleIntersection(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const element = entry.target;
        const callback = this.elements.get(element);

        if (callback) {
          callback();
          this.unobserve(element);
        }
      }
    }
  }

  observe(element, callback) {
    if (!this.observer) return;

    this.elements.set(element, callback);
    this.observer.observe(element);
  }

  unobserve(element) {
    if (!this.observer) return;

    this.elements.delete(element);
    this.observer.unobserve(element);
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
      this.elements.clear();
    }
  }
}

// Create singleton instance
export const lazyLoader = new LazyLoader();

/**
 * Lazy load component when element comes into view
 * @param {HTMLElement} element - Element to observe
 * @param {Function} importFn - Function that returns a dynamic import
 * @param {Object} options - Loading options
 */
export function lazyLoadOnIntersection(element, importFn, options = {}) {
  if (!element) return;

  const { errorFallback = null, timeout = 10000 } = options;

  // Show fallback immediately
  if (fallback && element) {
    element.innerHTML = fallback;
  }

  lazyLoader.observe(element, async () => {
    try {
      const startTime = performance.now();

      // Set timeout for loading
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Loading timeout')), timeout);
      });

      // Load component
      const module = await Promise.race([importFn(), timeoutPromise]);
      const endTime = performance.now();

      // Record loading performance
      if (typeof window !== 'undefined' && window.performanceMonitor) {
        window.performanceMonitor.recordMetric('lazy_component_load', {
          value: endTime - startTime,
          name: 'lazy_component_load_time',
        });
      }

      // Render component
      if (element && module.default) {
        element.innerHTML = '';
        element.appendChild(module.default);
      }
    } catch (error) {
      console.error('Failed to lazy load component:', error);

      if (errorFallback && element) {
        element.innerHTML = errorFallback;
      }
    }
  });
}

/**
 * Preload component for faster loading
 * @param {Function} importFn - Function that returns a dynamic import
 */
export function preloadComponent(importFn) {
  if (typeof window === 'undefined') return;

  // Preload during idle time
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      importFn().catch(console.error);
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      importFn().catch(console.error);
    }, 100);
  }
}

/**
 * Real estate specific lazy loading
 */
export const RealEstateLazyLoading = {
  // Real estate components will be added when needed
};

/**
 * Preload critical real estate components
 */
export function preloadCriticalComponents() {
  if (typeof window === 'undefined') return;

  // Preload components that are likely to be needed
  preloadComponent(RealEstateLazyLoading.propertySearch);
  preloadComponent(RealEstateLazyLoading.contactForm);
}

/**
 * Lazy load based on user interaction
 * @param {HTMLElement} trigger - Element that triggers loading
 * @param {Function} importFn - Function that returns a dynamic import
 * @param {Object} options - Loading options
 */
export function lazyLoadOnInteraction(trigger, importFn, options = {}) {
  if (!trigger) return;

  const { event = 'click', errorFallback = null, timeout = 10000 } = options;

  let loaded = false;

  const loadComponent = async () => {
    if (loaded) return;
    loaded = true;

    try {
      const startTime = performance.now();

      // Set timeout for loading
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Loading timeout')), timeout);
      });

      // Load component
      const module = await Promise.race([importFn(), timeoutPromise]);
      const endTime = performance.now();

      // Record loading performance
      if (typeof window !== 'undefined' && window.performanceMonitor) {
        window.performanceMonitor.recordMetric('interaction_component_load', {
          value: endTime - startTime,
          name: 'interaction_component_load_time',
        });
      }

      // Render component
      if (module.default) {
        trigger.innerHTML = '';
        trigger.appendChild(module.default);
      }
    } catch (error) {
      console.error('Failed to load component on interaction:', error);

      if (errorFallback) {
        trigger.innerHTML = errorFallback;
      }
    }
  };

  trigger.addEventListener(event, loadComponent, { once: true });
}
