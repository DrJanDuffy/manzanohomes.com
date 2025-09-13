<script>
import SEO from '$lib/components/SEO.svelte';

// Zip code data
const _zipData = {
  zip: '89178',
  city: 'Las Vegas',
  state: 'NV',
  area: 'Northwest Las Vegas',
  description:
    'Northwest Las Vegas 89178 offers a perfect blend of suburban living with easy access to urban amenities. This growing area features modern homes, excellent schools, and convenient access to major highways and shopping centers.',
  established: '1990s',
  totalHomes: '2,500+',
  averagePrice: '$425,000',
  medianPrice: '$415,000',
  priceRange: '$300,000 - $800,000',
  homeTypes: ['Single Family', 'Townhomes', 'Condos', 'New Construction'],
  walkScore: '65',
  schoolRating: '8.2/10',
  crimeRate: 'Low',
  commuteTime: '20 min to Strip',
};

// Key features
const _keyFeatures = [
  {
    title: 'Growing Community',
    description: 'Rapidly developing area with new construction and modern amenities',
    icon: 'mdi:trending-up',
  },
  {
    title: 'Excellent Schools',
    description: 'Top-rated public and private schools serving the 89178 area',
    icon: 'mdi:school',
  },
  {
    title: 'Convenient Location',
    description: 'Easy access to I-95, I-215, and major shopping centers',
    icon: 'mdi:map-marker',
  },
  {
    title: 'Family-Friendly',
    description: 'Safe neighborhoods with parks, playgrounds, and community events',
    icon: 'mdi:heart',
  },
  {
    title: 'Modern Homes',
    description: 'Contemporary architecture with updated features and smart technology',
    icon: 'mdi:home',
  },
  {
    title: 'Recreation',
    description: 'Close to parks, golf courses, and outdoor recreation opportunities',
    icon: 'mdi:tree',
  },
];

// Schools data
const _schools = [
  {
    name: 'Northwest Career and Technical Academy',
    type: 'High School',
    rating: '8/10',
    distance: '1.5 miles',
    description: 'Career-focused high school with strong technical programs',
  },
  {
    name: 'Northwest Career and Technical Academy Elementary',
    type: 'Elementary',
    rating: '9/10',
    distance: '0.8 miles',
    description: 'Highly rated elementary school with excellent academic programs',
  },
  {
    name: 'Desert Pines High School',
    type: 'High School',
    rating: '7/10',
    distance: '2.2 miles',
    description: 'Comprehensive high school with diverse academic offerings',
  },
  {
    name: 'Canyon Springs High School',
    type: 'High School',
    rating: '8/10',
    distance: '3.1 miles',
    description: 'Well-established high school with strong sports and arts programs',
  },
];

// Shopping & Dining
const _shopping = [
  {
    name: 'Centennial Hills Town Center',
    type: 'Shopping Center',
    distance: '2.1 miles',
    description: 'Large shopping center with major retailers, restaurants, and entertainment',
  },
  {
    name: 'Aliante Casino + Hotel',
    type: 'Entertainment',
    distance: '3.8 miles',
    description: 'Upscale casino resort with shopping, dining, and entertainment options',
  },
  {
    name: "Mountain's Edge",
    type: 'Shopping Center',
    distance: '4.2 miles',
    description: 'Open-air shopping center with restaurants, retail, and entertainment',
  },
  {
    name: 'Red Rock Casino Resort & Spa',
    type: 'Entertainment',
    distance: '5.2 miles',
    description: 'Luxury resort with shopping, dining, and entertainment options',
  },
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
