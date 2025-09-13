<script>
import SEO from '$lib/components/SEO.svelte';

// Neighborhood data
const _neighborhoodData = {
  name: 'Manzano Peak Neighborhood',
  location: 'Southeast Las Vegas, NV 89121',
  description:
    "A premier residential community in Southeast Las Vegas, Manzano Peak offers the perfect blend of suburban tranquility and urban convenience. This growing neighborhood is ideal for families, professionals, and anyone seeking a peaceful residential environment with easy access to the city's amenities.",
  established: '2015',
  totalHomes: '150+',
  averagePrice: '$485,000',
  medianPrice: '$475,000',
  priceRange: '$350,000 - $750,000',
  homeTypes: ['Single Family', 'Townhomes', 'New Construction'],
  walkScore: '72',
  schoolRating: '8.5/10',
};

// Key features
const _keyFeatures = [
  {
    title: 'Prime Location',
    description:
      'Conveniently located near major highways, shopping centers, and entertainment venues',
    icon: 'mdi:map-marker',
  },
  {
    title: 'Top-Rated Schools',
    description:
      'Excellent educational opportunities with highly-rated public and private schools nearby',
    icon: 'mdi:school',
  },
  {
    title: 'Modern Amenities',
    description:
      'Contemporary homes with updated features, smart technology, and energy-efficient designs',
    icon: 'mdi:home',
  },
  {
    title: 'Community Spirit',
    description: 'A welcoming neighborhood with active community events and friendly neighbors',
    icon: 'mdi:heart',
  },
  {
    title: 'Easy Access',
    description: 'Close to I-515, I-215, and major highways for convenient commuting',
    icon: 'mdi:car',
  },
  {
    title: 'Growing Community',
    description: 'Active development with new amenities and services being added regularly',
    icon: 'mdi:trending-up',
  },
];

// Schools data
const _schools = [
  {
    name: 'Manzano Elementary School',
    type: 'Elementary',
    rating: '9/10',
    distance: '0.3 miles',
    description:
      'Highly rated elementary school with excellent academic programs and dedicated teachers',
  },
  {
    name: 'Southeast Career Technical Academy',
    type: 'High School',
    rating: '8/10',
    distance: '1.2 miles',
    description:
      'Career-focused high school with strong technical programs and college preparation',
  },
  {
    name: 'Green Valley High School',
    type: 'High School',
    rating: '8/10',
    distance: '2.1 miles',
    description: 'Comprehensive high school with diverse academic and extracurricular offerings',
  },
  {
    name: 'Coronado High School',
    type: 'High School',
    rating: '7/10',
    distance: '2.8 miles',
    description: 'Well-established high school with strong sports and arts programs',
  },
];

// Shopping & Dining
const _shopping = [
  {
    name: 'Green Valley Ranch Resort & Casino',
    type: 'Entertainment & Shopping',
    distance: '3.2 miles',
    description: 'Upscale resort with shopping, dining, and entertainment options',
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
  {
    name: 'Galleria at Sunset',
    type: 'Shopping Mall',
    distance: '5.2 miles',
    description: 'Large shopping mall with department stores and specialty shops',
  },
];

// Parks & Recreation
const _parks = [
  {
    name: 'Manzano Park',
    type: 'Neighborhood Park',
    distance: '0.1 miles',
    features: ['Playground', 'Walking trails', 'Picnic areas', 'Basketball court', 'Dog park'],
  },
  {
    name: 'Sunset Park',
    type: 'Regional Park',
    distance: '2.8 miles',
    features: [
      'Large lake',
      'Walking trails',
      'Sports fields',
      'Dog park',
      'Botanical gardens',
      'Tennis courts',
    ],
  },
  {
    name: 'Coronado Park',
    type: 'Community Park',
    distance: '1.5 miles',
    features: [
      'Tennis courts',
      'Soccer fields',
      'Playground',
      'Walking paths',
      'Fitness equipment',
    ],
  },
  {
    name: 'Pecos Legacy Park',
    type: 'Sports Complex',
    distance: '3.1 miles',
    features: [
      'Baseball fields',
      'Soccer fields',
      'Basketball courts',
      'Walking trails',
      'Playground',
    ],
  },
];

// Market statistics
const _marketStats = {
  averagePrice: '$485,000',
  medianPrice: '$475,000',
  pricePerSqFt: '$185',
  daysOnMarket: '28',
  priceChange: '+3.2%',
  inventory: '12 homes',
  walkScore: '72',
  schoolRating: '8.5/10',
  crimeRate: 'Low',
  commuteTime: '15 min to Strip',
};

// Testimonials
const testimonials = [
  {
    name: 'Sarah & Mike Johnson',
    role: 'Manzano Peak Residents since 2019',
    content:
      "We absolutely love living in Manzano Peak! The neighborhood is quiet and family-friendly, and we're close to everything we need. The schools are excellent and our kids have made great friends here.",
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Manzano Peak Resident since 2021',
    content:
      "The location is perfect - close to the airport for work travel, but far enough from the Strip to have peace and quiet. The community is growing and we've seen great improvements in local amenities.",
    rating: 5,
  },
  {
    name: 'Maria Rodriguez',
    role: 'Manzano Peak Resident since 2018',
    content:
      'Manzano Peak has been the perfect place to raise our family. The neighborhood is safe, the neighbors are friendly, and we have everything we need within a short drive. Highly recommend!',
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
</script>

<SEO
  title="Manzano Peak Neighborhood Las Vegas | 89121 Real Estate | Family Community"
  description="🏡 Discover Manzano Peak neighborhood in Las Vegas 89121! Family-friendly community with excellent schools, parks, and modern homes. $485K median price • Top-rated schools • Schedule tour today!"
  canonical="https://www.manzanohomes.com/manzano-peak-neighborhood"
  image="/hero-manzano.jpg"
  schemas={[
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Manzano Peak Neighborhood",
      "description": "A premier residential community in Southeast Las Vegas, Manzano Peak offers the perfect blend of suburban tranquility and urban convenience.",
      "url": "https://www.manzanohomes.com/manzano-peak-neighborhood",
      "image": "https://www.manzanohomes.com/hero-manzano.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89121",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 36.0839,
        "longitude": -115.0891
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
      "@type": "RealEstateAgent",
      "name": "Manzano Homes",
      "url": "https://www.manzanohomes.com",
      "telephone": "(702) 500-1942",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89121",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Manzano Peak Neighborhood"
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
          "name": "Neighborhoods",
          "item": "https://www.manzanohomes.com/neighborhood"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Manzano Peak",
          "item": "https://www.manzanohomes.com/manzano-peak-neighborhood"
        }
      ]
    }
	]}
/>

<!-- FAQ Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes Manzano Peak neighborhood special?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manzano Peak is a premier family community in Southeast Las Vegas featuring modern homes, excellent schools (8.5/10 rating), convenient location near major highways, and a welcoming neighborhood atmosphere with parks and community events."
      }
    },
    {
      "@type": "Question",
      "name": "What is the median home price in Manzano Peak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The median home price in Manzano Peak is $475,000, with homes ranging from $350,000 to $750,000. This includes both new construction and resale properties with modern amenities."
      }
    },
    {
      "@type": "Question",
      "name": "What schools serve the Manzano Peak neighborhood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manzano Peak Elementary School (9/10 rating, 0.3 miles), Southeast Career Technical Academy (8/10 rating, 1.2 miles), Green Valley High School (8/10 rating, 2.1 miles), and Coronado High School (7/10 rating, 2.8 miles) serve the neighborhood."
      }
    },
    {
      "@type": "Question",
      "name": "What amenities are available in Manzano Peak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manzano Peak offers Manzano Park (0.1 miles), Sunset Park (2.8 miles), Coronado Park (1.5 miles), and Pecos Legacy Park (3.1 miles). Shopping includes Vons (0.8 miles), Target (1.5 miles), and Green Valley Ranch Resort (3.2 miles)."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Manzano Peak from the Las Vegas Strip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manzano Peak is 12 miles from the Las Vegas Strip, approximately a 15-minute drive via I-515 and I-215. This provides easy access to entertainment while maintaining a quiet residential atmosphere."
      }
    },
    {
      "@type": "Question",
      "name": "What is the walk score of Manzano Peak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manzano Peak has a walk score of 72, indicating it's somewhat walkable. Residents can walk to nearby parks, schools, and some shopping, though a car is recommended for most errands."
      }
    },
    {
      "@type": "Question",
      "name": "Is Manzano Peak a safe neighborhood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Manzano Peak has a safety score of 8.5/10 with crime rates below the national average. The neighborhood features well-lit streets, active community involvement, and regular police patrols."
      }
    },
    {
      "@type": "Question",
      "name": "What types of homes are available in Manzano Peak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Manzano Peak offers single-family homes, townhomes, and new construction properties ranging from 1,500 to 3,500 square feet. Homes feature contemporary architecture, modern amenities, and energy-efficient designs."
      }
    }
  ]
}
</script>

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
          alt="Manzano Peak neighborhood Las Vegas real estate"
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
        🏡 Welcome to <span class="text-secondary-400 drop-shadow-md">Manzano Peak</span>
      </h1>
      <h2 class="text-xl md:text-2xl lg:text-3xl mb-4 font-light text-white drop-shadow-md">
        ⭐ Premier Family Community • 150+ Homes • $485K Median Price
      </h2>
      <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white drop-shadow-md">
        ✨ <strong>NEW:</strong> Discover the perfect blend of suburban tranquility and urban convenience in Southeast Las Vegas. Modern homes, excellent schools, and a welcoming community await!
      </p>
      
      <!-- Quick Stats -->
      <div class="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
        <span class="flex items-center bg-white/20 px-4 py-2 rounded-full">
          <svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          Top-rated schools
        </span>
        <span class="flex items-center bg-white/20 px-4 py-2 rounded-full">
          <svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          Modern amenities
        </span>
        <span class="flex items-center bg-white/20 px-4 py-2 rounded-full">
          <svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          Family-friendly
        </span>
      </div>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
        <a href="/homes-for-sale" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group" aria-label="View available homes in Manzano Peak">
          <span class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
            🏡 View Available Homes
          </span>
        </a>
        <a href="/contact" class="bg-white hover:bg-gray-100 text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group border-2 border-primary-200" aria-label="Contact us about Manzano Peak">
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

  <!-- Neighborhood Overview -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Manzano Peak</h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {neighborhoodData.description}
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

  <!-- Key Features -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Manzano Peak?</h2>
        <p class="text-lg text-gray-600">What makes this neighborhood special</p>
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
        <p class="text-lg text-gray-600">Excellent educational opportunities for families in Manzano Peak</p>
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
        <p class="text-xl text-primary-100">Current real estate trends in Manzano Peak</p>
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
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Homes for Sale in Manzano Peak</h2>
        <p class="text-lg text-gray-600">Explore available properties in this beautiful neighborhood</p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
          listing-status="For Sale" 
          property-types="SFR,MF" 
          price-min="400000" 
          price-max="600000">
        </realscout-office-listings>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Neighbors Say</h2>
        <p class="text-lg text-gray-600">Hear from families who call Manzano Peak home</p>
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
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Home in Manzano Peak?</h2>
      <p class="text-lg text-primary-100 mb-8">
        Explore available homes in this beautiful neighborhood and discover why so many families choose to call Manzano Peak home.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/homes-for-sale" class="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-colors">
          Explore Homes in Manzano Peak
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
