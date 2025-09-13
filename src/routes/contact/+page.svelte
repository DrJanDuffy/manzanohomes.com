</script>

<SEO 
  title="Contact Manzano Homes | Las Vegas Real Estate Experts | 3693 Manzano Peak Ave"
  description="Get in touch with Manzano Homes for expert real estate services in Las Vegas. Contact our team at 3693 Manzano Peak Ave for buying, selling, or home valuation needs."
  canonical="https://www.manzanohomes.com/contact"
  image="/og-contact.jpg"
  schemas={pageSchemas}
/>

<main class="min-h-screen" id="main-content">
  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-primary-500 to-primary-700 text-white pt-24 md:pt-32 pb-20 relative overflow-hidden">
    <!-- Background overlay for better text contrast -->
    <div class="absolute inset-0 bg-black bg-opacity-20"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
          Contact Our Real Estate Experts
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-white drop-shadow-md max-w-4xl mx-auto">
          Ready to buy or sell in the Manzano neighborhood? We're here to help every step of the way.
        </p>
        <div class="flex flex-wrap justify-center gap-6 text-lg">
          <div class="flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <svg class="w-6 h-6 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span class="text-white font-medium">DrDuffySells@ManzanoHomes.com</span>
          </div>
          <div class="flex items-center bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg">
            <svg class="w-6 h-6 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span class="text-white font-medium">(702) 500-1942</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form & Info Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <p class="text-gray-600 mb-8">
            Have questions about buying or selling in the Manzano area? Fill out the form below and we'll get back to you within 24 hours.
          </p>
          
          {#if formSubmitted}
            <div class="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div class="flex justify-center mb-4">
                <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-green-900 mb-2">Message Sent Successfully!</h3>
              <p class="text-green-700">Thank you for contacting us. We'll get back to you within 24 hours.</p>
            </div>
          {:else}
            <ContactForm on:submit={handleFormSubmit} />
          {/if}
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Office Info -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <p class="font-semibold text-gray-900">Address</p>
                  <p class="text-gray-600">{contactInfo.address}</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <div>
                  <p class="font-semibold text-gray-900">Phone</p>
                  <p class="text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <div>
                  <p class="font-semibold text-gray-900">Email</p>
                  <p class="text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <p class="font-semibold text-gray-900">Office Hours</p>
                  <p class="text-gray-600 whitespace-pre-line">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Team Members -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Meet Our Team</h3>
            <div class="space-y-6">
              {#each teamMembers as member}
                <div class="border-l-4 border-primary-500 pl-4">
                  <h4 class="text-lg font-semibold text-gray-900">{member.name}</h4>
                  <p class="text-primary-600 font-medium">{member.title}</p>
                  <div class="mt-2 space-y-1">
                    <p class="text-sm text-gray-600">{member.phone}</p>
                    <p class="text-sm text-gray-600">{member.email}</p>
                    <div class="flex flex-wrap gap-2 mt-2">
                      {#each member.specialties as specialty}
                        <span class="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">{specialty}</span>
                      {/each}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Properties Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Manzano Listings</h2>
        <p class="text-lg text-gray-600">Browse available homes while you're here</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
          listing-status="For Sale" 
          property-types="SFR" 
          price-min="400000" 
          price-max="500000">
        </realscout-office-listings>
      </div>
    </div>
  </section>

  <!-- Map Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Find Us in the Heart of Manzano</h2>
        <p class="text-lg text-gray-600">Conveniently located near major highways and shopping centers</p>
      </div>
      
      <div class="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
        <div class="text-center">
          <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
          </svg>
          <p class="text-gray-600 font-medium">Interactive Map Coming Soon</p>
          <p class="text-sm text-gray-500">3693 Manzano Peak Ave, Las Vegas, NV 89121</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p class="text-lg text-gray-600">Quick answers to common real estate questions</p>
      </div>
      
      <div class="space-y-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">How quickly can you help me find a home?</h3>
          <p class="text-gray-600">We typically show clients 3-5 properties within the first week and help them find their dream home within 30-60 days, depending on market conditions and specific requirements.</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">What makes the Manzano neighborhood special?</h3>
          <p class="text-gray-600">Manzano offers excellent schools, walkable neighborhoods, modern amenities, and convenient access to major highways. It's one of Las Vegas's most sought-after family communities.</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Do you offer free home valuations?</h3>
          <p class="text-gray-600">Yes! We provide complimentary home valuations for all Manzano area properties. Our detailed reports include comparable sales, market trends, and pricing recommendations.</p>
        </div>
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
