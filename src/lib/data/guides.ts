/**
 * Centralized guide configuration for Simplifying the Market resources
 * Optimized for maintainability and easy updates
 */

export interface GuideConfig {
  id: string;
  url: string;
  title: string;
  description: string;
  icon: 'book' | 'document' | 'calculator' | 'home';
  audience: 'buyer' | 'seller' | 'first-time-buyer';
  affiliateId: string;
  pages: string[];
  priority: number;
}

// Base affiliate URL template
const AFFILIATE_BASE = 'https://www.simplifyingthemarket.com/en';
const AFFILIATE_ID = '956758-ef2edda2f940e018328655620ea05f18';

/**
 * All available guides configuration
 * Priority: 1 = highest (homepage), 3 = lowest (secondary pages)
 */
export const GUIDES: Record<string, GuideConfig> = {
  FIRST_TIME_BUYER: {
    id: 'first-time-buyer',
    url: `${AFFILIATE_BASE}/fthb/?a=${AFFILIATE_ID}`,
    title: 'Complete First-Time Buyer Guide',
    description: 'Everything you need to know about buying your first home in Las Vegas',
    icon: 'book',
    audience: 'first-time-buyer',
    affiliateId: AFFILIATE_ID,
    pages: ['homepage'],
    priority: 1,
  },
  BUYER: {
    id: 'buyer',
    url: `${AFFILIATE_BASE}/buyers/?a=${AFFILIATE_ID}`,
    title: 'Complete Home Buying Guide',
    description:
      'Comprehensive market insights and expert guidance for first-time and experienced buyers',
    icon: 'book',
    audience: 'buyer',
    affiliateId: AFFILIATE_ID,
    pages: ['buying-guide', 'blog'],
    priority: 2,
  },
  SELLER: {
    id: 'seller',
    url: `${AFFILIATE_BASE}/sellers/?a=${AFFILIATE_ID}`,
    title: 'Complete Home Selling Guide',
    description:
      "Comprehensive market insights and expert strategies for maximizing your home's value",
    icon: 'document',
    audience: 'seller',
    affiliateId: AFFILIATE_ID,
    pages: ['selling-guide'],
    priority: 2,
  },
};

/**
 * Get guides for a specific page
 */
export function getGuidesForPage(pageId: string): GuideConfig[] {
  return Object.values(GUIDES)
    .filter((guide) => guide.pages.includes(pageId))
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Get guide by ID
 */
export function getGuideById(id: string): GuideConfig | undefined {
  return GUIDES[id];
}

/**
 * Get all guides sorted by priority
 */
export function getAllGuides(): GuideConfig[] {
  return Object.values(GUIDES).sort((a, b) => a.priority - b.priority);
}

/**
 * Analytics event data for guide interactions
 */
export interface GuideAnalytics {
  guideId: string;
  pageId: string;
  variant: 'hero' | 'compact' | 'featured';
  audience: string;
  clickTimestamp: number;
}

/**
 * Track guide interaction for analytics
 */
export function trackGuideInteraction(
  guideId: string,
  pageId: string,
  variant: 'hero' | 'compact' | 'featured'
): void {
  const guide = getGuideById(guideId);
  if (!guide) return;

  const analytics: GuideAnalytics = {
    guideId,
    pageId,
    variant,
    audience: guide.audience,
    clickTimestamp: Date.now(),
  };

  // Send to analytics (Google Analytics 4)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'guide_interaction', {
      guide_type: guide.audience,
      guide_title: guide.title,
      page_location: window.location.href,
      variant,
      custom_parameters: analytics,
    });
  }

  // Store in localStorage for conversion tracking
  if (typeof window !== 'undefined') {
    const interactions = JSON.parse(localStorage.getItem('guide_interactions') || '[]');
    interactions.push(analytics);
    // Keep only last 10 interactions
    if (interactions.length > 10) {
      interactions.splice(0, interactions.length - 10);
    }
    localStorage.setItem('guide_interactions', JSON.stringify(interactions));
  }
}

// TypeScript declaration for window object
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
