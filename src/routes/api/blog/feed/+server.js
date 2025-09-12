import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export async function GET() {
  try {
    const rssUrl =
      'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';

    // Fetch RSS feed
    const response = await fetch(rssUrl, {
      headers: {
        'User-Agent': 'ManzanoHomes-Bot/1.0 (Real Estate Blog Integration)',
        Accept: 'application/rss+xml, application/xml, text/xml',
      },
    });

    if (!response.ok) {
      throw new Error(`RSS feed fetch failed: ${response.status} ${response.statusText}`);
    }

    const xmlText = await response.text();

    // Parse RSS XML using regex (server-safe approach)
    const blogPosts = [];

    // Extract items using regex
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match = itemRegex.exec(xmlText);
    let index = 0;

    while (match !== null && index < 10) {
      const itemContent = match[1];

      // Extract fields using regex
      const titleMatch = itemContent.match(
        /<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/
      );
      const title = titleMatch ? (titleMatch[1] || titleMatch[2]).trim() : 'Untitled';

      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
      const link = linkMatch ? linkMatch[1].trim() : '#';

      const descMatch = itemContent.match(
        /<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/
      );
      const description = descMatch ? (descMatch[1] || descMatch[2]).trim() : '';

      const dateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const pubDate = dateMatch ? dateMatch[1].trim() : new Date().toISOString();

      const categoryMatch = itemContent.match(
        /<category><!\[CDATA\[(.*?)\]\]><\/category>|<category>(.*?)<\/category>/
      );
      const category = categoryMatch
        ? (categoryMatch[1] || categoryMatch[2]).trim()
        : 'Market Update';

      // Extract image from content or description
      let imageUrl = '/api/placeholder/400/250'; // Default fallback
      const contentMatch = itemContent.match(
        /<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>|<content:encoded>(.*?)<\/content:encoded>/
      );
      const content = contentMatch ? contentMatch[1] || contentMatch[2] : description;

      // Look for image in content
      const imgMatch = content.match(/<img[^>]+src="([^"]+)"/i);
      if (imgMatch) {
        imageUrl = imgMatch[1];
      }

      // Clean up description (remove HTML tags)
      const cleanDescription = `${description
        .replace(/<[^>]*>/g, '')
        .replace(/&[^;]+;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 200)}...`;

      // Format date
      const formattedDate = new Date(pubDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      // Determine read time based on content length
      const wordCount = cleanDescription.split(' ').length;
      const readTime = `${Math.max(2, Math.ceil(wordCount / 200))} min read`;

      blogPosts.push({
        id: index + 1,
        title,
        excerpt: cleanDescription,
        author: 'Simplifying the Market',
        date: formattedDate,
        category: category,
        image: imageUrl,
        readTime,
        link,
        originalDate: pubDate,
      });

      index++;
      match = itemRegex.exec(xmlText);
    }

    // Sort by date (newest first)
    blogPosts.sort((a, b) => new Date(b.originalDate) - new Date(a.originalDate));

    return json({
      success: true,
      posts: blogPosts,
      lastUpdated: new Date().toISOString(),
      source: 'Simplifying the Market RSS Feed',
    });
  } catch (err) {
    console.error('RSS Feed Error:', err);

    // Return fallback content if RSS fails
    const fallbackPosts = [
      {
        id: 1,
        title: 'Las Vegas Market Update - Current Trends',
        excerpt:
          'Get the latest insights on local real estate trends, pricing, and inventory levels in the Las Vegas and Manzano neighborhood areas.',
        author: 'Dr. Jan Duffy',
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        category: 'Market Analysis',
        image: '/api/placeholder/400/250',
        readTime: '5 min read',
        link: '#',
        originalDate: new Date().toISOString(),
      },
      {
        id: 2,
        title: "First-Time Buyer's Guide to Las Vegas",
        excerpt:
          'Everything you need to know about purchasing your first home in Las Vegas, from pre-approval to closing day.',
        author: 'Sarah Chen',
        date: new Date(Date.now() - 86400000).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        category: 'Buying Guide',
        image: '/api/placeholder/400/250',
        readTime: '8 min read',
        link: '#',
        originalDate: new Date(Date.now() - 86400000).toISOString(),
      },
    ];

    return json({
      success: false,
      error: err.message,
      posts: fallbackPosts,
      lastUpdated: new Date().toISOString(),
      source: 'Fallback Content',
    });
  }
}
