import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const siteUrl = process.env.SITE_URL;

if (!siteUrl) {
  console.warn('[sitemap] Define SITE_URL at build time to generate sitemap.xml.');
  process.exit(0);
}

let site;

try {
  site = new URL(siteUrl);
} catch {
  throw new Error('SITE_URL must be an absolute URL, such as https://your-domain.com.');
}

if (!['http:', 'https:'].includes(site.protocol)) {
  throw new Error('SITE_URL must use HTTP or HTTPS.');
}

const escapeXml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const location = escapeXml(new URL('/', site).href);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${location}</loc></url>\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`;
const outputDirectory = resolve('dist');

await Promise.all([
  writeFile(resolve(outputDirectory, 'sitemap.xml'), sitemap),
  writeFile(resolve(outputDirectory, 'robots.txt'), robots),
]);

console.info(`[sitemap] Generated sitemap for ${site.origin}.`);
