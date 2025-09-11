<script>
import OptimizedImage from './OptimizedImage.svelte';

/**
 * @typedef {Object} Property
 * @property {string} id - Property ID
 * @property {string} title - Property title
 * @property {string} address - Property address
 * @property {number} price - Property price
 * @property {number} bedrooms - Number of bedrooms
 * @property {number} bathrooms - Number of bathrooms
 * @property {number} sqft - Square footage
 * @property {string} image - Property image path
 * @property {string} status - Property status (for-sale, sold, pending)
 */

/** @type {Property} */
const { property: _property, className: _className = '' } = $props();

// Format price for display
const _formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Get status color
const _getStatusColor = (status) => {
  switch (status) {
    case 'for-sale':
      return 'bg-green-100 text-green-800';
    case 'sold':
      return 'bg-red-100 text-red-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
</script>

<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 {className}" {...restProps}>
  <!-- Property Image -->
  <div class="relative h-48 overflow-hidden">
    <OptimizedImage
      src={property.image}
      alt={property.title}
      type="property"
      className="w-full h-full object-cover"
      sizes="(min-width: 1200px) 400px, (min-width: 768px) 300px, 100vw"
    />
    
    <!-- Status Badge -->
    <div class="absolute top-4 left-4">
      <span class="px-2 py-1 text-xs font-semibold rounded-full {getStatusColor(property.status)}">
        {property.status.replace('-', ' ').toUpperCase()}
      </span>
    </div>
    
    <!-- Price Badge -->
    <div class="absolute top-4 right-4">
      <span class="px-3 py-1 text-sm font-bold text-white bg-primary-600 rounded-full">
        {formatPrice(property.price)}
      </span>
    </div>
  </div>
  
  <!-- Property Details -->
  <div class="p-6">
    <h3 class="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
    <p class="text-gray-600 mb-4">{property.address}</p>
    
    <!-- Property Features -->
    <div class="flex items-center justify-between text-sm text-gray-500">
      <div class="flex items-center space-x-4">
        <span class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          {property.bedrooms} bed
        </span>
        <span class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd" />
          </svg>
          {property.bathrooms} bath
        </span>
        <span class="flex items-center">
          <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          {property.sqft.toLocaleString()} sqft
        </span>
      </div>
    </div>
    
    <!-- View Details Button -->
    <button class="w-full mt-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
      View Details
    </button>
  </div>
</div>
