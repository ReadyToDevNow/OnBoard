import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('../views/AnalyticsViews.vue'),
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('../views/DiscoverViews.vue'),
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('../views/SalesViews.vue'),
    },
    {
      path: '/smartHome',
      name: 'smartHome',
      component: () => import('../views/SmartHomeViews.vue'),
    },
  ],
})

export default router
