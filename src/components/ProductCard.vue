<template>
  <div data-v-4f4b14b5 class="product-card">
    <div data-v-4f4b14b5 class="image-wrapper">
      <span data-v-4f4b14b5 class="badge">{{ badge }}</span>
      <img data-v-4f4b14b5 :src="image" :alt="title" style="border-radius: 12px" />
    </div>
    <h3 data-v-4f4b14b5 class="title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    badge: {
      type: String,
      default: `Software`
    },
    image: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>