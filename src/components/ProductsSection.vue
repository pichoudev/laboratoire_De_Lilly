<script setup>
import { ArrowRight, Check } from '@lucide/vue'
import { products, fullName, formatPrice } from '../data/products.js'
import { SITE } from '../config.js'
</script>

<template>
  <section id="gammes" class="sec">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Nos gammes</span>
        <h2>Un dosage pour chaque étape du traitement</h2>
        <p>Chaque stylo contient 4 doses hebdomadaires. Cliquez sur un produit pour voir tous ses détails.</p>
      </div>

      <div class="grid">
        <RouterLink
          v-for="p in products"
          :key="p.id"
          :to="{ name: 'product', params: { id: p.id } }"
          class="card"
          :style="{ '--c': p.color }"
        >
          <span v-if="p.tag" class="tag">{{ p.tag }}</span>
          <span class="img"><img :src="p.image" :alt="fullName(p)" loading="lazy" /></span>
          <span class="body">
            <span class="name">{{ p.cardName }}</span>
            <span v-if="p.price != null" class="price">{{ formatPrice(p.price) }} <small>{{ SITE.currency }} / {{ p.priceUnit }}</small></span>
            <span v-else class="price ask">Prix sur demande</span>
            <span class="line"><Check :size="14" /> {{ p.boxLine }}</span>
            <span v-if="p.loss" class="line"><Check :size="14" /><span>Perte estimée : <strong>{{ p.loss }}</strong></span></span>
            <span class="more">Voir les détails <ArrowRight :size="16" /></span>
          </span>
        </RouterLink>
      </div>

      <p class="note">
        * La perte de poids indiquée est une estimation indicative : les résultats varient selon chaque personne
        (alimentation, activité physique, suivi médical) et ne constituent pas une garantie.
      </p>
    </div>
  </section>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
.card { position: relative; text-align: left; border: 1.5px solid var(--line); border-radius: var(--radius); background: #fff; overflow: hidden; display: flex; flex-direction: column; transition: transform .2s, box-shadow .2s, border-color .2s; }
.card:hover { transform: translateY(-4px); border-color: var(--c); box-shadow: 0 18px 34px -16px color-mix(in srgb, var(--c) 55%, transparent); }
.tag { position: absolute; top: 10px; left: 10px; z-index: 2; background: var(--c); color: #fff; font-size: 11px; font-weight: 700; padding: 3px 9px; border-radius: 999px; }
.img { display: flex; align-items: center; justify-content: center; flex: none; height: 210px; padding: 14px; overflow: hidden; background: color-mix(in srgb, var(--c) 8%, #fff); }
.img img { height: 182px; width: auto; max-width: 100%; object-fit: contain; filter: drop-shadow(0 10px 12px rgba(30,20,70,.22)); transition: transform .25s; }
.card:hover .img img { transform: scale(1.05) rotate(-2deg); }
.body { padding: 14px 12px 16px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
.name { font-size: 16px; font-weight: 700; }
.price { font-size: 26px; font-weight: 800; letter-spacing: -.03em; color: var(--c); line-height: 1.1; }
.price small { font-size: 12px; font-weight: 500; color: var(--muted); letter-spacing: 0; }
.price.ask { font-size: 18px; line-height: 1.5; }
.line { display: flex; align-items: flex-start; gap: 6px; font-size: 13px; color: var(--muted); }
.line svg { flex: none; margin-top: 3px; color: var(--c); }
.line strong { color: var(--ink); white-space: nowrap; }
.more { margin-top: auto; padding-top: 10px; display: inline-flex; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 600; color: var(--c); }
.more svg { transition: transform .2s; }
.card:hover .more svg { transform: translateX(3px); }
.note { margin: 20px auto 0; text-align: center; font-size: 12.5px; color: var(--muted); max-width: 760px; }
@media (max-width: 1100px) { .grid { grid-template-columns: repeat(3, 1fr); gap: 14px; } }
@media (max-width: 720px) { .grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } .img { height: 180px; } .img img { height: 152px; } }
@media (max-width: 440px) { .grid { grid-template-columns: 1fr; } }
</style>
