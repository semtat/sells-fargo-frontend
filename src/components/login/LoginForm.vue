<script setup>
    import { ref } from 'vue'
    import { useAuthStore } from '@/stores/auth.store'

    const username = ref('')
    const password = ref('')

    const errorUsername = ref(false)
    const errorPassword = ref(false)
    
    function checkError(e) {
        const res = (e.target.value === '') ? true : false 
        
        if (e.target.name === 'username') {
            errorUsername.value = res
        } else if (e.target.name === 'password') {
            errorPassword.value = res
        }
    }
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
            <input @input="checkError" v-model="username" id="username" name="username" type="text" placeholder="username" autocomplete="off"
                class="input-login" :class="{'input-error': errorUsername}"/>
            <input @input="checkError" v-model="password" id="password" name="password" type="password" placeholder="password" 
                class="input-login" :class="{'input-error': errorPassword}"/>
            <button type="submit" 
                class="relative flex mb-4 w-full justify-center bg-primary p-4 text-secondary-lighter hover:bg-primary-dark">
                <span>LOGIN</span>
            </button>
            <div class="text-center text-secondary">
                <span>Not registered?</span> <a href="#" class="text-primary-light hover:text-primary">Create an account</a>
            </div>
        </div>
    </form>
</template>

<style scoped>
    .input-error {
        border-color:indianred;
    }
    .input-error:focus {
        border-color:indianred;
    }
</style>