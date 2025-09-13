<script>
import { page } from '$app/stores';
import SEO from '$lib/components/SEO.svelte';

// Get school name from URL parameter
$: schoolName = $page.params.school?.replace(/-/g, ' ') || '';

// School data mapping
const schoolData = {
  'manzano elementary': {
    name: 'Manzano Elementary School',
    type: 'Elementary',
    rating: '9/10',
    distance: '0.3 miles',
    description:
      'Highly rated elementary school with excellent academic programs and dedicated teachers',
    address: '3693 Manzano Peak Ave, Las Vegas, NV 89121',
    features: [
      'STEM Programs',
      'Art Classes',
      'Music Programs',
      'Sports Teams',
      'After School Care',
    ],
    testScores: 'Above Average',
    studentTeacherRatio: '18:1',
  },
  'southeast career technical academy': {
    name: 'Southeast Career Technical Academy',
    type: 'High School',
    rating: '8/10',
    distance: '1.2 miles',
    description:
      'Career-focused high school with strong technical programs and college preparation',
    address: '5710 Mountain Vista St, Las Vegas, NV 89120',
    features: [
      'Technical Programs',
      'College Prep',
      'Career Counseling',
      'Internships',
      'Advanced Placement',
    ],
    testScores: 'Above Average',
    studentTeacherRatio: '20:1',
  },
  'green valley high school': {
    name: 'Green Valley High School',
    type: 'High School',
    rating: '8/10',
    distance: '2.1 miles',
    description: 'Comprehensive high school with diverse academic and extracurricular offerings',
    address: '460 Arroyo Grande Blvd, Henderson, NV 89014',
    features: [
      'Honors Programs',
      'Sports Teams',
      'Arts Programs',
      'AP Courses',
      'Student Government',
    ],
    testScores: 'Above Average',
    studentTeacherRatio: '22:1',
  },
  'coronado high school': {
    name: 'Coronado High School',
    type: 'High School',
    rating: '7/10',
    distance: '2.8 miles',
    description: 'Well-established high school with strong sports and arts programs',
    address: '1001 Coronado Center Dr, Henderson, NV 89052',
    features: [
      'Sports Programs',
      'Arts Programs',
      'Honors Classes',
      'Student Clubs',
      'Community Service',
    ],
    testScores: 'Average',
    studentTeacherRatio: '24:1',
  },
};

// Get school data based on URL parameter
$: currentSchool = schoolData[schoolName.toLowerCase()] || {
  name: schoolName,
  type: 'School',
  rating: '8/10',
  distance: '1.0 miles',
  description: 'Quality educational institution serving the Las Vegas area',
  address: 'Las Vegas, NV',
  features: ['Academic Programs', 'Extracurricular Activities', 'Student Support'],
  testScores: 'Above Average',
  studentTeacherRatio: '20:1',
};

// Nearby amenities
const _nearbyAmenities = [
  {
    name: 'Manzano Park',
    type: 'Park',
    distance: '0.1 miles',
    features: ['Playground', 'Walking trails', 'Picnic areas', 'Basketball court'],
  },
  {
    name: 'Green Valley Ranch Resort',
    type: 'Shopping & Entertainment',
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
    name: 'McCarran Airport',
    type: 'Transportation',
    distance: '10 minutes',
    description: 'Convenient access for business travelers',
  },
];

// Market data
const _marketData = {
  medianPrice: '$485,000',
  pricePerSqFt: '$185',
  daysOnMarket: '28',
  priceChange: '+3.2%',
  inventory: '12 homes',
  walkScore: '72',
  schoolRating: '8.5/10',
};

// Testimonials
const testimonials = [
  {
    name: 'Sarah & Mike Johnson',
    role: 'Parents of 2 students',
    content: `We chose this area specifically for the excellent schools. Our kids have thrived academically and socially, and we couldn't be happier with our decision.`,
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Parent of 1 student',
    content:
      'The school district here is outstanding. The teachers are dedicated, the facilities are modern, and the community support for education is incredible.',
    rating: 5,
  },
  {
    name: 'Maria Rodriguez',
    role: 'Parent of 3 students',
    content:
      'Living near great schools was our top priority when house hunting. This area exceeded our expectations with both the quality of education and the family-friendly community.',
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



<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
</script>
</svelte:head>

<SEO
  title="Homes Near {currentSchool.name} | Las Vegas Real Estate | School District {currentSchool.type}"
  description="🏫 Find homes near {currentSchool.name} in Las Vegas! {currentSchool.rating} rated {currentSchool.type.toLowerCase()} • {currentSchool.distance} away • Excellent school district • Family-friendly community • Schedule tour today!"
  canonical="https://www.manzanohomes.com/homes-near-{schoolName}"
  image="/hero-manzano.jpg"
  schemas={[
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": currentSchool.name,
      "description": currentSchool.description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": currentSchool.address,
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "addressCountry": "US"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": currentSchool.rating.split('/')[0],
        "bestRating": "10",
        "worstRating": "1"
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
        "name": "Las Vegas School Districts"
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
          "name": `Homes Near ${currentSchool.name}`,
          "item": `https://www.manzanohomes.com/homes-near-${schoolName}`
        }
      ]
    }
	]}
/>


<main class="min-h-screen bg-gray-50" id="main-content">
  <!-- Hero Section -->
  <section class="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white pt-24 md:pt-32 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Homes Near {currentSchool.name}</h1>
        <p class="text-xl md:text-2xl mb-2 text-primary-100">{currentSchool.type} • {currentSchool.rating} Rating • {currentSchool.distance} away</p>
        <div class="text-3xl md:text-4xl font-bold text-secondary-400 mb-6">$485K Median Price</div>
        
        <!-- School Quick Stats -->
        <div class="flex flex-wrap justify-center gap-6 mb-8">
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">{currentSchool.rating}</span> rating
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">{currentSchool.distance}</span> away
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">{currentSchool.studentTeacherRatio}</span> ratio
          </div>
          <div class="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span class="text-2xl font-bold">{currentSchool.testScores}</span> scores
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/homes-for-sale" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            🏡 View Available Homes
          </a>
          <a href="tel:+17025001942" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            📞 Call (702) 500-1942
          </a>
          <a href="/contact" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            ✉️ Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- School Information -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- School Details -->
        <div class="space-y-6">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">About {currentSchool.name}</h2>
            <p class="text-lg text-gray-600 leading-relaxed">{currentSchool.description}</p>
          </div>

          <!-- School Stats -->
          <div class="bg-primary-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">School Information</h3>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <span class="text-gray-600">Type:</span>
                <span class="font-semibold text-primary-600 ml-2">{currentSchool.type}</span>
              </div>
              <div>
                <span class="text-gray-600">Rating:</span>
                <span class="font-semibold ml-2">{currentSchool.rating}</span>
              </div>
              <div>
                <span class="text-gray-600">Distance:</span>
                <span class="font-semibold ml-2">{currentSchool.distance}</span>
              </div>
              <div>
                <span class="text-gray-600">Student/Teacher Ratio:</span>
                <span class="font-semibold ml-2">{currentSchool.studentTeacherRatio}</span>
              </div>
              <div>
                <span class="text-gray-600">Test Scores:</span>
                <span class="font-semibold ml-2">{currentSchool.testScores}</span>
              </div>
              <div>
                <span class="text-gray-600">Address:</span>
                <span class="font-semibold ml-2 text-sm">{currentSchool.address}</span>
              </div>
            </div>
          </div>

          <!-- School Features -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">School Programs & Features</h3>
            <div class="grid grid-cols-2 gap-3">
              {#each currentSchool.features as feature}
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

        <!-- School Image Placeholder -->
        <div class="space-y-6">
          <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div class="text-center">
              <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <p class="text-gray-500">{currentSchool.name}</p>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Schedule a School Tour</h3>
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
                <textarea id="message" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500" placeholder="Tell us about your interest in this school district..."></textarea>
              </div>
              <button type="submit" class="w-full bg-primary-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-700 transition-colors">
                Request School Tour
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Nearby Amenities -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nearby Amenities</h2>
        <p class="text-lg text-gray-600">Everything you need is just minutes away</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each nearbyAmenities as amenity}
          <div class="bg-white rounded-lg shadow-lg p-6">
            <div class="flex items-center justify-between mb-4">
              <span class="bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full">
                {amenity.type}
              </span>
              <span class="text-sm text-gray-500">{amenity.distance}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{amenity.name}</h3>
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
        <p class="text-xl text-primary-100">Current real estate trends near {currentSchool.name}</p>
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
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Homes Near {currentSchool.name}</h2>
        <p class="text-lg text-gray-600">Explore available properties in this excellent school district</p>
      </div>

      <div class="bg-gray-50 rounded-lg p-8">
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
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Parents Say</h2>
        <p class="text-lg text-gray-600">Hear from families who chose this area for the schools</p>
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
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Home Near {currentSchool.name}?</h2>
      <p class="text-lg text-primary-100 mb-8">
        Discover the perfect home in this excellent school district. Contact us today to start your search.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/homes-for-sale" class="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary-600 transition-colors">
          Explore Homes in This Area
        </a>
        <a href="/contact" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors">
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
