<script setup>
import { Pill, Syringe, CalendarDays, Stethoscope } from '@lucide/vue'
</script>

<template>
  <div class="trust">
    <div class="container row">
      <span><Pill :size="17" /> Principe actif : <strong>tirzépatide</strong></span>
      <span><Syringe :size="17" /> Stylo prérempli · 4 doses</span>
      <span><CalendarDays :size="17" /> Injection hebdomadaire</span>
      <span><Stethoscope :size="17" /> Utilisation sous suivi médical</span>
    </div>
  </div>
</template>

<style scoped>
.trust { border-block: 1px solid var(--line); background: var(--soft); }
.row { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px 24px; padding: 12px 0; font-size: 13.5px; color: var(--muted); }
.row span { display: inline-flex; align-items: center; gap: 8px; }
.row svg { color: var(--violet); }
.row strong { color: var(--ink); }
@media (max-width: 720px) { .row { justify-content: center; } }
</style>
