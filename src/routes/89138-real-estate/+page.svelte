<script>
import { onMount } from 'svelte';
import SEO from '$lib/components/SEO.svelte';

// Zip code data
const zipData = {
  zip: '89138',
  city: 'Las Vegas',
  state: 'NV',
  area: 'Southwest Las Vegas',
  description:
    'Southwest Las Vegas 89138 is a vibrant community known for its diverse neighborhoods, excellent schools, and convenient access to major employment centers. This area offers a mix of established communities and new developments.',
  established: '1980s',
  totalHomes: '4,100+',
  averagePrice: '$465,000',
  medianPrice: '$455,000',
  priceRange: '$350,000 - $900,000',
  homeTypes: ['Single Family', 'Townhomes', 'Condos', 'New Construction'],
  walkScore: '70',
  schoolRating: '8.3/10',
  crimeRate: 'Low',
  commuteTime: '12 min to Strip',
};

// Key features
const _keyFeatures = [
  {
    title: 'Diverse Community',
    description: 'Mix of established neighborhoods and new developments with various home styles',
    icon: 'mdi:home-group',
  },
  {
    title: 'Top Schools',
    description: 'Highly-rated public and private schools serving the 89138 area',
    icon: 'mdi:school',
  },
  {
    title: 'Central Location',
    description: 'Easy access to I-15, I-215, and major employment centers',
    icon: 'mdi:map-marker',
  },
  {
    title: 'Family-Friendly',
    description: 'Safe neighborhoods with parks, playgrounds, and community events',
    icon: 'mdi:heart',
  },
  {
    title: 'Modern Amenities',
    description: 'Contemporary homes with smart technology and updated features',
    icon: 'mdi:home',
  },
  {
    title: 'Recreation',
    description: 'Close to parks, golf courses, and outdoor recreation opportunities',
    icon: 'mdi:tree',
  },
];

// Schools data
const _schools = [
  {
    name: 'Southwest Career and Technical Academy',
    type: 'High School',
    rating: '8/10',
    distance: '1.2 miles',
    description: 'Career-focused high school with strong technical programs',
  },
  {
    name: 'Southwest Career and Technical Academy Elementary',
    type: 'Elementary',
    rating: '9/10',
    distance: '0.8 miles',
    description: 'Highly rated elementary school with excellent academic programs',
  },
  {
    name: 'Desert Pines High School',
    type: 'High School',
    rating: '7/10',
    distance: '2.1 miles',
    description: 'Comprehensive high school with diverse academic offerings',
  },
  {
    name: 'Canyon Springs High School',
    type: 'High School',
    rating: '8/10',
    distance: '2.8 miles',
    description: 'Well-established high school with strong sports and arts programs',
  },
];

// Shopping & Dining
const _shopping = [
  {
    name: 'Southwest Career and Technical Academy',
    type: 'Shopping Center',
    distance: '1.5 miles',
    description: 'Large shopping center with major retailers, restaurants, and entertainment',
  },
  {
    name: 'Aliante Casino + Hotel',
    type: 'Entertainment',
    distance: '3.8 miles',
    description: 'Casino resort with dining, shopping, and entertainment options',
  },
  {
    name: "Mountain's Edge",
    type: 'Shopping Center',
    distance: '4.5 miles',
    description: 'Outdoor shopping center with restaurants and retail stores',
  },
  {
    name: 'Red Rock Casino Resort & Spa',
    type: 'Entertainment',
    distance: '5.2 miles',
    description: 'Upscale resort with dining, shopping, and entertainment',
  },
];

// Parks & Recreation
const _parks = [
  {
    name: 'Southwest Career and Technical Academy Park',
    type: 'Community Park',
    distance: '1.1 miles',
    features: ['Playground', 'Walking trails', 'Picnic areas', 'Sports fields', 'Dog park'],
  },
  {
    name: 'Aliante Nature Discovery Park',
    type: 'Nature Park',
    distance: '3.2 miles',
    features: ['Nature trails', 'Wildlife viewing', 'Educational programs', 'Picnic areas'],
  },
  {
    name: "Mountain's Edge Regional Park",
    type: 'Regional Park',
    distance: '4.8 miles',
    features: [
      'Large playground',
      'Sports fields',
      'Walking trails',
      'Fitness equipment',
      'Amphitheater',
    ],
  },
  {
    name: 'Red Rock Canyon National Conservation Area',
    type: 'National Conservation Area',
    distance: '8.5 miles',
    features: [
      'Hiking trails',
      'Rock climbing',
      'Scenic drives',
      'Wildlife viewing',
      'Visitor center',
    ],
  },
];

// Market statistics
const marketStats = {
  averagePrice: '$465,000',
  medianPrice: '$455,000',
  pricePerSqFt: '$190',
  daysOnMarket: '25',
  priceChange: '+3.5%',
  inventory: '38 homes',
  walkScore: '70',
  schoolRating: '8.3/10',
  crimeRate: 'Low',
  commuteTime: '12 min to Strip',
};

// Testimonials
const testimonials = [
  {
    name: 'Maria & Carlos Rodriguez',
    role: '89138 Residents since 2019',
    content:
      'We love living in 89138! The area has a great mix of established neighborhoods and new developments. The schools are excellent and we have everything we need within a short drive.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: '89138 Resident since 2017',
    content:
      'The location is perfect - close to work and entertainment, but still feels like a quiet neighborhood. The community is very welcoming and there are always fun events happening.',
    rating: 5,
  },
  {
    name: 'Jennifer Lee',
    role: '89138 Resident since 2020',
    content:
      "This area has been perfect for our family. The schools are great, there are plenty of parks for the kids, and we've made wonderful friends in the community. Highly recommend!",
    rating: 5,
  },
];

let currentTestimonial = 0;
let testimonialInterval;

onMount(() => {
  testimonialInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }, 5000);

  return () => {
    if (testimonialInterval) clearInterval(testimonialInterval);
  };
});

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I contact Manzano Homes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact us by calling (702) 500-1942, texting us, or emailing DrDuffySells@ManzanoHomes.com. We are here to help with all your real estate needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does Manzano Homes provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide comprehensive real estate services including buying, selling, home valuations, market reports, and expert guidance for the Las Vegas area.',
      },
    },
  ],
};
</script>

<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
</script>
</svelte:head>

<SEO
  title="89138 Real Estate | Southwest Las Vegas Homes for Sale | $455K Median Price"
  description="🏡 Find homes for sale in 89138 Las Vegas! Southwest area • $455K median price • Excellent schools • Diverse community • Central location • Family-friendly • Schedule tour today!"
  canonical="https://www.manzanohomes.com/89138-real-estate"
  image="/hero-manzano.jpg"
  schemas={[
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "89138 Las Vegas Real Estate",
      "description": "Southwest Las Vegas 89138 is a vibrant community known for its diverse neighborhoods, excellent schools, and convenient access to major employment centers.",
      "url": "https://www.manzanohomes.com/89138-real-estate",
      "image": "https://www.manzanohomes.com/hero-manzano.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89138",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 36.1039,
        "longitude": -115.1891
      },
      "offeredBy": {
        "@type": "RealEstateAgent",
        "name": "Manzano Homes",
        "url": "https://www.manzanohomes.com",
        "telephone": "(702) 500-1942"
      },
      "containedInPlace": {
        "@type": "City",
        "name": "Las Vegas",
        "addressRegion": "NV",
        "addressCountry": "US"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.manzanohomes.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Homes for Sale",
          "item": "https://www.manzanohomes.com/homes-for-sale"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "89138 Real Estate",
          "item": "https://www.manzanohomes.com/89138-real-estate"
        }
      ]
    }
  ]}
/>

<main class="min-h-screen" id="main-content">
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-24 md:pt-32 pb-20">
    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-manzano-dark/40 to-transparent"></div>
    
    <!-- Background Image -->
    <div class="absolute inset-0">
      <picture>
        <source media="(min-width: 768px)" srcset="/hero-manzano.jpg" type="image/jpeg">
        <img
          src="/hero-manzano.jpg"
          alt="89138 Las Vegas real estate Southwest area"
          class="w-full h-full object-cover"
          fetchpriority="high"
          loading="eager"
          width="1920"
          height="1080"
          decoding="async"
        />
      </picture>
    </div>
    
    <!-- Hero Content -->
    <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto py-16 md:py-20">
      <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
        🏡 {zipData.zip} <span class="text-secondary-400 drop-shadow-md">Real Estate</span>
      </h1>
      <h2 class="text-xl md:text-2xl lg:text-3xl mb-4 font-light text-white drop-shadow-md">
        ⭐ Southwest Las Vegas • $455K Median Price • Diverse Community
      </h2>
      <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white drop-shadow-md">
        ✨ <strong>NEW:</strong> Discover diverse neighborhoods in Southwest Las Vegas 89138! Excellent schools, central location, and family-friendly community. Mix of established and new homes!
      </p>
      
      <!-- Quick Stats -->
      <div class="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
        <span class="flex items-center bg-white/20 px-4 py-2 rounded-full">
          <svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          Diverse community
        </span>
        <span class="flex items-center bg-white/20 px-4 py-2 rounded-full">
          <svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          Excellent schools
        </span>
        <span class="flex items-center bg-white/20 px-4 py-2 rounded-full">
          <svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          Central location
        </span>
      </div>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
        <a href="/homes-for-sale" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group" aria-label="View available homes in 89138">
          <span class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
            🏡 View Available Homes
          </span>
        </a>
        <a href="/contact" class="bg-white hover:bg-gray-100 text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group border-2 border-primary-200" aria-label="Contact us about 89138 real estate">
          <span class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            📞 Contact Us
          </span>
        </a>
      </div>
    </div>
  </section>

  <!-- Area Overview -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About 89138 Las Vegas</h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {zipData.description}
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
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Southwest Location</h3>
          <p class="text-gray-600">Las Vegas, NV 89138 zip code</p>
        </div>

        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Central Access</h3>
          <p class="text-gray-600">Close to I-15, I-215, and major employment centers</p>
        </div>

        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Convenient Distance</h3>
          <p class="text-gray-600">12 min to Strip, 10 min to McCarran Airport</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Key Features -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose 89138?</h2>
        <p class="text-lg text-gray-600">What makes this area special</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each keyFeatures as feature}
          <div class="text-center group">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-300">
              <span class="iconify w-8 h-8 text-primary-600" data-icon={feature.icon}></span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p class="text-gray-600">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Schools Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Local Schools</h2>
        <p class="text-lg text-gray-600">Excellent educational opportunities in the 89138 area</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each schools as school}
          <div class="bg-gray-50 rounded-lg shadow-lg p-6">
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
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shopping & Dining</h2>
        <p class="text-lg text-gray-600">Convenient access to shopping centers, restaurants, and entertainment</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each shopping as location}
          <div class="bg-white rounded-lg shadow-lg p-6">
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
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Parks & Recreation</h2>
        <p class="text-lg text-gray-600">Beautiful parks and recreational facilities for outdoor activities</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each parks as park}
          <div class="bg-gray-50 rounded-lg shadow-lg p-6">
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

  <!-- Market Statistics -->
  <section class="py-16 bg-primary-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Market Statistics</h2>
        <p class="text-xl text-primary-100">Current real estate trends in 89138</p>
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
          <div class="text-3xl font-bold text-primary-100 mb-2">{marketStats.walkScore}</div>
          <div class="text-sm text-primary-200">Walk Score</div>
        </div>
      </div>
    </div>
  </section>

  <!-- RealScout Integration -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Homes for Sale in 89138</h2>
        <p class="text-lg text-gray-600">Explore available properties in this diverse area</p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
          listing-status="For Sale" 
          property-types="SFR,MF" 
          price-min="350000" 
          price-max="650000">
        </realscout-office-listings>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Residents Say</h2>
        <p class="text-lg text-gray-600">Hear from families who call 89138 home</p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="bg-gray-50 rounded-lg shadow-lg p-8 text-center">
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
              onclick={() => currentTestimonial = index}
              aria-label="View testimonial {index + 1}"
            ></button>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-primary-600 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Home in 89138?</h2>
      <p class="text-lg text-primary-100 mb-8">
        Explore available homes in this diverse area and discover why so many families choose to call 89138 home.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/homes-for-sale" class="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-colors">
          Explore Homes in 89138
        </a>
        <a href="/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors">
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
