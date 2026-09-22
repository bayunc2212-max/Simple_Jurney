<template>
  <div data-v-9d313a25 class="feature-card">
    <div data-v-9d313a25 class="feature-header">
      <div data-v-9d313a25 class="feature-number">{{ number }}</div>
      <h3 data-v-9d313a25 class="feature-title">{{ title }}</h3>
    </div>
    <div data-v-9d313a25 class="divider"></div>
    <p data-v-9d313a25 class="feature-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    number: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    animate: {
      type: Boolean
    },
    status: {
      type: Boolean
    },
    delay: {
      type: Number
    }
  }
}
</script>