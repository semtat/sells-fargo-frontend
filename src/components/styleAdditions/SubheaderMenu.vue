<script setup>
    import { defineProps } from 'vue'
    
    const props = defineProps({
        name: String
    })
</script>

<template>
    <span class="header-style my-10 font-bold text-3xl border-b border-yellow-600 pl-2 pr-10">{{ props.name }}</span>
</template>