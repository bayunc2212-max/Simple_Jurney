<template>
  <section data-v-dc66a76c="" class="hero" style="background-image: url(&quot;/collaborate.jpg&quot;);">
    <div data-v-dc66a76c="" class="overlay"></div>
    <div data-v-dc66a76c="" class="content">
      <div data-v-dc66a76c="" class="text">
        <h1 data-v-dc66a76c="" class="delay-300 animate__animated animate__fadeIn">Ready to Collaborate With Us?</h1>
        <p data-v-dc66a76c="" class="delay-700 animate__animated animate__fadeIn">Discuss your business technology needs with the SimpleJourney team.</p>
        <div data-v-dc66a76c="" class="delay-1000 animate__animated animate__fadeIn" style="max-width: 200px;">
          <router-link data-v-86d9ff63="" data-v-dc66a76c="" to="/contact" class="link-wrapper">
            <button data-v-86d9ff63="" class="contact-btn">
              <span data-v-86d9ff63="" class="content">Let's Get Started<img data-v-86d9ff63="" class="icon" src="/arrow.png"></span>
            </button>
          </router-link>
        </div>
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