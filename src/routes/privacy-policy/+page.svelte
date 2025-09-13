<script>
// Get current date for last updated
const _lastUpdated = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
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
  <title>Privacy Policy - Manzano Homes Real Estate | Las Vegas, NV</title>
  <meta name="description" content="Privacy Policy for Manzano Homes. Learn how we collect, use, and protect your personal information when using our real estate services in Las Vegas, NV.">
  <meta name="keywords" content="privacy policy, data protection, personal information, real estate privacy, Las Vegas real estate">
  <meta property="og:title" content="Privacy Policy - Manzano Homes">
  <meta property="og:description" content="How we protect your privacy and personal information">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://manzanohomes.com/privacy-policy">
  <link rel="canonical" href="https://manzanohomes.com/privacy-policy">
  
  <!-- Schema.org structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Manzano Homes",
    "description": "Privacy Policy for Manzano Homes Real Estate Services",
    "url": "https://manzanohomes.com/privacy-policy",
    "publisher": {
      "@type": "Organization",
      "name": "Manzano Homes",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3693 Manzano Peak Ave",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89121",
        "addressCountry": "US"
      }
    }
  }
  </script>
</svelte:head>

<div id="main-content" class="min-h-screen bg-gray-50">
  <!-- Header Section -->
  <section class="bg-primary-900 text-white py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
      <p class="text-xl text-primary-100">Last updated: {lastUpdated}</p>
    </div>
  </section>

  <!-- Main Content -->
  <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="p-8 md:p-12">
        
        <!-- Table of Contents -->
        <nav class="mb-12 bg-gray-50 p-6 rounded-lg" aria-label="Table of contents">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
          <ul class="space-y-2 text-sm">
            <li><a href="#introduction" class="text-primary-600 hover:text-primary-700 underline">1. Introduction</a></li>
            <li><a href="#information-we-collect" class="text-primary-600 hover:text-primary-700 underline">2. Information We Collect</a></li>
            <li><a href="#how-we-use-information" class="text-primary-600 hover:text-primary-700 underline">3. How We Use Information</a></li>
            <li><a href="#information-sharing" class="text-primary-600 hover:text-primary-700 underline">4. Information Sharing</a></li>
            <li><a href="#third-party-services" class="text-primary-600 hover:text-primary-700 underline">5. Third-Party Services</a></li>
            <li><a href="#data-security" class="text-primary-600 hover:text-primary-700 underline">6. Data Security</a></li>
            <li><a href="#your-rights" class="text-primary-600 hover:text-primary-700 underline">7. Your Rights</a></li>
            <li><a href="#cookies-policy" class="text-primary-600 hover:text-primary-700 underline">8. Cookies Policy</a></li>
            <li><a href="#childrens-privacy" class="text-primary-600 hover:text-primary-700 underline">9. Children's Privacy</a></li>
            <li><a href="#changes-to-policy" class="text-primary-600 hover:text-primary-700 underline">10. Changes to Policy</a></li>
            <li><a href="#contact-information" class="text-primary-600 hover:text-primary-700 underline">11. Contact Information</a></li>
          </ul>
        </nav>

        <!-- Introduction -->
        <section id="introduction" class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
          <div class="prose prose-lg max-w-none text-gray-700">
            <p class="mb-4">
              <strong>Manzano Homes</strong> ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website manzanohomes.com or use our real estate services.
            </p>
            <p class="mb-4">
              <strong>Our Address:</strong><br>
              3693 Manzano Peak Ave<br>
              Las Vegas, NV 89121
            </p>
            <p class="mb-4">
              This policy applies to all visitors to our website, potential clients, current clients, and anyone who provides personal information to us in connection with our real estate services in the Las Vegas area, particularly the 89121 zip code and surrounding neighborhoods.
            </p>
            <p>
              By using our website or services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </section>

        <!-- Information We Collect -->
        <section id="information-we-collect" class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
          <div class="prose prose-lg max-w-none text-gray-700">
            <p class="mb-4">We collect several types of information from and about users of our website and services:</p>
            
            <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>Contact information (name, email address, phone number, mailing address)</li>
              <li>Property search preferences and criteria</li>
              <li>Home valuation request details (property address, features, condition)</li>
              <li>Financial information for pre-approval processes (income, credit status)</li>
              <li>Real estate transaction history and preferences</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Technical Information</h3>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>IP addresses and browser information</li>
              <li>Device information and operating system</li>
              <li>Website usage patterns and preferences</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Referral sources and search terms</li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-3">Third-Party Information</h3>
            <ul class="list-disc pl-6 mb-4 space-y-2">
              <li>MLS data through RealScout integration</li>
              <li>Public records and property information</li>
              <li>Social media profile information (if you connect accounts)</li>
              <li>Information from lenders and title companies</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </main>
</div>
