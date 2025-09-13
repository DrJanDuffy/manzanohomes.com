<script>
import SEO from '$lib/components/SEO.svelte';
import { ManzanoSchemas } from '$lib/seo/schemas.js';

// Generate schemas
const schemas = new ManzanoSchemas();
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const pageSchemas = [
  schemas.website(),
  schemas.breadcrumbs([
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms-of-service' },
  ]),
];

const _lastUpdated = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
</script>

<SEO 
  title="Terms of Service | Manzano Homes Real Estate | Las Vegas"
  description="Terms of service and conditions for using Manzano Homes real estate services in Las Vegas. Read our terms before using our website and services."
  canonical="https://www.manzanohomes.com/terms-of-service"
  image="/og-default.jpg"
  schemas={pageSchemas}
/>

<main class="min-h-screen bg-gray-50" id="main-content">
  <!-- Hero Section -->
  <section class="bg-gradient-primary text-white py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p class="text-xl text-primary-100">Last updated: {lastUpdated}</p>
      </div>
    </div>
  </section>

  <!-- Terms Content -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="p-8 md:p-12">
          <!-- Introduction -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p class="text-gray-600 leading-relaxed">
              Welcome to Manzano Homes ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website located at manzanohomes.com (the "Service") operated by Manzano Homes, a real estate services company located at 3693 Manzano Peak Ave, Las Vegas, NV 89121.
            </p>
            <p class="text-gray-600 leading-relaxed mt-4">
              By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
            </p>
          </div>

          <!-- Acceptance of Terms -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Acceptance of Terms</h2>
            <p class="text-gray-600 leading-relaxed">
              By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. These Terms constitute a legally binding agreement between you and Manzano Homes.
            </p>
          </div>

          <!-- Services Description -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Services Description</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Manzano Homes provides the following real estate services:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Real estate buying and selling assistance</li>
              <li>Home valuation services</li>
              <li>Neighborhood information and market analysis</li>
              <li>Mortgage calculator tools</li>
              <li>Property search and listing services</li>
              <li>Real estate consultation and advisory services</li>
            </ul>
          </div>

          <!-- User Responsibilities -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              When using our Service, you agree to:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Provide accurate and truthful information</li>
              <li>Use the Service only for lawful purposes</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
              <li>Not use the Service to transmit harmful or malicious code</li>
              <li>Respect the intellectual property rights of others</li>
              <li>Not engage in any activity that could damage or impair the Service</li>
            </ul>
          </div>

          <!-- Real Estate Services -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Real Estate Services</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              Our real estate services are provided in accordance with Nevada state laws and regulations. By engaging our services, you understand that:
            </p>
            <ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>We are licensed real estate professionals in the state of Nevada</li>
              <li>All real estate transactions are subject to applicable laws and regulations</li>
              <li>We may receive commissions from real estate transactions</li>
              <li>Property information is provided for informational purposes only</li>
              <li>We do not guarantee the accuracy of third-party property data</li>
            </ul>
          </div>

          <!-- Privacy and Data -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
            <p class="text-gray-600 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices. We collect and process personal information in accordance with applicable privacy laws and our Privacy Policy.
            </p>
          </div>

          <!-- Intellectual Property -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Manzano Homes and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
          </div>

          <!-- Limitation of Liability -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p class="text-gray-600 leading-relaxed">
              In no event shall Manzano Homes, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
            </p>
          </div>

          <!-- Disclaimer -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer</h2>
            <p class="text-gray-600 leading-relaxed">
              The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, Manzano Homes excludes all representations, warranties, conditions and terms relating to our Service and the use of this Service. Nothing in this disclaimer will limit or exclude our or your liability for fraud, death or personal injury.
            </p>
          </div>

          <!-- Governing Law -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p class="text-gray-600 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of the State of Nevada, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </div>

          <!-- Changes to Terms -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p class="text-gray-600 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          <!-- Contact Information -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p class="text-gray-600 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div class="bg-gray-50 p-6 rounded-lg">
              <p class="text-gray-700"><strong>Manzano Homes</strong></p>
              <p class="text-gray-700">3693 Manzano Peak Ave, Las Vegas, NV 89121</p>
              <p class="text-gray-700">Phone: (702) 500-1942</p>
              <p class="text-gray-700">Email: info@manzanohomes.com</p>
            </div>
          </div>

          <!-- Effective Date -->
          <div class="border-t pt-8">
            <p class="text-sm text-gray-500">
              These Terms of Service are effective as of {lastUpdated} and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
