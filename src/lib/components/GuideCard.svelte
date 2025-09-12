<script lang="ts">
interface GuideData {
  url: string;
  title: string;
  description: string;
  icon: 'book' | 'document' | 'calculator' | 'home';
  variant: 'hero' | 'compact' | 'featured';
  audience: 'buyer' | 'seller' | 'first-time-buyer';
}

export let guide: GuideData;
export const className = '';

// Icon paths for different guide types
const iconPaths = {
  book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  document:
    'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  calculator:
    'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
  home: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
};

// Variant-specific styling
const variantClasses = {
  hero: 'max-w-lg mx-auto',
  compact: 'max-w-2xl',
  featured: 'max-w-2xl mx-auto',
};

// Audience-specific labels
const audienceLabels = {
  'first-time-buyer': 'First-Time Buyer?',
  buyer: 'Featured Resource',
  seller: 'Featured Guide',
};

// Analytics tracking
// biome-ignore lint/correctness/noUnusedVariables: Used in onclick handler
function trackGuideClick() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'guide_click', {
      guide_type: guide.audience,
      guide_title: guide.title,
      page_location: window.location.href,
    });
  }
}

$: iconPath = iconPaths[guide.icon];
$: variantClass = variantClasses[guide.variant];
$: audienceLabel = audienceLabels[guide.audience];
</script>

<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 {variantClass} {className}">
  <div class="flex items-center {guide.variant === 'featured' ? 'justify-center' : ''} mb-3">
    <svg class="w-5 h-5 text-primary-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={iconPath} />
    </svg>
    <span class="text-sm font-medium text-primary-200 uppercase tracking-wide">{audienceLabel}</span>
  </div>
  
  <h3 class="text-lg font-semibold text-white mb-2 {guide.variant === 'featured' ? 'text-center' : ''}">{guide.title}</h3>
  <p class="text-primary-100 mb-4 text-sm {guide.variant === 'featured' ? 'text-center' : ''}">{guide.description}</p>
  
  <a 
    href={guide.url} 
    target="_blank" 
    rel="noopener noreferrer"
    class="{guide.variant === 'hero' ? 'block w-full text-center' : 'inline-flex items-center'} px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors focus:ring-4 focus:ring-primary-200"
    aria-label="Access {guide.title} from Simplifying the Market (opens in new tab)"
    onclick={trackGuideClick}
  >
    View {guide.audience === 'first-time-buyer' ? 'First-Time Buyer' : guide.audience === 'seller' ? 'Seller' : 'Buyer'} Guide
    <svg class="w-4 h-4 ml-2 {guide.variant === 'hero' ? 'inline' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
    </svg>
  </a>
</div>

<!-- TypeScript declaration -->
<script lang="ts" context="module">
  declare global {
    interface Window {
      gtag?: (...args: unknown[]) => void;
    }
  }
</script>
