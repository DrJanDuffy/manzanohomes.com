<script>
import SEO from '$lib/components/SEO.svelte';
import { ManzanoSchemas } from '$lib/seo/schemas.js';
import { onMount } from 'svelte';

// RealScout Widget Script Loading
onMount(() => {
  // Load RealScout Web Components
  const script = document.createElement('script');
  script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
  script.type = 'module';
  document.head.appendChild(script);
});

// Generate schemas
const schemas = new ManzanoSchemas();
const _pageSchemas = [
  schemas.website(),
  schemas.breadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ]),
];

// Company values and mission
const _values = [
  {
    title: 'Local Expertise',
    description: 'Deep knowledge of the Manzano neighborhood and Las Vegas market',
    icon: 'location',
  },
  {
    title: 'Client-First Approach',
    description: "Every decision is made with our clients' best interests in mind",
    icon: 'heart',
  },
  {
    title: 'Technology Integration',
    description: 'Cutting-edge tools and platforms for seamless real estate transactions',
    icon: 'tech',
  },
  {
    title: 'Proven Results',
    description: 'Track record of successful transactions and satisfied clients',
    icon: 'success',
  },
];

// Team statistics
const _stats = [
  { number: '500+', label: 'Homes Sold' },
  { number: '15+', label: 'Years Experience' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
];
</script>

<SEO 
  title="About Manzano Homes | Las Vegas Real Estate Experts | 89121"
  description="Learn about Manzano Homes, your trusted real estate partner in Las Vegas. Local expertise, proven results, and client-first approach in the 89121 area."
  canonical="https://www.manzanohomes.com/about"
  image="/og-default.jpg"
  schemas={pageSchemas}
/>

<main class="min-h-screen bg-gray-50" id="main-content">
  <!-- Hero Section -->
  <section class="bg-gradient-primary text-white pt-24 md:pt-32 pb-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">About Manzano Homes</h1>
        <p class="text-xl text-primary-100 mb-6">Your Trusted Real Estate Partner in Las Vegas</p>
        <p class="text-lg text-primary-200">Serving the Manzano neighborhood with expertise, integrity, and results</p>
      </div>
    </div>
  </section>

  <!-- Company Story -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <p class="text-lg text-gray-600 leading-relaxed">
          Founded with a passion for helping families find their perfect home in the Manzano neighborhood, 
          Manzano Homes has become the premier real estate agency in Southeast Las Vegas. Our deep local 
          knowledge, combined with cutting-edge technology and personalized service, ensures every client 
          receives exceptional care throughout their real estate journey.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {#each stats as stat}
          <div class="text-center">
            <div class="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
            <div class="text-gray-600">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Our Values -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
        <p class="text-lg text-gray-600">The principles that guide everything we do</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each values as value}
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              {#if value.icon === 'location'}
                <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
              {:else if value.icon === 'heart'}
                <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path>
                </svg>
              {:else if value.icon === 'tech'}
                <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
              {:else if value.icon === 'success'}
                <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              {/if}
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
            <p class="text-gray-600">{value.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Featured Properties Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Premium Manzano Properties</h2>
        <p class="text-lg text-gray-600">See the quality homes we help our clients find</p>
      </div>
      
      <div class="bg-gray-50 rounded-lg shadow-lg p-8">
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
          listing-status="For Sale" 
          property-types="SFR" 
          price-min="450000" 
          price-max="550000">
        </realscout-office-listings>
      </div>
    </div>
  </section>

  <!-- Mission Statement -->
  <section class="py-16 bg-primary-600 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
      <p class="text-xl text-primary-100 leading-relaxed">
        To provide exceptional real estate services that help families find their perfect home in the Manzano 
        neighborhood, while building lasting relationships based on trust, integrity, and results. We are 
        committed to making every real estate transaction smooth, successful, and satisfying.
      </p>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
      <p class="text-lg text-gray-600 mb-8">
        Let us help you find your dream home in the Manzano neighborhood or sell your current property with confidence.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/homes-for-sale" class="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200">
          Browse Homes
        </a>
        <a href="/contact" class="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 hover:text-white transition-colors duration-200">
          Get in Touch
        </a>
      </div>
    </div>
  </section>
</main>

<style>
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
  }
</style>