<template>
    <div>
        <Navbar />
        <section data-v-119aa3bd="" class="hero">
            <div data-v-119aa3bd="" class="top-gradient"></div>
            <div data-v-119aa3bd="" class="overlay"></div>
            <div data-v-119aa3bd="" class="absolute-bread-cumb">
                <div data-v-13818925="" data-v-119aa3bd="" class="bread-cumb"><a data-v-13818925="" href="/"
                        style="color: inherit; text-underline-offset: 3px;">
                        <p data-v-13818925="" class="primary">Home</p>
                    </a><img data-v-13818925="" src="/rectangle.png" alt="SJI Logo" height="10"><a data-v-13818925=""
                        href="/career" style="color: rgb(30, 136, 255); text-underline-offset: 3px;">
                        <p data-v-13818925="" class="secondary">Career</p>
                    </a></div>
            </div>
            <div data-v-119aa3bd="" class="hero-content">
                <div data-v-119aa3bd="" class="left delay-300 animate__animated animate__fadeIn">
                    <div data-v-119aa3bd="">
                        <h1 data-v-119aa3bd="">Build Your Future with Simple Journey</h1><span data-v-119aa3bd="">Join
                            our team and grow your career while contributing to meaningful technology solutions.</span>
                    </div>
                    <div data-v-119aa3bd="" class="btn-container"><a data-v-30f6555d="" data-v-119aa3bd=""
                            href="#available-positions" class="link-wrapper"><button data-v-30f6555d=""
                                class="btn"><span data-v-30f6555d="" class="content">See Career</span></button></a>
                    </div>
                </div>
            </div>
        </section>

        <section data-v-604ec286="" class="products-section">
            <div data-v-604ec286="" class="header">
                <div data-v-604ec286="" class="overlay"></div>
                <div data-v-604ec286="" class="title-width">
                    <section data-v-02e88d9d="" data-v-604ec286="" class="align-left" style="min-height: auto;">
                        <div data-v-02e88d9d="" class="content">
                            <div data-v-02e88d9d="" class="brand delay-300 animate__animated animate__fadeIn"><img
                                    data-v-02e88d9d="" src="/icon_diamond.png" alt="brand icon"
                                    class="brand-icon"><span data-v-02e88d9d="" class="brand-text">WHY
                                    JOIN US</span></div>
                            <h1 data-v-02e88d9d="" class="delay-1000 animate__animated animate__fadeIn">Build Your
                                Career. Make an Impact</h1>
                        </div>
                    </section>
                </div>
                <div data-v-604ec286="" class="info-width">
                    <p data-v-604ec286="" class="delay-1000 animate__animated animate__fadeIn">At SimpleJourney, we
                        believe that great work starts with people who are given the opportunity to learn, grow, and
                        take on meaningful challenges. We foster a collaborative environment where every individual can
                        develop their skills while contributing to real-world technology solutions.</p>
                </div>
            </div>
            <div data-v-604ec286="" class="image-gallery">
                <div data-v-604ec286="" class="gallery-item item-left animate__animated animate__fadeIn"><img
                        data-v-604ec286="" src="/left.webp" alt="Team Collaboration" class="gallery-img"></div>
                <div data-v-604ec286="" class="gallery-item item-right animate__animated animate__fadeIn"><img
                        data-v-604ec286="" src="/right.webp" alt="Career Focus" class="gallery-img"></div>
            </div>
        </section>
        <section data-v-2c97e4d0="" id="available-positions" class="positions-section">
            <div data-v-2c97e4d0="" class="header">
                <div data-v-2c97e4d0="" class="brand animate__animated animate__fadeIn"><img data-v-2c97e4d0=""
                        src="/icon_diamond.png" alt="brand icon" class="brand-icon"><span data-v-2c97e4d0=""
                        class="brand-text">AVAILABLE POSITIONS</span></div>
                <h1 data-v-2c97e4d0="" class="title animate__animated animate__fadeIn"> Find Your Opportunity </h1>
                <p data-v-2c97e4d0="" class="subtitle animate__animated animate__fadeIn"> Explore our current openings
                    and find a role that matches your skills and aspirations. </p>
            </div>
            <div data-v-2c97e4d0="" class="positions-list">
                <a v-for="job in careers" :key="job.position" data-v-2c97e4d0="" :href="'/career/' + job.position"
                    class="position-card animate__animated animate__fadeIn">
                    <div data-v-2c97e4d0="" class="job-info">
                        <h3 data-v-2c97e4d0="" class="job-title">{{ job.title }}</h3>
                        <div data-v-2c97e4d0="" class="job-meta"><span data-v-2c97e4d0="" class="meta-item"><svg
                                    data-v-2c97e4d0="" class="meta-icon" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <circle data-v-2c97e4d0="" cx="12" cy="12" r="10"></circle>
                                    <polyline data-v-2c97e4d0="" points="12 6 12 12 16 14"></polyline>
                                </svg> {{ job.type }}</span><span data-v-2c97e4d0="" class="meta-item"><svg
                                    data-v-2c97e4d0="" class="meta-icon" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2">
                                    <path data-v-2c97e4d0="" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle data-v-2c97e4d0="" cx="12" cy="10" r="3"></circle>
                                </svg> {{ job.location }}</span></div>
                    </div>
                    <div data-v-2c97e4d0="" class="action-btn"><img data-v-2c97e4d0="" class="icon" src="/arrow.png"
                            alt="arrow icon"></div>
                </a>
            </div>
        </section>
        <CollaborateSection />

        <AppFooter />
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import CollaborateSection from '../components/CollaborateSection.vue'
import AppFooter from '../components/AppFooter.vue'
import { careers } from '../stores/careers'

export default {
    name: 'Career',
    components: {
        Navbar,
        CollaborateSection,
        AppFooter
    },
    data() {
        return {
            careers
        }
    }
}
</script>