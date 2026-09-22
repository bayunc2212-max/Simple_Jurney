<template>
  <footer data-v-468a0494 class="footer">
    <div data-v-468a0494 class="top">
      <div data-v-468a0494 class="brand">
        <div data-v-468a0494 class="logo">
          <img data-v-468a0494 src="/sji.svg" alt="Simple Journey" />
          <span data-v-468a0494 class="text">Simple Journey</span>
        </div>
        <div data-v-468a0494 class="set-flex">
          <p data-v-468a0494 class="address">{{ address }}</p>
        </div>
      </div>
    </div>
    <div data-v-468a0494 class="divider"></div>
    <div data-v-468a0494 class="bottom">
      <span data-v-468a0494 class="copyright">
        © {{ year }} {{ company }}. All Rights Reserved. |
        <a data-v-468a0494 href="/privacy-policy" class="footer-link">Privacy Policy</a>
      </span>
      <div data-v-468a0494 class="socials">
        <a
          data-v-468a0494
          v-for="social in socials"
          :key="social.name"
          :href="social.link"
          target="_blank"
          rel="noopener"
        >
          <img data-v-468a0494 :src="social.icon" :alt="social.name" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    logo: {
      type: String,
      default: '/sji.svg'
    },
    company: {
      type: String,
      default: 'PT Simple Journey'
    },
    address: {
      type: String,
      default:
        'Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119'
    },
    menus: {
      type: Array,
      default: () => [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Services', link: '/services' },
        { label: 'Contact', link: '/contact' }
      ]
    },
    socials: {
      type: Array,
      default: () => [
        {
          name: 'Facebook',
          link: 'https://facebook.com',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg'
        },
        {
          name: 'X',
          link: 'https://twitter.com',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg'
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg'
        },
        {
          name: 'Whatsapp',
          link: 'https://whatsapp.com',
          icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg'
        }
      ]
    }
  },
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>