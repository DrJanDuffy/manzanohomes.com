import { json } from '@sveltejs/kit';

/**
 * Placeholder image API endpoint
 * Generates placeholder images with specified dimensions
 */
export async function GET({ url }) {
  const width = parseInt(url.searchParams.get('w') || '400');
  const height = parseInt(url.searchParams.get('h') || '250');
  const text = url.searchParams.get('text') || `${width}x${height}`;
  const bgColor = url.searchParams.get('bg') || 'f3f4f6';
  const textColor = url.searchParams.get('color') || '6b7280';

  // Validate dimensions
  if (width > 2000 || height > 2000 || width < 50 || height < 50) {
    return json({ error: 'Invalid dimensions' }, { status: 400 });
  }

  // Create SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#${bgColor}"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="14" fill="#${textColor}" text-anchor="middle" dy=".3em">${text}</text>
    </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000',
    },
  });
}
