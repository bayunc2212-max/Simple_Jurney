<template>
  <div :lang="locale === 'id' ? 'id' : 'en'" class="min-h-screen overflow-x-hidden bg-[#010304] text-white">
    <Navbar />

    <main class="relative isolate min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(30,136,255,0.24),transparent_32%),radial-gradient(circle_at_85%_25%,rgba(255,255,255,0.1),transparent_25%),linear-gradient(135deg,#0a1d2f_0%,#01070e_55%,#050c14_100%)]"
      ></div>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 top-0 z-0 h-[300px] bg-[linear-gradient(#1e88ff14_0%,#01030400_100%)]"
      ></div>

      <div class="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-20 pt-[100px] sm:px-8 lg:px-16 lg:pt-[140px]">
        <nav aria-label="Breadcrumb" class="mb-6 flex items-center gap-2 text-sm text-[#d6e3ff]">
          <router-link to="/" class="underline underline-offset-4 transition hover:text-white">{{ copy.breadcrumbHome }}</router-link>
          <img src="/images/Icon/chevron-right.svg" alt="" class="h-3 w-auto" />
          <span aria-current="page" class="text-[#1e88ff]">{{ copy.breadcrumbCurrent }}</span>
        </nav>

        <header class="mb-12 max-[640px]:mb-8">
          <h1
            class="mb-3 bg-[linear-gradient(135deg,#fff_30%,#a5c7ff_100%)] bg-clip-text text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-[-1px] text-transparent drop-shadow-[0_0_18px_rgba(255,255,255,0.2)]"
          >
            {{ copy.title }}
          </h1>
          <p class="mb-6 text-sm text-[#98a2b3]">{{ copy.lastUpdated }}</p>
          <div class="flex justify-start" aria-label="Language selection">
            <div class="inline-flex gap-1 rounded-[30px] border border-[#ffffff14] bg-[#ffffff08] p-1 backdrop-blur-[8px]">
              <button
                type="button"
                :aria-pressed="locale === 'en'"
                :class="locale === 'en' ? 'bg-[#1e88ff] text-white shadow-[0_4px_12px_rgba(30,136,255,0.3)]' : 'bg-transparent text-[#98a2b3] hover:text-white'"
                class="cursor-pointer rounded-[20px] border-0 px-5 py-2 text-sm font-semibold transition duration-300"
                @click="setLocale('en')"
              >
                English
              </button>
              <button
                type="button"
                :aria-pressed="locale === 'id'"
                :class="locale === 'id' ? 'bg-[#1e88ff] text-white shadow-[0_4px_12px_rgba(30,136,255,0.3)]' : 'bg-transparent text-[#98a2b3] hover:text-white'"
                class="cursor-pointer rounded-[20px] border-0 px-5 py-2 text-sm font-semibold transition duration-300"
                @click="setLocale('id')"
              >
                Bahasa Indonesia
              </button>
            </div>
          </div>
        </header>

        <div class="grid grid-cols-[280px_minmax(0,1fr)] gap-12 max-[1024px]:grid-cols-1 max-[1024px]:gap-0">
          <aside class="sticky top-[120px] h-fit max-[1024px]:hidden">
            <nav aria-label="Privacy Policy sections" class="rounded-2xl border border-[#ffffff0d] bg-[#0a121e66] p-6 shadow-[0_0_28px_rgba(255,255,255,0.06)] backdrop-blur-[20px]">
              <h2 class="mb-4 mt-0 text-base font-semibold uppercase tracking-[1px] text-[#1e88ff]">{{ copy.sectionsLabel }}</h2>
              <ul class="m-0 flex list-none flex-col gap-3 p-0">
                <li v-for="section in copy.sections" :key="section.id">
                  <a :href="`#${section.id}`" class="block text-sm leading-[1.4] text-[#98a2b3] no-underline transition-colors duration-200 hover:text-[#1e88ff]">{{ section.navTitle || section.title }}</a>
                </li>
              </ul>
            </nav>
          </aside>

          <article class="mx-auto w-full max-w-[900px] rounded-[20px] border border-[#ffffff0a] bg-[#0a121e33] p-10 shadow-2xl shadow-black/20 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-[20px] max-[1024px]:max-w-none max-[1024px]:p-[30px] max-[640px]:p-5">
            <section
              v-for="section in copy.sections"
              :id="section.id"
              :key="`${locale}-${section.id}`"
              class="mb-10 scroll-mt-32 last:mb-0"
            >
              <h2 class="mb-4 mt-0 border-b border-[#ffffff0d] pb-2 text-[22px] font-semibold text-white max-[640px]:text-[18px]">{{ section.title }}</h2>

              <template v-for="(paragraph, paragraphIndex) in section.paragraphs" :key="`${section.id}-paragraph-${paragraphIndex}`">
                <p class="mb-4 mt-0 text-base leading-[1.7] text-[#d6e3ff] opacity-[.85] max-[640px]:text-sm">
                  <template v-if="paragraph.link">
                    <strong v-if="paragraph.lead" class="font-bold text-white/90">{{ paragraph.lead }}</strong>
                    {{ paragraph.text }}
                    <a :href="paragraph.link.href" class="text-[#1e88ff] no-underline transition duration-200 hover:underline">{{ paragraph.link.text }}</a>{{ paragraph.after }}
                  </template>
                  <template v-else>{{ paragraph.text }}</template>
                </p>
              </template>

              <ul v-if="section.items.length" class="mb-4 mt-0 list-disc pl-5">
                <li v-for="(item, itemIndex) in section.items" :key="`${section.id}-item-${itemIndex}`" class="mb-2.5 text-[15px] leading-[1.7] text-[#d6e3ff] opacity-[.85] max-[640px]:text-sm">
                  <strong v-if="item.label" class="font-bold text-white/90">{{ item.label }}</strong>{{ item.text }}
                </li>
              </ul>

              <p v-if="section.additionalParagraph" class="mb-4 mt-0 text-base leading-[1.7] text-[#d6e3ff] opacity-[.85] max-[640px]:text-sm">
                {{ section.additionalParagraph.text }}
              </p>

              <div v-if="section.contact" class="mt-5 rounded-xl border border-[#1e88ff26] bg-[#1e88ff0a] p-6 shadow-[0_0_24px_rgba(255,255,255,0.07)]">
                <p class="mb-2.5 mt-0 text-[15px] leading-[1.7] text-[#d6e3ff] opacity-[.85] last:mb-0">
                  <strong class="font-bold text-white/90">{{ section.contact.company }}</strong>
                </p>
                <p class="mb-2.5 mt-0 text-[15px] leading-[1.7] text-[#d6e3ff] opacity-[.85] last:mb-0">
                  {{ section.contact.emailLabel }}:
                  <a :href="`mailto:${section.contact.email}`" class="text-[#1e88ff] no-underline transition duration-200 hover:underline">{{ section.contact.email }}</a>
                </p>
                <p class="mb-2.5 mt-0 text-[15px] leading-[1.7] text-[#d6e3ff] opacity-[.85] last:mb-0">
                  {{ section.contact.phoneLabel }}: {{ section.contact.phone }}
                </p>
                <p class="mb-2.5 mt-0 text-[15px] leading-[1.7] text-[#d6e3ff] opacity-[.85] last:mb-0">
                  {{ section.contact.addressLabel }}: {{ section.contact.address }}
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import AppFooter from '../components/AppFooter.vue'

const translations = {
  en: {
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Privacy Policy',
    title: 'Privacy Policy',
    lastUpdated: 'Last Updated: July 7, 2026',
    sectionsLabel: 'Sections',
    sections: [
      {
        id: 'introduction',
        title: '1. Introduction',
        paragraphs: [
          {
            lead: 'Welcome to',
            text: ' PT Simple Journey We are committed to protecting your personal data and your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications and our web portal at',
            link: { href: 'https://simplejourney.co.id', text: 'https://simplejourney.co.id' },
            after: '.'
          },
          {
            text: 'By accessing or using our services, you consent to the collection, transfer, storage, disclosure, and other uses of your information as described in this Privacy Policy.'
          }
        ],
        items: []
      },
      {
        id: 'information-we-collect',
        title: '2. Information We Collect',
        paragraphs: [
          { text: 'We may collect several types of information to provide and improve our services to you:' }
        ],
        items: [
          { label: 'Personal Information:', text: ' When you register an account, log in, or contact support, we may collect your name, email address, phone number, company affiliation, and account credentials.' },
          { label: 'Location Data:', text: ' To facilitate transport tracking, driver navigation, and passenger dashboard features, our mobile applications may request permission to collect precise or approximate real-time location data from your device.' },
          { label: 'Device Information:', text: ' We collect device-specific details such as your device model, operating system version, unique device identifiers, IP address, and browser characteristics.' },
          { label: 'Usage and Log Data:', text: ' We log information about your interactions with our services, including active sessions, access times, pages viewed, and application performance crash reports.' }
        ]
      },
      {
        id: 'how-we-use',
        title: '3. How We Use Your Information',
        paragraphs: [
          { text: 'We process your data for purposes based on legitimate business interests and to fulfill our services:' }
        ],
        items: [
          { text: 'To set up, manage, and secure your user account.' },
          { text: 'To provide real-time updates, dashboard visualisations, and notifications relevant to your transport status.' },
          { text: 'To facilitate support requests, resolve technical issues, and respond to user inquiries.' },
          { text: "To improve your applications' responsiveness, performance, and overall security." },
          { text: 'To comply with legal obligations or enforce our terms of service.' }
        ]
      },
      {
        id: 'data-security',
        title: '4. Data Security and Storage',
        paragraphs: [
          { text: 'The security of your personal information is extremely important to us. We implement industry-standard technical, administrative, and physical safeguards (including database encryption and secure TLS communication channels) designed to protect your data from unauthorized access, disclosure, alteration, or loss.' },
          { text: 'We store your data on secure database systems and retain it only for as long as necessary to fulfill the services outlined in this policy, or to meet legal and regulatory requirements.' }
        ],
        items: []
      },
      {
        id: 'device-permissions',
        title: '5. Device Permissions',
        paragraphs: [
          { text: 'Depending on the specific features used in our mobile applications, the app may request access to:' }
        ],
        items: [
          { label: 'Location Services:', text: ' Essential for mapping, tracking, and locating transport routes.' },
          { label: 'Push Notifications:', text: ' Used to send alerts about trip status, schedule updates, or account safety notifications.' },
          { label: 'Network Connection:', text: ' Required to establish data synchronization with our central servers.' }
        ],
        additionalParagraph: { text: "You can disable these permissions at any time through your mobile device's settings menu, although doing so may limit your access to key application features." }
      },
      {
        id: 'third-party-services',
        title: '6. Third-Party Services',
        paragraphs: [
          { text: 'We may integrate third-party APIs or software development kits (SDKs) such as Google Play Services or Firebase SDKs for system performance monitoring and crash analytics. These third-party services operate independently and have their own respective privacy policies.' }
        ],
        items: []
      },
      {
        id: 'contact',
        title: '7. Contact Us',
        paragraphs: [
          { text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please feel free to reach out to us:' }
        ],
        items: [],
        contact: {
          company: 'PT Simple Journey',
          emailLabel: 'Email',
          email: 'info@simplejourney.co.id',
          phoneLabel: 'Phone',
          phone: '0813-1898-2939',
          addressLabel: 'Address',
          address: 'Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119'
        }
      }
    ]
  },
  id: {
    breadcrumbHome: 'Beranda',
    breadcrumbCurrent: 'Kebijakan Privasi',
    title: 'Kebijakan Privasi',
    lastUpdated: 'Terakhir diperbarui: 7 Juli 2026',
    sectionsLabel: 'Bagian',
    sections: [
      {
        id: 'introduction',
        title: '1. Pendahuluan',
        paragraphs: [
          {
            lead: 'Selamat datang di',
            text: ' PT Simple Journey. Kami berkomitmen untuk melindungi data pribadi dan privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan melindungi informasi Anda saat Anda menggunakan aplikasi seluler dan portal web kami di',
            link: { href: 'https://simplejourney.co.id', text: 'https://simplejourney.co.id' },
            after: '.'
          },
          {
            text: 'Dengan mengakses atau menggunakan layanan kami, Anda menyetujui pengumpulan, pengalihan, penyimpanan, pengungkapan, dan penggunaan informasi Anda lainnya sebagaimana dijelaskan dalam Kebijakan Privasi ini.'
          }
        ],
        items: []
      },
      {
        id: 'information-we-collect',
        title: '2. Informasi yang Kami Kumpulkan',
        paragraphs: [
          { text: 'Kami dapat mengumpulkan berbagai jenis informasi untuk menyediakan dan meningkatkan layanan kami bagi Anda:' }
        ],
        items: [
          { label: 'Informasi Pribadi:', text: ' Saat Anda mendaftar akun, masuk, atau menghubungi tim dukungan, kami dapat mengumpulkan nama, alamat email, nomor telepon, afiliasi perusahaan, dan kredensial akun Anda.' },
          { label: 'Data Lokasi:', text: ' Untuk memfasilitasi pelacakan transportasi, navigasi driver, dan fitur dasbor penumpang, aplikasi seluler kami dapat meminta izin untuk mengumpulkan data lokasi waktu nyata yang tepat atau perkiraan dari perangkat Anda.' },
          { label: 'Informasi Perangkat:', text: ' Kami mengumpulkan detail spesifik perangkat seperti model perangkat, versi sistem operasi, pengenal perangkat unik, alamat IP, dan karakteristik browser.' },
          { label: 'Data Penggunaan dan Log:', text: ' Kami mencatat informasi tentang interaksi Anda dengan layanan kami, termasuk sesi aktif, waktu akses, halaman yang dilihat, dan laporan kerusakan performa aplikasi.' }
        ]
      },
      {
        id: 'how-we-use',
        title: '3. Bagaimana Kami Menggunakan Informasi Anda',
        paragraphs: [
          { text: 'Kami memproses data Anda untuk tujuan berdasarkan kepentingan bisnis yang sah dan guna memenuhi layanan kami:' }
        ],
        items: [
          { text: 'Untuk membuat, mengelola, dan mengamankan akun pengguna Anda.' },
          { text: 'Untuk menyediakan pembaruan waktu nyata, visualisasi dasbor, dan notifikasi yang relevan dengan status transportasi Anda.' },
          { text: 'Untuk memfasilitasi permintaan dukungan, menyelesaikan masalah teknis, dan menjawab pertanyaan pengguna.' },
          { text: 'Untuk meningkatkan responsivitas, performa, dan keamanan keseluruhan aplikasi Anda.' },
          { text: 'Untuk mematuhi kewajiban hukum atau menegakkan ketentuan layanan kami.' }
        ]
      },
      {
        id: 'data-security',
        title: '4. Keamanan dan Penyimpanan Data',
        paragraphs: [
          { text: 'Keamanan informasi pribadi Anda sangat penting bagi kami. Kami menerapkan langkah-langkah teknis, administratif, dan fisik sesuai standar industri (termasuk enkripsi basis data dan kanal komunikasi TLS yang aman) yang dirancang untuk melindungi data Anda dari akses, pengungkapan, perubahan, atau kehilangan yang tidak sah.' },
          { text: 'Kami menyimpan data Anda pada sistem basis data yang aman dan menyimpannya hanya selama diperlukan untuk memenuhi layanan yang dijelaskan dalam kebijakan ini, atau untuk memenuhi persyaratan hukum dan regulasi.' }
        ],
        items: []
      },
      {
        id: 'device-permissions',
        title: '5. Izin Perangkat',
        paragraphs: [
          { text: ' Tergantung pada fitur tertentu yang digunakan dalam aplikasi seluler kami, aplikasi ini dapat meminta akses ke:' }
        ],
        items: [
          { label: 'Lokasi:', text: ' Penting untuk memetakan, melacak, dan menemukan rute transportasi.' },
          { label: 'Notifikasi Push:', text: ' Digunakan untuk mengirim peringatan tentang status perjalanan, pembaruan jadwal, atau notifikasi keamanan akun.' },
          { label: 'Koneksi Jaringan:', text: ' Diperlukan untuk membangun sinkronisasi data dengan server pusat kami.' }
        ],
        additionalParagraph: { text: 'Anda dapat menonaktifkan izin ini kapan saja melalui menu pengaturan perangkat seluler Anda, meskipun hal tersebut dapat membatasi akses Anda ke fitur aplikasi penting.' }
      },
      {
        id: 'third-party-services',
        title: '6. Layanan Pihak Ketiga',
        paragraphs: [
          { text: 'Kami mungkin mengintegrasikan API pihak ketiga atau software development kit (SDK) seperti Google Play Services atau Firebase SDK untuk pemantauan performa sistem dan analitik kerusakan. Layanan pihak ketiga ini beroperasi secara independen dan memiliki kebijakan privasi masing-masing.' }
        ],
        items: []
      },
      {
        id: 'contact',
        title: '7. Hubungi Kami',
        paragraphs: [
          { text: 'Jika Anda memiliki pertanyaan, kekhawatiran, atau permintaan terkait Kebijakan Privasi ini atau praktik data kami, silakan hubungi kami:' }
        ],
        items: [],
        contact: {
          company: 'PT Simple Journey',
          emailLabel: 'Email',
          email: 'info@simplejourney.co.id',
          phoneLabel: 'Telepon',
          phone: '0813-1898-2939',
          addressLabel: 'Alamat',
          address: 'Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi, Kec. Tangerang, Kota Tangerang, Banten 15119'
        }
      }
    ]
  }
}

export default {
  name: 'PrivacyPolicy',
  components: {
    Navbar,
    AppFooter
  },
  data() {
    return {
      locale: 'en'
    }
  },
  computed: {
    copy() {
      return translations[this.locale]
    }
  },
  methods: {
    setLocale(locale) {
      this.locale = locale
    }
  }
}
</script>
