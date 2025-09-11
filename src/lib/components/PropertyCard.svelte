<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const {
  property = {
    id: '',
    address: '',
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    squareFeet: 0,
    lotSize: 0,
    yearBuilt: 0,
    images: [],
    features: [],
    status: 'for-sale',
    daysOnMarket: 0,
    mlsNumber: '',
    description: '',
    agent: {
      name: '',
      phone: '',
      email: '',
    },
  },
  showActions = true,
  size = 'default',
} = $props();

// biome-ignore lint/correctness/noUnusedVariables: Used in template
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// biome-ignore lint/correctness/noUnusedVariables: Used in template
function formatSqft(sqft) {
  return sqft.toLocaleString();
}

// biome-ignore lint/correctness/noUnusedVariables: Used in template
function handleCardClick() {
  dispatch('click', { property });
}

// Handle favorite toggle
function handleFavorite(event) {
  event.stopPropagation();
  dispatch('favorite', { property, favorited: !property.favorited });
}

// Handle schedule showing
function handleScheduleShowing(event) {
  event.stopPropagation();
  dispatch('scheduleShowing', { property });
}

// Handle contact agent
function handleContactAgent(event) {
  event.stopPropagation();
  dispatch('contactAgent', { property });
}

// Get status color
function getStatusColor(status) {
  switch (status) {
    case 'for-sale':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'sold':
      return 'bg-gray-100 text-gray-800';
    case 'off-market':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

// Get status text
function getStatusText(status) {
  switch (status) {
    case 'for-sale':
      return 'For Sale';
    case 'pending':
      return 'Pending';
    case 'sold':
      return 'Sold';
    case 'off-market':
      return 'Off Market';
    default:
      return 'Available';
  }
}
</script>

<div
  class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group {size === 'large' ? 'max-w-sm' : size === 'compact' ? 'max-w-xs' : 'max-w-sm'}"
  on:click={handleCardClick}
  on:keydown={(e) => e.key === 'Enter' && handleCardClick()}
  role="button"
  tabindex="0"
  aria-label="View property details for {property.address}"
>
  <!-- Image Container -->
  <div class="relative aspect-w-16 aspect-h-12 overflow-hidden">
    {#if property.images && property.images.length > 0}
      <img
        src={property.images[0]}
        alt={property.address}
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    {:else}
      <div class="w-full h-48 bg-gray-200 flex items-center justify-center">
        <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      </div>
    {/if}
    
    <!-- Status Badge -->
    <div class="absolute top-3 left-3">
      <span class="px-2 py-1 text-xs font-medium rounded-full {getStatusColor(property.status)}">
        {getStatusText(property.status)}
      </span>
    </div>
    
    <!-- Favorite Button -->
    {#if showActions}
      <button
        class="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-colors duration-200"
        on:click={handleFavorite}
        aria-label={property.favorited ? 'Remove from favorites' : 'Add to favorites'}
      >
        <svg
          class="w-5 h-5 {property.favorited ? 'text-red-500 fill-current' : 'text-gray-600'}"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      </button>
    {/if}
    
    <!-- Days on Market -->
    {#if property.daysOnMarket > 0}
      <div class="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
        {property.daysOnMarket} days on market
      </div>
    {/if}
  </div>

  <!-- Content -->
  <div class="p-4">
    <!-- Price -->
    <div class="text-2xl font-bold text-gray-900 mb-2">
      {formatCurrency(property.price)}
    </div>
    
    <!-- Address -->
    <div class="text-sm text-gray-600 mb-3 line-clamp-1">
      {property.address}
    </div>
    
    <!-- Property Details -->
    <div class="flex items-center space-x-4 text-sm text-gray-500 mb-3">
      <div class="flex items-center space-x-1">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
        <span>{property.bedrooms} bed</span>
      </div>
      <div class="flex items-center space-x-1">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"/>
        </svg>
        <span>{property.bathrooms} bath</span>
      </div>
      <div class="flex items-center space-x-1">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
        </svg>
        <span>{formatSqft(property.squareFeet)} sqft</span>
      </div>
    </div>
    
    <!-- Features -->
    {#if property.features && property.features.length > 0}
      <div class="flex flex-wrap gap-1 mb-3">
        {#each property.features.slice(0, 3) as feature}
          <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
            {feature}
          </span>
        {/each}
        {#if property.features.length > 3}
          <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
            +{property.features.length - 3} more
          </span>
        {/if}
      </div>
    {/if}
    
    <!-- Description -->
    {#if property.description && size !== 'compact'}
      <p class="text-sm text-gray-600 mb-4 line-clamp-2">
        {property.description}
      </p>
    {/if}
    
    <!-- Actions -->
    {#if showActions}
      <div class="flex space-x-2">
        <button
          class="flex-1 bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
          on:click={handleScheduleShowing}
        >
          Schedule Showing
        </button>
        <button
          class="flex-1 border border-primary-600 text-primary-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-50 transition-colors duration-200"
          on:click={handleContactAgent}
        >
          Contact Agent
        </button>
      </div>
    {/if}
  </div>
</div>

<style>
  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .aspect-w-16 {
    position: relative;
    padding-bottom: 75%; /* 16:12 aspect ratio */
  }
  
  .aspect-h-12 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>