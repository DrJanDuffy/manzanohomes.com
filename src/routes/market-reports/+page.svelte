<script>
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const marketData = {
  manzano: {
    name: 'Manzano Neighborhood',
    avgPrice: 485000,
    priceChange: 3.2,
    avgDaysOnMarket: 28,
    inventoryCount: 12,
    salesLastMonth: 8,
  },
  lasVegas: {
    name: 'Las Vegas Metro',
    avgPrice: 425000,
    priceChange: 2.8,
    avgDaysOnMarket: 32,
    inventoryCount: 2847,
    salesLastMonth: 2156,
  },
};

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const priceRanges = [
  { range: '$300k - $400k', count: 3, percentage: 25 },
  { range: '$400k - $500k', count: 4, percentage: 33 },
  { range: '$500k - $600k', count: 3, percentage: 25 },
  { range: '$600k+', count: 2, percentage: 17 },
];

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const monthlyTrends = [
  { month: 'Jan 2024', manzano: 472000, lasVegas: 415000 },
  { month: 'Feb 2024', manzano: 478000, lasVegas: 418000 },
  { month: 'Mar 2024', manzano: 485000, lasVegas: 425000 },
  { month: 'Apr 2024', manzano: 490000, lasVegas: 430000 },
  { month: 'May 2024', manzano: 485000, lasVegas: 425000 },
];
</script>

<svelte:head>
  <title>Market Reports - Las Vegas Real Estate Trends | Manzano Homes</title>
  <meta name="description" content="View detailed market reports and statistics for the Manzano neighborhood and Las Vegas area. Get insights on pricing, inventory, and market trends.">
  <meta property="og:title" content="Las Vegas Real Estate Market Reports - Manzano Homes">
  <meta property="og:description" content="Comprehensive market data and trends for Las Vegas real estate">
  <link rel="canonical" href="https://manzanohomes.com/market-reports">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Las Vegas Real Estate Market Data",
    "description": "Market statistics and trends for Las Vegas and Manzano neighborhood",
    "url": "https://manzanohomes.com/market-reports",
    "publisher": {
      "@type": "Organization",
      "name": "Manzano Homes"
    },
    "temporalCoverage": "2024-01/2024-05",
    "spatialCoverage": {
      "@type": "Place",
      "name": "Las Vegas, Nevada"
    }
  }
  </script>
</svelte:head>

<div id="main-content" class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Market Reports</h1>
      <p class="text-xl text-primary-100">Comprehensive real estate data and trends for Las Vegas and the Manzano neighborhood</p>
    </div>
  </section>

  <!-- Market Overview -->
  <section class="py-16" aria-labelledby="overview-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="overview-heading" class="text-3xl font-bold text-gray-900 mb-8">Current Market Overview</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {#each Object.entries(marketData) as [key, data]}
          <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{data.name}</h3>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="text-center p-4 bg-primary-50 rounded-lg">
                <p class="text-sm text-gray-600 mb-1">Average Price</p>
                <p class="text-2xl font-bold text-primary-600">${data.avgPrice.toLocaleString()}</p>
                <p class="text-sm {data.priceChange > 0 ? 'text-green-600' : 'text-red-600'}">
                  {data.priceChange > 0 ? '+' : ''}{data.priceChange}% vs last year
                </p>
              </div>
              
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <p class="text-sm text-gray-600 mb-1">Days on Market</p>
                <p class="text-2xl font-bold text-gray-900">{data.avgDaysOnMarket}</p>
                <p class="text-sm text-gray-500">Average</p>
              </div>
              
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <p class="text-sm text-gray-600 mb-1">Active Listings</p>
                <p class="text-2xl font-bold text-gray-900">{data.inventoryCount}</p>
                <p class="text-sm text-gray-500">Available</p>
              </div>
              
              <div class="text-center p-4 bg-gray-50 rounded-lg">
                <p class="text-sm text-gray-600 mb-1">Sales Last Month</p>
                <p class="text-2xl font-bold text-gray-900">{data.salesLastMonth}</p>
                <p class="text-sm text-gray-500">Closed</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Price Distribution -->
  <section class="py-16 bg-white" aria-labelledby="pricing-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="pricing-heading" class="text-3xl font-bold text-gray-900 mb-8">Manzano Neighborhood Price Distribution</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each priceRanges as range}
          <div class="bg-primary-50 rounded-lg p-6 text-center">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{range.range}</h3>
            <div class="text-3xl font-bold text-primary-600 mb-2">{range.count}</div>
            <p class="text-sm text-gray-600">{range.percentage}% of inventory</p>
            <div class="mt-3 w-full bg-gray-200 rounded-full h-2">
              <div class="bg-primary-600 h-2 rounded-full" style="width: {range.percentage}%"></div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Monthly Trends -->
  <section class="py-16" aria-labelledby="trends-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="trends-heading" class="text-3xl font-bold text-gray-900 mb-8">Monthly Price Trends</h2>
      
      <div class="bg-white rounded-lg shadow-lg p-6">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Manzano Avg Price</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Las Vegas Avg Price</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difference</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              {#each monthlyTrends as trend}
                <tr class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{trend.month}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${trend.manzano.toLocaleString()}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${trend.lasVegas.toLocaleString()}</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                    +${(trend.manzano - trend.lasVegas).toLocaleString()}
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Market Insights -->
  <section class="py-16 bg-primary-50" aria-labelledby="insights-heading">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="insights-heading" class="text-3xl font-bold text-gray-900 mb-8">Market Insights</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Current Market Conditions</h3>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Seller's market with low inventory</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-green-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span>Prices trending upward 3.2% annually</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-yellow-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <span>Competitive market for buyers</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-4">Buyer Recommendations</h3>
          <ul class="space-y-3 text-gray-600">
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <span>Get pre-approved before viewing homes</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <span>Be prepared to make competitive offers</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 text-blue-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <span>Consider homes slightly above budget</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-primary-900 text-white" aria-labelledby="cta-heading">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 id="cta-heading" class="text-3xl font-bold mb-4">Need Personalized Market Analysis?</h2>
      <p class="text-xl text-primary-100 mb-8">Get a detailed market report for your specific property or neighborhood</p>
      <a href="/contact" class="inline-flex items-center px-8 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors focus:ring-4 focus:ring-primary-200" aria-label="Contact us for personalized market analysis">
        Get Market Report
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </section>
</div>
