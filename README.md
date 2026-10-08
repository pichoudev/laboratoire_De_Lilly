# Les laboratoires Lilly

Site vitrine présentant la gamme Mounjaro KwikPen et Zepbound (tirzépatide) - médicaments soumis à prescription médicale pour la gestion du poids.

## 🌐 Aperçu

Ce site est une application Vue.js moderne qui présente :
- La gamme complète Mounjaro KwikPen (5, 7,5, 10, 12,5 et 15 mg)
- Zepbound 2,5 mg
- Informations médicales détaillées
- Guide d'injection
- FAQ complète
- Formulaire de contact

## 🚀 Technologies

- **Vue 3** - Framework JavaScript progressif
- **Vue Router** - Routage client
- **Vite** - Build tool ultra-rapide
- **Lucide Vue** - Icônes modernes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

Le serveur de démarrera sur `http://localhost:5173/`

## 📁 Structure du projet

```
mounjaro-site/
├── public/
│   └── img/              # Images des produits et logo
├── src/
│   ├── components/       # Composants Vue
│   │   ├── NavBar.vue
│   │   ├── HeroSection.vue
│   │   ├── ProductsSection.vue
│   │   ├── VideoSection.vue
│   │   ├── WhyUs.vue
│   │   ├── HowItWorks.vue
│   │   ├── InfoSection.vue
│   │   ├── FaqSection.vue
│   │   ├── CtaSection.vue
│   │   └── FooterSection.vue
│   ├── views/            # Pages
│   │   ├── HomePage.vue
│   │   └── ProductPage.vue
│   ├── data/             # Données des produits
│   │   └── products.js
│   ├── config.js         # Configuration du site
│   ├── router.js         # Configuration du routeur
│   ├── main.js           # Point d'entrée
│   └── App.vue           # Composant racine
├── index.html
└── package.json
```

## ⚙️ Configuration

Le fichier `src/config.js` contient les paramètres personnalisables :

```javascript
export const SITE = {
  brand: 'Les laboratoires Lilly',  // Nom affiché
  whatsapp: '237600000000',       // Numéro WhatsApp
  email: 'contact@votre-domaine.com',
  currency: '$'
}
```

## 📝 Personnalisation

### Produits
Les produits sont définis dans `src/data/products.js`. Vous pouvez modifier :
- Les prix
- Les descriptions
- Les images
- Les spécifications techniques

### Contenu
Chaque section du site est un composant Vue indépendant dans `src/components/`.

## 🎨 Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation fluide avec Vue Router
- ✅ Section produits avec détails techniques
- ✅ FAQ interactive
- ✅ Vidéo d'instruction
- ✅ Formulaire de contact WhatsApp
- ✅ Animations et transitions
- ✅ Accessibilité (ARIA labels)

## 📄 Licence

Ce projet est privé et confidentiel.

## ⚠️ Avertissement médical

Les produits présentés sur ce site sont des médicaments soumis à prescription médicale. Consultez toujours un professionnel de santé avant d'utiliser ces produits.

---

Développé avec Vue.js + Vite
