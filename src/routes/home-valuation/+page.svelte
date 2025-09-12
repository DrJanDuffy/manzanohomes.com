<script>
import { onMount } from 'svelte';

// Form state - using let for proper Svelte binding
let currentStep = 1;
const totalSteps = 4;

// Step 1 - Property Address
let streetAddress = '';
let unitNumber = '';
/** @type {string[]} */
let addressSuggestions = [];
let _showSuggestions = false;

// Step 2 - Home Details
const bedrooms = '';
const bathrooms = '';
const squareFeet = '';
const _lotSize = '';
const yearBuilt = '';
const _propertyType = 'single-family';

// Step 3 - Condition & Features
const overallCondition = 'good';
const recentRenovations = [];
const specialFeatures = [];

// Step 4 - Contact Information
const contactName = '';
const contactEmail = '';
const contactPhone = '';
const sellingTimeframe = '';

// Results
/** @type {number | null} */
let estimatedValue = null;
let _valueRange = { min: 0, max: 0 };
/** @type {Array<{price: number, address: string, beds: number, baths: number, sqft: number, yearBuilt: number, daysOnMarket: number}>} */
let _comparableHomes = [];
// biome-ignore lint/correctness/noUnusedVariables: Used in template
let formSubmitted = false;
let _isCalculating = false;

// Form validation
/** @type {Record<string, string>} */
let errors = {};

// Manzano area address suggestions
const manzanoAddresses = [
  '3693 Manzano Peak Ave',
  '3687 Manzano Peak Ave',
  '3701 Manzano Peak Ave',
  '3675 Manzano Peak Ave',
  '3715 Manzano Peak Ave',
  '3669 Manzano Peak Ave',
];

// Recent renovations options
const _renovationOptions = ['Kitchen', 'Bathrooms', 'Flooring', 'Roof', 'HVAC', 'Windows'];

// Special features options
const _specialFeatureOptions = [
  'Swimming Pool',
  'Solar Panels',
  'Smart Home Features',
  'Mountain Views',
];

// Sample comparable homes data
const sampleComparables = [
  {
    address: '3687 Manzano Peak Ave',
    price: 520000,
    beds: 5,
    baths: 4,
    sqft: 2800,
    yearBuilt: 2019,
    daysOnMarket: 8,
  },
  {
    address: '3701 Manzano Peak Ave',
    price: 450000,
    beds: 3,
    baths: 2,
    sqft: 2100,
    yearBuilt: 2017,
    daysOnMarket: 15,
  },
];

// Address suggestions
// biome-ignore lint/correctness/noUnusedVariables: Used in template
function handleAddressInput() {
  if (streetAddress.length > 2) {
    addressSuggestions = manzanoAddresses.filter((addr) =>
      addr.toLowerCase().includes(streetAddress.toLowerCase())
    );
    _showSuggestions = addressSuggestions.length > 0;
  } else {
    _showSuggestions = false;
  }
}

// biome-ignore lint/correctness/noUnusedVariables: Used in template
function selectAddress(/** @type {string} */ address) {
  streetAddress = address;
  _showSuggestions = false;
}

// Form validation
function validateStep(/** @type {number} */ step) {
  errors = {};

  switch (step) {
    case 1:
      if (!streetAddress.trim()) {
        errors.streetAddress = 'Street address is required';
      }
      break;
    case 2:
      if (!bedrooms) errors.bedrooms = 'Number of bedrooms is required';
      if (!bathrooms) errors.bathrooms = 'Number of bathrooms is required';
      if (!squareFeet) errors.squareFeet = 'Square footage is required';
      if (!yearBuilt) errors.yearBuilt = 'Year built is required';
      break;
    case 3:
      // No required fields in step 3
      break;
    case 4:
      if (!contactName.trim()) errors.contactName = 'Name is required';
      if (!contactEmail.trim()) errors.contactEmail = 'Email is required';
      if (!contactPhone.trim()) errors.contactPhone = 'Phone is required';
      if (!sellingTimeframe) errors.sellingTimeframe = 'Selling timeframe is required';
      break;
  }

  return Object.keys(errors).length === 0;
}

// Navigation functions
// biome-ignore lint/correctness/noUnusedVariables: Used in template
function nextStep() {
  if (validateStep(currentStep)) {
    if (currentStep < totalSteps) {
      currentStep++;
    } else {
      submitForm();
    }
  }
}

// biome-ignore lint/correctness/noUnusedVariables: Used in template
function prevStep() {
  if (currentStep > 1) {
    currentStep--;
  }
}

// Form submission
async function submitForm() {
  _isCalculating = true;

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Calculate estimated value based on form data
  const baseValue = Number.parseInt(squareFeet) * 200; // Base $200/sqft
  const bedroomBonus = Number.parseInt(bedrooms) * 10000;
  const bathroomBonus = Number.parseInt(bathrooms) * 15000;
  const conditionMultiplier =
    overallCondition === 'excellent' ? 1.1 : overallCondition === 'good' ? 1.0 : 0.9;
  const renovationBonus = recentRenovations.length * 5000;
  const featureBonus = specialFeatures.length * 3000;

  estimatedValue = Math.round(
    (baseValue + bedroomBonus + bathroomBonus + renovationBonus + featureBonus) *
      conditionMultiplier
  );
  _valueRange = {
    min: Math.round(estimatedValue * 0.9),
    max: Math.round(estimatedValue * 1.1),
  };

  _comparableHomes = sampleComparables;
  formSubmitted = true;
  _isCalculating = false;
}

// Format currency
// biome-ignore lint/correctness/noUnusedVariables: Used in template
function formatCurrency(/** @type {number} */ amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Initialize RealScout widget
function initializeRealScout() {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://widgets.realscout.com/v3/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('RealScout home valuation widget loaded');
    };
    document.head.appendChild(script);
  }
}

onMount(() => {
  initializeRealScout();
});
</script>

<svelte:head>
  <title>Free Home Valuation - Manzano, Las Vegas | 89121 Area</title>
  <meta name="description" content="Get a free, instant home value estimate for your Manzano property. Professional valuation with comparable sales and market trends for 89121 area.">
</svelte:head>

<main class="min-h-screen bg-gray-50" id="main-content">
  <!-- Hero Section -->
  <section class="relative bg-primary-600 text-white py-20">
    <div class="absolute inset-0">
      <img
        src="/hero-manzano.jpg"
        alt="Beautiful Manzano neighborhood in Las Vegas"
        class="w-full h-full object-cover opacity-20"
        fetchpriority="high"
        loading="eager"
      />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">What's Your Manzano Home Worth?</h1>
      <p class="text-xl md:text-2xl text-primary-100 mb-8">Get a Free, Instant Home Value Estimate</p>
      <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
        <p class="text-lg">Professional valuation based on recent sales, market trends, and your home's unique features in the 89121 area.</p>
      </div>
    </div>
  </section>

  <!-- Progress Indicator -->
  <section class="bg-white shadow-sm py-4">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        {#each Array(totalSteps) as _, i}
          <div class="flex items-center">
            <div class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
              {currentStep > i + 1 ? 'bg-green-500 text-white' : 
               currentStep === i + 1 ? 'bg-primary-600 text-white' : 
               'bg-gray-300 text-gray-600'}">
              {i + 1}
            </div>
            {#if i < totalSteps - 1}
              <div class="w-16 h-1 mx-2 {currentStep > i + 1 ? 'bg-green-500' : 'bg-gray-300'}"></div>
            {/if}
          </div>
        {/each}
      </div>
      <div class="mt-2 text-center">
        <span class="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
      </div>
    </div>
  </section>

  <!-- Valuation Form -->
  <section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {#if !formSubmitted}
        <form on:submit|preventDefault={nextStep} class="bg-white rounded-lg shadow-lg p-8">
          <!-- Step 1: Property Address -->
          {#if currentStep === 1}
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Property Address</h2>
            
            <div class="space-y-6">
              <div>
                <label for="streetAddress" class="block text-sm font-medium text-gray-700 mb-2">
                  Street Address *
                </label>
                <div class="relative">
                  <input
                    id="streetAddress"
                    type="text"
                    bind:value={streetAddress}
                    on:input={handleAddressInput}
                    placeholder="Enter your street address"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.streetAddress ? 'border-red-500' : ''}"
                    required
                  />
                  {#if _showSuggestions}
                    <div class="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1">
                      {#each addressSuggestions as suggestion}
                        <button
                          type="button"
                          class="w-full text-left px-3 py-2 hover:bg-gray-100"
                          on:click={() => selectAddress(suggestion)}
                        >
                          {suggestion}
                        </button>
                      {/each}
                    </div>
                  {/if}
                </div>
                {#if errors.streetAddress}
                  <p class="mt-1 text-sm text-red-600">{errors.streetAddress}</p>
                {/if}
              </div>

              <div>
                <label for="unitNumber" class="block text-sm font-medium text-gray-700 mb-2">
                  Unit/Apartment Number
                </label>
                <input
                  id="unitNumber"
                  type="text"
                  bind:value={unitNumber}
                  placeholder="Unit 2A, Apt 101, etc. (optional)"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
          {/if}

          <!-- Step 2: Home Details -->
          {#if currentStep === 2}
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Home Details</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="bedrooms" class="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms *
                </label>
                <select
                  id="bedrooms"
                  bind:value={bedrooms}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.bedrooms ? 'border-red-500' : ''}"
                  required
                >
                  <option value="">Select bedrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6+</option>
                </select>
                {#if errors.bedrooms}
                  <p class="mt-1 text-sm text-red-600">{errors.bedrooms}</p>
                {/if}
              </div>

              <div>
                <label for="bathrooms" class="block text-sm font-medium text-gray-700 mb-2">
                  Bathrooms *
                </label>
                <select
                  id="bathrooms"
                  bind:value={bathrooms}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.bathrooms ? 'border-red-500' : ''}"
                  required
                >
                  <option value="">Select bathrooms</option>
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4+</option>
                </select>
                {#if errors.bathrooms}
                  <p class="mt-1 text-sm text-red-600">{errors.bathrooms}</p>
                {/if}
              </div>

              <div>
                <label for="squareFeet" class="block text-sm font-medium text-gray-700 mb-2">
                  Square Footage *
                </label>
                <input
                  id="squareFeet"
                  type="number"
                  bind:value={squareFeet}
                  placeholder="e.g., 2500"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.squareFeet ? 'border-red-500' : ''}"
                  required
                />
                {#if errors.squareFeet}
                  <p class="mt-1 text-sm text-red-600">{errors.squareFeet}</p>
                {/if}
              </div>

              <div>
                <label for="yearBuilt" class="block text-sm font-medium text-gray-700 mb-2">
                  Year Built *
                </label>
                <input
                  id="yearBuilt"
                  type="number"
                  bind:value={yearBuilt}
                  placeholder="e.g., 2018"
                  min="1900"
                  max="2024"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.yearBuilt ? 'border-red-500' : ''}"
                  required
                />
                {#if errors.yearBuilt}
                  <p class="mt-1 text-sm text-red-600">{errors.yearBuilt}</p>
                {/if}
              </div>
            </div>
          {/if}

          <!-- Step 3: Condition & Features -->
          {#if currentStep === 3}
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Condition & Features</h2>
            
            <div class="space-y-8">
              <div>
                <div class="block text-sm font-medium text-gray-700 mb-4">
                  Overall Condition
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {#each ['excellent', 'good', 'fair'] as condition}
                    <label class="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 {overallCondition === condition ? 'border-primary-500 bg-primary-50' : 'border-gray-300'}">
                      <input
                        type="radio"
                        bind:group={overallCondition}
                        value={condition}
                        class="sr-only"
                      />
                      <div class="flex-1">
                        <div class="font-medium capitalize">{condition}</div>
                        <div class="text-sm text-gray-600">
                          {condition === 'excellent' ? 'Like new, no issues' : 
                           condition === 'good' ? 'Minor wear, well maintained' : 
                           'Some updates needed'}
                        </div>
                      </div>
                    </label>
                  {/each}
                </div>
              </div>

              <div>
                <div class="block text-sm font-medium text-gray-700 mb-4">
                  Recent Renovations (select all that apply)
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {#each _renovationOptions as option}
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        bind:group={recentRenovations}
                        value={option}
                        class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">{option}</span>
                    </label>
                  {/each}
                </div>
              </div>

              <div>
                <div class="block text-sm font-medium text-gray-700 mb-4">
                  Special Features (select all that apply)
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {#each _specialFeatureOptions as option}
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        bind:group={specialFeatures}
                        value={option}
                        class="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span class="ml-2 text-sm text-gray-700">{option}</span>
                    </label>
                  {/each}
                </div>
              </div>
            </div>
          {/if}

          <!-- Step 4: Contact Information -->
          {#if currentStep === 4}
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            
            <div class="space-y-6">
              <div>
                <label for="contactName" class="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="contactName"
                  type="text"
                  bind:value={contactName}
                  placeholder="Enter your full name"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.contactName ? 'border-red-500' : ''}"
                  required
                />
                {#if errors.contactName}
                  <p class="mt-1 text-sm text-red-600">{errors.contactName}</p>
                {/if}
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="contactEmail" class="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    bind:value={contactEmail}
                    placeholder="your@email.com"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.contactEmail ? 'border-red-500' : ''}"
                    required
                  />
                  {#if errors.contactEmail}
                    <p class="mt-1 text-sm text-red-600">{errors.contactEmail}</p>
                  {/if}
                </div>

                <div>
                  <label for="contactPhone" class="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="contactPhone"
                    type="tel"
                    bind:value={contactPhone}
                    placeholder="(702) 555-0123"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.contactPhone ? 'border-red-500' : ''}"
                    required
                  />
                  {#if errors.contactPhone}
                    <p class="mt-1 text-sm text-red-600">{errors.contactPhone}</p>
                  {/if}
                </div>
              </div>

              <div>
                <label for="sellingTimeframe" class="block text-sm font-medium text-gray-700 mb-2">
                  When are you planning to sell? *
                </label>
                <select
                  id="sellingTimeframe"
                  bind:value={sellingTimeframe}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 {errors.sellingTimeframe ? 'border-red-500' : ''}"
                  required
                >
                  <option value="">Select timeframe</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="1-year-plus">1+ years</option>
                  <option value="just-curious">Just curious</option>
                </select>
                {#if errors.sellingTimeframe}
                  <p class="mt-1 text-sm text-red-600">{errors.sellingTimeframe}</p>
                {/if}
              </div>

              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="text-sm text-gray-600">
                  <strong>Privacy Notice:</strong> Your information is secure and will only be used to provide your home valuation. We will not share your personal information with third parties without your consent.
                </p>
              </div>
            </div>
          {/if}

          <!-- Navigation Buttons -->
          <div class="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              on:click={prevStep}
              class="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 {currentStep === 1 ? 'invisible' : ''}"
            >
              Previous
            </button>
            
            <button
              type="submit"
              class="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {currentStep === totalSteps ? 'Get My Valuation' : 'Next Step'}
            </button>
          </div>
        </form>
      {/if}

      <!-- Results Display -->
      {#if formSubmitted}
        <div class="bg-white rounded-lg shadow-lg p-8">
          {#if _isCalculating}
            <div class="text-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Calculating Your Home Value</h3>
              <p class="text-gray-600">Analyzing recent sales and market trends...</p>
            </div>
          {:else}
            <!-- Estimated Value -->
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-4">Your Estimated Home Value</h2>
              <div class="text-5xl font-bold text-primary-600 mb-2">
                {formatCurrency(estimatedValue || 0)}
              </div>
              <div class="text-lg text-gray-600">
                Range: {formatCurrency(_valueRange.min)} - {formatCurrency(_valueRange.max)}
              </div>
            </div>

            <!-- RealScout Widget -->
            <div class="mb-8">
              <div id="realscout-home-value" class="min-h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <div class="text-center text-gray-600">
                  <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
                  <p>Loading RealScout valuation widget...</p>
                </div>
              </div>
            </div>

            <!-- Comparable Homes -->
            <div class="mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Recent Sales in Manzano</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {#each _comparableHomes as home}
                  <div class="border border-gray-200 rounded-lg p-4">
                    <div class="font-semibold text-lg text-gray-900">{formatCurrency(home.price)}</div>
                    <div class="text-sm text-gray-600 mb-2">{home.address}</div>
                    <div class="text-sm text-gray-500">
                      {home.beds} bed • {home.baths} bath • {home.sqft.toLocaleString()} sqft
                    </div>
                    <div class="text-sm text-gray-500">
                      Built {home.yearBuilt} • {home.daysOnMarket} days on market
                    </div>
                  </div>
                {/each}
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="text-center space-y-4">
              <button class="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 mr-4">
                Get Professional Valuation
              </button>
              <button class="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50">
                Schedule Home Tour
              </button>
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </section>
</main>