<script setup>
import { ref } from 'vue'
import { Menu, X } from '@lucide/vue'
import { SITE, asset } from '../config.js'

const open = ref(false)
const links = [
  { label: 'Gammes', hash: '#gammes' },
  { label: 'Pourquoi nous', hash: '#pourquoi' },
  { label: 'Comment commander', hash: '#commander' },
  { label: 'Injection', hash: '#injection' },
  { label: 'Infos médicales', hash: '#infos' },
  { label: 'FAQ', hash: '#faq' }
]
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <RouterLink :to="{ name: 'home' }" class="brand" @click="open = false">
        <img :src="asset('logo.png')" alt="Lilly" width="50" height="28" class="logo" />{{ SITE.brand }}
      </RouterLink>
      <nav class="links" :class="{ open }" aria-label="Navigation principale">
        <RouterLink v-for="l in links" :key="l.hash" :to="{ name: 'home', hash: l.hash }" @click="open = false">{{ l.label }}</RouterLink>
      </nav>
      <RouterLink :to="{ name: 'home', hash: '#contact' }" class="btn btn-primary cta">Nous contacter</RouterLink>
      <button class="burger" :aria-label="open ? 'Fermer le menu' : 'Ouvrir le menu'" :aria-expanded="open" @click="open = !open">
        <X v-if="open" :size="24" /><Menu v-else :size="24" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav { position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,.9); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); }
.nav-inner { display: flex; align-items: center; justify-content: space-between; height: var(--nav-h); gap: 20px; }
.brand { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 18px; letter-spacing: -.02em; white-space: nowrap; }
.logo { width: auto; height: 28px; }
.links { display: flex; gap: 22px; font-size: 14.5px; font-weight: 500; color: var(--muted); }
.links a { white-space: nowrap; }
.links a:hover { color: var(--ink); }
.cta { padding: 9px 18px; font-size: 14px; white-space: nowrap; }
.burger { display: none; width: 40px; height: 40px; align-items: center; justify-content: center; }
@media (max-width: 1040px) {
  .burger { display: flex; }
  .cta { display: none; }
  .links { display: none; position: absolute; top: var(--nav-h); left: 0; right: 0; background: #fff; flex-direction: column; padding: 16px 20px; gap: 14px; border-bottom: 1px solid var(--line); font-size: 16px; }
  .links.open { display: flex; }
}
</style>
