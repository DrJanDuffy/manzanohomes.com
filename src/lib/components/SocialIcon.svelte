<script>
import { ICON_CONFIGS, getSocialIcon } from '$lib/utils/icons.js';
import Icon from './Icon.svelte';

/**
 * @typedef {Object} SocialIconProps
 * @property {string} platform - Social media platform
 * @property {string} [size] - Icon size
 * @property {string} [color] - Icon color
 * @property {string} [className] - Additional CSS classes
 * @property {string} [title] - Accessibility title
 * @property {string} [href] - Link URL
 * @property {string} [target] - Link target
 */

/** @type {SocialIconProps} */
const {
  platform,
  size,
  color,
  className = '',
  title,
  href,
  target = '_blank',
  // biome-ignore lint/correctness/noUnusedVariables: restProps are passed through
  ...restProps
} = $props();

// Get icon name
const _iconName = getSocialIcon(platform);

// Use provided values or defaults
const _iconSize = size || ICON_CONFIGS.SOCIAL.size;
const iconColor = color || ICON_CONFIGS.SOCIAL.color;

// Generate title if not provided
const _iconTitle = title || `Follow us on ${platform}`;

// Platform-specific colors
const platformColors = /** @type {Record<string, string>} */ ({
  facebook: 'text-blue-600',
  twitter: 'text-blue-400',
  instagram: 'text-pink-600',
  linkedin: 'text-blue-700',
  youtube: 'text-red-600',
  whatsapp: 'text-green-600',
});

const _platformColor = platformColors[platform?.toLowerCase()] || iconColor;
</script>

{#if href}
  <a
    href={href}
    target={target}
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 {className}"
    title={iconTitle}
    aria-label={iconTitle}
  >
    <Icon
      name={iconName}
      size={iconSize}
      color={platformColor}
      {...restProps}
    />
  </a>
{:else}
  <Icon
    name={iconName}
    size={iconSize}
    color={platformColor}
    className={className}
    title={iconTitle}
    {...restProps}
  />
{/if}
