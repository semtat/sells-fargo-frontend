<script setup>
    import { useAuthStore } from '@/stores/auth.store';

    const authStore = useAuthStore()
    const currentSession = authStore.userSession
    
    function logout() {
        authStore.logout()
    }
</script>

<template>
    <div class="container h-screen flex flex-col items-center bg-green-500 text-green-900">
        <div class="m-5 text-3xl font-bold">Home page</div>
        <div class="mb-5 text-xl">{{ currentSession }}</div>
        <a @click="logout" href="#" class="text-green-600 hover:text-green-700">Logout</a>
    </div>
</template>