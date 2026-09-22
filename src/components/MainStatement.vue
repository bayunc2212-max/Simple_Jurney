<template>
  <section
    data-v-58294568
    ref="hero"
    class="hero-statement"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
    @wheel="onWheel"
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
import { useAnimateStore } from '../stores/animate'

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
      maxIndex: 1,
      inViewport: false,
      isScrolling: false,
      scrollTimeout: null,
      observer: null,
      debugTop: 0
    }
  },
  created() {
    this.animateState = useAnimateStore()
  },
  mounted() {
    this.setupObserver()
    window.addEventListener(`keydown`, this.onKeydown)
    let e = this.$refs.hero
    e.addEventListener(`touchstart`, this.onTouchStart, {
      passive: true
    })
    e.addEventListener(`touchmove`, this.onTouchMove, {
      passive: false
    })
    e.addEventListener(`touchend`, this.onTouchEnd, {
      passive: true
    })
  },
  beforeUnmount() {
    this.observer && this.observer.disconnect()
    this.scrollTimeout && clearTimeout(this.scrollTimeout)
    window.removeEventListener(`keydown`, this.onKeydown)
    let e = this.$refs.hero
    e &&
      (e.removeEventListener(`touchstart`, this.onTouchStart),
      e.removeEventListener(`touchmove`, this.onTouchMove),
      e.removeEventListener(`touchend`, this.onTouchEnd))
  },
  methods: {
    setupObserver() {
      this.observer = new IntersectionObserver(
        ([e]) => {
          let t = e.boundingClientRect
          let n = window.innerHeight
          let r = t.top <= 5 && t.bottom > n * 0.3
          this.inViewport = r
          this.debugTop = Math.round(t.top)
          !r &&
            this.currentIndex !== 0 &&
            setTimeout(() => {
              this.inViewport || (this.currentIndex = 0)
            }, 500)
        },
        {
          threshold: Array.from({ length: 101 }, (e, t) => t / 100),
          rootMargin: `0px`
        }
      )
      this.observer.observe(this.$refs.hero)
    },
    onWheel(e) {
      if (!this.inViewport || this.isScrolling) return
      let isDown = e.deltaY > 0
      let isUp = e.deltaY < 0
      isDown && this.currentIndex < this.maxIndex
        ? (e.preventDefault(),
          this.currentIndex++,
          this.animateState.setCurrentIndex(this.currentIndex),
          this.throttleScroll())
        : isUp &&
            this.currentIndex > 0 &&
            (e.preventDefault(),
            this.currentIndex--,
            this.animateState.setCurrentIndex(this.currentIndex),
            this.throttleScroll())
    },
    onKeydown(e) {
      !this.inViewport ||
        this.isScrolling ||
        ([`PageDown`, `ArrowDown`, ` `].includes(e.key) && this.currentIndex < this.maxIndex
          ? (e.preventDefault(),
            this.currentIndex++,
            this.animateState.setCurrentIndex(this.currentIndex),
            console.log(`plus`, this.currentIndex),
            this.throttleScroll())
          : [`PageUp`, `ArrowUp`].includes(e.key) && this.currentIndex > 0
            ? (e.preventDefault(),
              this.currentIndex--,
              this.animateState.setCurrentIndex(this.currentIndex),
              this.throttleScroll())
            : console.log(`   🔓 Letting browser scroll (at boundary)`))
    },
    throttleScroll() {
      this.isScrolling = true
      this.scrollTimeout && clearTimeout(this.scrollTimeout)
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false
      }, 800)
    },
    onTouchStart(e) {
      this._touchStartY = e.touches[0].clientY
      this._isTouchScrolling = false
    },
    onTouchMove(e) {
      if (!this.inViewport || this.isScrolling) return
      if (this._touchStartY === undefined) return
      const deltaY = this._touchStartY - e.touches[0].clientY
      if (Math.abs(deltaY) < 10) return
      const isDown = deltaY > 0
      const isUp = deltaY < 0
      isDown && this.currentIndex < this.maxIndex
        ? (e.preventDefault(),
          this.currentIndex++,
          this.animateState.setCurrentIndex(this.currentIndex),
          this.throttleScroll())
        : isUp &&
            this.currentIndex > 0 &&
            (e.preventDefault(),
            this.currentIndex--,
            this.animateState.setCurrentIndex(this.currentIndex),
            this.throttleScroll())
    },
    onTouchEnd() {
      this._touchStartY = undefined
    }
  }
}
</script>