import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProductPage from './views/ProductPage.vue'
import { products, fullName } from './data/products.js'
import { SITE } from './config.js'

// Mode « hash » : fonctionne sur n'importe quel hébergement statique, sans configuration serveur.
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/produit/:id', name: 'product', component: ProductPage, props: true },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 68, behavior: 'smooth' }
    return { top: 0, behavior: 'instant' }
  }
})

router.afterEach((to) => {
  const p = products.find((x) => x.id === to.params.id)
  document.title = p
    ? `${fullName(p)} – ${SITE.brand}`
    : `Mounjaro KwikPen, de 2,5 à 15 mg – ${SITE.brand}`
})

export default router
