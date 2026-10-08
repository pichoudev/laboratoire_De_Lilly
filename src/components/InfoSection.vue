<script setup>
import { Syringe, Ban, TriangleAlert } from '@lucide/vue'
</script>

<template>
  <section id="infos" class="sec soft">
    <div class="container wrap">
      <div class="col">
        <span class="eyebrow">À savoir avant utilisation</span>
        <h2>Informations importantes</h2>
        <p>
          Mounjaro (tirzépatide) est un médicament soumis à prescription médicale. Il s’utilise avec une
          alimentation équilibrée et une activité physique, sous la supervision d’un professionnel de santé.
        </p>
      </div>
      <div class="boxes">
        <div class="box">
          <div class="ico"><Syringe :size="20" /></div>
          <div>
            <h3>Schéma habituel</h3>
            <p>Départ à 2,5 mg par semaine, 5 mg après 4 semaines, puis paliers de 2,5 mg tous les 4 semaines minimum selon l’avis médical. Dose maximale : 15 mg.</p>
          </div>
        </div>
        <div class="box">
          <div class="ico"><Ban :size="20" /></div>
          <div>
            <h3>Contre-indications</h3>
            <p>Allergie au tirzépatide ou à un composant, diabète de type 1, grossesse et allaitement.</p>
          </div>
        </div>
        <div class="box">
          <div class="ico"><TriangleAlert :size="20" /></div>
          <div>
            <h3>Précautions</h3>
            <p>Prévenez votre médecin en cas de vomissements ou diarrhées sévères, d’autres traitements contre le diabète, ou avant une anesthésie.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.soft { background: var(--soft); }
.wrap { display: grid; grid-template-columns: 1fr 1.4fr; gap: 32px; align-items: start; }
h2 { font-size: clamp(26px, 3.4vw, 34px); font-weight: 800; letter-spacing: -.02em; line-height: 1.15; }
.col p { color: var(--muted); margin-top: 10px; font-size: 15.5px; }
.boxes { display: grid; gap: 10px; }
.box { display: flex; gap: 14px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius); padding: 16px 18px; }
.ico { flex: none; width: 38px; height: 38px; display: grid; place-items: center; border-radius: 11px; background: #efe9fb; color: var(--violet); }
.box h3 { font-size: 15.5px; margin-bottom: 3px; }
.box p { color: var(--muted); font-size: 14px; }
@media (max-width: 860px) { .wrap { grid-template-columns: 1fr; gap: 20px; } }
</style>
