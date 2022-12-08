<script setup>
    import { defineProps } from 'vue'
    
    const props = defineProps({
        name: String,
        price: String
    })
</script>

<template>
    <div class="flex justify-between w-full my-5 border-b border-secondary-lighter border-dashed">
        <span class="header-style text-2xl">{{ props.name }}</span>
        <span class="header-style text-2xl text-primary-light">{{ props.price }}</span>
    </div>
</template>