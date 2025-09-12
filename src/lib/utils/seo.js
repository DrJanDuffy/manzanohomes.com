/**
 * SEO utilities for real estate website
 * Provides comprehensive SEO optimization functions
 */

/**
 * Generate meta tags for real estate pages
 * @param {{title?: string, description?: string, keywords?: string, url?: string, image?: string, type?: string, siteName?: string, locale?: string, canonical?: string, noindex?: boolean, nofollow?: boolean}} options - SEO options
 * @returns {Object} Meta tags object
 */
export function generateMetaTags(options = {}) {
  const {
    title = 'Manzano Homes - Las Vegas Real Estate',
    description = 'Discover your dream home in the Manzano neighborhood of Las Vegas. Prime location with excellent schools, walkability, and modern amenities.',
    keywords = 'Manzano Las Vegas, Las Vegas real estate, homes for sale Las Vegas, Manzano Peak Ave, Las Vegas neighborhoods, real estate agent Las Vegas',
    url = 'https://manzanohomes.com',
    image = 'https://manzanohomes.com/og-image.jpg',
    type = 'website',
    siteName = 'Manzano Homes',
    locale = 'en_US',
    canonical = null,
    noindex = false,
    nofollow = false,
  } = options;

  const metaTags = {
    title: title,
    description: description,
    keywords: keywords,
    canonical: canonical || url,
    robots: `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`,

    // Open Graph
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:image': image,
    'og:type': type,
    'og:site_name': siteName,
    'og:locale': locale,

    // Twitter Card
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:site': '@manzanohomes',
    'twitter:creator': '@manzanohomes',

    // Additional meta tags
    viewport: 'width=device-width, initial-scale=1.0',
    'theme-color': '#0ea5e9',
    'msapplication-TileColor': '#0ea5e9',
    'msapplication-config': '/browserconfig.xml',
  };

  return metaTags;
}

/**
 * Generate structured data for real estate
 * @param {{type?: string, name?: string, description?: string, url?: string, logo?: string, image?: string, telephone?: string, email?: string, address?: any, geo?: any, openingHours?: string[], sameAs?: string[]}} options - Structured data options
 * @returns {Object} JSON-LD structured data
 */
export function generateRealEstateStructuredData(options = {}) {
  const {
    type = 'RealEstateAgent',
    name = 'Manzano Homes',
    description = 'Premier real estate services in the Manzano neighborhood of Las Vegas',
    url = 'https://manzanohomes.com',
    logo = 'https://manzanohomes.com/logo.png',
    image = 'https://manzanohomes.com/og-image.jpg',
    telephone = '+1-702-500-1942',
    email = 'info@manzanohomes.com',
    address = {
      streetAddress: '3693 Manzano Peak Ave',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89121',
      addressCountry: 'US',
    },
    geo = {
      latitude: 36.1699,
      longitude: -115.1398,
    },
    openingHours = ['Mo-Fr 09:00-18:00', 'Sa 09:00-17:00', 'Su 10:00-16:00'],
    sameAs = [
      'https://www.facebook.com/manzanohomes',
      'https://www.instagram.com/manzanohomes',
      'https://www.linkedin.com/company/manzanohomes',
    ],
  } = options;

  return {
    '@context': 'https://schema.org',
    '@type': type,
    name: name,
    description: description,
    url: url,
    logo: logo,
    image: image,
    telephone: telephone,
    email: email,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...geo,
    },
    openingHours: openingHours,
    sameAs: sameAs,
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      containedInPlace: {
        '@type': 'State',
        name: 'Nevada',
      },
    },
    serviceType: 'Real Estate Services',
    priceRange: '$$',
  };
}

/**
 * Generate structured data for property listings
 * @param {{id?: string, name?: string, description?: string, price?: number, currency?: string, address?: any, bedrooms?: number, bathrooms?: number, squareFeet?: number, yearBuilt?: number, images?: string[], amenities?: string[], agent?: any}} property - Property data
 * @returns {Object} JSON-LD structured data
 */
export function generatePropertyStructuredData(property) {
  const {
    id,
    name,
    description,
    price,
    currency = 'USD',
    address,
    bedrooms,
    bathrooms,
    squareFeet,
    yearBuilt,
    images = [],
    amenities = [],
    agent = {
      name: 'Manzano Homes Team',
      telephone: '+1-702-555-0123',
      email: 'info@manzanohomes.com',
    },
  } = property;

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: name,
    description: description,
    url: `https://manzanohomes.com/property/${id}`,
    image: images,
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: agent.name,
        telephone: agent.telephone,
        email: agent.email,
      },
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.zip,
      addressCountry: 'US',
    },
    floorSize: {
      '@type': 'QuantitativeValue',
      value: squareFeet,
      unitCode: 'SQF',
    },
    numberOfRooms: bedrooms,
    numberOfBathroomsTotal: bathrooms,
    yearBuilt: yearBuilt,
    additionalProperty: amenities.map((amenity) => ({
      '@type': 'PropertyValue',
      name: amenity,
    })),
  };
}

/**
 * Generate structured data for local business
 * @param {{name?: string, description?: string, url?: string, telephone?: string, email?: string, address?: any, geo?: any, openingHours?: string[], priceRange?: string, paymentAccepted?: string[], currenciesAccepted?: string}} options - Local business options
 * @returns {Object} JSON-LD structured data
 */
export function generateLocalBusinessStructuredData(options = {}) {
  const {
    name = 'Manzano Homes',
    description = 'Premier real estate services in the Manzano neighborhood of Las Vegas',
    url = 'https://manzanohomes.com',
    telephone = '+1-702-500-1942',
    email = 'info@manzanohomes.com',
    address = {
      streetAddress: '3693 Manzano Peak Ave',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89121',
      addressCountry: 'US',
    },
    geo = {
      latitude: 36.1699,
      longitude: -115.1398,
    },
    openingHours = ['Mo-Fr 09:00-18:00', 'Sa 09:00-17:00', 'Su 10:00-16:00'],
    priceRange = '$$',
    paymentAccepted = ['Cash', 'Check', 'Credit Card'],
    currenciesAccepted = 'USD',
  } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: name,
    description: description,
    url: url,
    telephone: telephone,
    email: email,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...geo,
    },
    openingHours: openingHours,
    priceRange: priceRange,
    paymentAccepted: paymentAccepted,
    currenciesAccepted: currenciesAccepted,
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
      containedInPlace: {
        '@type': 'State',
        name: 'Nevada',
      },
    },
  };
}

/**
 * Generate breadcrumb structured data
 * @param {Array<any>} breadcrumbs - Breadcrumb items
 * @returns {Object} JSON-LD structured data
 */
export function generateBreadcrumbStructuredData(breadcrumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQ structured data
 * @param {Array<any>} faqs - FAQ items
 * @returns {Object} JSON-LD structured data
 */
export function generateFAQStructuredData(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate review structured data
 * @param {{author?: string, rating?: number, reviewBody?: string, datePublished?: string, itemReviewed?: string}} review - Review data
 * @returns {Object} JSON-LD structured data
 */
export function generateReviewStructuredData(review) {
  const { author, rating, reviewBody, datePublished, itemReviewed = 'Manzano Homes' } = review;

  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
      bestRating: 5,
    },
    reviewBody: reviewBody,
    datePublished: datePublished,
    itemReviewed: {
      '@type': 'Organization',
      name: itemReviewed,
    },
  };
}

/**
 * SEO configuration for different page types
 */
export const SEO_CONFIGS = {
  HOMEPAGE: {
    title: 'Manzano Homes - Las Vegas Real Estate | 3693 Manzano Peak Ave',
    description:
      'Discover your dream home in the Manzano neighborhood of Las Vegas. Prime location near 3693 Manzano Peak Ave with excellent schools, walkability, and modern amenities.',
    keywords:
      'Manzano Las Vegas, Las Vegas real estate, homes for sale Las Vegas, Manzano Peak Ave, Las Vegas neighborhoods, real estate agent Las Vegas',
    priority: '1.0',
  },
  NEIGHBORHOOD: {
    title: 'Manzano Neighborhood - Las Vegas Real Estate Guide',
    description:
      "Learn about the Manzano neighborhood in Las Vegas. Discover schools, amenities, walkability, and why it's the perfect place to call home.",
    keywords:
      'Manzano neighborhood Las Vegas, Las Vegas neighborhoods, Manzano schools, Las Vegas real estate guide',
    priority: '0.8',
  },
  PROPERTIES: {
    title: 'Homes for Sale in Manzano - Las Vegas Real Estate',
    description:
      'Browse available homes for sale in the Manzano neighborhood of Las Vegas. Find your perfect home with our expert real estate team.',
    keywords:
      'homes for sale Manzano, Las Vegas homes for sale, Manzano real estate, Las Vegas property listings',
    priority: '0.9',
  },
  VALUATION: {
    title: 'Home Valuation - Get Your Manzano Home Value',
    description:
      'Get an accurate home valuation for your Manzano property. Free, no-obligation home value estimate from local Las Vegas real estate experts.',
    keywords:
      'home valuation Las Vegas, Manzano home value, Las Vegas property value, home appraisal',
    priority: '0.7',
  },
  CONTACT: {
    title: 'Contact Manzano Homes - Las Vegas Real Estate Team',
    description:
      "Contact our expert real estate team in Las Vegas. We're here to help you find your dream home in the Manzano neighborhood.",
    keywords:
      'contact real estate agent Las Vegas, Manzano Homes contact, Las Vegas real estate team',
    priority: '0.6',
  },
};

/**
 * Generate page-specific SEO data
 * @param {string} pageType - Type of page
 * @param {{path?: string, image?: string, title?: string, description?: string, keywords?: string, url?: string, type?: string, noindex?: boolean, nofollow?: boolean, breadcrumbs?: Array<any>, faqs?: Array<any>, property?: any}} customData - Custom SEO data
 * @returns {Object} Complete SEO data
 */
export function generatePageSEO(pageType, customData = {}) {
  const baseConfig =
    SEO_CONFIGS[/** @type {keyof typeof SEO_CONFIGS} */ (pageType)] || SEO_CONFIGS.HOMEPAGE;

  return {
    ...baseConfig,
    ...customData,
    url: customData.url || `https://manzanohomes.com${customData.path || ''}`,
    image: customData.image || 'https://manzanohomes.com/og-image.jpg',
    canonical: `https://manzanohomes.com${customData.path || ''}`,
  };
}
