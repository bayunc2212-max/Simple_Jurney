<template>
  <section data-v-a7ed792a ref="section" :class="alignmentClass" :style="sectionStyle" v-fade-viewport>
    <div data-v-a7ed792a class="content">
      <div data-v-a7ed792a class="brand delay-500">
        <img data-v-a7ed792a :src="brandIcon" alt="brand icon" class="brand-icon" />
        <span data-v-a7ed792a class="brand-text">{{ brand }}</span>
      </div>
      <h1 data-v-a7ed792a class="delay-1000">{{ statement }}</h1>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatementSlide',
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
    }
  },
  computed: {
    alignmentClass() {
      return this.align === 'left' ? 'align-left' : 'align-center'
    },
    sectionStyle() {
      return {}
    }
  }
}
</script>