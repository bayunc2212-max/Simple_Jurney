<template>
  <section data-v-7e0f7104 class="why-choose">
    <div data-v-7e0f7104 class="grid">
      <div data-v-7e0f7104 class="column left">
        <FeatureCard
          data-v-7e0f7104
          v-for="feature in leftFeatures"
          :key="feature.number"
          v-bind="feature"
          class="feature-card-item"
        />
      </div>
      <div data-v-7e0f7104 class="center">
        <Statement data-v-7e0f7104 brand="WHY CHOOSE US" statement="Expertise, Speed, and Targeted Solutions" />
      </div>
      <div data-v-7e0f7104 class="column right">
        <FeatureCard
          data-v-7e0f7104
          v-for="feature in rightFeatures"
          :key="feature.number"
          v-bind="feature"
          class="feature-card-item"
        />
      </div>
    </div>
    <div data-v-7e0f7104 class="mobile-display">
      <div data-v-7e0f7104 class="center-mobile">
        <Statement data-v-7e0f7104 brand="WHY CHOOSE US" statement="Expertise, Speed, and Targeted Solutions" />
      </div>
      <div data-v-7e0f7104>
        <div data-v-7e0f7104 class="column-mobile left">
          <FeatureCard
            data-v-7e0f7104
            v-for="feature in leftFeaturesMobile"
            :key="feature.number"
            v-bind="feature"
            class="feature-card-item-mobile"
            :style="{ transform: `translateY(${mobileOffset(feature.number)}px)` }"
          />
        </div>
        <div data-v-7e0f7104 class="column-mobile right">
          <FeatureCard
            data-v-7e0f7104
            v-for="feature in rightFeaturesMobile"
            :key="feature.number"
            v-bind="feature"
            class="feature-card-item-mobile"
            :style="{ transform: `translateY(${mobileOffset(feature.number)}px)` }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FeatureCard from './FeatureCard.vue'
import Statement from './Statement.vue'
import { useAnimateStore } from '../stores/animate'

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
    },
    animationMode: {
      type: String,
      default: `simultaneous`
    }
  },
  computed: {
    getCurrentIndex() {
      return useAnimateStore().indexAbout
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
      screenWidth: window.innerWidth,
      ctx: null
    }
  },
  mounted() {
    window.addEventListener(`resize`, () => {
      this.screenWidth = window.innerWidth
    })
  },
  beforeUnmount() {
    this.ctx && this.ctx.revert()
  },
  watch: {
    getCurrentIndex(e) {
      e === 1 &&
        this.$nextTick(() => {
          this.initScrollAnimation()
        })
    }
  },
  methods: {
    initScrollAnimation() {
      this.ctx ||=
        gsap.context(() => {
          gsap.set(`.center, .center-mobile`, {
            opacity: 0,
            y: 30
          })
          gsap.set(`.feature-card-item, .feature-card-item-mobile`, {
            opacity: 0,
            scale: 0.5
          })
          let e = gsap.timeline({
            scrollTrigger: {
              trigger: this.$el,
              start: `top 50%`,
              toggleActions: `play none none reverse`
            }
          })
          e.to(`.center, .center-mobile`, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: `power2.out`
          })
          let t = Array.from(document.querySelectorAll(`.feature-card-item, .feature-card-item-mobile`))
          t.sort(
            (a, b) =>
              parseInt(a.querySelector(`.feature-number`).textContent.trim(), 10) -
              parseInt(b.querySelector(`.feature-number`).textContent.trim(), 10)
          )
          let delay = this.animationMode === `simultaneous` ? 0 : 0.5
          e.to(
            t,
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              stagger: delay,
              ease: `back.out(1.7)`
            },
            `-=0.2`
          )
        }, this.$el)
    }
  }
}
</script>