<template>
  <section data-v-c437a423 class="hero" ref="heroSection">
    <video data-v-c437a423 class="hero-video" autoplay loop muted playsinline>
      <source data-v-c437a423 src="/hero_home.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
    <Navbar />
    <div data-v-c437a423 class="overlay"></div>
    <div data-v-c437a423 class="container-wrapper">
      <div data-v-c437a423 class="hero-content" :class="{ visible: isVisible }">
        <div data-v-c437a423 class="left">
          <span data-v-c437a423> Accelerating Your Digital Transformation </span>
        </div>
        <div data-v-c437a423 class="right">
          <span data-v-c437a423>
            Enterprise-grade solutions for scalable,<br />
            secure, and future-ready systems.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'HeroSection',
  components: { Navbar },
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true
    }, 100)
  }
}
</script>