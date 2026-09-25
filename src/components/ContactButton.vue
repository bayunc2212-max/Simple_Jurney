<template>
  <router-link data-v-86d9ff63 to="/contact" class="link-wrapper">
    <button data-v-86d9ff63 class="contact-btn">
      <span data-v-86d9ff63 class="content">
        <slot>Contact Us</slot>
        <img data-v-86d9ff63 class="icon" src="/arrow.png" alt="" />
      </span>
    </button>
  </router-link>
</template>

<script>
export default {
  name: 'ContactButton'
}
</script>