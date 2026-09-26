<template>
  <div class="fixed right-5 bottom-5 z-[10000] flex flex-col items-center">
    <TransitionGroup
      tag="div"
      class="absolute right-0 bottom-[68px] flex flex-col items-center gap-2"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-75"
      leave-active-class="transition-all duration-200 ease-in"
      leave-to-class="opacity-0 scale-75"
    >
      <component
        :is="item.href ? 'a' : 'button'"
        v-for="item in visibleItems"
        :key="item.label"
        :href="item.href || undefined"
        :type="item.href ? undefined : 'button'"
        :aria-label="item.label"
        :target="item.target"
        :rel="item.rel"
        class="flex h-[60px] w-[60px] shrink-0 cursor-pointer items-center justify-center rounded-full text-white shadow-[0_16px_24px_0_rgba(73,104,126,0.16)] transition-transform duration-200 hover:scale-110 focus:outline-none"
        :style="{ backgroundColor: item.color }"
        @click="handleClick(item)"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-7 w-7"
          aria-hidden="true"
        >
          <path :d="item.path" />
        </svg>
      </component>
    </TransitionGroup>

    <button
      type="button"
      class="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full text-white shadow-[0_16px_24px_0_rgba(73,104,126,0.16)] transition-transform duration-200 hover:scale-105 focus:outline-none"
      style="background-color: #0446de"
      :aria-label="isOpen ? 'Close contact options' : 'Open contact options'"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <svg
        v-if="!isOpen"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-7 w-7"
        aria-hidden="true"
      >
        <path
          d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"
        />
      </svg>
      <svg
        v-else
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        class="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  </div>
</template>

<script>
const CHATWAY_FALLBACK_URL = 'https://widget.chatway.app/?widgetId=m5v5irlux4'

export default {
  name: 'ChatWidget',
  data() {
    return {
      isOpen: false,
      items: [
        {
          label: 'Chatway',
          color: '#0446DE',
          path: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z',
          href: null,
          target: null,
          rel: null
        },
        {
          label: 'Phone',
          color: '#03E78B',
          path: 'M6.5 3.5 9 3l2 5-2.5 1.5a14 14 0 0 0 6 6L16 13l5 2-.5 2.5a3 3 0 0 1-3.5 2.5C9.7 19.3 4.7 14.3 4 7A3 3 0 0 1 6.5 3.5Z',
          href: 'tel:+6281318982939',
          target: null,
          rel: null
        },
        {
          label: 'Email',
          color: '#FF485F',
          path: 'M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM3 7l9 6 9-6',
          href: 'mailto:info@simplejourney.co.id',
          target: null,
          rel: null
        },
        {
          label: 'SMS',
          color: '#FF549C',
          path: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM8 9h8M8 13h5',
          href: 'sms:+6281318982939',
          target: null,
          rel: null
        }
      ]
    }
  },
  computed: {
    visibleItems() {
      return this.isOpen ? this.items : []
    }
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown)
  },  beforeUnmount() {
    window.removeEventListener('keydown', this.onKeydown)
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    close() {
      this.isOpen = false
    },
    onKeydown(event) {
      if (event.key === 'Escape' && this.isOpen) this.close()
    },
    handleClick(item) {
      if (item.href) {
        this.close()
        return
      }
      this.openChatway()
      this.close()
    },
    openChatway() {
      if (window.$chatway && typeof window.$chatway.openChatwayWidget === 'function') {
        window.$chatway.openChatwayWidget()
        return
      }
      window.open(CHATWAY_FALLBACK_URL, '_blank', 'noopener')
    }
  }
}
</script>
