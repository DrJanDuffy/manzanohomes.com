<script>
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Home Staging Tips for Quick Sales',
    excerpt:
      'Learn professional staging techniques that can help your home sell faster and for more money in the competitive Las Vegas market.',
    author: 'Dr. Jan Duffy',
    date: '2024-01-15',
    category: 'Selling Tips',
    image: '/api/placeholder/400/250',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Las Vegas Market Update - Q1 2024',
    excerpt:
      'Get the latest insights on local real estate trends, pricing, and inventory levels in the Las Vegas and Manzano neighborhood areas.',
    author: 'Michael Rodriguez',
    date: '2024-01-10',
    category: 'Market Analysis',
    image: '/api/placeholder/400/250',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: "First-Time Buyer's Guide to Las Vegas",
    excerpt:
      'Everything you need to know about purchasing your first home in Las Vegas, from pre-approval to closing day.',
    author: 'Sarah Chen',
    date: '2024-01-05',
    category: 'Buying Guide',
    image: '/api/placeholder/400/250',
    readTime: '10 min read',
  },
];

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const categories = ['All', 'Market Analysis', 'Buying Guide', 'Selling Tips', 'Local News'];
let selectedCategory = 'All';

$: filteredPosts =
  selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);
</script>

<svelte:head>
  <title>Real Estate Blog - Market Insights & Tips | Manzano Homes</title>
  <meta name="description" content="Expert real estate insights, market updates, and tips for buyers and sellers in Las Vegas and the Manzano neighborhood.">
  <meta property="og:title" content="Manzano Homes Real Estate Blog">
  <meta property="og:description" content="Stay informed with the latest real estate news and insights">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://manzanohomes.com/blog">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Manzano Homes Real Estate Blog",
    "description": "Expert real estate insights, market updates, and tips for buyers and sellers",
    "url": "https://manzanohomes.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Manzano Homes",
      "url": "https://manzanohomes.com"
    },
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "Top 10 Home Staging Tips for Quick Sales",
        "author": {
          "@type": "Person",
          "name": "Dr. Jan Duffy"
        },
        "datePublished": "2024-01-15",
        "description": "Learn professional staging techniques that can help your home sell faster and for more money in the competitive Las Vegas market."
      },
      {
        "@type": "BlogPosting",
        "headline": "Las Vegas Market Update - Q1 2024",
        "author": {
          "@type": "Person",
          "name": "Michael Rodriguez"
        },
        "datePublished": "2024-01-10",
        "description": "Get the latest insights on local real estate trends, pricing, and inventory levels in the Las Vegas and Manzano neighborhood areas."
      }
    ]
  }
  </script>
</svelte:head>

<div id="main-content" class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <section class="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Real Estate Insights Blog</h1>
      <p class="text-xl text-primary-100">Market updates, tips, and expert advice for Las Vegas home buyers and sellers</p>
    </div>
  </section>

  <!-- Category Filter -->
  <section class="sticky top-0 bg-white shadow-sm z-10 py-4" aria-labelledby="filter-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="filter-heading" class="sr-only">Filter blog posts by category</h2>
      <div class="flex flex-wrap gap-2" role="tablist" aria-label="Blog categories">
        {#each categories as category}
          <button
            role="tab"
            aria-selected={selectedCategory === category}
            aria-controls="blog-posts"
            onclick={() => selectedCategory = category}
            class="px-4 py-2 rounded-full transition-colors focus:ring-4 focus:ring-primary-200 {selectedCategory === category ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}"
          >
            {category}
          </button>
        {/each}
      </div>
    </div>
  </section>

  <!-- Blog Posts Grid -->
  <section class="py-12" id="blog-posts">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredPosts as post}
          <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow" itemscope itemtype="https://schema.org/BlogPosting">
            <img src={post.image} alt={post.title} class="w-full h-48 object-cover" itemprop="image">
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-semibold text-primary-600 uppercase" itemprop="articleSection">{post.category}</span>
                <span class="text-xs text-gray-500" itemprop="timeRequired">{post.readTime}</span>
              </div>
              <h2 class="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600" itemprop="headline">
                <a href="/blog/{post.id}" class="focus:ring-4 focus:ring-primary-200 rounded">{post.title}</a>
              </h2>
              <p class="text-gray-600 mb-4" itemprop="description">{post.excerpt}</p>
              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-500">
                  By <span itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">{post.author}</span></span> • 
                  <time datetime={post.date} itemprop="datePublished">{post.date}</time>
                </div>
                <a href="/blog/{post.id}" class="text-primary-600 hover:text-primary-700 font-medium focus:ring-4 focus:ring-primary-200 rounded" aria-label="Read more about {post.title}">
                  Read More →
                </a>
              </div>
            </div>
          </article>
        {/each}
      </div>
      
      {#if filteredPosts.length === 0}
        <div class="text-center py-12">
          <p class="text-gray-500 text-lg">No posts found in this category.</p>
        </div>
      {/if}
    </div>
  </section>

  <!-- Newsletter Signup -->
  <section class="bg-primary-900 text-white py-16" aria-labelledby="newsletter-heading">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 id="newsletter-heading" class="text-3xl font-bold mb-4">Stay Updated</h2>
      <p class="text-xl text-primary-100 mb-8">Get the latest market insights and real estate tips delivered to your inbox</p>
      <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" on:submit|preventDefault>
        <label for="newsletter-email" class="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-4 focus:ring-primary-200"
          required
          aria-describedby="newsletter-description"
        >
        <button type="submit" class="px-6 py-3 bg-white text-primary-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors focus:ring-4 focus:ring-primary-200">
          Subscribe
        </button>
      </form>
      <p id="newsletter-description" class="text-sm text-primary-200 mt-2">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  </section>
</div>
