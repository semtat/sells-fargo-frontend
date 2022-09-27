import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { router } from '@/router/index'
import { getRequest } from '../helpers/request'
import { getCookie, setCookie, deleteCookie } from '@/helpers/cookies'

const baseLoginUrl = `${import.meta.env.VITE_API_LOGIN_URL}`

export const useAuthStore = defineStore('auth', () => {
    const userSession = ref(getCookie('session')) 
    const returnUrl = ref(null)
    const errorRequest = reactive({
        type: null,
        data: null
    })

    async function login(username, password) {
        [errorRequest.type, errorRequest.data] = [null, null]

        const params = {
            username: encodeURIComponent(username),
            password: encodeURIComponent(password)
        }
        
        const userSessionResponse = await getRequest(baseLoginUrl, params)
        
        if (userSessionResponse.type === 'ok') {
            userSession.value = userSessionResponse.data;
            document.cookie = setCookie('session', userSessionResponse.data)
            router.push(this.returnUrl || '/');
        } else {
            [errorRequest.type, errorRequest.data] = [userSessionResponse.type, userSessionResponse.data]
        }
    }

    function logout() {
        userSession.value = null;
        deleteCookie('session')
        router.push('/login');
    }

    return { userSession, returnUrl, errorRequest, login, logout }
})