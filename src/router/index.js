import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PlaceholderPage from '../views/PlaceholderPage.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home',
        description: 'Welcome to the Home Page'
      }
    },
    {
      path: '/services',
      name: 'Services',
      component: PlaceholderPage,
      meta: {
        title: 'Services',
        description: 'Discover our Services'
      }
    },
    {
      path: '/products',
      name: 'Products',
      component: PlaceholderPage,
      meta: {
        title: 'Products',
        description: 'Explore our Products'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: PlaceholderPage,
      meta: {
        title: 'About',
        description: 'Learn more About Us'
      }
    },
    {
      path: '/career',
      name: 'Career',
      component: PlaceholderPage,
      meta: {
        title: 'Career',
        description: 'Career Page'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: PlaceholderPage,
      meta: {
        title: 'Contact',
        description: 'Get in touch with us'
      }
    },
    {
      path: '/products/:name',
      name: 'ProductDetail',
      component: PlaceholderPage,
      meta: {
        title: 'Product',
        description: 'Product Detail'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || (to.hash
      ? { el: to.hash, behavior: 'smooth' }
      : new Promise((resolve) => {
          setTimeout(() => {
            resolve({ top: 0, left: 0 })
          }, 0)
        }))
  }
})

router.afterEach((to) => {
  if (!to.hash) window.scrollTo(0, 0)
})

export default router