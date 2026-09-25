<template>
  <div>
    <Navbar />

    <section data-v-2c71e6e1="" class="hero">
      <div data-v-2c71e6e1="" class="top-gradient"></div>
      <div data-v-2c71e6e1="" class="overlay"></div>
      <div data-v-2c71e6e1="" style="position: absolute; z-index: 999; left: 7%; top: 15%;">
        <div data-v-13818925="" data-v-2c71e6e1="" class="bread-cumb">
          <a data-v-13818925="" href="/" style="color: inherit; text-underline-offset: 3px;">
            <p data-v-13818925="" class="primary">Home</p>
          </a>
          <img data-v-13818925="" src="/rectangle.png" alt="SJI Logo" height="10" />
          <a data-v-13818925="" href="/products" style="color: rgb(30, 136, 255); text-underline-offset: 3px;">
            <p data-v-13818925="" class="secondary">Products</p>
          </a>
        </div>
      </div>
      <div data-v-2c71e6e1="" class="hero-content">
        <div data-v-2c71e6e1="" class="left delay-300 animate__animated animate__fadeIn" >
          <h1 data-v-2c71e6e1="">Technology Products Built for Enterprise Needs</h1>
        </div>
        <div data-v-2c71e6e1="" class="right delay-700 animate__animated animate__fadeIn" >
          <p data-v-2c71e6e1=""> Our products are designed to address real operational challenges across industries, ensuring reliability, scalability, and seamless integration with existing systems. </p>
        </div>
      </div>
    </section>

    <section data-v-e2b51a45="" class="section">
      <div data-v-e2b51a45="" class="show product-style">
        <div data-v-e2b51a45="" class="container-search">
          <div data-v-e2b51a45="" class="search-wrapper">
            <input data-v-e2b51a45="" type="text" class="search-input" placeholder="Search products..." v-model="search" />
          </div>
          <div data-v-e2b51a45="" class="select-wrapper">
            <button data-v-e2b51a45="" class="select-trigger" @click="catOpen = !catOpen">
              <span data-v-e2b51a45="" class="label">{{ category }}</span>
              <svg data-v-e2b51a45="" class="icon" :class="{ open: catOpen }" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline data-v-e2b51a45="" points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <transition name="fade-slide">
              <ul v-show="catOpen" data-v-e2b51a45="" class="dropdown">
                <li v-for="c in categories" :key="c" :class="{ active: c === category }" @click="selectCategory(c)">{{ c }}</li>
              </ul>
            </transition>
          </div>
        </div>
        <div data-v-e2b51a45="" class="cards">
          <a v-for="p in filteredProducts" :key="p.href" data-v-e2b51a45="" :href="p.href" class="card-link">
            <div data-v-4f4b14b5="" data-v-e2b51a45="" class="product-card">
              <div data-v-4f4b14b5="" class="image-wrapper">
                <span data-v-4f4b14b5="" class="badge">{{ p.badge }}</span>
                <img data-v-4f4b14b5="" :src="p.img" :alt="p.title" style="border-radius: 12px;" />
              </div>
              <h3 data-v-4f4b14b5="" class="title">{{ p.title }}</h3>
            </div>
          </a>
          <div v-if="filteredProducts.length === 0" data-v-e2b51a45="" style="grid-column: 1 / -1; text-align: center; color: #ffffff8c; padding: 3rem 0; font-size: 16px;">
            No products found
          </div>
        </div>
      </div>
    </section>

    <CollaborateSection />

    <AppFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import AppFooter from '../components/AppFooter.vue'
import CollaborateSection from '../components/CollaborateSection.vue'
import { useProductStore } from '../stores/products'

export default {
  name: 'Products',
  components: {
    Navbar,
    AppFooter,
    CollaborateSection
  },
  created() {
    this.productStore = useProductStore()
  },
  data() {
    return {
      search: '',
      category: 'All Categories',
      catOpen: false
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
    categories() {
      return ['All Categories', ...new Set(this.products.map(p => p.badge))]
    },
    filteredProducts() {
      const q = this.search.trim().toLowerCase()
      return this.products.filter(p =>
        (this.category === 'All Categories' || p.badge === this.category) &&
        (q === '' || p.title.toLowerCase().includes(q))
      )
    }
  },
  methods: {
    selectCategory(c) {
      this.category = c
      this.catOpen = false
    }
  }
}
</script>