<template>
    <div class="flex flex-col">
        <div class="w-full mb-1">
            <h1 class="text-[15px] max-h-[90px] font-medium leading-4 line-clamp-2 text-ellipsis overflow-hidden">{{ desc.title }}</h1>
        </div>
        <div class="flex mb-2">
            <AppRating :rating="rating" :reviews="reviews" :size="size"/>
            <span class="ml-2 text-xs leading-4 whitespace-nowrap">{{ desc.buyCount }} купили</span>
        </div>
        <div class="flex items-center gap-2 text-[#2964c5] text-[15px] leading-4">
            <RouterLink to="/">Описание</RouterLink>
            <RouterLink to="/">Характеристики</RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IProductDescriptionProps } from '@/types';

const props = defineProps<IProductDescriptionProps>()
const { desc } = toRefs(props)
const { rating, reviews, size } = toRefs(desc.value.rating)
</script>
