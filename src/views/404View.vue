<script setup>
    const nameCompany = `${import.meta.env.VITE_NAME_COMPANY}`
</script>

<template>
    <div class="flex w-screen h-screen bg-secondary-darker items-center justify-center">
        <span class="logo-style absolute uppercase top-7 text-5xl left-0 w-full text-center text-secondary-light">
            {{ nameCompany }}
        </span>
        <div class="relative w-full max-w-md border bg-secondary-dark border-secondary-darklight">
            <span class="absolute -top-16 text-5xl left-0 w-full text-center text-primary-light">
                404 error
            </span>
            <span class="absolute top-3 text-3xl left-0 w-full text-center text-primary-light">
               page not found
            </span>
        </div>
    </div>
</template>