<script>
import { ICON_CONFIGS, getIconClasses } from '$lib/utils/icons.js';

/**
 * @typedef {Object} IconProps
 * @property {string} name - Icon name (e.g., 'mdi:home')
 * @property {string} [size] - Icon size (XS, SM, MD, LG, XL, 2XL, 3XL)
 * @property {string} [color] - Icon color (PRIMARY, SECONDARY, GRAY, WHITE, BLACK, SUCCESS, WARNING, ERROR, INFO)
 * @property {string} [className] - Additional CSS classes
 * @property {string} [title] - Accessibility title
 * @property {string} [ariaLabel] - Accessibility label
 * @property {boolean} [spin] - Whether to animate the icon
 * @property {boolean} [pulse] - Whether to pulse the icon
 */

/** @type {IconProps} */
const {
  name,
  size = 'MD',
  color = 'GRAY',
  className = '',
  title,
  ariaLabel,
  spin = false,
  pulse = false,
  ...restProps
} = $props();

// Get icon classes
const iconClasses = getIconClasses(size, color);

// Combine all classes
const allClasses = [
  iconClasses,
  className,
  spin ? 'animate-spin' : '',
  pulse ? 'animate-pulse' : '',
]
  .filter(Boolean)
  .join(' ');

// Accessibility attributes
const accessibilityProps = {
  ...(title && { title }),
  ...(ariaLabel && { 'aria-label': ariaLabel }),
  ...(title && !ariaLabel && { 'aria-label': title }),
};
</script>

<span
  class="iconify {allClasses}"
  data-icon="{name}"
  {...accessibilityProps}
  {...restProps}
></span>
