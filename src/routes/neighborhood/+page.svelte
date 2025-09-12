<script>
import { onMount } from 'svelte';

// Testimonials data
const testimonials = [
  {
    name: 'Sarah & Mike Johnson',
    role: 'Manzano Residents since 2019',
    content:
      "We love living in Manzano! The neighborhood is quiet and family-friendly, and we're close to everything we need. The schools are excellent and our kids have made great friends here.",
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Manzano Resident since 2021',
    content:
      "The location is perfect - close to the airport for work travel, but far enough from the Strip to have peace and quiet. The community is growing and we've seen great improvements in local amenities.",
    rating: 5,
  },
  {
    name: 'Maria Rodriguez',
    role: 'Manzano Resident since 2018',
    content:
      'Manzano has been the perfect place to raise our family. The neighborhood is safe, the neighbors are friendly, and we have everything we need within a short drive. Highly recommend!',
    rating: 5,
  },
];

let currentTestimonial = 0;
/** @type {NodeJS.Timeout | null} */
let testimonialInterval;

onMount(() => {
  testimonialInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }, 5000);

  return () => {
    if (testimonialInterval) clearInterval(testimonialInterval);
  };
});

// School data
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const schools = [
  {
    name: 'Manzano Elementary School',
    type: 'Elementary',
    rating: '9/10',
    distance: '0.3 miles',
    description: 'Highly rated elementary school with excellent academic programs',
  },
  {
    name: 'Southeast Career Technical Academy',
    type: 'High School',
    rating: '8/10',
    distance: '1.2 miles',
    description: 'Career-focused high school with strong technical programs',
  },
  {
    name: 'Green Valley High School',
    type: 'High School',
    rating: '8/10',
    distance: '2.1 miles',
    description: 'Comprehensive high school with diverse academic and extracurricular offerings',
  },
];

// Shopping & Dining data
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const shopping = [
  {
    name: 'Green Valley Ranch Resort & Casino',
    type: 'Entertainment & Shopping',
    distance: '3.2 miles',
    description: 'Upscale resort with shopping, dining, and entertainment',
  },
  {
    name: 'The District at Green Valley Ranch',
    type: 'Shopping Center',
    distance: '3.5 miles',
    description: 'Outdoor shopping center with restaurants, retail, and entertainment',
  },
  {
    name: 'Henderson Pavilion',
    type: 'Cultural Venue',
    distance: '4.1 miles',
    description: 'Outdoor amphitheater hosting concerts and cultural events',
  },
];

// Parks & Recreation data
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const parks = [
  {
    name: 'Manzano Park',
    type: 'Neighborhood Park',
    distance: '0.1 miles',
    features: ['Playground', 'Walking trails', 'Picnic areas', 'Basketball court'],
  },
  {
    name: 'Sunset Park',
    type: 'Regional Park',
    distance: '2.8 miles',
    features: ['Large lake', 'Walking trails', 'Sports fields', 'Dog park', 'Botanical gardens'],
  },
  {
    name: 'Coronado Park',
    type: 'Community Park',
    distance: '1.5 miles',
    features: ['Tennis courts', 'Soccer fields', 'Playground', 'Walking paths'],
  },
];

// Market statistics (placeholder data)
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const marketStats = {
  averagePrice: '$485,000',
  medianPrice: '$475,000',
  pricePerSqFt: '$185',
  daysOnMarket: '28',
  priceChange: '+3.2%',
  inventory: '12 homes',
};
</script>

<svelte:head>
  <title>Manzano Neighborhood - Las Vegas Real Estate | 89121</title>
  <meta name="description" content="Discover the Manzano neighborhood in Southeast Las Vegas (89121). Family-friendly community with excellent schools, parks, and modern amenities. Close to major highways and the Strip.">
  <meta name="keywords" content="Manzano Las Vegas, 89121 real estate, Southeast Las Vegas, family neighborhoods, Las Vegas schools, Henderson area">
</svelte:head>

<main class="min-h-screen" id="main-content">
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">Discover the Manzano Neighborhood</h1>
        <p class="text-xl md:text-2xl mb-8 text-primary-100">Southeast Las Vegas's Premier Family Community</p>
        
        <!-- Interactive Map Placeholder -->
        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
          <div class="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div class="text-center text-gray-600">
              <svg class="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <p class="text-lg font-semibold">Interactive Map</p>
              <p class="text-sm">Centered on 3693 Manzano Peak Ave, Las Vegas, NV 89121</p>
              <p class="text-xs mt-2 text-gray-500">RealScout Map Widget Integration Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Neighborhood Overview -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Neighborhood Overview</h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto">
          Located in the heart of Southeast Las Vegas, Manzano offers the perfect blend of suburban tranquility and urban convenience. 
          This growing community is ideal for families, professionals, and anyone seeking a peaceful residential environment with easy access to the city's amenities.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Prime Location</h3>
          <p class="text-gray-600">Southeast Las Vegas, 89121 zip code</p>
        </div>

        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Easy Access</h3>
          <p class="text-gray-600">Close to I-515, I-215, and major highways</p>
        </div>

        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Convenient Distance</h3>
          <p class="text-gray-600">15 min to Strip, 10 min to McCarran Airport</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Local Schools -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Local Schools</h2>
        <p class="text-lg text-gray-600">Excellent educational opportunities for families in the Manzano area</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each schools as school}
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full">
                {school.type}
              </span>
              <span class="text-sm text-gray-500">{school.distance}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{school.name}</h3>
            <p class="text-gray-600 mb-4">{school.description}</p>
            <div class="flex items-center">
              <div class="flex text-yellow-400">
                {#each Array(5) as _, i}
                  <svg class="w-4 h-4 {i < Math.floor(Number(school.rating)) ? 'text-yellow-400' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                {/each}
              </div>
              <span class="ml-2 text-sm text-gray-600">{school.rating}</span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Shopping & Dining -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shopping & Dining</h2>
        <p class="text-lg text-gray-600">Convenient access to shopping centers, restaurants, and entertainment</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each shopping as location}
          <div class="bg-gray-50 rounded-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                {location.type}
              </span>
              <span class="text-sm text-gray-500">{location.distance}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{location.name}</h3>
            <p class="text-gray-600">{location.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Parks & Recreation -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Parks & Recreation</h2>
        <p class="text-lg text-gray-600">Beautiful parks and recreational facilities for outdoor activities</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each parks as park}
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                {park.type}
              </span>
              <span class="text-sm text-gray-500">{park.distance}</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{park.name}</h3>
            <div class="space-y-2">
              {#each park.features as feature}
                <div class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-gray-600">{feature}</span>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Lifestyle Features -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Lifestyle Features</h2>
        <p class="text-lg text-gray-600">What makes Manzano a special place to call home</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Family-Friendly</h3>
          <p class="text-gray-600">Safe, quiet streets perfect for families with children</p>
        </div>

        <div class="text-center">
          <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Modern Homes</h3>
          <p class="text-gray-600">Contemporary architecture with updated amenities</p>
        </div>

        <div class="text-center">
          <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Growing Community</h3>
          <p class="text-gray-600">Active development with new amenities and services</p>
        </div>

        <div class="text-center">
          <div class="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Quality Amenities</h3>
          <p class="text-gray-600">Well-maintained parks, schools, and community facilities</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Market Statistics -->
  <section class="py-16 bg-primary-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Market Statistics</h2>
        <p class="text-xl text-primary-100">Current real estate trends in the Manzano neighborhood</p>
      </div>

      <!-- RealScout Widget Placeholder -->
      <div class="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-12">
        <div class="text-center">
          <h3 class="text-2xl font-semibold mb-4">RealScout Market Data Widget</h3>
          <div class="bg-white/20 rounded-lg p-6">
            <p class="text-lg mb-4">Interactive market analytics coming soon</p>
            <p class="text-sm text-primary-200">Real-time pricing, trends, and neighborhood insights</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-100 mb-2">{marketStats.averagePrice}</div>
          <div class="text-sm text-primary-200">Average Price</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-100 mb-2">{marketStats.medianPrice}</div>
          <div class="text-sm text-primary-200">Median Price</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-100 mb-2">{marketStats.pricePerSqFt}</div>
          <div class="text-sm text-primary-200">Price per Sq Ft</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-100 mb-2">{marketStats.daysOnMarket}</div>
          <div class="text-sm text-primary-200">Days on Market</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-green-300 mb-2">{marketStats.priceChange}</div>
          <div class="text-sm text-primary-200">Price Change</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-100 mb-2">{marketStats.inventory}</div>
          <div class="text-sm text-primary-200">Active Listings</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Neighbors Say</h2>
        <p class="text-lg text-gray-600">Hear from families who call Manzano home</p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-lg p-8 text-center">
          <div class="flex justify-center mb-4">
            {#each Array(5) as _, i}
              <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            {/each}
          </div>
          <blockquote class="text-xl text-gray-700 mb-6 italic">
            "{testimonials[currentTestimonial].content}"
          </blockquote>
          <div class="text-gray-900 font-semibold">{testimonials[currentTestimonial].name}</div>
          <div class="text-gray-600">{testimonials[currentTestimonial].role}</div>
        </div>

        <!-- Testimonial Navigation -->
        <div class="flex justify-center mt-6 space-x-2">
          {#each testimonials as _, index}
            <button
              class="w-3 h-3 rounded-full {index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'}"
              on:click={() => currentTestimonial = index}
              aria-label="View testimonial {index + 1}"
            ></button>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Find Your Home in Manzano?</h2>
      <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Explore available homes in this beautiful neighborhood and discover why so many families choose to call Manzano home.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/homes-for-sale" class="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200">
          Explore Homes in Manzano
        </a>
        <a href="/contact" class="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 hover:text-white transition-colors duration-200">
          Get in Touch
        </a>
      </div>
    </div>
  </section>
</main>
