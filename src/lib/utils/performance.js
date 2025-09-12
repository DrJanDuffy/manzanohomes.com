/**
 * Performance monitoring utilities for real estate website
 * Tracks Core Web Vitals and custom metrics
 */

import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';

/**
 * Performance metrics configuration
 */
export const PERFORMANCE_CONFIG = {
  // Core Web Vitals thresholds
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  FID: { good: 100, poor: 300 }, // First Input Delay
  CLS: { good: 0.1, poor: 0.25 }, // Cumulative Layout Shift

  // Additional metrics
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte
};

/**
 * Custom performance metrics for real estate
 */
export const REAL_ESTATE_METRICS = {
  PROPERTY_IMAGE_LOAD: 'property_image_load',
  SEARCH_RESULTS_LOAD: 'search_results_load',
  MAP_INTERACTION: 'map_interaction',
  FORM_SUBMISSION: 'form_submission',
  PROPERTY_DETAILS_LOAD: 'property_details_load',
};

/**
 * Performance monitoring class
 */
class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.observers = new Map();
    this.isEnabled = typeof window !== 'undefined' && 'performance' in window;
  }

  /**
   * Initialize performance monitoring
   */
  init() {
    if (!this.isEnabled) return;

    // Monitor Core Web Vitals
    this.monitorWebVitals();

    // Monitor custom real estate metrics
    this.monitorRealEstateMetrics();

    // Monitor resource loading
    this.monitorResourceLoading();
  }

  /**
   * Monitor Core Web Vitals
   */
  monitorWebVitals() {
    getCLS((metric) => this.recordMetric('CLS', metric));
    getFID((metric) => this.recordMetric('FID', metric));
    getFCP((metric) => this.recordMetric('FCP', metric));
    getLCP((metric) => this.recordMetric('LCP', metric));
    getTTFB((metric) => this.recordMetric('TTFB', metric));
  }

  /**
   * Monitor real estate specific metrics
   */
  monitorRealEstateMetrics() {
    // Monitor property image loading
    this.observePropertyImages();

    // Monitor search performance
    this.observeSearchPerformance();

    // Monitor form submissions
    this.observeFormSubmissions();
  }

  /**
   * Monitor resource loading performance
   */
  monitorResourceLoading() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            this.analyzeResource(entry);
          }
        }
      });

      observer.observe({ entryTypes: ['resource'] });
      this.observers.set('resource', observer);
    }
  }

  /**
   * Observe property image loading
   */
  observePropertyImages() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // Check if LCP is a property image
            const lcpEntry = /** @type {any} */ (entry);
            if (lcpEntry.element?.tagName === 'IMG' && lcpEntry.element?.src?.includes('property')) {
              this.recordMetric(REAL_ESTATE_METRICS.PROPERTY_IMAGE_LOAD, {
                value: entry.startTime,
                name: 'property_image_lcp',
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.set('lcp', observer);
    }
  }

  /**
   * Observe search performance
   */
  observeSearchPerformance() {
    // This would be implemented when search functionality is added
    console.log('Search performance monitoring ready');
  }

  /**
   * Observe form submissions
   */
  observeFormSubmissions() {
    // Monitor contact form submissions
    document.addEventListener('submit', (event) => {
      if (event.target && event.target instanceof HTMLElement && event.target.matches('form')) {
        const startTime = performance.now();

        event.target.addEventListener(
          'submit',
          () => {
            const endTime = performance.now();
            this.recordMetric(REAL_ESTATE_METRICS.FORM_SUBMISSION, {
              value: endTime - startTime,
              name: 'form_submission_time',
            });
          },
          { once: true }
        );
      }
    });
  }

  /**
   * Analyze resource loading performance
   */
  analyzeResource(/** @type {PerformanceEntry} */ entry) {
    const { name, duration } = entry;
    const transferSize = /** @type {any} */ (entry).transferSize || 0;

    // Flag slow resources
    if (duration > 1000) {
      console.warn(`Slow resource: ${name} took ${duration}ms`);
    }

    // Flag large resources
    if (transferSize > 100000) {
      // 100KB
      console.warn(`Large resource: ${name} is ${transferSize} bytes`);
    }

    // Record image loading metrics
    if (name.match(/\.(jpg|jpeg|png|gif|webp|avif)$/)) {
      this.recordMetric('image_load', {
        value: duration,
        name: 'image_load_time',
        url: name,
        size: transferSize,
      });
    }
  }

  /**
   * Record a performance metric
   */
  recordMetric(/** @type {string} */ name, /** @type {any} */ metric) {
    this.metrics.set(name, metric);

    // Log to console in development
    if (import.meta.env.DEV) {
      console.log(`Performance metric: ${name}`, metric);
    }

    // Send to analytics in production
    if (import.meta.env.PROD) {
      this.sendToAnalytics(name, metric);
    }
  }

  /**
   * Send metrics to analytics
   */
  sendToAnalytics(/** @type {string} */ name, /** @type {any} */ metric) {
    // This would integrate with your analytics service
    // For example, Google Analytics 4 custom events
    if (typeof /** @type {any} */ (globalThis).gtag !== 'undefined') {
      /** @type {any} */ (globalThis).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: metric.value,
        metric_id: metric.id,
      });
    }
  }

  /**
   * Get performance report
   */
  getReport() {
    const report = /** @type {Record<string, any>} */ ({});

    for (const [name, metric] of this.metrics) {
      report[/** @type {string} */ (name)] = {
        value: metric.value,
        rating: this.getRating(name, metric.value),
        timestamp: Date.now(),
      };
    }

    return report;
  }

  /**
   * Get performance rating
   */
  getRating(/** @type {string} */ metricName, /** @type {number} */ value) {
    const config = PERFORMANCE_CONFIG[/** @type {keyof typeof PERFORMANCE_CONFIG} */ (metricName)];
    if (!config) return 'unknown';

    if (value <= config.good) return 'good';
    if (value <= config.poor) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Cleanup observers
   */
  cleanup() {
    for (const observer of this.observers.values()) {
      observer.disconnect();
    }
    this.observers.clear();
  }
}

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor();

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring() {
  if (typeof window !== 'undefined') {
    performanceMonitor.init();
  }
}

/**
 * Measure custom performance metric
 */
export function measurePerformance(/** @type {string} */ name, /** @type {() => any} */ fn) {
  if (!performanceMonitor.isEnabled) {
    return fn();
  }

  const start = performance.now();
  const result = fn();
  const end = performance.now();

  performanceMonitor.recordMetric(name, {
    value: end - start,
    name: `${name}_duration`,
  });

  return result;
}

/**
 * Measure async performance metric
 */
export async function measureAsyncPerformance(/** @type {string} */ name, /** @type {() => Promise<any>} */ fn) {
  if (!performanceMonitor.isEnabled) {
    return await fn();
  }

  const start = performance.now();
  const result = await fn();
  const end = performance.now();

  performanceMonitor.recordMetric(name, {
    value: end - start,
    name: `${name}_duration`,
  });

  return result;
}
