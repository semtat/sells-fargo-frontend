<script setup>
    import TheHeader from '@/components/TheHeader.vue'
    import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
    <div class="min-h-screen w-screen flex flex-col justify-between items-center bg-secondary-darker">
        <TheHeader />
        <router-view></router-view>
        <TheFooter />
    </div>
</template>