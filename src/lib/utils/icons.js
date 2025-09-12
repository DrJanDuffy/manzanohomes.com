/**
 * Icon utilities for real estate website
 * Provides optimized icon handling with Iconify
 */

/**
 * Real estate specific icon sets
 */
export const REAL_ESTATE_ICONS = {
  // Property features
  BEDROOM: 'mdi:bed',
  BATHROOM: 'mdi:shower',
  SQUARE_FOOT: 'mdi:square-outline',
  GARAGE: 'mdi:garage',
  POOL: 'mdi:pool',
  GARDEN: 'mdi:flower',
  FIREPLACE: 'mdi:fireplace',
  DECK: 'mdi:deck',

  // Property types
  HOUSE: 'mdi:home',
  CONDO: 'mdi:office-building',
  TOWNHOUSE: 'mdi:home-city',
  APARTMENT: 'mdi:home-group',
  LAND: 'mdi:tree',

  // Location & amenities
  LOCATION: 'mdi:map-marker',
  SCHOOL: 'mdi:school',
  HOSPITAL: 'mdi:hospital',
  SHOPPING: 'mdi:shopping',
  RESTAURANT: 'mdi:restaurant',
  PARK: 'mdi:tree',
  BEACH: 'mdi:beach',
  MOUNTAIN: 'mdi:terrain',

  // Navigation & UI
  SEARCH: 'mdi:magnify',
  FILTER: 'mdi:filter',
  SORT: 'mdi:sort',
  HEART: 'mdi:heart',
  HEART_FILLED: 'mdi:heart',
  SHARE: 'mdi:share',
  PHONE: 'mdi:phone',
  EMAIL: 'mdi:email',
  CALENDAR: 'mdi:calendar',
  CLOCK: 'mdi:clock',

  // Actions
  VIEW: 'mdi:eye',
  EDIT: 'mdi:pencil',
  DELETE: 'mdi:delete',
  SAVE: 'mdi:content-save',
  UPLOAD: 'mdi:upload',
  DOWNLOAD: 'mdi:download',
  PRINT: 'mdi:printer',

  // Status & indicators
  CHECK: 'mdi:check',
  CLOSE: 'mdi:close',
  WARNING: 'mdi:alert',
  INFO: 'mdi:information',
  SUCCESS: 'mdi:check-circle',
  ERROR: 'mdi:alert-circle',

  // Social & contact
  FACEBOOK: 'mdi:facebook',
  TWITTER: 'mdi:twitter',
  INSTAGRAM: 'mdi:instagram',
  LINKEDIN: 'mdi:linkedin',
  YOUTUBE: 'mdi:youtube',
  WHATSAPP: 'mdi:whatsapp',

  // Financial
  DOLLAR: 'mdi:currency-usd',
  CALCULATOR: 'mdi:calculator',
  CHART: 'mdi:chart-line',
  TREND_UP: 'mdi:trending-up',
  TREND_DOWN: 'mdi:trending-down',

  // Media & files
  IMAGE: 'mdi:image',
  VIDEO: 'mdi:video',
  DOCUMENT: 'mdi:file-document',
  PDF: 'mdi:file-pdf-box',
  FOLDER: 'mdi:folder',

  // Weather & environment
  SUN: 'mdi:weather-sunny',
  CLOUD: 'mdi:weather-cloudy',
  RAIN: 'mdi:weather-rainy',
  SNOW: 'mdi:weather-snowy',
  WIND: 'mdi:weather-windy',

  // Transportation
  CAR: 'mdi:car',
  BUS: 'mdi:bus',
  TRAIN: 'mdi:train',
  PLANE: 'mdi:airplane',
  BIKE: 'mdi:bike',
  WALK: 'mdi:walk',
};

/**
 * Icon size presets
 */
export const ICON_SIZES = {
  XS: 'w-3 h-3',
  SM: 'w-4 h-4',
  MD: 'w-5 h-5',
  LG: 'w-6 h-6',
  XL: 'w-8 h-8',
  '2XL': 'w-10 h-10',
  '3XL': 'w-12 h-12',
};

/**
 * Icon color presets
 */
export const ICON_COLORS = {
  PRIMARY: 'text-primary-600',
  SECONDARY: 'text-secondary-600',
  GRAY: 'text-gray-500',
  WHITE: 'text-white',
  BLACK: 'text-black',
  SUCCESS: 'text-green-600',
  WARNING: 'text-yellow-600',
  ERROR: 'text-red-600',
  INFO: 'text-blue-600',
};

/**
 * Get icon class with size and color
 * @param {string} size - Icon size
 * @param {string} color - Icon color
 * @returns {string} Combined CSS classes
 */
export function getIconClasses(size = 'MD', color = 'GRAY') {
  const sizeClass = ICON_SIZES[/** @type {keyof typeof ICON_SIZES} */ (size)] || ICON_SIZES.MD;
  const colorClass = ICON_COLORS[/** @type {keyof typeof ICON_COLORS} */ (color)] || ICON_COLORS.GRAY;
  return `${sizeClass} ${colorClass}`;
}

/**
 * Get property feature icon
 * @param {string} feature - Property feature
 * @returns {string} Icon name
 */
export function getPropertyFeatureIcon(feature) {
  const featureMap = /** @type {Record<string, string>} */ ({
    bedrooms: REAL_ESTATE_ICONS.BEDROOM,
    bathrooms: REAL_ESTATE_ICONS.BATHROOM,
    square_feet: REAL_ESTATE_ICONS.SQUARE_FOOT,
    garage: REAL_ESTATE_ICONS.GARAGE,
    pool: REAL_ESTATE_ICONS.POOL,
    garden: REAL_ESTATE_ICONS.GARDEN,
    fireplace: REAL_ESTATE_ICONS.FIREPLACE,
    deck: REAL_ESTATE_ICONS.DECK,
  });

  return featureMap[feature] || REAL_ESTATE_ICONS.HOUSE;
}

/**
 * Get property type icon
 * @param {string} type - Property type
 * @returns {string} Icon name
 */
export function getPropertyTypeIcon(type) {
  const typeMap = /** @type {Record<string, string>} */ ({
    house: REAL_ESTATE_ICONS.HOUSE,
    condo: REAL_ESTATE_ICONS.CONDO,
    townhouse: REAL_ESTATE_ICONS.TOWNHOUSE,
    apartment: REAL_ESTATE_ICONS.APARTMENT,
    land: REAL_ESTATE_ICONS.LAND,
  });

  return typeMap[type?.toLowerCase()] || REAL_ESTATE_ICONS.HOUSE;
}

/**
 * Get amenity icon
 * @param {string} amenity - Amenity name
 * @returns {string} Icon name
 */
export function getAmenityIcon(amenity) {
  const amenityMap = /** @type {Record<string, string>} */ ({
    school: REAL_ESTATE_ICONS.SCHOOL,
    hospital: REAL_ESTATE_ICONS.HOSPITAL,
    shopping: REAL_ESTATE_ICONS.SHOPPING,
    restaurant: REAL_ESTATE_ICONS.RESTAURANT,
    park: REAL_ESTATE_ICONS.PARK,
    beach: REAL_ESTATE_ICONS.BEACH,
    mountain: REAL_ESTATE_ICONS.MOUNTAIN,
  });

  return amenityMap[amenity?.toLowerCase()] || REAL_ESTATE_ICONS.LOCATION;
}

/**
 * Get social media icon
 * @param {string} platform - Social media platform
 * @returns {string} Icon name
 */
export function getSocialIcon(platform) {
  const socialMap = /** @type {Record<string, string>} */ ({
    facebook: REAL_ESTATE_ICONS.FACEBOOK,
    twitter: REAL_ESTATE_ICONS.TWITTER,
    instagram: REAL_ESTATE_ICONS.INSTAGRAM,
    linkedin: REAL_ESTATE_ICONS.LINKEDIN,
    youtube: REAL_ESTATE_ICONS.YOUTUBE,
    whatsapp: REAL_ESTATE_ICONS.WHATSAPP,
  });

  return socialMap[platform?.toLowerCase()] || REAL_ESTATE_ICONS.SHARE;
}

/**
 * Get status icon
 * @param {string} status - Status type
 * @returns {string} Icon name
 */
export function getStatusIcon(status) {
  const statusMap = /** @type {Record<string, string>} */ ({
    success: REAL_ESTATE_ICONS.SUCCESS,
    error: REAL_ESTATE_ICONS.ERROR,
    warning: REAL_ESTATE_ICONS.WARNING,
    info: REAL_ESTATE_ICONS.INFO,
    check: REAL_ESTATE_ICONS.CHECK,
    close: REAL_ESTATE_ICONS.CLOSE,
  });

  return statusMap[status?.toLowerCase()] || REAL_ESTATE_ICONS.INFO;
}

/**
 * Icon configuration for different use cases
 */
export const ICON_CONFIGS = {
  PROPERTY_FEATURE: {
    size: 'SM',
    color: 'GRAY',
  },
  PROPERTY_TYPE: {
    size: 'LG',
    color: 'PRIMARY',
  },
  NAVIGATION: {
    size: 'MD',
    color: 'GRAY',
  },
  ACTION: {
    size: 'MD',
    color: 'PRIMARY',
  },
  STATUS: {
    size: 'MD',
    color: 'SUCCESS',
  },
  SOCIAL: {
    size: 'LG',
    color: 'PRIMARY',
  },
};
