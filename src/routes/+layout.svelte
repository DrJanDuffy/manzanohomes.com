<script>
import { browser } from '$app/environment';
import { page } from '$app/stores';
import { preloadCriticalComponents } from '$lib/utils/lazyLoading.js';
import { initPerformanceMonitoring } from '$lib/utils/performance.js';
import { webVitals } from '$lib/vitals';
import '../app.css';

const analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;
let mobileMenuOpen = false;

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
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
}
</script>

<!-- Navigation Header -->
<header class="bg-white shadow-lg sticky top-0 z-50" role="banner">
	<nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
		<div class="flex justify-between items-center h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="flex items-center space-x-2">
					<img
						src="/logo-manzano.png"
						alt="Manzano Homes Logo"
						class="h-8 w-auto"
						fetchpriority="high"
					/>
					<span class="text-2xl font-bold text-primary-600">Manzano Homes</span>
				</a>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:block">
				<div class="ml-10 flex items-baseline space-x-8">
					<a href="/" class="text-gray-900 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200" data-sveltekit-preload-data="hover">
						Home
					</a>
					<a href="/neighborhood" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200" data-sveltekit-preload-data="hover">
						Neighborhood
					</a>
					<a href="/homes-for-sale" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200" data-sveltekit-preload-data="hover">
						Homes for Sale
					</a>
					<a href="/home-valuation" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200" data-sveltekit-preload-data="hover">
						Home Valuation
					</a>
					<a href="/contact" class="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200" data-sveltekit-preload-data="hover">
						Contact
					</a>
				</div>
			</div>

			<!-- Mobile menu button -->
			<div class="md:hidden">
				<button
					on:click={toggleMobileMenu}
					class="text-gray-600 hover:text-primary-600 focus:outline-none focus:text-primary-600"
					aria-label="Toggle mobile menu"
					aria-controls="mobile-menu"
					aria-expanded={mobileMenuOpen}
				>
					<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation Menu -->
		{#if mobileMenuOpen}
			<div id="mobile-menu" class="md:hidden" role="menu" aria-label="Mobile navigation menu">
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
					<a href="/" class="text-gray-900 hover:text-primary-600 block px-3 py-2 text-base font-medium" role="menuitem">
						Home
					</a>
					<a href="/neighborhood" class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium" role="menuitem">
						Neighborhood
					</a>
					<a href="/homes-for-sale" class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium" role="menuitem">
						Homes for Sale
					</a>
					<a href="/home-valuation" class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium" role="menuitem">
						Home Valuation
					</a>
					<a href="/contact" class="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium" role="menuitem">
						Contact
					</a>
				</div>
			</div>
		{/if}
	</nav>
</header>

<main class="flex-1">
	<slot />
</main>

<!-- Footer -->
<footer class="bg-gray-900 text-white" role="contentinfo">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Company Info -->
			<div>
				<h3 class="text-xl font-bold mb-4">Manzano Homes</h3>
				<p class="text-gray-300 mb-4">
					Your trusted partner in finding the perfect home in the beautiful Manzano neighborhood of Las Vegas.
				</p>
				<div class="text-gray-300">
					<p class="font-semibold">Address:</p>
					<p>3693 Manzano Peak Ave</p>
					<p>Las Vegas, NV 89121</p>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="text-xl font-bold mb-4">Quick Links</h3>
				<ul class="space-y-2">
					<li><a href="/" class="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
					<li><a href="/neighborhood" class="text-gray-300 hover:text-white transition-colors duration-200">Neighborhood</a></li>
					<li><a href="/homes-for-sale" class="text-gray-300 hover:text-white transition-colors duration-200">Homes for Sale</a></li>
					<li><a href="/home-valuation" class="text-gray-300 hover:text-white transition-colors duration-200">Home Valuation</a></li>
					<li><a href="/contact" class="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h3 class="text-xl font-bold mb-4">Contact Us</h3>
				<div class="space-y-2 text-gray-300">
					<p>📞 (702) 555-0123</p>
					<p>✉️ info@manzanohomes.com</p>
					<p>🕒 Mon-Fri: 9AM-6PM</p>
					<p>🕒 Sat-Sun: 10AM-4PM</p>
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
			<p>&copy; 2024 Manzano Homes. All rights reserved. | Licensed Real Estate Professional</p>
		</div>
	</div>
</footer>
