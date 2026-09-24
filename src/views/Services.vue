<template>
  <div>
    <Navbar />
    <section ref="heroSection" data-v-8f5e8dc2 class="hero">
      <div data-v-8f5e8dc2 class="top-gradient"></div>
      <div data-v-8f5e8dc2 class="overlay"></div>
      <div data-v-8f5e8dc2 class="absolute-bread-cumb">
        <div data-v-13818925 class="bread-cumb">
          <a data-v-8f5e8dc2 href="/" style="color: inherit; text-underline-offset: 3px">
            <p data-v-13818925 class="primary">Home</p>
          </a>
          <img data-v-13818925 src="/rectangle.png" alt="" height="10" />
          <a data-v-8f5e8dc2 href="/services" style="color: rgb(30, 136, 255); text-underline-offset: 3px">
            <p data-v-13818925 class="secondary">Services</p>
          </a>
        </div>
      </div>
      <div data-v-8f5e8dc2 class="hero-content">
        <div data-v-8f5e8dc2 v-fade-viewport class="left delay-300">
          <h1 data-v-8f5e8dc2>Integrated IT Solutions for Business Growth</h1>
        </div>

        <section ref="solutionSection" data-v-5267d591 class="solution-section">
          <div data-v-5267d591 v-fade-viewport class="delay-1000 tabs">
            <button
              data-v-5267d591
              v-for="(svc, i) in services"
              :key="svc.title"
              class="tab"
              :class="{ active: i === active }"
              @click="goTo(i)"
            >
              {{ svc.title }}
            </button>
          </div>
          <div data-v-5267d591 v-fade-viewport class="content delay-1500">
            <button data-v-5267d591 class="carousel-arrow prev" aria-label="Previous" @click="prev">‹</button>
            <div data-v-5267d591 class="image">
              <video
                data-v-5267d591
                v-for="(svc, i) in services"
                :key="`d-${svc.title}`"
                v-show="active === i"
                :src="svc.video"
                autoplay
                loop
                muted
                playsinline
              ></video>
            </div>
            <div data-v-5267d591 class="text">
              <h2 data-v-5267d591>{{ services[active].title }}</h2>
              <p data-v-5267d591>{{ services[active].desc }}</p>
            </div>
            <button data-v-5267d591 class="carousel-arrow next" aria-label="Next" @click="next">›</button>
          </div>
          <div data-v-5267d591 v-fade-viewport class="service-card content-mobile delay-1500">
            <div data-v-5267d591 class="content-service">
              <h2 data-v-5267d591>{{ services[active].title }}</h2>
              <p data-v-5267d591>{{ services[active].desc }}</p>
            </div>
            <div data-v-5267d591 class="image-service">
              <div data-v-5267d591 class="image">
                <video
                  data-v-5267d591
                  v-for="(svc, i) in services"
                  :key="`m-${svc.title}`"
                  v-show="active === i"
                  :src="svc.video"
                  autoplay
                  loop
                  muted
                  playsinline
                ></video>
              </div>
            </div>
            <button data-v-5267d591 class="carousel-arrow prev" aria-label="Previous" @click="prev">‹</button>
            <button data-v-5267d591 class="carousel-arrow next" aria-label="Next" @click="next">›</button>
          </div>
        </section>
      </div>
    </section>

    <section
      ref="visionSection"
      data-v-2a3485d1
      class="vision-mission"
      :style="{ backgroundImage: 'url(/product_others_hero.webp)' }"
    >
      <div data-v-2a3485d1 class="overlay"></div>
      <div data-v-2a3485d1 class="container">
        <div data-v-2a3485d1 class="vision">
          <Statement
            align="left"
            brand="WHY THIS IS MATTERS"
            statement="The Business Impact Behind Every Technology Decision"
          />
        </div>
        <div data-v-2a3485d1 class="mission-container">
          <div
            data-v-2a3485d1
            data-v-a2d8efe2
            v-for="card in cards"
            :key="card.title"
            class="feature-card feature-card-item"
          >
            <div data-v-a2d8efe2 class="feature-header">
              <div data-v-a2d8efe2 class="feature-number">
                <img data-v-a2d8efe2 :src="card.icon" :alt="card.title" />
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 1rem">
              <h3 data-v-a2d8efe2 class="feature-title">{{ card.title }}</h3>
              <p data-v-a2d8efe2 class="feature-description">{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CollaborateSection />

    <AppFooter />
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar.vue'
import Statement from '../components/Statement.vue'
import CollaborateSection from '../components/CollaborateSection.vue'
import AppFooter from '../components/AppFooter.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Services',
  components: {
    Navbar,
    Statement,
    CollaborateSection,
    AppFooter
  },
  data() {
    return {
      active: 2,
      services: [
        {
          title: 'Infrastructure Solution',
          video: '/infra_solution.webm',
          desc: 'Optimize your IT foundation with our cutting-edge infrastructure solutions. From cloud computing and data centers to network security and system integration, we ensure a scalable, secure, and high-performance IT environment tailored to your business needs.'
        },
        {
          title: 'Digital Solution',
          video: '/digital_solution.webm',
          desc: 'Drive innovation and efficiency with our digital transformation services. We provide custom software development, enterprise applications, automation, and AI-driven solutions to enhance productivity and customer experience in the digital era.'
        },
        {
          title: 'Cross Industry Solution',
          video: '/cross_industry.webm',
          desc: 'Delivering adaptable solutions across industries by combining best practices, technology expertise, and scalable architectures.'
        },
        {
          title: 'IT Operation Service',
          video: '/it_operation.webm',
          desc: 'Ensure seamless IT operations with our end-to-end managed services. From IT support, cloud management, and cybersecurity to proactive monitoring and disaster recovery, we help you maintain high availability, security, and operational efficiency—without the hassle.'
        }
      ],
      cards: [
        {
          icon: '/business.png',
          title: 'Tailored to Your Business',
          desc: 'We design solutions based on your operational challenges and industry context.'
        },
        {
          icon: '/efisiensi.png',
          title: 'Integrated End to End Support',
          desc: 'Supporting clients from consultation and implementation to maintenance.'
        },
        {
          icon: '/scalability.png',
          title: 'Reliable & Scalable Technology',
          desc: 'We utilize technology architectures that support long-term growth and modernization.'
        },
        {
          icon: '/security.png',
          title: 'Experienced & Proven Team',
          desc: 'Our team brings deep expertise in delivering complex digital solutions for diverse industries.'
        },
        {
          icon: '/briefcase.png',
          title: 'Driving Measurable Business Outcomes',
          desc: 'Focusing on solutions that enhance efficiency, reduce costs, and boost revenue.'
        }
      ]
    }
  },
  mounted() {
    this.playActiveVideos()
    this.initCardsAnimation()
  },
  beforeUnmount() {
    if (this.cardsTrigger) this.cardsTrigger.kill()
    ScrollTrigger.getAll().forEach((t) => t.kill())
  },
  watch: {
    active() {
      this.$nextTick(() => this.playActiveVideos())
    }
  },
  methods: {
    goTo(i) {
      if (i === this.active) return
      this.active = i
      this.$nextTick(() => {
        const section = this.$refs.solutionSection
        if (!section) return
        const desktop = section.querySelector('.content')
        if (desktop) {
          gsap.fromTo(
            desktop.querySelectorAll('.image, .text'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.08 }
          )
        }
        const mobile = section.querySelector('.content-mobile')
        if (mobile) {
          gsap.fromTo(
            mobile.querySelectorAll('.content-service, .image-service'),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', stagger: 0.08 }
          )
        }
      })
    },
    prev() {
      this.goTo((this.active - 1 + this.services.length) % this.services.length)
    },
    next() {
      this.goTo((this.active + 1) % this.services.length)
    },
    playActiveVideos() {
      this.$nextTick(() => {
        const section = this.$refs.solutionSection
        if (!section) return
        const groups = [
          section.querySelector('.content .image'),
          section.querySelector('.content-mobile .image-service .image')
        ]
        groups.forEach((group) => {
          if (!group) return
          const video = group.querySelectorAll('video')[this.active]
          if (video && video.play) video.play().catch(() => {})
        })
      })
    },
    initCardsAnimation() {
      const trigger = this.$refs.visionSection
      if (!trigger) return
      this.cardsTrigger = gsap.fromTo(
        trigger.querySelectorAll('.feature-card-item'),
        { y: 60, scale: 0.95, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: { trigger, start: 'top 75%' }
        }
      )
    }
  }
}
</script>