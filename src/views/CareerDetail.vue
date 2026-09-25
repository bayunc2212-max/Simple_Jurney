<template>
  <div>
    <Navbar />

    <div v-if="job" data-v-da5e90a7="" class="career-detail-page">
      <section data-v-f33d7a53="" data-v-da5e90a7="" class="hero">
        <div data-v-f33d7a53="" class="top-gradient"></div>
        <div data-v-f33d7a53="" class="overlay"></div>
        <div data-v-f33d7a53="" class="breadcrumb-wrapper">
          <div data-v-13818925="" data-v-f33d7a53="" class="bread-cumb"><a data-v-13818925="" href="/"
              style="color: inherit; text-underline-offset: 3px;">
              <p data-v-13818925="" class="primary">Home</p>
            </a><img data-v-13818925="" src="/rectangle.png" alt="SJI Logo" height="10"><a data-v-13818925=""
              href="/career" style="color: inherit; text-underline-offset: 3px;">
              <p data-v-13818925="" class="primary">Career</p>
            </a><img data-v-13818925="" src="/rectangle.png" alt="SJI Logo" height="10"><a data-v-13818925=""
              :href="'/career/' + job.position" style="color: rgb(30, 136, 255); text-underline-offset: 3px;">
              <p data-v-13818925="" class="secondary">{{ job.position }}</p>
            </a></div>
        </div>
        <div data-v-f33d7a53="" class="hero-content animate__animated animate__fadeIn">
          <h1 data-v-f33d7a53="" class="job-title">{{ job.title }}</h1><span data-v-f33d7a53=""
            class="position-badge">1 Position</span>
        </div>
      </section>

      <main data-v-da5e90a7="" class="content-container">
        <section data-v-da5e90a7="" class="main-content animate__animated animate__fadeIn">
          <div data-v-da5e90a7="" class="section-block">
            <h2 data-v-da5e90a7="" class="section-title">Description</h2>
            <p data-v-da5e90a7="" class="section-desc">{{ job.description }}</p>
          </div>
          <div data-v-da5e90a7="" class="section-block">
            <h2 data-v-da5e90a7="" class="section-title">Responsibilities</h2>
            <ol data-v-da5e90a7="" class="ordered-list">
              <li v-for="(item, i) in job.responsibilities" :key="i" data-v-da5e90a7="">{{ item }}</li>
            </ol>
          </div>
          <div data-v-da5e90a7="" class="section-block">
            <h2 data-v-da5e90a7="" class="section-title">Qualifications</h2>
            <ol data-v-da5e90a7="" class="ordered-list">
              <li v-for="(item, i) in job.qualifications" :key="i" data-v-da5e90a7="">{{ item }}</li>
            </ol>
          </div>
          <div data-v-da5e90a7="" class="section-block">
            <h2 data-v-da5e90a7="" class="section-title">Preferred</h2>
            <div data-v-da5e90a7="" class="preferred-category">
              <h3 data-v-da5e90a7="" class="category-name"></h3>
              <ol data-v-da5e90a7="" class="ordered-list">
                <li v-for="(item, k) in job.preferred" :key="k" data-v-da5e90a7="">{{ item }}</li>
              </ol>
            </div>
          </div>
        </section>
        <aside data-v-da5e90a7="" class="sidebar-wrapper animate__animated animate__fadeIn">
          <div data-v-da5e90a7="" class="glass-sidebar-card">
            <div data-v-da5e90a7="" class="sidebar-meta-item"><svg data-v-da5e90a7="" class="meta-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle data-v-da5e90a7="" cx="12" cy="12" r="10"></circle>
                <polyline data-v-da5e90a7="" points="12 6 12 12 16 14"></polyline>
              </svg><span data-v-da5e90a7="">{{ job.type }}</span></div>
            <div data-v-da5e90a7="" class="sidebar-meta-item"><svg data-v-da5e90a7="" class="meta-icon"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path data-v-da5e90a7="" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle data-v-da5e90a7="" cx="12" cy="10" r="3"></circle>
              </svg><span data-v-da5e90a7="">{{ job.location }}</span></div><a data-v-da5e90a7=""
              :href="job.applyLink" target="blank" class="apply-btn"><span data-v-da5e90a7="">Apply
                Now</span><img data-v-da5e90a7="" class="btn-arrow" src="/arrow.png" alt="arrow"></a>
          </div>
        </aside>
      </main>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import AppFooter from '../components/AppFooter.vue'
import { careerByPosition } from '../stores/careers'

export default {
  name: 'CareerDetail',
  components: {
    Navbar,
    AppFooter
  },
  computed: {
    job() {
      return careerByPosition(this.$route.params.position)
    }
  }
}
</script>