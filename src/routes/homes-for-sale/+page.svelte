<script>
import { onMount } from 'svelte';

// Fixed: All form variables now use 'let' instead of 'const' for proper binding
// This ensures Svelte bind:value works correctly and prevents deployment failures

// Search and filter state
// CRITICAL: These MUST be 'let', not 'const', for Svelte bind:value to work
let priceRange = [300000, 800000];
let bedrooms = 'any';
let bathrooms = 'any';
// biome-ignore lint/correctness/noUnusedVariables: Used in template
let propertyType = 'any';
let minSqft = '';
let maxSqft = '';
let sortBy = 'price-low';
// biome-ignore lint/correctness/noUnusedVariables: Used in template
let viewMode = 'grid'; // 'grid' or 'map'
// biome-ignore lint/correctness/noUnusedVariables: Used in template
let currentPage = 1;
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const totalPages = 5;

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
let filteredProperties = sampleProperties;

// RealScout integration state
let realscoutLoaded = false;
// biome-ignore lint/correctness/noUnusedVariables: Used in template
let realscoutError = false;

// Form state
let saveSearchName = '';
let emailAlerts = '';
let showingForm = {
  name: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

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

// Initialize RealScout widget
function initializeRealScout() {
  if (typeof window !== 'undefined' && !realscoutLoaded) {
    // RealScout widget initialization placeholder
    const script = document.createElement('script');
    script.src = 'https://widgets.realscout.com/v3/widget.js';
    script.async = true;
    script.onload = () => {
      realscoutLoaded = true;
      // Initialize RealScout widget here
      console.log('RealScout widget loaded');
    };
    script.onerror = () => {
      realscoutError = true;
      console.log('RealScout widget failed to load');
    };
    document.head.appendChild(script);
  }
}

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
function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

// Initialize filters and RealScout on mount
onMount(() => {
  filterProperties();
  initializeRealScout();
});

// Watch for filter changes
$: {
  filterProperties();
}
</script>

<svelte:head>
  <title>Homes for Sale in Manzano, Las Vegas | 89121 Real Estate</title>
  <meta name="description" content="Browse homes for sale in the Manzano neighborhood of Las Vegas (89121). Find your perfect home with our comprehensive search and RealScout integration.">
  <meta name="keywords" content="homes for sale Manzano, Las Vegas real estate 89121, Manzano Peak Ave homes, Southeast Las Vegas homes, real estate listings">
</svelte:head>

<main class="min-h-screen bg-gray-50" id="main-content">
  <!-- Page Header -->
  <section class="bg-primary-600 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Homes for Sale in Manzano, Las Vegas</h1>
        <p class="text-xl text-primary-100">Find Your Perfect Home in the 89121 Area</p>
      </div>
    </div>
  </section>

  <!-- Search and Filter Bar -->
  <section class="bg-white shadow-lg py-6 sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <!-- Price Range -->
        <div class="lg:col-span-3">
          <fieldset>
            <legend class="block text-sm font-medium text-gray-700 mb-2">Price Range</legend>
            <div class="flex items-center space-x-2">
              <input
                type="number"
                bind:value={priceRange[0]}
                placeholder="Min"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                aria-label="Minimum price"
              />
              <span class="text-gray-500">to</span>
              <input
                type="number"
                bind:value={priceRange[1]}
                placeholder="Max"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                aria-label="Maximum price"
              />
            </div>
          </fieldset>
        </div>

        <!-- Bedrooms -->
        <div class="lg:col-span-2">
          <label for="bedrooms" class="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
          <select
            id="bedrooms"
            bind:value={bedrooms}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="any">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

        <!-- Bathrooms -->
        <div class="lg:col-span-2">
          <label for="bathrooms" class="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
          <select
            id="bathrooms"
            bind:value={bathrooms}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="any">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
        </div>

        <!-- Property Type -->
        <div class="lg:col-span-2">
          <label for="propertyType" class="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <select
            id="propertyType"
            bind:value={propertyType}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="any">Any Type</option>
            <option value="single-family">Single Family</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
          </select>
        </div>

        <!-- Sort -->
        <div class="lg:col-span-2">
          <label for="sortBy" class="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
          <select
            id="sortBy"
            bind:value={sortBy}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
            <option value="sqft-high">Largest First</option>
            <option value="sqft-low">Smallest First</option>
          </select>
        </div>

        <!-- View Toggle -->
        <div class="lg:col-span-1 flex items-end">
          <div class="flex border border-gray-300 rounded-md">
            <button
              class="px-3 py-2 {viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'}"
              on:click={() => viewMode = 'grid'}
              aria-label="Grid view"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              class="px-3 py-2 {viewMode === 'map' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'}"
              on:click={() => viewMode = 'map'}
              aria-label="Map view"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Square Footage Filter -->
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="minSqft" class="block text-sm font-medium text-gray-700 mb-2">Min Square Feet</label>
          <input
            id="minSqft"
            type="number"
            bind:value={minSqft}
            placeholder="Min sq ft"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        <div>
          <label for="maxSqft" class="block text-sm font-medium text-gray-700 mb-2">Max Square Feet</label>
          <input
            id="maxSqft"
            type="number"
            bind:value={maxSqft}
            placeholder="Max sq ft"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </div>
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
            <button
              on:click={handleSaveSearch}
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
              <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div class="flex">
                  <svg class="w-5 h-5 text-yellow-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                  </svg>
                  <div>
                    <h3 class="text-sm font-medium text-yellow-800">RealScout Widget Unavailable</h3>
                    <p class="text-sm text-yellow-700 mt-1">Showing sample listings below. RealScout integration coming soon.</p>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </div>

        <!-- Results Grid -->
        {#if viewMode === 'grid'}
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {#each filteredProperties as property}
              <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <!-- Property Image -->
                <div class="relative h-48 bg-gray-200">
                  <img
                    src={property.image}
                    alt={property.address}
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div class="absolute top-4 left-4">
                    <span class="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      {property.status}
                    </span>
                  </div>
                  <div class="absolute top-4 right-4">
                    <button 
                      class="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
                      aria-label="Save property to favorites"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Property Details -->
                <div class="p-6">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-semibold text-gray-900">{formatPrice(property.price)}</h3>
                    <span class="text-sm text-gray-500">{property.daysOnMarket} days on market</span>
                  </div>
                  
                  <p class="text-gray-600 mb-4">{property.address}</p>
                  
                  <div class="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      {property.beds} bed
                    </span>
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                      </svg>
                      {property.baths} bath
                    </span>
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                      </svg>
                      {property.sqft.toLocaleString()} sq ft
                    </span>
                  </div>

                  <p class="text-gray-600 text-sm mb-4">{property.description}</p>

                  <div class="flex space-x-2">
                    <button class="flex-1 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
                      View Details
                    </button>
                    <button class="flex-1 border border-primary-600 text-primary-600 px-4 py-2 rounded-md hover:bg-primary-50 transition-colors">
                      Schedule Tour
                    </button>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        {:else}
          <!-- Map View Placeholder -->
          <div class="bg-white rounded-lg shadow-lg p-8 text-center">
            <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div class="text-center text-gray-600">
                <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <p class="text-lg font-semibold">Interactive Map View</p>
                <p class="text-sm">Map integration coming soon</p>
              </div>
            </div>
          </div>
        {/if}

        <!-- Pagination -->
        <div class="mt-8 flex justify-center">
          <nav class="flex space-x-2">
            <button
              class="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
              disabled={currentPage === 1}
              on:click={() => currentPage = Math.max(1, currentPage - 1)}
            >
              Previous
            </button>
            
            {#each Array(totalPages) as _, i}
              <button
                class="px-3 py-2 {currentPage === i + 1 ? 'bg-primary-600 text-white' : 'text-gray-700 hover:bg-gray-100'} rounded-md"
                on:click={() => currentPage = i + 1}
              >
                {i + 1}
              </button>
            {/each}
            
            <button
              class="px-3 py-2 text-gray-500 hover:text-gray-700 disabled:opacity-50"
              disabled={currentPage === totalPages}
              on:click={() => currentPage = Math.min(totalPages, currentPage + 1)}
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
          <form on:submit|preventDefault={handleShowingRequest} class="space-y-4">
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
                (702) 555-0123
              </a>
              <a href="mailto:info@manzanohomes.com" class="block text-primary-600 hover:text-primary-700">
                info@manzanohomes.com
              </a>
            </div>
          </div>
        </div>

        <!-- Email Alerts -->
        <div class="bg-white rounded-lg shadow-lg p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Get Email Alerts</h3>
          <p class="text-gray-600 text-sm mb-4">Be the first to know about new listings</p>
          <form on:submit|preventDefault={handleEmailAlerts} class="space-y-3">
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
</main>
