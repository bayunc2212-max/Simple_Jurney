<template>
  <div>
    <Navbar />

    <div data-v-da5e90a7="" v-if="position === 'QA'" class="career-detail-page"><section data-v-f33d7a53="" data-v-da5e90a7="" class="hero"><div data-v-f33d7a53="" class="top-gradient"></div><div data-v-f33d7a53="" class="overlay"></div><div data-v-f33d7a53="" class="breadcrumb-wrapper"><div data-v-13818925="" data-v-f33d7a53="" class="bread-cumb"><a data-v-13818925="" href="/" style="color: inherit; text-underline-offset: 3px;"><p data-v-13818925="" class="primary">Home</p></a><img data-v-13818925="" src="/rectangle.png" alt="SJI Logo" height="10"><a data-v-13818925="" href="/career" style="color: inherit; text-underline-offset: 3px;"><p data-v-13818925="" class="primary">Career</p></a><img data-v-13818925="" src="/rectangle.png" alt="SJI Logo" height="10"><a data-v-13818925="" href="qa" style="color: rgb(30, 136, 255); text-underline-offset: 3px;"><p data-v-13818925="" class="secondary">QA</p></a></div></div><div data-v-f33d7a53="" class="hero-content animate__animated animate__fadeIn" style="opacity: 0; visibility: visible;"><h1 data-v-f33d7a53="" class="job-title">Shift Engineer - QA</h1><span data-v-f33d7a53="" class="position-badge">1 Position</span></div></section><main data-v-da5e90a7="" class="content-container"><section data-v-da5e90a7="" class="main-content animate__animated animate__fadeIn" style="opacity: 0; visibility: visible;"><div data-v-da5e90a7="" class="section-block"><h2 data-v-da5e90a7="" class="section-title">Description</h2><p data-v-da5e90a7="" class="section-desc">PT Simple Journey Indonesia is seeking a Shift Engineer responsible for maintaining operational stability during shift hours.</p></div><div data-v-da5e90a7="" class="section-block"><h2 data-v-da5e90a7="" class="section-title">Responsibilities</h2><ol data-v-da5e90a7="" class="ordered-list"><li data-v-da5e90a7="">Monitor and maintain system/production operations during shifts</li><li data-v-da5e90a7="">Handle troubleshooting and escalate technical issues quickly and accurately</li><li data-v-da5e90a7="">Prepare shift handover reports on a regular basis</li><li data-v-da5e90a7="">Coordinate with other teams to ensure smooth 24/7 operations</li><li data-v-da5e90a7="">Prepare technical documentation (SOPs, test cases/checklists, shift logs, bug reports) in a clear and structured manner</li></ol></div><div data-v-da5e90a7="" class="section-block"><h2 data-v-da5e90a7="" class="section-title">Qualifications</h2><ol data-v-da5e90a7="" class="ordered-list"><li data-v-da5e90a7="">Willing to work shifts (morning/afternoon/night)</li><li data-v-da5e90a7="">Understands the basics of system, network, and application troubleshooting</li><li data-v-da5e90a7="">Able to write technical documentation clearly and systematically</li></ol></div><div data-v-da5e90a7="" class="section-block"><h2 data-v-da5e90a7="" class="section-title">Preferred</h2><div data-v-da5e90a7="" class="preferred-category"><h3 data-v-da5e90a7="" class="category-name"></h3><ol data-v-da5e90a7="" class="ordered-list"><li data-v-da5e90a7="">Familiar with the concepts of manual testing and regression testing</li><li data-v-da5e90a7="">Experience using bug-tracking tools (Jira, Trello, etc.)</li><li data-v-da5e90a7="">Basic understanding of QA and testing processes</li><li data-v-da5e90a7="">Able to perform quality checks (basic/manual testing) on system changes or releases during a shift</li></ol></div></div></section><aside data-v-da5e90a7="" class="sidebar-wrapper animate__animated animate__fadeIn" style="opacity: 0; visibility: visible;"><div data-v-da5e90a7="" class="glass-sidebar-card"><div data-v-da5e90a7="" class="sidebar-meta-item"><svg data-v-da5e90a7="" class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle data-v-da5e90a7="" cx="12" cy="12" r="10"></circle><polyline data-v-da5e90a7="" points="12 6 12 12 16 14"></polyline></svg><span data-v-da5e90a7="">Full Time</span></div><div data-v-da5e90a7="" class="sidebar-meta-item"><svg data-v-da5e90a7="" class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path data-v-da5e90a7="" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle data-v-da5e90a7="" cx="12" cy="10" r="3"></circle></svg><span data-v-da5e90a7="">Onsite - Tangerang</span></div><a data-v-da5e90a7="" href="https://forms.gle/GgyGfahbgpE2rkn5A" target="blank" class="apply-btn"><span data-v-da5e90a7="">Apply Now</span><img data-v-da5e90a7="" class="btn-arrow" src="/arrow.png" alt="arrow"></a></div></aside></main></div>
    <template v-else-if="position === 'Designer'">
      <!-- TEMPELKAN KONTEN DESIGNER DI SINI -->
    </template>

    <template v-else-if="position === 'Devops'">
      <!-- TEMPELKAN KONTEN DEVOPS DI SINI -->
    </template>

    <template v-else-if="position === 'FE'">
      <!-- TEMPELKAN KONTEN FE DI SINI -->
    </template>

    <template v-else-if="position === 'Security Engineer'">
      <!-- TEMPELKAN KONTEN SECURITY ENGINEER DI SINI -->
    </template>

    <AppFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'CareerDetail',
  components: {
    Navbar,
    AppFooter
  },
  computed: {
    position() {
      return this.$route.params.position
    }
  }
}
</script>