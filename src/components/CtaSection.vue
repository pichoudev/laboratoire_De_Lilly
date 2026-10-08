<script setup>
import { MessageCircle } from '@lucide/vue'
import { whatsappLink } from '../config.js'
const msg = 'Bonjour, j’ai une question sur Mounjaro KwikPen.'
</script>

<template>
  <section id="contact" class="sec cta-wrap">
    <div class="container">
      <div class="cta">
        <div>
          <h2>Une question avant de commander ?</h2>
          <p>Écrivez-nous sur WhatsApp : nous vous répondons avec les disponibilités et les modalités de livraison.</p>
        </div>
        <a :href="whatsappLink(msg)" target="_blank" rel="noopener" class="btn btn-light"><MessageCircle :size="18" /> Nous écrire sur WhatsApp</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-wrap { padding-top: 0; }
.cta { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; padding: 36px 40px; border-radius: 24px; color: #fff; background: linear-gradient(135deg, var(--violet-dark), var(--violet) 55%, var(--teal)); }
h2 { font-size: clamp(24px, 3.2vw, 32px); font-weight: 800; letter-spacing: -.02em; }
p { margin-top: 8px; opacity: .9; max-width: 520px; }
@media (max-width: 640px) { .cta { padding: 26px 22px; } }
</style>
