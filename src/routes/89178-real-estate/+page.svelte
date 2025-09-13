<script>
import SEO from '$lib/components/SEO.svelte';

// Zip code data
const _zipData = {
  zip: '89178',
  city: 'Las Vegas',
  state: 'NV',
  area: 'Northwest Las Vegas',
  description:
    'Northwest Las Vegas 89178 offers a perfect blend of suburban living with easy access to urban amenities. This growing area features modern homes, excellent schools, and convenient access to major highways and shopping centers.',
  established: '1990s',
  totalHomes: '2,500+',
  averagePrice: '$425,000',
  medianPrice: '$415,000',
  priceRange: '$300,000 - $800,000',
  homeTypes: ['Single Family', 'Townhomes', 'Condos', 'New Construction'],
  walkScore: '65',
  schoolRating: '8.2/10',
  crimeRate: 'Low',
  commuteTime: '20 min to Strip',
};

// Key features
const _keyFeatures = [
  {
    title: 'Growing Community',
    description: 'Rapidly developing area with new construction and modern amenities',
    icon: 'mdi:trending-up',
  },
  {
    title: 'Excellent Schools',
    description: 'Top-rated public and private schools serving the 89178 area',
    icon: 'mdi:school',
  },
  {
    title: 'Convenient Location',
    description: 'Easy access to I-95, I-215, and major shopping centers',
    icon: 'mdi:map-marker',
  },
  {
    title: 'Family-Friendly',
    description: 'Safe neighborhoods with parks, playgrounds, and community events',
    icon: 'mdi:heart',
  },
  {
    title: 'Modern Homes',
    description: 'Contemporary architecture with updated features and smart technology',
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
    name: 'Northwest Career and Technical Academy',
    type: 'High School',
    rating: '8/10',
    distance: '1.5 miles',
    description: 'Career-focused high school with strong technical programs',
  },
  {
    name: 'Northwest Career and Technical Academy Elementary',
    type: 'Elementary',
    rating: '9/10',
    distance: '0.8 miles',
    description: 'Highly rated elementary school with excellent academic programs',
  },
  {
    name: 'Desert Pines High School',
    type: 'High School',
    rating: '7/10',
    distance: '2.2 miles',
    description: 'Comprehensive high school with diverse academic offerings',
  },
  {
    name: 'Canyon Springs High School',
    type: 'High School',
    rating: '8/10',
    distance: '3.1 miles',
    description: 'Well-established high school with strong sports and arts programs',
  },
];

// Shopping & Dining
const _shopping = [
  {
    name: 'Centennial Hills Town Center',
    type: 'Shopping Center',
    distance: '2.1 miles',
    description: 'Large shopping center with major retailers, restaurants, and entertainment',
  },
  {
    name: 'Aliante Casino + Hotel',
    type: 'Entertainment',
    distance: '3.8 miles',
    description: 'Upscale casino resort with shopping, dining, and entertainment options',
  },
  {
    name: "Mountain's Edge",
    type: 'Shopping Center',
    distance: '4.2 miles',
    description: 'Open-air shopping center with restaurants, retail, and entertainment',
  },
  {
    name: 'Red Rock Casino Resort & Spa',
    type: 'Entertainment',
    distance: '5.2 miles',
    description: 'Luxury resort with shopping, dining, and entertainment options',
  },
];

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the median home price in 89178 Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The median home price in 89178 Las Vegas is $415,000, with homes ranging from $300,000 to $800,000. This Northwest Las Vegas area offers growing communities with both established neighborhoods and new developments.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes 89178 a great place to live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '89178 offers excellent schools, low crime rates, convenient access to major employment centers, growing community with modern amenities, and a perfect balance of suburban tranquility and urban convenience.',
      },
    },
    {
      '@type': 'Question',
      name: 'What schools serve the 89178 area?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 89178 area is served by Northwest Career Technical Academy (8/10 rating), Arbor View High School (8/10 rating), and Shadow Ridge High School (7/10 rating), providing excellent educational opportunities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is 89178 from the Las Vegas Strip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '89178 is located 15 miles from the Las Vegas Strip, approximately a 18-minute drive via I-15, providing easy access to entertainment while maintaining a quiet residential atmosphere.',
      },
    },
    {
      '@type': 'Question',
      name: 'What shopping and amenities are near 89178?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Residents enjoy convenient access to Target (1.5 miles), Walmart (2.0 miles), Smith's Food and Drug (2.2 miles), and The Shops at Summerlin (4.5 miles) for shopping and dining.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find homes for sale in 89178?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can find homes in 89178 by calling (702) 500-1942 or using our RealScout integration for live MLS listings. We specialize in the 89178 area and can help you find your perfect home in this growing community.',
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
  title="89178 Real Estate | Northwest Las Vegas Homes for Sale | $415K Median Price"
  description="🏡 Find homes for sale in 89178 Las Vegas! Northwest area • $415K median price • Excellent schools • Growing community • Modern homes • Family-friendly • Schedule tour today!"
  canonical="https://www.manzanohomes.com/89178-real-estate"
  image="/hero-manzano.jpg"
  schemas={[
    {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Manzano Homes',
      description: 'Expert real estate services in 89178 Las Vegas',
      url: 'https://www.manzanohomes.com/89178-real-estate',
      telephone: '+17025001942',
      email: 'info@manzanohomes.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3693 Manzano Peak Ave',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89178',
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
        name: 'Homes for Sale in 89178',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'RealEstateListing',
              name: 'Single Family Homes in 89178',
              description: 'Beautiful single family homes in Northwest Las Vegas',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'RealEstateListing',
              name: 'Townhomes in 89178',
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
          name: '89178 Real Estate',
          item: 'https://www.manzanohomes.com/89178-real-estate',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Manzano Homes',
      description: 'Premier real estate services in 89178 Las Vegas',
      url: 'https://www.manzanohomes.com/89178-real-estate',
      telephone: '+17025001942',
      email: 'info@manzanohomes.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3693 Manzano Peak Ave',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89178',
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
        src="/hero-89178.jpg"
        alt="Northwest Las Vegas 89178 neighborhood with modern homes and mountain views"
        class="w-full h-full object-cover"
        loading="eager"
      />
    </div>
    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">89178 Real Estate</h1>
        <p class="text-xl md:text-2xl mb-2 text-primary-100">Northwest Las Vegas Homes for Sale</p>
        <div class="text-3xl md:text-4xl font-bold text-secondary-400 mb-6">$415K Median Price</div>
        
        <!-- Quick Stats -->
        <div class="flex flex-wrap justify-center gap-6 mb-8">
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">2,500+</span> homes
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">8.2/10</span> school rating
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">65</span> walk score
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">20 min</span> to Strip
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
          <button onclick={() => window.open('mailto:info@manzanohomes.com?subject=Interest in 89178 Real Estate')} class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
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
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About 89178 Las Vegas</h2>
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
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Schools in 89178</h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto">
          The 89178 area is served by some of the best schools in Las Vegas, providing excellent educational opportunities for families.
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
          Enjoy convenient access to shopping, dining, and entertainment options throughout the 89178 area.
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
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Homes for Sale in 89178</h2>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto">
          Browse our live MLS listings for homes currently available in the 89178 area.
        </p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <realscout-office-listings
          office-id="your-office-id"
          search-params={JSON.stringify({zip: "89178"})}
        ></realscout-office-listings>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-primary-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Home in 89178?</h2>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        Let our expert team help you navigate the 89178 real estate market and find the perfect home for your family.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+17025001942" class="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          📞 Call (702) 500-1942
        </a>
        <a href="sms:+17025001942" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          💬 Text Us
        </a>
        <button onclick={() => window.open('mailto:info@manzanohomes.com?subject=Interest in 89178 Real Estate')} class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
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