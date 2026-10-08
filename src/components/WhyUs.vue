<script setup>
import { MessagesSquare, Package, Snowflake, Lock } from '@lucide/vue'

const items = [
  { icon: MessagesSquare, t: 'Conseil personnalisé', d: 'Une question sur le dosage ou l’utilisation ? Nous vous répondons simplement, par message.' },
  { icon: Package, t: 'Produit d’origine', d: 'Stylos KwikPen en emballage d’origine, avec notice officielle.' },
  { icon: Snowflake, t: 'Conservation respectée', d: 'Nous rappelons les règles de conservation (2 à 8 °C) pour préserver le produit.' },
  { icon: Lock, t: 'Échanges confidentiels', d: 'Vos informations restent privées et ne sont jamais partagées.' }
]
</script>

<template>
  <section id="pourquoi" class="sec soft">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Pourquoi nous</span>
        <h2>Un service clair, de la question à la commande</h2>
      </div>
      <div class="grid">
        <div v-for="x in items" :key="x.t" class="item">
          <div class="ico"><component :is="x.icon" :size="22" /></div>
          <h3>{{ x.t }}</h3>
          <p>{{ x.d }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.soft { background: var(--soft); }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.item { background: #fff; border-radius: var(--radius); padding: 20px; border: 1px solid var(--line); }
.ico { width: 42px; height: 42px; display: grid; place-items: center; background: #efe9fb; color: var(--violet); border-radius: 12px; margin-bottom: 12px; }
h3 { font-size: 16.5px; margin-bottom: 6px; }
p { color: var(--muted); font-size: 14px; }
@media (max-width: 960px) { .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px) { .grid { grid-template-columns: 1fr; } }
</style>
