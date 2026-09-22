<template>
  <section
    data-v-26aefc97
    ref="hero"
    class="hero-statement"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div data-v-26aefc97 class="overlay"></div>
    <div data-v-26aefc97 class="scroll-content">
      <div data-v-26aefc97>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'HeroStatement',
  props: {
    backgroundImage: {
      type: String,
      default: '/about.webp'
    },
    count: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      currentIndex: 0,
      trigger: null,
      tl: null
    }
  },
  beforeUnmount() {
    ScrollTrigger.getAll().forEach((e) => e.kill())
    gsap.globalTimeline.clear()
  },
  mounted() {},
  methods: {
    initScroll() {
      let e = this.$refs.slides
      gsap.set(e, {
        opacity: 0,
        y: 30
      })
      gsap.set(e[0], {
        opacity: 1,
        y: 0
      })
      !(this.count <= 1) &&
        gsap
          .timeline({
            scrollTrigger: {
              trigger: this.$refs.hero,
              start: `top top`,
              end: `+=15%`,
              scrub: true,
              pin: true,
              anticipatePin: 1
            }
          })
          .to(e[0], {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: `power2.out`
          })
          .to(e[1], {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: `power2.out`
          })
    }
  }
}
</script>