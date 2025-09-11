# Manzano Homes - Las Vegas Real Estate

A modern, professional real estate website for the Manzano neighborhood in Las Vegas, built with SvelteKit and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with responsive design
- **Hero Section**: Stunning background with compelling call-to-action buttons
- **Featured Properties**: Ready for RealScout widget integration
- **Neighborhood Highlights**: Showcases key features of the Manzano area
- **Quick Stats**: Median home price, schools rating, and walk score
- **Contact Form**: Professional contact form for lead generation
- **SEO Optimized**: Meta tags and structured data for local real estate searches
- **Mobile Responsive**: Optimized for all device sizes

## Technology Stack

- **Framework**: SvelteKit 2.0
- **Styling**: Tailwind CSS 3.3
- **Linting & Formatting**: Biome 1.4 (replaces Prettier + ESLint)
- **Testing**: Vitest (unit tests) + Playwright (E2E tests)
- **Component Development**: Storybook 7.6
- **Performance**: Lighthouse CI + Bundle Analyzer
- **Git Hooks**: Husky + lint-staged + Commitlint
- **Image Optimization**: @sveltejs/enhanced-img (WebP/AVIF, responsive sizing)
- **Icons**: Iconify with Tailwind CSS integration (CSS-based icons)
- **Accessibility**: WCAG 2.1 AA compliant with comprehensive ARIA support
- **SEO**: Comprehensive SEO optimization with structured data and meta tags
- **Real Estate Tools**: Sharp (images), Geolib (geography), date-fns (dates)
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (cloud-first approach)

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint and format code
pnpm lint
pnpm format

# Check all (lint + format + organize imports)
pnpm check-all

# Testing
pnpm test                    # Run unit tests
pnpm test:ui                 # Run tests with UI
pnpm test:coverage          # Run tests with coverage
pnpm test:e2e               # Run end-to-end tests
pnpm test:e2e:ui            # Run E2E tests with UI

# Performance & Analysis
pnpm lighthouse             # Run Lighthouse performance audit
pnpm analyze                # Analyze bundle size
pnpm analyze:bundle         # Generate detailed bundle analysis

# Component Development
pnpm storybook              # Start Storybook
pnpm build-storybook        # Build Storybook for production
```

## Image Optimization

This project uses `@sveltejs/enhanced-img` for automatic image optimization:

### Features
- **Automatic Format Conversion**: WebP and AVIF formats for better compression
- **Responsive Images**: Multiple sizes for different screen sizes
- **Lazy Loading**: Automatic lazy loading for better performance
- **Intrinsic Dimensions**: Prevents layout shift during image loading
- **EXIF Data Removal**: Privacy protection by stripping metadata

### Usage Examples

```svelte
<!-- Basic usage -->
<enhanced:img src="./path/to/image.jpg" alt="Description" />

<!-- With responsive sizing -->
<enhanced:img 
  src="./path/to/image.jpg" 
  alt="Description"
  sizes="(min-width: 1200px) 400px, (min-width: 768px) 300px, 100vw"
/>

<!-- Hero image with high priority -->
<enhanced:img 
  src="./path/to/hero.jpg" 
  alt="Hero description"
  sizes="min(1280px, 100vw)"
  fetchpriority="high"
  loading="eager"
/>
```

### Real Estate Specific Components
- `OptimizedImage.svelte` - Reusable component with real estate optimizations
- `PropertyCard.svelte` - Property listing with optimized images
- `Icon.svelte` - Reusable icon component with Iconify
- `PropertyIcon.svelte` - Property-specific icon component
- `SocialIcon.svelte` - Social media icon component
- Image utilities for different use cases (hero, property, thumbnail, logo)

## Icon System

This project uses Iconify for optimized, CSS-based icons following SvelteKit best practices:

### Features
- **CSS-based Icons**: No JavaScript bundle bloat from icon components
- **Tailwind Integration**: Seamless integration with Tailwind CSS
- **Real Estate Icons**: Comprehensive set of property and real estate icons
- **Performance Optimized**: Icons loaded on-demand, not bundled
- **Accessibility**: Built-in ARIA support and semantic markup

### Usage Examples

```svelte
<!-- Basic icon usage -->
<span class="iconify w-6 h-6 text-primary-600" data-icon="mdi:home"></span>

<!-- Using the Icon component -->
<Icon name="mdi:home" size="LG" color="PRIMARY" />

<!-- Property-specific icons -->
<PropertyIcon type="feature" name="bedrooms" />
<PropertyIcon type="property" name="house" />

<!-- Social media icons -->
<SocialIcon platform="facebook" href="https://facebook.com/company" />
```

### Real Estate Icon Sets
- **Property Features**: Bedrooms, bathrooms, square footage, garage, pool
- **Property Types**: House, condo, townhouse, apartment, land
- **Amenities**: Schools, hospitals, shopping, restaurants, parks
- **Navigation**: Search, filter, sort, view, edit, delete
- **Social Media**: Facebook, Twitter, Instagram, LinkedIn, YouTube
- **Status Indicators**: Success, error, warning, info, check, close

## Accessibility

This project implements comprehensive accessibility features following WCAG 2.1 AA guidelines:

### Features
- **Route Announcements**: Screen reader announcements for page navigation
- **Focus Management**: Proper focus handling for keyboard navigation
- **ARIA Support**: Comprehensive ARIA labels and semantic markup
- **Skip Links**: Skip to main content for screen readers
- **Form Accessibility**: Proper form labels, error handling, and validation
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements

### Accessibility Utilities
- **Focus Management**: Automatic focus handling and restoration
- **ARIA Utilities**: Helper functions for ARIA attributes
- **Keyboard Navigation**: Keyboard event handling utilities
- **Form Accessibility**: Form validation and error handling
- **Real Estate Specific**: Property search and form announcements

### Usage Examples

```javascript
// Initialize accessibility features
import { initAccessibility } from '$lib/utils/accessibility.js';

initAccessibility();

// Announce property search results
import { RealEstateAccessibility } from '$lib/utils/accessibility.js';

RealEstateAccessibility.announceSearchResults(5);

// Focus management
import { focusManager } from '$lib/utils/accessibility.js';

focusManager.trapFocus(modalElement);
```

### WCAG 2.1 AA Compliance
- **Perceivable**: Proper contrast ratios, alt text, and semantic markup
- **Operable**: Keyboard navigation, focus management, and skip links
- **Understandable**: Clear labels, error messages, and form instructions
- **Robust**: Semantic HTML, ARIA attributes, and screen reader support

## SEO Optimization

This project implements comprehensive SEO optimization following SvelteKit best practices:

### Features
- **Server-Side Rendering**: SSR enabled by default for better search engine indexing
- **Dynamic Sitemap**: Auto-generated sitemap.xml with all pages and properties
- **Robots.txt**: Search engine crawling instructions
- **Meta Tags**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD structured data for real estate
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **PWA Support**: Progressive Web App manifest

### SEO Components
- **SEO Component**: Reusable SEO component with meta tags and structured data
- **Dynamic Sitemap**: `/sitemap.xml` endpoint with all pages
- **Robots.txt**: `/robots.txt` endpoint for search engines
- **Structured Data**: Real estate, local business, and property listings
- **Meta Tags**: Title, description, keywords, and social media tags

### Usage Examples

```svelte
<!-- Basic SEO usage -->
<SEO 
  pageType="HOMEPAGE"
  title="Manzano Homes - Las Vegas Real Estate"
  description="Discover your dream home in the Manzano neighborhood"
  keywords="Las Vegas real estate, Manzano homes"
/>

<!-- Property page SEO -->
<SEO 
  pageType="PROPERTY"
  title="3693 Manzano Peak Ave - Las Vegas Home for Sale"
  description="Beautiful 3-bedroom home in Manzano neighborhood"
  property={propertyData}
/>
```

### Structured Data Types
- **RealEstateAgent**: Business information and contact details
- **RealEstateListing**: Property listings with pricing and details
- **LocalBusiness**: Local business information and hours
- **BreadcrumbList**: Navigation breadcrumbs
- **FAQPage**: Frequently asked questions
- **Review**: Customer reviews and ratings

### SEO Best Practices
- **Unique Titles**: Each page has a unique, descriptive title
- **Meta Descriptions**: Compelling descriptions under 160 characters
- **Keywords**: Relevant keywords for real estate and location
- **Canonical URLs**: Proper canonical URL structure
- **Image Alt Text**: Descriptive alt text for all images
- **Internal Linking**: Strategic internal linking structure

## Performance Optimization

This project implements comprehensive performance optimizations following SvelteKit best practices:

### Core Web Vitals Monitoring
- **LCP (Largest Contentful Paint)**: Monitors hero image loading
- **FID (First Input Delay)**: Tracks user interaction responsiveness
- **CLS (Cumulative Layout Shift)**: Prevents layout shifts during loading
- **FCP (First Contentful Paint)**: Measures initial content rendering
- **TTFB (Time to First Byte)**: Tracks server response time

### Performance Features
- **Font Preloading**: Critical Inter font weights preloaded
- **Bundle Analysis**: rollup-plugin-visualizer for identifying large packages
- **Lazy Loading**: Selective loading for non-essential components
- **Navigation Preloading**: Hover-based preloading for faster navigation
- **Resource Optimization**: Automatic chunk splitting and caching
- **Performance Headers**: Security and caching headers

### Real Estate Performance Metrics
- Property image loading times
- Search results performance
- Map interaction responsiveness
- Form submission tracking
- Property details loading

### Usage Examples

```javascript
// Monitor custom performance metrics
import { measurePerformance } from '$lib/utils/performance.js';

const result = measurePerformance('property_search', () => {
  return searchProperties(query);
});

// Lazy load components
import { lazyLoadOnIntersection } from '$lib/utils/lazyLoading.js';

lazyLoadOnIntersection(
  element,
  () => import('$lib/components/PropertyMap.svelte'),
  { fallback: '<div>Loading map...</div>' }
);
```

## Development Workflow

### Quality Gates
- **Pre-commit**: Automatic linting and formatting via Husky
- **Conventional Commits**: Standardized commit messages
- **Testing**: Unit tests (Vitest) + E2E tests (Playwright)
- **Performance**: Lighthouse CI for performance monitoring
- **Component Documentation**: Storybook for component development

### Real Estate Specific Features
- **Image Optimization**: @sveltejs/enhanced-img for automatic image optimization
- **Property Photos**: Optimized WebP/AVIF formats with responsive sizing
- **Geographic Calculations**: Geolib for distance and location features
- **Date Handling**: date-fns for property listing dates
- **Performance Monitoring**: Web Vitals for user experience tracking
- **Image Utilities**: Custom components for property image handling

## Deployment

This project is configured for Vercel deployment with cloud-first CI/CD:

1. Push code to GitHub
2. Vercel automatically builds and deploys
3. No local build process required

### Environment Variables

Set these in your Vercel dashboard:

- `VERCEL_ANALYTICS_ID`: For web analytics
- `REALSCOUT_API_KEY`: For RealScout widget integration (when ready)

## Project Structure

```
src/
├── routes/
│   ├── +layout.svelte    # Main layout with navigation and footer
│   ├── +page.svelte      # Homepage with all sections
│   └── about/            # Additional pages
├── lib/                  # Reusable components
├── app.css              # Global styles with Tailwind
└── app.html             # HTML template
```

## Real Estate Features

- **Address**: 3693 Manzano Peak Ave, Las Vegas, NV 89121
- **Target Area**: Manzano neighborhood and surrounding areas
- **Services**: Home sales, valuations, neighborhood information
- **Integration Ready**: Prepared for RealScout, Homebot, and other real estate tools

## Customization

The site uses a custom color palette:
- Primary: Blue tones (#0ea5e9, #0284c7)
- Secondary: Green tones (#22c55e, #16a34a)
- Neutral: Gray scale for text and backgrounds

## License

© 2024 Manzano Homes. All rights reserved.
