<script>
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const currentYear = new Date().getFullYear();

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/team', label: 'Our Team' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/homes-for-sale', label: 'Homes for Sale' },
    { href: '/home-valuation', label: 'Home Valuation' },
    { href: '/neighborhood', label: 'Neighborhood Info' },
    { href: '/mortgage-calculator', label: 'Mortgage Calculator' },
  ],
  resources: [
    { href: '/blog', label: 'Real Estate Blog' },
    { href: '/market-reports', label: 'Market Reports' },
    { href: '/buying-guide', label: 'Buying Guide' },
    { href: '/selling-guide', label: 'Selling Guide' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/disclaimer', label: 'Disclaimer' },
    { href: '/accessibility', label: 'Accessibility' },
  ],
};

// biome-ignore lint/correctness/noUnusedVariables: Used in template
const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/manzanohomes',
    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/manzanohomes',
    icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281h-1.869v1.869h1.869v-1.869zm-1.869 2.796h1.869v8.449h-1.869v-8.449z',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/manzanohomes',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@manzanohomes',
    icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
];
</script>

<footer class="bg-gray-900 text-white">
  <!-- Main Footer Content -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      <!-- Company Info -->
      <div class="lg:col-span-2">
        <div class="flex items-center space-x-2 mb-4">
          <div class="phone-flash-footer text-2xl font-bold text-white">
            (702) 500-1942
          </div>
        </div>
        <p class="text-gray-300 mb-6 max-w-md">
          Premier real estate services in the Manzano neighborhood of Las Vegas, NV. 
          Your trusted partner for buying and selling homes in the 89121 area.
        </p>
        
        <!-- Contact Info -->
        <div class="space-y-2 text-sm text-gray-300">
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <span>3693 Manzano Peak Ave, Las Vegas, NV 89121</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <a href="tel:+17025001942" class="hover:text-white transition-colors">(702) 500-1942</a>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            <a href="mailto:DrDuffySells@ManzanoHomes.com" class="hover:text-white transition-colors">DrDuffySells@ManzanoHomes.com</a>
          </div>
        </div>
      </div>

      <!-- Company Links -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Company</h3>
        <ul class="space-y-2">
          {#each footerLinks.company as link}
            <li>
              <a
                href={link.href}
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Services Links -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Services</h3>
        <ul class="space-y-2">
          {#each footerLinks.services as link}
            <li>
              <a
                href={link.href}
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Resources Links -->
      <div>
        <h3 class="text-lg font-semibold mb-4">Resources</h3>
        <ul class="space-y-2">
          {#each footerLinks.resources as link}
            <li>
              <a
                href={link.href}
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Social Media & Newsletter -->
    <div class="mt-12 pt-8 border-t border-gray-800">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <!-- Social Media -->
        <div class="flex space-x-4">
          {#each socialLinks as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label={social.name}
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.icon}/>
              </svg>
            </a>
          {/each}
        </div>

        <!-- Newsletter Signup -->
        <div class="flex-1 max-w-md">
          <h4 class="text-sm font-semibold text-gray-300 mb-2">Stay Updated</h4>
          <p class="text-xs text-gray-400 mb-3">Get the latest market updates and new listings</p>
          <form class="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <button
              type="submit"
              class="px-4 py-2 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Bar -->
  <div class="bg-gray-800 border-t border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <div class="text-sm text-gray-400">
          © {currentYear} Manzano Homes. All rights reserved. License# S.0197614.LLC
        </div>
        <div class="flex space-x-6 text-sm">
          {#each footerLinks.legal as link}
            <a
              href={link.href}
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  .phone-flash-footer {
    animation: flash-footer 2s infinite;
  }
  
  @keyframes flash-footer {
    0%, 50% {
      opacity: 1;
      transform: scale(1);
    }
    25%, 75% {
      opacity: 0.7;
      transform: scale(1.05);
    }
  }
</style>
