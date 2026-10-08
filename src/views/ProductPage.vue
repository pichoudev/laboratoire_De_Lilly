<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  ArrowLeft, ChevronDown, Check, MessageCircle, Info,
  Syringe, Snowflake, Ban, TriangleAlert, ShieldAlert
} from '@lucide/vue'
import { products, productInfo, fullName, shortName, LOSS_SCALE } from '../data/products.js'
import { SITE, whatsappLink } from '../config.js'

const props = defineProps({ id: { type: String, required: true } })
const router = useRouter()

const product = computed(() => products.find((p) => p.id === props.id))
watch(product, (p) => { if (!p) router.replace('/') }, { immediate: true })

const sections = computed(() => {
  const p = product.value
  if (!p) return []
  const info = productInfo[p.line]
  return [
    { key: 'usage', title: 'Utilisation', icon: Syringe, items: info.usage },
    { key: 'storage', title: 'Conservation', icon: Snowflake, items: info.storage },
    { key: 'contra', title: 'Contre-indications', icon: Ban, items: info.contra },
    { key: 'effects', title: 'Effets secondaires fréquents', icon: TriangleAlert, items: info.effects },
    { key: 'precautions', title: 'Précautions', icon: ShieldAlert, items: info.precautions }
  ]
})
const open = ref('usage')
const toggle = (k) => { open.value = open.value === k ? '' : k }

const hasPrice = (p) => p.price != null
const priceLabel = (p) => (hasPrice(p) ? `${p.price} ${SITE.currency}` : 'Prix sur demande')

const order = computed(() => {
  const p = product.value
  return whatsappLink(
    hasPrice(p)
      ? `Bonjour, je souhaite commander ${fullName(p)} (${p.price} ${SITE.currency}).`
      : `Bonjour, je souhaite connaître le prix et commander ${fullName(p)}.`
  )
})
const pct = (n) => (n / LOSS_SCALE) * 100
</script>

<template>
  <div v-if="product" class="page" :style="{ '--c': product.color }">
    <div class="container">
      <nav class="crumbs" aria-label="Fil d’Ariane">
        <RouterLink :to="{ name: 'home', hash: '#gammes' }" class="back"><ArrowLeft :size="16" /> Tous les dosages</RouterLink>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{{ shortName(product) }}</span>
      </nav>

      <div class="layout">
        <div class="gallery">
          <span class="mark" aria-hidden="true">{{ product.num }}</span>
          <img :src="product.image" :alt="`Boîte ${fullName(product)}`" />
        </div>

        <div class="info">
          <h1>{{ product.brand }} {{ product.dose.replace(' ', ' ') }}</h1>
          <p class="sub">{{ product.subtitle }}</p>

          <div class="switch" role="group" aria-label="Choisir un autre dosage">
            <RouterLink
              v-for="p in products"
              :key="p.id"
              :to="{ name: 'product', params: { id: p.id } }"
              class="chip"
              :class="{ on: p.id === product.id }"
              :style="{ '--c': p.color }"
              :aria-current="p.id === product.id ? 'page' : undefined"
            >{{ shortName(p) }}</RouterLink>
          </div>

          <div class="price-row">
            <span class="price" :class="{ ask: !hasPrice(product) }">{{ priceLabel(product) }}</span>
            <span class="per">{{ hasPrice(product) ? product.perUnit : 'Contactez-nous pour connaître le tarif.' }}</span>
          </div>

          <div v-if="product.loss" class="loss">
            <div class="loss-top">
              <span>Perte de poids estimée</span>
              <strong>{{ product.loss }}</strong>
            </div>
            <div class="bar" aria-hidden="true">
              <i :style="{ '--a': pct(product.lossMin), '--b': pct(product.lossMax) }"></i>
            </div>
            <div class="scale" aria-hidden="true"><span>0 kg</span><span>{{ LOSS_SCALE }} kg</span></div>
            <p class="fine">Estimation indicative : les résultats varient selon chaque personne et ne sont pas garantis.</p>
          </div>
          <div v-else class="loss">
            <div class="loss-top">
              <span>Perte de poids estimée</span>
              <strong>Non communiquée</strong>
            </div>
            <p class="fine">Aucune estimation n’est indiquée pour ce produit. Les résultats varient selon chaque personne.</p>
          </div>

          <dl class="specs">
            <div v-for="[label, value] in product.specs" :key="label"><dt>{{ label }}</dt><dd>{{ value }}</dd></div>
          </dl>

          <div class="buy">
            <a :href="order" target="_blank" rel="noopener" class="btn btn-wa btn-lg">
              <MessageCircle :size="20" /> {{ hasPrice(product) ? 'Commander sur WhatsApp' : 'Demander le prix sur WhatsApp' }}
            </a>
            <p class="note"><Info :size="15" /> Nous confirmons la disponibilité, le tarif et la livraison par message. Médicament soumis à prescription médicale.</p>
          </div>

          <div class="acc">
            <div v-for="s in sections" :key="s.key" class="acc-item">
              <button class="acc-btn" :aria-expanded="open === s.key" @click="toggle(s.key)">
                <component :is="s.icon" :size="19" class="acc-ico" />
                <span>{{ s.title }}</span>
                <ChevronDown :size="18" class="chev" :class="{ up: open === s.key }" />
              </button>
              <ul v-show="open === s.key" class="acc-body">
                <li v-for="t in s.items" :key="t"><Check :size="15" />{{ t }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section class="compare" aria-labelledby="cmp">
        <h2 id="cmp">Comparer les produits</h2>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>Produit</th><th>Contenu</th><th>Perte estimée</th><th>Prix</th><th><span class="sr">Voir</span></th></tr>
            </thead>
            <tbody>
              <tr v-for="p in products" :key="p.id" :class="{ cur: p.id === product.id }" :style="{ '--c': p.color }">
                <td><span class="dot"></span><strong>{{ p.line === 'mounjaro' ? p.dose : fullName(p) }}</strong></td>
                <td>{{ p.tableContent }}</td>
                <td>{{ p.loss || 'Non communiquée' }}</td>
                <td><strong>{{ priceLabel(p) }}</strong></td>
                <td class="r">
                  <span v-if="p.id === product.id" class="here">Affiché</span>
                  <RouterLink v-else :to="{ name: 'product', params: { id: p.id } }" class="see">Voir la fiche</RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="fine">Mounjaro, KwikPen et Zepbound sont des marques de leurs détenteurs respectifs. Lisez la notice et demandez conseil à votre médecin ou pharmacien.</p>
      </section>
    </div>

    <div class="bar-mobile">
      <div><strong>{{ priceLabel(product) }}</strong><span>{{ fullName(product) }}</span></div>
      <a :href="order" target="_blank" rel="noopener" class="btn btn-wa"><MessageCircle :size="18" /> {{ hasPrice(product) ? 'Commander' : 'Prix' }}</a>
    </div>
  </div>
</template>

<style scoped>
.page { padding: 16px 0 36px; }
.crumbs { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--ink-2); margin-bottom: 14px; }
.back { display: inline-flex; align-items: center; gap: 6px; font-weight: 600; color: var(--ink); }
.back:hover { color: var(--brand); }

.layout { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); gap: 32px; align-items: start; }

.gallery { position: sticky; top: calc(var(--nav-h) + 16px); height: 540px; border-radius: var(--r-lg); background: var(--c); overflow: hidden; display: flex; align-items: flex-end; justify-content: center; }
.mark { position: absolute; left: 22px; top: 6px; font-size: 210px; font-weight: 800; letter-spacing: -0.06em; line-height: 1; color: #fff; opacity: .15; white-space: nowrap; user-select: none; }
.gallery img { position: relative; height: 460px; width: auto; max-width: 88%; object-fit: contain; margin-bottom: 26px; filter: drop-shadow(0 22px 26px rgba(0,0,0,.32)); }

h1 { font-size: clamp(28px, 3.4vw, 40px); font-weight: 800; letter-spacing: -0.03em; }
.sub { color: var(--ink-2); margin-top: 6px; }

.switch { display: flex; flex-wrap: wrap; gap: 6px; margin: 16px 0 4px; }
.chip { padding: 7px 13px; border-radius: var(--r-sm); border: 1.5px solid var(--line); background: #fff; font-weight: 650; font-size: 14px; transition: border-color .15s, background .15s, color .15s; }
.chip:hover { border-color: var(--c); }
.chip.on { background: var(--c); border-color: var(--c); color: #fff; }

.price-row { display: flex; align-items: baseline; flex-wrap: wrap; gap: 4px 12px; margin: 14px 0 12px; }
.price { font-size: 46px; font-weight: 800; letter-spacing: -0.04em; line-height: 1; }
.price.ask { font-size: 30px; letter-spacing: -0.02em; }
.per { font-size: 14px; color: var(--ink-2); }

.loss { background: var(--mist); border-radius: var(--r-md); padding: 12px 14px; }
.loss-top { display: flex; justify-content: space-between; gap: 12px; font-size: 14px; color: var(--ink-2); }
.loss-top strong { color: var(--ink); font-size: 16px; }
.bar { position: relative; height: 8px; background: #fff; border-radius: 4px; margin-top: 8px; }
.bar i { position: absolute; top: 0; bottom: 0; border-radius: 4px; background: var(--c); left: calc(var(--a) * 1%); width: calc((var(--b) - var(--a)) * 1%); }
.scale { display: flex; justify-content: space-between; font-size: 12px; color: var(--ink-3); margin-top: 4px; }
.fine { font-size: 12.5px; color: var(--ink-3); margin-top: 6px; }

.specs { display: grid; grid-template-columns: 1fr 1fr; gap: 0 24px; margin: 14px 0; }
.specs div { display: flex; justify-content: space-between; gap: 12px; padding: 8px 0; border-bottom: 1px solid var(--line); font-size: 14.5px; }
.specs dt { color: var(--ink-2); }
.specs dd { font-weight: 650; text-align: right; }

.buy { margin: 4px 0 18px; }
.btn-lg { width: 100%; padding: 14px 20px; font-size: 16.5px; }
.note { display: flex; gap: 8px; align-items: flex-start; font-size: 13px; color: var(--ink-2); margin-top: 8px; }
.note svg { flex: none; margin-top: 2px; }

.acc { border-top: 1px solid var(--line); }
.acc-item { border-bottom: 1px solid var(--line); }
.acc-btn { width: 100%; display: flex; align-items: center; gap: 10px; padding: 13px 2px; text-align: left; font-weight: 650; font-size: 15.5px; }
.acc-btn span { flex: 1; }
.acc-ico { color: var(--c); }
.chev { color: var(--ink-3); transition: transform .2s; }
.chev.up { transform: rotate(180deg); }
.acc-body { list-style: none; display: grid; gap: 7px; padding: 0 2px 14px 29px; font-size: 14.5px; color: var(--ink-2); }
.acc-body li { display: flex; gap: 8px; }
.acc-body svg { flex: none; margin-top: 4px; color: var(--c); }

.compare { margin-top: 36px; }
.compare h2 { font-size: clamp(22px, 2.6vw, 28px); margin-bottom: 12px; }
.table-wrap { position: relative; overflow-x: auto; border: 1px solid var(--line); border-radius: var(--r-md); }
table { width: 100%; border-collapse: collapse; font-size: 14.5px; min-width: 620px; }
th { text-align: left; font-weight: 600; font-size: 13px; color: var(--ink-3); padding: 10px 14px; background: var(--mist); }
td { padding: 11px 14px; border-top: 1px solid var(--line); }
td.r { text-align: right; }
.dot { display: inline-block; width: 10px; height: 10px; border-radius: 3px; background: var(--c); margin-right: 8px; }
tr.cur td { background: color-mix(in srgb, var(--c) 8%, #fff); }
.here { font-size: 13px; color: var(--ink-3); }
.see { font-weight: 650; color: var(--c); }
.see:hover { text-decoration: underline; }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); }

.bar-mobile { display: none; }

@media (max-width: 900px) {
  .page { padding-bottom: 84px; }
  .layout { grid-template-columns: 1fr; gap: 18px; }
  .gallery { position: relative; top: 0; height: 330px; }
  .mark { font-size: 150px; }
  .gallery img { height: 290px; margin-bottom: 18px; }
  .specs { grid-template-columns: 1fr; }
  .switch { gap: 5px; }
  .chip { padding: 7px 9px; font-size: 13.5px; }
  .bar-mobile { display: flex; align-items: center; justify-content: space-between; gap: 12px; position: fixed; left: 0; right: 0; bottom: 0; z-index: 40; padding: 10px 16px; background: rgba(255,255,255,.96); backdrop-filter: blur(8px); border-top: 1px solid var(--line); }
  .bar-mobile div { display: flex; flex-direction: column; line-height: 1.2; }
  .bar-mobile strong { font-size: 20px; letter-spacing: -0.02em; }
  .bar-mobile span { font-size: 12.5px; color: var(--ink-2); }
}
</style>
