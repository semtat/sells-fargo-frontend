<script setup>
    import { watch } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useAuthStore } from '@/stores/auth.store'
    import LoginForm from '@/components/login/LoginForm.vue'
    import TheNotification from '../components/TheNotification.vue'

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
    <div class="flex w-screen h-screen bg-green-500 items-center justify-center">
        <template v-if="errorRequest.type === 'alert'">
            <TheNotification type="alert-warning" :data="errorRequest.data"/>
        </template>
        <div class="w-full shadow-2xl max-w-md p-10 bg-white">
            <LoginForm />
        </div>
    </div>
</template>