<script setup>
import { ArrowRight } from '@lucide/vue'
import { products } from '../data/products.js'

const img = (id) => products.find((p) => p.id === id)
</script>

<template>
  <section class="hero" id="top">
    <div class="container grid">
      <div class="copy">
        <span class="eyebrow">Gamme complète · 6 dosages disponibles</span>
        <h1>Mounjaro KwikPen,<br /><span class="grad">choisissez votre dosage.</span></h1>
        <p>
          Le stylo hebdomadaire à base de tirzépatide, en 6 dosages de 2,5 à 15 mg.
          Comparez les gammes, consultez les tarifs et les détails de chaque produit.
        </p>
        <div class="actions">
          <RouterLink :to="{ name: 'home', hash: '#gammes' }" class="btn btn-primary">Voir les gammes <ArrowRight :size="18" /></RouterLink>
          <RouterLink :to="{ name: 'home', hash: '#commander' }" class="btn btn-ghost">Comment commander</RouterLink>
        </div>
        <ul class="facts">
          <li><strong>1×</strong> par semaine</li>
          <li><strong>4</strong> doses par stylo</li>
          <li><strong>6</strong> dosages</li>
        </ul>
      </div>
      <div class="visual">
        <div class="blob"></div>
        <img :src="img('5').image" alt="Mounjaro KwikPen 5 mg" class="p p2" />
        <img :src="img('15').image" alt="Mounjaro KwikPen 15 mg" class="p p3" />
        <img :src="img('10').image" alt="Mounjaro KwikPen 10 mg" class="p p1" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero { padding: 36px 0 44px; background: radial-gradient(900px 420px at 85% -10%, #efe9fb, transparent 60%); }
.grid { display: grid; grid-template-columns: 1.05fr 1fr; gap: 32px; align-items: center; }
h1 { font-size: clamp(34px, 5vw, 56px); line-height: 1.05; letter-spacing: -.035em; font-weight: 800; }
.grad { background: linear-gradient(90deg, var(--violet), var(--teal)); -webkit-background-clip: text; background-clip: text; color: transparent; }
.copy p { margin: 16px 0 22px; font-size: 17px; color: var(--muted); max-width: 520px; }
.actions { display: flex; gap: 10px; flex-wrap: wrap; }
.facts { list-style: none; display: flex; gap: 32px; margin-top: 26px; color: var(--muted); font-size: 14px; }
.facts strong { display: block; font-size: 24px; color: var(--ink); font-weight: 800; line-height: 1.2; }
.visual { position: relative; height: 380px; }
.blob { position: absolute; inset: 20px 10px; border-radius: 36px; background: linear-gradient(145deg, #e9defa, #d9f1f1); }
.p { position: absolute; bottom: 36px; width: auto; filter: drop-shadow(0 18px 20px rgba(40,20,90,.28)); }
.p1 { left: 50%; transform: translateX(-50%); height: 88%; z-index: 3; }
.p2 { left: 12%; height: 66%; transform: rotate(-8deg); z-index: 2; }
.p3 { right: 12%; height: 66%; transform: rotate(8deg); z-index: 2; }
@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
  .visual { height: 320px; order: -1; }
  .facts { gap: 24px; }
}
</style>
