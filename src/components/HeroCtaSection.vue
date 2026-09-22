<template>
  <div data-v-8d9a565c>
    <div data-v-8d9a565c class="content">
      <div data-v-8d9a565c class="text">
        <h1 data-v-8d9a565c v-fade-viewport class="delay-300">{{ title }}</h1>
        <p data-v-8d9a565c v-fade-viewport class="delay-700">{{ subtitle }}</p>
      </div>
      <ContactButton data-v-8d9a565c v-fade-viewport class="delay-1000" @cta-click="onClick">
        {{ buttonText }}
      </ContactButton>
    </div>
    <section data-v-8d9a565c class="hero" :style="backgroundStyle">
      <div data-v-8d9a565c class="overlay"></div>
    </section>
  </div>
</template>

<script>
import ContactButton from './ContactButton.vue'

export default {
  name: 'HeroCtaSection',
  components: {
    ContactButton
  },
  props: {
    title: {
      type: String,
      default: `Start Your IT Modernization Journey`
    },
    subtitle: {
      type: String,
      default: `We provide strategic guidance and end-to-end solutions tailored to your business needs.`
    },
    backgroundImage: {
      type: String,
      default: `/situation.webp`
    },
    buttonText: {
      type: String,
      default: `Let's Get Started`
    }
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      }
    }
  },
  methods: {
    onClick() {
      this.$emit(`cta-click`)
    }
  }
}
</script>