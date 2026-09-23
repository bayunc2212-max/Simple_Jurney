<template>
  <MainStatement data-v-c7d507af>
    <template #default="{ index }">
      <div v-if="index === 0" data-v-c7d507af class="panel" style="text-align: center">
        <StatementSlide data-v-c7d507af />
      </div>
      <div v-else-if="index === 1" data-v-c7d507af class="panel">
        <WhyChooseUsDesktop data-v-c7d507af :execution="index === 1" />
      </div>
    </template>
  </MainStatement>
</template>

<script>
import MainStatement from './MainStatement.vue'
import StatementSlide from './StatementSlide.vue'
import WhyChooseUsDesktop from './WhyChooseUsDesktop.vue'

export default {
  name: 'ParentOthers',
  components: {
    MainStatement,
    StatementSlide,
    WhyChooseUsDesktop
  }
}
</script>