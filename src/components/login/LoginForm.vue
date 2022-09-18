<script setup>
    import { ref } from 'vue'
    import { useAuthStore } from '@/stores/auth.store'
    
    const username = ref('')
    const password = ref('')

    const errorUsername = ref(false)
    const errorPassword = ref(false)
    
    function onSubmit() {
        errorUsername.value = username.value === '' ? true : false
        errorPassword.value = password.value === '' ? true : false
        
        if (!errorUsername.value && !errorPassword.value) {
            const authStore = useAuthStore()
            return authStore.login(username.value, password.value)
        }
    }
</script>

<template>
    <form @submit.prevent="onSubmit">
        <div>
            <input v-model="username" id="username" name="username" type="text" placeholder="username"
                class="input-login" :class="{'bg-red-50': errorUsername}"/>
            <input v-model="password" id="password" name="password" type="password" placeholder="password" 
                class="input-login" :class="{'bg-red-50': errorPassword}"/>
            <button type="submit" 
                class="relative flex mb-4 w-full justify-center bg-green-600 p-4 text-white hover:bg-green-700">
                <span>LOGIN</span>
            </button>
            <div class="text-center text-zinc-400">
                <span>Not registered?</span> <a href="#" class="text-green-500 hover:text-green-600">Create an account</a>
            </div>
        </div>
    </form>
</template>