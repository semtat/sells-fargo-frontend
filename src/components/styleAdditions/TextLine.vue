<script setup>
    import { defineProps } from 'vue'
    
    const props = defineProps({
        text: String,
        color: String,
        styleText: String
    })

    function typeColor(attr = 'text') {
        return (attr === 'text') ? `text-${props.color}` : `bg-${props.color}`
    }
</script>

<template>
    <div class="flex justify-center items-center pt-5">
        <div :class="typeColor('bg')" class="w-full h-0.5"></div>
        <span :class="[props.styleText, typeColor()]" 
            class="mx-5 text-center font-bold whitespace-nowrap">
            {{ props.text }}
        </span>
        <div :class="typeColor('bg')" class="w-full h-0.5"></div>
    </div>
</template>