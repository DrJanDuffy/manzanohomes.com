<script>
import { ICON_CONFIGS, getPropertyFeatureIcon, getPropertyTypeIcon } from '$lib/utils/icons.js';
import Icon from './Icon.svelte';

/**
 * @typedef {Object} PropertyIconProps
 * @property {string} type - Icon type ('feature' or 'property')
 * @property {string} name - Feature or property type name
 * @property {string} [size] - Icon size
 * @property {string} [color] - Icon color
 * @property {string} [className] - Additional CSS classes
 * @property {string} [title] - Accessibility title
 */

/** @type {PropertyIconProps} */
const { type = 'feature', name, color: _color, className: _className = '', title } = $props();

// Get icon name based on type
const _iconName = type === 'feature' ? getPropertyFeatureIcon(name) : getPropertyTypeIcon(name);

// Get default config based on type
const defaultConfig =
  type === 'feature' ? ICON_CONFIGS.PROPERTY_FEATURE : ICON_CONFIGS.PROPERTY_TYPE;

// Use provided values or defaults
const _iconSize = size || defaultConfig.size;
const _iconColor = color || defaultConfig.color;

// Generate title if not provided
const _iconTitle = title || `${type === 'feature' ? 'Property feature' : 'Property type'}: ${name}`;
</script>

<Icon
  name={iconName}
  size={iconSize}
  color={iconColor}
  className={className}
  title={iconTitle}
  {...restProps}
/>
