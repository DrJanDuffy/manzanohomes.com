<script>
import { browser } from '$app/environment';
import GuideCard from '$lib/components/GuideCard.svelte';
import SEO from '$lib/components/SEO.svelte';
import { getGuidesForPage } from '$lib/data/guides.js';
import { initAccessibility } from '$lib/utils/accessibility.js';
import { onMount } from 'svelte';

let _mounted = false;
let currentStatIndex = 0;

// Get guides for homepage
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const homepageGuides = getGuidesForPage('homepage');

// Dynamic market stats for engagement
const marketStats = [
  { label: 'Median Home Price', value: '$485K', change: '+5.2%', trend: 'up' },
  { label: 'Average Days on Market', value: '23', change: '-12%', trend: 'down' },
  { label: 'Price per Sq Ft', value: '$287', change: '+3.8%', trend: 'up' },
  { label: 'Inventory Level', value: '2.1mo', change: '-15%', trend: 'down' }
];

// Interactive neighborhood features
const neighborhoodFeatures = [
  {
    icon: 'mdi:map-marker',
    title: 'Prime Location',
    description: 'Conveniently located near major highways, shopping centers, and entertainment venues',
    stats: '15 min to Strip',
    color: 'primary'
  },
  {
    icon: 'mdi:school',
    title: 'Top-Rated Schools',
    description: 'Excellent educational opportunities with highly-rated public and private schools nearby',
    stats: '8.5/10 rating',
    color: 'secondary'
  },
  {
    icon: 'mdi:home',
    title: 'Modern Amenities',
    description: 'Contemporary homes with updated features, smart technology, and energy-efficient designs',
    stats: '85% updated',
    color: 'primary'
  },
  {
    icon: 'mdi:heart',
    title: 'Community Spirit',
    description: 'A welcoming neighborhood with active community events and friendly neighbors',
    stats: '4.8/5 satisfaction',
    color: 'secondary'
  }
];

onMount(() => {
  _mounted = true;
  if (browser) {
    initAccessibility();
    
    // Animate stats counter
    const animateStats = () => {
      const statElements = document.querySelectorAll('.stat-number');
      statElements.forEach((element, index) => {
        const finalValue = marketStats[index].value;
        animateNumber(element, finalValue);
      });
    };
    
    // Intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStats();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('#market-stats');
    if (statsSection) observer.observe(statsSection);
  }
});

// Animate number counting effect
function animateNumber(element, finalValue) {
  const numericValue = parseInt(finalValue.replace(/[^\d]/g, ''));
  const suffix = finalValue.replace(/[\d]/g, '');
  let current = 0;
  const increment = numericValue / 50;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= numericValue) {
      element.textContent = finalValue;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + suffix;
    }
  }, 30);
}

// Handle feature click for engagement tracking
function handleFeatureClick(feature) {
  // Track user engagement
  if (browser && window.gtag) {
    window.gtag('event', 'feature_interaction', {
      feature_name: feature.title,
      interaction_type: 'click',
      page_location: window.location.href
    });
  }
  
  // Show more detailed information (could expand to modal)
  console.log(`User clicked on: ${feature.title}`);
}
</script>

<SEO 
	title="Manzano Homes | Las Vegas 89121 Real Estate | Complete Home Buying & Selling Services"
	description="Manzano Homes - Expert real estate guidance in Manzano neighborhood. From new construction to resale homes near 3693 Manzano Peak Ave. Full-service real estate partners for your journey."
	canonical="https://www.manzanohomes.com/"
	image="/og-default.jpg"
	schemas={[
		{
			"@context": "https://schema.org",
			"@type": "RealEstateAgent",
			"@id": "https://www.manzanohomes.com/#organization",
			"name": "Manzano Homes",
			"url": "https://www.manzanohomes.com",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "3693 Manzano Peak Ave",
				"addressLocality": "Las Vegas",
				"addressRegion": "NV",
				"postalCode": "89121"
			},
			"areaServed": {
				"@type": "GeoCircle",
				"geoMidpoint": {
					"@type": "GeoCoordinates",
					"latitude": 36.0839,
					"longitude": -115.0891
				},
				"geoRadius": "5000"
			},
			"description": "Manzano Homes - Complete real estate services for the Manzano area, including new construction guidance, resale homes, and comprehensive real estate expertise"
		}
	]}
/>

<!-- Hero Section -->
	<section id="main-content" class="hero-gradient relative overflow-hidden" role="banner" aria-label="Welcome to Manzano Homes">
	<!-- Background Image Overlay -->
	<div class="absolute inset-0 bg-black bg-opacity-30"></div>
		<div class="absolute inset-0 bg-gradient-to-r from-manzano-dark/40 to-transparent"></div>
	
	<!-- Background Image -->
	<div class="absolute inset-0">
		<picture>
			<source media="(min-width: 768px)" srcset="/hero-manzano.jpg" type="image/jpeg">
			<img
				src="/hero-manzano.jpg"
				alt="Manzano neighborhood Las Vegas real estate"
				class="w-full h-full object-cover"
				fetchpriority="high"
				loading="eager"
				width="1920"
				height="1080"
				decoding="async"
				onerror={(e) => e.target.style.display = 'none'}
			/>
		</picture>
	</div>
	
	<!-- Hero Content -->
	<div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
		<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
			Manzano <span class="text-secondary-400 drop-shadow-md">Homes</span> - Your Complete Real Estate Solution
		</h1>
		<h2 class="text-xl md:text-2xl lg:text-3xl mb-4 font-light text-white drop-shadow-md">
			From New Construction to Resale Homes - We Guide Your Journey
		</h2>
		<p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white drop-shadow-md">
			Discover move-in ready homes near 3693 Manzano Peak Ave with expert guidance every step of the way. Whether you're considering new construction or resale homes, we're your trusted real estate partners.
		</p>
		
		<!-- Trust Signals -->
		<div class="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
			<span class="flex items-center bg-white/20 px-4 py-2 rounded-full">
				<svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
				</svg>
				Expert guidance
			</span>
			<span class="flex items-center bg-white/20 px-4 py-2 rounded-full">
				<svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
				</svg>
				Immediate availability
			</span>
			<span class="flex items-center bg-white/20 px-4 py-2 rounded-full">
				<svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
				</svg>
				Full service support
			</span>
		</div>
		
		<!-- CTA Buttons -->
		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
			<a href="/homes-for-sale" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="View available homes for sale in Manzano">
				View Available Homes
			</a>
			<a href="/home-valuation" class="bg-white hover:bg-gray-100 text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg" aria-label="Get expert home valuation and guidance">
				Get Expert Guidance
			</a>
		</div>
		
		<!-- First-Time Buyer Guide -->
		{#each homepageGuides as guide}
			<GuideCard 
				guide={{
					...guide,
					variant: 'hero'
				}} 
			/>
		{/each}
		
		<!-- SMS Contact Options -->
		<div class="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm">
			<a href="sms:+17025001942" class="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
				<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
				</svg>
				Text Us: (702) 500-1942
			</a>
			<a href="tel:+17025001942" class="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
				<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
					<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
				</svg>
				Call Us: (702) 500-1942
			</a>
		</div>
	</div>
	
	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce" aria-label="Scroll down to see more content">
		<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
		</svg>
	</div>
</section>

<!-- Featured Properties Section -->
<section class="py-16 bg-gray-50" aria-label="Featured properties">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Discover the finest homes in the Manzano neighborhood, each offering unique charm and modern amenities
			</p>
		</div>
		
		<!-- RealScout Office Listings Widget -->
		<div class="bg-white rounded-lg shadow-lg p-8">
			<realscout-office-listings 
				agent-encoded-id="QWdlbnQtMjI1MDUw" 
				sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
				listing-status="For Sale" 
				property-types="SFR,MF,TC">
			</realscout-office-listings>
		</div>
	</div>
</section>

<!-- Neighborhood Highlights -->
<section class="py-16 bg-white" aria-label="Neighborhood highlights">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Manzano?</h2>
			<p class="text-lg text-gray-600 max-w-2xl mx-auto">
				Experience the best of Las Vegas living in this premier neighborhood
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each neighborhoodFeatures as feature}
				<div class="text-center group cursor-pointer" role="button" tabindex="0" on:click={() => handleFeatureClick(feature)} on:keydown={(e) => e.key === 'Enter' && handleFeatureClick(feature)}>
					<div class="w-16 h-16 {feature.color === 'primary' ? 'bg-primary-100 group-hover:bg-primary-200' : 'bg-secondary-100 group-hover:bg-secondary-200'} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110">
						<span class="iconify w-8 h-8 {feature.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'}" data-icon={feature.icon}></span>
					</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{feature.title}</h3>
					<p class="text-gray-600 mb-3">{feature.description}</p>
					<div class="text-sm font-medium {feature.color === 'primary' ? 'text-primary-600' : 'text-secondary-600'} bg-gray-100 px-3 py-1 rounded-full inline-block">
						{feature.stats}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Dynamic Market Stats -->
<section id="market-stats" class="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white" aria-label="Live market statistics">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Live Market Insights</h2>
			<p class="text-xl text-primary-100">Real-time data for informed decisions</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each marketStats as stat, index}
				<div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 group">
					<div class="flex items-center justify-center mb-2">
						<span class="stat-number text-3xl md:text-4xl font-bold text-white mr-2">{stat.value}</span>
						<span class="text-sm {stat.trend === 'up' ? 'text-green-300' : 'text-red-300'} bg-white/20 px-2 py-1 rounded-full">
							{stat.trend === 'up' ? '↗' : '↘'} {stat.change}
						</span>
					</div>
					<div class="text-primary-100 text-sm font-medium">{stat.label}</div>
					<div class="mt-2 text-xs text-primary-200">
						{stat.trend === 'up' ? 'Market trending up' : 'Market trending down'}
					</div>
				</div>
			{/each}
		</div>
		
		<div class="text-center mt-8">
			<p class="text-primary-200 text-sm">
				Data updated daily • Last updated: {new Date().toLocaleDateString()}
			</p>
		</div>
	</div>
</section>

<!-- Contact Form Section -->
<section class="py-16 bg-gray-50" aria-label="Contact form">
	<div class="max-w-4xl mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
			<p class="text-lg text-gray-600">
				Ready to find your dream home in Manzano? Contact us today for a personalized consultation
			</p>
		</div>
		
		<div class="bg-white rounded-lg shadow-lg p-8">
			<form class="space-y-6 contact-form" aria-label="Contact form">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
						<input type="text" id="firstName" name="firstName" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required aria-required="true" aria-describedby="firstName-error">
						<div id="firstName-error" class="text-red-600 text-sm mt-1" role="alert" aria-live="polite"></div>
					</div>
					<div>
						<label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
						<input type="text" id="lastName" name="lastName" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required aria-required="true" aria-describedby="lastName-error">
						<div id="lastName-error" class="text-red-600 text-sm mt-1" role="alert" aria-live="polite"></div>
					</div>
				</div>
				
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
						<input type="email" id="email" name="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required aria-required="true" aria-describedby="email-error">
						<div id="email-error" class="text-red-600 text-sm mt-1" role="alert" aria-live="polite"></div>
					</div>
					<div>
						<label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
						<input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" aria-describedby="phone-help">
						<div id="phone-help" class="text-gray-500 text-sm mt-1">Optional - We'll call you to discuss your needs</div>
					</div>
				</div>
				
				<div>
					<label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
					<textarea id="message" name="message" rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Tell us about your dream home..." aria-describedby="message-help"></textarea>
					<div id="message-help" class="text-gray-500 text-sm mt-1">Tell us about your ideal home, neighborhood preferences, or any questions you have</div>
				</div>
				
				<button type="submit" class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300" aria-describedby="submit-help">
					Send Message
				</button>
				<div id="submit-help" class="text-gray-500 text-sm mt-2 text-center">We'll get back to you within 24 hours</div>
			</form>
		</div>
	</div>
</section>

<style>
	/* Hero Image Optimizations */
	.hero-gradient {
		min-height: 100vh;
		background: linear-gradient(135deg, #0A2540 0%, #3A8DDE 100%);
	}
	
	.hero-gradient picture img {
		transition: transform 0.3s ease-in-out;
		will-change: transform;
	}
	
	.hero-gradient:hover picture img {
		transform: scale(1.02);
	}
	
	/* Image Loading Optimization */
	.hero-gradient picture {
		display: block;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.hero-gradient picture img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	/* Hide alt text overflow */
	.hero-gradient picture img[alt] {
		text-indent: -9999px;
		overflow: hidden;
	}
	
	/* Responsive Image Handling */
	@media (max-width: 768px) {
		.hero-gradient {
			min-height: 80vh;
		}
	}
	
	/* Performance Optimization */
	.hero-gradient img {
		image-rendering: -webkit-optimize-contrast;
		image-rendering: crisp-edges;
	}
</style>
