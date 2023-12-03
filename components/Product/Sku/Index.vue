<template>
    <div>
        <ProductSkuItem
            v-for="(item, idx) in items"
            :key="item.id"
            :item="item"
        />
    </div>
</template>

<script setup lang="ts">

const items = [
    {
        id: 'whsdhf1',
        groupName: 'Цвет',
        type: 'images',
        elements: [
            {
                id: 'gallery-item1',
                title: 'Aliexpress',
                imgUrl: 'https://source.unsplash.com/random/216x216?sig=1',
            },
            {
                id: 'gallery-item2',
                title: 'Мобильные телефоны',
                imgUrl: 'https://source.unsplash.com/random/216x216?sig=2',
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
        ],
    },
    {
        id: 'lhghg2',
        groupName: 'Длинна',
        type: 'buttons',
        elements: [
            {
                id: 'item1',
                title: '10 см',
            },
            {
                id: 'item2',
                title: '12 см',
            },
            {
                id: 'item3',
                title: '15 см',
            },
            {
                id: 'item4',
                title: '20 см',
            },
            {
                id: 'item5',
                title: '25 см',
            },
            
        ],
    }
]
</script>
