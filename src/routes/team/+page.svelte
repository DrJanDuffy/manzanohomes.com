<script>
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const teamMembers = [
  {
    name: 'Dr. Jan Duffy',
    role: 'Founder & Principal Broker',
    image: '/api/placeholder/300/300',
    bio: 'With over 20 years of experience in Las Vegas real estate, Dr. Jan Duffy founded Manzano Homes to provide exceptional service to families in the Manzano neighborhood and surrounding areas.',
    email: 'DrDuffySells@ManzanoHomes.com',
    phone: '(702) 555-0001',
  },
  {
    name: 'Eugene Boyle',
    role: 'Senior Real Estate Agent',
    image: '/api/placeholder/300/300',
    bio: 'Specializing in luxury homes and first-time buyers, Eugene brings deep market knowledge and a commitment to finding the perfect home for every client.',
    email: 'HomeSales@ManzanoHomes.com',
    phone: '(702) 555-0002',
  },
  {
    name: 'Chance Fuller',
    role: 'Client Relations Manager',
    image: '/api/placeholder/300/300',
    bio: 'Ensuring smooth transactions and excellent customer service, Chance coordinates all aspects of the buying and selling process to exceed client expectations.',
    email: 'Info@ManzanoHomes.com',
    phone: '(702) 555-0003',
  },
];

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
  <title>Our Team - Expert Real Estate Professionals | Manzano Homes</title>
  <meta name="description" content="Meet the dedicated team of real estate professionals at Manzano Homes. Experienced agents serving Las Vegas and the Manzano neighborhood.">
  <meta property="og:title" content="Our Team - Manzano Homes Real Estate">
  <meta property="og:description" content="Expert real estate professionals dedicated to your success">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://manzanohomes.com/team">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Manzano Homes",
    "description": "Expert real estate professionals serving Las Vegas and the Manzano neighborhood",
    "url": "https://manzanohomes.com",
    "employee": [
      {
        "@type": "Person",
        "name": "Dr. Jan Duffy",
        "jobTitle": "Founder & Principal Broker",
        "email": "jan@manzanohomes.com",
        "telephone": "(702) 555-0001"
      },
      {
        "@type": "Person", 
        "name": "Michael Rodriguez",
        "jobTitle": "Senior Real Estate Agent",
        "email": "michael@manzanohomes.com",
        "telephone": "(702) 555-0002"
      },
      {
        "@type": "Person",
        "name": "Sarah Chen", 
        "jobTitle": "Client Relations Manager",
        "email": "sarah@manzanohomes.com",
        "telephone": "(702) 555-0003"
      }
    ]
  }
</svelte:head>

<div id="main-content" class="min-h-screen bg-gradient-to-b from-white to-gray-50">
  <!-- Hero Section -->
  <section class="relative bg-primary-900 text-white pt-24 md:pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
        <p class="text-xl text-primary-100 max-w-3xl mx-auto">
          Dedicated professionals committed to making your real estate dreams a reality
        </p>
      </div>
    </div>
  </section>

  <!-- Team Grid -->
  <section class="py-16" aria-labelledby="team-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="team-heading" class="sr-only">Our Team Members</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each teamMembers as member}
          <article class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow" itemscope itemtype="https://schema.org/Person">
            <img src={member.image} alt={member.name} class="w-full h-64 object-cover" itemprop="image">
            <div class="p-6">
              <h3 class="text-2xl font-bold text-gray-900 mb-1" itemprop="name">{member.name}</h3>
              <p class="text-primary-600 font-semibold mb-3" itemprop="jobTitle">{member.role}</p>
              <p class="text-gray-600 mb-4" itemprop="description">{member.bio}</p>
              <div class="space-y-2">
                <a href="mailto:{member.email}" class="flex items-center text-gray-600 hover:text-primary-600" itemprop="email">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span class="sr-only">Email {member.name}: </span>{member.email}
                </a>
                <a href="tel:{member.phone}" class="flex items-center text-gray-600 hover:text-primary-600" itemprop="telephone">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span class="sr-only">Call {member.name}: </span>{member.phone}
                </a>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="bg-primary-50 py-16" aria-labelledby="cta-heading">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 id="cta-heading" class="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Our Team?</h2>
      <p class="text-xl text-gray-600 mb-8">Let's discuss how we can help you achieve your real estate goals</p>
      <a href="/contact" class="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors focus:ring-4 focus:ring-primary-200" aria-label="Contact our team to discuss your real estate needs">
        Contact Us Today
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </section>
</div>
