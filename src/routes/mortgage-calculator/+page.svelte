<script>
import { onMount } from 'svelte';

let homePrice = 500000;
let downPayment = 100000;
let interestRate = 6.5;
let loanTerm = 30;
let propertyTax = 0.8; // Annual property tax rate
let insurance = 1500; // Annual homeowners insurance
let pmi = 0; // PMI rate
let hoa = 0; // Monthly HOA fees
let showAdvanced = false;
let showResults = false;

// Reactive calculations
$: loanAmount = homePrice - downPayment;
$: monthlyRate = interestRate / 100 / 12;
$: numPayments = loanTerm * 12;
$: monthlyPayment =
  (loanAmount * (monthlyRate * (1 + monthlyRate) ** numPayments)) /
  ((1 + monthlyRate) ** numPayments - 1);
$: totalPaid = monthlyPayment * numPayments;
$: totalInterest = totalPaid - loanAmount;
$: downPaymentPercent = ((downPayment / homePrice) * 100).toFixed(1);

// Advanced calculations
$: monthlyPropertyTax = (homePrice * propertyTax / 100) / 12;
$: monthlyInsurance = insurance / 12;
$: monthlyPMI = (pmi > 0 && downPaymentPercent < 20) ? (loanAmount * pmi / 100) / 12 : 0;
$: totalMonthlyPayment = monthlyPayment + monthlyPropertyTax + monthlyInsurance + monthlyPMI + hoa;

// Affordability calculations
$: recommendedIncome = totalMonthlyPayment * 12 / 0.28; // 28% rule
$: maxAffordableHome = recommendedIncome * 0.28 * 12 / ((monthlyRate * (1 + monthlyRate) ** numPayments) / ((1 + monthlyRate) ** numPayments - 1) + monthlyPropertyTax + monthlyInsurance + hoa);

// Interactive features
let animatedValues = {
  monthlyPayment: 0,
  totalInterest: 0,
  totalPaid: 0
};

onMount(() => {
  // Animate initial values
  setTimeout(() => {
    animateValue('monthlyPayment', monthlyPayment);
    animateValue('totalInterest', totalInterest);
    animateValue('totalPaid', totalPaid);
  }, 500);
});

function animateValue(key, targetValue) {
  const startValue = 0;
  const duration = 2000;
  const startTime = Date.now();
  
  function updateValue() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentValue = startValue + (targetValue - startValue) * progress;
    
    animatedValues[key] = Math.round(currentValue);
    
    if (progress < 1) {
      requestAnimationFrame(updateValue);
    }
  }
  
  updateValue();
}

// Preset scenarios
const scenarios = [
  { name: 'Conservative', price: 400000, down: 80000, rate: 6.0, term: 30 },
  { name: 'Moderate', price: 500000, down: 100000, rate: 6.5, term: 30 },
  { name: 'Aggressive', price: 600000, down: 120000, rate: 7.0, term: 30 },
  { name: 'First-Time Buyer', price: 350000, down: 35000, rate: 6.8, term: 30 }
];

function applyScenario(scenario) {
  homePrice = scenario.price;
  downPayment = scenario.down;
  interestRate = scenario.rate;
  loanTerm = scenario.term;
  showResults = true;
  
  // Re-animate values
  setTimeout(() => {
    animateValue('monthlyPayment', monthlyPayment);
    animateValue('totalInterest', totalInterest);
    animateValue('totalPaid', totalPaid);
  }, 100);
}

function toggleAdvanced() {
  showAdvanced = !showAdvanced;
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}
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
  </script>
</svelte:head>

<div id="main-content" class="min-h-screen bg-gray-50 py-12">
  <div class="max-w-4xl mx-auto px-4">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Mortgage Calculator</h1>
      <p class="text-lg text-gray-600">Estimate your monthly mortgage payments and explore different financing options</p>
    </div>
    
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
</div>
