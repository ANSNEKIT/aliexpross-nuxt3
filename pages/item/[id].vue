<template>
    <LayoutMain>
        <AppBreadcrumbs class="my-2" :items="items"/>
        <AppContainer class="product-page" :style="isMobile ? '--areas:var(--mobile)' : '--areas:var(--desktop)'">
            <ProductDescription class="product-page__item" :desc="desc" style="--area:desc" />
            <ProductGallery class="product-page__item" style="--area:gallery" />
            <div class="product-page__item w-16 h-16 bg-red-600" style="--area:price">price</div>
            <div class="product-page__item w-16 h-16 bg-red-600" style="--area:sku">sku</div>
            <div class="product-page__item w-16 h-16 bg-red-600" style="--area:content">content</div>
        </AppContainer>
    </LayoutMain>
</template>

<script setup lang="ts">
import LayoutMain from '@/layouts/LayoutMain.vue';
import { useStore } from '~/stores/main';

const mainStore = useStore()

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
const desc = {
    id: 'asdfasdf1',
    title: "Автомобильный релейный разъем с клеммой 12 В/24 В/30 А",
    rating: {
        rating: 4.6,
        size: 16,
        reviews: 301,
    },
    buyCount: 102,
}
const isMobile = computed(() => mainStore.isMobileScreen)
</script>

<style lang="scss" scoped>

.product-page {
    --mobile: 
        "desc"
        "gallery"
        "sku"
        "price"
        "content";
    --desktop: 
        "gallery desc price"
        "gallery sku price"
        "content content price";
    width: 100%;
    display: grid;
    grid-template-columns: 481px 1fr 327px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: var(--areas);
    grid-gap: 16px 24px;
}
.product-page__item {
    grid-area: var(--area);
}
</style>