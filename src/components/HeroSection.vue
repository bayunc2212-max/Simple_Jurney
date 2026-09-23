<template>
  <section data-v-c437a423 class="hero" ref="heroSection">
    <video data-v-c437a423 class="hero-video" autoplay loop muted playsinline>
      <source data-v-c437a423 src="/hero_home.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
    <Navbar />
    <div data-v-c437a423 class="overlay"></div>
    <div data-v-c437a423 class="container-wrapper">
      <div data-v-c437a423 class="hero-content">
        <div data-v-c437a423 class="left">
          <template v-for="(word, i) in titleWords" :key="'t' + i">
            <span v-if="i > 0" data-v-c437a423 class="w-sep">{{ ' ' }}</span>
            <span data-v-c437a423 class="w-mask"><span class="w">{{ word }}</span></span>
          </template>
        </div>
        <div data-v-c437a423 class="right">
          <span data-v-c437a423 class="right-text">
            <template v-for="(word, i) in rightLines[0]" :key="'a' + i">
              <span v-if="i > 0" data-v-c437a423 class="w-sep">{{ ' ' }}</span>
              <span data-v-c437a423 class="w-mask"><span class="w">{{ word }}</span></span>
            </template>
            <br data-v-c437a423 />
            <template v-for="(word, i) in rightLines[1]" :key="'b' + i">
              <span v-if="i > 0" data-v-c437a423 class="w-sep">{{ ' ' }}</span>
              <span data-v-c437a423 class="w-mask"><span class="w">{{ word }}</span></span>
            </template>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
import Navbar from './Navbar.vue'

export default {
  name: 'HeroSection',
  components: { Navbar },
  data() {
    return {
      titleWords: 'Accelerating Your Digital Transformation'.split(' '),
      rightLines: [
        'Enterprise-grade solutions for scalable,'.split(' '),
        'secure, and future-ready systems.'.split(' ')
      ]
    }
  },
  mounted() {
    const words = this.$el.querySelectorAll('.w')
    const fontsReady = (document.fonts && document.fonts.ready) || Promise.resolve()
    const timeout = new Promise((resolve) => setTimeout(resolve, 900))
    Promise.race([fontsReady, timeout]).then(() => {
      gsap.fromTo(
        words,
        { yPercent: 140, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, ease: 'power4.out', stagger: 0.1, delay: 0.4 }
      )
    })
  }
}
</script>