import type {
  BreadcrumbList,
  FAQPage,
  ItemList,
  Organization,
  RealEstateListing,
  Service,
  WebSite,
  WithContext,
} from 'schema-dts';

export class ManzanoSchemas {
  private readonly BASE_URL = 'https://www.manzanohomes.com';
  private readonly ORG_ID = `${this.BASE_URL}/#organization`;

  // Organization schema (use on every page)
  organization(): WithContext<Organization> {
    return {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      '@id': this.ORG_ID,
      name: 'Manzano Homes',
      url: this.BASE_URL,
      logo: `${this.BASE_URL}/logo.svg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3693 Manzano Peak Ave',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89121',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 36.0839,
        longitude: -115.0891,
      },
      telephone: '+17025550100',
      email: 'info@manzanohomes.com',
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '127',
      },
    };
  }

  // Property listing schema
  property(data: {
    id: string;
    mlsNumber: string;
    price: number;
    address: {
      street: string;
      city?: string;
      state?: string;
      zip?: string;
      lat: number;
      lng: number;
    };
    details: {
      bedrooms: number;
      bathrooms: number;
      squareFeet: number;
      yearBuilt: number;
    };
    images: Array<{ url: string; caption?: string }>;
    description?: string;
  }): Record<string, unknown> {
    return {
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      '@id': `${this.BASE_URL}/property/${data.id}`,
      url: `${this.BASE_URL}/property/${data.id}`,
      name: data.address.street,
      description: data.description || 'Beautiful home in Manzano, Las Vegas',
      offers: {
        '@type': 'Offer',
        price: data.price.toString(),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: data.address.street,
        addressLocality: data.address.city || 'Las Vegas',
        addressRegion: data.address.state || 'NV',
        postalCode: data.address.zip || '89121',
        addressCountry: 'US',
      } as Record<string, unknown>,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: data.address.lat,
        longitude: data.address.lng,
      },
      numberOfBedrooms: data.details.bedrooms,
      numberOfBathrooms: data.details.bathrooms,
      floorSize: {
        '@type': 'QuantitativeValue',
        value: data.details.squareFeet,
        unitCode: 'FTK',
      },
      yearBuilt: data.details.yearBuilt,
      image: data.images.map((img) => ({
        '@type': 'ImageObject',
        url: img.url,
        caption: img.caption || 'Property image',
      })),
    };
  }

  // Breadcrumb navigation
  breadcrumbs(items: Array<{ name: string; url: string }>): WithContext<BreadcrumbList> {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${this.BASE_URL}${item.url}`,
      })),
    };
  }

  // Website with search
  website(): WithContext<WebSite> {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${this.BASE_URL}/#website`,
      url: this.BASE_URL,
      name: 'Manzano Homes',
      description: 'Real estate in Manzano, Las Vegas 89121',
      publisher: {
        '@id': this.ORG_ID,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${this.BASE_URL}/homes-for-sale?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      } as Record<string, unknown>,
    };
  }

  // FAQ page schema
  faqPage(faqs: Array<{ question: string; answer: string }>): WithContext<FAQPage> {
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

  // Service schema
  service(data: {
    name: string;
    description: string;
    url: string;
    provider?: string;
  }): WithContext<Service> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: data.name,
      description: data.description,
      url: data.url.startsWith('http') ? data.url : `${this.BASE_URL}${data.url}`,
      provider: data.provider
        ? {
            '@type': 'RealEstateAgent',
            '@id': this.ORG_ID,
            name: data.provider,
          }
        : {
            '@type': 'RealEstateAgent',
            '@id': this.ORG_ID,
          },
    };
  }

  // Property list schema
  propertyList(
    properties: Array<{
      id: string;
      mlsNumber: string;
      price: number;
      address: {
        street: string;
        city?: string;
        state?: string;
        zip?: string;
        lat: number;
        lng: number;
      };
      details: {
        bedrooms: number;
        bathrooms: number;
        squareFeet: number;
        yearBuilt: number;
      };
      images: Array<{ url: string; caption?: string }>;
      description?: string;
    }>
  ): WithContext<ItemList> {
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Homes for Sale in Manzano',
      description: 'Available properties in the Manzano neighborhood, Las Vegas',
      itemListElement: properties.map((prop, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: this.property(prop),
      })),
    };
  }
}
