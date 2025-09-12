<script>
import { browser } from '$app/environment';
import { page } from '$app/stores';
import Footer from '$lib/components/Footer.svelte';
import Navigation from '$lib/components/Navigation.svelte';
import { preloadCriticalComponents } from '$lib/utils/lazyLoading.js';
import { initPerformanceMonitoring } from '$lib/utils/performance.js';
import { webVitals } from '$lib/vitals';
import '../app.css';

const analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

// Initialize analytics
$: if (browser && analyticsId) {
  webVitals({
    path: $page.url.pathname,
    params: $page.params,
    analyticsId,
  });
}

// Initialize performance monitoring
if (browser) {
  initPerformanceMonitoring();
  preloadCriticalComponents();
}

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const pageTransition = {
  duration: 300,
  css: (/** @type {number} */ t) => `
    opacity: ${t};
    transform: translateY(${20 * (1 - t)}px);
  `,
};
</script>

<!-- Navigation Component -->
<Navigation />

<!-- Main Content with Page Transitions -->
<main class="min-h-screen">
	{#key $page.url.pathname}
		<div>
			<slot />
		</div>
	{/key}
</main>

<!-- Footer Component -->
<Footer />

<!-- Google Analytics -->
{#if browser && analyticsId}
	<script>
		// Google Analytics tracking
		gtag('config', analyticsId, {
			page_title: document.title,
			page_location: window.location.href
		});
	</script>
{/if}
