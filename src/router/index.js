import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.store'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/LoginView.vue')
        },
        {
            path: '/',
            component: () => import('@/views/DefaultView.vue'),
            children: [
                {
                    path: '/',
                    component: () => import('@/components/TheHome.vue'),
                },
                {
                    path: '/about',
                    component: () => import('@/components/TheAbout.vue'),
                },
                {
                    path: '/menu',
                    component: () => import('@/components/TheMenu.vue'),
                },
                {
                    path: '/info',
                    component: () => import('@/components/TheInfo.vue'),
                },
                {
                    path: '/sells',
                    component: () => import('@/components/TheSells.vue'),
                }
            ]
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: () => import('@/views/404View.vue')
        },
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