# Simple Journey

Corporate website for **Simple Journey**, an IT solutions company. Built as a single-page
application covering home, services, products, careers, about, and contact pages, with a
floating chat widget that offers direct contact channels (live chat, phone, email, SMS).

- Fully responsive from 360px phones up to wide desktops
- Scroll-driven animations and pinned sections on the home page

## Tech Stack

| Technology | Version | Purpose |
| --- | --- | --- |
| [Vue](https://vuejs.org/) | 3.5.43 | UI framework |
| [Vue Router](https://router.vuejs.org/) | 5.3.1 | Client-side routing |
| [Pinia](https://pinia.vuejs.org/) | 4.0.3 | State management (products, careers, animation index) |
| [GSAP](https://gsap.com/) | 3.15.0 | Scroll and timeline animations |
| [Vite](https://vite.dev/) | 8.3.0 | Dev server and bundler |
| [Tailwind CSS](https://tailwindcss.com/) | 4.3.3 | Utility-first CSS |
| [@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue) | 6.0.9 | Compiles Vue single-file components |

Versions above are the ones actually installed in this repository.

## Requirements

- **Node.js** `^20.19.0` or `>=22.12.0` — required by Vite 8. Verified on Node 24.18.1.
- **npm** 10 or newer (bundled with Node.js).

Check your version:

```bash
node -v
npm -v
```

## Installation

```bash
git clone <repository-url>
cd simple-jurney
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

The site is served at **http://localhost:5173** with hot module replacement — edits to `.vue`,
`.js`, and `.css` files apply instantly in the browser.

The dev server also binds to your local network (`server.host: true` in `vite.config.js`).
That means you can open the site from a phone on the same Wi-Fi to check mobile layouts, and
use the printed LAN address in the terminal.

### Available Scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `vite` | Start the development server with hot module replacement |
| `build` | `vite build` | Build the production bundle into `dist/` |
| `preview` | `vite preview` | Serve the production build locally to verify it |

## Project Structure

```
simple-jurney/
├── index.html                  # Entry HTML, loads main.js and external CDN scripts
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite config: Vue + Tailwind plugins, dev server host
├── public/                     # Static assets served at the root (33 files)
│   ├── sji.svg                 # Favicon
│   ├── logo.png, arrow.png, rectangle.png
│   └── *.webp, *.jpg, *.webm   # Hero backgrounds, product images, videos
└── src/
    ├── main.js                 # App bootstrap and global CSS import order
    ├── App.vue                 # Root component, mounts RouterView and ChatWidget
    ├── assets/css/
    │   ├── tailwind.css        # Tailwind entry (theme + utilities)
    │   └── index-ffUjCuH-.css  # Compiled stylesheet shipped with the original build
    ├── components/             # Reusable UI, mounted per view
    │   ├── Navbar.vue
    │   ├── AppFooter.vue
    │   ├── ChatWidget.vue      # Floating contact button and channel stack
    │   ├── ContactButton.vue
    │   ├── CollaborateSection.vue
    │   ├── ProductsSection.vue
    │   ├── OtherProducts.vue
    │   ├── ProductCard.vue
    │   ├── ProductDetailContent.vue
    │   └── Statement.vue
    ├── directives/
    │   └── index.js            # v-fade-viewport and v-fade-down-viewport
    ├── router/
    │   └── index.js            # Route table, lazy-friendly static imports
    ├── stores/                 # Pinia stores
    │   ├── products.js         # Product catalogue (9 items)
    │   ├── careers.js          # Job openings (5 items)
    │   └── animate.js          # Shared animation state
    ├── styles/                 # Project-level stylesheets
    │   ├── responsive.css      # Responsive overrides
    │   └── fixes.css           # Small targeted corrections
    └── views/                  # One file per page
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

## Routes

All routes are defined in `src/router/index.js`.

| Path | Name | View |
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

## Production Build

Create an optimised production bundle:

```bash
npm run build
```

The output is written to `dist/`. Vite fingerprints filenames, so `dist/index.html` should be
deployed as-is alongside the rest of `dist/`.

Preview the built output before deploying:

```bash
npm run preview
```

