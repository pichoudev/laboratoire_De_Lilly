// Personnalisez ces valeurs avant la mise en ligne
export const SITE = {
  brand: 'Les Laboratoires Lilly', // nom affiché dans le menu, le pied de page et l'onglet
  whatsapp: '237600000000', // numéro WhatsApp au format international, sans + ni espaces
  email: 'contact@Labo.com',
  currency: '€'
}

// Chemin vers un fichier du dossier /public, valable quel que soit l'hébergement
export const asset = (path) => import.meta.env.BASE_URL + path

export function whatsappLink(message) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}
