<template>
  <div>
    <Navbar />
    <section data-v-4ff0f99e class="hero-center" :style="{ backgroundImage: `url(/situation.webp)` }">
      <div data-v-4ff0f99e class="overlay"></div>
      <div data-v-4ff0f99e class="content">
        <span data-v-4ff0f99e class="badge">{{ $route.name }}</span>
        <h1 data-v-4ff0f99e>{{ $route.meta.title }}</h1>
        <p data-v-4ff0f99e>{{ $route.meta.description }}</p>
      </div>
    </section>
    <section class="placeholder-body">
      <div class="placeholder-container">
        <Statement />
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Statement from '../components/Statement.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'PlaceholderPage',
  components: {
    Navbar,
    Statement,
    AppFooter
  }
}
</script>

<style scoped>
.placeholder-body {
  padding: 80px 24px;
  background: #fff;
}
.placeholder-container {
  max-width: 820px;
  margin: 0 auto;
}
</style>