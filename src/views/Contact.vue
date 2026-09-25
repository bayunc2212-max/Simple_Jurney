<template>
  <div class="min-h-screen overflow-x-hidden bg-[#01070e] text-white">
    <Navbar />

    <main class="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#0b1b2a] via-[#01070e] to-[#050c14]"
      ></div>

      <div class="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-24 pt-32 sm:px-8 lg:px-16 lg:pb-32 lg:pt-40">
        <nav aria-label="Breadcrumb" class="mb-12 flex items-center gap-3 text-sm">
          <router-link to="/" class="text-white/80 transition hover:text-white">
            Home
          </router-link>
          <img src="/rectangle.png" alt="" class="h-2.5 w-auto" />
          <router-link to="/contact" class="text-[#6cb6ff]">
            Contact
          </router-link>
        </nav>

        <section class="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <div>
            <p class="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#6cb6ff]">
              Simple Journey
            </p>
            <h1 class="max-w-3xl text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let’s Discuss Your Digital Transformation Needs
            </h1>
          </div>
          <p class="max-w-xl text-base leading-8 text-white/75 lg:pb-2">
            Connect with our team to explore tailored technology solutions that align with your business objectives.
          </p>
        </section>

        <section class="mt-20 lg:mt-28" aria-labelledby="office-heading">
          <div class="mb-8 flex items-center gap-3">
            <img src="/icon_diamond.png" alt="" class="h-6 w-6" />
            <h2 id="office-heading" class="text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Our Office
            </h2>
          </div>

          <div class="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div class="grid gap-4">
              <article class="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="m3 7 9 6 9-6"></path>
                  </svg>
                </div>
                <div class="min-w-0">
                  <p class="text-sm text-white/60">Email</p>
                  <a
                    href="mailto:info@simplejourney.co.id"
                    class="mt-1 block break-all text-lg font-semibold text-white transition hover:text-[#6cb6ff]"
                  >
                    info@simplejourney.co.id
                  </a>
                </div>
              </article>

              <article class="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M6.5 3.5 9 3l2 5-2.5 1.5a14 14 0 0 0 6 6L16 13l5 2-.5 2.5a3 3 0 0 1-3.5 2.5C9.7 19.3 4.7 14.3 4 7A3 3 0 0 1 6.5 3.5Z"></path>
                  </svg>
                </div>
                <div class="min-w-0">
                  <p class="text-sm text-white/60">Phone</p>
                  <a
                    href="tel:+6281318982939"
                    class="mt-1 block text-lg font-semibold text-white transition hover:text-[#6cb6ff]"
                  >
                    081318982939
                  </a>
                </div>
              </article>

              <article class="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="2.5"></circle>
                  </svg>
                </div>
                <div class="min-w-0">
                  <p class="text-sm text-white/60">Address</p>
                  <p class="mt-1 text-base leading-7 text-white">
                    Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119
                  </p>
                </div>
              </article>
            </div>

            <form
              class="mx-auto w-full max-w-[560px] rounded-2xl border border-white/20 bg-white/[0.05] p-6 shadow-2xl shadow-black/20 backdrop-blur-md sm:p-8 max-[640px]:max-w-none"
              @submit.prevent="submitForm"
            >
              <div class="grid gap-5 sm:grid-cols-2">
                <div class="sm:col-span-2">
                  <label for="contact-name" class="mb-2 block text-sm font-medium text-white/80">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    v-model="form.name"
                    name="name"
                    type="text"
                    autocomplete="name"
                    placeholder="Your name"
                    required
                    class="w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#6cb6ff]"
                  />
                </div>

                <div>
                  <label for="contact-email" class="mb-2 block text-sm font-medium text-white/80">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    placeholder="you@example.com"
                    required
                    class="w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#6cb6ff]"
                  />
                </div>

                <div>
                  <label for="contact-phone" class="mb-2 block text-sm font-medium text-white/80">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    v-model="form.phone"
                    name="phone"
                    type="tel"
                    autocomplete="tel"
                    inputmode="numeric"
                    placeholder="08xxxxxxxxxx"
                    minlength="8"
                    maxlength="15"
                    pattern="[0-9]+"
                    required
                    class="w-full border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#6cb6ff]"
                  />
                </div>

                <div class="sm:col-span-2">
                  <label for="contact-message" class="mb-2 block text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    v-model="form.message"
                    name="message"
                    rows="5"
                    placeholder="Tell us how we can help"
                    required
                    class="min-h-32 w-full resize-y border-0 border-b border-white/25 bg-transparent px-0 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#6cb6ff]"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                class="mt-8 w-full rounded-full bg-gradient-to-r from-[#1e88ff] to-[#1466a8] px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1e88ff]/30 focus:outline-none focus:ring-2 focus:ring-[#6cb6ff] focus:ring-offset-2 focus:ring-offset-[#01070e]"
              >
                Submit
              </button>

              <p
                v-if="submitted"
                role="status"
                class="mt-4 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-center text-sm text-emerald-200"
              >
                Thank you. Your message has been recorded.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import AppFooter from '../components/AppFooter.vue'

export default {
  name: 'Contact',
  components: {
    Navbar,
    AppFooter
  },
  data() {
    return {
      submitted: false,
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.submitted = true
    }
  }
}
</script>
