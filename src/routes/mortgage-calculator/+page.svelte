<script>
let homePrice = $state(500000);
let downPayment = $state(100000);
let interestRate = $state(6.5);
let loanTerm = $state(30);

const loanAmount = $derived(homePrice - downPayment);
const monthlyRate = $derived(interestRate / 100 / 12);
const numPayments = $derived(loanTerm * 12);
const monthlyPayment = $derived(
  (loanAmount * (monthlyRate * (1 + monthlyRate) ** numPayments)) /
    ((1 + monthlyRate) ** numPayments - 1)
);
const totalPaid = $derived(monthlyPayment * numPayments);
const _totalInterest = $derived(totalPaid - loanAmount);
const _downPaymentPercent = $derived(((downPayment / homePrice) * 100).toFixed(1));

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
  <title>Mortgage Calculator - Estimate Your Monthly Payments | Manzano Homes</title>
  <meta name="description" content="Calculate your monthly mortgage payments with our free calculator. Estimate payments based on home price, down payment, interest rate, and loan term.">
  <meta property="og:title" content="Free Mortgage Calculator - Manzano Homes">
  <meta property="og:description" content="Calculate your monthly mortgage payments instantly">
  <link rel="canonical" href="https://manzanohomes.com/mortgage-calculator">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Mortgage Calculator",
    "description": "Free mortgage payment calculator for home buyers",
    "url": "https://manzanohomes.com/mortgage-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }
</svelte:head>

<div id="main-content" class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <section class="bg-gradient-primary text-white pt-24 md:pt-32 pb-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Mortgage Calculator</h1>
        <p class="text-xl text-primary-100 mb-6">Estimate your monthly mortgage payments and explore different financing options</p>
        <p class="text-lg text-primary-200">Make informed decisions about your home financing with our comprehensive calculator</p>
      </div>
    </div>
  </section>

  <!-- Calculator Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4">
    
    <div class="bg-white rounded-lg shadow-lg p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Input Fields -->
        <div>
          <label for="price" class="block text-sm font-medium text-gray-700 mb-2">
            Home Price ($)
          </label>
          <input
            id="price"
            type="number"
            bind:value={homePrice}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            aria-describedby="price-help"
          >
          <p id="price-help" class="text-sm text-gray-500 mt-1">Enter the purchase price of the home</p>
        </div>
        
        <div>
          <label for="down" class="block text-sm font-medium text-gray-700 mb-2">
            Down Payment ($)
          </label>
          <input
            id="down"
            type="number"
            bind:value={downPayment}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            aria-describedby="down-help"
          >
          <p id="down-help" class="text-sm text-gray-500 mt-1">{downPaymentPercent}% of home price</p>
        </div>
        
        <div>
          <label for="rate" class="block text-sm font-medium text-gray-700 mb-2">
            Interest Rate (%)
          </label>
          <input
            id="rate"
            type="number"
            step="0.1"
            bind:value={interestRate}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            aria-describedby="rate-help"
          >
          <p id="rate-help" class="text-sm text-gray-500 mt-1">Current average rate is around 6-7%</p>
        </div>
        
        <div>
          <label for="term" class="block text-sm font-medium text-gray-700 mb-2">
            Loan Term (years)
          </label>
          <select
            id="term"
            bind:value={loanTerm}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            aria-describedby="term-help"
          >
            <option value={15}>15 years</option>
            <option value={30}>30 years</option>
          </select>
          <p id="term-help" class="text-sm text-gray-500 mt-1">Shorter terms have higher payments but less interest</p>
        </div>
      </div>
      
      <!-- Results -->
      <div class="mt-8 p-6 bg-primary-50 rounded-lg">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">Your Estimated Payment</h2>
        <div class="text-4xl font-bold text-primary-600 mb-6">
          ${monthlyPayment.toFixed(2)}/month
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div class="bg-white p-4 rounded-lg">
            <p class="text-gray-600 mb-1">Loan Amount</p>
            <p class="font-semibold text-lg">${loanAmount.toLocaleString()}</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <p class="text-gray-600 mb-1">Total Paid</p>
            <p class="font-semibold text-lg">${totalPaid.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
          </div>
          <div class="bg-white p-4 rounded-lg">
            <p class="text-gray-600 mb-1">Total Interest</p>
            <p class="font-semibold text-lg">${totalInterest.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
          </div>
        </div>
      </div>
      
      <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div class="flex items-start">
          <svg class="w-5 h-5 text-yellow-600 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <div>
            <h3 class="font-semibold text-yellow-800 mb-1">Important Note</h3>
            <p class="text-sm text-yellow-800">
              This calculator provides estimates only. Actual payments may vary based on taxes, insurance, HOA fees, and other factors. 
              Consult with a mortgage professional for accurate calculations.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- CTA Section -->
    <div class="mt-12 text-center">
      <h3 class="text-2xl font-bold text-gray-900 mb-4">Ready to Get Pre-Approved?</h3>
      <p class="text-gray-600 mb-6">Connect with our preferred lenders for competitive rates and personalized service</p>
      <a href="/contact" class="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors focus:ring-4 focus:ring-primary-200" aria-label="Contact us to get pre-approved for a mortgage">
        Get Started
      </a>
    </div>
  </div>
</section>
</div>
