<script setup>
    import { ref, onMounted, defineProps } from 'vue'

    const props = defineProps({
        type: String,
        data: String
    })
    const active = ref(false)
    
    function animateAlert() {
        setTimeout(() => {
            active.value = true
            setTimeout(() => {
                active.value = false
            }, 3500)
        }, 0)
    }

    onMounted(() => {
        animateAlert()
    })
</script>

<template>
    <div v-if="props.type === 'alert-warning'" 
        class="absolute top-0 w-full -z-10 opacity-0 transition-all ease-linear delay-500 text-center p-5 bg-secondary"
        :class="{'z-10 opacity-100': active}">
        <span class="text-secondary-darkest font-bold">{{ props.data }}</span>
    </div>
</template>