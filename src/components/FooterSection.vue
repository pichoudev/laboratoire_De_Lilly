<script setup>
import { MessageCircle, Mail } from '@lucide/vue'
import { SITE, whatsappLink, asset } from '../config.js'
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="container top">
      <div class="about">
        <div class="brand"><img :src="asset('logo.png')" alt="Lilly" width="50" height="28" class="logo" />{{ SITE.brand }}</div>
        <p>Présentation de la gamme Mounjaro KwikPen (tirzépatide).</p>
      </div>
      <div>
        <h4>Liens</h4>
        <RouterLink :to="{ name: 'home', hash: '#gammes' }">Gammes</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#commander' }">Comment commander</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#injection' }">Comment faire l’injection</RouterLink>
        <RouterLink :to="{ name: 'home', hash: '#faq' }">FAQ</RouterLink>
      </div>
      <div>
        <h4>Contact</h4>
        <a :href="whatsappLink('Bonjour')" target="_blank" rel="noopener"><MessageCircle :size="15" /> WhatsApp</a>
        <a :href="`mailto:${SITE.email}`"><Mail :size="15" /> {{ SITE.email }}</a>
      </div>
    </div>
    <div class="container legal">
      <p>
        Mounjaro est un médicament soumis à prescription médicale. Ne l’utilisez pas de manière prolongée sans avis médical
        et tenez-le hors de portée des enfants. Les informations de ce site sont générales : lisez la notice et demandez conseil
        à votre médecin ou pharmacien. En cas d’effets secondaires, contactez votre médecin.
        Mounjaro et KwikPen sont des marques de leurs détenteurs respectifs ; ce site n’est pas affilié au fabricant.
      </p>
      <p class="copy">© {{ year }} {{ SITE.brand }}. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
footer { background: var(--soft); border-top: 1px solid var(--line); padding: 32px 0 20px; }
.top { display: grid; grid-template-columns: 1.6fr 1fr 1fr; gap: 24px; }
.brand { display: flex; align-items: center; gap: 9px; font-weight: 800; font-size: 19px; margin-bottom: 6px; }
.logo { width: auto; height: 28px; }
.about p { color: var(--muted); font-size: 14px; max-width: 320px; }
h4 { font-size: 12.5px; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 8px; }
a { display: flex; align-items: center; gap: 8px; color: var(--muted); font-size: 14px; margin-bottom: 6px; }
a:hover { color: var(--ink); }
.legal { margin-top: 22px; padding-top: 16px; border-top: 1px solid var(--line); font-size: 12px; color: var(--muted); }
.copy { margin-top: 8px; }
@media (max-width: 720px) { .top { grid-template-columns: 1fr; gap: 16px; } }
</style>
