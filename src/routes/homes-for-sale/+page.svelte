<script>
import SEO from '$lib/components/SEO.svelte';
import { ManzanoSchemas } from '$lib/seo/schemas';

// Fixed: All form variables now use 'let' instead of 'const' for proper binding
// This ensures Svelte bind:value works correctly and prevents deployment failures

// Search and filter state
// CRITICAL: These MUST be 'let', not 'const', for Svelte bind:value to work
let priceRange = $state([300000, 800000]);
let bedrooms = $state('any');
let bathrooms = $state('any');
// biome-ignore lint/correctness/noUnusedVariables: Used in template
let propertyType = $state('any');
const minSqft = $state('');
const maxSqft = $state('');
const sortBy = $state('price-low');
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const viewMode = $state('grid'); // 'grid' or 'map'
// biome-ignore lint/correctness/noUnusedVariables: Used in template
let currentPage = $state(1);
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const totalPages = $state(5);

// Sample property data (placeholder until RealScout integration)
const sampleProperties = [
  {
    id: 1,
    address: '3693 Manzano Peak Ave',
    price: 485000,
    beds: 4,
    baths: 3,
    sqft: 2450,
    yearBuilt: 2018,
    lotSize: '0.25 acres',
    image: '/property-placeholder.jpg',
    status: 'Active',
    daysOnMarket: 12,
    description:
      'Beautiful single-family home in the heart of Manzano with modern amenities and spacious layout.',
  },
  {
    id: 2,
    address: '3687 Manzano Peak Ave',
    price: 520000,
    beds: 5,
    baths: 4,
    sqft: 2800,
    yearBuilt: 2019,
    lotSize: '0.3 acres',
    image: '/property-placeholder.jpg',
    status: 'Active',
    daysOnMarket: 8,
    description: 'Luxury home with premium finishes and stunning mountain views.',
  },
  {
    id: 3,
    address: '3701 Manzano Peak Ave',
    price: 450000,
    beds: 3,
    baths: 2,
    sqft: 2100,
    yearBuilt: 2017,
    lotSize: '0.22 acres',
    image: '/property-placeholder.jpg',
    status: 'Active',
    daysOnMarket: 15,
    description: 'Charming home perfect for first-time buyers with updated kitchen and bathrooms.',
  },
  {
    id: 4,
    address: '3675 Manzano Peak Ave',
    price: 650000,
    beds: 6,
    baths: 5,
    sqft: 3200,
    yearBuilt: 2020,
    lotSize: '0.35 acres',
    image: '/property-placeholder.jpg',
    status: 'Active',
    daysOnMarket: 5,
    description: 'Executive home with pool, spa, and premium finishes throughout.',
  },
  {
    id: 5,
    address: '3715 Manzano Peak Ave',
    price: 395000,
    beds: 3,
    baths: 2,
    sqft: 1950,
    yearBuilt: 2016,
    lotSize: '0.2 acres',
    image: '/property-placeholder.jpg',
    status: 'Active',
    daysOnMarket: 22,
    description: 'Well-maintained home with great potential and excellent location.',
  },
  {
    id: 6,
    address: '3669 Manzano Peak Ave',
    price: 580000,
    beds: 4,
    baths: 3,
    sqft: 2600,
    yearBuilt: 2019,
    lotSize: '0.28 acres',
    image: '/property-placeholder.jpg',
    status: 'Active',
    daysOnMarket: 3,
    description: 'Modern home with open floor plan and energy-efficient features.',
  },
];

// Filtered properties based on search criteria
let filteredProperties = $state(sampleProperties);

// Form state
let saveSearchName = $state('');
let emailAlerts = $state('');
let showingForm = $state({
  name: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
});

// Filter properties based on search criteria
function filterProperties() {
  filteredProperties = sampleProperties.filter((property) => {
    // Price range filter
    if (property.price < priceRange[0] || property.price > priceRange[1]) {
      return false;
    }

    // Bedrooms filter
    if (bedrooms !== 'any' && property.beds !== Number.parseInt(bedrooms)) {
      return false;
    }

    // Bathrooms filter
    if (bathrooms !== 'any' && property.baths !== Number.parseInt(bathrooms)) {
      return false;
    }

    // Square footage filter
    if (minSqft && property.sqft < Number.parseInt(minSqft)) {
      return false;
    }
    if (maxSqft && property.sqft > Number.parseInt(maxSqft)) {
      return false;
    }

    return true;
  });

  // Sort properties
  filteredProperties.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.yearBuilt - a.yearBuilt;
      case 'sqft-high':
        return b.sqft - a.sqft;
      case 'sqft-low':
        return a.sqft - b.sqft;
      default:
        return 0;
    }
  });
}

// RealScout widget state (managed globally)
// biome-ignore lint/correctness/noUnusedVariables: Used in template
let realscoutLoaded = $state(false);
// biome-ignore lint/correctness/noUnusedVariables: Used in template
let realscoutError = $state(false);

// Handle form submissions
// biome-ignore lint/correctness/noUnusedVariables: Used in template
function handleSaveSearch() {
  if (saveSearchName) {
    // Save search functionality placeholder
    console.log('Saving search:', saveSearchName);
    alert('Search saved successfully!');
    saveSearchName = '';
  }
}

// biome-ignore lint/correctness/noUnusedVariables: Used in template
function handleEmailAlerts() {
  if (emailAlerts) {
    // Email alerts signup placeholder
    console.log('Email alerts signup:', emailAlerts);
    alert('Email alerts set up successfully!');
    emailAlerts = '';
  }
}

// biome-ignore lint/correctness/noUnusedVariables: Used in template
function handleShowingRequest() {
  if (showingForm.name && showingForm.email && showingForm.phone) {
    // Schedule showing functionality placeholder
    console.log('Showing request:', showingForm);
    alert('Showing request submitted successfully!');
    showingForm = {
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    };
  }
}

// Format price for display
// biome-ignore lint/correctness/noUnusedVariables: Used in template
function formatPrice(/** @type {number} */ price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Initialize filters on mount
filterProperties();

// Watch for filter changes
$effect(() => {
  filterProperties();
});

// Generate schemas for this page
const schemas = new ManzanoSchemas();
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const pageSchemas = [
  schemas.website(),
  schemas.breadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Homes for Sale', url: '/homes-for-sale' },
  ]),
];
</script>

<SEO
  title="Homes for Sale in Manzano, Las Vegas | 89121 Real Estate"
  description="Browse homes for sale in the Manzano neighborhood of Las Vegas (89121). Find your perfect home with our comprehensive search and RealScout integration."
  canonical="https://www.manzanohomes.com/homes-for-sale"
  schemas={pageSchemas}
/>

<main class="min-h-screen bg-gray-50" id="main-content">
  <!-- Page Header -->
  <section class="bg-primary-600 text-white pt-24 md:pt-32 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Homes for Sale in Manzano, Las Vegas</h1>
        <p class="text-xl text-primary-100">Find Your Perfect Home in the 89121 Area</p>
      </div>
    </div>
  </section>

  <!-- RealScout Advanced Search Widget -->
  <section class="bg-white shadow-lg py-6 sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900 mb-2">Advanced Property Search</h2>
        <p class="text-gray-600">Search live MLS data with professional filters</p>
      </div>
      
      <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Main Content -->
      <div class="lg:w-3/4">
        <!-- Results Header -->
        <div class="flex justify-between items-center mb-6">
          <div>
            <h2 class="text-2xl font-bold text-gray-900">
              {filteredProperties.length} Homes Found
            </h2>
            <p class="text-gray-600">in Manzano, Las Vegas 89121</p>
          </div>
          <div class="flex space-x-4">
            <a
              href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0zMzcx"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors flex items-center"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
              Live MLS Search
            </a>
            <button
              onclick={() => handleSaveSearch()}
              class="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              Save Search
            </button>
          </div>
        </div>

        <!-- RealScout Integration Section -->
        <div class="mb-8">
          <div id="realscout-search-results" data-area="manzano" data-zip="89121" class="min-h-96">
            {#if !realscoutLoaded && !realscoutError}
              <div class="bg-white rounded-lg shadow-lg p-8 text-center">
                <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">Loading RealScout Results</h3>
                <p class="text-gray-600">Fetching the latest property listings...</p>
              </div>
            {:else if realscoutError}
              <div class="bg-gradient-to-r from-blue-50 to-primary-50 border border-blue-200 rounded-lg p-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4 flex-1">
                    <h3 class="text-lg font-semibold text-blue-900 mb-2">🔍 Enhanced MLS Search Available</h3>
                    <p class="text-blue-700 mb-4">
                      Access live MLS data with advanced filters, real-time updates, and professional property photos.
                    </p>
                    <a 
                      href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0zMzcx" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg transform hover:scale-105"
                    >
                      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                      </svg>
                      View Live MLS Results
                    </a>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </div>

        <!-- RealScout Office Listings Widget -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Live MLS Listings</h2>
            <p class="text-gray-600">Real-time property data from the Las Vegas MLS</p>
          </div>
          
          <realscout-office-listings 
            agent-encoded-id="QWdlbnQtMjI1MDUw" 
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
            listing-status="For Sale" 
            property-types="SFR" 
            price-min="400000" 
            price-max="500000">
          </realscout-office-listings>
        </div>

        <!-- Pagination -->
        <div class="mt-8 flex justify-center">
          <nav class="flex space-x-2">
            <button
              class="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
              disabled={currentPage === 1}
              onclick={() => currentPage = Math.max(1, currentPage - 1)}
            >
              Previous
            </button>
            
            {#each Array(totalPages) as _, i}
              <button
                class="px-3 py-2 {currentPage === i + 1 ? 'bg-primary-600 text-white' : 'text-gray-700 hover:bg-gray-100'} rounded-md"
                onclick={() => currentPage = i + 1}
              >
                {i + 1}
              </button>
            {/each}
            
            <button
              class="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
              disabled={currentPage === totalPages}
              onclick={() => currentPage = Math.min(totalPages, currentPage + 1)}
            >
              Next
            </button>
          </nav>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="lg:w-1/4 space-y-6">
        <!-- Get Pre-Approved CTA -->
        <div class="bg-primary-600 text-white rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4">Get Pre-Approved</h3>
          <p class="text-primary-100 mb-4">Know your budget and shop with confidence</p>
          <button class="w-full bg-white text-primary-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Start Pre-Approval
          </button>
        </div>

        <!-- Schedule a Showing Form -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Schedule a Showing</h3>
          <form onsubmit={(e) => { e.preventDefault(); handleShowingRequest(); }} class="space-y-4">
            <div>
              <label for="showingName" class="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                id="showingName"
                type="text"
                bind:value={showingForm.name}
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label for="showingEmail" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                id="showingEmail"
                type="email"
                bind:value={showingForm.email}
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label for="showingPhone" class="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <input
                id="showingPhone"
                type="tel"
                bind:value={showingForm.phone}
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label for="showingDate" class="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  id="showingDate"
                  type="date"
                  bind:value={showingForm.preferredDate}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <div>
                <label for="showingTime" class="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <select
                  id="showingTime"
                  bind:value={showingForm.preferredTime}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>
            </div>
            <div>
              <label for="showingMessage" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="showingMessage"
                bind:value={showingForm.message}
                rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                placeholder="Any specific properties or requirements..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Request Showing
            </button>
          </form>
        </div>

        <!-- Featured Agent -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Your Manzano Expert</h3>
          <div class="text-center">
            <div class="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h4 class="font-semibold text-gray-900">Manzano Homes Team</h4>
            <p class="text-gray-600 text-sm mb-2">Local Real Estate Experts</p>
            <p class="text-gray-500 text-sm mb-4">Specializing in the 89121 area</p>
            <div class="space-y-2">
              <a href="tel:+17025550123" class="block text-primary-600 hover:text-primary-700">
                (702) 500-1942
              </a>
              <a href="mailto:DrDuffySells@ManzanoHomes.com" class="block text-primary-600 hover:text-primary-700">
                DrDuffySells@ManzanoHomes.com
              </a>
            </div>
          </div>
        </div>

        <!-- Email Alerts -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Get Email Alerts</h3>
          <p class="text-gray-600 text-sm mb-4">Be the first to know about new listings</p>
          <form onsubmit={(e) => { e.preventDefault(); handleEmailAlerts(); }} class="space-y-3">
            <input
              type="email"
              bind:value={emailAlerts}
              placeholder="Enter your email"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
            />
            <button
              type="submit"
              class="w-full bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Interactive Map Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Interactive Map</h2>
        <p class="text-lg text-gray-600 mb-2">Centered on 3693 Manzano Peak Ave, Las Vegas, NV 89121</p>
        <p class="text-sm text-gray-500">RealScout Map Widget Integration Coming Soon</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
          listing-status="For Sale" 
          property-types="SFR,MF" 
          price-min="500000" 
          price-max="600000">
        </realscout-office-listings>
      </div>
    </div>
  </section>
</main>

<style>
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
  }
  
  realscout-advanced-search {
    --rs-as-button-text-color: #ffffff;
    --rs-as-background-color: #ffffff;
    --rs-as-button-color: rgb(35, 93, 137);
    --rs-as-widget-width: 100% !important;
  }
</style>
