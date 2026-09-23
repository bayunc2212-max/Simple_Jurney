<template>
  <section data-v-dc66a76c class="hero" :style="{ backgroundImage: 'url(/collaborate.jpg)' }">
    <div data-v-dc66a76c class="overlay"></div>
    <div data-v-dc66a76c class="content">
      <div data-v-dc66a76c class="text">
        <h1 data-v-dc66a76c v-fade-viewport class="delay-300">Ready to Collaborate With Us?</h1>
        <p data-v-dc66a76c v-fade-viewport class="delay-700">Discuss your business technology needs with the SimpleJourney team.</p>
      </div>
      <div data-v-dc66a76c v-fade-viewport class="delay-1000" style="max-width: 200px">
        <ContactButton>Let's Get Started</ContactButton>
      </div>
    </div>
  </section>
</template>

<script>
import ContactButton from './ContactButton.vue'

export default {
  name: 'CollaborateSection',
  components: {
    ContactButton
  }
}
</script>