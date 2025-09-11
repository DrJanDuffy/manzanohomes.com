<script>
import {
  generateMetaTags,
  generatePageSEO,
  generateRealEstateStructuredData,
} from '$lib/utils/seo.js';

/**
 * @typedef {Object} SEOProps
 * @property {string} [pageType] - Type of page (HOMEPAGE, NEIGHBORHOOD, etc.)
 * @property {string} [title] - Page title
 * @property {string} [description] - Page description
 * @property {string} [keywords] - Page keywords
 * @property {string} [url] - Page URL
 * @property {string} [image] - Page image
 * @property {string} [type] - Page type (website, article, etc.)
 * @property {boolean} [noindex] - Whether to noindex the page
 * @property {boolean} [nofollow] - Whether to nofollow the page
 * @property {Object} [structuredData] - Additional structured data
 * @property {Array} [breadcrumbs] - Breadcrumb items
 * @property {Array} [faqs] - FAQ items
 * @property {Object} [property] - Property data for property pages
 */

/** @type {SEOProps} */
const {
  pageType = 'HOMEPAGE',
  title,
  description,
  keywords,
  url,
  image,
  type = 'website',
  noindex = false,
  nofollow = false,
  structuredData = null,
  breadcrumbs = null,
  faqs = null,
  property = null,
} = $props();

// Generate SEO data
const seoData = generatePageSEO(pageType, {
  title,
  description,
  keywords,
  url,
  image,
  type,
  noindex,
  nofollow,
});

// Generate meta tags
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const metaTags = generateMetaTags(seoData);

// Generate structured data
const baseStructuredData = generateRealEstateStructuredData();

// Combine structured data
const allStructuredData = [baseStructuredData];

if (structuredData) {
  allStructuredData.push(structuredData);
}

if (breadcrumbs) {
  allStructuredData.push(generateBreadcrumbStructuredData(breadcrumbs));
}

if (faqs) {
  allStructuredData.push(generateFAQStructuredData(faqs));
}

if (property) {
  allStructuredData.push(generatePropertyStructuredData(property));
}
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<title>{metaTags.title}</title>
	<meta name="description" content={metaTags.description} />
	<meta name="keywords" content={metaTags.keywords} />
	<meta name="robots" content={metaTags.robots} />
	<meta name="viewport" content={metaTags.viewport} />
	<meta name="theme-color" content={metaTags['theme-color']} />
	
	<!-- Canonical URL -->
	<link rel="canonical" href={metaTags.canonical} />
	
	<!-- Open Graph Meta Tags -->
	<meta property="og:title" content={metaTags['og:title']} />
	<meta property="og:description" content={metaTags['og:description']} />
	<meta property="og:url" content={metaTags['og:url']} />
	<meta property="og:image" content={metaTags['og:image']} />
	<meta property="og:type" content={metaTags['og:type']} />
	<meta property="og:site_name" content={metaTags['og:site_name']} />
	<meta property="og:locale" content={metaTags['og:locale']} />
	
	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content={metaTags['twitter:card']} />
	<meta name="twitter:title" content={metaTags['twitter:title']} />
	<meta name="twitter:description" content={metaTags['twitter:description']} />
	<meta name="twitter:image" content={metaTags['twitter:image']} />
	<meta name="twitter:site" content={metaTags['twitter:site']} />
	<meta name="twitter:creator" content={metaTags['twitter:creator']} />
	
	<!-- Additional Meta Tags -->
	<meta name="msapplication-TileColor" content={metaTags['msapplication-TileColor']} />
	<meta name="msapplication-config" content={metaTags['msapplication-config']} />
	
	<!-- Structured Data -->
	{#each allStructuredData as data}
		<script type="application/ld+json">
			{JSON.stringify(data)}
		</script>
	{/each}
	
	<!-- Preconnect to external domains -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	
	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/favicon.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	
	<!-- Manifest -->
	<link rel="manifest" href="/manifest.json" />
</svelte:head>
