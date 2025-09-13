<script>
import SEO from '$lib/components/SEO.svelte';

// Comprehensive Manzano data
const _manzanoData = {
  overview: {
    established: '2015',
    totalHomes: '150+',
    averagePrice: '$485,000',
    medianPrice: '$475,000',
    priceRange: '$350,000 - $750,000',
    homeTypes: ['Single Family', 'Townhomes', 'New Construction'],
    walkScore: '72',
    schoolRating: '8.5/10',
  },
  hoa: {
    monthlyFee: '$45-$85',
    includes: ['Landscaping', 'Common area maintenance', 'Trash collection'],
    management: 'Manzano HOA Management',
    contact: '(702) 555-0123',
    website: 'www.manzanohoa.com',
  },
  schools: {
    elementary: {
      name: 'Manzano Peak Elementary School',
      rating: '9/10',
      distance: '0.3 miles',
      enrollment: '485 students',
      studentTeacherRatio: '18:1',
      testScores: 'Above Average',
      programs: ['STEM', 'Arts', 'Music', 'Sports', 'After School Care'],
    },
    highSchools: [
      {
        name: 'Southeast Career Technical Academy',
        rating: '8/10',
        distance: '1.2 miles',
        type: 'Career-focused',
      },
      {
        name: 'Green Valley High School',
        rating: '8/10',
        distance: '2.1 miles',
        type: 'Comprehensive',
      },
    ],
  },
  shopping: {
    grocery: [
      { name: 'Vons', distance: '0.8 miles', type: 'Grocery' },
      { name: "Smith's Food and Drug", distance: '1.2 miles', type: 'Grocery' },
      { name: 'Target', distance: '1.5 miles', type: 'Department Store' },
    ],
    entertainment: [
      { name: 'Green Valley Ranch Resort', distance: '3.2 miles', type: 'Casino Resort' },
      {
        name: 'The District at Green Valley Ranch',
        distance: '3.5 miles',
        type: 'Shopping Center',
      },
    ],
  },
  commute: {
    strip: { distance: '12 miles', time: '15 minutes' },
    airport: { distance: '8 miles', time: '10 minutes' },
    employers: [
      { name: 'McCarran Airport', time: '10 minutes' },
      { name: 'Las Vegas Strip', time: '15 minutes' },
      { name: 'Henderson', time: '12 minutes' },
      { name: 'Downtown Las Vegas', time: '18 minutes' },
    ],
  },
  crime: {
    zipCode: '89178',
    overallRating: 'Low Crime',
    violentCrime: 'Below National Average',
    propertyCrime: 'Below National Average',
    safetyScore: '8.5/10',
    lastUpdated: '2024',
  },
};

// Everything Manzano Peak Guide
const _manzanoGuide = [
  {
    title: 'Neighborhood Overview',
    content:
      'Manzano Peak is a premier residential community in Southeast Las Vegas, established in 2015. This growing neighborhood features modern homes, excellent schools, and convenient access to major amenities.',
    icon: 'mdi:home',
  },
  {
    title: 'Home Styles & Features',
    content:
      'Homes in Manzano Peak range from $350,000 to $750,000, featuring contemporary architecture, energy-efficient designs, and modern amenities like smart home technology.',
    icon: 'mdi:home-plus',
  },
  {
    title: 'Community Amenities',
    content:
      'Residents enjoy well-maintained parks, walking trails, playgrounds, and community events. The HOA provides landscaping and common area maintenance.',
    icon: 'mdi:tree',
  },
  {
    title: 'Investment Potential',
    content:
      'With a median price of $475,000 and strong appreciation trends, Manzano Peak offers excellent investment opportunities in a growing Las Vegas market.',
    icon: 'mdi:trending-up',
  },
];

let _activeTab = 'overview';

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
        text: 'You can contact us by calling (702) 500-1942, texting us, or emailing info@manzanohomes.com. We are here to help with all your real estate needs.',
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
  title="Manzano Specialist | Everything Manzano Peak Las Vegas | Complete Guide"
  description="🏡 Complete Manzano Peak guide! HOA info, school ratings, shopping distances, commute times, crime stats. Expert insights for 89178 area. Everything you need to know!"
  canonical="https://www.manzanohomes.com/manzano-specialist"
  image="/hero-manzano.jpg"
  schemas={[
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": "Manzano Peak Community",
      "description": "Premier residential community in Southeast Las Vegas with modern homes, excellent schools, and convenient amenities.",
      "url": "https://www.manzanohomes.com/manzano-specialist",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89178",
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
        "postalCode": "89178",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Manzano Peak Community"
      }
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
  <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-24 md:pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">🏡 Manzano Specialist</h1>
        <h2 class="text-xl md:text-2xl mb-4 text-primary-100">Everything You Need to Know About Manzano Peak</h2>
        <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-primary-100">
          Your complete guide to Las Vegas's premier residential community. From HOA details to school ratings, shopping distances to commute times - we've got you covered.
        </p>
        
        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl font-bold">{manzanoData.overview.medianPrice}</div>
            <div class="text-sm text-primary-100">Median Price</div>
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl font-bold">{manzanoData.schools.elementary.rating}</div>
            <div class="text-sm text-primary-100">School Rating</div>
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl font-bold">{manzanoData.commute.strip.time}</div>
            <div class="text-sm text-primary-100">To Strip</div>
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg p-4">
            <div class="text-2xl font-bold">{manzanoData.crime.safetyScore}</div>
            <div class="text-sm text-primary-100">Safety Score</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Navigation Tabs -->
  <section class="bg-white shadow-lg sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="flex space-x-8 overflow-x-auto">
        {#each [
          { id: 'overview', label: 'Overview', icon: 'mdi:home' },
          { id: 'hoa', label: 'HOA Info', icon: 'mdi:office-building' },
          { id: 'schools', label: 'Schools', icon: 'mdi:school' },
          { id: 'shopping', label: 'Shopping', icon: 'mdi:shopping' },
          { id: 'commute', label: 'Commute', icon: 'mdi:car' },
          { id: 'safety', label: 'Safety', icon: 'mdi:shield' }
        ] as tab}
          <button
            class="flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap {_activeTab === tab.id ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}"
            onclick={() => _activeTab = tab.id}
          >
            <span class="iconify" data-icon={tab.icon}></span>
            <span>{tab.label}</span>
          </button>
        {/each}
      </nav>
    </div>
  </section>

  <!-- Content Sections -->
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Overview Tab -->
      {#if _activeTab === 'overview'}
        <div class="space-y-12">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything Manzano Peak Guide</h2>
            <p class="text-lg text-gray-600">Your comprehensive resource for all things Manzano Peak</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each manzanoGuide as guide}
              <div class="bg-white rounded-lg shadow-lg p-6">
                <div class="flex items-center mb-4">
                  <span class="iconify w-8 h-8 text-primary-600 mr-3" data-icon={guide.icon}></span>
                  <h3 class="text-xl font-semibold text-gray-900">{guide.title}</h3>
                </div>
                <p class="text-gray-600">{guide.content}</p>
              </div>
            {/each}
          </div>

          <!-- Key Statistics -->
          <div class="bg-primary-50 rounded-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Key Statistics</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600">{manzanoData.overview.totalHomes}</div>
                <div class="text-sm text-gray-600">Total Homes</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600">{manzanoData.overview.walkScore}</div>
                <div class="text-sm text-gray-600">Walk Score</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600">{manzanoData.overview.established}</div>
                <div class="text-sm text-gray-600">Established</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600">{manzanoData.overview.schoolRating}</div>
                <div class="text-sm text-gray-600">School Rating</div>
              </div>
            </div>
          </div>
        </div>
      {/if}

      <!-- HOA Tab -->
      {#if _activeTab === 'hoa'}
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">HOA Information & Fees</h2>
            <p class="text-lg text-gray-600">Everything you need to know about Manzano HOA</p>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Monthly HOA Fees</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div class="text-4xl font-bold text-primary-600 mb-2">{manzanoData.hoa.monthlyFee}</div>
                <div class="text-gray-600 mb-4">Monthly HOA Fee</div>
                <div class="space-y-2">
                  <h4 class="font-semibold text-gray-900">What's Included:</h4>
                  {#each manzanoData.hoa.includes as item}
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span class="text-gray-700">{item}</span>
                    </div>
                  {/each}
                </div>
              </div>
              <div class="bg-gray-50 rounded-lg p-6">
                <h4 class="font-semibold text-gray-900 mb-4">HOA Management</h4>
                <div class="space-y-3">
                  <div>
                    <span class="font-medium text-gray-700">Company:</span>
                    <span class="ml-2 text-gray-600">{manzanoData.hoa.management}</span>
                  </div>
                  <div>
                    <span class="font-medium text-gray-700">Phone:</span>
                    <span class="ml-2 text-gray-600">{manzanoData.hoa.contact}</span>
                  </div>
                  <div>
                    <span class="font-medium text-gray-700">Website:</span>
                    <a href="https://{manzanoData.hoa.website}" class="ml-2 text-primary-600 hover:text-primary-700">{manzanoData.hoa.website}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 rounded-lg p-8">
            <h3 class="text-xl font-bold text-blue-900 mb-4">💡 HOA Tips</h3>
            <ul class="space-y-2 text-blue-800">
              <li>• HOA fees are typically due monthly and can be paid online</li>
              <li>• Special assessments may apply for major community improvements</li>
              <li>• All exterior modifications require HOA approval</li>
              <li>• Community rules are designed to maintain property values</li>
            </ul>
          </div>
        </div>
      {/if}

      <!-- Schools Tab -->
      {#if _activeTab === 'schools'}
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">School Ratings & Information</h2>
            <p class="text-lg text-gray-600">Excellent educational opportunities in Manzano Peak</p>
          </div>

          <!-- Elementary School -->
          <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{manzanoData.schools.elementary.name}</h3>
                <p class="text-gray-600">{manzanoData.schools.elementary.distance} • {manzanoData.schools.elementary.enrollment} students</p>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600">{manzanoData.schools.elementary.rating}</div>
                <div class="text-sm text-gray-600">Rating</div>
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div class="text-center">
                <div class="text-2xl font-bold text-gray-900">{manzanoData.schools.elementary.studentTeacherRatio}</div>
                <div class="text-sm text-gray-600">Student/Teacher Ratio</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">{manzanoData.schools.elementary.testScores}</div>
                <div class="text-sm text-gray-600">Test Scores</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">{manzanoData.schools.elementary.distance}</div>
                <div class="text-sm text-gray-600">Walking Distance</div>
              </div>
            </div>

            <div>
              <h4 class="font-semibold text-gray-900 mb-3">Programs & Features:</h4>
              <div class="flex flex-wrap gap-2">
                {#each manzanoData.schools.elementary.programs as program}
                  <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">{program}</span>
                {/each}
              </div>
            </div>
          </div>

          <!-- High Schools -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each manzanoData.schools.highSchools as school}
              <div class="bg-white rounded-lg shadow-lg p-6">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-xl font-semibold text-gray-900">{school.name}</h3>
                  <div class="text-center">
                    <div class="text-2xl font-bold text-primary-600">{school.rating}</div>
                    <div class="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
                <div class="space-y-2 text-gray-600">
                  <div>📍 {school.distance}</div>
                  <div>🏫 {school.type}</div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Shopping Tab -->
      {#if _activeTab === 'shopping'}
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shopping & Amenities</h2>
            <p class="text-lg text-gray-600">Convenient access to everything you need</p>
          </div>

          <!-- Grocery Stores -->
          <div class="mb-12">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">🛒 Grocery Stores</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              {#each manzanoData.shopping.grocery as store}
                <div class="bg-white rounded-lg shadow-lg p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h4 class="text-lg font-semibold text-gray-900">{store.name}</h4>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{store.type}</span>
                  </div>
                  <div class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{store.distance}</span>
                  </div>
                </div>
              {/each}
            </div>
          </div>

          <!-- Entertainment & Shopping -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">🎭 Entertainment & Shopping Centers</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {#each manzanoData.shopping.entertainment as venue}
                <div class="bg-white rounded-lg shadow-lg p-6">
                  <div class="flex items-center justify-between mb-4">
                    <h4 class="text-lg font-semibold text-gray-900">{venue.name}</h4>
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{venue.type}</span>
                  </div>
                  <div class="flex items-center text-gray-600">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{venue.distance}</span>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}

      <!-- Commute Tab -->
      {#if _activeTab === 'commute'}
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Commute Times & Distances</h2>
            <p class="text-lg text-gray-600">Convenient access to major destinations</p>
          </div>

          <!-- Major Destinations -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">🎰 Las Vegas Strip</h3>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600 mb-2">{manzanoData.commute.strip.time}</div>
                <div class="text-gray-600 mb-4">Average Drive Time</div>
                <div class="text-lg text-gray-700">{manzanoData.commute.strip.distance}</div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">✈️ McCarran Airport</h3>
              <div class="text-center">
                <div class="text-4xl font-bold text-primary-600 mb-2">{manzanoData.commute.airport.time}</div>
                <div class="text-gray-600 mb-4">Average Drive Time</div>
                <div class="text-lg text-gray-700">{manzanoData.commute.airport.distance}</div>
              </div>
            </div>
          </div>

          <!-- Major Employers -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">🏢 Commute to Major Employers</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              {#each manzanoData.commute.employers as employer}
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <span class="font-medium text-gray-900">{employer.name}</span>
                  <span class="text-primary-600 font-semibold">{employer.time}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      {/if}

      <!-- Safety Tab -->
      {#if _activeTab === 'safety'}
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Crime Statistics & Safety</h2>
            <p class="text-lg text-gray-600">Safety information for {manzanoData.crime.zipCode} zip code</p>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div class="text-center mb-8">
              <div class="text-4xl font-bold text-green-600 mb-2">{manzanoData.crime.safetyScore}</div>
              <div class="text-lg text-gray-600">Overall Safety Score</div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600 mb-2">{manzanoData.crime.violentCrime}</div>
                <div class="text-gray-600">Violent Crime</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600 mb-2">{manzanoData.crime.propertyCrime}</div>
                <div class="text-gray-600">Property Crime</div>
              </div>
            </div>
          </div>

          <div class="bg-green-50 rounded-lg p-8">
            <h3 class="text-xl font-bold text-green-900 mb-4">🛡️ Safety Features</h3>
            <ul class="space-y-2 text-green-800">
              <li>• Well-lit streets and sidewalks</li>
              <li>• Active neighborhood watch program</li>
              <li>• Regular police patrols</li>
              <li>• Low crime rates compared to national average</li>
              <li>• Family-friendly community with active residents</li>
            </ul>
            <p class="text-sm text-green-700 mt-4">Last updated: {manzanoData.crime.lastUpdated}</p>
          </div>
        </div>
      {/if}

    </div>
  </section>

  <!-- RealScout Integration -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Homes for Sale in Manzano Peak</h2>
        <p class="text-lg text-gray-600">Explore available properties in this premier community</p>
      </div>

      <div class="bg-white rounded-lg shadow-lg p-8">
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
          listing-status="For Sale" 
          property-types="SFR,MF" 
          price-min="350000" 
          price-max="750000">
        </realscout-office-listings>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-primary-600 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Call Manzano Peak Home?</h2>
      <p class="text-lg text-primary-100 mb-8">
        Get expert guidance from our Manzano specialists. We know this community inside and out!
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/homes-for-sale" class="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-colors">
          View Available Homes
        </a>
        <a href="/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors">
          Contact Manzano Specialist
        </a>
      </div>
    </div>
  </section>
  
  <!-- Page Content Slot -->
  <slot />
</main>

<style>
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
  }
</style>
