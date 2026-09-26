<template>
  <div data-v-aac37128 class="container-wrapper">
    <nav data-v-aac37128 class="navbar" :class="{ scrolled: isScrolled }">
      <div data-v-aac37128 class="logo">
        <img data-v-aac37128 src="/sji_icon.png" alt="SJI Logo" height="50" />
      </div>
      <div data-v-aac37128 class="right">
        <ul data-v-aac37128 class="menu desktop">
          <li data-v-aac37128 v-for="menu in menus" :key="menu.label">
            <router-link data-v-aac37128 :to="menu.link" class="menu-link" :class="{ active: isActive(menu.link) }">
              {{ menu.label }}
            </router-link>
          </li>
          <ContactButton data-v-aac37128 class="desktop" />
        </ul>
        <ContactButton data-v-aac37128 class="mobile-contact" />
        <button
          data-v-aac37128
          class="hamburger"
          aria-label="Toggle navigation"
          :aria-expanded="isOpen"
          @click="toggleMenu"
        >
          <span data-v-aac37128 :class="{ open: isOpen }"></span>
          <span data-v-aac37128 :class="{ open: isOpen }"></span>
          <span data-v-aac37128 :class="{ open: isOpen }"></span>
          <span data-v-aac37128 :class="{ open: isOpen }"></span>
        </button>
      </div>
    </nav>
  </div>
  <transition
    enter-active-class="animate__animated animate__fadeInRight"
    leave-active-class="animate__animated animate__fadeOutRight"
  >
    <div data-v-aac37128 v-if="isOpen" class="mobile-menu">
      <button
        data-v-aac37128
        class="hamburger position-close"
        aria-label="Close navigation"
        @click="toggleMenu"
      >
        <span data-v-aac37128 :class="{ open: isOpen }"></span>
        <span data-v-aac37128 :class="{ open: isOpen }"></span>
        <span data-v-aac37128 :class="{ open: isOpen }"></span>
        <span data-v-aac37128 :class="{ open: isOpen }"></span>
      </button>
      <div
        data-v-aac37128
        style="
          display: flex;
          position: absolute;
          top: 80px;
          flex-direction: column;
          align-items: center;
          gap: 2.3rem;
        "
      >
        <router-link
          data-v-aac37128
          v-for="menu in menus"
          :key="menu.label"
          :to="menu.link"
          :class="{ active: isActive(menu.link) }"
          @click="isOpen = false"
        >
          {{ menu.label }}
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
import ContactButton from './ContactButton.vue'

export default {
  name: 'Navbar',
  components: { ContactButton },
  data() {
    return {
      menus: [
        { label: 'Home', link: '/' },
        { label: 'Services', link: '/services' },
        { label: 'Products', link: '/products' },
        { label: 'About', link: '/about' },
        { label: 'Career', link: '/career' }
      ],
      isOpen: false,
      isScrolled: false
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    document.body.style.overflow = ''
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    isActive(link) {
      const path = this.$route.path
      return !!(link === '/' && path === '/' || link !== '/' && path.startsWith(link))
    }
  }
}
</script>