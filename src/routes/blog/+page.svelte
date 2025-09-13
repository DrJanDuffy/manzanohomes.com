<script>
import SEO from '$lib/components/SEO.svelte';

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Home Staging Tips for Quick Sales',
    excerpt:
      'Learn professional staging techniques that can help your home sell faster and for more money in the competitive Las Vegas market.',
    author: 'Dr. Jan Duffy',
    date: '2024-01-15',
    category: 'Selling',
    readTime: '5 min read',
    image: '/blog/staging-tips.jpg',
    slug: 'home-staging-tips',
  },
  {
    id: 2,
    title: 'Las Vegas Market Update - Q1 2024',
    excerpt:
      'Comprehensive analysis of the Las Vegas real estate market including price trends, inventory levels, and future predictions.',
    author: 'Dr. Jan Duffy',
    date: '2024-01-12',
    category: 'Market Report',
    readTime: '8 min read',
    image: '/blog/market-update.jpg',
    slug: 'market-update-q1-2024',
  },
  {
    id: 3,
    title: "First-Time Home Buyer's Guide to Las Vegas",
    excerpt:
      'Everything you need to know about buying your first home in Las Vegas, from pre-approval to closing day.',
    author: 'Michael Rodriguez',
    date: '2024-01-10',
    category: 'Buying',
    readTime: '12 min read',
    image: '/blog/first-time-buyer.jpg',
    slug: 'first-time-buyer-guide',
  },
  {
    id: 4,
    title: 'Neighborhood Spotlight: Manzano Peak',
    excerpt:
      'Discover what makes Manzano Peak one of the most desirable neighborhoods in Las Vegas for families.',
    author: 'Dr. Jan Duffy',
    date: '2024-01-08',
    category: 'Neighborhood',
    readTime: '6 min read',
    image: '/blog/manzano-spotlight.jpg',
    slug: 'manzano-peak-spotlight',
  },
  {
    id: 5,
    title: 'Mortgage Rates and Your Home Buying Power',
    excerpt:
      'Understanding how current mortgage rates affect your purchasing power and what to expect in 2024.',
    author: 'Michael Rodriguez',
    date: '2024-01-05',
    category: 'Financing',
    readTime: '7 min read',
    image: '/blog/mortgage-rates.jpg',
    slug: 'mortgage-rates-2024',
  },
  {
    id: 6,
    title: 'Investment Properties in Las Vegas: A Complete Guide',
    excerpt:
      'Everything you need to know about investing in Las Vegas real estate, from market analysis to property management.',
    author: 'Dr. Jan Duffy',
    date: '2024-01-03',
    category: 'Investing',
    readTime: '10 min read',
    image: '/blog/investment-guide.jpg',
    slug: 'investment-properties-guide',
  },
];

// Categories
const categories = [
  'All',
  'Market Report',
  'Buying',
  'Selling',
  'Neighborhood',
  'Financing',
  'Investing',
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
  <title>Real Estate Blog - Market Insights & Tips | Manzano Homes</title>
  <meta name="description" content="Expert real estate insights, market updates, and tips for buyers and sellers in Las Vegas and the Manzano neighborhood.">
  <meta property="og:title" content="Manzano Homes Real Estate Blog">
  <meta property="og:description" content="Stay informed with the latest real estate news and insights">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://manzanohomes.com/blog">
  
  <script type="application/ld+json">
    {JSON.stringify(faqSchema)}
  </script>
  <script type="application/ld+json">
    {JSON.stringify(blogSchema)}
  </script>
</svelte:head>

<div id="main-content" class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <section class="bg-gradient-primary text-white pt-24 md:pt-32 pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Real Estate Insights Blog</h1>
      <p class="text-xl md:text-2xl mb-8 text-primary-100">
        Expert insights, market updates, and tips for Las Vegas real estate
      </p>
      
      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row gap-4">
        <a href="tel:+17025001942" class="bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          📞 Call (702) 500-1942
        </a>
        <a href="sms:+17025001942" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          💬 Text Us
        </a>
        <button onclick={() => window.open('mailto:DrDuffySells@ManzanoHomes.com?subject=Blog Question')} class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          ✉️ Email Us
        </button>
      </div>
    </div>
  </section>

  <!-- Blog Posts Section -->
  <section class="py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Category Filter -->
      <div class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Latest Articles</h2>
        <div class="flex flex-wrap gap-2">
          {#each categories as category}
            <button class="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
              {category === 'All' ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}">
              {category}
            </button>
          {/each}
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each blogPosts as post}
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="aspect-w-16 aspect-h-9">
              <img 
                src={post.image} 
                alt={post.title}
                class="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-sm font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span class="text-sm text-gray-500">{post.readTime}</span>
              </div>
              
              <h3 class="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                {post.title}
              </h3>
              
              <p class="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span class="text-primary-600 font-semibold text-sm">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-gray-900">{post.author}</p>
                    <p class="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                
                <a href="/blog/{post.slug}" class="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  Read More →
                </a>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </section>

  <!-- Newsletter Signup -->
  <section class="bg-primary-600 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
      <p class="text-xl mb-8 text-primary-100">
        Get the latest market updates and new listings delivered to your inbox
      </p>
      
      <div class="max-w-md mx-auto">
        <div class="flex">
          <input 
            type="email" 
            placeholder="Enter your email address"
            class="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold px-6 py-3 rounded-r-lg transition-colors duration-200">
            Subscribe
          </button>
        </div>
        <p class="text-sm text-primary-200 mt-2">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
      <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Whether you're buying or selling, our expert team is here to help you navigate the Las Vegas real estate market with confidence.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+17025001942" class="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          📞 Call (702) 500-1942
        </a>
        <a href="sms:+17025001942" class="bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          💬 Text Us
        </a>
        <button onclick={() => window.open('mailto:DrDuffySells@ManzanoHomes.com?subject=Real Estate Consultation')} class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
          ✉️ Email Us
        </button>
      </div>
    </div>
  </section>
</div>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>