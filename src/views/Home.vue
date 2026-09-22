<template>
  <div>
    <HeroSection />
    <div class="show-mobile">
      <HeroStatement>
        <Statement />
      </HeroStatement>
      <WhyChooseUsMobile />
    </div>
    <div class="show-desktop">
      <ParentOthers />
    </div>
    <ServicesSection />
    <ProductsSection
      subtitle="OUR SOLUTIONS"
      heading="Products & Services"
      description="We deliver enterprise-grade solutions designed to support your digital transformation journey."
      :products="products"
      show-more
    />
    <HeroCtaSection />
    <AppFooter />
  </div>
</template>

<script>
import { useProductStore } from '../stores/products'
import HeroSection from '../components/HeroSection.vue'
import HeroStatement from '../components/HeroStatement.vue'
import Statement from '../components/Statement.vue'
import WhyChooseUsMobile from '../components/WhyChooseUsMobile.vue'
import ParentOthers from '../components/ParentOthers.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProductsSection from '../components/ProductsSection.vue'
import HeroCtaSection from '../components/HeroCtaSection.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    HeroStatement,
    Statement,
    WhyChooseUsMobile,
    ParentOthers,
    ServicesSection,
    ProductsSection,
    HeroCtaSection,
    AppFooter
  },
  created() {
    this.productState = useProductStore()
  },
  computed: {
    products() {
      return this.productState.products
    }
  }
}
</script>