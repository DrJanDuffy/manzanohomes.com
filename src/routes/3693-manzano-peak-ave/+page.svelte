<script>
import ResponsiveImage from '$lib/components/ResponsiveImage.svelte';
import SEO from '$lib/components/SEO.svelte';

// Property-specific data
const _propertyData = {
  address: '3693 Manzano Peak Ave',
  city: 'Las Vegas',
  state: 'NV',
  zip: '89121',
  price: '$485,000',
  beds: 4,
  baths: 3,
  sqft: 2450,
  yearBuilt: 2018,
  lotSize: '0.25 acres',
  status: 'Active',
  daysOnMarket: 12,
  description:
    'Beautiful single-family home in the heart of Manzano with modern amenities and spacious layout. This stunning property features an open floor plan, updated kitchen with granite countertops, and a private backyard perfect for entertaining.',
  features: [
    'Open floor plan',
    'Updated kitchen with granite countertops',
    'Master suite with walk-in closet',
    'Private backyard',
    'Two-car garage',
    'Energy-efficient windows',
    'Hardwood floors',
    'Central air conditioning',
  ],
  coordinates: {
    lat: 36.0839,
    lng: -115.0891,
  },
};

// Neighborhood amenities
const _amenities = [
  {
    name: 'Manzano Elementary School',
    type: 'School',
    distance: '0.3 miles',
    rating: '9/10',
  },
  {
    name: 'Manzano Park',
    type: 'Park',
    distance: '0.1 miles',
    features: ['Playground', 'Walking trails', 'Picnic areas'],
  },
  {
    name: 'Green Valley Ranch Resort',
    type: 'Shopping & Entertainment',
    distance: '3.2 miles',
    description: 'Upscale resort with shopping, dining, and entertainment',
  },
  {
    name: 'McCarran Airport',
    type: 'Transportation',
    distance: '10 minutes',
    description: 'Convenient access for business travelers',
  },
];

// Market data
const _marketData = {
  medianPrice: '$475,000',
  pricePerSqFt: '$185',
  daysOnMarket: '28',
  priceChange: '+3.2%',
  inventory: '12 homes',
  walkScore: '72',
  schoolRating: '8.5/10',
};

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the price of 3693 Manzano Peak Ave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '3693 Manzano Peak Ave is priced at $485,000. This 4-bedroom, 3-bathroom home offers 2,450 square feet of living space with modern amenities and a private backyard.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the key features of 3693 Manzano Peak Ave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This home features an open floor plan, updated kitchen with granite countertops, master suite with walk-in closet, private backyard, two-car garage, energy-efficient windows, hardwood floors, and central air conditioning.',
      },
    },
    {
      '@type': 'Question',
      name: 'What schools are near 3693 Manzano Peak Ave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The home is served by Manzano Peak Elementary School (0.3 miles, 9/10 rating), Southeast Career Technical Academy (1.2 miles, 8/10 rating), and Green Valley High School (2.1 miles, 8/10 rating).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the lot size of 3693 Manzano Peak Ave?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '3693 Manzano Peak Ave sits on a 0.25-acre lot, providing ample outdoor space for a private backyard, landscaping, and outdoor activities.',
      },
    },
  ],
};
</script>

<SEO
  title="3693 Manzano Peak Ave, Las Vegas NV 89121 | $485,000 | 4 Bed 3 Bath Home"
  description="🏡 Beautiful 4 bed 3 bath home at 3693 Manzano Peak Ave, Las Vegas 89121. $485,000 • 2,450 sqft • Updated kitchen • Private backyard • Excellent schools • Schedule showing today!"
  canonical="https://www.manzanohomes.com/3693-manzano-peak-ave"
  image="/property-placeholder.jpg"
  schemas={[
    {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      "name": "3693 Manzano Peak Ave, Las Vegas, NV 89121",
      "description": "Beautiful single-family home in the heart of Manzano with modern amenities and spacious layout.",
      "url": "https://www.manzanohomes.com/3693-manzano-peak-ave",
      "image": "https://www.manzanohomes.com/property-placeholder.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3693 Manzano Peak Ave",
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
      "offeredBy": {
        "@type": "RealEstateAgent",
        "name": "Manzano Homes",
        "url": "https://www.manzanohomes.com",
        "telephone": "(702) 500-1942"
      },
      "offers": {
        "@type": "Offer",
        "price": "485000",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      },
      "floorSize": {
        "@type": "QuantitativeValue",
        "value": "2450",
        "unitCode": "SQF"
      },
      "numberOfRooms": "4",
      "numberOfBathroomsTotal": "3",
      "yearBuilt": "2018"
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
          "name": "3693 Manzano Peak Ave",
          "item": "https://www.manzanohomes.com/3693-manzano-peak-ave"
        }
      ]
    }
	]}
/>

<!-- FAQ Schema for SEO -->
<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>
</svelte:head>

<main class="min-h-screen bg-gray-50" id="main-content">
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-24 md:pt-32 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">{propertyData.address}</h1>
        <p class="text-xl md:text-2xl mb-2 text-primary-100">{propertyData.city}, {propertyData.state} {propertyData.zip}</p>
        <div class="text-3xl md:text-4xl font-bold text-secondary-400 mb-6">{propertyData.price}</div>
        
        <!-- Property Quick Stats -->
        <div class="flex flex-wrap justify-center gap-6 mb-8">
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">{propertyData.beds}</span> bed
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">{propertyData.baths}</span> bath
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">{propertyData.sqft.toLocaleString()}</span> sqft
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">{propertyData.yearBuilt}</span> built
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+17025001942" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            📞 Call (702) 500-1942
          </a>
          <a href="sms:+17025001942" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            💬 Text Us
          </a>
          <button onclick={() => window.open('mailto:info@manzanohomes.com?subject=Interest in 3693 Manzano Peak Ave')} class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            ✉️ Email Us
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Property Details -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Property Image -->
        <div class="space-y-6">
          <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <ResponsiveImage
              src="/property-placeholder.jpg"
              alt="Beautiful 4 bedroom 3 bathroom home at {propertyData.address} with modern kitchen and private backyard"
              width="800"
              height="600"
              loading="lazy"
              formats={['avif', 'webp', 'jpeg']}
              class="w-full h-full rounded-lg"
            />
          </div>
          
          <!-- Property Features -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Property Features</h3>
            <div class="grid grid-cols-2 gap-3">
              {#each propertyData.features as feature}
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-gray-700">{feature}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>

        <!-- Property Information -->
        <div class="space-y-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Property Description</h2>
            <p class="text-lg text-gray-600 leading-relaxed">{propertyData.description}</p>
          </div>

          <!-- Property Stats -->
          <div class="bg-primary-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Property Details</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <span class="text-gray-600">Price:</span>
                <span class="font-semibold text-primary-600 ml-2">{propertyData.price}</span>
              </div>
              <div>
                <span class="text-gray-600">Bedrooms:</span>
                <span class="font-semibold ml-2">{propertyData.beds}</span>
              </div>
              <div>
                <span class="text-gray-600">Bathrooms:</span>
                <span class="font-semibold ml-2">{propertyData.baths}</span>
              </div>
              <div>
                <span class="text-gray-600">Square Feet:</span>
                <span class="font-semibold ml-2">{propertyData.sqft.toLocaleString()}</span>
              </div>
              <div>
                <span class="text-gray-600">Year Built:</span>
                <span class="font-semibold ml-2">{propertyData.yearBuilt}</span>
              </div>
              <div>
                <span class="text-gray-600">Lot Size:</span>
                <span class="font-semibold ml-2">{propertyData.lotSize}</span>
              </div>
              <div>
                <span class="text-gray-600">Status:</span>
                <span class="font-semibold text-green-600 ml-2">{propertyData.status}</span>
              </div>
              <div>
                <span class="text-gray-600">Days on Market:</span>
                <span class="font-semibold ml-2">{propertyData.daysOnMarket}</span>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Schedule a Showing</h3>
            <form class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input type="text" id="name" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input type="tel" id="phone" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" id="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500">
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" placeholder="Tell us about your interest in this property..."></textarea>
              </div>
              <button type="submit" class="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-700 transition-colors">
                Request Showing
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Neighborhood Amenities -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nearby Amenities</h2>
        <p class="text-lg text-gray-600">Everything you need is just minutes away</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each amenities as amenity}
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full">
                {amenity.type}
              </span>
              <span class="text-sm text-gray-500">{amenity.distance}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{amenity.name}</h3>
            {#if amenity.rating}
              <div class="flex items-center mb-2">
                <div class="flex text-yellow-400">
                  {#each Array(5) as _, i}
                    <svg class="w-4 h-4 {i < Math.floor(Number(amenity.rating)) ? 'text-yellow-400' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  {/each}
                </div>
                <span class="ml-2 text-sm text-gray-600">{amenity.rating}</span>
              </div>
            {/if}
            {#if amenity.description}
              <p class="text-gray-600 text-sm">{amenity.description}</p>
            {/if}
            {#if amenity.features}
              <div class="mt-2">
                {#each amenity.features as feature}
                  <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1">{feature}</span>
                {/each}
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Market Data -->
  <section class="py-16 bg-primary-600 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Neighborhood Market Data</h2>
        <p class="text-xl text-primary-100">Current real estate trends in the Manzano area</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-100 mb-2">{marketData.medianPrice}</div>
          <div class="text-sm text-primary-200">Median Price</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-100 mb-2">{marketData.pricePerSqFt}</div>
          <div class="text-sm text-primary-200">Price per Sq Ft</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-100 mb-2">{marketData.daysOnMarket}</div>
          <div class="text-sm text-primary-200">Days on Market</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-green-300 mb-2">{marketData.priceChange}</div>
          <div class="text-sm text-primary-200">Price Change</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-100 mb-2">{marketData.walkScore}</div>
          <div class="text-sm text-primary-200">Walk Score</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-primary-100 mb-2">{marketData.schoolRating}</div>
          <div class="text-sm text-primary-200">School Rating</div>
        </div>
      </div>
    </div>
  </section>

  <!-- RealScout Integration -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Similar Properties in Manzano</h2>
        <p class="text-lg text-gray-600">Explore other homes in this beautiful neighborhood</p>
      </div>

      <div class="bg-gray-50 rounded-lg p-8">
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
          listing-status="For Sale" 
          property-types="SFR" 
          price-min="400000" 
          price-max="600000">
        </realscout-office-listings>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Make This Home Yours?</h2>
      <p class="text-lg text-gray-600 mb-8">
        Contact us today to schedule a private showing or learn more about this beautiful property.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+17025001942" class="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors">
          Call (702) 500-1942
        </a>
        <a href="/contact" class="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 hover:text-white transition-colors">
          Contact Us
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
