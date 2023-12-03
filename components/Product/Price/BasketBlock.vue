<template>
    <div class="w-full h-min p-4 bg-neutral-50 rounded-lg border border-[#eee]">
        <div class="relative mb-4">
            <div class="text-[22px] text-black leading-7 font-semibold pr-9">{{ item.price }} &#x20bd;</div>
            <div class="flex gap-3 items-center text-[14px] leading-4 mb-2">
                <span class="text-neutral-600 line-through">{{ item.oldPrice }} &#x20bd;</span>
                <span class="text-black">-{{ item.percentDiscount }}%</span>
            </div>
            <div v-if="item.isCoupon" class="flex items-center w-fit px-1 text-[10px] leading-[18px] font-medium text-white bg-neutral-300 rounded">Есть купоны</div>
            <button class="flex items-center justify-center absolute top-0 right-0 rounded-full p-1.5 hover:bg-neutral-300">
                <IconsIconHeart class="w-5 h-5 min-w-4 min-h-4" />
            </button>
        </div>
        <div class="flex gap-1 text-[15px] leading-4 text-neutral-800 font-medium mb-3">
            <button class="flex w-1/2 items-center justify-center px-[16px] py-[12px] rounded-md bg-[#bef550]">В корзину</button>
            <button class="flex w-1/2 items-center justify-center px-[16px] py-[12px] rounded-md bg-[#ffe45b]">Купить сейчас</button>
        </div>
        <div v-if="item.count" class="text-center text-[11px] leading-3 text-neutral-600">
            Более {{ item.count }} штук в наличии
        </div>
    </div>
</template>

<script setup lang="ts">
import { IProductPriceProps } from "@/types"

const props = defineProps<IProductPriceProps>()
const { item } = toRefs(props)

</script>
