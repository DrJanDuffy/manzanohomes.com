<script lang="ts">
  import { onMount } from 'svelte';
  
  interface InsightData {
    category: string;
    value: string;
    trend: 'up' | 'down' | 'stable';
    change: string;
    description: string;
  }
  
  export let insights: InsightData[] = [];
  export let className = '';
  
  let animatedValues: string[] = [];
  let isVisible = false;
  
  // Default insights for Manzano neighborhood
  const defaultInsights: InsightData[] = [
    {
      category: 'Median Home Price',
      value: '$485K',
      trend: 'up',
      change: '+5.2%',
      description: 'Strong appreciation in the past year'
    },
    {
      category: 'Days on Market',
      value: '23',
      trend: 'down',
      change: '-12%',
      description: 'Faster sales than last quarter'
    },
    {
      category: 'Price per Sq Ft',
      value: '$287',
      trend: 'up',
      change: '+3.8%',
      description: 'Above Las Vegas average'
    },
    {
      category: 'Inventory Level',
      value: '2.1mo',
      trend: 'down',
      change: '-15%',
      description: 'Low inventory driving competition'
    },
    {
      category: 'Walk Score',
      value: '72',
      trend: 'stable',
      change: '0%',
      description: 'Very walkable neighborhood'
    },
    {
      category: 'School Rating',
      value: '8.5/10',
      trend: 'up',
      change: '+0.3',
      description: 'Highly rated local schools'
    }
  ];
  
  $: displayInsights = insights.length > 0 ? insights : defaultInsights;
  
  onMount(() => {
    // Intersection observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible) {
          isVisible = true;
          animateInsights();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    const container = document.querySelector('#neighborhood-insights');
    if (container) observer.observe(container);
  });
  
  function animateInsights() {
    displayInsights.forEach((insight, index) => {
      setTimeout(() => {
        animateValue(insight.value, index);
      }, index * 200);
    });
  }
  
  function animateValue(finalValue: string, index: number) {
    const numericValue = parseFloat(finalValue.replace(/[^\d.]/g, ''));
    const suffix = finalValue.replace(/[\d.]/g, '');
    let current = 0;
    const increment = numericValue / 50;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        animatedValues[index] = finalValue;
        clearInterval(timer);
      } else {
        animatedValues[index] = current.toFixed(numericValue % 1 !== 0 ? 1 : 0) + suffix;
      }
    }, 30);
  }
  
  function getTrendIcon(trend: string) {
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      default: return '→';
    }
  }
  
  function getTrendColor(trend: string) {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  }
</script>

<section id="neighborhood-insights" class="py-16 bg-gradient-to-br from-gray-50 to-blue-50 {className}">
  <div class="max-w-7xl mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Manzano Neighborhood Insights</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Real-time market data and neighborhood statistics to help you make informed decisions
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each displayInsights as insight, index}
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">{insight.category}</h3>
            <span class="text-sm {getTrendColor(insight.trend)} font-medium bg-gray-100 px-2 py-1 rounded-full">
              {getTrendIcon(insight.trend)} {insight.change}
            </span>
          </div>
          
          <div class="mb-3">
            <span class="text-3xl font-bold text-primary-600">
              {animatedValues[index] || '...'}
            </span>
          </div>
          
          <p class="text-sm text-gray-600">{insight.description}</p>
          
          <!-- Progress bar for trend visualization -->
          <div class="mt-4">
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="h-2 rounded-full transition-all duration-1000 {insight.trend === 'up' ? 'bg-green-500' : insight.trend === 'down' ? 'bg-red-500' : 'bg-gray-500'}"
                style="width: {insight.trend === 'up' ? '75%' : insight.trend === 'down' ? '25%' : '50%'}"
              ></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- Additional insights -->
    <div class="mt-12 bg-white rounded-xl shadow-lg p-8">
      <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Manzano?</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="text-center">
          <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="iconify w-6 h-6 text-primary-600" data-icon="mdi:car"></span>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Easy Commute</h4>
          <p class="text-sm text-gray-600">15 minutes to the Strip, 20 minutes to downtown</p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="iconify w-6 h-6 text-secondary-600" data-icon="mdi:shopping"></span>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Shopping & Dining</h4>
          <p class="text-sm text-gray-600">Multiple shopping centers within 5 minutes</p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="iconify w-6 h-6 text-primary-600" data-icon="mdi:tree"></span>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Green Spaces</h4>
          <p class="text-sm text-gray-600">Parks and recreational areas nearby</p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <span class="iconify w-6 h-6 text-secondary-600" data-icon="mdi:security"></span>
          </div>
          <h4 class="font-semibold text-gray-900 mb-2">Safe Community</h4>
          <p class="text-sm text-gray-600">Low crime rates and active neighborhood watch</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Smooth animations for better UX */
  .animate-fade-in {
    animation: fadeIn 0.6s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
