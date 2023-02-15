import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/home.vue'
import Stats from '../pages/stats.vue'
import ContactIndex from '../pages/contact-index.vue'
import ContactDetails from '../pages/contact-details.vue'
import ContactEdit from '../pages/contact-edit.vue'

const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contacts',
      component: ContactIndex
    },
    {
      path: '/contact/:_id',
      component: ContactDetails,
    },
    {
      path: '/contact/edit/:_id?',
      component: ContactEdit,
    },
    {
      path: '/stats',
      component: Stats,
    },
  ]
}

const router = createRouter(routerOptions)

export default router
