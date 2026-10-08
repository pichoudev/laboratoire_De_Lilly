<script setup>
const steps = [
  { n: '1', t: 'Choisissez votre dosage', d: 'Parcourez les gammes de 2,5 à 15 mg. En cas de doute, demandez conseil à votre médecin.' },
  { n: '2', t: 'Ouvrez la fiche produit', d: 'Cliquez sur un stylo pour voir ses détails, puis sur « Commander sur WhatsApp ».' },
  { n: '3', t: 'Confirmez votre commande', d: 'Nous confirmons la disponibilité, le tarif et les modalités de livraison avec vous.' },
  { n: '4', t: 'Injectez chaque semaine', d: 'Une injection sous la peau, le même jour de la semaine, selon les indications de votre médecin.' }
]
</script>

<template>
  <section id="commander" class="sec">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Comment commander</span>
        <h2>En 4 étapes simples</h2>
      </div>
      <ol class="steps">
        <li v-for="s in steps" :key="s.n">
          <span class="n">{{ s.n }}</span>
          <h3>{{ s.t }}</h3>
          <p>{{ s.d }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.steps { list-style: none; display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
li { padding: 20px; border-radius: var(--radius); border: 1.5px solid var(--line); }
.n { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; background: var(--ink); color: #fff; font-weight: 700; font-size: 14px; margin-bottom: 12px; }
h3 { font-size: 16.5px; margin-bottom: 6px; }
p { color: var(--muted); font-size: 14px; }
@media (max-width: 960px) { .steps { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 540px) { .steps { grid-template-columns: 1fr; } }
</style>
