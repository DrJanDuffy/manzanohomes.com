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
    { name: 'Accessibility', url: '/accessibility' },
  ]),
];

const _lastUpdated = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
</script>

<SEO 
  title="Accessibility Statement | Manzano Homes | WCAG 2.1 AA Compliant"
  description="Manzano Homes is committed to web accessibility. Learn about our WCAG 2.1 AA compliance, accessibility features, and how to report accessibility issues."
  canonical="https://www.manzanohomes.com/accessibility"
  image="/og-default.jpg"
  schemas={pageSchemas}
/>

<main class="min-h-screen bg-gray-50" id="main-content">
  <!-- Hero Section -->
  <section class="bg-gradient-primary text-white py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Accessibility Statement</h1>
        <p class="text-xl text-primary-100">Our commitment to inclusive design and equal access for all users</p>
        <p class="text-lg text-primary-200 mt-4">Last updated: {lastUpdated}</p>
      </div>
    </div>
  </section>

  <!-- Accessibility Commitment -->
  <section class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Accessibility Commitment</h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-6">
          Manzano Homes is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to our real estate services and information.
        </p>
        <p class="text-lg text-gray-600 leading-relaxed">
          We believe that everyone should have access to information about real estate opportunities, regardless of their abilities. This commitment extends to our website, mobile applications, and all digital platforms we use to serve our clients.
        </p>
      </div>
    </div>
  </section>

  <!-- WCAG Compliance -->
  <section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">WCAG 2.1 AA Compliance</h2>
        <p class="text-lg text-gray-600">We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-gray-50 rounded-lg p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Keyboard Navigation</h3>
          <p class="text-gray-600">All interactive elements can be accessed using only a keyboard</p>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Screen Reader Support</h3>
          <p class="text-gray-600">Compatible with screen readers and assistive technologies</p>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">High Contrast</h3>
          <p class="text-gray-600">Text and background colors meet WCAG contrast requirements</p>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Alternative Text</h3>
          <p class="text-gray-600">All images include descriptive alt text for screen readers</p>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Focus Indicators</h3>
          <p class="text-gray-600">Clear visual focus indicators for keyboard navigation</p>
        </div>

        <div class="bg-gray-50 rounded-lg p-6 text-center">
          <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Semantic HTML</h3>
          <p class="text-gray-600">Proper heading structure and semantic markup</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Feedback and Support -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Feedback and Support</h2>
        <p class="text-lg text-gray-600 leading-relaxed mb-6">
          We welcome feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Report Accessibility Issues</h3>
            <p class="text-gray-600 mb-4">
              If you experience any accessibility barriers on our website, please let us know:
            </p>
            <div class="bg-primary-50 p-6 rounded-lg">
              <p class="text-gray-700"><strong>Email:</strong> accessibility@manzanohomes.com</p>
              <p class="text-gray-700"><strong>Phone:</strong> (702) 500-1942</p>
              <p class="text-gray-700"><strong>Address:</strong> 3693 Manzano Peak Ave, Las Vegas, NV 89121</p>
            </div>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Response Time</h3>
            <p class="text-gray-600 mb-4">
              We aim to respond to accessibility feedback within 2 business days and will work to resolve any issues as quickly as possible.
            </p>
            <div class="bg-green-50 p-6 rounded-lg">
              <p class="text-green-800 font-semibold">Our Commitment</p>
              <p class="text-green-700">We are committed to providing an accessible experience for all users and will work diligently to address any accessibility concerns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
