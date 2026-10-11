// Après « vite build » : crée une page HTML par produit (balises SEO lisibles sans JavaScript),
// plus sitemap.xml et robots.txt. Lancé automatiquement par « npm run build ».
import { createServer } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('dist')
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { products } = await server.ssrLoadModule('/src/data/products.js')
const { SITE } = await server.ssrLoadModule('/src/config.js')
const { pageMeta, productJsonLd } = await server.ssrLoadModule('/src/seo.js')
await server.close()

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const base = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const org = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.brand,
  url: SITE.url,
  logo: SITE.url + '/icon-512.png'
}

function render(m, jsonld) {
  const url = SITE.url + m.path
  const tags = [
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="fr_FR" />`,
    `<meta property="og:site_name" content="${esc(SITE.brand)}" />`,
    `<meta property="og:title" content="${esc(m.title)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE.url}/icon-512.png" />`,
    `<meta name="twitter:card" content="summary" />`,
    ...jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`)
  ].join('\n    ')
  return base
    .replace(/<title>.*?<\/title>/s, `<title>${esc(m.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(m.description)}" />`)
    .replace('</head>', `    ${tags}\n  </head>`)
}

fs.writeFileSync(path.join(dist, 'index.html'), render(pageMeta(), [org]))
for (const p of products) {
  const dir = path.join(dist, 'produit', p.id)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), render(pageMeta(p), [org, productJsonLd(p)]))
}

const urls = ['/', ...products.map((p) => `/produit/${p.id}`)]
const day = new Date().toISOString().slice(0, 10)
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${SITE.url}${u}</loc><lastmod>${day}</lastmod></url>`).join('\n') +
    `\n</urlset>\n`
)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`)
console.log(`SEO : ${urls.length} pages, sitemap.xml et robots.txt générés pour ${SITE.url}`)