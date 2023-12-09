<template>
    <div class="w-[481px] flex relative">
        <ProductGalleryPreview :items="items" class="" />
        <div class="w-full rounded-3xl overflow-hidden">
            <img class="w-full h-full" src="https://source.unsplash.com/random/1000x1000?sig=1" alt="image">
        </div>
    </div>
</template>

<script setup lang="ts">

const items = [
    {
        id: 'gallery-item1',
        title: 'Aliexpress',
        imgUrl: 'http://random.imagecdn.app/500/150',
    },
    {
        id: 'gallery-item2',
        title: 'Мобильные телефоны',
        imgUrl: 'http://source.unsplash.com/random/216x216?sig=2',
    },
    {
        id: 'gallery-item3',
        title: 'Аксессуары для мобильных телефонов',
        imgUrl: 'https://source.unsplash.com/random/216x216?sig=3',
    },
    {
        id: 'gallery-item4',
        title: 'Протекторы для камеры',
        imgUrl: 'https://source.unsplash.com/random/216x216?sig=4',
    },
];
</script>

<style scoped>

</style>