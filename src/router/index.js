import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "/auth"
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthorizationView.vue')
    }
  ]
})

export default router
