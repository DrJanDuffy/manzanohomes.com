<script>
import SEO from '$lib/components/SEO.svelte';

// Zip code data
const zipData = {
  zip: '89179',
  city: 'Las Vegas',
  state: 'NV',
  area: 'Northwest Las Vegas',
  description:
    'Northwest Las Vegas 89179 is a rapidly growing area known for its modern homes, excellent schools, and convenient access to major highways. This family-friendly community offers a perfect balance of suburban tranquility and urban convenience.',
  established: '2000s',
  totalHomes: '3,200+',
  averagePrice: '$445,000',
  medianPrice: '$435,000',
  priceRange: '$320,000 - $850,000',
  homeTypes: ['Single Family', 'Townhomes', 'Condos', 'New Construction'],
  walkScore: '68',
  schoolRating: '8.4/10',
  crimeRate: 'Low',
  commuteTime: '18 min to Strip',
};

// Key features
const keyFeatures = [
  {
    title: 'New Construction',
    description: 'Many new home developments with modern amenities and energy-efficient features',
    icon: 'mdi:home-plus',
  },
  {
    title: 'Top Schools',
    description: 'Highly-rated public and private schools serving the 89179 area',
    icon: 'mdi:school',
  },
  {
    title: 'Prime Location',
    description: 'Easy access to I-95, I-215, and major shopping centers',
    icon: 'mdi:map-marker',
  },
  {
    title: 'Family Community',
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
const schools = [
  {
    name: 'Northwest Career and Technical Academy',
    type: 'High School',
    rating: '8/10',
    distance: '1.8 miles',
    description: 'Career-focused high school with strong technical programs',
  },
  {
    name: 'Northwest Career and Technical Academy Elementary',
    type: 'Elementary',
    rating: '9/10',
    distance: '1.2 miles',
    description: 'Highly rated elementary school with excellent academic programs',
  },
  {
    name: 'Desert Pines High School',
    type: 'High School',
    rating: '7/10',
    distance: '2.8 miles',
    description: 'Comprehensive high school with diverse academic offerings',
  },
  {
    name: 'Canyon Springs High School',
    type: 'High School',
    rating: '8/10',
    distance: '3.5 miles',
    description: 'Well-established high school with strong sports and arts programs',
  },
];

// Shopping & Dining
const shopping = [
  {
    name: 'Centennial Hills Town Center',
    type: 'Shopping Center',
    distance: '2.5 miles',
    description: 'Large shopping center with major retailers, restaurants, and entertainment',
  },
  {
    name: 'Aliante Casino + Hotel',
    type: 'Entertainment',
    distance: '4.1 miles',
    description: 'Casino resort with dining, shopping, and entertainment options',
  },
  {
    name: "Mountain's Edge",
    type: 'Shopping Center',
    distance: '5.2 miles',
    description: 'Outdoor shopping center with restaurants and retail stores',
  },
  {
    name: 'Red Rock Casino Resort & Spa',
    type: 'Entertainment',
    distance: '6.8 miles',
    description: 'Upscale resort with dining, shopping, and entertainment',
  },
];

// Parks & Recreation
const parks = [
  {
    name: 'Centennial Hills Park',
    type: 'Community Park',
    distance: '1.8 miles',
    features: ['Playground', 'Walking trails', 'Picnic areas', 'Sports fields', 'Dog park'],
  },
  {
    name: 'Aliante Nature Discovery Park',
    type: 'Nature Park',
    distance: '3.8 miles',
    features: ['Nature trails', 'Wildlife viewing', 'Educational programs', 'Picnic areas'],
  },
  {
    name: "Mountain's Edge Regional Park",
    type: 'Regional Park',
    distance: '5.2 miles',
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
    distance: '9.1 miles',
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
  averagePrice: '$445,000',
  medianPrice: '$435,000',
  pricePerSqFt: '$180',
  daysOnMarket: '30',
  priceChange: '+3.1%',
  inventory: '52 homes',
  walkScore: '68',
  schoolRating: '8.4/10',
  crimeRate: 'Low',
  commuteTime: '18 min to Strip',
};

// Testimonials
const testimonials = [
  {
    name: 'Amanda & James Wilson',
    role: '89179 Residents since 2021',
    content:
      'We absolutely love living in 89179! The area is growing rapidly with new amenities, and we have everything we need within a short drive. The schools are excellent and the community is very welcoming.',
    rating: 5,
  },
  {
    name: 'Robert Garcia',
    role: '89179 Resident since 2019',
    content:
      'The location is perfect - close enough to the city for work, but far enough to have peace and quiet. The new construction homes are beautiful and the neighborhood is well-maintained.',
    rating: 5,
  },
  {
    name: 'Sarah Kim',
    role: '89179 Resident since 2020',
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
</script>

<SEO
  title="89179 Real Estate | Northwest Las Vegas Homes for Sale | $435K Median Price"
  description="🏡 Find homes for sale in 89179 Las Vegas! Northwest area • $435K median price • Excellent schools • New construction • Growing community • Family-friendly • Schedule tour today!"
  canonical="https://www.manzanohomes.com/89179-real-estate"
  image="/hero-manzano.jpg"
  schemas={[
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "89179 Las Vegas Real Estate",
      "description": "Northwest Las Vegas 89179 is a rapidly growing area known for its modern homes, excellent schools, and convenient access to major highways.",
      "url": "https://www.manzanohomes.com/89179-real-estate",
      "image": "https://www.manzanohomes.com/hero-manzano.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89179",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 36.2939,
        "longitude": -115.2991
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
          "name": "89179 Real Estate",
          "item": "https://www.manzanohomes.com/89179-real-estate"
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
      "name": "What is the median home price in 89179 Las Vegas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The median home price in 89179 Las Vegas is $435,000, with homes ranging from $320,000 to $850,000. This Northwest Las Vegas area offers new construction and modern amenities for growing families."
      }
    },
    {
      "@type": "Question",
      "name": "What makes 89179 a good place to live?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "89179 offers new construction homes, excellent schools (8.4/10 rating), convenient access to major highways, family-friendly community with parks and playgrounds, and modern amenities with smart technology."
      }
    },
    {
      "@type": "Question",
      "name": "What schools serve the 89179 zip code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 89179 area is served by Northwest Career and Technical Academy Elementary (9/10 rating, 1.2 miles), Northwest Career and Technical Academy High School (8/10 rating, 1.8 miles), Desert Pines High School (7/10 rating, 2.8 miles), and Canyon Springs High School (8/10 rating, 3.5 miles)."
      }
    },
    {
      "@type": "Question",
      "name": "How far is 89179 from the Las Vegas Strip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "89179 is located 18 minutes from the Las Vegas Strip via I-95 and I-215. This provides convenient access to entertainment while maintaining a peaceful residential atmosphere in Northwest Las Vegas."
      }
    },
    {
      "@type": "Question",
      "name": "What shopping and entertainment is available in 89179?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "89179 offers Centennial Hills Town Center (2.5 miles), Aliante Casino + Hotel (4.1 miles), Mountain's Edge (5.2 miles), and Red Rock Casino Resort & Spa (6.8 miles) for shopping, dining, and entertainment."
      }
    },
    {
      "@type": "Question",
      "name": "Is 89179 a safe area with low crime?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 89179 has low crime rates with a walk score of 68. The area features well-maintained neighborhoods, active community involvement, and regular police patrols, making it a safe choice for families."
      }
    },
    {
      "@type": "Question",
      "name": "What parks and recreation are near 89179?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nearby recreation includes Centennial Hills Park (1.8 miles), Aliante Nature Discovery Park (3.8 miles), Mountain's Edge Regional Park (5.2 miles), and Red Rock Canyon National Conservation Area (9.1 miles) for outdoor activities."
      }
    },
    {
      "@type": "Question",
      "name": "How do I find new construction homes in 89179?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can find new construction homes in 89179 by calling (702) 500-1942 or using our RealScout integration for live MLS listings. We specialize in new construction and can help you find the perfect modern home."
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
          alt="89179 Las Vegas real estate Northwest area"
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
        ⭐ Northwest Las Vegas • $435K Median Price • New Construction Available
      </h2>
      <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white drop-shadow-md">
        ✨ <strong>NEW:</strong> Discover modern homes in Northwest Las Vegas 89179! Excellent schools, convenient location, and family-friendly community. New construction available!
      </p>
      
      <!-- Quick Stats -->
      <div class="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
        <span class="flex items-center bg-white/20 px-4 py-2 rounded-full">
          <svg class="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          New construction
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
          Family-friendly
        </span>
      </div>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
        <a href="/homes-for-sale" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group" aria-label="View available homes in 89179">
          <span class="flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
            🏡 View Available Homes
          </span>
        </a>
        <a href="/contact" class="bg-white hover:bg-gray-100 text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group border-2 border-primary-200" aria-label="Contact us about 89179 real estate">
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
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About 89179 Las Vegas</h2>
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
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Northwest Location</h3>
          <p class="text-gray-600">Las Vegas, NV 89179 zip code</p>
        </div>

        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Easy Access</h3>
          <p class="text-gray-600">Close to I-95, I-215, and major highways</p>
        </div>

        <div class="text-center p-6 bg-gray-50 rounded-lg">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Convenient Distance</h3>
          <p class="text-gray-600">18 min to Strip, 15 min to McCarran Airport</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Key Features -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose 89179?</h2>
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
        <p class="text-lg text-gray-600">Excellent educational opportunities in the 89179 area</p>
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
        <p class="text-xl text-primary-100">Current real estate trends in 89179</p>
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
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Homes for Sale in 89179</h2>
        <p class="text-lg text-gray-600">Explore available properties in this growing area</p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
          listing-status="For Sale" 
          property-types="SFR,MF" 
          price-min="350000" 
          price-max="600000">
        </realscout-office-listings>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Our Residents Say</h2>
        <p class="text-lg text-gray-600">Hear from families who call 89179 home</p>
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
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Home in 89179?</h2>
      <p class="text-lg text-primary-100 mb-8">
        Explore available homes in this growing area and discover why so many families choose to call 89179 home.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/homes-for-sale" class="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-colors">
          Explore Homes in 89179
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
