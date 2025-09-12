<script>
import GuideCard from '$lib/components/GuideCard.svelte';
import SEO from '$lib/components/SEO.svelte';
import { getGuidesForPage } from '$lib/data/guides.js';
import { ManzanoSchemas } from '$lib/seo/schemas.js';

// Generate schemas
const schemas = new ManzanoSchemas();
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const pageSchemas = [
  schemas.website(),
  schemas.breadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Selling Guide', url: '/selling-guide' },
  ]),
];

// Get guides for selling guide page
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const sellingGuides = getGuidesForPage('selling-guide');

// Selling process steps
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const sellingSteps = [
  {
    step: 1,
    title: 'Home Valuation & Market Analysis',
    description:
      'Get a comprehensive market analysis and accurate home valuation for your Manzano area property.',
    icon: 'calculator',
    details: [
      'Professional CMA (Comparative Market Analysis)',
      'Current market trends in 89121 zip code',
      'Recent sales data and pricing strategies',
      'Timeline recommendations for optimal sale',
    ],
  },
  {
    step: 2,
    title: 'Pre-Listing Preparation',
    description: 'Prepare your home for maximum market appeal and faster sale.',
    icon: 'home',
    details: [
      'Staging recommendations and decluttering',
      'Minor repairs and improvements',
      'Professional photography and virtual tours',
      'Curb appeal enhancements',
    ],
  },
  {
    step: 3,
    title: 'Strategic Marketing & Listing',
    description: 'Launch your home with a comprehensive marketing strategy across all channels.',
    icon: 'megaphone',
    details: [
      'MLS listing with professional photos',
      'Social media and digital marketing',
      'Open house coordination',
      'Targeted buyer outreach',
    ],
  },
  {
    step: 4,
    title: 'Showings & Negotiations',
    description: 'Manage showings professionally and negotiate the best possible terms.',
    icon: 'handshake',
    details: [
      'Flexible showing scheduling',
      'Buyer qualification and screening',
      'Offer evaluation and counter-offers',
      'Contract negotiation expertise',
    ],
  },
  {
    step: 5,
    title: 'Transaction Management',
    description: 'Guide you through the closing process with minimal stress.',
    icon: 'document',
    details: [
      'Contract management and deadlines',
      'Inspection coordination',
      'Appraisal process oversight',
      'Closing coordination and support',
    ],
  },
];

// Market insights
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const marketInsights = [
  {
    metric: 'Average Days on Market',
    value: '28 days',
    trend: '+12%',
    description: 'Faster than Las Vegas average',
  },
  {
    metric: 'Average Sale Price',
    value: '$485,000',
    trend: '+8.5%',
    description: 'Strong appreciation in Manzano area',
  },
  {
    metric: 'List-to-Sale Ratio',
    value: '98.2%',
    trend: '+2.1%',
    description: 'Excellent pricing accuracy',
  },
  {
    metric: 'Market Activity',
    value: 'High',
    trend: '+15%',
    description: 'Increased buyer demand',
  },
];

// Pricing strategies
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const pricingStrategies = [
  {
    strategy: 'Competitive Pricing',
    description: 'Price slightly below market to generate multiple offers',
    pros: ['Quick sale', 'Multiple offers', 'Above asking price potential'],
    cons: ['Lower initial price', 'May sell too quickly'],
    bestFor: 'Sellers who need to move quickly',
  },
  {
    strategy: 'Market Value Pricing',
    description: 'Price at current market value for steady interest',
    pros: ['Fair market price', 'Steady showings', 'Reasonable timeline'],
    cons: ['Longer market time', 'May need price adjustments'],
    bestFor: 'Sellers with flexible timeline',
  },
  {
    strategy: 'Premium Pricing',
    description: 'Price above market for unique or luxury properties',
    pros: ['Higher potential profit', 'Attracts serious buyers', 'No lowball offers'],
    cons: ['Longer market time', 'May need price reductions', 'Limited buyer pool'],
    bestFor: 'Unique or luxury properties',
  },
];
</script>

<SEO 
  title="Selling Guide | Manzano Homes | Expert Tips for Selling Your Las Vegas Home"
  description="Complete guide to selling your home in Manzano neighborhood Las Vegas. Expert tips, market insights, and step-by-step selling process from Manzano Homes real estate professionals."
  canonical="https://www.manzanohomes.com/selling-guide"
  image="/og-selling-guide.jpg"
  schemas={pageSchemas}
/>

<main class="min-h-screen bg-gray-50" id="main-content">
  <!-- Hero Section -->
  <section class="bg-gradient-primary text-white py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Selling Your Manzano Home</h1>
        <p class="text-xl text-primary-100 mb-6">Expert guidance to maximize your home's value and sell faster</p>
        <p class="text-lg text-primary-200 mb-8">Get the most from your Las Vegas real estate investment with our proven selling strategies</p>
        
        <!-- Featured Seller Guide Resource -->
        {#each sellingGuides as guide}
          <GuideCard 
            guide={{
              ...guide,
              variant: 'featured'
            }} 
          />
        {/each}
      </div>
    </div>
  </section>

  <!-- Market Insights -->
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Current Manzano Market Insights</h2>
        <p class="text-lg text-gray-600">Stay informed with the latest market data for the 89121 area</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each marketInsights as insight}
          <div class="bg-gray-50 rounded-lg p-6 text-center">
            <div class="text-3xl font-bold text-primary-600 mb-2">{insight.value}</div>
            <div class="text-sm text-gray-600 mb-1">{insight.metric}</div>
            <div class="text-sm text-green-600 font-semibold">{insight.trend}</div>
            <div class="text-xs text-gray-500 mt-2">{insight.description}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Selling Process Steps -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Proven 5-Step Selling Process</h2>
        <p class="text-lg text-gray-600">Follow our systematic approach to sell your home faster and for more money</p>
      </div>

      <div class="space-y-8">
        {#each sellingSteps as step}
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-8">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <span class="text-2xl font-bold text-primary-600">{step.step}</span>
                  </div>
                </div>
                <div class="ml-6 flex-1">
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p class="text-lg text-gray-600 mb-4">{step.description}</p>
                  <ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {#each step.details as detail}
                      <li class="flex items-center text-gray-700">
                        <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        {detail}
                      </li>
                    {/each}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Pricing Strategies -->
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Pricing Strategies That Work</h2>
        <p class="text-lg text-gray-600">Choose the right pricing approach for your situation and goals</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each pricingStrategies as strategy}
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-3">{strategy.strategy}</h3>
            <p class="text-gray-600 mb-4">{strategy.description}</p>
            
            <div class="mb-4">
              <h4 class="font-semibold text-green-700 mb-2">Pros:</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                {#each strategy.pros as pro}
                  <li>• {pro}</li>
                {/each}
              </ul>
            </div>
            
            <div class="mb-4">
              <h4 class="font-semibold text-red-700 mb-2">Cons:</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                {#each strategy.cons as con}
                  <li>• {con}</li>
                {/each}
              </ul>
            </div>
            
            <div class="bg-primary-50 p-3 rounded">
              <p class="text-sm text-primary-800"><strong>Best for:</strong> {strategy.bestFor}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-gradient-primary text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Sell Your Manzano Home?</h2>
      <p class="text-xl text-primary-100 mb-8">Get a free home valuation and expert selling consultation</p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/home-valuation" class="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Get Free Home Valuation
        </a>
        <a href="/contact" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          Schedule Consultation
        </a>
      </div>
    </div>
  </section>
</main>
