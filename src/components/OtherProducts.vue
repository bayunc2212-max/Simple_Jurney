<template>
  <section data-v-a5a6ba22="" class="products-section">
    <div data-v-a5a6ba22="" class="header">
      <div data-v-a5a6ba22="" class="left">
        <h1 data-v-a5a6ba22="">Other Products</h1>
      </div>
      <div data-v-a5a6ba22="" class="right">
        <p data-v-a5a6ba22="" class="view-more" @click="expanded = !expanded">{{ expanded ? 'View Less ↑' : 'View More →' }}</p>
      </div>
    </div>
    <div data-v-a5a6ba22="" class="cards"><a v-for="p in visibleProducts" :key="p.href" data-v-a5a6ba22=""
        :href="p.href" class="card-link">
        <div data-v-4f4b14b5="" data-v-a5a6ba22="" class="product-card">
          <div data-v-4f4b14b5="" class="image-wrapper"><span data-v-4f4b14b5="" class="badge">{{ p.badge }}</span><img
              data-v-4f4b14b5="" :src="p.img" :alt="p.title" style="border-radius: 12px;"></div>
          <h3 data-v-4f4b14b5="" class="title">{{ p.title }}</h3>
        </div>
      </a></div>
  </section>
</template>

<script>
import { useProductStore } from '../stores/products'

export default {
  name: 'OtherProducts',
  created() {
    this.productStore = useProductStore()
  },
  data() {
    return {
      expanded: false
    }
  },
  computed: {
    products() {
      return this.productStore.products.map((p) => ({
        href: `/products/${p.name}`,
        title: p.title,
        badge: p.badge,
        img: p.image
      }))
    },
    visibleProducts() {
      const current = '/products/' + this.$route.params.name
      const others = this.products.filter(p => p.href !== current)
      return this.expanded ? others : others.slice(0, 2)
    }
  }
}
</script>