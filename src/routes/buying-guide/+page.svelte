<script>
import GuideCard from '$lib/components/GuideCard.svelte';
import { getGuidesForPage } from '$lib/data/guides.js';
import { onMount } from 'svelte';

// Get guides for buying guide page
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const buyingGuides = getGuidesForPage('buying-guide');

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const buyingSteps = [
  {
    step: 1,
    title: 'Get Pre-Approved',
    description:
      "Secure your financing before you start looking. This shows sellers you're serious and helps you understand your budget.",
    details: [
      'Check your credit score and improve if needed',
      'Gather financial documents (W-2s, tax returns, bank statements)',
      'Compare rates from multiple lenders',
      'Get pre-approval letter (valid for 60-90 days)',
    ],
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    step: 2,
    title: 'Find Your Agent',
    description:
      'Work with an experienced local agent who knows the Las Vegas market and can guide you through the process.',
    details: [
      'Look for agents with local expertise',
      'Check reviews and testimonials',
      'Interview multiple agents',
      'Ensure good communication and availability',
    ],
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    step: 3,
    title: 'Start House Hunting',
    description:
      'Tour homes in your price range and preferred neighborhoods. Take notes and photos to remember each property.',
    details: [
      'Use online tools and MLS listings',
      'Schedule showings with your agent',
      'Take detailed notes and photos',
      'Consider commute times and amenities',
    ],
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    step: 4,
    title: 'Make an Offer',
    description:
      'When you find the right home, your agent will help you craft a competitive offer based on market conditions.',
    details: [
      'Research comparable sales (comps)',
      'Consider market conditions',
      'Include contingencies (inspection, appraisal, financing)',
      'Be prepared to negotiate',
    ],
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    step: 5,
    title: 'Home Inspection',
    description:
      'Hire a professional inspector to identify any potential issues with the property before closing.',
    details: [
      'Schedule inspection within contingency period',
      'Attend the inspection if possible',
      'Review inspection report carefully',
      'Negotiate repairs or price adjustments if needed',
    ],
    icon: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    step: 6,
    title: 'Finalize Financing',
    description:
      'Work with your lender to complete the loan process. Provide any additional documentation requested.',
    details: [
      'Respond quickly to lender requests',
      'Lock in your interest rate',
      'Complete final loan application',
      'Get final loan approval',
    ],
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1',
  },
  {
    step: 7,
    title: 'Final Walkthrough',
    description:
      "Conduct a final inspection of the property to ensure it's in the same condition as when you made your offer.",
    details: [
      'Check all agreed-upon repairs',
      'Test all systems and appliances',
      'Verify property condition',
      'Ensure all items are included',
    ],
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  },
  {
    step: 8,
    title: 'Closing Day',
    description:
      'Sign the final paperwork, pay closing costs, and receive the keys to your new home!',
    details: [
      'Review all closing documents',
      'Bring certified funds for closing costs',
      'Bring valid ID',
      'Get keys and move in!',
    ],
    icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
  },
];

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const commonMistakes = [
  'Skipping pre-approval and house hunting without a budget',
  'Not getting a home inspection to avoid "unnecessary" costs',
  'Making emotional decisions without considering resale value',
  'Not accounting for closing costs and moving expenses',
  'Falling in love with the first house you see',
];

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const firstTimeBuyerTips = [
  'Start saving for a down payment early (aim for 20% but 3-5% minimum)',
  'Research first-time buyer programs and grants',
  "Don't max out your budget - leave room for unexpected expenses",
  'Consider the total cost of homeownership (maintenance, taxes, insurance)',
  "Take your time and don't rush into a decision",
];
</script>

<svelte:head>
  <title>Home Buying Guide - Complete Process for Las Vegas | Manzano Homes</title>
  <meta name="description" content="Complete step-by-step guide to buying a home in Las Vegas and the Manzano neighborhood. Expert tips for first-time buyers and seasoned investors.">
  <meta property="og:title" content="Complete Home Buying Guide - Manzano Homes">
  <meta property="og:description" content="Expert guidance for buying your first home in Las Vegas">
  <link rel="canonical" href="https://manzanohomes.com/buying-guide">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Buy a Home in Las Vegas",
    "description": "Complete step-by-step guide to purchasing a home in Las Vegas",
    "url": "https://manzanohomes.com/buying-guide",
    "totalTime": "P60D",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "500000"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Get Pre-Approved",
        "text": "Secure your financing before you start looking"
      },
      {
        "@type": "HowToStep", 
        "name": "Find Your Agent",
        "text": "Work with an experienced local agent"
      }
    ]
  }
  </script>
</svelte:head>

<div id="main-content" class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <section class="bg-gradient-primary text-white pt-24 md:pt-32 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Complete Home Buying Guide</h1>
      <p class="text-xl text-primary-100 mb-8">Your step-by-step roadmap to purchasing a home in Las Vegas and the Manzano neighborhood</p>
      
      <!-- Featured External Resource -->
      {#each buyingGuides as guide}
        <GuideCard 
          guide={{
            ...guide,
            variant: 'featured'
          }} 
        />
      {/each}
    </div>
  </section>

  <!-- Buying Steps -->
  <section class="py-16" aria-labelledby="steps-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="steps-heading" class="text-3xl font-bold text-gray-900 mb-8">8 Steps to Homeownership</h2>
      
      <div class="space-y-8">
        {#each buyingSteps as step}
          <div class="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
              </div>
              <div class="flex-1">
                <div class="flex items-center mb-4">
                  <svg class="w-6 h-6 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={step.icon} />
                  </svg>
                  <h3 class="text-2xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p class="text-lg text-gray-600 mb-4">{step.description}</p>
                <ul class="space-y-2">
                  {#each step.details as detail}
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      <span class="text-gray-700">{detail}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Tips and Mistakes -->
  <section class="py-16 bg-white" aria-labelledby="tips-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="tips-heading" class="text-3xl font-bold text-gray-900 mb-8">Expert Tips & Common Mistakes</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- First-Time Buyer Tips -->
        <div class="bg-primary-50 rounded-lg p-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">First-Time Buyer Tips</h3>
          <ul class="space-y-3">
            {#each firstTimeBuyerTips as tip}
              <li class="flex items-start">
                <svg class="w-5 h-5 text-primary-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700">{tip}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Common Mistakes -->
        <div class="bg-red-50 rounded-lg p-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h3>
          <ul class="space-y-3">
            {#each commonMistakes as mistake}
              <li class="flex items-start">
                <svg class="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <span class="text-gray-700">{mistake}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Financing Options -->
  <section class="py-16" aria-labelledby="financing-heading">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="financing-heading" class="text-3xl font-bold text-gray-900 mb-8">Financing Options</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-3">Conventional Loans</h3>
          <p class="text-gray-600 mb-4">Traditional mortgages with 20% down payment, or as low as 3% with PMI.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• Competitive interest rates</li>
            <li>• Flexible terms (15-30 years)</li>
            <li>• No geographic restrictions</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-3">FHA Loans</h3>
          <p class="text-gray-600 mb-4">Government-backed loans with low down payments, ideal for first-time buyers.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• 3.5% minimum down payment</li>
            <li>• Flexible credit requirements</li>
            <li>• Competitive rates</li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-3">VA Loans</h3>
          <p class="text-gray-600 mb-4">Zero down payment loans for eligible veterans, active military, and spouses.</p>
          <ul class="text-sm text-gray-600 space-y-1">
            <li>• No down payment required</li>
            <li>• No PMI required</li>
            <li>• Competitive rates</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- First-Time Buyer Properties Section -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Perfect Homes for First-Time Buyers</h2>
        <p class="text-lg text-gray-600">Affordable starter homes in the Manzano neighborhood</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <realscout-office-listings 
          agent-encoded-id="QWdlbnQtMjI1MDUw" 
          sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
          listing-status="For Sale" 
          property-types="SFR" 
          price-min="350000" 
          price-max="500000">
        </realscout-office-listings>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-primary-900 text-white" aria-labelledby="cta-heading">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 id="cta-heading" class="text-3xl font-bold mb-4">Ready to Start Your Home Buying Journey?</h2>
      <p class="text-xl text-primary-100 mb-8">Let our experienced team guide you through every step of the process</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/contact" class="inline-flex items-center px-8 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors focus:ring-4 focus:ring-primary-200" aria-label="Contact us to start your home buying process">
          Get Started Today
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="/homes-for-sale" class="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-900 transition-colors focus:ring-4 focus:ring-primary-200" aria-label="Browse available homes for sale">
          Browse Homes
        </a>
      </div>
    </div>
  </section>
</div>

<style>
  realscout-office-listings {
    --rs-listing-divider-color: rgb(101, 141, 172);
    width: 100%;
  }
</style>
