import { asset } from '../config.js'

// Échelle utilisée pour la barre « perte estimée » (kg)
export const LOSS_SCALE = 22

const mounjaro = (id, num, price, loss, lossMin, lossMax, color, totalMg, tag, img) => ({
  id,
  line: 'mounjaro',
  brand: 'Mounjaro KwikPen',
  num,
  dose: `${num} mg`,
  price,
  priceUnit: 'stylo',
  perUnit: 'par stylo, soit 4 injections hebdomadaires',
  loss,
  lossMin,
  lossMax,
  image: asset(`img/${img}`),
  color,
  tag,
  cardName: `Stylo ${num} mg`,
  boxLine: `4 doses de ${num} mg`,
  tableContent: `${totalMg} mg · 4 doses`,
  subtitle: 'Tirzépatide, solution injectable en stylo prérempli de 4 doses.',
  specs: [
    ['Dose par injection', `${num} mg`],
    ['Doses par stylo', '4'],
    ['Contenu du stylo', `${totalMg} mg dans 2,4 ml`],
    ['Fréquence', '1 fois par semaine'],
    ['Voie', 'Sous-cutanée'],
    ['Aiguilles', 'Non incluses']
  ]
})

// Affiche un prix à la française : 250 → « 250 », 176.1 → « 176,10 »
export const formatPrice = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ','))

// price = null → « Prix sur demande ». loss = null → « Non communiquée ».
export const products = [
  mounjaro('2-5', '2,5', 200, null, null, null, '#55627a', 10, 'Dose d’initiation', 'mounjaro-2-5mg.png'),
  mounjaro('5', '5', 250, '7 à 10 kg', 7, 10, '#1e2a78', 20, '', 'mounjaro-5mg.png'),
  mounjaro('7-5', '7,5', 350, '10 à 13 kg', 10, 13, '#0b7a7c', 30, '', 'mounjaro-7-5mg.png'),
  mounjaro('10', '10', 400, '12 à 15 kg', 12, 15, '#c81e66', 40, '', 'mounjaro-10mg.png'),
  mounjaro('12-5', '12,5', 450, '15 à 18 kg', 15, 18, '#1f6fd1', 50, '', 'mounjaro-12-5mg.png'),
  mounjaro('15', '15', 500, '18 à 22 kg', 18, 22, '#d9461f', 60, 'Dose maximale', 'mounjaro-15mg.png')
]

export const fullName = (p) => `${p.brand} ${p.dose}`
export const shortName = (p) => p.dose

// Informations d'utilisation et de conservation, d'après les notices fournies
export const productInfo = {
  mounjaro: {
    usage: [
      'Une injection sous-cutanée par semaine, le même jour chaque semaine, avec ou sans repas.',
      'Injectez sous la peau de l’abdomen (à au moins 5 cm du nombril), de la cuisse ou du haut du bras. Changez de site chaque semaine.',
      'Schéma habituel : 2,5 mg par semaine, puis 5 mg après 4 semaines, puis paliers de 2,5 mg tous les 4 semaines minimum selon l’avis médical.',
      'Dose oubliée : injectez dès que possible si l’oubli date de 4 jours ou moins, sinon sautez-la. Ne doublez jamais une dose.'
    ],
    storage: [
      'Au réfrigérateur (2 °C à 8 °C). Ne pas congeler.',
      'Après la première utilisation : 30 jours au total hors du réfrigérateur, sous 30 °C, puis le stylo doit être jeté.',
      'Les aiguilles ne sont pas incluses (par exemple Accu-Fine 32G 4 mm).'
    ],
    contra: [
      'Allergie au tirzépatide ou à l’un des autres composants.',
      'Diabète de type 1.',
      'Grossesse et allaitement.'
    ],
    effects: [
      'Nausées, vomissements, diarrhée, constipation.',
      'Diminution de l’appétit, maux de ventre, maux de tête.',
      'Irritation au site d’injection.'
    ],
    precautions: [
      'Informez votre médecin de tous vos médicaments, surtout ceux contre le diabète.',
      'Prudence en cas de sédation profonde ou d’anesthésie générale.',
      'En cas de vomissements ou diarrhées sévères, buvez suffisamment et prévenez votre médecin.',
      'Avec d’autres médicaments hypoglycémiants, la glycémie peut devenir trop basse : apprenez à reconnaître l’hypoglycémie.'
    ]
  }
}

export const faqs = [
  {
    q: 'À quelle fréquence s’utilise Mounjaro ?',
    a: 'Une injection sous-cutanée par semaine, le même jour chaque semaine, à n’importe quel moment de la journée, avec ou sans repas. Chaque stylo contient 4 doses.'
  },
  {
    q: 'Où et comment s’injecte-t-il ?',
    a: 'Sous la peau de l’abdomen (à au moins 5 cm du nombril), de la cuisse ou du haut du bras. Changez de site d’injection chaque semaine. Regardez la vidéo de démonstration de la page d’accueil, lisez le manuel d’utilisation du stylo ou demandez conseil à un pharmacien ou à votre médecin.'
  },
  {
    q: 'Par quelle dose commencer ?',
    a: 'Le schéma habituel démarre à 2,5 mg par semaine, puis passe à 5 mg après 4 semaines. Si nécessaire, la dose augmente par paliers de 2,5 mg, au minimum toutes les 4 semaines. Votre médecin définit le dosage qui vous convient.'
  },
  {
    q: 'Que faire si j’ai oublié une injection ?',
    a: 'Si l’oubli date de 4 jours ou moins, injectez dès que vous y pensez puis reprenez votre jour habituel. Au-delà de 4 jours, sautez la dose. Ne doublez jamais une dose : il doit y avoir au moins 3 jours entre deux injections.'
  },
  {
    q: 'Comment conserver le stylo ?',
    a: 'Au réfrigérateur (2 °C à 8 °C), sans jamais le congeler. Après la première utilisation, le stylo peut rester hors du réfrigérateur sous 30 °C pendant 30 jours au total, puis il doit être jeté.'
  },
  {
    q: 'Quels sont les effets secondaires fréquents ?',
    a: 'Nausées, vomissements, diarrhée, constipation, baisse d’appétit, maux de ventre, maux de tête et irritation au site d’injection. En cas de vomissements ou diarrhées sévères, buvez suffisamment et prévenez votre médecin.'
  },
  {
    q: 'Qui ne doit pas utiliser Mounjaro ?',
    a: 'Les personnes allergiques au tirzépatide ou à l’un des composants, les personnes atteintes de diabète de type 1, ainsi que les femmes enceintes ou qui allaitent. Parlez-en à votre médecin avant de commencer.'
  },
  {
    q: 'Les aiguilles sont-elles fournies ?',
    a: 'Non. Un pharmacien peut vous conseiller les aiguilles compatibles, par exemple des aiguilles Accu-Fine 32G 4 mm.'
  }
]
