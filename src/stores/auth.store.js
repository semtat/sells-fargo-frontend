import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { router } from '@/router/index'
import { getCookie, setCookie, deleteCookie } from '@/helpers/cookies'

const baseLoginUrl = `${import.meta.env.VITE_API_LOGIN_URL}`

export const useAuthStore = defineStore('auth', () => {
    const userSession = ref(getCookie('session')) 
    const returnUrl = ref(null) 

    async function login(username, password) {
        const params = {
            username: username,
            password: password
        }
        
        const userSessionResponse = await axios.get(baseLoginUrl, params)
        
        if (userSessionResponse.status === 200) {
            userSession.value = userSessionResponse.data;
            document.cookie = setCookie('session', userSessionResponse.data)
            router.push(this.returnUrl || '/');
        }
    }

    function logout() {
        this.userSession = null;
        deleteCookie('session')
        router.push('/login');
    }

    return { userSession, returnUrl, login, logout }
})