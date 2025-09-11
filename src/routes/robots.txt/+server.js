/**
 * Dynamic robots.txt endpoint for real estate website
 * Provides search engine crawling instructions
 */

export async function GET() {
  const baseUrl = 'https://manzanohomes.com';

  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_app/
Disallow: /_svelte/

# Allow important pages
Allow: /homes-for-sale
Allow: /neighborhood
Allow: /home-valuation
Allow: /contact
Allow: /about

# Crawl delay for respectful crawling
Crawl-delay: 1

# Specific instructions for major search engines
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

User-agent: Slurp
Allow: /
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}
