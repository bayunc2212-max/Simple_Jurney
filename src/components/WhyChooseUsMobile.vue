<template>
  <section data-v-e33e2721 ref="section" class="why-choose">
    <div data-v-e33e2721 class="overlay"></div>
    <div data-v-e33e2721 class="grid">
      <div data-v-e33e2721 class="column left">
        <FeatureCard
          data-v-e33e2721
          v-for="feature in leftFeatures"
          :key="feature.number"
          v-bind="feature"
          class="feature-card"
        />
      </div>
      <div data-v-e33e2721 class="center">
        <Statement data-v-e33e2721 brand="WHY CHOOSE US" statement="Expertise, Speed, and Targeted Solutions" />
      </div>
      <div data-v-e33e2721 class="column right">
        <FeatureCard
          data-v-e33e2721
          v-for="feature in rightFeatures"
          :key="feature.number"
          v-bind="feature"
          class="feature-card"
        />
      </div>
    </div>
    <div data-v-e33e2721 class="mobile-display">
      <div data-v-e33e2721 class="center-mobile">
        <Statement
          data-v-e33e2721
          brand="WHY CHOOSE US"
          statement="Expertise, Speed, and Targeted Solutions"
          disable-min-height
        />
      </div>
      <div data-v-e33e2721 class="column-mobile-container">
        <FeatureCard
          data-v-e33e2721
          v-for="feature in allMobileFeatures"
          :key="feature.number"
          v-bind="feature"
          class="feature-card"
          :style="getCardStyle(feature.number)"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FeatureCard from './FeatureCard.vue'
import Statement from './Statement.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'WhyChooseUs',
  components: {
    FeatureCard,
    Statement
  },
  props: {
    execution: {
      type: Boolean
    }
  },
  computed: {
    allMobileFeatures() {
      return [...this.leftFeaturesMobile, ...this.rightFeaturesMobile].sort(
        (a, b) => parseInt(a.number, 10) - parseInt(b.number, 10)
      )
    },
    mobileOffset() {
      const isSmall = this.screenWidth <= 380
      const small = { 1: 0, 2: -120, 3: -155, 4: -280 }
      const normal = { 1: 0, 2: -110, 3: -140, 4: -250 }
      return (r) => {
        let i = parseInt(r, 10)
        return isSmall ? small[i] ?? 0 : normal[i] ?? 0
      }
    }
  },
  data() {
    return {
      leftFeatures: [
        {
          number: `01`,
          title: `Experienced & Proven Team`,
          description: `Our team brings deep expertise in delivering complex digital solutions for diverse industries.`
        },
        {
          number: `03`,
          title: `Reliable & Scalable Technology`,
          description: `We utilize technology architectures that support long-term growth and modernization.`
        }
      ],
      rightFeatures: [
        {
          number: `02`,
          title: `Tailored to Your Business`,
          description: `We design solutions based on your operational challenges and industry context.`
        },
        {
          number: `04`,
          title: `Integrated End to End Support`,
          description: `Supporting clients from consultation and implementation to maintenance.`
        }
      ],
      leftFeaturesMobile: [
        {
          number: `01`,
          title: `Experienced & Proven Team`,
          description: `Our team brings deep expertise in delivering complex digital solutions for diverse industries.`
        },
        {
          number: `02`,
          title: `Tailored to Your Business`,
          description: `We design solutions based on your operational challenges and industry context.`
        }
      ],
      rightFeaturesMobile: [
        {
          number: `03`,
          title: `Reliable & Scalable Technology`,
          description: `We utilize technology architectures that support long-term growth and modernization.`
        },
        {
          number: `04`,
          title: `Integrated End to End Support`,
          description: `Supporting clients from consultation and implementation to maintenance.`
        }
      ],
      scrollCtx: null,
      screenWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener(`resize`, this.onResize)
    this.$nextTick(() => {
      this.playAnimation()
    })
  },
  beforeUnmount() {
    window.removeEventListener(`resize`, this.onResize)
    this.scrollCtx && this.scrollCtx.revert()
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
    },
    playAnimation() {
      this.scrollCtx && this.scrollCtx.revert()
      this.scrollCtx = gsap.context(() => {
        let e = window.innerWidth <= 768
        let t = this.$el.querySelector(e ? `.center-mobile` : `.center`)
        t &&
          gsap.from(t, {
            scrollTrigger: {
              trigger: t,
              start: `top 45%`
            },
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: `power3.out`
          })
        let n = []
        n = e
          ? Array.from(this.$el.querySelectorAll(`.column-mobile-container .feature-card`))
          : Array.from(this.$el.querySelectorAll(`.column .feature-card`))
        let cards = n.sort(
          (a, b) =>
            parseInt(a.querySelector(`.feature-number`).textContent.trim(), 10) -
            parseInt(b.querySelector(`.feature-number`).textContent.trim(), 10)
        )
        gsap.set(cards, {
          opacity: 0,
          y: 50
        })
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: this.$refs.section,
            start: `top top`,
            end: e ? `+=50%` : `+=10%`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            pinSpacing: false
          }
        })
        cards.forEach((card) => {
          tl.to(card, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: `power2.out`
          })
        })
      }, this.$el)
    },
    getCardStyle(e) {
      if (this.screenWidth > 768) return {}
      let t = Number(e)
      if (t < 2) return {}
      let n = 0
      n =
        this.screenWidth <= 360
          ? -14
          : this.screenWidth <= 390
            ? -12
            : this.screenWidth <= 412
              ? -11
              : this.screenWidth <= 428
                ? -10
                : -9
      return {
        marginTop: `${n}vh`,
        zIndex: t,
        position: `relative`
      }
    }
  }
}
</script>