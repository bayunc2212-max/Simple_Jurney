<template>
  <section data-v-2d80f7e5 class="products-section">
    <div data-v-2d80f7e5 class="header">
      <div data-v-2d80f7e5 class="overlay"></div>
      <div data-v-2d80f7e5 class="title-width">
        <Statement
          data-v-2d80f7e5
          brand="OUR SOLUTIONS"
          statement="Delivering scalable digital solutions that support operational excellence"
        />
      </div>
      <div data-v-2d80f7e5 class="info-width">
        <p data-v-2d80f7e5 v-fade-viewport class="delay-1000">
          Our products are developed to help organizations streamline processes, enhance efficiency, and adopt modern
          digital capabilities.
        </p>
      </div>
    </div>
    <div
      data-v-2d80f7e5
      v-fade-viewport
      class="cards delay-1500"
      :class="{ 'cards-expanded': expanded }"
    >
      <a
        data-v-2d80f7e5
        v-for="product in visibleProducts"
        :key="product.name"
        :href="`/products/${product.name}`"
        class="card-link"
      >
        <ProductCard data-v-2d80f7e5 :badge="product.badge" :image="product.image" :title="product.title" />
      </a>
    </div>
    <p v-if="showMore" data-v-2d80f7e5 v-fade-viewport class="delay-700 view-more" @click="expanded = !expanded">
      {{ expanded ? 'View Less' : 'View More' }} {{ expanded ? '←' : '→' }}
    </p>
  </section>
</template>

<script>
import ProductCard from './ProductCard.vue'
import Statement from './Statement.vue'

export default {
  name: 'ProductsSection',
  components: {
    ProductCard,
    Statement
  },
  data() {
    return {
      expanded: false
    }
  },
  computed: {
    visibleProducts() {
      return this.expanded ? this.products : this.products.slice(0, 2)
    }
  },
  props: {
    subtitle: String,
    heading: String,
    description: String,
    products: {
      type: Array
    },
    showMore: {
      type: Boolean,
      default: true
    }
  }
}
</script>