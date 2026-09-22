<template>
  <section data-v-02e88d9d ref="section" :class="alignmentClass" :style="sectionStyle">
    <div data-v-02e88d9d class="content">
      <div data-v-02e88d9d v-fade-viewport class="brand delay-300">
        <img data-v-02e88d9d src="/icon_diamond.png" alt="brand icon" class="brand-icon" />
        <span data-v-02e88d9d class="brand-text">{{ brand }}</span>
      </div>
      <h1 data-v-02e88d9d v-fade-viewport class="delay-1000">{{ statement }}</h1>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Statement',
  props: {
    brand: {
      type: String,
      default: 'SIMPLE JOURNEY'
    },
    brandIcon: {
      type: String,
      default: '/icon_diamond.png'
    },
    statement: {
      type: String,
      default:
        'PT Simple Journey is an IT consulting company and a provider of Infrastructure Solutions, Digital Solutions, Cross-Industry Solutions, and IT Operation Services.'
    },
    align: {
      type: String,
      default: 'center',
      validator: (value) => ['left', 'center'].includes(value)
    },
    disableMinHeight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      brandVisible: false,
      statementVisible: false,
      observer: null
    }
  },
  computed: {
    alignmentClass() {
      return this.align === 'left' ? 'align-left' : 'align-center'
    },
    sectionStyle() {
      return this.disableMinHeight
        ? {
            minHeight: `auto`
          }
        : {}
    }
  },
  mounted() {
    if (typeof IntersectionObserver === 'undefined') {
      this.brandVisible = true
      this.statementVisible = true
      return
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.brandVisible = true
            this.statementVisible = true
            if (this.observer && this.$refs.section) {
              this.observer.unobserve(this.$refs.section)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -150px 0px' }
    )
    if (this.$refs.section) {
      this.observer.observe(this.$refs.section)
    }
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect()
  }
}
</script>