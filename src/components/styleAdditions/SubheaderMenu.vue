<script setup>
    import { defineProps } from 'vue'
    
    const props = defineProps({
        name: String
    })
</script>

<template>
    <span class="header-style my-10 font-bold text-3xl border-b border-primary-light pl-2 pr-10">{{ props.name }}</span>
</template>