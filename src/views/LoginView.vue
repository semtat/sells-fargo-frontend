<script setup>
    import { watch } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useAuthStore } from '@/stores/auth.store'
    import LoginForm from '@/components/login/LoginForm.vue'
    import TheNotification from '@/components/TheNotification.vue'

    const name = `${import.meta.env.VITE_NAME_COMPANY}`

    const store = useAuthStore()
    const { errorRequest } = storeToRefs(store)
    
    watch(
        () => errorRequest,
        () => {
            if (store.errorRequest.type === 'log') {
                console.log(store.errorRequest.data)
            }
        },
        { deep: true }
    )
</script>

<template>
    <div class="flex w-screen h-screen bg-zinc-800 items-center justify-center">
        <template v-if="errorRequest.type === 'alert'">
            <TheNotification type="alert-warning" :data="errorRequest.data"/>
        </template>
        <div class="relative w-full shadow-2xl max-w-md p-10 border bg-zinc-700 border-zinc-600">
            <div class="logo-style absolute uppercase -top-16 text-5xl left-0 w-full text-center text-zinc-300">{{ name }}</div>
            <LoginForm />
        </div>
    </div>
</template>