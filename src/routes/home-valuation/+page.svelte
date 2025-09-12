<script>
  import SEO from '$lib/components/SEO.svelte';
  import { ManzanoSchemas } from '$lib/seo/schemas.js';

  // Generate schemas
  const schemas = new ManzanoSchemas();
  const pageSchemas = [
    schemas.website(),
    schemas.breadcrumbs([
      { name: 'Home', url: '/' },
      { name: 'Home Valuation', url: '/home-valuation' }
    ])
  ];
</script>

<SEO 
  title="Free Home Valuation | Manzano Homes | Las Vegas Real Estate Experts"
  description="Get an instant, accurate home valuation for your Manzano area property. Free professional market analysis from Las Vegas real estate experts at Manzano Homes."
  canonical="https://www.manzanohomes.com/home-valuation"
  image="/og-home-valuation.jpg"
  schemas={pageSchemas}
/>

<main class="min-h-screen bg-gray-50" id="main-content">
  <!-- Hero Section -->
  <section class="bg-gradient-primary text-white py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Free Home Valuation</h1>
        <p class="text-xl text-primary-100 mb-6">Get an instant, accurate estimate of your home's value</p>
        <p class="text-lg text-primary-200">Professional market analysis powered by RealScout technology</p>
      </div>
    </div>
  </section>

  <!-- RealScout Home Value Widget -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Instant Home Value Estimate</h2>
          <p class="text-lg text-gray-600">Enter your address below to get a professional valuation in seconds</p>
        </div>
        
        <!-- RealScout Home Value Widget -->
        <div class="flex justify-center">
          <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Our Valuation -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Home Valuation?</h2>
        <p class="text-lg text-gray-600">Get the most accurate and comprehensive home value assessment</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Real-Time Market Data</h3>
          <p class="text-gray-600">Powered by RealScout's advanced algorithms and current market trends in the Manzano area</p>
        </div>

        <div class="bg-white rounded-lg p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Instant Results</h3>
          <p class="text-gray-600">Get your home's estimated value in seconds, not days. No waiting, no hassle</p>
        </div>

        <div class="bg-white rounded-lg p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Expert Analysis</h3>
          <p class="text-gray-600">Our local Manzano area experts review and validate every valuation for accuracy</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Market Insights -->
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Manzano Market Trends</h2>
        <p class="text-lg text-gray-600">Stay informed with the latest market data affecting your home's value</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-gray-50 rounded-lg p-6 text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">+8.5%</div>
          <div class="text-sm text-gray-600 mb-1">Year-over-Year Growth</div>
          <div class="text-xs text-gray-500">Strong appreciation in Manzano area</div>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">28 days</div>
          <div class="text-sm text-gray-600 mb-1">Average Days on Market</div>
          <div class="text-xs text-gray-500">Faster than Las Vegas average</div>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">98.2%</div>
          <div class="text-sm text-gray-600 mb-1">List-to-Sale Ratio</div>
          <div class="text-xs text-gray-500">Excellent pricing accuracy</div>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 text-center">
          <div class="text-3xl font-bold text-primary-600 mb-2">High</div>
          <div class="text-sm text-gray-600 mb-1">Market Activity</div>
          <div class="text-xs text-gray-500">Increased buyer demand</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-gradient-primary text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Sell Your Manzano Home?</h2>
      <p class="text-xl text-primary-100 mb-8">Get a comprehensive market analysis and expert selling guidance</p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Schedule Consultation
        </a>
        <a href="/selling-guide" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          View Selling Guide
        </a>
      </div>
    </div>
  </section>
</main>