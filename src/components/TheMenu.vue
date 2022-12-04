<script setup>
    import TextLine from '@/components/styleAdditions/TextLine.vue'
    import SubheaderMenu from '@/components/styleAdditions/SubheaderMenu.vue'
    import ItemMenu from '@/components/styleAdditions/ItemMenu.vue';
</script>

<template>
    <div class="container flex flex-col flex-1 max-w-4xl text-secondary-lighter">
        <TextLine color="secondary-lighter" style-text="header-style text-6xl" text="Menu" />
        <div class="my-5">
            <SubheaderMenu name="Hamburgers" />
            <ItemMenu name="Fargo Burger" price="11$" />    
            <ItemMenu name="Fargo Burger XL" price="14$" />    
            <ItemMenu name="Fargo Burger 2XL" price="17$" />    
            <ItemMenu name="Fargo Burger 3XL" price="20$" />    
            <ItemMenu name="Fargo Burger 4XL" price="23$" />    
            <ItemMenu name="Fargo Burger RazorviEbalo" price="2022$" />    
        </div>
        <div class="flex justify-between my-5">
            <div class="w-[47%]">
                <SubheaderMenu name="Side Menu" />
                <ItemMenu name="Fargo Onion Rings" price="7$" />    
                <ItemMenu name="Fargo Ping Pong" price="8$" />    
                <ItemMenu name="Fargo Potatoes" price="17$" />    
            </div>
            <div class="w-[47%]">
                <SubheaderMenu name="Drinks" />
                <ItemMenu name="Fargo Coffee" price="4$" />    
                <ItemMenu name="Fargo Cola" price="3$" />    
                <ItemMenu name="Fargo Beer" price="5$" />    
                <ItemMenu name="Fargo Vodka" price="10$" />    
            </div>
        </div>
        <div class="my-5 mb-14 flex justify-center">
            <button class="header-style bg-secondary-lighter p-4 px-10 font-bold text-xl text-primary-light hover:bg-secondary-light">MENU DOWNLOAD</button>
        </div>
    </div>
</template>