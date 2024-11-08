export function useMetaTag({
  title,
  name,
  description,
  url = '',
  image = '',
  type = 'website',
  siteName = '',
  locale = 'en_US',
}) {
  // Set the document title dynamically
  document.title = title;
  const { head } = document;

  // Helper function to create or update meta tags
  function updateMetaTag(selector, attr, content, isProperty = false) {
    let metaTag = document.querySelector(selector);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(isProperty ? 'property' : 'name', attr);
      head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  }

  // Update essential meta tags
  updateMetaTag('meta[name="description"]', 'description', description);
  updateMetaTag('meta[name="keywords"]', 'keywords', 'example, SEO, webpage, title, name, description');
  updateMetaTag('meta[name="author"]', 'author', 'Your Name or Your Company');

  // Open Graph Tags (for social media)
  updateMetaTag('meta[property="og:title"]', 'og:title', title, true);
  updateMetaTag('meta[property="og:description"]', 'og:description', description, true);
  updateMetaTag('meta[property="og:url"]', 'og:url', url || window.location.href, true);
  updateMetaTag('meta[property="og:image"]', 'og:image', image || '/default-image.jpg', true);
  updateMetaTag('meta[property="og:type"]', 'og:type', type, true);
  updateMetaTag('meta[property="og:site_name"]', 'og:site_name', siteName || title, true);
  updateMetaTag('meta[property="og:locale"]', 'og:locale', locale, true);

  // Twitter Card Tags
  updateMetaTag('meta[name="twitter:title"]', 'twitter:title', title);
  updateMetaTag('meta[name="twitter:description"]', 'twitter:description', description);
  updateMetaTag('meta[name="twitter:image"]', 'twitter:image', image || '/default-image.jpg');
  updateMetaTag('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');

  // JSON-LD for structured data
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    head.appendChild(script);
  }
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: name,
    description: description,
    url: url || window.location.href,
    image: image || '/default-image.jpg',
  });

  // Cleanup function to remove meta tags if needed
  return function cleanupMetaTags() {
    [
      'meta[name="description"]',
      'meta[name="keywords"]',
      'meta[name="author"]',
      'meta[property^="og:"]',
      'meta[name^="twitter:"]',
      'script[type="application/ld+json"]',
    ].forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => el.remove());
    });
  };
}
