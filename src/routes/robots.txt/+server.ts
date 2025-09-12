import type { RequestHandler } from './$types';

const DOMAIN = 'https://www.manzanohomes.com';

export const GET: RequestHandler = async ({ url }) => {
  const isProduction =
    url.hostname === 'www.manzanohomes.com' || url.hostname === 'manzanohomes.com';

  // Different rules for production vs staging/development
  const robotsTxt = isProduction ? productionRobots() : stagingRobots();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
};

function productionRobots(): string {
  return `# Manzano Homes - Las Vegas Real Estate
# Last Updated: ${new Date().toISOString().split('T')[0]}

# CRITICAL: Sitemap for Google indexing
Sitemap: ${DOMAIN}/sitemap.xml
Sitemap: ${DOMAIN}/sitemap-properties.xml
Sitemap: ${DOMAIN}/sitemap-index.xml

# Allow all legitimate crawlers
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_app/
Disallow: /search?
Disallow: /*?sort=
Disallow: /*?filter=
Disallow: /*?page=
Disallow: /property/*/print
Disallow: /tmp/
Disallow: /private/

# Google - Priority crawler
User-agent: Googlebot
Allow: /
Allow: /api/properties/featured
Crawl-delay: 0

User-agent: Googlebot-Image
Allow: /images/
Allow: /property/*/images/
Disallow: /images/watermark/

# Bing
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

# AI Bots - Allow for better visibility
User-agent: GPTBot
Allow: /
Allow: /neighborhood
Allow: /homes-for-sale
Disallow: /api/
Disallow: /admin/

User-agent: ChatGPT-User
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: CCBot
Allow: /
Crawl-delay: 10

User-agent: anthropic-ai
Allow: /
Disallow: /api/
Disallow: /admin/

User-agent: Claude-Web
Allow: /
Disallow: /api/
Disallow: /admin/

# Host directive
Host: ${DOMAIN}`;
}

function stagingRobots(): string {
  return `# Staging/Development Environment
User-agent: *
Disallow: /

# Only allow specific testing bots
User-agent: GoogleBot
Disallow: /
Allow: /robots.txt

# No sitemap for staging`;
}
