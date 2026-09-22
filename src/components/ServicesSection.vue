<template>
  <section data-v-03d734da ref="servicesSection" class="services-section">
    <div data-v-03d734da class="container">
      <div data-v-03d734da class="header">
        <Statement
          data-v-03d734da
          align="left"
          brand="OUR SERVICES"
          statement="Comprehensive IT Solutions for Your Business"
        />
      </div>
      <div data-v-03d734da v-fade-viewport class="delay-700 container-card">
        <div data-v-03d734da ref="cardsWrapper" class="cards-wrapper">
          <div data-v-03d734da class="service-card" data-card="0">
            <div data-v-03d734da class="content">
              <h2 data-v-03d734da>Infrastructure Solution</h2>
              <p data-v-03d734da>
                Optimize your IT foundation with our cutting-edge infrastructure solutions. From cloud computing and
                data centers to network security and system integration, we ensure a scalable, secure, and high-performance
                IT environment tailored to your business needs.
              </p>
            </div>
            <div data-v-03d734da class="image">
              <video data-v-03d734da :src="infrastructureImage" autoplay loop muted playsinline></video>
            </div>
          </div>
          <div data-v-03d734da class="service-card" data-card="1">
            <div data-v-03d734da class="image">
              <video data-v-03d734da :src="digitalImage" autoplay loop muted playsinline></video>
            </div>
            <div data-v-03d734da class="content">
              <h2 data-v-03d734da>Digital Solution</h2>
              <p data-v-03d734da>
                Drive innovation and efficiency with our digital transformation services. We provide custom software
                development, enterprise applications, automation, and AI-driven solutions to enhance productivity and
                customer experience in the digital era.
              </p>
            </div>
          </div>
          <div data-v-03d734da class="service-card" data-card="2">
            <div data-v-03d734da class="content">
              <h2 data-v-03d734da>Cross-Industry Solution</h2>
              <p data-v-03d734da>
                We deliver tailored technology solutions across industries, including finance, healthcare, retail, and
                manufacturing. Our expertise in industry-specific challenges allows us to create scalable, future-ready
                digital ecosystems that drive business growth.
              </p>
            </div>
            <div data-v-03d734da class="image">
              <video data-v-03d734da :src="crossIndustryImage" autoplay loop muted playsinline></video>
            </div>
          </div>
          <div data-v-03d734da class="service-card" data-card="3">
            <div data-v-03d734da class="image">
              <video data-v-03d734da :src="itOperationImage" autoplay loop muted playsinline></video>
            </div>
            <div data-v-03d734da class="content">
              <h2 data-v-03d734da>IT Operation Services</h2>
              <p data-v-03d734da>
                Ensure seamless IT operations with our end-to-end managed services. From IT support, cloud management,
                and cybersecurity to proactive monitoring and disaster recovery, we help you maintain high availability,
                security, and operational efficiency—without the hassle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Statement from './Statement.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ITServices',
  props: {
    infrastructureImage: {
      type: String,
      default: `/infra_solution.webm`
    },
    digitalImage: {
      type: String,
      default: `/digital_solution.webm`
    },
    itOperationImage: {
      type: String,
      default: `/it_operation.webm`
    },
    crossIndustryImage: {
      type: String,
      default: `/cross_industry.webm`
    }
  },
  components: {
    Statement
  },
  data() {
    return {
      scrollTriggerInstance: null
    }
  },
  mounted() {
    this.initScrollAnimation()
  },
  beforeUnmount() {
    this.scrollTriggerInstance && this.scrollTriggerInstance.kill()
    ScrollTrigger.getAll().forEach((e) => e.kill())
  },
  methods: {
    initScrollAnimation() {
      let e = this.$refs.servicesSection
      let t = this.$el.querySelectorAll(`.service-card`)
      gsap.set(t, {
        opacity: 0,
        y: -50,
        pointerEvents: `none`
      })
      gsap.set(t[0], {
        opacity: 1,
        y: 0,
        pointerEvents: `auto`
      })
      this.scrollTriggerInstance = gsap.timeline({
        scrollTrigger: {
          trigger: e,
          start: `top top`,
          end: `+=${t.length * 50}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (e) => {
            let n = e.progress
            let r = t.length
            let i = Math.min(Math.floor(n * r), r - 1)
            t.forEach((e, t) => {
              t === i
                ? gsap.to(e, {
                    opacity: 1,
                    y: 0,
                    pointerEvents: `auto`,
                    duration: 0.6,
                    ease: `power2.out`
                  })
                : t < i
                  ? gsap.to(e, {
                      opacity: 0,
                      y: -50,
                      pointerEvents: `none`,
                      duration: 0.4,
                      ease: `power2.in`
                    })
                  : gsap.to(e, {
                      opacity: 0,
                      y: -50,
                      pointerEvents: `none`,
                      duration: 0.4,
                      ease: `power2.inOut`
                    })
            })
          }
        }
      }).scrollTrigger
    }
  }
}
</script>