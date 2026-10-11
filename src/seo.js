import { SITE } from './config.js'
import { formatPrice, fullName } from './data/products.js'

const HOME_TITLE = `Mounjaro KwikPen, de 2,5 à 15 mg | ${SITE.brand}`
const HOME_DESC =
  'Gamme Mounjaro KwikPen (tirzépatide) : stylos de 2,5, 5, 7,5, 10, 12,5 et 15 mg. Dosages, tarifs, notice et vidéo d’injection. Médicament soumis à prescription médicale.'

// Titre, description et adresse canonique d'une page (utilisés aussi par scripts/seo.mjs)
export function pageMeta(product) {
  if (!product) return { title: HOME_TITLE, description: HOME_DESC, path: '/' }
  const price = product.price != null ? ` Tarif : ${formatPrice(product.price)} ${SITE.currency}.` : ''
  return {
    title: `${fullName(product)} – stylo de 4 doses | ${SITE.brand}`,
    description: `${fullName(product)} : stylo prérempli de 4 doses de ${product.dose} (tirzépatide), une injection par semaine.${price} Médicament soumis à prescription médicale.`,
    path: `/produit/${product.id}`
  }
}

export function productJsonLd(product) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: fullName(product),
    description: pageMeta(product).description,
    image: SITE.url + product.image,
    brand: { '@type': 'Brand', name: 'Mounjaro' }
  }
  if (product.price != null) {
    data.offers = {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: product.price.toFixed(2),
      availability: 'https://schema.org/InStock',
      url: SITE.url + pageMeta(product).path
    }
  }
  return data
}

function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) { el = create(); document.head.appendChild(el) }
  el.setAttribute(attr, value)
}
const meta = (key, val) => setTag(`meta[${key}]`, () => { const m = document.createElement('meta'); m.setAttribute(key.split('=')[0], key.split('=')[1].replace(/"/g, '')); return m }, 'content', val)

// Met à jour les balises <head> lors de la navigation dans le site
export function applyMeta(product) {
  const m = pageMeta(product)
  const url = SITE.url + m.path
  document.title = m.title
  meta('name="description"', m.description)
  meta('property="og:title"', m.title)
  meta('property="og:description"', m.description)
  meta('property="og:url"', url)
  setTag('link[rel="canonical"]', () => { const l = document.createElement('link'); l.rel = 'canonical'; return l }, 'href', url)
}