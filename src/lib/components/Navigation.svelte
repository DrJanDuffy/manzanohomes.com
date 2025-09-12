<script>
import { page } from '$app/stores';
import { onMount } from 'svelte';

// Navigation state
let mobileMenuOpen = false;
// biome-ignore lint/correctness/noUnusedVariables: Used in template
let scrolled = false;

// Navigation items
const navItems = [
  { href: '/', label: 'Home', current: false },
  { href: '/neighborhood', label: 'Neighborhood', current: false },
  { href: '/homes-for-sale', label: 'Homes for Sale', current: false },
  { href: '/home-valuation', label: 'Home Valuation', current: false },
  { href: '/contact', label: 'Contact', current: false },
];

// Update current page based on route
$: {
  navItems.forEach((item) => {
    item.current = $page.url.pathname === item.href;
  });
}

// Handle scroll for navbar styling
function handleScroll() {
  scrolled = window.scrollY > 10;
}

// Toggle mobile menu
// biome-ignore lint/correctness/noUnusedVariables: Used in template
function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
}

// Close mobile menu when clicking outside
// biome-ignore lint/correctness/noUnusedVariables: Used in template
function closeMobileMenu() {
  mobileMenuOpen = false;
}

// Close mobile menu on route change
$: if ($page) {
  mobileMenuOpen = false;
}

onMount(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
});
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Phone Number -->
      <div class="flex-shrink-0">
        <a href="tel:+17025001942" class="flex items-center space-x-2 group">
          <!-- Phone Icon -->
          <svg class="w-6 h-6 {scrolled ? 'text-primary-600' : 'text-white'} group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <!-- Phone Number -->
          <div class="phone-flash text-xl font-bold {scrolled ? 'text-primary-600' : 'text-white'} group-hover:text-primary-500 transition-colors">
            (702) 500-1942
          </div>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          {#each navItems as item}
            <a
              href={item.href}
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 {
                item.current 
                  ? 'text-primary-600 bg-primary-50' 
                  : scrolled 
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50' 
                    : 'text-white hover:text-primary-200 hover:bg-white/10'
              }"
              aria-current={item.current ? 'page' : undefined}
            >
              {item.label}
            </a>
          {/each}
        </div>
      </div>

      <!-- CTA Button -->
      <div class="hidden md:block">
        <a
          href="/contact"
          class="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
        >
          Get Started
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md {scrolled ? 'text-gray-700' : 'text-white'} hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
          aria-controls="mobile-menu"
          aria-expanded={mobileMenuOpen}
          onclick={toggleMobileMenu}
        >
          <span class="sr-only">Open main menu</span>
          <!-- Hamburger icon -->
          <svg
            class="block h-6 w-6 {mobileMenuOpen ? 'hidden' : 'block'}"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Close icon -->
          <svg
            class="block h-6 w-6 {mobileMenuOpen ? 'block' : 'hidden'}"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  <div
    class="md:hidden {mobileMenuOpen ? 'block' : 'hidden'}"
    id="mobile-menu"
  >
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
      <!-- Mobile Phone Number -->
      <div class="px-3 py-2 border-b border-gray-200 mb-2">
        <a href="tel:+17025001942" class="flex items-center space-x-2 group">
          <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <div class="phone-flash-mobile text-lg font-bold text-primary-600">
            (702) 500-1942
          </div>
        </a>
      </div>
      {#each navItems as item}
        <a
          href={item.href}
          class="block px-3 py-2 rounded-md text-base font-medium {
            item.current 
              ? 'text-primary-600 bg-primary-50' 
              : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
          }"
          aria-current={item.current ? 'page' : undefined}
          onclick={closeMobileMenu}
        >
          {item.label}
        </a>
      {/each}
      <div class="pt-4">
        <a
          href="/contact"
          class="block w-full bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-700 transition-colors duration-200"
          onclick={closeMobileMenu}
        >
          Get Started
        </a>
      </div>
    </div>
  </div>
</nav>

<style>
  .phone-flash {
    animation: phone-pulse 2s infinite;
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }
  
  @keyframes phone-pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
      text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
      text-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
    }
  }
  
  /* Ensure phone number is always visible */
  .phone-flash {
    display: inline-block;
    min-width: 180px;
    text-align: left;
  }
  
  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .phone-flash {
      font-size: 1rem;
      min-width: 140px;
    }
  }
  
  /* Mobile phone flash animation */
  .phone-flash-mobile {
    animation: phone-pulse-mobile 2s infinite;
  }
  
  @keyframes phone-pulse-mobile {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
</style>

<!-- Mobile menu overlay -->
{#if mobileMenuOpen}
  <div
    class="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
    onclick={closeMobileMenu}
      onkeydown={(e) => e.key === 'Escape' && closeMobileMenu()}
    role="button"
    tabindex="0"
    aria-label="Close mobile menu"
  ></div>
{/if}
