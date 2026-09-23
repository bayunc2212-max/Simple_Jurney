<template>
  <section
    data-v-58294568
    ref="hero"
    class="hero-statement"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div data-v-58294568 class="overlay"></div>
    <div data-v-58294568 class="scroll-content">
      <div
        data-v-58294568
        v-for="index in 2"
        :key="index"
        class="slide"
        :class="{ active: currentIndex === index - 1 }"
      >
        <slot :index="index - 1"></slot>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useAnimateStore } from '../stores/animate'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'MainStatement',
  props: {
    backgroundImage: {
      type: String,
      default: `/about.webp`
    }
  },
  data() {
    return {
      currentIndex: 0,
      maxIndex: 1
    }
  },
  created() {
    this.animateState = useAnimateStore()
  },
  mounted() {
    this.initScrollAnimation()
  },
  beforeUnmount() {
    this.scrollTriggerInstance && this.scrollTriggerInstance.kill()
  },
  methods: {
    initScrollAnimation() {
      this.scrollTriggerInstance = gsap
        .timeline({
          scrollTrigger: {
            trigger: this.$refs.hero,
            start: `top top`,
            end: `+=200%`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onUpdate: (e) => {
              let index = e.progress >= 0.5 ? 1 : 0
              if (index !== this.currentIndex) {
                this.currentIndex = index
                this.animateState.setCurrentIndex(index)
              }
            }
          }
        })
        .scrollTrigger
    }
  }
}
</script>