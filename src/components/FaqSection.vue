<script setup>
import { ref } from 'vue'
import { Plus, Minus } from '@lucide/vue'
import { faqs } from '../data/products.js'
const active = ref(0)
</script>

<template>
  <section id="faq" class="sec">
    <div class="container wrap">
      <div class="left">
        <span class="eyebrow">FAQ</span>
        <h2>Vos questions, nos réponses</h2>
        <p>Les réponses s’appuient sur les notices des produits. En cas de doute, demandez toujours l’avis de votre médecin ou de votre pharmacien.</p>
      </div>
      <div class="list">
        <div v-for="(f, i) in faqs" :key="f.q" class="item" :class="{ on: active === i }">
          <button class="q" :aria-expanded="active === i" @click="active = active === i ? -1 : i">
            <span>{{ f.q }}</span>
            <Minus v-if="active === i" :size="20" class="plus" /><Plus v-else :size="20" class="plus" />
          </button>
          <div v-show="active === i" class="a">{{ f.a }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wrap { display: grid; grid-template-columns: 1fr 1.5fr; gap: 36px; align-items: start; }
h2 { font-size: clamp(26px, 3.4vw, 34px); font-weight: 800; letter-spacing: -.02em; line-height: 1.15; }
.left p { color: var(--muted); margin-top: 10px; font-size: 15.5px; }
.list { display: grid; gap: 8px; }
.item { border: 1.5px solid var(--line); border-radius: 14px; background: #fff; transition: border-color .2s; }
.item.on { border-color: var(--violet); }
.q { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 14px 18px; text-align: left; font-weight: 600; font-size: 15px; }
.plus { flex: none; color: var(--violet); }
.a { padding: 0 18px 16px; color: var(--muted); font-size: 14.5px; }
@media (max-width: 860px) { .wrap { grid-template-columns: 1fr; gap: 20px; } }
</style>
