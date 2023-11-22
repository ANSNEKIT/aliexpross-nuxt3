<template>
    <LayoutMain>
        <AppBreadcrumbs class="mt-2" :items="items"/>
    </LayoutMain>

</template>

<script setup lang="ts">
import LayoutMain from '@/layouts/LayoutMain.vue';

const items = [
    {
        id: 'bread1',
        title: 'Aliexpress',
        link: '/',
    },
    {
        id: 'bread2',
        title: 'Мобильные телефоны',
        link: '/categoriy/24/mobile-phones/',
    },
    {
        id: 'bread3',
        title: 'Аксессуары для мобильных телефонов',
        link: '/categoriy/688/mobile-phones-accessories/',
    },
    {
        id: 'bread4',
        title: 'Протекторы для камеры',
        link: '/categoriy/123/mobile-phone-camera-protectors/',
    },
];
</script>

<style scoped>

</style>