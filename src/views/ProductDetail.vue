<template>
  <div>
    <Navbar />
    <ProductDetailContent v-if="name" :slug="name" />
    <AppFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import AppFooter from '../components/AppFooter.vue'
import ProductDetailContent from '../components/ProductDetailContent.vue'

export default {
  name: 'ProductDetail',
  components: {
    Navbar,
    AppFooter,
    ProductDetailContent
  },
  computed: {
    name() {
      return this.$route.params.name
    }
  }
}
</script>