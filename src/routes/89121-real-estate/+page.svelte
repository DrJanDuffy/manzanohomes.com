<script>
import SEO from '$lib/components/SEO.svelte';

// Zip code data
const _zipData = {
  zip: '89121',
  city: 'Las Vegas',
  state: 'NV',
  area: 'Southeast Las Vegas',
  description:
    'Southeast Las Vegas 89121 is a premier residential area known for its family-friendly neighborhoods, excellent schools, and convenient access to major highways. This established community offers a perfect balance of suburban tranquility and urban convenience.',
  established: '1990s',
  totalHomes: '3,800+',
  averagePrice: '$485,000',
  medianPrice: '$475,000',
  priceRange: '$350,000 - $850,000',
  homeTypes: ['Single Family', 'Townhomes', 'Condos', 'New Construction'],
  walkScore: '72',
  schoolRating: '8.5/10',
  crimeRate: 'Low',
  commuteTime: '15 min to Strip',
};

// Key features
const _keyFeatures = [
  {
    title: 'Established Community',
    description: 'Well-established neighborhoods with mature trees and established amenities',
    icon: 'mdi:home-group',
  },
  {
    title: 'Top-Rated Schools',
    description: 'Highly-rated public and private schools serving the 89121 area',
    icon: 'mdi:school',
  },
  {
    title: 'Prime Location',
    description: 'Easy access to I-515, I-215, and major shopping centers',
    icon: 'mdi:map-marker',
  },
  {
    title: 'Family-Friendly',
    description: 'Safe neighborhoods with parks, playgrounds, and community events',
    icon: 'mdi:heart',
  },
  {
    title: 'Modern Amenities',
    description: 'Contemporary homes with smart technology and updated features',
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
    name: 'Manzano Elementary School',
    type: 'Elementary',
    rating: '9/10',
    distance: '0.3 miles',
    description: 'Highly rated elementary school with excellent academic programs',
  },
  {
    name: 'Southeast Career Technical Academy',
    type: 'High School',
    rating: '8/10',
    distance: '1.2 miles',
    description: 'Career-focused high school with strong technical programs',
  },
  {
    name: 'Green Valley High School',
    type: 'High School',
    rating: '8/10',
    distance: '2.1 miles',
    description: 'Comprehensive high school with diverse academic offerings',
  },
  {
    name: 'Coronado High School',
    type: 'High School',
    rating: '7/10',
    distance: '2.8 miles',
    description: 'Well-established high school with strong sports and arts programs',
  },
];

// Shopping & Dining
const _shopping = [
  {
    name: 'Green Valley Ranch Resort & Casino',
    type: 'Entertainment & Shopping',
    distance: '3.2 miles',
    description: 'Upscale resort with shopping, dining, and entertainment options',
  },
  {
    name: 'The District at Green Valley Ranch',
    type: 'Shopping Center',
    distance: '3.5 miles',
    description: 'Open-air shopping center with restaurants, retail, and entertainment',
  },
  {
    name: 'Henderson Pavilion',
    type: 'Entertainment',
    distance: '4.1 miles',
    description: 'Outdoor amphitheater hosting concerts and community events',
  },
  {
    name: 'Galleria at Sunset',
    type: 'Shopping Mall',
    distance: '5.2 miles',
    description: 'Large shopping mall with department stores and dining options',
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
