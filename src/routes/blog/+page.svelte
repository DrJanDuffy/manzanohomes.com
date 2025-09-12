<script>
import { onMount } from 'svelte';

let blogPosts = [];
let _isLoading = true;
let _error = null;
let _lastUpdated = null;

// Categories based on Simplifying the Market content
const _categories = [
  'All',
  'Market Analysis',
  'Buying Guide',
  'Selling Tips',
  'Mortgage Rates',
  'Economy',
  'First-Time Buyers',
];
const selectedCategory = 'All';

// Fetch blog posts from RSS feed
async function fetchBlogPosts() {
  try {
    _isLoading = true;
    const response = await fetch('/api/blog/feed');
    const data = await response.json();

    if (data.success) {
      blogPosts = data.posts;
      _lastUpdated = data.lastUpdated;
      _error = null;
    } else {
      blogPosts = data.posts || []; // Use fallback posts
      _error = data.error;
      _lastUpdated = data.lastUpdated;
    }
  } catch (err) {
    console.error('Failed to fetch blog posts:', err);
    _error = 'Failed to load blog posts';
    blogPosts = [];
  } finally {
    _isLoading = false;
  }
}

// Filter posts based on selected category
$: filteredPosts =
  selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

// Load posts on mount
onMount(() => {
  fetchBlogPosts();
});
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
  <section class="bg-gradient-primary text-white py-16">
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
      <!-- Loading State -->
      {#if isLoading}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each Array(6) as _}
            <div class="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
              <div class="h-48 bg-gray-200"></div>
              <div class="p-6">
                <div class="h-4 bg-gray-200 rounded mb-3"></div>
                <div class="h-6 bg-gray-200 rounded mb-3"></div>
                <div class="h-4 bg-gray-200 rounded mb-2"></div>
                <div class="h-4 bg-gray-200 rounded mb-4"></div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <div class="h-3 bg-gray-200 rounded mb-1"></div>
                      <div class="h-3 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>
                  <div class="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {:else if error}
        <!-- Error State -->
        <div class="text-center py-12">
          <div class="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <svg class="w-12 h-12 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
            </svg>
            <h3 class="text-lg font-medium text-red-800 mb-2">Unable to Load Blog Posts</h3>
            <p class="text-red-600 mb-4">{error}</p>
            <button 
              on:click={fetchBlogPosts}
              class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      {:else if filteredPosts.length === 0}
        <!-- No Posts State -->
        <div class="text-center py-12">
          <div class="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto">
            <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <h3 class="text-lg font-medium text-gray-800 mb-2">No Posts Found</h3>
            <p class="text-gray-600">No blog posts match your selected category.</p>
          </div>
        </div>
      {:else}
        <!-- Blog Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each filteredPosts as post}
            <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow" itemscope itemtype="https://schema.org/BlogPosting">
              <img 
                src={post.image} 
                alt={post.title} 
                class="w-full h-48 object-cover" 
                itemprop="image"
                loading="lazy"
                onerror={(e) => e.target.src = '/api/placeholder/400/250'}
              >
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-semibold text-primary-600 uppercase" itemprop="articleSection">{post.category}</span>
                  <span class="text-xs text-gray-500" itemprop="timeRequired">{post.readTime}</span>
                </div>
                <h2 class="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600" itemprop="headline">
                  <a href={post.link} target="_blank" rel="noopener noreferrer" class="focus:ring-4 focus:ring-primary-200 rounded">{post.title}</a>
                </h2>
                <p class="text-gray-600 mb-4" itemprop="description">{post.excerpt}</p>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-500">
                    By <span itemprop="author" itemscope itemtype="https://schema.org/Person"><span itemprop="name">{post.author}</span></span> • 
                    <time datetime={post.date} itemprop="datePublished">{post.date}</time>
                  </div>
                  <a href={post.link} target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700 font-medium focus:ring-4 focus:ring-primary-200 rounded" aria-label="Read more about {post.title}">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          {/each}
        </div>
        
        <!-- Last Updated Info -->
        {#if lastUpdated}
          <div class="text-center mt-8 text-sm text-gray-500">
            Last updated: {new Date(lastUpdated).toLocaleString()}
          </div>
        {/if}
      {/if}
    </div>
  </section>

  <!-- Newsletter Signup -->
  <section class="bg-primary-900 text-white py-16" aria-labelledby="newsletter-heading">
    <div class="max-w-4xl mx-auto px-4 text-center">
      <h2 id="newsletter-heading" class="text-3xl font-bold mb-4">Stay Updated</h2>
      <p class="text-xl text-primary-100 mb-8">Get the latest market insights and real estate tips delivered to your inbox</p>
      <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onsubmit={(e) => e.preventDefault()}>
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
