# Simple Journey

Website perusahaan **Simple Journey**, sebuah perusahaan teknologi dan solusi IT. Dibangun
sebagai aplikasi satu halaman yang mencakup halaman home, services, products, careers, about,
dan contact, ditambah widget chat melayang yang menyediakan kanal kontak langsung
(live chat, telepon, email, SMS).

- Responsif penuh mulai ponsel 360px hingga desktop lebar
- Animasi berbasis scroll dan section terkunci (pin) di halaman home

## Teknologi yang Digunakan

| Teknologi | Versi | Kegunaan |
| --- | --- | --- |
| [Vue](https://vuejs.org/) | 3.5.43 | Framework antarmuka |
| [Vue Router](https://router.vuejs.org/) | 5.3.1 | Routing antar halaman |
| [Pinia](https://pinia.vuejs.org/) | 4.0.3 | Manajemen state (produk, karier, indeks animasi) |
| [GSAP](https://gsap.com/) | 3.15.0 | Animasi scroll dan timeline |
| [Vite](https://vite.dev/) | 8.3.0 | Dev server dan bundler |
| [Tailwind CSS](https://tailwindcss.com/) | 4.3.3 | CSS berbasis utility |
| [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue) | 6.0.9 | Mengompilasi komponen single-file Vue |

Versi di atas adalah versi yang benar-benar terpasang di repository ini.

## Kebutuhan Sistem

- **Node.js** `^20.19.0` atau `>=22.12.0` — dibutuhkan oleh Vite 8. Terverifikasi berjalan di Node 24.18.1.
- **npm** 10 atau lebih baru (sudah termasuk dalam Node.js).

Cek versi yang terpasang:

```bash
node -v
npm -v
```

## Cara Instalasi

```bash
git clone <repository-url>
cd simple-jurney
npm install
```

## Cara Menjalankan Proyek

Jalankan development server:

```bash
npm run dev
```

Situs tersedia di **http://localhost:5173** dengan *hot module replacement* — setiap perubahan
pada file `.vue`, `.js`, dan `.css` langsung terlihat di browser tanpa perlu memuat ulang.

Dev server juga terbuka di jaringan lokal Anda (`server.host: true` di `vite.config.js`).
Artinya Anda bisa membuka situs dari ponsel yang terhubung ke Wi-Fi yang sama untuk mengecek
tampilan mobile, sekaligus memakai alamat LAN yang tercetak di terminal.

### Daftar Perintah (Scripts)

| Perintah | Perintah yang dijalankan | Keterangan |
| --- | --- | --- |
| `npm run dev` | `vite` | Menjalankan development server dengan hot module replacement |
| `npm run build` | `vite build` | Membuat bundel produksi ke folder `dist/` |
| `npm run preview` | `vite preview` | Menjalankan hasil build produksi secara lokal untuk mengecek |

## Struktur Proyek

```
simple-jurney/
├── index.html                  # HTML awal, memuat main.js dan script CDN eksternal
├── package.json                # Daftar dependency dan perintah
├── vite.config.js              # Konfigurasi Vite: plugin Vue + Tailwind, host dev server
├── public/                     # Aset statis disajikan di root (33 file)
│   ├── sji.svg                 # Favicon
│   ├── logo.png, arrow.png, rectangle.png
│   └── *.webp, *.jpg, *.webm   # Latar hero, gambar produk, video
└── src/
    ├── main.js                 # Bootstrap aplikasi dan urutan import CSS global
    ├── App.vue                 # Komponen root, memuat RouterView dan ChatWidget
    ├── assets/css/
    │   ├── tailwind.css        # Entry point Tailwind (theme + utilities)
    │   └── index-ffUjCuH-.css  # Stylesheet hasil build asli yang sudah dikirim
    ├── components/             # UI yang bisa dipakai ulang, dipasang di tiap view
    │   ├── Navbar.vue
    │   ├── AppFooter.vue
    │   ├── ChatWidget.vue      # Tombol kontak melayang dan tumpukan kanal
    │   ├── ContactButton.vue
    │   ├── CollaborateSection.vue
    │   ├── ProductsSection.vue
    │   ├── OtherProducts.vue
    │   ├── ProductCard.vue
    │   ├── ProductDetailContent.vue
    │   └── Statement.vue
    ├── directives/
    │   └── index.js            # v-fade-viewport dan v-fade-down-viewport
    ├── router/
    │   └── index.js            # Daftar route
    ├── stores/                 # Store Pinia
    │   ├── products.js         # Katalog produk (9 item)
    │   ├── careers.js          # Lowongan pekerjaan (5 item)
    │   └── animate.js          # State animasi bersama
    ├── styles/                 # Stylesheet tingkat proyek
    │   ├── responsive.css      # Override responsif
    │   └── fixes.css           # Perbaikan kecil yang terarah
    └── views/                  # Satu file untuk setiap halaman
        ├── Home.vue
        ├── Services.vue
        ├── Products.vue
        ├── ProductDetail.vue
        ├── About.vue
        ├── Career.vue
        ├── CareerDetail.vue
        ├── Contact.vue
        ├── PrivacyPolicy.vue
        ├── NotFound.vue
        └── PlaceholderPage.vue
```

## Daftar Route

Semua route didefinisikan di `src/router/index.js`.

| Path | Nama | View |
| --- | --- | --- |
| `/` | `Home` | `views/Home.vue` |
| `/services` | `Services` | `views/Services.vue` |
| `/products` | `Products` | `views/Products.vue` |
| `/products/:name` | `ProductDetail` | `views/ProductDetail.vue` |
| `/about` | `About` | `views/About.vue` |
| `/career` | `Career` | `views/Career.vue` |
| `/career/:position` | `CareerDetail` | `views/CareerDetail.vue` |
| `/contact` | `Contact` | `views/Contact.vue` |
| `/privacy-policy` | `PrivacyPolicy` | `views/PrivacyPolicy.vue` |
| `/:pathMatch(.*)*` | `NotFound` | `views/NotFound.vue` |

## Build Produksi

Membuat bundel produksi yang sudah dioptimalkan:

```bash
npm run build
```

Hasilnya ditulis ke folder `dist/`. Vite memberi nama unik pada setiap file, jadi
`dist/index.html` harus di-deploy apa adanya bersama isi folder `dist/` lainnya.

Untuk mengecek hasil build sebelum di-deploy:

```bash
npm run preview
```


