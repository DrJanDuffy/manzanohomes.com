<script>
import { onMount } from 'svelte';
import SEO from '$lib/components/SEO.svelte';

onMount(() => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
});
</script>

<SEO
  title="Real Estate Careers - Join Our Team | Manzano Homes Las Vegas"
  description="Join our team of dedicated real estate professionals helping families find perfect homes in Las Vegas. Explore career opportunities at Manzano Homes."
  canonical="/careers"
  image="/og-default.jpg"
  schemas={[
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Manzano Homes",
      "url": "https://www.manzanohomes.com",
      "logo": "https://www.manzanohomes.com/logo.png",
      "description": "Premier real estate services in the Manzano neighborhood of Las Vegas, NV",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3693 Manzano Peak Ave",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV",
        "postalCode": "89121",
        "addressCountry": "US"
      },
      "telephone": "(702) 500-1942",
      "email": "DrDuffySells@ManzanoHomes.com"
    },
    {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "title": "Real Estate Agent - Homes Specialist",
      "description": "Join our team as a real estate agent specializing in homes sales in the Manzano neighborhood and surrounding Las Vegas areas.",
      "datePosted": "2025-01-27",
      "validThrough": "2025-12-31",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Manzano Homes",
        "sameAs": "https://www.manzanohomes.com"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3693 Manzano Peak Ave",
          "addressLocality": "Las Vegas",
          "addressRegion": "NV",
          "postalCode": "89121",
          "addressCountry": "US"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 50000,
          "maxValue": 150000,
          "unitText": "YEAR"
        }
      }
    }
  ]}
/>

<svelte:head>
  <title>Real Estate Careers - Join Our Team | Manzano Homes Las Vegas</title>
  <meta name="description" content="Join our team of dedicated real estate professionals helping families find perfect homes in Las Vegas. Explore career opportunities at Manzano Homes." />
  <meta name="keywords" content="real estate careers, homes sales jobs, Las Vegas real estate jobs, Manzano Homes careers, real estate agent positions" />
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center">
      <h1 class="text-5xl font-bold mb-6">Join Our Real Estate Team</h1>
      <p class="text-xl mb-8 max-w-3xl mx-auto">
        Help families find their perfect homes in Las Vegas while building a rewarding career in real estate
      </p>
      <a href="#open-positions" class="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        View Open Positions
      </a>
    </div>
  </div>
</section>

<!-- Why Work With Us -->
<section class="py-16 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Why Choose Manzano Homes?</h2>
      <p class="text-lg text-gray-600">We're building the premier real estate team in Las Vegas</p>
    </div>
    
    <div class="grid md:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-blue-600 text-4xl mb-4">🏠</div>
        <h3 class="text-xl font-semibold mb-3">Homes Expertise</h3>
        <p class="text-gray-600">Specialize in helping clients find and sell homes in the most desirable Las Vegas neighborhoods</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-blue-600 text-4xl mb-4">📈</div>
        <h3 class="text-xl font-semibold mb-3">Growth Opportunities</h3>
        <p class="text-gray-600">Unlimited earning potential with comprehensive training and support from experienced professionals</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-blue-600 text-4xl mb-4">🤝</div>
        <h3 class="text-xl font-semibold mb-3">Team Culture</h3>
        <p class="text-gray-600">Join a collaborative team that values integrity, professionalism, and client success</p>
      </div>
    </div>
  </div>
</section>

<!-- Open Positions -->
<section id="open-positions" class="py-16">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Current Openings</h2>
      <p class="text-lg text-gray-600">Explore our available positions and find your perfect fit</p>
    </div>
    
    <div class="space-y-6">
      <!-- Real Estate Agent Position -->
      <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 class="text-2xl font-semibold text-blue-900">Real Estate Agent - Homes Specialist</h3>
            <p class="text-gray-600">Full-time • Las Vegas, NV</p>
          </div>
          <div class="mt-4 md:mt-0">
            <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Hiring Now</span>
          </div>
        </div>
        
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Job Description:</h4>
          <p class="text-gray-700 mb-4">
            Join our team as a licensed real estate agent specializing in homes sales throughout Las Vegas. 
            Help clients navigate the competitive real estate market while building lasting relationships and achieving personal success.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Help clients buy and sell homes</li>
              <li>Conduct market analysis and property valuations</li>
              <li>Build and maintain client relationships</li>
              <li>Generate leads through networking and marketing</li>
              <li>Stay current with Las Vegas real estate trends</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-2">Requirements:</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Active Nevada Real Estate License</li>
              <li>2+ years real estate experience preferred</li>
              <li>Strong communication and negotiation skills</li>
              <li>Knowledge of Las Vegas market</li>
              <li>Self-motivated and goal-oriented</li>
            </ul>
          </div>
        </div>
        
        <div class="mt-6 pt-4 border-t border-gray-200">
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="mailto:DrDuffySells@ManzanoHomes.com?subject=Real Estate Agent Application" 
               class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">
              Apply Now
            </a>
            <a href="#benefits" class="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center">
              Learn About Benefits
            </a>
          </div>
        </div>
      </div>
      
      <!-- Administrative Assistant Position -->
      <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 class="text-2xl font-semibold text-blue-900">Administrative Assistant</h3>
            <p class="text-gray-600">Part-time • Las Vegas, NV</p>
          </div>
          <div class="mt-4 md:mt-0">
            <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Part-time Available</span>
          </div>
        </div>
        
        <div class="mb-4">
          <h4 class="font-semibold mb-2">Job Description:</h4>
          <p class="text-gray-700 mb-4">
            Support our real estate team with administrative tasks, client communication, and office operations. 
            Perfect opportunity for someone looking to enter the real estate industry.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold mb-2">Responsibilities:</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>Answer phones and manage client inquiries</li>
              <li>Schedule appointments and showings</li>
              <li>Prepare marketing materials</li>
              <li>Maintain client databases</li>
              <li>Assist with transaction coordination</li>
            </ul>
          </div>
          
          <div>
            <h4 class="font-semibold mb-2">Requirements:</h4>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
              <li>High school diploma or equivalent</li>
              <li>Previous office experience preferred</li>
              <li>Excellent phone and email etiquette</li>
              <li>Proficiency in Microsoft Office</li>
              <li>Detail-oriented and organized</li>
            </ul>
          </div>
        </div>
        
        <div class="mt-6 pt-4 border-t border-gray-200">
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="mailto:DrDuffySells@ManzanoHomes.com?subject=Administrative Assistant Application" 
               class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center">
              Apply Now
            </a>
            <a href="#benefits" class="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors text-center">
              Learn About Benefits
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Benefits Section -->
<section id="benefits" class="py-16 bg-blue-50">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Employee Benefits & Perks</h2>
      <p class="text-lg text-gray-600">We invest in our team's success and well-being</p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-blue-600 text-3xl mb-3">💰</div>
        <h3 class="text-xl font-semibold mb-2">Competitive Commission</h3>
        <p class="text-gray-600">Industry-leading commission splits with unlimited earning potential</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-blue-600 text-3xl mb-3">📚</div>
        <h3 class="text-xl font-semibold mb-2">Training & Development</h3>
        <p class="text-gray-600">Comprehensive training programs and ongoing professional development</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-blue-600 text-3xl mb-3">🏢</div>
        <h3 class="text-xl font-semibold mb-2">Modern Office Space</h3>
        <p class="text-gray-600">Beautiful office environment in the heart of Manzano Peak</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-blue-600 text-3xl mb-3">📱</div>
        <h3 class="text-xl font-semibold mb-2">Technology Support</h3>
        <p class="text-gray-600">Access to latest real estate technology and marketing tools</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-blue-600 text-3xl mb-3">🎯</div>
        <h3 class="text-xl font-semibold mb-2">Marketing Support</h3>
        <p class="text-gray-600">Professional marketing materials and lead generation support</p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <div class="text-blue-600 text-3xl mb-3">🤝</div>
        <h3 class="text-xl font-semibold mb-2">Mentorship Program</h3>
        <p class="text-gray-600">Learn from experienced agents and industry leaders</p>
      </div>
    </div>
  </div>
</section>

<!-- Company Culture -->
<section class="py-16">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl font-bold mb-6">Our Company Culture</h2>
        <p class="text-lg text-gray-600 mb-6">
          At Manzano Homes, we believe that helping families find their perfect homes is more than just a job – it's a calling. 
          Our team is built on the foundation of integrity, professionalism, and genuine care for our clients.
        </p>
        
        <div class="space-y-4">
          <div class="flex items-start">
            <div class="text-blue-600 text-xl mr-3">✓</div>
            <div>
              <h3 class="font-semibold">Client-First Approach</h3>
              <p class="text-gray-600">Every decision we make is guided by what's best for our clients</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="text-blue-600 text-xl mr-3">✓</div>
            <div>
              <h3 class="font-semibold">Continuous Learning</h3>
              <p class="text-gray-600">We invest in ongoing education and professional development</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="text-blue-600 text-xl mr-3">✓</div>
            <div>
              <h3 class="font-semibold">Collaborative Environment</h3>
              <p class="text-gray-600">Team success is individual success – we support each other</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="text-blue-600 text-xl mr-3">✓</div>
            <div>
              <h3 class="font-semibold">Work-Life Balance</h3>
              <p class="text-gray-600">Flexible scheduling and support for personal commitments</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-gray-100 p-8 rounded-lg">
        <h3 class="text-2xl font-semibold mb-4">Ready to Join Our Team?</h3>
        <p class="text-gray-600 mb-6">
          Take the first step toward a rewarding career in real estate. We're always looking for passionate professionals 
          who share our commitment to helping families find their perfect homes.
        </p>
        
        <div class="space-y-4">
          <a href="mailto:DrDuffySells@ManzanoHomes.com?subject=Career Inquiry" 
             class="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold">
            Send Us Your Resume
          </a>
          
          <a href="tel:(702)500-1942" 
             class="block border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors text-center font-semibold">
            Call (702) 500-1942
          </a>
        </div>
        
        <div class="mt-6 pt-6 border-t border-gray-300">
          <p class="text-sm text-gray-500 text-center">
            We review applications within 48 hours and respond to all inquiries promptly.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-16 bg-gray-50">
  <div class="max-w-4xl mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <p class="text-lg text-gray-600">Common questions about careers at Manzano Homes</p>
    </div>
    
    <div class="space-y-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-3">What experience do I need to become a real estate agent?</h3>
        <p class="text-gray-600">
          While previous real estate experience is preferred, we welcome candidates with strong sales, customer service, 
          or business backgrounds. The most important qualities are integrity, communication skills, and a genuine desire 
          to help people find their perfect homes.
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-3">What training do you provide?</h3>
        <p class="text-gray-600">
          We provide comprehensive onboarding training covering Nevada real estate laws, market analysis, client communication, 
          and our proprietary systems. Ongoing training includes weekly team meetings, monthly workshops, and annual 
          professional development opportunities.
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-3">What's the earning potential?</h3>
        <p class="text-gray-600">
          Real estate agents at Manzano Homes typically earn between $50,000 and $150,000+ annually, depending on experience 
          and performance. Our commission structure is competitive, and there's unlimited earning potential for motivated agents.
        </p>
      </div>
      
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold mb-3">Do you offer part-time positions?</h3>
        <p class="text-gray-600">
          Yes, we have part-time administrative positions available. While most real estate agent positions are full-time, 
          we're flexible and can work with candidates who have other commitments.
        </p>
      </div>
    </div>
  </div>
</section>
