<script>
// biome-ignore lint/correctness/noUnusedVariables: Used in template
const {
  size = 'medium',
  color = 'primary',
  text = '',
  overlay = false,
  fullScreen = false,
} = $props();

// biome-ignore lint/correctness/noUnusedVariables: Used in template
function getSizeClasses(size) {
  switch (size) {
    case 'small':
      return 'w-4 h-4';
    case 'large':
      return 'w-12 h-12';
    default:
      return 'w-8 h-8';
  }
}

// biome-ignore lint/correctness/noUnusedVariables: Used in template
function getColorClasses(color) {
  switch (color) {
    case 'white':
      return 'text-white';
    case 'gray':
      return 'text-gray-600';
    default:
      return 'text-primary-600';
  }
}

// biome-ignore lint/correctness/noUnusedVariables: Used in template
function getBorderWidth(size) {
  switch (size) {
    case 'small':
      return 'border-2';
    case 'large':
      return 'border-4';
    default:
      return 'border-2';
  }
}
</script>

{#if fullScreen}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
    <div class="text-center">
      <div class="animate-spin rounded-full {getSizeClasses(size)} {getBorderWidth(size)} border-gray-300 border-t-primary-600 mx-auto mb-4"></div>
      {#if text}
        <p class="text-gray-600 font-medium">{text}</p>
      {/if}
    </div>
  </div>
{:else if overlay}
  <div class="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-75">
    <div class="text-center">
      <div class="animate-spin rounded-full {getSizeClasses(size)} {getBorderWidth(size)} border-gray-300 border-t-primary-600 mx-auto mb-4"></div>
      {#if text}
        <p class="text-gray-600 font-medium">{text}</p>
      {/if}
    </div>
  </div>
{:else}
  <div class="flex items-center justify-center {text ? 'space-x-3' : ''}">
    <div class="animate-spin rounded-full {getSizeClasses(size)} {getBorderWidth(size)} border-gray-300 border-t-primary-600"></div>
    {#if text}
      <span class="text-gray-600 font-medium">{text}</span>
    {/if}
  </div>
{/if}

<!-- Alternative spinner with dots -->
{#if false}
  <div class="flex items-center justify-center space-x-1">
    <div class="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
    <div class="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
    <div class="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
  </div>
{/if}
