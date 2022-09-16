import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue')
        }
    ]
})

router.beforeEach(async(to) => {
    const publicPages = ['/login']
    const authRequired = !publicPages.includes(to.path)
    const authStore = useAuthStore()
    if (authRequired && !authStore.userSession) {
        authStore.returnUrl = to.fullPath
        return '/login'
    }
})