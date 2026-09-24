<template>
  <div>
    <Navbar />
    <section
      data-v-c437a423
      ref="heroSection"
      class="hero"
      :style="{ backgroundImage: 'url(/product_others_hero.webp)' }"
    >
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

    <div class="show-mobile">
      <section
        data-v-26aefc97
        ref="heroStmt"
        class="hero-statement"
        :style="{ backgroundImage: 'url(/about.webp)' }"
      >
        <div data-v-26aefc97 class="overlay"></div>
        <div data-v-26aefc97 class="scroll-content">
          <div data-v-26aefc97>
            <section data-v-02e88d9d class="align-center">
              <div data-v-02e88d9d class="content">
                <div data-v-02e88d9d v-fade-viewport class="brand delay-300">
                  <img
                    data-v-02e88d9d
                    src="/icon_diamond.png"
                    alt="brand icon"
                    class="brand-icon"
                    loading="lazy"
                    decoding="async"
                  />
                  <span data-v-02e88d9d class="brand-text">SIMPLE JOURNEY</span>
                </div>
                <h1 data-v-02e88d9d v-fade-viewport class="delay-1000">
                  PT Simple Journey is an IT consulting company and a provider of Infrastructure Solutions, Digital
                  Solutions, Cross-Industry Solutions, and IT Operation Services.
                </h1>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section data-v-e33e2721 ref="whyMobile" class="why-choose">
        <div data-v-e33e2721 class="overlay"></div>
        <div data-v-e33e2721 class="grid">
          <div data-v-e33e2721 class="column left">
            <div
              data-v-9d313a25
              class="feature-card"
              v-for="feature in mobLeftFeatures"
              :key="feature.number"
            >
              <div data-v-9d313a25 class="feature-header">
                <div data-v-9d313a25 class="feature-number">{{ feature.number }}</div>
                <h3 data-v-9d313a25 class="feature-title">{{ feature.title }}</h3>
              </div>
              <div data-v-9d313a25 class="divider"></div>
              <p data-v-9d313a25 class="feature-description">{{ feature.description }}</p>
            </div>
          </div>
          <div data-v-e33e2721 class="center">
            <section data-v-02e88d9d class="align-center">
              <div data-v-02e88d9d class="content">
                <div data-v-02e88d9d v-fade-viewport class="brand delay-300">
                  <img
                    data-v-02e88d9d
                    src="/icon_diamond.png"
                    alt="brand icon"
                    class="brand-icon"
                    loading="lazy"
                    decoding="async"
                  />
                  <span data-v-02e88d9d class="brand-text">WHY CHOOSE US</span>
                </div>
                <h1 data-v-02e88d9d v-fade-viewport class="delay-1000">
                  Expertise, Speed, and Targeted Solutions
                </h1>
              </div>
            </section>
          </div>
          <div data-v-e33e2721 class="column right">
            <div
              data-v-9d313a25
              class="feature-card"
              v-for="feature in mobRightFeatures"
              :key="feature.number"
            >
              <div data-v-9d313a25 class="feature-header">
                <div data-v-9d313a25 class="feature-number">{{ feature.number }}</div>
                <h3 data-v-9d313a25 class="feature-title">{{ feature.title }}</h3>
              </div>
              <div data-v-9d313a25 class="divider"></div>
              <p data-v-9d313a25 class="feature-description">{{ feature.description }}</p>
            </div>
          </div>
        </div>
        <div data-v-e33e2721 class="mobile-display">
          <div data-v-e33e2721 class="center-mobile">
            <section data-v-02e88d9d class="align-center" style="min-height: auto">
              <div data-v-02e88d9d class="content">
                <div data-v-02e88d9d v-fade-viewport class="brand delay-300">
                  <img
                    data-v-02e88d9d
                    src="/icon_diamond.png"
                    alt="brand icon"
                    class="brand-icon"
                    loading="lazy"
                    decoding="async"
                  />
                  <span data-v-02e88d9d class="brand-text">WHY CHOOSE US</span>
                </div>
                <h1 data-v-02e88d9d v-fade-viewport class="delay-1000">
                  Expertise, Speed, and Targeted Solutions
                </h1>
              </div>
            </section>
          </div>
          <div data-v-e33e2721 class="column-mobile-container">
            <div
              data-v-9d313a25
              class="feature-card"
              v-for="feature in mobAllMobileFeatures"
              :key="feature.number"
              :style="mobGetCardStyle(feature.number)"
            >
              <div data-v-9d313a25 class="feature-header">
                <div data-v-9d313a25 class="feature-number">{{ feature.number }}</div>
                <h3 data-v-9d313a25 class="feature-title">{{ feature.title }}</h3>
              </div>
              <div data-v-9d313a25 class="divider"></div>
              <p data-v-9d313a25 class="feature-description">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="show-desktop">
      <section
        data-v-58294568
        ref="mainHero"
        class="hero-statement"
        :style="{ backgroundImage: 'url(/about.webp)' }"
      >
        <div data-v-58294568 class="overlay"></div>
        <div data-v-58294568 class="scroll-content">
          <div
            data-v-58294568
            v-for="i in 2"
            :key="i"
            class="slide"
            :class="{ active: stmtCurrentIndex === i - 1 }"
          >
            <div v-if="i === 1" data-v-c7d507af class="panel" style="text-align: center">
              <section data-v-a7ed792a class="align-center" v-fade-viewport>
                <div data-v-a7ed792a class="content">
                  <div data-v-a7ed792a class="brand delay-500">
                    <img
                      data-v-a7ed792a
                      src="/icon_diamond.png"
                      alt="brand icon"
                      class="brand-icon"
                      loading="lazy"
                      decoding="async"
                    />
                    <span data-v-a7ed792a class="brand-text">SIMPLE JOURNEY</span>
                  </div>
                  <h1 data-v-a7ed792a class="delay-1000">
                    PT Simple Journey is an IT consulting company and a provider of Infrastructure Solutions, Digital
                    Solutions, Cross-Industry Solutions, and IT Operation Services.
                  </h1>
                </div>
              </section>
            </div>
            <div v-else-if="i === 2" data-v-c7d507af class="panel">
              <section data-v-7e0f7104 ref="descSection" class="why-choose">
                <div data-v-7e0f7104 class="grid">
                  <div data-v-7e0f7104 class="column left">
                    <div
                      data-v-9d313a25
                      class="feature-card feature-card-item"
                      v-for="feature in descLeftFeatures"
                      :key="feature.number"
                    >
                      <div data-v-9d313a25 class="feature-header">
                        <div data-v-9d313a25 class="feature-number">{{ feature.number }}</div>
                        <h3 data-v-9d313a25 class="feature-title">{{ feature.title }}</h3>
                      </div>
                      <div data-v-9d313a25 class="divider"></div>
                      <p data-v-9d313a25 class="feature-description">{{ feature.description }}</p>
                    </div>
                  </div>
                  <div data-v-7e0f7104 class="center">
                    <section data-v-02e88d9d class="align-center">
                      <div data-v-02e88d9d class="content">
                        <div data-v-02e88d9d v-fade-viewport class="brand delay-300">
                          <img
                            data-v-02e88d9d
                            src="/icon_diamond.png"
                            alt="brand icon"
                            class="brand-icon"
                            loading="lazy"
                            decoding="async"
                          />
                          <span data-v-02e88d9d class="brand-text">WHY CHOOSE US</span>
                        </div>
                        <h1 data-v-02e88d9d v-fade-viewport class="delay-1000">
                          Expertise, Speed, and Targeted Solutions
                        </h1>
                      </div>
                    </section>
                  </div>
                  <div data-v-7e0f7104 class="column right">
                    <div
                      data-v-9d313a25
                      class="feature-card feature-card-item"
                      v-for="feature in descRightFeatures"
                      :key="feature.number"
                    >
                      <div data-v-9d313a25 class="feature-header">
                        <div data-v-9d313a25 class="feature-number">{{ feature.number }}</div>
                        <h3 data-v-9d313a25 class="feature-title">{{ feature.title }}</h3>
                      </div>
                      <div data-v-9d313a25 class="divider"></div>
                      <p data-v-9d313a25 class="feature-description">{{ feature.description }}</p>
                    </div>
                  </div>
                </div>
                <div data-v-7e0f7104 class="mobile-display">
                  <div data-v-7e0f7104 class="center-mobile">
                    <section data-v-02e88d9d class="align-center">
                      <div data-v-02e88d9d class="content">
                        <div data-v-02e88d9d v-fade-viewport class="brand delay-300">
                          <img
                            data-v-02e88d9d
                            src="/icon_diamond.png"
                            alt="brand icon"
                            class="brand-icon"
                            loading="lazy"
                            decoding="async"
                          />
                          <span data-v-02e88d9d class="brand-text">WHY CHOOSE US</span>
                        </div>
                        <h1 data-v-02e88d9d v-fade-viewport class="delay-1000">
                          Expertise, Speed, and Targeted Solutions
                        </h1>
                      </div>
                    </section>
                  </div>
                  <div data-v-7e0f7104>
                    <div data-v-7e0f7104 class="column-mobile left">
                      <div
                        data-v-9d313a25
                        class="feature-card feature-card-item-mobile"
                        v-for="feature in descLeftFeaturesMobile"
                        :key="feature.number"
                        :style="{ transform: `translateY(${descMobileOffset(feature.number)}px)` }"
                      >
                        <div data-v-9d313a25 class="feature-header">
                          <div data-v-9d313a25 class="feature-number">{{ feature.number }}</div>
                          <h3 data-v-9d313a25 class="feature-title">{{ feature.title }}</h3>
                        </div>
                        <div data-v-9d313a25 class="divider"></div>
                        <p data-v-9d313a25 class="feature-description">{{ feature.description }}</p>
                      </div>
                    </div>
                    <div data-v-7e0f7104 class="column-mobile right">
                      <div
                        data-v-9d313a25
                        class="feature-card feature-card-item-mobile"
                        v-for="feature in descRightFeaturesMobile"
                        :key="feature.number"
                        :style="{ transform: `translateY(${descMobileOffset(feature.number)}px)` }"
                      >
                        <div data-v-9d313a25 class="feature-header">
                          <div data-v-9d313a25 class="feature-number">{{ feature.number }}</div>
                          <h3 data-v-9d313a25 class="feature-title">{{ feature.title }}</h3>
                        </div>
                        <div data-v-9d313a25 class="divider"></div>
                        <p data-v-9d313a25 class="feature-description">{{ feature.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section data-v-03d734da ref="servicesSection" class="services-section">
      <div data-v-03d734da class="container">
        <div data-v-03d734da class="header">
          <section data-v-02e88d9d class="align-left">
            <div data-v-02e88d9d class="content">
              <div data-v-02e88d9d v-fade-viewport class="brand delay-300">
                <img
                  data-v-02e88d9d
                  src="/icon_diamond.png"
                  alt="brand icon"
                  class="brand-icon"
                  loading="lazy"
                  decoding="async"
                />
                <span data-v-02e88d9d class="brand-text">OUR SERVICES</span>
              </div>
              <h1 data-v-02e88d9d v-fade-viewport class="delay-1000">
                Comprehensive IT Solutions for Your Business
              </h1>
            </div>
          </section>
        </div>
        <div data-v-03d734da v-fade-viewport class="delay-700 container-card">
          <div data-v-03d734da ref="cardsWrapper" class="cards-wrapper">
            <div data-v-03d734da class="service-card" data-card="0">
              <div data-v-03d734da class="content">
                <h2 data-v-03d734da>Infrastructure Solution</h2>
                <p data-v-03d734da>
                  Optimize your IT foundation with our cutting-edge infrastructure solutions. From cloud computing and
                  data centers to network security and system integration, we ensure a scalable, secure, and
                  high-performance IT environment tailored to your business needs.
                </p>
              </div>
              <div data-v-03d734da class="image">
                <video data-v-03d734da :src="'/infra_solution.webm'" autoplay loop muted playsinline></video>
              </div>
            </div>
            <div data-v-03d734da class="service-card" data-card="1">
              <div data-v-03d734da class="image">
                <video data-v-03d734da :src="'/digital_solution.webm'" autoplay loop muted playsinline></video>
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
                  We deliver tailored technology solutions across industries, including finance, healthcare, retail,
                  and manufacturing. Our expertise in industry-specific challenges allows us to create scalable,
                  future-ready digital ecosystems that drive business growth.
                </p>
              </div>
              <div data-v-03d734da class="image">
                <video data-v-03d734da :src="'/cross_industry.webm'" autoplay loop muted playsinline></video>
              </div>
            </div>
            <div data-v-03d734da class="service-card" data-card="3">
              <div data-v-03d734da class="image">
                <video data-v-03d734da :src="'/it_operation.webm'" autoplay loop muted playsinline></video>
              </div>
              <div data-v-03d734da class="content">
                <h2 data-v-03d734da>IT Operation Services</h2>
                <p data-v-03d734da>
                  Ensure seamless IT operations with our end-to-end managed services. From IT support, cloud
                  management, and cybersecurity to proactive monitoring and disaster recovery, we help you maintain
                  high availability, security, and operational efficiency—without the hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ProductsSection
      subtitle="OUR SOLUTIONS"
      heading="Products & Services"
      description="We deliver enterprise-grade solutions designed to support your digital transformation journey."
      :products="products"
      show-more
    />

    <div data-v-8d9a565c>
      <div data-v-8d9a565c class="content">
        <div data-v-8d9a565c class="text">
          <h1 data-v-8d9a565c v-fade-viewport class="delay-300">Start Your IT Modernization Journey</h1>
          <p data-v-8d9a565c v-fade-viewport class="delay-700">
            We provide strategic guidance and end-to-end solutions tailored to your business needs.
          </p>
        </div>
        <ContactButton data-v-8d9a565c v-fade-viewport class="delay-1000" />
      </div>
      <section data-v-8d9a565c class="hero" :style="{ backgroundImage: 'url(/situation.webp)' }">
        <div data-v-8d9a565c class="overlay"></div>
      </section>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar.vue'
import ContactButton from '../components/ContactButton.vue'
import ProductsSection from '../components/ProductsSection.vue'
import AppFooter from '../components/AppFooter.vue'
import { useProductStore } from '../stores/products'
import { useAnimateStore } from '../stores/animate'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Home',
  components: {
    Navbar,
    ContactButton,
    ProductsSection,
    AppFooter
  },
  created() {
    this.productState = useProductStore()
    this.animateState = useAnimateStore()
  },
  data() {
    return {
      titleWords: 'Accelerating Your Digital Transformation'.split(' '),
      rightLines: [
        'Enterprise-grade solutions for scalable,'.split(' '),
        'secure, and future-ready systems.'.split(' ')
      ],
      stmtCurrentIndex: 0,
      animationMode: 'simultaneous',
      screenWidth: window.innerWidth,
      mobLeftFeatures: [
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
      mobRightFeatures: [
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
      mobLeftFeaturesMobile: [
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
      mobRightFeaturesMobile: [
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
      descLeftFeatures: [
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
      descRightFeatures: [
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
      descLeftFeaturesMobile: [
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
      descRightFeaturesMobile: [
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
      mobScrollCtx: null,
      descCtx: null,
      stmtTrigger: null,
      servicesTrigger: null
    }
  },
  computed: {
    products() {
      return this.productState.products
    },
    descGetCurrentIndex() {
      return useAnimateStore().indexAbout
    },
    mobAllMobileFeatures() {
      return [...this.mobLeftFeaturesMobile, ...this.mobRightFeaturesMobile].sort(
        (a, b) => parseInt(a.number, 10) - parseInt(b.number, 10)
      )
    },
    mobMobileOffset() {
      const isSmall = this.screenWidth <= 380
      const small = { 1: 0, 2: -120, 3: -155, 4: -280 }
      const normal = { 1: 0, 2: -110, 3: -140, 4: -250 }
      return (r) => {
        const i = parseInt(r, 10)
        return isSmall ? small[i] ?? 0 : normal[i] ?? 0
      }
    },
    descMobileOffset() {
      const isSmall = this.screenWidth <= 380
      const small = { 1: 0, 2: -120, 3: -155, 4: -280 }
      const normal = { 1: 0, 2: -110, 3: -140, 4: -250 }
      return (r) => {
        const i = parseInt(r, 10)
        return isSmall ? small[i] ?? 0 : normal[i] ?? 0
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.initHeroWords()
    this.initMainStatement()
    this.initServicesAnimation()
    this.$nextTick(() => {
      this.mobPlayAnimation()
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
    this.stmtTrigger && this.stmtTrigger.kill()
    this.servicesTrigger && this.servicesTrigger.kill()
    this.mobScrollCtx && this.mobScrollCtx.revert()
    this.descCtx && this.descCtx.revert()
    ScrollTrigger.getAll().forEach((e) => e.kill())
  },
  watch: {
    descGetCurrentIndex(value) {
      if (value === 1) {
        this.$nextTick(() => this.descInitScrollAnimation())
      }
    }
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth
    },
    initHeroWords() {
      const section = this.$refs.heroSection
      if (!section) return
      const words = section.querySelectorAll('.w')
      const fontsReady = (document.fonts && document.fonts.ready) || Promise.resolve()
      const timeout = new Promise((resolve) => setTimeout(resolve, 900))
      Promise.race([fontsReady, timeout]).then(() => {
        gsap.fromTo(
          words,
          { yPercent: 140, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.2, ease: 'power4.out', stagger: 0.1, delay: 0.4 }
        )
      })
    },
    initMainStatement() {
      const section = this.$refs.mainHero
      if (!section) return
      this.stmtTrigger = gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=200%',
            scrub: true,
            pin: true,
            anticipatePin: 1,
            onUpdate: (e) => {
              const index = e.progress >= 0.5 ? 1 : 0
              if (index !== this.stmtCurrentIndex) {
                this.stmtCurrentIndex = index
                this.animateState.setCurrentIndex(index)
              }
            }
          }
        })
        .scrollTrigger
    },
    initServicesAnimation() {
      const section = this.$refs.servicesSection
      if (!section) return
      const cards = Array.from(section.querySelectorAll('.service-card'))
      gsap.set(cards, { opacity: 0, y: -50, pointerEvents: 'none' })
      gsap.set(cards[0], { opacity: 1, y: 0, pointerEvents: 'auto' })
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${cards.length * 50}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (e) => {
            const progress = e.progress
            const count = cards.length
            const current = Math.min(Math.floor(progress * count), count - 1)
            cards.forEach((card, idx) => {
              if (idx === current) {
                gsap.to(card, {
                  opacity: 1,
                  y: 0,
                  pointerEvents: 'auto',
                  duration: 0.6,
                  ease: 'power2.out'
                })
              } else if (idx < current) {
                gsap.to(card, {
                  opacity: 0,
                  y: -50,
                  pointerEvents: 'none',
                  duration: 0.4,
                  ease: 'power2.in'
                })
              } else {
                gsap.to(card, {
                  opacity: 0,
                  y: -50,
                  pointerEvents: 'none',
                  duration: 0.4,
                  ease: 'power2.inOut'
                })
              }
            })
          }
        }
      })
      this.servicesTrigger = timeline.scrollTrigger
    },
    mobPlayAnimation() {
      this.mobScrollCtx && this.mobScrollCtx.revert()
      const section = this.$refs.whyMobile
      if (!section) return
      this.mobScrollCtx = gsap.context(() => {
        const isMobile = window.innerWidth <= 768
        const center = section.querySelector(isMobile ? '.center-mobile' : '.center')
        if (center) {
          gsap.from(center, {
            scrollTrigger: { trigger: center, start: 'top 45%' },
            opacity: 0,
            y: 30,
            duration: 0.5,
            ease: 'power3.out'
          })
        }
        const nodes = isMobile
          ? Array.from(section.querySelectorAll('.column-mobile-container .feature-card'))
          : Array.from(section.querySelectorAll('.column .feature-card'))
        const cards = nodes.sort(
          (a, b) =>
            parseInt(a.querySelector('.feature-number').textContent.trim(), 10) -
            parseInt(b.querySelector('.feature-number').textContent.trim(), 10)
        )
        gsap.set(cards, { opacity: 0, y: 50 })
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: isMobile ? '+=50%' : '+=10%',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            pinSpacing: false
          }
        })
        cards.forEach((card) => {
          timeline.to(card, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' })
        })
      }, section)
    },
    descInitScrollAnimation() {
      if (this.descCtx) return
      const section = this.$refs.descSection
      if (!section) return
      this.descCtx = gsap.context(() => {
        gsap.set('.center, .center-mobile', { opacity: 0, y: 30 })
        gsap.set('.feature-card-item, .feature-card-item-mobile', { opacity: 0, scale: 0.5 })
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        })
        timeline.to('.center, .center-mobile', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        })
        const cards = Array.from(
          section.querySelectorAll('.feature-card-item, .feature-card-item-mobile')
        )
        cards.sort(
          (a, b) =>
            parseInt(a.querySelector('.feature-number').textContent.trim(), 10) -
            parseInt(b.querySelector('.feature-number').textContent.trim(), 10)
        )
        const delay = this.animationMode === 'simultaneous' ? 0 : 0.5
        timeline.to(
          cards,
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: delay,
            ease: 'back.out(1.7)'
          },
          '-=0.2'
        )
      }, section)
    },
    mobGetCardStyle(number) {
      if (this.screenWidth > 768) return {}
      const t = Number(number)
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
        position: 'relative'
      }
    }
  }
}
</script>