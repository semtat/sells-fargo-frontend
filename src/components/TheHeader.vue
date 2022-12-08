<script setup>
    import { useAuthStore } from '@/stores/auth.store'
    import TextLine from '@/components/styleAdditions/TextLine.vue'
    const name = `${import.meta.env.VITE_NAME_COMPANY}`
    const authStore = useAuthStore()
    
    function logout() {
        authStore.logout()
    }
</script>

<template>
    <div class="w-screen sticky top-0 flex flex-col items-center bg-secondary-lighter text-secondary-darker">
        <div class="w-full h-2 bg-secondary-darkest"></div>
        <header class="container max-w-4xl z-40">
            <TextLine color="secondary-darker" style-text="logo-style text-3xl uppercase" :text="name"/>
            <div class="text-center font-bold text-xs">Just thinking about it makes you hungry</div>
            <nav>
                <ul class="nav-list flex justify-around mt-4 mb-6 py-2 font-bold border-y border-dotted border-secondary-darker">
                    <li><router-link to="/">HOME</router-link></li>
                    <li><router-link to="/about">ABOUT</router-link></li>
                    <li><router-link to="/menu">MENU</router-link></li>
                    <li><router-link to="/info">INFO & MAP</router-link></li>
                    <li><router-link to="/sells">TODAY'S SELLS</router-link></li>
                    <li><a @click="logout" href="#">LOGOUT</a></li>
                </ul>
            </nav>
        </header>
        <div class="w-full h-6 bg-primary-light"></div>
    </div>
</template>