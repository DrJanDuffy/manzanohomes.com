<script>
import SEO from '$lib/components/SEO.svelte';

// Zip code data
const _zipData = {
  zip: '89121',
  city: 'Las Vegas',
  state: 'NV',
  area: 'Southeast Las Vegas',
  description:
    'Southeast Las Vegas 89121 is a premier residential area known for its family-friendly neighborhoods, excellent schools, and convenient access to major highways. This established community offers a perfect balance of suburban tranquility and urban convenience.',
  established: '1990s',
  totalHomes: '3,800+',
  averagePrice: '$485,000',
  medianPrice: '$475,000',
  priceRange: '$350,000 - $850,000',
  homeTypes: ['Single Family', 'Townhomes', 'Condos', 'New Construction'],
  walkScore: '72',
  schoolRating: '8.5/10',
  crimeRate: 'Low',
  commuteTime: '15 min to Strip',
};

// Key features
const _keyFeatures = [
  {
    title: 'Established Community',
    description: 'Well-established neighborhoods with mature trees and established amenities',
    icon: 'mdi:home-group',
  },
  {
    title: 'Top-Rated Schools',
    description: 'Highly-rated public and private schools serving the 89121 area',
    icon: 'mdi:school',
  },
  {
    title: 'Prime Location',
    description: 'Easy access to I-515, I-215, and major shopping centers',
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
    description: 'Comprehensive high school with diverse academic offerings',
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
    description: 'Open-air shopping center with restaurants, retail, and entertainment',
  },
  {
    name: 'Henderson Pavilion',
    type: 'Entertainment',
    distance: '4.1 miles',
    description: 'Outdoor amphitheater hosting concerts and community events',
  },
  {
    name: 'Galleria at Sunset',
    type: 'Shopping Mall',
    distance: '5.2 miles',
    description: 'Large shopping mall with department stores and dining options',
  },
];

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the median home price in 89121 Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The median home price in 89121 Las Vegas is $475,000, with homes ranging from $350,000 to $850,000. This Southeast Las Vegas area offers established communities with mature trees and excellent amenities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes 89121 a great place to live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '89121 offers excellent schools, low crime rates, convenient access to major highways, established neighborhoods with mature trees, and a perfect balance of suburban tranquility and urban convenience.',
      },
    },
    {
      '@type': 'Question',
      name: 'What schools serve the 89121 area?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 89121 area is served by Manzano Peak Elementary School (9/10 rating), Southeast Career Technical Academy (8/10 rating), and Green Valley High School (8/10 rating), providing excellent educational opportunities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is 89121 from the Las Vegas Strip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '89121 is located 12 miles from the Las Vegas Strip, approximately a 15-minute drive via I-515 and I-215, providing easy access to entertainment while maintaining a quiet residential atmosphere.',
      },
    },
    {
      '@type': 'Question',
      name: 'What shopping and amenities are near 89121?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Residents enjoy convenient access to Vons grocery store (0.8 miles), Target (1.5 miles), Smith's Food and Drug (1.2 miles), Green Valley Ranch Resort (3.2 miles), and The District at Green Valley Ranch shopping center (3.5 miles).",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find homes for sale in 89121?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can find homes in 89121 by calling (702) 500-1942 or using our RealScout integration for live MLS listings. We specialize in the 89121 area and can help you find your perfect home in this established community.',
      },
    },
  ],
};

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [JSON.stringify(faqSchema)],
};
</script>

<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>
</svelte:head>



<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>
</svelte:head>

<SEO
  title="89121 Real Estate | Southeast Las Vegas Homes for Sale | $475K Median Price"
  description="🏡 Find homes for sale in 89121 Las Vegas! Southeast area • $475K median price • Excellent schools • Established community • Prime location • Family-friendly • Schedule tour today!"
  canonical="https://www.manzanohomes.com/89121-real-estate"
  image="/og-89121.jpg"
  schemas={[
    {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Manzano Homes',
      description: 'Expert real estate services in 89121 Las Vegas',
      url: 'https://www.manzanohomes.com/89121-real-estate',
      telephone: '+17025001942',
      email: 'info@manzanohomes.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3693 Manzano Peak Ave',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89121',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.0429,
        longitude: -115.0562,
      },
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas',
        sameAs: 'https://en.wikipedia.org/wiki/Las_Vegas',
      },
      serviceType: 'Real Estate Services',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Homes for Sale in 89121',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'RealEstateListing',
              name: 'Single Family Homes in 89121',
              description: 'Beautiful single family homes in Southeast Las Vegas',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'RealEstateListing',
              name: 'Townhomes in 89121',
              description: 'Modern townhomes with contemporary amenities',
            },
          },
        ],
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Manzano Homes',
      url: 'https://www.manzanohomes.com',
      description: 'Expert real estate services in Las Vegas, Nevada',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.manzanohomes.com/homes-for-sale?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.manzanohomes.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: '89121 Real Estate',
          item: 'https://www.manzanohomes.com/89121-real-estate',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Manzano Homes',
      description: 'Premier real estate services in 89121 Las Vegas',
      url: 'https://www.manzanohomes.com/89121-real-estate',
      telephone: '+17025001942',
      email: 'info@manzanohomes.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3693 Manzano Peak Ave',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89121',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.0429,
        longitude: -115.0562,
      },
      openingHours: 'Mo-Su 08:00-20:00',
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1',
      },
    },
  ]}
/>

<main class="min-h-screen" id="main-content">
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-24 md:pt-32 pb-20">
    <div class="absolute inset-0 bg-black bg-opacity-30"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-manzano-dark/40 to-transparent"></div>
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="/hero-89121.jpg"
        alt="Southeast Las Vegas 89121 neighborhood with modern homes and mountain views"
        class="w-full h-full object-cover"
        loading="eager"
      />
    </div>
    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">89121 Real Estate</h1>
        <p class="text-xl md:text-2xl mb-2 text-primary-100">Southeast Las Vegas Homes for Sale</p>
        <div class="text-3xl md:text-4xl font-bold text-secondary-400 mb-6">$475K Median Price</div>
        
        <!-- Quick Stats -->
        <div class="flex flex-wrap justify-center gap-6 mb-8">
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">3,800+</span> homes
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">8.5/10</span> school rating
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">72</span> walk score
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">15 min</span> to Strip
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+17025001942" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            📞 Call (702) 500-1942
          </a>
          <a href="sms:+17025001942" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            💬 Text Us
          </a>
          <button onclick={() => window.open('mailto:info@manzanohomes.com?subject=Interest in 89121 Real Estate')} class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            ✉️ Email Us
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Area Overview -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About 89121 Las Vegas</h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          {_zipData.description}
        </p>
      </div>

      <!-- Key Stats -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">{_zipData.totalHomes}</div>
          <div class="text-gray-600">Total Homes</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">{_zipData.medianPrice}</div>
          <div class="text-gray-600">Median Price</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">{_zipData.schoolRating}</div>
          <div class="text-gray-600">School Rating</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">{_zipData.walkScore}</div>
          <div class="text-gray-600">Walk Score</div>
        </div>
      </div>

      <!-- Key Features -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each _keyFeatures as feature}
          <div class="text-center p-6 bg-gray-50 rounded-lg">
            <div class="text-4xl mb-4 text-primary-600">
              <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p class="text-gray-600">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Schools Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Schools in 89121</h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto">
          The 89121 area is served by some of the best schools in Las Vegas, providing excellent educational opportunities for families.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each _schools as school}
          <div class="bg-white rounded-lg shadow-md p-6">
            <div class="text-center">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{school.name}</h3>
              <div class="text-sm text-gray-600 mb-2">{school.type}</div>
              <div class="text-2xl font-bold text-primary-600 mb-2">{school.rating}</div>
              <div class="text-sm text-gray-500 mb-4">{school.distance}</div>
              <p class="text-gray-600 text-sm">{school.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Shopping & Dining Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Shopping & Dining</h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto">
          Enjoy convenient access to shopping, dining, and entertainment options throughout the 89121 area.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each _shopping as place}
          <div class="bg-gray-50 rounded-lg p-6">
            <div class="text-center">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{place.name}</h3>
              <div class="text-sm text-gray-600 mb-2">{place.type}</div>
              <div class="text-lg font-bold text-primary-600 mb-2">{place.distance}</div>
              <p class="text-gray-600 text-sm">{place.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- RealScout Integration -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Homes for Sale in 89121</h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto">
          Browse our live MLS listings for homes currently available in the 89121 area.
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <realscout-office-listings
          office-id="your-office-id"
          search-params={JSON.stringify({zip: "89121"})}
        ></realscout-office-listings>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-primary-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Home in 89121?</h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        Let our expert team help you navigate the 89121 real estate market and find the perfect home for your family.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+17025001942" class="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          📞 Call (702) 500-1942
        </a>
        <a href="sms:+17025001942" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          💬 Text Us
        </a>
        <button onclick={() => window.open('mailto:info@manzanohomes.com?subject=Interest in 89121 Real Estate')} class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          ✉️ Email Us
        </button>
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