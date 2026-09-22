<template>
  <div>
    <Navbar />
    <section data-v-4ff0f99e class="hero-center" :style="{ backgroundImage: `url(/situation.webp)` }">
      <div data-v-4ff0f99e class="overlay"></div>
      <div data-v-4ff0f99e class="content">
        <span data-v-4ff0f99e class="badge">404</span>
        <h1 data-v-4ff0f99e>Page Not Found</h1>
        <a data-v-4ff0f99e href="/" class="back-home">Go back to Home</a>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'NotFound',
  components: {
    Navbar,
    AppFooter
  }
}
</script>

<style scoped>
.back-home {
  display: inline-block;
  margin-top: 22px;
  color: #6cb6ff;
  font-size: 15px;
  text-decoration: underline;
}
</style>