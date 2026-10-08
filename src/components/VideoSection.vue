<script setup>
import { Check, ShieldAlert } from '@lucide/vue'
import { asset } from '../config.js'

const points = [
  'Une injection par semaine, le même jour.',
  'Sous la peau de l’abdomen (à 5 cm au moins du nombril), de la cuisse ou du haut du bras.',
  'Changez de site d’injection chaque semaine.',
  'Lisez le manuel d’utilisation du stylo, ou demandez conseil à votre pharmacien.'
]
</script>

<template>
  <section id="injection" class="sec video">
    <div class="container wrap">
      <div class="copy">
        <span class="eyebrow">Démonstration en vidéo</span>
        <h2>Comment faire l’injection ?</h2>
        <p>Regardez la démonstration pas à pas avant votre première injection.</p>
        <ul>
          <li v-for="t in points" :key="t"><Check :size="18" />{{ t }}</li>
        </ul>
        <p class="warn"><ShieldAlert :size="18" /> Cette vidéo ne remplace ni la notice ni l’avis de votre médecin ou de votre pharmacien.</p>
      </div>

      <div class="player">
        <video
          controls
          playsinline
          preload="metadata"
          :poster="asset('video/injection-poster.jpg')"
          aria-label="Vidéo : comment faire l’injection"
        >
          <source :src="asset('video/injection.mp4')" type="video/mp4" />
          Votre navigateur ne peut pas lire cette vidéo.
        </video>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video { background: var(--ink); color: #fff; }
.wrap { display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; align-items: center; }
.eyebrow { background: rgba(255,255,255,.12); color: #d9ccff; }
h2 { font-size: clamp(26px, 3.6vw, 38px); font-weight: 800; letter-spacing: -.02em; line-height: 1.12; }
.copy > p { margin-top: 10px; color: #c9c5df; font-size: 16.5px; max-width: 46ch; }
ul { list-style: none; display: grid; gap: 10px; margin: 20px 0 18px; max-width: 52ch; }
li { display: flex; gap: 10px; align-items: flex-start; color: #e7e4f5; font-size: 15px; }
li svg { flex: none; margin-top: 3px; color: #5fd3d5; }
.warn { display: flex; gap: 10px; align-items: flex-start; margin-top: 0; font-size: 13.5px; color: #aaa5c6; max-width: 52ch; }
.warn svg { flex: none; margin-top: 2px; }
.player { justify-self: center; width: min(320px, 100%); border-radius: 22px; padding: 8px; background: #2a2545; box-shadow: 0 24px 50px -18px rgba(0,0,0,.6); }
video { display: block; width: 100%; aspect-ratio: 464 / 832; border-radius: 15px; background: #000; }
@media (max-width: 860px) {
  .wrap { grid-template-columns: 1fr; gap: 24px; }
  .player { order: 2; }
}
</style>
