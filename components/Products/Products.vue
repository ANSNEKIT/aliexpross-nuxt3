<template>
    <BaseAppContainer>
        <div class="relative mb-14">
            <BaseAppTabs :tabs="tabs" is-fixed position="top" />
            <ul class="grid grid-cols-6 gap-x-3 gap-y-4 mb-4">
                <ProductsProductCard
                    v-for="(product, idx) in products"
                    :key="product.id"
                    :product="product"
                />
            </ul>
            <button class="w-full py-3 px-5 bg-neutral-200 text-black text-xl font-bold rounded-full hover:bg-neutral-300">Показать ещё</button>
        </div>
    </BaseAppContainer>
</template>

<script setup lang="ts">

const tabs = [
    {
        title: 'Топ-товары',
        value: 'top-products'
    },
    {
        title: 'Рекомендуем вам',
        value: 'recomendation'
    }
]
const products = [
    {
        id: 'asdfasfd1',
        title: 'Полотенце из микрофибры самое настоящее быстросохнущее красное большое качество топ',
        price: 294,
        urlImg: 'https://source.unsplash.com/random/216x216?sig=1',
        rating: 4.7,
        buyCount: 1,
        isTop: true,
        deliveryDays: '30',
        isInstant: true,
        isRecomendation: true,
    },
    {
        id: 'wehjsg2',
        title: 'Полотенце из микрофибры',
        price: 294,
        urlImg: 'https://source.unsplash.com/random/400x400?sig=2',
        rating: 4.7,
        buyCount: 241,
        isTop: true,
        deliveryDays: '30',
        isInstant: false,
        isRecomendation: false,
    },
    {
        id: 'ashdhn3',
        title: 'Полотенце из микрофибры',
        price: 294,
        urlImg: 'https://source.unsplash.com/random/500x500?sig=3',
        rating: 4.7,
        buyCount: 241,
        isTop: true,
        deliveryDays: '30',
        isInstant: false,
        isRecomendation: false,
    },
    {
        id: 'fjdgs4',
        title: 'Полотенце из микрофибры',
        price: 294,
        urlImg: 'https://source.unsplash.com/random/216x216?sig=4',
        rating: 4.7,
        buyCount: 241,
        isTop: true,
        deliveryDays: '30',
        isInstant: false,
        isRecomendation: false,
    },
    {
        id: 'djldkjg5',
        title: 'Полотенце из микрофибры',
        price: 294,
        urlImg: 'https://source.unsplash.com/random/216x216?sig=5',
        rating: 4.7,
        buyCount: 241,
        isTop: true,
        deliveryDays: '30',
        isInstant: false,
        isRecomendation: false,
    },
    {
        id: 'dlhklsdg6',
        title: 'Полотенце из микрофибры',
        price: 294,
        urlImg: 'https://source.unsplash.com/random/216x216?sig=6',
        rating: 4.7,
        buyCount: 241,
        isTop: true,
        deliveryDays: '30',
        isInstant: false,
        isRecomendation: false,
    },
    {
        id: 'dlhklsdg6',
        title: 'Полотенце из микрофибры',
        price: 294,
        urlImg: 'https://source.unsplash.com/random/390x390?sig=7',
        rating: 4.7,
        buyCount: 241,
        isTop: true,
        deliveryDays: '30',
        isInstant: false,
        isRecomendation: false,
    },
]
</script>
